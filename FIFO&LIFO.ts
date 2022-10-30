//Question A
//a)  
//    Build your queues ontop of arrays; call your classes FIFOQUEUE and
//    LIFOQUEUE (first-in first-out & last-in first-out) queues, or QUEUE and
//    STACK, whichever names you prefer.

interface IQueuable {
  //adds value to queue and returns new queue
  enqueue(value: string): string[];
  //removes item from queue, and returns the item removed
  dequeue(): string | undefined;
  //returns a list of all the items in the queue
  getQueue(): string[];
  //returns the number of items in the queue
  size():number;
}  

class FIFOQueueA implements IQueuable{
      _queue:string[]
      
      constructor() {
        this._queue = [];
      }

      enqueue(item) {
          //Adds item to end of queue.
          this._queue.push(item);
          return this._queue;
      }

      dequeue() {
        if(this._queue.length === 0) 
          return "FIFOQUEUE is empty"
        else if(this._queue.length !== 0) 
          //Removes item from start of queue.
          return this._queue.shift()
      }

      getQueue() {
        return this._queue;
      }

      size() {
        return this._queue.length;
      }
  };

class LIFOQueueA implements IQueuable{
  _queue:string[]

      constructor() {
        this._queue = [];
      }

      enqueue(item) {
        //Adds topmost item to stack.
        this._queue.push(item)
        return this._queue;
      }

      dequeue() {
        if(this._queue.length === 0) 
          return "LIFOQUEUE is empty"
        else if(this._queue.length !== 0) 
          //Returns and removes top most item from the stack
          return this._queue.pop()
      }

      getQueue() {
        return this._queue;
      }

      size() {
        return this._queue.length;
      }
  }

//Question A
//b)  
//    If you’ve written your enqueue and dequeue using array methods, how would you
//    rewrite the same functions without using any array methods?
class FIFOQueueB implements IQueuable{
  _queue : string[]

    constructor() {
      this._queue = [];
    }

    enqueue(item) {
      //Adds item to end of queue.
      this._queue[this._queue.length] = item
      return this._queue;
    }

    dequeue() {
      if(this._queue === null) 
        return "LIFOQUEUE is empty"
      else if(this._queue !== null) {
        let itemDequeued = this._queue[0]
        //Removes item from start of queue.
        for (let i=0 ; i< this._queue.length; i++) {
          this._queue[i] = this._queue[i+1]
        }
        this._queue.length = this._queue.length - 1;
        return itemDequeued
      }
    }

    getQueue() {
      return this._queue;
    }

    size() {
      return this._queue.length;
    }
}

  class LIFOQueueB implements IQueuable{
  _queue : string[]

    constructor() {
      this._queue = [];
    }

    enqueue(item) {
      //Adds top most item to stack.
      this._queue[this._queue.length] = item
      return this._queue;
    }

    dequeue() {
      if(this._queue === null) 
        return "LIFOQUEUE is empty"
      else if(this._queue !== null) {
        let itemDequeued = this._queue[this._queue.length-1]
        //Removes top most item from the stack
        this._queue.length = this._queue.length - 1;
        return itemDequeued
      }
    }

    getQueue() {
      return this._queue;
    }

    size() {
      return this._queue.length;
    }
}

// let QueueA = new FIFOQueueA()
// console.log(QueueA.enqueue("James"))
// console.log(QueueA.enqueue("Emily"))
// console.log(QueueA.enqueue("Kelly"))
// console.log(QueueA.enqueue("Leila"))
// console.log(QueueA.size())
// console.log(QueueA.dequeue())
// console.log(QueueA.dequeue())
// console.log(QueueA.getQueue())
// console.log(QueueA.size())
// console.log(QueueA.dequeue())
// console.log(QueueA.dequeue())
// console.log(QueueA.getQueue())
// console.log(QueueA.size())

// let QueueB = new FIFOQueueB()
// console.log(QueueB.enqueue("James"))
// console.log(QueueB.enqueue("Emily"))
// console.log(QueueB.enqueue("Kelly"))
// console.log(QueueB.enqueue("Leila"))
// console.log(QueueB.size())
// console.log(QueueB.dequeue())
// console.log(QueueB.dequeue())
// console.log(QueueB.getQueue())
// console.log(QueueB.size())
// console.log(QueueB.dequeue())
// console.log(QueueB.dequeue())
// console.log(QueueB.getQueue())
// console.log(QueueB.size())

// let StackA = new LIFOQueueA()
// console.log(StackA.enqueue("James"))
// console.log(StackA.enqueue("Emily"))
// console.log(StackA.enqueue("Kelly"))
// console.log(StackA.enqueue("Leila"))
// console.log(StackA.size())
// console.log(StackA.dequeue())
// console.log(StackA.dequeue())
// console.log(StackA.getQueue())
// console.log(StackA.size())
// console.log(StackA.dequeue())
// console.log(StackA.dequeue())
// console.log(StackA.getQueue())
// console.log(StackA.size())

// let StackB = new LIFOQueueB()
// console.log(StackB.enqueue("James"))
// console.log(StackB.enqueue("Emily"))
// console.log(StackB.enqueue("Kelly"))
// console.log(StackB.enqueue("Leila"))
// console.log(StackB.size())
// console.log(StackB.dequeue())
// console.log(StackB.dequeue())
// console.log(StackB.getQueue())
// console.log(StackB.size())
// console.log(StackB.dequeue())
// console.log(StackB.dequeue())
// console.log(StackB.getQueue())
// console.log(StackB.size())


//Question A
//c)  
//  The current approach of implementating stack and queue uses array data structure.
//  A better scalable solution can be achieved by using a linked list. 
//  Using linked list, we can connect the back to the front of queue using head and tail pointers.
//  This is useful for senarios where queue priority is implemented. 
//  As both classes implements the IQueuable interface, this enforces stict data type checking 
//  when creating new classes and methods in the future. We further improve by implementing polymorphism.
//  We can create an abstract parent class with functions such as constructor(), getQueue(), size().
//  Then, have FIFOQueue and LIFOQueue child classes inherits from the abstract parent class