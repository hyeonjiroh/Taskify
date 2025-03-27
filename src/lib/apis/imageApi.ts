import { BASE_URL } from "@/lib/constants/urls";

export const postImage = async (
  variant: "task" | "profile",
  columnId?: number,
  file?: File
): Promise<string> => {
  if (!file) throw new Error("파일이 없습니다.");
  if (variant === "task" && columnId === undefined) {
    throw new Error("task variant requires columnId");
  }

  const formData = new FormData();
  formData.append("image", file);

  const url =
    variant === "task"
      ? `${BASE_URL}/columns/${columnId}/card-image`
      : `${BASE_URL}/users/me/image`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const status = response.status;
    if (status === 413) throw new Error("파일 크기가 너무 큽니다.");
    if (status === 401) throw new Error("인증에 실패했습니다.");
    throw new Error(`업로드 실패: ${status}`);
  }

  const data = await response.json();
  return variant === "task" ? data.imageUrl : data.profileImageUrl;
};
