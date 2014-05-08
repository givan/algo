/**
 *1.3 Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer
 *  NOTE: One or two additional variables are fine An extra copy of the array is not
 * FOLLOW UP Write the test cases for this method
 * @param input
 * @returns {string} The string with removed duplicate characters
 */
function removeDuplicateCharsInplace(input) {

    if (!input || typeof(input) !== 'string' || input.length === 0) {
        throw new Error('input param must be a valid string');
    }

    // Test cases:
    // 1/ empty string
    // 2/ null string
    // 3/ int value instead of a string
    // 4/ a single char string 'a'
    // 5/ all duplicate chars string 'aaaaaa'
    // 6/ no duplicate chars 'abcd'
    // 7/ duplicate string 'abcabc'
    // 8/ string with continous duplicates 'aaaabbbbbb'
    //

    var inputChars = input.split('');

    // Questions to ask - all the chars to the right will be replaced; it can be also to keep the last occurance
    // of a given char( but here we pick to keep the leftmost character and delete the ones that follow to the right of it

    // Another question - would we deal with ASCII symbols? that will affect the special symbol we use for escaping

    // TODO: assumption - the input has only ASCII symbols, we pick the \r as one that will not show up in the input
    // string
    var escapeChar = '\r';

    // first iterate over the array and mark all duplicate characters
    // the complexity here is O(n^2)
    for (var i = 0; i < inputChars.length; i++) {
        var currChar = inputChars[i];

        for (var j = i + 1; j < inputChars.length; j++) {

            if (inputChars[j] === currChar) {
                inputChars[j] = escapeChar; // we want to replace all duplicates to the right of the currChar with the
                // escapeChar; this way we preserve the left-most char, and all other duplicates of the chars are
                // replaced with \r
            }

        }
    }

    // second pass is to to walk through the array and remove all escape chars \r
    // for this we first start searching for the first occurance of \r; then we keep a pointer to that place and
    // also have another pointer that starts off the next position
    // the first /r position is stored into currentUniqueCharsPos
    // the next pointer keeps track of the current position within the original string; we name this pointer currentPos
    // currentUniqueCharsPos = first occurance of \r
    var currentUniqueCharsPos = null;
    for (var i = 0; i < inputChars.length; i++) {
        if (inputChars[i] === escapeChar) {
            currentUniqueCharsPos = i;
            break;
        }
    }

    if (currentUniqueCharsPos === null){
        // the input string had no duplicates
        return input;
    }

    var currPos = currentUniqueCharsPos + 1;

    while(currPos < inputChars.length) {
    //      if input[currPos] === '\r'
                // then do nothing, just move on to the next char to the right
                // increment only currPos; keep currUniqueCharsPos where it is
    //      else
                // copy the char at currPos into the currentUniqueCharsPos
                // increment both currPos and currentUniqueCharsPos
        if (inputChars[currPos] !== escapeChar) {
            inputChars[currentUniqueCharsPos] = inputChars[currPos];

            // we also want to set the currPos char to \r to mark it as deleted
            inputChars[currPos] = escapeChar;

            currentUniqueCharsPos++;
        }

        currPos++;
    }

    var removedDupes = inputChars.slice(0, currentUniqueCharsPos);
    var removedDupesStr = removedDupes.join('');
    return removedDupesStr;
}