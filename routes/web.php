<?php

use App\Http\Controllers\Admin\BerkasHandlerController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DownloadBerkas;
use App\Http\Controllers\Admin\FakultasController;
use App\Http\Controllers\Admin\MahasiswaController;
use App\Http\Controllers\Admin\ProdiController;
use App\Http\Controllers\Admin\userController;
use App\Http\Controllers\DownloadPenerimaKip;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SendAksesLoginController;
use App\Http\Controllers\SettingOperator;
use App\Http\Controllers\User\DashboardController as UserDashboardController;
use App\Http\Controllers\User\DataDiriController;
use App\Http\Controllers\User\HomeController;
use App\Models\Fakultas;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
Route::get('mahasiswa', [MahasiswaController::class, 'index'])->name('mahasiswa');
Route::middleware(['auth'])->group(function () {

    Route::get('fakultas', [FakultasController::class, 'index'])->name('fakultas');
    Route::post('fakultas', [FakultasController::class, 'store']);
    Route::patch('fakultas', [FakultasController::class, 'edit']);
    Route::delete('fakultas', [FakultasController::class, 'delete']);

    Route::get('prodi', [ProdiController::class, 'index'])->name('prodi');
    Route::post('prodi', [ProdiController::class, 'store']);
    Route::patch('prodi', [ProdiController::class, 'update']);
    Route::delete('prodi', [ProdiController::class, 'delete']);

    Route::post('mahasiswa', [MahasiswaController::class, 'store']);
    Route::patch('mahasiswa', [MahasiswaController::class, 'update']);
    Route::post('mahasiswa-delete', [MahasiswaController::class, 'delete'])->name('mahasiswa-delete');

    // Send Email
    Route::get('send-akses-login', [SendAksesLoginController::class, 'index'])->name('send-akses-login');
    Route::get('setting-profile', [SettingOperator::class, 'index'])->name('setting-profile');
    Route::patch('setting-profile', [SettingOperator::class, 'update']);

    Route::get('download-mahasiswa-angkatan', [DownloadPenerimaKip::class, 'angkatanDownload'])->name('angkatan_download');
    Route::get('download-mahasiswa-semua', [DownloadPenerimaKip::class, 'semuaDownload'])->name('semua_download');
    Route::get('download-mahasiswa-fakultas', [DownloadPenerimaKip::class, 'FakultasDownload'])->name('fakultas_download');
});

Route::get('downloads/{file}/{fileType}', [DownloadBerkas::class, 'download_berkas'])->name('download_berkas');
Route::get('setujui-berkas-handler', [BerkasHandlerController::class, 'setujui_berkas'])->name('setujui_berkas');
Route::post('tolak-berkas-handler', [BerkasHandlerController::class, 'tolak_berkas'])->name('tolak_berkas');
Route::middleware(['guest'])->group(function () {
    Route::get('login', [LoginController::class, 'index'])->name('login');
    Route::post('login-admin', [LoginController::class, 'store_admin'])->name('login-admin');
    Route::post('login-user', [LoginController::class, 'store_user'])->name('login-user');

});
Route::get('logout', function (Request $request) {

    if ($request->user()) {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('user.home');
    }

    if($request->session()->get('mahasiswa')){
        $request->session()->forget('mahasiswa');
        return redirect()->route('user.home');
    }
})->name('logout');


// User

Route::get('', [HomeController::class, 'index'])->name('user.home');
Route::get('dashboard-user', [UserDashboardController::class, 'index'])->name('dashboard-user');
Route::post('upload-data-diri', [DataDiriController::class, 'upload_data_diri'])->name('upload_data_diri');
Route::patch('upload-data-diri', [DataDiriController::class, 'update_upload_data_diri'])->name('upload_data_diri');
Route::post('upload-berkas', [DataDiriController::class, 'upload_berkas'])->name('upload_berkas');
Route::patch('update_berkas', [DataDiriController::class, 'update_berkas'])->name('update_berkas');
Route::get('register', [RegisterController::class, 'index'])->name('register');
Route::post('register', [RegisterController::class, 'store']);