import { BASE_URL } from "@/lib/constants/urls";

export async function fetchUser({ token }: { token: string }) {
  const res = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}
