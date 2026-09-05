"use client";

import { useState } from "react";
import Image from "next/image";

import { ZoomableImage } from "@/components/ui/ZoomableImage";
import type { ProductSpec } from "@/app/products/data";
import { cn } from "@/lib/utils";

export function ProductGallery({ product }: { product: ProductSpec }) {
  const [active, setActive] = useState(0);
  const images = product.images;
  const activeImage = images[Math.min(active, images.length - 1)];

  return (
    <div className="product-gallery">
      <figure className="product-gallery-main">
        <ZoomableImage
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 55vw"
          className="object-contain p-2 sm:p-3"
        />
        <figcaption>{activeImage.label}</figcaption>
      </figure>
      <div
        className="product-gallery-thumbs"
        role="tablist"
        aria-label="Product photos"
      >
        {images.map((image, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={index === active}
            className={cn(index === active && "is-active")}
            key={image.src}
            onClick={() => setActive(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 900px) 25vw, 15vw"
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
}