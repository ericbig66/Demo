
function member(m){
	document.getElementById("p"+m).style.width="150px";
	document.getElementById("p"+m).style.height="150px";
	document.getElementById("pf"+m).style.display="block";
	document.getElementById("t"+m).style.top="85%";
	var i=0;
	for (i=0;i<4;i++)
	{
		if(i==m){continue;}
		document.getElementById("p"+i).style.width="100px";
		document.getElementById("p"+i).style.height="100px";
		document.getElementById("pf"+i).style.display="none";
		document.getElementById("t"+i).style.top="75%";
		//console.log('i='+i);
	}
	//console.log('done');
}