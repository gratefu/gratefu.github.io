// @include('product-listing__filter/product-listing__filter.js')

$(".product-listing__control").click(function(event) {
	$(this).addClass('is-active').siblings().removeClass('is-active');
});