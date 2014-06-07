var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.parent = null;
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, binaryTreeMethods);
  if (!newTree.root){
    newTree.root = value;
  }
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  //make a new node
  //if node.value > this.value,
    //if (!this.right) then this.right = node;
      //else this.right.insert(value)
  //else if node.value < this.value,
    //if (!this.left) then this.left = node;
      //else this.left.insert(value)
  var node = makeBinarySearchTree(value);
  if (node.value > this.value){
    if (!this.right){
      this.right = node;
      node.parent = this;
    } else {
      this.right.insert(value);
    }
  } else {
    if (node.value < this.value){
      if (!this.left){
        this.left = node;
        node.parent = this;
      } else {
        this.left.insert(value);
      }
    }
  }
};

binaryTreeMethods.contains = function(value){
  //recursively traverse the nodes
  if (this.value === value){
    return true;
  } else if (value < this.value && this.left !== null){

    return this.left.contains(value);
  } else if (this.right !==null){
    return this.right.contains(value);
  } else{
    return false;
  }
};

binaryTreeMethods.depthFirstLog = function(callback){
  var current = this;
  var next;
  if (current){
    callback(current.value);
    if (current.left){
      this.left.depthFirstLog(callback);
    } else if (current.right){
      this.right.depthFirstLog(callback);
    }

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



