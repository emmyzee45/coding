const stringPaternSearch = (str, patern) => {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < patern.length; j++) {
            const paternChar = patern[j];

            if(paternChar !== str[i + j]) {
                break;
            }

            if(j === patern.length - 1) {
                count++;
            }
        }
    }

    return count;
}

console.log((stringPaternSearch("lollipop", "lol")))