$(document).ready(function(){
    $('.count h2').each(function() {
        var $this = $(this);
        if ($this.attr('data-count').indexOf('+') > -1) {
            countTo = $this.attr('data-count').replace(/[,+]/g, "");
            
            $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },
    
                {
                    duration: 5000,
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