var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  //Add child will create an array of children in tree
  //so each child will be a new instance of tree
  var result = makeTree(value);

  if(Array.isArray(this.children)){
    this.children.push(result);
  } else {
    this.children = [result];
  }

};

treeMethods.contains = function(target){
  //is a recursive predicate that tests whether the tree has target children
  //if tree.children is empty return false
  //if tree has child(target) return true
  //if tree has children - recursion
  // var contain = false;
  if(this.children === undefined){
    return false;
  } else if(this.children[0].value === target){
    return true;
  }else{
    treeMethods
  }

    _.each(this.children, function(childObj, index, children){
      if(childObj.value === target){
        // contain = true;
        // return contain;
        return true;
      }else {
        return
      }

  //     } else if (childObj.children){
  //       // debugger;
  //       // contain = childObj.contains(target);
  //       return childObj.contains(target);
  //     } else {
  //       // contain = false;
  //       // return contain;
  //       return false;
  //     }
  //   });

  //   return contain;
  // }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
