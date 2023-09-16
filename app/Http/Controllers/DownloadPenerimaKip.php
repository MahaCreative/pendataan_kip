<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use PDF;
use Illuminate\Http\Request;

class DownloadPenerimaKip extends Controller
{
    public function FakultasDownload(Request $request)
    {

        if (is_null($request->fakultas)) {
            $mahasiswa = Mahasiswa::with(['prodi' => function ($query) {
                $query->with('fakultas');
            }])->latest()->get()->toArray();

            $pdf = PDF::loadView('download_pdf', compact('mahasiswa'));
        } else {
            $mahasiswa = Mahasiswa::with(['prodi' => function ($query) use ($request) {
                $query->with('fakultas')->where('id', '=', $request->fakultas);
            }])->latest()->get()->toArray();
            $pdf = PDF::loadView('download_pdf', compact('mahasiswa'));
        }
        $pdfPath = 'pdf/Laporan_penerima_KIP_Fakultas.pdf';
        \Storage::put($pdfPath, $pdf->output());


        $path = public_path("storage/" . $pdfPath);

        if (file_exists($path)) {
            $headers = ['Content-Type: application/pdf'];
            // dd($path);
            return response()->download($path, 'Laporan_penerima_KIP_FAKULTAS.pdf', $headers);
        } else {
            abort(404, 'File not found');
        }
        // return $pdf->download('Laporan_penerima_KIP_FAKULTAS.pdf');
    }

    public function angkatanDownload(Request $request)
    {
        if (is_null($request->angkatan)) {

            $mahasiswa = Mahasiswa::with(['prodi' => function ($query) {
                $query->with('fakultas');
            }])->latest()->get()->toArray();

            $pdf = PDF::loadView('download_pdf', compact('mahasiswa'));
        } else {
            $mahasiswa = Mahasiswa::with(['prodi' => function ($query) {
                $query->with('fakultas');
            }])->where('angkatan', '=', $request->angkatan)->latest()->get()->toArray();
            $pdf = PDF::loadView('download_pdf', compact('mahasiswa'));
        }

        $pdfPath = 'pdf/Laporan_penerima_KIP_Angkatan.pdf';
        \Storage::put($pdfPath, $pdf->output());


        $path = public_path("storage/" . $pdfPath);

        if (file_exists($path)) {
            $headers = ['Content-Type: application/pdf'];
            // dd($path);
            return response()->download($path, 'Laporan_penerima_KIP_Angkatan.pdf', $headers);
        } else {
            abort(404, 'File not found');
        }
    }
    public function semuaDownload(Request $request)
    {
        $mahasiswa = Mahasiswa::with(['prodi' => function ($query) {
            $query->with('fakultas');
        }])->latest()->get()->toArray();
        $pdf = PDF::loadView('download_pdf', compact('mahasiswa'));

        $pdfPath = 'pdf/Laporan_penerima_KIP_Semua.pdf';
        \Storage::put($pdfPath, $pdf->output());


        $path = public_path("storage/" . $pdfPath);

        if (file_exists($path)) {
            $headers = ['Content-Type: application/pdf'];
            // dd($path);
            return response()->download($path, 'Laporan_penerima_KIP_Semua.pdf', $headers);
        } else {
            abort(404, 'File not found');
        }
    }

    public function pdf(Request $request)
    {

        return inertia('pdf_viewer', ['pdfUrl' => 'storage/' . $request->url]);
    }
}
