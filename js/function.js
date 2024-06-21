

/** init function */
(function($){
    // scroll function
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $('header').addClass("header-fixed");
        } else {
            $('header').removeClass("header-fixed");
        }

        // for scroll-top trigger
        if (scroll >= 400) {
            $('.scroll-top').addClass("is-show");
        } else {
            $('.scroll-top').removeClass("is-show");
        }

    });

    // Scroll to top 
    $(".scroll-top").on("click", function() {
        $(window).scrollTop(0);
    });

    // Menu toggle
    $('.menu').click (function(){
        $(this).toggleClass('open');
        $('.navbar-custom').toggleClass('m-menu');
        $('body').toggleClass('freeze');
      });

      // close modal when a menu clicked
      $(".navbar-custom").on("click", ".nav-link", function(event){
        $('.menu').removeClass('open');
        $('.navbar-custom').removeClass('m-menu');
        $('body').removeClass('freeze');
    });

    $(document).ready(function() {
        var exampleCallback = function() {
            console.log('Order complete!');
        };
    
        window.EBWidgets.createWidget({
            widgetType: 'checkout',
            eventId: '929576246577',
            modal: true,
            modalTriggerElementId: 'eventbrite-widget-modal-trigger-929576246577',
            onOrderComplete: exampleCallback
        });
    })
    
 })(jQuery);