String.prototype.removeChars = function(startingIndex, charsCount) {
    var result = this.slice(0, startingIndex) + this.slice(startingIndex + charsCount);
    return result;
};

String.prototype.insertChars = function (startingIndex, charsToInsert) {
    var result = this.slice(0, startingIndex) + charsToInsert + this.slice(startingIndex);
    return result;
};

/**
 * Generates all possible anagrams from a given input word
 * @param input {string} The input word to generate all its anagrams
 * @returns {Array} An array of all possible
 * @public
 */
function findAnagrams(input) {
    if (!input || typeof(input) !== "string" || input.length == 0) {
        throw new Error('the input string must be valid');
    }

    var currentWord = []
    var anagrams = [];

    generateAnagrams(input, anagrams, currentWord);

    return anagrams;
}

/**
 * Generates all possible anagrams of a given input char sequence; this
 * @param availCharacters {string} the currently available chars to generate an anagram from
 * @param anagrams {Array} The array of currently generated anagrams
 * @param currentWordStack {Array} The currently generated word so far. It's used like a stack.
 *          Always add the current letter at the end
 * @private
 */
function generateAnagrams(availCharacters, anagrams, currentWordStack) {
    if (!currentWordStack || !(currentWordStack instanceof Array)) {
        throw new TypeError('currentWordStack must be an array');
    }
    if (!anagrams || !(anagrams instanceof Array)) {
        throw new TypeError('anagrams must be an array');
    }

    // the stop of the recursion
    if (availCharacters.length === 1) {
        // we have only one character left, so flat out the word stack and add the word to the anagrams array
        currentWordStack.push(availCharacters.charAt(0));

        // generate the current anagram as word
        var currentAnagram = currentWordStack.join("");

        // store the result
        // TODO: What if we had that anagram defined already? use a set here instead of an array
        anagrams.push(currentAnagram);

        currentWordStack.pop(); // remove the current character from the stack
        return;
    }

    // TODO: how do we handle the same character repeating many times?
    // TODO: how do we remove the input word from the list of generated anagrams?
    // TODO: JavaScript's strings are immutable; here we allocate new strings for each removeChars() and insertChars()
    //          which is memory inefficient and could be improved
    // TODO: how do hadle input words like "aaaaa"?
    // TODO: how do we handle very long words? May cause stack overflow?

    // for each availchars
    for (var i = 0; i < availCharacters.length; i++) {
        // currChar = pick one char
        // remove it from the avail chars
        // add the current char to the end of the current word stack
        var currChar = availCharacters.charAt(i);
        availCharacters = availCharacters.removeChars(i, 1);
        currentWordStack.push(currChar);

        // call the same method to generate all anagrams with the currently accumulated word stack
        generateAnagrams(availCharacters, anagrams, currentWordStack);

        // pop the character from the current word
        // bring back the character at the same position it was before in the avail chars
        currentWordStack.pop();
        availCharacters = availCharacters.insertChars(i, currChar); // restore the char where it was before at the same position
    }
};