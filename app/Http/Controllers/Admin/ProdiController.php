<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Prodi;
use Illuminate\Http\Request;

class ProdiController extends Controller
{
    public function index(Request $request){
        $prod = Prodi::all();
        return inertia('Admin/Prodi/index', compact('prod'));
    }
}