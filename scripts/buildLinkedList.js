var buildLinkedList = function (itemData) {
    return new LinkedList(itemData);
};

function LinkedList(data, next) {
    this._data = data;
    this._next = next;
};

LinkedList.prototype.GetData = function () {
    return this._data;
};

LinkedList.prototype.GetNext = function () {
    return this._next;
};

LinkedList.prototype.SetNext = function (item) {
    this._next = item;
};

LinkedList.prototype.Append = function (item) {
    if (typeof(item) !== "object" || !(item instanceof LinkedList)) {
        throw new Error('the item should be an instance of LinkedList');
    }

    // move to the last element
    var tail = this;
    while (tail.GetNext() !== undefined) tail = tail.GetNext();

    // set the last element
    tail.SetNext(item);
};