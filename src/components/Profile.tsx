import { motion } from "framer-motion";
import React from "react";

const IntroComponent = () => {
  return (
    <div className="lg:pt-10 lg:pb-10 lg:pl-20 p-0 ">
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <h1 className="inline-flex flex-col gap-1 font-display text-6xl font-bold leading-none md:text-[7rem] bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300">
          <span>Robin</span>
          <span>Williscroft</span>
        </h1>
      </motion.div>
      <p className="text-lg m-8">Web Developer | TypeScript Enthusiast</p>
      <p className="mt-2 opacity-40 md:mt-3 ml-20 mr-20">
        My primary focus centers on specializing in accessibility within web
        development. At Qmatic, I lead and build projects with a keen emphasis
        on crafting solutions that not only look impressive but also adhere to
        the highest standards of accessibility. In my downtime, you'll find me
        immersed in activities such as rock climbing, reading, and raiding in
        World of Warcraft.
      </p>
    </div>
  );
};

export default IntroComponent;
