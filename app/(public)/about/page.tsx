import SectionHeader from "@/components/ui/SectionHeader";
import AboutCard from "@/components/ui/AboutCard";
import CardGrid from "@/components/ui/CardGrid";

const aboutCards = [
  {
    title: "Clean Reading",
    description:
      "Minimal distractions and strong typography for better content focus.",
  },
  {
    title: "Modern Frontend",
    description:
      "Topics include React, Next.js, Tailwind CSS, and scalable UI patterns.",
  },
  {
    title: "Practical Content",
    description:
      "Content is written to be simple, useful, and easier to apply in real projects.",
  },
];

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionHeader
        label="About"
        title="A simple blog for frontend learning and ideas"
        description="NextBlog is a content-focused blog platform designed for developers who want a clean reading experience.
        It shares articles about Next.js, React, UI design, productivity, and modern frontend workflows."
        size="lg"
      />
      <CardGrid classes="mt-12">
        {aboutCards.map((card) => (
          <AboutCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        ))}
      </CardGrid>
    </section>
  );
}
