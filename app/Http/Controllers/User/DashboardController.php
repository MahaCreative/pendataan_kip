<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\BerkashMahasiswa;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function index(Request $request)
    {
        $cek_mahasiswa = $request->session()->get('mahasiswa');
        $berkas = BerkashMahasiswa::where('mahasiswa_id', $cek_mahasiswa->id)->first();
        return inertia('User/Dashboard/Dashboard', ['berkas' => $berkas]);
    }
}