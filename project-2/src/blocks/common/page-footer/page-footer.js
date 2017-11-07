	$(".page-footer__col").on('click', '.page-footer__title', function(event) {
		if ( $(window).width() < 767 ) {
			event.preventDefault();
			$(this).closest('.page-footer__col').find('.page-footer__list').slideToggle();
			$(this).toggleClass('is-active');	
		}
	});