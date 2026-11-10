<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Student;
use App\Http\Controllers\Admin;

/*
|--------------------------------------------------------------------------
| Web Routes - EduFlex Pro Platform
|--------------------------------------------------------------------------
*/

// Public Catalog & Landing
Route::get('/', [Student\CatalogController::class, 'index'])->name('home');
Route::get('/katalog', [Student\CatalogController::class, 'index'])->name('catalog.index');
Route::get('/kursus/{slug}', [Student\CatalogController::class, 'show'])->name('catalog.show');

// Authentication (Login & Register)
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});
Route::post('/logout', [AuthController::class, 'logout'])->name('logout')->middleware('auth');

// Student Portal (Role: Student)
Route::middleware(['auth', 'role:student'])->group(function () {
    Route::get('/dashboard', [Student\DashboardController::class, 'index'])->name('student.dashboard');
    Route::post('/kursus/{id}/enroll', [Student\CatalogController::class, 'enroll'])->name('course.enroll');
    
    // Classroom & Notes
    Route::get('/belajar/{courseSlug}/materi/{lessonSlug}', [Student\ClassroomController::class, 'show'])->name('classroom.show');
    Route::post('/materi/{id}/selesai', [Student\ClassroomController::class, 'markComplete'])->name('lesson.complete');
    Route::post('/materi/{id}/catatan', [Student\ClassroomController::class, 'saveNote'])->name('lesson.note');

    // Gamified Interactive Quiz
    Route::get('/kuis/{quizId}', [Student\QuizController::class, 'show'])->name('quiz.show');
    Route::post('/kuis/{quizId}/submit', [Student\QuizController::class, 'submit'])->name('quiz.submit');

    // Progress & Certificate
    Route::get('/progress-saya', [Student\ProgressController::class, 'index'])->name('student.progress');
    Route::get('/sertifikat/{courseId}', [Student\ProgressController::class, 'certificate'])->name('student.certificate');
});

// Admin Console (Role: Admin)
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [Admin\DashboardController::class, 'index'])->name('dashboard');
    Route::resource('courses', Admin\CourseStudioController::class);
    Route::post('courses/{course}/modules', [Admin\CourseStudioController::class, 'storeModule'])->name('modules.store');
    Route::post('modules/{module}/lessons', [Admin\CourseStudioController::class, 'storeLesson'])->name('lessons.store');
    Route::post('quizzes/{quiz}/questions', [Admin\CourseStudioController::class, 'storeQuestion'])->name('questions.store');
});

