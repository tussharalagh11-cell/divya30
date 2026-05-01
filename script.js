/* ═══════════════════════════════════════════════════
   DIVYA IS 30 — script.js
   Full fixed version
   ═══════════════════════════════════════════════════ */

/* ─── VIDEOS ─────────────────────────────────────── */

const videos = [
  {
    src: 'videos/memory-1.mp4',
    poster: '',
    label: 'Memory 01',
    caption: 'Add your caption here',
    bg: '#FF5C1A',
  },
  {
    src: 'videos/memory-2.mp4',
    poster: '',
    label: 'Memory 02',
    caption: 'Add your caption here',
    bg: '#FF3CAC',
  },
  {
    src: 'videos/memory-3.mp4',
    poster: '',
    label: 'Memory 03',
    caption: 'Add your caption here',
    bg: '#FFD600',
  },
  {
    src: 'videos/memory-4.mp4',
    poster: '',
    label: 'Memory 04',
    caption: 'Add your caption here',
    bg: '#00C9B1',
  },
];

/* ─── DATA ───────────────────────────────────────── */

const reasons = [
  ['🌊', 'She never half-does anything'],
  ['☀️', 'That laugh — contagious from 3 rooms away'],
  ['🌻', "Remembers everyone's order"],
  ['🎨', 'Makes every space more colourful'],
  ['🌙', "Honest even when it's hard"],
  ['⚡', 'The energy she brings into a room'],
  ['🍁', 'Knows how to make a city feel like home'],
  ['🎶', 'Her taste in everything, actually'],
  ['🌸', 'Knows exactly what she wants'],
  ['🔥', "Doesn't apologise for taking up space"],
  ['🧡', 'Shows up when it counts'],
  ['💛', "The way she says people's names"],
  ['🌿', 'Curiosity that never switched off'],
  ['🎉', 'Birthday girl energy — all year round'],
  ['🌈', 'Makes boring things fun'],
  ['🦋', 'Changed a little every year, always better'],
  ['☕', "Has an opinion on everything, and it's usually right"],
  ['🌺', 'Her sense of style is just hers'],
  ['🌟', "Genuinely funny — actually funny, not 'ha okay' funny"],
  ['🍊', 'Turns plans into adventures'],
  ['🏔️', 'Never let the hard days define her'],
  ['🎯', "Knows what she's about"],
  ['🧃', 'Somehow always has the right snack'],
  ['🌙', 'Still curious about everything'],
  ['🦚', 'Gets dressed for herself, no one else'],
  ['🥂', 'Makes every celebration feel bigger'],
  ['🌷', 'Gets better with time — seriously'],
  ['🎪', 'Thirty years and still surprising people'],
  ['✨', "She doesn't need this list to know her worth"],
  ['🎂', 'But she gets one anyway — Happy 30th!'],
];

