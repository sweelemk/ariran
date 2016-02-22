$(document).ready(function () {
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//reset form
	(function() {
		$('.reset_form').each(function(){
			var this_ = $(this),
					input = this_.find('.input'),
					reset = this_.find('.reset');

			input.on('input', function(){
				var value = $(this).val();
				if(value.length > 0) {
					reset.delay(100).fadeIn(150);
					input.addClass('active');
				} else {
					reset.fadeOut(100);
					input.removeClass('active');
				}
			});			
			reset.on('click', function(){
				input.val('');
				$(this).fadeOut(100);
				input.removeClass('active');
			});
		});
	})();

	//menu 
	(function(){
		var $menu = $('.header .nav').find('.first-level'),
				$items = $menu.find('.point'),
				$delay = 0;

		$items.each(function(){
			var $this = $(this),
					$link = $this.find('> a');

			if($this.find('.category__half').length){
				menuinit($this);
			}
			var timer;
			function menuinit(item) {
				$menu.on('mouseenter', function(){
					timer = setTimeout(function(){
						$menu.addClass('active');
					}, 200);					
				}).bind('mouseleave', function(){
					clearTimeout(timer)
					$menu.removeClass('active');
				});
				item.bind('mouseenter', function(){
					item.addClass('visible');					
					if($menu.hasClass('active')) {
						item.find('.category__half').stop(true,true).show();
					}else {
						item.find('.category__half').stop(true,true).fadeIn();
					}
				}).bind('mouseleave', function(){
					item.removeClass('visible');
					item.find('.category__half').stop(true,true).hide();
				});
			};			
		})
	})();

	//SLIDER
	(function(){
		var slider = $('.sliders');
		if(slider.length){
			$('.slider').slick({
				arrows: true,
				slidesToShow: 6,
				slidesToScroll: 1,
				speed: 500,
				infinite: false,
				prevArrow: '<button type="button" class="slick-prev"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 27"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z"/></svg></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 27"><path fill-rule="evenodd" clip-rule="evenodd" d="M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z"/></svg></span></button>',
				responsive: [
					{
						breakpoint: 1281,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 750,
						settings: {
							slidesToShow: 2
						}
					}
				]
			});
			$('.slider_img').slick({
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				infinite: true,
				prevArrow: '<button type="button" class="slick-prev"><span><svg viewBox="0 0 81 65" xmlns="http://www.w3.org/2000/svg"><path id="svg_1" d="m76.558144,28.651196l-62.343987,0l21.45599,-21.456001c1.562,-1.562001 1.562,-4.095 0.000999,-5.657c-1.562,-1.562 -4.095997,-1.562 -5.657988,0l-28.283005,28.284003l0,0c-0.186,0.186001 -0.352,0.390999 -0.498,0.610001c-0.067,0.100998 -0.113999,0.209999 -0.171,0.314999c-0.067,0.123999 -0.142,0.242002 -0.196,0.372997c-0.056,0.134998 -0.088,0.275999 -0.129,0.416c-0.032001,0.110996 -0.075001,0.216995 -0.098001,0.330996c-0.052,0.258993 -0.08,0.520994 -0.08,0.783995l0,0c0,0.002998 0.001,0.005001 0.001,0.008003c0,0.258995 0.027,0.518997 0.078001,0.773998c0.023999,0.120998 0.068999,0.231998 0.103998,0.349003c0.039,0.132996 0.070001,0.267998 0.123,0.396996c0.058001,0.139004 0.136001,0.264999 0.208,0.396004c0.054,0.098 0.096,0.197998 0.159,0.292c0.146999,0.221001 0.314,0.427002 0.500999,0.613998l28.282004,28.280998c1.561995,1.561996 4.094988,1.561996 5.656988,0.000999c1.562,-1.561996 1.562,-4.096001 0,-5.657997l-21.45599,-21.454002l62.342987,0c2.209,0 4,-1.790997 4,-4s-1.791,-3.999989 -4,-3.999989z"/></svg></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span><svg viewBox="0 0 81 65" xmlns="http://www.w3.org/2000/svg"><path d="m4.424245,36.54546l62.343997,0l-21.456001,21.456001c-1.562,1.561996 -1.562,4.095001 -0.000999,5.655998c1.562,1.562008 4.096001,1.562008 5.657997,0l28.283005,-28.284l0,0c0.185997,-0.186001 0.351997,-0.390999 0.497993,-0.608997c0.067001,-0.101002 0.114006,-0.210003 0.172005,-0.315002c0.066002,-0.124001 0.141998,-0.242001 0.195,-0.373001c0.056999,-0.134998 0.088997,-0.274998 0.128998,-0.414997c0.033005,-0.111 0.076004,-0.217003 0.098999,-0.331001c0.052002,-0.259998 0.079002,-0.521999 0.079002,-0.785l0,0c0,-0.002998 -0.000999,-0.006001 -0.000999,-0.008999c-0.000999,-0.259003 -0.027,-0.519001 -0.078003,-0.774002c-0.023994,-0.119999 -0.069,-0.230999 -0.103996,-0.348999c-0.039001,-0.132999 -0.069,-0.268002 -0.123001,-0.396999c-0.057999,-0.139 -0.136002,-0.264999 -0.208,-0.396c-0.054001,-0.098 -0.097,-0.198002 -0.158997,-0.292c-0.146004,-0.221001 -0.314003,-0.427002 -0.501007,-0.614002l-28.281998,-28.280998c-1.562,-1.562 -4.094997,-1.562 -5.656998,-0.001001c-1.562,1.562001 -1.562,4.095001 0,5.658001l21.456001,21.455l-62.342997,0c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4z"/></svg></span></button>',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							arrows: false,
							dots: true
						}
					}
				]
			});
			$('.single').slick({
				arrows: true,
				slidesToShow: 5,
				slidesToScroll: 1,
				speed: 500,
				infinite: false,
				prevArrow: '<button type="button" class="slick-prev"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 27"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z"/></svg></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 27"><path fill-rule="evenodd" clip-rule="evenodd" d="M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z"/></svg></span></button>',
				responsive: [
					{
						breakpoint: 1281,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3
						}
					}
				]
			});
			$('.advantages').slick({
				arrows: false,
				slidesToShow: 4,
				speed: 500,
				infinite: false,
				prevArrow: '<button type="button" class="slick-prev"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 27"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z"/></svg></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 27"><path fill-rule="evenodd" clip-rule="evenodd" d="M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z"/></svg></span></button>',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							arrows: true,
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 750,
						settings: {
							arrows: true,
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
			$('.slider_brand').slick({
				arrows: true,
				slidesToShow: 8,
				slidesToScroll: 1,
				speed: 500,
				infinite: true,
				prevArrow: '<button type="button" class="slick-prev"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 27"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z"/></svg></span></button>',
				nextArrow: '<button type="button" class="slick-next"><span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 27"><path fill-rule="evenodd" clip-rule="evenodd" d="M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z"/></svg></span></button>',
				responsive: [
					{
						breakpoint: 1281,
						settings: {
							slidesToShow: 6
						}
					},
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 4
						}
					},
					{
						breakpoint: 750,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
		}
	})();

	//tabs
	(function(){
		$('.tab__nav').each(function(){
			var link = $(this).find('a'),
				linkItem = $(this).find('li'),
				index = link.data('href'),
				parent = $(this).parents('.tab__container'),
				tab_item = parent.find('.tab__item'),
				link_cont = parent.find('.link__cont'),
				slider = $('.sliders');

			link.on('click', function(){
				var this_ = $(this),
					index = this_.data('href');

				this_.parent().addClass('active').siblings().removeClass('active');
				tab_item.fadeOut(0).removeClass('visible');
				if(slider.length){
					parent.find("."+index).fadeIn(0).find('.sliders').slick('setPosition');
				} else {
					parent.find("."+index).fadeIn(0);
				}			
				setTimeout(function(){
					parent.find("."+index).addClass('visible');
				},10);
				return false;
			});
			linkItem.first().addClass('active');
			parent.find("."+index).show().addClass('visible');
		});
	})();

	//like btn
	(function(){
		var like = $('.wish');

		like.each(function (){
			var this_ = $(this);

			this_.on('click', function () {
				if($(this).hasClass('active')){
					$(this).removeClass('active');
				} else {
					$(this).addClass('active');
				}
			})
		});
	})();

	//insta 
	(function(){
		var insta = $('.insta_img');

		insta.each(function(){
			var this_ = $(this),
				attr = this_.attr('id');

			var timeout;

			var feed = new Instafeed({
				clientId: '97ae5f4c024c4a91804f959f43f2635f',
				target: attr,
				get: 'tagged',
				tagName: 'photographyportfolio',
				links: true,
				limit: 6,
				sortBy: 'random',
				resolution: 'thumbnail',
				after: function(){
					timeout = setTimeout(function() {
						insta.addClass('load');
					},200);					
				},
				template: '<div class="photo-box"><div class="image-wrap"><a href="{{link}}" target="_blank"><img src="{{image}}"></a></div></div>'
			});
			feed.run();

			$('.reload').on('click', function () {
				insta.empty().removeClass('load');
				clearTimeout(timeout);
				feed.run();
			});
		});
	})();

	//validation
	(function(){
		var form_validate = $('.js-validate');
		if (form_validate.length) {
			form_validate.each(function () {
				var form_this = $(this);
				$.validate({
					form : form_this,
					validateOnBlur : false,
					borderColorOnError : false,
					scrollToTopOnError : false,
					onSuccess : function() {
						if (form_this.hasClass('distribution')) {
							reload(form_this);
						}
						return false;
					}
				});
			});
		}
	})();

	//reload subscribe
	function reload(forms){
		forms.parents('.subscription').find('.back').addClass('active').siblings().removeClass('active');
	};

	//btn restore 
	(function(){
		var rest = $('.restore'),
			subsc = $('.subscription'),
			input = subsc.find('.input');

		input.focus(function(){
			subsc.addClass('active');
		});
		input.blur(function(){
			subsc.removeClass('active');
		});
		rest.on('click', function(){
			var this_ = $(this);

			this_.parents('.subscription').find('.front').addClass('active').siblings().removeClass('active');
			this_.parents('.subscription').find('.front .input').val('');
		});
	})();

	//mobile menu
	(function(){
		var burger = $('.burger__menu'),
				mobile = $('.mobile-nav'),
				mobileClose = $('.mobile-close'),
				overlay = $('html'),
				duration = 200;

		burger.on('click', function(){
			overlay.addClass('overlay');
			mobile.fadeIn({
				duration: duration,
				complete: function(){
					$(this).addClass('opened');
				}
			});
		});
		mobileClose.on('click', function(){
			if(!mobile.hasClass('opened')) return;
			overlay.removeClass('overlay');
			mobile.removeClass('opened')
						.delay(duration)
						.fadeOut({
							duration: duration
						});
		});
	})();

	//Sticky elements
	(function(){
		if($('.js-stock').length){
			//$('.js-stock').stick_in_parent({offset_top: 20});
		}
	})();

})