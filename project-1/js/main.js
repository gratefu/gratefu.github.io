'use strict';

svg4everybody();

(function() {
	var iterate = function iterate(items, callback) {
		items.forEach(function(item) {
			var key = void 0;
			var value = void 0;

			if (typeof item === 'string') {
				key = item;
				value = item;
			} else {
				key = item[0];
				value = item[1];
			}

			callback(key, value);
		});
	};

	var check = function check(category, items) {
		iterate(items, function(key, value) {
			if (bowser[key]) {
				$(document.documentElement).addClass('is-' + category + '-' + value);
			}
		});
	};

	check('engine', ['webkit', 'blink', 'gecko', ['msie', 'ie'],
		['msedge', 'edge']
	]);

	check('device', ['mobile', 'tablet']);

	check('browser', ['chrome', 'firefox', ['msie', 'ie'],
		['msedge', 'edge'], 'safari', 'android', 'ios', 'opera', ['samsungBrowser', 'samsung'], 'phantom', 'blackberry', 'webos', 'silk', 'bada', 'tizen', 'seamonkey', 'sailfish', 'ucbrowser', 'qupzilla', 'vivaldi', 'sleipnir', 'kMeleon'
	]);

	check('os', ['mac', 'windows', 'windowsphone', 'linux', 'chromeos', 'android', 'ios', 'iphone', 'ipad', 'ipod', 'blackberry', 'firefoxos', 'webos', 'bada', 'tizen', 'sailfish']);
})();

var $window = $(window);
var $document = $(document);
var $html = $(document.documentElement);
var $body = $(document.body);

$(document).ready(function() {

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
		} else {
			$(drop).addClass('is-shown');
			$(this).addClass('is-active');
		}
	});

	$(".page-header__account-link").magnificPopup({

		callbacks: {
			open: function open() {
				$(".discounts-dropdown").addClass('is-hidden');
			},
			close: function close() {
				$(".discounts-dropdown").removeClass('is-hidden');
			}
		}

	});
	$(".page-header__hamburger").on('click', function(event) {
		$("#catalog").removeClass('is-hidden').addClass('is-open is-overlay');
	});

	$(".catalog__btn-close").click(function(event) {
		$("#catalog").removeClass('is-open is-overlay').addClass('is-hidden');
	});

	$("#catalog").on('click', '.catalog__item--first-lvl, .catalog__item--second-level', function(event) {
		if ($(window).width() < 768) {
			if ($(this).is('.catalog__item--second-level')) {
				event.stopPropagation();
			}

			$(this).find('.catalog__list--second-lvl').slideToggle();
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

	$(".page-footer__col").on('click', '.page-footer__title', function(event) {
		if ($(window).width() < 767) {
			event.preventDefault();
			$(this).closest('.page-footer__col').find('.page-footer__list').slideToggle();
			$(this).toggleClass('is-active');
		}
	});

	if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
		console.log('this is a touch device');
	} else {
		console.log('this is not a touch device');
		document.body.classList.add('no-touch');
	}
});
