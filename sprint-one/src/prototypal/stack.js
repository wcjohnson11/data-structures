var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Store a newly created object from Object.create with stackMethods as the arg
  // create a storage variable
  // create a size variable
  // return the object
  var newObj = Object.create(stackMethods);
  newObj._storage = {};
  newObj._size = 0;
  return newObj;
};

var stackMethods = {};

//pop method
//if size > 0, decrement size
//store the value of storage at size
//delete storage at size
//return value

stackMethods.pop = function(){
  if (this._size > 0){
    this._size--;
  }
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
};


//push method, takes a value
//stores it in storage at size
//increment size
stackMethods.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};


//size, returns size
stackMethods.size = function(){
  return this._size;
};



