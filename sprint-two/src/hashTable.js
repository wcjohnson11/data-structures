var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //use limited array.set with i and v
  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //Use limited array.get with i
  return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  //Store index of k at i
  //Use limitedarray.each with our sweet callback
  //make a callback function that checks for i at storage[index]
  //if i === storage[index] set the value of storage[index] to null
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, index, array){

    //
    if(index === i){
      array[index] = null;
    }

  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
