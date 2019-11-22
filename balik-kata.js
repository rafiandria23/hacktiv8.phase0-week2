/**
 * HACKTIV8 Phase 0 - Logic Challenge - Balik Kata
 * Code Skeleton made by HACKTIV8 Team, solved by Adam Rafiandri
*/





 function balikKata(kata) {
    var output = '';
    for (let index = kata.length - 1; index >= 0; index--) {
        output += kata[index];
    }
    return output;
 }

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));