$(document).ready(function () {
    //Prevent Page Reload on all # links
    $("body").on("click", "a[href='#']", function (e) {
        e.preventDefault();
    });

    //placeholder
    $("[placeholder]").each(function () {
        $(this).attr("data-placeholder", this.placeholder);
        $(this).bind("focus", function () {
            this.placeholder = '';
        });
        $(this).bind("blur", function () {
            this.placeholder = $(this).attr("data-placeholder");
        });
    });

    // On scroll Add Class
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > 70) {
            $(".wrapper").addClass('page-scrolled');
        }
        else {
            $(".wrapper").removeClass('page-scrolled');
        }
    });

    // Footer margin set for stick to bottom
    function footerAdj() {
        var footerH = $(".footer").innerHeight();
        $(".footer").css({ "margin-top": -footerH });
        $(".main-content").css({ "padding-bottom": footerH });
    };
    footerAdj();
    $(window).resize(function () {
        footerAdj();
    });

    // Add remove class when window resize finished
    var $resizeTimer;
    $(window).on("resize", function (e) {
        if (!$("body").hasClass("window-resizing")) {
            $("body").addClass("window-resizing");
        }
        clearTimeout($resizeTimer);
        $resizeTimer = setTimeout(function () {
            $("body").removeClass("window-resizing");
        }, 250);
    });

    // Add new js functions here -----------------------------------------------------------------

    $(".menu-btn").on('click', function (e) {
        e.preventDefault();
        $("body").toggleClass("sidebar-open");
        $("body").removeClass("search-open");
    });

    $(".sidebar-overlay").on('click', function (e) {
        e.preventDefault();
        $("body").removeClass("sidebar-open");
        $("body").removeClass("search-open");
    });

    $(".btn-search").on('click', function (e) {
        e.preventDefault();
        $("body").addClass("search-open");
        $("body").removeClass("sidebar-open");
    });

    $(".btn-flat.btn-close").on('click', function (e) {
        $(this).parents('.col').hide();
    });

    // $(".password-btn").on('click', function (e) {
    //     $(this).toggleClass('is-eye-open');
    // });


    // if ($(".password").length) {
    //     const togglePassword = document.querySelector('.password-btn');
    //     const password = document.querySelector('.password input');

    //     togglePassword.addEventListener('click', function (e) {
    //         // toggle the type attribute
    //         const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    //         password.setAttribute('type', type);
    //         this.classList.toggle('is-eye-open');
    //     });
    // }


    $(".password-btn").click(function(){        
        var $this = $(this).closest(".password");
        var $input = $this.find("input");
        if(!$this.hasClass("is-eye-open")){
            $this.addClass("is-eye-open");
            $input.attr("type", "text");
        }else{
            $this.removeClass("is-eye-open");
            $input.attr("type", "password");
        }
    });




    $('.dropdown-trigger').dropdown();
    $('select').formSelect();
    $('.tabs').tabs();


    if ($("#mybarChart").length) {
        const ctx = document.getElementById('mybarChart').getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, 0, 280);
        gradient.addColorStop(0, '#8144DD');
        gradient.addColorStop(1, '#5DD5E9');


        chart1 = new Chart(ctx, {
            type: 'bar',
            responsive: true,
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                color: '#B0B0B0',


                datasets: [
                    {
                        data: [372, 256, 488, 158, 320],
                        fill: false,
                        label: 'Total Sale',
                        backgroundColor: gradient,
                        barThickness: 19,
                        borderColor: '#EFEFEF',
                    },
                ]

            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 500,
                        ticks: {
                            callback: value => `${value} k`,
                        },
                        stacked: true,
                        grid: {
                            drawTicks: false,
                            tickColor: '#999999'
                        },
                        ticks: {
                            font: {
                                size: 12,
                            }
                        }
                    },
                    x: {
                        stacked: true,
                        grid: {
                            display: false,
                            drawTicks: false,
                            tickColor: '#999999'
                        },
                        ticks: {
                            font: {
                                size: 12,
                            }
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                },
                animations: {
                    duration: 3000,
                    easing: 'easeInOutBounce',
                    // from: 1,
                    // to: 0,
                    // delay: 10,
                },
            }
        });
    }


    // var counters = $(".counter");
    // var countersQuantity = counters.length;
    // var counter = [];

    // for (i = 0; i < countersQuantity; i++) {
    //     counter[i] = parseInt(counters[i].innerHTML);
    // }

    // var count = function (start, value, id) {
    //     var localStart = start;
    //     interval = setInterval(function () {
    //         if (localStart < value) {
    //             localStart = +(localStart + 0.1).toFixed(4);
    //             counters[id].innerHTML = parseFloat(localStart);
    //         }
    //     }, 3);
    // }

    // for (j = 0; j < countersQuantity; j++) {
    //     count(0, counter[j], j);
    // }

    $('.counter').countUp();


    gsap.registerPlugin(TextPlugin, DrawSVGPlugin);
    const tl = gsap.timeline();

    tl.from("path", {
        drawSVG: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        stagger: {
            amount: 1,
            from: "random",

        }
    });

    // Animation on Login heading
    const text = new SplitType('.split-text');


    const textwords = new SplitType('.split-word', { types: 'words' });
    // Animate characters into view with a stagger effect

    var logintext = gsap.timeline();

    logintext.fromTo('.login-heading.split-text .char',
        {
            y: 120,
        },
        {
            y: 0,
            duration: 0.02,
            stagger: 0.05,
            delay: 0.1,
            ease: Expo.out,
        }
    );

    var cardAnim = gsap.timeline();
    cardAnim.fromTo('.login-card',
        {
            y: 700,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: Expo.ease,
        }
    );

    cardAnim.fromTo(textwords.words,
        {
            y: -70,
        },
        {
            y: 0,
            duration: 0.3,
            stagger: 0.4,
            // delay: 0.2,
            ease: Expo.out,
            yoyo: false,
        }
    );

    cardAnim.to(".login-card .card-subtitle", { duration: 1, text: "Log In into your account" })

    cardAnim.fromTo('.fade-out',
        {
            opacity: 0,
        },
        {
            opacity: 1,
            // yoyo: true,
            ease: "power1.inOut",
            delay: 0.02,
            duration: 0.1,
        }
    );

    var sidenav = gsap.timeline();

    sidenav.set('.sidebar-list li', {
        clearProps: true,
    });

    sidenav.from('.sidebar-list li', {
        x: -200,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: Expo.out,
    });

    var dashboardTitle = gsap.timeline();

    dashboardTitle.fromTo('.main-heading .char',
        {
            y: -120,
        },
        {
            y: 0,
            duration: 0.1,
            stagger: 0.07,
            ease: Expo.out,
        }
    );

    var titles = gsap.timeline();


    // gsap.to triggers animations
    titles.fromTo(' .main-content .rotate-text',
        {
            y: -40,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: 0.3,
            ease: Expo.out,
        }
    );


    // Don't add anything below this --------------------------------------------------------------
    // Add Class on Window Load
    $("body").addClass("page-loaded");
});