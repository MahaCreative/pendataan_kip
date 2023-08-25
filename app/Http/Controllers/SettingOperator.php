<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class SettingOperator extends Controller
{
    public function index(Request $request){
        return inertia('Admin/SettingProfile/Index');
    }

    public function update(Request $request){
        $request->validate([
            'username' => 'required|min:6',
            'email' => 'required|min:6',
            'password' => 'required|min:6',
        ]);

        $user = User::findOrFail($request->id);
        $user->update([
            'name' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        return redirect()->back()->with([
            'type' => 'success',
            'message' => 'Berhasil Menghapus password'
        ]);
    }
}