const cekPorsi = document.querySelectorAll('#cek-porsi');
const cekHarga = document.querySelectorAll('.cek-harga');
const hargaText = document.querySelectorAll('#harga');

function dicek() {

    // ambil harga satuan (hapus Rp kalau ada)
    const hargaSatuan = parseInt(hargaText[0].innerText);

    // ambil jumlah porsi
    const jumlahPorsi = parseInt(cekPorsi[0].value);

    // hitung total harga
    const totalHarga = hargaSatuan * jumlahPorsi;

    // ambil uang yang dimasukkan user
    const uangUser = parseInt(cekHarga[0].value);

    if (!uangUser || uangUser == 0) {
        alert("Masukkan jumlah bayar dulu bro");
        return;
    }

    if (uangUser < totalHarga) {
        alert("Uang lu kurang bro");
    } 
    else {
        window.location.href = "../html/total.html";
    }
}