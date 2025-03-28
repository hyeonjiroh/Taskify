import { BASE_URL } from "@/lib/constants/urls";

export async function fetchDashboardList(token: string) {
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

export async function fetchDashboard({
  token,
  id,
}: {
  token: string;
  id: string;
}) {
  const res = await fetch(`${BASE_URL}/dashboards/${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return res.json();
}

export async function postDashboard({
  token,
  title,
  color,
}: {
  token: string;
  title: string;
  color: string;
}) {
  const res = await fetch(`${BASE_URL}/dashboards`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      color,
    }),
  });

  return res.json();
}
