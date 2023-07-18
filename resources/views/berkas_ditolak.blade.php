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
            <p>Terimasih, telah melakukan pengumpulan berkas pada aplikasi kami. Namun sayangnya berkas anda masih kurang lengkap atau masih terdapat berkas yang salah, silahkan lakukan pengoreksian berkas lagi. terimakasih</p>
        </div>
    </body>
</html>
