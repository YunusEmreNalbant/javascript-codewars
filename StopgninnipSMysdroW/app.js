function spinWords(string) {
    let newStringArr = [];
    let stringSplit = string.split(" ");

   stringSplit.map((item) =>{
       if (item.length >= 5){
           newStringArr.push([...item].reverse().join(''))
       }else{
           newStringArr.push(item)
       }

   })

    return newStringArr.join(' ').toString();

}

const result = spinWords('Hey fellow warriors');

console.log(result)
