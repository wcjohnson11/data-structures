var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create a storage object
  //create qStart and  qEnd
  this._storage = {};
  this._qStart = 0;
  this._qEnd = 0;
};

//add new methods to queue, enqueue, will take a value
//store the value @ storage[qStart]
//increment qStart
Queue.prototype.enqueue = function(value){
  this._storage[this._qStart] = value;
  this._qStart++;
};

//add a new method,dequeue
//store storage[qEnd] in a result var
//delete stor[qEnd]
//increment qEnd
////return result
Queue.prototype.dequeue = function(){
  var result = this._storage[this._qEnd];
  delete this._storage[this._qEnd];
  (this._qStart - this._qEnd) && this._qEnd ++;
  return result;
};

//add a method size,qStart - qEnd
Queue.prototype.size = function(){
  return this._qStart - this._qEnd;
};
