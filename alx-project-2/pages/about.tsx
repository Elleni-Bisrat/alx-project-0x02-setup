import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
export default function About() {
  return (
    <div className="space-x-2 p-6">
         <Header />
      <Button size="small" shape="rounded-sm" label="Small" />
      <Button size="medium" shape="rounded-md" label="Medium" />
      <Button size="large" shape="rounded-full" label="Large" />
    </div>
  );
}
