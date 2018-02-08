/*make a simulation of visualizer with bars jumping and changing their length, when the value of its jump is
changed. jump value changes when bars' corresponding placevalue in the processed prime number is changed.
*/
var number = 1407;

function prime(number){
//console.log("processing :"+number);
if(number === 1 || number%2 == 0){
	//console.log('Not prime');
	return 0;
}else{
	for(var i=3; i<number; i+=2){
		if(number%i == 0){
			//console.log(number +' is Not prime');
			return;
		}
	}
	console.log(number +'Prime Number');

 }
}

function num_generator(index){
	return 2*index + 1;
}

function start(){
	var index = 1;
	var newNum = "";
	var ans = 1;
	var processNum= num_generator(index);
	while(processNum >= 3){
		
		newNum = ""+processNum;
		isPresent = newNum.indexOf('4');
		if( Math.abs(isPresent) >1 ){
			ans=prime(processNum);
		}
		//console.log(ans+" is answer.");

		index++;
		processNum= num_generator(index);
	}
}
start();