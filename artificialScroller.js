/**
 * ARTIFICIAL SCROLLING
 * Alpha release 1.0
 * Copyright, Ramit Mitra
 */

/**
 * Global Vars
 */
var mouseOffset = 100;
var keyboardOffset = 50;
 
 
$(document).ready(function(){
    //0. UI tweeks
    $('html,body').css('scroll-behavior', 'smooth');
    detectBrowser();
    //1. Mousewheel
	$(document).on('wheel', function(e){
        //alert(e.originalEvent.wheelDelta);
        //alert(e.originalEvent.deltaY);
	//$(document).bind('mousewheel', function(e){
		//console.log(e.originalEvent.wheelDelta);
		if(e.originalEvent.wheelDelta /120 > 0 || e.originalEvent.deltaY < 0) {
			//console.log('scrolling up !');
			//for(x=1; x <= 20; x++)
				//scrollThisPageUp(2);
			scrollThisPageUp(mouseOffset);
		}
		else{
			//console.log('scrolling down !');
			//for(x=1; x <= 20; x++)
				//scrollThisPageDown(2);
			scrollThisPageDown(mouseOffset);
		}
	});
	//2. Keyboard arrows
	$(document).keydown(function(e) {
		switch(e.which) {
			case 34: // PageDown
			scrollThisPageDown(keyboardOffset);
			break;
			case 38: // up
			scrollThisPageUp(keyboardOffset);
			break;
			case 33: // PageUp
			scrollThisPageUp(keyboardOffset);
			break;
			case 40: // down
			scrollThisPageDown(keyboardOffset);
			break;
		}
	});
});

//page scroller by RAMIT MITRA
function scrollThisPageDown(scrollBy) {
    //$(document).scrollTop($(document).scrollTop() + parseInt(scrollBy));
    //$('body,html').animate({ scrollTop: $(document).scrollTop() + parseInt(scrollBy) }, "slow");
    var delta = $(document).scrollTop() + parseInt(scrollBy);
    $('html,body').animate({scrollTop: delta}, 23);
    delete delta;
	//console.log($(document).scrollTop());
}
function scrollThisPageUp(scrollBy) {
    //$(document).scrollTop($(document).scrollTop() - parseInt(scrollBy));
    //$('body,html').animate({ scrollTop: $(document).scrollTop() - parseInt(scrollBy) }, "slow");
	//console.log($(document).scrollTop());
    var delta = $(document).scrollTop() - parseInt(scrollBy);
    $('html,body').animate({scrollTop: delta}, 23);
    delete delta;
}
function detectBrowser() {
    if(!!window.chrome && !!window.chrome.webstore) {
        //Chrome specific tweaks
        mouseOffset = 350;
    } else if(typeof InstallTrigger !== 'undefined') {
        //Mozilla specific tweaks
    }
}
