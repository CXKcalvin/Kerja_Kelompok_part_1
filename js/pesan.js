const ck_porsi = parseInt(document.getElementById('cek-porsi'));
const ck_harga = document.getElementById('cek-harga');
const harga = document.getElementById('harga');

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
