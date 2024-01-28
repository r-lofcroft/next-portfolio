// ProfileComponent.jsx
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const ProfileComponent = () => {
  const constraintsRef = useRef(null);
  return (
    <div className="flex-none mr-6 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full flex-shrink-0 hidden lg:inline-block">
      <motion.div
        className="container bg-gradient-to-r from-20% from-emerald-400 to-yellow-300"
        ref={constraintsRef}
      >
        <motion.div className="item" drag dragConstraints={constraintsRef}>
          <Image
            className="relative z-10 inset-0 w-full h-full object-cover rounded-lg pointer-events-none"
            alt="Interactive profile picture"
            src="/profile.webp"
            width={142}
            height={142}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileComponent;
