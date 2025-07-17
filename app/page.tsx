import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Home/Hero"), {
  loading: () => <div>Loading...</div>,
});
const Questions = dynamic(() => import("@/components/Home/Questions"), {
  loading: () => <div>Loading...</div>,
});
const Why = dynamic(() => import("@/components/Home/Why"), {
  loading: () => <div>Loading...</div>,
});
const Consult = dynamic(() => import("@/components/Home/Consult"), {
  loading: () => <div>Loading...</div>,
});
const Mag = dynamic(() => import("@/components/Home/Mag"), {
  loading: () => <div>Loading...</div>,
});
const Market = dynamic(() => import("@/components/Home/Market"), {
  loading: () => <div>Loading...</div>,
});
const Roadmap = dynamic(() => import("@/components/Home/Roadmap"), {
  loading: () => <div>Loading...</div>,
});
const Roadmap_mini = dynamic(() => import("@/components/Home/Roadmap_mini"), {
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return (
    <div className="flex flex-col [&>div]:items-center gap-10">
      {/* Hero Section */}
      <Hero />

      {/* roadmap section */}
      <Roadmap />
      <Roadmap_mini />

      {/* about section */}
      <Why />
      {/* consultation section */}
      <Consult />

      {/* market section */}
      <Market />

      {/* information section */}
      {/* <Information /> */}

      {/* mag sectdion */}
      <Mag />

      {/* question section */}
      <Questions />
    </div>
  );
}
