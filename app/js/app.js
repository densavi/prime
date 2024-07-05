// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	var swiper = new Swiper(".mySwiper", {
		loop: false,
		spaceBetween: 12,
		slidesPerView: 5,
		freeMode: false,
		watchSlidesProgress: false,
	});
	var swiper2 = new Swiper(".mySwiper2", {
		loop: false,
		spaceBetween: 10,
		thumbs: {
			swiper: swiper,
		},
	});

})
