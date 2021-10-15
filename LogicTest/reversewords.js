// flow: menginisialisasi array - memecah string menjadi array - mengidentifikasi setiap index[i] dengan loop - jika kapital terdeteksi pindah ke huruf utama - convert array to string
const words = "I am A Great human";
// For custom input please use readline or change 2 line string
// reverse
const results = words.split('').reverse().join('');
// reverse lagi
const re = results.split(' ').reverse().join(' ');
// Spliting into array
const po = re.split(' ');
// initialize
var wordArray = [];
const poLeng = po.length;
for (var i = 0; i < poLeng; i++) {
    // identify capital letter
    const cat = /[A-Z]/.test(po[i]);
    if (cat == true){
        // console.log(po[i] + " >> kata mengandung kapital")
        const frs = po[i].toLowerCase();
        const frr = frs.charAt(0).toUpperCase() + frs.slice(1);
        // console.log(frr);
        wordArray.push(frr);
    } else {
        // console.log(po[i]);
        // console.log(po[i] + " >> kapital tak terdeteksi")
        wordArray.push(po[i]);
    }
    // const prs = wordArray.split
    // push to string
}
// console.log(wordArray);
// converting array to string
let str = wordArray.toString();
let Str = str.replace(/,/g, ' ');
console.log(Str);