const tiles = [
  { photo: 'p15', label: 'Baby Divya', sub: 'Where it all began 🌸', bg: '#FF3CAC' },
  { photo: 'p01', label: 'The GUESS era', sub: 'Pink was always right', bg: '#FFD600' },
  { photo: 'p06', label: 'The lehenga', sub: 'She wore it like a queen', bg: '#AAEE44' },
  { photo: 'p04', label: 'Dressed up', sub: 'Effortlessly stunning', bg: '#FF5C1A' },
  { photo: 'p05', label: 'Holi', sub: 'Colour on colour on colour', bg: '#00C9B1' },
  { photo: 'p16', label: 'That orange lehenga', sub: 'She showed up', bg: '#FF3CAC' },
  { photo: 'p02', label: 'Navratri', sub: 'Day 2 — White ♡', bg: '#3B6EF8' },
  { photo: 'p03', label: 'Saturday 2:37 PM', sub: 'A perfect ordinary day', bg: '#FFD600' },
  { photo: 'p17', label: 'Somewhere in Europe', sub: 'Pizza & adventure', bg: '#FF5C1A' },
  { photo: 'p20', label: 'The best smile', sub: 'That laugh though', bg: '#AAEE44' },
  { photo: 'p07', label: 'FaceTime', sub: 'Cheek on hand, always', bg: '#FF3CAC' },
  { photo: 'p08', label: 'Laughing', sub: 'The real ones', bg: '#FFD600' },
  { photo: 'p09', label: 'That smile', sub: 'Gets me every time', bg: '#00C9B1' },
  { photo: 'p18', label: 'Gas station', sub: 'Sunglasses on head, always', bg: '#3B6EF8' },
  { photo: 'p19', label: 'Dinner out', sub: 'That laugh mid-bite', bg: '#FF5C1A' },

  { emoji: '🎂', label: 'Birthday energy', sub: 'All year round', bg: '#FF3CAC', col: '#FFFBE8' },
  { emoji: '🌈', label: 'The chaotic days', sub: 'Still worth it', bg: '#3B6EF8', col: '#FFFBE8' },
  { emoji: '🦋', label: 'The glow-up', sub: 'Every single year', bg: '#FFD600' },
  { emoji: '🌊', label: 'Summer days', sub: 'Water & sunshine', bg: '#00C9B1' },
  { emoji: '🎯', label: 'The focused era', sub: 'She knew what she wanted', bg: '#AAEE44' },
  { emoji: '🕯️', label: 'Quiet nights', sub: 'Soft and good', bg: '#FF5C1A', col: '#FFFBE8' },
  { emoji: '💌', label: 'The love era', sub: 'She gave it fully', bg: '#3B6EF8', col: '#FFFBE8' },
  { emoji: '🎠', label: 'The fun ones', sub: 'Laughing all night', bg: '#AAEE44' },
  { emoji: '🫶', label: 'Her people', sub: 'Lucky to know her', bg: '#FF3CAC', col: '#FFFBE8' },
  { emoji: '🌸', label: 'Navratri nights', sub: 'Dressed and ready', bg: '#FF5C1A', col: '#FFFBE8' },
  { emoji: '☕', label: 'Coffee runs', sub: 'Always iced', bg: '#FFD600' },
  { emoji: '🎶', label: 'Playlist era', sub: 'She curated it', bg: '#00C9B1' },
  { emoji: '🥂', label: 'Every celebration', sub: 'She showed up', bg: '#FF3CAC', col: '#FFFBE8' },
  { emoji: '⚡', label: 'The electric nights', sub: 'Unforgettable', bg: '#3B6EF8', col: '#FFFBE8' },
  { emoji: '✨', label: 'Today', sub: 'Happy 30th Divya', bg: '#FFD600' },
];

const msgs = [
  { text: 'You are the most completely yourself person I have ever known.', badge: '💛' },
  { text: 'You never needed to be louder. You already filled the room.', badge: '🌸' },
  { text: "Some people make everywhere they go feel like somewhere worth being. That's you.", badge: '🌍' },
  { text: 'Thirty is just more of you being unreasonably good at life.', badge: '✨' },
  { text: 'I hope today is as loud and bright and joyful as you are.', badge: '🎊' },
  { text: "Everyone who has ever known you is better for it. That's the truth.", badge: '🧡' },
  { text: 'You have this rare ability to make ordinary days feel like something worth remembering.', badge: '🌅' },
  { text: "The way you show up for people — fully, without holding back — that's not common.", badge: '💫' },
  { text: "You've always known exactly who you are. That's rarer than you think.", badge: '🦋' },
  { text: 'Your laugh should be a protected national treasure.', badge: '😂' },
  { text: 'You make every playlist better just by being in the room.', badge: '🎶' },
  { text: "Thirty years of Divya and somehow the world still isn't ready.", badge: '⚡' },
  { text: 'The energy you bring into a space lingers long after you leave.', badge: '🌊' },
  { text: 'You have impeccable taste and zero apologies about it.', badge: '🦚' },
  { text: 'Your honesty is one of the most generous things about you.', badge: '🌙' },
  { text: "Every city you've lived in is better for having had you.", badge: '🍁' },
  { text: 'You turn plans into adventures without even trying.', badge: '🗺️' },
  { text: 'The way you remember things — details, moments, people — it matters.', badge: '🌻' },
  { text: 'You have carried hard things with more grace than you give yourself credit for.', badge: '🌷' },
  { text: "People feel seen when they talk to you. That's a gift.", badge: '👁️' },
  { text: "You've never once been boring. Not for a single second.", badge: '🎪' },
  { text: "The version of you at 30 is the best one yet. And that's saying something.", badge: '🥂' },
  { text: "You have a way of making people feel like they're exactly where they should be.", badge: '🏠' },
  { text: 'Your confidence has always looked good on you.', badge: '🔥' },
  { text: "You are somebody's favourite person. More than one somebody's.", badge: '💌' },
  { text: 'The world is genuinely more interesting with you in it.', badge: '🌈' },
  { text: "You've always moved at your own pace and it's always been exactly right.", badge: '🎯' },
  { text: 'Thirty candles. Thirty years. Still the most alive person in the room.', badge: '🕯️' },
  { text: "Whatever comes next — you're ready. You always have been.", badge: '🚀' },
  { text: 'Happy birthday, Divya. From someone who is very glad you exist.', badge: '🎂' },
];

