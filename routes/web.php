<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    $teamMembers = \App\Models\TeamMember::whereNull('project_id')->get();
    return Inertia::render('About', [
        'teamMembers' => $teamMembers,
    ]);
})->name('about');

Route::get('/services', function () {
    return Inertia::render('Services');
})->name('services');

Route::get('/projects', function () {
    $projects = \App\Models\Project::with(['user', 'teamMembers'])->get();
    return Inertia::render('Projects', [
        'projects' => $projects,
    ]);
})->name('projects');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::middleware('admin')->group(function () {
        Route::get('/admin/dashboard', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');

        // Project management routes
        Route::resource('projects', \App\Http\Controllers\ProjectController::class)->except(['index', 'show']);
        
        // Team member management routes
        Route::resource('team-members', \App\Http\Controllers\TeamMemberController::class);
    });
});

require __DIR__.'/auth.php';
