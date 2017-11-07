// @include('main-dropdown--account/main-dropdown--account.js')

$(".main-dropdown").on('click', '.main-dropdown__close', function(event) {
	$(this).closest('.main-dropdown').hide(100);
});

$('.main-dropdown__popup-toggle').click(function(event) {
	$(this).siblings().removeAttr('data-mfp-src');
	$(this).attr('data-mfp-src', '#popup-account');
});


$('.main-dropdown__popup-toggle').magnificPopup({
  type:'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if 	you don't provide alternative source.
});

