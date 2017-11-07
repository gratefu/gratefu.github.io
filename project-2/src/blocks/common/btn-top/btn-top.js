$(".btn-top").on('click', function(event) {

	if ($(this).is('.is-down')) {
	  $('html, body').animate({
	  	scrollTop: $(document).height()
	  }, "slow", function () {
	  	$(".btn-top").removeClass('is-down');
	  });
	
	}

	else{
		$('html, body').animate({
	  	scrollTop: 0
	  }, "slow");	
	}	

});

var lastScrollTop = 0;

// для IE

// $(window).on("scroll", function() {
// 	var scrollPosition = $(window).height() + $(window).scrollTop();
// 	var scrollHeight = $(document).height();
// 	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
// 	    alert('msg');
// 	}
// });


$(window).on('scroll', function(event) {
  var st = $(this).scrollTop();
	var viewportHeight = window.innerHeight;

		if (st > viewportHeight) {
			$(".btn-top").fadeIn('slow');
// якщо досяг ищеещьф браузера
			  // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			  // }
		   if (st < lastScrollTop){
		   	$(".btn-top").addClass('is-active').removeClass('is-down');
		   } 
		   else {
			   	$(".btn-top").removeClass('is-active').addClass('is-down');
		   }
		}

		else{
			$(".btn-top").fadeOut('slow');
		}

   lastScrollTop = st;
});
