"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
export default function MotionCar() {
  return (
    <motion.div
      initial={{ x: 50 }}
      animate={{ y: 40, x: 0 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="w-3/5 flex justify-end"
    >
      <Image
        
        alt="Card background"
        className="object-cover rounded-xl"
        src="../../assets/hero-car.svg"
        width={750}
        height={750}
      />
    </motion.div>
  );
}
