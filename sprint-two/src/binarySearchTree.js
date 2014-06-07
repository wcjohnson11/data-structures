var makeBinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, binaryTreeMethods);
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
    } else {
      this.right.insert(value);
    }
  } else {
    if (node.value < this.value){
      if (!this.left){
        this.left = node;
      } else {
        this.left.insert(value);
      }
    }
  }
};

binaryTreeMethods.contains = function(value){};

binaryTreeMethods.depthFirstLog = function(callback){};

/*
 * Complexity: What is the time complexity of the above functions?
 */



