// Fungsi untuk toggle input custom
function toggleCustomInput(select) {
  const customInput = document.getElementById('custom-porsi');
  const isCustom = select.value === 'custom';
  customInput.style.display = isCustom ? 'inline-block' : 'none';
  
  // Kalau berubah, update total harga
  updateTotal();
}

// Fungsi untuk menghitung dan menampilkan total harga
function updateTotal() {
  const params = new URLSearchParams(window.location.search);
  const menuId = params.get("menu");
  const menu = menus.find(m => m.id === menuId);
  
  if (!menu) return;

  // Ambil porsi
  let porsi = 1;
  const selectPorsi = document.getElementById("cek-porsi");
  const customInput = document.getElementById("custom-porsi");
  
  if (selectPorsi.value === "custom") {
    const customVal = customInput.value;
    porsi = customVal ? parseInt(customVal) : 0;
  } else {
    porsi = parseInt(selectPorsi.value);
  }

  // Hitung total
  const totalHarga = menu.harga * (porsi > 0 ? porsi : 1);
  
  // Tampilkan
  document.getElementById("tampilkan").innerHTML = `Rp ${totalHarga.toLocaleString()}`;
}

// Panggil updateTotal saat halaman selesai dimuat
window.addEventListener('load', function() {
  updateTotal();

  // Tambahkan event listener ke input custom agar update saat diketik
  const customInput = document.getElementById("custom-porsi");
  customInput.addEventListener('input', updateTotal);
});

// Fungsi dicek() untuk proses pembayaran (tetap sama, tapi kita bisa pakai updateTotal di dalamnya kalau perlu)
function dicek() {
  // Ambil data menu dari URL
  const params = new URLSearchParams(window.location.search);
  const menuId = params.get("menu");
  const menu = menus.find(m => m.id === menuId);
  
  if (!menu) {
    alert("Menu tidak ditemukan");
    return;
  }

  // Ambil jumlah porsi (sama seperti di updateTotal)
  let porsi = 1;
  const selectPorsi = document.getElementById("cek-porsi");
  const customInput = document.getElementById("custom-porsi");
  
  if (selectPorsi.value === "custom") {
    const customPorsi = customInput.value;
    if (!customPorsi || customPorsi <= 0) {
      alert("Masukkan jumlah porsi yang valid");
      return;
    }
    porsi = parseInt(customPorsi);
  } else {
    porsi = parseInt(selectPorsi.value);
  }

  // Hitung total harga
  const totalHarga = menu.harga * porsi;

  // Ambil nilai bayar
  const bayar = document.querySelector(".cek-harga").value;
  if (!bayar || bayar <= 0) {
    alert("Masukkan jumlah uang");
    return;
  }

  // Cek kecukupan uang
  if (bayar < totalHarga) {
    alert(`Uang Anda kurang Rp ${totalHarga - bayar}`);
  } else {
    const kembalian = bayar - totalHarga;
    window.location.href = `total.html?menu=${menuId}&porsi=${porsi}&total=${totalHarga}&bayar=${bayar}&kembali=${kembalian}`;
  }
}