"use client";

import { m } from "framer-motion";
import { slideRightVariants, slideUpVariants } from "./animations";

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  custom?: number;
  amount?: number;
}

const SlideUpTransition = ({
  children,
  className,
  custom,
  amount,
}: SlideInProps) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      custom={custom}
      viewport={{ amount, once: true }}
      variants={slideUpVariants}
      className={className}
    >
      {children}
    </m.div>
  );
};

const SlideRightTransition = ({
  children,
  className,
  custom,
  amount,
}: SlideInProps) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      custom={custom}
      viewport={{ amount, once: true }}
      variants={slideRightVariants}
      className={className}
    >
      {children}
    </m.div>
  );
};

export { SlideUpTransition, SlideRightTransition };
