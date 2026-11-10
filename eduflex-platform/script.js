/**
 * EduFlex Pro - Next-Gen Interactive Core Script
 * Fully featured implementation for all 8 main features
 */

// ================= FRESH STATE & CURRICULUM DATA =================
const INITIAL_CURRICULUM = [
  {
    id: 101,
    title: "AI Engineering: Building Production LLM & RAG Apps",
    slug: "ai-engineering-llm-rag-python",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    level: "intermediate",
    levelLabel: "Menengah",
    thumbnail: "images/ai-engineering.svg",
    description: "Pelajari cara membangun aplikasi Retrieval-Augmented Generation (RAG), vector database, prompt engineering, dan integrasi API AI modern.",
    instructor: "Dr. Adrian Hartanto",
    rating: 4.9,
    modules: [
      {
        id: 1001,
        title: "Modul 1: Dasar Generative AI & Vector Embeddings",
        lessons: [
          {
            id: 5001,
            title: "Pengenalan Arsitektur Transformer & LLM",
            type: "video",
            duration: 16,
            videoUrl: "https://www.youtube.com/embed/zjkBMFhNj_g",
            body: "Memahami bagaimana model Transformer memproses token bahasa alami, mekanisme self-attention, dan perbedaan antara fine-tuning vs in-context learning."
          },
          {
            id: 5002,
            title: "Membuat Vector Search dengan ChromaDB & Python",
            type: "video",
            duration: 20,
            videoUrl: "https://www.youtube.com/embed/tcqEUSNCn8I",
            body: "Praktik membuat database vektor lokal, melakukan embedding teks dokumen, dan menghitung kemiripan semantik (cosine similarity)."
          }
        ],
        quiz: {
          id: 9001,
          title: "Kuis Evaluasi Modul 1: AI & Vector Embeddings",
          passingScore: 75,
          durationMinutes: 10,
          questions: [
            {
              id: 1,
              text: "Metrik matematika apa yang paling umum digunakan untuk mengukur kedekatan makna dua vektor embedding?",
              options: [
                { id: "a", text: "Cosine Similarity", isCorrect: true },
                { id: "b", text: "Bubble Sort Algorithm", isCorrect: false },
                { id: "c", text: "Linear Regression Intercept", isCorrect: false },
                { id: "d", text: "Standard Deviation", isCorrect: false }
              ],
              explanation: "Cosine Similarity mengukur kosinus sudut antara dua vektor multidimensi, ideal untuk mengukur kemiripan konteks teks."
            },
            {
              id: 2,
              text: "Apa kepanjangan dari RAG dalam ekosistem Generative AI?",
              options: [
                { id: "a", text: "Randomized Automated Gradient", isCorrect: false },
                { id: "b", text: "Retrieval-Augmented Generation", isCorrect: true },
                { id: "c", text: "Realtime Audio Graph", isCorrect: false },
                { id: "d", text: "Recursive Attention Generator", isCorrect: false }
              ],
              explanation: "RAG (Retrieval-Augmented Generation) menggabungkan pengambilan dokumen eksternal dengan model bahasa untuk menghasilkan jawaban yang akurat."
            },
            {
              id: 3,
              text: "Manakah contoh database vektor open-source yang populer untuk Python?",
              options: [
                { id: "a", text: "ChromaDB / Qdrant", isCorrect: true },
                { id: "b", text: "SQLite File", isCorrect: false },
                { id: "c", text: "Apache Cassandra", isCorrect: false },
                { id: "d", text: "Microsoft Access", isCorrect: false }
              ],
              explanation: "ChromaDB dan Qdrant adalah vector store yang dirancang khusus untuk menyimpan dan mengindeks embedding vektor AI."
            }
          ]
        }
      },
      {
        id: 1002,
        title: "Modul 2: Evaluasi & Deployment Agen AI",
        lessons: [
          {
            id: 5003,
            title: "Membangun AI Agent Tool Calling dengan LangGraph",
            type: "video",
            duration: 22,
            videoUrl: "https://www.youtube.com/embed/zjkBMFhNj_g",
            body: "Menghubungkan model AI dengan tool kalkulator, pencarian web, dan API database menggunakan arsitektur graph agent."
          }
        ],
        quiz: null
      }
    ]
  },
  {
    id: 102,
    title: "Cloud DevOps: Docker, Kubernetes & CI/CD Pipelines",
    slug: "cloud-devops-docker-kubernetes-cicd",
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    level: "advanced",
    levelLabel: "Mahir",
    thumbnail: "images/cloud-devops.svg",
    description: "Kuasai kontainerisasi aplikasi dengan Docker, orkestrasi cluster Kubernetes, dan otomasi deployment dengan GitHub Actions.",
    instructor: "Bima Wicaksono, CKA",
    rating: 4.85,
    modules: [
      {
        id: 2001,
        title: "Modul 1: Docker Containerization",
        lessons: [
          {
            id: 6001,
            title: "Menulis Multi-Stage Dockerfile yang Efisien",
            type: "video",
            duration: 18,
            videoUrl: "https://www.youtube.com/embed/tcqEUSNCn8I",
            body: "Mengoptimalkan ukuran image Docker dari ratusan MB menjadi puluhan MB menggunakan Alpine base image dan multi-stage build."
          }
        ],
        quiz: null
      }
    ]
  },
  {
    id: 103,
    title: "Modern Fullstack: Next.js 15, Laravel 11 & Tailwind CSS",
    slug: "modern-fullstack-nextjs-laravel-tailwind",
    category: "web",
    categoryLabel: "Web Development",
    level: "intermediate",
    levelLabel: "Menengah",
    thumbnail: "images/fullstack-web.svg",
    description: "Bangun web enterprise modern dengan frontend Next.js App Router, backend REST API Laravel 11, dan MySQL database.",
    instructor: "Reza Firmansyah",
    rating: 4.92,
    modules: [
      {
        id: 3001,
        title: "Modul 1: Backend API Laravel 11",
        lessons: [
          {
            id: 7001,
            title: "Sanctum Authentication & API Resource",
            type: "video",
            duration: 20,
            videoUrl: "https://www.youtube.com/embed/ImtZ5yENzgE",
            body: "Membuat autentikasi token stateless dengan Laravel Sanctum dan memformat respon JSON dengan Eloquent API Resource."
          }
        ],
        quiz: null
      }
    ]
  },
  {
    id: 104,
    title: "UI/UX Design & Product Strategy with Figma 2026",
    slug: "ui-ux-design-product-strategy-figma",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    level: "beginner",
    levelLabel: "Pemula",
    thumbnail: "images/ui-ux-figma.svg",
    description: "Kuasai riset pengguna, wireframing, component tokens, dan prototipe interaktif auto-layout modern di Figma.",
    instructor: "Nadya Saraswati",
    rating: 4.95,
    modules: [
      {
        id: 4001,
        title: "Modul 1: Design Tokens & Component Sets",
        lessons: [
          {
            id: 8001,
            title: "Auto Layout V5 & Variables di Figma",
            type: "video",
            duration: 15,
            videoUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8",
            body: "Pemanfaatan figma variables untuk dark/light theme tokens dan auto-layout responsive cards."
          }
        ],
        quiz: null
      }
    ]
  }
];

