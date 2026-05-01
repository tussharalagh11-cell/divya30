/* ═══════════════════════════════════════════════════
   DIVYA IS 30 — script.js
   Full fixed version for existing public/photos and public/videos structure
   ═══════════════════════════════════════════════════ */

const videos = [
  {
    src: '/videos/memory-1.mp4',
    poster: '',
    label: 'Memory 01',
    caption: 'Add your caption here',
    bg: '#FF5C1A',
  },
  {
    src: '/videos/memory-2.mp4',
    poster: '',
    label: 'Memory 02',
    caption: 'Add your caption here',
    bg: '#FF3CAC',
  },
  {
    src: '/videos/memory-3.mp4',
    poster: '',
    label: 'Memory 03',
    caption: 'Add your caption here',
    bg: '#FFD600',
  },
  {
    src: '/videos/memory-4.mp4',
    poster: '',
    label: 'Memory 04',
    caption: 'Add your caption here',
    bg: '#00C9B1',
  },
];

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
  { photo: 'p40', label: 'Baby Divya II', sub: 'Little puffer coat, big smile', bg: '#FFD600' },

  { photo: 'p01', label: 'The GUESS era', sub: 'Pink was always right', bg: '#FFD600' },
  { photo: 'p05', label: 'Holi', sub: 'Colour on colour on colour', bg: '#00C9B1' },
  { photo: 'p25', label: 'Navratri red', sub: 'That smile at the garba', bg: '#FF3CAC' },
  { photo: 'p02', label: 'Navratri white', sub: 'Navratri ♡', bg: '#3B6EF8' },
  { photo: 'p04', label: 'Green lehenga', sub: 'Effortlessly stunning', bg: '#FF5C1A' },
  { photo: 'p06', label: 'The lehenga II', sub: 'She wore it like a queen', bg: '#AAEE44' },
  { photo: 'p16', label: 'Orange lehenga', sub: 'She showed up', bg: '#FF3CAC' },

  { photo: 'p38', label: 'Red gown', sub: 'The dress that stopped traffic', bg: '#FF5C1A' },
  { photo: 'p31', label: 'Navy blazer', sub: 'That smile, always', bg: '#3B6EF8' },
  { photo: 'p33', label: 'Navy gown', sub: 'Silk on the floor, so elegant', bg: '#FFD600' },
  { photo: 'p35', label: 'Squad goals', sub: '7 girls, 7 outfits, one night', bg: '#00C9B1' },

  { photo: 'p26', label: 'Henna & pear', sub: 'Mehndi hand, mischief smile', bg: '#AAEE44' },
  { photo: 'p32', label: 'Making rotis', sub: 'Striped dress, open flame', bg: '#FF3CAC' },
  { photo: 'p27', label: 'Gym selfie', sub: 'Reception lounge vibes', bg: '#FFD600' },
  { photo: 'p28', label: 'Coffee date', sub: 'Denim jacket & warm cup', bg: '#FF5C1A' },
  { photo: 'p37', label: 'Latte art', sub: 'Floral top, that smile', bg: '#3B6EF8' },
  { photo: 'p30', label: 'Lahori kulfi', sub: 'Falooda sign & a kulfi stick', bg: '#AAEE44' },
  { photo: 'p39', label: 'Burger & smiles', sub: 'Michael Kors & fries', bg: '#FF3CAC' },
  { photo: 'p19', label: 'Dinner out', sub: 'That laugh mid-bite', bg: '#FF5C1A' },
  { photo: 'p34', label: 'Breakfast laugh', sub: 'Hand over mouth, hotel brunch', bg: '#FFD600' },
  { photo: 'p17', label: 'Pizza in Almonte', sub: 'Hiding nothing but joy', bg: '#00C9B1' },
  { photo: 'p18', label: 'Gas station', sub: 'Sunglasses on head, always', bg: '#3B6EF8' },

  { photo: 'p36', label: 'Bear ears filter', sub: 'Lying down, pure cuteness', bg: '#FF3CAC' },
  { photo: 'p21', label: 'FaceTime laugh', sub: 'Eyes closed, full joy', bg: '#AAEE44' },
  { photo: 'p22', label: 'FaceTime soft', sub: 'Cheek on hand, pearl bracelet', bg: '#FFD600' },
  { photo: 'p23', label: 'Pearl bracelet night', sub: 'Dark & soft, heart watch', bg: '#FF5C1A' },

  { photo: 'p03', label: 'Saturday 2:37 PM', sub: 'A perfect ordinary day', bg: '#3B6EF8' },
  { photo: 'p20', label: 'Today', sub: 'Happy 30th Divya ✨', bg: '#FF3CAC' },
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

/* ─── REASONS ────────────────────────────────────── */

