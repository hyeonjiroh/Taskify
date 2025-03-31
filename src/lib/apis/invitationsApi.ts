import { BASE_URL } from "@/lib/constants/urls";

export async function fetchInvitationList({
  token,
  size,
  cursorId,
  title,
}: {
  token: string;
  size: number;
  cursorId: number | null;
  title: string;
}) {
  let query = `size=${size}`;
  if (cursorId !== null) {
    query += `&cursorId=${cursorId}`;
  }
  if (title !== "") {
    query += `&title=${title}`;
  }
  const res = await fetch(`${BASE_URL}/invitations?${query}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return res.json();
}
