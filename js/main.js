$(document).ready(function(){
	
	// Global variable defns
	let color = false;
	let bg = ['img/bluebg.png', 'img/greenbg.png', 'img/pinkbg.png', 'img/purplebg.png', 'img/redbg.png', 'img/yellowbg.png'];
	let index = 0;
	let bgChange = true;

	// Fn defns
	let colorTransition = function() {
		if (!color){
			$('.logo').css('filter', 'none');
		} else {
			$('.logo').css('filter', 'grayscale(100%)');
		}
		color = !color;
	};

	let bgTransition = function(){
		if (!bgChange){
			return;
		}
		$('body').css('background-image', 'url(' + bg[index++ % 6] + ')');
	}

	let bgStop = function(){
		bgChange = !bgChange;
		console.log(bgChange);
	}

	$.fn.preload = function() {
    	this.each(function(){
        	$('<img/>')[0].src = this;
    	});
	}

	$(bg).preload();
	$('.logo').mouseover(colorTransition);
	$('.logo').mouseout(colorTransition);
	window.setInterval(bgTransition, 2000);
	$('.stop').click(bgStop);

});