function buildReasons() {
  const rg = getEl('rgrid');
  if (!rg) return;

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

function buildVideos() {
  const vg = getEl('vid-grid');
  if (!vg) return;

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

function getPhotoSrc(photoKey) {
  if (!photoKey) return '';

  if (typeof PHOTOS !== 'undefined' && PHOTOS && PHOTOS[photoKey]) {
    return PHOTOS[photoKey];
  }

  return '';
}

function renderFallbackTile(tile, t, tc, message) {
  tile.innerHTML = `
    <div class="ti">
      <div class="te">${t.emoji || '📸'}</div>
      <div class="tl" style="color:${tc}">${t.label}</div>
      <div class="ts" style="color:${tc}">${message || t.sub}</div>
    </div>
  `;
}

function buildGallery() {
  const ms = getEl('masonry');
  if (!ms) return;

  tiles.forEach((t, i) => {
    const tile = document.createElement('div');
    tile.className = 'ptile';
    tile.style.transitionDelay = i * 0.07 + 's';
    tile.style.background = t.bg;

    const tc = t.col || '#0F0A00';
    const imgSrc = getPhotoSrc(t.photo);

    if (imgSrc) {
      tile.innerHTML = `
        <div style="position:relative;">
          <img
            src="${imgSrc}"
            alt="${t.label}"
            style="width:100%;display:block;object-fit:cover;max-height:340px;"
          >
          <div style="position:absolute;bottom:0;left:0;right:0;padding:1rem 1.2rem;background:linear-gradient(to top,rgba(0,0,0,0.75),transparent);">
            <div style="font-family:'Fraunces',serif;font-style:italic;font-size:18px;color:#fff;font-weight:300;">${t.label}</div>
            <div style="font-family:'Anybody',sans-serif;font-weight:700;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.6);margin-top:3px;">${t.sub}</div>
          </div>
        </div>
      `;

      const img = tile.querySelector('img');

      img.addEventListener('error', () => {
        renderFallbackTile(tile, t, tc, `Missing image: ${imgSrc}`);
      });
    } else {
      renderFallbackTile(tile, t, tc, t.photo ? `Missing PHOTOS.${t.photo}` : t.sub);
    }

    tile.addEventListener('click', (e) => {
      openLB(t.photo ? '📸' : t.emoji, t.label, t.sub);
      confetti(e.clientX, e.clientY, 20);
    });

    ms.appendChild(tile);
  });
}

/* ─── MESSAGES ───────────────────────────────────── */

function buildMessages() {
  const mg = getEl('mgrid');
  if (!mg) return;

  const mbg = ['#FFD600', '#00C9B1', '#AAEE44', '#3B6EF8', '#FFD600', '#FF3CAC'];

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

function setupCursor() {
  const cur = getEl('cur');
  const cur2 = getEl('cur2');

  if (!cur || !cur2) return;

  let mx = 0;
  let my = 0;
  let rx = 0;
  let ry = 0;
  let ci = 0;

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

function setupBigNumber() {
  const bignum = getEl('bignum');
  if (!bignum) return;

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

function setupGlobalRipple() {
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
}

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

function setupObserver() {
  const targets = document.querySelectorAll('.rc, .ptile, .mc, .fu, .vid-card, .letter-body p');

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('vis'));
    return;
  }

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

  targets.forEach((el) => obs.observe(el));
}

/* ─── CAKE ───────────────────────────────────────── */

function setupCake() {
  const canvas = getEl('cake-canvas');
  if (!canvas) return;

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

  function lightCandles() {
    candlesLit = true;
    candlesLeft = TOTAL;
    wishMade = false;

    candleData.forEach((c) => {
      c.lit = true;
      c.blown = false;
    });

    const btnLight = getEl('btn-light');
    const btnBlow = getEl('btn-blow');
    const cakeMsg = getEl('cake-msg');
    const micHint = document.querySelector('.mic-hint');

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

          const btnLight = getEl('btn-light');
          const btnBlow = getEl('btn-blow');
          const cakeMsg = getEl('cake-msg');
          const micHint = document.querySelector('.mic-hint');

          if (cakeMsg) cakeMsg.textContent = 'Wish made. Happy 30th Divya ✨';
          if (btnBlow) btnBlow.style.display = 'none';
          if (btnLight) btnLight.style.display = 'inline-block';
          if (micHint) micHint.style.display = 'none';

          confetti(window.innerWidth / 2, window.innerHeight / 2, 120);
        }
      }, i * 45);
    });
  }

  initCandles();
  animateCake();

  const btnLight = getEl('btn-light');
  const btnBlow = getEl('btn-blow');

  if (btnLight) btnLight.addEventListener('click', lightCandles);
  if (btnBlow) btnBlow.addEventListener('click', blowCandles);

  canvas.addEventListener('click', () => {
    if (!candlesLit) {
      lightCandles();
    } else {
      blowCandles();
    }
  });
}

/* ─── LOAD BURST ─────────────────────────────────── */

function setupLoadBurst() {
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
}

/* ─── BOOT ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  buildMQ('mq1');
  buildMQ('mq2');

  buildReasons();
  buildVideos();
  buildGallery();
  buildMessages();

  setupCursor();
  setupBigNumber();
  setupGlobalRipple();
  setupCake();
  setupObserver();
  setupLoadBurst();

  console.log('Divya birthday site loaded successfully.');
});
