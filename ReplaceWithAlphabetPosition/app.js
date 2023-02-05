function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    let positionArr = [];
    let textCharArr = text.split('');
    textCharArr.map(item => {
        if (isAlphaOrParen(item)) {
            console.log(item)
           positionArr.push(alphabet.indexOf(item.toLowerCase()) + 1)
        }
    })

    return positionArr.join(' ');
}

function isAlphaOrParen(str) {
    return /^[a-zA-Z]$/.test(str);
}

const result = alphabetPosition('d-4)kr5i');

console.log(result)
