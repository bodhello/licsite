$(document).ready(function(){
	
	let color = false;
	let bg = ['img/bluebg.png', 'img/greenbg.png', 'img/pinkbg.png', 'img/purplebg.png', 'img/redbg.png', 'img/yellowbg.png'];
	let index = 0;

	let colorTransition = function() {
		if (!color){
			$('.logo').css('filter', 'none');
		} else {
			$('.logo').css('filter', 'grayscale(100%)');
		}
		color = !color;
	};

	let bgTransition = function(){
		index++;
		$('body').css('background-image', 'url(' + bg[index % 6] + ')');
		console.log(bg[index % 6]);
	}
	
	$('.logo').mouseover(colorTransition);
	$('.logo').mouseout(colorTransition);
	window.setInterval(bgTransition, 2000);

	$.fn.preload = function() {
    	this.each(function(){
        	$('<img/>')[0].src = this;
    	});
	}

	$(bg).preload();

});