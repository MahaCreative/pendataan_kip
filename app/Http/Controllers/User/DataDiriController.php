<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\BerkashMahasiswa;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;

class DataDiriController extends Controller
{
    public function upload_data_diri(Request $request){
        $get = $request->session()->get('mahasiswa');
        $request->validate([
            'tempat_lahir' => "required|string",
            'tanggal_lahir' => "required|string",
            'nama_ayah' => "required|",
            'nama_ibu' => "required|string",
            'pekerjaan_ayah' => "required|string",
            'pekerjaan_ibu' => "required|string",
            'foto' => "required|image|mimes:png,jpg,jpeg",
            'telp' => "required"
        ]);
        $mahasiswa = Mahasiswa::findOrFail($get->id);
        $mahasiswa->update(
       [    'tempat_lahir' => $request->tempat_lahir,
            'tanggal_lahir' => $request->tanggal_lahir,
            'nama_ayah' => $request->nama_ayah,
            'nama_ibu' => $request->nama_ibu,
            'alamat' => $request->alamat,
            // 'pekerjaan_ayah' => $request->pekerjaan_ayah,
            // 'pekerjaan_ibu' => $request->pekerjaan_ibu,
            'foto' => $request->file('foto')->storeAs('img/mahasiswa', $request->file('foto')->getClientOriginalName()),
            'telp' => $request->telp,
            'status_data_diri' => 'lengkap'
            ]
        );
        $request->session()->put('mahasiswa', $mahasiswa);
    }

    public function update_upload_data_diri(Request $request){
         $request->validate([
            'tempat_lahir' => "required|string",
            'tanggal_lahir' => "required|string",
            'nama_ayah' => "required|",
            'nama_ibu' => "required|string",
            'pekerjaan_ayah' => "required|string",
            'pekerjaan_ibu' => "required|string",
            'telp' => "required"
        ]);
        $get = $request->session()->get('mahasiswa');
        $mahasiswa = Mahasiswa::findOrFail($get->id);
        $mahasiswa->update([
            'tempat_lahir' => $request->data['tempat_lahir'],
            'tanggal_lahir' => $request->data['tanggal_lahir'],
            'nama_ayah' => $request->data['nama_ayah'],
            'nama_ibu' => $request->data['nama_ibu'],
            'alamat' => $request->data['alamat'],
            // 'pekerjaan_ayah' => $request->pekerjaan_ayah,
            // 'pekerjaan_ibu' => $request->pekerjaan_ibu,
            'foto' => $request->file('foto') ? $request->file('foto')->storeAs('img/mahasiswa', $request->file('foto')->getClientOriginalName()) : $mahasiswa->foto,
            'telp' => $request->data['telp'],
            'status_data_diri' => 'lengkap'
        ]);
    }

    public function upload_berkas(Request $request){
        $request->validate([
            "ktp" => 'required|mimes:pdf',
            "kk" => 'required|mimes:pdf',
            "kip" => 'required|mimes:pdf',
            "krs" => 'required|mimes:pdf',
            "pddikti" => 'required|mimes:pdf',
        ]);
        $get = $request->session()->get('mahasiswa');
        $mahasiswa = Mahasiswa::findOrFail($get->id);
        $berkas = BerkashMahasiswa::create([
            "ktp" =>  $request->file('ktp')->storeAs('file/berkas/'.$mahasiswa->nama.'/ktp', $request->file('ktp')->getClientOriginalName()),
            "kk" =>  $request->file('kk')->storeAs('file/berkas/'.$mahasiswa->nama.'/kk', $request->file('kk')->getClientOriginalName()),
            "kip" =>  $request->file('kip')->storeAs('file/berkas/'.$mahasiswa->nama.'/kip', $request->file('kip')->getClientOriginalName()),
            "krs" => $request->file('krs')->storeAs('file/berkas/'.$mahasiswa->nama.'/krs', $request->file('krs')->getClientOriginalName()),
            "pddikti" => $request->file('pddikti')->storeAs('file/berkas/'.$mahasiswa->nama.'/pddikti', $request->file('pddikti')->getClientOriginalName()),
            'mahasiswa_id' => $mahasiswa->id,

        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Mengupload Data'
        ]);

    }

    public function update_berkas(Request $request){
        $berkas = BerkashMahasiswa::findOrFail($request->id);
        $get = $request->session()->get('mahasiswa');
        $mahasiswa = Mahasiswa::findOrFail($get->id);


        $berkas->update([
            "ktp" => $request->file("ktp") ? $request->file('ktp')->storeAs('file/berkas/'.$mahasiswa->nama.'/ktp', $request->file('ktp')->getClientOriginalName()) : $request->ktp,
            "kk" => $request->file("kk") ? $request->file('kk')->storeAs('file/berkas/'.$mahasiswa->nama.'/kk', $request->file('kk')->getClientOriginalName()) : $request->kk,
            "kip" => $request->file("kip") ? $request->file('kip')->storeAs('file/berkas/'.$mahasiswa->nama.'/kip', $request->file('kip')->getClientOriginalName()) : $request->kip,
            "krs" => $request->file("krs") ? $request->file('krs')->storeAs('file/berkas/'.$mahasiswa->nama.'/krs', $request->file('krs')->getClientOriginalName()) : $request->krs,
            "pddikti" => $request->file("pddikti") ? $request->file('pddikti')->storeAs('file/berkas/'.$mahasiswa->nama.'/pddikti', $request->file('pddikti')->getClientOriginalName()) : $request->pddikti,
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil mengirim email informasi berkas ditolak ke mahasiswa'
        ]);
    }

}