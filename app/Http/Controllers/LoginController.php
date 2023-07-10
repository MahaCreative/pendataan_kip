<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index(){
        return inertia('User/Login');
    }

    public function store(Request $request){
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
}