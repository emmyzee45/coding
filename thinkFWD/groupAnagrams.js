const groupAnagrams = (arr) => {
    const anagramObject = {}
    
    for( let key of arr) {
        const valueKey = key.split('').sort().join('');
    //     let i = 0;
    //     let total = 0;
    //    while(i < key.length ) {
    //     total += key.charCodeAt(i);
    //     i++;
    //    }
    //    valueKey = total;
    //     console.log(valueKey)
        if(anagramObject[valueKey]) {
            anagramObject[valueKey].push(key)
        } else {
            anagramObject[valueKey] = [key]
        }
    }
    return Object.values(anagramObject)
}

console.log(groupAnagrams(['eat', 'ate', 'tea', 'tan', 'nat', 'bat']))