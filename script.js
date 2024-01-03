document.getElementById("segitiga").addEventListener("click", function () {
  alert("Anda memilih Segitiga");
});

document.getElementById("jajargenjang").addEventListener("click", function () {
  alert("Anda memilih Jajargenjang");
});

document.addEventListener("DOMContentLoaded", function () {
  const kelilingSegitigaForm = document.getElementById("kelilingSegitigaForm");
  const luasSegitigaForm = document.getElementById("luasSegitigaForm");
  const hasilKeliling = document.getElementById("hasilKelilingText");
  const hasilLuas = document.getElementById("hasilLuasText");
  const hasilKelilingJajarGenjang = document.getElementById(
    "hasilKelilingJajarGenjangText"
  );
  const hasilLuasJajarGenjang = document.getElementById(
    "hasilLuasJajarGenjangText"
  );

  function hitungKelilingSegitiga() {
    const sisi1 = parseFloat(document.getElementById("sisi1").value);
    const sisi2 = parseFloat(document.getElementById("sisi2").value);
    const sisi3 = parseFloat(document.getElementById("sisi3").value);

    const keliling = sisi1 + sisi2 + sisi3;

    const rumusText = `K = ${sisi1} + ${sisi2} + ${sisi3}\nK = ${keliling.toFixed(
      2
    )}`;
    tampilkanHasil(rumusText, hasilKeliling);
  }

  function hitungLuasSegitiga() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const luas = 0.5 * alas * tinggi;

    const rumusText = `L = 0.5 * ${alas} * ${tinggi}\nL = ${luas.toFixed(2)}`;
    tampilkanHasil(rumusText, hasilLuas);
  }

  function hitungKelilingJajarGenjang() {
    const sisi1 = parseFloat(document.getElementById("sisi1JG").value);
    const sisi2 = parseFloat(document.getElementById("sisi2JG").value);
    const sisi3 = parseFloat(document.getElementById("sisi3JG").value);
    const sisi4 = parseFloat(document.getElementById("sisi4JG").value);

    const keliling = sisi1 + sisi2 + sisi3 + sisi4;

    const rumusText = `K = ${sisi1} + ${sisi2} + ${sisi3} + ${sisi4}\nK = ${keliling.toFixed(
      2
    )}`;
    tampilkanHasil(rumusText, hasilKelilingJajarGenjang);
  }

  function hitungLuasJajarGenjang() {
    const alas = parseFloat(document.getElementById("alasJG").value);
    const tinggi = parseFloat(document.getElementById("tinggiJG").value);

    const luas = alas * tinggi;

    const rumusText = `L = ${alas} * ${tinggi}\nL = ${luas.toFixed(2)}`;
    tampilkanHasil(rumusText, hasilLuasJajarGenjang);
  }

  kelilingJajarGenjangForm.addEventListener("submit", function (e) {
    e.preventDefault();
    hitungKelilingJajarGenjang();
  });

  luasJajarGenjangForm.addEventListener("submit", function (e) {
    e.preventDefault();
    hitungLuasJajarGenjang();
  });

  // Tambahkan event listener untuk tombol reset keliling Jajar Genjang
  kelilingJajarGenjangForm.addEventListener("reset", function () {
    // Bersihkan hasil saat formulir direset
    hasilKelilingJajarGenjang.innerHTML = "";
    hasilKelilingJajarGenjang.parentElement.style.display = "none";
    hasilKelilingJajarGenjang.parentElement.style.opacity = 0;
  });

  // Tambahkan event listener untuk tombol reset luas Jajar Genjang
  luasJajarGenjangForm.addEventListener("reset", function () {
    // Bersihkan hasil saat formulir direset
    hasilLuasJajarGenjang.innerHTML = "";
    hasilLuasJajarGenjang.parentElement.style.display = "none";
    hasilLuasJajarGenjang.parentElement.style.opacity = 0;
  });

  function tampilkanHasil(rumusText, hasilContainer) {
    hasilContainer.innerHTML = rumusText;
    // Menampilkan hasil container dan memberikan efek animasi
    hasilContainer.parentElement.style.display = "block";
    setTimeout(() => {
      hasilContainer.parentElement.style.opacity = 1;
    }, 100);
  }

  kelilingSegitigaForm.addEventListener("submit", function (e) {
    e.preventDefault();
    hitungKelilingSegitiga();
  });

  luasSegitigaForm.addEventListener("submit", function (e) {
    e.preventDefault();
    hitungLuasSegitiga();
  });

  // Tambahkan event listener untuk tombol reset keliling Segitiga
  kelilingSegitigaForm.addEventListener("reset", function () {
    // Bersihkan hasil saat formulir direset
    hasilKeliling.innerHTML = "";
    hasilKeliling.parentElement.style.display = "none";
    hasilKeliling.parentElement.style.opacity = 0;
  });

  // Tambahkan event listener untuk tombol reset luas Segitiga
  luasSegitigaForm.addEventListener("reset", function () {
    // Bersihkan hasil saat formulir direset
    hasilLuas.innerHTML = "";
    hasilLuas.parentElement.style.display = "none";
    hasilLuas.parentElement.style.opacity = 0;
  });

  document
    .getElementById("kelilingJajarGenjang")
    .addEventListener("click", function () {
      tampilkanJudulMenu("Menu Jajargenjang > Keliling Jajargenjang");
      tampilkanForm("kelilingJajarGenjangForm");
    });

  document
    .getElementById("luasJajarGenjang")
    .addEventListener("click", function () {
      tampilkanJudulMenu("Menu Jajargenjang > Luas Jajargenjang");
      tampilkanForm("luasJajarGenjangForm");
    });
  const yearElement = document.createElement("span");
  yearElement.textContent = new Date().getFullYear();
  document
    .querySelector(".footer-content p:first-child")
    .appendChild(yearElement);
});

function tampilkanJudulMenu(judul) {
  const judulMenu = document.getElementById("judulMenuSegitiga");
  judulMenu.innerHTML = judul;
}

function tampilkanForm(formId) {
  // Semua formulir dihide terlebih dahulu
  document.getElementById("kelilingSegitigaForm").style.display = "none";
  document.getElementById("luasSegitigaForm").style.display = "none";
  document.getElementById("kelilingJajarGenjangForm").style.display = "none";
  document.getElementById("luasJajarGenjangForm").style.display = "none";

  // Tampilkan formulir yang diinginkan
  document.getElementById(formId).style.display = "block";
}