const accs = ['#FF5C1A', '#FFD600', '#FF3CAC', '#00C9B1', '#3B6EF8', '#AAEE44'];
const cc = [...accs, '#FFFBE8'];

const mqW = [
  '✦ HAPPY 30TH DIVYA',
  '🎉 THIRTY IS EVERYTHING',
  '✦ CHAOTIC GOOD',
  '💛 SHE SHOWED UP',
  '✦ HAPPY BIRTHDAY DIVYA',
  '🌸 THIRTY YEARS OF HER',
  '✦ FROM TUSSHAR WITH LOVE',
];

const mqC = ['o', 'y', 'p', 't', 'l'];

function getEl(id) {
  return document.getElementById(id);
}

/* ─── MARQUEE ────────────────────────────────────── */

function buildMQ(id) {
  const el = getEl(id);
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

const rg = getEl('rgrid');

if (rg) {
  reasons.forEach(([em, txt], i) => {
    const c = document.createElement('div');
    c.className = 'rc';
    c.setAttribute('data-n', i + 1);
    c.style.transitionDelay = i * 0.04 + 's';

    c.innerHTML = `
      <span class="re">${em}</span>
      <div class="rtx">${txt}</div>
    `;

    c.addEventListener('mouseenter', () => {
      c.style.borderColor = accs[i % accs.length];
    });

    c.addEventListener('mouseleave', () => {
      c.style.borderColor = '';
    });

    rg.appendChild(c);
  });
}

/* ─── VIDEOS ─────────────────────────────────────── */

const vg = getEl('vid-grid');

if (vg) {
  videos.forEach((v, i) => {
    const card = document.createElement('div');
    card.className = 'vid-card';
    card.style.transitionDelay = i * 0.1 + 's';

    card.innerHTML = `
      <div class="vid-thumb-placeholder" style="background:${v.bg}">
        ${
          v.poster
            ? `<img src="${v.poster}" class="vid-thumb" alt="${v.label}" onerror="this.style.display='none'">`
            : ''
        }
        <div class="vid-play-btn">▶</div>
      </div>
      <div class="vid-info">
        <div class="vid-label">${v.label}</div>
        <div class="vid-caption">${v.caption}</div>
      </div>
    `;

    card.addEventListener('click', () => openVid(v.src));
    vg.appendChild(card);
  });
}

/* ─── GALLERY ────────────────────────────────────── */

const ms = getEl('masonry');

if (ms) {
  tiles.forEach((t, i) => {
    const tile = document.createElement('div');
    tile.className = 'ptile';
    tile.style.transitionDelay = i * 0.07 + 's';
    tile.style.background = t.bg;

    const tc = t.col || '#0F0A00';

    const hasPhoto =
      t.photo &&
      typeof PHOTOS !== 'undefined' &&
      PHOTOS &&
      PHOTOS[t.photo];

    if (hasPhoto) {
      const imgSrc = PHOTOS[t.photo];

      tile.innerHTML = `
        <div style="position:relative;">
          <img
            src="${imgSrc}"
            alt="${t.label}"
            style="width:100%;display:block;object-fit:cover;max-height:340px;"
            onerror="
              this.closest('.ptile').innerHTML =
              '<div class=&quot;ti&quot;>' +
              '<div class=&quot;te&quot;>📸</div>' +
              '<div class=&quot;tl&quot; style=&quot;color:${tc}&quot;>${t.label}</div>' +
              '<div class=&quot;ts&quot; style=&quot;color:${tc}&quot;>Missing image: ${imgSrc}</div>' +
              '</div>';
            "
          >
          <div style="position:absolute;bottom:0;left:0;right:0;padding:1rem 1.2rem;background:linear-gradient(to top,rgba(0,0,0,0.75),transparent);">
            <div style="font-family:'Fraunces',serif;font-style:italic;font-size:18px;color:#fff;font-weight:300;">${t.label}</div>
            <div style="font-family:'Anybody',sans-serif;font-weight:700;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-top:3px;">${t.sub}</div>
          </div>
        </div>
      `;
    } else {
      tile.innerHTML = `
        <div class="ti">
          <div class="te">${t.emoji || '📸'}</div>
          <div class="tl" style="color:${tc}">${t.label}</div>
          <div class="ts" style="color:${tc}">
            ${t.photo ? `Missing PHOTOS.${t.photo}` : t.sub}
          </div>
        </div>
      `;
    }

    tile.addEventListener('click', (e) => {
      openLB(t.photo ? '📸' : t.emoji, t.label, t.sub);
      confetti(e.clientX, e.clientY, 20);
    });

    ms.appendChild(tile);
  });
}

/* ─── MESSAGES ───────────────────────────────────── */

const mbg = ['#FFD600', '#00C9B1', '#AAEE44', '#3B6EF8', '#FFD600', '#FF3CAC'];
const mg = getEl('mgrid');

if (mg) {
  msgs.forEach((m, i) => {
    const c = document.createElement('div');
    c.className = 'mc';
    c.style.transitionDelay = i * 0.1 + 's';

    c.innerHTML = `
      <div class="mbadge" style="background:${mbg[i % mbg.length]}">${m.badge}</div>
      <div class="mtx">"${m.text}"</div>
      <div class="mfr">— With love</div>
    `;

    c.addEventListener('click', (e) => {
      confetti(e.clientX, e.clientY, 12);
    });

    mg.appendChild(c);
  });
}

/* ─── CURSOR ─────────────────────────────────────── */

const cur = getEl('cur');
const cur2 = getEl('cur2');

let mx = 0;
let my = 0;
let rx = 0;
let ry = 0;
let ci = 0;

if (cur && cur2) {
  cur.style.opacity = '0';
  cur2.style.opacity = '0';

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;

    cur.style.left = mx + 'px';
    cur.style.top = my + 'px';
    cur.style.opacity = '1';

    cur2.style.opacity = '0.7';
  });

  setInterval(() => {
    ci = (ci + 1) % accs.length;
    cur.style.background = accs[ci];
  }, 400);

  function animCur() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;

    cur2.style.left = rx + 'px';
    cur2.style.top = ry + 'px';

    requestAnimationFrame(animCur);
  }

  animCur();

  document.addEventListener('mousedown', () => {
    cur.style.transform = 'translate(-50%,-50%) scale(2)';
  });

  document.addEventListener('mouseup', () => {
    cur.style.transform = 'translate(-50%,-50%) scale(1)';
  });
}

