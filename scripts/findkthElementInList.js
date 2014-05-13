function findkthElementInList(element, k) {
    if (!element) {
        return 0;
    }

    var i = findkthElementInList(element.GetNext(), k);

    i++; // for the current element add 1

    if (i === k) {
        console.log('The %s element is %s', k, element.GetData())
    }

    return i;
}