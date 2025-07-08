import Hero from "../components/Home/Hero";
import Questions from "@/components/Home/Questions";
import Why from "@/components/Home/Why";
import Consult from "@/components/Home/Consult";
import Mag from "@/components/Home/Mag";
import Market from "@/components/Home/Market";
import Roadmap from "@/components/Home/Roadmap";

export default function Home() {
  return (
    <div className="flex flex-col [&>div]:items-center gap-10">
      {/* Hero Section */}
      <Hero />

      {/* roadmap section */}
      <Roadmap />

      {/* about section */}
      <Why />
      {/* consultation section */}
      <Consult />

      {/* market section */}
      <Market />

      {/* information section */}
      <div></div>

      {/* mag sectdion */}
      <Mag />

      {/* question section */}
      <Questions />
    </div>
  );
}
