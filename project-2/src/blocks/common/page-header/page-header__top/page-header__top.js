$("#search-form").on('submit', function(event) {
	event.preventDefault();
});

// after в кнопок у верхній панельці
$(".page-header__control").on('mouseenter',  function(event) {
	
	$(this).removeClass('page-header__control--hover').prev().removeClass("page-header__control--hover");
	if ($(window).width() > 767) {
		$(this).find('.main-dropdown').show();
	}

}).on('mouseleave', function(event) {
	
	$(event.currentTarget).addClass('page-header__control--hover').prev().addClass('page-header__control--hover');
		
		if ($(window).width() > 767) {
		$(this).find('.main-dropdown').hide();
	}
	
	if ($(".page-header__search").hasClass('page-header__control--hover')) {
		$(".page-header__search").removeClass('page-header__control--hover');
	
	}
});


$("#search-form__input").on('focus', function(event) {
	$(this).siblings('.search-form__clear').addClass('is-show');
}).on('blur', function(event) {
	if ($(this).val().length===0) {
		$(this).siblings('.search-form__clear').removeClass('is-show');
	}
});

$("#search-form__clear").click(function(event) {
	/* Act on the event */
	$(this).siblings('#search-form__input').val('');

	if ($(this).siblings('#search-form__input').val().length===0) {
		$(this).removeClass('is-show');
	}
});


