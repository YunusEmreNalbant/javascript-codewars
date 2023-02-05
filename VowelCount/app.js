function getCount(str) {

    const vowels = ["a","e","i","o","u"];
    let strCharArr = str.split('');
    let count = 0;
    strCharArr.map(item=>{
        if (vowels.indexOf(item) !== -1){
            count+=1;
        }
    })
    return count;
}

const result = getCount('abracadabra');
console.log(result)
