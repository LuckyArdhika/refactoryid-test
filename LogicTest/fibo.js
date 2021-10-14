// Function to find the Fibonacci using while loop
// inother method u can use Un = Un-1 + Un-2
// number which is nearest to N
function nearestFibonacci(num){
// Base Case
if (num == 0) {
    console.log(0);
    return;
}

// Initialize the first & second
// terms of the Fibonacci series
let first = 0, second = 1;

// Store the third term
let third = first + second;

// Iterate until the third term
// is less than or equal to num
while (third <= num) {

    // Update the first
    first = second;

    // Update the second
    second = third;

    // Update the third
    third = first + second;
}

// Store the Fibonacci number
// having smaller difference with arr
let ans = (Math.abs(third - num)
            >= Math.abs(second - num))
                ? second
                : third;

// Print the result
console.log(ans);
}

// input
let arr = [15,1,3]
    // sum arr
    arr = arr.reduce((a, b) => a + b, 0);
nearestFibonacci(arr);