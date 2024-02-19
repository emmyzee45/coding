const fibonacci = (n) => {
    if( n < 2) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function factorial(n) {
    if( n === 0) return 1;

    return n * factorial(n - 1);
}

function binarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndx, rightIndx){
    
    const midIndx = Math.floor((leftIndx + rightIndx) /2);
    if(target === arr[midIndx]) {
        return midIndx
    }

    if(leftIndx > rightIndx) {
        return -1;
    }

    if(arr[midIndx] < target) {
        return search(arr, target, midIndx + 1, rightIndx)
    } else {
        return search(arr, target, leftIndx, midIndx - 1);
    }
}
console.log(binarySearch([1,3,4,5,7,9], 4))
console.log(factorial(5));
console.log(fibonacci(7))