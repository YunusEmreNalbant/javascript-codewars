

String.prototype.toJadenCase = function () {
    let sentenceSplit = this.split(' ');
    return sentenceSplit.map(item => item.charAt(0).toUpperCase()+item.slice(1)).join(' ')


};


var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())

