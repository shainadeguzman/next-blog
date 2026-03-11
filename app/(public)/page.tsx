import Hero from "./_components/Hero";
import FeaturedArticle from "./_components/FeaturedArticle";
import LatestArticles from "./_components/LatestArticles";
import NewsLetter from "./_components/NewsLetter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore tutorials, design notes, frontend ideas, and practical guides for modern web development.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturedArticle />
      <LatestArticles />
      <NewsLetter />
    </>
  );
}
