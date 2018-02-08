var body = document.getElementsByTagName("body");
console.log("Processing:"+body);
function drill(drillOn){

	for(var a in drillOn.children){
		//console.log("Processing:"+a);
		if(a.hasChildNodes()){
			drill(a);
		}
		console.log(a.innerText);
	}
	return 0;
}

drill(body);