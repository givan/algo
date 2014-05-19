function findCycleInList(head) {
    // this algo will use additional memory - using a hash
    // it will run for O(n) where n is the number of elements in the list

    var visitedElements = new WeakMap();

    var currElement = head;
    while(currElement) {
        if (visitedElements.get(currElement)) {
            // we found a cycle, at the currElement
            return currElement;
        } else {
            visitedElements.set(currElement, '1');
        }

        currElement = currElement.GetNext();
    }

    return undefined; // there is no cycle in the list
}