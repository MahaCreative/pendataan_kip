<?php

namespace App\Http\Controllers;

use App\Mail\SendAksesLogin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendAksesLoginController extends Controller
{
    public function index(Request $request){
        $mahasiswa =$request->session()->get('mahasiswa');

         $mailData = [
            'nama' => $mahasiswa->nama,
            'kode' => $mahasiswa->kode_login,
        ];
        // dd($mahasiswa->email);
        Mail::to($mahasiswa->email)->send(new SendAksesLogin($mailData));

    }
}