const reverse = (s) => {
    let left = 0;
    let right = s.length - 1;
    let solution = new Array(s.length);
    
    s.split('');

    while(left < s.length && right >= 0) {
        const lchar = s[left];
        const rchar = s[right];

        if(!/[A-Za-z]/.test(lchar) && !/[A-Za-z]/.test(rchar)) {
            console.log()
            solution[left] = lchar;
            solution[right] = rchar;
            left++;
            right--;
        } else if(!/[A-Za-z]/.test(lchar)) {
            solution[left] = lchar;
            left++;
        } else if(!/[A-Za-z]/.test(rchar)) {
            solution[right] = rchar;
            right--;
        } else {
            solution[left] = rchar;
            solution[right] = lchar;
            left++;
            right--; 
        }
    }
    return solution.join('');
}
function reverseLetters(str) {
    let arr = str.split('');
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        if (!isLetter(arr[left])) {
            left++;
        } else if (!isLetter(arr[right])) {
            right--;
        } else {
            // Swap letters
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    
    return arr.join('');
}

// Function to check if a character is a letter
function isLetter(char) {
    return /^[a-zA-Z]+$/.test(char);
}

// Example usage:
let S = "ab-cd!efg";
console.log(reverseLetters(S)); // Output: "gf-ed!cba"


console.log(reverseLetters('a-bC-dEt=ghlj$!!'))