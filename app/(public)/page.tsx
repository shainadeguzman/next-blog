import { Metadata } from "next";
import Hero from "./_components/Hero";
import FeaturedArticle from "./_components/FeaturedArticle";
import BlogPosts from "./_components/BlogPosts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <>
      <Hero />
      <FeaturedArticle />
      <BlogPosts />
    </>
  );
}
