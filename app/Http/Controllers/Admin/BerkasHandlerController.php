<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BerkashMahasiswa;
use Illuminate\Http\Request;

class BerkasHandlerController extends Controller
{
    public function setujui_berkas(Request $request){
        $berkas = BerkashMahasiswa::findOrFail($request->id);
        $berkas->update([
            'status' => 'disetujui',
            'keterangan' => 'a'
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menyetujui Berkas Mahasiswa'
        ]);
    }

    public function tolak_berkas(Request $request){
        if($request->keterangan == ''){
            return redirect()->back()->with([
                'type' => 'error',
                'message' => 'Silahkan isikan keterangan, agar mahasiswa tau alasan kenapa berkas ditolak'
            ]);
        }else{
            $berkas = BerkashMahasiswa::findOrFail($request->data['id']);
            $berkas->update([
                'status' => 'ditolak',
                'keterangan' => $request->keterangan
            ]);
             return redirect()->back()->with([
                'type' => 'success',
                'message' => 'Berhasil mengirim email informasi berkas ditolak ke mahasiswa'
            ]);
        }

    }
}