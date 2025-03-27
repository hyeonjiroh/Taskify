import { BASE_URL } from "@/lib/constants/urls";

export async function fetchDashboardMember({
  token,
  id,
}: {
  token: string;
  id: string;
}) {
  const res = await fetch(
    `${BASE_URL}/members?page=1&size=20&dashboardId=${id}`,
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
