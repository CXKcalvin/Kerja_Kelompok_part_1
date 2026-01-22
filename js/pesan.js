const ck_porsi = document.getElementById('cek-porsi');
const ck_harga = document.getElementById('cek-harga');
const total_harga = document.getElementById('harga');


function dicek() {
    if (ck_harga=== "") {
            alert('Mohon masukkan total harga pesanan Anda!');
        }
        else if (ck_porsi === 0 || ck_porsi=== ''){
            alert('Mohon masukkan jumlah pesanan Anda!');
        }
        else if (ck_harga< total_harga){
            alert('Total harga yang Anda masukkan kurang dari harga menu!');
        }
        else if (ck_harga> total_harga){
            window.location.href = '../html/pesan.html';
        }
        else if (ck_harga== total_harga){
            window.location.href = '../html/pesan.html';
        }
}
