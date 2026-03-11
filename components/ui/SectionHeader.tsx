type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  size?: "sm" | "lg";
};

export default function SectionHeader({
  label,
  title,
  description,
  action,
  size = "sm",
}: SectionHeaderProps) {
  const titleSize =
    size === "lg"
      ? "text-4xl font-bold mt-2"
      : "text-2xl md:text-3xl font-semibold mt-1";

  return (
    <div className="flex items-end justify-between gap-4 mb-8">
      <div className="max-w-2xl">
        {label && <p className="text-sm font-medium text-gray-500">{label}</p>}

        <h2 className={`${titleSize}`}>{title}</h2>

        {description && (
          <p className="text-gray-600 mt-4 leading-8">{description}</p>
        )}
      </div>

      {action}
    </div>
  );
}
