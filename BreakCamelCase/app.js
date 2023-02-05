// complete the function
function solution(string) {
    let newString = "";
    string.split('').forEach(item => {
        if (item === item.toUpperCase()) {
            newString += " "
        }

        newString += item;
    })
    return newString;

}

const result = solution('camelCasing');

console.log(result)
