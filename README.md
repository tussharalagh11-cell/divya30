# Divya is 30 🎉

A birthday website for Divya, built with pure HTML/CSS/JS — no framework needed.

---

## File Structure

```
divya30/
├── index.html          ← main page
├── style.css           ← all styles
├── script.js           ← all logic + data
├── vercel.json         ← Vercel config
└── public/
    └── videos/
        ├── memory-1.mp4    ← drop your videos here
        ├── memory-2.mp4
        └── ...
```

---

## Adding Videos

1. Drop your `.mp4` files into `public/videos/`
2. Open `script.js` and find the `videos` array at the top
3. Update each entry:

```js
{
  src:     'videos/your-filename.mp4',   // filename inside public/videos/
  poster:  'videos/your-thumbnail.jpg',  // optional preview image
  label:   'A Great Night',             // shown on the card
  caption: 'The one where everything went right',
  bg:      '#FF3CAC',                   // card background colour
}
```

4. Add or remove entries freely — the grid adjusts automatically.

---

## Deploying to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm i -g vercel
cd divya30
vercel
```
Follow the prompts — it deploys in ~30 seconds.

### Option B — Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) → New Project
2. Drag and drop the entire `divya30/` folder
3. Click Deploy — done.

### Option C — GitHub
1. Push the `divya30/` folder to a GitHub repo
2. Import it in Vercel dashboard
3. Auto-deploys on every push

---

## Video Tips for Vercel

- **Format:** `.mp4` (H.264) works best across all browsers
- **Size:** Keep individual files under 50MB for fast loading
- **Compress:** Use HandBrake or `ffmpeg -i input.mp4 -crf 28 output.mp4` to shrink files
- **Thumbnails:** Add a `.jpg` poster image with the same name for a nicer card preview

---

## Customising

All content lives in `script.js` at the top:
- `videos[]` — your video files
- `reasons[]` — 30 reasons Divya is incredible
- `tiles[]` — photo wall colours and labels
- `msgs[]` — the truth cards at the bottom

The love letter text is in `index.html` inside `<section id="letter">`.
