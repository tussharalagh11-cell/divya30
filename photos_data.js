const PHOTOS = {
  p01: "/p01.jpg",
  p02: "/p02.jpg",
  p03: "/p03.jpg",
  p04: "/p04.jpg",
  p05: "/p05.jpg",
  p06: "/p06.jpg",
  p07: "/p07.png",
  p08: "/p08.png",
  p09: "/p09.png",
  p10: "/p10.png",
  p11: "/p11.png",
  p12: "/p12.png",
  p13: "/p13.png",
  p14: "/p14.png",
  p15: "/p15.jpg",
  p16: "/p16.jpg",
  p17: "/p17.jpg",
  p18: "/p18.jpg",
  p19: "/p19.jpg",
};

const getPhoto = (photoKey, fallbackKey = "p01") => {
  return PHOTOS[photoKey] || PHOTOS[fallbackKey];
};
