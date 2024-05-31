// massive/array  -> []
var toonuud = [5,3,4,89,9,556,54]
var test=["test",4,true,false,null,3.14];
console.log(toonuud)
// index : utga-iig bairshil. 0-ees ehlene
console.log(toonuud[2])
// index hamgiin suuliin utga
console.log(toonuud.length);
console.log(toonuud[toonuud.length-1])
console.log(test[0])
console.log(test[test.length-1])

for(i=0;i<=toonuud.length-1;i++){
	console.log(toonuud[i]);
}

var too = [10,20,30,40,50];
console.log(too[0] * (too[too.length-1]));

var number = [9,4,3,5,8];
for(i=0;i<=number.length-1;i++){
	if(number[i]%2==0){
		console.log("Tegsh:"+number[i]);
	}else{
		console.log("Sondgoi:"+number[i]);
}
}

var num = [8,10,5,20,3,4,50,65,98,100];
var urj = 1;
for(i=0;i<=num.length-1;i++){
	urj = urj  * num[i];
}
console.log(urj);

var ungu = ["yellow","red","green","blue","purple"]
var body = document.getElementsByTagName('body')[0];
var i=-1;
function color(){
	i++;
	if(i>ungu.length-1){
		i=0
	}
	body.style.backgroundColor=ungu[i];
}
function butsah(){
	i--;
	if(i<0){
		i=ungu.length-1;
	}
	body.style.backgroundColor=ungu[i]
}
function auto(){
	i++;
	if(i>ungu.length-1){
		i=0;
	}
	body.style.backgroundColor=ungu[i];
	up = setTimeout(auto,1000)
}
var up;
function stop(){
	clearTimeout(up);
}
function rand(){
	var random = Math.floor(Math.random()*(ungu.length-1));
	body.style.backgroundColor=ungu[random];
}