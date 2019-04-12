/*url parameter reader*/
getUrlVars();
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var number = getUrlVars()["x"];
console.log(number);
member(parseInt(number));

//bgchanger(0);
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
	bgchanger(m);
	
}

function bgchanger(m){
	if(m==0)
	{
		document.getElementById("bgimg").style.backgroundImage="url('../assets/img/cr.jpg')";
		document.getElementById("pf"+m+"p").style.backgroundImage="url('../assets/img/cr2.jpg')";
	}
	else if(m==1)
	{
		document.getElementById("bgimg").style.backgroundImage="url('../assets/img/wt.jpg')";
		document.getElementById("pf"+m+"p").style.backgroundImage="url('../assets/img/wt2.jpg')";
	}
	else if(m==2)
	{
		document.getElementById("bgimg").style.backgroundImage="url('../assets/img/lib.jpg')";
		document.getElementById("pf"+m+"p").style.backgroundImage="url('../assets/img/lib2.jpg')";
	}
	else if(m==3)
	{
		document.getElementById("bgimg").style.backgroundImage="url('../assets/img/hs.jpg')";
		document.getElementById("pf"+m+"p").style.backgroundImage="url('../assets/img/hs2.jpg')";
	}
}