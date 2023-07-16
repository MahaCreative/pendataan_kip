<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function index(Request $request)
    {
        $cek_mahasiswa = $request->session()->get('mahasiswa');
        // $cek_berkas
        return inertia('User/Dashboard/Dashboard');
    }
}