<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Fakultas;
use Illuminate\Http\Request;

class FakultasController extends Controller
{
    public function index(Request $request){
        $fak = Fakultas::all();
        return inertia('Admin/Fakultas/index', compact('fak'));
    }



    public function store(Request $request){

        $request->validate([
            'fakultas' => 'min:6|string|required',
            'logo' => 'image|mimes:png,jpg,jpeg'
        ]);
        $url = $request->file('logo') ? $request->file('logo')->storeAs('logo/fakultas/' . $request->file('logo')->getClientOriginalName()) : './img/logo.png';
        // $urlFoto = $request->file('foto_anggota') ? $request->file('foto_anggota')->store('images/profile_anggota') : 'images/user.png';
        $fakultas = Fakultas::create([
            'fakultas' => $request->fakultas,
            'logo' => $url
        ]);

    }

    public function edit(Request $request){
        // dd($request->all());
        $fak = Fakultas::findOrFail($request->data['id']);
        $url = $request->file('logo') ? $request->file('logo')->storeAs('logo/fakultas/' . $request->file('logo')->getClientOriginalName()) : $fak->logo;
        $fak->update([
            'fakultas' => $request->data['fakultas'],
            'logo' => $url
        ]);
    }

    public function delete(Request $request){
        $fak = Fakultas::findOrFail($request->id);
        $fak->delete();
    }
}