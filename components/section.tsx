import { cn } from "@/lib/utils"

function Section({
  id,
  label,
  title,
  className,
  children,
}: {
  id: string
  label: string
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "mx-auto w-full max-w-[90rem] scroll-mt-24 px-5 py-20 md:px-10 md:py-32",
        className
      )}
    >
      <header className="mb-12 grid gap-4 border-t pt-5 md:mb-20 md:grid-cols-12 md:gap-8">
        <p className="font-mono text-[0.6875rem] tracking-widest text-muted-foreground uppercase md:col-span-3">
          {label}
        </p>
        <h2
          id={`${id}-title`}
          className="max-w-[22ch] font-heading text-4xl leading-[1.05] text-balance md:col-span-9 md:text-6xl"
        >
          {title}
        </h2>
      </header>
      {children}
    </section>
  )
}

export { Section }
