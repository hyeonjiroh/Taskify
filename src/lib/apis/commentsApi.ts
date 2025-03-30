import { BASE_URL } from "@/lib/constants/urls";

export async function postComment({
  token,
  content,
  cardId,
  columnId,
  dashboardId,
}: {
  token: string;
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}) {
  const res = await fetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
      cardId,
      columnId,
      dashboardId,
    }),
  });

  return res.json();
}

export async function fetchCommentList({
  token,
  size,
  cursorId,
  cardId,
}: {
  token: string;
  size: number;
  cursorId: number | null;
  cardId: number;
}) {
  let query = `size=${size}&cardId=${cardId}`;
  if (cursorId !== null) {
    query += `&cursorId=${cursorId}`;
  }

  const res = await fetch(`${BASE_URL}/comments?${query}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return res.json();
}
