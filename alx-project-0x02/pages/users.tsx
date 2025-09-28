import { UserProps } from "@/interfaces";
import Card from "@/components/common/Card";

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map((user) => (
        <Card
          key={user.id}
          title={user.name}
          description={user.email}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UserProps[] = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
