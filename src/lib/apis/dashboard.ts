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

export async function fetchDashboardColumn({
  token,
  id,
}: {
  token: string;
  id: string;
}) {
  const res = await fetch(`${BASE_URL}/columns?dashboardId=${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return res.json();
}

export async function fetchTaskCardList({
  token,
  id,
}: {
  token: string;
  id: number;
}) {
  const res = await fetch(`${BASE_URL}/cards?size=10&columnId=${id}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return res.json();
}
