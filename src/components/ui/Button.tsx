import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-opacity-90 shadow-[0_4px_14px_rgba(45,51,107,0.2)]",
      secondary: "bg-secondary text-text-main hover:bg-[#EDEAE3] border border-[#EDEAE3]",
      outline: "border border-primary text-primary hover:bg-secondary",
      ghost: "hover:bg-secondary text-text-main",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 py-2 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
