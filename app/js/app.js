// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {

	var swiper = new Swiper(".mySwiper", {
		loop: false,
		spaceBetween: 6,
		slidesPerView: 5,
		freeMode: false,
		watchSlidesProgress: false,
		breakpoints: {
			768: {
				spaceBetween: 12,
			},

		},
	});
	var swiper2 = new Swiper(".mySwiper2", {
		loop: false,
		spaceBetween: 10,
		thumbs: {
			swiper: swiper,
		},
	});

})


$(document).ready(function() {
	const headerHeight = $('.header').outerHeight();

	$('.js-anchor').on('click', function(e) {
			e.preventDefault();
			$('.mobile-menu').removeClass('active');
			$('.header__open-menu').removeClass('active');
			const targetId = $(this).attr('href');
			const targetOffset = $(targetId).offset().top - headerHeight;

			$('html, body').stop().animate({
					scrollTop: targetOffset
			}, 500);

			updateActiveLink($(this));
	});

	$(window).on('scroll', function() {
			const scrollPosition = $(this).scrollTop() + headerHeight + 1;

			$('div[id]').each(function() {
					const sectionTop = $(this).offset().top;
					const sectionBottom = sectionTop + $(this).outerHeight();

					if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
							const targetId = $(this).attr('id');
							const activeAnchor = $(`.js-anchor[href="#${targetId}"]`);

							if (activeAnchor.length) {
									updateActiveLink(activeAnchor);
							}
					}
			});
	});

	function updateActiveLink(activeAnchor) {
			$('.js-anchor').removeClass('active');
			activeAnchor.addClass('active');
	}


	var swiperNews = new Swiper(".js-news", {
		slidesPerView: 2.1,
		spaceBetween: 8,
	});

	$('.header__open-menu').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.mobile-menu').toggleClass('active');
	})

});
