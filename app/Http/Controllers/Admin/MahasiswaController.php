<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MahasiswaController extends Controller
{
    public function index(Request $request){
        return inertia('Admin/Mahasiswa/index');
    }
}