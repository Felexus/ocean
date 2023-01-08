

$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	




	window.onload = function(e){ 
		setTimeout(function() {
			$('#preloader').addClass('hide')
			$('.preloader-canvas').addClass('hide')
			$("body").css({'visibility': "visible", "opacity": "1"});
			setTimeout(function() {
				$('#preloader').addClass('none')
				$('.preloader-canvas').addClass('none')
			}, 700)


			
			// ЗАГОЛОВКИ
			
			$('.wann').each(function(e) {
				var textpovv = $(this)
				var textpovvid = textpovv.attr('id')



				var wtextWrapper1 = document.querySelector('.' + textpovvid + ' .letters')
				wtextWrapper1.innerHTML = wtextWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

				var wstart1 = 0.01
				for (var i = 1; i <= textpovv.find('.letter').length; i++) {
					var wdel1 = wstart1 + 0.04 * i
					var wdell1 =  wdel1 + 's'
					textpovv.find('.letter:nth-child(' + i + ')').css('animation-delay', wdell1 )
					textpovv.find('.letter').addClass('wow');
					textpovv.find('.letter').addClass('textpov');
				}
			})


		}, 2000)
	}
	

	
	
	new WOW().init();

	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});
	 


	// NEW TTT



	SmoothScroll({
		// Время скролла 400 = 0.4 секунды
		animationTime: 500,
		// Размер шага в пикселях 
		stepSize: 100,
	
		// Дополнительные настройки:
	
		// Ускорение 
		accelerationDelta: 30,
		// Максимальное ускорение
		accelerationMax: 2,
	
		// Поддержка клавиатуры
		keyboardSupport: true,
		// Шаг скролла стрелками на клавиатуре в пикселях
		arrowScroll: 50,
	
		// Pulse (less tweakable)
		// ratio of "tail" to "acceleration"
		pulseAlgorithm: true,
		pulseScale: 4,
		pulseNormalize: 1,
	
		// Поддержка тачпада
		touchpadSupport: true,
	  });


	let newAnimation1 = new Motus.Animation({
		$el: document.getElementById('palm1'),
		keyframes: {
			0: {
				rotate: ['32deg'],
				translateY: {
					to: 0,
					unit: "vw"
				}
			},
			100: {
				rotate: ['38deg'],
				translateY: {
					to: 10.416666666666668,
					unit: "vw"
				}
			}
		}
	});
	Motus.addAnimation(newAnimation1);

	let newAnimation2 = new Motus.Animation({
		$el: document.getElementById('palm2'),
		keyframes: {
			0: {
				rotate: ['250deg'],
				translateY: {
					to: 0,
					unit: "vw"
				}
			},
			100: {
				rotate: ['244deg'],
				translateY: {
					to: -10.416666666666668,
					unit: "vw"
				}
			}
		}
	});
	Motus.addAnimation(newAnimation2);

	let newAnimation3 = new Motus.Animation({
		$el: document.getElementById('palm3'),
		keyframes: {
			0: {
				rotate: ['211deg'],
				translateY: {
					to: 0,
					unit: "vw"
				}
			},
			100: {
				rotate: ['222deg'],
				translateY: {
					to: 10.416666666666668,
					unit: "vw"
				}
			}
		}
	});
	Motus.addAnimation(newAnimation3);
	
	let newAnimation4 = new Motus.Animation({
		$el: document.getElementById('palm4'),
		keyframes: {
			0: {
				rotate: ['3deg'],
				translateY: {
					to: 0,
					unit: "vw"
				}
			},
			100: {
				rotate: ['33deg'],
				translateY: {
					to: 10.416666666666668,
					unit: "vw"
				}
			}
		}
	});
	Motus.addAnimation(newAnimation4);






	$('.ml10 .words').lettering('words')
	let b = 1;
	do {
		var bb = b * 50
		$('.ml10 .word' + b).addClass('word');
		$('.ml10 .word' + b).addClass('wow');
		$('.ml10 .word' + b).addClass('fadeInUp');
		$('.ml10 .word' + b).attr('data-wow-delay', bb + 'ms');
		// console.log($('.ml9 .word:nth-child(' + i + ')'));
		// console.log(i);
		b++;
	} while (b < 12);
	
	$('.ml11 .words').lettering('words')
	let a = 1;
	do {
		var aa = a * 50
		$('.ml11 .word' + a).addClass('word');
		$('.ml11 .word' + a).addClass('wow');
		$('.ml11 .word' + a).addClass('fadeInUp');
		$('.ml11 .word' + a).attr('data-wow-delay', aa + 'ms');
		// console.log($('.ml9 .word:nth-child(' + i + ')'));
		// console.log(i);
		a++;
	} while (a < 32);
						
					

	$('.jarallax').jarallax({
		speed: 0.8,
	});
		

	

	// МЕНЮ НОВОЕ ОТКРЫТИЕ

	$('.header-b__top-menu').click(function() {
		$('.bsmenu').addClass('active')
		$('body').addClass('no-scroll')
		$('html').addClass('no-scroll')
	})
	$('.js-show-menu').click(function() {
		$('.bsmenu').addClass('active')
		$('body').addClass('no-scroll')
		$('html').addClass('no-scroll')
	})

	$('.header__top-menu').click(function() {
		$('.bsmenu').addClass('active')
		$('body').addClass('no-scroll')
		$('html').addClass('no-scroll')
	})
	$('.bsmenu__ov-close').click(function() {
		$('.bsmenu').removeClass('active')
		$('body').removeClass('no-scroll')
		$('html').removeClass('no-scroll')
	})

	
	$(window).scroll(function(event){
		
		var scroll = $(window).scrollTop()
		
		if (scroll > 0) {
			$('.header__textlogo').addClass('hide')
			$('.header__top-a').addClass('active')
			$('.header__fix-as').addClass('hide')
			$('.header__top-menu').addClass('active')
			
			$('.header-b__top-a').addClass('active')
			$('.header-b__fix-as').addClass('hide')
			$('.header-b__top-menu').addClass('active')
		}
		if (scroll <= 0) {
			$('.header__textlogo').removeClass('hide')
			$('.header__top-a').removeClass('active')
			$('.header__fix-as').removeClass('hide')
			$('.header__top-menu').removeClass('active')
			
			$('.header-b__top-a').removeClass('active')
			$('.header-b__fix-as').removeClass('hide')
			$('.header-b__top-menu').removeClass('active')
		}
		
	});



})
