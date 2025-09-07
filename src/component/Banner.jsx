import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import BannerVD from "../assets/dab.mp4";
import CustomButton from "./CustomButton";

const Banner = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src={BannerVD}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h1
          className="text-5xl md:text-5xl font-bold mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to Das and Bros Medias
        </motion.h1>

        <motion.p
          className="text-[15px] mb-6 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          We are a creative digital agency dedicated to building impactful brands
          through design, technology, and strategy.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Link to="/services">
            <CustomButton
              text="Get Started"
              className="bg-white text-black hover:bg-gray-100 hover:shadow-lg text-lg"
            />
          </Link>

          <Link to="/about">
            <CustomButton
              text="Learn More"
              className="text-white shadow-lg border border-white bg-transparent 
                         hover:bg-white hover:text-black text-lg"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
