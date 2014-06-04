var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    //store value in storage object at a key of size
    storage[size] = value;
    //increment size
    size++;
  };

  someInstance.pop = function(){
  //decrement size
    if(size >0){
      size--;
    }
  //store value from storage[size] and then return it
    var result = storage[size];
  //delete stored value at storage[size]
    delete storage[size];
  //return stored value
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
