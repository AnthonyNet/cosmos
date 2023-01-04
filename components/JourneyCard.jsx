"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn } from "./animations/motion";

const style_ = {
  motion:
    'flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer',
 img: 'absolute w-full h-full object-cover rounded-[24px]',
 h3: 'font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]',
 div: 'absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]',
 p: 'font-normal text-[16px] leading-[20.16px] text-white uppercase',
 h2: 'mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white' 
};

const JourneyCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  return (
    <motion.div
      variants={slideIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } ${style_.motion}`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className={style_.img}
      />
      {active !== id ? (
        <h3 className={style_.h3}>
          {title}
        </h3>
      ) : (
        <div className={style_.div}>
          <p className={style_.p}>
            Enter Metaverse
          </p>
          <h2 className={style_.h2}>
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default JourneyCard;
