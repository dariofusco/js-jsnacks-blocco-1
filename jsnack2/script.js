const wholeNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let sum = 0

for (i = 0; i < wholeNumber.length; i++) {
    const singleNumber = wholeNumber[i]
    console.log(singleNumber)

    if (i % 2 == 0) {
        console.log("pari")

    } else {
        console.log("dispari")
        sum += parseInt(singleNumber)
    }

}

console.log(sum)