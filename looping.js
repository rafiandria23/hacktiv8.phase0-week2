/**
 * HACKTIV8 Phase 0 - Looping
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/




 // 1. Melakukan Looping Menggunakan While

var firstWhileLoop = 'looping pertama';
var firstWhileLoopUC = firstWhileLoop.toUpperCase();
var secondWhileLoop = 'looping kedua';
var secondWhileLoopUC = secondWhileLoop.toUpperCase();
var whileLoopText = 'I love coding';
var iWhile = 2;
var iWhileNew = 20;

console.log(firstWhileLoopUC);

while (iWhile <= 20) {
    console.log(`${iWhile} - I love coding`);
    iWhile += 2;
}

console.log(secondWhileLoopUC);

while (iWhileNew > 0) {
    console.log(`${iWhileNew} - I will become a fullstack developer`);
    iWhileNew -= 2;
}

console.log('\n ---------- \n');





// 2. Melakukan Looping Menggunakan For

var firstForLoop = 'looping pertama';
var firstForLoopUC = firstWhileLoop.toUpperCase();
var secondForLoop = 'looping kedua';
var secondForLoopUC = secondForLoop.toUpperCase();

console.log(firstForLoopUC);

for (i = 1; i <= 20; i++) {
    console.log(`${i} - I love coding`);
}

console.log(secondForLoopUC);

for (i = 20; i > 0; i--) {
    console.log(`${i} - I will become a fullstack developer`);
}

console.log('\n ---------- \n');





// 3. Angka Ganjil dan Genap

for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log('GENAP');
    } 
    else if (i % 2 != 0) {
        console.log('GANJIL');
    } 
    else {
        console.error('Error!');
    }
}

console.log('\n ---------- \n');

for (i = 1; i <= 100; i += 2) {
    if (i *= 3) {
        console.log(`${i} KELIPATAN 3`);
    } 
    else {
        console.error('Error!');
    }
}

console.log('\n ---------- \n');


for (i = 1; i <= 100; i += 5) {
    if (i *= 6) {
        console.log(`${i} KELIPATAN 6`);
    } 
    else {
        console.error('Error!');
    }
}

console.log('\n ---------- \n');


for (i = 1; i <= 100; i += 9) {
    if (i *= 10) {
        console.log(`${i} KELIPATAN 10`);
    } 
    else {
        console.error('Error!');
    }
}