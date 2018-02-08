function createNode(x){
	return {
		data:x,
		link:null,
	};
}

function list(){
	list = createNode(10);
	temp = list;
	for(var i=0; i<10;i++){
		temp.link = createNode(i);
		temp = temp.link;
	}
	return list;

}

function traverse(list){
	temp = list;
	while(temp.link != null){
		console.log(temp.data);
		temp = temp.link;
	}
}

//traverse(list());
console.log(list());
