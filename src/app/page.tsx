"use client";
import React from "react";
import ProfileComponent from "@/components/Avatar";
import IntroComponent from "@/components/Profile";
import ProjectComponent from "@/components/Projects";
import SocialsComponent from "@/components/Socials";
import { motion, useScroll, useSpring } from "framer-motion";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="scroll-smooth">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <section className=" min-h-screen flex items-center justify-center  bg-zinc-950 text-sm text-zinc-50 antialiased md:text-base">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="text-center flex items-center justify-center max-w-screen-sm">
            <ProfileComponent />
            <IntroComponent />
          </div>
        </motion.div>
      </section>
      <section className="overflow-hidden">
        <motion.div initial={{ x: -50 }} whileInView={{ x: 0 }}>
          <ProjectComponent />
        </motion.div>
      </section>
      <section className="overflow-hidden bg-zinc-950 text-sm text-zinc-50">
        <SocialsComponent />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
