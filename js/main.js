$(document).ready(function(){
	
	let color = false;
	let bg = ['bluebg.png', 'greenbg.png', 'pinkbg.png', 'purplebg.png', 'redbg.png', 'yellowbg.png'];
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
		$('body').css('background-image', 'url(img/' + bg[index % 6] + ')');
		console.log(bg[index % 6]);
	}
	
	$('.logo').mouseover(colorTransition);
	$('.logo').mouseout(colorTransition);
	window.setInterval(bgTransition, 2000);

});