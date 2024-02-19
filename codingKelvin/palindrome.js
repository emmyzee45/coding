const palindrome = (str) => {
    str = str.toLowerCase();

    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(palindrome("Madam"))