import { Comment } from "@/lib/types";

export default function CommentCard({ id, content, author }: Comment) {
  return (
    <div>
      <div>{id}</div>
      <div>{content}</div>
      <div>{author.nickname}</div>
      <div>{author.profileImageUrl}</div>
    </div>
  );
}
