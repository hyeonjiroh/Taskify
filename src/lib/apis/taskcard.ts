import { BASE_URL } from "@/lib/constants/urls";

export async function fetchTaskCardDetail({
  token,
  id,
}: {
  token: string;
  id: number;
}) {
  const res = await fetch(`${BASE_URL}/cards/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return res.json();
}
