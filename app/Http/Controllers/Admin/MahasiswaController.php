<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class MahasiswaController extends Controller
{
    public function index(Request $request)
    {
        $mahasiswa = Mahasiswa::with('prodi', 'berkas')->latest()->get()->take(10);

        return inertia('Admin/Mahasiswa/index', ['mahasiswa' => $mahasiswa]);
    }

    public function store(Request $request)
    {

        $request->validate([
            'nama' => 'required|string',
            'email' => 'required|email|unique:mahasiswas,email',
            'jenis_kelamin' => 'required',
            'angkatan' => 'required|numeric',
            'prodi' => 'required',
            'fakultas' => 'required',
            'nim' => 'required|numeric|min:12|unique:mahasiswas,nim'
        ]);
        $kd_akses = rand(111111, 999999);
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
        // return redirect()->route('send-akses-login')->with('mahasiswa',$mahasiswa);

    }


    public function update(Request $request)
    {

        $request->validate([
            'nama' => 'required|string',
            'email' => [
                'required',
                'email',
                Rule::unique('mahasiswas')->ignore($request->id),
            ],
            'jenis_kelamin' => 'required',
            'prodi' => 'required',
            'fakultas' => 'required',
            'nim' => [
                'required',
                'numeric',
                'min:12',
                Rule::unique('mahasiswas')->ignore($request->id),
            ],
            'angkatan' => 'required|numeric'
        ]);
        $mahasiswa = Mahasiswa::findOrFail($request->id);
        $mahasiswa->update([
            'nim' => $request->nim,
            'nama' => $request->nama,
            'angkatan' => $request->angkatan,
            'jenis_kelamin' => $request->jenis_kelamin,
            'email' => $request->email,
            'prodi_id' => $request->prodi
        ]);
    }

    public function delete(Request $request)
    {

        $mahasiswa = Mahasiswa::findOrFail($request->id);
        $mahasiswa->delete();
    }
}
