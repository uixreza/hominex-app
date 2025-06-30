import Hero from "../components/Home/Hero";
import Questions from "@/components/Home/Questions";
import Why from "@/components/Home/Why";
import Consult from "@/components/Home/Consult";
import Mag from "@/components/Home/Mag";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <Hero />

      {/* roadmap section */}
      <div></div>

      {/* about section */}
      <Why />
      {/* consultation section */}
      <Consult />

      {/* market section */}
      <div></div>

      {/* information section */}
      <div></div>

      {/* mag sectdion */}
      <Mag />

      {/* question section */}
      <Questions />
    </div>
  );
}
