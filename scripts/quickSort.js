// input: [1, 5, 3, 6, 9] = 5 elements in the array

function quickSort(input) {
    // sort the complete array from index 0 to the last element
    if (typeof (input) !== "object" || !(input instanceof Array) || input.length === 0) {
        throw new TypeError('input must be a valid array');
    }

    // the average O() is nlogn, worst case is O(n) = n * n (when all elements are the equal, or when the array is already sorted)
    _quickSort(input, 0, input.length - 1);

    return input;
}

function _quickSort(input, left, right) {     // l: 0 r: 4
    // first step is to find a pivot element
    // we use the pivot element to make sure that all elements to the left of a given element index are less or equal
    // to pivot, and all elements to the right are greater than pivot;
    // we also need to find out what is the index of this pivot element, after moving elements to the left and right
    // then we do quick sort on the left part and the right part separately by calling _quickSort recursively

    var partitionIndex = _partition(input, left, right);  // pi: 2 , 2) pi: 1
    if (left < partitionIndex) {   // l: 0, pi: 2
        _quickSort(input, left, partitionIndex - 1); // input, 0, 1
    }
    if (partitionIndex < right) {
        _quickSort(input, partitionIndex, right);
    }
}

function _partition(input, left, right) { //         l: 0 r: 4     2) l: 0, r: 1

    var pivot = input[ Math.floor((left + right) / 2) ];    // p: input[2] = 3

    while (left < right) {     // l: 0 r: 4 p: 3
        // we start from the left to search for an element that is greater than the pivot
        while (left < right && input[left] <= pivot) {
            left++;
        }
        // l: 1 -> input[1] = 5 > 3

        // we also start from the right backwards to find an element that is less or equal than pivot
        while (left < right && pivot < input[right]) {
            right--;
        }
        // r: 2 -> input[2] = 3 >= 3

        // if left < right
        if (left < right) {     // l: 1 r: 2
            // swap elements at index left and right
            // left ++ and right --
            // start over
            var temp = input[left];
            input[left] = input[right];
            input[right] = temp;

            // input: [1, 3, 5 , 6, 9] ; after swapping el at index 1 and 2

            left++; // l: 2
            right--; // r: 1
        }
    }

    // return left index as it is; sometimes it could be equal to right (when all elements are equal for example, when the quick sort has its
    // worst case - n^2
    return left; // l: 2
}