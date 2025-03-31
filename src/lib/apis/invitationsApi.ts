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

export async function putInvitation({
  token,
  invitationId,
  inviteAccepted,
}: {
  token: string;
  invitationId: number;
  inviteAccepted: boolean;
}) {
  const res = await fetch(`${BASE_URL}/invitations/${invitationId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inviteAccepted,
    }),
  });

  return res.json();
}
