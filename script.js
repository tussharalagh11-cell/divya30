/* ═══════════════════════════════════════════════════
   DIVYA IS 30 — script.js FIXED
   Images + Videos working
   ═══════════════════════════════════════════════════ */

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
  'WhatsApp Image 2026-04-28 at 10.39.31 AM (2).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.31 AM (3).jpeg',
  'WhatsApp Image 2026-04-28 at 10.39.31 AM.jpeg',

  'WhatsApp Image 2026-04-28 at 10.39.32 AM.jpeg',
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
  'WhatsApp Video 2026-04-28 at 10.33.22 AM (1).mp4',
  'WhatsApp Video 2026-04-28 at 10.33.22 AM.mp4',
  'WhatsApp Video 2026-04-28 at 10.39.41 AM.mp4',
];

const videos = videoNames.map((name, i) => ({
  src: `videos/${name}`,
  poster: '',
  label: `Memory ${String(i + 1).padStart(2, '0')}`,
  caption: 'Tap to play this memory',
  bg: ['#FF5C1A', '#FF3CAC', '#FFD600', '#00C9B1', '#3B6EF8'][i % 5],
}));

const photos = imageNames.map((name, i) => ({
  src: `images/${name}`,
  emoji: ['📸', '🌸', '🥂', '✨', '🧡', '🎉'][i % 6],
  label: `Photo ${String(i + 1).padStart(2, '0')}`,
  sub: 'A frame from Divya’s world',
  bg: ['#FFD600', '#FF3CAC', '#00C9B1', '#AAEE44', '#FF5C1A', '#3B6EF8'][i % 6],
  col: i % 2 ? '#FFFBE8' : '#0F0A00',
}));

function safeSrc(path) {
  return encodeURI(path);
}

/* ─── VIDEOS ─────────────────────────────────────── */
const vg = document.getElementById('vid-grid');

videos.forEach((v, i) => {
  const card = document.createElement('div');
  card.className = 'vid-card';
  card.style.transitionDelay = `${i * 0.1}s`;

  card.innerHTML = `
    <div class="vid-thumb-placeholder" style="background:${v.bg}">
      <video class="vid-thumb" muted playsinline preload="metadata">
        <source src="${safeSrc(v.src)}" type="video/mp4">
      </video>
      <div class="vid-play-btn">▶</div>
    </div>
    <div class="vid-info">
      <div class="vid-label">${v.label}</div>
      <div class="vid-caption">${v.caption}</div>
    </div>
  `;

  card.addEventListener('click', () => openVid(safeSrc(v.src)));
  vg.appendChild(card);
});

/* ─── PHOTO GALLERY ──────────────────────────────── */
const ms = document.getElementById('masonry');

photos.forEach((p, i) => {
  const tile = document.createElement('div');
  tile.className = 'ptile photo-tile';
  tile.style.transitionDelay = `${i * 0.07}s`;
  tile.style.background = p.bg;

  tile.innerHTML = `
    <img src="${safeSrc(p.src)}" class="photo-img" alt="${p.label}">
    <div class="photo-info">
      <div class="te">${p.emoji}</div>
      <div class="tl" style="color:${p.col}">${p.label}</div>
      <div class="ts" style="color:${p.col}">${p.sub}</div>
    </div>
  `;

  tile.addEventListener('click', e => {
    openPhoto(safeSrc(p.src), p.label, p.sub);
    confetti(e.clientX, e.clientY, 20);
  });

  ms.appendChild(tile);
});

/* ─── VIDEO MODAL ────────────────────────────────── */
function openVid(src) {
  const player = document.getElementById('vmodal-player');
  player.src = src;
  player.load();
  player.play().catch(() => {});
  document.getElementById('vmodal').classList.add('open');
}

function closeVid() {
  const player = document.getElementById('vmodal-player');
  player.pause();
  player.removeAttribute('src');
  player.load();
  document.getElementById('vmodal').classList.remove('open');
}

/* ─── PHOTO LIGHTBOX ─────────────────────────────── */
function openPhoto(src, title, text) {
  document.getElementById('lbe').innerHTML = `
    <img src="${src}" style="width:100%;border-radius:18px;border:3px solid #0F0A00;">
  `;
  document.getElementById('lbt').textContent = title;
  document.getElementById('lbtx').textContent = text;
  document.getElementById('lbox').style.display = 'flex';
}

function closeLB() {
  document.getElementById('lbox').style.display = 'none';
  document.getElementById('lbe').innerHTML = '';
}

/* ─── OBSERVER FIX ───────────────────────────────── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('vis');
  });
}, { threshold: 0.08 });

setTimeout(() => {
  document.querySelectorAll('.ptile,.vid-card,.fu,.rc,.mc,.letter-body p').forEach(el => obs.observe(el));
}, 100);
