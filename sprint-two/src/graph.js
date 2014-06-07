var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var keys = Object.keys(this.nodes);

  //Store an object at this.nodes[newNode]
  this.nodes[newNode] = {};
  //if toNode, addEdge(newNode,toNode)
  //store [toNode] to this.nodes[newNode] (this.nodes[newNode][toNode])
  //also give this.nodes[todNode][newNode]

Graph.prototype.contains = function(node){
  //var keys = Object.keys(this.nodes);
  //if _.contains(keys, node)
  //return true

  //OR this.nodes.hasOwnProperty(node);
  return this.nodes.hasOwnProperty(node);

};

Graph.prototype.removeNode = function(node){
  //use _.each to find node in this.nodes
  //if found, delete this.nodes[node]
  //use _.isEmpty(this.nodes[node])
  //
  //OR check this.nodes.hasOwnProperty(node)
  //for each this.nodes.searchNode[edges]
  //this.nodes.node[edge][searchNode]
  //delete these nodes and check if node _.isEmpty
  //if _.isEmpty, delete node
  //FINALLY delete this.nodes[searchNode]
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //An edge looks like this
  this.nodes[fromNode][toNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
