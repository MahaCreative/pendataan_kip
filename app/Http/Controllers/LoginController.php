<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('User/Login/Login');
    }

    public function store_admin(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            // Autentikasi berhasil
            return redirect()->intended('/dashboard');
        }

        // Autentikasi gagal
        return redirect()->back()->withErrors([
            'email' => 'Email atau password yang Anda masukkan salah.',
        ]);
    }

    public function store_user(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'nim' => 'required|numeric|min:12',
            'kode_akses' => 'required|numeric|'
        ]);

        $cek = Mahasiswa::where('email', '=', $request->email)->where('nim', '=', $request->nim)->first();
        if ($cek->kode_login === $request->kode_akses) {
            dd('berhasil');
        }
        return redirect()->back()->withErrors([
            'nim' => 'Mungkin anda belum terdaftar sebagai penerima KIP, atau mungkin Kode Akses anda salah',
        ]);
    }
}
