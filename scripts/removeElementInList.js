function removeElementFromList(head, valueToDelete) {

    // TODO - how can we communicate back that an element with value valueToDelete was not found?

    if (!head || !valueToDelete) {
        return head;
    }

    if (head.GetData() === valueToDelete) {
        // if the value of the head element matches the valueToDelete
        // set the new head element to be the element after the current head
        // return the new head (assuming that we want to remove the first occurrence of the value)
        head = head.GetNext();
        return head;
    }

    // looking for C
    // A -> B -> C -> D
    var currElement = head; // A
    var nextElement = head.GetNext();   // next is B
    while(nextElement !== null) { // iter 1 next is B, iter 2 next is C

        if (nextElement.GetData() === valueToDelete) {    // iter 2 - C === C
            // if the next element value matches the valueToDelete
            // make the currPosition.next point to the element after the currentPosition.next
            // question here - do we want to keep on moving on or break on the first match?
            // assumption - we break on the first occurrence
            // break here and return the head element as it was before (no changes to the head)
            currElement.SetNext(nextElement.GetNext()); // B now points to D, so we have A -> B -> D thus removing C
            break; // head is still pointing to A
        }

        currElement = nextElement;    // B
        nextElement = currElement.GetNext(); // C
    }

    return head;
}