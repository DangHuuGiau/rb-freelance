"use client";

import { m } from "framer-motion";
import { slideRightVariants, slideUpVariants } from "./animations";

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  custom?: number;
  viewport?: {
    amount?: number;
    once?: boolean;
  };
}

const SlideUpTransition = ({
  children,
  className,
  custom,
  viewport,
}: SlideInProps) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      custom={custom}
      viewport={viewport}
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
  viewport,
}: SlideInProps) => {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      custom={custom}
      viewport={viewport}
      variants={slideRightVariants}
      className={className}
    >
      {children}
    </m.div>
  );
};

export { SlideUpTransition, SlideRightTransition };