/* ─── CONFETTI ───────────────────────────────────── */

function confetti(x, y, n = 40) {
  for (let i = 0; i < n; i++) {
    const el = document.createElement('div');
    el.className = 'conf';

    const ang = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 180;

    el.style.cssText = `
      left:${x}px;
      top:${y}px;
      background:${cc[Math.floor(Math.random() * cc.length)]};
      --dx:${Math.cos(ang) * dist}px;
      animation-delay:${Math.random() * 0.2}s;
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
      width:${6 + Math.random() * 8}px;
      height:${6 + Math.random() * 8}px;
    `;

    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 3500);
  }
}

/* ─── BIG 30 CONFETTI ────────────────────────────── */

const bignum = getEl('bignum');

if (bignum) {
  bignum.addEventListener('click', (e) => {
    confetti(e.clientX, e.clientY, 80);

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        confetti(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight * 0.5,
          25
        );
      }, i * 200);
    }
  });
}

/* ─── GLOBAL RIPPLE ──────────────────────────────── */

document.addEventListener('click', (e) => {
  const r = document.createElement('div');
  r.className = 'rip';

  r.style.cssText = `
    left:${e.clientX}px;
    top:${e.clientY}px;
    width:40px;
    height:40px;
    border:2px solid ${cc[Math.floor(Math.random() * cc.length)]};
  `;

  document.body.appendChild(r);

  setTimeout(() => {
    r.remove();
  }, 900);
});

/* ─── LIGHTBOX ───────────────────────────────────── */

