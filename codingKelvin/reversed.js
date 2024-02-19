const reversed = (str) => {
    let result = "";
     for(let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
     }
     return result;
}

function secondReversed(str) {
    return str.split("").reverse().join("");
}

console.log(secondReversed("Hello"))