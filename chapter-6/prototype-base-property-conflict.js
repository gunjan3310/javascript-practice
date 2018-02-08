 function Object(){
this.name = "Gunjan";
this.profession = "Engineering";
};
var object = new Object();
for(var o in object)console.log(o);

Object.prototype.age = "22";

for(name in object)console.log(name);
