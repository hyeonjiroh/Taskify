import { BASE_URL } from "@/lib/constants/urls";

export async function fetchTaskCardList({
  token,
  size,
  cursorId,
  columnId,
}: {
  token: string;
  size: number;
  cursorId: number | null;
  columnId: number;
}) {
  let query = `size=${size}&columnId=${columnId}`;
  if (cursorId !== null) {
    query += `&cursorId=${cursorId}`;
  }

  const res = await fetch(`${BASE_URL}/cards?${query}`, {
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

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function putCard({
  token,
  cardId,
  columnId,
  assigneeUserId,
  title,
  description,
  dueDate,
  tags,
  imageUrl,
}: {
  token: string;
  cardId: number;
  columnId: number;
  assigneeUserId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string | null;
}) {
  const res = await fetch(`${BASE_URL}/cards/${cardId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      columnId,
      assigneeUserId,
      title,
      description,
      dueDate,
      tags,
      imageUrl,
    }),
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.json();
}

export async function deleteCard({
  token,
  cardId,
}: {
  token: string;
  cardId: number;
}) {
  const res = await fetch(`${BASE_URL}/cards/${cardId}`, {
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

export async function createCard({
  token,
  assigneeUserId,
  dashboardId,
  columnId,
  title,
  description,
  dueDate,
  tags,
  imageUrl,
}: {
  token: string;
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl: string | null;
}) {
  type CreateCardPayload = {
    assigneeUserId: number;
    dashboardId: number;
    columnId: number;
    title: string;
    description: string;
    dueDate: string;
    tags: string[];
    imageUrl?: string;
  };

  const payload: CreateCardPayload = {
    assigneeUserId,
    dashboardId,
    columnId,
    title,
    description,
    dueDate,
    tags,
  };

  if (imageUrl) {
    payload.imageUrl = imageUrl;
  }

  const res = await fetch(`${BASE_URL}/cards`, {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return await res.json();
}
