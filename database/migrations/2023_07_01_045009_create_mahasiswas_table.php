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
            $table->string("kode_login")->unique();
            $table->string('nim')->unique();
            $table->string('nama');
            $table->string('jenis_kelamin')->nullable();
            $table->string('tempat_lahir')->nullable();
            $table->string('telp')->unique()->nullable();
            $table->string('email')->nullable()->unique();
            $table->date('tanggal_lahir')->nullable();
            $table->foreign('prodi_id')->references('id')
            ->on('prodis')->onDelete('cascade')->onUpdate('restrict');
            $table->string('nama_ayah')->nullable()->unique();
            $table->string('nama_ibu')->nullable()->unique();
            $table->text('alamat')->nullable()->unique();
            $table->string('ipk')->nullable()->unique();
            $table->string('foto')->default('./img/defalt_user.jpg');
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