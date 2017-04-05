$(document).ready(function() {

	$("theclip").ready(function() {
	var paths = $('.animated');
	console.log(paths);
	paths.each(function(i, e) {
		e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
	});
	var tl = new TimelineMax();
	tl.add([
		TweenLite.to(paths.eq(0), .6, {strokeDashoffset: 0, delay: 0.5}),
		TweenLite.to(paths.eq(1), 0.2, {strokeDashoffset: 0, delay: 1}),
		TweenLite.to(paths.eq(2), 0.2, {strokeDashoffset: 0, delay: 1.2}),
		TweenLite.to(paths.eq(3), 0.3, {strokeDashoffset: 0, delay: 2.1}),
		TweenLite.to(paths.eq(4), 0.1, {strokeDashoffset: 0, delay: 2.3}),
		TweenLite.to(paths.eq(5), 0.3, {strokeDashoffset: 0, delay: 2.4}),
	]);
	})

	$("#molls").hide().delay(2400).fadeIn(1000)

	$("pdclip").ready(function() {
	var paths = $('.pdclass');
	console.log(paths);
	paths.each(function(i, e) {
		e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
	});
	var tl = new TimelineMax();
	tl.add([	
// product
		TweenLite.to(paths.eq(1), 0.1, {strokeDashoffset: 0, delay: 3.5}),
		TweenLite.to(paths.eq(2), 0.1, {strokeDashoffset: 0, delay: 3.6}),
		TweenLite.to(paths.eq(3), .2, {strokeDashoffset: 0, delay: 3.7}),
		TweenLite.to(paths.eq(4), .3, {strokeDashoffset: 0, delay: 3.9}),
		TweenLite.to(paths.eq(5), .05, {strokeDashoffset: 0, delay: 4.2}),
		TweenLite.to(paths.eq(6), .05, {strokeDashoffset: 0, delay: 4.3}),

// desi
		TweenLite.to(paths.eq(7), .3, {strokeDashoffset: 0, delay: 4.3}),
// i dot
		TweenLite.to(paths.eq(8), .1, {strokeDashoffset: 0, delay: 4.5}),
		TweenLite.to(paths.eq(9), .4, {strokeDashoffset: 0, delay: 4.6}),

// at
		TweenLite.to(paths.eq(10), .1, {strokeDashoffset: 0, delay: 4.9}),
		TweenLite.to(paths.eq(11), .05, {strokeDashoffset: 0, delay: 5}),
// uc
		TweenLite.to(paths.eq(12), .1, {strokeDashoffset: 0, delay: 5.1}),
		TweenLite.to(paths.eq(13), .1, {strokeDashoffset: 0, delay: 5.2}),
// b line
		TweenLite.to(paths.eq(14), .1, {strokeDashoffset: 0, delay: 5.3}),
		TweenLite.to(paths.eq(18), .1, {strokeDashoffset: 0, delay: 5.35}),
//er
		TweenLite.to(paths.eq(15), .2, {strokeDashoffset: 0, delay: 5.4}),
// eley
		TweenLite.to(paths.eq(16), .1, {strokeDashoffset: 0, delay: 5.5}),
		TweenLite.to(paths.eq(17), .3, {strokeDashoffset: 0, delay: 5.5}),


	]);
	})
	

   $triggered_times = 0;

    $(window).on('scroll', function() {

            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 800;   // set to whatever you want it to be

            if(y_scroll_pos > scroll_pos_test && $triggered_times == 0 ) {
				$(document).ready(function() {
				var paths = $('.thanks');
				console.log(paths);
				paths.each(function(i, e) {
					e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
				});
				var tl = new TimelineMax();
				tl.add([
					TweenLite.to(paths.eq(0), 0.05, {strokeDashoffset: 0, delay: 1}),
					TweenLite.to(paths.eq(1), 0.05, {strokeDashoffset: 0, delay: 1.05}),
					TweenLite.to(paths.eq(2), .3, {strokeDashoffset: 0, delay: 1.1}),
					TweenLite.to(paths.eq(3), .05, {strokeDashoffset: 0, delay: 1.4}),
					TweenLite.to(paths.eq(4), 0.1, {strokeDashoffset: 0, delay: 1.45}),
					TweenLite.to(paths.eq(5), 0.1, {strokeDashoffset: 0, delay: 1.55}),
					TweenLite.to(paths.eq(6), .4, {strokeDashoffset: 0, delay: 1.65}),
					TweenLite.to(paths.eq(7), 1.5, {strokeDashoffset: 0, delay: 2.05}),
					TweenLite.to(paths.eq(8), .4, {strokeDashoffset: 0, delay: 3.55}),
					]);
				})
                $triggered_times = 1;   // to make sure the above action triggers only once
            }
    });




$('#snickerpage').mouseover(function() {
	$('#snickerslide3').fadeIn(400);
})
$('#snickerpage').mouseout(function() {
	$('#snickerslide3').fadeOut(150);
})

$('#hustlelink').mouseover(function() {
	$('#hustleslide').fadeIn(400);
})
$('#hustlelink').mouseout(function() {
	$('#hustleslide').fadeOut(150);
})

$('#safelylink').mouseover(function() {
	$('#safelyscreens').fadeIn(400);
})
$('#safelylink').mouseout(function() {
	$('#safelyscreens').fadeOut(150);
})

$('#botwlink').mouseover(function() {
	$('#botwimg').fadeIn(400);
})
$('#botwlink').mouseout(function() {
	$('#botwimg').fadeOut(150);
})

$('#k812link').mouseover(function() {
	$('#teffwebsite').fadeIn(400);
})
$('#k812link').mouseout(function() {
	$('#teffwebsite').fadeOut(150);
})



	});