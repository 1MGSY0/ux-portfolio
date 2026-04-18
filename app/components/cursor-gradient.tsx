"use client";

import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function CursorGradient() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(240);
  const pointerY = useMotionValue(180);
  const springX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.6 });

  const gradient = useMotionTemplate`
    radial-gradient(420px circle at ${springX}px ${springY}px, rgba(255,255,255,0.56), transparent 30%),
    radial-gradient(680px circle at ${springX}px ${springY}px, rgba(96,165,250,0.16), transparent 46%)
  `;

  useEffect(() => {
    if (reduceMotion) return;

    function handlePointerMove(event: PointerEvent) {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: reduceMotion
          ? "radial-gradient(460px circle at 24% 18%, rgba(255,255,255,0.42), transparent 30%), radial-gradient(760px circle at 68% 22%, rgba(96,165,250,0.12), transparent 46%)"
          : gradient,
      }}
    />
  );
}
