// flow: memisah kata berdasarkan spasi dengan split(" ")- mengidentifikasi setiap kata apakah terdapat huruf kapital - jika ada pindahkan kapital ke bagian depan
const words = "I am A Great human";
// For custom input please use readline or change 2 line string
// reverse
const results = words.split('').reverse().join('');
// reverse lagi
const re = results.split(' ').reverse().join(' ');
const po = re.split(' ');
const poLeng = po.length;
for (var i = 0; i < poLeng; i++) {
    // identify capital letter
    const cat = /[A-Z]/.test(po[i]);
    var wordArray = [];
    var str = '';
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
    console.log(wordArray[0]);
    // const prs = wordArray.split
    // push to string
}