// App Local Storage State
let platformState = {
  theme: "dark",
  currentUser: {
    name: "Budi Santoso",
    email: "siswa@eduflex.id",
    role: "student",
    avatar: "images/avatar-student.svg"
  },
  courses: [],
  enrolledIds: [101],
  completedLessonIds: [5001],
  activeCourseId: 101,
  activeLessonId: 5002,
  quizAttempts: [
    {
      courseTitle: "AI Engineering: Building Production LLM & RAG Apps",
      quizTitle: "Kuis Evaluasi Modul 1: AI & Vector Embeddings",
      score: 100,
      isPassed: true,
      date: "10 Nov 2026"
    }
  ],
  adminChart: null
};

// ================= APP INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  loadPlatformState();
  initTheme();
  renderCatalog();
  renderStudentDashboard();
  renderProgress();
  setupEventListeners();
  initAdminChart();
});

function loadPlatformState() {
  const defaultSvgs = {
    101: "images/ai-engineering.svg",
    102: "images/cloud-devops.svg",
    103: "images/fullstack-web.svg",
    104: "images/ui-ux-figma.svg"
  };

  const savedCourses = localStorage.getItem("eduflex_pro_courses");
  if (savedCourses) {
    try {
      platformState.courses = JSON.parse(savedCourses);
      // Auto-migrate broken/external unsplash links to local SVGs
      let needsSave = false;
      platformState.courses.forEach(c => {
        if (!c.thumbnail || c.thumbnail.includes("unsplash.com") || c.thumbnail.startsWith("http")) {
          if (defaultSvgs[c.id]) {
            c.thumbnail = defaultSvgs[c.id];
            needsSave = true;
          }
        }
      });
      if (needsSave) {
        saveCourses();
      }
    } catch (e) {
      platformState.courses = INITIAL_CURRICULUM;
      saveCourses();
    }
  } else {
    platformState.courses = INITIAL_CURRICULUM;
    saveCourses();
  }

  const savedTheme = localStorage.getItem("eduflex_pro_theme");
  if (savedTheme) platformState.theme = savedTheme;

  const savedUser = localStorage.getItem("eduflex_pro_user");
  if (savedUser) {
    try {
      platformState.currentUser = JSON.parse(savedUser);
      if (!platformState.currentUser.avatar || platformState.currentUser.avatar.includes("unsplash.com")) {
        platformState.currentUser.avatar = platformState.currentUser.role === "admin" ? "images/avatar-admin.svg" : "images/avatar-student.svg";
        localStorage.setItem("eduflex_pro_user", JSON.stringify(platformState.currentUser));
      }
    } catch (e) {
      // fallback
    }
  }

  const savedEnrolled = localStorage.getItem("eduflex_pro_enrolled");
  if (savedEnrolled) platformState.enrolledIds = JSON.parse(savedEnrolled);

  const savedCompleted = localStorage.getItem("eduflex_pro_completed");
  if (savedCompleted) platformState.completedLessonIds = JSON.parse(savedCompleted);

  const savedAttempts = localStorage.getItem("eduflex_pro_attempts");
  if (savedAttempts) platformState.quizAttempts = JSON.parse(savedAttempts);
}

function saveCourses() {
  localStorage.setItem("eduflex_pro_courses", JSON.stringify(platformState.courses));
}

function saveUserData() {
  localStorage.setItem("eduflex_pro_user", JSON.stringify(platformState.currentUser));
  localStorage.setItem("eduflex_pro_enrolled", JSON.stringify(platformState.enrolledIds));
  localStorage.setItem("eduflex_pro_completed", JSON.stringify(platformState.completedLessonIds));
  localStorage.setItem("eduflex_pro_attempts", JSON.stringify(platformState.quizAttempts));
}

// ================= THEME TOGGLE (DARK / LIGHT) =================
function initTheme() {
  document.documentElement.setAttribute("data-theme", platformState.theme);
  updateThemeIcon();
}

