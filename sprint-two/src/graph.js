var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var keys = Object.keys(this.nodes);

  //Store an object at this.nodes[newNode]
  //if toNode, addEdge(newNode,toNode)
  //store [toNode] to this.nodes[newNode] (this.nodes[newNode][toNode])
  //also give this.nodes[todNode][newNode]
  this.nodes[newNode] = {};

  if(keys.length === 1){
    this.addEdge(newNode, keys[0]);
  }

  if(toNode){
    this.addEdge(newNode, toNode);
    this.nodes[newNode][toNode];
    this.nodes[toNode][newNode];
  }
};

Graph.prototype.contains = function(node){
  //var keys = Object.keys(this.nodes);
  //if _.contains(keys, node)
  //return true

  //OR this.nodes.hasOwnProperty(node);
  return this.nodes.hasOwnProperty(node);

};

Graph.prototype.removeNode = function(node){
  //OR check this.nodes.hasOwnProperty(node)
  //for each this.nodes.searchNode[edges]
  //this.nodes.node[edge][searchNode]
  //delete these nodes and check if node _.isEmpty
  //if _.isEmpty, delete node
  //FINALLY delete this.nodes[searchNode]
  if(this.nodes.hasOwnProperty(node)){
    _.each(this.nodes[node], function(value, edge){
      delete this.nodes[node][edge][node];
      if (_.empty(this.nodes[edge])){
        delete this.nodes[edge];
      }
    });
    delete this.nodes[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  //check if this.nodes[fromNode][toNode] return true/false
  if (this.nodes[fromNode][toNode]){
    return true;
  }else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //An edge looks like this
  this.nodes[fromNode][toNode] = {};
  //create it on both nodes
  this.nodes[toNode][fromNode] = {};
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //delete edges
  //check if fromNode _.isEmpty, if true, delete fromNode
  //check if toNode _.isEmpty, if true, delete toNode
  delete this.nodes[fromNode][toNode];
  if (_.isEmpty(this.nodes[fromNode])){
    delete this.nodes[fromNode];
  }
  delete this.nodes[toNode][fromNode];
  if (_.isEmpty(this.nodes[toNode])){
    delete this.nodes[toNode];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
