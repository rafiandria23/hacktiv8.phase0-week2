/**
 * HACKTIV8 Phase 0 - Looping
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





 // 1. Menyusun Barisan Bintang

 var rows1 = 5;
 asterisk1 = '';

 for (i = 0; i < rows1; i++) {
    asterisk1 = '*';
    console.log(asterisk1);
 }

console.log('\n ---------- \n');





// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
var asterisk2 = '';

for (i = 0; i < rows2; i++) {
    for (j = 0; j < rows2; j++) {
        asterisk2 += '*'    
    }
    console.log(asterisk2);
    asterisk2 = '';
}

/* Footnote: simpan dulu ke memori, baru dikeluarkan (this is my own way to understand this) */

console.log('\n ---------- \n');





// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
var asterisk3 = '';

for (i = 0; i < rows3; i++) {
    asterisk3 += '*';
    console.log(asterisk3);
}