const reverseBits = (n) => {

    let result = 0;

    for(let i = 0; i < 32; i++) {

        let lastBit = n & 1;

        let revBit = lastBit << (31-i);
        
        result = result | revBit;
        
        n = n >>> 1;
    }

    return result >>> 0;
} 
const n = 00000010100101000001111010011100

console.log(reverseBits(n))