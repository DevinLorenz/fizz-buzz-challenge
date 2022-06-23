// Write your solution below this line:


for (let i = 1 ; i < 51 ; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz')
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}