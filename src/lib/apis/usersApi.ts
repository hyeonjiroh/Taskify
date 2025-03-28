import { BASE_URL } from "@/lib/constants/urls";

export async function fetchUser({ token }: { token: string }) {
  const res = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return res.json();
}
