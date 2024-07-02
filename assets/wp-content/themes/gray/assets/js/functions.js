"use strict";
var m,
    divId,
    initLatitude,
    initLongitude,
    map,
    $body = $("body");
$(window).on("load", function () {
    $body.addClass("loaded");
}),
    "true" === $body.attr("data-preloader") && $body.append($("<div class='preloader'><div><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>")),
    $("a[href^=\\#]").on("click", function (e) {
        e.preventDefault(), $("html,body").animate({ scrollTop: $(this.hash).offset().top + -24 }, 0);
    });
var toggleMenu = $(".toggle-menu");
if (toggleMenu.length) {
    var e = $(".menu-dots"),
        a = $(".toggle-close");
    e.on("click", function () {
        toggleMenu.hasClass("show") ? (toggleMenu.removeClass("show"), e.removeClass("active")) : (toggleMenu.addClass("show"), e.addClass("active"));
    }),
        a.on("click", function () {
            toggleMenu.removeClass("show"), e.removeClass("active");
        }),
        $(document).on("click", function (a) {
            0 === $(a.target).closest(".toggle-menu, .menu-dots").length && toggleMenu.hasClass("show") && (toggleMenu.removeClass("show"), e.removeClass("active"));
        });
}
var windowWidth = window.innerWidth,
    headerHeight = document.getElementById("header").offsetHeight,
    sectionNav = document.querySelector(".section-nav");
windowWidth < 992 &&
    window.addEventListener("scroll", function () {
        window.scrollY >= headerHeight ? sectionNav.classList.add("fixed") : sectionNav.classList.remove("fixed");
    });
var bgImages = document.querySelectorAll(".bg-image");
bgImages &&
    bgImages.forEach(function (e) {
        var a = e.getAttribute("data-bg-src");
        e.style.backgroundImage = 'url("' + a + '")';
    });
var swiper = new Swiper(".clients-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        grabCursor: !0,
        breakpoints: { 768: { slidesPerView: 3, spaceBetween: 30 }, 992: { slidesPerView: 3, spaceBetween: 40 }, 1200: { slidesPerView: 5, spaceBetween: 40 } },
        autoplay: { delay: 2500, disableOnInteraction: !1 },
    }),
    swiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: { 768: { slidesPerView: 1, spaceBetween: 30 }, 992: { slidesPerView: 1, spaceBetween: 40 }, 1200: { slidesPerView: 2, spaceBetween: 40 } },
        navigation: { nextEl: ".swiper-custom-next", prevEl: ".swiper-custom-prev" },
        autoplay: { delay: 2500, disableOnInteraction: !1 },
    });
$(".counter").appear(
    function () {
        $(this).each(function () {
            $(this)
                .prop("Counter", 0)
                .animate(
                    { Counter: $(this).text() },
                    {
                        duration: 2400,
                        easing: "swing",
                        step: function (e) {
                            $(this).text(Math.ceil(e));
                        },
                    }
                );
        });
    },
    { accX: 0, accY: -10 }
);
var pGrid = $(".portfolio-grid");
if (pGrid.length) var mixer = mixitup(".portfolio-grid", { selectors: { target: ".portfolio-item" }, animation: { duration: 250 } });
var $lightboxImage = $(".lightbox-image-box");
$lightboxImage.each(function () {
    $(this).magnificPopup({ type: "image", fixedContentPos: !1, removalDelay: 200, closeOnContentClick: !0, image: { titleSrc: "data-image-title" } });
});
var $lightboxMedia = $(".lightbox-media-box");
$lightboxMedia.each(function () {
    $(this).magnificPopup({
        type: "iframe",
        fixedContentPos: !1,
        removalDelay: 200,
        preloader: !1,
        iframe: {
            patterns: { youtube: { index: "youtube.com/", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1&rel=0" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" } },
            srcAction: "iframe_src",
        },
    });
}),
    $("#contactform").on("submit", function (e) {
        var a = $("#name").val(),
            t = $("#email").val(),
            s = $("#subject").val(),
            o = $("#message").val();
        ("" === a && $("#name").addClass("error-color"), "" === t && $("#email").addClass("error-color"), "" === s && $("#subject").addClass("error-color"), "" === o)
            ? $("#message").addClass("error-color")
            : ($.ajax({
                  url: "assets/php/contact-form.php",
                  data: $(this).serialize(),
                  type: "POST",
                  success: function (e) {
                      $("#success").addClass("show-result"),
                          $("#contactform").each(function () {
                              this.reset();
                          });
                  },
                  error: function (e) {
                      $("#error").addClass("show-result");
                  },
              }),
              $("#contactform input, #contactform textarea").removeClass("error-color")),
            e.preventDefault();
    });

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // Function to remove the "active" class from all nav links
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove("active"));
    }

    // Function to add the "active" class to the clicked nav link
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            removeActiveClasses();
            this.classList.add("active");
        });
    });

    // Function to add the "active" class to the nav link corresponding to the section in view
    function addActiveClassOnScroll() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        removeActiveClasses();
        navLinks[index].classList.add("active");
    }

    // Add scroll event listener to highlight nav links based on scroll position
    window.addEventListener("scroll", addActiveClassOnScroll);

    // Initial call to set the active class based on the current scroll position
    addActiveClassOnScroll();
});
