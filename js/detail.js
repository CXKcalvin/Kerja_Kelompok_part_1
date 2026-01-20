const params = new URLSearchParams(window.location.search);
const menuId = params.get("menu");

const menu = menus.find(m => m.id === menuId);
const menu_img = menus.filter(m => m.gambar2 === menuId);

if (menu) {
  document.getElementById("nama").textContent = menu.nama;
  document.getElementById("harga").textContent = "Harga: Rp " + menu.harga;
}
if (menu_img) {
  document.getElementById("gambar").src = menu.gambar2;
}
