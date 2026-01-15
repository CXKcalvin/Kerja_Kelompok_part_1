const menus = [
  {
    id: "pecel-lele",
    nama: "Pecel Lele",
    harga: 15000,
    gambar: "img/pecel lele.webp"
  },
  {
    id: "seblak",
    nama: "Seblak",
    harga: 12000,
    gambar: "img/seblak.webp"
  },
  {
    id: "bebek-bakar",
    nama: "Bebek Bakar",
    harga: 25000,
    gambar: "img/bebek bakar.webp"
  },
  {
    id: "ayam-bakar",
    nama: "Ayam Bakar",
    harga: 20000,
    gambar: "img/ayam bakar.webp"
  },
  {
    id: "es-teh",
    nama: "Es Teh",
    harga: 5000,
    gambar: "img/es teh.jpg"
  },
  {
    id: "pop-ice",
    nama: "Pop Ice",
    harga: 7000,
    gambar: "img/pop ice.jpeg"
  }
];

const hasil = menus.filter(m => m.harga > 14000);
console.log(hasil);

