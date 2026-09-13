
function tampilkanData() {
    let container = document.getElementById('container');
    let cekElemen = document.getElementById('identitas');
    
    if (!cekElemen) {
        
        let div = document.createElement('div');
        div.id = 'identitas';
        div.className = 'classcontent';
        div.innerHTML = 'Nama: Randy Nicholas Wu <br> <b>NIM:</b> 535250048';
        container.appendChild(div);
    }
}

function hapusData() {
    let elemen = document.getElementById('identitas');
    if (elemen) {
        elemen.remove();
    } else {
        alert('Elemen belum ada/udah diapus');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tombolTampil').addEventListener('click', tampilkanData);
    document.getElementById('tombolHapus').addEventListener('click', hapusData);
});