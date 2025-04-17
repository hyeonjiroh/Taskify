import { BASE_URL } from "@/lib/constants/urls";

export async function fetchColumnList({
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

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function postColumn({
  token,
  title,
  dashboardId,
}: {
  token: string;
  title: string;
  dashboardId: number;
}) {
  const res = await fetch(`${BASE_URL}/columns`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      dashboardId,
    }),
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function putColumn({
  token,
  title,
  columnId,
}: {
  token: string;
  title: string;
  columnId: number;
}) {
  const res = await fetch(`${BASE_URL}/columns/${columnId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function deleteColumn({
  token,
  columnId,
}: {
  token: string;
  columnId: number;
}) {
  const res = await fetch(`${BASE_URL}/columns/${columnId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return null;
}
