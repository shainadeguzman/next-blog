export default function CardGrid({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) {
  return (
    <div className={`grid md:grid-cols-3 gap-6 ${classes ?? ""}`}>
      {children}
    </div>
  );
}
