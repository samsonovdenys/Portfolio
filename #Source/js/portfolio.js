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
