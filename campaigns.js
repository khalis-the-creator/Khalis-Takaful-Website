/* =============================================================
   CAMPAIGNS DATA
   =============================================================
   This is the ONLY file you need to edit to add, update, or
   remove a campaign. No design/code knowledge needed — just
   copy one block, change the text, save.

   FIELDS:
   - title       : Campaign name shown on the card
   - poster      : Filename of the poster image. Just upload the
                   image directly to the main repo folder (same
                   place as index.html — no subfolder needed) and
                   put its exact filename here, e.g. "heat-stroke-cover.jpg".
                   If a poster hasn't been uploaded yet, leave the
                   filename as is — the card will automatically
                   show a clean text fallback with the title until
                   a real image with that exact name is added.
   - link        : The exact AIA campaign page URL
   - tag         : Short category label, e.g. "Percuma", "Edukasi"
   - validUntil  : Optional. Format: "YYYY-MM-DD" (e.g. "2026-09-30")
                   If today's date is past this, the card is
                   automatically hidden. Leave as null if the
                   campaign has no end date.

   To add a new campaign: copy an entire { ... } block below,
   paste it before the closing "];", then edit the values.
   To remove one: delete its whole { ... } block.
============================================================= */

const CAMPAIGNS = [
  {
    title: "Free AIA Heat Stroke Cover",
    poster: "heat-stroke-cover.jpg",
    link: "https://discover.aia.com.my/rsc/5I5b3xbY",
    tag: "Percuma",
    validUntil: null
  },
  {
    title: "Free AIA Dengue Cover",
    poster: "dengue-cover.jpg",
    link: "https://discover.aia.com.my/rsc/zSTlA0C3",
    tag: "Percuma",
    validUntil: null
  },
  {
    title: "AIA Vitality: How to Redeem Your Weekly Challenge Reward",
    poster: "vitality-weekly-reward.jpg",
    link: "https://discover.aia.com.my/rsc/DKnmoD70",
    tag: "AIA Vitality",
    validUntil: null
  },
  {
    title: "AIA Free Khairat Kematian Cover",
    poster: "khairat-kematian-cover.jpg",
    link: "https://discover.aia.com.my/rsc/3UM4OEpa",
    tag: "Percuma",
    validUntil: null
  },
  {
    title: "Golongan Yang Perlu Takaful",
    poster: "golongan-perlu-takaful.jpg",
    link: "https://discover.aia.com.my/rsc/SAqJdigh",
    tag: "Edukasi",
    validUntil: null
  }
];
