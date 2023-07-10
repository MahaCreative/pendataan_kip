<html>
    <head>
         <style>
        /* CSS untuk tampilan header */
        .header {
            background-color: #fde268;
            padding: 20px;
            display: flex;
            align-items: center;

        }

        /* CSS untuk teks pada header */
        .header h1 {
            color: white;
            font-size: 34px;
            margin-left: 8px;
        }
        .header img {
            width: 45px;
            margin-right: 3px; /* Gap 3 pixels */
        }
        .kode{

            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;

        }
        .kode p{
            background-color: #fde268;
            width: 30vw;
            padding: 10px;
            text-align: center;
            border-radius: 10px;
            font-size: 32pt;
        }
    </style>
    </head>
    <body>
        <div class="header">
            <img style="width: 45px" src={{asset('img/tomakaka.jpg')}} alt="">
            <h1>Universitas Tomakaka</h1>
        </div>
        <div style="padding: 20px">
            <p>Halo, <span style="text-transform: capitalize;">{{$mailData['nama']}}</span>, Selamat anda telah terdaftar sebagai mahasiswa penerima KIP, silahkan login dengan menggunakan kode akses dibawah ini</p>
        </div>
        <div class="kode">
            <p>{{$mailData['kode']}}</p>
        </div>
        <div style="padding: 20px">
            <p>Jangan memberi tahukan kode yang telah anda terima, pada siapapun juga</p>
        </div>
        <div style="padding: 20px; color:red;">
            <p>Jangan membalas pesan ini</p>
        </div>

    </body>
</html>
