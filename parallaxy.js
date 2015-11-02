$(function() {

  var $window = $(window);

  $('section').each(function() {
    var $section = $(this),
        $bg = $section.find('.background');

    var speed = $section.data('speed'),
        vh = $window.height(),
        eh = $section.outerHeight(),
        height, top;

    height = eh * Math.abs(speed) + vh * Math.abs(speed - 1);

    // round up
    height = Math.ceil(height);

    console.log(speed, height)

    $bg.css('height', height);

    $window.on('scroll', function(e) {
      var ot = $section.offset().top - $window.scrollTop();

      if (speed > 1) {
        top = (ot - vh) * (speed - 1);
      } else {
        top = ot * (speed - 1);
      }

      if (speed < 0) {
        top = (vh - ot) * Math.abs(speed - 1) - height;
      }

      $bg.css('top', top);
    });
  });

});