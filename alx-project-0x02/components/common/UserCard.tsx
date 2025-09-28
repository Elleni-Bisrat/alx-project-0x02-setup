import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="font-bold">{name}</h2>
      <p>Email: {email}</p>
      <p>City: {address.city}</p>
    </div>
  );
}
