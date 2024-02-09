$(document).ready(function(){
    $('.count h2').each(function() {
        var $this = $(this);
        if ($this.attr('data-count').indexOf('+') > -1) {
            countTo = $this.attr('data-count').replace(/[,+]/g, "");
            
            $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },
    
                {
                    duration: 500,
                    easing: 'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text($this.attr('data-count'));
                        //alert('finished');
                    }
    
                });
    
        } else {
            countTo = $this.attr('data-count');
            $(this).prop('countTo', 0).animate({
                countTo: $(this).text()
            }, {
                duration: 600,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
                
    
        }

    });
    });

    /* $('.testimonials_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
        dotsClass: 'cus_dots',
        prevArrow: '<button type="button" class="slick-prev cus_right_arrow"><</button>',
         nextArrow: '<button type="button" class="slick-next cus_left_arrow">></button>',
      }); */


      $('.testimonials_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dotsClass: 'cus_dots',

 /*        nextArrow:<button type="button" class="slick-next">Next</button>, */
      });

    
   
  