const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
// 부드러운 스크롤
// $('body').smoothWheel();

$(document).mousemove(function (e) {
    xVal = e.clientX;
    yVal = e.clientY;

    gsap.to('#mouse-pointer', {
        x: xVal,
        y: yVal,
        stagger: 0.1
    })
});

// class 작동됨
gsap.to('.sc-career .bg1', {
    scrollTrigger: {
        trigger: ".sc-career .bg1",
        start: "0% 100%",
        end: "100% 0%",
        // markers: true,
        scrub: 0,
    },
    yPercent: -5
});

// 고정 Menu 버튼
let mobileBtn = $('.mobile-navbarlist .btn-menu');

$(mobileBtn).click(function (e) {
    e.preventDefault();
    $('.hidden-menu').toggleClass('on');
});



// 구디 nav
// 페이지네이션
//var menu = $("nav").html();
$("#page").html($("nav").html());

// 메뉴 클릭 기능
$("header li").click(function () {
    var menu = $("header li").index(this);
    // 만약에 menu가 갯수를 초과하면 -전체갯수
    if (menu >= $("nav li").length) {
        menu -= $("nav li").length;
    }
    var move = $(".menu").eq(menu).offset().top;
    $("html").animate({
        scrollTop: move
    }, 0)
    return false;
})

// 스크롤 이벤트
$(window).scroll(function () {
    var t = $(this).scrollTop();
    // console.log(t);
    var window_h = $(window).height() / 2; // 화면높이의 반
    var menu2 = $(".menu").eq(1).offset().top - window_h; // 2번째 메뉴의 시작 스크롤값
    var menu3 = $(".menu").eq(2).offset().top - window_h * 2;
    var menu4 = $(".menu").eq(3).offset().top - window_h;

    $("header .on").removeClass("on");
    if (t < menu2) { // 메뉴1
        $("header li:nth-child(1)").addClass("on");
    } else if (t > menu2 && t < menu3) {
        $("header li:nth-child(2)").addClass("on");
    } else if (t > menu3 && t < menu4) {
        $("header li:nth-child(3)").addClass("on");
    } else {
        $("header li:nth-child(4)").addClass("on");
    }
});