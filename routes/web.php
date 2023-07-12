<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\FakultasController;
use App\Http\Controllers\Admin\MahasiswaController;
use App\Http\Controllers\Admin\ProdiController;
use App\Http\Controllers\Admin\userController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SendAksesLoginController;
use App\Http\Controllers\User\HomeController;
use App\Models\Fakultas;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::get('fakultas', [FakultasController::class, 'index'])->name('fakultas');
Route::post('fakultas', [FakultasController::class, 'store']);
Route::patch('fakultas', [FakultasController::class, 'edit']);
Route::delete('fakultas', [FakultasController::class, 'delete']);

Route::get('prodi', [ProdiController::class, 'index'])->name('prodi');
Route::post('prodi', [ProdiController::class, 'store']);
Route::patch('prodi', [ProdiController::class, 'update']);
Route::delete('prodi', [ProdiController::class, 'delete']);

Route::get('mahasiswa', [MahasiswaController::class, 'index'])->name('mahasiswa');
Route::post('mahasiswa', [MahasiswaController::class, 'store']);
Route::patch('mahasiswa', [MahasiswaController::class, 'update']);
Route::post('mahasiswa-delete', [MahasiswaController::class, 'delete'])->name('mahasiswa-delete');

// Send Email
Route::get('send-akses-login', [SendAksesLoginController::class, 'index'])->name('send-akses-login');


Route::get('login', [LoginController::class, 'index'])->name('login');
Route::post('login-admin', [LoginController::class, 'store_admin'])->name('login-admin');
Route::post('login-user', [LoginController::class, 'store_user'])->name('login-user');


// User

Route::get('home', [HomeController::class, 'index'])->name('user.home');
