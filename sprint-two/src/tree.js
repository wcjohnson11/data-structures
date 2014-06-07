var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  //Add child will create an array of children in tree
  //so each child will be a new instance of tree
  var result = makeTree(value);

  this.children.push(result);

};

treeMethods.contains = function(target){
  //is a recursive predicate that tests whether the tree has target children
  //if tree.children is empty return false
  //if tree has child(target) return true
  //if tree has children - recursion
//     for (var i = 0; i < this.children.length; i++){
//       console.log(target , this.children[i].value);
//       if(this.children[i].value === target){
//         return true;
//       } else if (this.children[i].children){
//         return this.children[i].contains(target);
//       }else{
//         return false;
//       }
//     }
// };

  return _.some(this.children, function(child){
    return (child.value === target) ?
      true :
      child.contains(target);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
