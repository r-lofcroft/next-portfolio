"use client";
import React from "react";
import ProfileComponent from "../components/Avatar";
import IntroComponent from "../components/Profile";
import ProjectComponent from "../components/Projects";
import SocialsComponent from "@/components/Socials";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

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
      <section>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <ProjectComponent />
        </motion.div>
      </section>
      <section className=" bg-zinc-950 text-sm text-zinc-50">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <SocialsComponent />
          <Contact />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
