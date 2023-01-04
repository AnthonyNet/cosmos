"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../styles";
import { slideIn, textVariant } from "../components/animations/motion";

const style_ = {
  heroHeading:
    "font-bold lg:text-[144px] md:text-[100px] text-[10vw] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase font ",
  div_Image:
    "absolute w-full h-[300px] hero-gradient rounded-tl-[140px] rounded-r-[80px]  z-[0] -top-[30px]",
  Image:
    "w-full  h-[500px] object-cover rounded-tl-[140px] rounded-r-[50px] rounded-bl-lg z-10 relative",
};

const Hero = () => (
  <section
    className={`${styles.yPaddings} h-screen w-screen sm:px-16 px-6 hero-gradient `}
  >
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amout: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className={styles.flexCenter + " flex-col relative z-10 "}>
        <motion.h1
          variants={textVariant(1.1)}
          className={
            style_.heroHeading + "mt-20 md:mt-10 lg:mt-0 hero_Headline"
          }
        >
          Cosmos
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={style_.heroHeading + "hero_Headline mb-4"}>
            Adventure
          </h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className={style_.div_Image} />
        <Image
          src="/hero.bmp"
          alt="cover"
          height={1024} // Desired size with correct aspect ratio
          width={860}
          className={style_.Image}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
