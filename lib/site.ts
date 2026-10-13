// All copy, photos and prices for the site live here.
// Everything marked PLACEHOLDER should be replaced before the site goes live.

export type Photo = {
  src: string
  alt: string
  width: number
  height: number
}

// PLACEHOLDER images come from picsum.photos. To use your own work, put the
// file in `public/photos/` and set `src` to e.g. "/photos/island.jpg" together
// with its real pixel `width` and `height`.
function placeholder(
  id: number,
  width: number,
  height: number,
  alt: string
): Photo {
  return {
    src: `https://picsum.photos/id/${id}/${width}/${height}`,
    alt,
    width,
    height,
  }
}

export const site = {
  name: "Matteo Tsui",
  role: "Photographer",
  // PLACEHOLDER: replace with your real address.
  email: "hello@example.com",
  // PLACEHOLDER: replace with the deployed URL (used for social previews).
  url: "https://example.com",
  description:
    "Matteo Tsui photographs people, coastlines and the quiet hours in between. Portraits, weddings and editorial commissions.",
}

// PLACEHOLDER copy: who you are and what you shoot.
export const intro = {
  statement: "I photograph people, coastlines and the quiet hours in between.",
  lede: "Portraits, small weddings and editorial commissions, made slowly and mostly in natural light.",
}

// PLACEHOLDER: the wide photo at the top of the page.
export const heroPhoto = {
  ...placeholder(1052, 2400, 1200, "A dark sea stack on a pale, empty beach"),
  caption: "Sea stack, winter",
}

// PLACEHOLDER: the selection shown under "Work". `layout` places each photo
// on the twelve-column grid; keep landscape photos wide and portraits narrow.
export const work = [
  {
    ...placeholder(1049, 1800, 1200, "A small island mirrored in still water"),
    caption: "Island at low tide",
    layout: "md:col-span-7",
  },
  {
    ...placeholder(
      1027,
      1200,
      1500,
      "Portrait of a woman in soft window light"
    ),
    caption: "Portrait, window light",
    layout: "md:col-span-4 md:col-start-9 md:mt-32",
  },
  {
    ...placeholder(338, 1200, 1500, "A hooded figure looking out over the sea"),
    caption: "Above the shoreline",
    layout: "md:col-span-4 md:col-start-2",
  },
  {
    ...placeholder(
      1045,
      1800,
      1200,
      "A mountain ridge disappearing into cloud"
    ),
    caption: "Ridge in cloud",
    layout: "md:col-span-6 md:col-start-7 md:mt-40",
  },
  {
    ...placeholder(1021, 2400, 1030, "Fog moving through a pine forest"),
    caption: "Fog, pine forest",
    layout: "md:col-span-12",
  },
  {
    ...placeholder(1055, 1800, 1200, "A long tidal flat under a pale sky"),
    caption: "Tidal flat, morning",
    layout: "md:col-span-6",
  },
  {
    ...placeholder(
      1005,
      1200,
      1500,
      "A man seen from behind, facing the evening light"
    ),
    caption: "Portrait, last light",
    layout: "md:col-span-4 md:col-start-8 md:mt-24",
  },
  {
    ...placeholder(
      447,
      1200,
      1500,
      "A lone figure standing at the edge of a lake"
    ),
    caption: "At the lake",
    layout: "md:col-span-4 md:col-start-3",
  },
  {
    ...placeholder(1038, 1800, 1200, "A small red boat on a dark, choppy sea"),
    caption: "Crossing",
    layout: "md:col-span-5 md:col-start-8 md:mt-36",
  },
]

// PLACEHOLDER: a photo of you, and your own story.
export const about = {
  portrait: placeholder(
    91,
    1200,
    1500,
    "The photographer holding a twin-lens film camera"
  ),
  paragraphs: [
    "I started with a borrowed film camera and a habit of walking the coast before work. That is still most of the method: arrive early, stay late, and wait for people and places to settle into themselves.",
    "Most of my commissions are portraits and small weddings, alongside editorial work for magazines and independent brands. I work with one camera and two lenses, in available light wherever I can.",
    "When I am not on assignment I am usually printing in the darkroom or planning the next long walk.",
  ],
  facts: [
    { label: "Shoots", value: "Portraits, weddings, editorial" },
    { label: "Works with", value: "Digital and medium-format film" },
    { label: "Travels", value: "Anywhere a commission asks" },
  ],
}

// PLACEHOLDER: your real sessions and prices.
export const pricing = {
  note: "Every session starts with a conversation. These are starting points; tell me what you have in mind and I will send a full quote.",
  sessions: [
    {
      name: "Portrait",
      includes: "One location, 25 edited photographs, private online gallery",
      time: "90 minutes",
      price: "$450",
    },
    {
      name: "Half day",
      includes:
        "Two locations or one event, 80 edited photographs, private online gallery",
      time: "4 hours",
      price: "$1,200",
    },
    {
      name: "Full day",
      includes:
        "Weddings and editorial commissions, 300 edited photographs, a set of ten prints",
      time: "8 hours",
      price: "$2,600",
    },
  ],
  terms: [
    "Photographs are delivered within two weeks.",
    "A 30% deposit holds the date.",
    "Travel beyond 50 km is quoted separately.",
  ],
}

export const contact = {
  heading: "Tell me about the day, the person or the place.",
  body: "I reply to every message within two working days.",
}

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]
