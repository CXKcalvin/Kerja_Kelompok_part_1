const params = new URLSearchParams(window.location.search);
const menuId = params.get("menu");

const menu = menus.find(m => m.id === menuId);

if (menu) {
  document.getElementById("nama").textContent = menu.nama;
  
  document.getElementById("harga").textContent = `Rp ${menu.harga.toLocaleString()}`;

  document.getElementById("gambar").src = menu.gambar2;
}
