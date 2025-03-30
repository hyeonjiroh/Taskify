import { BASE_URL } from "@/lib/constants/urls";

export async function fetchDashboardMember({
  token,
  page,
  size,
  id,
}: {
  token: string;
  page: number;
  size: number | null;
  id: string;
}) {
  let query = `page=${page}&dashboardId=${id}`;
  if (size !== null) {
    query += `&size=${size}`;
  }

  const res = await fetch(`${BASE_URL}/members?${query}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return res.json();
}
