$(function () {

    $("#organizationForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            inputMessage: {
                required: true
            }
        },
        messages: {
            name: "Будь ласка, вкажіть ваше ім'я",
            email: {
                required: "Вкажіть, будь ласка, вашу ел. адресу",
                email: "Ваш email має бути наступного формату: name@domain.com"
            },
            inputMessage: {
                required: "Залиште, будь ласка, коментар"
            }
        }
    });

    $("#organizationFormSubscribe").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                required: "Щоби підписатись, потрібно вказати email",
                email: "Ваш email має бути наступного формату: name@domain.com"
            }
        }
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider2').slick({
        centerMode: true,
        // variableWidth: true,
        centerPadding: '25px',
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '25px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '25px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $("#btnToScroll").click(function () {
        // $.scrollTo('.get-in-touch')
        $('html, body').animate({
            scrollTop: $(".get-in-touch").offset().top
        }, 2000);
    });

    $('#call').click(function () {
        $('.modal').addClass('modal-show')
    });

    $('.close-m').click(function () {
        $('.modal').removeClass('modal-show')
    });

    $('.btn-secondary').click(function () {
        $('.modal').removeClass('modal-show')
            });

    $('.modal').click(function () {
        $('.modal').removeClass('modal-show')
         })

    var options = {
        animationDuration: 0.5, // in seconds
        filter: 'all', // Initial filter
        callbacks: {
            onFilteringStart: function() { },
            onFilteringEnd: function() { },
            onShufflingStart: function() { },
            onShufflingEnd: function() { },
            onSortingStart: function() { },
            onSortingEnd: function() { }
        },
        controlsSelector: '', // Selector for custom controls
        delay: 0, // Transition delay in ms
        delayMode: 'progressive', // 'progressive' or 'alternate'
        easing: 'ease-out',
        filterOutCss: { // Filtering out animation
            opacity: 0,
            transform: 'scale(0.5)'
        },
        filterInCss: { // Filtering in animation
            opacity: 0,
            transform: 'scale(1)'
        },
        layout: 'sameSize', // See layouts
        multifilterLogicalOperator: 'or',
        selector: '.filtr-container',
        setupControls: true // Should be false if controlsSelector is set
    }
// You can override any of these options and then call...
    var filterizd = $('.filtr-container').filterizr(options);
// If you have already instantiated your Filterizr then call...
//     filterizd.filterizr('setOptions', options);

});

