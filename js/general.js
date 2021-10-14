/// <reference path="jquery-3.2.1.js" />
/// Author: Almhar Ilao

$(document).ready(function () {

    $(".current-age").html(parseInt((new Date()).getFullYear() - 1994));
    $(".profile-exp").html(parseInt((new Date()).getFullYear() - 2017));


    //Loading Image
    setTimeout(function () {
        $("#load").hide();
        window.scrollTo(0, 0);
    }, 1500);



    //Device Detector
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //Page-up Button
        $(".side-nav-container").show();
        $(".header-navi").hide();
        $(".side-nav-container").reverseChildren();


    } else {
        //Page-up Button
        $(".header-navi").show();
        sideNavigation();

        $(window).scroll(function () {
            sideNavigation();
        });
    }



    //For Bar Graph
    bartiming($(".skills-container").offset().top);
    $(window).scroll(function () {
        bartiming($(".skills-container").offset().top);
    });



    //For Header Button
    $("#know-me").click(function () {
        var getProfile = $("#profile").offset().top;

        $('html, body').animate({
            scrollTop: getProfile
        }, 500);
    });



    //For Header Navigation
    $(".header-navi > li > a, .side-nav > li > a").click(function (e) {
        e.preventDefault();
        var getLocation = $($(this).attr('href')).offset().top;

        $('html, body').animate({
            scrollTop: getLocation
        }, 800);
    });



    //Show more details in profile
    $(".profile-more").click(function () {
        $(this).hide();
        $(".profile-second-layer").fadeIn(1000);
    });



    //Project's Carousel
    var owlProject = $("#owl-project");
    owlProject.owlCarousel({
        items: 4,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });



    //Side Navigation Toggle
    $(".burger-btn").click(function () {
        $(".side-nav").slideToggle();
    });
});



//$(function () {
//    jQuery.scrollSpeed(100, 900);
//});



$.fn.reverseChildren = function () {
    return this.each(function () {
        var $this = $(this);
        $this.children().each(function () {
            $this.prepend(this);
        });
    });
};



function sideNavigation() {
    var getLocate = $(window).scrollTop();

    if (getLocate <= 0) {
        $(".side-nav-container").fadeOut(200);
        $(".side-nav").hide();
    } else {
        $(".side-nav-container").fadeIn(200);
    }
}



function bartiming(x) {
    var getScroll = $(window).scrollTop();

    if (getScroll >= (x - 200)) {
        $(".bar-container").each(function () {
            var getPercent = $(this).attr("data-percent");
            $(this).find(".bar-value").css({
                "transition": "all 3s ease",
                "width": getPercent + "%"
            });
        });
    }
}
