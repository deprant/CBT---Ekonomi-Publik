const questions = [

  // =========================
  // BAGIAN A: KONSEPTUAL (1–20)
  // =========================

  {
    question: "Dalam sistem ekonomi campuran (mixed economy), alokasi sumber daya terutama ditentukan oleh:",
    options: [
      "Perencanaan pemerintah sepenuhnya",
      "Mekanisme pasar sepenuhnya",
      "Kombinasi mekanisme pasar dan intervensi pemerintah",
      "Organisasi internasional"
    ],
    answer: 2
  },

  {
    question: "Intervensi pemerintah dalam ekonomi umumnya dibenarkan ketika:",
    options: [
      "Pasar bersifat kompetitif sempurna",
      "Terjadi kegagalan pasar (market failure)",
      "Semua konsumen memiliki preferensi yang sama",
      "Pajak dihapuskan"
    ],
    answer: 1
  },

  {
    question: "Yang BUKAN sumber perbedaan pendapat antar ekonom adalah:",
    options: [
      "Perbedaan nilai",
      "Perbedaan asumsi perilaku ekonomi",
      "Perbedaan kemampuan matematika",
      "Perbedaan pandangan cara kerja ekonomi"
    ],
    answer: 2
  },

  {
    question: "Menurut Musgrave, fungsi utama pemerintah adalah:",
    options: [
      "Produksi, konsumsi, perdagangan",
      "Alokasi, distribusi, stabilisasi",
      "Pajak, regulasi, privatisasi",
      "Inflasi, ekspor, impor"
    ],
    answer: 1
  },

  {
    question: "Ekonomi positif berfokus pada:",
    options: [
      "Apa yang seharusnya dilakukan pemerintah",
      "Penilaian etis",
      "Deskripsi dan penjelasan fenomena ekonomi",
      "Nilai moral kebijakan"
    ],
    answer: 2
  },

  {
    question: "Ekonomi normatif berkaitan dengan:",
    options: [
      "Data statistik",
      "Rekomendasi berbasis nilai",
      "Model matematika saja",
      "Observasi netral"
    ],
    answer: 1
  },

  {
    question: "Contoh kebijakan redistribusi adalah:",
    options: [
      "Pembangunan jalan tol",
      "Bantuan sosial untuk rumah tangga miskin",
      "Pembuatan SIM",
      "Ekspor barang"
    ],
    answer: 1
  },

  {
    question: "Pengeluaran pemerintah meliputi:",
    options: [
      "Pajak saja",
      "Utang saja",
      "Belanja barang dan jasa pemerintah",
      "Inflasi"
    ],
    answer: 2
  },

  {
    question: "Defisit anggaran terjadi ketika:",
    options: [
      "Pendapatan > pengeluaran",
      "Pengeluaran > pendapatan",
      "Ekspor > impor",
      "Investasi > tabungan"
    ],
    answer: 1
  },

  {
    question: "Ukuran sektor publik yang paling umum digunakan adalah:",
    options: [
      "Inflasi",
      "Rasio belanja pemerintah terhadap PDB",
      "Nilai tukar",
      "Jumlah penduduk"
    ],
    answer: 1
  },

  {
    question: "Invisible hand berarti:",
    options: [
      "Pemerintah mengatur semua pasar",
      "Kepentingan pribadi dapat meningkatkan kesejahteraan sosial",
      "Pasar selalu gagal",
      "Tidak ada perdagangan"
    ],
    answer: 1
  },

  {
    question: "Pareto improvement terjadi ketika:",
    options: [
      "Semua orang lebih baik",
      "Minimal satu orang lebih baik tanpa merugikan yang lain",
      "Ketimpangan meningkat",
      "Pajak naik"
    ],
    answer: 1
  },

  {
    question: "Exchange efficiency berarti:",
    options: [
      "Tidak ada lagi pertukaran yang meningkatkan kesejahteraan",
      "Semua barang gratis",
      "Pemerintah mengontrol harga",
      "Produksi maksimal"
    ],
    answer: 0
  },

  {
    question: "Production efficiency berarti:",
    options: [
      "Output maksimum dengan sumber daya terbatas",
      "Monopoli penuh",
      "Harga nol",
      "Subsidi penuh"
    ],
    answer: 0
  },

  {
    question: "Contoh barang publik adalah:",
    options: [
      "Mobil",
      "Roti",
      "Pertahanan nasional",
      "Sepatu"
    ],
    answer: 2
  },

  {
    question: "Eksternalitas negatif terjadi ketika:",
    options: [
      "Tidak ada perdagangan",
      "Biaya ditanggung pihak ketiga",
      "Harga turun",
      "Semua orang untung"
    ],
    answer: 1
  },

  {
    question: "Pasar tidak lengkap terjadi ketika:",
    options: [
      "Barang tidak disediakan meskipun secara sosial bermanfaat",
      "Harga stabil",
      "Semua pasar kompetitif",
      "Tidak ada pajak"
    ],
    answer: 0
  },

  {
    question: "Kegagalan informasi terjadi ketika:",
    options: [
      "Informasi sempurna",
      "Sebagian pelaku kekurangan informasi",
      "Pasar efisien",
      "Tidak ada transaksi"
    ],
    answer: 1
  },

  {
    question: "Yang termasuk kegagalan pasar adalah:",
    options: [
      "Harga kompetitif",
      "Barang publik",
      "Persaingan sempurna",
      "Efisiensi Pareto"
    ],
    answer: 1
  },

  {
    question: "Analisis positif pemerintah berfokus pada:",
    options: [
      "Apa yang seharusnya dilakukan",
      "Bagaimana pemerintah benar-benar bertindak",
      "Etika kebijakan",
      "Keadilan sosial"
    ],
    answer: 1
  },

  // =========================
  // BAGIAN B: KASUS (21–30)
  // =========================

  {
    question: "Pabrik mencemari sungai sehingga merugikan masyarakat sekitar. Ini adalah contoh:",
    options: [
      "Barang publik",
      "Eksternalitas negatif",
      "Redistribusi",
      "Pasar sempurna"
    ],
    answer: 1
  },

  {
    question: "Pertahanan nasional termasuk barang publik karena:",
    options: [
      "Rival dan eksklusif",
      "Non-rival dan non-eksklusif",
      "Barang mewah",
      "Barang pribadi"
    ],
    answer: 1
  },

  {
    question: "Mahasiswa tidak bisa mendapatkan kredit pendidikan meski layak. Ini disebut:",
    options: [
      "Pasar tidak lengkap",
      "Barang publik",
      "Inflasi",
      "Monopoli"
    ],
    answer: 0
  },

  {
    question: "Saat resesi, pemerintah berperan dalam fungsi:",
    options: [
      "Distribusi",
      "Stabilisasi",
      "Privatisasi",
      "Ekspor"
    ],
    answer: 1
  },

  {
    question: "Bantuan sosial termasuk kebijakan:",
    options: [
      "Efisiensi produksi",
      "Redistribusi",
      "Monopoli",
      "Inflasi"
    ],
    answer: 1
  },

  {
    question: "Konsumen tidak mengetahui efek samping obat merupakan:",
    options: [
      "Informasi sempurna",
      "Kegagalan informasi",
      "Efisiensi pasar",
      "Barang publik"
    ],
    answer: 1
  },

  {
    question: "Perusahaan listrik monopoli menetapkan harga tinggi. Ini:",
    options: [
      "Barang publik",
      "Kegagalan persaingan",
      "Redistribusi",
      "Efisiensi"
    ],
    answer: 1
  },

  {
    question: "Pajak karbon bertujuan:",
    options: [
      "Meningkatkan konsumsi",
      "Mengoreksi eksternalitas negatif",
      "Menghapus pajak lain",
      "Menurunkan produksi semua barang"
    ],
    answer: 1
  },

  {
    question: "Vaksinasi memberikan manfaat ke orang lain. Ini disebut:",
    options: [
      "Eksternalitas positif",
      "Monopoli",
      "Inflasi",
      "Defisit"
    ],
    answer: 0
  },

  {
    question: "Kebijakan yang meningkatkan kesejahteraan satu pihak tanpa merugikan pihak lain adalah:",
    options: [
      "Kegagalan pasar",
      "Pareto improvement",
      "Inflasi",
      "Monopoli"
    ],
    answer: 1
  },

/* =========================
   31. ISOQUANT / ISOCOST (NUMERIC + ESSAY)
   ========================= */

{
  type: "essay",
  question: `Sebuah perusahaan memiliki kondisi:
MRTS = 4, w = 100.000, r = 25.000.

a. Hitung rasio w/r
b. Apakah sudah efisien secara biaya?
c. Jelaskan hubungan MRTS dengan isocost`,
  answerGuide: "w/r = 4; efisien jika MRTS = w/r"
},

/* =========================
   32. EXTERNALITY (NUMERIC)
   ========================= */

{
  type: "essay",
  question: `Pariwisata Bali:
PMB = 300 - 2Q
PMC = 60 + Q
MEC = Q

a. Hitung Q pasar
b. Hitung Q sosial optimal
c. Hitung DWL
d. Pajak Pigouvian`,
  answerGuide: "Q pasar: 80; Q sosial: 60; pajak = MEC = Q"
},

/* =========================
   33. MONOPOLI PDAM
   ========================= */

{
  type: "essay",
  question: `PDAM:
P = 240 - 2Q
MR = 240 - 4Q
MC = 40

a. Q dan P monopoli
b. Q efisien
c. DWL`,
  answerGuide: "Qm=50, Pm=140; Qc=100"
}

];
