const ceasarCipher = (str, shift) => {
    let res = ''
    const aphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        const idx = aphabets.indexOf(char);
        
        if(idx === -1) {
            res += char;
            continue;
        }

        const position = (idx + shift) % 26;
        res += aphabets[position]

    }

    return res;

}

console.log(ceasarCipher('abcd', 100))