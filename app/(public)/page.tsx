import { Metadata } from "next";
import HeroSection from "./_components/HeroSection";
import FeaturedArticle from "./_components/FeaturedArticle";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <>
      <HeroSection />
      <FeaturedArticle />
    </>
  );
}
