const ck_porsi = document.getElementById('cek-porsi');
const ck_harga = document.querySelectorAll('.cek-harga');
const total_harga = document.getElementById('harga');

function dicek() {
    const hasil = parseInt(ck_harga) + parseInt(total_harga);
    if (ck_harga.value == ""){
        alert("Masukkan Jumlah Bayar");
    }
    else if (total_harga < hasil){
        alert("Uang Anda Tidak Cukup");
    }
    else if (total_harga == hasil){
        alert("Uang Pas, Terima Kasih");
        window.location.href = "/html/pesan.html";
    }
    else {
        window.location.href = "/html/pesan.html";
    }
}