function toggleTheme() {
  platformState.theme = platformState.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", platformState.theme);
  localStorage.setItem("eduflex_pro_theme", platformState.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById("theme-toggle-icon");
  if (icon) {
    icon.className = platformState.theme === "dark" ? "bi bi-sun-fill text-warning" : "bi bi-moon-stars-fill text-primary";
  }
}

// ================= VIEW SWITCHER =================
function switchView(viewName) {
  document.querySelectorAll(".app-view-screen").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-link.nav-tab-btn").forEach(el => el.classList.remove("active"));

  if (viewName !== "quiz" && activeQuizTimer) {
    clearInterval(activeQuizTimer);
  }

  const targetScreen = document.getElementById(`screen-${viewName}`);
  if (targetScreen) {
    targetScreen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const targetNav = document.getElementById(`tab-nav-${viewName}`);
  if (targetNav) targetNav.classList.add("active");

  if (viewName === "student-dashboard") renderStudentDashboard();
  if (viewName === "catalog") renderCatalog();
  if (viewName === "progress") renderProgress();
  if (viewName === "admin-dashboard") renderAdminDashboard();
  if (viewName === "admin-courses") renderAdminCoursesTable();
}

// ================= FITUR 1: LOGIN & REGISTER MODAL =================
function openAuthModal(tab = 'login') {
  const modalEl = document.getElementById('modal-auth-portal');
  if (!modalEl) return;
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  if (tab === 'register') {
    document.getElementById('btn-tab-register')?.click();
  } else {
    document.getElementById('btn-tab-login')?.click();
  }
  modal.show();
}

function handlePortalLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-portal-email').value;
  if (email.includes('admin')) {
    setRole('admin');
  } else {
    setRole('student');
  }
  bootstrap.Modal.getInstance(document.getElementById('modal-auth-portal'))?.hide();
  triggerToast(`Selamat datang kembali, ${platformState.currentUser.name}!`, "bg-success");
}

function handlePortalRegister(e) {
  e.preventDefault();
  const name = document.getElementById('reg-portal-name').value;
  const email = document.getElementById('reg-portal-email').value;
  const role = document.getElementById('reg-portal-role').value;

  platformState.currentUser = {
    name: name,
    email: email,
    role: role,
    avatar: role === "admin" ? "images/avatar-admin.svg" : "images/avatar-student.svg"
  };

  saveUserData();
  bootstrap.Modal.getInstance(document.getElementById('modal-auth-portal'))?.hide();
  triggerToast(`Pendaftaran berhasil! Selamat datang, ${name}.`, "bg-success");
  
  if (role === 'admin') {
    setRole('admin');
  } else {
    setRole('student');
  }
}

function quickAuthDemo(role) {
  setRole(role);
  bootstrap.Modal.getInstance(document.getElementById('modal-auth-portal'))?.hide();
}

function triggerDirectQuiz() {
  const firstCourse = platformState.courses[0];
  const firstModWithQuiz = firstCourse?.modules.find(m => m.quiz);
  if (firstModWithQuiz) {
    startGamifiedQuiz(firstCourse.id, firstModWithQuiz.id);
  } else {
    switchView('catalog');
  }
}

function openSyllabusModal(courseId) {
  const course = platformState.courses.find(c => c.id === courseId);
  if (!course) return;

  document.getElementById("preview-modal-title").textContent = course.title;
  document.getElementById("preview-modal-cat").textContent = course.categoryLabel;
  const thumbEl = document.getElementById("preview-modal-thumb");
  thumbEl.src = course.thumbnail;
  thumbEl.onerror = function() { this.src = "images/ai-engineering.svg"; };
  document.getElementById("preview-modal-instructor").textContent = course.instructor;
  document.getElementById("preview-modal-rating").textContent = course.rating;
  document.getElementById("preview-modal-level").textContent = course.levelLabel;
  document.getElementById("preview-modal-desc").textContent = course.description;

  const curriculumBox = document.getElementById("preview-modal-curriculum");
  curriculumBox.innerHTML = course.modules.map((m, idx) => `
    <div class="bento-card p-3 border">
      <div class="fw-bold mb-1 text-info">Modul ${idx + 1}: ${m.title}</div>
      <ul class="mb-0 ps-3 text-muted">
        ${m.lessons.map(l => `<li>${l.title} (${l.duration}m)</li>`).join("")}
        ${m.quiz ? `<li class="text-warning fw-semibold mt-1"><i class="bi bi-patch-question-fill me-1"></i> ${m.quiz.title}</li>` : ""}
      </ul>
    </div>
  `).join("");

  const enrollBtn = document.getElementById("btn-preview-enroll");
  enrollBtn.onclick = () => {
    bootstrap.Modal.getInstance(document.getElementById("modal-syllabus-preview"))?.hide();
    enrollCourse(course.id);
  };

  bootstrap.Modal.getOrCreateInstance(document.getElementById("modal-syllabus-preview")).show();
}

// ================= USER ROLE SWITCHER (STUDENT VS ADMIN) =================
function setRole(role) {
  if (role === "admin") {
    platformState.currentUser = {
      name: "Administrator Pro",
      email: "admin@eduflex.id",
      role: "admin",
      avatar: "images/avatar-admin.svg"
    };
    triggerToast("Mode Administrator Diaktifkan!", "bg-warning text-dark");
    document.getElementById("nav-item-admin-dash").classList.remove("d-none");
    document.getElementById("nav-item-admin-courses").classList.remove("d-none");
    switchView("admin-dashboard");
  } else {
    platformState.currentUser = {
      name: "Budi Santoso",
      email: "siswa@eduflex.id",
      role: "student",
      avatar: "images/avatar-student.svg"
    };
    triggerToast("Mode Siswa (Learner) Diaktifkan!", "bg-primary");
    document.getElementById("nav-item-admin-dash").classList.add("d-none");
    document.getElementById("nav-item-admin-courses").classList.add("d-none");
    switchView("student-dashboard");
  }

  document.getElementById("nav-user-name").textContent = platformState.currentUser.name;
  document.getElementById("nav-user-email").textContent = platformState.currentUser.email;
  document.getElementById("nav-avatar").src = platformState.currentUser.avatar;
  document.getElementById("navbar-role-pill").textContent = role === "admin" ? "Admin" : "Siswa";
  document.getElementById("navbar-role-pill").className = `badge ${role === "admin" ? "bg-warning text-dark" : "bg-primary"}`;
  saveUserData();
}

// ================= FITUR 3: KATALOG MATERI =================
function renderCatalog() {
  const container = document.getElementById("catalog-courses-grid");
  const search = document.getElementById("filter-search-input").value.toLowerCase();
  const cat = document.getElementById("filter-category-select").value;
  const level = document.getElementById("filter-level-select").value;

  const filtered = platformState.courses.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search) || c.description.toLowerCase().includes(search);
    const matchCat = cat === "all" || c.category === cat;
    const matchLevel = level === "all" || c.level === level;
    return matchSearch && matchCat && matchLevel;
  });

  document.getElementById("catalog-found-count").textContent = filtered.length;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search display-4 text-muted mb-3"></i>
        <h5 class="fw-bold text-muted">Tidak ditemukan kursus yang cocok.</h5>
        <p class="text-muted small">Silakan sesuaikan kata kunci pencarian atau reset filter kategori.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(course => {
    const isEnrolled = platformState.enrolledIds.includes(course.id);
    const totalLessons = getCourseLessonCount(course);
    const progress = getCourseProgress(course.id);

    // Category color map
    const catColors = { ai: '#00E5FF', web: '#3B82F6', cloud: '#10B981', uiux: '#EC4899' };
    const catColor = catColors[course.category] || '#3B82F6';
    const levelIcons = { beginner: '🟢', intermediate: '🟡', advanced: '🔴' };
    const levelIcon = levelIcons[course.level] || '⚪';

    return `
      <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="bento-card course-bento-card">
          <div class="bento-thumb-container">
            <img src="${course.thumbnail}" alt="${course.title}" onerror="this.src='images/ai-engineering.svg'">
            <!-- Play Overlay -->
            <div class="thumb-overlay">
              <div class="play-icon-btn">
                <i class="bi bi-play-fill"></i>
              </div>
              <span class="badge rounded-pill px-2 py-1" style="background:rgba(0,0,0,0.6);color:#fff;font-size:.7rem;">${totalLessons} Materi</span>
            </div>
            <!-- Category Badge -->
            <span class="badge rounded-pill position-absolute top-0 start-0 m-3" style="background:rgba(0,0,0,0.65);backdrop-filter:blur(8px);border:1px solid ${catColor}40;color:${catColor};font-size:.72rem;padding:5px 10px;">${course.categoryLabel}</span>
            <!-- Level Badge -->
            <span class="badge rounded-pill position-absolute top-0 end-0 m-3" style="background:rgba(0,0,0,0.6);font-size:.7rem;">${levelIcon} ${course.levelLabel}</span>
          </div>
          <div class="p-3 d-flex flex-column flex-grow-1">
            <div class="d-flex align-items-center gap-1 mb-2" style="font-size:.78rem;">
              <i class="bi bi-star-fill" style="color:var(--amber);font-size:.7rem;"></i>
              <span class="fw-bold" style="color:var(--amber);">${course.rating || 4.9}</span>
              <span style="color:var(--text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">· ${course.instructor}</span>
            </div>
            <h6 class="fw-bold mb-2 text-clamp-2" style="font-size:.92rem;letter-spacing:-0.02em;line-height:1.35;">${course.title}</h6>
            <p class="mb-3 flex-grow-1 text-clamp-2" style="font-size:.8rem;color:var(--text-secondary);line-height:1.5;">${course.description}</p>
            
            <div class="d-flex justify-content-between align-items-center pt-2 mb-3" style="border-top:1px solid var(--border-soft);font-size:.77rem;color:var(--text-muted);">
              <span><i class="bi bi-collection-play me-1" style="color:var(--cyan);"></i>${totalLessons} Materi</span>
              <span><i class="bi bi-clock me-1" style="color:var(--amber);"></i>${Math.ceil(totalLessons * 18 / 60)} Jam</span>
            </div>

            ${isEnrolled ? `
              <div class="mb-2">
                <div class="d-flex justify-content-between" style="font-size:.75rem;margin-bottom:5px;">
                  <span style="color:var(--text-muted);">Progress</span>
                  <span class="fw-bold" style="color:var(--emerald);">${progress}%</span>
                </div>
                <div class="progress-track-bar" style="height:5px;">
                  <div class="progress-track-fill" style="width:${progress}%;"></div>
                </div>
              </div>
              <div class="d-flex gap-2">
                <button onclick="openSyllabusModal(${course.id})" class="btn btn-outline-eduflex btn-sm px-3">Silabus</button>
                <button onclick="openClassroom(${course.id})" class="btn btn-eduflex-primary btn-sm flex-fill">
                  <i class="bi bi-play-circle-fill me-1"></i>Lanjut
                </button>
              </div>
            ` : `
              <div class="d-flex gap-2">
                <button onclick="openSyllabusModal(${course.id})" class="btn btn-outline-eduflex btn-sm flex-fill">Silabus</button>
                <button onclick="enrollCourse(${course.id})" class="btn btn-eduflex-primary btn-sm flex-fill">
                  <i class="bi bi-plus-circle me-1"></i>Mulai
                </button>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function enrollCourse(courseId) {
  if (!platformState.enrolledIds.includes(courseId)) {
    platformState.enrolledIds.push(courseId);
    saveUserData();
    triggerToast("Selamat! Anda berhasil terdaftar pada kursus ini.", "bg-success");
  }
  openClassroom(courseId);
}

// ================= FITUR 2: DASHBOARD PENGGUNA =================
function renderStudentDashboard() {
  document.getElementById("dash-greeting-name").textContent = platformState.currentUser.name;

  const enrolled = platformState.courses.filter(c => platformState.enrolledIds.includes(c.id));
  document.getElementById("metric-enrolled-count").textContent = enrolled.length;
  document.getElementById("metric-lessons-done").textContent = platformState.completedLessonIds.length;

  const passedCount = platformState.quizAttempts.filter(a => a.isPassed).length;
  document.getElementById("metric-quizzes-passed").textContent = passedCount;

  let avg = 0;
  if (platformState.quizAttempts.length > 0) {
    const sum = platformState.quizAttempts.reduce((acc, a) => acc + a.score, 0);
    avg = Math.round(sum / platformState.quizAttempts.length);
  }
  document.getElementById("metric-avg-score").textContent = `${avg}%`;

  // Resume card
  const activeCourse = platformState.courses.find(c => c.id === platformState.activeCourseId) || enrolled[0];
  const resumeBox = document.getElementById("dash-resume-box");
  if (activeCourse) {
    resumeBox.classList.remove("d-none");
    document.getElementById("resume-course-category").textContent = activeCourse.categoryLabel;
    document.getElementById("resume-course-name").textContent = activeCourse.title;

    const prog = getCourseProgress(activeCourse.id);
    document.getElementById("resume-course-bar").style.width = `${prog}%`;
    document.getElementById("resume-percent-label").textContent = `${prog}%`;

    document.getElementById("btn-dash-resume").onclick = () => openClassroom(activeCourse.id);
  } else {
    resumeBox.classList.add("d-none");
  }

  // Enrolled list grid
  const container = document.getElementById("dash-enrolled-courses-grid");
  if (enrolled.length === 0) {
    container.innerHTML = `<div class="col-12 text-muted">Belum ada kursus yang terdaftar. Jelajahi katalog sekarang!</div>`;
    return;
  }

  container.innerHTML = enrolled.map(c => {
    const prog = getCourseProgress(c.id);
    const isDone = prog === 100;
    const catColors = { ai: '#00E5FF', web: '#3B82F6', cloud: '#10B981', uiux: '#EC4899' };
    const catColor = catColors[c.category] || '#3B82F6';
    return `
      <div class="col-md-6 col-lg-4">
        <div class="bento-card p-3 h-100">
          <div class="d-flex align-items-center gap-3 mb-3">
            <div style="width:52px;height:52px;border-radius:12px;overflow:hidden;flex-shrink:0;border:1.5px solid ${catColor}30;">
              <img src="${c.thumbnail}" width="52" height="52" style="object-fit:cover;width:100%;height:100%;" onerror="this.src='images/ai-engineering.svg'">
            </div>
            <div class="overflow-hidden">
              <span class="badge rounded-pill mb-1 px-2 py-1" style="background:${catColor}18;color:${catColor};font-size:.7rem;font-weight:700;border:1px solid ${catColor}30;">${c.categoryLabel}</span>
              <h6 class="fw-bold mb-0 text-truncate" style="font-size:.88rem;letter-spacing:-0.02em;">${c.title}</h6>
            </div>
          </div>
          <div class="mb-3">
            <div class="d-flex justify-content-between" style="font-size:.75rem;margin-bottom:5px;">
              <span style="color:var(--text-muted);">Progress</span>
              <span class="fw-bold" style="color:var(--emerald);">${prog}%</span>
            </div>
            <div class="progress-track-bar" style="height:5px;">
              <div class="progress-track-fill" style="width:${prog}%;"></div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center pt-2" style="border-top:1px solid var(--border-soft);">
            ${isDone ? `
              <button onclick="openLiveCertificateModal('${c.title}')" class="btn btn-sm rounded-pill fw-bold" style="background:rgba(245,158,11,0.15);color:var(--amber);border:1px solid rgba(245,158,11,0.3);">
                <i class="bi bi-award-fill me-1"></i>Sertifikat
              </button>
            ` : `<div></div>`}
            <button onclick="openClassroom(${c.id})" class="btn btn-eduflex-primary btn-sm px-3">
              Lanjut <i class="bi bi-arrow-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ================= FITUR 4: DETAIL PEMBELAJARAN (CLASSROOM & NOTEPAD) =================
function openClassroom(courseId, targetLessonId = null) {
  const course = platformState.courses.find(c => c.id === courseId);
  if (!course) return;

  platformState.activeCourseId = course.id;

  let lessonToOpen = null;
  for (const m of course.modules) {
    for (const l of m.lessons) {
      if (targetLessonId && l.id === targetLessonId) {
        lessonToOpen = l;
        break;
      }
      if (!targetLessonId && !platformState.completedLessonIds.includes(l.id)) {
        lessonToOpen = l;
        break;
      }
    }
    if (lessonToOpen) break;
  }

  if (!lessonToOpen) {
    lessonToOpen = course.modules[0]?.lessons[0];
  }

  if (lessonToOpen) {
    platformState.activeLessonId = lessonToOpen.id;
  }

  renderClassroomScreen();
  switchView("classroom");
}

function renderClassroomScreen() {
  const course = platformState.courses.find(c => c.id === platformState.activeCourseId);
  if (!course) return;

  document.getElementById("classroom-course-heading").textContent = course.title;
  const progress = getCourseProgress(course.id);
  document.getElementById("classroom-progress-text").textContent = `${progress}%`;
  document.getElementById("classroom-progress-fill").style.width = `${progress}%`;
  document.getElementById("classroom-modules-count").textContent = `${course.modules.length} Modul`;

  // Find active lesson
  let activeModule = null;
  let activeLesson = null;
  for (const m of course.modules) {
    const found = m.lessons.find(l => l.id === platformState.activeLessonId);
    if (found) {
      activeModule = m;
      activeLesson = found;
      break;
    }
  }

  if (!activeLesson && course.modules[0]?.lessons[0]) {
    activeModule = course.modules[0];
    activeLesson = course.modules[0].lessons[0];
    platformState.activeLessonId = activeLesson.id;
  }

  if (!activeLesson) return;

  document.getElementById("classroom-module-heading").textContent = activeModule.title;
  document.getElementById("classroom-lesson-heading").textContent = activeLesson.title;
  document.getElementById("classroom-duration-badge").innerHTML = `<i class="bi bi-clock me-1"></i> ${activeLesson.duration} Menit`;
  document.getElementById("classroom-lesson-article").innerHTML = `<p>${activeLesson.body}</p>`;

  // Video Frame
  const player = document.getElementById("classroom-video-player");
  player.src = activeLesson.videoUrl || "https://www.youtube.com/embed/zjkBMFhNj_g";

  // Completion indicator
  const isDone = platformState.completedLessonIds.includes(activeLesson.id);
  const doneBadge = document.getElementById("classroom-done-indicator");
  if (isDone) doneBadge.classList.remove("d-none");
  else doneBadge.classList.add("d-none");

  // Load Saved Notes for this lesson
  const notesArea = document.getElementById("classroom-student-notes");
  notesArea.value = localStorage.getItem(`eduflex_notes_${activeLesson.id}`) || "";
  notesArea.oninput = () => {
    localStorage.setItem(`eduflex_notes_${activeLesson.id}`, notesArea.value);
    document.getElementById("notepad-save-status").textContent = "Tersimpan otomatis!";
  };

  // Next / Prev buttons
  const allLessons = course.modules.flatMap(m => m.lessons);
  const currIdx = allLessons.findIndex(l => l.id === activeLesson.id);

  const prevBtn = document.getElementById("btn-lesson-prev");
  const nextBtn = document.getElementById("btn-lesson-next");

  prevBtn.style.visibility = currIdx > 0 ? "visible" : "hidden";
  prevBtn.onclick = () => {
    platformState.activeLessonId = allLessons[currIdx - 1].id;
    renderClassroomScreen();
  };

  nextBtn.style.visibility = currIdx < allLessons.length - 1 ? "visible" : "hidden";
  nextBtn.onclick = () => {
    platformState.activeLessonId = allLessons[currIdx + 1].id;
    renderClassroomScreen();
  };

  // Mark complete button
  const completeBtn = document.getElementById("btn-lesson-complete");
  completeBtn.onclick = () => {
    if (!platformState.completedLessonIds.includes(activeLesson.id)) {
      platformState.completedLessonIds.push(activeLesson.id);
      saveUserData();
      playChimeSound("success");
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      triggerToast("Materi pelajaran tuntas! Poin bertambah.", "bg-success");
    }
    if (currIdx < allLessons.length - 1) {
      platformState.activeLessonId = allLessons[currIdx + 1].id;
      renderClassroomScreen();
    } else {
      renderClassroomScreen();
      confettiCelebrationCannon();
      triggerToast("Luar biasa! Seluruh materi kursus ini telah selesai.", "bg-primary");
    }
  };

  // Render Syllabus Accordion
  renderClassroomAccordion(course, activeLesson.id);
}

function renderClassroomAccordion(course, activeId) {
  const container = document.getElementById("classroomAccordionList");
  container.innerHTML = course.modules.map((m, idx) => {
    const hasActive = m.lessons.some(l => l.id === activeId);
    return `
      <div class="accordion-item bento-card mb-2 overflow-hidden border">
        <h2 class="accordion-header">
          <button class="accordion-button ${hasActive ? "" : "collapsed"} bg-transparent py-2 px-3 fw-semibold small" type="button" data-bs-toggle="collapse" data-bs-target="#acc-${m.id}">
            Modul ${idx + 1}: ${m.title}
          </button>
        </h2>
        <div id="acc-${m.id}" class="accordion-collapse collapse ${hasActive ? "show" : ""}" data-bs-parent="#classroomAccordionList">
          <div class="accordion-body p-2">
            <div class="list-group list-group-flush gap-1">
              ${m.lessons.map(l => {
                const done = platformState.completedLessonIds.includes(l.id);
                const isActive = l.id === activeId;
                return `
                  <button onclick="openClassroom(${course.id}, ${l.id})" class="list-group-item list-group-item-action rounded-2 border-0 py-2 d-flex justify-content-between align-items-center ${isActive ? "bg-primary-subtle text-primary fw-bold" : "bg-transparent"}">
                    <div class="d-flex align-items-center small">
                      <i class="bi ${done ? "bi-check-circle-fill text-success" : "bi-circle text-muted"} me-2"></i>
                      <span>${l.title}</span>
                    </div>
                    <small class="text-muted ms-2">${l.duration}m</small>
                  </button>
                `;
              }).join("")}

              ${m.quiz ? `
                <button onclick="startGamifiedQuiz(${course.id}, ${m.id})" class="list-group-item list-group-item-action rounded-2 border-0 py-2 mt-1 bg-warning bg-opacity-10 text-warning fw-bold d-flex justify-content-between align-items-center">
                  <span class="small"><i class="bi bi-patch-question-fill me-1"></i> Ujian: ${m.quiz.title}</span>
                  <span class="badge bg-warning text-dark small">Kuis</span>
                </button>
              ` : ""}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ================= FITUR 5: KUIS INTERAKTIF (GAMIFIED DENGAN AUDIO) =================
let activeQuizTimer = null;
let activeQuizData = null;
let quizSecondsLeft = 600;
let userLives = 3;
let userStreak = 0;

function startGamifiedQuiz(courseId, moduleId) {
  const course = platformState.courses.find(c => c.id === courseId);
  const mod = course?.modules.find(m => m.id === moduleId);
  if (!mod || !mod.quiz) return;

  activeQuizData = { course, module: mod, quiz: mod.quiz };
  userLives = 3;
  userStreak = 0;
  updateLivesDisplay();
  updateStreakDisplay();

  document.getElementById("quiz-title-display").textContent = mod.quiz.title;
  document.getElementById("quiz-passing-score-label").textContent = `Batas Lulus: ${mod.quiz.passingScore}%`;
  document.getElementById("quiz-active-box").classList.remove("d-none");
  document.getElementById("quiz-result-view").classList.add("d-none");

  // Render Questions
  const qBox = document.getElementById("quiz-questions-render-box");
  qBox.innerHTML = mod.quiz.questions.map((q, idx) => `
    <div class="bento-card p-4">
      <div class="d-flex align-items-center gap-2 mb-3">
        <span class="badge bg-primary rounded-circle p-2 fs-6" style="width: 32px; height: 32px; display:flex; align-items:center; justify-content:center;">${idx + 1}</span>
        <h5 class="fw-bold mb-0">${q.text}</h5>
      </div>
      <div class="d-flex flex-column gap-2">
        ${q.options.map(opt => `
          <div class="quiz-option-btn" onclick="selectOptionTile(this, ${q.id})">
            <input type="radio" name="question_${q.id}" value="${opt.id}" class="form-check-input me-3" required>
            <span>${opt.text}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  // Start Timer (10 Minutes)
  quizSecondsLeft = (mod.quiz.durationMinutes || 10) * 60;
  startQuizClock();

  switchView("quiz");
}

function selectOptionTile(tileElement, questionId) {
  const parent = tileElement.closest(".bento-card");
  parent.querySelectorAll(".quiz-option-btn").forEach(el => el.classList.remove("selected"));
  tileElement.classList.add("selected");
  const radio = tileElement.querySelector("input[type=radio]");
  if (radio) radio.checked = true;
  playChimeSound("tap");
}

function updateLivesDisplay() {
  for (let i = 1; i <= 3; i++) {
    const heart = document.getElementById(`heart-${i}`);
    if (i <= userLives) heart.classList.remove("lost");
    else heart.classList.add("lost");
  }
}

function updateStreakDisplay() {
  document.getElementById("quiz-streak-badge").textContent = `🔥 Streak ${userStreak}`;
}

function startQuizClock() {
  if (activeQuizTimer) clearInterval(activeQuizTimer);
  const textEl = document.getElementById("quiz-timer-text");

  activeQuizTimer = setInterval(() => {
    quizSecondsLeft--;
    const m = Math.floor(quizSecondsLeft / 60);
    const s = quizSecondsLeft % 60;
    textEl.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

    if (quizSecondsLeft <= 0) {
      clearInterval(activeQuizTimer);
      triggerToast("Waktu kuis habis! Mengirimkan jawaban...", "bg-danger");
      processQuizSubmit();
    }
  }, 1000);
}

function exitQuiz() {
  if (confirm("Yakin ingin membatalkan kuis? Jawaban belum tersimpan.")) {
    if (activeQuizTimer) clearInterval(activeQuizTimer);
    switchView("classroom");
  }
}

function processQuizSubmit() {
  if (activeQuizTimer) clearInterval(activeQuizTimer);
  const quiz = activeQuizData.quiz;
  let correctCount = 0;
  const breakdown = [];

  quiz.questions.forEach((q, idx) => {
    const radio = document.querySelector(`input[name="question_${q.id}"]:checked`);
    const selectedId = radio ? radio.value : null;
    const correctOpt = q.options.find(o => o.isCorrect);
    const selectedOpt = q.options.find(o => o.id === selectedId);

    const isCorrect = selectedId === correctOpt?.id;
    if (isCorrect) correctCount++;

    breakdown.push({
      num: idx + 1,
      qText: q.text,
      isCorrect,
      selected: selectedOpt ? selectedOpt.text : "Tidak dijawab",
      correct: correctOpt ? correctOpt.text : "",
      explanation: q.explanation
    });
  });

  const finalScore = Math.round((correctCount / quiz.questions.length) * 100);
  const isPassed = finalScore >= quiz.passingScore;

  // Add attempt to state
  platformState.quizAttempts.unshift({
    courseTitle: activeQuizData.course.title,
    quizTitle: quiz.title,
    score: finalScore,
    isPassed,
    date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })
  });
  saveUserData();

  // Show results view
  document.getElementById("quiz-active-box").classList.add("d-none");
  const resultView = document.getElementById("quiz-result-view");
  resultView.classList.remove("d-none");

  document.getElementById("quiz-score-number").textContent = finalScore;
  const passBadge = document.getElementById("quiz-pass-badge");
  const resultHeader = document.getElementById("quiz-result-header");

  if (isPassed) {
    passBadge.textContent = "LULUS";
    passBadge.className = "badge bg-success fs-6 px-3 py-2 rounded-pill";
    resultHeader.textContent = "Selamat! Anda Berhasil Lulus Kuis 🏆";
    playChimeSound("success");
    confettiCelebrationCannon();
  } else {
    passBadge.textContent = "BELUM LULUS";
    passBadge.className = "badge bg-danger fs-6 px-3 py-2 rounded-pill";
    resultHeader.textContent = "Tetap Semangat! Coba Ulangi Materi Ini";
    playChimeSound("fail");
  }

  // Render Breakdown
  const reviewList = document.getElementById("quiz-review-cards-list");
  reviewList.innerHTML = breakdown.map(item => `
    <div class="bento-card p-3 border-start border-4 ${item.isCorrect ? "border-success" : "border-danger"}">
      <div class="d-flex justify-content-between align-items-center mb-1">
        <span class="fw-bold">Nomor ${item.num}</span>
        <span class="badge ${item.isCorrect ? "bg-success" : "bg-danger"}">${item.isCorrect ? "Benar" : "Salah"}</span>
      </div>
      <p class="mb-2">${item.qText}</p>
      <small class="d-block mb-1">Jawaban Anda: <strong class="${item.isCorrect ? "text-success" : "text-danger"}">${item.selected}</strong></small>
      ${!item.isCorrect ? `<small class="d-block text-success mb-1">Kunci Jawaban: <strong>${item.correct}</strong></small>` : ""}
      <small class="text-muted fst-italic mt-2 d-block border-top pt-2"><i class="bi bi-info-circle me-1"></i> ${item.explanation}</small>
    </div>
  `).join("");
}

function retakeActiveQuiz() {
  if (activeQuizData) {
    startGamifiedQuiz(activeQuizData.course.id, activeQuizData.module.id);
  }
}

// ================= FITUR 6: PROGRESS BELAJAR & KANVAS SERTIFIKAT =================
function renderProgress() {
  const enrolled = platformState.courses.filter(c => platformState.enrolledIds.includes(c.id));
  
  let totalProg = 0;
  if (enrolled.length > 0) {
    totalProg = Math.round(enrolled.reduce((acc, c) => acc + getCourseProgress(c.id), 0) / enrolled.length);
  }
  document.getElementById("progress-global-avg").textContent = `${totalProg}%`;

  const container = document.getElementById("progress-course-cards-container");
  if (enrolled.length === 0) {
    container.innerHTML = `<p class="text-muted">Belum ada kursus yang diikuti.</p>`;
  } else {
    container.innerHTML = enrolled.map(c => {
      const prog = getCourseProgress(c.id);
      const isDone = prog === 100;
      return `
        <div class="bento-card p-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
              <span class="badge bg-primary-subtle text-primary rounded-pill mb-1">${c.categoryLabel}</span>
              <h6 class="fw-bold mb-0">${c.title}</h6>
            </div>
            <h5 class="fw-bold ${isDone ? "text-success" : "text-info"} mb-0">${prog}%</h5>
          </div>
          <div class="progress-track-bar mb-3">
            <div class="progress-track-fill" style="width: ${prog}%;"></div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-muted"><i class="bi bi-check-circle me-1 text-success"></i> ${getCompletedCountInCourse(c)} / ${getCourseLessonCount(c)} Materi Selesai</small>
            ${isDone ? `
              <button onclick="openLiveCertificateModal('${c.title}')" class="btn btn-warning btn-sm rounded-pill fw-bold text-dark">
                <i class="bi bi-award-fill me-1"></i> Cetak Sertifikat
              </button>
            ` : `
              <button onclick="openClassroom(${c.id})" class="btn btn-outline-eduflex btn-sm">
                Lanjutkan
              </button>
            `}
          </div>
        </div>
      `;
    }).join("");
  }

  // Quiz table
  const tbody = document.getElementById("progress-quiz-table-body");
  if (platformState.quizAttempts.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="text-center text-muted py-3">Belum ada riwayat kuis.</td></tr>`;
  } else {
    tbody.innerHTML = platformState.quizAttempts.map(a => `
      <tr>
        <td>
          <div class="fw-semibold small">${a.quizTitle}</div>
          <small class="text-muted" style="font-size: 11px;">${a.date}</small>
        </td>
        <td class="fw-bold">${a.score}</td>
        <td>
          <span class="badge ${a.isPassed ? "bg-success" : "bg-danger"} rounded-pill">
            ${a.isPassed ? "Lulus" : "Coba Lagi"}
          </span>
        </td>
      </tr>
    `).join("");
  }
}

// Live HTML5 Canvas Certificate Generator
function openLiveCertificateModal(courseTitle) {
  const canvas = document.getElementById("certificateCanvas");
  const ctx = canvas.getContext("2d");

  // Render Canvas Certificate Elements
  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 960, 600);
  bgGrad.addColorStop(0, "#08101E");
  bgGrad.addColorStop(0.5, "#0D1B2A");
  bgGrad.addColorStop(1, "#1B263B");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 960, 600);

  // Border Gold Accent
  ctx.strokeStyle = "#4FACFE";
  ctx.lineWidth = 12;
  ctx.strokeRect(20, 20, 920, 560);

  ctx.strokeStyle = "#00F2FE";
  ctx.lineWidth = 2;
  ctx.strokeRect(32, 32, 896, 536);

  // Title: EduFlex Academy
  ctx.textAlign = "center";
  ctx.fillStyle = "#00F2FE";
  ctx.font = "bold 24px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("EDUFLEX PRO ACADEMY", 480, 90);

  ctx.fillStyle = "#E2E8F0";
  ctx.font = "bold 34px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("SERTIFIKAT KELULUSAN RESMI", 480, 140);

  ctx.fillStyle = "#94A3B8";
  ctx.font = "16px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Sertifikat ini diberikan sebagai pengakuan kelulusan kepada:", 480, 200);

  // Student Name
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 38px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(platformState.currentUser.name, 480, 270);

  // Underline
  ctx.strokeStyle = "#00F2FE";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(280, 290);
  ctx.lineTo(680, 290);
  ctx.stroke();

  // Course Text
  ctx.fillStyle = "#94A3B8";
  ctx.font = "16px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText("Telah menyelesaikan seluruh rangkaian materi & lulus evaluasi kuis pada:", 480, 340);

  ctx.fillStyle = "#10B981";
  ctx.font = "bold 26px 'Plus Jakarta Sans', sans-serif";
  ctx.fillText(courseTitle, 480, 390);

  // Footer Metadata
  ctx.fillStyle = "#64748B";
  ctx.font = "14px 'JetBrains Mono', monospace";
  ctx.fillText(`ID Kredensial: EDUFLEX-${Date.now().toString().slice(-8)}`, 300, 500);
  ctx.fillText(`Terbit: ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}`, 660, 500);

  new bootstrap.Modal(document.getElementById("modal-live-certificate")).show();
  confettiCelebrationCannon();
}

function downloadCertificatePNG() {
  const canvas = document.getElementById("certificateCanvas");
  const link = document.createElement("a");
  link.download = `Sertifikat-EduFlex-${platformState.currentUser.name.replace(/\s+/g, "_")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// ================= FITUR 7: DASHBOARD ADMIN =================
function renderAdminDashboard() {
  document.getElementById("admin-kpi-courses").textContent = platformState.courses.length;
  
  let totalLessons = 0;
  platformState.courses.forEach(c => {
    totalLessons += getCourseLessonCount(c);
  });
  document.getElementById("admin-kpi-lessons").textContent = totalLessons;
  document.getElementById("admin-kpi-quizzes").textContent = 320 + platformState.quizAttempts.length;

  if (platformState.adminChart) {
    platformState.adminChart.update();
  }
}

function initAdminChart() {
  const canvas = document.getElementById("adminPerformanceChart");
  if (!canvas) return;

  platformState.adminChart = new Chart(canvas, {
    type: "line",
    data: {
      labels: ["Juni", "Juli", "Agustus", "September", "Oktober", "November"],
      datasets: [
        {
          label: "Siswa Baru Terdaftar",
          data: [140, 210, 320, 480, 690, 840],
          borderColor: "#00F2FE",
          backgroundColor: "rgba(0, 242, 254, 0.1)",
          tension: 0.35,
          fill: true
        },
        {
          label: "Siswa Lulus Modul",
          data: [90, 160, 250, 390, 560, 750],
          borderColor: "#10B981",
          backgroundColor: "rgba(16, 185, 129, 0.08)",
          tension: 0.35,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { color: "#94A3B8" } }
      },
      scales: {
        x: { grid: { color: "rgba(255, 255, 255, 0.05)" }, ticks: { color: "#94A3B8" } },
        y: { grid: { color: "rgba(255, 255, 255, 0.05)" }, ticks: { color: "#94A3B8" } }
      }
    }
  });
}

// ================= FITUR 8: KELOLA MATERI (ADMIN STUDIO CRUD) =================
function renderAdminCoursesTable() {
  const tbody = document.getElementById("admin-courses-table-rows");
  if (!tbody) return;

  tbody.innerHTML = platformState.courses.map(course => {
    const totalLessons = getCourseLessonCount(course);
    return `
      <tr>
        <td class="ps-4">
          <div class="d-flex align-items-center gap-3">
            <img src="${course.thumbnail}" width="48" height="48" class="rounded-3" style="object-fit:cover;" onerror="this.src='images/ai-engineering.svg'">
            <div>
              <div class="fw-bold">${course.title}</div>
              <small class="text-muted">${course.instructor || "Instruktur EduFlex"}</small>
            </div>
          </div>
        </td>
        <td><span class="badge bg-primary-subtle text-primary">${course.categoryLabel}</span></td>
        <td><span class="badge bg-dark border">${course.levelLabel}</span></td>
        <td>${course.modules.length} Modul (${totalLessons} Lesson)</td>
        <td><span class="badge bg-success-subtle text-success">Aktif / Live</span></td>
        <td class="text-end pe-4">
          <div class="btn-group btn-group-sm">
            <button onclick="editCourseModal(${course.id})" class="btn btn-outline-eduflex" title="Edit Kursus">
              <i class="bi bi-pencil"></i>
            </button>
            <button onclick="deleteCourseById(${course.id})" class="btn btn-outline-danger" title="Hapus Kursus">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function openNewCourseModal() {
  document.getElementById("course-modal-title").textContent = "Buat Kursus Baru";
  document.getElementById("course-form-id").value = "";
  document.getElementById("form-course-editor").reset();
  new bootstrap.Modal(document.getElementById("modal-course-editor")).show();
}

function editCourseModal(courseId) {
  const course = platformState.courses.find(c => c.id === courseId);
  if (!course) return;

  document.getElementById("course-modal-title").textContent = "Edit Kursus";
  document.getElementById("course-form-id").value = course.id;
  document.getElementById("course-input-title").value = course.title;
  document.getElementById("course-input-category").value = course.category;
  document.getElementById("course-input-level").value = course.level;
  document.getElementById("course-input-thumbnail").value = course.thumbnail;
  document.getElementById("course-input-desc").value = course.description;

  new bootstrap.Modal(document.getElementById("modal-course-editor")).show();
}

function saveCourseForm(e) {
  e.preventDefault();
  const editId = document.getElementById("course-form-id").value;
  const title = document.getElementById("course-input-title").value;
  const category = document.getElementById("course-input-category").value;
  const level = document.getElementById("course-input-level").value;
  const thumb = document.getElementById("course-input-thumbnail").value;
  const desc = document.getElementById("course-input-desc").value;

  const categoryMap = {
    ai: "Artificial Intelligence",
    web: "Web Development",
    cloud: "Cloud & DevOps",
    uiux: "UI/UX Design"
  };

  const levelMap = {
    beginner: "Pemula",
    intermediate: "Menengah",
    advanced: "Mahir"
  };

  if (editId) {
    const target = platformState.courses.find(c => c.id === parseInt(editId));
    if (target) {
      target.title = title;
      target.category = category;
      target.categoryLabel = categoryMap[category] || category;
      target.level = level;
      target.levelLabel = levelMap[level] || level;
      target.thumbnail = thumb;
      target.description = desc;
      triggerToast("Kursus berhasil diperbarui!", "bg-success");
    }
  } else {
    const newCourse = {
      id: Date.now(),
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      category,
      categoryLabel: categoryMap[category] || category,
      level,
      levelLabel: levelMap[level] || level,
      thumbnail: thumb,
      description: desc,
      instructor: "Pengajar Baru",
      rating: 5.0,
      modules: [
        {
          id: Date.now() + 1,
          title: "Modul 1: Pengenalan Materi",
          lessons: [
            {
              id: Date.now() + 2,
              title: "Selamat Datang di Kursus",
              type: "video",
              duration: 10,
              videoUrl: "https://www.youtube.com/embed/zjkBMFhNj_g",
              body: "Pelajari roadmap kurikulum kursus ini dan persiapkan lingkungan belajar Anda."
            }
          ],
          quiz: null
        }
      ]
    };
    platformState.courses.push(newCourse);
    triggerToast("Kursus baru berhasil ditambahkan!", "bg-success");
  }

  saveCourses();
  bootstrap.Modal.getInstance(document.getElementById("modal-course-editor")).hide();
  renderAdminCoursesTable();
  renderCatalog();
}

function deleteCourseById(courseId) {
  if (confirm("Apakah Anda yakin ingin menghapus kursus ini?")) {
    platformState.courses = platformState.courses.filter(c => c.id !== courseId);
    saveCourses();
    triggerToast("Kursus berhasil dihapus.", "bg-danger");
    renderAdminCoursesTable();
    renderCatalog();
  }
}

// ================= UTILITY & SOUND SYNTHESIS =================
function getCourseLessonCount(course) {
  return course.modules.reduce((acc, m) => acc + (m.lessons ? m.lessons.length : 0), 0);
}

function getCompletedCountInCourse(course) {
  let count = 0;
  course.modules.forEach(m => {
    m.lessons.forEach(l => {
      if (platformState.completedLessonIds.includes(l.id)) count++;
    });
  });
  return count;
}

function getCourseProgress(courseId) {
  const course = platformState.courses.find(c => c.id === courseId);
  if (!course) return 0;
  const total = getCourseLessonCount(course);
  if (total === 0) return 0;
  const completed = getCompletedCountInCourse(course);
  return Math.min(100, Math.round((completed / total) * 100));
}

// Web Audio API Sound Generator (No external MP3 required!)
function playChimeSound(type) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === "success") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } else if (type === "fail") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, audioCtx.currentTime);
      osc.frequency.setValueAtTime(180, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } else if (type === "tap") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    }
  } catch (e) {
    // Audio context not allowed or failed, fail silently
  }
}

function confettiCelebrationCannon() {
  if (typeof confetti !== "function") return;
  const end = Date.now() + 2.5 * 1000;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ["#00F2FE", "#4FACFE", "#10B981"] });
    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ["#00F2FE", "#4FACFE", "#10B981"] });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function triggerToast(msg, bg = "bg-primary") {
  const el = document.getElementById("eduflexToast");
  const text = document.getElementById("eduflexToastText");
  el.className = `toast align-items-center text-white ${bg} border-0 rounded-4 shadow-lg`;
  text.textContent = msg;
  new bootstrap.Toast(el, { delay: 3500 }).show();
}

function setupEventListeners() {
  const searchInput = document.getElementById("filter-search-input");
  if (searchInput) searchInput.addEventListener("input", renderCatalog);

  const catSelect = document.getElementById("filter-category-select");
  if (catSelect) catSelect.addEventListener("change", renderCatalog);

  const levelSelect = document.getElementById("filter-level-select");
  if (levelSelect) levelSelect.addEventListener("change", renderCatalog);

  const quizForm = document.getElementById("quiz-interactive-form");
  if (quizForm) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();
      processQuizSubmit();
    });
  }
}

