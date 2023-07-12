<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Fakultas;
use App\Models\Mahasiswa;
use App\Models\Prodi;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $mahasiswa = [];
        $countMahasiswa = Mahasiswa::count();
        $tampilData = $request->tambah == 0 ? 20 :  20 + $request->tambah;

        if ($request->search == '') {

            $mahasiswa = Mahasiswa::with('prodi', 'fakultas')->paginate($tampilData);
        } else {
            $mahasiswa =
                Mahasiswa::with('prodi', 'fakultas')
                ->where('nama', 'like', '%' . $request->search . '%')
                ->paginate($tampilData);
        }
        // dd($mahasiswa);
        return inertia('User/Home/Home', compact('mahasiswa', 'countMahasiswa'));
    }
}
