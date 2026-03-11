type AboutCardProps = {
  title: string;
  description: string;
};

export default function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200       bg-white p-6 shadow-sm">
      <h2 className="font-semibold text-lg">{title}</h2>

      <p className="text-sm text-gray-600 mt-3 leading-7">{description}</p>
    </div>
  );
}
