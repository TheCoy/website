import { Photo } from "@/components/photo"
import { PricingTable } from "@/components/pricing-table"
import { Section } from "@/components/section"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import {
  about,
  contact,
  heroPhoto,
  intro,
  pricing,
  site,
  work,
} from "@/lib/site"

const mailto = `mailto:${site.email}`

export default function Page() {
  return (
    <div id="top" className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <section
          aria-labelledby="intro-title"
          className="mx-auto w-full max-w-[90rem] px-5 pt-16 md:px-10 md:pt-28"
        >
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h1
              id="intro-title"
              className="font-heading text-5xl leading-[1.02] text-balance md:col-span-8 md:text-7xl lg:text-8xl"
            >
              {intro.statement}
            </h1>
            <div className="flex flex-col gap-5 md:col-span-4 md:pb-3 lg:col-span-3 lg:col-start-10">
              <p className="leading-relaxed text-muted-foreground">
                {intro.lede}
              </p>
              <a
                href={mailto}
                className="self-start underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
              >
                {site.email}
              </a>
            </div>
          </div>
          <Photo
            photo={heroPhoto}
            caption={heroPhoto.caption}
            sizes="(min-width: 90rem) 86rem, 100vw"
            eager
            className="mt-12 md:mt-20"
          />
        </section>

        <Section
          id="work"
          label="01 — Work"
          title="A selection of recent photographs."
        >
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-28">
            {work.map((photo, i) => (
              <Photo
                key={photo.src}
                photo={photo}
                caption={photo.caption}
                index={i + 1}
                sizes="(min-width: 48rem) 60vw, 100vw"
                className={photo.layout}
              />
            ))}
          </div>
        </Section>

        <Section
          id="about"
          label="02 — About"
          title="Patient pictures, made on location."
        >
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <Photo
              photo={about.portrait}
              sizes="(min-width: 48rem) 33vw, 100vw"
              className="md:col-span-4"
            />
            <div className="flex flex-col gap-12 md:col-span-6 md:col-start-7">
              <div className="flex max-w-[58ch] flex-col gap-5 text-lg leading-relaxed">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <dl className="border-t text-sm">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-3 gap-4 border-b py-4"
                  >
                    <dt className="font-mono text-[0.6875rem] tracking-widest text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd className="col-span-2">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        <Section
          id="pricing"
          label="03 — Pricing"
          title="Three ways to work together."
        >
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-9 md:col-start-4">
              <p className="mb-12 max-w-[58ch] text-lg leading-relaxed">
                {pricing.note}
              </p>
              <PricingTable />
              <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
                  {pricing.terms.map((term) => (
                    <li key={term}>{term}</li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  size="lg"
                  nativeButton={false}
                  render={<a href={mailto} />}
                  className="self-start px-5 text-sm"
                >
                  Ask about a date
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" label="04 — Contact" title={contact.heading}>
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="flex flex-col gap-6 md:col-span-9 md:col-start-4">
              <a
                href={mailto}
                className="self-start font-heading text-4xl break-all underline decoration-border decoration-1 underline-offset-8 transition-colors hover:decoration-primary sm:text-5xl md:text-7xl"
              >
                {site.email}
              </a>
              <p className="text-muted-foreground">{contact.body}</p>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mt-auto border-t">
        <div className="mx-auto flex w-full max-w-[90rem] flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-5 py-6 text-sm text-muted-foreground md:px-10">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <a href={mailto} className="transition-colors hover:text-foreground">
            {site.email}
          </a>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}
