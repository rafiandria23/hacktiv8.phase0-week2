/**
 * HACKTIV8 Phase 0 - Menggunakan Switch Case
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
 */

var tanggal = 21;
var bulan = 1;
var tahun = 1945;

switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;

    case 2:
        bulan = 'Februari';
        break;

    case 3:
        bulan = 'Maret';
        break;

    case 4:
        bulan = 'April';
        break;
    
    case 5:
        bulan = 'Mei';
        break;
    
    case 6:
        bulan = 'Juni';
        break;

    case 7:
            bulan = 'Juli';
            break;

    case 8:
            bulan = 'Agustus';
            break;

    case 9:
            bulan = 'September';
            break;

    case 10:
            bulan = 'Oktober';
            break;

    case 11:
            bulan = 'November';
            break;

    case 12:
            bulan = 'Desember';
            break;

    default:
        console.log("Masukan tanggal.");
        break;
}

console.log(`${tanggal} ${bulan} ${tahun}`);