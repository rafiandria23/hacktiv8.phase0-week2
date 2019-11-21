/**
 * HACKTIV8 Phase 0 - Menggunakan Switch Case
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
 */





function xo(str) {
    var x = 0;
    var o = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'x') {
            x++;
        } else if (str.charAt(i) === 'o') {
            o++;
        }
    }

    if (x === o) {
        return true;
    } else if (x !== o) {
        return false;
    }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true