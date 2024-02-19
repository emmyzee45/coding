const steps = (n) => {
    for(let i = 1; i <= n; i++) {
        let step = "";

        for(let hash = i; hash > 0; hash--) {
            step += "#"
        }

        for(let space = n-i; space > 0; space--) {
            step += " "
        }

        console.log(step)
    }
}

steps(3)