var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //If the item isn't in storage, add item
  if(!_.contains(this._storage, item)){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
//Check whether item is in storage
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item){
  //indexOf the item
  //get RID OF IT with SPLICEEEE
  var target = _.indexOf(this._storage, item);
  (target >=0) && this._storage.splice(target, 1);

};

/*
 * Complexity: What is the time complexity of the above functions?
 makeSet is constant
 add, contains and remove are linear
 */
