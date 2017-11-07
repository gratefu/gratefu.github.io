// MASKED INPUT
$("#page-header__phone-input, #page-header__phone-account-input").mask("+3 (999) 999-9999");	

// POPUPU в хедері
$(".page-header__dropdown").on('mouseenter', function(event) {
	$(this).find('.popup__input').val('');
	$(this).find('.popup').removeClass('is-hide').addClass('is-shown');
}).on('mouseleave', function(event) {
	$(this).find('.popup').removeClass('is-shown').addClass('is-hide');
});


$(".page-header__dropdown .btn-close").on('click', function(event) {
	$(this).closest('.popup').addClass('is-hide');
});


$("#page-header__callback,#page-header__feedback").on('submit', function(event) {
	event.preventDefault();
});


$("#page-header__feedback, #page-header__feedback").on('click', '.popup__target', function(event) {
	var drop = $(this).closest(".popup__control").find(".popup__dropdown");

	if ($(drop).is(':visible')) {
		$(drop).removeClass('is-shown');		
		$(this).removeClass('is-active');
	}

	else{
		$(drop).addClass('is-shown');
		$(this).addClass('is-active');			
	}
});



$(".page-header__account-link").magnificPopup({

	callbacks: {
    open: function() {
    	$(".discounts-dropdown").addClass('is-hidden');
    },
    close: function() {
    	$(".discounts-dropdown").removeClass('is-hidden');
    }
  }

});