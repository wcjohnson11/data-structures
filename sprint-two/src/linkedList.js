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


debugger;
    if(list.tail === null){
      list.tail = value;
      list.head = value;
    } else {

      list.tail.next = value;
      list.tail = value;
    }
  };

  list.removeHead = function(){
  };

  list.contains = function(target){
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
