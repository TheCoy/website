import Image from "next/image"

import type { Photo as PhotoData } from "@/lib/site"
import { cn } from "@/lib/utils"

function Photo({
  photo,
  caption,
  index,
  sizes,
  eager = false,
  className,
}: {
  photo: PhotoData
  caption?: string
  index?: number
  sizes: string
  eager?: boolean
  className?: string
}) {
  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="h-auto w-full bg-muted"
      />
      {caption && (
        <figcaption className="flex gap-3 font-mono text-[0.6875rem] tracking-wide text-muted-foreground uppercase">
          {index !== undefined && (
            <span aria-hidden="true">{String(index).padStart(2, "0")}</span>
          )}
          <span>{caption}</span>
        </figcaption>
      )}
    </figure>
  )
}

export { Photo }
