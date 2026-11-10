# 🚀 EduFlex Pro - Next-Gen E-Learning & Skill Platform

EduFlex Pro adalah platform pembelajaran digital orisinal dengan arsitektur modern:
- **UI/UX Design**: Figma (Bento Grid Layout, Dark & Light Mode)
- **Frontend**: HTML5, Modern CSS3, Bootstrap 5.3, Bootstrap Icons, Local Vector SVG Artworks (`images/`), Web Audio API Sound Generator, HTML5 Canvas Certificate Generator, Chart.js, Canvas Confetti
- **Backend**: Laravel 11 / PHP 8.2+ (MVC Architecture)
- **Database**: MySQL 8.0+ (XAMPP phpMyAdmin)

---

## 🌟 8 Fitur Utama yang Disediakan

1. **Login & Register**:
   * Autentikasi dengan multi-role handling (*Siswa* & *Administrator*).
   * Fitur toggle peran instan untuk kemudahan demonstrasi.
2. **Dashboard Pengguna (*Bento Grid*)**:
   * Level & XP Tracker (Gamifikasi).
   * Kartu *"Lanjutkan Materi Terakhir"* dengan resume 1-klik.
   * Metrik kursus aktif, jam belajar, kuis lulus, dan daftar kursus aktif.
3. **Katalog Materi & Filter Cepat**:
   * Pencarian langsung (*real-time search*).
   * Filter spesialisasi: *AI & Data*, *Cloud & DevOps*, *Fullstack Web*, *UI/UX Design*.
   * Filter tingkat kesulitan (*Pemula, Menengah, Mahir*).
4. **Detail Pembelajaran (*Classroom & Notepad*)**:
   * Video player interaktif 16:9 responsif.
   * **In-Lesson Student Notepad**: Siswa dapat mencatat rangkuman yang otomatis tersimpan ke memori browser per materi!
   * Akordeon kurikulum modular dengan indikator centang hijau tuntas.
5. **Kuis Interaktif (*Gamified with Web Audio FX*)**:
   * Sistem Nyawa 3 Hati (`❤️❤️❤️`).
   * Streak Counter (`🔥 Streak`) bertingkat.
   * Efek suara sintetis instan (melodi benar & suara lembut salah) tanpa butuh file mp3 eksternal.
   * Countdown timer 10 menit otomatis.
   * Ulasan jawaban benar dan pembahasan lengkap.
6. **Progress Belajar & Canvas Certificate Generator**:
   * Rekap progres belajar per kursus secara visual.
   * Riwayat skor ujian kuis.
   * **HTML5 Canvas Certificate**: Menghasilkan sertifikat resmi beresolusi tinggi yang bisa langsung diunduh dalam format PNG atau dicetak!
7. **Dashboard Admin**:
   * Analisis metrik KPI total siswa, kursus, kuis, dan penyelesaian.
   * Grafik tren bulanan interaktif (*Chart.js*).
   * Feed aktivitas belajar terkini.
8. **Kelola Materi Pembelajaran (*Studio Materi*)**:
   * CRUD Kursus (tambah, edit, hapus).
   * Tambah modul kurikulum dan materi pelajaran.

---

## 🎮 Cara Menjalankan Aplikasi

### 1. Buka Web Demo Langsung di Browser (Instan)
1. Buka file [**`index.html`**](file:///c:/Users/ASUS%20TUF%20Gaming/.vscode/eduflex-platform/index.html).
2. Klik kanan $\rightarrow$ **Open with Live Server** di VS Code atau klik ganda untuk membukanya di browser Google Chrome / Edge.
3. Coba fitur **Ganti Tema** (ikon bulan/matahari di kanan atas) untuk beralih antara Mode Gelap (*Dark*) dan Terang (*Light*).
4. Coba kerjakan kuis untuk mendengarkan efek audio dan melihat ledakan kembang api (*confetti*).

---

### 2. Import Database ke MySQL (XAMPP)
1. Buka **XAMPP Control Panel** dan aktifkan layanan **MySQL**.
2. Akses `http://localhost/phpmyadmin` di browser Anda.
3. Klik menu **Import**.
4. Pilih file [**`database/eduflex_pro_db.sql`**](file:///c:/Users/ASUS%20TUF%20Gaming/.vscode/eduflex-platform/database/eduflex_pro_db.sql) dan klik **Kirim**.
5. Database `eduflex_pro_db` beserta 13 tabel dan data awal akan otomatis terpasang.

---

### 3. Backend Laravel
Berkas routing [**`routes/web.php`**](file:///c:/Users/ASUS%20TUF%20Gaming/.vscode/eduflex-platform/routes/web.php), struktur tabel migrasi, dan panduan desain Figma [**`FIGMA_DESIGN_SYSTEM.md`**](file:///c:/Users/ASUS%20TUF%20Gaming/.vscode/eduflex-platform/FIGMA_DESIGN_SYSTEM.md) telah disiapkan lengkap di dalam folder ini.

