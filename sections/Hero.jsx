"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../components/animations/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} h-screen w-screen sm:pl-16 pl-6 hero-gradient `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amout: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 ">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading + 'mt-20 md:mt-10 lg:mt-0 hero_Headline'}>
          Cosmos
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
            <h1 className={styles.heroHeading}>A</h1>
          <div className={styles.heroDText}>D</div> 
          <h1 className={styles.heroHeading}>Venture</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] rounded-r-[80px]  z-[0] -top-[30px]" />
          <Image
            src="/hero.bmp"
            alt="cover"
            height={1024} // Desired size with correct aspect ratio
            width={860}
            className="w-full  h-[500px] object-cover rounded-tl-[140px] rounded-r-[50px] rounded-bl-lg z-10 relative"
          />

       
        
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
