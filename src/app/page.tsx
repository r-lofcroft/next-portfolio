"use client";
import React from "react";
import ProfileComponent from "@/components/Avatar";
import IntroComponent from "@/components/Profile";
import ProjectComponent from "@/components/Projects";
import SocialsComponent from "@/components/Socials";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <section className=" min-h-screen flex items-center justify-center  bg-zinc-950 text-sm text-zinc-50 antialiased md:text-base">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="text-center flex items-center justify-center max-w-screen-sm">
            <ProfileComponent />
            <IntroComponent />
          </div>
        </motion.div>
      </section>
      <section className="overflow-hidden">
        <AnimatePresence>
          <motion.div initial={{ x: -50 }} whileInView={{ x: 0 }}>
            <ProjectComponent />
          </motion.div>
        </AnimatePresence>
      </section>
      <section className="overflow-hidden bg-zinc-950 text-sm text-zinc-50">
        <motion.div initial={{ x: 50 }} whileInView={{ x: 0 }}>
          <SocialsComponent />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
