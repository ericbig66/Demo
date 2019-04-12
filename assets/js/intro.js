
function member(m){
	document.getElementById("p"+m).style.width="150px";
	document.getElementById("p"+m).style.height="150px";
	document.getElementById("pf"+m).style.display="flex";
	document.getElementById("t"+m).style.top="183px";
	var i=0;
	for (i=0;i<4;i++)
	{
		if(i==m){continue;}
		document.getElementById("p"+i).style.width="100px";
		document.getElementById("p"+i).style.height="100px";
		document.getElementById("pf"+i).style.display="none";
		document.getElementById("t"+i).style.top="132px";
	}
}