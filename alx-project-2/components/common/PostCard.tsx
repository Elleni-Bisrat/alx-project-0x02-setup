import { PostProps } from "@/interfaces";

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="font-bold">{title}</h2>
      <p>{body}</p>
      <small>User ID: {userId}</small>
    </div>
  );
}
