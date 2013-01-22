var tbuzz_base      = 'http://tbuzz.arc90.com';
var tbuzz_images    = tbuzz_base + '/images';
var tbuzz_tweet_src = tbuzz_base + '/tbuzz';
var pageSize        = getPageSize();
var containerHeight = parseInt(pageSize[3]-143, 10);
var iframeHeight    = parseInt(containerHeight-37,  10);
var tbuzzQueryStr   = 'pageUrl='+encodeURIComponent(window.location)+'&selection='+encodeURIComponent(getSelText())+'&containerHeight='+encodeURIComponent(containerHeight);
var ie7_quirks = (document.all && !window.opera && window.XMLHttpRequest && document.compatMode != 'CSS1Compat') ? true : false;


var tbuzz_html = "";
tbuzz_html += '<div id="tbuzz_header">';
tbuzz_html += '    <img src="'+tbuzz_images+'/small-logo.png" alt="" title="" />';
tbuzz_html += '    <a href="#" id="tbuzz_close" title="close tBuzz">Close</a>';
tbuzz_html += '</div>';
tbuzz_html += '<div id="tbuzz_remote">';
tbuzz_html += '    <iframe src="'+tbuzz_tweet_src+'?'+tbuzzQueryStr+'" id="tbuzz_iframe" frameBorder="0" scrolling="no"></iframe>';
tbuzz_html += '</div>';
tbuzz_html += '<ul id="tbuzz_footer">';
tbuzz_html += '    <li id="tbuzz_logo"><img src="'+tbuzz_images+'/small-logo.png" alt="" title="" /></li>';
tbuzz_html += '    <li id="tbuzz_copyright">&copy; 2009, Arc90 Inc.</li>';
tbuzz_html += '    <li id="tbuzz_twitter"><a href="http://twitter.com/arc90">@Arc90</a></li>';
tbuzz_html += '    <li id="tbuzz_arc90logo"><a href="http://arc90.com"><img src="'+tbuzz_images+'/arc90.png" alt="An Arc90 Lab Experiment" title="An Arc90 Lab Experiment" /></a></li>';
tbuzz_html += '</ul>';

var container = document.createElement('div');
container.setAttribute('id', 'tbuzz_container');
container.style.height = containerHeight+'px';
container.innerHTML = tbuzz_html;
document.body.appendChild(container);

var shadow = document.createElement('div');
shadow.setAttribute('id', 'tbuzz_shadow_sides');

if (ie7_quirks)
{
    shadow.style.height = (containerHeight - 15) + 'px';
}
else
{
    shadow.style.height = (containerHeight + 4) + 'px';
}
document.body.appendChild(shadow);

var shadowTop = document.createElement('div');
shadowTop.setAttribute('id', 'tbuzz_shadow_top');
document.body.appendChild(shadowTop);


var shadowBottom = document.createElement('div');
shadowBottom.setAttribute('id', 'tbuzz_shadow_bottom');

// avoid overwriting quirks mode hax

if (!ie7_quirks)
{
	shadowBottom.style.top = containerHeight + 19 + "px";
}

document.body.appendChild(shadowBottom);

var close           = document.getElementById('tbuzz_close');
var tbuzz_iframe    = document.getElementById('tbuzz_iframe');

tbuzz_iframe.style.height = iframeHeight+'px';
tbuzz_iframe.contentWindow.focus();

close.onclick = function(){

    container.parentNode.removeChild(container);
    shadow.parentNode.removeChild(shadow);
    shadowTop.parentNode.removeChild(shadowTop);
    shadowBottom.parentNode.removeChild(shadowBottom);

    return false;
};

function getSelText()
{
    var txt = '';

    if (window.getSelection)
    {
        return window.getSelection();
    }
    
    if(document.getSelection)
    {
        return document.getSelection();
    }
    
    if(document.selection)
    {
        return document.selection.createRange().text;
    }
    
    return '';
}

function getPageSize()
{
	var xScroll, yScroll;
	
	if (window.innerHeight && window.scrollMaxY) {	
		xScroll = document.body.scrollWidth;
		yScroll = window.innerHeight + window.scrollMaxY;
	} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
		xScroll = document.body.offsetWidth;
		yScroll = document.body.offsetHeight;
	}
	
	var windowWidth, windowHeight;
	if (self.innerHeight) {	// all except Explorer
		windowWidth = self.innerWidth;
		windowHeight = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		windowWidth = document.body.clientWidth;
		windowHeight = document.body.clientHeight;
	}	
	
	// for small pages with total height less then height of the viewport
	if(yScroll < windowHeight){
		pageHeight = windowHeight;
	} else { 
		pageHeight = yScroll;
	}

	// for small pages with total width less then width of the viewport
	if(xScroll < windowWidth){	
		pageWidth = windowWidth;
	} else {
		pageWidth = xScroll;
	}

	arrayPageSize = [pageWidth,pageHeight,windowWidth,windowHeight];
	return arrayPageSize;
}
