"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export function ZoomableImage({
  src,
  alt,
  className,
  width,
  height,
  fill,
  sizes,
  priority,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="relative block w-full h-full text-left group overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded"
        onClick={handleOpen}
        aria-label={`Zoom photo of ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          sizes={sizes}
          priority={priority}
          className={className}
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-zoom-in">
          <ZoomIn className="w-5 h-5 text-white drop-shadow" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center cursor-zoom-out"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image Zoom View"
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              type="button"
              className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              aria-label="Close zoom view"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-[90vw] h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-5xl max-h-[80vh] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
