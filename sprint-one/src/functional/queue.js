var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var qStart = 0;
  var qEnd = 0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    //Add string to storage[size]
    storage[qEnd] = value;
    //increment qEnd
    qEnd++;
  };

  someInstance.dequeue = function(){
    //store the value of storage[0] in a var
    var result = storage[qStart];
    //delete oldest stored value
    delete storage[qStart];

    if((qEnd - qStart) > 0){
      qStart++;
    }
    //return value
    return result;
  };

  someInstance.size = function(){
    return (qEnd - qStart);
  };

  return someInstance;
};
