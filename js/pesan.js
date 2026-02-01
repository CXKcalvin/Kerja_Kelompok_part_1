<<<<<<< HEAD
const ck_porsi = document.getElementById('cek-porsi');
const ck_harga = document.querySelectorAll('.cek-harga');
const total_harga = document.getElementById('harga');
=======
const ck_porsi = parseInt(document.getElementById('cek-porsi'));
const ck_harga = document.getElementById('cek-harga');
const harga = document.getElementById('harga');
>>>>>>> 9c0b272a981caa9b7220228c3b0b6fe98a9255d3

function dicek() {
    const total_harga = parseInt(ck_porsi.value) * parseInt(harga.value);
    if (ck_harga.value == 0){
        alert("Masukkan Jumlah Bayar");
    }
    else if (total_harga < ck_harga.value){
        alert("Uang Anda Tidak Cukup");
    }
    else if (total_harga == ck_harga.value){
        window.location.href = "/html/pesan.html";
    }
    else if (total_harga > ck_harga.value){
        window.location.href = "/html/pesan.html";
    }
    else {
        alert("Ada Kesalahan")
    }
}
