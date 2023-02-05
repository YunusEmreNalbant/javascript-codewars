countBits = (n) => {
    const binaryCharList = n.toString(2).split('');
    const result = binaryCharList.reduce((acc, item) => acc + parseInt(item), 0)
    return result;
}

const result = countBits(1234)

console.log(result)