function openLB(em, ti, tx) {
  const lbe = getEl('lbe');
  const lbt = getEl('lbt');
  const lbtx = getEl('lbtx');
  const lbox = getEl('lbox');

  if (!lbe || !lbt || !lbtx || !lbox) return;

  lbe.textContent = em || '📸';
  lbt.textContent = ti || '';
  lbtx.textContent = tx || '';

  lbox.style.display = 'flex';
}

function closeLB() {
  const lbox = getEl('lbox');
  if (!lbox) return;

  lbox.style.display = 'none';
}

window.closeLB = closeLB;

/* ─── VIDEO MODAL ────────────────────────────────── */

function openVid(src) {
  const player = getEl('vmodal-player');
  const modal = getEl('vmodal');

  if (!player || !modal) return;

  player.src = src;
  player.play().catch(() => {});

  modal.classList.add('open');
}

function closeVid() {
  const player = getEl('vmodal-player');
  const modal = getEl('vmodal');

  if (!player || !modal) return;

  player.pause();
  player.src = '';

  modal.classList.remove('open');
}

window.closeVid = closeVid;

/* ─── INTERSECTION OBSERVER ───────────────────────── */

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
      }
    });
  },
  { threshold: 0.08 }
);

document
  .querySelectorAll('.rc, .ptile, .mc, .fu, .vid-card, .letter-body p')
  .forEach((el) => {
    obs.observe(el);
  });

/* ─── LOAD BURST ─────────────────────────────────── */

window.addEventListener('load', () => {
  setTimeout(() => {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        confetti(
          Math.random() * window.innerWidth,
          window.innerHeight * 0.3 + Math.random() * 200,
          30
        );
      }, i * 350);
    }
  }, 700);
});

/* ═══════════════════════════════════════════════════
   BIRTHDAY CAKE — Canvas
   ═══════════════════════════════════════════════════ */

const canvas = getEl('cake-canvas');

