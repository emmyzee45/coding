// Given an array arr[] of size N, the task is to printing K largest elements in an array.
// Note: Elements in output array can be in any order

// Function to find the Kth largest element in the array using binary search
// https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/
function findKthLargest(arr, k) {
	let low = Number.POSITIVE_INFINITY;
	let high = Number.NEGATIVE_INFINITY;

	// Find the minimum and maximum elements in the array
	for (let i = 0; i < arr.length; i++) {
		low = Math.min(low, arr[i]);
		high = Math.max(high, arr[i]);
	}

	// Perform binary search on the range of elements between low and high
	while (low <= high) {
		let mid = low + Math.floor((high - low) / 2);
		let count = 0;

		// Count the number of elements greater than mid in the array
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > mid) {
				count++;
			}
		}

		// If there are at least K elements greater than mid, search the right half
		if (count >= k) {
			low = mid + 1;
		}
		// Otherwise, search the left half
		else {
			high = mid - 1;
		}
	}

	// Return the Kth largest element
	return high;
}

// Function to print the K largest elements in the array
function printKLargest(arr, k) {
	// Find the Kth largest element
	const kthLargest = findKthLargest(arr, k);

	// Print the K largest elements in decreasing order
	process.stdout.write("K largest elements: ");
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= kthLargest) {
			process.stdout.write(arr[i] + " ");
		}
	}
	console.log();
}

// Driver code
const arr = [12, 5, 787, 1, 23];
const k = 2;
printKLargest(arr, k);
