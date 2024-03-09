"use client";

import { m } from "framer-motion";
import { slideUpVariants } from "./animations";

const SectionTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <m.p
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      variants={slideUpVariants}
      className="text-center text-xs text-secondary capitalize font-medium"
    >
      {children}
    </m.p>
  );
};

export default SectionTag;
