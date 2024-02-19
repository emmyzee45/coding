const capitalize = (str) => {
    let arrayOfStr = str.split(" ");
    let arrayOfWord = [];

    for(let i = 0; i < arrayOfStr.length; i++) {
        const word = arrayOfStr[i];
        arrayOfWord.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    return arrayOfWord.join(" ")
}

console.log(capitalize("I love to eating food every day"))