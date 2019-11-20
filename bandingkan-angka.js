/**
 * HACKTIV8 Phase 0 - Menggunakan Switch Case
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
 */





 function bandingkanAngka(angka1, angka2) {
     if (angka1 < angka2) {
         return true;
     }
     else if (angka1 > angka2) {
        return false;
     }
     else {
         return -1
     }
 }

console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3));
console.log(bandingkanAngka(4, 4));
console.log(bandingkanAngka(3, 3));
console.log(bandingkanAngka(17, 2));