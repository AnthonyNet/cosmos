"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { JourneyCard, TitleText, TypingText } from "../components";


const journeys = [
  {
    id: "journey-1",
    imgUrl: "/planets.bmp",
    title: "The Solar System",
  },
  {
    id: "journey-2",
    imgUrl: "/planets2.bmp",
    title: "The Mars",
  },
  {
    id: "journey-3",
    imgUrl: "/planets3.bmp",
    title: "Outer Space",
  },
  {
    id: "journey-4",
    imgUrl: "/planets4.webp",
    title: "Alien Encounter",
  },
  {
    id: "journey-5",
    imgUrl: "/hero.bmp",
    title: "The Moon",
  },
];


const Journeys = () => {
  const [active, setActive] = useState("journey-2");
  return (
    <section
      className={`${styles.paddings} relative z-10 sectionScreen flexCenter hero-gradient `}
    >
      <motion.div
      
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Journey starts here" textStyles="text-center text-3xl" />

        <TitleText
          title={
            <>
              Choose the journey you want
              <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {journeys.map((journey, index) => (
            <JourneyCard
              key={journey.id}
              index={index}
              {...journey}
               active={active}
              handleClick={setActive}
            />
           
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Journeys;