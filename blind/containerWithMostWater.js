const maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxima = 0;

    while(left < right) {
        let weight = right - left;
        let maxArea = Math.min(height[left], height[right]) * weight;

        maxima = Math.max(maxima, maxArea);

        if(height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }

    }
    return maxima;
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]))