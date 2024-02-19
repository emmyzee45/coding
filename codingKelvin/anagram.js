const anagram = (stringA, stringB) => {
    stringA = stringA.toLowerCase().replace(/[^A-Za-z0-9_]+/g, '');
    stringB = stringB.toLowerCase().replace(/[^A-Za-z0-9_]+/g, '');

    if(stringA.length !== stringB.length) {
        return false;
    }

    const stringACountObj = {}

    for(let i = 0; i < stringA.length; i++) {
        const charA = stringA[i];
        stringACountObj[charA] = (stringACountObj[charA] || 0) + 1;
    }

    for(let i = 0; i < stringB.length; i++) {
        const charB = stringB[i];

        if(!stringACountObj[charB]) {
            return false;
        } else {
            stringACountObj[charB]--;
        }
    }

    return true;
}

console.log(anagram("Heart!", "HEART"))