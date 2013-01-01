/* 
Kapiszon v 0.0.1
like not jQuery
licence: completly free
*/

var $=function parseJSON(id) {
	var prefix=id[0];
	var iid=id.slice(1,id.length);

	switch (prefix){
		case '#':	return document.getElementById(iid);   			break;
		case '.':	return document.getElementsByClassName(iid);  	break;
		default:	return document.getElementsByTagName(id); 
		}
		
	}
	
	
	
	
	
	
	
	
	
	
function zapal(){$("#strona").style.opacity='1.0';}	
function zgas() {$("#strona").style.opacity='0.7';}	
	
	

function koniec(){
	try  {navigator.app.exitApp();}
	catch(err) {
	  window.scrollTo(0,0);
	  }
	
}

/*
function loadURL(url){
	try  { navigator.app.loadUrl(url, { openExternal:true } );  }
	catch(err) {
	  window.location.href=url;
	  }
}


*/
	