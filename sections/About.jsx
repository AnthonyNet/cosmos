"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { slideIn } from "../components/animations/motion";

const About = () => (
  <section
    className={`${styles.paddings} relative z-10 about-gradient grid items-center justify-center `}
  >
    <div className="z-10 " />
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} flex-col h-[100vh]`}
    >
      <TypingText title="| About Cosmos Adventure" textStyles="text-center" />

      <motion.p
        variants={slideIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Cosmos</span> is a new
        travelling of the future, where you can enjoy the traveling to the
        worlds and galaxies. The sci-fi becomes real and you can enjoy what was
        only a{" "}
        <span className="font-extrabold text-white">dream for humanity</span>{" "}
        before.{" "}
        <span className="font-extrabold text-white">Cosmos Adventure</span> is a
        safe journey within the most high-tech spaceships from Cosmos Czech
        Institute of Space Technology. Let's{" "}
        <span className="font-extrabold text-white">explore</span>the space and
        scroll down.
      </motion.p>
      <a href="#journeys">
        <motion.img
          variants={slideIn("up", "tween", 0.3, 1)}
          src="https://img.icons8.com/color/512/circled-down-2.png"
          alt="arrow down"
          className="w-[68px] h-[68px] object-contain  hover:mt-[50px] ease-in duration-300 "
        />
      </a>
    </motion.div>
  </section>
);

export default About;
