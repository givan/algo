function reverseString(input) {

    if (input === undefined || typeof(input) !== 'string' || input.length == 0) {
        throw new Error('input must be a valid string');
    }

    if (input.length === 1) {
        return input;
    }

    // TODO: further optimizations - what if the input string is "aaaaa" ; can we optimize for that case?
    // TODO: what if the input string is "abccba" - reversed string will be the same

    var inputArray = input.split('');

    var left = 0, right = inputArray.length - 1;

    while(left < right) {
        var tmp = inputArray[left];
        inputArray[left] = inputArray[right];
        inputArray[right] = tmp;

        left++;
        right--;
    }

    return inputArray.join('');
}