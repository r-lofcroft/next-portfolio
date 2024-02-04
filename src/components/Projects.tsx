// ProjectComponent.jsx
import React from "react";

const ProjectComponent = () => {
  return (
    <div className="mx-auto max-w-screen-md	p-10 md:p-20">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2023 - Present
          </time>
          <a
            href="https://www.qmatic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out hover:text-emerald-500">
              Qmatic
            </h3>
          </a>
          <h4 className="text-s font-semibold text-gray-900 dark:text-gray-700 ">
            Software Developer
          </h4>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            I work on the frontend for the 'Experience Cloud' solution using Vue
            and TypeScript. I refine our design system with Storybook, creating
            reusable components for seamless and engaging user interfaces. My
            work on the Experience Cloud provides insights into modern web
            technologies, fueling a passion for delivering user experiences that
            blend aesthetics with functionality.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2022 - December 2022
          </time>
          <a
            href="https://www.lynkco.com/sv-se"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out hover:text-emerald-500">
              Lync & Co
            </h3>
          </a>
          <h4 className="text-s font-semibold text-gray-900 dark:text-gray-700 ">
            Frontend Web Developer
          </h4>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            At Lynk & Co I optimized the site's customer journey using React.
            Collaborating with design and back-end teams, I enhanced site
            features, refining my skills in React and creating user-friendly,
            responsive web application.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August - October 2021
          </time>
          <a
            href="https://www.linkedin.com/company/vision-a-unity/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out hover:text-emerald-500">
              Vision A Unity
            </h3>
          </a>
          <h4 className="text-s font-semibold text-gray-900 dark:text-gray-700 ">
            Frontend Developer
          </h4>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            As a Frontend Developer intern, I crafted a Progressive Web App
            (PWA) with Ionic React. Using React Three Fiber and ThreeJS, I
            incorporated a 3D model, simplifying doctor's appointment booking
            through a .NET API. This project deepened my understanding of modern
            web development, honing my skills in React and ThreeJS.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2020 - July 2022
          </time>
          <a
            href="https://www.iths.se/utbildningar/frontend/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300 ease-in-out hover:text-emerald-500">
              IT- Högskolan
            </h3>
          </a>
          <h4 className="text-s font-semibold text-gray-900 dark:text-gray-700 ">
            Vocational Degree
          </h4>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Graduated specializing in Frontend Development.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default ProjectComponent;
