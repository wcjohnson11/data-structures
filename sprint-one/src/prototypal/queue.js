var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create a new variable and store the result of object.create with the argument of queue methods
  // assign storage
  // assign qStart
  // assign qEnd
  // return object

  var newQueue = Object.create(queueMethods);
  newQueue._storage = {};
  newQueue._qStart = 0;
  newQueue._qEnd = 0;
  return newQueue;

};

var queueMethods = {};


//enqueue, takes a single value arg
//store the value at storage[qstart]
//increment qstart
queueMethods.enqueue = function(value){
  this._storage[this._qEnd] = value;
  this._qEnd++;
};
//dequeue
//create a result variable and store this._storage[this._qEnd]
//if qEnd - qStart > 0 increment the qEnd
//delete the dequeued
//return the result
queueMethods.dequeue = function(){
  var result = this._storage[this._qStart];
  delete this._storage[this._qStart];
  if((this._qEnd - this._qStart) > 0){
    this._qStart++;
  }
  return result;
};

//size
//return qEnd - qStart
queueMethods.size = function(){
  return (this._qEnd - this._qStart);
};
