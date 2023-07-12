<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fakultas extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function prodi()
    {
        return $this->hasMany(Prodi::class);
    }
    public function mahasiswa()
    {
        return $this->hasMany(Mahasiswa::class);
    }
}
