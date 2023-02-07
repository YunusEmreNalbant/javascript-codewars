function comp(array1, array2) {
    let sqrtArr = [];
    if (!array1 || !array2) return false


    if ((array1.length === 0 && array2.length === 0)) return true;


    for (let i = 0; i < array2.length; i++) {
        let sqrt = Math.sqrt(array2[i])
        sqrtArr.push(sqrt)

    }

    return sqrtArr.sort().toString() === array1.sort().toString()
}

let a = []
let b = []
const result = comp(a, b)

console.log(result)
