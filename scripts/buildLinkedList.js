var buildLinkedList = function (itemData) {
    return new LinkedListNode(itemData);
};

function LinkedListNode(data, next) {
    this._data = data;
    this._next = next;
};

LinkedListNode.prototype.GetData = function () {
    return this._data;
};

LinkedListNode.prototype.GetNext = function () {
    return this._next;
};

LinkedListNode.prototype.SetNext = function (item) {
    this._next = item;
};

LinkedListNode.prototype.Append = function (item) {
    if (typeof(item) !== "object" || !(item instanceof LinkedListNode)) {
        throw new Error('the item should be an instance of LinkedListNode');
    }

    // move to the last element
    var tail = this;
    while (tail.GetNext() !== undefined) tail = tail.GetNext();

    // set the last element
    tail.SetNext(item);
};