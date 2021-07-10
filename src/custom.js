// Slideout.js

var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

document.querySelector('.toggle-menu').addEventListener('click', function() {
  slideout.toggle();
});

$(function() {
	$('#contact-form').parsley().subscribe('parsley:form:validate', function (formInstance) {
		formInstance.submitEvent.preventDefault();
		if (formInstance.isValid() == true) {
			$.ajax({
				url:'https://hooks.zapier.com/hooks/catch/184367/s4wzgw/',
				type:'post',
				data:$('#contact-form').serialize(),
				success:function(){
					window.location = "https://germanwindows.com.my/thank-you/";
				}
			});
		}});
});

$('.gslider').slick({
	lazyLoad: 'progressive',
	slidesToShow: 3,
	slidesToScroll: 2,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	infinite: true,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
});