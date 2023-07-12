<?php

namespace App\Http\Middleware;

use App\Models\Fakultas;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $perFak = Fakultas::withCount('mahasiswa')->get();
        $perPro = Prodi::withCount('mahasiswa')->get();
        $dataFak = [];
        $dataPro = [];
        foreach ($perFak as $fakultas) {
            $dataFak[] = [
                'fakultas' => $fakultas->fakultas, // Ubah sesuai nama atribut yang sesuai di model Fakultas
                'jumlah_mahasiswa' => $fakultas->mahasiswa_count, // Ubah sesuai nama atribut yang sesuai di model Fakultas
                'logo' => $fakultas->logo // Ubah sesuai nama atribut yang sesuai di model Fakultas
            ];
        }
        foreach ($perPro as $prodi) {
            $dataPro[] = [
                'prodi' => $prodi->prodi, // Ubah sesuai nama atribut yang sesuai di model prodi
                'jumlah_mahasiswa' => $prodi->mahasiswa_count, // Ubah sesuai nama atribut yang sesuai di model prodi
                'logo' => $prodi->logo,
            ];
        }

        $fak = Fakultas::all();
        $prodi = Prodi::all();
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'fak' => $fak,
            'prodi' => $prodi,
            'dataPro' => $dataPro,
            'dataFak' => $dataFak,
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
