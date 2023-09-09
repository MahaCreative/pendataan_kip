<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function index(){
        return inertia('User/Register/Register');
    }
    public function store(Request $request){
        $request->validate([
            'nama' => 'required|string',
            'email' => 'required|email|unique:mahasiswas,email',
            'jenis_kelamin' => 'required',
            'angkatan' => 'required|numeric',
            'prodi' => 'required',
            'fakultas' => 'required',
            'nim' => 'required|numeric|min:12|unique:mahasiswas,nim'
        ]);
        $kd_akses = $request->password;
        $mahasiswa = Mahasiswa::create([
            'kode_login' => $kd_akses,
            'nim' => $request->nim,
            'angkatan' => $request->angkatan,
            'nama' => $request->nama,
            'jenis_kelamin' => $request->jenis_kelamin,
            'email' => $request->email,
            'prodi_id' => $request->prodi,
            'fakultas_id' => $request->fakultas
        ]);
$request->session()->put('mahasiswa', $mahasiswa);
        return redirect()->route('dashboard-user')->with([
            'type' => 'success',
            'message' => 'Berhasil menambahkan data',
            ]);
    }
}