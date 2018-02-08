function Vector(x,y){
	this.x = x;
	this.y = y;

}

Vector.prototype.plus = function(vector){
	this.x+=vector.x;
	this.y+=vector.y;
	return this;
}

Vector.prototype.minus = function(vector){
	this.x-=vector.x;
	this.y-=vector.y;
	return this;
}

Object.defineProperty(Vector.prototype,"length",{
	get: function(){
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}
});

var vector = new Vector(1,0);
var v1 = new Vector(2,4);

console.log(vector.plus(v1));
//console.log(vector.minus(v1));
console.log(vector.length);

