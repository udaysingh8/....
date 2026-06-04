// FORCE BYPASS LOADING SCREEN (1.5 Seconds Timeout Fix)
$(document).ready(function(){
    // Jaise hi HTML ready hoga, 1.5 second me loading automatic hat jayegi
    setTimeout(function(){
        $('.loading').fadeOut('fast', function(){
            $('.container').fadeIn('slow');
        });
    }, 1500);

	var audio = $('.song')[0];

	// 1. Turn On Lights
	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow', function(){
			$('#play').fadeIn('slow');
		});
	});

	// 2. Play Music
	$('#play').click(function(){
		audio.play();
		$('.bulb').removeClass().addClass('bulb');
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow', function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	// 3. Banner Entry
	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow', function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	// 4. Balloons Flying
	function loopOne() {
		var randleft = Math.random()*$(window).width();
		var randtop = Math.random()*20;
		$('#b1').css({left:randleft,bottom:randtop});
		$('#b1').animate({top:-200,left:randleft-100},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = Math.random()*$(window).width();
		var randtop = Math.random()*20;
		$('#b2').css({left:randleft,bottom:randtop});
		$('#b2').animate({top:-200,left:randleft+50},9000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = Math.random()*$(window).width();
		var randtop = Math.random()*20;
		$('#b3').css({left:randleft,bottom:randtop});
		$('#b3').animate({top:-200,left:randleft-50},11000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = Math.random()*$(window).width();
		var randtop = Math.random()*20;
		$('#b4').css({left:randleft,bottom:randtop});
		$('#b4').animate({top:-200,left:randleft+100},8500,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = Math.random()*$(window).width();
		var randtop = Math.random()*20;
		$('#b5').css({left:randleft,bottom:randtop});
		$('#b5').animate({top:-200,left:randleft-80},10500,function(){
			loopFive();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloons').fadeIn('slow');
		$('.balloons').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		$(this).fadeOut('slow', function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	// 5. Cake FadeIn
	$('#cake_fadein').click(function(){
		$('.cake-cover').fadeIn('slow');
		$(this).fadeOut('slow', function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	// 6. Blow the Candle Action
	$('#light_candle').click(function(){
		$('#cake-flame').addClass('blown-out');
		$(this).fadeOut('slow', function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	// 7. Happy Birthday Message Wish
	$('#wish_message').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow', function(){
			$('#story').fadeIn('slow');
		});
	});

	// 8. Story Scrolling Text
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake-cover').fadeOut('slow');
		$('.bannar').fadeOut('slow');
		$('.message').fadeIn('slow');
		
		function msgLoop(i) {
			$("p:nth-child("+i+")").fadeIn('slow').delay(2000).fadeOut('slow', function(){
				if(i < 18) {
					msgLoop(i+1);
				} else {
					$('.message').fadeOut('slow', function(){
						$('.cake-cover').fadeIn('slow');
						$('.bannar').fadeIn('slow');
					});
				}
			});
		}
		msgLoop(1);
	});
});
