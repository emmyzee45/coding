const groupAnagrams = (str) => {
    let anagrams = str.map((item) => item.split('').sort().join(''));
    let sortedAnagrams = {};
    for(let i = 0; i < anagrams.length; i++) {
        if(sortedAnagrams[anagrams[i]]) {
            sortedAnagrams[anagrams[i]].push(str[i]);
        } else {
            sortedAnagrams[anagrams[i]] = [str[i]];
        }
    }

    return Object.values(sortedAnagrams);

}

console.log(groupAnagrams(["eat", "tan", "ate", "nat", "bat", "tea"]))