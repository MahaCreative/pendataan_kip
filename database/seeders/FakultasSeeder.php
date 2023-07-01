<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FakultasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('fakultas')->insert([
            [
                'fakultas' => 'pertanian'
            ],
            [
                'fakultas' => 'ilmu sosial dan politik'
            ],
            [
                'fakultas' => 'keguruan dan pendidikan'
            ],
            [
                'fakultas' => 'teknik'
            ],
            [
                'fakultas' => 'ilmu komputer'
            ]
            ]);
    }
}