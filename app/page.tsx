"use client";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
