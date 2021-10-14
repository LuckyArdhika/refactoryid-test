// declare vaariable
const words = ["Radar","Malam","Kasur ini rusak","Ibu Ratna antar ubi","Malas","Makan nasi goreng","Balonku ada lima"]; 
// catch length of array
var arrayLength = words.length;
// looping
for (var i = 0; i < arrayLength; i++) {
    function isPalindrome(word) {
      // converting capital letter to lowercase (worStr) and reverse (splited)
      const worStr = word.toLowerCase()
      const splited = word.toLowerCase().split('').reverse().join('');
      // compare
      if (worStr == splited) {
          console.log(word + ' is palindrome.');
      }
      else {
          console.log(word + ' is not palindrome.');
      }
    }
    // Calling Function
    isPalindrome(words[i]);
  }