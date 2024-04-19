// Print numbers from 1 to 100, replacing multiples of 3 with “Fizz” and multiples of 5 with “Buzz.” with node
for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}

