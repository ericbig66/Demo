
/*all "console.log(*)" is use to debug please don't remove*/

/*current slide number for global usage*/
var number=0;

/*auto start slider*/
auto(true);

/*manual slider animation*/
function pic(n){
	console.log('original:'+number+'+'+n);
	number+=n;
	console.log('conted:'+number);
	if(number<0){number=3;}
	else if(number>3){number=0;}
	console.log('adjusted:'+number);
	auto(false);
	console.log('manual adjusted!!');
}

/*auto slider animation*/
var t;
function auto(status){
	console.log(number);
	var pos=number*-1518+'px';
	document.getElementById('figure').style.left=pos;
	if(status){
		number++;
		if(number>3){number=0;}
	}	
	console.log('---');
	clearTimeout(t);
	t=setTimeout('auto('+true+')',5000);
	
}