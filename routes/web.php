<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\FakultasController;
use App\Http\Controllers\Admin\MahasiswaController;
use App\Http\Controllers\Admin\ProdiController;
use App\Http\Controllers\Admin\userController;
use App\Http\Controllers\ProfileController;
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
Route::get('mahasiswa', [MahasiswaController::class, 'index'])->name('mahasiswa');
Route::get('user', [userController::class, 'index'])->name('user');