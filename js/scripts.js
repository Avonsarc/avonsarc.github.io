function backtotop() {
	let button = $('.back_to_top');
	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 1000) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});

	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({scrollTop: 0}, 1000);
	})
}

$('.menu ul a').click(function(){
	$('.menu ul a').removeClass('active');
  $(this).addClass('active');
});


$(document).ready(function(){
    $(window).scroll(function(){
    	if ($(this).scrollTop() >= 70) {
        $('.menu').css({
        	
        	'top':'0px',
        	'position': 'fixed',
        });
        $('.header1').css({
        	
        	'top':'0px',
        	'position': 'fixed',
        });
        $('.profile img').css({
  
        	'top':'1px',
        	'position': 'fixed',
        	'top':'-25px',
			'transform':'scale(0.5)'

        });
    	} else {
    		$('.menu').css({
        	
        	'top':'70px',
        	'position': 'absolute',
        });
        $('.header1').css({
        	
        	'top':'70px',
        	'position': 'absolute',
        });
      	$('.profile img').css({
  
        	'top':'11px',
        	'position': 'absolute',
   //      	'width': '100px',
			// 'height': '100px',
			'transform':'scale(1)'
			
        });
    	}
    });
});
backtotop();
