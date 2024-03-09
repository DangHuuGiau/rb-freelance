"use client";
import { useEffect } from "react";
import { m, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 1,
        delay: stagger(0.1),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <m.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <m.span key={word + idx} className="text-bodyFg opacity-0">
              {word}{" "}
            </m.span>
          );
        })}
      </m.div>
    );
  };

  return (
    <div className={cn("text-bodyFg leading-snug tracking-wide", className)}>
      {renderWords()}
    </div>
  );
};
