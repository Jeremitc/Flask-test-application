// hover efect direccional
// https://github.com/im-sticky/jQuery-directional-hover

/* 
window.addEventListener("load", function(){
    
    document.getElementById("preloader").classList.toggle("preloader-outAnimation");
    document.querySelector('body').classList.remove("overflow-hidden");
});
 */

(function ($) {

    $.fn.directionalHover = function(options) {
      // Extend default plugin options
      var opts = $.extend({}, $.fn.directionalHover.defaults, options);

      // private variables
      var FLAG_T = 1, // top
          FLAG_R = 2, // right
          FLAG_B = 4, // bottom
          FLAG_L = 8, // left
          tlMask = FLAG_T | FLAG_L,
          trMask = FLAG_T | FLAG_R,
          blMask = FLAG_B | FLAG_L,
          brMask = FLAG_B | FLAG_R;

      // private functions
      var slideOverlay = function(overlay, direction, px, py, ew, eh, ex, ey) {
          var cornerFlags = 0; // top|right|bottom|left

          if (py - ey <= eh / 2) cornerFlags ^= FLAG_T;
          if (px - ex >= ew / 2) cornerFlags ^= FLAG_R;
          if (py - ey >  eh / 2) cornerFlags ^= FLAG_B;
          if (px - ex <  ew / 2) cornerFlags ^= FLAG_L;

          findSide(cornerFlags, overlay, direction, px-ex, py-ey, ew/2, eh/2);
      }

      var findSide = function(flags, overlay, direction, x, y, w, h) {
          if (testMask(flags, tlMask)) {
              testTopLeftToBottomRight(x, y, w, h) ? setOverlayPosition(overlay, direction, 0, -w*2) : setOverlayPosition(overlay, direction, -h*2, 0);
          }
          else if (testMask(flags, trMask)) {
              testBottomRightToTopLeft(x, y, w, h) ? setOverlayPosition(overlay, direction, -h*2, 0) : setOverlayPosition(overlay, direction, 0, w*2);
          }
          else if (testMask(flags, blMask)) {
              testBottomRightToTopLeft(x, y, w, h) ? setOverlayPosition(overlay, direction, 0, -w*2) : setOverlayPosition(overlay, direction, h*2, 0);
          }
          else if (testMask(flags, brMask)) {
              testTopLeftToBottomRight(x, y, w, h) ? setOverlayPosition(overlay, direction, h*2, 0) : setOverlayPosition(overlay, direction, 0, w*2);
          }
      }

      var testMask = function(flags, mask) {
          return (flags & mask) === mask;
      }

      var testTopLeftToBottomRight = function(x, y, w, h) {
          return (h * x - w * y) < 0;
      }

      var testBottomRightToTopLeft = function(x, y, w, h) {
          return (w * (y-h) + h * x - w * h) < 0;
      }

      var setOverlayPosition = function(overlay, direction, top, left) {
          if (direction === 'in') {
              overlay.animate({
                  top: top,
                  left: left
              }, 0, function() {
                  overlay.stop().animate({
                      top: 0,
                      left: 0
                  }, opts.speed, opts.easing);
              });
          }
          else if (direction === 'out') {
              overlay.animate({
                  top: 0,
                  left: 0
              }, 0, function() {
                  overlay.stop().animate({
                      top: top,
                      left: left
                  }, opts.speed, opts.easing);
              });
          }
      }

      // begin jQuery stuff
      this.css({
          position: 'relative',
          overflow: 'hidden'
      });

      this.find(opts.overlay).css({
          position: 'absolute',
          top: '-100%'
      });

      return this.each(function() {
          var container = $(this);

          container.hover(function(e) {
              slideOverlay(
                  container.find(opts.overlay),
                  'in',
                  e.pageX,
                  e.pageY,
                  container.width(),
                  container.height(),
                  Math.floor(container.offset().left),
                  container.offset().top
              );
          }, function(e) {
              slideOverlay(
                  container.find(opts.overlay),
                  'out',
                  e.pageX,
                  e.pageY,
                  container.width(),
                  container.height(),
                  Math.floor(container.offset().left),
                  container.offset().top
              );
          });
      });
  };

  // Plugin default options
  $.fn.directionalHover.defaults = {
      overlay: ".dh-overlay",
      easing: "swing",
      speed: 400
  };

}(jQuery));



wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animate__animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


$(function () { 

    // funcion que compruba si div se encuntra visible en el viewport
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    if ($('.my-slider').length){
        var slider = tns({
            container: '.my-slider',
            items: 1,
            controls : false,
            autoplay: true,
            navPosition  : 'bottom',
            autoplayButtonOutput : false,
            responsive: {
              640: {
                edgePadding: 20,
                gutter: 20,
                items: 2
              },
              700: {
                gutter: 30
              },
              900: {
                items: 5,
                gutter: 50
              }
            }
          });
        
    }
    
    
    $('#menu-menu-1 > li.dropdown').hover(function () {
        $('ul.dropdown-menu', this).stop(true, true).slideDown('fast');
        $(this).addClass('show');
    }, function () {
        $('ul.dropdown-menu', this).stop(true, true).slideUp('fast');
        $(this).removeClass('show');
    });





    var contar = true //controla que se ejecute una sola vez el contador
    $(window).on( "scroll", function() {

      if ( $(document).scrollTop() > 150 ) {
        // Navigation Bar
        $('.navbar').removeClass('animate__fadeIn');
        $('.navbar').addClass('mnu-black');
        $('.navbar').addClass('animate__animated animate__fadeInDown');
      } else {
        $('.navbar').removeClass('animate__fadeInDown');
        $('.navbar').removeClass('mnu-black');
        $('.navbar').addClass('animate__animated animate__fadeIn');
      }

      if ($('.conta').length){
        if ($('.conta').isInViewport() && contar) {
            contar = false;

                $('.counter-value').each(function(){
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    },{
                        duration: 3500,
                        easing: 'swing',
                        step: function (now){
                            $(this).text(Math.ceil(now));
                        },
                        complete: function () {
                            conta=false
                        }
                    });
                })
            }
        };


    }); // fin window scroll

  }); // fin document ready



  $(window).on("load", function (e) {
    $('.dh-container').directionalHover();
    $('.dh-container2').directionalHover({
      overlay: ".dh-overlay2",
          speed: 150
      });
  })

  
