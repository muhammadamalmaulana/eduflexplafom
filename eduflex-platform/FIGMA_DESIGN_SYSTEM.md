# EduFlex Pro - Figma UI/UX Design System Specification

Panduan sistem desain antarmuka, design tokens, varian komponen, dan wireframe untuk platform pembelajaran **EduFlex Pro** di Figma.

---

## 1. Konsep & Filosofi Desain
* **Gaya Visual**: Bento Grid Layout Modern dengan Glassmorphism 2.0 (High Contrast Dark/Light mode support).
* **Karakter**: Canggih, futuristik, adaptif, dan ramah pengguna (*gamified education*).
* **Grid Standar**: 12-Column Responsive Layout (Desktop 1440px, Tablet 768px, Mobile 375px), 8pt Spacing Grid.

---

## 2. Design Tokens & Color Palette

### Primary Cyber-Teal & Electric Indigo
* `Cyan/500`: `#00F2FE` (Highlight utama, glowing border)
* `Blue/500`: `#4FACFE` (Gradient transition, link aktif)
* `Indigo/600`: `#6366F1` (Action button, badge primary)

### Status & Feedback Colors
* `Success / Emerald`: `#10B981` (Kelulusan, progress bar, audio chime)
* `Warning / Amber`: `#F59E0B` (Timer kuis, streak badge, level icon)
* `Danger / Rose`: `#F43F5E` (Lives heart, jawaban salah, timer kritis)

### Surface & Neutral (Dark vs Light)
* **Dark Mode (Default)**:
  * Background Canvas: `#070B13` (Deep Obsidian)
  * Bento Card Surface: `#0E1524`
  * Card Surface Alt: `#162035`
  * Border Stroke: `#1E2B45`
  * Heading Text: `#F8FAFC`
  * Muted Text: `#94A3B8`
* **Light Mode**:
  * Background Canvas: `#F8FAFC`
  * Bento Card Surface: `#FFFFFF`
  * Border Stroke: `#E2E8F0`
  * Heading Text: `#0F172A`

### Tipografi
* **Font Utama**: *Plus Jakarta Sans* (Heading 700/800, Body 400/500)
* **Font Kode/Metadata**: *JetBrains Mono* (ID Kredensial, durasi, status)

---

## 3. Komponen Utama Figma

1. **`BentoCourseCard`**:
   * Frame Vertical Auto Layout (Width: 320px).
   * Thumbnail Frame (Ratio 16:9) dengan overlay badge kategori & rating bintang.
   * Metadata durasi & total materi.
   * Progress track bar dinamis dengan tombol aksi *"Lanjut Belajar"*.

2. **`ClassroomSplitView`**:
   * Desktop Frame (1440x900px).
   * Kolom Kiri (70%): Pemutar video interaktif, judul, transcript, dan panel *Student Notepad*.
   * Kolom Kanan (30%): Sticky Curriculum Accordion dengan ikon status centang hijau.

3. **`GamifiedQuizModule`**:
   * Sticky Status Bar: Nyawa hati (`❤️❤️❤️`), Streak counter (`🔥 Streak x3`), dan Countdown timer.
   * Opsi pilihan ganda dengan efek hover translasi (+6px) dan glow border.
   * Review kartu jawaban benar/salah dengan pembahasan.

4. **`LiveCanvasCertificate`**:
   * Ukuran rasio 16:10 (960x600px).
   * Bingkai ganda aksen gradien biru-cyan, segel stempel kelulusan, kaligrafi nama siswa, dan kode unik kredensial.

