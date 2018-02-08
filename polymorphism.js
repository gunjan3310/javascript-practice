//Creating a toString prototype property to interface with own object and return a string.

function Object(){
	this.mountains = [
		["Kilimanjaro",5895,"Tanzania"],
		["Everest",8848,"Nepal"],
		["K2",8000,"pakistan"],

	];
}

Object.prototype.toString = function(){
	var line = "";
	this.mountains.every(function(m){
		
		if(m != undefined){
			m.every(function(n){
				line += n+" ";
				return true;
			});
			line += "\n";

			return true;
		}
		return false;
	});
	return line;
}

var object = new Object();
var text = object.toString();
console.log(text);