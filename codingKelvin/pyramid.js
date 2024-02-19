const pyramid = (n) => {
    for(let i = 1; i <= n; i++) {
        const padding = " ".repeat(n - i);
        const hashing = "#".repeat(i * 2 -1);

        console.log(padding + hashing + padding)
    }
}

pyramid(7)