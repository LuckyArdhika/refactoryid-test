const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});

readline.question('Please Input First Year: ', year0 => {
    readline.question('Please Input Second Year: ', year1 => {
        // console.log(`Your First year: ${year0}`);
        // console.log(`Your Second year: ${year1}`);
    for (var i=year0; i <= year1; ++i) {
        // years parsed here (cabisat)
        if (!(i%4) ) console.log(i);
        readline.close();
      }
    });
});

// declare length antara tahun