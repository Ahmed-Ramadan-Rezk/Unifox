$(document).ready(function () {

	// Scroll To Top Button

	var scrollT = $('.bttn-scroll-top');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			scrollT.fadeIn()
		} else {
			scrollT.hide()
		}
	})

	scrollT.click(function () {
		$('html, body').animate({scrollTop:0}, 600)
	})

	// Dropdown Menu

	$('.menu').click(function () {
		$('.navlist').slideToggle()
		$('.navlist li a').css({'color': '#FFF'})
	})

	// Navbar

	$(window).scroll(function () {
		var w = $(this).scrollTop();

		if (w > 100) {
			$('header').addClass('sticky-nav')
		} else {
			$('header').removeClass('sticky-nav')
		}
	})

	// Smooth Scroll

	$('.navlist li a').click(function () {
		$('body, html').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		}, 600)
	})


	// Why Choose Us 

	$('.choose-us-list li').click(function  () {
		$(this).addClass('active').siblings().removeClass('active');
		var list = $(this).data('role');
		$('.choose-us-info > div').hide();
		$('.choose-us-info').contents().filter('#' + list).fadeIn();
	})

	// Our Portfolio 

	$('.btns button').click(function () {
		$(this).addClass('active_btn').siblings().removeClass('active_btn')

		let htmlFilter = $(this).attr('id')

		if (htmlFilter === 'all') {
			$('.pics > div').fadeIn()
		} else {
			$('.pics > div').fadeOut()
			$('.pics').contents().filter('.' + htmlFilter).fadeIn()
		}
	})

	// Owl Carousel Team Images

	$('.owl-carousel').owlCarousel({
		    loop:true,
		    autoplay:true,
		    margin:20,
		    nav:false,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
	        }
	    }
	})

})