# Matteo Tsui — photography portfolio

A single-page portfolio built with Next.js and shadcn/ui: introduction, a selection of work, about, pricing and contact.

## Development

```bash
pnpm install
pnpm dev
```

`pnpm build`, `pnpm lint` and `pnpm typecheck` should pass before merging.

## Editing content

All copy, photos and prices live in `lib/site.ts`. Nothing else needs to change for a content update.

## Placeholders to replace

Everything below is marked `PLACEHOLDER` in `lib/site.ts`.

| What                             | Where in `lib/site.ts`                | Shown                                      |
| -------------------------------- | ------------------------------------- | ------------------------------------------ |
| Email address                    | `site.email`                          | Header, introduction, pricing, contact, footer |
| Site URL                         | `site.url`                            | Social previews                            |
| Introduction copy                | `intro`, `site.description`           | Top of the page, search results            |
| Opening photo (2:1, landscape)   | `heroPhoto`                           | Under the introduction                     |
| Nine portfolio photos + captions | `work`                                | Work                                       |
| Portrait of you (4:5)            | `about.portrait`                      | About                                      |
| Biography and facts              | `about.paragraphs`, `about.facts`     | About                                      |
| Sessions, prices and terms       | `pricing`                             | Pricing                                    |

To use your own photo, add the file to `public/photos/` and set its entry to, for example:

```ts
{ src: "/photos/island.jpg", alt: "…", width: 1800, height: 1200 }
```

`width` and `height` are the real pixel size of the file. Once no photo points at picsum.photos, remove `images.remotePatterns` from `next.config.ts`. The favicon in `app/favicon.ico` is still the template default.

## Adding components

```bash
pnpm dlx shadcn@latest add <component>
```
