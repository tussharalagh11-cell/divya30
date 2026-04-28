/* ═══════════════════════════════════════════════════
   DIVYA IS 30 — FULL FIXED script.js
   Videos + Real Photos + Cake + Animations
   ═══════════════════════════════════════════════════ */

/* FILE SETUP:
   Put ALL images directly inside /public/images/
   Put ALL videos directly inside /public/videos/
   Keep both photos and videos inside /public/videos/ for this premium build.

   Example:
   public/images/WhatsApp Image 2026-04-28 at 10.33.29 AM.jpeg
   public/videos/WhatsApp Image 2026-04-28 at 10.33.29 AM.jpeg
   public/videos/WhatsApp Video 2026-04-28 at 10.33.08 AM.mp4
*/

const imageNames = [
  'WhatsApp Image 2026-04-28 at 10.33.29 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.33.29 AM.jpeg',
  'WhatsApp Image 2026-04-28 at 10.33.30 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.33.30 AM.jpeg',
  'WhatsApp Image 2026-04-28 at 10.33.31 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.33.31 AM.jpeg',

  'WhatsApp Image 2026-04-28 at 10.39.28 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.28 AM (2).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.28 AM.jpeg',

  'WhatsApp Image 2026-04-28 at 10.39.29 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.29 AM (2).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.29 AM (3).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.29 AM.jpeg',

  'WhatsApp Image 2026-04-28 at 10.39.30 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.30 AM (2).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.30 AM.jpeg',

  'WhatsApp Image 2026-04-28 at 10.39.31 AM (1).jpeg',
@@ -42,50 +41,65 @@ const imageNames = [
  'WhatsApp Image 2026-04-28 at 10.39.41 AM.jpeg',

  'WhatsApp Image 2026-04-28 at 10.39.42 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.42 AM (2).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.42 AM (3).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.42 AM.jpeg',

  'WhatsApp Image 2026-04-28 at 10.39.43 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.43 AM (2).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.43 AM.jpeg',

  'WhatsApp Image 2026-04-28 at 10.39.44 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.44 AM (2).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.44 AM.jpeg',

  'WhatsApp Image 2026-04-28 at 10.39.45 AM (1).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.45 AM.jpeg',
];

const videoNames = [
  'WhatsApp Video 2026-04-28 at 10.33.08 AM.mp4',
  'WhatsApp Video 2026-04-28 at 10.33.22 AM.mp4',
  'WhatsApp Video 2026-04-28 at 10.39.41 AM.mp4',
];

const videoCaptions = [
  'A little movie from your universe',
  'The laugh, the chaos, the glow',
  'Proof that joy follows you around',
];

const frameTitles = [
  'Golden Hour You',
  'Main Character Moment',
  'Soft Chaos Aesthetic',
  'Memory in Motion',
  'Smile That Ends Arguments',
  'Unscripted & Iconic',
];

/* ─── DATA ──────────────────────────────────────── */
const reasons = [
  ['🌊','She never half-does anything'],
  ['☀️','That laugh — contagious from 3 rooms away'],
  ['🌻','Remembers everyone\'s order'],
  ['🎨','Makes every space more colourful'],
  ['🌙','Honest even when it\'s hard'],
  ['⚡','The energy she brings into a room'],
  ['🍁','Knows how to make a city feel like home'],
  ['🎶','Her taste in everything, actually'],
  ['🌸','Knows exactly what she wants'],
  ['🔥','Doesn\'t apologise for taking up space'],
  ['🧡','Shows up when it counts'],
  ['💛','The way she says people\'s names'],
  ['🌿','Curiosity that never switched off'],
  ['🎉','Birthday girl energy — all year round'],
  ['🌈','Makes boring things fun'],
  ['🦋','Changed a little every year, always better'],
  ['☕','Has an opinion on everything, and it\'s usually right'],
  ['🌺','Her sense of style is just hers'],
  ['🌟','Genuinely funny — actually funny, not \'ha okay\' funny'],
  ['🍊','Turns plans into adventures'],
  ['🏔️','Never let the hard days define her'],
  ['🎯','Knows what she\'s about'],
  ['🧃','Somehow always has the right snack'],
@@ -111,51 +125,51 @@ const msgs = [
  { text:'Your laugh should be a protected national treasure.', badge:'😂' },
  { text:'You make every playlist better just by being in the room.', badge:'🎶' },
  { text:'Thirty years of Divya and somehow the world still isn\'t ready.', badge:'⚡' },
  { text:'The energy you bring into a space lingers long after you leave.', badge:'🌊' },
  { text:'You have impeccable taste and zero apologies about it.', badge:'🦚' },
  { text:'Your honesty is one of the most generous things about you.', badge:'🌙' },
  { text:'Every city you\'ve lived in is better for having had you.', badge:'🍁' },
  { text:'You turn plans into adventures without even trying.', badge:'🗺️' },
  { text:'The way you remember things — details, moments, people — it matters.', badge:'🌻' },
  { text:'You have carried hard things with more grace than you give yourself credit for.', badge:'🌷' },
  { text:'People feel seen when they talk to you. That\'s a gift.', badge:'👁️' },
  { text:'You\'ve never once been boring. Not for a single second.', badge:'🎪' },
  { text:'The version of you at 30 is the best one yet. And that\'s saying something.', badge:'🥂' },
  { text:'You have a way of making people feel like they\'re exactly where they should be.', badge:'🏠' },
  { text:'Your confidence has always looked good on you.', badge:'🔥' },
  { text:'You are somebody\'s favourite person. More than one somebody\'s.', badge:'💌' },
  { text:'The world is genuinely more interesting with you in it.', badge:'🌈' },
  { text:'You\'ve always moved at your own pace and it\'s always been exactly right.', badge:'🎯' },
  { text:'Thirty candles. Thirty years. Still the most alive person in the room.', badge:'🕯️' },
  { text:'Whatever comes next — you\'re ready. You always have been.', badge:'🚀' },
  { text:'Happy birthday, Divya. From someone who is very glad you exist.', badge:'🎂' },
];

const accs = ['#FF5C1A','#FFD600','#FF3CAC','#00C9B1','#3B6EF8','#AAEE44'];
const cc = [...accs, '#FFFBE8'];
const mqW = ['✦ HAPPY 30TH DIVYA','🎉 THIRTY IS EVERYTHING','✦ CHAOTIC GOOD','💛 SHE SHOWED UP','✦ HAPPY BIRTHDAY DIVYA','🌸 THIRTY YEARS OF HER','✦ FROM TUSSHAR WITH LOVE'];
const mqW = ['✦ PREMIUM BIRTHDAY EDITION','🎬 DIVYA IN CINEMA MODE','✦ ART-LED CELEBRATION','💛 THIRTY IN GOLD','✦ ICON ENERGY ONLY','🌸 CURATED WITH LOVE','✦ FROM TUSSHAR'];
const mqC = ['o','y','p','t','l'];

function asset(path) {
  return encodeURI(path);
}

/* ─── MARQUEE ────────────────────────────────────── */
function buildMQ(id) {
  const el = document.getElementById(id);
  if (!el) return;

  [...mqW, ...mqW, ...mqW, ...mqW].forEach((t, i) => {
    const s = document.createElement('span');
    s.className = 'mi ' + mqC[i % mqC.length];
    s.textContent = t + '  ';
    el.appendChild(s);
  });
}
buildMQ('mq1');
buildMQ('mq2');

/* ─── REASONS ────────────────────────────────────── */
const rg = document.getElementById('rgrid');
if (rg) {
  reasons.forEach(([em, txt], i) => {
@@ -166,82 +180,82 @@ if (rg) {
    c.innerHTML = `<span class="re">${em}</span><div class="rtx">${txt}</div>`;
    c.addEventListener('mouseenter', () => { c.style.borderColor = accs[i % accs.length]; });
    c.addEventListener('mouseleave', () => { c.style.borderColor = ''; });
    rg.appendChild(c);
  });
}

/* ─── VIDEOS ─────────────────────────────────────── */
const vg = document.getElementById('vid-grid');
if (vg) {
  videoNames.forEach((name, i) => {
    const src = asset(`videos/${name}`);

    const card = document.createElement('div');
    card.className = 'vid-card';
    card.style.transitionDelay = `${i * 0.1}s`;

    card.innerHTML = `
      <div class="vid-thumb-placeholder" style="background:${accs[i % accs.length]}">
        <video class="vid-thumb" muted playsinline preload="metadata">
          <source src="${src}" type="video/mp4">
        </video>
        <div class="vid-play-btn">▶</div>
      </div>
      <div class="vid-info">
        <div class="vid-label">Memory ${String(i + 1).padStart(2, '0')}</div>
        <div class="vid-caption">Tap to play this memory</div>
        <div class="vid-label">Gift Reel ${String(i + 1).padStart(2, '0')}</div>
        <div class="vid-caption">${videoCaptions[i % videoCaptions.length]}</div>
      </div>
    `;

    card.addEventListener('click', () => openVid(src));
    vg.appendChild(card);
  });
}

/* ─── PHOTO GALLERY ──────────────────────────────── */
const ms = document.getElementById('masonry');
if (ms) {
  imageNames.forEach((name, i) => {
    const src = asset(`images/${name}`);
    const src = asset(`videos/${name}`);

    const tile = document.createElement('div');
    tile.className = 'ptile photo-tile';
    tile.style.transitionDelay = `${i * 0.05}s`;

    tile.innerHTML = `
      <img 
        class="photo-img" 
        src="${src}" 
        alt="Divya photo ${i + 1}"
        loading="lazy"
        onerror="this.closest('.ptile').style.display='none';"
      >
    `;

    tile.addEventListener('click', e => {
      openPhoto(src, `Photo ${String(i + 1).padStart(2, '0')}`, 'A frame from Divya’s world.');
      openPhoto(src, frameTitles[i % frameTitles.length], 'A premium frame from Divya’s world — saved as part of your birthday gift.');
      confetti(e.clientX, e.clientY, 20);
    });

    ms.appendChild(tile);
  });
}

/* ─── MESSAGES ───────────────────────────────────── */
const mbg = ['#FFD600','#00C9B1','#AAEE44','#3B6EF8','#FFD600','#FF3CAC'];
const mg = document.getElementById('mgrid');
if (mg) {
  msgs.forEach((m, i) => {
    const c = document.createElement('div');
    c.className = 'mc';
    c.style.transitionDelay = `${i * 0.1}s`;
    c.innerHTML = `<div class="mbadge" style="background:${mbg[i % mbg.length]}">${m.badge}</div><div class="mtx">"${m.text}"</div><div class="mfr">— With love</div>`;
    c.addEventListener('click', e => confetti(e.clientX, e.clientY, 12));
    mg.appendChild(c);
  });
}

/* ─── CURSOR ──────────────────────────────────────── */
const cur = document.getElementById('cur');
const cur2 = document.getElementById('cur2');
let mx = 0, my = 0, rx = 0, ry = 0, ci = 0;
