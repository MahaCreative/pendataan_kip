<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mahasiswa>
 */
class MahasiswaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $jenisKelamin = ['Laki-Laki', 'Perempuan'];
        return [
            'kode_login' => rand(11111111111, 999999999999),
            'nim' => rand(111111111111, 999999999999),
            'nama' => $this->faker->name(),
            'jenis_kelamin' => 'Laki-Laki',
            'email' => $this->faker->email(),
            'prodi_id' => rand(1, 8),
            'fakultas_id' => rand(1, 5),
            'angkatan' => rand(2010, 2024)
        ];
    }
}
