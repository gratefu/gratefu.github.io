$('.popup-account__tab-toggle[data-popup-account-tab]').on('click', function(event) {
	var target;
	event.preventDefault();
	$(this).addClass('is-active').siblings().removeClass("is-active");
	target = $(this).attr('data-popup-account-tab');
	$(".popup-account__tab").eq(target).addClass('is-shown').siblings().removeClass('is-shown');
});


$("#user-form--enter-desktop").submit(function(event) {
	event.preventDefault();
});

$("#user-form--enter-desktop").validate({
	rules: {
		user_email: {
			required: true,
			email:true
		},
		user_password: {
			required: true
		}
	},

	messages: {
		user_email: {
			required: "Це поле обов'язкове для заповнення",
			email:"Введіть коректний email. Попробуйте ще раз"
		},
		user_password: {
			required: "Це поле обов'язкове для заповнення"
		}	
	}

});


$("#user-form--regist-desktop").validate({
	rules: {
		user_name: {
			required: true,
		},
	user_email: {
		required: true,
		email:true
	},
	user_password1: {
		required: true
	},
	user_password2: {
		required: true,
		equalTo: "#user_password1",		
	},
},

messages: {
		user_name: {
			required: "Це поле обов'язкове для заповнення",
		},
		user_email: {
			required: "Це поле обов'язкове для заповнення",
			email:"Введіть коректний email. Попробуйте ще раз"
		},
		user_password1: {
			required: "Це поле обов'язкове для заповнення"
		},
	user_password2: {
		required: "Це поле обов'язкове для заповнення",
		equalTo: "Паролі не співпадають",		
	},
},

focusCleanup: true,
focusInvalid: false,


});