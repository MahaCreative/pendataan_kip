<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAPORAN PENERIMA KIP</title>
    <style>
        /* CSS untuk mengatur tampilan */
        body {
            font-family: Arial, sans-serif;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .title {
            font-size: 24px;
            margin: 0;
        }
        .subtitle {
            font-size: 18px;
            margin: 0;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="title">LAPORAN PENERIMA KIP</h1>
        <h4 class="subtitle">UNIVERSITAS TOMAKAKA</h4>
    </div>

    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>NIM</th>
                <th>Fakultas</th>
                <th>Prodi</th>
                <th>Angkatan</th>
            </tr>
        </thead>
        <tbody>
            <!-- Loop through your data and generate table rows here -->
     @foreach ($mahasiswa as $index => $data)
    <tr>
        <td>{{ $index + 1 }}</td>
        <td>{{ $data['nama'] }}</td>
        <td>{{ $data['nim'] }}</td>
        <td>{{ $data['prodi']['fakultas']['fakultas'] }}</td>
        <td>{{ $data['prodi']['prodi'] }}</td>
        <td>{{ $data['angkatan'] }}</td>
    </tr>
@endforeach
        </tbody>
    </table>
</body>
</html>
