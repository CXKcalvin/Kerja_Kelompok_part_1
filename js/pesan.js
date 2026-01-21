const ck_harga = document.getElementById('cek-harga');


function dicek() {
    if (ck_harga === 0 || ck_harga.value === '') {
        alert('Mohon masukkan jumlah pesanan Anda!');
    } else {
        window.location.href = '../html/pesan.html';
    }
}
