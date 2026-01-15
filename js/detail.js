const params = new URLSearchParams(window.location.search);
const menuId = params.get("menu");

const menu = menus.find(m => m.id === menuId);

if (menu) {
  document.getElementById("nama").textContent = menu.nama;
  document.getElementById("gambar").src = menu.gambar;
  document.getElementById("harga").textContent = "Harga: Rp " + menu.harga;
}
