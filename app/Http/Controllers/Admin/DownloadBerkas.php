<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BerkashMahasiswa;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class DownloadBerkas extends Controller
{
    //

    public function download_berkas($file, $fileType)
    {
        $berkas = BerkashMahasiswa::find($file);
        $mahasiswa = Mahasiswa::findOrFail($berkas->mahasiswa_id);

        // dd($fileType);
        $path = "";
        $downloadName = "";
        if ($fileType == 'KTP') {
            $path = public_path("storage/" . $berkas->ktp);
            $downloadName = $mahasiswa->nama . "_KTP.pdf";
        }
        if ($fileType == 'KK') {
            $path = public_path("storage/" . $berkas->kk);
            $downloadName = $mahasiswa->nama . "_KK.pdf";
        }
        if ($fileType == 'KIP') {
            $path = public_path("storage/" . $berkas->kip);
            $downloadName = $mahasiswa->nama . "_KIP.pdf";
        }
        if ($fileType == 'KRS') {
            $path = public_path("storage/" . $berkas->krs);
            $downloadName = $mahasiswa->nama . "_KRS.pdf";
        }
        if ($fileType == 'PDDIKTI') {
            $path = public_path("storage/" . $berkas->pddikti);
            $downloadName = $mahasiswa->nama . "_PDDIKTI.pdf";
        }

        if (file_exists($path)) {
            $headers = ['Content-Type: application/pdf'];
            return response()->download($path, $downloadName, $headers);
        } else {
            abort(404, 'File not found');
        }
    }
}
