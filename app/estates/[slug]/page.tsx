import { Metadata } from "next";
import SinglePage from "@/components/Estates/SinglePage/SinglePage";
// --- Metadata (runs on server, good for SEO)
export const metadata: Metadata = {
  title: "Chat Page | MyApp",
  description: "Start chatting with our AI-powered assistant!",
};

export default async function BlogPostPage() {
  return <SinglePage />;
}
