// FizzBuzz

function fizzBuzz(n){
    // for loop start with 1
    for (var i = 1; i <= n; i++){
        // if i is divisible by 3 & 5
        if (i%3 == 0 && i%5 == 0){
            // console.log("FizzBuzz");
            const ans = "FizzBuzz";
            arr.push(ans);
        }
        // if i is divisible by 3.
        else if (i%3 == 0){
            // console.log("Fizz");
            const ans = "Fizz";
            arr.push(ans);
        }
        // if i is divisible by 5.
        else if (i%5 == 0){
            // console.log("Buzz");
            const ans = "Buzz";
            arr.push(ans);
        }
        // if non of the above conditions are true.
        else {
            // console.log(i);
            arr.push(i);
        }
    }
    console.log(arr)
}

// initialize array
var arr = [];

// input integer
const n = 15;
fizzBuzz(n);