function Rabbit(type){
	this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
Rabbit.prototype.speak = function(line){
	console.log("The "+this.type+" Rabbit says "+line);
};
killerRabbit.speak("Hey!! there.");