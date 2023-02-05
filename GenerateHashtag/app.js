function generateHashtag(str) {

    console.log(str.length)
    let characterArr = str.split(' ')
    if (characterArr.every(item=>item === "")) return false;

    characterArr.unshift("#")

    characterArr = characterArr.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('');
    return characterArr.trim().length > 140 ? false : characterArr.trim();

}

const result = generateHashtag(  " Hello there thanks for trying my Kata")
console.log(result)
