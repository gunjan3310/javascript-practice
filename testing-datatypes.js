function Object(name,age,pro){
	this.name=name;
	this.age=age;
	this.profession=pro;
}



Object.prototype.itterate = function(data){
	for(m in data){
		if((typeof(m) == "string")||(typeof(m) == "number"))return data[m];
		else Object.itterate(data[m]);

	}
};

var object = new Object("Gunjan",22,"Engineering");
object.itterate(object);