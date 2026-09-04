import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border px-6 text-sm font-bold uppercase tracking-[0.08em] transition-[transform,background-color,color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43c367] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "border-[#0a1740] bg-[#0a1740] text-white hover:-translate-y-0.5 hover:border-[#269f4a] hover:bg-[#269f4a]",
        light:
          "border-white bg-white text-[#0a1740] hover:-translate-y-0.5 hover:border-[#8ae29b] hover:bg-[#8ae29b] hover:text-[#0a1740]",
        outline:
          "border-white/50 bg-transparent text-white hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#0a1740]",
        ghost:
          "border-transparent bg-transparent text-current hover:border-current",
      },
      size: {
        default: "h-11 px-5",
        sm: "min-h-9 px-4 text-xs",
        lg: "min-h-12 px-7 text-sm",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        data-variant={variant ?? "default"}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
