"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "amber" | "red" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  amber: "btn-premium text-charcoal font-bold",
  red: "btn-premium text-charcoal font-bold",
  outline: "btn-premium-outline text-white font-bold",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-10 py-4.5 text-lg",
};

export default function GradientButton({
  children,
  href,
  onClick,
  variant = "amber",
  size = "md",
  className = "",
}: GradientButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${variantStyles[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
