//Question A
//a)  
//    Build your queues ontop of arrays; call your classes FIFOQUEUE and
//    LIFOQUEUE (first-in first-out & last-in first-out) queues, or QUEUE and
//    STACK, whichever names you prefer.
var FIFOQueueA = /** @class */ (function () {
    function FIFOQueueA() {
        this._queue = [];
    }
    FIFOQueueA.prototype.enqueue = function (item) {
        //Adds item to end of queue.
        this._queue.push(item);
        return this._queue;
    };
    FIFOQueueA.prototype.dequeue = function () {
        if (this._queue.length === 0)
            return "FIFOQUEUE is empty";
        else if (this._queue.length !== 0)
            //Removes item from start of queue.
            return this._queue.shift();
    };
    FIFOQueueA.prototype.getQueue = function () {
        return this._queue;
    };
    FIFOQueueA.prototype.size = function () {
        return this._queue.length;
    };
    return FIFOQueueA;
}());
;
var LIFOQueueA = /** @class */ (function () {
    function LIFOQueueA() {
        this._queue = [];
    }
    LIFOQueueA.prototype.enqueue = function (item) {
        //Adds topmost item to stack.
        this._queue.push(item);
        return this._queue;
    };
    LIFOQueueA.prototype.dequeue = function () {
        if (this._queue.length === 0)
            return "LIFOQUEUE is empty";
        else if (this._queue.length !== 0)
            //Returns and removes top most item from the stack
            return this._queue.pop();
    };
    LIFOQueueA.prototype.getQueue = function () {
        return this._queue;
    };
    LIFOQueueA.prototype.size = function () {
        return this._queue.length;
    };
    return LIFOQueueA;
}());
//Question A
//b)  
//    If you’ve written your enqueue and dequeue using array methods, how would you
//    rewrite the same functions without using any array methods?
var FIFOQueueB = /** @class */ (function () {
    function FIFOQueueB() {
        this._queue = [];
    }
    FIFOQueueB.prototype.enqueue = function (item) {
        //Adds item to end of queue.
        this._queue[this._queue.length] = item;
        return this._queue;
    };
    FIFOQueueB.prototype.dequeue = function () {
        if (this._queue === null)
            return "LIFOQUEUE is empty";
        else if (this._queue !== null) {
            var itemDequeued = this._queue[0];
            //Removes item from start of queue.
            for (var i = 0; i < this._queue.length; i++) {
                this._queue[i] = this._queue[i + 1];
            }
            this._queue.length = this._queue.length - 1;
            return itemDequeued;
        }
    };
    FIFOQueueB.prototype.getQueue = function () {
        return this._queue;
    };
    FIFOQueueB.prototype.size = function () {
        return this._queue.length;
    };
    return FIFOQueueB;
}());
var LIFOQueueB = /** @class */ (function () {
    function LIFOQueueB() {
        this._queue = [];
    }
    LIFOQueueB.prototype.enqueue = function (item) {
        //Adds top most item to stack.
        this._queue[this._queue.length] = item;
        return this._queue;
    };
    LIFOQueueB.prototype.dequeue = function () {
        if (this._queue === null)
            return "LIFOQUEUE is empty";
        else if (this._queue !== null) {
            var itemDequeued = this._queue[this._queue.length - 1];
            //Removes top most item from the stack
            this._queue.length = this._queue.length - 1;
            return itemDequeued;
        }
    };
    LIFOQueueB.prototype.getQueue = function () {
        return this._queue;
    };
    LIFOQueueB.prototype.size = function () {
        return this._queue.length;
    };
    return LIFOQueueB;
}());

// var QueueA = new FIFOQueueA();
// console.log(QueueA.enqueue("James"));
// console.log(QueueA.enqueue("Emily"));
// console.log(QueueA.enqueue("Kelly"));
// console.log(QueueA.enqueue("Leila"));
// console.log(QueueA.size());
// console.log(QueueA.dequeue());
// console.log(QueueA.dequeue());
// console.log(QueueA.getQueue());
// console.log(QueueA.size());
// console.log(QueueA.dequeue());
// console.log(QueueA.dequeue());
// console.log(QueueA.getQueue());
// console.log(QueueA.size());
// var QueueB = new FIFOQueueB();
// console.log(QueueB.enqueue("James"));
// console.log(QueueB.enqueue("Emily"));
// console.log(QueueB.enqueue("Kelly"));
// console.log(QueueB.enqueue("Leila"));
// console.log(QueueB.size());
// console.log(QueueB.dequeue());
// console.log(QueueB.dequeue());
// console.log(QueueB.getQueue());
// console.log(QueueB.size());
// console.log(QueueB.dequeue());
// console.log(QueueB.dequeue());
// console.log(QueueB.getQueue());
// console.log(QueueB.size());
// var StackA = new LIFOQueueA();
// console.log(StackA.enqueue("James"));
// console.log(StackA.enqueue("Emily"));
// console.log(StackA.enqueue("Kelly"));
// console.log(StackA.enqueue("Leila"));
// console.log(StackA.size());
// console.log(StackA.dequeue());
// console.log(StackA.dequeue());
// console.log(StackA.getQueue());
// console.log(StackA.size());
// console.log(StackA.dequeue());
// console.log(StackA.dequeue());
// console.log(StackA.getQueue());
// console.log(StackA.size());
// var StackB = new LIFOQueueB();
// console.log(StackB.enqueue("James"));
// console.log(StackB.enqueue("Emily"));
// console.log(StackB.enqueue("Kelly"));
// console.log(StackB.enqueue("Leila"));
// console.log(StackB.size());
// console.log(StackB.dequeue());
// console.log(StackB.dequeue());
// console.log(StackB.getQueue());
// console.log(StackB.size());
// console.log(StackB.dequeue());
// console.log(StackB.dequeue());
// console.log(StackB.getQueue());
// console.log(StackB.size());
//Question A
//c)  
//  The current design of my classes can be improved. 
//
