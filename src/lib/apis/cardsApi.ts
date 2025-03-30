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

  return res.json();
}

export async function deleteCard({
  token,
  cardId,
}: {
  token: string;
  cardId: number;
}) {
  await fetch(`${BASE_URL}/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return null;
}
