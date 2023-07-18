<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Prodi;
use Illuminate\Http\Request;

class ProdiController extends Controller
{
    public function index(Request $request){
        $prod = Prodi::with('fakultas')->get();

        return inertia('Admin/Prodi/index', compact('prod'));
    }
    public function store(Request $request){
        $request->validate([
            'fakultas_id' => 'required|',
            'prodi' => 'required|string|min:6',
            'logo' => 'mimes:png,jpg,jpeg|image',
        ]);
        $url = $request->file('logo') ? $request->file('logo')->storeAs('logo/prodi/' . $request->file('logo')->getClientOriginalName()) : './img/logo.png';
        $prod = Prodi::create([
            'fakultas_id' => $request->fakultas_id,
            'prodi' => $request->prodi,
            'logo' => $url,
        ]);
         return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil menambahkan data'
        ]);
    }

    public function update(Request $request){
        $prod = Prodi::findOrFail($request->data['id']);
        $url = $request->file('logo') ? $request->file('logo')->storeAs('logo/fakultas/' . $request->file('logo')->getClientOriginalName()) : $prod->logo;
        $prod->update([
            'fakultas_id' => $request->data['fakultas_id'],
            'prodi' => $request->data['prodi'],
            'logo' => $url,
        ]);
         return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil mengedit data'
        ]);
    }

    public function delete(Request $request){
        // dd($request->all());
        $prod = Prodi::findOrFail($request->id);
        $prod->delete();
         return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil menghapus data'
        ]);
    }
    
}