jQuery(function (s) {
    s(".introduction__brands").slick({autoplay: !0, infinite: !0, speed: 700, slidesToShow: 6, slidesToScroll: 1, arrows: !1, pauseOnHover: !1, responsive: [{breakpoint: 980, settings: {slidesToShow: 4}}, {breakpoint: 780, settings: {slidesToShow: 3}}, {breakpoint: 480, settings: {slidesToShow: 2}}]})
    s(".references__brands").slick({autoplay: !0, infinite: !0, speed: 700, slidesToShow: 4, slidesToScroll: 1, arrows: !1, pauseOnHover: !1, responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, infinite: !0, dots: !0}}, {breakpoint: 600, settings: {slidesToShow: 2}}, {breakpoint: 480, settings: {slidesToShow: 1}}]})
});
jQuery(document).ready(function ($) { 
    $('.about__opinion__cards').slick({ dots: false, speed: 1000, infinite: true, autoplay: true, fade: false, slidesToShow: 1, slidesToScroll: 1, autoplaySpeed: 5000, centerMode: true, cssEase: 'linear', arrows: true, prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>', nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>', });
    $('.references__slider').slick({  dots: false, speed: 1000, infinite: true, autoplay: true, fade: false, slidesToShow: 1, slidesToScroll: 1, autoplaySpeed: 5000, centerMode: true, cssEase: 'linear', arrows: true, prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>', nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>', });
    $('.about__media__items').slick({ dots: false, speed: 5000, infinite: true, autoplay: true, fade: false, slidesToShow: 4, slidesToScroll: 1, autoplaySpeed: 0, centerMode: true, cssEase: 'linear',  responsive: [ { breakpoint: 1024, settings: { slidesToShow: 3, } }, { breakpoint: 760, settings: { slidesToShow: 2, } }, { breakpoint: 480, settings: { slidesToShow: 1, } } ] });
    $('.career__gallery__items').slick({ autoplay: true, infinite: true, speed: 700, slidesToShow: 4, slidesToScroll: 1, arrows: true, pauseOnHover: false, responsive: [ { breakpoint: 1024, settings: { slidesToShow: 3, infinite: true, dots: true } }, { breakpoint: 600, settings: { slidesToShow: 2, } }, { breakpoint: 480, settings: { slidesToShow: 1, } } ] });
});
