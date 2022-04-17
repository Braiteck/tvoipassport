$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Документы
	if ($('.documents .slider').length) {
		new Swiper('.documents .slider', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			watchOverflow: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function (swiper) {
					setTimeout(() => {
						observer.observe()
					}, 200)

					let topPos = $(swiper.$el).find('.document .bord').innerHeight() / 2

					$(swiper.$el).find('.slider-button-next, .slider-button-prev').css('top', topPos)
				},
				resize: function (swiper) {
					let topPos = $(swiper.$el).find('.document .bord').innerHeight() / 2

					$(swiper.$el).find('.slider-button-next, .slider-button-prev').css('top', topPos)
				}
			},
			breakpoints: {
				'320': {
					slidesPerView: 1
				},
				'480': {
					slidesPerView: 2
				},
				'768': {
					slidesPerView: 3
				},
				'1024': {
					slidesPerView: 3
				}
			}
		})
	}


	// Отзывы
	if ($('.reviews .slider').length) {
		new Swiper('.reviews .slider', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			watchOverflow: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function () {
					setTimeout(() => {
						observer.observe()
					}, 200)
				}
			}
		})
	}


	// Видео
	if ($('.video_slider2').length) {
		new Swiper('.video_slider2', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			watchOverflow: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function () {
					setTimeout(() => {
						observer.observe()
					}, 200)
				}
			},
			breakpoints: {
				'320': {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				'1024': {
					slidesPerView: 2,
					spaceBetween: 40,
				}
			}
		})
	}

	if ($('.video_slider3').length) {
		new Swiper('.video_slider3', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			watchOverflow: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function () {
					setTimeout(() => {
						observer.observe()
					}, 200)
				}
			},
			breakpoints: {
				'320': {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'1024': {
					slidesPerView: 3,
					spaceBetween: 20,
				}
			}
		})
	}


	// НАШ БЛОГ
	if ($('.articles .slider').length) {
		new Swiper('.articles .slider', {
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			watchOverflow: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function () {
					setTimeout(() => {
						observer.observe()
					}, 200)
				}
			},
			breakpoints: {
				'320': {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'1024': {
					slidesPerView: 3,
					spaceBetween: 20,
				}
			}
		})
	}


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header > .close, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	if ($('.advantages .items_wrap').length) {
		slidersAdv()
	}
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}

	if ($('.advantages .items_wrap').length) {
		slidersAdv()
	}
})


function slidersAdv() {
	if ($(window).width() < 768 && !$('.advantages .items_wrap').hasClass('swiper-initialized')) {
		$('.advantages .items_wrap').addClass('swiper')
		$('.advantages .items').addClass('swiper-wrapper').removeClass('items row')
		$('.advantages .item_wrap').addClass('swiper-slide').removeClass('item_wrap')

		swiperAdvantages = new Swiper('.advantages .items_wrap', {
			loop: true,
			spaceBetween: 45,
			slidesPerView: 1,
			watchOverflow: true,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				init: function (swiper) {
					setTimeout(() => {
						observer.observe()
					}, 200)

					let topPos = $(swiper.$el).find('.item').innerHeight() / 2

					$(swiper.$el).find('.slider-button-next, .slider-button-prev').css('bottom', topPos)
				},
				resize: function (swiper) {
					let topPos = $(swiper.$el).find('.item').innerHeight() / 2

					$(swiper.$el).find('.slider-button-next, .slider-button-prev').css('bottom', topPos)
				}
			},
			breakpoints: {
				'320': {
					slidesPerView: 1,
					spaceBetween: 45,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 45,
				},
				'768': {
					slidesPerView: 2,
					spaceBetween: 45,
				}
			}
		})
	} else if ($(window).width() > 767 && $('.advantages .items_wrap').hasClass('swiper-initialized')) {
		if ($('.advantages .items_wrap').length === 1 && $('.advantages .items_wrap').hasClass('swiper-initialized')) {
			swiperAdvantages.destroy(true, true)
		} else if ($('.advantages .items_wrap').length >= 2 && $('.advantages .items_wrap').hasClass('swiper-initialized')) {
			swiperAdvantages.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.advantages .items_wrap').removeClass('swiper')
		$('.advantages .swiper-wrapper').addClass('items row').removeClass('swiper-wrapper')
		$('.advantages .swiper-slide').addClass('item_wrap').removeClass('swiper-slide')
	}
}