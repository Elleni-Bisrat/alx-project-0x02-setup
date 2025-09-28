import { type ButtonProps } from "@/interfaces";

export default function Button({ label, size, shape }: ButtonProps) {
  // Map size to Tailwind classes
  const sizeClasses =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "medium"
      ? "px-4 py-2"
      : "px-6 py-3 text-lg";

  return (
    <button className={`bg-blue-500 text-white ${sizeClasses} ${shape}`}>
      {label}
    </button>
  );
}
