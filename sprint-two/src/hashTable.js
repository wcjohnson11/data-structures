var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
      //use limited array.set with i and v
  //if the storage[i] is empty
  //create a newArray(i,)
  //call storage.set(i,newArray)


  //else (storage[i] !== undefined)
  //check each value, key,array at storage[i]
  //if key exists, overwrite it
  //if key doesn't exist, push to array

  if (!Array.isArray(this._storage.get(i))){
    var newArray = [[k,v]];
    this._storage.set(i,newArray);
    // this._storage.get(i).push([k,v]);

  }else{
    var overWrite = false;
    var arr = this._storage.get(i);
    _.each(arr, function(value, key, collection){
      // debugger;
      if (k === value[0]){
        arr[key] = [k,v];
        overWrite = true;
      }
    });
    overWrite || arr.push([k,v]);
    this._storage.set(i,arr);
  }

};

HashTable.prototype.retrieve = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  //Use limited array.get with i
  var arr = this._storage.get(i);
  var result = null;
  _.each(arr, function(value, key, collection){
    if (k === value[0]){
      // debugger;
      result = value[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){
  //Store index of k at i
  //Use limitedarray.each with our sweet callback
  //make a callback function that checks for i at storage[index]
  //if i === storage[index] set the value of storage[index] to null
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each(function(value, index, array){


    if(index === i){
      array[index] = null;
    }

  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
