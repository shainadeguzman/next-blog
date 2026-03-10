import { Metadata } from "next";
import HeroSection from "./_components/HeroSection";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <>
      <HeroSection />
    </>
  );
}
