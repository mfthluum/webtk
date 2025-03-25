// Animasi sederhana untuk efek scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi sederhana untuk elemen hero
const hero = document.querySelector('.hero');
hero.style.opacity = 0;

window.addEventListener('load', () => {
    hero.style.transition = 'opacity 1s ease-in-out';
    hero.style.opacity = 1;
});
// ... (kode animasi sebelumnya)

// Validasi formulir
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let pesan = document.getElementById('pesan').value;

    if (nama === '' || email === '' || pesan === '') {
        alert('Mohon lengkapi semua field!');
        e.preventDefault(); // Mencegah pengiriman formulir jika validasi gagal
    } else if (!isValidEmail(email)) {
        alert('Format email tidak valid!');
        e.preventDefault();
    } else {
        alert('Pesan berhasil dikirim!'); // Tampilkan pesan sukses
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const daftarForm = document.getElementById('daftarForm');

daftarForm.addEventListener('submit', function (e) {
    let namaLengkap = document.getElementById('namaLengkap').value;
    let tempatLahir = document.getElementById('tempatLahir').value;
    let agama = document.getElementById('agama').value;
    let alamat = document.getElementById('alamat').value;
    let namaAyah = document.getElementById('namaAyah').value;
    let namaIbu = document.getElementById('namaIbu').value;
    let noTelp = document.getElementById('noTelp').value;
    let email = document.getElementById('email').value;
    let akte = document.getElementById('akte').value;
    let kk = document.getElementById('kk').value;

    if (namaLengkap === '' || tempatLahir === '' || agama === '' || alamat === '' || namaAyah === '' || namaIbu === '' || noTelp === '' || email === '' || akte === '' || kk === '') {
        alert('Mohon lengkapi semua field!');
        e.preventDefault();
    } else if (!isValidEmail(email)) {
        alert('Format email tidak valid!');
        e.preventDefault();
    } else {
        alert('Pendaftaran berhasil!');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// ... (JavaScript Anda sebelumnya) ...

// Tambahkan toggle menu navigasi
const nav = document.querySelector('nav ul');
const toggleNav = document.createElement('button');
toggleNav.innerHTML = '☰'; // Ikon hamburger
toggleNav.addEventListener('click', () => {
    nav.classList.toggle('show');
});

document.querySelector('nav').appendChild(toggleNav);

