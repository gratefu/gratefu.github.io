$(".product-item__rating").on('click', 'svg', function(event) {
	$(this).nextAll().removeClass('active');
	 $(this).prevAll().addBack().addClass('active');
});


