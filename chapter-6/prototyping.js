var protoPeople = {
	sci_name:"homosepians",
};

var ram = Object.create(protoPeople);
ram.age = 26;

console.log(ram.prototype);