if (canvas) {
  const ctx = canvas.getContext('2d');

  const W = 520;
  const H = 400;
  const TOTAL = 30;

  canvas.width = W;
  canvas.height = H;

  const candleData = [];

  let candlesLit = false;
  let candlesLeft = TOTAL;
  let wishMade = false;

  function initCandles() {
    candleData.length = 0;

    const rows = [
      { y: 195, count: 12, xStart: 90, gap: 29 },
      { y: 255, count: 10, xStart: 110, gap: 31 },
      { y: 310, count: 8, xStart: 130, gap: 33 },
    ];

    rows.forEach((row) => {
      for (let i = 0; i < row.count; i++) {
        candleData.push({
          x: row.xStart + i * row.gap,
          baseY: row.y,
          lit: false,
          blown: false,
          flicker: Math.random() * Math.PI * 2,
        });
      }
    });
  }

  initCandles();

  function roundRect(c, x, y, w, h, r, fill, stroke, lw) {
    c.save();
    c.beginPath();

    if (typeof c.roundRect === 'function') {
      c.roundRect(x, y, w, h, r);
    } else {
      c.moveTo(x + r, y);
      c.lineTo(x + w - r, y);
      c.quadraticCurveTo(x + w, y, x + w, y + r);
      c.lineTo(x + w, y + h - r);
      c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      c.lineTo(x + r, y + h);
      c.quadraticCurveTo(x, y + h, x, y + h - r);
      c.lineTo(x, y + r);
      c.quadraticCurveTo(x, y, x + r, y);
    }

    if (fill) {
      c.fillStyle = fill;
      c.fill();
    }

    if (stroke) {
      c.strokeStyle = stroke;
      c.lineWidth = lw;
      c.stroke();
    }

    c.restore();
  }

  function drawDots(c, x, y, w, h, col, n) {
    c.save();

    for (let i = 0; i < n; i++) {
      const dx = x + 20 + (i / (n - 1)) * (w - 40);

      c.beginPath();
      c.arc(dx, y + h - 10, 5, 0, Math.PI * 2);
      c.fillStyle = col;
      c.strokeStyle = '#0F0A00';
      c.lineWidth = 1.5;
      c.fill();
      c.stroke();
    }

    c.restore();
  }

  function drawCake() {
    ctx.clearRect(0, 0, W, H);

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(260, 368, 160, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.ellipse(260, 358, 170, 22, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#0F0A00';
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    roundRect(ctx, 95, 315, 330, 55, 12, '#FF5C1A', '#0F0A00', 3);
    drawDots(ctx, 95, 315, 330, 55, '#FFD600', 8);

    roundRect(ctx, 115, 255, 290, 62, 12, '#FF3CAC', '#0F0A00', 3);
    drawDots(ctx, 115, 255, 290, 62, '#AAEE44', 7);

    roundRect(ctx, 140, 196, 240, 62, 12, '#FFD600', '#0F0A00', 3);
    drawDots(ctx, 140, 196, 240, 62, '#FF3CAC', 6);

    ctx.save();
    ctx.font = 'bold 38px "Anybody", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#FFFBE8';
    ctx.strokeStyle = '#0F0A00';
    ctx.lineWidth = 5;
    ctx.strokeText('30', 260, 286);
    ctx.fillText('30', 260, 286);
    ctx.restore();

    candleData.forEach((c) => {
      const cx = c.x;
      const cy = c.baseY - 30;

      roundRect(ctx, cx - 4, cy, 8, 30, 3, c.blown ? '#999' : '#FFFBE8', '#0F0A00', 1.5);

      if (c.lit && !c.blown) {
        const t = Date.now() / 120;
        const flameSize = 8 + Math.sin(t + c.flicker) * 2;

        ctx.save();

        ctx.beginPath();
        ctx.ellipse(cx, cy - 8, flameSize * 0.7, flameSize, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#FFD600';
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(cx, cy - 6, flameSize * 0.35, flameSize * 0.55, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#FF5C1A';
        ctx.fill();

        ctx.restore();
      }

      if (c.blown) {
        const t = Date.now() / 700;

        ctx.save();
        ctx.strokeStyle = 'rgba(15,10,0,0.25)';
        ctx.lineWidth = 1.5;

        for (let i = 0; i < 2; i++) {
          ctx.beginPath();
          ctx.moveTo(cx, cy - 6);
          ctx.bezierCurveTo(
            cx - 8 + Math.sin(t + i) * 4,
            cy - 22,
            cx + 8 + Math.cos(t + i) * 4,
            cy - 35,
            cx + Math.sin(t + i) * 10,
            cy - 48
          );
          ctx.stroke();
        }

        ctx.restore();
      }
    });

    if (wishMade) {
      ctx.save();
      ctx.font = 'bold 24px "Anybody", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FFFBE8';
      ctx.strokeStyle = '#0F0A00';
      ctx.lineWidth = 4;
      ctx.strokeText('WISH MADE ✨', 260, 80);
      ctx.fillText('WISH MADE ✨', 260, 80);
      ctx.restore();
    }
  }

  function animateCake() {
    drawCake();
    requestAnimationFrame(animateCake);
  }

  animateCake();

  const btnLight = getEl('btn-light');
  const btnBlow = getEl('btn-blow');
  const cakeMsg = getEl('cake-msg');
  const micHint = document.querySelector('.mic-hint');

  function lightCandles() {
    candlesLit = true;
    candlesLeft = TOTAL;
    wishMade = false;

    candleData.forEach((c) => {
      c.lit = true;
      c.blown = false;
    });

    if (btnLight) btnLight.style.display = 'none';
    if (btnBlow) btnBlow.style.display = 'inline-block';
    if (micHint) micHint.style.display = 'block';
    if (cakeMsg) cakeMsg.textContent = 'Make a wish, then blow the candles.';
  }

  function blowCandles() {
    if (!candlesLit) return;

    candleData.forEach((c, i) => {
      setTimeout(() => {
        c.lit = false;
        c.blown = true;
        candlesLeft--;

        if (candlesLeft <= 0) {
          wishMade = true;
          candlesLit = false;

          if (cakeMsg) cakeMsg.textContent = 'Wish made. Happy 30th Divya ✨';
          if (btnBlow) btnBlow.style.display = 'none';
          if (btnLight) btnLight.style.display = 'inline-block';
          if (micHint) micHint.style.display = 'none';

          confetti(window.innerWidth / 2, window.innerHeight / 2, 120);
        }
      }, i * 45);
    });
  }

  if (btnLight) {
    btnLight.addEventListener('click', lightCandles);
  }

  if (btnBlow) {
    btnBlow.addEventListener('click', blowCandles);
  }

  canvas.addEventListener('click', () => {
    if (!candlesLit) {
      lightCandles();
    } else {
      blowCandles();
    }
  });
}
