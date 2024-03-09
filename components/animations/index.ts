import { Variants } from "framer-motion";

const slideUpVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeIn",
      delay: i * 0.1,
    },
  }),
};

const slideRightVariants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      type: "spring",
      delay: i * 0.1,
    },
  }),
  hidden: {
    opacity: 0,
    x: -100,
  },
};

/* const slideLeftVariants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      type: "spring",
      delay: i * 0.1,
      staggerChildren: 0.5,
    },
  }),
  hidden: {
    opacity: 0,
    x: 100,
  },
}; */
export { slideUpVariants, slideRightVariants };
