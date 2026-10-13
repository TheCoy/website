import { nav, site } from "@/lib/site"

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[90rem] flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-5 py-4 md:px-10">
        <a href="#top" className="font-heading text-xl leading-none">
          {site.name}
          <span className="sr-only">, {site.role}</span>
        </a>
        <nav aria-label="Sections">
          <ul className="flex items-baseline gap-5 text-sm md:gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`mailto:${site.email}`}
          className="text-sm underline decoration-border underline-offset-4 transition-colors hover:decoration-primary max-lg:hidden"
        >
          {site.email}
        </a>
      </div>
    </header>
  )
}

export { SiteHeader }
