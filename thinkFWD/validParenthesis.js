const invalid = (s) => {
    const bracket = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    const heap = []

    for(let char of s) {
        if(bracket[char]) {
            heap.push(bracket[char])
        } else {
            if(heap.pop() !== char) return false
        }
    }

    return (!heap.length);
}

console.log(invalid("()[}]{"))