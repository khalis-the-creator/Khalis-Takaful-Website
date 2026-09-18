/* =============================================================
   CAMPAIGNS DATA
   =============================================================
   This is the ONLY file you need to edit to add, update, or
   remove a campaign. No design/code knowledge needed — just
   copy one block, change the text, save.

   FIELDS:
   - title       : Campaign name shown on the card
   - poster      : Path to the poster image (put the image file
                   inside the "posters" folder, then reference it
                   here, e.g. "posters/my-campaign.jpg"). If a
                   poster hasn't been added yet, leave the path as
                   is — the card will automatically show a clean
                   text fallback with the title until a real image
                   is added.
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
    poster: "posters/heat-stroke-cover.jpg",
    link: "https://discover.aia.com.my/rsc/5I5b3xbY",
    tag: "Percuma",
    validUntil: null
  },
  {
    title: "Free AIA Dengue Cover",
    poster: "posters/dengue-cover.jpg",
    link: "https://discover.aia.com.my/rsc/zSTlA0C3",
    tag: "Percuma",
    validUntil: null
  },
  {
    title: "AIA Vitality: How to Redeem Your Weekly Challenge Reward",
    poster: "posters/vitality-weekly-reward.jpg",
    link: "https://discover.aia.com.my/rsc/DKnmoD70",
    tag: "AIA Vitality",
    validUntil: null
  },
  {
    title: "AIA Free Khairat Kematian Cover",
    poster: "posters/khairat-kematian-cover.jpg",
    link: "https://discover.aia.com.my/rsc/3UM4OEpa",
    tag: "Percuma",
    validUntil: null
  },
  {
    title: "Golongan Yang Perlu Takaful",
    poster: "posters/golongan-perlu-takaful.jpg",
    link: "https://discover.aia.com.my/rsc/SAqJdigh",
    tag: "Edukasi",
    validUntil: null
  }
];
