var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Create a new Object
  var newInstance = {};
  // Set size variable
  newInstance._size = 0;
  // Set storage variable
  newInstance._storage = {};
  //Extend stackMethods onto new Object and return
  return _.extend(newInstance, stackMethods);
};

var stackMethods = {};
//stackMethod methods

//pop method
stackMethods.pop = function(){
//decrement size if > 0
  if (this._size > 0){
    this._size--;
  }
//create a new resultvariable and store storage[this._size]
  var result = this._storage[this._size];
//delete storage[this._size]
  delete this._storage[this._size];
//return result
  return result;
};

//push method, takes a value as it's only argument
stackMethods.push = function (value){
//store value at storage[size]
  this._storage[this._size] = value;
//increment size
  this._size++;
};

//size method, return size
stackMethods.size = function(){
  return this._size;
};
