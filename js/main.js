


$(document).ready(function(){
  var innerWrapper = $('.portfolio__wrap__inner');

  $('.prev').on('click', function() {

    innerWrapper.animate({left: '0%'}, 200, function(){

      innerWrapper.css('left', '-33.333%');

      $('.slide').first().before($('.slide').last());

    });
  });

  $('.next').on('click', function() {

    innerWrapper.animate({left: '-66.666%'}, 200, function(){

      innerWrapper.css('left', '-33.333%');

      $('.slide').last().after($('.slide').first());

    });
  });
})

$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.nav').toggleClass('active');
		$('body').toggleClass('lock');	
	});

	$('.nav__link').click(function(event){
		$('.header__burger,.nav').toggleClass('active');
		$('body').toggleClass('lock');
		});
	
});
"use strict";var windowHeight=window.innerHeight,windowHeightExtra=0,safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),mobile=/Mobi/.test(navigator.userAgent);safari&&!mobile&&(windowHeightExtra=window.outerHeight-window.innerHeight),mobile&&(windowHeight=window.screen.availHeight,windowHeightExtra=(window.screen.availHeight-window.innerHeight)/2);var positionParallax=function(e,t,a,i){var n=e.top/t-windowHeightExtra;a[i].style.top=n+"px"},animateParallax=function(e,t){for(var a=0;e.length>a;a++){var i=e[a].parentElement.parentElement.getBoundingClientRect();0<=i.top+i.height&&i.top<=windowHeight&&positionParallax(i,t,e,a)}},calculateHeight=function(e,t){for(var a=0;e.length>a;a++){var i=e[a].parentElement.parentElement.getBoundingClientRect(),n=e[a].parentElement.parentElement.offsetTop,o=(windowHeight-i.height)/2,r=windowHeight>i.height+n?i.height+n-n/t:i.height+2*(o-o/t);e[a].style.height=r+2*windowHeightExtra+"px",positionParallax(i,t,e,a)}},universalParallax=function(){this.init=function(i){void 0===i&&(i={}),i={speed:void 0!==i.speed?i.speed:1.5,className:void 0!==i.className?i.className:"parallax"};for(var n=document.getElementsByClassName(i.className),e=0;n.length>e;e++){var t=document.createElement("div");n[e].parentNode.insertBefore(t,n[e]),t.appendChild(n[e]);var a=n[e].parentElement;a.className+="parallax__container","relative"!==window.getComputedStyle(a.parentElement,null).getPropertyValue("position")&&(a.parentElement.style.position="relative");var o=n[e].dataset.parallaxImage;void 0!==o&&(n[e].style.backgroundImage="url("+o+")",1===n[e].classList.length&&"parallax"===n[e].classList[0]&&(n[e].style.backgroundRepeat="no-repeat",n[e].style.backgroundPosition="center",n[e].style.backgroundSize="cover"))}document.addEventListener("readystatechange",function(e){var t,a;"complete"===e.target.readyState&&(t=n,(a=i.speed)<1&&(a=1),calculateHeight(t,a),mobile||window.addEventListener("resize",function(){windowHeight=window.innerHeight,calculateHeight(t,a)}),window.addEventListener("scroll",function(){animateParallax(t,a)}))})}};
new universalParallax().init({
  speed: 4,
});

$(document).ready(function() {
  //E-mail Ajax Send
  $("form").submit(function() {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Grazie! Rispondero' piu' presto possibile.");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 500);
    });
    return false;
  });
});
