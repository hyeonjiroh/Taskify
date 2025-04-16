import { BASE_URL } from "@/lib/constants/urls";

export async function fetchDashboardList({
  token,
  page,
  size,
}: {
  token: string;
  page: number;
  size: number;
}) {
  const res = await fetch(
    `${BASE_URL}/dashboards?navigationMethod=pagination&page=${page}&size=${size}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

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

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

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

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function putDashboard({
  token,
  title,
  color,
  id,
}: {
  token: string;
  title: string;
  color: string;
  id: number;
}) {
  const res = await fetch(`${BASE_URL}/dashboards/${id}`, {
    method: "PUT",
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

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function deleteDashboard({
  token,
  id,
}: {
  token: string;
  id: number;
}) {
  const res = await fetch(`${BASE_URL}/dashboards/${id}`, {
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

export async function fetchInvitationList({
  token,
  id,
  page,
  size,
}: {
  token: string;
  id: number;
  page: number;
  size: number;
}) {
  const res = await fetch(
    `${BASE_URL}/dashboards/${id}/invitations?page=${page}&size=${size}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function postInvitation({
  token,
  id,
  email,
}: {
  token: string;
  id: number;
  email: string;
}) {
  const res = await fetch(`${BASE_URL}/dashboards/${id}/invitations`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function deleteInvitation({
  token,
  dashboardId,
  invitationId,
}: {
  token: string;
  dashboardId: number;
  invitationId: number;
}) {
  const res = await fetch(
    `${BASE_URL}/dashboards/${dashboardId}/invitations/${invitationId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return null;
}
