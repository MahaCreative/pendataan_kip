<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mahasiswas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('prodi_id');
            $table->string('nim');
            $table->string('nama');
            $table->string('jenis_kelamin');
            $table->string('tempat_lahir');
            $table->string('telp')->unique();
            $table->string('email')->nullable()->unique();
            $table->date('tanggal_lahir');
            $table->foreign('prodi_id')->references('id')
            ->on('prodis')->onDelete('cascade')->onUpdate('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mahasiswas');
    }
};