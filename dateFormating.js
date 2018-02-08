var today = new Date();
var day = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
var dayy = (today.getDay());
console.log("Today is : "+day[dayy]);
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
if((hour) > 12){
	hour = hour - 12;
	console.log("Current time is : "+hour+" PM : "+minutes+" : "+seconds);
	return 0;	
}
console.log("Current time is : "+hour+" AM : "+minutes+" : "+seconds);