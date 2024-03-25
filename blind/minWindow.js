const minWindow = (s, t) => {
    // let map = new Map();

    // for(let letter of t) {
    //     if(!map.has(letter)) {
    //         map.set(letter, 1);
    //     } else {
    //         map.set(letter, map.get(letter)+1);
    //     }
    // }

    // let left = 0;
    // let right = 0;
    // let len = Infinity;
    // let count = map.size;
    // let minWindow = "";

    // while(right < s.length) {
    //     let rletter = s[right];
    //     if(map.has(rletter)) {
    //         map.set(rletter, map.get(rletter) -1);
    //         if(map.get(rletter) === 0) count--;
    //     }

    //     right++;
    //     // ADOBECODEBANC
    //     while(count === 0) {

    //         if(right-left < len) {
    //             len = right-left;
    //             minWindow = s.slice(left, right);
    //         }

    //         let lletter = s[left];
    //         if(map.has(lletter)) {
    //             map.set(lletter, map.get(lletter)+1);
    //             if(map.get(lletter) > 0) count++;
    //         }
    //         left++
    //     }

    // }

    // return minWindow;
    let map = new Map();
    for(let i = 0; i < t.length; i++) {
        let letter = t[i];
        if(!map.has(letter)) {
            map.set(letter, 1);
        } else {
            map.set(letter, map.get(letter)+1);
        }
    }

    let len = Infinity;
    let  right = 0;
    let left = 0;
    let count = map.size;
    let minWindow = "";

    while(right < s.length) {
        let rletter = s[right];
        if(map.has(rletter)) {
            map.set(rletter, map.get(rletter) - 1);
            if(map.get(rletter) === 0) count--;
        }
        right++;

        while(count === 0) {
            if(right-left < len) {
                len = right-left;
                minWindow = s.slice(left, right);
            }
            let lletter = s[left];
            if(map.has(lletter)) {
                map.set(lletter, map.get(lletter)+1);
                if(map.get(lletter) > 0) count++;
            }
            left++;
        }
    }
    return minWindow

}

console.log(minWindow("ADOBECODEBANC", "ABC"))