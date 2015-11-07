/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Makes intro H5 appear when user scrolls
$(window).scroll(function(){
	$('.intro-text h1').css({"opacity":"1","transition":"3s"})
});

// enlarges CTA button when scrolled past intro H5
var target = $(".intro-text h1").offset().top;
var interval = setInterval(function() {
    if ($(window).scrollTop() >= target) {
       $('.intro-text .btn-xl').css({"transform":"scale(1.2,1.2","transition":".7s"});
        clearInterval(interval);
    }
}, 250);
