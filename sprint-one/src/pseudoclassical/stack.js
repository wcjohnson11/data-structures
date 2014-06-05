var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //Create a storage var
  //create size var
  this._storage = {};
  this._size = 0;
};

//create pop method
//create result var and store storage[size]
//delet storage size
//if size>0 decrement size
//return result
Stack.prototype.pop = function(){
  if(this._size > 0){
    this._size--;
  }
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
};

//take in a value
//store the value at storage[size]
//increment size
Stack.prototype.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

//return size
Stack.prototype.size = function(){
  return this._size;
};
