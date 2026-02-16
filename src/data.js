import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/powerbi.png";
import Tools3 from "/assets/tools/gcolab.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/office.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/wordpress.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/jira.png";
import Tools13 from "/assets/tools/capcut.png";
import Tools14 from "/assets/tools/python.png";
import Tools15 from "/assets/tools/netbeans.png";
import Tools16 from "/assets/tools/xampp.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Power BI",
    ket: "Business Intelligence & Data Visualization Tool",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Google Colab",
    ket: "Cloud-Based Python Notebook",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Microsoft Office",
    ket: "Software Suite",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "WordPress",
    ket: "CMS Platform",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Jira",
    ket: "Issue & Project Tracking Tool",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "CapCut",
    ket: "Video Editing App",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Python",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "NetBeans",
    ket: "Java IDE",
    dad: "1700",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "XAMPP",
    ket: "Local Server Package",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "App SPK Bansos",
    desk: "Aplikasi Sistem Pendukung Keputusan Untuk Memberikan Bantuan Sosial Pada Warga Kelurahan Cilangkap Menggunakan Metode SAW. Sistem ini mencakup pengelolaan data warga, kriteria penilaian, proses perhitungan, serta pembuatan laporan hasil seleksi secara otomatis untuk membantu pengambilan keputusan yang objektif dan transparan.",
    link: "https://github.com/Reynaldikahfi/spk-bansos/tree/master",
    tools: ["NetBeans", "Java", "MySQL", "XAMPP"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "UI/UX Web Vesta",
    desk: "Desain UI/UX website fashion brand Vesta menggunakan pendekatan modern dan minimalis.",
    link: "https://www.figma.com/design/qry20YdDVTRnoNjRDFgnlQ/Vesta.com?node-id=3-2&t=Nz1i8dt7U6YyNT6C-1",
    tools: ["Figma", "Canva"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "UI/UX Design App Android",
    desk: "Desain UI/UX aplikasi Android berbasis religi yang menampilkan jadwal sholat, fitur pencatatan ibadah harian, tilawah, hafalan, serta pengingat waktu sholat. Desain difokuskan pada tampilan yang clean, user-friendly, dan mudah digunakan dengan navigasi yang sederhana serta visual yang konsisten.",
    link: "https://www.figma.com/design/56IIQlt1Corvk0Ux3ekUzA/android-SMPIT?node-id=0-1&t=pyZyq8YTx7937sdv-1",
    tools: ["Figma", "Canva"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Analisis Sentimen Aplikasi Threads",
    desk: "Proyek analisis sentimen terhadap ulasan pengguna aplikasi Threads di Google Play menggunakan Python. Data dikumpulkan melalui scraping, kemudian dilakukan preprocessing, klasifikasi sentimen, serta evaluasi model menggunakan metrik akurasi, precision, recall, dan f1-score. Hasil analisis divisualisasikan dalam bentuk grafik untuk menunjukkan persentase sentimen positif dan negatif.",
    link: "https://github.com/Reynaldikahfi/analisis-sentimen",
    tools: ["Python", "Google Colab"],
    dad: "500",
  },
];
