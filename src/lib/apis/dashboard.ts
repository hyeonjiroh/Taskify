import { BASE_URL } from "@/lib/constants/urls";

export async function fetchDashboards(token: string) {
  const res = await fetch(
    `${BASE_URL}/dashboards?navigationMethod=pagination&page=1&size=10`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  return res.json();
}
