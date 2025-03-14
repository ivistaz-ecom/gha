/**
 *
 * -----------------------------------------------------------------------------
 *
 * Template : GHA - Agency Solution
 * Author : SoftFounder
 * Author URI : https://SoftFounder.com/
 *
 * -----------------------------------------------------------------------------
 *
 **/


(function($, window, document) {
    "use strict";

    $(document).on('ready', function() {

 
        /*----------------------------------------------------*/
        /*  MOBILE MENU
        /*---------------------------------------------------*/
        //Submenu Dropdown Toggle
        if ($('.gha-main-header li.dropdown ul').length) {
            $('.gha-main-header li.dropdown').append('<div class="dropdown-btn"><i class="icofont-simple-down"></i></div>');

            //Dropdown Button
            $('.gha-main-header li.dropdown .dropdown-btn').on('click', function() {
                $(this).prev('ul').slideToggle(500);
            });
        }

        /*----------------------------------------------------*/
        /*  Mobile Nav Hide Show
        /*---------------------------------------------------*/

        if ($('.gha-mobile-menu').length) {

            $('.gha-mobile-menu .menu-box').mCustomScrollbar();

            var mobileMenuContent = $('.gha-main-header .nav-outer .gha-main-menu').html();
            $('.gha-mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
            $('.gha-sticky-header .gha-main-menu').append(mobileMenuContent);


            //Menu Toggle Btn
            $('.gha-mobile-menu .menu-backdrop,.gha-mobile-menu .close-btn').on('click', function() {
                $('body').removeClass('gha-mobile-menu-visible');

            });
            //Dropdown Button
            $('.gha-mobile-menu li.dropdown .dropdown-btn').on('click', function() {
                $(this).toggleClass('open');
                $(this).prev('ul').slideToggle(500);
            });
            //Menu Toggle Btn
            $('.mobile-nav-toggler').on('click', function() {
                $('body').addClass('gha-mobile-menu-visible');

            });
        }


  

        /*----------------------------------------------------*/
        /*  OWL-CAROUSEL SLIDER FUNCTIONS
        /*---------------------------------------------------*/
        if ($.fn.owlCarousel) {
            var heroSlider = $('.gha-banner');
            var twitterSlider = $('.twitter-slider');
            heroSlider.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                smartSpeed: 1000,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                mouseDrag: true,
                touchDrag: false,
                autoplay: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 1,
                    },
                    768: {
                        items: 1,
                    }
                }
            });
        
            
        
            heroSlider.on('translate.owl.carousel', function() {
                var layer = $("[data-animation]");
                layer.each(function() {
                    var animation_name = $(this).data('animation');
                    $(this).removeClass('animated ' + animation_name).css('opacity', '0');
                });
            });
            $("[data-delay]").each(function() {
                var animation_delay = $(this).data('delay');
                $(this).css('animation-delay', animation_delay);
            });
            $("[data-duration]").each(function() {
                var animation_duration = $(this).data('duration');
                $(this).css('animation-duration', animation_duration);
            });
            heroSlider.on('translated.owl.carousel', function() {
                var layer = heroSlider.find('.owl-item.active').find("[data-animation]");
                layer.each(function() {
                    var animation_name = $(this).data('animation');
                    $(this).addClass('animated ' + animation_name).css('opacity', '1');
                });
            });
            twitterSlider.owlCarousel({
                items: 3,
                loop: true,
                margin: 30,
                animateIn: 'slideIn',
                animateOut: 'slideOut',
                smartSpeed: 1000,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                mouseDrag: true,
                touchDrag: false,
                autoplay: true,
                nav: true,
                navText:['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    }
                }
            });
           
        }


        /*----------------------------------------------------*/
        /*  Back Top Link Js
        /*---------------------------------------------------*/
        var offset = 200;
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });



        $('body').toggleClass('loaded');
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 3000);




    });


    // Header Animation
    $('body').addClass('header-scrollable');
    
    function stickyHeaderOnScrollUp(){
        var previousScroll = 0;
        $(window).on('scroll', function() {
            var currentScroll = $(this).scrollTop();
            if (previousScroll > 100) {
                if (currentScroll > previousScroll) {
                    if (!$('.gha-main-header').hasClass('nav-down')) {
                        $('.gha-main-header').addClass('nav-down');
                    }
                } else if (currentScroll < previousScroll) {
                    if ($('.gha-main-header').hasClass('nav-down')) {
                        $('.gha-main-header').removeClass('nav-down').addClass("sticky");
                    }
                }
            }else{
                $('.gha-main-header').removeClass('sticky');
            }
            previousScroll = currentScroll;
        }).trigger('scroll');
    }
    
    function stickyHeaderOn(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
                $('.gha-header-area').addClass('sticky')
            } else {
                $('.gha-header-area').removeClass('sticky')
            }
        })
    }
    


   
    stickyHeaderOnScrollUp();
    //stickyHeaderOn();
    new WOW().init();
    AOS.init();
 
    
    $(window).on('load', function() {
        /*------------------*/
        /*  Preloader js
        /*------------------*/
        $("#gha-preload").fadeOut(1000);

    });


})(jQuery, window, document);