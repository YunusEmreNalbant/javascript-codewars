function maskify(cc) {

    let charList = cc.split('')

    if (charList.length <= 4) return cc;
    let lastFourCharacters = charList.slice(-4);
    let otherCharacters = charList.slice(0, charList.length - 4)
    otherCharacters = otherCharacters.map(item => "#")
    let masked = [...otherCharacters, ...lastFourCharacters].join("");
    return masked;
}


console.log(maskify("4556364607935616"));
