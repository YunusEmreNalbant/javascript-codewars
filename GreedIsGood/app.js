function score(dice) {
    let diceValues = [
        ["1,1,1", 1000],
        ["6,6,6", 600], ["5,5,5", 500],
        ["4,4,4", 400], ["3,3,3", 300],
        ["2,2,2", 200], ["1", 100],
        ["5", 50]];
    let sorted = dice.sort().join(',');
    let sum = 0;

    diceValues.forEach(function (item) {
        console.log("sorted", sorted)
        console.log(`item 0: `, item[0])

        while (sorted.includes(item[0])) {

            sorted = sorted.replace(item[0], "")

            sum += item[1]
        }

    })
    return sum;
}

const result = score([6,6,6,1,6])
console.log(result)
