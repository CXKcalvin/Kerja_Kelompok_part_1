// Fungsi untuk toggle input custom
function toggleCustomInput(select) {
  const parent = select.closest('th'); // Cari parent th terdekat
  const customInput = parent.querySelector('.custom-porsi');
  const isCustom = select.value === 'custom';
  
  if (customInput) {
    customInput.style.display = isCustom ? 'inline-block' : 'none';
  }
  
  // Kalau berubah, update total harga
  updateTotal();
}

// Fungsi untuk menghitung dan menampilkan total harga
function updateTotal() {
  const params = new URLSearchParams(window.location.search);
  const menuId = params.get("menu");
  const menu = menus.find(m => m.id === menuId);

  if (!menu) return;

  // Update untuk container-pesan (tabel pertama)
  const container1 = document.querySelector('.container-pesan');
  if (container1) {
    const select = container1.querySelector('.cek-porsi');
    const customInput = container1.querySelector('.custom-porsi');
    const tampilkan = container1.querySelector('.tampilkan');
    
    if (select && tampilkan) {
      let porsi = 1;

      if (select.value === "custom") {
        porsi = parseInt(customInput?.value) || 1;
      } else {
        porsi = parseInt(select.value) || 1;
      }

      const totalHarga = menu.harga * porsi;
      tampilkan.textContent = `Rp ${totalHarga.toLocaleString()}`;
    }
  }

  // Update untuk container-pesan-2 (tabel kedua)
  const container2 = document.querySelector('.container-pesan-2');
  if (container2) {
    const select = container2.querySelector('.cek-porsi');
    const customInput = container2.querySelector('.custom-porsi');
    const tampilkan = container2.querySelector('.tampilkan');
    
    if (select && tampilkan) {
      let porsi = 1;

      if (select.value === "custom") {
        porsi = parseInt(customInput?.value) || 1;
      } else {
        porsi = parseInt(select.value) || 1;
      }

      const totalHarga = menu.harga * porsi;
      tampilkan.textContent = `Rp ${totalHarga.toLocaleString()}`;
    }
  }
}

// Panggil updateTotal saat halaman selesai dimuat
window.addEventListener("load", function () {
  // Isi data menu
  const params = new URLSearchParams(window.location.search);
  const menuId = params.get("menu");
  const menu = menus.find(m => m.id === menuId);
  
  if (menu) {    
    // Isi semua elemen dengan class 'nama'
    document.querySelectorAll(".nama").forEach(el => {
      el.textContent = menu.nama;
    });
    
    // Isi semua elemen dengan class 'harga'
    document.querySelectorAll(".harga").forEach(el => {
      el.textContent = `Rp ${menu.harga.toLocaleString()}`;
    });
  }

  // Setup event listeners untuk semua select
  document.querySelectorAll(".cek-porsi").forEach(select => {
    select.addEventListener("change", function() {
      toggleCustomInput(this);
    });
  });

  // Setup event listeners untuk semua custom input
  document.querySelectorAll(".custom-porsi").forEach(input => {
    input.addEventListener("input", updateTotal);
  });

  // Initial update
  updateTotal();
});

// Fungsi dicek() untuk proses pembayaran
function dicek() {
  const params = new URLSearchParams(window.location.search);
  const menuId = params.get("menu");
  const menu = menus.find(m => m.id === menuId);
  
  if (!menu) {
    alert("Menu tidak ditemukan");
    return;
  }

  // Cek container mana yang memiliki input bayar terisi
  const containers = document.querySelectorAll('.container-pesan, .container-pesan-2');
  let activeContainer = null;
  
  for (let container of containers) {
    const bayarInput = container.querySelector('.cek-harga');
    if (bayarInput && bayarInput.value && bayarInput.value > 0) {
      activeContainer = container;
      break;
    }
  }
  
  // Jika tidak ada yang terisi, gunakan container pertama
  if (!activeContainer) {
    activeContainer = document.querySelector('.container-pesan');
  }
  
  const selectPorsi = activeContainer.querySelector('.cek-porsi');
  const customInput = activeContainer.querySelector('.custom-porsi');
  const bayarInput = activeContainer.querySelector('.cek-harga');
  
  let porsi = 1;
  
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

  const totalHarga = menu.harga * porsi;
  const bayar = parseInt(bayarInput.value);

  if (!bayar || bayar <= 0) {
    alert("Masukkan jumlah uang");
    return;
  }

  if (bayar < totalHarga) {
    alert(`Uang Anda kurang Rp ${(totalHarga - bayar).toLocaleString()}`);
  } else {
    const kembalian = bayar - totalHarga;
    window.location.href = `total.html?menu=${menuId}&porsi=${porsi}&total=${totalHarga}&bayar=${bayar}&kembali=${kembalian}`;
  }
}