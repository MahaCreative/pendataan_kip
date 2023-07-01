<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('prodis')->insert([
            [
                'fakultas_id' => 1,
                'prodi'=> 'Agribisnis',
            ],
            [
                'fakultas_id' => 1,
                'prodi'=> 'Agribisnis perikanan',
            ],
            [
                'fakultas_id' => 2,
                'prodi'=> 'Administrasi Negara',
            ],
            [
                'fakultas_id' => 3,
                'prodi'=> 'Teknik Sipil',
            ],
            [
                'fakultas_id' => 3,
                'prodi'=> 'Teknik Mesin',
            ],
            [
                'fakultas_id' => 3,
                'prodi'=> 'Teknik Arsitektur',
            ],
            [
                'fakultas_id' => 4,
                'prodi'=> 'Teknik Informatika',
            ],
            [
                'fakultas_id' => 4,
                'prodi'=> 'sistem informasi',
            ],
        ]);
    }
}