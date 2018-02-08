var text = "\"To be or not to be,\" quoth the bard, \"that is the question.\"";

var line = "";//text.split("");
var count = 0;
for(var i = 0;i<text.length;i++){
	//console.log("The "+i+"th itteration. Value:"+text[i])
	
	if(text[i] == "\""){
		count++;
		if(count == 2){
			count=0;
			line += "\"";
			

		}
		else{
			line += "``";
			//console.log("\"");
		}
	
	}else{
		line += text[i];
	}
}
	console.log(line);
