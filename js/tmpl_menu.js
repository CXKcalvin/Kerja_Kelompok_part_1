const params = new URLSearchParams(window.location.search);
const menuId = params.get("menu");

const menu = menus.find(m => m.id === menuId);

if (menu) {
  document.querySelectorAll(".nama").forEach(el => {el.textContent = menu.nama;});
  
  document.querySelectorAll(".harga").forEach(el => {el.textContent = `Rp ${menu.harga.toLocaleString()}`;});

  document.getElementById("gambar").src = menu.gambar2;
}
