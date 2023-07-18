<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DownloadBerkas extends Controller
{
    //

    public function download_berkas($file){
        // dd($request->file);

        $path = storage_path('img/fikom.jpg');
        // dd($path);
           $headers = array(
              'Content-Type: application/image/png',
            );
        if (file_exists($path)) {

            return response()->download($path);

        }
        dd('gagal');

    }
}