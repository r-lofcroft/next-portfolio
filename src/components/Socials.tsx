import React from "react";
import Modal from "./Modal";

const SocialsComponent = () => {
  return (
    <section id="projects" className=" py-16 md:py-28">
      <div className="mx-auto max-w-screen-xl px-6 md:px-10">
        <header className="mx-auto max-w-screen-md">
          <h3 className="font-display text-4xl font-semibold md:text-6xl">
            Send me a ping!
          </h3>
          <p className="mx-4 mt-2 text-lg opacity-40 md:mx-auto md:text-2xl">
            The help you need, when you need it
          </p>
        </header>
        <div className="flex justify-center -mx-6 mt-6 md:mx-0">
          <div className="inline-block  whitespace-nowrap md:!animate-none">
            <div className=" whitespace-nowrap flex-wrap items-center justify-center gap-x-10 gap-y-6 md:flex">
              <a
                href="https://www.linkedin.com/in/robin-williscroft/"
                target="_blank"
                className="mx-4 inline-flex align-middle opacity-40 transition hover:scale-105 hover:opacity-100 md:mx-0"
                title="LinkedIn"
              >
                <p>LinkedIn</p>
              </a>
              <a
                href="https://github.com/r-lofcroft"
                target="_blank"
                className="mx-4 inline-flex align-middle opacity-40 transition hover:scale-105 hover:opacity-100 md:mx-0"
                title="LinkedIn"
              >
                <p>Github</p>
              </a>
              <a
                href="https://www.goodreads.com/user/show/146280090-robin-williscroft"
                target="_blank"
                className="mx-4 inline-flex align-middle opacity-40 transition hover:scale-105 hover:opacity-100 md:mx-0"
                title="LinkedIn"
              >
                <p>GoodReads</p>
              </a>
              <span className="mx-4 inline-flex align-middle  transition cursor-pointer md:mx-0">
                <Modal />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsComponent;
