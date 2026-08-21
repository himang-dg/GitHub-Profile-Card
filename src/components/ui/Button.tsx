"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-6 py-2.5 font-semibold rounded-[14px] transition-all duration-300 cursor-pointer",
        {
          "btn-accent": variant === "primary",
          "btn-secondary": variant === "secondary",
        },
        className
      )}
      {...props}
    />
  );
}
