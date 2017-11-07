
$('.main-dropdown__popup-toggle').click(function(event) {
	$(this).siblings().removeAttr('data-mfp-src');
	$(this).attr('data-mfp-src', '#popup-account');

	var t = $(this).attr('data-account-popup-to');
	$('.popup-account__tab-toggle').eq(t).addClass('is-active').siblings().removeClass('is-active');
	$(".popup-account__tab").eq(t).addClass('is-shown').siblings().removeClass('is-shown');
});


$('.main-dropdown__popup-toggle').magnificPopup({
	showCloseBtn: true,	
  closeBtnInside:true,
  type:'inline',
  midClick: true // allow opening popup on middle mouse click. Always set it to true if 	you don't provide alternative source.
});
