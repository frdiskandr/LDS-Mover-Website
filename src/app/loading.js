'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen absolute bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image src="/company.webp" alt="LDS Movers Logo" width={120} height={120} />
      </motion.div>
      <motion.div
        className="mt-5 text-lg font-semibold text-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Loading...
      </motion.div>
    </div>
  );
}
