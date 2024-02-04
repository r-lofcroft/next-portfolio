import React, { useEffect, useRef } from "react";
import Contact from "./Contact";
import { motion, AnimatePresence } from "framer-motion";

const Modal: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const handleChildStateChange = (newState: boolean) => {
    setShowModal(newState);
  };

  return (
    <>
      <div
        className="opacity-40 hover:scale-105 hover:opacity-100"
        onClick={() => setShowModal(true)}
      >
        <p className="pointer-events-auto">Email</p>
      </div>
      <AnimatePresence>
        {showModal ? (
          <motion.div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pointer-events-none">
              <div
                ref={modalRef}
                className="relative w-auto my-6 mx-auto max-w-3xl pointer-events-auto "
              >
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-10">
                  <Contact onStateChange={handleChildStateChange} />
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Modal;
