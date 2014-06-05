

var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //
//Create a new queue object
  var newQueue = {};

  newQueue.storage = {};
  newQueue.qStart = 0;
  newQueue.qEnd = 0;
//extend the queue methods onto the queue object and return

 return _.extend(newQueue, queueMethods);
};


var extend = function(to, from){
  for(var key in from){
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value){

    this.storage[this.qEnd] = value;
    this.qEnd++;
  };

queueMethods.dequeue = function(){
    var result = this.storage[this.qStart];
    delete this.storage[this.qStart];
    if((this.qEnd - this.qStart) > 0){
      this.qStart++;
    }
    return result;
  };

queueMethods.size = function(){
    return (this.qEnd - this.qStart);
  };

