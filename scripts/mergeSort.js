function mergeSort(input) {
    var buffer = [];
    // allocate the buffer to be the same lenght as the input array

    _mergeSort(input, buffer, 0, input.length - 1);
    return input;
}

function _mergeSort(input, buffer, start, end) {
    if (start < end) {
        // we need to pick a middle element
        var middle = Math.floor((start + end) / 2);

        // sort the start to middle
        _mergeSort(input, buffer, start, middle);
        // sort the middle + 1 to end
        _mergeSort(input, buffer, middle + 1, end);

        // finally merge the two sorted arrays using the helper buffer (copying elements from the buffer to the input)
        _mergeLeftAndRight(input, buffer, start, middle, end);
    }
}

function _mergeLeftAndRight(input, buffer, start, middle, end) {
    // what we have here is the input with sorted start to middle and middle + 1 to end
    // we want to merge them and make one array that is sorted from start to end

    // copy all elements from start to end to the buffer; this way the buffer contains the original values
    // we will modify the input array
    for (var i = start; i <= end; i++) {
        buffer[i] = input[i];
    }

    // keep two pointers - bufferLeft and bufferRight that keep the current position from the source arrays left and right parts
    // at each iteration we pick the smaller of the buffer left and right value and put it into the input array
    // this continues until we finish copying all elements from the left array; the right elements from the buffer
    // already match the input right elements so no need to copy them one more time
    var current = start,
        bufferLeft = start,
        bufferRight = middle + 1;

    while (bufferLeft <= middle && bufferRight <= end) {
        if (buffer[bufferLeft] <= buffer[bufferRight]) {
            input[current] = buffer[bufferLeft];
            bufferLeft++;
        } else {
            input[current] = buffer[bufferRight];
            bufferRight++;
        }

        current++;
    }

    // if there are any elements left from the left part, we need to copy them over
    while (bufferLeft <= middle) {
        input[bufferLeft] = buffer[bufferLeft];
        bufferLeft++;
    }

    // we do not need to copy the remaining right part elements (if any) because these are already
    // at the position in the input array where they need to be; no action is needed for them
}