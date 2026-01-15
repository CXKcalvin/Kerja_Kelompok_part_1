const daftar = document.getElementById("daftar");

menus.forEach(menu => {
  const link = document.createElement("a");
  link.href = `/html/menu.html?menu=${menu.id}`;

  const divMenu = document.createElement("div");
  divMenu.className = "menu";

  const img = document.createElement("img");
  img.src = menu.gambar;

  const nama = document.createElement("b");
  nama.textContent = menu.nama;

  divMenu.appendChild(img);
  divMenu.appendChild(nama);
  link.appendChild(divMenu);
  daftar.appendChild(link);
});
