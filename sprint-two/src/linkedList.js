var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //if the list is empty
    //add value to list[value]
    //value becomes list.head and list.tail
    //
    //else
    //store the argument at list[value]
    //refernce list[tail].next = list[value]
    //set list[value] to be list[tail]
    // list.tail = {};
    // list.tail.value = 4 ;
    var node = makeNode(value);
    if(list.tail === null){
      list.tail = node;
      list.head = node;
    } else {

      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    //store list.head in a variable
    //make list.head.next equal to list.head
    //return the variable
    var result = list.head;
    list.head = list.head.next;
    return result.value;
  };

  list.contains = function(target){
    //return true if the target exists at value.value
    return _.some(list, function(value){
      return value.value === target;
    });
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
