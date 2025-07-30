"use client";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MainSkeleton from "@/components/UI/skeleton/MainSkeleton";

const Hero = dynamic(() => import("../components/Home/Hero"), {
  loading: () => <MainSkeleton />,
});
const Questions = dynamic(() => import("@/components/Home/Questions"), {
  loading: () => null,
});
const Why = dynamic(() => import("@/components/Home/Why"), {
  loading: () => null,
});
const Consult = dynamic(() => import("@/components/Home/Consult"), {
  loading: () => null,
});
const Mag = dynamic(() => import("@/components/Home/Mag"), {
  loading: () => null,
});
const Market = dynamic(() => import("@/components/Home/Market"), {
  loading: () => null,
});
const Roadmap = dynamic(() => import("@/components/Home/Roadmap"), {
  loading: () => null,
});
const Roadmap_mini = dynamic(() => import("@/components/Home/Roadmap_mini"), {
  loading: () => null,
});

export default function Home() {
  const roadmapRef = useRef(null);
  const whyRef = useRef(null);
  const consultRef = useRef(null);
  const marketRef = useRef(null);
  const magRef = useRef(null);
  const questionRef = useRef(null);
  const isInView1 = useInView(roadmapRef, { once: true });
  const isInView2 = useInView(whyRef, { once: true });
  const isInView3 = useInView(consultRef, { once: true });
  const isInView4 = useInView(marketRef, { once: true });
  const isInView5 = useInView(magRef, { once: true });
  const isInView6 = useInView(questionRef, { once: true });
  return (
    <div className="flex flex-col [&>div]:items-center gap-10">
      {/* Hero Section */}
      <Hero />

      {/* roadmap section */}

      <motion.div
        ref={roadmapRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>
        <Roadmap />
        <Roadmap_mini />
      </motion.div>

      {/* about section */}
      <motion.div
        ref={whyRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>
        <Why />
      </motion.div>
      {/* consultation section */}

      <motion.div
        ref={consultRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>
        <Consult />
      </motion.div>
      {/* market section */}
      <motion.div
        ref={marketRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>
        <Market />
      </motion.div>
      {/* information section */}
      {/* <Information /> */}

      {/* mag sectdion */}
      <motion.div
        ref={magRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView5 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>
        <Mag />
      </motion.div>
      {/* question section */}

      <motion.div
        ref={questionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView6 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}>
        <Questions />
      </motion.div>
    </div>
  );
}
