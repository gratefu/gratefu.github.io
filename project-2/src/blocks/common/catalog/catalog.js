$(".page-header__hamburger").on('click', function(event) {
  $("#catalog").removeClass('is-hidden').addClass('is-open is-overlay');
});

$(".catalog__btn-close").click(function(event) {
  $("#catalog").removeClass('is-open is-overlay').addClass('is-hidden');
});


$("#catalog").on('click', '.catalog__item--first-lvl, .catalog__item--second-level', function(event) {
	if ($(window).width() < 768) {
		if ($(this).is('.catalog__item--second-level')){
			event.stopPropagation();
		}
		
		$(this).find('.catalog__list--second-lvl').slideToggle()
	}
}).on('mouseenter', '.catalog__item--first-lvl', function(event) {
	$(this).find('.catalog__list--second-lvl').addClass('is-shown');
}).on('mouseleave', '.catalog__item--first-lvl', function(event) {
	$(this).find('.catalog__list--second-lvl').removeClass('is-shown');
});


$("#catalog").on('mouseenter', '.catalog__item--second-level', function(event) {
	$(this).find('.catalog__list--third-lvl').addClass('is-shown');
}).on('mouseleave', '.catalog__item--second-level', function(event) {
	$(this).find('.catalog__list--third-lvl').removeClass('is-shown');
});


