import { UserInfo } from "@/lib/types";
import { BASE_URL } from "@/lib/constants/urls";
import { postImage } from "@/lib/apis/imageApi";

type FetchOptions<B = unknown> = {
  token: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: B;
  isMultipart?: boolean;
};

async function fetchAPI<B, R>(
  endpoint: string,
  options: FetchOptions<B>
): Promise<R> {
  const { token, method = "GET", body, isMultipart = false } = options;

  const headers: HeadersInit = {
    Authorization: `Bearer ${token}`,
  };

  if (!isMultipart) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: isMultipart
      ? (body as FormData)
      : body
        ? JSON.stringify(body)
        : undefined,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      JSON.stringify({ status: response.status, message: errorData.message })
    );
  }

  if (response.status === 204) {
    return undefined as R;
  }

  return response.json() as R;
}

export async function fetchUser({
  token,
}: {
  token: string;
}): Promise<UserInfo> {
  return fetchAPI<never, UserInfo>("/users/me", { token });
}

export async function updateProfile({
  token,
  nickname,
  profileImageUrl,
}: {
  token: string;
  nickname?: string;
  profileImageUrl?: string;
}): Promise<UserInfo> {
  const body: { nickname?: string; profileImageUrl?: string } = {};
  if (nickname !== undefined) body.nickname = nickname;
  if (profileImageUrl !== undefined) body.profileImageUrl = profileImageUrl;

  return fetchAPI<{ nickname?: string; profileImageUrl?: string }, UserInfo>(
    "/users/me",
    {
      token,
      method: "PUT",
      body,
    }
  );
}

export async function updatePassword({
  token,
  password,
  newPassword,
}: {
  token: string;
  password: string;
  newPassword: string;
}): Promise<void> {
  return fetchAPI<{ password: string; newPassword: string }, void>(
    "/auth/password",
    {
      token,
      method: "PUT",
      body: { password, newPassword },
    }
  );
}

export async function uploadProfileImage({
  token,
  image,
}: {
  token: string;
  image: File;
}): Promise<{ profileImageUrl: string }> {
  const profileImageUrl = await postImage("profile", undefined, image, token);
  return { profileImageUrl };
}
