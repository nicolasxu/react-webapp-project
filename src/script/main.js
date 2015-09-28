/** @jsx React.DOM */

var React = require("react");
var Hello = require("./hello");

React.render(<Hello>Hello from <b>React</b>!</Hello>, 
	document.getElementById("container"), 
	function (){
    	console.info("mounted");}
    );
