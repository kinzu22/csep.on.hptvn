function setPopupStorage() {
    typeof Storage != "undefined" ? sessionStorage.setItem("popup", !0) : console.log("Trình duyệt của bạn không hỗ trợ session storage!")
}
function popup() {
    if (typeof Storage != "undefined") {
        var n = sessionStorage.getItem("popup");
        n || $(".image-popup").length > 0 && $(".image-popup").addClass("active")
    } else
        console.log("Trình duyệt của bạn không hỗ trợ session storage!")
}
function clickAnySelect() {
    $(".wrapWeAre .select-label").click(function() {
        $(this).next().addClass("active")
    });
    $(".wrapWeAre .select-menu li").click(function() {
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
        $(this).parents(".select-wrap").children(".select-label").text($(this).text());
        $(this).parent().removeClass("active")
    });
    $(document).on("click.Bst", function(n) {
        $(".select-one").has(n.target).length !== 0 || $(".select-one").is(n.target) || $(".select-one .select-menu").removeClass("active")
    });
    $(document).on("click.Bst", function(n) {
        $(".select-two").has(n.target).length !== 0 || $(".select-two").is(n.target) || $(".select-two .select-menu").removeClass("active")
    })
}
function activeWeAre() {
    $(".select-wrap").each(function() {
        var n = $(this).children(".select-menu").children("li.active").text();
        $(this).children(".select-label").text(n)
    })
}
function activeMenu() {
    $("#menu > li").first().addClass("active");
    var i = window.location.pathname
      , t = i.split("/")
      , n = t[1] == "en" ? t[2] : t[1];
    n != "/" && n != "" && ($("#menu > li").first().removeClass("active"),
    $('#menu > li a[href$="' + i + '"]').parents(".level-1").addClass("active"));
    (n == "services" || n == "dich-vu") && ($("#menu > li").first().removeClass("active"),
    $('#menu > li a[href$="service"], #menu > li a[href$="dich-vu"]').parents(".level-1").addClass("active"));
    (n == "consultants" || n == "tu-van") && ($("#menu > li").first().removeClass("active"),
    $('#menu > li a[href$="consultant"], #menu > li a[href$="tu-van"]').parents(".level-1").addClass("active"));
    (n == "technology-solutions" || n == "giai-phap") && ($("#menu > li").first().removeClass("active"),
    $('#menu > li a[href$="technology-solutions"], #menu > li a[href$="giai-phap"]').parents(".level-1").addClass("active"));
    n == "industrysolution" && ($("#menu > li").first().removeClass("active"),
    $('#menu > li a[href$="sectorsolutions"]').parents(".level-1").addClass("active"))
}
function activeTabCopor() {
    $(document).on("click", ".slideCarousel .item", function() {
        var n = $(this).attr("id");
        localStorage.setItem("item", n)
    });
    var n = localStorage.getItem("item");
    typeof n != "undefined" && n != null && ($(".tabCorporate .nav-tabs li").removeClass("active"),
    $(".tabCorporate .tab-content .tab-pane").removeClass("active"),
    $('.tabCorporate .tab-content .tab-pane[id="' + n + '"]').addClass("active"),
    $('.tabCorporate .nav-tabs li a[href="#' + n + '"]').parent().addClass("active"));
    localStorage.removeItem("item")
}
function addNonBreaking() {
    var r = $("#main-content").find('div[style="text-align: justify;"]'), n, t, i;
    $(r).each(function() {
        $(this).html() || $(this).html("&nbsp;")
    });
    n = $("#main-content").find('div[style="text-align: left;"]');
    $(n).each(function() {
        $(this).html() || $(this).html("&nbsp;")
    });
    t = $("#main-content").find('div[style="text-align: right;"]');
    $(t).each(function() {
        $(this).html() || $(this).html("&nbsp;")
    });
    i = $("#main-content").find('div[style="text-align: center;"]');
    $(i).each(function() {
        $(this).html() || $(this).html("&nbsp;")
    })
}
function randomClassName(n) {
    var t;
    $(n).css("visibility", "visible");
    t = ["bgs1", "bgs2", "bgs3", "bgs4", "bgs5", "bgs6", "bgs7", "bgs8", "bgs9", "bgs10", "bgs11"];
    $(n).each(function(n, i) {
        $(i).addClass(t[n % t.length])
    })
}
function isotopeReal() {
    var n = $(".isotopeGrid .filterCate").isotope({
        itemSelector: ".item",
        layoutMode: "fitRows"
    });
    $(".isotopeGrid .btnFilter").on("click", "li", function() {
        var t = $(this).attr("data-filter");
        n.isotope({
            filter: t
        })
    });
    $(".isotopeGrid .btnFilter").each(function(n, t) {
        var i = $(t);
        i.on("click", "li", function() {
            i.find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked")
        })
    })
}
function contentinterCate() {
    $(".wrapIsotopeTypical .interCate .item").each(function() {
        $(this).find(".content").text().trim().length > 0 && ($(this).find(".img").append('<span class="stick"><\/span>'),
        $(this).find(".content").addClass("shown"))
    });
    $(".wrapIsotopeTypical .interCate .item .stick").click(function() {
        $(this).parents(".item").find(".content.shown").hasClass("up") ? ($(".wrapIsotopeTypical .interCate .item .content.shown").removeClass("up"),
        $(this).parents(".item").find(".content.shown").stop(!0, !1, !0).slideUp(300)) : ($(".wrapIsotopeTypical .interCate .item .content.shown").removeClass("up"),
        $(this).parents(".item").find(".content.shown").addClass("up"),
        $(".wrapIsotopeTypical .interCate .item .content.shown").stop(!0, !1, !0).slideUp(0),
        $(this).parents(".item").find(".content.shown").stop(!0, !1, !0).slideDown(300))
    })
}
function isotopeFake() {
    $(".wrapIsotopeTypical .filterGroup").on("click", "li", function() {
        $(".wrapIsotopeTypical .filterGroup li").removeClass("is-checked");
        $(this).addClass("is-checked");
        var n = $(this).data("filter");
        $(".wrapIsotopeTypical .interCate .item").addClass("zoomOut").removeClass("zoomIn").css({
            position: "absolute"
        });
        $(".wrapIsotopeTypical .interCate .item").each(function() {
            var t = $(this).data("cate")
              , i = t.split(" ")
              , r = $(this);
            i.indexOf(n) != -1 && r.addClass("zoomIn").css({
                position: "relative"
            })
        })
    })
}
function removeShadow() {
    $(".CapacityCate").find(".owl-item.active").first().addClass("removeShadow")
}
function menuRight() {
    var n = $(".slideBannerDe").height();
    $(".menuHidden").height(n)
}
function delayWow() {
    for (var w = $(".brandCate .item").length, s, i, h, r, c, u, l, f, a, e, v, o, y, p, n, t = 1; t <= w; t++)
        $(".brandCate .item:nth-of-type(" + t + ")").attr("data-wow-delay", t / 2 + "s");
    for (s = $(".ConsultantCate .item").length,
    i = 1; i <= s; i++)
        $(".ConsultantCate .item:nth-of-type(" + i + ")").attr("data-wow-delay", i / 2 + "s");
    for ($(".serviceCate .item:nth-of-type(2n+1) .content").addClass("fadeInLeft"),
    $(".serviceCate .item:nth-of-type(2n+1) .img").addClass("fadeInRight"),
    $(".serviceCate .item:nth-of-type(2n) .content").addClass("fadeInRight"),
    $(".serviceCate .item:nth-of-type(2n) .img").addClass("fadeInLeft"),
    h = $(".cateQuyenLoi .item").length,
    r = 1; r <= h; r++)
        $(".cateQuyenLoi .item:nth-of-type(" + r + ")").attr("data-wow-delay", r / 2 + "s");
    for (c = $(".successCate .item").length,
    u = 1; u <= c; u++)
        $(".successCate .item:nth-of-type(" + u + ")").attr("data-wow-delay", (u - 1) / 2 + "s");
    for (l = $(".PartnerstrategyCate .item").length,
    f = 1; f <= l; f++)
        $(".PartnerstrategyCate .item:nth-of-type(" + f + ")").attr("data-wow-delay", (f - 1) / 2 + "s");
    for (a = $(".Partnerstrategy .content ul li").length,
    e = 1; e <= a; e++)
        $(".Partnerstrategy .content ul li:nth-of-type(" + e + ")").attr("data-wow-delay", (e + .5) / 2 + "s");
    for (v = $(".coreCate .item").length,
    o = 1; o <= v; o++)
        $(".coreCate .item:nth-of-type(" + o + ")").attr("data-wow-delay", (o - 1) / 2 + "s");
    for (y = $(".cateArr .item").length,
    n = 0; n <= y; n++)
        $(".cateArr .item:nth-of-type(" + (n + 1) + ")").attr("data-wow-delay", (n + .1) / 2 + "s");
    for (p = $(".cateHand .item").length,
    n = 0; n <= p; n++)
        $(".cateHand .item:nth-of-type(" + (n + 1) + ")").attr("data-wow-delay", (n + .4) / 2 + "s")
}
function addClassPackageCate() {
    var r = ["bg_1", "bg_2", "bg_3", "bg_4", "bg_5", "bg_6"], t, i, n;
    $(".PackageCate .item").each(function(n, t) {
        $(t).addClass(r[n % r.length])
    });
    t = ["back1", "back2", "back3", "back4", "back5"];
    $(".benefit .itemw").each(function(n, i) {
        $(i).addClass(t[n % t.length])
    });
    i = ["bgs1", "bgs2", "bgs3"];
    $(".whywrap .item").each(function(n, t) {
        $(t).addClass(i[n % i.length])
    });
    n = ["bgs1", "bgs2", "bgs3", "bgs4", "bgs5", "bgs6", "bgs7", "bgs8", "bgs9", "bgs10"];
    $(".stage ul li").each(function(t, i) {
        $(i).addClass(n[t % n.length])
    });
    $(".ConsultantCate .item").each(function(t, i) {
        $(i).addClass(n[t % n.length])
    })
}
function myfunload() {
    $(".panel-a").mobilepanel();
    $("#menu > li").not(".home").clone().appendTo($("#menuMobiles"));
    $("#menuMobiles input").remove();
    $("#menuMobiles > li > a").append('<span class="fa fa-chevron-circle-right iconar"><\/span>');
    $("#menuMobiles li li a").append('<span class="fa fa-angle-right iconl"><\/span>');
    $("#menu > li:last-child").addClass("last");
    $("#menu > li:first-child").addClass("fisrt");
    $("#menu > li").find("ul").addClass("menu-level");
    $("#menu li").hover(function() {
        $(this).children("ul").stop(!0, !1, !0).slideToggle(300)
    });
    $(document).on("mouseover", ".serviceOf-cate .item .wrap-item", function() {
        $(this).children(".readmore").show(300)
    });
    $(document).on("mouseleave", ".serviceOf-cate .item .wrap-item", function() {
        $(this).children(".readmore").hide(300)
    });
    var n = new Swiper(".swiper-container",{
        loop: !0,
        effect: "fade",
        autoplay: 5e3,
        autoplayDisableOnInteraction: !1,
        nextButton: ".swiper-button-next.swiper-button-white",
        prevButton: ".swiper-button-prev.swiper-button-white"
    });
    $(".tabsCarousel .item").first().addClass("active");
    $(".tabsCarousel .item").click(function() {
        $(".tabsCarousel .item").removeClass("active");
        $(this).addClass("active")
    });
    $(".tab_management .tab-content .tab-pane").first().addClass("active");
    $(".HDCate").owlCarousel({
        margin: 30,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 3
            },
            1e3: {
                items: 4
            }
        }
    });
    $(".HDCate1").owlCarousel({
        margin: 30,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
    $(".slideCarousel").owlCarousel({
        margin: 15,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 3
            },
            1e3: {
                items: 2
            }
        }
    });
    $(".Notification").owlCarousel({
        margin: 30,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            993: {
                items: 3
            },
            1e3: {
                items: 4
            }
        }
    });
    $(".thuongniencate").owlCarousel({
        margin: 30,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 3
            },
            1e3: {
                items: 4
            }
        }
    });
    $(".PackageCatecarousel").owlCarousel({
        margin: 70,
        loop: !1,
        nav: !0,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    });
    $(".multiyear ul.nav-tabs").owlCarousel({
        margin: 5,
        loop: !1,
        nav: !0,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        touchDrag: !0,
        mouseDrag: !1,
        responsive: {
            0: {
                margin: 5,
                items: 3
            },
            600: {
                margin: 5,
                items: 4
            },
            1e3: {
                items: 6
            }
        }
    });
    $(".multiyear ul.nav-tabs li").click(function() {
        $(this).addClass("active");
        $(".multiyear ul.nav-tabs li").removeClass("active")
    });
    $(".typicalCusCate").owlCarousel({
        margin: 15,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 2
            },
            600: {
                items: 3
            },
            1e3: {
                items: 4
            }
        }
    });
    $(".benefitcarousel").owlCarousel({
        margin: 15,
        loop: !0,
        nav: !1,
        dots: !0,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 5
            }
        }
    });
    $(".whycarousel").owlCarousel({
        margin: 0,
        loop: !0,
        nav: !1,
        dots: !0,
        autoplay: !1,
        autoplayTimeout: 1e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    });
    $(".hptpeoCarousel").owlCarousel({
        margin: 30,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsive: {
            1e3: {
                items: 3
            }
        }
    });
    $(".PartnerstrategyCarousel").owlCarousel({
        margin: 30,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 5
            }
        }
    });
    $(".moreImgCarousel").owlCarousel({
        margin: 5,
        loop: !0,
        nav: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 7e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            600: {
                items: 3
            },
            1e3: {
                items: 3
            }
        }
    });
    $(".successCate").owlCarousel({
        margin: 30,
        loop: !1,
        nav: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 7e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 3
            }
        }
    });
    $(".tabsCarousel").slick({
        dots: !1,
        infinite: !1,
        arrows: !0,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 993,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 551,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    $(".listPartner").slick({
        dots: !0,
        infinite: !0,
        arrows: !1,
        slidesToShow: 6,
        slidesToScroll: 1,
        rows: 3,
        autoplay: !0,
        autoplaySpeed: 2e3,
        responsive: [{
            breakpoint: 993,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                rows: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                rows: 2
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 2
            }
        }]
    });
    $(".partnerCarouselde").slick({
        dots: !0,
        infinite: !0,
        arrows: !1,
        slidesToShow: 6,
        slidesToScroll: 3,
        rows: 1,
        autoplay: !0,
        autoplaySpeed: 4e3,
        responsive: [{
            breakpoint: 993,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    $(".newsBanksSlide").on("init", function() {
        window.innerWidth > 480 && $(".newsBanksSlide .slick-track .slick-slide.slick-current .item.item-1").each(function() {
            $(this).find(".number").insertAfter($(this).find(".title"))
        })
    }).on("afterChange", function() {
        window.innerWidth > 480 && $(".newsBanksSlide .slick-track .slick-slide.slick-current .item.item-2").each(function() {
            $(this).find(".number").insertAfter($(this).find(".title"))
        })
    }).slick({
        dots: !0,
        arrows: !1,
        infinite: !1,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".PartnerstrategyCateBG .container").slick({
        dots: !0,
        infinite: !1,
        arrows: !1,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1960,
            settings: "unslick"
        }, {
            breakpoint: 993,
            settings: "getslick"
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $(".officialPartnerCate").slick({
        dots: !1,
        infinite: !1,
        arrows: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1960,
            settings: "unslick"
        }, {
            breakpoint: 993,
            settings: "getslick"
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
}
function DoEqualSizer(n) {
    var t = $(n).map(function() {
        return $(this).height("auto"),
        $(this).height()
    }).get()
      , i = Math.max.apply(null, t);
    $(n).height(i)
}
function EqualSizer(n) {
    $(document).ready(DoEqualSizer(n));
    window.addEventListener("resize", function() {
        DoEqualSizer(n)
    })
}
function EqualSizer_1(n) {
    $(document).ready(DoEqualSizer(n));
    window.addEventListener("resize", function() {
        DoEqualSizer(n)
    })
}
function EqualSizer_2(n) {
    $(document).ready(DoEqualSizer(n));
    window.addEventListener("resize", function() {
        DoEqualSizer(n)
    })
}
function mymap() {
    mympp();
    var n;
    $(window).resize(function() {
        clearTimeout(n);
        setTimeout(function() {
            mympp()
        }, 500)
    })
}
function mympp() {
    $("#mapwrap").remove();
    $(window).width() > 768 && $("#mapshow").append('<div id="mapwrap"><iframe id="iframe" src="map.aspx" frameborder="0" height="100%" width="100%"><\/iframe><\/div>')
}
function subscribeStatus(n, t, i) {
    swal(n, t, i)
}
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 2)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery);
+function(n) {
    "use strict";
    function u(i) {
        return this.each(function() {
            var r = n(this)
              , u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]', t = function(t) {
        n(t).on("click", i, this.close)
    }, r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this), u = f.attr("data-target"), r;
        u || (u = f.attr("href"),
        u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
        r = n(u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (r.removeClass("in"),
        n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    }
    ;
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r,
        this
    }
    ;
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery);
+function(n) {
    "use strict";
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.button")
              , f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this,f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.isLoading = !1
    }, r;
    t.VERSION = "3.3.6";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var r = "disabled"
          , i = this.$element
          , f = i.is("input") ? "val" : "html"
          , u = i.data();
        t += "Text";
        null == u.resetText && i.data("resetText", i[f]());
        setTimeout(n.proxy(function() {
            i[f](null == u[t] ? this.options[t] : u[t]);
            "loadingText" == t ? (this.isLoading = !0,
            i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1,
            i.removeClass(r).removeAttr(r))
        }, this), 0)
    }
    ;
    t.prototype.toggle = function() {
        var t = !0, i = this.$element.closest('[data-toggle="buttons"]'), n;
        i.length ? (n = this.$element.find("input"),
        "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
        i.find(".active").removeClass("active"),
        this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
        this.$element.toggleClass("active")),
        n.prop("checked", this.$element.hasClass("active")),
        t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
        this.$element.toggleClass("active"))
    }
    ;
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r,
        this
    }
    ;
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target);
        r.hasClass("btn") || (r = r.closest(".btn"));
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"]') || n(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery);
+function(n) {
    "use strict";
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.carousel")
              , f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i)
              , e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this,f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
        this.$element = n(t);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = i;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
    }, u, r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            n.preventDefault()
        }
    }
    ;
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)),
        this
    }
    ;
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"),
        this.$items.index(n || this.$active)
    }
    ;
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t), f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1, r, u;
        return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1,
        u = (i + r) % this.$items.length,
        this.$items.eq(u))
    }
    ;
    t.prototype.to = function(n) {
        var i = this
          , t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(0 > n))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                i.to(n)
            }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    }
    ;
    t.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ;
    t.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ;
    t.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ;
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"), u = r || this.getItemForDirection(i, e), l = this.interval, f = "next" == i ? "left" : "right", a = this, o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0],
        s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }),
        (this.$element.trigger(s),
        !s.isDefaultPrevented()) ? ((this.sliding = !0,
        l && this.pause(),
        this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"),
        h = n(this.$indicators.children()[this.getItemIndex(u)]),
        h && h.addClass("active")),
        c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }),
        n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i),
        u[0].offsetWidth,
        e.addClass(f),
        u.addClass(f),
        e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"),
        u.addClass("active"),
        this.sliding = !1,
        this.$element.trigger(c)),
        l && this.cycle(),
        this) : void 0)
    }
    ;
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u,
        this
    }
    ;
    r = function(t) {
        var o, r = n(this), u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")), e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()),
        f = r.attr("data-slide-to"),
        f && (e.interval = !1),
        i.call(u, e),
        f && u.data("bs.carousel").to(f),
        t.preventDefault())
    }
    ;
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery);
+function(n) {
    "use strict";
    function r(t) {
        var i = t.attr("data-target"), r;
        return i || (i = t.attr("href"),
        i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")),
        r = i && n(i),
        r && r.length ? r : t.parent()
    }
    function u(t) {
        t && 3 === t.which || (n(o).remove(),
        n(i).each(function() {
            var u = n(this)
              , i = r(u)
              , f = {
                relatedTarget: this
            };
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)),
            t.isDefaultPrevented() || (u.attr("aria-expanded", "false"),
            i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
        }))
    }
    function e(i) {
        return this.each(function() {
            var r = n(this)
              , u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop", i = '[data-toggle="dropdown"]', t = function(t) {
        n(t).on("click.bs.dropdown", this.toggle)
    }, f;
    t.VERSION = "3.3.6";
    t.prototype.toggle = function(t) {
        var f = n(this), i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f),
            o = i.hasClass("open"),
            u(),
            !o) {
                if ("ontouchstart"in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u),
                e = {
                    relatedTarget: this
                },
                i.trigger(t = n.Event("show.bs.dropdown", e)),
                t.isDefaultPrevented())
                    return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    }
    ;
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this),
        t.preventDefault(),
        t.stopPropagation(),
        !e.is(".disabled, :disabled"))) {
            if (o = r(e),
            s = o.hasClass("open"),
            !s && 27 != t.which || s && 27 == t.which)
                return 27 == t.which && o.find(i).trigger("focus"),
                e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target),
            38 == t.which && u > 0 && u--,
            40 == t.which && u < f.length - 1 && u++,
            ~u || (u = 0),
            f.eq(u).trigger("focus"))
        }
    }
    ;
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f,
        this
    }
    ;
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery);
+function(n) {
    "use strict";
    function i(i, r) {
        return this.each(function() {
            var f = n(this)
              , u = f.data("bs.modal")
              , e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this,e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
        this.options = i;
        this.$body = n(document.body);
        this.$element = n(t);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }, r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    }
    ;
    t.prototype.show = function(i) {
        var r = this
          , u = n.Event("show.bs.modal", {
            relatedTarget: i
        });
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var f = n.support.transition && r.$element.hasClass("fade"), u;
            r.$element.parent().length || r.$element.appendTo(r.$body);
            r.$element.show().scrollTop(0);
            r.adjustDialog();
            f && r.$element[0].offsetWidth;
            r.$element.addClass("in");
            r.enforceFocus();
            u = n.Event("shown.bs.modal", {
                relatedTarget: i
            });
            f ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    }
    ;
    t.prototype.hide = function(i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        n(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    }
    ;
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    }
    ;
    t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ;
    t.prototype.resize = function() {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    }
    ;
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    }
    ;
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    }
    ;
    t.prototype.backdrop = function(i) {
        var e = this, f = this.$element.hasClass("fade") ? "fade" : "", r, u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f,
            this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !i)
                return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
            u = function() {
                e.removeBackdrop();
                i && i()
            }
            ,
            n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    }
    ;
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ;
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    }
    ;
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ;
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth, t;
        n || (t = document.documentElement.getBoundingClientRect(),
        n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    }
    ;
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    }
    ;
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ;
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"), t;
        return n.className = "modal-scrollbar-measure",
        this.$body.append(n),
        t = n.offsetWidth - n.clientWidth,
        this.$body[0].removeChild(n),
        t
    }
    ;
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r,
        this
    }
    ;
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this)
          , f = r.attr("href")
          , u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, ""))
          , e = u.data("bs.modal") ? "toggle" : n.extend({
            remote: !/#/.test(f) && f
        }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery);
+function(n) {
    "use strict";
    function r(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.tooltip")
              , f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this,f)),
            "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", n, t)
    }, i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0,
        this.type = t,
        this.$element = n(i),
        this.options = this.getOptions(r),
        this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "),
        e = f.length; e--; )
            if (u = f[e],
            "click" == u)
                this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else
                "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin",
                s = "hover" == u ? "mouseleave" : "focusout",
                this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)),
                this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }
    ;
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t),
        t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t
    }
    ;
    t.prototype.getDelegateOptions = function() {
        var t = {}
          , i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }),
        t
    }
    ;
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        n(t.currentTarget).data("bs." + this.type, i)),
        t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0),
        i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout),
        i.hoverState = "in",
        i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }
    ;
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n])
                return !0;
        return !1
    }
    ;
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        n(t.currentTarget).data("bs." + this.type, i)),
        t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1),
        i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout),
        i.hoverState = "out",
        i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }
    ;
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type), l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c),
            l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]),
            c.isDefaultPrevented() || !l)
                return;
            var u = this
              , r = this.tip()
              , a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement
              , v = /\s?auto?\s?/i
              , y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition()
              , o = r[0].offsetWidth
              , s = r[0].offsetHeight;
            y && (p = i,
            e = this.getPosition(this.$viewport),
            i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i,
            r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            }
            ;
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    }
    ;
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(), l = r[0].offsetWidth, e = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10), h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i)
          , a = c ? 2 * u.left - l + h : 2 * u.top - e + f
          , v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    }
    ;
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    }
    ;
    t.prototype.setContent = function() {
        var n = this.tip()
          , t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    }
    ;
    t.prototype.hide = function(i) {
        function f() {
            "in" != u.hoverState && r.detach();
            u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type);
            i && i()
        }
        var u = this
          , r = n(this.$tip)
          , e = n.Event("hide.bs." + this.type);
        return this.$element.trigger(e),
        e.isDefaultPrevented() ? void 0 : (r.removeClass("in"),
        n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(),
        this.hoverState = null,
        this)
    }
    ;
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    }
    ;
    t.prototype.hasContent = function() {
        return this.getTitle()
    }
    ;
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var u = t[0]
          , r = "BODY" == u.tagName
          , i = u.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = r ? {
            top: 0,
            left: 0
        } : t.offset()
          , e = {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }
          , o = r ? {
            width: n(window).width(),
            height: n(window).height()
        } : null;
        return n.extend({}, i, e, o, f)
    }
    ;
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }
    ;
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
            top: 0,
            left: 0
        }, e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0,
        u = this.getPosition(this.$viewport),
        /right|left/.test(n) ? (o = t.top - e - u.scroll,
        s = t.top + e - u.scroll + r,
        o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e,
        c = t.left + e + i,
        h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)),
        f) : f
    }
    ;
    t.prototype.getTitle = function() {
        var t = this.$element
          , n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }
    ;
    t.prototype.getUID = function(n) {
        do
            n += ~~(1e6 * Math.random());
        while (document.getElementById(n));
        return n
    }
    ;
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ;
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ;
    t.prototype.enable = function() {
        this.enabled = !0
    }
    ;
    t.prototype.disable = function() {
        this.enabled = !1
    }
    ;
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ;
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type),
        i || (i = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click,
        i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }
    ;
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null
        })
    }
    ;
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i,
        this
    }
}(jQuery);
+function(n) {
    "use strict";
    function r(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.popover")
              , f = "object" == typeof i && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this,f)),
            "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
        this.init("popover", n, t)
    }, i;
    if (!n.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.6";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }
    ;
    t.prototype.setContent = function() {
        var n = this.tip()
          , i = this.getTitle()
          , t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    }
    ;
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ;
    t.prototype.getContent = function() {
        var t = this.$element
          , n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    }
    ;
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i,
        this
    }
}(jQuery);
+function(n) {
    "use strict";
    function r(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(t) {
        this.element = n(t)
    }, u, i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element, f = t.closest("ul:not(.dropdown-menu)"), i = t.data("target"), u;
        if (i || (i = t.attr("href"),
        i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
        !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a")
              , e = n.Event("hide.bs.tab", {
                relatedTarget: t[0]
            })
              , o = n.Event("show.bs.tab", {
                relatedTarget: r[0]
            });
            (r.trigger(e),
            t.trigger(o),
            o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i),
            this.activate(t.closest("li"), f),
            this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    }
    ;
    t.prototype.activate = function(i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth,
            i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active")
          , o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    }
    ;
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u,
        this
    }
    ;
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    }
    ;
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery);
+function(n) {
    "use strict";
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.affix")
              , f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this,f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
        this.$element = n(i);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition()
    }, r;
    t.VERSION = "3.3.6";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop()
          , f = this.$element.offset()
          , e = this.$target.height();
        if (null != i && "top" == this.affixed)
            return i > u ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != i ? u + this.unpin <= f.top ? !1 : "bottom" : n - r >= u + e ? !1 : "bottom";
        var o = null == this.affixed
          , s = o ? u : f.top
          , h = o ? e : t;
        return null != i && i >= u ? "top" : null != r && s + h >= n - r ? "bottom" : !1
    }
    ;
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop()
          , i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    }
    ;
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    }
    ;
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height()
              , r = this.options.offset
              , f = r.top
              , u = r.bottom
              , h = Math.max(n(document).height(), n(document.body).height());
            if ("object" != typeof r && (u = f = r),
            "function" == typeof f && (f = r.top(this.$element)),
            "function" == typeof u && (u = r.bottom(this.$element)),
            i = this.getState(h, s, f, u),
            this.affixed != i) {
                if (null != this.unpin && this.$element.css("top", ""),
                e = "affix" + (i ? "-" + i : ""),
                o = n.Event(e + ".bs.affix"),
                this.$element.trigger(o),
                o.isDefaultPrevented())
                    return;
                this.affixed = i;
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == i && this.$element.offset({
                top: h - s - u
            })
        }
    }
    ;
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r,
        this
    }
    ;
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this)
              , t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery);
+function(n) {
    "use strict";
    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.collapse")
              , f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this,f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    }, u;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    }
    ;
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"),
        !(r && r.length && (f = r.data("bs.collapse"),
        f && f.transitioning)) && (e = n.Event("show.bs.collapse"),
        this.$element.trigger(e),
        !e.isDefaultPrevented()))) {
            if (r && r.length && (i.call(r, "hide"),
            f || r.data("bs.collapse", null)),
            u = this.dimension(),
            this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0),
            this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
            this.transitioning = 1,
            o = function() {
                this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                this.transitioning = 0;
                this.$element.trigger("shown.bs.collapse")
            }
            ,
            !n.support.transition)
                return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    }
    ;
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"),
        this.$element.trigger(r),
        !r.isDefaultPrevented()))
            return i = this.dimension(),
            this.$element[i](this.$element[i]())[0].offsetHeight,
            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
            this.transitioning = 1,
            u = function() {
                this.transitioning = 0;
                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            }
            ,
            n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    }
    ;
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ;
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    }
    ;
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    }
    ;
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u,
        this
    }
    ;
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u)
          , e = f.data("bs.collapse")
          , o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery);
+function(n) {
    "use strict";
    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }
    function i(i) {
        return this.each(function() {
            var u = n(this)
              , r = u.data("bs.scrollspy")
              , f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this,f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.3.6";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ;
    t.prototype.refresh = function() {
        var t = this
          , i = "offset"
          , r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position",
        r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this)
              , u = f.data("target") || f.attr("href")
              , t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [[t[i]().top + r, u]] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    }
    ;
    t.prototype.process = function() {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset, f = this.getScrollHeight(), e = this.options.offset + f - this.$scrollElement.height(), t = this.offsets, r = this.targets, u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(),
        i >= e)
            return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0])
            return this.activeTarget = null,
            this.clear();
        for (n = t.length; n--; )
            u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    }
    ;
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
          , i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    }
    ;
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r,
        this
    }
    ;
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery);
+function(n) {
    "use strict";
    function t() {
        var i = document.createElement("bootstrap"), t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, n;
        for (n in t)
            if (void 0 !== i.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1, u = this, r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }
        ,
        setTimeout(r, t),
        this
    }
    ;
    n(function() {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);
!function(n) {
    n.fn.extend({
        mobilepanel: function(t) {
            var t = n.extend({
                panelLeft: "data-position",
                paneltype: "data-type",
                speed: 400,
                wrapperid: "#wrapper",
                cssmenu: ".menu-mobile",
                widthshow: 992,
                heightmo: !1,
                easing: null
            }, t);
            return this.each(function() {
                function nt(t, r) {
                    t.hasClass("open") ? (a(),
                    n("html,body").stop(!0, !0).animate({
                        scrollTop: 0
                    }, 200),
                    n(r).after('<div class="mask-panel" data-id="' + r + '"><\/div>'),
                    i.heightmo && u(r),
                    s(r, !0, !0, !1, !1)) : s(r, !1, !1, !0, !1);
                    n(".mask-panel[data-id='" + r + "']").click(function() {
                        return s(r, !1, !1, !0, !0),
                        n("html,body").stop(!0, !0).animate({
                            scrollTop: 0
                        }, 500),
                        n(i.wrapperid).css("min-height", "100%"),
                        f(),
                        !1
                    });
                    n(r).find("[href='" + r + "']").click(function() {
                        return s(r, !1, !1, !0, !0),
                        n(i.wrapperid).css("min-height", "100%"),
                        f(),
                        !1
                    })
                }
                function tt(t) {
                    n(i.wrapperid).css("min-height", n(window).height() + "px");
                    n(window).width() < i.widthshow & e.hasClass("open") ? (i.heightmo && u(t),
                    y(t, !0, !0)) : y(t, !1, !1)
                }
                function y(t, i, r) {
                    p(t, i);
                    r ? n(".mask-panel[data-id='" + t + "']").show() : n(".mask-panel[data-id='" + t + "']").hide()
                }
                function s(t, r, u, f, e) {
                    p(t, r);
                    u ? n(i.wrapperid).addClass("overflow") : n(i.wrapperid).removeClass("overflow");
                    e && n("[href='" + t + "']").removeClass("open");
                    f && n(".mask-panel[data-id='" + t + "']").remove()
                }
                function p(t, i) {
                    i ? n(t).addClass("mobile-active") : n(t).removeClass("mobile-active")
                }
                function it(t, r, e) {
                    t.hasClass("open") ? (a(),
                    n(r).after('<div class="mask-panel" data-id="' + r + '"><\/div>'),
                    n("html,body").stop(!0, !0).animate({
                        scrollTop: 0
                    }, 10),
                    i.heightmo && u(r),
                    h(r, e, !0, !0, !1, !1)) : h(r, e, !1, !1, !0, !1);
                    n(".mask-panel[data-id='" + r + "']").click(function() {
                        return h(r, e, !1, !1, !0, !0),
                        n("html,body").stop(!0, !0).animate({
                            scrollTop: 0
                        }, 500),
                        n(i.wrapperid).css("min-height", "100%"),
                        f(),
                        !1
                    });
                    n(r).find("[href='" + r + "']").click(function() {
                        return h(r, e, !1, !1, !0, !0),
                        n(i.wrapperid).css("min-height", "100%"),
                        f(),
                        !1
                    })
                }
                function rt(t, r) {
                    n(i.wrapperid).css("min-height", n(window).height() + "px");
                    n(window).width() < i.widthshow & e.hasClass("open") ? (i.heightmo && u(t),
                    w(t, !0, !0, r)) : w(t, !1, !1, r)
                }
                function w(t, i, r, u) {
                    b(t, i, u);
                    r ? n(".mask-panel[data-id='" + t + "']").show() : n(".mask-panel[data-id='" + t + "']").hide()
                }
                function h(t, r, u, f, e, o) {
                    f ? n(i.wrapperid).addClass("overflow") : n(i.wrapperid).removeClass("overflow");
                    b(t, u, r);
                    o && n("[href='" + t + "']").removeClass("open");
                    e && n(".mask-panel[data-id='" + t + "']").remove()
                }
                function b(t, i, r) {
                    var u = "mobile-active-right";
                    "true" == r.toLowerCase() && (u = "mobile-active-left");
                    i ? n(t).addClass("open-in").stop(!0, !0).animate({
                        opacity: 1
                    }, 10, function() {
                        n("body").addClass(u)
                    }) : n(t).removeClass("open-in").stop(!0, !0).animate({
                        opacity: 0
                    }, 10, function() {
                        n("body").removeClass(u)
                    })
                }
                function ut(t, e, o) {
                    "true" == o.toLowerCase() ? n(e).css({
                        left: "-100%",
                        right: "auto"
                    }) : n(e).css({
                        left: "auto",
                        right: "-100%"
                    });
                    t.hasClass("open") && (a(),
                    n("html,body").stop(!0, !0).animate({
                        scrollTop: 0
                    }, 200),
                    n(e).after('<div class="mask-panel" data-id="' + e + '"><\/div>'),
                    i.heightmo && u(e),
                    c(e, o, "0", i.speed, r, !0, !1, !1, !1));
                    n(".mask-panel[data-id='" + e + "']").click(function() {
                        return c(e, o, "-100%", i.speed, r, !1, !0, !0, !0),
                        n("html,body").stop(!0, !0).animate({
                            scrollTop: 0
                        }, 500),
                        n(i.wrapperid).css("min-height", "100%"),
                        f(),
                        !1
                    });
                    n(e).find("[href='" + e + "']").click(function() {
                        return c(e, o, "-100%", i.speed, r, !1, !0, !0, !0),
                        n(i.wrapperid).css("min-height", "100%"),
                        f(),
                        !1
                    })
                }
                function ft(t, f) {
                    n(i.wrapperid).css("min-height", "100%");
                    n(window).width() < i.widthshow & e.hasClass("open") ? (i.heightmo && u(t),
                    k(t, f, "0", i.speed, r, !1, !0, !1, !1, !0)) : k(t, f, "-100%", i.speed, r, !1, !0, !1, !1, !1)
                }
                function k(t, i, r, u, f, e, o, s, h, l) {
                    c(t, i, r, u, f, e, o, s, h);
                    l ? n(".mask-panel[data-id='" + t + "']").show() : n(".mask-panel[data-id='" + t + "']").hide()
                }
                function c(t, r, u, f, e, o, s, h, c) {
                    o && n(i.wrapperid).addClass("overflow");
                    "TRUE" == r.toUpperCase() ? n(t).stop(!0, !0).animate({
                        left: u
                    }, f, e, function() {
                        s && n(i.wrapperid).removeClass("overflow");
                        c && n("[href='" + t + "']").removeClass("open");
                        h && n(".mask-panel[data-id='" + t + "']").remove()
                    }) : n(t).stop(!0, !0).animate({
                        right: u
                    }, f, e, function() {
                        s && n(i.wrapperid).removeClass("overflow");
                        c && n("[href='" + t + "']").removeClass("open");
                        h && n(".mask-panel[data-id='" + t + "']").remove()
                    })
                }
                function et(t, e, o) {
                    "true" == o.toLowerCase() ? n(e).css({
                        left: 0,
                        right: "auto"
                    }) : n(e).css({
                        left: "auto",
                        right: 0
                    });
                    t.hasClass("open") && (a(),
                    n("html,body").stop(!0, !0).animate({
                        scrollTop: 0
                    }, 200),
                    n(e).after('<div class="mask-panel" data-id="' + e + '"><\/div>'),
                    i.heightmo && u(e),
                    l(e, o, "240px", i.speed, r, !0, !1, !1, !1));
                    n(".mask-panel[data-id='" + e + "']").click(function() {
                        return l(e, o, "0", i.speed, r, !1, !0, !0, !0),
                        n("html,body").stop(!0, !0).animate({
                            scrollTop: 0
                        }, 500),
                        n(i.wrapperid).css("min-height", "100%"),
                        f(),
                        !1
                    });
                    n(e).find("[href='" + e + "']").click(function() {
                        return l(e, o, "0", i.speed, r, !1, !0, !0, !0),
                        n(i.wrapperid).css("min-height", "100%"),
                        f(),
                        !1
                    })
                }
                function ot(t, f) {
                    n(i.wrapperid).css("min-height", "100%");
                    n(window).width() < i.widthshow & e.hasClass("open") ? (i.heightmo && u(t),
                    d(name, f, "240px", i.speed, r, !0, !1, !1, !1, !0)) : d(name, f, "0", i.speed, r, !1, !0, !0, !0, !1)
                }
                function d(t, i, r, u, f, e, o, s, h, c) {
                    l(t, i, r, u, f, e, o, s, h);
                    c ? n(".mask-panel[data-id='" + t + "']").show() : n(".mask-panel[data-id='" + t + "']").hide()
                }
                function l(t, r, u, f, e, o, s, h, c) {
                    n("body").removeClass("mobile-active-left mobile-active-right");
                    o && n(i.wrapperid).addClass("overflow");
                    var l;
                    clearTimeout(l);
                    l = setTimeout(function() {
                        "true" == r.toLowerCase() ? (n("body").addClass("mobile-active-left"),
                        n("#wrapper-in").css({
                            right: "auto",
                            left: 0
                        }).stop(!0, !0).animate({
                            left: u
                        }, f, e, function() {
                            s && n(i.wrapperid).removeClass("overflow");
                            c && n("[href='" + t + "']").removeClass("open");
                            h && n(".mask-panel[data-id='" + t + "']").remove()
                        })) : (n("body").addClass("mobile-active-right"),
                        n("#wrapper-in").css({
                            left: "auto",
                            right: 0
                        }).stop(!0, !0).animate({
                            right: u
                        }, f, e, function() {
                            s && n(i.wrapperid).removeClass("overflow");
                            c && n("[href='" + t + "']").removeClass("open");
                            h && n(".mask-panel[data-id='" + t + "']").remove()
                        }));
                        0 == u ? n(t).removeClass("open-in").stop(!0, !0).animate({
                            opacity: 0
                        }, f) : n(t).addClass("open-in").stop(!0, !0).animate({
                            opacity: 1
                        }, f)
                    }, 300)
                }
                function u(t) {
                    var r = n(t).find(i.cssmenu).outerHeight(), u;
                    r > n(document).height() ? n(i.wrapperid).css("min-height", r + "px") : (u = n(t).find(".menu-mobile").outerHeight(),
                    n(i.wrapperid).css("min-height", u + "px"))
                }
                function a() {
                    "true" == v.toLowerCase() ? n("body").addClass("panel-overlay") : n("body").addClass("panel-reveal")
                }
                function f() {
                    var t;
                    clearTimeout(t);
                    t = setTimeout(function() {
                        n("body").removeClass("panel-overlay panel-reveal")
                    }, 300)
                }
                var i = t, e = n(this), o = e.attr(i.panelLeft), v = e.attr(i.paneltype), g = function() {
                    var i = document.createElement("div"), n = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], t;
                    for (t in n)
                        if (void 0 !== i.style[n[t]])
                            return !0;
                    return !1
                }(), r;
                r = i.easing ? i.easing : "swing";
                g || ("true" == v ? n(".mobile-panel").css("left", "-100%") : n(name).removeClass("open-in").stop(!0, !0).animate({
                    opacity: 0
                }, 0));
                e.click(function() {
                    n(this).toggleClass("open");
                    var t = n(this).attr("href");
                    return g ? "true" == v.toLowerCase() ? (nt(n(this), t),
                    n(window).resize(function() {
                        tt(t)
                    })) : (it(n(this), t, o),
                    n(window).resize(function() {
                        rt(t, o)
                    })) : "true" == v.toLowerCase() ? (ut(n(this), t, o, i.speed, r),
                    n(window).resize(function() {
                        ft(t, o)
                    })) : (et(n(this), t, o, i.speed, r),
                    n(window).resize(function() {
                        ot(t, o)
                    })),
                    i.heightmo || n(t).find(".menu-in").stop(!0, !0).animate({
                        scrollTop: 0
                    }, 100),
                    !1
                })
            })
        }
    })
}(jQuery);
!function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, r) {
            var f, u = this;
            u.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: n(t),
                appendDots: n(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous<\/button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next<\/button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(n, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "<\/button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            };
            u.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            };
            n.extend(u, u.initials);
            u.activeBreakpoint = null;
            u.animType = null;
            u.animProp = null;
            u.breakpoints = [];
            u.breakpointSettings = [];
            u.cssTransitions = !1;
            u.hidden = "hidden";
            u.paused = !1;
            u.positionProp = null;
            u.respondTo = null;
            u.rowCount = 1;
            u.shouldClick = !0;
            u.$slider = n(t);
            u.$slidesCache = null;
            u.transformType = null;
            u.transitionType = null;
            u.visibilityChange = "visibilitychange";
            u.windowWidth = 0;
            u.windowTimer = null;
            f = n(t).data("slick") || {};
            u.options = n.extend({}, u.defaults, f, r);
            u.currentSlide = u.options.initialSlide;
            u.originalSettings = u.options;
            "undefined" != typeof document.mozHidden ? (u.hidden = "mozHidden",
            u.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (u.hidden = "webkitHidden",
            u.visibilityChange = "webkitvisibilitychange");
            u.autoPlay = n.proxy(u.autoPlay, u);
            u.autoPlayClear = n.proxy(u.autoPlayClear, u);
            u.changeSlide = n.proxy(u.changeSlide, u);
            u.clickHandler = n.proxy(u.clickHandler, u);
            u.selectHandler = n.proxy(u.selectHandler, u);
            u.setPosition = n.proxy(u.setPosition, u);
            u.swipeHandler = n.proxy(u.swipeHandler, u);
            u.dragHandler = n.proxy(u.dragHandler, u);
            u.keyHandler = n.proxy(u.keyHandler, u);
            u.autoPlayIterator = n.proxy(u.autoPlayIterator, u);
            u.instanceUid = i++;
            u.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            u.registerBreakpoints();
            u.init(!0);
            u.checkResponsive(!0)
        }
        var i = 0;
        return t
    }();
    t.prototype.addSlide = t.prototype.slickAdd = function(t, i, r) {
        var u = this;
        if ("boolean" == typeof i)
            r = i,
            i = null;
        else if (0 > i || i >= u.slideCount)
            return !1;
        u.unload();
        "number" == typeof i ? 0 === i && 0 === u.$slides.length ? n(t).appendTo(u.$slideTrack) : r ? n(t).insertBefore(u.$slides.eq(i)) : n(t).insertAfter(u.$slides.eq(i)) : r === !0 ? n(t).prependTo(u.$slideTrack) : n(t).appendTo(u.$slideTrack);
        u.$slides = u.$slideTrack.children(this.options.slide);
        u.$slideTrack.children(this.options.slide).detach();
        u.$slideTrack.append(u.$slides);
        u.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t)
        });
        u.$slidesCache = u.$slides;
        u.reinit()
    }
    ;
    t.prototype.animateHeight = function() {
        var n = this, t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0),
        n.$list.animate({
            height: t
        }, n.options.speed))
    }
    ;
    t.prototype.animateSlide = function(t, i) {
        var u = {}
          , r = this;
        r.animateHeight();
        r.options.rtl === !0 && r.options.vertical === !1 && (t = -t);
        r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
            left: t
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: t
        }, r.options.speed, r.options.easing, i) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft),
        n({
            animStart: r.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(n) {
                n = Math.ceil(n);
                r.options.vertical === !1 ? (u[r.animType] = "translate(" + n + "px, 0px)",
                r.$slideTrack.css(u)) : (u[r.animType] = "translate(0px," + n + "px)",
                r.$slideTrack.css(u))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(),
        t = Math.ceil(t),
        u[r.animType] = r.options.vertical === !1 ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)",
        r.$slideTrack.css(u),
        i && setTimeout(function() {
            r.disableTransition();
            i.call()
        }, r.options.speed))
    }
    ;
    t.prototype.asNavFor = function(t) {
        var r = this
          , i = r.options.asNavFor;
        i && null !== i && (i = n(i).not(r.$slider));
        null !== i && "object" == typeof i && i.each(function() {
            var i = n(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }
    ;
    t.prototype.applyTransition = function(n) {
        var t = this
          , i = {};
        i[t.transitionType] = t.options.fade === !1 ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase;
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    }
    ;
    t.prototype.autoPlay = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer);
        n.slideCount > n.options.slidesToShow && n.paused !== !0 && (n.autoPlayTimer = setInterval(n.autoPlayIterator, n.options.autoplaySpeed))
    }
    ;
    t.prototype.autoPlayClear = function() {
        var n = this;
        n.autoPlayTimer && clearInterval(n.autoPlayTimer)
    }
    ;
    t.prototype.autoPlayIterator = function() {
        var n = this;
        n.options.infinite === !1 ? 1 === n.direction ? (n.currentSlide + 1 === n.slideCount - 1 && (n.direction = 0),
        n.slideHandler(n.currentSlide + n.options.slidesToScroll)) : (n.currentSlide - 1 == 0 && (n.direction = 1),
        n.slideHandler(n.currentSlide - n.options.slidesToScroll)) : n.slideHandler(n.currentSlide + n.options.slidesToScroll)
    }
    ;
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = n(t.options.prevArrow).addClass("slick-arrow"),
        t.$nextArrow = n(t.options.nextArrow).addClass("slick-arrow"),
        t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
        t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ;
    t.prototype.buildDots = function() {
        var i, r, t = this;
        if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
            for (r = '<ul class="' + t.options.dotsClass + '">',
            i = 0; i <= t.getDotCount(); i += 1)
                r += "<li>" + t.options.customPaging.call(this, t, i) + "<\/li>";
            r += "<\/ul>";
            t.$dots = n(r).appendTo(t.options.appendDots);
            t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ;
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.$slides.each(function(t, i) {
            n(i).attr("data-slick-index", t).data("originalStyling", n(i).attr("style") || "")
        });
        t.$slider.addClass("slick-slider");
        t.$slideTrack = 0 === t.slideCount ? n('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent();
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        t.$slideTrack.css("opacity", 0);
        (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1);
        n("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading");
        t.setupInfinite();
        t.buildArrows();
        t.buildDots();
        t.updateDots();
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0);
        t.options.draggable === !0 && t.$list.addClass("draggable")
    }
    ;
    t.prototype.buildRows = function() {
        var t, i, r, f, c, u, e, n = this, o, s, h;
        if (f = document.createDocumentFragment(),
        u = n.$slider.children(),
        n.options.rows > 1) {
            for (e = n.options.slidesPerRow * n.options.rows,
            c = Math.ceil(u.length / e),
            t = 0; c > t; t++) {
                for (o = document.createElement("div"),
                i = 0; i < n.options.rows; i++) {
                    for (s = document.createElement("div"),
                    r = 0; r < n.options.slidesPerRow; r++)
                        h = t * e + (i * n.options.slidesPerRow + r),
                        u.get(h) && s.appendChild(u.get(h));
                    o.appendChild(s)
                }
                f.appendChild(o)
            }
            n.$slider.html(f);
            n.$slider.children().children().children().css({
                width: 100 / n.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ;
    t.prototype.checkResponsive = function(t, i) {
        var f, u, e, r = this, o = !1, s = r.$slider.width(), h = window.innerWidth || n(window).width();
        if ("window" === r.respondTo ? e = h : "slider" === r.respondTo ? e = s : "min" === r.respondTo && (e = Math.min(h, s)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            u = null;
            for (f in r.breakpoints)
                r.breakpoints.hasOwnProperty(f) && (r.originalSettings.mobileFirst === !1 ? e < r.breakpoints[f] && (u = r.breakpoints[f]) : e > r.breakpoints[f] && (u = r.breakpoints[f]));
            null !== u ? null !== r.activeBreakpoint ? (u !== r.activeBreakpoint || i) && (r.activeBreakpoint = u,
            "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]),
            t === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(t)),
            o = u) : (r.activeBreakpoint = u,
            "unslick" === r.breakpointSettings[u] ? r.unslick(u) : (r.options = n.extend({}, r.originalSettings, r.breakpointSettings[u]),
            t === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(t)),
            o = u) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            t === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(t),
            o = u);
            t || o === !1 || r.$slider.trigger("breakpoint", [r, o])
        }
    }
    ;
    t.prototype.changeSlide = function(t, i) {
        var f, e, o, r = this, u = n(t.target), s;
        switch (u.is("a") && t.preventDefault(),
        u.is("li") || (u = u.closest("li")),
        o = r.slideCount % r.options.slidesToScroll != 0,
        f = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        t.data.message) {
        case "previous":
            e = 0 === f ? r.options.slidesToScroll : r.options.slidesToShow - f;
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - e, !1, i);
            break;
        case "next":
            e = 0 === f ? r.options.slidesToScroll : f;
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + e, !1, i);
            break;
        case "index":
            s = 0 === t.data.index ? 0 : t.data.index || u.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(s), !1, i);
            u.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ;
    t.prototype.checkNavigable = function(n) {
        var t, i, u = this, r;
        if (t = u.getNavigableIndexes(),
        i = 0,
        n > t[t.length - 1])
            n = t[t.length - 1];
        else
            for (r in t) {
                if (n < t[r]) {
                    n = i;
                    break
                }
                i = t[r]
            }
        return n
    }
    ;
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (n("li", t.$dots).off("click.slick", t.changeSlide),
        t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).off("mouseenter.slick", n.proxy(t.setPaused, t, !0)).off("mouseleave.slick", n.proxy(t.setPaused, t, !1)));
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide));
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler);
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler);
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler);
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler);
        t.$list.off("click.slick", t.clickHandler);
        n(document).off(t.visibilityChange, t.visibility);
        t.$list.off("mouseenter.slick", n.proxy(t.setPaused, t, !0));
        t.$list.off("mouseleave.slick", n.proxy(t.setPaused, t, !1));
        t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().off("click.slick", t.selectHandler);
        n(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange);
        n(window).off("resize.slick.slick-" + t.instanceUid, t.resize);
        n("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault);
        n(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ;
    t.prototype.cleanUpRows = function() {
        var n, t = this;
        t.options.rows > 1 && (n = t.$slides.children().children(),
        n.removeAttr("style"),
        t.$slider.html(n))
    }
    ;
    t.prototype.clickHandler = function(n) {
        var t = this;
        t.shouldClick === !1 && (n.stopImmediatePropagation(),
        n.stopPropagation(),
        n.preventDefault())
    }
    ;
    t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear();
        i.touchObject = {};
        i.cleanUpEvents();
        n(".slick-cloned", i.$slider).detach();
        i.$dots && i.$dots.remove();
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove());
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove());
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            n(this).attr("style", n(this).data("originalStyling"))
        }),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides));
        i.cleanUpRows();
        i.$slider.removeClass("slick-slider");
        i.$slider.removeClass("slick-initialized");
        i.unslicked = !0;
        t || i.$slider.trigger("destroy", [i])
    }
    ;
    t.prototype.disableTransition = function(n) {
        var t = this
          , i = {};
        i[t.transitionType] = "";
        t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(n).css(i)
    }
    ;
    t.prototype.fadeSlide = function(n, t) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(n).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(n).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(n),
        i.$slides.eq(n).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        t && setTimeout(function() {
            i.disableTransition(n);
            t.call()
        }, i.options.speed))
    }
    ;
    t.prototype.fadeSlideOut = function(n) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(n).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(n),
        t.$slides.eq(n).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ;
    t.prototype.filterSlides = t.prototype.slickFilter = function(n) {
        var t = this;
        null !== n && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(n).appendTo(t.$slideTrack),
        t.reinit())
    }
    ;
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var n = this;
        return n.currentSlide
    }
    ;
    t.prototype.getDotCount = function() {
        var n = this
          , t = 0
          , i = 0
          , r = 0;
        if (n.options.infinite === !0)
            for (; t < n.slideCount; )
                ++r,
                t = i + n.options.slidesToScroll,
                i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        else if (n.options.centerMode === !0)
            r = n.slideCount;
        else
            for (; t < n.slideCount; )
                ++r,
                t = i + n.options.slidesToScroll,
                i += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return r - 1
    }
    ;
    t.prototype.getLeft = function(n) {
        var f, r, i, t = this, u = 0;
        return t.slideOffset = 0,
        r = t.$slides.first().outerHeight(!0),
        t.options.infinite === !0 ? (t.slideCount > t.options.slidesToShow && (t.slideOffset = t.slideWidth * t.options.slidesToShow * -1,
        u = r * t.options.slidesToShow * -1),
        t.slideCount % t.options.slidesToScroll != 0 && n + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow && (n > t.slideCount ? (t.slideOffset = (t.options.slidesToShow - (n - t.slideCount)) * t.slideWidth * -1,
        u = (t.options.slidesToShow - (n - t.slideCount)) * r * -1) : (t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1,
        u = t.slideCount % t.options.slidesToScroll * r * -1))) : n + t.options.slidesToShow > t.slideCount && (t.slideOffset = (n + t.options.slidesToShow - t.slideCount) * t.slideWidth,
        u = (n + t.options.slidesToShow - t.slideCount) * r),
        t.slideCount <= t.options.slidesToShow && (t.slideOffset = 0,
        u = 0),
        t.options.centerMode === !0 && t.options.infinite === !0 ? t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth : t.options.centerMode === !0 && (t.slideOffset = 0,
        t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)),
        f = t.options.vertical === !1 ? n * t.slideWidth * -1 + t.slideOffset : n * r * -1 + u,
        t.options.variableWidth === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow),
        f = t.options.rtl === !0 ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        t.options.centerMode === !0 && (i = t.slideCount <= t.options.slidesToShow || t.options.infinite === !1 ? t.$slideTrack.children(".slick-slide").eq(n) : t.$slideTrack.children(".slick-slide").eq(n + t.options.slidesToShow + 1),
        f = t.options.rtl === !0 ? i[0] ? -1 * (t.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        f += (t.$list.width() - i.outerWidth()) / 2)),
        f
    }
    ;
    t.prototype.getOption = t.prototype.slickGetOption = function(n) {
        var t = this;
        return t.options[n]
    }
    ;
    t.prototype.getNavigableIndexes = function() {
        var i, n = this, t = 0, r = 0, u = [];
        for (n.options.infinite === !1 ? i = n.slideCount : (t = -1 * n.options.slidesToScroll,
        r = -1 * n.options.slidesToScroll,
        i = 2 * n.slideCount); i > t; )
            u.push(t),
            t = r + n.options.slidesToScroll,
            r += n.options.slidesToScroll <= n.options.slidesToShow ? n.options.slidesToScroll : n.options.slidesToShow;
        return u
    }
    ;
    t.prototype.getSlick = function() {
        return this
    }
    ;
    t.prototype.getSlideCount = function() {
        var u, i, r, t = this;
        return r = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0,
        t.options.swipeToSlide === !0 ? (t.$slideTrack.find(".slick-slide").each(function(u, f) {
            if (f.offsetLeft - r + n(f).outerWidth() / 2 > -1 * t.swipeLeft)
                return (i = f,
                !1)
        }),
        u = Math.abs(n(i).attr("data-slick-index") - t.currentSlide) || 1) : t.options.slidesToScroll
    }
    ;
    t.prototype.goTo = t.prototype.slickGoTo = function(n, t) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(n)
            }
        }, t)
    }
    ;
    t.prototype.init = function(t) {
        var i = this;
        n(i.$slider).hasClass("slick-initialized") || (n(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots());
        t && i.$slider.trigger("init", [i]);
        i.options.accessibility === !0 && i.initADA()
    }
    ;
    t.prototype.initArrowEvents = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.on("click.slick", {
            message: "previous"
        }, n.changeSlide),
        n.$nextArrow.on("click.slick", {
            message: "next"
        }, n.changeSlide))
    }
    ;
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && n("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide);
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && n("li", t.$dots).on("mouseenter.slick", n.proxy(t.setPaused, t, !0)).on("mouseleave.slick", n.proxy(t.setPaused, t, !1))
    }
    ;
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents();
        t.initDotEvents();
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler);
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler);
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler);
        t.$list.on("click.slick", t.clickHandler);
        n(document).on(t.visibilityChange, n.proxy(t.visibility, t));
        t.$list.on("mouseenter.slick", n.proxy(t.setPaused, t, !0));
        t.$list.on("mouseleave.slick", n.proxy(t.setPaused, t, !1));
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        n(window).on("orientationchange.slick.slick-" + t.instanceUid, n.proxy(t.orientationChange, t));
        n(window).on("resize.slick.slick-" + t.instanceUid, n.proxy(t.resize, t));
        n("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault);
        n(window).on("load.slick.slick-" + t.instanceUid, t.setPosition);
        n(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ;
    t.prototype.initUI = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.show(),
        n.$nextArrow.show());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.show();
        n.options.autoplay === !0 && n.autoPlay()
    }
    ;
    t.prototype.keyHandler = function(n) {
        var t = this;
        n.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === n.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === n.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: "next"
            }
        }))
    }
    ;
    t.prototype.lazyLoad = function() {
        function f(t) {
            n("img[data-lazy]", t).each(function() {
                var t = n(this)
                  , i = n(this).attr("data-lazy")
                  , r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }
                ;
                r.src = i
            })
        }
        var e, r, i, u, t = this;
        t.options.centerMode === !0 ? t.options.infinite === !0 ? (i = t.currentSlide + (t.options.slidesToShow / 2 + 1),
        u = i + t.options.slidesToShow + 2) : (i = Math.max(0, t.currentSlide - (t.options.slidesToShow / 2 + 1)),
        u = 2 + (t.options.slidesToShow / 2 + 1) + t.currentSlide) : (i = t.options.infinite ? t.options.slidesToShow + t.currentSlide : t.currentSlide,
        u = i + t.options.slidesToShow,
        t.options.fade === !0 && (i > 0 && i--,
        u <= t.slideCount && u++));
        e = t.$slider.find(".slick-slide").slice(i, u);
        f(e);
        t.slideCount <= t.options.slidesToShow ? (r = t.$slider.find(".slick-slide"),
        f(r)) : t.currentSlide >= t.slideCount - t.options.slidesToShow ? (r = t.$slider.find(".slick-cloned").slice(0, t.options.slidesToShow),
        f(r)) : 0 === t.currentSlide && (r = t.$slider.find(".slick-cloned").slice(-1 * t.options.slidesToShow),
        f(r))
    }
    ;
    t.prototype.loadSlider = function() {
        var n = this;
        n.setPosition();
        n.$slideTrack.css({
            opacity: 1
        });
        n.$slider.removeClass("slick-loading");
        n.initUI();
        "progressive" === n.options.lazyLoad && n.progressiveLazyLoad()
    }
    ;
    t.prototype.next = t.prototype.slickNext = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ;
    t.prototype.orientationChange = function() {
        var n = this;
        n.checkResponsive();
        n.setPosition()
    }
    ;
    t.prototype.pause = t.prototype.slickPause = function() {
        var n = this;
        n.autoPlayClear();
        n.paused = !0
    }
    ;
    t.prototype.play = t.prototype.slickPlay = function() {
        var n = this;
        n.paused = !1;
        n.autoPlay()
    }
    ;
    t.prototype.postSlide = function(n) {
        var t = this;
        t.$slider.trigger("afterChange", [t, n]);
        t.animating = !1;
        t.setPosition();
        t.swipeLeft = null;
        t.options.autoplay === !0 && t.paused === !1 && t.autoPlay();
        t.options.accessibility === !0 && t.initADA()
    }
    ;
    t.prototype.prev = t.prototype.slickPrev = function() {
        var n = this;
        n.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ;
    t.prototype.preventDefault = function(n) {
        n.preventDefault()
    }
    ;
    t.prototype.progressiveLazyLoad = function() {
        var r, t, i = this;
        r = n("img[data-lazy]", i.$slider).length;
        r > 0 && (t = n("img[data-lazy]", i.$slider).first(),
        t.attr("src", null),
        t.attr("src", t.attr("data-lazy")).removeClass("slick-loading").load(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad();
            i.options.adaptiveHeight === !0 && i.setPosition()
        }).error(function() {
            t.removeAttr("data-lazy");
            i.progressiveLazyLoad()
        }))
    }
    ;
    t.prototype.refresh = function(t) {
        var r, u, i = this;
        u = i.slideCount - i.options.slidesToShow;
        i.options.infinite || (i.slideCount <= i.options.slidesToShow ? i.currentSlide = 0 : i.currentSlide > u && (i.currentSlide = u));
        r = i.currentSlide;
        i.destroy(!0);
        n.extend(i, i.initials, {
            currentSlide: r
        });
        i.init();
        t || i.changeSlide({
            data: {
                message: "index",
                index: r
            }
        }, !1)
    }
    ;
    t.prototype.registerBreakpoints = function() {
        var u, f, i, t = this, r = t.options.responsive || null;
        if ("array" === n.type(r) && r.length) {
            t.respondTo = t.options.respondTo || "window";
            for (u in r)
                if (i = t.breakpoints.length - 1,
                f = r[u].breakpoint,
                r.hasOwnProperty(u)) {
                    for (; i >= 0; )
                        t.breakpoints[i] && t.breakpoints[i] === f && t.breakpoints.splice(i, 1),
                        i--;
                    t.breakpoints.push(f);
                    t.breakpointSettings[f] = r[u].settings
                }
            t.breakpoints.sort(function(n, i) {
                return t.options.mobileFirst ? n - i : i - n
            })
        }
    }
    ;
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide");
        t.slideCount = t.$slides.length;
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll);
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0);
        t.registerBreakpoints();
        t.setProps();
        t.setupInfinite();
        t.buildArrows();
        t.updateArrows();
        t.initArrowEvents();
        t.buildDots();
        t.updateDots();
        t.initDotEvents();
        t.checkResponsive(!1, !0);
        t.options.focusOnSelect === !0 && n(t.$slideTrack).children().on("click.slick", t.selectHandler);
        t.setSlideClasses(0);
        t.setPosition();
        t.$slider.trigger("reInit", [t]);
        t.options.autoplay === !0 && t.focusHandler()
    }
    ;
    t.prototype.resize = function() {
        var t = this;
        n(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
        t.windowDelay = window.setTimeout(function() {
            t.windowWidth = n(window).width();
            t.checkResponsive();
            t.unslicked || t.setPosition()
        }, 50))
    }
    ;
    t.prototype.removeSlide = t.prototype.slickRemove = function(n, t, i) {
        var r = this;
        return "boolean" == typeof n ? (t = n,
        n = t === !0 ? 0 : r.slideCount - 1) : n = t === !0 ? --n : n,
        r.slideCount < 1 || 0 > n || n > r.slideCount - 1 ? !1 : (r.unload(),
        i === !0 ? r.$slideTrack.children().remove() : r.$slideTrack.children(this.options.slide).eq(n).remove(),
        r.$slides = r.$slideTrack.children(this.options.slide),
        r.$slideTrack.children(this.options.slide).detach(),
        r.$slideTrack.append(r.$slides),
        r.$slidesCache = r.$slides,
        void r.reinit())
    }
    ;
    t.prototype.setCSS = function(n) {
        var r, u, t = this, i = {};
        t.options.rtl === !0 && (n = -n);
        r = "left" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        u = "top" == t.positionProp ? Math.ceil(n) + "px" : "0px";
        i[t.positionProp] = n;
        t.transformsEnabled === !1 ? t.$slideTrack.css(i) : (i = {},
        t.cssTransitions === !1 ? (i[t.animType] = "translate(" + r + ", " + u + ")",
        t.$slideTrack.css(i)) : (i[t.animType] = "translate3d(" + r + ", " + u + ", 0px)",
        t.$slideTrack.css(i)))
    }
    ;
    t.prototype.setDimensions = function() {
        var n = this, t;
        n.options.vertical === !1 ? n.options.centerMode === !0 && n.$list.css({
            padding: "0px " + n.options.centerPadding
        }) : (n.$list.height(n.$slides.first().outerHeight(!0) * n.options.slidesToShow),
        n.options.centerMode === !0 && n.$list.css({
            padding: n.options.centerPadding + " 0px"
        }));
        n.listWidth = n.$list.width();
        n.listHeight = n.$list.height();
        n.options.vertical === !1 && n.options.variableWidth === !1 ? (n.slideWidth = Math.ceil(n.listWidth / n.options.slidesToShow),
        n.$slideTrack.width(Math.ceil(n.slideWidth * n.$slideTrack.children(".slick-slide").length))) : n.options.variableWidth === !0 ? n.$slideTrack.width(5e3 * n.slideCount) : (n.slideWidth = Math.ceil(n.listWidth),
        n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0) * n.$slideTrack.children(".slick-slide").length)));
        t = n.$slides.first().outerWidth(!0) - n.$slides.first().width();
        n.options.variableWidth === !1 && n.$slideTrack.children(".slick-slide").width(n.slideWidth - t)
    }
    ;
    t.prototype.setFade = function() {
        var i, t = this;
        t.$slides.each(function(r, u) {
            i = t.slideWidth * r * -1;
            t.options.rtl === !0 ? n(u).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : n(u).css({
                position: "relative",
                left: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        });
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }
    ;
    t.prototype.setHeight = function() {
        var n = this, t;
        1 === n.options.slidesToShow && n.options.adaptiveHeight === !0 && n.options.vertical === !1 && (t = n.$slides.eq(n.currentSlide).outerHeight(!0),
        n.$list.css("height", t))
    }
    ;
    t.prototype.setOption = t.prototype.slickSetOption = function(t, i, r) {
        var f, e, u = this;
        if ("responsive" === t && "array" === n.type(i))
            for (e in i)
                if ("array" !== n.type(u.options.responsive))
                    u.options.responsive = [i[e]];
                else {
                    for (f = u.options.responsive.length - 1; f >= 0; )
                        u.options.responsive[f].breakpoint === i[e].breakpoint && u.options.responsive.splice(f, 1),
                        f--;
                    u.options.responsive.push(i[e])
                }
        else
            u.options[t] = i;
        r === !0 && (u.unload(),
        u.reinit())
    }
    ;
    t.prototype.setPosition = function() {
        var n = this;
        n.setDimensions();
        n.setHeight();
        n.options.fade === !1 ? n.setCSS(n.getLeft(n.currentSlide)) : n.setFade();
        n.$slider.trigger("setPosition", [n])
    }
    ;
    t.prototype.setProps = function() {
        var n = this
          , t = document.body.style;
        n.positionProp = n.options.vertical === !0 ? "top" : "left";
        "top" === n.positionProp ? n.$slider.addClass("slick-vertical") : n.$slider.removeClass("slick-vertical");
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && n.options.useCSS === !0 && (n.cssTransitions = !0);
        n.options.fade && ("number" == typeof n.options.zIndex ? n.options.zIndex < 3 && (n.options.zIndex = 3) : n.options.zIndex = n.defaults.zIndex);
        void 0 !== t.OTransform && (n.animType = "OTransform",
        n.transformType = "-o-transform",
        n.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.MozTransform && (n.animType = "MozTransform",
        n.transformType = "-moz-transform",
        n.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (n.animType = !1));
        void 0 !== t.webkitTransform && (n.animType = "webkitTransform",
        n.transformType = "-webkit-transform",
        n.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (n.animType = !1));
        void 0 !== t.msTransform && (n.animType = "msTransform",
        n.transformType = "-ms-transform",
        n.transitionType = "msTransition",
        void 0 === t.msTransform && (n.animType = !1));
        void 0 !== t.transform && n.animType !== !1 && (n.animType = "transform",
        n.transformType = "transform",
        n.transitionType = "transition");
        n.transformsEnabled = n.options.useTransform && null !== n.animType && n.animType !== !1
    }
    ;
    t.prototype.setSlideClasses = function(n) {
        var u, i, r, f, t = this;
        i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        t.$slides.eq(n).addClass("slick-current");
        t.options.centerMode === !0 ? (u = Math.floor(t.options.slidesToShow / 2),
        t.options.infinite === !0 && (n >= u && n <= t.slideCount - 1 - u ? t.$slides.slice(n - u, n + u + 1).addClass("slick-active").attr("aria-hidden", "false") : (r = t.options.slidesToShow + n,
        i.slice(r - u + 1, r + u + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === n ? i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center") : n === t.slideCount - 1 && i.eq(t.options.slidesToShow).addClass("slick-center")),
        t.$slides.eq(n).addClass("slick-center")) : n >= 0 && n <= t.slideCount - t.options.slidesToShow ? t.$slides.slice(n, n + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= t.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (f = t.slideCount % t.options.slidesToShow,
        r = t.options.infinite === !0 ? t.options.slidesToShow + n : n,
        t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - n < t.options.slidesToShow ? i.slice(r - (t.options.slidesToShow - f), r + f).addClass("slick-active").attr("aria-hidden", "false") : i.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" === t.options.lazyLoad && t.lazyLoad()
    }
    ;
    t.prototype.setupInfinite = function() {
        var i, r, u, t = this;
        if (t.options.fade === !0 && (t.options.centerMode = !1),
        t.options.infinite === !0 && t.options.fade === !1 && (r = null,
        t.slideCount > t.options.slidesToShow)) {
            for (u = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow,
            i = t.slideCount; i > t.slideCount - u; i -= 1)
                r = i - 1,
                n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r - t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");
            for (i = 0; u > i; i += 1)
                r = i,
                n(t.$slides[r]).clone(!0).attr("id", "").attr("data-slick-index", r + t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");
            t.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                n(this).attr("id", "")
            })
        }
    }
    ;
    t.prototype.setPaused = function(n) {
        var t = this;
        t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = n,
        n ? t.autoPlayClear() : t.autoPlay())
    }
    ;
    t.prototype.selectHandler = function(t) {
        var i = this
          , u = n(t.target).is(".slick-slide") ? n(t.target) : n(t.target).parents(".slick-slide")
          , r = parseInt(u.attr("data-slick-index"));
        return r || (r = 0),
        i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r),
        void i.asNavFor(r)) : void i.slideHandler(r)
    }
    ;
    t.prototype.slideHandler = function(n, t, i) {
        var u, f, o, e, s = null, r = this;
        return t = t || !1,
        r.animating === !0 && r.options.waitForAnimate === !0 || r.options.fade === !0 && r.currentSlide === n || r.slideCount <= r.options.slidesToShow ? void 0 : (t === !1 && r.asNavFor(n),
        u = n,
        s = r.getLeft(u),
        e = r.getLeft(r.currentSlide),
        r.currentLeft = null === r.swipeLeft ? e : r.swipeLeft,
        r.options.infinite === !1 && r.options.centerMode === !1 && (0 > n || n > r.getDotCount() * r.options.slidesToScroll) ? void (r.options.fade === !1 && (u = r.currentSlide,
        i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u))) : r.options.infinite === !1 && r.options.centerMode === !0 && (0 > n || n > r.slideCount - r.options.slidesToScroll) ? void (r.options.fade === !1 && (u = r.currentSlide,
        i !== !0 ? r.animateSlide(e, function() {
            r.postSlide(u)
        }) : r.postSlide(u))) : (r.options.autoplay === !0 && clearInterval(r.autoPlayTimer),
        f = 0 > u ? r.slideCount % r.options.slidesToScroll != 0 ? r.slideCount - r.slideCount % r.options.slidesToScroll : r.slideCount + u : u >= r.slideCount ? r.slideCount % r.options.slidesToScroll != 0 ? 0 : u - r.slideCount : u,
        r.animating = !0,
        r.$slider.trigger("beforeChange", [r, r.currentSlide, f]),
        o = r.currentSlide,
        r.currentSlide = f,
        r.setSlideClasses(r.currentSlide),
        r.updateDots(),
        r.updateArrows(),
        r.options.fade === !0 ? (i !== !0 ? (r.fadeSlideOut(o),
        r.fadeSlide(f, function() {
            r.postSlide(f)
        })) : r.postSlide(f),
        void r.animateHeight()) : void (i !== !0 ? r.animateSlide(s, function() {
            r.postSlide(f)
        }) : r.postSlide(f))))
    }
    ;
    t.prototype.startLoad = function() {
        var n = this;
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && (n.$prevArrow.hide(),
        n.$nextArrow.hide());
        n.options.dots === !0 && n.slideCount > n.options.slidesToShow && n.$dots.hide();
        n.$slider.addClass("slick-loading")
    }
    ;
    t.prototype.swipeDirection = function() {
        var i, r, u, n, t = this;
        return i = t.touchObject.startX - t.touchObject.curX,
        r = t.touchObject.startY - t.touchObject.curY,
        u = Math.atan2(r, i),
        n = Math.round(180 * u / Math.PI),
        0 > n && (n = 360 - Math.abs(n)),
        45 >= n && n >= 0 ? t.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? t.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? t.options.rtl === !1 ? "right" : "left" : t.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    }
    ;
    t.prototype.swipeEnd = function() {
        var t, n = this;
        if (n.dragging = !1,
        n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0,
        void 0 === n.touchObject.curX)
            return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe)
            switch (n.swipeDirection()) {
            case "left":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount();
                n.slideHandler(t);
                n.currentDirection = 0;
                n.touchObject = {};
                n.$slider.trigger("swipe", [n, "left"]);
                break;
            case "right":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount();
                n.slideHandler(t);
                n.currentDirection = 1;
                n.touchObject = {};
                n.$slider.trigger("swipe", [n, "right"])
            }
        else
            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
            n.touchObject = {})
    }
    ;
    t.prototype.swipeHandler = function(n) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend"in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== n.type.indexOf("mouse")))
            switch (t.touchObject.fingerCount = n.originalEvent && void 0 !== n.originalEvent.touches ? n.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            n.data.action) {
            case "start":
                t.swipeStart(n);
                break;
            case "move":
                t.swipeMove(n);
                break;
            case "end":
                t.swipeEnd(n)
            }
    }
    ;
    t.prototype.swipeMove = function(n) {
        var f, e, r, u, i, t = this;
        return i = void 0 !== n.originalEvent ? n.originalEvent.touches : null,
        !t.dragging || i && 1 !== i.length ? !1 : (f = t.getLeft(t.currentSlide),
        t.touchObject.curX = void 0 !== i ? i[0].pageX : n.clientX,
        t.touchObject.curY = void 0 !== i ? i[0].pageY : n.clientY,
        t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))),
        t.options.verticalSwiping === !0 && (t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)))),
        e = t.swipeDirection(),
        "vertical" !== e ? (void 0 !== n.originalEvent && t.touchObject.swipeLength > 4 && n.preventDefault(),
        u = (t.options.rtl === !1 ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1),
        t.options.verticalSwiping === !0 && (u = t.touchObject.curY > t.touchObject.startY ? 1 : -1),
        r = t.touchObject.swipeLength,
        t.touchObject.edgeHit = !1,
        t.options.infinite === !1 && (0 === t.currentSlide && "right" === e || t.currentSlide >= t.getDotCount() && "left" === e) && (r = t.touchObject.swipeLength * t.options.edgeFriction,
        t.touchObject.edgeHit = !0),
        t.swipeLeft = t.options.vertical === !1 ? f + r * u : f + r * (t.$list.height() / t.listWidth) * u,
        t.options.verticalSwiping === !0 && (t.swipeLeft = f + r * u),
        t.options.fade === !0 || t.options.touchMove === !1 ? !1 : t.animating === !0 ? (t.swipeLeft = null,
        !1) : void t.setCSS(t.swipeLeft)) : void 0)
    }
    ;
    t.prototype.swipeStart = function(n) {
        var i, t = this;
        return 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {},
        !1) : (void 0 !== n.originalEvent && void 0 !== n.originalEvent.touches && (i = n.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== i ? i.pageX : n.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== i ? i.pageY : n.clientY,
        void (t.dragging = !0))
    }
    ;
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var n = this;
        null !== n.$slidesCache && (n.unload(),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slidesCache.appendTo(n.$slideTrack),
        n.reinit())
    }
    ;
    t.prototype.unload = function() {
        var t = this;
        n(".slick-cloned", t.$slider).remove();
        t.$dots && t.$dots.remove();
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove();
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove();
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ;
    t.prototype.unslick = function(n) {
        var t = this;
        t.$slider.trigger("unslick", [t, n]);
        t.destroy()
    }
    ;
    t.prototype.updateArrows = function() {
        var t, n = this;
        t = Math.floor(n.options.slidesToShow / 2);
        n.options.arrows === !0 && n.slideCount > n.options.slidesToShow && !n.options.infinite && (n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === n.currentSlide ? (n.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - n.options.slidesToShow && n.options.centerMode === !1 ? (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : n.currentSlide >= n.slideCount - 1 && n.options.centerMode === !0 && (n.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ;
    t.prototype.updateDots = function() {
        var n = this;
        null !== n.$dots && (n.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        n.$dots.find("li").eq(Math.floor(n.currentSlide / n.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ;
    t.prototype.visibility = function() {
        var n = this;
        document[n.hidden] ? (n.paused = !0,
        n.autoPlayClear()) : n.options.autoplay === !0 && (n.paused = !1,
        n.autoPlay())
    }
    ;
    t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        });
        t.$slideTrack.attr("role", "listbox");
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            n(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + i
            })
        });
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
            n(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + i,
                id: "slick-slide" + t.instanceUid + i
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar");
        t.activateADA()
    }
    ;
    t.prototype.activateADA = function() {
        var n = this;
        n.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ;
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var r = n(this);
            setTimeout(function() {
                t.isPlay && (r.is(":focus") ? (t.autoPlayClear(),
                t.paused = !0) : (t.paused = !1,
                t.autoPlay()))
            }, 0)
        })
    }
    ;
    n.fn.slick = function() {
        for (var u, i = this, r = arguments[0], f = Array.prototype.slice.call(arguments, 1), e = i.length, n = 0; e > n; n++)
            if ("object" == typeof r || "undefined" == typeof r ? i[n].slick = new t(i[n],r) : u = i[n].slick[r].apply(i[n].slick, f),
            "undefined" != typeof u)
                return u;
        return i
    }
});
!function(n, t, i, r) {
    function u(t, i) {
        this.settings = null;
        this.options = n.extend({}, u.Defaults, i);
        this.$element = n(t);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        };
        n.each(["onResize", "onThrottledResize"], n.proxy(function(t, i) {
            this._handlers[i] = n.proxy(this[i], this)
        }, this));
        n.each(u.Plugins, n.proxy(function(n, t) {
            this._plugins[n.charAt(0).toLowerCase() + n.slice(1)] = new t(this)
        }, this));
        n.each(u.Workers, n.proxy(function(t, i) {
            this._pipe.push({
                filter: i.filter,
                run: n.proxy(i.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    };
    u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    u.Type = {
        Event: "event",
        State: "state"
    };
    u.Plugins = {};
    u.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this.settings.margin || ""
              , u = !this.settings.autoWidth
              , i = this.settings.rtl
              , r = {
                width: "auto",
                "margin-left": i ? t : "",
                "margin-right": i ? "" : t
            };
            u || this.$stage.children().css(r);
            n.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var r = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , t = null
              , i = this._items.length
              , f = !this.settings.autoWidth
              , u = [];
            for (n.items = {
                merge: !1,
                width: r
            }; i--; )
                t = this._mergers[i],
                t = this.settings.mergeFit && Math.min(t, this.settings.items) || t,
                n.items.merge = t > 1 || n.items.merge,
                u[i] = f ? r * t : this._items[i].width();
            this._widths = u
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = []
              , i = this._items
              , r = this.settings
              , f = Math.max(2 * r.items, 4)
              , s = 2 * Math.ceil(i.length / 2)
              , e = r.loop && i.length ? r.rewind ? f : Math.max(f, s) : 0
              , o = ""
              , u = "";
            for (e /= 2; e--; )
                t.push(this.normalize(t.length / 2, !0)),
                o += i[t[t.length - 1]][0].outerHTML,
                t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)),
                u = i[t[t.length - 1]][0].outerHTML + u;
            this._clones = t;
            n(o).addClass("cloned").appendTo(this.$stage);
            n(u).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var u = this.settings.rtl ? 1 : -1, f = this._clones.length + this._items.length, n = -1, i = 0, r = 0, t = []; ++n < f; )
                i = t[n - 1] || 0,
                r = this._widths[this.relative(n)] + this.settings.margin,
                t.push(i + r * u);
            this._coordinates = t
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var n = this.settings.stagePadding
              , t = this._coordinates
              , i = {
                width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * n,
                "padding-left": n || "",
                "padding-right": n || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this._coordinates.length
              , i = !this.settings.autoWidth
              , r = this.$stage.children();
            if (i && n.items.merge)
                for (; t--; )
                    n.css.width = this._widths[this.relative(t)],
                    r.eq(t).css(n.css);
            else
                i && (n.css.width = n.items.width,
                r.css(n.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = n.current ? this.$stage.children().index(n.current) : 0;
            n.current = Math.max(this.minimum(), Math.min(this.maximum(), n.current));
            this.reset(n.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, i, f = this.settings.rtl ? 1 : -1, e = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + e, o = r + this.width() * f, s = [], n = 0, u = this._coordinates.length; u > n; n++)
                t = this._coordinates[n - 1] || 0,
                i = Math.abs(this._coordinates[n]) + e * f,
                (this.op(t, "<=", r) && this.op(t, ">", o) || this.op(i, "<", r) && this.op(i, ">", o)) && s.push(n);
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active");
            this.settings.center && (this.$stage.children(".center").removeClass("center"),
            this.$stage.children().eq(this.current()).addClass("center"))
        }
    }];
    u.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var t, i, u;
            t = this.$element.find("img");
            i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r;
            u = this.$element.children(i).width();
            t.length && 0 >= u && this.preloadAutoWidthImages(t)
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = n("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this.$element.is(":visible") ? this.refresh() : this.invalidate("width");
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized")
    }
    ;
    u.prototype.setup = function() {
        var u = this.viewport()
          , r = this.options.responsive
          , i = -1
          , t = null;
        r ? (n.each(r, function(n) {
            u >= n && n > i && (i = Number(n))
        }),
        t = n.extend({}, this.options, r[i]),
        "function" == typeof t.stagePadding && (t.stagePadding = t.stagePadding()),
        delete t.responsive,
        t.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + i))) : t = n.extend({}, this.options);
        this.trigger("change", {
            property: {
                name: "settings",
                value: t
            }
        });
        this._breakpoint = i;
        this.settings = t;
        this.invalidate("settings");
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ;
    u.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ;
    u.prototype.prepare = function(t) {
        var i = this.trigger("prepare", {
            content: t
        });
        return i.data || (i.data = n("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)),
        this.trigger("prepared", {
            content: i.data
        }),
        i.data
    }
    ;
    u.prototype.update = function() {
        for (var t = 0, i = this._pipe.length, r = n.proxy(function(n) {
            return this[n]
        }, this._invalidated), u = {}; i > t; )
            (this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(u),
            t++;
        this._invalidated = {};
        this.is("valid") || this.enter("valid")
    }
    ;
    u.prototype.width = function(n) {
        switch (n = n || u.Width.Default) {
        case u.Width.Inner:
        case u.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ;
    u.prototype.refresh = function() {
        this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed")
    }
    ;
    u.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer);
        this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ;
    u.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized"))) : !1 : !1
    }
    ;
    u.prototype.registerEventHandlers = function() {
        n.support.transition && this.$stage.on(n.support.transition.end + ".owl.core", n.proxy(this.onTransitionEnd, this));
        this.settings.responsive !== !1 && this.on(t, "resize", this._handlers.onThrottledResize);
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", n.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        }));
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", n.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", n.proxy(this.onDragEnd, this)))
    }
    ;
    u.prototype.onDragStart = function(t) {
        var r = null;
        3 !== t.which && (n.support.transform ? (r = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
        r = {
            x: r[16 === r.length ? 12 : 4],
            y: r[16 === r.length ? 13 : 5]
        }) : (r = this.$stage.position(),
        r = {
            x: this.settings.rtl ? r.left + this.$stage.width() - this.width() + this.settings.margin : r.left,
            y: r.top
        }),
        this.is("animating") && (n.support.transform ? this.animate(r.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = n(t.target),
        this._drag.stage.start = r,
        this._drag.stage.current = r,
        this._drag.pointer = this.pointer(t),
        n(i).on("mouseup.owl.core touchend.owl.core", n.proxy(this.onDragEnd, this)),
        n(i).one("mousemove.owl.core touchmove.owl.core", n.proxy(function(t) {
            var r = this.difference(this._drag.pointer, this.pointer(t));
            n(i).on("mousemove.owl.core touchmove.owl.core", n.proxy(this.onDragMove, this));
            Math.abs(r.x) < Math.abs(r.y) && this.is("valid") || (t.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ;
    u.prototype.onDragMove = function(n) {
        var t = null
          , i = null
          , u = null
          , f = this.difference(this._drag.pointer, this.pointer(n))
          , r = this.difference(this._drag.stage.start, f);
        this.is("dragging") && (n.preventDefault(),
        this.settings.loop ? (t = this.coordinates(this.minimum()),
        i = this.coordinates(this.maximum() + 1) - t,
        r.x = ((r.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        u = this.settings.pullDrag ? f.x / -5 : 0,
        r.x = Math.max(Math.min(r.x, t + u), i + u)),
        this._drag.stage.current = r,
        this.animate(r.x))
    }
    ;
    u.prototype.onDragEnd = function(t) {
        var r = this.difference(this._drag.pointer, this.pointer(t))
          , f = this._drag.stage.current
          , u = r.x > 0 ^ this.settings.rtl ? "left" : "right";
        n(i).off(".owl.core");
        this.$element.removeClass(this.options.grabClass);
        (0 !== r.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(f.x, 0 !== r.x ? u : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = u,
        (Math.abs(r.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        }));
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ;
    u.prototype.closest = function(t, i) {
        var r = -1
          , u = 30
          , e = this.width()
          , f = this.coordinates();
        return this.settings.freeDrag || n.each(f, n.proxy(function(n, o) {
            return "left" === i && t > o - u && o + u > t ? r = n : "right" === i && t > o - e - u && o - e + u > t ? r = n + 1 : this.op(t, "<", o) && this.op(t, ">", f[n + 1] || o - e) && (r = "left" === i ? n + 1 : n),
            -1 === r
        }, this)),
        this.settings.loop || (this.op(t, ">", f[this.minimum()]) ? r = t = this.minimum() : this.op(t, "<", f[this.maximum()]) && (r = t = this.maximum())),
        r
    }
    ;
    u.prototype.animate = function(t) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        i && (this.enter("animating"),
        this.trigger("translate"));
        n.support.transform3d && n.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, n.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }
    ;
    u.prototype.is = function(n) {
        return this._states.current[n] && this._states.current[n] > 0
    }
    ;
    u.prototype.current = function(n) {
        if (n === r)
            return this._current;
        if (0 === this._items.length)
            return r;
        if (n = this.normalize(n),
        this._current !== n) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: n
                }
            });
            t.data !== r && (n = this.normalize(t.data));
            this._current = n;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ;
    u.prototype.invalidate = function(t) {
        return "string" === n.type(t) && (this._invalidated[t] = !0,
        this.is("valid") && this.leave("valid")),
        n.map(this._invalidated, function(n, t) {
            return t
        })
    }
    ;
    u.prototype.reset = function(n) {
        n = this.normalize(n);
        n !== r && (this._speed = 0,
        this._current = n,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(n)),
        this.release(["translate", "translated"]))
    }
    ;
    u.prototype.normalize = function(n, t) {
        var i = this._items.length
          , u = t ? 0 : this._clones.length;
        return !this.isNumeric(n) || 1 > i ? n = r : (0 > n || n >= i + u) && (n = ((n - u / 2) % i + i) % i + u / 2),
        n
    }
    ;
    u.prototype.relative = function(n) {
        return n -= this._clones.length / 2,
        this.normalize(n, !0)
    }
    ;
    u.prototype.maximum = function(n) {
        var t, u, f, i = this.settings, r = this._coordinates.length;
        if (i.loop)
            r = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge) {
            for (t = this._items.length,
            u = this._items[--t].width(),
            f = this.$element.width(); t-- && (u += this._items[t].width() + this.settings.margin,
            !(u > f)); )
                ;
            r = t + 1
        } else
            r = i.center ? this._items.length - 1 : this._items.length - i.items;
        return n && (r -= this._clones.length / 2),
        Math.max(r, 0)
    }
    ;
    u.prototype.minimum = function(n) {
        return n ? 0 : this._clones.length / 2
    }
    ;
    u.prototype.items = function(n) {
        return n === r ? this._items.slice() : (n = this.normalize(n, !0),
        this._items[n])
    }
    ;
    u.prototype.mergers = function(n) {
        return n === r ? this._mergers.slice() : (n = this.normalize(n, !0),
        this._mergers[n])
    }
    ;
    u.prototype.clones = function(t) {
        var i = this._clones.length / 2
          , f = i + this._items.length
          , u = function(n) {
            return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2
        };
        return t === r ? n.map(this._clones, function(n, t) {
            return u(t)
        }) : n.map(this._clones, function(n, i) {
            return n === t ? u(i) : null
        })
    }
    ;
    u.prototype.speed = function(n) {
        return n !== r && (this._speed = n),
        this._speed
    }
    ;
    u.prototype.coordinates = function(t) {
        var i, f = 1, u = t - 1;
        return t === r ? n.map(this._coordinates, n.proxy(function(n, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (f = -1,
        u = t + 1),
        i = this._coordinates[t],
        i += (this.width() - i + (this._coordinates[u] || 0)) / 2 * f) : i = this._coordinates[u] || 0,
        i = Math.ceil(i))
    }
    ;
    u.prototype.duration = function(n, t, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - n), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }
    ;
    u.prototype.to = function(n, t) {
        var f = this.current()
          , r = null
          , i = n - this.relative(f)
          , s = (i > 0) - (0 > i)
          , e = this._items.length
          , o = this.minimum()
          , u = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(i) > e / 2 && (i += -1 * s * e),
        n = f + i,
        r = ((n - o) % e + e) % e + o,
        r !== n && u >= r - i && r - i > 0 && (f = r - i,
        n = r,
        this.reset(f))) : this.settings.rewind ? (u += 1,
        n = (n % u + u) % u) : n = Math.max(o, Math.min(u, n));
        this.speed(this.duration(f, n, t));
        this.current(n);
        this.$element.is(":visible") && this.update()
    }
    ;
    u.prototype.next = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) + 1, n)
    }
    ;
    u.prototype.prev = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) - 1, n)
    }
    ;
    u.prototype.onTransitionEnd = function(n) {
        return n !== r && (n.stopPropagation(),
        (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"),
        void this.trigger("translated"))
    }
    ;
    u.prototype.viewport = function() {
        var r;
        if (this.options.responsiveBaseElement !== t)
            r = n(this.options.responsiveBaseElement).width();
        else if (t.innerWidth)
            r = t.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth)
                throw "Can not detect viewport width.";
            r = i.documentElement.clientWidth
        }
        return r
    }
    ;
    u.prototype.replace = function(t) {
        this.$stage.empty();
        this._items = [];
        t && (t = t instanceof jQuery ? t : n(t));
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector));
        t.filter(function() {
            return 1 === this.nodeType
        }).each(n.proxy(function(n, t) {
            t = this.prepare(t);
            this.$stage.append(t);
            this._items.push(t);
            this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    }
    ;
    u.prototype.add = function(t, i) {
        var u = this.relative(this._current);
        i = i === r ? this._items.length : this.normalize(i, !0);
        t = t instanceof jQuery ? t : n(t);
        this.trigger("add", {
            content: t,
            position: i
        });
        t = this.prepare(t);
        0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t),
        0 !== this._items.length && this._items[i - 1].after(t),
        this._items.push(t),
        this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t),
        this._items.splice(i, 0, t),
        this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1));
        this._items[u] && this.reset(this._items[u].index());
        this.invalidate("items");
        this.trigger("added", {
            content: t,
            position: i
        })
    }
    ;
    u.prototype.remove = function(n) {
        n = this.normalize(n, !0);
        n !== r && (this.trigger("remove", {
            content: this._items[n],
            position: n
        }),
        this._items[n].remove(),
        this._items.splice(n, 1),
        this._mergers.splice(n, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: n
        }))
    }
    ;
    u.prototype.preloadAutoWidthImages = function(t) {
        t.each(n.proxy(function(t, i) {
            this.enter("pre-loading");
            i = n(i);
            n(new Image).one("load", n.proxy(function(n) {
                i.attr("src", n.target.src);
                i.css("opacity", 1);
                this.leave("pre-loading");
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }
    ;
    u.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        n(i).off(".owl.core");
        this.settings.responsive !== !1 && (t.clearTimeout(this.resizeTimer),
        this.off(t, "resize", this._handlers.onThrottledResize));
        for (var r in this._plugins)
            this._plugins[r].destroy();
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ;
    u.prototype.op = function(n, t, i) {
        var r = this.settings.rtl;
        switch (t) {
        case "<":
            return r ? n > i : i > n;
        case ">":
            return r ? i > n : n > i;
        case ">=":
            return r ? i >= n : n >= i;
        case "<=":
            return r ? n >= i : i >= n
        }
    }
    ;
    u.prototype.on = function(n, t, i, r) {
        n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, i)
    }
    ;
    u.prototype.off = function(n, t, i, r) {
        n.removeEventListener ? n.removeEventListener(t, i, r) : n.detachEvent && n.detachEvent("on" + t, i)
    }
    ;
    u.prototype.trigger = function(t, i, r) {
        var o = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , e = n.camelCase(n.grep(["on", t, r], function(n) {
            return n
        }).join("-").toLowerCase())
          , f = n.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), n.extend({
            relatedTarget: this
        }, o, i));
        return this._supress[t] || (n.each(this._plugins, function(n, t) {
            t.onTrigger && t.onTrigger(f)
        }),
        this.register({
            type: u.Type.Event,
            name: t
        }),
        this.$element.trigger(f),
        this.settings && "function" == typeof this.settings[e] && this.settings[e].call(this, f)),
        f
    }
    ;
    u.prototype.enter = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t] === r && (this._states.current[t] = 0);
            this._states.current[t]++
        }, this))
    }
    ;
    u.prototype.leave = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t]--
        }, this))
    }
    ;
    u.prototype.register = function(t) {
        if (t.type === u.Type.Event) {
            if (n.event.special[t.name] || (n.event.special[t.name] = {}),
            !n.event.special[t.name].owl) {
                var i = n.event.special[t.name]._default;
                n.event.special[t.name]._default = function(n) {
                    return !i || !i.apply || n.namespace && -1 !== n.namespace.indexOf("owl") ? n.namespace && n.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }
                ;
                n.event.special[t.name].owl = !0
            }
        } else
            t.type === u.Type.State && (this._states.tags[t.name] = this._states.tags[t.name] ? this._states.tags[t.name].concat(t.tags) : t.tags,
            this._states.tags[t.name] = n.grep(this._states.tags[t.name], n.proxy(function(i, r) {
                return n.inArray(i, this._states.tags[t.name]) === r
            }, this)))
    }
    ;
    u.prototype.suppress = function(t) {
        n.each(t, n.proxy(function(n, t) {
            this._supress[t] = !0
        }, this))
    }
    ;
    u.prototype.release = function(t) {
        n.each(t, n.proxy(function(n, t) {
            delete this._supress[t]
        }, this))
    }
    ;
    u.prototype.pointer = function(n) {
        var i = {
            x: null,
            y: null
        };
        return n = n.originalEvent || n || t.event,
        n = n.touches && n.touches.length ? n.touches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
        n.pageX ? (i.x = n.pageX,
        i.y = n.pageY) : (i.x = n.clientX,
        i.y = n.clientY),
        i
    }
    ;
    u.prototype.isNumeric = function(n) {
        return !isNaN(parseFloat(n))
    }
    ;
    u.prototype.difference = function(n, t) {
        return {
            x: n.x - t.x,
            y: n.y - t.y
        }
    }
    ;
    n.fn.owlCarousel = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var f = n(this)
              , r = f.data("owl.carousel");
            r || (r = new u(this,"object" == typeof t && t),
            f.data("owl.carousel", r),
            n.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
                r.register({
                    type: u.Type.Event,
                    name: i
                });
                r.$element.on(i + ".owl.carousel.core", n.proxy(function(n) {
                    n.namespace && n.relatedTarget !== this && (this.suppress([i]),
                    r[i].apply(this, [].slice.call(arguments, 1)),
                    this.release([i]))
                }, r))
            }));
            "string" == typeof t && "_" !== t.charAt(0) && r[t].apply(r, i)
        })
    }
    ;
    n.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
function(n, t) {
    var i = function(t) {
        this._core = t;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    };
    i.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"),
        this._interval = t.setInterval(n.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ;
    i.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ;
    i.prototype.destroy = function() {
        var n, i;
        t.clearInterval(this._interval);
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this._core = t;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": n.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var i = this._core.settings, f = i.center && Math.ceil(i.items / 2) || i.items, e = i.center && -1 * f || 0, u = (t.property && t.property.value !== r ? t.property.value : this._core.current()) + e, o = this._core.clones().length, s = n.proxy(function(n, t) {
                        this.load(t)
                    }, this); e++ < f; )
                        this.load(o / 2 + this._core.relative(u)),
                        o && n.each(this._core.clones(this._core.relative(u)), s),
                        u++
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    u.Defaults = {
        lazyLoad: !1
    };
    u.prototype.load = function(i) {
        var r = this._core.$stage.children().eq(i)
          , u = r && r.find(".owl-lazy");
        !u || n.inArray(r.get(0), this._loaded) > -1 || (u.each(n.proxy(function(i, r) {
            var e, u = n(r), f = t.devicePixelRatio > 1 && u.attr("data-src-retina") || u.attr("data-src");
            this._core.trigger("load", {
                element: u,
                url: f
            }, "lazy");
            u.is("img") ? u.one("load.owl.lazy", n.proxy(function() {
                u.css("opacity", 1);
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this)).attr("src", f) : (e = new Image,
            e.onload = n.proxy(function() {
                u.css({
                    "background-image": "url(" + f + ")",
                    opacity: "1"
                });
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this),
            e.src = f)
        }, this)),
        this._loaded.push(r.get(0)))
    }
    ;
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers)
            this._core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Lazy = u
}(window.Zepto || window.jQuery, window, document),
function(n) {
    var t = function(i) {
        this._core = i;
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && "position" == n.property.name && this.update()
            }, this),
            "loaded.owl.lazy": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && n.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    t.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    };
    t.prototype.update = function() {
        var t = this._core._current
          , u = t + this._core.settings.items
          , f = this._core.$stage.children().toArray().slice(t, u)
          , i = []
          , r = 0;
        n.each(f, function(t, r) {
            i.push(n(r).height())
        });
        r = Math.max.apply(null, i);
        this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }
    ;
    t.prototype.destroy = function() {
        var n, t;
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.video && this.isInFullScreen() && n.preventDefault()
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" === n.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find(".owl-video");
                    i.length && (i.css("display", "none"),
                    this.fetch(i, n(t.content)))
                }
            }, this)
        };
        this._core.options = n.extend({}, r.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", n.proxy(function(n) {
            this.play(n)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    };
    r.prototype.fetch = function(n, t) {
        var u = function() {
            return n.attr("data-vimeo-id") ? "vimeo" : n.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }()
          , i = n.attr("data-vimeo-id") || n.attr("data-youtube-id") || n.attr("data-vzaar-id")
          , f = n.attr("data-width") || this._core.settings.videoWidth
          , e = n.attr("data-height") || this._core.settings.videoHeight
          , r = n.attr("href");
        if (!r)
            throw new Error("Missing video URL.");
        if (i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        i[3].indexOf("youtu") > -1)
            u = "youtube";
        else if (i[3].indexOf("vimeo") > -1)
            u = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            u = "vzaar"
        }
        i = i[6];
        this._videos[r] = {
            type: u,
            id: i,
            width: f,
            height: e
        };
        t.attr("data-video", r);
        this.thumbnail(n, this._videos[r])
    }
    ;
    r.prototype.thumbnail = function(t, i) {
        var o, s, r, c = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "", f = t.find("img"), e = "src", h = "", l = this._core.settings, u = function(n) {
            s = '<div class="owl-video-play-icon"><\/div>';
            o = l.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + e + '="' + n + '"><\/div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + n + ')"><\/div>';
            t.after(o);
            t.after(s)
        };
        return t.wrap('<div class="owl-video-wrapper"' + c + "><\/div>"),
        this._core.settings.lazyLoad && (e = "data-src",
        h = "owl-lazy"),
        f.length ? (u(f.attr(e)),
        f.remove(),
        !1) : void ("youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg",
        u(r)) : "vimeo" === i.type ? n.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n[0].thumbnail_large;
                u(r)
            }
        }) : "vzaar" === i.type && n.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n.framegrab_url;
                u(r)
            }
        }))
    }
    ;
    r.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video")
    }
    ;
    r.prototype.play = function(t) {
        var u, o = n(t.target), r = o.closest("." + this._core.settings.itemClass), i = this._videos[r.attr("data-video")], f = i.width || "100%", e = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        r = this._core.items(this._core.relative(r.index())),
        this._core.reset(r.index()),
        "youtube" === i.type ? u = '<iframe width="' + f + '" height="' + e + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&v=" + i.id + '" frameborder="0" allowfullscreen><\/iframe>' : "vimeo" === i.type ? u = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + f + '" height="' + e + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>' : "vzaar" === i.type && (u = '<iframe frameborder="0"height="' + e + '"width="' + f + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"><\/iframe>'),
        n('<div class="owl-video-frame">' + u + "<\/div>").insertAfter(r.find(".owl-video")),
        this._playing = r.addClass("owl-video-playing"))
    }
    ;
    r.prototype.isInFullScreen = function() {
        var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return t && n(t).parent().hasClass("owl-video-frame")
    }
    ;
    r.prototype.destroy = function() {
        var n, t;
        this._core.$element.off("click.owl.video");
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this.core = t;
        this.core.options = n.extend({}, u.Defaults, this.core.options);
        this.swapping = !0;
        this.previous = r;
        this.next = r;
        this.handlers = {
            "change.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" == n.property.name && (this.previous = this.core.current(),
                this.next = n.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function(n) {
                n.namespace && (this.swapping = "translated" == n.type)
            }, this),
            "translate.owl.carousel": n.proxy(function(n) {
                n.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    u.Defaults = {
        animateOut: !1,
        animateIn: !1
    };
    u.prototype.swap = function() {
        if (1 === this.core.settings.items && n.support.animation && n.support.transition) {
            this.core.speed(0);
            var t, i = n.proxy(this.clear, this), f = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), r = this.core.settings.animateIn, u = this.core.settings.animateOut;
            this.core.current() !== this.previous && (u && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            f.one(n.support.animation.end, i).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(u)),
            r && e.one(n.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
        }
    }
    ;
    u.prototype.clear = function(t) {
        n(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd()
    }
    ;
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers)
            this.core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Animate = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._timeout = null;
        this._paused = !1;
        this._handlers = {
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "settings" === n.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : n.namespace && "position" === n.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": n.proxy(function(n, t, i) {
                n.namespace && this.play(t, i)
            }, this),
            "stop.owl.autoplay": n.proxy(function(n) {
                n.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = n.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    };
    r.prototype.play = function() {
        this._paused = !1;
        this._core.is("rotating") || (this._core.enter("rotating"),
        this._setAutoPlayInterval())
    }
    ;
    r.prototype._getNextTimeout = function(r, u) {
        return this._timeout && t.clearTimeout(this._timeout),
        t.setTimeout(n.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(u || this._core.settings.autoplaySpeed)
        }, this), r || this._core.settings.autoplayTimeout)
    }
    ;
    r.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }
    ;
    r.prototype.stop = function() {
        this._core.is("rotating") && (t.clearTimeout(this._timeout),
        this._core.leave("rotating"))
    }
    ;
    r.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }
    ;
    r.prototype.destroy = function() {
        var n, t;
        this.stop();
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "use strict";
    var t = function(i) {
        this._core = i;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "<\/div>")
            }, this),
            "added.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 1)
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" == n.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    t.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    };
    t.prototype.initialize = function() {
        var i, t = this._core.settings;
        this._controls.$relative = (t.navContainer ? n(t.navContainer) : n("<div>").addClass(t.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = n("<" + t.navElement + ">").addClass(t.navClass[0]).html(t.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function() {
            this.prev(t.navSpeed)
        }, this));
        this._controls.$next = n("<" + t.navElement + ">").addClass(t.navClass[1]).html(t.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function() {
            this.next(t.navSpeed)
        }, this));
        t.dotsData || (this._templates = [n("<div>").addClass(t.dotClass).append(n("<span>")).prop("outerHTML")]);
        this._controls.$absolute = (t.dotsContainer ? n(t.dotsContainer) : n("<div>").addClass(t.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "div", n.proxy(function(i) {
            var r = n(i.target).parent().is(this._controls.$absolute) ? n(i.target).index() : n(i.target).parent().index();
            i.preventDefault();
            this.to(r, t.dotsSpeed)
        }, this));
        for (i in this._overrides)
            this._core[i] = n.proxy(this[i], this)
    }
    ;
    t.prototype.destroy = function() {
        var n, r, t, i;
        for (n in this._handlers)
            this.$element.off(n, this._handlers[n]);
        for (r in this._controls)
            this._controls[r].remove();
        for (i in this.overides)
            this._core[i] = this._overrides[i];
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    t.prototype.update = function() {
        var t, i, f, r = this._core.clones().length / 2, o = r + this._core.items().length, u = this._core.maximum(!0), n = this._core.settings, e = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)),
        n.dots || "page" == n.slideBy)
            for (this._pages = [],
            t = r,
            i = 0,
            f = 0; o > t; t++) {
                if (i >= e || 0 === i) {
                    if (this._pages.push({
                        start: Math.min(u, t - r),
                        end: t - r + e - 1
                    }),
                    Math.min(u, t - r) === u)
                        break;
                    i = 0;
                    ++f
                }
                i += this._core.mergers(this._core.relative(t))
            }
    }
    ;
    t.prototype.draw = function() {
        var i, t = this._core.settings, r = this._core.items().length <= t.items, u = this._core.relative(this._core.current()), f = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || r);
        t.nav && (this._controls.$previous.toggleClass("disabled", !f && u <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !f && u >= this._core.maximum(!0)));
        this._controls.$absolute.toggleClass("disabled", !t.dots || r);
        t.dots && (i = this._pages.length - this._controls.$absolute.children().length,
        t.dotsData && 0 !== i ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(new Array(i + 1).join(this._templates[0])) : 0 > i && this._controls.$absolute.children().slice(i).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"))
    }
    ;
    t.prototype.onTrigger = function(t) {
        var i = this._core.settings;
        t.page = {
            index: n.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }
    ;
    t.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return n.grep(this._pages, n.proxy(function(n) {
            return n.start <= t && n.end >= t
        }, this)).pop()
    }
    ;
    t.prototype.getPosition = function(t) {
        var i, r, u = this._core.settings;
        return "page" == u.slideBy ? (i = n.inArray(this.current(), this._pages),
        r = this._pages.length,
        t ? ++i : --i,
        i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()),
        r = this._core.items().length,
        t ? i += u.slideBy : i -= u.slideBy),
        i
    }
    ;
    t.prototype.next = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }
    ;
    t.prototype.prev = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }
    ;
    t.prototype.to = function(t, i, r) {
        var u;
        !r && this._pages.length ? (u = this._pages.length,
        n.proxy(this._overrides.to, this._core)(this._pages[(t % u + u) % u].start, i)) : n.proxy(this._overrides.to, this._core)(t, i)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    "use strict";
    var u = function(i) {
        this._core = i;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && n(t).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i)
                        return;
                    this._hashes[i] = t.content
                }
            }, this),
            "changed.owl.carousel": n.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var u = this._core.items(this._core.relative(this._core.current()))
                      , r = n.map(this._hashes, function(n, t) {
                        return n === u ? t : null
                    }).join();
                    if (!r || t.location.hash.slice(1) === r)
                        return;
                    t.location.hash = r
                }
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this.$element.on(this._handlers);
        n(t).on("hashchange.owl.navigation", n.proxy(function() {
            var i = t.location.hash.substring(1)
              , u = this._core.$stage.children()
              , n = this._hashes[i] && u.index(this._hashes[i]);
            n !== r && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    u.Defaults = {
        URLhashListener: !1
    };
    u.prototype.destroy = function() {
        var i, r;
        n(t).off("hashchange.owl.navigation");
        for (i in this._handlers)
            this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this))
            "function" != typeof this[r] && (this[r] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Hash = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    function u(t, i) {
        var u = !1
          , f = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + h.join(f + " ") + f).split(" "), function(n, t) {
            if (s[t] !== r)
                return (u = i ? t : !0,
                !1)
        }),
        u
    }
    function e(n) {
        return u(n, !0)
    }
    var s = n("<support>").get(0).style
      , h = "Webkit Moz O ms".split(" ")
      , o = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , f = {
        csstransforms: function() {
            return !!u("transform")
        },
        csstransforms3d: function() {
            return !!u("perspective")
        },
        csstransitions: function() {
            return !!u("transition")
        },
        cssanimations: function() {
            return !!u("animation")
        }
    };
    f.csstransitions() && (n.support.transition = new String(e("transition")),
    n.support.transition.end = o.transition.end[n.support.transition]);
    f.cssanimations() && (n.support.animation = new String(e("animation")),
    n.support.animation.end = o.animation.end[n.support.animation]);
    f.csstransforms() && (n.support.transform = new String(e("transform")),
    n.support.transform3d = f.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
!function() {
    "use strict";
    var n, t = function(i, r) {
        function w(n) {
            return Math.floor(n)
        }
        function rt() {
            var n = u.params.autoplay
              , t = u.slides.eq(u.activeIndex);
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || u.params.autoplay);
            u.autoplayTimeoutId = setTimeout(function() {
                u.params.loop ? (u.fixLoop(),
                u._slideNext(),
                u.emit("onAutoplay", u)) : u.isEnd ? r.autoplayStopOnLast ? u.stopAutoplay() : (u._slideTo(0),
                u.emit("onAutoplay", u)) : (u._slideNext(),
                u.emit("onAutoplay", u))
            }, n)
        }
        function ut(t, i) {
            var r = n(t.target), u;
            if (!r.is(i))
                if ("string" == typeof i)
                    r = r.parents(i);
                else if (i.nodeType)
                    return r.parents().each(function(n, t) {
                        t === i && (u = i)
                    }),
                    u ? i : void 0;
            if (0 !== r.length)
                return r[0]
        }
        function ft(n, t) {
            t = t || {};
            var r = window.MutationObserver || window.WebkitMutationObserver
              , i = new r(function(n) {
                n.forEach(function(n) {
                    u.onResize(!0);
                    u.emit("onObserverUpdate", u, n)
                })
            }
            );
            i.observe(n, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            });
            u.observers.push(i)
        }
        function vt(n) {
            var t, o, s, e, r;
            if ((n.originalEvent && (n = n.originalEvent),
            t = n.keyCode || n.charCode,
            !u.params.allowSwipeToNext && (u.isHorizontal() && 39 === t || !u.isHorizontal() && 40 === t)) || !u.params.allowSwipeToPrev && (u.isHorizontal() && 37 === t || !u.isHorizontal() && 38 === t))
                return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    if (o = !1,
                    u.container.parents("." + u.params.slideClass).length > 0 && 0 === u.container.parents("." + u.params.slideActiveClass).length)
                        return;
                    var f = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }
                      , h = window.innerWidth
                      , c = window.innerHeight
                      , i = u.container.offset();
                    for (u.rtl && (i.left = i.left - u.container[0].scrollLeft),
                    s = [[i.left, i.top], [i.left + u.width, i.top], [i.left, i.top + u.height], [i.left + u.width, i.top + u.height]],
                    e = 0; e < s.length; e++)
                        r = s[e],
                        r[0] >= f.left && r[0] <= f.left + h && r[1] >= f.top && r[1] <= f.top + c && (o = !0);
                    if (!o)
                        return
                }
                u.isHorizontal() ? (37 !== t && 39 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                (39 === t && !u.rtl || 37 === t && u.rtl) && u.slideNext(),
                (37 === t && !u.rtl || 39 === t && u.rtl) && u.slidePrev()) : (38 !== t && 40 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                40 === t && u.slideNext(),
                38 === t && u.slidePrev());
                u.emit("onKeyPress", u, t)
            }
        }
        function bt(n) {
            var u = 0
              , t = 0
              , i = 0
              , r = 0;
            return "detail"in n && (t = n.detail),
            "wheelDelta"in n && (t = -n.wheelDelta / 120),
            "wheelDeltaY"in n && (t = -n.wheelDeltaY / 120),
            "wheelDeltaX"in n && (u = -n.wheelDeltaX / 120),
            "axis"in n && n.axis === n.HORIZONTAL_AXIS && (u = t,
            t = 0),
            i = 10 * u,
            r = 10 * t,
            "deltaY"in n && (r = n.deltaY),
            "deltaX"in n && (i = n.deltaX),
            (i || r) && n.deltaMode && (1 === n.deltaMode ? (i *= 40,
            r *= 40) : (i *= 800,
            r *= 800)),
            i && !u && (u = i < 1 ? -1 : 1),
            r && !t && (t = r < 1 ? -1 : 1),
            {
                spinX: u,
                spinY: t,
                pixelX: i,
                pixelY: r
            }
        }
        function yt(n) {
            n.originalEvent && (n = n.originalEvent);
            var i = 0
              , f = u.rtl ? -1 : 1
              , t = bt(n);
            if (u.params.mousewheelForceToAxis)
                if (u.isHorizontal()) {
                    if (!(Math.abs(t.pixelX) > Math.abs(t.pixelY)))
                        return;
                    i = t.pixelX * f
                } else {
                    if (!(Math.abs(t.pixelY) > Math.abs(t.pixelX)))
                        return;
                    i = t.pixelY
                }
            else
                i = Math.abs(t.pixelX) > Math.abs(t.pixelY) ? -t.pixelX * f : -t.pixelY;
            if (0 !== i) {
                if (u.params.mousewheelInvert && (i = -i),
                u.params.freeMode) {
                    var r = u.getWrapperTranslate() + i * u.params.mousewheelSensitivity
                      , e = u.isBeginning
                      , o = u.isEnd;
                    if (r >= u.minTranslate() && (r = u.minTranslate()),
                    r <= u.maxTranslate() && (r = u.maxTranslate()),
                    u.setWrapperTransition(0),
                    u.setWrapperTranslate(r),
                    u.updateProgress(),
                    u.updateActiveIndex(),
                    (!e && u.isBeginning || !o && u.isEnd) && u.updateClasses(),
                    u.params.freeModeSticky ? (clearTimeout(u.mousewheel.timeout),
                    u.mousewheel.timeout = setTimeout(function() {
                        u.slideReset()
                    }, 300)) : u.params.lazyLoading && u.lazy && u.lazy.load(),
                    u.emit("onScroll", u, n),
                    u.params.autoplay && u.params.autoplayDisableOnInteraction && u.stopAutoplay(),
                    0 === r || r === u.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - u.mousewheel.lastScrollTime > 60)
                        if (i < 0)
                            if (u.isEnd && !u.params.loop || u.animating) {
                                if (u.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                u.slideNext(),
                                u.emit("onScroll", u, n);
                        else if (u.isBeginning && !u.params.loop || u.animating) {
                            if (u.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            u.slidePrev(),
                            u.emit("onScroll", u, n);
                    u.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                !1
            }
        }
        function pt(t, i) {
            t = n(t);
            var e, r, f, o = u.rtl ? -1 : 1;
            e = t.attr("data-swiper-parallax") || "0";
            r = t.attr("data-swiper-parallax-x");
            f = t.attr("data-swiper-parallax-y");
            r || f ? (r = r || "0",
            f = f || "0") : u.isHorizontal() ? (r = e,
            f = "0") : (f = e,
            r = "0");
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * o + "%" : r * i * o + "px";
            f = f.indexOf("%") >= 0 ? parseInt(f, 10) * i + "%" : f * i + "px";
            t.transform("translate3d(" + r + ", " + f + ",0px)")
        }
        function et(n) {
            return 0 !== n.indexOf("on") && (n = n[0] !== n[0].toUpperCase() ? "on" + n[0].toUpperCase() + n.substring(1) : "on" + n),
            n
        }
        var v, wt, y, e, ot, s, b, u, st, tt, it, lt, at;
        if (!(this instanceof t))
            return new t(i,r);
        v = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        };
        wt = r && r.virtualTranslate;
        r = r || {};
        y = {};
        for (e in r)
            if ("object" != typeof r[e] || null === r[e] || r[e].nodeType || r[e] === window || r[e] === document || "undefined" != typeof Dom7 && r[e]instanceof Dom7 || "undefined" != typeof jQuery && r[e]instanceof jQuery)
                y[e] = r[e];
            else {
                y[e] = {};
                for (ot in r[e])
                    y[e][ot] = r[e][ot]
            }
        for (s in v)
            if (void 0 === r[s])
                r[s] = v[s];
            else if ("object" == typeof r[s])
                for (b in v[s])
                    void 0 === r[s][b] && (r[s][b] = v[s][b]);
        if (u = this,
        u.params = r,
        u.originalParams = y,
        u.classNames = [],
        void 0 !== n && "undefined" != typeof Dom7 && (n = Dom7),
        (void 0 !== n || (n = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (u.$ = n,
        u.currentBreakpoint = void 0,
        u.getActiveBreakpoint = function() {
            var n, i, t, r;
            if (!u.params.breakpoints)
                return !1;
            i = !1;
            t = [];
            for (n in u.params.breakpoints)
                u.params.breakpoints.hasOwnProperty(n) && t.push(n);
            for (t.sort(function(n, t) {
                return parseInt(n, 10) > parseInt(t, 10)
            }),
            r = 0; r < t.length; r++)
                (n = t[r]) >= window.innerWidth && !i && (i = n);
            return i || "max"
        }
        ,
        u.setBreakpoint = function() {
            var n = u.getActiveBreakpoint(), t, r, i;
            if (n && u.currentBreakpoint !== n) {
                t = n in u.params.breakpoints ? u.params.breakpoints[n] : u.originalParams;
                r = u.params.loop && t.slidesPerView !== u.params.slidesPerView;
                for (i in t)
                    u.params[i] = t[i];
                u.currentBreakpoint = n;
                r && u.destroyLoop && u.reLoop(!0)
            }
        }
        ,
        u.params.breakpoints && u.setBreakpoint(),
        u.container = n(i),
        0 !== u.container.length)) {
            if (u.container.length > 1)
                return st = [],
                u.container.each(function() {
                    st.push(new t(this,r))
                }),
                st;
            u.container[0].swiper = u;
            u.container.data("swiper", u);
            u.classNames.push(u.params.containerModifierClass + u.params.direction);
            u.params.freeMode && u.classNames.push(u.params.containerModifierClass + "free-mode");
            u.support.flexbox || (u.classNames.push(u.params.containerModifierClass + "no-flexbox"),
            u.params.slidesPerColumn = 1);
            u.params.autoHeight && u.classNames.push(u.params.containerModifierClass + "autoheight");
            (u.params.parallax || u.params.watchSlidesVisibility) && (u.params.watchSlidesProgress = !0);
            u.params.touchReleaseOnEdges && (u.params.resistanceRatio = 0);
            ["cube", "coverflow", "flip"].indexOf(u.params.effect) >= 0 && (u.support.transforms3d ? (u.params.watchSlidesProgress = !0,
            u.classNames.push(u.params.containerModifierClass + "3d")) : u.params.effect = "slide");
            "slide" !== u.params.effect && u.classNames.push(u.params.containerModifierClass + u.params.effect);
            "cube" === u.params.effect && (u.params.resistanceRatio = 0,
            u.params.slidesPerView = 1,
            u.params.slidesPerColumn = 1,
            u.params.slidesPerGroup = 1,
            u.params.centeredSlides = !1,
            u.params.spaceBetween = 0,
            u.params.virtualTranslate = !0);
            "fade" !== u.params.effect && "flip" !== u.params.effect || (u.params.slidesPerView = 1,
            u.params.slidesPerColumn = 1,
            u.params.slidesPerGroup = 1,
            u.params.watchSlidesProgress = !0,
            u.params.spaceBetween = 0,
            void 0 === wt && (u.params.virtualTranslate = !0));
            u.params.grabCursor && u.support.touch && (u.params.grabCursor = !1);
            u.wrapper = u.container.children("." + u.params.wrapperClass);
            u.params.pagination && (u.paginationContainer = n(u.params.pagination),
            u.params.uniqueNavElements && "string" == typeof u.params.pagination && u.paginationContainer.length > 1 && 1 === u.container.find(u.params.pagination).length && (u.paginationContainer = u.container.find(u.params.pagination)),
            "bullets" === u.params.paginationType && u.params.paginationClickable ? u.paginationContainer.addClass(u.params.paginationModifierClass + "clickable") : u.params.paginationClickable = !1,
            u.paginationContainer.addClass(u.params.paginationModifierClass + u.params.paginationType));
            (u.params.nextButton || u.params.prevButton) && (u.params.nextButton && (u.nextButton = n(u.params.nextButton),
            u.params.uniqueNavElements && "string" == typeof u.params.nextButton && u.nextButton.length > 1 && 1 === u.container.find(u.params.nextButton).length && (u.nextButton = u.container.find(u.params.nextButton))),
            u.params.prevButton && (u.prevButton = n(u.params.prevButton),
            u.params.uniqueNavElements && "string" == typeof u.params.prevButton && u.prevButton.length > 1 && 1 === u.container.find(u.params.prevButton).length && (u.prevButton = u.container.find(u.params.prevButton))));
            u.isHorizontal = function() {
                return "horizontal" === u.params.direction
            }
            ;
            u.rtl = u.isHorizontal() && ("rtl" === u.container[0].dir.toLowerCase() || "rtl" === u.container.css("direction"));
            u.rtl && u.classNames.push(u.params.containerModifierClass + "rtl");
            u.rtl && (u.wrongRTL = "-webkit-box" === u.wrapper.css("display"));
            u.params.slidesPerColumn > 1 && u.classNames.push(u.params.containerModifierClass + "multirow");
            u.device.android && u.classNames.push(u.params.containerModifierClass + "android");
            u.container.addClass(u.classNames.join(" "));
            u.translate = 0;
            u.progress = 0;
            u.velocity = 0;
            u.lockSwipeToNext = function() {
                u.params.allowSwipeToNext = !1;
                u.params.allowSwipeToPrev === !1 && u.params.grabCursor && u.unsetGrabCursor()
            }
            ;
            u.lockSwipeToPrev = function() {
                u.params.allowSwipeToPrev = !1;
                u.params.allowSwipeToNext === !1 && u.params.grabCursor && u.unsetGrabCursor()
            }
            ;
            u.lockSwipes = function() {
                u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !1;
                u.params.grabCursor && u.unsetGrabCursor()
            }
            ;
            u.unlockSwipeToNext = function() {
                u.params.allowSwipeToNext = !0;
                u.params.allowSwipeToPrev === !0 && u.params.grabCursor && u.setGrabCursor()
            }
            ;
            u.unlockSwipeToPrev = function() {
                u.params.allowSwipeToPrev = !0;
                u.params.allowSwipeToNext === !0 && u.params.grabCursor && u.setGrabCursor()
            }
            ;
            u.unlockSwipes = function() {
                u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !0;
                u.params.grabCursor && u.setGrabCursor()
            }
            ;
            u.setGrabCursor = function(n) {
                u.container[0].style.cursor = "move";
                u.container[0].style.cursor = n ? "-webkit-grabbing" : "-webkit-grab";
                u.container[0].style.cursor = n ? "-moz-grabbin" : "-moz-grab";
                u.container[0].style.cursor = n ? "grabbing" : "grab"
            }
            ;
            u.unsetGrabCursor = function() {
                u.container[0].style.cursor = ""
            }
            ;
            u.params.grabCursor && u.setGrabCursor();
            u.imagesToLoad = [];
            u.imagesLoaded = 0;
            u.loadImage = function(n, t, i, r, u, f) {
                function o() {
                    f && f()
                }
                var e;
                n.complete && u ? o() : t ? (e = new window.Image,
                e.onload = o,
                e.onerror = o,
                r && (e.sizes = r),
                i && (e.srcset = i),
                t && (e.src = t)) : o()
            }
            ;
            u.preloadImages = function() {
                function t() {
                    void 0 !== u && null !== u && u && (void 0 !== u.imagesLoaded && u.imagesLoaded++,
                    u.imagesLoaded === u.imagesToLoad.length && (u.params.updateOnImagesReady && u.update(),
                    u.emit("onImagesReady", u)))
                }
                u.imagesToLoad = u.container.find("img");
                for (var n = 0; n < u.imagesToLoad.length; n++)
                    u.loadImage(u.imagesToLoad[n], u.imagesToLoad[n].currentSrc || u.imagesToLoad[n].getAttribute("src"), u.imagesToLoad[n].srcset || u.imagesToLoad[n].getAttribute("srcset"), u.imagesToLoad[n].sizes || u.imagesToLoad[n].getAttribute("sizes"), !0, t)
            }
            ;
            u.autoplayTimeoutId = void 0;
            u.autoplaying = !1;
            u.autoplayPaused = !1;
            u.startAutoplay = function() {
                return void 0 === u.autoplayTimeoutId && !!u.params.autoplay && !u.autoplaying && (u.autoplaying = !0,
                u.emit("onAutoplayStart", u),
                void rt())
            }
            ;
            u.stopAutoplay = function() {
                u.autoplayTimeoutId && (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId),
                u.autoplaying = !1,
                u.autoplayTimeoutId = void 0,
                u.emit("onAutoplayStop", u))
            }
            ;
            u.pauseAutoplay = function(n) {
                u.autoplayPaused || (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId),
                u.autoplayPaused = !0,
                0 === n ? (u.autoplayPaused = !1,
                rt()) : u.wrapper.transitionEnd(function() {
                    u && (u.autoplayPaused = !1,
                    u.autoplaying ? rt() : u.stopAutoplay())
                }))
            }
            ;
            u.minTranslate = function() {
                return -u.snapGrid[0]
            }
            ;
            u.maxTranslate = function() {
                return -u.snapGrid[u.snapGrid.length - 1]
            }
            ;
            u.updateAutoHeight = function() {
                var n, t = [], i = 0, r, f;
                if ("auto" !== u.params.slidesPerView && u.params.slidesPerView > 1)
                    for (n = 0; n < Math.ceil(u.params.slidesPerView); n++) {
                        if (r = u.activeIndex + n,
                        r > u.slides.length)
                            break;
                        t.push(u.slides.eq(r)[0])
                    }
                else
                    t.push(u.slides.eq(u.activeIndex)[0]);
                for (n = 0; n < t.length; n++)
                    void 0 !== t[n] && (f = t[n].offsetHeight,
                    i = f > i ? f : i);
                i && u.wrapper.css("height", i + "px")
            }
            ;
            u.updateContainerSize = function() {
                var n, t;
                n = void 0 !== u.params.width ? u.params.width : u.container[0].clientWidth;
                t = void 0 !== u.params.height ? u.params.height : u.container[0].clientHeight;
                0 === n && u.isHorizontal() || 0 === t && !u.isHorizontal() || (n = n - parseInt(u.container.css("padding-left"), 10) - parseInt(u.container.css("padding-right"), 10),
                t = t - parseInt(u.container.css("padding-top"), 10) - parseInt(u.container.css("padding-bottom"), 10),
                u.width = n,
                u.height = t,
                u.size = u.isHorizontal() ? u.width : u.height)
            }
            ;
            u.updateSlidesSize = function() {
                var o, h, c, e, f, l;
                u.slides = u.wrapper.children("." + u.params.slideClass);
                u.snapGrid = [];
                u.slidesGrid = [];
                u.slidesSizesGrid = [];
                var n, i = u.params.spaceBetween, r = -u.params.slidesOffsetBefore, v = 0, y = 0;
                if (void 0 !== u.size) {
                    "string" == typeof i && i.indexOf("%") >= 0 && (i = parseFloat(i.replace("%", "")) / 100 * u.size);
                    u.virtualSize = -i;
                    u.rtl ? u.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : u.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    u.params.slidesPerColumn > 1 && (o = Math.floor(u.slides.length / u.params.slidesPerColumn) === u.slides.length / u.params.slidesPerColumn ? u.slides.length : Math.ceil(u.slides.length / u.params.slidesPerColumn) * u.params.slidesPerColumn,
                    "auto" !== u.params.slidesPerView && "row" === u.params.slidesPerColumnFill && (o = Math.max(o, u.params.slidesPerView * u.params.slidesPerColumn)));
                    var t, s = u.params.slidesPerColumn, a = o / s, p = a - (u.params.slidesPerColumn * a - u.slides.length);
                    for (n = 0; n < u.slides.length; n++)
                        t = 0,
                        h = u.slides.eq(n),
                        u.params.slidesPerColumn > 1 && ("column" === u.params.slidesPerColumnFill ? (e = Math.floor(n / s),
                        f = n - e * s,
                        (e > p || e === p && f === s - 1) && ++f >= s && (f = 0,
                        e++),
                        c = e + f * o / s,
                        h.css({
                            "-webkit-box-ordinal-group": c,
                            "-moz-box-ordinal-group": c,
                            "-ms-flex-order": c,
                            "-webkit-order": c,
                            order: c
                        })) : (f = Math.floor(n / a),
                        e = n - f * a),
                        h.css("margin-" + (u.isHorizontal() ? "top" : "left"), 0 !== f && u.params.spaceBetween && u.params.spaceBetween + "px").attr("data-swiper-column", e).attr("data-swiper-row", f)),
                        "none" !== h.css("display") && ("auto" === u.params.slidesPerView ? (t = u.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0),
                        u.params.roundLengths && (t = w(t))) : (t = (u.size - (u.params.slidesPerView - 1) * i) / u.params.slidesPerView,
                        u.params.roundLengths && (t = w(t)),
                        u.isHorizontal() ? u.slides[n].style.width = t + "px" : u.slides[n].style.height = t + "px"),
                        u.slides[n].swiperSlideSize = t,
                        u.slidesSizesGrid.push(t),
                        u.params.centeredSlides ? (r = r + t / 2 + v / 2 + i,
                        0 === v && 0 !== n && (r = r - u.size / 2 - i),
                        0 === n && (r = r - u.size / 2 - i),
                        Math.abs(r) < .001 && (r = 0),
                        y % u.params.slidesPerGroup == 0 && u.snapGrid.push(r),
                        u.slidesGrid.push(r)) : (y % u.params.slidesPerGroup == 0 && u.snapGrid.push(r),
                        u.slidesGrid.push(r),
                        r = r + t + i),
                        u.virtualSize += t + i,
                        v = t,
                        y++);
                    if (u.virtualSize = Math.max(u.virtualSize, u.size) + u.params.slidesOffsetAfter,
                    u.rtl && u.wrongRTL && ("slide" === u.params.effect || "coverflow" === u.params.effect) && u.wrapper.css({
                        width: u.virtualSize + u.params.spaceBetween + "px"
                    }),
                    u.support.flexbox && !u.params.setWrapperSize || (u.isHorizontal() ? u.wrapper.css({
                        width: u.virtualSize + u.params.spaceBetween + "px"
                    }) : u.wrapper.css({
                        height: u.virtualSize + u.params.spaceBetween + "px"
                    })),
                    u.params.slidesPerColumn > 1 && (u.virtualSize = (t + u.params.spaceBetween) * o,
                    u.virtualSize = Math.ceil(u.virtualSize / u.params.slidesPerColumn) - u.params.spaceBetween,
                    u.isHorizontal() ? u.wrapper.css({
                        width: u.virtualSize + u.params.spaceBetween + "px"
                    }) : u.wrapper.css({
                        height: u.virtualSize + u.params.spaceBetween + "px"
                    }),
                    u.params.centeredSlides)) {
                        for (l = [],
                        n = 0; n < u.snapGrid.length; n++)
                            u.snapGrid[n] < u.virtualSize + u.snapGrid[0] && l.push(u.snapGrid[n]);
                        u.snapGrid = l
                    }
                    if (!u.params.centeredSlides) {
                        for (l = [],
                        n = 0; n < u.snapGrid.length; n++)
                            u.snapGrid[n] <= u.virtualSize - u.size && l.push(u.snapGrid[n]);
                        u.snapGrid = l;
                        Math.floor(u.virtualSize - u.size) - Math.floor(u.snapGrid[u.snapGrid.length - 1]) > 1 && u.snapGrid.push(u.virtualSize - u.size)
                    }
                    0 === u.snapGrid.length && (u.snapGrid = [0]);
                    0 !== u.params.spaceBetween && (u.isHorizontal() ? u.rtl ? u.slides.css({
                        marginLeft: i + "px"
                    }) : u.slides.css({
                        marginRight: i + "px"
                    }) : u.slides.css({
                        marginBottom: i + "px"
                    }));
                    u.params.watchSlidesProgress && u.updateSlidesOffset()
                }
            }
            ;
            u.updateSlidesOffset = function() {
                for (var n = 0; n < u.slides.length; n++)
                    u.slides[n].swiperSlideOffset = u.isHorizontal() ? u.slides[n].offsetLeft : u.slides[n].offsetTop
            }
            ;
            u.currentSlidesPerView = function() {
                var n, t, r = 1, f, i;
                if (u.params.centeredSlides) {
                    for (i = u.slides[u.activeIndex].swiperSlideSize,
                    n = u.activeIndex + 1; n < u.slides.length; n++)
                        u.slides[n] && !f && (i += u.slides[n].swiperSlideSize,
                        r++,
                        i > u.size && (f = !0));
                    for (t = u.activeIndex - 1; t >= 0; t--)
                        u.slides[t] && !f && (i += u.slides[t].swiperSlideSize,
                        r++,
                        i > u.size && (f = !0))
                } else
                    for (n = u.activeIndex + 1; n < u.slides.length; n++)
                        u.slidesGrid[n] - u.slidesGrid[u.activeIndex] < u.size && r++;
                return r
            }
            ;
            u.updateSlidesProgress = function(n) {
                var f, t, i, o, r, e;
                if (void 0 === n && (n = u.translate || 0),
                0 !== u.slides.length)
                    for (void 0 === u.slides[0].swiperSlideOffset && u.updateSlidesOffset(),
                    f = -n,
                    u.rtl && (f = n),
                    u.slides.removeClass(u.params.slideVisibleClass),
                    t = 0; t < u.slides.length; t++)
                        i = u.slides[t],
                        o = (f + (u.params.centeredSlides ? u.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + u.params.spaceBetween),
                        u.params.watchSlidesVisibility && (r = -(f - i.swiperSlideOffset),
                        e = r + u.slidesSizesGrid[t],
                        (r >= 0 && r < u.size || e > 0 && e <= u.size || r <= 0 && e >= u.size) && u.slides.eq(t).addClass(u.params.slideVisibleClass)),
                        i.progress = u.rtl ? -o : o
            }
            ;
            u.updateProgress = function(n) {
                void 0 === n && (n = u.translate || 0);
                var t = u.maxTranslate() - u.minTranslate()
                  , i = u.isBeginning
                  , r = u.isEnd;
                0 === t ? (u.progress = 0,
                u.isBeginning = u.isEnd = !0) : (u.progress = (n - u.minTranslate()) / t,
                u.isBeginning = u.progress <= 0,
                u.isEnd = u.progress >= 1);
                u.isBeginning && !i && u.emit("onReachBeginning", u);
                u.isEnd && !r && u.emit("onReachEnd", u);
                u.params.watchSlidesProgress && u.updateSlidesProgress(n);
                u.emit("onProgress", u, u.progress)
            }
            ;
            u.updateActiveIndex = function() {
                for (var t, r, i = u.rtl ? u.translate : -u.translate, n = 0; n < u.slidesGrid.length; n++)
                    void 0 !== u.slidesGrid[n + 1] ? i >= u.slidesGrid[n] && i < u.slidesGrid[n + 1] - (u.slidesGrid[n + 1] - u.slidesGrid[n]) / 2 ? t = n : i >= u.slidesGrid[n] && i < u.slidesGrid[n + 1] && (t = n + 1) : i >= u.slidesGrid[n] && (t = n);
                u.params.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0);
                r = Math.floor(t / u.params.slidesPerGroup);
                r >= u.snapGrid.length && (r = u.snapGrid.length - 1);
                t !== u.activeIndex && (u.snapIndex = r,
                u.previousIndex = u.activeIndex,
                u.activeIndex = t,
                u.updateClasses(),
                u.updateRealIndex())
            }
            ;
            u.updateRealIndex = function() {
                u.realIndex = parseInt(u.slides.eq(u.activeIndex).attr("data-swiper-slide-index") || u.activeIndex, 10)
            }
            ;
            u.updateClasses = function() {
                var o, i, f, t, e;
                if (u.slides.removeClass(u.params.slideActiveClass + " " + u.params.slideNextClass + " " + u.params.slidePrevClass + " " + u.params.slideDuplicateActiveClass + " " + u.params.slideDuplicateNextClass + " " + u.params.slideDuplicatePrevClass),
                o = u.slides.eq(u.activeIndex),
                o.addClass(u.params.slideActiveClass),
                r.loop && (o.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + u.realIndex + '"]').addClass(u.params.slideDuplicateActiveClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + u.realIndex + '"]').addClass(u.params.slideDuplicateActiveClass)),
                i = o.next("." + u.params.slideClass).addClass(u.params.slideNextClass),
                u.params.loop && 0 === i.length && (i = u.slides.eq(0),
                i.addClass(u.params.slideNextClass)),
                f = o.prev("." + u.params.slideClass).addClass(u.params.slidePrevClass),
                u.params.loop && 0 === f.length && (f = u.slides.eq(-1),
                f.addClass(u.params.slidePrevClass)),
                r.loop && (i.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicateNextClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicateNextClass),
                f.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + f.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicatePrevClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + f.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicatePrevClass)),
                u.paginationContainer && u.paginationContainer.length > 0) {
                    if (e = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length,
                    u.params.loop ? (t = Math.ceil((u.activeIndex - u.loopedSlides) / u.params.slidesPerGroup),
                    t > u.slides.length - 1 - 2 * u.loopedSlides && (t -= u.slides.length - 2 * u.loopedSlides),
                    t > e - 1 && (t -= e),
                    t < 0 && "bullets" !== u.params.paginationType && (t = e + t)) : t = void 0 !== u.snapIndex ? u.snapIndex : u.activeIndex || 0,
                    "bullets" === u.params.paginationType && u.bullets && u.bullets.length > 0 && (u.bullets.removeClass(u.params.bulletActiveClass),
                    u.paginationContainer.length > 1 ? u.bullets.each(function() {
                        n(this).index() === t && n(this).addClass(u.params.bulletActiveClass)
                    }) : u.bullets.eq(t).addClass(u.params.bulletActiveClass)),
                    "fraction" === u.params.paginationType && (u.paginationContainer.find("." + u.params.paginationCurrentClass).text(t + 1),
                    u.paginationContainer.find("." + u.params.paginationTotalClass).text(e)),
                    "progress" === u.params.paginationType) {
                        var s = (t + 1) / e
                          , h = s
                          , c = 1;
                        u.isHorizontal() || (c = s,
                        h = 1);
                        u.paginationContainer.find("." + u.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + c + ")").transition(u.params.speed)
                    }
                    "custom" === u.params.paginationType && u.params.paginationCustomRender && (u.paginationContainer.html(u.params.paginationCustomRender(u, t + 1, e)),
                    u.emit("onPaginationRendered", u, u.paginationContainer[0]))
                }
                u.params.loop || (u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.isBeginning ? (u.prevButton.addClass(u.params.buttonDisabledClass),
                u.params.a11y && u.a11y && u.a11y.disable(u.prevButton)) : (u.prevButton.removeClass(u.params.buttonDisabledClass),
                u.params.a11y && u.a11y && u.a11y.enable(u.prevButton))),
                u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.isEnd ? (u.nextButton.addClass(u.params.buttonDisabledClass),
                u.params.a11y && u.a11y && u.a11y.disable(u.nextButton)) : (u.nextButton.removeClass(u.params.buttonDisabledClass),
                u.params.a11y && u.a11y && u.a11y.enable(u.nextButton))))
            }
            ;
            u.updatePagination = function() {
                var n, i, t;
                if (u.params.pagination && u.paginationContainer && u.paginationContainer.length > 0) {
                    if (n = "",
                    "bullets" === u.params.paginationType) {
                        for (i = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length,
                        t = 0; t < i; t++)
                            n += u.params.paginationBulletRender ? u.params.paginationBulletRender(u, t, u.params.bulletClass) : "<" + u.params.paginationElement + ' class="' + u.params.bulletClass + '"><\/' + u.params.paginationElement + ">";
                        u.paginationContainer.html(n);
                        u.bullets = u.paginationContainer.find("." + u.params.bulletClass);
                        u.params.paginationClickable && u.params.a11y && u.a11y && u.a11y.initPagination()
                    }
                    "fraction" === u.params.paginationType && (n = u.params.paginationFractionRender ? u.params.paginationFractionRender(u, u.params.paginationCurrentClass, u.params.paginationTotalClass) : '<span class="' + u.params.paginationCurrentClass + '"><\/span> / <span class="' + u.params.paginationTotalClass + '"><\/span>',
                    u.paginationContainer.html(n));
                    "progress" === u.params.paginationType && (n = u.params.paginationProgressRender ? u.params.paginationProgressRender(u, u.params.paginationProgressbarClass) : '<span class="' + u.params.paginationProgressbarClass + '"><\/span>',
                    u.paginationContainer.html(n));
                    "custom" !== u.params.paginationType && u.emit("onPaginationRendered", u, u.paginationContainer[0])
                }
            }
            ;
            u.update = function(n) {
                function t() {
                    u.rtl;
                    u.translate;
                    i = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate());
                    u.setWrapperTranslate(i);
                    u.updateActiveIndex();
                    u.updateClasses()
                }
                if (u) {
                    u.updateContainerSize();
                    u.updateSlidesSize();
                    u.updateProgress();
                    u.updatePagination();
                    u.updateClasses();
                    u.params.scrollbar && u.scrollbar && u.scrollbar.set();
                    var i;
                    n ? (u.controller && u.controller.spline && (u.controller.spline = void 0),
                    u.params.freeMode ? (t(),
                    u.params.autoHeight && u.updateAutoHeight()) : (("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0)) || t()) : u.params.autoHeight && u.updateAutoHeight()
                }
            }
            ;
            u.onResize = function(n) {
                var i, r, t, f;
                u.params.onBeforeResize && u.params.onBeforeResize(u);
                u.params.breakpoints && u.setBreakpoint();
                i = u.params.allowSwipeToPrev;
                r = u.params.allowSwipeToNext;
                u.params.allowSwipeToPrev = u.params.allowSwipeToNext = !0;
                u.updateContainerSize();
                u.updateSlidesSize();
                ("auto" === u.params.slidesPerView || u.params.freeMode || n) && u.updatePagination();
                u.params.scrollbar && u.scrollbar && u.scrollbar.set();
                u.controller && u.controller.spline && (u.controller.spline = void 0);
                t = !1;
                u.params.freeMode ? (f = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate()),
                u.setWrapperTranslate(f),
                u.updateActiveIndex(),
                u.updateClasses(),
                u.params.autoHeight && u.updateAutoHeight()) : (u.updateClasses(),
                t = ("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0));
                u.params.lazyLoading && !t && u.lazy && u.lazy.load();
                u.params.allowSwipeToPrev = i;
                u.params.allowSwipeToNext = r;
                u.params.onAfterResize && u.params.onAfterResize(u)
            }
            ;
            u.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            };
            window.navigator.pointerEnabled ? u.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (u.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            });
            u.touchEvents = {
                start: u.support.touch || !u.params.simulateTouch ? "touchstart" : u.touchEventsDesktop.start,
                move: u.support.touch || !u.params.simulateTouch ? "touchmove" : u.touchEventsDesktop.move,
                end: u.support.touch || !u.params.simulateTouch ? "touchend" : u.touchEventsDesktop.end
            };
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === u.params.touchEventsTarget ? u.container : u.wrapper).addClass("swiper-wp8-" + u.params.direction);
            u.initEvents = function(n) {
                var f = n ? "off" : "on", t = n ? "removeEventListener" : "addEventListener", i = "container" === u.params.touchEventsTarget ? u.container[0] : u.wrapper[0], s = u.support.touch ? i : document, e = !!u.params.nested, o;
                u.browser.ie ? (i[t](u.touchEvents.start, u.onTouchStart, !1),
                s[t](u.touchEvents.move, u.onTouchMove, e),
                s[t](u.touchEvents.end, u.onTouchEnd, !1)) : (u.support.touch && (o = !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                i[t](u.touchEvents.start, u.onTouchStart, o),
                i[t](u.touchEvents.move, u.onTouchMove, e),
                i[t](u.touchEvents.end, u.onTouchEnd, o)),
                (r.simulateTouch && !u.device.ios && !u.device.android || r.simulateTouch && !u.support.touch && u.device.ios) && (i[t]("mousedown", u.onTouchStart, !1),
                document[t]("mousemove", u.onTouchMove, e),
                document[t]("mouseup", u.onTouchEnd, !1)));
                window[t]("resize", u.onResize);
                u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.nextButton[f]("click", u.onClickNext),
                u.params.a11y && u.a11y && u.nextButton[f]("keydown", u.a11y.onEnterKey));
                u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.prevButton[f]("click", u.onClickPrev),
                u.params.a11y && u.a11y && u.prevButton[f]("keydown", u.a11y.onEnterKey));
                u.params.pagination && u.params.paginationClickable && (u.paginationContainer[f]("click", "." + u.params.bulletClass, u.onClickIndex),
                u.params.a11y && u.a11y && u.paginationContainer[f]("keydown", "." + u.params.bulletClass, u.a11y.onEnterKey));
                (u.params.preventClicks || u.params.preventClicksPropagation) && i[t]("click", u.preventClicks, !0)
            }
            ;
            u.attachEvents = function() {
                u.initEvents()
            }
            ;
            u.detachEvents = function() {
                u.initEvents(!0)
            }
            ;
            u.allowClick = !0;
            u.preventClicks = function(n) {
                u.allowClick || (u.params.preventClicks && n.preventDefault(),
                u.params.preventClicksPropagation && u.animating && (n.stopPropagation(),
                n.stopImmediatePropagation()))
            }
            ;
            u.onClickNext = function(n) {
                n.preventDefault();
                u.isEnd && !u.params.loop || u.slideNext()
            }
            ;
            u.onClickPrev = function(n) {
                n.preventDefault();
                u.isBeginning && !u.params.loop || u.slidePrev()
            }
            ;
            u.onClickIndex = function(t) {
                t.preventDefault();
                var i = n(this).index() * u.params.slidesPerGroup;
                u.params.loop && (i += u.loopedSlides);
                u.slideTo(i)
            }
            ;
            u.updateClickedSlide = function(t) {
                var r = ut(t, "." + u.params.slideClass), s = !1, f, o, i, e;
                if (r)
                    for (f = 0; f < u.slides.length; f++)
                        u.slides[f] === r && (s = !0);
                if (!r || !s)
                    return u.clickedSlide = void 0,
                    void (u.clickedIndex = void 0);
                if (u.clickedSlide = r,
                u.clickedIndex = n(r).index(),
                u.params.slideToClickedSlide && void 0 !== u.clickedIndex && u.clickedIndex !== u.activeIndex)
                    if (i = u.clickedIndex,
                    e = "auto" === u.params.slidesPerView ? u.currentSlidesPerView() : u.params.slidesPerView,
                    u.params.loop) {
                        if (u.animating)
                            return;
                        o = parseInt(n(u.clickedSlide).attr("data-swiper-slide-index"), 10);
                        u.params.centeredSlides ? i < u.loopedSlides - e / 2 || i > u.slides.length - u.loopedSlides + e / 2 ? (u.fixLoop(),
                        i = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + u.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            u.slideTo(i)
                        }, 0)) : u.slideTo(i) : i > u.slides.length - e ? (u.fixLoop(),
                        i = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + u.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            u.slideTo(i)
                        }, 0)) : u.slideTo(i)
                    } else
                        u.slideTo(i)
            }
            ;
            var h, c, k, d, a, f, o, g, p, nt, ht = "input, select, textarea, button, video", ct = Date.now(), l = [];
            u.animating = !1;
            u.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            u.onTouchStart = function(t) {
                var i, f, r;
                if (t.originalEvent && (t = t.originalEvent),
                (tt = "touchstart" === t.type) || !("which"in t) || 3 !== t.which) {
                    if (u.params.noSwiping && ut(t, "." + u.params.noSwipingClass))
                        return void (u.allowClick = !0);
                    (!u.params.swipeHandler || ut(t, u.params.swipeHandler)) && (i = u.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    f = u.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    u.device.ios && u.params.iOSEdgeSwipeDetection && i <= u.params.iOSEdgeSwipeThreshold || ((h = !0,
                    c = !1,
                    k = !0,
                    a = void 0,
                    it = void 0,
                    u.touches.startX = i,
                    u.touches.startY = f,
                    d = Date.now(),
                    u.allowClick = !0,
                    u.updateContainerSize(),
                    u.swipeDirection = void 0,
                    u.params.threshold > 0 && (g = !1),
                    "touchstart" !== t.type) && (r = !0,
                    n(t.target).is(ht) && (r = !1),
                    document.activeElement && n(document.activeElement).is(ht) && document.activeElement.blur(),
                    r && t.preventDefault()),
                    u.emit("onTouchStart", u, t)))
                }
            }
            ;
            u.onTouchMove = function(t) {
                var s, i, e;
                if (t.originalEvent && (t = t.originalEvent),
                !tt || "mousemove" !== t.type) {
                    if (t.preventedByNestedSwiper)
                        return u.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        void (u.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                    if (u.params.onlyExternal)
                        return u.allowClick = !1,
                        void (h && (u.touches.startX = u.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        u.touches.startY = u.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                        d = Date.now()));
                    if (tt && u.params.touchReleaseOnEdges && !u.params.loop)
                        if (u.isHorizontal()) {
                            if (u.touches.currentX < u.touches.startX && u.translate <= u.maxTranslate() || u.touches.currentX > u.touches.startX && u.translate >= u.minTranslate())
                                return
                        } else if (u.touches.currentY < u.touches.startY && u.translate <= u.maxTranslate() || u.touches.currentY > u.touches.startY && u.translate >= u.minTranslate())
                            return;
                    if (tt && document.activeElement && t.target === document.activeElement && n(t.target).is(ht))
                        return c = !0,
                        void (u.allowClick = !1);
                    if ((k && u.emit("onTouchMove", u, t),
                    !(t.targetTouches && t.targetTouches.length > 1)) && ((u.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    u.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    void 0 === a) && (u.isHorizontal() && u.touches.currentY === u.touches.startY || !u.isHorizontal() && u.touches.currentX === u.touches.startX ? a = !1 : (s = 180 * Math.atan2(Math.abs(u.touches.currentY - u.touches.startY), Math.abs(u.touches.currentX - u.touches.startX)) / Math.PI,
                    a = u.isHorizontal() ? s > u.params.touchAngle : 90 - s > u.params.touchAngle)),
                    a && u.emit("onTouchMoveOpposite", u, t),
                    void 0 === it && (u.touches.currentX === u.touches.startX && u.touches.currentY === u.touches.startY || (it = !0)),
                    h)) {
                        if (a)
                            return void (h = !1);
                        if (it) {
                            if (u.allowClick = !1,
                            u.emit("onSliderMove", u, t),
                            t.preventDefault(),
                            u.params.touchMoveStopPropagation && !u.params.nested && t.stopPropagation(),
                            c || (r.loop && u.fixLoop(),
                            o = u.getWrapperTranslate(),
                            u.setWrapperTransition(0),
                            u.animating && u.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                            u.params.autoplay && u.autoplaying && (u.params.autoplayDisableOnInteraction ? u.stopAutoplay() : u.pauseAutoplay()),
                            nt = !1,
                            !u.params.grabCursor || u.params.allowSwipeToNext !== !0 && u.params.allowSwipeToPrev !== !0 || u.setGrabCursor(!0)),
                            c = !0,
                            i = u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY,
                            i *= u.params.touchRatio,
                            u.rtl && (i = -i),
                            u.swipeDirection = i > 0 ? "prev" : "next",
                            f = i + o,
                            e = !0,
                            i > 0 && f > u.minTranslate() ? (e = !1,
                            u.params.resistance && (f = u.minTranslate() - 1 + Math.pow(-u.minTranslate() + o + i, u.params.resistanceRatio))) : i < 0 && f < u.maxTranslate() && (e = !1,
                            u.params.resistance && (f = u.maxTranslate() + 1 - Math.pow(u.maxTranslate() - o - i, u.params.resistanceRatio))),
                            e && (t.preventedByNestedSwiper = !0),
                            !u.params.allowSwipeToNext && "next" === u.swipeDirection && f < o && (f = o),
                            !u.params.allowSwipeToPrev && "prev" === u.swipeDirection && f > o && (f = o),
                            u.params.threshold > 0) {
                                if (!(Math.abs(i) > u.params.threshold || g))
                                    return void (f = o);
                                if (!g)
                                    return g = !0,
                                    u.touches.startX = u.touches.currentX,
                                    u.touches.startY = u.touches.currentY,
                                    f = o,
                                    void (u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY)
                            }
                            u.params.followFinger && ((u.params.freeMode || u.params.watchSlidesProgress) && u.updateActiveIndex(),
                            u.params.freeMode && (0 === l.length && l.push({
                                position: u.touches[u.isHorizontal() ? "startX" : "startY"],
                                time: d
                            }),
                            l.push({
                                position: u.touches[u.isHorizontal() ? "currentX" : "currentY"],
                                time: (new window.Date).getTime()
                            })),
                            u.updateProgress(f),
                            u.setWrapperTranslate(f))
                        }
                    }
                }
            }
            ;
            u.onTouchEnd = function(t) {
                var b, v, s, tt, it, y, w, a, r, e, rt, ft;
                if (t.originalEvent && (t = t.originalEvent),
                k && u.emit("onTouchEnd", u, t),
                k = !1,
                h) {
                    if (u.params.grabCursor && c && h && (u.params.allowSwipeToNext === !0 || u.params.allowSwipeToPrev === !0) && u.setGrabCursor(!1),
                    b = Date.now(),
                    v = b - d,
                    u.allowClick && (u.updateClickedSlide(t),
                    u.emit("onTap", u, t),
                    v < 300 && b - ct > 300 && (p && clearTimeout(p),
                    p = setTimeout(function() {
                        u && (u.params.paginationHide && u.paginationContainer.length > 0 && !n(t.target).hasClass(u.params.bulletClass) && u.paginationContainer.toggleClass(u.params.paginationHiddenClass),
                        u.emit("onClick", u, t))
                    }, 300)),
                    v < 300 && b - ct < 300 && (p && clearTimeout(p),
                    u.emit("onDoubleTap", u, t))),
                    ct = Date.now(),
                    setTimeout(function() {
                        u && (u.allowClick = !0)
                    }, 0),
                    !h || !c || !u.swipeDirection || 0 === u.touches.diff || f === o)
                        return void (h = c = !1);
                    if (h = c = !1,
                    s = u.params.followFinger ? u.rtl ? u.translate : -u.translate : -f,
                    u.params.freeMode) {
                        if (s < -u.minTranslate())
                            return void u.slideTo(u.activeIndex);
                        if (s > -u.maxTranslate())
                            return void (u.slides.length < u.snapGrid.length ? u.slideTo(u.snapGrid.length - 1) : u.slideTo(u.slides.length - 1));
                        if (u.params.freeModeMomentum) {
                            if (l.length > 1) {
                                var ut = l.pop()
                                  , et = l.pop()
                                  , st = ut.position - et.position
                                  , ot = ut.time - et.time;
                                u.velocity = st / ot;
                                u.velocity = u.velocity / 2;
                                Math.abs(u.velocity) < u.params.freeModeMinimumVelocity && (u.velocity = 0);
                                (ot > 150 || (new window.Date).getTime() - ut.time > 300) && (u.velocity = 0)
                            } else
                                u.velocity = 0;
                            u.velocity = u.velocity * u.params.freeModeMomentumVelocityRatio;
                            l.length = 0;
                            var g = 1e3 * u.params.freeModeMomentumRatio
                              , ht = u.velocity * g
                              , i = u.translate + ht;
                            if (u.rtl && (i = -i),
                            it = !1,
                            y = 20 * Math.abs(u.velocity) * u.params.freeModeMomentumBounceRatio,
                            i < u.maxTranslate())
                                u.params.freeModeMomentumBounce ? (i + u.maxTranslate() < -y && (i = u.maxTranslate() - y),
                                tt = u.maxTranslate(),
                                it = !0,
                                nt = !0) : i = u.maxTranslate();
                            else if (i > u.minTranslate())
                                u.params.freeModeMomentumBounce ? (i - u.minTranslate() > y && (i = u.minTranslate() + y),
                                tt = u.minTranslate(),
                                it = !0,
                                nt = !0) : i = u.minTranslate();
                            else if (u.params.freeModeSticky) {
                                for (a = 0,
                                a = 0; a < u.snapGrid.length; a += 1)
                                    if (u.snapGrid[a] > -i) {
                                        w = a;
                                        break
                                    }
                                i = Math.abs(u.snapGrid[w] - i) < Math.abs(u.snapGrid[w - 1] - i) || "next" === u.swipeDirection ? u.snapGrid[w] : u.snapGrid[w - 1];
                                u.rtl || (i = -i)
                            }
                            if (0 !== u.velocity)
                                g = u.rtl ? Math.abs((-i - u.translate) / u.velocity) : Math.abs((i - u.translate) / u.velocity);
                            else if (u.params.freeModeSticky)
                                return void u.slideReset();
                            u.params.freeModeMomentumBounce && it ? (u.updateProgress(tt),
                            u.setWrapperTransition(g),
                            u.setWrapperTranslate(i),
                            u.onTransitionStart(),
                            u.animating = !0,
                            u.wrapper.transitionEnd(function() {
                                u && nt && (u.emit("onMomentumBounce", u),
                                u.setWrapperTransition(u.params.speed),
                                u.setWrapperTranslate(tt),
                                u.wrapper.transitionEnd(function() {
                                    u && u.onTransitionEnd()
                                }))
                            })) : u.velocity ? (u.updateProgress(i),
                            u.setWrapperTransition(g),
                            u.setWrapperTranslate(i),
                            u.onTransitionStart(),
                            u.animating || (u.animating = !0,
                            u.wrapper.transitionEnd(function() {
                                u && u.onTransitionEnd()
                            }))) : u.updateProgress(i);
                            u.updateActiveIndex()
                        }
                        return void ((!u.params.freeModeMomentum || v >= u.params.longSwipesMs) && (u.updateProgress(),
                        u.updateActiveIndex()))
                    }
                    for (e = 0,
                    rt = u.slidesSizesGrid[0],
                    r = 0; r < u.slidesGrid.length; r += u.params.slidesPerGroup)
                        void 0 !== u.slidesGrid[r + u.params.slidesPerGroup] ? s >= u.slidesGrid[r] && s < u.slidesGrid[r + u.params.slidesPerGroup] && (e = r,
                        rt = u.slidesGrid[r + u.params.slidesPerGroup] - u.slidesGrid[r]) : s >= u.slidesGrid[r] && (e = r,
                        rt = u.slidesGrid[u.slidesGrid.length - 1] - u.slidesGrid[u.slidesGrid.length - 2]);
                    if (ft = (s - u.slidesGrid[e]) / rt,
                    v > u.params.longSwipesMs) {
                        if (!u.params.longSwipes)
                            return void u.slideTo(u.activeIndex);
                        "next" === u.swipeDirection && (ft >= u.params.longSwipesRatio ? u.slideTo(e + u.params.slidesPerGroup) : u.slideTo(e));
                        "prev" === u.swipeDirection && (ft > 1 - u.params.longSwipesRatio ? u.slideTo(e + u.params.slidesPerGroup) : u.slideTo(e))
                    } else {
                        if (!u.params.shortSwipes)
                            return void u.slideTo(u.activeIndex);
                        "next" === u.swipeDirection && u.slideTo(e + u.params.slidesPerGroup);
                        "prev" === u.swipeDirection && u.slideTo(e)
                    }
                }
            }
            ;
            u._slideTo = function(n, t) {
                return u.slideTo(n, t, !0, !0)
            }
            ;
            u.slideTo = function(n, t, i, r) {
                var f, e;
                if (void 0 === i && (i = !0),
                void 0 === n && (n = 0),
                n < 0 && (n = 0),
                u.snapIndex = Math.floor(n / u.params.slidesPerGroup),
                u.snapIndex >= u.snapGrid.length && (u.snapIndex = u.snapGrid.length - 1),
                f = -u.snapGrid[u.snapIndex],
                u.params.autoplay && u.autoplaying && (r || !u.params.autoplayDisableOnInteraction ? u.pauseAutoplay(t) : u.stopAutoplay()),
                u.updateProgress(f),
                u.params.normalizeSlideIndex)
                    for (e = 0; e < u.slidesGrid.length; e++)
                        -Math.floor(100 * f) >= Math.floor(100 * u.slidesGrid[e]) && (n = e);
                return !(!u.params.allowSwipeToNext && f < u.translate && f < u.minTranslate()) && !(!u.params.allowSwipeToPrev && f > u.translate && f > u.maxTranslate() && (u.activeIndex || 0) !== n) && (void 0 === t && (t = u.params.speed),
                u.previousIndex = u.activeIndex || 0,
                u.activeIndex = n,
                u.updateRealIndex(),
                u.rtl && -f === u.translate || !u.rtl && f === u.translate ? (u.params.autoHeight && u.updateAutoHeight(),
                u.updateClasses(),
                "slide" !== u.params.effect && u.setWrapperTranslate(f),
                !1) : (u.updateClasses(),
                u.onTransitionStart(i),
                0 === t || u.browser.lteIE9 ? (u.setWrapperTranslate(f),
                u.setWrapperTransition(0),
                u.onTransitionEnd(i)) : (u.setWrapperTranslate(f),
                u.setWrapperTransition(t),
                u.animating || (u.animating = !0,
                u.wrapper.transitionEnd(function() {
                    u && u.onTransitionEnd(i)
                }))),
                !0))
            }
            ;
            u.onTransitionStart = function(n) {
                void 0 === n && (n = !0);
                u.params.autoHeight && u.updateAutoHeight();
                u.lazy && u.lazy.onTransitionStart();
                n && (u.emit("onTransitionStart", u),
                u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeStart", u),
                u.activeIndex > u.previousIndex ? u.emit("onSlideNextStart", u) : u.emit("onSlidePrevStart", u)))
            }
            ;
            u.onTransitionEnd = function(n) {
                u.animating = !1;
                u.setWrapperTransition(0);
                void 0 === n && (n = !0);
                u.lazy && u.lazy.onTransitionEnd();
                n && (u.emit("onTransitionEnd", u),
                u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeEnd", u),
                u.activeIndex > u.previousIndex ? u.emit("onSlideNextEnd", u) : u.emit("onSlidePrevEnd", u)));
                u.params.history && u.history && u.history.setHistory(u.params.history, u.activeIndex);
                u.params.hashnav && u.hashnav && u.hashnav.setHash()
            }
            ;
            u.slideNext = function(n, t, i) {
                return u.params.loop ? u.animating ? !1 : (u.fixLoop(),
                u.container[0].clientLeft,
                u.slideTo(u.activeIndex + u.params.slidesPerGroup, t, n, i)) : u.slideTo(u.activeIndex + u.params.slidesPerGroup, t, n, i)
            }
            ;
            u._slideNext = function(n) {
                return u.slideNext(!0, n, !0)
            }
            ;
            u.slidePrev = function(n, t, i) {
                return u.params.loop ? u.animating ? !1 : (u.fixLoop(),
                u.container[0].clientLeft,
                u.slideTo(u.activeIndex - 1, t, n, i)) : u.slideTo(u.activeIndex - 1, t, n, i)
            }
            ;
            u._slidePrev = function(n) {
                return u.slidePrev(!0, n, !0)
            }
            ;
            u.slideReset = function(n, t) {
                return u.slideTo(u.activeIndex, t, n)
            }
            ;
            u.disableTouchControl = function() {
                return u.params.onlyExternal = !0,
                !0
            }
            ;
            u.enableTouchControl = function() {
                return u.params.onlyExternal = !1,
                !0
            }
            ;
            u.setWrapperTransition = function(n, t) {
                u.wrapper.transition(n);
                "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTransition(n);
                u.params.parallax && u.parallax && u.parallax.setTransition(n);
                u.params.scrollbar && u.scrollbar && u.scrollbar.setTransition(n);
                u.params.control && u.controller && u.controller.setTransition(n, t);
                u.emit("onSetTransition", u, n)
            }
            ;
            u.setWrapperTranslate = function(n, t, i) {
                var r = 0, f = 0, o, e;
                u.isHorizontal() ? r = u.rtl ? -n : n : f = n;
                u.params.roundLengths && (r = w(r),
                f = w(f));
                u.params.virtualTranslate || (u.support.transforms3d ? u.wrapper.transform("translate3d(" + r + "px, " + f + "px, 0px)") : u.wrapper.transform("translate(" + r + "px, " + f + "px)"));
                u.translate = u.isHorizontal() ? r : f;
                e = u.maxTranslate() - u.minTranslate();
                o = 0 === e ? 0 : (n - u.minTranslate()) / e;
                o !== u.progress && u.updateProgress(n);
                t && u.updateActiveIndex();
                "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTranslate(u.translate);
                u.params.parallax && u.parallax && u.parallax.setTranslate(u.translate);
                u.params.scrollbar && u.scrollbar && u.scrollbar.setTranslate(u.translate);
                u.params.control && u.controller && u.controller.setTranslate(u.translate, i);
                u.emit("onSetTranslate", u, u.translate)
            }
            ;
            u.getTranslate = function(n, t) {
                var f, i, r, e;
                return void 0 === t && (t = "x"),
                u.params.virtualTranslate ? u.rtl ? -u.translate : u.translate : (r = window.getComputedStyle(n, null),
                window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform,
                i.split(",").length > 6 && (i = i.split(", ").map(function(n) {
                    return n.replace(",", ".")
                }).join(", ")),
                e = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (e = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                f = e.toString().split(",")),
                "x" === t && (i = window.WebKitCSSMatrix ? e.m41 : 16 === f.length ? parseFloat(f[12]) : parseFloat(f[4])),
                "y" === t && (i = window.WebKitCSSMatrix ? e.m42 : 16 === f.length ? parseFloat(f[13]) : parseFloat(f[5])),
                u.rtl && i && (i = -i),
                i || 0)
            }
            ;
            u.getWrapperTranslate = function(n) {
                return void 0 === n && (n = u.isHorizontal() ? "x" : "y"),
                u.getTranslate(u.wrapper[0], n)
            }
            ;
            u.observers = [];
            u.initObservers = function() {
                if (u.params.observeParents)
                    for (var t = u.container.parents(), n = 0; n < t.length; n++)
                        ft(t[n]);
                ft(u.container[0], {
                    childList: !1
                });
                ft(u.wrapper[0], {
                    attributes: !1
                })
            }
            ;
            u.disconnectObservers = function() {
                for (var n = 0; n < u.observers.length; n++)
                    u.observers[n].disconnect();
                u.observers = []
            }
            ;
            u.createLoop = function() {
                var i, t, r, f;
                for (u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove(),
                i = u.wrapper.children("." + u.params.slideClass),
                "auto" !== u.params.slidesPerView || u.params.loopedSlides || (u.params.loopedSlides = i.length),
                u.loopedSlides = parseInt(u.params.loopedSlides || u.params.slidesPerView, 10),
                u.loopedSlides = u.loopedSlides + u.params.loopAdditionalSlides,
                u.loopedSlides > i.length && (u.loopedSlides = i.length),
                r = [],
                f = [],
                i.each(function(t, e) {
                    var o = n(this);
                    t < u.loopedSlides && f.push(e);
                    t < i.length && t >= i.length - u.loopedSlides && r.push(e);
                    o.attr("data-swiper-slide-index", t)
                }),
                t = 0; t < f.length; t++)
                    u.wrapper.append(n(f[t].cloneNode(!0)).addClass(u.params.slideDuplicateClass));
                for (t = r.length - 1; t >= 0; t--)
                    u.wrapper.prepend(n(r[t].cloneNode(!0)).addClass(u.params.slideDuplicateClass))
            }
            ;
            u.destroyLoop = function() {
                u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove();
                u.slides.removeAttr("data-swiper-slide-index")
            }
            ;
            u.reLoop = function(n) {
                var t = u.activeIndex - u.loopedSlides;
                u.destroyLoop();
                u.createLoop();
                u.updateSlidesSize();
                n && u.slideTo(t + u.loopedSlides, 0, !1)
            }
            ;
            u.fixLoop = function() {
                var n;
                u.activeIndex < u.loopedSlides ? (n = u.slides.length - 3 * u.loopedSlides + u.activeIndex,
                n += u.loopedSlides,
                u.slideTo(n, 0, !1, !0)) : ("auto" === u.params.slidesPerView && u.activeIndex >= 2 * u.loopedSlides || u.activeIndex > u.slides.length - 2 * u.params.slidesPerView) && (n = -u.slides.length + u.activeIndex + u.loopedSlides,
                n += u.loopedSlides,
                u.slideTo(n, 0, !1, !0))
            }
            ;
            u.appendSlide = function(n) {
                if (u.params.loop && u.destroyLoop(),
                "object" == typeof n && n.length)
                    for (var t = 0; t < n.length; t++)
                        n[t] && u.wrapper.append(n[t]);
                else
                    u.wrapper.append(n);
                u.params.loop && u.createLoop();
                u.params.observer && u.support.observer || u.update(!0)
            }
            ;
            u.prependSlide = function(n) {
                var i, t;
                if (u.params.loop && u.destroyLoop(),
                i = u.activeIndex + 1,
                "object" == typeof n && n.length) {
                    for (t = 0; t < n.length; t++)
                        n[t] && u.wrapper.prepend(n[t]);
                    i = u.activeIndex + n.length
                } else
                    u.wrapper.prepend(n);
                u.params.loop && u.createLoop();
                u.params.observer && u.support.observer || u.update(!0);
                u.slideTo(i, 0, !1)
            }
            ;
            u.removeSlide = function(n) {
                var i, t, r;
                if (u.params.loop && (u.destroyLoop(),
                u.slides = u.wrapper.children("." + u.params.slideClass)),
                t = u.activeIndex,
                "object" == typeof n && n.length) {
                    for (r = 0; r < n.length; r++)
                        i = n[r],
                        u.slides[i] && u.slides.eq(i).remove(),
                        i < t && t--;
                    t = Math.max(t, 0)
                } else
                    i = n,
                    u.slides[i] && u.slides.eq(i).remove(),
                    i < t && t--,
                    t = Math.max(t, 0);
                u.params.loop && u.createLoop();
                u.params.observer && u.support.observer || u.update(!0);
                u.params.loop ? u.slideTo(t + u.loopedSlides, 0, !1) : u.slideTo(t, 0, !1)
            }
            ;
            u.removeAllSlides = function() {
                for (var t = [], n = 0; n < u.slides.length; n++)
                    t.push(n);
                u.removeSlide(t)
            }
            ;
            u.effects = {
                fade: {
                    setTranslate: function() {
                        for (var r, f, n = 0; n < u.slides.length; n++) {
                            var t = u.slides.eq(n)
                              , e = t[0].swiperSlideOffset
                              , i = -e;
                            u.params.virtualTranslate || (i -= u.translate);
                            r = 0;
                            u.isHorizontal() || (r = i,
                            i = 0);
                            f = u.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: f
                            }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(n) {
                        if (u.slides.transition(n),
                        u.params.virtualTranslate && 0 !== n) {
                            var t = !1;
                            u.slides.transitionEnd(function() {
                                if (!t && u) {
                                    t = !0;
                                    u.animating = !1;
                                    for (var i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < i.length; n++)
                                        u.wrapper.trigger(i[n])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var t, i, r, f, o = 0; o < u.slides.length; o++) {
                            t = u.slides.eq(o);
                            i = t[0].progress;
                            u.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
                            var l = t[0].swiperSlideOffset
                              , a = -180 * i
                              , e = a
                              , h = 0
                              , s = -l
                              , c = 0;
                            (u.isHorizontal() ? u.rtl && (e = -e) : (c = s,
                            s = 0,
                            h = -e,
                            e = 0),
                            t[0].style.zIndex = -Math.abs(Math.round(i)) + u.slides.length,
                            u.params.flip.slideShadows) && (r = u.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            f = u.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom"),
                            0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            t.append(r)),
                            0 === f.length && (f = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            t.append(f)),
                            r.length && (r[0].style.opacity = Math.max(-i, 0)),
                            f.length && (f[0].style.opacity = Math.max(i, 0)));
                            t.transform("translate3d(" + s + "px, " + c + "px, 0px) rotateX(" + h + "deg) rotateY(" + e + "deg)")
                        }
                    },
                    setTransition: function(t) {
                        if (u.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        u.params.virtualTranslate && 0 !== t) {
                            var i = !1;
                            u.slides.eq(u.activeIndex).transitionEnd(function() {
                                if (!i && u && n(this).hasClass(u.params.slideActiveClass)) {
                                    i = !0;
                                    u.animating = !1;
                                    for (var r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < r.length; t++)
                                        u.wrapper.trigger(r[t])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var t, e = 0, i, y, h, c, b;
                        for (u.params.cube.shadow && (u.isHorizontal() ? (t = u.wrapper.find(".swiper-cube-shadow"),
                        0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'),
                        u.wrapper.append(t)),
                        t.css({
                            height: u.width + "px"
                        })) : (t = u.container.find(".swiper-cube-shadow"),
                        0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'),
                        u.container.append(t)))),
                        i = 0; i < u.slides.length; i++) {
                            var f = u.slides.eq(i)
                              , o = 90 * i
                              , l = Math.floor(o / 360);
                            u.rtl && (o = -o,
                            l = Math.floor(-o / 360));
                            var s = Math.max(Math.min(f[0].progress, 1), -1)
                              , r = 0
                              , v = 0
                              , a = 0;
                            i % 4 == 0 ? (r = 4 * -l * u.size,
                            a = 0) : (i - 1) % 4 == 0 ? (r = 0,
                            a = 4 * -l * u.size) : (i - 2) % 4 == 0 ? (r = u.size + 4 * l * u.size,
                            a = u.size) : (i - 3) % 4 == 0 && (r = -u.size,
                            a = 3 * u.size + 4 * u.size * l);
                            u.rtl && (r = -r);
                            u.isHorizontal() || (v = r,
                            r = 0);
                            y = "rotateX(" + (u.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (u.isHorizontal() ? o : 0) + "deg) translate3d(" + r + "px, " + v + "px, " + a + "px)";
                            (s <= 1 && s > -1 && (e = 90 * i + 90 * s,
                            u.rtl && (e = 90 * -i - 90 * s)),
                            f.transform(y),
                            u.params.cube.slideShadows) && (h = u.isHorizontal() ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            c = u.isHorizontal() ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom"),
                            0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            f.append(h)),
                            0 === c.length && (c = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            f.append(c)),
                            h.length && (h[0].style.opacity = Math.max(-s, 0)),
                            c.length && (c[0].style.opacity = Math.max(s, 0)))
                        }
                        if (u.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + u.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + u.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + u.size / 2 + "px",
                            "transform-origin": "50% 50% -" + u.size / 2 + "px"
                        }),
                        u.params.cube.shadow)
                            if (u.isHorizontal())
                                t.transform("translate3d(0px, " + (u.width / 2 + u.params.cube.shadowOffset) + "px, " + -u.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.params.cube.shadowScale + ")");
                            else {
                                var p = Math.abs(e) - 90 * Math.floor(Math.abs(e) / 90)
                                  , k = 1.5 - (Math.sin(2 * p * Math.PI / 360) / 2 + Math.cos(2 * p * Math.PI / 360) / 2)
                                  , d = u.params.cube.shadowScale
                                  , w = u.params.cube.shadowScale / k
                                  , g = u.params.cube.shadowOffset;
                                t.transform("scale3d(" + d + ", 1, " + w + ") translate3d(0px, " + (u.height / 2 + g) + "px, " + -u.height / 2 / w + "px) rotateX(-90deg)")
                            }
                        b = u.isSafari || u.isUiWebView ? -u.size / 2 : 0;
                        u.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (u.isHorizontal() ? 0 : e) + "deg) rotateY(" + (u.isHorizontal() ? -e : 0) + "deg)")
                    },
                    setTransition: function(n) {
                        u.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n);
                        u.params.cube.shadow && !u.isHorizontal() && u.container.find(".swiper-cube-shadow").transition(n)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var w, r, f, a = u.translate, v = u.isHorizontal() ? -a + u.width / 2 : -a + u.height / 2, y = u.isHorizontal() ? u.params.coverflow.rotate : -u.params.coverflow.rotate, b = u.params.coverflow.depth, e = 0, k = u.slides.length; e < k; e++) {
                            var i = u.slides.eq(e)
                              , p = u.slidesSizesGrid[e]
                              , d = i[0].swiperSlideOffset
                              , t = (v - d - p / 2) / p * u.params.coverflow.modifier
                              , o = u.isHorizontal() ? y * t : 0
                              , s = u.isHorizontal() ? 0 : y * t
                              , h = -b * Math.abs(t)
                              , c = u.isHorizontal() ? 0 : u.params.coverflow.stretch * t
                              , l = u.isHorizontal() ? u.params.coverflow.stretch * t : 0;
                            Math.abs(l) < .001 && (l = 0);
                            Math.abs(c) < .001 && (c = 0);
                            Math.abs(h) < .001 && (h = 0);
                            Math.abs(o) < .001 && (o = 0);
                            Math.abs(s) < .001 && (s = 0);
                            w = "translate3d(" + l + "px," + c + "px," + h + "px)  rotateX(" + s + "deg) rotateY(" + o + "deg)";
                            (i.transform(w),
                            i[0].style.zIndex = 1 - Math.abs(Math.round(t)),
                            u.params.coverflow.slideShadows) && (r = u.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                            f = u.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"),
                            0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            i.append(r)),
                            0 === f.length && (f = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            i.append(f)),
                            r.length && (r[0].style.opacity = t > 0 ? t : 0),
                            f.length && (f[0].style.opacity = -t > 0 ? -t : 0))
                        }
                        u.browser.ie && (u.wrapper[0].style.perspectiveOrigin = v + "px 50%")
                    },
                    setTransition: function(n) {
                        u.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n)
                    }
                }
            };
            u.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(t, i) {
                    if (void 0 !== t && (void 0 === i && (i = !0),
                    0 !== u.slides.length)) {
                        var r = u.slides.eq(t)
                          , f = r.find("." + u.params.lazyLoadingClass + ":not(." + u.params.lazyStatusLoadedClass + "):not(." + u.params.lazyStatusLoadingClass + ")");
                        !r.hasClass(u.params.lazyLoadingClass) || r.hasClass(u.params.lazyStatusLoadedClass) || r.hasClass(u.params.lazyStatusLoadingClass) || (f = f.add(r[0]));
                        0 !== f.length && f.each(function() {
                            var t = n(this);
                            t.addClass(u.params.lazyStatusLoadingClass);
                            var f = t.attr("data-background")
                              , e = t.attr("data-src")
                              , o = t.attr("data-srcset")
                              , s = t.attr("data-sizes");
                            u.loadImage(t[0], e || f, o, s, !1, function() {
                                var n, h, c;
                                void 0 !== u && null !== u && u && ((f ? (t.css("background-image", 'url("' + f + '")'),
                                t.removeAttr("data-background")) : (o && (t.attr("srcset", o),
                                t.removeAttr("data-srcset")),
                                s && (t.attr("sizes", s),
                                t.removeAttr("data-sizes")),
                                e && (t.attr("src", e),
                                t.removeAttr("data-src"))),
                                t.addClass(u.params.lazyStatusLoadedClass).removeClass(u.params.lazyStatusLoadingClass),
                                r.find("." + u.params.lazyPreloaderClass + ", ." + u.params.preloaderClass).remove(),
                                u.params.loop && i) && (n = r.attr("data-swiper-slide-index"),
                                r.hasClass(u.params.slideDuplicateClass) ? (h = u.wrapper.children('[data-swiper-slide-index="' + n + '"]:not(.' + u.params.slideDuplicateClass + ")"),
                                u.lazy.loadImageInSlide(h.index(), !1)) : (c = u.wrapper.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'),
                                u.lazy.loadImageInSlide(c.index(), !1))),
                                u.emit("onLazyImageReady", u, r[0], t[0]))
                            });
                            u.emit("onLazyImageLoad", u, r[0], t[0])
                        })
                    }
                },
                load: function() {
                    var t, i = u.params.slidesPerView, f, e;
                    if ("auto" === i && (i = 0),
                    u.lazy.initialImageLoaded || (u.lazy.initialImageLoaded = !0),
                    u.params.watchSlidesVisibility)
                        u.wrapper.children("." + u.params.slideVisibleClass).each(function() {
                            u.lazy.loadImageInSlide(n(this).index())
                        });
                    else if (i > 1)
                        for (t = u.activeIndex; t < u.activeIndex + i; t++)
                            u.slides[t] && u.lazy.loadImageInSlide(t);
                    else
                        u.lazy.loadImageInSlide(u.activeIndex);
                    if (u.params.lazyLoadingInPrevNext)
                        if (i > 1 || u.params.lazyLoadingInPrevNextAmount && u.params.lazyLoadingInPrevNextAmount > 1) {
                            var o = u.params.lazyLoadingInPrevNextAmount
                              , r = i
                              , s = Math.min(u.activeIndex + r + Math.max(o, r), u.slides.length)
                              , h = Math.max(u.activeIndex - Math.max(r, o), 0);
                            for (t = u.activeIndex + i; t < s; t++)
                                u.slides[t] && u.lazy.loadImageInSlide(t);
                            for (t = h; t < u.activeIndex; t++)
                                u.slides[t] && u.lazy.loadImageInSlide(t)
                        } else
                            f = u.wrapper.children("." + u.params.slideNextClass),
                            f.length > 0 && u.lazy.loadImageInSlide(f.index()),
                            e = u.wrapper.children("." + u.params.slidePrevClass),
                            e.length > 0 && u.lazy.loadImageInSlide(e.index())
                },
                onTransitionStart: function() {
                    u.params.lazyLoading && (u.params.lazyLoadingOnTransitionStart || !u.params.lazyLoadingOnTransitionStart && !u.lazy.initialImageLoaded) && u.lazy.load()
                },
                onTransitionEnd: function() {
                    u.params.lazyLoading && !u.params.lazyLoadingOnTransitionStart && u.lazy.load()
                }
            };
            u.scrollbar = {
                isTouched: !1,
                setDragPosition: function(n) {
                    var i = u.scrollbar
                      , e = u.isHorizontal() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX || n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY || n.clientY
                      , t = e - i.track.offset()[u.isHorizontal() ? "left" : "top"] - i.dragSize / 2
                      , r = -u.minTranslate() * i.moveDivider
                      , f = -u.maxTranslate() * i.moveDivider;
                    t < r ? t = r : t > f && (t = f);
                    t = -t / i.moveDivider;
                    u.updateProgress(t);
                    u.setWrapperTranslate(t, !0)
                },
                dragStart: function(n) {
                    var t = u.scrollbar;
                    t.isTouched = !0;
                    n.preventDefault();
                    n.stopPropagation();
                    t.setDragPosition(n);
                    clearTimeout(t.dragTimeout);
                    t.track.transition(0);
                    u.params.scrollbarHide && t.track.css("opacity", 1);
                    u.wrapper.transition(100);
                    t.drag.transition(100);
                    u.emit("onScrollbarDragStart", u)
                },
                dragMove: function(n) {
                    var t = u.scrollbar;
                    t.isTouched && (n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                    t.setDragPosition(n),
                    u.wrapper.transition(0),
                    t.track.transition(0),
                    t.drag.transition(0),
                    u.emit("onScrollbarDragMove", u))
                },
                dragEnd: function() {
                    var n = u.scrollbar;
                    n.isTouched && (n.isTouched = !1,
                    u.params.scrollbarHide && (clearTimeout(n.dragTimeout),
                    n.dragTimeout = setTimeout(function() {
                        n.track.css("opacity", 0);
                        n.track.transition(400)
                    }, 1e3)),
                    u.emit("onScrollbarDragEnd", u),
                    u.params.scrollbarSnapOnRelease && u.slideReset())
                },
                draggableEvents: function() {
                    return u.params.simulateTouch !== !1 || u.support.touch ? u.touchEvents : u.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var t = u.scrollbar
                      , i = u.support.touch ? t.track : document;
                    n(t.track).on(t.draggableEvents.start, t.dragStart);
                    n(i).on(t.draggableEvents.move, t.dragMove);
                    n(i).on(t.draggableEvents.end, t.dragEnd)
                },
                disableDraggable: function() {
                    var t = u.scrollbar
                      , i = u.support.touch ? t.track : document;
                    n(t.track).off(t.draggableEvents.start, t.dragStart);
                    n(i).off(t.draggableEvents.move, t.dragMove);
                    n(i).off(t.draggableEvents.end, t.dragEnd)
                },
                set: function() {
                    if (u.params.scrollbar) {
                        var t = u.scrollbar;
                        t.track = n(u.params.scrollbar);
                        u.params.uniqueNavElements && "string" == typeof u.params.scrollbar && t.track.length > 1 && 1 === u.container.find(u.params.scrollbar).length && (t.track = u.container.find(u.params.scrollbar));
                        t.drag = t.track.find(".swiper-scrollbar-drag");
                        0 === t.drag.length && (t.drag = n('<div class="swiper-scrollbar-drag"><\/div>'),
                        t.track.append(t.drag));
                        t.drag[0].style.width = "";
                        t.drag[0].style.height = "";
                        t.trackSize = u.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight;
                        t.divider = u.size / u.virtualSize;
                        t.moveDivider = t.divider * (t.trackSize / u.size);
                        t.dragSize = t.trackSize * t.divider;
                        u.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px";
                        t.track[0].style.display = t.divider >= 1 ? "none" : "";
                        u.params.scrollbarHide && (t.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (u.params.scrollbar) {
                        var t, n = u.scrollbar, i = (u.translate,
                        n.dragSize);
                        t = (n.trackSize - n.dragSize) * u.progress;
                        u.rtl && u.isHorizontal() ? (t = -t,
                        t > 0 ? (i = n.dragSize - t,
                        t = 0) : -t + n.dragSize > n.trackSize && (i = n.trackSize + t)) : t < 0 ? (i = n.dragSize + t,
                        t = 0) : t + n.dragSize > n.trackSize && (i = n.trackSize - t);
                        u.isHorizontal() ? (u.support.transforms3d ? n.drag.transform("translate3d(" + t + "px, 0, 0)") : n.drag.transform("translateX(" + t + "px)"),
                        n.drag[0].style.width = i + "px") : (u.support.transforms3d ? n.drag.transform("translate3d(0px, " + t + "px, 0)") : n.drag.transform("translateY(" + t + "px)"),
                        n.drag[0].style.height = i + "px");
                        u.params.scrollbarHide && (clearTimeout(n.timeout),
                        n.track[0].style.opacity = 1,
                        n.timeout = setTimeout(function() {
                            n.track[0].style.opacity = 0;
                            n.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(n) {
                    u.params.scrollbar && u.scrollbar.drag.transition(n)
                }
            };
            u.controller = {
                LinearSpline: function(n, t) {
                    var u = function() {
                        var n, t, i;
                        return function(r, u) {
                            for (t = -1,
                            n = r.length; n - t > 1; )
                                r[i = n + t >> 1] <= u ? t = i : n = i;
                            return n
                        }
                    }(), i, r;
                    this.x = n;
                    this.y = t;
                    this.lastIndex = n.length - 1;
                    this.x.length;
                    this.interpolate = function(n) {
                        return n ? (r = u(this.x, n),
                        i = r - 1,
                        (n - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                    }
                },
                getInterpolateFunction: function(n) {
                    u.controller.spline || (u.controller.spline = u.params.loop ? new u.controller.LinearSpline(u.slidesGrid,n.slidesGrid) : new u.controller.LinearSpline(u.snapGrid,n.snapGrid))
                },
                setTranslate: function(n, i) {
                    function o(t) {
                        n = t.rtl && "horizontal" === t.params.direction ? -u.translate : u.translate;
                        "slide" === u.params.controlBy && (u.controller.getInterpolateFunction(t),
                        f = -u.controller.spline.interpolate(-n));
                        f && "container" !== u.params.controlBy || (s = (t.maxTranslate() - t.minTranslate()) / (u.maxTranslate() - u.minTranslate()),
                        f = (n - u.minTranslate()) * s + t.minTranslate());
                        u.params.controlInverse && (f = t.maxTranslate() - f);
                        t.updateProgress(f);
                        t.setWrapperTranslate(f, !1, u);
                        t.updateActiveIndex()
                    }
                    var s, f, r = u.params.control, e;
                    if (Array.isArray(r))
                        for (e = 0; e < r.length; e++)
                            r[e] !== i && r[e]instanceof t && o(r[e]);
                    else
                        r instanceof t && i !== r && o(r)
                },
                setTransition: function(n, i) {
                    function e(t) {
                        t.setWrapperTransition(n, u);
                        0 !== n && (t.onTransitionStart(),
                        t.wrapper.transitionEnd(function() {
                            r && (t.params.loop && "slide" === u.params.controlBy && t.fixLoop(),
                            t.onTransitionEnd())
                        }))
                    }
                    var f, r = u.params.control;
                    if (Array.isArray(r))
                        for (f = 0; f < r.length; f++)
                            r[f] !== i && r[f]instanceof t && e(r[f]);
                    else
                        r instanceof t && i !== r && e(r)
                }
            };
            u.hashnav = {
                onHashCange: function() {
                    var n = document.location.hash.replace("#", "");
                    n !== u.slides.eq(u.activeIndex).attr("data-hash") && u.slideTo(u.wrapper.children("." + u.params.slideClass + '[data-hash="' + n + '"]').index())
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on";
                    n(window)[i]("hashchange", u.hashnav.onHashCange)
                },
                setHash: function() {
                    if (u.hashnav.initialized && u.params.hashnav)
                        if (u.params.replaceState && window.history && window.history.replaceState)
                            window.history.replaceState(null, null, "#" + u.slides.eq(u.activeIndex).attr("data-hash") || "");
                        else {
                            var n = u.slides.eq(u.activeIndex)
                              , t = n.attr("data-hash") || n.attr("data-history");
                            document.location.hash = t || ""
                        }
                },
                init: function() {
                    var i, t, r, n, f, e;
                    if (u.params.hashnav && !u.params.history) {
                        if (u.hashnav.initialized = !0,
                        i = document.location.hash.replace("#", ""),
                        i)
                            for (t = 0,
                            r = u.slides.length; t < r; t++)
                                n = u.slides.eq(t),
                                f = n.attr("data-hash") || n.attr("data-history"),
                                f !== i || n.hasClass(u.params.slideDuplicateClass) || (e = n.index(),
                                u.slideTo(e, 0, u.params.runCallbacksOnInit, !0));
                        u.params.hashnavWatchState && u.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    u.params.hashnavWatchState && u.hashnav.attachEvents(!0)
                }
            };
            u.history = {
                init: function() {
                    if (u.params.history) {
                        if (!window.history || !window.history.pushState)
                            return u.params.history = !1,
                            void (u.params.hashnav = !0);
                        u.history.initialized = !0;
                        this.paths = this.getPathValues();
                        (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, u.params.runCallbacksOnInit),
                        u.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    u.history.paths = u.history.getPathValues();
                    u.history.scrollToSlide(u.params.speed, u.history.paths.value, !1)
                },
                getPathValues: function() {
                    var n = window.location.pathname.slice(1).split("/")
                      , t = n.length;
                    return {
                        key: n[t - 2],
                        value: n[t - 1]
                    }
                },
                setHistory: function(n, t) {
                    if (u.history.initialized && u.params.history) {
                        var r = u.slides.eq(t)
                          , i = this.slugify(r.attr("data-history"));
                        window.location.pathname.includes(n) || (i = n + "/" + i);
                        u.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
                    }
                },
                slugify: function(n) {
                    return n.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(n, t, i) {
                    var r, e, f, o, s;
                    if (t)
                        for (r = 0,
                        e = u.slides.length; r < e; r++)
                            f = u.slides.eq(r),
                            o = this.slugify(f.attr("data-history")),
                            o !== t || f.hasClass(u.params.slideDuplicateClass) || (s = f.index(),
                            u.slideTo(s, n, i));
                    else
                        u.slideTo(0, n, i)
                }
            };
            u.disableKeyboardControl = function() {
                u.params.keyboardControl = !1;
                n(document).off("keydown", vt)
            }
            ;
            u.enableKeyboardControl = function() {
                u.params.keyboardControl = !0;
                n(document).on("keydown", vt)
            }
            ;
            u.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            };
            u.params.mousewheelControl && (u.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var n = "onwheel"in document, t;
                return n || (t = document.createElement("div"),
                t.setAttribute("onwheel", "return;"),
                n = "function" == typeof t.onwheel),
                !n && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (n = document.implementation.hasFeature("Events.wheel", "3.0")),
                n
            }() ? "wheel" : "mousewheel");
            u.disableMousewheelControl = function() {
                if (!u.mousewheel.event)
                    return !1;
                var t = u.container;
                return "container" !== u.params.mousewheelEventsTarged && (t = n(u.params.mousewheelEventsTarged)),
                t.off(u.mousewheel.event, yt),
                u.params.mousewheelControl = !1,
                !0
            }
            ;
            u.enableMousewheelControl = function() {
                if (!u.mousewheel.event)
                    return !1;
                var t = u.container;
                return "container" !== u.params.mousewheelEventsTarged && (t = n(u.params.mousewheelEventsTarged)),
                t.on(u.mousewheel.event, yt),
                u.params.mousewheelControl = !0,
                !0
            }
            ;
            u.parallax = {
                setTranslate: function() {
                    u.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        pt(this, u.progress)
                    });
                    u.slides.each(function() {
                        var t = n(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            pt(this, Math.min(Math.max(t[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = u.params.speed);
                    u.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var i = n(this)
                          , r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0);
                        i.transition(r)
                    })
                }
            };
            u.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: u.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(n) {
                    if (n.targetTouches.length < 2)
                        return 1;
                    var t = n.targetTouches[0].pageX
                      , i = n.targetTouches[0].pageY
                      , r = n.targetTouches[1].pageX
                      , u = n.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(r - t, 2) + Math.pow(u - i, 2))
                },
                onGestureStart: function(t) {
                    var i = u.zoom;
                    if (!u.support.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                            return;
                        i.gesture.scaleStart = i.getDistanceBetweenTouches(t)
                    }
                    if (!(i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = n(this),
                    0 === i.gesture.slide.length && (i.gesture.slide = u.slides.eq(u.activeIndex)),
                    i.gesture.image = i.gesture.slide.find("img, svg, canvas"),
                    i.gesture.imageWrap = i.gesture.image.parent("." + u.params.zoomContainerClass),
                    i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || u.params.zoomMax,
                    0 !== i.gesture.imageWrap.length)))
                        return void (i.gesture.image = void 0);
                    i.gesture.image.transition(0);
                    i.isScaling = !0
                },
                onGestureChange: function(n) {
                    var t = u.zoom;
                    if (!u.support.gestures) {
                        if ("touchmove" !== n.type || "touchmove" === n.type && n.targetTouches.length < 2)
                            return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(n)
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (t.scale = u.support.gestures ? n.scale * t.currentScale : t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
                    t.scale < u.params.zoomMin && (t.scale = u.params.zoomMin + 1 - Math.pow(u.params.zoomMin - t.scale + 1, .5)),
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                },
                onGestureEnd: function(n) {
                    var t = u.zoom;
                    !u.support.gestures && ("touchend" !== n.type || "touchend" === n.type && n.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), u.params.zoomMin),
                    t.gesture.image.transition(u.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                    t.currentScale = t.scale,
                    t.isScaling = !1,
                    1 === t.scale && (t.gesture.slide = void 0))
                },
                onTouchStart: function(n, t) {
                    var i = n.zoom;
                    i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === n.device.os && t.preventDefault(),
                    i.image.isTouched = !0,
                    i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(n) {
                    var t = u.zoom, i, r;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (u.allowClick = !1,
                    t.image.isTouched && t.gesture.slide) && (t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                    t.image.height = t.gesture.image[0].offsetHeight,
                    t.image.startX = u.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                    t.image.startY = u.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                    t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                    t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                    t.gesture.imageWrap.transition(0),
                    u.rtl && (t.image.startX = -t.image.startX),
                    u.rtl && (t.image.startY = -t.image.startY)),
                    i = t.image.width * t.scale,
                    r = t.image.height * t.scale,
                    !(i < t.gesture.slideWidth && r < t.gesture.slideHeight))) {
                        if ((t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0),
                        t.image.maxX = -t.image.minX,
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0),
                        t.image.maxY = -t.image.minY,
                        t.image.touchesCurrent.x = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                        t.image.touchesCurrent.y = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY,
                        !t.image.isMoved && !t.isScaling) && (u.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x || !u.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y))
                            return void (t.image.isTouched = !1);
                        n.preventDefault();
                        n.stopPropagation();
                        t.image.isMoved = !0;
                        t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX;
                        t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY;
                        t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8));
                        t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8));
                        t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8));
                        t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8));
                        t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x);
                        t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y);
                        t.velocity.prevTime || (t.velocity.prevTime = Date.now());
                        t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2;
                        t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2;
                        Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0);
                        Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0);
                        t.velocity.prevPositionX = t.image.touchesCurrent.x;
                        t.velocity.prevPositionY = t.image.touchesCurrent.y;
                        t.velocity.prevTime = Date.now();
                        t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTouchEnd: function(n) {
                    var t = n.zoom, e, o, s;
                    if (t.gesture.image && 0 !== t.gesture.image.length) {
                        if (!t.image.isTouched || !t.image.isMoved)
                            return t.image.isTouched = !1,
                            void (t.image.isMoved = !1);
                        t.image.isTouched = !1;
                        t.image.isMoved = !1;
                        var i = 300
                          , r = 300
                          , h = t.velocity.x * i
                          , u = t.image.currentX + h
                          , c = t.velocity.y * r
                          , f = t.image.currentY + c;
                        0 !== t.velocity.x && (i = Math.abs((u - t.image.currentX) / t.velocity.x));
                        0 !== t.velocity.y && (r = Math.abs((f - t.image.currentY) / t.velocity.y));
                        e = Math.max(i, r);
                        t.image.currentX = u;
                        t.image.currentY = f;
                        o = t.image.width * t.scale;
                        s = t.image.height * t.scale;
                        t.image.minX = Math.min(t.gesture.slideWidth / 2 - o / 2, 0);
                        t.image.maxX = -t.image.minX;
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - s / 2, 0);
                        t.image.maxY = -t.image.minY;
                        t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX);
                        t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY);
                        t.gesture.imageWrap.transition(e).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(n) {
                    var t = n.zoom;
                    t.gesture.slide && n.previousIndex !== n.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                    t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                    t.scale = t.currentScale = 1)
                },
                toggleZoom: function(t, i) {
                    var r = t.zoom, s, h, y, p, w, b, u, f, k, d, g, nt, e, o, c, l, a, v;
                    (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? n(t.clickedSlide) : t.slides.eq(t.activeIndex),
                    r.gesture.image = r.gesture.slide.find("img, svg, canvas"),
                    r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)),
                    r.gesture.image && 0 !== r.gesture.image.length) && (void 0 === r.image.touchesStart.x && i ? (s = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX,
                    h = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (s = r.image.touchesStart.x,
                    h = r.image.touchesStart.y),
                    r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1,
                    r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                    r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax,
                    i ? (a = r.gesture.slide[0].offsetWidth,
                    v = r.gesture.slide[0].offsetHeight,
                    y = r.gesture.slide.offset().left,
                    p = r.gesture.slide.offset().top,
                    w = y + a / 2 - s,
                    b = p + v / 2 - h,
                    k = r.gesture.image[0].offsetWidth,
                    d = r.gesture.image[0].offsetHeight,
                    g = k * r.scale,
                    nt = d * r.scale,
                    e = Math.min(a / 2 - g / 2, 0),
                    o = Math.min(v / 2 - nt / 2, 0),
                    c = -e,
                    l = -o,
                    u = w * r.scale,
                    f = b * r.scale,
                    u < e && (u = e),
                    u > c && (u = c),
                    f < o && (f = o),
                    f > l && (f = l)) : (u = 0,
                    f = 0),
                    r.gesture.imageWrap.transition(300).transform("translate3d(" + u + "px, " + f + "px,0)"),
                    r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")")))
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on", r;
                    u.params.zoom && (r = (u.slides,
                    !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }),
                    u.support.gestures ? (u.slides[i]("gesturestart", u.zoom.onGestureStart, r),
                    u.slides[i]("gesturechange", u.zoom.onGestureChange, r),
                    u.slides[i]("gestureend", u.zoom.onGestureEnd, r)) : "touchstart" === u.touchEvents.start && (u.slides[i](u.touchEvents.start, u.zoom.onGestureStart, r),
                    u.slides[i](u.touchEvents.move, u.zoom.onGestureChange, r),
                    u.slides[i](u.touchEvents.end, u.zoom.onGestureEnd, r)),
                    u[i]("touchStart", u.zoom.onTouchStart),
                    u.slides.each(function(t, r) {
                        n(r).find("." + u.params.zoomContainerClass).length > 0 && n(r)[i](u.touchEvents.move, u.zoom.onTouchMove)
                    }),
                    u[i]("touchEnd", u.zoom.onTouchEnd),
                    u[i]("transitionEnd", u.zoom.onTransitionEnd),
                    u.params.zoomToggle && u.on("doubleTap", u.zoom.toggleZoom))
                },
                init: function() {
                    u.zoom.attachEvents()
                },
                destroy: function() {
                    u.zoom.attachEvents(!0)
                }
            };
            u._plugins = [];
            for (lt in u.plugins)
                at = u.plugins[lt](u, u.params[lt]),
                at && u._plugins.push(at);
            return u.callPlugins = function(n) {
                for (var t = 0; t < u._plugins.length; t++)
                    n in u._plugins[t] && u._plugins[t][n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            u.emitterEventListeners = {},
            u.emit = function(n) {
                u.params[n] && u.params[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (u.emitterEventListeners[n])
                    for (t = 0; t < u.emitterEventListeners[n].length; t++)
                        u.emitterEventListeners[n][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                u.callPlugins && u.callPlugins(n, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            u.on = function(n, t) {
                return n = et(n),
                u.emitterEventListeners[n] || (u.emitterEventListeners[n] = []),
                u.emitterEventListeners[n].push(t),
                u
            }
            ,
            u.off = function(n, t) {
                var i;
                if (n = et(n),
                void 0 === t)
                    return u.emitterEventListeners[n] = [],
                    u;
                if (u.emitterEventListeners[n] && 0 !== u.emitterEventListeners[n].length) {
                    for (i = 0; i < u.emitterEventListeners[n].length; i++)
                        u.emitterEventListeners[n][i] === t && u.emitterEventListeners[n].splice(i, 1);
                    return u
                }
            }
            ,
            u.once = function(n, t) {
                n = et(n);
                var i = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                    u.off(n, i)
                };
                return u.on(n, i),
                u
            }
            ,
            u.a11y = {
                makeFocusable: function(n) {
                    return n.attr("tabIndex", "0"),
                    n
                },
                addRole: function(n, t) {
                    return n.attr("role", t),
                    n
                },
                addLabel: function(n, t) {
                    return n.attr("aria-label", t),
                    n
                },
                disable: function(n) {
                    return n.attr("aria-disabled", !0),
                    n
                },
                enable: function(n) {
                    return n.attr("aria-disabled", !1),
                    n
                },
                onEnterKey: function(t) {
                    13 === t.keyCode && (n(t.target).is(u.params.nextButton) ? (u.onClickNext(t),
                    u.isEnd ? u.a11y.notify(u.params.lastSlideMessage) : u.a11y.notify(u.params.nextSlideMessage)) : n(t.target).is(u.params.prevButton) && (u.onClickPrev(t),
                    u.isBeginning ? u.a11y.notify(u.params.firstSlideMessage) : u.a11y.notify(u.params.prevSlideMessage)),
                    n(t.target).is("." + u.params.bulletClass) && n(t.target)[0].click())
                },
                liveRegion: n('<span class="' + u.params.notificationClass + '" aria-live="assertive" aria-atomic="true"><\/span>'),
                notify: function(n) {
                    var t = u.a11y.liveRegion;
                    0 !== t.length && (t.html(""),
                    t.html(n))
                },
                init: function() {
                    u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.a11y.makeFocusable(u.nextButton),
                    u.a11y.addRole(u.nextButton, "button"),
                    u.a11y.addLabel(u.nextButton, u.params.nextSlideMessage));
                    u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.a11y.makeFocusable(u.prevButton),
                    u.a11y.addRole(u.prevButton, "button"),
                    u.a11y.addLabel(u.prevButton, u.params.prevSlideMessage));
                    n(u.container).append(u.a11y.liveRegion)
                },
                initPagination: function() {
                    u.params.pagination && u.params.paginationClickable && u.bullets && u.bullets.length && u.bullets.each(function() {
                        var t = n(this);
                        u.a11y.makeFocusable(t);
                        u.a11y.addRole(t, "button");
                        u.a11y.addLabel(t, u.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                    })
                },
                destroy: function() {
                    u.a11y.liveRegion && u.a11y.liveRegion.length > 0 && u.a11y.liveRegion.remove()
                }
            },
            u.init = function() {
                u.params.loop && u.createLoop();
                u.updateContainerSize();
                u.updateSlidesSize();
                u.updatePagination();
                u.params.scrollbar && u.scrollbar && (u.scrollbar.set(),
                u.params.scrollbarDraggable && u.scrollbar.enableDraggable());
                "slide" !== u.params.effect && u.effects[u.params.effect] && (u.params.loop || u.updateProgress(),
                u.effects[u.params.effect].setTranslate());
                u.params.loop ? u.slideTo(u.params.initialSlide + u.loopedSlides, 0, u.params.runCallbacksOnInit) : (u.slideTo(u.params.initialSlide, 0, u.params.runCallbacksOnInit),
                0 === u.params.initialSlide && (u.parallax && u.params.parallax && u.parallax.setTranslate(),
                u.lazy && u.params.lazyLoading && (u.lazy.load(),
                u.lazy.initialImageLoaded = !0)));
                u.attachEvents();
                u.params.observer && u.support.observer && u.initObservers();
                u.params.preloadImages && !u.params.lazyLoading && u.preloadImages();
                u.params.zoom && u.zoom && u.zoom.init();
                u.params.autoplay && u.startAutoplay();
                u.params.keyboardControl && u.enableKeyboardControl && u.enableKeyboardControl();
                u.params.mousewheelControl && u.enableMousewheelControl && u.enableMousewheelControl();
                u.params.hashnavReplaceState && (u.params.replaceState = u.params.hashnavReplaceState);
                u.params.history && u.history && u.history.init();
                u.params.hashnav && u.hashnav && u.hashnav.init();
                u.params.a11y && u.a11y && u.a11y.init();
                u.emit("onInit", u)
            }
            ,
            u.cleanupStyles = function() {
                u.container.removeClass(u.classNames.join(" ")).removeAttr("style");
                u.wrapper.removeAttr("style");
                u.slides && u.slides.length && u.slides.removeClass([u.params.slideVisibleClass, u.params.slideActiveClass, u.params.slideNextClass, u.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row");
                u.paginationContainer && u.paginationContainer.length && u.paginationContainer.removeClass(u.params.paginationHiddenClass);
                u.bullets && u.bullets.length && u.bullets.removeClass(u.params.bulletActiveClass);
                u.params.prevButton && n(u.params.prevButton).removeClass(u.params.buttonDisabledClass);
                u.params.nextButton && n(u.params.nextButton).removeClass(u.params.buttonDisabledClass);
                u.params.scrollbar && u.scrollbar && (u.scrollbar.track && u.scrollbar.track.length && u.scrollbar.track.removeAttr("style"),
                u.scrollbar.drag && u.scrollbar.drag.length && u.scrollbar.drag.removeAttr("style"))
            }
            ,
            u.destroy = function(n, t) {
                u.detachEvents();
                u.stopAutoplay();
                u.params.scrollbar && u.scrollbar && u.params.scrollbarDraggable && u.scrollbar.disableDraggable();
                u.params.loop && u.destroyLoop();
                t && u.cleanupStyles();
                u.disconnectObservers();
                u.params.zoom && u.zoom && u.zoom.destroy();
                u.params.keyboardControl && u.disableKeyboardControl && u.disableKeyboardControl();
                u.params.mousewheelControl && u.disableMousewheelControl && u.disableMousewheelControl();
                u.params.a11y && u.a11y && u.a11y.destroy();
                u.params.history && !u.params.replaceState && window.removeEventListener("popstate", u.history.setHistoryPopState);
                u.params.hashnav && u.hashnav && u.hashnav.destroy();
                u.emit("onDestroy");
                n !== !1 && (u = null)
            }
            ,
            u.init(),
            u
        }
    }, u, r, i;
    for (t.prototype = {
        isSafari: function() {
            var n = window.navigator.userAgent.toLowerCase();
            return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(n) {
            return "[object Array]" === Object.prototype.toString.apply(n)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var n = document.createElement("div");
                return n.innerHTML = "<!--[if lte IE 9]><i><\/i><![endif]-->",
                1 === n.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var n = window.navigator.userAgent
              , i = n.match(/(Android);?[\s\/]+([\d.]+)?/)
              , t = n.match(/(iPad).*OS\s([\d_]+)/)
              , r = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , u = !t && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || u || r,
                android: i
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var n = document.createElement("div").style;
                return "webkitPerspective"in n || "MozPerspective"in n || "OPerspective"in n || "MsPerspective"in n || "perspective"in n
            }(),
            flexbox: function() {
                for (var i = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                    if (t[n]in i)
                        return !0
            }(),
            observer: function() {
                return "MutationObserver"in window || "WebkitMutationObserver"in window
            }(),
            passiveListener: function() {
                var n = !1, t;
                try {
                    t = Object.defineProperty({}, "passive", {
                        get: function() {
                            n = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t)
                } catch (n) {}
                return n
            }(),
            gestures: function() {
                return "ongesturestart"in window
            }()
        },
        plugins: {}
    },
    u = ["jQuery", "Zepto", "Dom7"],
    r = 0; r < u.length; r++)
        window[u[r]] && function(n) {
            n.fn.swiper = function(i) {
                var r;
                return n(this).each(function() {
                    var n = new t(this,i);
                    r || (r = n)
                }),
                r
            }
        }(window[u[r]]);
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7;
    i && ("transitionEnd"in i.fn || (i.fn.transitionEnd = function(n) {
        function r(f) {
            if (f.target === this)
                for (n.call(this, f),
                t = 0; t < i.length; t++)
                    u.off(i[t], r)
        }
        var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], u = this;
        if (n)
            for (t = 0; t < i.length; t++)
                u.on(i[t], r);
        return this
    }
    ),
    "transform"in i.fn || (i.fn.transform = function(n) {
        for (var t, i = 0; i < this.length; i++)
            t = this[i].style,
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = n;
        return this
    }
    ),
    "transition"in i.fn || (i.fn.transition = function(n) {
        var i, t;
        for ("string" != typeof n && (n += "ms"),
        i = 0; i < this.length; i++)
            t = this[i].style,
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = n;
        return this
    }
    ),
    "outerWidth"in i.fn || (i.fn.outerWidth = function(n) {
        return this.length > 0 ? n ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    }
    ));
    window.Swiper = t
}();
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
}),
function(n) {
    function h(t, i, r, f) {
        var e = n();
        return n.each(u, function(n, u) {
            var o = u.offset().top
              , s = u.offset().left
              , h = s + u.width()
              , c = o + u.height()
              , l = !(s > i || h < f || o > r || c < t);
            l && e.push(u)
        }),
        e
    }
    function c() {
        ++r;
        var u = t.scrollTop()
          , e = t.scrollLeft()
          , s = e + t.width()
          , c = u + t.height()
          , o = h(u + i.top, s + i.right, c + i.bottom, e + i.left);
        n.each(o, function(n, t) {
            var i = t.data("scrollSpy:ticks");
            typeof i != "number" && t.triggerHandler("scrollSpy:enter");
            t.data("scrollSpy:ticks", r)
        });
        n.each(f, function(n, t) {
            var i = t.data("scrollSpy:ticks");
            typeof i == "number" && i !== r && (t.triggerHandler("scrollSpy:exit"),
            t.data("scrollSpy:ticks", null))
        });
        f = o
    }
    function l() {
        t.trigger("scrollSpy:winSize")
    }
    function s(n, t, i) {
        var r, u, s, f = null, e = 0, h;
        return i || (i = {}),
        h = function() {
            e = i.leading === !1 ? 0 : o();
            f = null;
            s = n.apply(r, u);
            r = u = null
        }
        ,
        function() {
            var c = o(), l;
            return e || i.leading !== !1 || (e = c),
            l = t - (c - e),
            r = this,
            u = arguments,
            l <= 0 ? (clearTimeout(f),
            f = null,
            e = c,
            s = n.apply(r, u),
            r = u = null) : f || i.trailing === !1 || (f = setTimeout(h, l)),
            s
        }
    }
    var t = n(window)
      , u = []
      , f = []
      , e = !1
      , r = 0
      , i = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
      , o = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    n.scrollSpy = function(r, f) {
        r = n(r);
        r.each(function(t, i) {
            u.push(n(i))
        });
        f = f || {
            throttle: 100
        };
        i.top = f.offsetTop || 0;
        i.right = f.offsetRight || 0;
        i.bottom = f.offsetBottom || 0;
        i.left = f.offsetLeft || 0;
        var h = s(c, f.throttle || 100)
          , o = function() {
            n(document).ready(h)
        };
        if (!e) {
            t.on("scroll", o);
            t.on("resize", o);
            e = !0
        }
        return setTimeout(o, 0),
        r
    }
    ;
    n.winSizeSpy = function(i) {
        n.winSizeSpy = function() {
            return t
        }
        ;
        i = i || {
            throttle: 100
        };
        return t.on("resize", s(l, i.throttle || 100))
    }
    ;
    n.fn.scrollSpy = function(t) {
        return n.scrollSpy(n(this), t)
    }
}(jQuery);
!function(n, t) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], t);
    else if ("undefined" != typeof exports)
        t(module, exports);
    else {
        var i = {
            exports: {}
        };
        t(i, i.exports);
        n.WOW = i.exports
    }
}(this, function(n, t) {
    "use strict";
    function r(n, t) {
        if (!(n instanceof t))
            throw new TypeError("Cannot call a class as a function");
    }
    function f(n, t) {
        return t.indexOf(n) >= 0
    }
    function l(n, t) {
        var i, r;
        for (i in t)
            null == n[i] && (r = t[i],
            n[i] = r);
        return n
    }
    function a(n) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)
    }
    function v(n) {
        var i = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]
          , r = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]
          , u = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
          , t = void 0;
        return null != document.createEvent ? (t = document.createEvent("CustomEvent"),
        t.initCustomEvent(n, i, r, u)) : null != document.createEventObject ? (t = document.createEventObject(),
        t.eventType = n) : t.eventName = n,
        t
    }
    function y(n, t) {
        null != n.dispatchEvent ? n.dispatchEvent(t) : t in (null != n) ? n[t]() : "on" + t in (null != n) && n["on" + t]()
    }
    function i(n, t, i) {
        null != n.addEventListener ? n.addEventListener(t, i, !1) : null != n.attachEvent ? n.attachEvent("on" + t, i) : n[t] = i
    }
    function e(n, t, i) {
        null != n.removeEventListener ? n.removeEventListener(t, i, !1) : null != n.detachEvent ? n.detachEvent("on" + t, i) : delete n[t]
    }
    function p() {
        return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, s, u = function() {
        function n(n, t) {
            for (var i, r = 0; r < t.length; r++)
                i = t[r],
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(n, i.key, i)
        }
        return function(t, i, r) {
            return i && n(t.prototype, i),
            r && n(t, r),
            t
        }
    }(), w = window.WeakMap || window.MozWeakMap || function() {
        function n() {
            r(this, n);
            this.keys = [];
            this.values = []
        }
        return u(n, [{
            key: "get",
            value: function(n) {
                for (var i, t = 0; t < this.keys.length; t++)
                    if (i = this.keys[t],
                    i === n)
                        return this.values[t]
            }
        }, {
            key: "set",
            value: function(n, t) {
                for (var r, i = 0; i < this.keys.length; i++)
                    if (r = this.keys[i],
                    r === n)
                        return this.values[i] = t,
                        this;
                return this.keys.push(n),
                this.values.push(t),
                this
            }
        }]),
        n
    }(), h = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (s = o = function() {
        function n() {
            r(this, n);
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return u(n, [{
            key: "observe",
            value: function() {}
        }]),
        n
    }(),
    o.notSupported = !0,
    s), c = window.getComputedStyle || function(n) {
        var t = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(i) {
                "float" === i && (i = "styleFloat");
                t.test(i) && i.replace(t, function(n, t) {
                    return t.toUpperCase()
                });
                var r = n.currentStyle;
                return (null != r ? r[i] : void 0) || null
            }
        }
    }
    , b = function() {
        function n() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            r(this, n);
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            };
            this.animate = function() {
                return "requestAnimationFrame"in window ? function(n) {
                    return window.requestAnimationFrame(n)
                }
                : function(n) {
                    return n()
                }
            }();
            this.vendors = ["moz", "webkit"];
            this.start = this.start.bind(this);
            this.resetAnimation = this.resetAnimation.bind(this);
            this.scrollHandler = this.scrollHandler.bind(this);
            this.scrollCallback = this.scrollCallback.bind(this);
            this.scrolled = !0;
            this.config = l(t, this.defaults);
            null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer));
            this.animationNameCache = new w;
            this.wowEvent = v(this.config.boxClass)
        }
        return u(n, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement;
                f(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start);
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var u = this, n, t, r;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (n = 0; n < this.boxes.length; n++)
                            t = this.boxes[n],
                            this.applyStyle(t, !0);
                (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                i(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) && (r = new h(function(n) {
                    for (var r, i, f, t = 0; t < n.length; t++)
                        for (r = n[t],
                        i = 0; i < r.addedNodes.length; i++)
                            f = r.addedNodes[i],
                            u.doSync(f)
                }
                ),
                r.observe(document.body, {
                    childList: !0,
                    subtree: !0
                }))
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0;
                e(this.config.scrollContainer || window, "scroll", this.scrollHandler);
                e(window, "resize", this.scrollHandler);
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                h.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(n) {
                var r, i, t;
                if ("undefined" != typeof n && null !== n || (n = this.element),
                1 === n.nodeType)
                    for (n = n.parentNode || n,
                    r = n.querySelectorAll("." + this.config.boxClass),
                    i = 0; i < r.length; i++)
                        t = r[i],
                        f(t, this.all) || (this.boxes.push(t),
                        this.all.push(t),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0),
                        this.scrolled = !0)
            }
        }, {
            key: "show",
            value: function(n) {
                return this.applyStyle(n),
                n.className = n.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(n),
                y(n, this.wowEvent),
                this.config.resetAnimation && (i(n, "animationend", this.resetAnimation),
                i(n, "oanimationend", this.resetAnimation),
                i(n, "webkitAnimationEnd", this.resetAnimation),
                i(n, "MSAnimationEnd", this.resetAnimation)),
                n
            }
        }, {
            key: "applyStyle",
            value: function(n, t) {
                var i = this
                  , r = n.getAttribute("data-wow-duration")
                  , u = n.getAttribute("data-wow-delay")
                  , f = n.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return i.customStyle(n, t, r, u, f)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var t, n = 0; n < this.boxes.length; n++)
                    t = this.boxes[n],
                    t.style.visibility = "visible"
            }
        }, {
            key: "resetAnimation",
            value: function(n) {
                if (n.type.toLowerCase().indexOf("animationend") >= 0) {
                    var t = n.target || n.srcElement;
                    t.className = t.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(n, t, i, r, u) {
                return t && this.cacheAnimationName(n),
                n.style.visibility = t ? "hidden" : "visible",
                i && this.vendorSet(n.style, {
                    animationDuration: i
                }),
                r && this.vendorSet(n.style, {
                    animationDelay: r
                }),
                u && this.vendorSet(n.style, {
                    animationIterationCount: u
                }),
                this.vendorSet(n.style, {
                    animationName: t ? "none" : this.cachedAnimationName(n)
                }),
                n
            }
        }, {
            key: "vendorSet",
            value: function(n, t) {
                var i, u, r, f;
                for (i in t)
                    if (t.hasOwnProperty(i))
                        for (u = t[i],
                        n["" + i] = u,
                        r = 0; r < this.vendors.length; r++)
                            f = this.vendors[r],
                            n["" + f + i.charAt(0).toUpperCase() + i.substr(1)] = u
            }
        }, {
            key: "vendorCSS",
            value: function(n, t) {
                for (var f, u = c(n), i = u.getPropertyCSSValue(t), r = 0; r < this.vendors.length; r++)
                    f = this.vendors[r],
                    i = i || u.getPropertyCSSValue("-" + f + "-" + t);
                return i
            }
        }, {
            key: "animationName",
            value: function(n) {
                var t = void 0;
                try {
                    t = this.vendorCSS(n, "animation-name").cssText
                } catch (i) {
                    t = c(n).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }
        }, {
            key: "cacheAnimationName",
            value: function(n) {
                return this.animationNameCache.set(n, this.animationName(n))
            }
        }, {
            key: "cachedAnimationName",
            value: function(n) {
                return this.animationNameCache.get(n)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                var i, t, n;
                if (this.scrolled) {
                    for (this.scrolled = !1,
                    i = [],
                    t = 0; t < this.boxes.length; t++)
                        if (n = this.boxes[t],
                        n) {
                            if (this.isVisible(n)) {
                                this.show(n);
                                continue
                            }
                            i.push(n)
                        }
                    this.boxes = i;
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(n) {
                for (; void 0 === n.offsetTop; )
                    n = n.parentNode;
                for (var t = n.offsetTop; n.offsetParent; )
                    n = n.offsetParent,
                    t += n.offsetTop;
                return t
            }
        }, {
            key: "isVisible",
            value: function(n) {
                var r = n.getAttribute("data-wow-offset") || this.config.offset
                  , t = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , u = t + Math.min(this.element.clientHeight, p()) - r
                  , i = this.offsetTop(n)
                  , f = i + n.clientHeight;
                return u >= i && f >= t
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && a(navigator.userAgent)
            }
        }]),
        n
    }();
    t["default"] = b;
    n.exports = t["default"]
});
wow = new WOW;
wow.init();
WOW.prototype.addBox = function(n) {
    this.boxes.push(n)
}
;
$(".wow").scrollSpy();
$(".wow").on("scrollSpy:exit", function() {
    var n = $(this);
    n.css({
        visibility: "hidden",
        "animation-name": "none"
    }).removeClass("animated");
    wow.addBox(this)
});
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n : n(jQuery)
}(function(n) {
    function u(r) {
        var u = r || window.event, w = c.call(arguments, 1), l = 0, s = 0, e = 0, a = 0, b = 0, k = 0, v, y, p;
        if (r = n.event.fix(u),
        r.type = "mousewheel",
        "detail"in u && (e = -1 * u.detail),
        "wheelDelta"in u && (e = u.wheelDelta),
        "wheelDeltaY"in u && (e = u.wheelDeltaY),
        "wheelDeltaX"in u && (s = -1 * u.wheelDeltaX),
        "axis"in u && u.axis === u.HORIZONTAL_AXIS && (s = -1 * e,
        e = 0),
        l = 0 === e ? s : e,
        "deltaY"in u && (e = -1 * u.deltaY,
        l = e),
        "deltaX"in u && (s = u.deltaX,
        0 === e && (l = -1 * s)),
        0 !== e || 0 !== s)
            return 1 === u.deltaMode ? (v = n.data(this, "mousewheel-line-height"),
            l *= v,
            e *= v,
            s *= v) : 2 === u.deltaMode && (y = n.data(this, "mousewheel-page-height"),
            l *= y,
            e *= y,
            s *= y),
            (a = Math.max(Math.abs(e), Math.abs(s)),
            (!t || t > a) && (t = a,
            o(u, a) && (t /= 40)),
            o(u, a) && (l /= 40,
            s /= 40,
            e /= 40),
            l = Math[l >= 1 ? "floor" : "ceil"](l / t),
            s = Math[s >= 1 ? "floor" : "ceil"](s / t),
            e = Math[e >= 1 ? "floor" : "ceil"](e / t),
            i.settings.normalizeOffset && this.getBoundingClientRect) && (p = this.getBoundingClientRect(),
            b = r.clientX - p.left,
            k = r.clientY - p.top),
            r.deltaX = s,
            r.deltaY = e,
            r.deltaFactor = t,
            r.offsetX = b,
            r.offsetY = k,
            r.deltaMode = 0,
            w.unshift(r, l, s, e),
            f && clearTimeout(f),
            f = setTimeout(h, 200),
            (n.event.dispatch || n.event.handle).apply(this, w)
    }
    function h() {
        t = null
    }
    function o(n, t) {
        return i.settings.adjustOldDeltas && "mousewheel" === n.type && t % 120 == 0
    }
    var f, t, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], r = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], c = Array.prototype.slice, e, i;
    if (n.event.fixHooks)
        for (e = s.length; e; )
            n.event.fixHooks[s[--e]] = n.event.mouseHooks;
    i = n.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var t = r.length; t; )
                    this.addEventListener(r[--t], u, !1);
            else
                this.onmousewheel = u;
            n.data(this, "mousewheel-line-height", i.getLineHeight(this));
            n.data(this, "mousewheel-page-height", i.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var t = r.length; t; )
                    this.removeEventListener(r[--t], u, !1);
            else
                this.onmousewheel = null;
            n.removeData(this, "mousewheel-line-height");
            n.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var r = n(t)
              , i = r["offsetParent"in n.fn ? "offsetParent" : "parent"]();
            return i.length || (i = n("body")),
            parseInt(i.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return n(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    n.fn.extend({
        mousewheel: function(n) {
            return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
        },
        unmousewheel: function(n) {
            return this.unbind("mousewheel", n)
        }
    })
});
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof exports ? module.exports = n : n(jQuery)
}(function(n) {
    function u(r) {
        var u = r || window.event, w = c.call(arguments, 1), l = 0, s = 0, e = 0, a = 0, b = 0, k = 0, v, y, p;
        if (r = n.event.fix(u),
        r.type = "mousewheel",
        "detail"in u && (e = -1 * u.detail),
        "wheelDelta"in u && (e = u.wheelDelta),
        "wheelDeltaY"in u && (e = u.wheelDeltaY),
        "wheelDeltaX"in u && (s = -1 * u.wheelDeltaX),
        "axis"in u && u.axis === u.HORIZONTAL_AXIS && (s = -1 * e,
        e = 0),
        l = 0 === e ? s : e,
        "deltaY"in u && (e = -1 * u.deltaY,
        l = e),
        "deltaX"in u && (s = u.deltaX,
        0 === e && (l = -1 * s)),
        0 !== e || 0 !== s)
            return 1 === u.deltaMode ? (v = n.data(this, "mousewheel-line-height"),
            l *= v,
            e *= v,
            s *= v) : 2 === u.deltaMode && (y = n.data(this, "mousewheel-page-height"),
            l *= y,
            e *= y,
            s *= y),
            (a = Math.max(Math.abs(e), Math.abs(s)),
            (!t || t > a) && (t = a,
            o(u, a) && (t /= 40)),
            o(u, a) && (l /= 40,
            s /= 40,
            e /= 40),
            l = Math[l >= 1 ? "floor" : "ceil"](l / t),
            s = Math[s >= 1 ? "floor" : "ceil"](s / t),
            e = Math[e >= 1 ? "floor" : "ceil"](e / t),
            i.settings.normalizeOffset && this.getBoundingClientRect) && (p = this.getBoundingClientRect(),
            b = r.clientX - p.left,
            k = r.clientY - p.top),
            r.deltaX = s,
            r.deltaY = e,
            r.deltaFactor = t,
            r.offsetX = b,
            r.offsetY = k,
            r.deltaMode = 0,
            w.unshift(r, l, s, e),
            f && clearTimeout(f),
            f = setTimeout(h, 200),
            (n.event.dispatch || n.event.handle).apply(this, w)
    }
    function h() {
        t = null
    }
    function o(n, t) {
        return i.settings.adjustOldDeltas && "mousewheel" === n.type && t % 120 == 0
    }
    var f, t, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], r = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], c = Array.prototype.slice, e, i;
    if (n.event.fixHooks)
        for (e = s.length; e; )
            n.event.fixHooks[s[--e]] = n.event.mouseHooks;
    i = n.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var t = r.length; t; )
                    this.addEventListener(r[--t], u, !1);
            else
                this.onmousewheel = u;
            n.data(this, "mousewheel-line-height", i.getLineHeight(this));
            n.data(this, "mousewheel-page-height", i.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var t = r.length; t; )
                    this.removeEventListener(r[--t], u, !1);
            else
                this.onmousewheel = null;
            n.removeData(this, "mousewheel-line-height");
            n.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var r = n(t)
              , i = r["offsetParent"in n.fn ? "offsetParent" : "parent"]();
            return i.length || (i = n("body")),
            parseInt(i.css("fontSize"), 10) || parseInt(r.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return n(t).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    n.fn.extend({
        mousewheel: function(n) {
            return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
        },
        unmousewheel: function(n) {
            return this.unbind("mousewheel", n)
        }
    })
});
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof module && module.exports ? module.exports = n : n(jQuery, window, document)
}(function(n) {
    !function(t) {
        var i = "function" == typeof define && define.amd
          , r = "undefined" != typeof module && module.exports
          , u = "https:" == document.location.protocol ? "https:" : "http:";
        i || (r ? require("jquery-mousewheel")(n) : n.event.special.mousewheel || n("head").append(decodeURI("%3Cscript src=" + u + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E")));
        t()
    }(function() {
        var h, c = "mCustomScrollbar", t = "mCS", it = ".mCustomScrollbar", ot = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            documentTouchScroll: !0,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, pt = 0, b = {}, p = window.attachEvent && !window.addEventListener ? 1 : 0, e = !1, i = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], s = {
            init: function(r) {
                var r = n.extend(!0, {}, ot, r), e = v.call(this), u, f;
                if (r.live) {
                    if (u = r.liveSelector || this.selector || it,
                    f = n(u),
                    "off" === r.live)
                        return void k(u);
                    b[u] = setTimeout(function() {
                        f.mCustomScrollbar(r);
                        "once" === r.live && f.length && k(u)
                    }, 500)
                } else
                    k(u);
                return r.setWidth = r.set_width ? r.set_width : r.setWidth,
                r.setHeight = r.set_height ? r.set_height : r.setHeight,
                r.axis = r.horizontalScroll ? "x" : wt(r.axis),
                r.scrollInertia = r.scrollInertia > 0 && r.scrollInertia < 17 ? 17 : r.scrollInertia,
                "object" != typeof r.mouseWheel && 1 == r.mouseWheel && (r.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }),
                r.mouseWheel.scrollAmount = r.mouseWheelPixels ? r.mouseWheelPixels : r.mouseWheel.scrollAmount,
                r.mouseWheel.normalizeDelta = r.advanced.normalizeMouseWheelDelta ? r.advanced.normalizeMouseWheelDelta : r.mouseWheel.normalizeDelta,
                r.scrollButtons.scrollType = bt(r.scrollButtons.scrollType),
                st(r),
                n(e).each(function() {
                    var u = n(this);
                    if (!u.data(t)) {
                        u.data(t, {
                            idx: ++pt,
                            opt: r,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: u.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var e = u.data(t)
                          , f = e.opt
                          , o = u.data("mcs-axis")
                          , h = u.data("mcs-scrollbar-position")
                          , c = u.data("mcs-theme");
                        o && (f.axis = o);
                        h && (f.scrollbarPosition = h);
                        c && (f.theme = c,
                        st(f));
                        kt.call(this);
                        e && f.callbacks.onCreate && "function" == typeof f.callbacks.onCreate && f.callbacks.onCreate.call(this);
                        n("#mCSB_" + e.idx + "_container img:not(." + i[2] + ")").addClass(i[2]);
                        s.update.call(null, u)
                    }
                })
            },
            update: function(r, f) {
                var e = r || v.call(this);
                return n(e).each(function() {
                    var s = n(this), c;
                    if (s.data(t)) {
                        var e = s.data(t)
                          , r = e.opt
                          , h = n("#mCSB_" + e.idx + "_container")
                          , a = n("#mCSB_" + e.idx)
                          , l = [n("#mCSB_" + e.idx + "_dragger_vertical"), n("#mCSB_" + e.idx + "_dragger_horizontal")];
                        if (!h.length)
                            return;
                        e.tweenRunning && o(s);
                        f && e && r.callbacks.onBeforeUpdate && "function" == typeof r.callbacks.onBeforeUpdate && r.callbacks.onBeforeUpdate.call(this);
                        s.hasClass(i[3]) && s.removeClass(i[3]);
                        s.hasClass(i[4]) && s.removeClass(i[4]);
                        a.css("max-height", "none");
                        a.height() !== s.height() && a.css("max-height", s.height());
                        dt.call(this);
                        "y" === r.axis || r.advanced.autoExpandHorizontalScroll || h.css("width", ht(h));
                        e.overflowed = ii.call(this);
                        ct.call(this);
                        r.autoDraggerLength && ni.call(this);
                        ti.call(this);
                        ri.call(this);
                        c = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)];
                        "x" !== r.axis && (e.overflowed[0] ? l[0].height() > l[0].parent().height() ? y.call(this) : (u(s, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }),
                        e.contentReset.y = null) : (y.call(this),
                        "y" === r.axis ? g.call(this) : "yx" === r.axis && e.overflowed[1] && u(s, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        })));
                        "y" !== r.axis && (e.overflowed[1] ? l[1].width() > l[1].parent().width() ? y.call(this) : (u(s, c[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }),
                        e.contentReset.x = null) : (y.call(this),
                        "x" === r.axis ? g.call(this) : "yx" === r.axis && e.overflowed[0] && u(s, c[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        })));
                        f && e && (2 === f && r.callbacks.onImageLoad && "function" == typeof r.callbacks.onImageLoad ? r.callbacks.onImageLoad.call(this) : 3 === f && r.callbacks.onSelectorChange && "function" == typeof r.callbacks.onSelectorChange ? r.callbacks.onSelectorChange.call(this) : r.callbacks.onUpdate && "function" == typeof r.callbacks.onUpdate && r.callbacks.onUpdate.call(this));
                        et.call(this)
                    }
                })
            },
            scrollTo: function(i, r) {
                if ("undefined" != typeof i && null != i) {
                    var f = v.call(this);
                    return n(f).each(function() {
                        var s = n(this);
                        if (s.data(t)) {
                            var o = s.data(t)
                              , h = o.opt
                              , c = {
                                trigger: "external",
                                scrollInertia: h.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }
                              , f = n.extend(!0, {}, c, r)
                              , e = ft.call(this, i)
                              , l = f.scrollInertia > 0 && f.scrollInertia < 17 ? 17 : f.scrollInertia;
                            e[0] = at.call(this, e[0], "y");
                            e[1] = at.call(this, e[1], "x");
                            f.moveDragger && (e[0] *= o.scrollRatio.y,
                            e[1] *= o.scrollRatio.x);
                            f.dur = wi() ? 0 : l;
                            setTimeout(function() {
                                null !== e[0] && "undefined" != typeof e[0] && "x" !== h.axis && o.overflowed[0] && (f.dir = "y",
                                f.overwrite = "all",
                                u(s, e[0].toString(), f));
                                null !== e[1] && "undefined" != typeof e[1] && "y" !== h.axis && o.overflowed[1] && (f.dir = "x",
                                f.overwrite = "none",
                                u(s, e[1].toString(), f))
                            }, f.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var i = v.call(this);
                return n(i).each(function() {
                    var i = n(this);
                    i.data(t) && o(i)
                })
            },
            disable: function(r) {
                var u = v.call(this);
                return n(u).each(function() {
                    var u = n(this);
                    u.data(t) && (u.data(t),
                    et.call(this, "remove"),
                    g.call(this),
                    r && y.call(this),
                    ct.call(this, !0),
                    u.addClass(i[3]))
                })
            },
            destroy: function() {
                var r = v.call(this);
                return n(r).each(function() {
                    var f = n(this);
                    if (f.data(t)) {
                        var u = f.data(t)
                          , e = u.opt
                          , s = n("#mCSB_" + u.idx)
                          , o = n("#mCSB_" + u.idx + "_container")
                          , h = n(".mCSB_" + u.idx + "_scrollbar");
                        e.live && k(e.liveSelector || n(r).selector);
                        et.call(this, "remove");
                        g.call(this);
                        y.call(this);
                        f.removeData(t);
                        a(this, "mcs");
                        h.remove();
                        o.find("img." + i[2]).removeClass(i[2]);
                        s.replaceWith(o.contents());
                        f.removeClass(c + " _" + t + "_" + u.idx + " " + i[6] + " " + i[7] + " " + i[5] + " " + i[3]).addClass(i[4])
                    }
                })
            }
        }, v = function() {
            return "object" != typeof n(this) || n(this).length < 1 ? it : this
        }, st = function(t) {
            t.autoDraggerLength = n.inArray(t.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) > -1 ? !1 : t.autoDraggerLength;
            t.autoExpandScrollbar = n.inArray(t.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"]) > -1 ? !1 : t.autoExpandScrollbar;
            t.scrollButtons.enable = n.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ? !1 : t.scrollButtons.enable;
            t.autoHideScrollbar = n.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ? !0 : t.autoHideScrollbar;
            t.scrollbarPosition = n.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ? "outside" : t.scrollbarPosition
        }, k = function(n) {
            b[n] && (clearTimeout(b[n]),
            a(b, n))
        }, wt = function(n) {
            return "yx" === n || "xy" === n || "auto" === n ? "yx" : "x" === n || "horizontal" === n ? "x" : "y"
        }, bt = function(n) {
            return "stepped" === n || "pixels" === n || "step" === n || "click" === n ? "stepped" : "stepless"
        }, kt = function() {
            var f = n(this), u = f.data(t), r = u.opt, l = r.autoExpandScrollbar ? " " + i[1] + "_expand" : "", o = ["<div id='mCSB_" + u.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + u.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_vertical" + l + "'><div class='" + i[12] + "'><div id='mCSB_" + u.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /><\/div><div class='mCSB_draggerRail' /><\/div><\/div>", "<div id='mCSB_" + u.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + u.idx + "_scrollbar mCS-" + r.theme + " mCSB_scrollTools_horizontal" + l + "'><div class='" + i[12] + "'><div id='mCSB_" + u.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /><\/div><div class='mCSB_draggerRail' /><\/div><\/div>"], v = "yx" === r.axis ? "mCSB_vertical_horizontal" : "x" === r.axis ? "mCSB_horizontal" : "mCSB_vertical", a = "yx" === r.axis ? o[0] + o[1] : "x" === r.axis ? o[1] : o[0], y = "yx" === r.axis ? "<div id='mCSB_" + u.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "", p = r.autoHideScrollbar ? " " + i[6] : "", w = "x" !== r.axis && "rtl" === u.langDir ? " " + i[7] : "", h, s, e;
            r.setWidth && f.css("width", r.setWidth);
            r.setHeight && f.css("height", r.setHeight);
            r.setLeft = "y" !== r.axis && "rtl" === u.langDir ? "989999px" : r.setLeft;
            f.addClass(c + " _" + t + "_" + u.idx + p + w).wrapInner("<div id='mCSB_" + u.idx + "' class='mCustomScrollBox mCS-" + r.theme + " " + v + "'><div id='mCSB_" + u.idx + "_container' class='mCSB_container' style='position:relative; top:" + r.setTop + "; left:" + r.setLeft + ";' dir='" + u.langDir + "' /><\/div>");
            h = n("#mCSB_" + u.idx);
            s = n("#mCSB_" + u.idx + "_container");
            "y" === r.axis || r.advanced.autoExpandHorizontalScroll || s.css("width", ht(s));
            "outside" === r.scrollbarPosition ? ("static" === f.css("position") && f.css("position", "relative"),
            f.css("overflow", "visible"),
            h.addClass("mCSB_outside").after(a)) : (h.addClass("mCSB_inside").append(a),
            s.wrap(y));
            gt.call(this);
            e = [n("#mCSB_" + u.idx + "_dragger_vertical"), n("#mCSB_" + u.idx + "_dragger_horizontal")];
            e[0].css("min-height", e[0].height());
            e[1].css("min-width", e[1].width())
        }, ht = function(t) {
            var i = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() {
                return n(this).outerWidth(!0)
            }).get())]
              , r = t.parent().width();
            return i[0] > r ? i[0] : i[1] > r ? i[1] : "100%"
        }, dt = function() {
            var e = n(this), f = e.data(t), r = f.opt, i = n("#mCSB_" + f.idx + "_container"), u;
            r.advanced.autoExpandHorizontalScroll && "y" !== r.axis && (i.css({
                width: "auto",
                "min-width": 0,
                "overflow-x": "scroll"
            }),
            u = Math.ceil(i[0].scrollWidth),
            3 === r.advanced.autoExpandHorizontalScroll || 2 !== r.advanced.autoExpandHorizontalScroll && u > i.parent().width() ? i.css({
                width: u,
                "min-width": "100%",
                "overflow-x": "inherit"
            }) : i.css({
                "overflow-x": "inherit",
                position: "absolute"
            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left),
                "min-width": "100%",
                position: "relative"
            }).unwrap())
        }, gt = function() {
            var s = n(this)
              , o = s.data(t)
              , u = o.opt
              , h = n(".mCSB_" + o.idx + "_scrollbar:first")
              , f = tt(u.scrollButtons.tabindex) ? "tabindex='" + u.scrollButtons.tabindex + "'" : ""
              , r = ["<a href='#' class='" + i[13] + "' " + f + " />", "<a href='#' class='" + i[14] + "' " + f + " />", "<a href='#' class='" + i[15] + "' " + f + " />", "<a href='#' class='" + i[16] + "' " + f + " />"]
              , e = ["x" === u.axis ? r[2] : r[0], "x" === u.axis ? r[3] : r[1], r[2], r[3]];
            u.scrollButtons.enable && h.prepend(e[0]).append(e[1]).next(".mCSB_scrollTools").prepend(e[2]).append(e[3])
        }, ni = function() {
            var s = n(this)
              , u = s.data(t)
              , f = n("#mCSB_" + u.idx)
              , e = n("#mCSB_" + u.idx + "_container")
              , r = [n("#mCSB_" + u.idx + "_dragger_vertical"), n("#mCSB_" + u.idx + "_dragger_horizontal")]
              , o = [f.height() / e.outerHeight(!1), f.width() / e.outerWidth(!1)]
              , i = [parseInt(r[0].css("min-height")), Math.round(o[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(o[1] * r[1].parent().width())]
              , h = p && i[1] < i[0] ? i[0] : i[1]
              , c = p && i[3] < i[2] ? i[2] : i[3];
            r[0].css({
                height: h,
                "max-height": r[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": i[0] + "px"
            });
            r[1].css({
                width: c,
                "max-width": r[1].parent().width() - 10
            })
        }, ti = function() {
            var s = n(this)
              , i = s.data(t)
              , u = n("#mCSB_" + i.idx)
              , f = n("#mCSB_" + i.idx + "_container")
              , r = [n("#mCSB_" + i.idx + "_dragger_vertical"), n("#mCSB_" + i.idx + "_dragger_horizontal")]
              , e = [f.outerHeight(!1) - u.height(), f.outerWidth(!1) - u.width()]
              , o = [e[0] / (r[0].parent().height() - r[0].height()), e[1] / (r[1].parent().width() - r[1].width())];
            i.scrollRatio = {
                y: o[0],
                x: o[1]
            }
        }, d = function(n, t, r) {
            var f = r ? i[0] + "_expanded" : ""
              , u = n.closest(".mCSB_scrollTools");
            "active" === t ? (n.toggleClass(i[0] + " " + f),
            u.toggleClass(i[1]),
            n[0]._draggable = n[0]._draggable ? 0 : 1) : n[0]._draggable || ("hide" === t ? (n.removeClass(i[0]),
            u.removeClass(i[1])) : (n.addClass(i[0]),
            u.addClass(i[1])))
        }, ii = function() {
            var h = n(this)
              , r = h.data(t)
              , e = n("#mCSB_" + r.idx)
              , i = n("#mCSB_" + r.idx + "_container")
              , u = null == r.overflowed ? i.height() : i.outerHeight(!1)
              , f = null == r.overflowed ? i.width() : i.outerWidth(!1)
              , o = i[0].scrollHeight
              , s = i[0].scrollWidth;
            return o > u && (u = o),
            s > f && (f = s),
            [u > e.height(), f > e.width()]
        }, y = function() {
            var r = n(this), i = r.data(t), f = i.opt, c = n("#mCSB_" + i.idx), s = n("#mCSB_" + i.idx + "_container"), h = [n("#mCSB_" + i.idx + "_dragger_vertical"), n("#mCSB_" + i.idx + "_dragger_horizontal")], e;
            (o(r),
            ("x" !== f.axis && !i.overflowed[0] || "y" === f.axis && i.overflowed[0]) && (h[0].add(s).css("top", 0),
            u(r, "_resetY")),
            "y" !== f.axis && !i.overflowed[1] || "x" === f.axis && i.overflowed[1]) && (e = dx = 0,
            "rtl" === i.langDir && (e = c.width() - s.outerWidth(!1),
            dx = Math.abs(e / i.scrollRatio.x)),
            s.css("left", e),
            h[1].css("left", dx),
            u(r, "_resetX"))
        }, ri = function() {
            function u() {
                e = setTimeout(function() {
                    n.event.special.mousewheel ? (clearTimeout(e),
                    oi.call(f[0])) : u()
                }, 100)
            }
            var f = n(this), r = f.data(t), i = r.opt, e;
            r.bindEvents || ((ui.call(this),
            i.contentTouchScroll && fi.call(this),
            ei.call(this),
            i.mouseWheel.enable) && u(),
            hi.call(this),
            li.call(this),
            i.advanced.autoScrollOnFocus && ci.call(this),
            i.scrollButtons.enable && ai.call(this),
            i.keyboard.enable && vi.call(this),
            r.bindEvents = !0)
        }, g = function() {
            var f = n(this)
              , r = f.data(t)
              , u = r.opt
              , o = t + "_" + r.idx
              , s = ".mCSB_" + r.idx + "_scrollbar"
              , e = n("#mCSB_" + r.idx + ",#mCSB_" + r.idx + "_container,#mCSB_" + r.idx + "_container_wrapper," + s + " ." + i[12] + ",#mCSB_" + r.idx + "_dragger_vertical,#mCSB_" + r.idx + "_dragger_horizontal," + s + ">a")
              , h = n("#mCSB_" + r.idx + "_container");
            u.advanced.releaseDraggableSelectors && e.add(n(u.advanced.releaseDraggableSelectors));
            u.advanced.extraDraggableSelectors && e.add(n(u.advanced.extraDraggableSelectors));
            r.bindEvents && (n(document).add(n(!l() || top.document)).unbind("." + o),
            e.each(function() {
                n(this).unbind("." + o)
            }),
            clearTimeout(f[0]._focusTimeout),
            a(f[0], "_focusTimeout"),
            clearTimeout(r.sequential.step),
            a(r.sequential, "step"),
            clearTimeout(h[0].onCompleteTimeout),
            a(h[0], "onCompleteTimeout"),
            r.bindEvents = !1)
        }, ct = function(r) {
            var h = n(this)
              , u = h.data(t)
              , o = u.opt
              , c = n("#mCSB_" + u.idx + "_container_wrapper")
              , f = c.length ? c : n("#mCSB_" + u.idx + "_container")
              , e = [n("#mCSB_" + u.idx + "_scrollbar_vertical"), n("#mCSB_" + u.idx + "_scrollbar_horizontal")]
              , s = [e[0].find(".mCSB_dragger"), e[1].find(".mCSB_dragger")];
            "x" !== o.axis && (u.overflowed[0] && !r ? (e[0].add(s[0]).add(e[0].children("a")).css("display", "block"),
            f.removeClass(i[8] + " " + i[10])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && s[0].css("display", "none"),
            f.removeClass(i[10])) : (e[0].css("display", "none"),
            f.addClass(i[10])),
            f.addClass(i[8])));
            "y" !== o.axis && (u.overflowed[1] && !r ? (e[1].add(s[1]).add(e[1].children("a")).css("display", "block"),
            f.removeClass(i[9] + " " + i[11])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && s[1].css("display", "none"),
            f.removeClass(i[11])) : (e[1].css("display", "none"),
            f.addClass(i[11])),
            f.addClass(i[9])));
            u.overflowed[0] || u.overflowed[1] ? h.removeClass(i[5]) : h.addClass(i[5])
        }, r = function(t) {
            var e = t.type, i = t.target.ownerDocument !== document && null !== frameElement ? [n(frameElement).offset().top, n(frameElement).offset().left] : null, u = l() && t.target.ownerDocument !== top.document && null !== frameElement ? [n(t.view.frameElement).offset().top, n(t.view.frameElement).offset().left] : [0, 0], r, f;
            switch (e) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
                return i ? [t.originalEvent.pageY - i[0] + u[0], t.originalEvent.pageX - i[1] + u[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
                return r = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                f = t.originalEvent.touches.length || t.originalEvent.changedTouches.length,
                t.target.ownerDocument !== document ? [r.screenY, r.screenX, f > 1] : [r.pageY, r.pageX, f > 1];
            default:
                return i ? [t.pageY - i[0] + u[0], t.pageX - i[1] + u[1], !1] : [t.pageY, t.pageX, !1]
            }
        }, ui = function() {
            function k(n, t, r, f) {
                var e, o;
                (w[0].idleTimer = h.scrollInertia < 233 ? 250 : 0,
                i.attr("id") === y[1]) ? (e = "x",
                o = (i[0].offsetLeft - t + f) * s.scrollRatio.x) : (e = "y",
                o = (i[0].offsetTop - n + r) * s.scrollRatio.y);
                u(v, o.toString(), {
                    dir: e,
                    drag: !0
                })
            }
            var i, c, a, v = n(this), s = v.data(t), h = s.opt, f = t + "_" + s.idx, y = ["mCSB_" + s.idx + "_dragger_vertical", "mCSB_" + s.idx + "_dragger_horizontal"], w = n("#mCSB_" + s.idx + "_container"), b = n("#" + y[0] + ",#" + y[1]), g = h.advanced.releaseDraggableSelectors ? b.add(n(h.advanced.releaseDraggableSelectors)) : b, nt = h.advanced.extraDraggableSelectors ? n(!l() || top.document).add(n(h.advanced.extraDraggableSelectors)) : n(!l() || top.document);
            b.bind("contextmenu." + f, function(n) {
                n.preventDefault()
            }).bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function(t) {
                if (t.stopImmediatePropagation(),
                t.preventDefault(),
                yt(t)) {
                    e = !0;
                    p && (document.onselectstart = function() {
                        return !1
                    }
                    );
                    lt.call(w, !1);
                    o(v);
                    i = n(this);
                    var u = i.offset()
                      , f = r(t)[0] - u.top
                      , s = r(t)[1] - u.left
                      , l = i.height() + u.top
                      , y = i.width() + u.left;
                    l > f && f > 0 && y > s && s > 0 && (c = f,
                    a = s);
                    d(i, "active", h.autoExpandScrollbar)
                }
            }).bind("touchmove." + f, function(n) {
                n.stopImmediatePropagation();
                n.preventDefault();
                var t = i.offset()
                  , u = r(n)[0] - t.top
                  , f = r(n)[1] - t.left;
                k(c, a, u, f)
            });
            n(document).add(nt).bind("mousemove." + f + " pointermove." + f + " MSPointerMove." + f, function(n) {
                if (i) {
                    var t = i.offset()
                      , u = r(n)[0] - t.top
                      , f = r(n)[1] - t.left;
                    if (c === u && a === f)
                        return;
                    k(c, a, u, f)
                }
            }).add(g).bind("mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f, function() {
                i && (d(i, "active", h.autoExpandScrollbar),
                i = null);
                e = !1;
                p && (document.onselectstart = null);
                lt.call(w, !0)
            })
        }, fi = function() {
            function at(n) {
                if (!nt(n) || e || r(n)[2])
                    return void (h = 0);
                h = 1;
                it = 0;
                rt = 0;
                st = 1;
                g.removeClass("mCS_touch_action");
                var t = b.offset();
                k = r(n)[0] - t.top;
                d = r(n)[1] - t.left;
                v = [r(n)[0], r(n)[1]]
            }
            function vt(n) {
                var c, l, a, y;
                if (nt(n) && !e && !r(n)[2] && (f.documentTouchScroll || n.preventDefault(),
                n.stopImmediatePropagation(),
                (!rt || it) && st)) {
                    gt = w();
                    var o = ut.offset()
                      , t = r(n)[0] - o.top
                      , u = r(n)[1] - o.left
                      , h = "mcsLinearOut";
                    (et.push(t),
                    ot.push(u),
                    v[2] = Math.abs(r(n)[0] - v[0]),
                    v[3] = Math.abs(r(n)[1] - v[1]),
                    i.overflowed[0]) && (c = ft[0].parent().height() - ft[0].height(),
                    l = k - t > 0 && t - k > -(c * i.scrollRatio.y) && (2 * v[3] < v[2] || "yx" === f.axis));
                    i.overflowed[1] && (a = ft[1].parent().width() - ft[1].width(),
                    y = d - u > 0 && u - d > -(a * i.scrollRatio.x) && (2 * v[2] < v[3] || "yx" === f.axis));
                    l || y ? (ii || n.preventDefault(),
                    it = 1) : (rt = 1,
                    g.addClass("mCS_touch_action"));
                    ii && n.preventDefault();
                    s = "yx" === f.axis ? [k - t, d - u] : "x" === f.axis ? [null, d - u] : [k - t, null];
                    b[0].idleTimer = 250;
                    i.overflowed[0] && tt(s[0], ni, h, "y", "all", !0);
                    i.overflowed[1] && tt(s[1], ni, h, "x", lt, !0)
                }
            }
            function yt(n) {
                if (!nt(n) || e || r(n)[2])
                    return void (h = 0);
                h = 1;
                n.stopImmediatePropagation();
                o(g);
                dt = w();
                var t = ut.offset();
                bt = r(n)[0] - t.top;
                kt = r(n)[1] - t.left;
                et = [];
                ot = []
            }
            function pt(n) {
                var t, u, h;
                if (nt(n) && !e && !r(n)[2]) {
                    st = 0;
                    n.stopImmediatePropagation();
                    it = 0;
                    rt = 0;
                    ht = w();
                    var l = ut.offset()
                      , a = r(n)[0] - l.top
                      , v = r(n)[1] - l.left;
                    if (!(ht - gt > 30)) {
                        c = 1e3 / (ht - dt);
                        var p = "mcsEaseOut"
                          , o = 2.5 > c
                          , k = o ? [et[et.length - 2], ot[ot.length - 2]] : [0, 0];
                        y = o ? [a - k[0], v - k[1]] : [a - bt, v - kt];
                        t = [Math.abs(y[0]), Math.abs(y[1])];
                        c = o ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [c, c];
                        u = [Math.abs(b[0].offsetTop) - y[0] * wt(t[0] / c[0], c[0]), Math.abs(b[0].offsetLeft) - y[1] * wt(t[1] / c[1], c[1])];
                        s = "yx" === f.axis ? [u[0], u[1]] : "x" === f.axis ? [null, u[1]] : [u[0], null];
                        ct = [4 * t[0] + f.scrollInertia, 4 * t[1] + f.scrollInertia];
                        h = parseInt(f.contentTouchScroll) || 0;
                        s[0] = t[0] > h ? s[0] : 0;
                        s[1] = t[1] > h ? s[1] : 0;
                        i.overflowed[0] && tt(s[0], ct[0], p, "y", lt, !1);
                        i.overflowed[1] && tt(s[1], ct[1], p, "x", lt, !1)
                    }
                }
            }
            function wt(n, t) {
                var i = [1.5 * t, 2 * t, t / 1.5, t / 2];
                return n > 90 ? t > 4 ? i[0] : i[3] : n > 60 ? t > 3 ? i[3] : i[2] : n > 30 ? t > 8 ? i[1] : t > 6 ? i[0] : t > 4 ? t : i[2] : t > 8 ? t : i[3]
            }
            function tt(n, t, i, r, f, e) {
                n && u(g, n.toString(), {
                    dur: t,
                    scrollEasing: i,
                    dir: r,
                    overwrite: f,
                    drag: e
                })
            }
            var st, k, d, bt, kt, dt, gt, ht, y, c, s, ct, it, rt, g = n(this), i = g.data(t), f = i.opt, a = t + "_" + i.idx, ut = n("#mCSB_" + i.idx), b = n("#mCSB_" + i.idx + "_container"), ft = [n("#mCSB_" + i.idx + "_dragger_vertical"), n("#mCSB_" + i.idx + "_dragger_horizontal")], et = [], ot = [], ni = 0, lt = "yx" === f.axis ? "none" : "all", v = [], ti = b.find("iframe"), p = ["touchstart." + a + " pointerdown." + a + " MSPointerDown." + a, "touchmove." + a + " pointermove." + a + " MSPointerMove." + a, "touchend." + a + " pointerup." + a + " MSPointerUp." + a], ii = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
            b.bind(p[0], function(n) {
                at(n)
            }).bind(p[1], function(n) {
                vt(n)
            });
            ut.bind(p[0], function(n) {
                yt(n)
            }).bind(p[2], function(n) {
                pt(n)
            });
            ti.length && ti.each(function() {
                n(this).bind("load", function() {
                    l(this) && n(this.contentDocument || this.contentWindow.document).bind(p[0], function(n) {
                        at(n);
                        yt(n)
                    }).bind(p[1], function(n) {
                        vt(n)
                    }).bind(p[2], function(n) {
                        pt(n)
                    })
                })
            })
        }, ei = function() {
            function y() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
            }
            function i(n, t, i) {
                l.type = i && u ? "stepped" : "stepless";
                l.scrollAmount = 10;
                ut(a, n, t, "mcsLinearOut", i ? 60 : null)
            }
            var u, a = n(this), f = a.data(t), v = f.opt, l = f.sequential, s = t + "_" + f.idx, o = n("#mCSB_" + f.idx + "_container"), c = o.parent();
            o.bind("mousedown." + s, function() {
                h || u || (u = 1,
                e = !0)
            }).add(document).bind("mousemove." + s, function(n) {
                if (!h && u && y()) {
                    var s = o.offset()
                      , t = r(n)[0] - s.top + o[0].offsetTop
                      , e = r(n)[1] - s.left + o[0].offsetLeft;
                    t > 0 && t < c.height() && e > 0 && e < c.width() ? l.step && i("off", null, "stepped") : ("x" !== v.axis && f.overflowed[0] && (0 > t ? i("on", 38) : t > c.height() && i("on", 40)),
                    "y" !== v.axis && f.overflowed[1] && (0 > e ? i("on", 37) : e > c.width() && i("on", 39)))
                }
            }).bind("mouseup." + s + " dragend." + s, function() {
                h || (u && (u = 0,
                i("off", null)),
                e = !1)
            })
        }, oi = function() {
            function h(t, h) {
                var v, y;
                if (o(s),
                !si(s, t.target)) {
                    if (v = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : p && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                    y = i.scrollInertia,
                    "x" === i.axis || "x" === i.mouseWheel.axis)
                        var a = "x"
                          , l = [Math.round(v * r.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)]
                          , w = "auto" !== i.mouseWheel.scrollAmount ? l[1] : l[0] >= e.width() ? .9 * e.width() : l[0]
                          , k = Math.abs(n("#mCSB_" + r.idx + "_container")[0].offsetLeft)
                          , b = f[1][0].offsetLeft
                          , d = f[1].parent().width() - f[1].width()
                          , c = "y" === i.mouseWheel.axis ? t.deltaY || h : t.deltaX;
                    else
                        var a = "y"
                          , l = [Math.round(v * r.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)]
                          , w = "auto" !== i.mouseWheel.scrollAmount ? l[1] : l[0] >= e.height() ? .9 * e.height() : l[0]
                          , k = Math.abs(n("#mCSB_" + r.idx + "_container")[0].offsetTop)
                          , b = f[0][0].offsetTop
                          , d = f[0].parent().height() - f[0].height()
                          , c = t.deltaY || h;
                    ("y" !== a || r.overflowed[0]) && ("x" !== a || r.overflowed[1]) && ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (c = -c),
                    i.mouseWheel.normalizeDelta && (c = 0 > c ? -1 : 1),
                    (c > 0 && 0 !== b || 0 > c && b !== d || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(),
                    t.preventDefault()),
                    t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (w = t.deltaFactor,
                    y = 17),
                    u(s, (k - c * w).toString(), {
                        dir: a,
                        dur: y
                    }))
                }
            }
            if (n(this).data(t)) {
                var s = n(this)
                  , r = s.data(t)
                  , i = r.opt
                  , c = t + "_" + r.idx
                  , e = n("#mCSB_" + r.idx)
                  , f = [n("#mCSB_" + r.idx + "_dragger_vertical"), n("#mCSB_" + r.idx + "_dragger_horizontal")]
                  , a = n("#mCSB_" + r.idx + "_container").find("iframe");
                a.length && a.each(function() {
                    n(this).bind("load", function() {
                        l(this) && n(this.contentDocument || this.contentWindow.document).bind("mousewheel." + c, function(n, t) {
                            h(n, t)
                        })
                    })
                });
                e.bind("mousewheel." + c, function(n, t) {
                    h(n, t)
                })
            }
        }, rt = {}, l = function(t) {
            var u = !1, i = !1, f = null, r;
            if (void 0 === t ? i = "#empty" : void 0 !== n(t).attr("id") && (i = n(t).attr("id")),
            i !== !1 && void 0 !== rt[i])
                return rt[i];
            if (t) {
                try {
                    r = t.contentDocument || t.contentWindow.document;
                    f = r.body.innerHTML
                } catch (e) {}
                u = null !== f
            } else {
                try {
                    r = top.document;
                    f = r.body.innerHTML
                } catch (e) {}
                u = null !== f
            }
            return i !== !1 && (rt[i] = u),
            u
        }, lt = function(n) {
            var t = this.find("iframe"), i;
            t.length && (i = n ? "auto" : "none",
            t.css("pointer-events", i))
        }, si = function(i, r) {
            var u = r.nodeName.toLowerCase()
              , f = i.data(t).opt.mouseWheel.disableOver;
            return n.inArray(u, f) > -1 && !(n.inArray(u, ["select", "textarea"]) > -1 && !n(r).is(":focus"))
        }, hi = function() {
            var s, h = n(this), f = h.data(t), r = t + "_" + f.idx, c = n("#mCSB_" + f.idx + "_container"), l = c.parent(), a = n(".mCSB_" + f.idx + "_scrollbar ." + i[12]);
            a.bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r, function(t) {
                e = !0;
                n(t.target).hasClass("mCSB_dragger") || (s = 1)
            }).bind("touchend." + r + " pointerup." + r + " MSPointerUp." + r, function() {
                e = !1
            }).bind("click." + r, function(t) {
                var r, e;
                if (s && (s = 0,
                n(t.target).hasClass(i[12]) || n(t.target).hasClass("mCSB_draggerRail"))) {
                    if (o(h),
                    r = n(this),
                    e = r.find(".mCSB_dragger"),
                    r.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!f.overflowed[1])
                            return;
                        var v = "x"
                          , a = t.pageX > e.offset().left ? -1 : 1
                          , y = Math.abs(c[0].offsetLeft) - a * .9 * l.width()
                    } else {
                        if (!f.overflowed[0])
                            return;
                        var v = "y"
                          , a = t.pageY > e.offset().top ? -1 : 1
                          , y = Math.abs(c[0].offsetTop) - a * .9 * l.height()
                    }
                    u(h, y.toString(), {
                        dir: v,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }, ci = function() {
            var i = n(this)
              , s = i.data(t)
              , e = s.opt
              , c = t + "_" + s.idx
              , r = n("#mCSB_" + s.idx + "_container")
              , h = r.parent();
            r.bind("focusin." + c, function() {
                var t = n(document.activeElement)
                  , c = r.find(".mCustomScrollBox").length
                  , s = 0;
                t.is(e.advanced.autoScrollOnFocus) && (o(i),
                clearTimeout(i[0]._focusTimeout),
                i[0]._focusTimer = c ? (s + 17) * c : 0,
                i[0]._focusTimeout = setTimeout(function() {
                    var n = [f(t)[0], f(t)[1]]
                      , o = [r[0].offsetTop, r[0].offsetLeft]
                      , c = [o[0] + n[0] >= 0 && o[0] + n[0] < h.height() - t.outerHeight(!1), o[1] + n[1] >= 0 && o[0] + n[1] < h.width() - t.outerWidth(!1)]
                      , l = "yx" !== e.axis || c[0] || c[1] ? "all" : "none";
                    "x" === e.axis || c[0] || u(i, n[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: l,
                        dur: s
                    });
                    "y" === e.axis || c[1] || u(i, n[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: l,
                        dur: s
                    })
                }, i[0]._focusTimer))
            })
        }, li = function() {
            var u = n(this)
              , i = u.data(t)
              , f = t + "_" + i.idx
              , r = n("#mCSB_" + i.idx + "_container").parent();
            r.bind("scroll." + f, function() {
                0 === r.scrollTop() && 0 === r.scrollLeft() || n(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
            })
        }, ai = function() {
            var f = n(this)
              , r = f.data(t)
              , o = r.opt
              , u = r.sequential
              , i = t + "_" + r.idx
              , s = ".mCSB_" + r.idx + "_scrollbar"
              , h = n(s + ">a");
            h.bind("contextmenu." + i, function(n) {
                n.preventDefault()
            }).bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i + " mouseup." + i + " touchend." + i + " pointerup." + i + " MSPointerUp." + i + " mouseout." + i + " pointerout." + i + " MSPointerOut." + i + " click." + i, function(t) {
                function i(n, t) {
                    u.scrollAmount = o.scrollButtons.scrollAmount;
                    ut(f, n, t)
                }
                if (t.preventDefault(),
                yt(t)) {
                    var s = n(this).attr("class");
                    switch (u.type = o.scrollButtons.scrollType,
                    t.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                        if ("stepped" === u.type)
                            return;
                        e = !0;
                        r.tweenRunning = !1;
                        i("on", s);
                        break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        if ("stepped" === u.type)
                            return;
                        e = !1;
                        u.dir && i("off", s);
                        break;
                    case "click":
                        if ("stepped" !== u.type || r.tweenRunning)
                            return;
                        i("on", s)
                    }
                }
            })
        }, vi = function() {
            function a(t) {
                function w(n, t) {
                    s.type = r.keyboard.scrollType;
                    s.scrollAmount = r.keyboard.scrollAmount;
                    "stepped" === s.type && i.tweenRunning || ut(e, n, t)
                }
                var c, y, p, l, a;
                switch (t.type) {
                case "blur":
                    i.tweenRunning && s.dir && w("off", null);
                    break;
                case "keydown":
                case "keyup":
                    if (c = t.keyCode ? t.keyCode : t.which,
                    y = "on",
                    "x" !== r.axis && (38 === c || 40 === c) || "y" !== r.axis && (37 === c || 39 === c)) {
                        if ((38 === c || 40 === c) && !i.overflowed[0] || (37 === c || 39 === c) && !i.overflowed[1])
                            return;
                        "keyup" === t.type && (y = "off");
                        n(document.activeElement).is(v) || (t.preventDefault(),
                        t.stopImmediatePropagation(),
                        w(y, c))
                    } else
                        33 === c || 34 === c ? ((i.overflowed[0] || i.overflowed[1]) && (t.preventDefault(),
                        t.stopImmediatePropagation()),
                        "keyup" === t.type) && (o(e),
                        p = 34 === c ? -1 : 1,
                        "x" === r.axis || "yx" === r.axis && i.overflowed[1] && !i.overflowed[0] ? (l = "x",
                        a = Math.abs(f[0].offsetLeft) - p * .9 * h.width()) : (l = "y",
                        a = Math.abs(f[0].offsetTop) - p * .9 * h.height()),
                        u(e, a.toString(), {
                            dir: l,
                            scrollEasing: "mcsEaseInOut"
                        })) : 35 !== c && 36 !== c || n(document.activeElement).is(v) || ((i.overflowed[0] || i.overflowed[1]) && (t.preventDefault(),
                        t.stopImmediatePropagation()),
                        "keyup" !== t.type) || ("x" === r.axis || "yx" === r.axis && i.overflowed[1] && !i.overflowed[0] ? (l = "x",
                        a = 35 === c ? Math.abs(h.width() - f.outerWidth(!1)) : 0) : (l = "y",
                        a = 35 === c ? Math.abs(h.height() - f.outerHeight(!1)) : 0),
                        u(e, a.toString(), {
                            dir: l,
                            scrollEasing: "mcsEaseInOut"
                        }))
                }
            }
            var e = n(this)
              , i = e.data(t)
              , r = i.opt
              , s = i.sequential
              , c = t + "_" + i.idx
              , w = n("#mCSB_" + i.idx)
              , f = n("#mCSB_" + i.idx + "_container")
              , h = f.parent()
              , v = "input,textarea,select,datalist,keygen,[contenteditable='true']"
              , y = f.find("iframe")
              , p = ["blur." + c + " keydown." + c + " keyup." + c];
            y.length && y.each(function() {
                n(this).bind("load", function() {
                    l(this) && n(this.contentDocument || this.contentWindow.document).bind(p[0], function(n) {
                        a(n)
                    })
                })
            });
            w.attr("tabindex", "0").bind(p[0], function(n) {
                a(n)
            })
        }, ut = function(r, f, e, s, h) {
            function y(n) {
                l.snapAmount && (c.scrollAmount = l.snapAmount instanceof Array ? "x" === c.dir[0] ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount);
                var i = "stepped" !== c.type
                  , f = h ? h : n ? i ? k / 1.5 : d : 1e3 / 60
                  , e = n ? i ? 7.5 : 40 : 2.5
                  , t = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)]
                  , o = [v.scrollRatio.y > 10 ? 10 : v.scrollRatio.y, v.scrollRatio.x > 10 ? 10 : v.scrollRatio.x]
                  , w = "x" === c.dir[0] ? t[1] + c.dir[1] * o[1] * e : t[0] + c.dir[1] * o[0] * e
                  , b = "x" === c.dir[0] ? t[1] + c.dir[1] * parseInt(c.scrollAmount) : t[0] + c.dir[1] * parseInt(c.scrollAmount)
                  , a = "auto" !== c.scrollAmount ? b : w
                  , g = s ? s : n ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"
                  , nt = !!n;
                return n && 17 > f && (a = "x" === c.dir[0] ? t[1] : t[0]),
                u(r, a.toString(), {
                    dir: c.dir[0],
                    scrollEasing: g,
                    dur: f,
                    onComplete: nt
                }),
                n ? void (c.dir = !1) : (clearTimeout(c.step),
                void (c.step = setTimeout(function() {
                    y()
                }, f)))
            }
            function b() {
                clearTimeout(c.step);
                a(c, "step");
                o(r)
            }
            var v = r.data(t)
              , l = v.opt
              , c = v.sequential
              , p = n("#mCSB_" + v.idx + "_container")
              , w = "stepped" === c.type
              , k = l.scrollInertia < 26 ? 26 : l.scrollInertia
              , d = l.scrollInertia < 1 ? 17 : l.scrollInertia;
            switch (f) {
            case "on":
                if (c.dir = [e === i[16] || e === i[15] || 39 === e || 37 === e ? "x" : "y", e === i[13] || e === i[15] || 38 === e || 37 === e ? -1 : 1],
                o(r),
                tt(e) && "stepped" === c.type)
                    return;
                y(w);
                break;
            case "off":
                b();
                (w || v.tweenRunning && c.dir) && y(!0)
            }
        }, ft = function(i) {
            var u = n(this).data(t).opt
              , r = [];
            return "function" == typeof i && (i = i()),
            i instanceof Array ? r = i.length > 1 ? [i[0], i[1]] : "x" === u.axis ? [null, i[0]] : [i[0], null] : (r[0] = i.y ? i.y : i.x || "x" === u.axis ? null : i,
            r[1] = i.x ? i.x : i.y || "y" === u.axis ? null : i),
            "function" == typeof r[0] && (r[0] = r[0]()),
            "function" == typeof r[1] && (r[1] = r[1]()),
            r
        }, at = function(i, r) {
            var h, e;
            if (null != i && "undefined" != typeof i) {
                var c = n(this)
                  , l = c.data(t)
                  , v = l.opt
                  , u = n("#mCSB_" + l.idx + "_container")
                  , o = u.parent()
                  , y = typeof i;
                r || (r = "x" === v.axis ? "x" : "y");
                var p = "x" === r ? u.outerWidth(!1) - o.width() : u.outerHeight(!1) - o.height()
                  , a = "x" === r ? u[0].offsetLeft : u[0].offsetTop
                  , w = "x" === r ? "left" : "top";
                switch (y) {
                case "function":
                    return i();
                case "object":
                    return (e = i.jquery ? i : n(i),
                    !e.length) ? void 0 : "x" === r ? f(e)[1] : f(e)[0];
                case "string":
                case "number":
                    return tt(i) ? Math.abs(i) : -1 !== i.indexOf("%") ? Math.abs(p * parseInt(i) / 100) : -1 !== i.indexOf("-=") ? Math.abs(a - parseInt(i.split("-=")[1])) : -1 !== i.indexOf("+=") ? (h = a + parseInt(i.split("+=")[1]),
                    h >= 0 ? 0 : Math.abs(h)) : -1 !== i.indexOf("px") && tt(i.split("px")[0]) ? Math.abs(i.split("px")[0]) : "top" === i || "left" === i ? 0 : "bottom" === i ? Math.abs(o.height() - u.outerHeight(!1)) : "right" === i ? Math.abs(o.width() - u.outerWidth(!1)) : "first" === i || "last" === i ? (e = u.find(":" + i),
                    "x" === r ? f(e)[1] : f(e)[0]) : n(i).length ? "x" === r ? f(n(i))[1] : f(n(i))[0] : (u.css(w, i),
                    void s.update.call(null, c[0]))
                }
            }
        }, et = function(r) {
            function c() {
                return clearTimeout(e[0].autoUpdate),
                0 === o.parents("html").length ? void (o = null) : void (e[0].autoUpdate = setTimeout(function() {
                    return f.advanced.updateOnSelectorChange && (u.poll.change.n = v(),
                    u.poll.change.n !== u.poll.change.o) ? (u.poll.change.o = u.poll.change.n,
                    void h(3)) : f.advanced.updateOnContentResize && (u.poll.size.n = o[0].scrollHeight + o[0].scrollWidth + e[0].offsetHeight + o[0].offsetHeight + o[0].offsetWidth,
                    u.poll.size.n !== u.poll.size.o) ? (u.poll.size.o = u.poll.size.n,
                    void h(1)) : !f.advanced.updateOnImageLoad || "auto" === f.advanced.updateOnImageLoad && "y" === f.axis || (u.poll.img.n = e.find("img").length,
                    u.poll.img.n === u.poll.img.o) ? void ((f.advanced.updateOnSelectorChange || f.advanced.updateOnContentResize || f.advanced.updateOnImageLoad) && c()) : (u.poll.img.o = u.poll.img.n,
                    void e.find("img").each(function() {
                        l(this)
                    }))
                }, f.advanced.autoUpdateTimeout))
            }
            function l(t) {
                function u(n, t) {
                    return function() {
                        return t.apply(n, arguments)
                    }
                }
                function f() {
                    this.onload = null;
                    n(t).addClass(i[2]);
                    h(2)
                }
                if (n(t).hasClass(i[2]))
                    return void h();
                var r = new Image;
                r.onload = u(r, f);
                r.src = t.src
            }
            function v() {
                f.advanced.updateOnSelectorChange === !0 && (f.advanced.updateOnSelectorChange = "*");
                var n = 0
                  , t = e.find(f.advanced.updateOnSelectorChange);
                return f.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() {
                    n += this.offsetHeight + this.offsetWidth
                }),
                n
            }
            function h(n) {
                clearTimeout(e[0].autoUpdate);
                s.update.call(null, o[0], n)
            }
            var o = n(this)
              , u = o.data(t)
              , f = u.opt
              , e = n("#mCSB_" + u.idx + "_container");
            return r ? (clearTimeout(e[0].autoUpdate),
            void a(e[0], "autoUpdate")) : void c()
        }, yi = function(n, t, i) {
            return Math.round(n / t) * t - i
        }, o = function(i) {
            var r = i.data(t)
              , u = n("#mCSB_" + r.idx + "_container,#mCSB_" + r.idx + "_container_wrapper,#mCSB_" + r.idx + "_dragger_vertical,#mCSB_" + r.idx + "_dragger_horizontal");
            u.each(function() {
                pi.call(this)
            })
        }, u = function(i, r, u) {
            function h(n) {
                return f && e.callbacks[n] && "function" == typeof e.callbacks[n]
            }
            function et() {
                return [e.callbacks.alwaysTriggerOffsets || p >= l[0] + v, e.callbacks.alwaysTriggerOffsets || -y >= p]
            }
            function a() {
                var n = [o[0].offsetTop, o[0].offsetLeft]
                  , t = [c[0].offsetTop, c[0].offsetLeft]
                  , r = [o.outerHeight(!1), o.outerWidth(!1)]
                  , f = [w.height(), w.width()];
                i[0].mcs = {
                    content: o,
                    top: n[0],
                    left: n[1],
                    draggerTop: t[0],
                    draggerLeft: t[1],
                    topPct: Math.round(100 * Math.abs(n[0]) / (Math.abs(r[0]) - f[0])),
                    leftPct: Math.round(100 * Math.abs(n[1]) / (Math.abs(r[1]) - f[1])),
                    direction: u.dir
                }
            }
            var f = i.data(t), e = f.opt, ot = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: e.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }, u = n.extend(ot, u), g = [u.dur, u.drag ? 0 : u.dur], w = n("#mCSB_" + f.idx), o = n("#mCSB_" + f.idx + "_container"), b = o.parent(), nt = e.callbacks.onTotalScrollOffset ? ft.call(i, e.callbacks.onTotalScrollOffset) : [0, 0], tt = e.callbacks.onTotalScrollBackOffset ? ft.call(i, e.callbacks.onTotalScrollBackOffset) : [0, 0], it;
            if (f.trigger = u.trigger,
            0 === b.scrollTop() && 0 === b.scrollLeft() || (n(".mCSB_" + f.idx + "_scrollbar").css("visibility", "visible"),
            b.scrollTop(0).scrollLeft(0)),
            "_resetY" !== r || f.contentReset.y || (h("onOverflowYNone") && e.callbacks.onOverflowYNone.call(i[0]),
            f.contentReset.y = 1),
            "_resetX" !== r || f.contentReset.x || (h("onOverflowXNone") && e.callbacks.onOverflowXNone.call(i[0]),
            f.contentReset.x = 1),
            "_resetY" !== r && "_resetX" !== r) {
                (!f.contentReset.y && i[0].mcs || !f.overflowed[0] || (h("onOverflowY") && e.callbacks.onOverflowY.call(i[0]),
                f.contentReset.x = null),
                !f.contentReset.x && i[0].mcs || !f.overflowed[1] || (h("onOverflowX") && e.callbacks.onOverflowX.call(i[0]),
                f.contentReset.x = null),
                e.snapAmount) && (it = e.snapAmount instanceof Array ? "x" === u.dir ? e.snapAmount[1] : e.snapAmount[0] : e.snapAmount,
                r = yi(r, it, e.snapOffset));
                switch (u.dir) {
                case "x":
                    var c = n("#mCSB_" + f.idx + "_dragger_horizontal")
                      , k = "left"
                      , p = o[0].offsetLeft
                      , l = [w.width() - o.outerWidth(!1), c.parent().width() - c.width()]
                      , s = [r, 0 === r ? 0 : r / f.scrollRatio.x]
                      , v = nt[1]
                      , y = tt[1]
                      , rt = v > 0 ? v / f.scrollRatio.x : 0
                      , ut = y > 0 ? y / f.scrollRatio.x : 0;
                    break;
                case "y":
                    var c = n("#mCSB_" + f.idx + "_dragger_vertical")
                      , k = "top"
                      , p = o[0].offsetTop
                      , l = [w.height() - o.outerHeight(!1), c.parent().height() - c.height()]
                      , s = [r, 0 === r ? 0 : r / f.scrollRatio.y]
                      , v = nt[0]
                      , y = tt[0]
                      , rt = v > 0 ? v / f.scrollRatio.y : 0
                      , ut = y > 0 ? y / f.scrollRatio.y : 0
                }
                s[1] < 0 || 0 === s[0] && 0 === s[1] ? s = [0, 0] : s[1] >= l[1] ? s = [l[0], l[1]] : s[0] = -s[0];
                i[0].mcs || (a(),
                h("onInit") && e.callbacks.onInit.call(i[0]));
                clearTimeout(o[0].onCompleteTimeout);
                vt(c[0], k, Math.round(s[1]), g[1], u.scrollEasing);
                !f.tweenRunning && (0 === p && s[0] >= 0 || p === l[0] && s[0] <= l[0]) || vt(o[0], k, Math.round(s[0]), g[0], u.scrollEasing, u.overwrite, {
                    onStart: function() {
                        u.callbacks && u.onStart && !f.tweenRunning && (h("onScrollStart") && (a(),
                        e.callbacks.onScrollStart.call(i[0])),
                        f.tweenRunning = !0,
                        d(c),
                        f.cbOffsets = et())
                    },
                    onUpdate: function() {
                        u.callbacks && u.onUpdate && h("whileScrolling") && (a(),
                        e.callbacks.whileScrolling.call(i[0]))
                    },
                    onComplete: function() {
                        if (u.callbacks && u.onComplete) {
                            "yx" === e.axis && clearTimeout(o[0].onCompleteTimeout);
                            var n = o[0].idleTimer || 0;
                            o[0].onCompleteTimeout = setTimeout(function() {
                                h("onScroll") && (a(),
                                e.callbacks.onScroll.call(i[0]));
                                h("onTotalScroll") && s[1] >= l[1] - rt && f.cbOffsets[0] && (a(),
                                e.callbacks.onTotalScroll.call(i[0]));
                                h("onTotalScrollBack") && s[1] <= ut && f.cbOffsets[1] && (a(),
                                e.callbacks.onTotalScrollBack.call(i[0]));
                                f.tweenRunning = !1;
                                o[0].idleTimer = 0;
                                d(c, "hide")
                            }, n)
                        }
                    }
                })
            }
        }, vt = function(n, t, i, r, u, f, e) {
            function a() {
                o.stop || (s || g.call(),
                s = w() - it,
                v(),
                s >= o.time && (o.time = s > o.time ? s + h - (s - o.time) : s + h - 1,
                o.time < s + 1 && (o.time = s + 1)),
                o.time < r ? o.id = c(a) : tt.call())
            }
            function v() {
                r > 0 ? (o.currVal = d(o.time, l, p, r, u),
                y[t] = Math.round(o.currVal) + "px") : y[t] = i + "px";
                nt.call()
            }
            function b() {
                h = 1e3 / 60;
                o.time = s + h;
                c = window.requestAnimationFrame ? window.requestAnimationFrame : function(n) {
                    return v(),
                    setTimeout(n, .01)
                }
                ;
                o.id = c(a)
            }
            function k() {
                null != o.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(o.id) : clearTimeout(o.id),
                o.id = null)
            }
            function d(n, t, i, r, u) {
                switch (u) {
                case "linear":
                case "mcsLinear":
                    return i * n / r + t;
                case "mcsLinearOut":
                    return n /= r,
                    n--,
                    i * Math.sqrt(1 - n * n) + t;
                case "easeInOutSmooth":
                    return n /= r / 2,
                    1 > n ? i / 2 * n * n + t : (n--,
                    -i / 2 * (n * (n - 2) - 1) + t);
                case "easeInOutStrong":
                    return n /= r / 2,
                    1 > n ? i / 2 * Math.pow(2, 10 * (n - 1)) + t : (n--,
                    i / 2 * (-Math.pow(2, -10 * n) + 2) + t);
                case "easeInOut":
                case "mcsEaseInOut":
                    return n /= r / 2,
                    1 > n ? i / 2 * n * n * n + t : (n -= 2,
                    i / 2 * (n * n * n + 2) + t);
                case "easeOutSmooth":
                    return n /= r,
                    n--,
                    -i * (n * n * n * n - 1) + t;
                case "easeOutStrong":
                    return i * (-Math.pow(2, -10 * n / r) + 1) + t;
                case "easeOut":
                case "mcsEaseOut":
                default:
                    var f = (n /= r) * n
                      , e = f * n;
                    return t + i * (.499999999999997 * e * f + -2.5 * f * f + 5.5 * e + -6.5 * f + 4 * n)
                }
            }
            var p;
            n._mTween || (n._mTween = {
                top: {},
                left: {}
            });
            var h, c, e = e || {}, g = e.onStart || function() {}
            , nt = e.onUpdate || function() {}
            , tt = e.onComplete || function() {}
            , it = w(), s = 0, l = n.offsetTop, y = n.style, o = n._mTween[t];
            "left" === t && (l = n.offsetLeft);
            p = i - l;
            o.stop = 0;
            "none" !== f && k();
            b()
        }, w = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, pi = function() {
            var n = this, r, i, t;
            for (n._mTween || (n._mTween = {
                top: {},
                left: {}
            }),
            r = ["top", "left"],
            i = 0; i < r.length; i++)
                t = r[i],
                n._mTween[t].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(n._mTween[t].id) : clearTimeout(n._mTween[t].id),
                n._mTween[t].id = null,
                n._mTween[t].stop = 1)
        }, a = function(n, t) {
            try {
                delete n[t]
            } catch (i) {
                n[t] = null
            }
        }, yt = function(n) {
            return !(n.which && 1 !== n.which)
        }, nt = function(n) {
            var t = n.originalEvent.pointerType;
            return !(t && "touch" !== t && 2 !== t)
        }, tt = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        }, f = function(n) {
            var t = n.parents(".mCSB_container");
            return [n.offset().top - t.offset().top, n.offset().left - t.offset().left]
        }, wi = function() {
            function t() {
                var t = ["webkit", "moz", "ms", "o"], n;
                if ("hidden"in document)
                    return "hidden";
                for (n = 0; n < t.length; n++)
                    if (t[n] + "Hidden"in document)
                        return t[n] + "Hidden";
                return null
            }
            var n = t();
            return n ? document[n] : !1
        };
        n.fn[c] = function(t) {
            return s[t] ? s[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void n.error("Method " + t + " does not exist") : s.init.apply(this, arguments)
        }
        ;
        n[c] = function(t) {
            return s[t] ? s[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void n.error("Method " + t + " does not exist") : s.init.apply(this, arguments)
        }
        ;
        n[c].defaults = ot;
        window[c] = !0;
        n(window).bind("load", function() {
            n(it)[c]();
            n.extend(n.expr[":"], {
                mcsInView: n.expr[":"].mcsInView || function(t) {
                    var e, r, i = n(t), u = i.parents(".mCSB_container");
                    if (u.length)
                        return e = u.parent(),
                        r = [u[0].offsetTop, u[0].offsetLeft],
                        r[0] + f(i)[0] >= 0 && r[0] + f(i)[0] < e.height() - i.outerHeight(!1) && r[1] + f(i)[1] >= 0 && r[1] + f(i)[1] < e.width() - i.outerWidth(!1)
                }
                ,
                mcsInSight: n.expr[":"].mcsInSight || function(t, i, r) {
                    var e, u, o, s, h = n(t), c = h.parents(".mCSB_container"), l = "exact" === r[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                    if (c.length)
                        return e = [h.outerHeight(!1), h.outerWidth(!1)],
                        o = [c[0].offsetTop + f(h)[0], c[0].offsetLeft + f(h)[1]],
                        u = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth],
                        s = [e[0] < u[0] ? l[0] : l[1], e[1] < u[1] ? l[0] : l[1]],
                        o[0] - u[0] * s[0][0] < 0 && o[0] + e[0] - u[0] * s[0][1] >= 0 && o[1] - u[1] * s[1][0] < 0 && o[1] + e[1] - u[1] * s[1][1] >= 0
                }
                ,
                mcsOverflow: n.expr[":"].mcsOverflow || function(i) {
                    var r = n(i).data(t);
                    if (r)
                        return r.overflowed[0] || r.overflowed[1]
                }
            })
        })
    })
});
!function(n, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return t(n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(n, require("jquery")) : n.jQueryBridget = t(n, n.jQuery)
}(window, function(n, t) {
    "use strict";
    function i(i, u, o) {
        function s(n, t, r) {
            var u, e = "$()." + i + '("' + t + '")';
            return n.each(function(n, s) {
                var h = o.data(s, i), c, l;
                if (!h)
                    return void f(i + " not initialized. Cannot call methods, i.e. " + e);
                if (c = h[t],
                !c || "_" == t.charAt(0))
                    return void f(e + " is not a valid method");
                l = c.apply(h, r);
                u = void 0 === u ? l : u
            }),
            void 0 !== u ? u : n
        }
        function h(n, t) {
            n.each(function(n, r) {
                var f = o.data(r, i);
                f ? (f.option(t),
                f._init()) : (f = new u(r,t),
                o.data(r, i, f))
            })
        }
        o = o || t || n.jQuery;
        o && (u.prototype.option || (u.prototype.option = function(n) {
            o.isPlainObject(n) && (this.options = o.extend(!0, this.options, n))
        }
        ),
        o.fn[i] = function(n) {
            if ("string" == typeof n) {
                var t = e.call(arguments, 1);
                return s(this, n, t)
            }
            return h(this, n),
            this
        }
        ,
        r(o))
    }
    function r(n) {
        !n || n && n.bridget || (n.bridget = i)
    }
    var e = Array.prototype.slice
      , u = n.console
      , f = "undefined" == typeof u ? function() {}
    : function(n) {
        u.error(n)
    }
    ;
    return r(t || n.jQuery),
    i
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : n.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var n = t.prototype;
    return n.on = function(n, t) {
        if (n && t) {
            var i = this._events = this._events || {}
              , r = i[n] = i[n] || [];
            return r.indexOf(t) == -1 && r.push(t),
            this
        }
    }
    ,
    n.once = function(n, t) {
        if (n && t) {
            this.on(n, t);
            var i = this._onceEvents = this._onceEvents || {}
              , r = i[n] = i[n] || {};
            return r[t] = !0,
            this
        }
    }
    ,
    n.off = function(n, t) {
        var i = this._events && this._events[n], r;
        if (i && i.length)
            return r = i.indexOf(t),
            r != -1 && i.splice(r, 1),
            this
    }
    ,
    n.emitEvent = function(n, t) {
        var r = this._events && this._events[n], u, i, f, e;
        if (r && r.length) {
            for (u = 0,
            i = r[u],
            t = t || [],
            f = this._onceEvents && this._onceEvents[n]; i; )
                e = f && f[i],
                e && (this.off(n, i),
                delete f[i]),
                i.apply(this, t),
                u += e ? 0 : 1,
                i = r[u];
            return this
        }
    }
    ,
    t
}),
function(n, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
        return t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : n.getSize = t()
}(window, function() {
    "use strict";
    function n(n) {
        var t = parseFloat(n)
          , i = n.indexOf("%") == -1 && !isNaN(t);
        return i && t
    }
    function o() {}
    function s() {
        for (var r, i = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, n = 0; n < f; n++)
            r = t[n],
            i[r] = 0;
        return i
    }
    function i(n) {
        var t = getComputedStyle(n);
        return t || c("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
        t
    }
    function h() {
        var t, f, o;
        e || (e = !0,
        t = document.createElement("div"),
        t.style.width = "200px",
        t.style.padding = "1px 2px 3px 4px",
        t.style.borderStyle = "solid",
        t.style.borderWidth = "1px 2px 3px 4px",
        t.style.boxSizing = "border-box",
        f = document.body || document.documentElement,
        f.appendChild(t),
        o = i(t),
        r.isBoxSizeOuter = u = 200 == n(o.width),
        f.removeChild(t))
    }
    function r(r) {
        var o, e, a, c, l;
        if (h(),
        "string" == typeof r && (r = document.querySelector(r)),
        r && "object" == typeof r && r.nodeType) {
            if (o = i(r),
            "none" == o.display)
                return s();
            for (e = {},
            e.width = r.offsetWidth,
            e.height = r.offsetHeight,
            a = e.isBorderBox = "border-box" == o.boxSizing,
            c = 0; c < f; c++) {
                var v = t[c]
                  , nt = o[v]
                  , y = parseFloat(nt);
                e[v] = isNaN(y) ? 0 : y
            }
            var p = e.paddingLeft + e.paddingRight
              , w = e.paddingTop + e.paddingBottom
              , tt = e.marginLeft + e.marginRight
              , it = e.marginTop + e.marginBottom
              , b = e.borderLeftWidth + e.borderRightWidth
              , k = e.borderTopWidth + e.borderBottomWidth
              , d = a && u
              , g = n(o.width);
            return g !== !1 && (e.width = g + (d ? 0 : p + b)),
            l = n(o.height),
            l !== !1 && (e.height = l + (d ? 0 : w + k)),
            e.innerWidth = e.width - (p + b),
            e.innerHeight = e.height - (w + k),
            e.outerWidth = e.width + tt,
            e.outerHeight = e.height + it,
            e
        }
    }
    var u, c = "undefined" == typeof console ? o : function(n) {
        console.error(n)
    }
    , t = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], f = t.length, e = !1;
    return r
}),
function(n, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : n.matchesSelector = t()
}(window, function() {
    "use strict";
    var n = function() {
        var t = window.Element.prototype, i, n, u, r;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (i = ["webkit", "moz", "ms", "o"],
        n = 0; n < i.length; n++)
            if (u = i[n],
            r = u + "MatchesSelector",
            t[r])
                return r
    }();
    return function(t, i) {
        return t[n](i)
    }
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return t(n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(n, require("desandro-matches-selector")) : n.fizzyUIUtils = t(n, n.matchesSelector)
}(window, function(n, t) {
    var i = {}, r;
    return i.extend = function(n, t) {
        for (var i in t)
            n[i] = t[i];
        return n
    }
    ,
    i.modulo = function(n, t) {
        return (n % t + t) % t
    }
    ,
    i.makeArray = function(n) {
        var t = [], i;
        if (Array.isArray(n))
            t = n;
        else if (n && "object" == typeof n && "number" == typeof n.length)
            for (i = 0; i < n.length; i++)
                t.push(n[i]);
        else
            t.push(n);
        return t
    }
    ,
    i.removeFrom = function(n, t) {
        var i = n.indexOf(t);
        i != -1 && n.splice(i, 1)
    }
    ,
    i.getParent = function(n, i) {
        for (; n.parentNode && n != document.body; )
            if (n = n.parentNode,
            t(n, i))
                return n
    }
    ,
    i.getQueryElement = function(n) {
        return "string" == typeof n ? document.querySelector(n) : n
    }
    ,
    i.handleEvent = function(n) {
        var t = "on" + n.type;
        this[t] && this[t](n)
    }
    ,
    i.filterFindElements = function(n, r) {
        n = i.makeArray(n);
        var u = [];
        return n.forEach(function(n) {
            if (n instanceof HTMLElement) {
                if (!r)
                    return void u.push(n);
                t(n, r) && u.push(n);
                for (var f = n.querySelectorAll(r), i = 0; i < f.length; i++)
                    u.push(f[i])
            }
        }),
        u
    }
    ,
    i.debounceMethod = function(n, t, i) {
        var u = n.prototype[t]
          , r = t + "Timeout";
        n.prototype[t] = function() {
            var t = this[r], f, n;
            t && clearTimeout(t);
            f = arguments;
            n = this;
            this[r] = setTimeout(function() {
                u.apply(n, f);
                delete n[r]
            }, i || 100)
        }
    }
    ,
    i.docReady = function(n) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(n) : document.addEventListener("DOMContentLoaded", n)
    }
    ,
    i.toDashed = function(n) {
        return n.replace(/(.)([A-Z])/g, function(n, t, i) {
            return t + "-" + i
        }).toLowerCase()
    }
    ,
    r = n.console,
    i.htmlInit = function(t, u) {
        i.docReady(function() {
            var e = i.toDashed(u)
              , f = "data-" + e
              , s = document.querySelectorAll("[" + f + "]")
              , h = document.querySelectorAll(".js-" + e)
              , c = i.makeArray(s).concat(i.makeArray(h))
              , l = f + "-options"
              , o = n.jQuery;
            c.forEach(function(n) {
                var i, e = n.getAttribute(f) || n.getAttribute(l), s;
                try {
                    i = e && JSON.parse(e)
                } catch (h) {
                    return void (r && r.error("Error parsing " + f + " on " + n.className + ": " + h))
                }
                s = new t(n,i);
                o && o.data(n, u, s)
            })
        })
    }
    ,
    i
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (n.Outlayer = {},
    n.Outlayer.Item = t(n.EvEmitter, n.getSize))
}(window, function(n, t) {
    "use strict";
    function l(n) {
        for (var t in n)
            return !1;
        return t = null,
        !0
    }
    function u(n, t) {
        n && (this.element = n,
        this.layout = t,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function a(n) {
        return n.replace(/([A-Z])/g, function(n) {
            return "-" + n.toLowerCase()
        })
    }
    var f = document.documentElement.style, r = "string" == typeof f.transition ? "transition" : "WebkitTransition", e = "string" == typeof f.transform ? "transform" : "WebkitTransform", o = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r], v = {
        transform: e,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }, i = u.prototype = Object.create(n.prototype), s, h, c;
    return i.constructor = u,
    i._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: "absolute"
        })
    }
    ,
    i.handleEvent = function(n) {
        var t = "on" + n.type;
        this[t] && this[t](n)
    }
    ,
    i.getSize = function() {
        this.size = t(this.element)
    }
    ,
    i.css = function(n) {
        var r = this.element.style, t, i;
        for (t in n)
            i = v[t] || t,
            r[i] = n[t]
    }
    ,
    i.getPosition = function() {
        var f = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop")
          , r = f[e ? "left" : "right"]
          , u = f[o ? "top" : "bottom"]
          , n = this.layout.size
          , t = r.indexOf("%") != -1 ? parseFloat(r) / 100 * n.width : parseInt(r, 10)
          , i = u.indexOf("%") != -1 ? parseFloat(u) / 100 * n.height : parseInt(u, 10);
        t = isNaN(t) ? 0 : t;
        i = isNaN(i) ? 0 : i;
        t -= e ? n.paddingLeft : n.paddingRight;
        i -= o ? n.paddingTop : n.paddingBottom;
        this.position.x = t;
        this.position.y = i
    }
    ,
    i.layoutPosition = function() {
        var r = this.layout.size
          , n = {}
          , t = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , u = t ? "paddingLeft" : "paddingRight"
          , f = t ? "left" : "right"
          , e = t ? "right" : "left"
          , o = this.position.x + r[u];
        n[f] = this.getXValue(o);
        n[e] = "";
        var s = i ? "paddingTop" : "paddingBottom"
          , h = i ? "top" : "bottom"
          , c = i ? "bottom" : "top"
          , l = this.position.y + r[s];
        n[h] = this.getYValue(l);
        n[c] = "";
        this.css(n);
        this.emitEvent("layout", [this])
    }
    ,
    i.getXValue = function(n) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? n / this.layout.size.width * 100 + "%" : n + "px"
    }
    ,
    i.getYValue = function(n) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? n / this.layout.size.height * 100 + "%" : n + "px"
    }
    ,
    i._transitionTo = function(n, t) {
        this.getPosition();
        var r = this.position.x
          , u = this.position.y
          , f = parseInt(n, 10)
          , e = parseInt(t, 10)
          , o = f === this.position.x && e === this.position.y;
        if (this.setPosition(n, t),
        o && !this.isTransitioning)
            return void this.layoutPosition();
        var s = n - r
          , h = t - u
          , i = {};
        i.transform = this.getTranslate(s, h);
        this.transition({
            to: i,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    i.getTranslate = function(n, t) {
        var i = this.layout._getOption("originLeft")
          , r = this.layout._getOption("originTop");
        return n = i ? n : -n,
        t = r ? t : -t,
        "translate3d(" + n + "px, " + t + "px, 0)"
    }
    ,
    i.goTo = function(n, t) {
        this.setPosition(n, t);
        this.layoutPosition()
    }
    ,
    i.moveTo = i._transitionTo,
    i.setPosition = function(n, t) {
        this.position.x = parseInt(n, 10);
        this.position.y = parseInt(t, 10)
    }
    ,
    i._nonTransition = function(n) {
        this.css(n.to);
        n.isCleaning && this._removeStyles(n.to);
        for (var t in n.onTransitionEnd)
            n.onTransitionEnd[t].call(this)
    }
    ,
    i.transition = function(n) {
        var i, t, r;
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(n);
        i = this._transn;
        for (t in n.onTransitionEnd)
            i.onEnd[t] = n.onTransitionEnd[t];
        for (t in n.to)
            i.ingProperties[t] = !0,
            n.isCleaning && (i.clean[t] = !0);
        n.from && (this.css(n.from),
        r = this.element.offsetHeight,
        r = null);
        this.enableTransition(n.to);
        this.css(n.to);
        this.isTransitioning = !0
    }
    ,
    s = "opacity," + a(e),
    i.enableTransition = function() {
        if (!this.isTransitioning) {
            var n = this.layout.options.transitionDuration;
            n = "number" == typeof n ? n + "ms" : n;
            this.css({
                transitionProperty: s,
                transitionDuration: n,
                transitionDelay: this.staggerDelay || 0
            });
            this.element.addEventListener(o, this, !1)
        }
    }
    ,
    i.onwebkitTransitionEnd = function(n) {
        this.ontransitionend(n)
    }
    ,
    i.onotransitionend = function(n) {
        this.ontransitionend(n)
    }
    ,
    h = {
        "-webkit-transform": "transform"
    },
    i.ontransitionend = function(n) {
        var t, i, r;
        n.target === this.element && (t = this._transn,
        i = h[n.propertyName] || n.propertyName,
        (delete t.ingProperties[i],
        l(t.ingProperties) && this.disableTransition(),
        i in t.clean && (this.element.style[n.propertyName] = "",
        delete t.clean[i]),
        i in t.onEnd) && (r = t.onEnd[i],
        r.call(this),
        delete t.onEnd[i]),
        this.emitEvent("transitionEnd", [this]))
    }
    ,
    i.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(o, this, !1);
        this.isTransitioning = !1
    }
    ,
    i._removeStyles = function(n) {
        var t = {}, i;
        for (i in n)
            t[i] = "";
        this.css(t)
    }
    ,
    c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    },
    i.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    i.stagger = function(n) {
        n = isNaN(n) ? 0 : n;
        this.staggerDelay = n + "ms"
    }
    ,
    i.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ""
        });
        this.emitEvent("remove", [this])
    }
    ,
    i.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    i.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ""
        });
        var n = this.layout.options
          , t = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        t[i] = this.onRevealTransitionEnd;
        this.transition({
            from: n.hiddenStyle,
            to: n.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }
    ,
    i.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    i.getHideRevealTransitionEndProperty = function(n) {
        var t = this.layout.options[n], i;
        if (t.opacity)
            return "opacity";
        for (i in t)
            return i
    }
    ,
    i.hide = function() {
        this.isHidden = !0;
        this.css({
            display: ""
        });
        var n = this.layout.options
          , t = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        t[i] = this.onHideTransitionEnd;
        this.transition({
            from: n.visibleStyle,
            to: n.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }
    ,
    i.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    i.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    u
}),
function(n, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, r, u, f) {
        return t(n, i, r, u, f)
    }) : "object" == typeof module && module.exports ? module.exports = t(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = t(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function(n, t, i, r, u) {
    "use strict";
    function e(n, t) {
        var i = r.getQueryElement(n), u, f;
        if (!i)
            return void (c && c.error("Bad element for " + this.constructor.namespace + ": " + (i || n)));
        this.element = i;
        o && (this.$element = o(this.element));
        this.options = r.extend({}, this.constructor.defaults);
        this.option(t);
        u = ++y;
        this.element.outlayerGUID = u;
        s[u] = this;
        this._create();
        f = this._getOption("initLayout");
        f && this.layout()
    }
    function h(n) {
        function t() {
            n.apply(this, arguments)
        }
        return t.prototype = Object.create(n.prototype),
        t.prototype.constructor = t,
        t
    }
    function v(n) {
        var r;
        if ("number" == typeof n)
            return n;
        var t = n.match(/(^\d*\.?\d*)(\w*)/)
          , i = t && t[1]
          , u = t && t[2];
        return i.length ? (i = parseFloat(i),
        r = a[u] || 1,
        i * r) : 0
    }
    var c = n.console, o = n.jQuery, l = function() {}, y = 0, s = {}, f, a;
    return e.namespace = "outlayer",
    e.Item = u,
    e.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    },
    f = e.prototype,
    r.extend(f, t.prototype),
    f.option = function(n) {
        r.extend(this.options, n)
    }
    ,
    f._getOption = function(n) {
        var t = this.constructor.compatOptions[n];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[n]
    }
    ,
    e.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    f._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        r.extend(this.element.style, this.options.containerStyle);
        var n = this._getOption("resize");
        n && this.bindResize()
    }
    ,
    f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    f._itemize = function(n) {
        for (var u, f, i = this._filterFindItemElements(n), e = this.constructor.Item, r = [], t = 0; t < i.length; t++)
            u = i[t],
            f = new e(u,this),
            r.push(f);
        return r
    }
    ,
    f._filterFindItemElements = function(n) {
        return r.filterFindElements(n, this.options.itemSelector)
    }
    ,
    f.getItemElements = function() {
        return this.items.map(function(n) {
            return n.element
        })
    }
    ,
    f.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var n = this._getOption("layoutInstant")
          , t = void 0 !== n ? n : !this._isLayoutInited;
        this.layoutItems(this.items, t);
        this._isLayoutInited = !0
    }
    ,
    f._init = f.layout,
    f._resetLayout = function() {
        this.getSize()
    }
    ,
    f.getSize = function() {
        this.size = i(this.element)
    }
    ,
    f._getMeasurement = function(n, t) {
        var u, r = this.options[n];
        r ? ("string" == typeof r ? u = this.element.querySelector(r) : r instanceof HTMLElement && (u = r),
        this[n] = u ? i(u)[t] : r) : this[n] = 0
    }
    ,
    f.layoutItems = function(n, t) {
        n = this._getItemsForLayout(n);
        this._layoutItems(n, t);
        this._postLayout()
    }
    ,
    f._getItemsForLayout = function(n) {
        return n.filter(function(n) {
            return !n.isIgnored
        })
    }
    ,
    f._layoutItems = function(n, t) {
        if (this._emitCompleteOnItems("layout", n),
        n && n.length) {
            var i = [];
            n.forEach(function(n) {
                var r = this._getItemLayoutPosition(n);
                r.item = n;
                r.isInstant = t || n.isLayoutInstant;
                i.push(r)
            }, this);
            this._processLayoutQueue(i)
        }
    }
    ,
    f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    f._processLayoutQueue = function(n) {
        this.updateStagger();
        n.forEach(function(n, t) {
            this._positionItem(n.item, n.x, n.y, n.isInstant, t)
        }, this)
    }
    ,
    f.updateStagger = function() {
        var n = this.options.stagger;
        return null === n || void 0 === n ? void (this.stagger = 0) : (this.stagger = v(n),
        this.stagger)
    }
    ,
    f._positionItem = function(n, t, i, r, u) {
        r ? n.goTo(t, i) : (n.stagger(u * this.stagger),
        n.moveTo(t, i))
    }
    ,
    f._postLayout = function() {
        this.resizeContainer()
    }
    ,
    f.resizeContainer = function() {
        var t = this._getOption("resizeContainer"), n;
        t && (n = this._getContainerSize(),
        n && (this._setContainerMeasure(n.width, !0),
        this._setContainerMeasure(n.height, !1)))
    }
    ,
    f._getContainerSize = l,
    f._setContainerMeasure = function(n, t) {
        if (void 0 !== n) {
            var i = this.size;
            i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth);
            n = Math.max(n, 0);
            this.element.style[t ? "width" : "height"] = n + "px"
        }
    }
    ,
    f._emitCompleteOnItems = function(n, t) {
        function r() {
            e.dispatchEvent(n + "Complete", null, [t])
        }
        function f() {
            i++;
            i == u && r()
        }
        var e = this, u = t.length, i;
        if (!t || !u)
            return void r();
        i = 0;
        t.forEach(function(t) {
            t.once(n, f)
        })
    }
    ,
    f.dispatchEvent = function(n, t, i) {
        var u = t ? [t].concat(i) : i, r;
        (this.emitEvent(n, u),
        o) && ((this.$element = this.$element || o(this.element),
        t) ? (r = o.Event(t),
        r.type = n,
        this.$element.trigger(r, i)) : this.$element.trigger(n, i))
    }
    ,
    f.ignore = function(n) {
        var t = this.getItem(n);
        t && (t.isIgnored = !0)
    }
    ,
    f.unignore = function(n) {
        var t = this.getItem(n);
        t && delete t.isIgnored
    }
    ,
    f.stamp = function(n) {
        n = this._find(n);
        n && (this.stamps = this.stamps.concat(n),
        n.forEach(this.ignore, this))
    }
    ,
    f.unstamp = function(n) {
        n = this._find(n);
        n && n.forEach(function(n) {
            r.removeFrom(this.stamps, n);
            this.unignore(n)
        }, this)
    }
    ,
    f._find = function(n) {
        if (n)
            return "string" == typeof n && (n = this.element.querySelectorAll(n)),
            n = r.makeArray(n)
    }
    ,
    f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , n = this.size;
        this._boundingRect = {
            left: t.left + n.paddingLeft + n.borderLeftWidth,
            top: t.top + n.paddingTop + n.borderTopWidth,
            right: t.right - (n.paddingRight + n.borderRightWidth),
            bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
        }
    }
    ,
    f._manageStamp = l,
    f._getElementOffset = function(n) {
        var t = n.getBoundingClientRect()
          , r = this._boundingRect
          , u = i(n);
        return {
            left: t.left - r.left - u.marginLeft,
            top: t.top - r.top - u.marginTop,
            right: r.right - t.right - u.marginRight,
            bottom: r.bottom - t.bottom - u.marginBottom
        }
    }
    ,
    f.handleEvent = r.handleEvent,
    f.bindResize = function() {
        n.addEventListener("resize", this);
        this.isResizeBound = !0
    }
    ,
    f.unbindResize = function() {
        n.removeEventListener("resize", this);
        this.isResizeBound = !1
    }
    ,
    f.onresize = function() {
        this.resize()
    }
    ,
    r.debounceMethod(e, "onresize", 100),
    f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    f.needsResizeLayout = function() {
        var n = i(this.element)
          , t = this.size && n;
        return t && n.innerWidth !== this.size.innerWidth
    }
    ,
    f.addItems = function(n) {
        var t = this._itemize(n);
        return t.length && (this.items = this.items.concat(t)),
        t
    }
    ,
    f.appended = function(n) {
        var t = this.addItems(n);
        t.length && (this.layoutItems(t, !0),
        this.reveal(t))
    }
    ,
    f.prepended = function(n) {
        var t = this._itemize(n), i;
        t.length && (i = this.items.slice(0),
        this.items = t.concat(i),
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(t, !0),
        this.reveal(t),
        this.layoutItems(i))
    }
    ,
    f.reveal = function(n) {
        if (this._emitCompleteOnItems("reveal", n),
        n && n.length) {
            var t = this.updateStagger();
            n.forEach(function(n, i) {
                n.stagger(i * t);
                n.reveal()
            })
        }
    }
    ,
    f.hide = function(n) {
        if (this._emitCompleteOnItems("hide", n),
        n && n.length) {
            var t = this.updateStagger();
            n.forEach(function(n, i) {
                n.stagger(i * t);
                n.hide()
            })
        }
    }
    ,
    f.revealItemElements = function(n) {
        var t = this.getItems(n);
        this.reveal(t)
    }
    ,
    f.hideItemElements = function(n) {
        var t = this.getItems(n);
        this.hide(t)
    }
    ,
    f.getItem = function(n) {
        for (var i, t = 0; t < this.items.length; t++)
            if (i = this.items[t],
            i.element == n)
                return i
    }
    ,
    f.getItems = function(n) {
        n = r.makeArray(n);
        var t = [];
        return n.forEach(function(n) {
            var i = this.getItem(n);
            i && t.push(i)
        }, this),
        t
    }
    ,
    f.remove = function(n) {
        var t = this.getItems(n);
        this._emitCompleteOnItems("remove", t);
        t && t.length && t.forEach(function(n) {
            n.remove();
            r.removeFrom(this.items, n)
        }, this)
    }
    ,
    f.destroy = function() {
        var n = this.element.style, t;
        n.height = "";
        n.position = "";
        n.width = "";
        this.items.forEach(function(n) {
            n.destroy()
        });
        this.unbindResize();
        t = this.element.outlayerGUID;
        delete s[t];
        delete this.element.outlayerGUID;
        o && o.removeData(this.element, this.constructor.namespace)
    }
    ,
    e.data = function(n) {
        n = r.getQueryElement(n);
        var t = n && n.outlayerGUID;
        return t && s[t]
    }
    ,
    e.create = function(n, t) {
        var i = h(e);
        return i.defaults = r.extend({}, e.defaults),
        r.extend(i.defaults, t),
        i.compatOptions = r.extend({}, e.compatOptions),
        i.namespace = n,
        i.data = e.data,
        i.Item = h(u),
        r.htmlInit(i, n),
        o && o.bridget && o.bridget(n, i),
        i
    }
    ,
    a = {
        ms: 1,
        s: 1e3
    },
    e.Item = u,
    e
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (n.Isotope = n.Isotope || {},
    n.Isotope.Item = t(n.Outlayer))
}(window, function(n) {
    "use strict";
    function i() {
        n.Item.apply(this, arguments)
    }
    var t = i.prototype = Object.create(n.Item.prototype), u = t._create, r;
    return t._create = function() {
        this.id = this.layout.itemGUID++;
        u.call(this);
        this.sortData = {}
    }
    ,
    t.updateSortData = function() {
        var t, i, n, r;
        if (!this.isIgnored) {
            this.sortData.id = this.id;
            this.sortData["original-order"] = this.id;
            this.sortData.random = Math.random();
            t = this.layout.options.getSortData;
            i = this.layout._sorters;
            for (n in t)
                r = i[n],
                this.sortData[n] = r(this.element, this)
        }
    }
    ,
    r = t.destroy,
    t.destroy = function() {
        r.apply(this, arguments);
        this.css({
            display: ""
        })
    }
    ,
    i
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (n.Isotope = n.Isotope || {},
    n.Isotope.LayoutMode = t(n.getSize, n.Outlayer))
}(window, function(n, t) {
    "use strict";
    function r(n) {
        this.isotope = n;
        n && (this.options = n.options[this.namespace],
        this.element = n.element,
        this.items = n.filteredItems,
        this.size = n.size)
    }
    var i = r.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(n) {
        i[n] = function() {
            return t.prototype[n].apply(this.isotope, arguments)
        }
    }),
    i.needsVerticalResizeLayout = function() {
        var t = n(this.isotope.element)
          , i = this.isotope.size && t;
        return i && t.innerHeight != this.isotope.size.innerHeight
    }
    ,
    i._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    i.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    i.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    i.getSegmentSize = function(n, t) {
        var i = n + t, u = "outer" + t, r;
        (this._getMeasurement(i, u),
        this[i]) || (r = this.getFirstItemSize(),
        this[i] = r && r[u] || this.isotope.size["inner" + t])
    }
    ,
    i.getFirstItemSize = function() {
        var t = this.isotope.filteredItems[0];
        return t && t.element && n(t.element)
    }
    ,
    i.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    i.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size
    }
    ,
    r.modes = {},
    r.create = function(n, t) {
        function u() {
            r.apply(this, arguments)
        }
        return u.prototype = Object.create(i),
        u.prototype.constructor = u,
        t && (u.options = t),
        u.prototype.namespace = n,
        r.modes[n] = u,
        u
    }
    ,
    r
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : n.Masonry = t(n.Outlayer, n.getSize)
}(window, function(n, t) {
    var r = n.create("masonry"), i;
    return r.compatOptions.fitWidth = "isFitWidth",
    i = r.prototype,
    i._resetLayout = function() {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        this.colYs = [];
        for (var n = 0; n < this.cols; n++)
            this.colYs.push(0);
        this.maxY = 0;
        this.horizontalColIndex = 0
    }
    ,
    i.measureColumns = function() {
        var n, i;
        (this.getContainerWidth(),
        this.columnWidth) || (n = this.items[0],
        i = n && n.element,
        this.columnWidth = i && t(i).outerWidth || this.containerWidth);
        var r = this.columnWidth += this.gutter
          , f = this.containerWidth + this.gutter
          , u = f / r
          , e = r - f % r
          , o = e && e < 1 ? "round" : "floor";
        u = Math[o](u);
        this.cols = Math.max(u, 1)
    }
    ,
    i.getContainerWidth = function() {
        var i = this._getOption("fitWidth")
          , r = i ? this.element.parentNode : this.element
          , n = t(r);
        this.containerWidth = n && n.innerWidth
    }
    ,
    i._getItemLayoutPosition = function(n) {
        n.getSize();
        var u = n.size.outerWidth % this.columnWidth
          , f = u && u < 1 ? "round" : "ceil"
          , i = Math[f](n.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var e = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", t = this[e](i, n), o = {
            x: this.columnWidth * t.col,
            y: t.y
        }, s = t.y + n.size.outerHeight, h = i + t.col, r = t.col; r < h; r++)
            this.colYs[r] = s;
        return o
    }
    ,
    i._getTopColPosition = function(n) {
        var t = this._getTopColGroup(n)
          , i = Math.min.apply(Math, t);
        return {
            col: t.indexOf(i),
            y: i
        }
    }
    ,
    i._getTopColGroup = function(n) {
        if (n < 2)
            return this.colYs;
        for (var i = [], r = this.cols + 1 - n, t = 0; t < r; t++)
            i[t] = this._getColGroupY(t, n);
        return i
    }
    ,
    i._getColGroupY = function(n, t) {
        if (t < 2)
            return this.colYs[n];
        var i = this.colYs.slice(n, n + t);
        return Math.max.apply(Math, i)
    }
    ,
    i._getHorizontalColPosition = function(n, t) {
        var i = this.horizontalColIndex % this.cols, u = n > 1 && i + n > this.cols, r;
        return i = u ? 0 : i,
        r = t.size.outerWidth && t.size.outerHeight,
        this.horizontalColIndex = r ? i + n : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, n)
        }
    }
    ,
    i._manageStamp = function(n) {
        var e = t(n), r = this._getElementOffset(n), h = this._getOption("originLeft"), o = h ? r.left : r.right, s = o + e.outerWidth, f = Math.floor(o / this.columnWidth), i;
        f = Math.max(0, f);
        i = Math.floor(s / this.columnWidth);
        i -= s % this.columnWidth ? 0 : 1;
        i = Math.min(this.cols - 1, i);
        for (var c = this._getOption("originTop"), l = (c ? r.top : r.bottom) + e.outerHeight, u = f; u <= i; u++)
            this.colYs[u] = Math.max(l, this.colYs[u])
    }
    ,
    i._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var n = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (n.width = this._getContainerFitWidth()),
        n
    }
    ,
    i._getContainerFitWidth = function() {
        for (var n = 0, t = this.cols; --t && 0 === this.colYs[t]; )
            n++;
        return (this.cols - n) * this.columnWidth - this.gutter
    }
    ,
    i.needsResizeLayout = function() {
        var n = this.containerWidth;
        return this.getContainerWidth(),
        n != this.containerWidth
    }
    ,
    r
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(n.Isotope.LayoutMode, n.Masonry)
}(window, function(n, t) {
    "use strict";
    var u = n.create("masonry"), i = u.prototype, o = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    }, r, f, e;
    for (r in t.prototype)
        o[r] || (i[r] = t.prototype[r]);
    return f = i.measureColumns,
    i.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        f.call(this)
    }
    ,
    e = i._getOption,
    i._getOption = function(n) {
        return "fitWidth" == n ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : e.apply(this.isotope, arguments)
    }
    ,
    u
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
}(window, function(n) {
    "use strict";
    var i = n.create("fitRows")
      , t = i.prototype;
    return t._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    t._getItemLayoutPosition = function(n) {
        var t, i, r;
        return n.getSize(),
        t = n.size.outerWidth + this.gutter,
        i = this.isotope.size.innerWidth + this.gutter,
        0 !== this.x && t + this.x > i && (this.x = 0,
        this.y = this.maxY),
        r = {
            x: this.x,
            y: this.y
        },
        this.maxY = Math.max(this.maxY, this.y + n.size.outerHeight),
        this.x += t,
        r
    }
    ,
    t._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    i
}),
function(n, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(n.Isotope.LayoutMode)
}(window, function(n) {
    "use strict";
    var i = n.create("vertical", {
        horizontalAlignment: 0
    })
      , t = i.prototype;
    return t._resetLayout = function() {
        this.y = 0
    }
    ,
    t._getItemLayoutPosition = function(n) {
        n.getSize();
        var t = (this.isotope.size.innerWidth - n.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += n.size.outerHeight,
        {
            x: t,
            y: i
        }
    }
    ,
    t._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    i
}),
function(n, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, r, u, f, e, o) {
        return t(n, i, r, u, f, e, o)
    }) : "object" == typeof module && module.exports ? module.exports = t(n, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : n.Isotope = t(n, n.Outlayer, n.getSize, n.matchesSelector, n.fizzyUIUtils, n.Isotope.Item, n.Isotope.LayoutMode)
}(window, function(n, t, i, r, u, f, e) {
    function a(n, t) {
        return function(i, r) {
            for (var s, h, u = 0; u < n.length; u++) {
                var f = n[u]
                  , e = i.sortData[f]
                  , o = r.sortData[f];
                if (e > o || e < o)
                    return s = void 0 !== t[f] ? t[f] : t,
                    h = s ? 1 : -1,
                    (e > o ? 1 : -1) * h
            }
            return 0
        }
    }
    var h = n.jQuery, v = String.prototype.trim ? function(n) {
        return n.trim()
    }
    : function(n) {
        return n.replace(/^\s+|\s+$/g, "")
    }
    , s = t.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    }), o, c, l;
    return s.Item = f,
    s.LayoutMode = e,
    o = s.prototype,
    o._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        t.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ["original-order"];
        for (var n in e.modes)
            this._initLayoutMode(n)
    }
    ,
    o.reloadItems = function() {
        this.itemGUID = 0;
        t.prototype.reloadItems.call(this)
    }
    ,
    o._itemize = function() {
        for (var r, n = t.prototype._itemize.apply(this, arguments), i = 0; i < n.length; i++)
            r = n[i],
            r.id = this.itemGUID++;
        return this._updateItemsSortData(n),
        n
    }
    ,
    o._initLayoutMode = function(n) {
        var t = e.modes[n]
          , i = this.options[n] || {};
        this.options[n] = t.options ? u.extend(t.options, i) : i;
        this.modes[n] = new t(this)
    }
    ,
    o.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    o._layout = function() {
        var n = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, n);
        this._isLayoutInited = !0
    }
    ,
    o.arrange = function(n) {
        this.option(n);
        this._getIsInstant();
        var t = this._filter(this.items);
        this.filteredItems = t.matches;
        this._bindArrangeComplete();
        this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t);
        this._sort();
        this._layout()
    }
    ,
    o._init = o.arrange,
    o._hideReveal = function(n) {
        this.reveal(n.needReveal);
        this.hide(n.needHide)
    }
    ,
    o._getIsInstant = function() {
        var n = this._getOption("layoutInstant")
          , t = void 0 !== n ? n : !this._isLayoutInited;
        return this._isInstant = t,
        t
    }
    ,
    o._bindArrangeComplete = function() {
        function n() {
            t && i && r && u.dispatchEvent("arrangeComplete", null, [u.filteredItems])
        }
        var t, i, r, u = this;
        this.once("layoutComplete", function() {
            t = !0;
            n()
        });
        this.once("hideComplete", function() {
            i = !0;
            n()
        });
        this.once("revealComplete", function() {
            r = !0;
            n()
        })
    }
    ,
    o._filter = function(n) {
        var r = this.options.filter, t, i;
        r = r || "*";
        for (var f = [], e = [], o = [], s = this._getFilterTest(r), u = 0; u < n.length; u++)
            t = n[u],
            t.isIgnored || (i = s(t),
            i && f.push(t),
            i && t.isHidden ? e.push(t) : i || t.isHidden || o.push(t));
        return {
            matches: f,
            needReveal: e,
            needHide: o
        }
    }
    ,
    o._getFilterTest = function(n) {
        return h && this.options.isJQueryFiltering ? function(t) {
            return h(t.element).is(n)
        }
        : "function" == typeof n ? function(t) {
            return n(t.element)
        }
        : function(t) {
            return r(t.element, n)
        }
    }
    ,
    o.updateSortData = function(n) {
        var t;
        n ? (n = u.makeArray(n),
        t = this.getItems(n)) : t = this.items;
        this._getSorters();
        this._updateItemsSortData(t)
    }
    ,
    o._getSorters = function() {
        var t = this.options.getSortData, n, i;
        for (n in t)
            i = t[n],
            this._sorters[n] = c(i)
    }
    ,
    o._updateItemsSortData = function(n) {
        for (var r, i = n && n.length, t = 0; i && t < i; t++)
            r = n[t],
            r.updateSortData()
    }
    ,
    c = function() {
        function n(n) {
            if ("string" != typeof n)
                return n;
            var i = v(n).split(" ")
              , r = i[0]
              , u = r.match(/^\[(.+)\]$/)
              , o = u && u[1]
              , f = t(o, r)
              , e = s.sortDataParsers[i[1]];
            return e ? function(n) {
                return n && e(f(n))
            }
            : function(n) {
                return n && f(n)
            }
        }
        function t(n, t) {
            return n ? function(t) {
                return t.getAttribute(n)
            }
            : function(n) {
                var i = n.querySelector(t);
                return i && i.textContent
            }
        }
        return n
    }(),
    s.sortDataParsers = {
        parseInt: function(n) {
            return parseInt(n, 10)
        },
        parseFloat: function(n) {
            return parseFloat(n)
        }
    },
    o._sort = function() {
        var n, t;
        this.options.sortBy && (n = u.makeArray(this.options.sortBy),
        this._getIsSameSortBy(n) || (this.sortHistory = n.concat(this.sortHistory)),
        t = a(this.sortHistory, this.options.sortAscending),
        this.filteredItems.sort(t))
    }
    ,
    o._getIsSameSortBy = function(n) {
        for (var t = 0; t < n.length; t++)
            if (n[t] != this.sortHistory[t])
                return !1;
        return !0
    }
    ,
    o._mode = function() {
        var n = this.options.layoutMode
          , t = this.modes[n];
        if (!t)
            throw new Error("No layout mode: " + n);
        return t.options = this.options[n],
        t
    }
    ,
    o._resetLayout = function() {
        t.prototype._resetLayout.call(this);
        this._mode()._resetLayout()
    }
    ,
    o._getItemLayoutPosition = function(n) {
        return this._mode()._getItemLayoutPosition(n)
    }
    ,
    o._manageStamp = function(n) {
        this._mode()._manageStamp(n)
    }
    ,
    o._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    o.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    o.appended = function(n) {
        var t = this.addItems(n), i;
        t.length && (i = this._filterRevealAdded(t),
        this.filteredItems = this.filteredItems.concat(i))
    }
    ,
    o.prepended = function(n) {
        var t = this._itemize(n), i;
        t.length && (this._resetLayout(),
        this._manageStamps(),
        i = this._filterRevealAdded(t),
        this.layoutItems(this.filteredItems),
        this.filteredItems = i.concat(this.filteredItems),
        this.items = t.concat(this.items))
    }
    ,
    o._filterRevealAdded = function(n) {
        var t = this._filter(n);
        return this.hide(t.needHide),
        this.reveal(t.matches),
        this.layoutItems(t.matches, !0),
        t.matches
    }
    ,
    o.insert = function(n) {
        var i = this.addItems(n), t, u, r, f;
        if (i.length) {
            for (r = i.length,
            t = 0; t < r; t++)
                u = i[t],
                this.element.appendChild(u.element);
            for (f = this._filter(i).matches,
            t = 0; t < r; t++)
                i[t].isLayoutInstant = !0;
            for (this.arrange(),
            t = 0; t < r; t++)
                delete i[t].isLayoutInstant;
            this.reveal(f)
        }
    }
    ,
    l = o.remove,
    o.remove = function(n) {
        var t, r, i, f;
        for (n = u.makeArray(n),
        t = this.getItems(n),
        l.call(this, n),
        r = t && t.length,
        i = 0; r && i < r; i++)
            f = t[i],
            u.removeFrom(this.filteredItems, f)
    }
    ,
    o.shuffle = function() {
        for (var t, n = 0; n < this.items.length; n++)
            t = this.items[n],
            t.sortData.random = Math.random();
        this.options.sortBy = "random";
        this._sort();
        this._layout()
    }
    ,
    o._noTransition = function(n, t) {
        var r = this.options.transitionDuration, i;
        return this.options.transitionDuration = 0,
        i = n.apply(this, t),
        this.options.transitionDuration = r,
        i
    }
    ,
    o.getFilteredItemElements = function() {
        return this.filteredItems.map(function(n) {
            return n.element
        })
    }
    ,
    s
}),
function(n) {
    function r(i) {
        var r = n.extend({}, t, i);
        this.data(r);
        this.each(function(t, i) {
            u(n(i), r)
        })
    }
    function u(n, t) {
        var u = n.find("." + i.tooltip), r = !1, s;
        n.on("mouseenter", function() {
            r === !1 && (s = setTimeout(function() {
                r = !0;
                e(u, t.speed)
            }, t.delay));
            f(n, t)
        }).on("mouseleave", function() {
            clearTimeout(s);
            r = !1;
            o(u, t.speed)
        })
    }
    function f(n) {
        var t = n.find(".content"), i;
        n.find(".content").length != 0 && (i = n.offset(),
        i.left > t.outerWidth() ? (t.css({
            right: n.outerWidth() + 10
        }),
        t.addClass("nt-left")) : (t.css({
            left: n.outerWidth() + 10
        }),
        t.addClass("nt-right")))
    }
    function e(n, t) {
        n.css({
            visibility: "visible"
        }).animate({
            opacity: 1
        }, t)
    }
    function o(n, t) {
        n.animate({
            opacity: 0
        }, t, function() {
            n.css({
                visibility: "hidden"
            })
        })
    }
    var t = {
        speed: 200,
        delay: 200
    }
      , i = {
        tooltip: "naoTooltip",
        arrowSize: 16
    };
    n.fn.naoTooltip = function() {
        return r.apply(this, arguments),
        this
    }
}(jQuery);
!function(n, t, i, r) {
    var u = n(t);
    n.fn.lazyload = function(f) {
        function s() {
            var t = 0;
            o.each(function() {
                var i = n(this);
                if ((!e.skip_invisible || i.is(":visible")) && !n.abovethetop(this, e) && !n.leftofbegin(this, e))
                    if (n.belowthefold(this, e) || n.rightoffold(this, e)) {
                        if (++t > e.failure_limit)
                            return !1
                    } else
                        i.trigger("appear"),
                        t = 0
            })
        }
        var h, o = this, e = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "original",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: ""
        };
        return f && (r !== f.failurelimit && (f.failure_limit = f.failurelimit,
        delete f.failurelimit),
        r !== f.effectspeed && (f.effect_speed = f.effectspeed,
        delete f.effectspeed),
        n.extend(e, f)),
        h = e.container === r || e.container === t ? u : n(e.container),
        0 === e.event.indexOf("scroll") && h.bind(e.event, function() {
            return s()
        }),
        this.each(function() {
            var i = this
              , t = n(i);
            i.loaded = !1;
            (t.attr("src") === r || t.attr("src") === !1) && t.is("img") && t.attr("src", e.placeholder);
            t.one("appear", function() {
                if (!this.loaded) {
                    if (e.appear) {
                        var r = o.length;
                        e.appear.call(i, r, e)
                    }
                    n("<img />").bind("load", function() {
                        var r = t.attr("data-" + e.data_attribute), u, f;
                        t.hide();
                        t.is("img") ? t.attr("src", r) : t.css("background-image", "url('" + r + "')");
                        t[e.effect](e.effect_speed);
                        i.loaded = !0;
                        u = n.grep(o, function(n) {
                            return !n.loaded
                        });
                        (o = n(u),
                        e.load) && (f = o.length,
                        e.load.call(i, f, e))
                    }).attr("src", t.attr("data-" + e.data_attribute))
                }
            });
            0 !== e.event.indexOf("scroll") && t.bind(e.event, function() {
                i.loaded || t.trigger("appear")
            })
        }),
        u.bind("resize", function() {
            s()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && u.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && o.each(function() {
                n(this).trigger("appear")
            })
        }),
        n(i).ready(function() {
            s()
        }),
        this
    }
    ;
    n.belowthefold = function(i, f) {
        var e;
        return e = f.container === r || f.container === t ? (t.innerHeight ? t.innerHeight : u.height()) + u.scrollTop() : n(f.container).offset().top + n(f.container).height(),
        e <= n(i).offset().top - f.threshold
    }
    ;
    n.rightoffold = function(i, f) {
        var e;
        return e = f.container === r || f.container === t ? u.width() + u.scrollLeft() : n(f.container).offset().left + n(f.container).width(),
        e <= n(i).offset().left - f.threshold
    }
    ;
    n.abovethetop = function(i, f) {
        var e;
        return e = f.container === r || f.container === t ? u.scrollTop() : n(f.container).offset().top,
        e >= n(i).offset().top + f.threshold + n(i).height()
    }
    ;
    n.leftofbegin = function(i, f) {
        var e;
        return e = f.container === r || f.container === t ? u.scrollLeft() : n(f.container).offset().left,
        e >= n(i).offset().left + f.threshold + n(i).width()
    }
    ;
    n.inviewport = function(t, i) {
        return !(n.rightoffold(t, i) || n.leftofbegin(t, i) || n.belowthefold(t, i) || n.abovethetop(t, i))
    }
    ;
    n.extend(n.expr[":"], {
        "below-the-fold": function(t) {
            return n.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !n.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return n.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !n.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return n.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !n.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return n.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !n.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document);
!function(n, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.swal = t() : n.swal = t()
}(this, function() {
    return function(n) {
        function t(r) {
            if (i[r])
                return i[r].exports;
            var u = i[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return n[r].call(u.exports, u, u.exports, t),
            u.l = !0,
            u.exports
        }
        var i = {};
        return t.m = n,
        t.c = i,
        t.d = function(n, i, r) {
            t.o(n, i) || Object.defineProperty(n, i, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        t.n = function(n) {
            var i = n && n.__esModule ? function() {
                return n.default
            }
            : function() {
                return n
            }
            ;
            return t.d(i, "a", i),
            i
        }
        ,
        t.o = function(n, t) {
            return Object.prototype.hasOwnProperty.call(n, t)
        }
        ,
        t.p = "",
        t(t.s = 8)
    }([function(n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "swal-button";
        t.CLASS_NAMES = {
            MODAL: "swal-modal",
            OVERLAY: "swal-overlay",
            SHOW_MODAL: "swal-overlay--show-modal",
            MODAL_TITLE: "swal-title",
            MODAL_TEXT: "swal-text",
            ICON: "swal-icon",
            ICON_CUSTOM: "swal-icon--custom",
            CONTENT: "swal-content",
            FOOTER: "swal-footer",
            BUTTON_CONTAINER: "swal-button-container",
            BUTTON: i,
            CONFIRM_BUTTON: i + "--confirm",
            CANCEL_BUTTON: i + "--cancel",
            DANGER_BUTTON: i + "--danger",
            BUTTON_LOADING: i + "--loading",
            BUTTON_LOADER: i + "__loader"
        };
        t.default = t.CLASS_NAMES
    }
    , function(n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getNode = function(n) {
            var t = "." + n;
            return document.querySelector(t)
        }
        ;
        t.stringToNode = function(n) {
            var t = document.createElement("div");
            return t.innerHTML = n.trim(),
            t.firstChild
        }
        ;
        t.insertAfter = function(n, t) {
            var i = t.nextSibling;
            t.parentNode.insertBefore(n, i)
        }
        ;
        t.removeNode = function(n) {
            n.parentElement.removeChild(n)
        }
        ;
        t.throwErr = function(n) {
            throw n = n.replace(/ +(?= )/g, ""),
            "SweetAlert: " + (n = n.trim());
        }
        ;
        t.isPlainObject = function(n) {
            if ("[object Object]" !== Object.prototype.toString.call(n))
                return !1;
            var t = Object.getPrototypeOf(n);
            return null === t || t === Object.prototype
        }
        ;
        t.ordinalSuffixOf = function(n) {
            var t = n % 10
              , i = n % 100;
            return 1 === t && 11 !== i ? n + "st" : 2 === t && 12 !== i ? n + "nd" : 3 === t && 13 !== i ? n + "rd" : n + "th"
        }
    }
    , function(n, t, i) {
        "use strict";
        function r(n) {
            for (var i in n)
                t.hasOwnProperty(i) || (t[i] = n[i])
        }
        var f;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        r(i(25));
        f = i(26);
        t.overlayMarkup = f.default;
        r(i(27));
        r(i(28));
        r(i(29));
        var u = i(0)
          , e = u.default.MODAL_TITLE
          , o = u.default.MODAL_TEXT
          , s = u.default.ICON
          , h = u.default.FOOTER;
        t.iconMarkup = '\n  <div class="' + s + '"><\/div>';
        t.titleMarkup = '\n  <div class="' + e + '"><\/div>\n';
        t.textMarkup = '\n  <div class="' + o + '"><\/div>';
        t.footerMarkup = '\n  <div class="' + h + '"><\/div>\n'
    }
    , function(n, t, i) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        r = i(1);
        t.CONFIRM_KEY = "confirm";
        t.CANCEL_KEY = "cancel";
        var e = {
            visible: !0,
            text: null,
            value: null,
            className: "",
            closeModal: !0
        }
          , u = Object.assign({}, e, {
            visible: !1,
            text: "Cancel",
            value: null
        })
          , s = Object.assign({}, e, {
            text: "OK",
            value: !0
        });
        t.defaultButtonList = {
            cancel: u,
            confirm: s
        };
        var h = function(n) {
            switch (n) {
            case t.CONFIRM_KEY:
                return s;
            case t.CANCEL_KEY:
                return u;
            default:
                var i = n.charAt(0).toUpperCase() + n.slice(1);
                return Object.assign({}, e, {
                    text: i,
                    value: n
                })
            }
        }
          , f = function(n, t) {
            var i = h(n);
            return !0 === t ? Object.assign({}, i, {
                visible: !0
            }) : "string" == typeof t ? Object.assign({}, i, {
                visible: !0,
                text: t
            }) : r.isPlainObject(t) ? Object.assign({
                visible: !0
            }, i, t) : Object.assign({}, i, {
                visible: !1
            })
        }
          , c = function(n) {
            for (var t = {}, i = 0, e = Object.keys(n); i < e.length; i++) {
                var r = e[i]
                  , o = n[r]
                  , s = f(r, o);
                t[r] = s
            }
            return t.cancel || (t.cancel = u),
            t
        }
          , o = function(n) {
            var i = {};
            switch (n.length) {
            case 1:
                i[t.CANCEL_KEY] = Object.assign({}, u, {
                    visible: !1
                });
                break;
            case 2:
                i[t.CANCEL_KEY] = f(t.CANCEL_KEY, n[0]);
                i[t.CONFIRM_KEY] = f(t.CONFIRM_KEY, n[1]);
                break;
            default:
                r.throwErr("Invalid number of 'buttons' in array (" + n.length + ").\n      If you want more than 2 buttons, you need to use an object!")
            }
            return i
        };
        t.getButtonListOpts = function(n) {
            var i = t.defaultButtonList;
            return "string" == typeof n ? i[t.CONFIRM_KEY] = f(t.CONFIRM_KEY, n) : Array.isArray(n) ? i = o(n) : r.isPlainObject(n) ? i = c(n) : !0 === n ? i = o([!0, !0]) : !1 === n ? i = o([!1, !1]) : void 0 === n && (i = t.defaultButtonList),
            i
        }
    }
    , function(n, t, i) {
        "use strict";
        var o, s, h;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(1)
          , c = i(2)
          , f = i(0)
          , u = f.default.MODAL
          , l = f.default.OVERLAY
          , a = i(30)
          , e = i(31)
          , v = i(32)
          , y = i(33);
        t.injectElIntoModal = function(n) {
            var i = r.getNode(u)
              , t = r.stringToNode(n);
            return i.appendChild(t),
            t
        }
        ;
        o = function(n) {
            n.className = u;
            n.textContent = ""
        }
        ;
        s = function(n, t) {
            o(n);
            var i = t.className;
            i && n.classList.add(i)
        }
        ;
        t.initModalContent = function(n) {
            var t = r.getNode(u);
            s(t, n);
            a.default(n.icon);
            e.initTitle(n.title);
            e.initText(n.text);
            y.default(n.content);
            v.default(n.buttons, n.dangerMode)
        }
        ;
        h = function() {
            var n = r.getNode(l)
              , t = r.stringToNode(c.modalMarkup);
            n.appendChild(t)
        }
        ;
        t.default = h
    }
    , function(n, t, i) {
        "use strict";
        var u;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = i(3)
          , f = {
            isOpen: !1,
            promise: null,
            actions: {},
            timer: null
        }
          , r = Object.assign({}, f);
        t.resetState = function() {
            r = Object.assign({}, f)
        }
        ;
        t.setActionValue = function(n) {
            if ("string" == typeof n)
                return u(e.CONFIRM_KEY, n);
            for (var t in n)
                u(t, n[t])
        }
        ;
        u = function(n, t) {
            r.actions[n] || (r.actions[n] = {});
            Object.assign(r.actions[n], {
                value: t
            })
        }
        ;
        t.setActionOptionsFor = function(n, t) {
            var i = (void 0 === t ? {} : t).closeModal
              , u = void 0 === i || i;
            Object.assign(r.actions[n], {
                closeModal: u
            })
        }
        ;
        t.default = r
    }
    , function(n, t, i) {
        "use strict";
        var c;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = i(1)
          , l = i(3)
          , u = i(0)
          , e = u.default.OVERLAY
          , o = u.default.SHOW_MODAL
          , s = u.default.BUTTON
          , h = u.default.BUTTON_LOADING
          , r = i(5);
        t.openModal = function() {
            f.getNode(e).classList.add(o);
            r.default.isOpen = !0
        }
        ;
        c = function() {
            f.getNode(e).classList.remove(o);
            r.default.isOpen = !1
        }
        ;
        t.onAction = function(n) {
            var t, i, u;
            void 0 === n && (n = l.CANCEL_KEY);
            t = r.default.actions[n];
            i = t.value;
            !1 === t.closeModal ? (u = s + "--" + n,
            f.getNode(u).classList.add(h)) : c();
            r.default.promise.resolve(i)
        }
        ;
        t.getState = function() {
            var n = Object.assign({}, r.default);
            return delete n.promise,
            delete n.timer,
            n
        }
        ;
        t.stopLoading = function() {
            for (var t = document.querySelectorAll("." + s), n = 0; n < t.length; n++)
                t[n].classList.remove(h)
        }
    }
    , function(n) {
        var t = function() {
            return this
        }();
        try {
            t = t || Function("return this")() || eval("this")
        } catch (n) {
            "object" == typeof window && (t = window)
        }
        n.exports = t
    }
    , function(n, t, i) {
        (function(t) {
            n.exports = t.sweetAlert = i(9)
        }
        ).call(t, i(7))
    }
    , function(n, t, i) {
        (function(t) {
            n.exports = t.swal = i(10)
        }
        ).call(t, i(7))
    }
    , function(n, t, i) {
        "undefined" != typeof window && i(11);
        i(16);
        var r = i(23).default;
        n.exports = r
    }
    , function(n, t, i) {
        var r = i(12), u;
        "string" == typeof r && (r = [[n.i, r, ""]]);
        u = {
            insertAt: "top"
        };
        u.transform = void 0;
        i(14)(r, u);
        r.locals && (n.exports = r.locals)
    }
    , function(n, t, i) {
        t = n.exports = i(13)(void 0);
        t.push([n.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""])
    }
    , function(n) {
        function t(n, t) {
            var u = n[1] || "", r = n[3], f;
            return r ? t && "function" == typeof btoa ? (f = i(r),
            [u].concat(r.sources.map(function(n) {
                return "/*# sourceURL=" + r.sourceRoot + n + " */"
            })).concat([f]).join("\n")) : [u].join("\n") : u
        }
        function i(n) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"
        }
        n.exports = function(n) {
            var i = [];
            return i.toString = function() {
                return this.map(function(i) {
                    var r = t(i, n);
                    return i[2] ? "@media " + i[2] + "{" + r + "}" : r
                }).join("")
            }
            ,
            i.i = function(n, t) {
                var f, r, e, u;
                for ("string" == typeof n && (n = [[null, n, ""]]),
                f = {},
                r = 0; r < this.length; r++)
                    e = this[r][0],
                    "number" == typeof e && (f[e] = !0);
                for (r = 0; r < n.length; r++)
                    u = n[r],
                    "number" == typeof u[0] && f[u[0]] || (t && !u[2] ? u[2] = t : t && (u[2] = "(" + u[2] + ") and (" + t + ")"),
                    i.push(u))
            }
            ,
            i
        }
    }
    , function(n, t, i) {
        function f(n, t) {
            for (var r, f, o, i, e = 0; e < n.length; e++)
                if (r = n[e],
                f = u[r.id],
                f) {
                    for (f.refs++,
                    i = 0; i < f.parts.length; i++)
                        f.parts[i](r.parts[i]);
                    for (; i < r.parts.length; i++)
                        f.parts.push(l(r.parts[i], t))
                } else {
                    for (o = [],
                    i = 0; i < r.parts.length; i++)
                        o.push(l(r.parts[i], t));
                    u[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: o
                    }
                }
        }
        function e(n, t) {
            for (var e = [], u = {}, f = 0; f < n.length; f++) {
                var i = n[f]
                  , r = t.base ? i[0] + t.base : i[0]
                  , s = i[1]
                  , h = i[2]
                  , c = i[3]
                  , o = {
                    css: s,
                    media: h,
                    sourceMap: c
                };
                u[r] ? u[r].parts.push(o) : e.push(u[r] = {
                    id: r,
                    parts: [o]
                })
            }
            return e
        }
        function o(n, t) {
            var i = d(n.insertInto), u;
            if (!i)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            if (u = r[r.length - 1],
            "top" === n.insertAt)
                u ? u.nextSibling ? i.insertBefore(t, u.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild),
                r.push(t);
            else {
                if ("bottom" !== n.insertAt)
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                i.appendChild(t)
            }
        }
        function s(n) {
            if (null === n.parentNode)
                return !1;
            n.parentNode.removeChild(n);
            var t = r.indexOf(n);
            t >= 0 && r.splice(t, 1)
        }
        function h(n) {
            var t = document.createElement("style");
            return n.attrs.type = "text/css",
            c(t, n.attrs),
            o(n, t),
            t
        }
        function p(n) {
            var t = document.createElement("link");
            return n.attrs.type = "text/css",
            n.attrs.rel = "stylesheet",
            c(t, n.attrs),
            o(n, t),
            t
        }
        function c(n, t) {
            Object.keys(t).forEach(function(i) {
                n.setAttribute(i, t[i])
            })
        }
        function l(n, t) {
            var i, r, u, e, f;
            if (t.transform && n.css) {
                if (!(e = t.transform(n.css)))
                    return function() {}
                    ;
                n.css = e
            }
            return t.singleton ? (f = g++,
            i = v || (v = h(t)),
            r = a.bind(null, i, f, !1),
            u = a.bind(null, i, f, !0)) : n.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = p(t),
            r = b.bind(null, i, t),
            u = function() {
                s(i);
                i.href && URL.revokeObjectURL(i.href)
            }
            ) : (i = h(t),
            r = w.bind(null, i),
            u = function() {
                s(i)
            }
            ),
            r(n),
            function(t) {
                if (t) {
                    if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap)
                        return;
                    r(n = t)
                } else
                    u()
            }
        }
        function a(n, t, i, r) {
            var e = i ? "" : r.css, f, u;
            n.styleSheet ? n.styleSheet.cssText = y(t, e) : (f = document.createTextNode(e),
            u = n.childNodes,
            u[t] && n.removeChild(u[t]),
            u.length ? n.insertBefore(f, u[t]) : n.appendChild(f))
        }
        function w(n, t) {
            var i = t.css
              , r = t.media;
            if (r && n.setAttribute("media", r),
            n.styleSheet)
                n.styleSheet.cssText = i;
            else {
                for (; n.firstChild; )
                    n.removeChild(n.firstChild);
                n.appendChild(document.createTextNode(i))
            }
        }
        function b(n, t, i) {
            var r = i.css, u = i.sourceMap, o = void 0 === t.convertToAbsoluteUrls && u, e, f;
            (t.convertToAbsoluteUrls || o) && (r = nt(r));
            u && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(u)))) + " */");
            e = new Blob([r],{
                type: "text/css"
            });
            f = n.href;
            n.href = URL.createObjectURL(e);
            f && URL.revokeObjectURL(f)
        }
        var u = {}, k = function(n) {
            var t;
            return function() {
                return void 0 === t && (t = n.apply(this, arguments)),
                t
            }
        }(function() {
            return window && document && document.all && !window.atob
        }), d = function(n) {
            var t = {};
            return function(i) {
                return void 0 === t[i] && (t[i] = n.call(this, i)),
                t[i]
            }
        }(function(n) {
            return document.querySelector(n)
        }), v = null, g = 0, r = [], nt = i(15), y;
        n.exports = function(n, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            t = t || {};
            t.attrs = "object" == typeof t.attrs ? t.attrs : {};
            t.singleton || (t.singleton = k());
            t.insertInto || (t.insertInto = "head");
            t.insertAt || (t.insertAt = "bottom");
            var i = e(n, t);
            return f(i, t),
            function(n) {
                for (var c, o, h, s = [], r = 0; r < i.length; r++)
                    c = i[r],
                    o = u[c.id],
                    o.refs--,
                    s.push(o);
                for (n && f(e(n, t), t),
                r = 0; r < s.length; r++)
                    if (o = s[r],
                    0 === o.refs) {
                        for (h = 0; h < o.parts.length; h++)
                            o.parts[h]();
                        delete u[o.id]
                    }
            }
        }
        ;
        y = function() {
            var n = [];
            return function(t, i) {
                return n[t] = i,
                n.filter(Boolean).join("\n")
            }
        }()
    }
    , function(n) {
        n.exports = function(n) {
            var t = "undefined" != typeof window && window.location, i, r;
            if (!t)
                throw new Error("fixUrls requires window.location");
            return !n || "string" != typeof n ? n : (i = t.protocol + "//" + t.host,
            r = i + t.pathname.replace(/\/[^\/]*$/, "/"),
            n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(n, t) {
                var u = t.trim().replace(/^"(.*)"$/, function(n, t) {
                    return t
                }).replace(/^'(.*)'$/, function(n, t) {
                    return t
                }), f;
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(u) ? n : (f = 0 === u.indexOf("//") ? u : 0 === u.indexOf("/") ? i + u : r + u.replace(/^\.\//, ""),
                "url(" + JSON.stringify(f) + ")")
            }))
        }
    }
    , function(n, t, i) {
        var r = i(17);
        "undefined" == typeof window || window.Promise || (window.Promise = r);
        i(21);
        String.prototype.includes || (String.prototype.includes = function(n, t) {
            "use strict";
            return "number" != typeof t && (t = 0),
            !(t + n.length > this.length) && -1 !== this.indexOf(n, t)
        }
        );
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(n, t) {
                var f, i, r, u;
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                if (f = Object(this),
                i = f.length >>> 0,
                0 === i)
                    return !1;
                for (r = 0 | t,
                u = Math.max(r >= 0 ? r : i - Math.abs(r), 0); u < i; ) {
                    if (function(n, t) {
                        return n === t || "number" == typeof n && "number" == typeof t && isNaN(n) && isNaN(t)
                    }(f[u], n))
                        return !0;
                    u++
                }
                return !1
            }
        });
        "undefined" != typeof window && function(n) {
            n.forEach(function(n) {
                n.hasOwnProperty("remove") || Object.defineProperty(n, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function() {
                        this.parentNode.removeChild(this)
                    }
                })
            })
        }([Element.prototype, CharacterData.prototype, DocumentType.prototype])
    }
    , function(n, t, i) {
        (function(t) {
            !function(i) {
                function h() {}
                function c(n, t) {
                    return function() {
                        n.apply(t, arguments)
                    }
                }
                function r(n) {
                    if ("object" != typeof this)
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof n)
                        throw new TypeError("not a function");
                    this._state = 0;
                    this._handled = !1;
                    this._value = void 0;
                    this._deferreds = [];
                    s(n, this)
                }
                function o(n, t) {
                    for (; 3 === n._state; )
                        n = n._value;
                    if (0 === n._state)
                        return void n._deferreds.push(t);
                    n._handled = !0;
                    r._immediateFn(function() {
                        var i = 1 === n._state ? t.onFulfilled : t.onRejected, r;
                        if (null === i)
                            return void (1 === n._state ? f : u)(t.promise, n._value);
                        try {
                            r = i(n._value)
                        } catch (n) {
                            return void u(t.promise, n)
                        }
                        f(t.promise, r)
                    })
                }
                function f(n, t) {
                    try {
                        if (t === n)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var i = t.then;
                            if (t instanceof r)
                                return n._state = 3,
                                n._value = t,
                                void e(n);
                            if ("function" == typeof i)
                                return void s(c(i, t), n)
                        }
                        n._state = 1;
                        n._value = t;
                        e(n)
                    } catch (t) {
                        u(n, t)
                    }
                }
                function u(n, t) {
                    n._state = 2;
                    n._value = t;
                    e(n)
                }
                function e(n) {
                    2 === n._state && 0 === n._deferreds.length && r._immediateFn(function() {
                        n._handled || r._unhandledRejectionFn(n._value)
                    });
                    for (var t = 0, i = n._deferreds.length; t < i; t++)
                        o(n, n._deferreds[t]);
                    n._deferreds = null
                }
                function l(n, t, i) {
                    this.onFulfilled = "function" == typeof n ? n : null;
                    this.onRejected = "function" == typeof t ? t : null;
                    this.promise = i
                }
                function s(n, t) {
                    var i = !1;
                    try {
                        n(function(n) {
                            i || (i = !0,
                            f(t, n))
                        }, function(n) {
                            i || (i = !0,
                            u(t, n))
                        })
                    } catch (n) {
                        if (i)
                            return;
                        i = !0;
                        u(t, n)
                    }
                }
                var a = setTimeout;
                r.prototype.catch = function(n) {
                    return this.then(null, n)
                }
                ;
                r.prototype.then = function(n, t) {
                    var i = new this.constructor(h);
                    return o(this, new l(n,t,i)),
                    i
                }
                ;
                r.all = function(n) {
                    var t = Array.prototype.slice.call(n);
                    return new r(function(n, i) {
                        function u(r, e) {
                            try {
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var o = e.then;
                                    if ("function" == typeof o)
                                        return void o.call(e, function(n) {
                                            u(r, n)
                                        }, i)
                                }
                                t[r] = e;
                                0 == --f && n(t)
                            } catch (n) {
                                i(n)
                            }
                        }
                        if (0 === t.length)
                            return n([]);
                        for (var f = t.length, r = 0; r < t.length; r++)
                            u(r, t[r])
                    }
                    )
                }
                ;
                r.resolve = function(n) {
                    return n && "object" == typeof n && n.constructor === r ? n : new r(function(t) {
                        t(n)
                    }
                    )
                }
                ;
                r.reject = function(n) {
                    return new r(function(t, i) {
                        i(n)
                    }
                    )
                }
                ;
                r.race = function(n) {
                    return new r(function(t, i) {
                        for (var r = 0, u = n.length; r < u; r++)
                            n[r].then(t, i)
                    }
                    )
                }
                ;
                r._immediateFn = "function" == typeof t && function(n) {
                    t(n)
                }
                || function(n) {
                    a(n, 0)
                }
                ;
                r._unhandledRejectionFn = function(n) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", n)
                }
                ;
                r._setImmediateFn = function(n) {
                    r._immediateFn = n
                }
                ;
                r._setUnhandledRejectionFn = function(n) {
                    r._unhandledRejectionFn = n
                }
                ;
                void 0 !== n && n.exports ? n.exports = r : i.Promise || (i.Promise = r)
            }(this)
        }
        ).call(t, i(18).setImmediate)
    }
    , function(n, t, i) {
        function r(n, t) {
            this._id = n;
            this._clearFn = t
        }
        var u = Function.prototype.apply;
        t.setTimeout = function() {
            return new r(u.call(setTimeout, window, arguments),clearTimeout)
        }
        ;
        t.setInterval = function() {
            return new r(u.call(setInterval, window, arguments),clearInterval)
        }
        ;
        t.clearTimeout = t.clearInterval = function(n) {
            n && n.close()
        }
        ;
        r.prototype.unref = r.prototype.ref = function() {}
        ;
        r.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }
        ;
        t.enroll = function(n, t) {
            clearTimeout(n._idleTimeoutId);
            n._idleTimeout = t
        }
        ;
        t.unenroll = function(n) {
            clearTimeout(n._idleTimeoutId);
            n._idleTimeout = -1
        }
        ;
        t._unrefActive = t.active = function(n) {
            clearTimeout(n._idleTimeoutId);
            var t = n._idleTimeout;
            t >= 0 && (n._idleTimeoutId = setTimeout(function() {
                n._onTimeout && n._onTimeout()
            }, t))
        }
        ;
        i(19);
        t.setImmediate = setImmediate;
        t.clearImmediate = clearImmediate
    }
    , function(n, t, i) {
        (function(n, t) {
            !function(n, i) {
                "use strict";
                function l(n) {
                    var i, t, r;
                    for ("function" != typeof n && (n = new Function("" + n)),
                    i = new Array(arguments.length - 1),
                    t = 0; t < i.length; t++)
                        i[t] = arguments[t + 1];
                    return r = {
                        callback: n,
                        args: i
                    },
                    s[o] = r,
                    u(o),
                    o++
                }
                function c(n) {
                    delete s[n]
                }
                function a(n) {
                    var r = n.callback
                      , t = n.args;
                    switch (t.length) {
                    case 0:
                        r();
                        break;
                    case 1:
                        r(t[0]);
                        break;
                    case 2:
                        r(t[0], t[1]);
                        break;
                    case 3:
                        r(t[0], t[1], t[2]);
                        break;
                    default:
                        r.apply(i, t)
                    }
                }
                function r(n) {
                    if (h)
                        setTimeout(r, 0, n);
                    else {
                        var t = s[n];
                        if (t) {
                            h = !0;
                            try {
                                a(t)
                            } finally {
                                c(n);
                                h = !1
                            }
                        }
                    }
                }
                if (!n.setImmediate) {
                    var u, o = 1, s = {}, h = !1, e = n.document, f = Object.getPrototypeOf && Object.getPrototypeOf(n);
                    f = f && f.setTimeout ? f : n;
                    "[object process]" === {}.toString.call(n.process) ? function() {
                        u = function(n) {
                            t.nextTick(function() {
                                r(n)
                            })
                        }
                    }() : function() {
                        if (n.postMessage && !n.importScripts) {
                            var t = !0
                              , i = n.onmessage;
                            return n.onmessage = function() {
                                t = !1
                            }
                            ,
                            n.postMessage("", "*"),
                            n.onmessage = i,
                            t
                        }
                    }() ? function() {
                        var t = "setImmediate$" + Math.random() + "$"
                          , i = function(i) {
                            i.source === n && "string" == typeof i.data && 0 === i.data.indexOf(t) && r(+i.data.slice(t.length))
                        };
                        n.addEventListener ? n.addEventListener("message", i, !1) : n.attachEvent("onmessage", i);
                        u = function(i) {
                            n.postMessage(t + i, "*")
                        }
                    }() : n.MessageChannel ? function() {
                        var n = new MessageChannel;
                        n.port1.onmessage = function(n) {
                            r(n.data)
                        }
                        ;
                        u = function(t) {
                            n.port2.postMessage(t)
                        }
                    }() : e && "onreadystatechange"in e.createElement("script") ? function() {
                        var n = e.documentElement;
                        u = function(t) {
                            var i = e.createElement("script");
                            i.onreadystatechange = function() {
                                r(t);
                                i.onreadystatechange = null;
                                n.removeChild(i);
                                i = null
                            }
                            ;
                            n.appendChild(i)
                        }
                    }() : function() {
                        u = function(n) {
                            setTimeout(r, 0, n)
                        }
                    }();
                    f.setImmediate = l;
                    f.clearImmediate = c
                }
            }("undefined" == typeof self ? void 0 === n ? this : n : self)
        }
        ).call(t, i(7), i(20))
    }
    , function(n) {
        function h() {
            throw new Error("setTimeout has not been defined");
        }
        function c() {
            throw new Error("clearTimeout has not been defined");
        }
        function l(n) {
            if (r === setTimeout)
                return setTimeout(n, 0);
            if ((r === h || !r) && setTimeout)
                return r = setTimeout,
                setTimeout(n, 0);
            try {
                return r(n, 0)
            } catch (t) {
                try {
                    return r.call(null, n, 0)
                } catch (t) {
                    return r.call(this, n, 0)
                }
            }
        }
        function y(n) {
            if (u === clearTimeout)
                return clearTimeout(n);
            if ((u === c || !u) && clearTimeout)
                return u = clearTimeout,
                clearTimeout(n);
            try {
                return u(n)
            } catch (t) {
                try {
                    return u.call(null, n)
                } catch (t) {
                    return u.call(this, n)
                }
            }
        }
        function p() {
            o && e && (o = !1,
            e.length ? f = e.concat(f) : s = -1,
            f.length && a())
        }
        function a() {
            var t, n;
            if (!o) {
                for (t = l(p),
                o = !0,
                n = f.length; n; ) {
                    for (e = f,
                    f = []; ++s < n; )
                        e && e[s].run();
                    s = -1;
                    n = f.length
                }
                e = null;
                o = !1;
                y(t)
            }
        }
        function v(n, t) {
            this.fun = n;
            this.array = t
        }
        function i() {}
        var r, u, t = n.exports = {};
        !function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : h
            } catch (n) {
                r = h
            }
            try {
                u = "function" == typeof clearTimeout ? clearTimeout : c
            } catch (n) {
                u = c
            }
        }();
        var e, f = [], o = !1, s = -1;
        t.nextTick = function(n) {
            var i = new Array(arguments.length - 1), t;
            if (arguments.length > 1)
                for (t = 1; t < arguments.length; t++)
                    i[t - 1] = arguments[t];
            f.push(new v(n,i));
            1 !== f.length || o || l(a)
        }
        ;
        v.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ;
        t.title = "browser";
        t.browser = !0;
        t.env = {};
        t.argv = [];
        t.version = "";
        t.versions = {};
        t.on = i;
        t.addListener = i;
        t.once = i;
        t.off = i;
        t.removeListener = i;
        t.removeAllListeners = i;
        t.emit = i;
        t.prependListener = i;
        t.prependOnceListener = i;
        t.listeners = function() {
            return []
        }
        ;
        t.binding = function() {
            throw new Error("process.binding is not supported");
        }
        ;
        t.cwd = function() {
            return "/"
        }
        ;
        t.chdir = function() {
            throw new Error("process.chdir is not supported");
        }
        ;
        t.umask = function() {
            return 0
        }
    }
    , function(n, t, i) {
        "use strict";
        i(22).polyfill()
    }
    , function(n) {
        "use strict";
        function t(n) {
            var u, i, t, r, e;
            if (void 0 === n || null === n)
                throw new TypeError("Cannot convert first argument to object");
            for (u = Object(n),
            i = 1; i < arguments.length; i++)
                if (t = arguments[i],
                void 0 !== t && null !== t)
                    for (var o = Object.keys(Object(t)), f = 0, s = o.length; f < s; f++)
                        r = o[f],
                        e = Object.getOwnPropertyDescriptor(t, r),
                        void 0 !== e && e.enumerable && (u[r] = t[r]);
            return u
        }
        function i() {
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: t
            })
        }
        n.exports = {
            assign: t,
            polyfill: i
        }
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(24)
          , u = i(6)
          , f = i(5)
          , e = i(36)
          , r = function() {
            for (var i, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            if ("undefined" != typeof window)
                return i = e.getOpts.apply(void 0, t),
                new Promise(function(n, t) {
                    f.default.promise = {
                        resolve: n,
                        reject: t
                    };
                    o.default(i);
                    setTimeout(function() {
                        u.openModal()
                    })
                }
                )
        };
        r.close = u.onAction;
        r.getState = u.getState;
        r.setActionValue = f.setActionValue;
        r.stopLoading = u.stopLoading;
        r.setDefaults = e.setDefaults;
        t.default = r
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(1)
          , f = i(0)
          , e = f.default.MODAL
          , r = i(4)
          , o = i(34)
          , s = i(35)
          , h = i(1);
        t.init = function(n) {
            u.getNode(e) || (document.body || h.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),
            o.default(),
            r.default());
            r.initModalContent(n);
            s.default(n)
        }
        ;
        t.default = t.init
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(0)
          , u = r.default.MODAL;
        t.modalMarkup = '\n  <div class="' + u + '" role="dialog" aria-modal="true"><\/div>';
        t.default = t.modalMarkup
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(0)
          , u = r.default.OVERLAY
          , f = '<div \n    class="' + u + '"\n    tabIndex="-1">\n  <\/div>';
        t.default = f
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(0)
          , r = u.default.ICON;
        t.errorIconMarkup = function() {
            var t = r + "--error"
              , n = t + "__line";
            return '\n    <div class="' + t + '__x-mark">\n      <span class="' + n + " " + n + '--left"><\/span>\n      <span class="' + n + " " + n + '--right"><\/span>\n    <\/div>\n  '
        }
        ;
        t.warningIconMarkup = function() {
            var n = r + "--warning";
            return '\n    <span class="' + n + '__body">\n      <span class="' + n + '__dot"><\/span>\n    <\/span>\n  '
        }
        ;
        t.successIconMarkup = function() {
            var n = r + "--success";
            return '\n    <span class="' + n + "__line " + n + '__line--long"><\/span>\n    <span class="' + n + "__line " + n + '__line--tip"><\/span>\n\n    <div class="' + n + '__ring"><\/div>\n    <div class="' + n + '__hide-corners"><\/div>\n  '
        }
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(0)
          , u = r.default.CONTENT;
        t.contentMarkup = '\n  <div class="' + u + '">\n\n  <\/div>\n'
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(0)
          , u = r.default.BUTTON_CONTAINER
          , f = r.default.BUTTON
          , e = r.default.BUTTON_LOADER;
        t.buttonMarkup = '\n  <div class="' + u + '">\n\n    <button\n      class="' + f + '"\n    ><\/button>\n\n    <div class="' + e + '">\n      <div><\/div>\n      <div><\/div>\n      <div><\/div>\n    <\/div>\n\n  <\/div>\n'
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = i(4)
          , r = i(2)
          , u = i(0)
          , e = u.default.ICON
          , o = u.default.ICON_CUSTOM
          , s = ["error", "warning", "success", "info"]
          , h = {
            error: r.errorIconMarkup(),
            warning: r.warningIconMarkup(),
            success: r.successIconMarkup()
        }
          , c = function(n, t) {
            var r = e + "--" + n, i;
            t.classList.add(r);
            i = h[n];
            i && (t.innerHTML = i)
        }
          , l = function(n, t) {
            t.classList.add(o);
            var i = document.createElement("img");
            i.src = n;
            t.appendChild(i)
        }
          , a = function(n) {
            if (n) {
                var t = f.injectElIntoModal(r.iconMarkup);
                s.includes(n) ? c(n, t) : l(n, t)
            }
        };
        t.default = a
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(2)
          , u = i(4)
          , f = function(n) {
            navigator.userAgent.includes("AppleWebKit") && (n.style.display = "none",
            n.offsetHeight,
            n.style.display = "")
        };
        t.initTitle = function(n) {
            if (n) {
                var t = u.injectElIntoModal(r.titleMarkup);
                t.textContent = n;
                f(t)
            }
        }
        ;
        t.initText = function(n) {
            var t, i;
            n && (t = document.createDocumentFragment(),
            n.split("\n").forEach(function(n, i, r) {
                t.appendChild(document.createTextNode(n));
                i < r.length - 1 && t.appendChild(document.createElement("br"))
            }),
            i = u.injectElIntoModal(r.textMarkup),
            i.appendChild(t),
            f(i))
        }
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(1)
          , s = i(4)
          , r = i(0)
          , u = r.default.BUTTON
          , h = r.default.DANGER_BUTTON
          , c = i(3)
          , f = i(2)
          , l = i(6)
          , e = i(5)
          , a = function(n, t, i) {
            var y = t.text, p = t.value, s = t.className, w = t.closeModal, v = o.stringToNode(f.buttonMarkup), r = v.querySelector("." + u), b = u + "--" + n, a;
            return (r.classList.add(b),
            s) && (Array.isArray(s) ? s : s.split(" ")).filter(function(n) {
                return n.length > 0
            }).forEach(function(n) {
                r.classList.add(n)
            }),
            i && n === c.CONFIRM_KEY && r.classList.add(h),
            r.textContent = y,
            a = {},
            a[n] = p,
            e.setActionValue(a),
            e.setActionOptionsFor(n, {
                closeModal: w
            }),
            r.addEventListener("click", function() {
                return l.onAction(n)
            }),
            v
        }
          , v = function(n, t) {
            var i = s.injectElIntoModal(f.footerMarkup), r, u, e;
            for (r in n)
                u = n[r],
                e = a(r, u, t),
                u.visible && i.appendChild(e);
            0 === i.children.length && i.remove()
        };
        t.default = v
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = i(3)
          , f = i(4)
          , e = i(2)
          , r = i(5)
          , o = i(6)
          , s = i(0)
          , h = s.default.CONTENT
          , c = function(n) {
            n.addEventListener("input", function(n) {
                var t = n.target
                  , i = t.value;
                r.setActionValue(i)
            });
            n.addEventListener("keyup", function(n) {
                if ("Enter" === n.key)
                    return o.onAction(u.CONFIRM_KEY)
            });
            setTimeout(function() {
                n.focus();
                r.setActionValue("")
            }, 0)
        }
          , l = function(n, t, i) {
            var r = document.createElement(t), e = h + "__" + t, u, f;
            r.classList.add(e);
            for (u in i)
                f = i[u],
                r[u] = f;
            "input" === t && c(r);
            n.appendChild(r)
        }
          , a = function(n) {
            if (n) {
                var i = f.injectElIntoModal(e.contentMarkup)
                  , t = n.element
                  , r = n.attributes;
                "string" == typeof t ? l(i, t, r) : i.appendChild(t)
            }
        };
        t.default = a
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(1)
          , u = i(2)
          , f = function() {
            var n = r.stringToNode(u.overlayMarkup);
            document.body.appendChild(n)
        };
        t.default = f
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(5)
          , f = i(6)
          , u = i(1)
          , e = i(3)
          , o = i(0)
          , h = o.default.MODAL
          , s = o.default.BUTTON
          , c = o.default.OVERLAY
          , p = function(n) {
            n.preventDefault();
            a()
        }
          , w = function(n) {
            n.preventDefault();
            v()
        }
          , l = function(n) {
            if (r.default.isOpen)
                switch (n.key) {
                case "Escape":
                    return f.onAction(e.CANCEL_KEY)
                }
        }
          , b = function(n) {
            if (r.default.isOpen)
                switch (n.key) {
                case "Tab":
                    return p(n)
                }
        }
          , k = function(n) {
            if (r.default.isOpen)
                return "Tab" === n.key && n.shiftKey ? w(n) : void 0
        }
          , a = function() {
            var n = u.getNode(s);
            n && (n.tabIndex = 0,
            n.focus())
        }
          , v = function() {
            var i = u.getNode(h)
              , n = i.querySelectorAll("." + s)
              , r = n.length - 1
              , t = n[r];
            t && t.focus()
        }
          , d = function(n) {
            n[n.length - 1].addEventListener("keydown", b)
        }
          , g = function(n) {
            n[0].addEventListener("keydown", k)
        }
          , nt = function() {
            var t = u.getNode(h)
              , n = t.querySelectorAll("." + s);
            n.length && (d(n),
            g(n))
        }
          , y = function(n) {
            if (u.getNode(c) === n.target)
                return f.onAction(e.CANCEL_KEY)
        }
          , tt = function(n) {
            var t = u.getNode(c);
            t.removeEventListener("click", y);
            n && t.addEventListener("click", y)
        }
          , it = function(n) {
            r.default.timer && clearTimeout(r.default.timer);
            n && (r.default.timer = window.setTimeout(function() {
                return f.onAction(e.CANCEL_KEY)
            }, n))
        }
          , rt = function(n) {
            n.closeOnEsc ? document.addEventListener("keyup", l) : document.removeEventListener("keyup", l);
            n.dangerMode ? a() : v();
            nt();
            tt(n.closeOnClickOutside);
            it(n.timer)
        };
        t.default = rt
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(1)
          , e = i(3)
          , l = i(37)
          , o = i(38)
          , u = {
            title: null,
            text: null,
            icon: null,
            buttons: e.defaultButtonList,
            content: null,
            className: null,
            closeOnClickOutside: !0,
            closeOnEsc: !0,
            dangerMode: !1,
            timer: null
        }
          , s = Object.assign({}, u);
        t.setDefaults = function(n) {
            s = Object.assign({}, u, n)
        }
        ;
        var a = function(n) {
            var t = n && n.button
              , i = n && n.buttons;
            return void 0 !== t && void 0 !== i && r.throwErr("Cannot set both 'button' and 'buttons' options!"),
            void 0 !== t ? {
                confirm: t
            } : i
        }
          , f = function(n) {
            return r.ordinalSuffixOf(n + 1)
        }
          , h = function(n, t) {
            r.throwErr(f(t) + " argument ('" + n + "') is invalid")
        }
          , c = function(n, t) {
            var u = n + 1
              , i = t[u];
            r.isPlainObject(i) || void 0 === i || r.throwErr("Expected " + f(u) + " argument ('" + i + "') to be a plain object")
        }
          , v = function(n, t) {
            var i = n + 1
              , u = t[i];
            void 0 !== u && r.throwErr("Unexpected " + f(i) + " argument (" + u + ")")
        }
          , y = function(n, t, i, u) {
            var f = typeof t
              , e = "string" === f
              , o = t instanceof Element;
            if (e) {
                if (0 === i)
                    return {
                        text: t
                    };
                if (1 === i)
                    return {
                        text: t,
                        title: u[0]
                    };
                if (2 === i)
                    return c(i, u),
                    {
                        icon: t
                    };
                h(t, i)
            } else {
                if (o && 0 === i)
                    return c(i, u),
                    {
                        content: t
                    };
                if (r.isPlainObject(t))
                    return v(i, u),
                    t;
                h(t, i)
            }
        };
        t.getOpts = function() {
            for (var n, f, r, i = [], t = 0; t < arguments.length; t++)
                i[t] = arguments[t];
            return n = {},
            i.forEach(function(t, r) {
                var u = y(0, t, r, i);
                Object.assign(n, u)
            }),
            f = a(n),
            n.buttons = e.getButtonListOpts(f),
            delete n.button,
            n.content = l.getContentOpts(n.content),
            r = Object.assign({}, u, s, n),
            Object.keys(r).forEach(function(n) {
                o.DEPRECATED_OPTS[n] && o.logDeprecation(n)
            }),
            r
        }
    }
    , function(n, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(1)
          , u = {
            element: "input",
            attributes: {
                placeholder: ""
            }
        };
        t.getContentOpts = function(n) {
            return r.isPlainObject(n) ? Object.assign({}, n) : n instanceof Element ? {
                element: n
            } : "input" === n ? u : null
        }
    }
    , function(n, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.logDeprecation = function(n) {
            var i = t.DEPRECATED_OPTS[n], s = i.onlyRename, f = i.replacement, e = i.subOption, o = i.link, h = s ? "renamed" : "deprecated", r = 'SweetAlert warning: "' + n + '" option has been ' + h + ".", u;
            f && (r += " Please use" + (e ? ' "' + e + '" in ' : " ") + '"' + f + '" instead.');
            u = "https://sweetalert.js.org";
            r += o ? " More details: " + u + o : " More details: " + u + "/guides/#upgrading-from-1x";
            console.warn(r)
        }
        ;
        t.DEPRECATED_OPTS = {
            type: {
                replacement: "icon",
                link: "/docs/#icon"
            },
            imageUrl: {
                replacement: "icon",
                link: "/docs/#icon"
            },
            customClass: {
                replacement: "className",
                onlyRename: !0,
                link: "/docs/#classname"
            },
            imageSize: {},
            showCancelButton: {
                replacement: "buttons",
                link: "/docs/#buttons"
            },
            showConfirmButton: {
                replacement: "button",
                link: "/docs/#button"
            },
            confirmButtonText: {
                replacement: "button",
                link: "/docs/#button"
            },
            confirmButtonColor: {},
            cancelButtonText: {
                replacement: "buttons",
                link: "/docs/#buttons"
            },
            closeOnConfirm: {
                replacement: "button",
                subOption: "closeModal",
                link: "/docs/#button"
            },
            closeOnCancel: {
                replacement: "buttons",
                subOption: "closeModal",
                link: "/docs/#buttons"
            },
            showLoaderOnConfirm: {
                replacement: "buttons"
            },
            animation: {},
            inputType: {
                replacement: "content",
                link: "/docs/#content"
            },
            inputValue: {
                replacement: "content",
                link: "/docs/#content"
            },
            inputPlaceholder: {
                replacement: "content",
                link: "/docs/#content"
            },
            html: {
                replacement: "content",
                link: "/docs/#content"
            },
            allowEscapeKey: {
                replacement: "closeOnEsc",
                onlyRename: !0,
                link: "/docs/#closeonesc"
            },
            allowClickOutside: {
                replacement: "closeOnClickOutside",
                onlyRename: !0,
                link: "/docs/#closeonclickoutside"
            }
        }
    }
    ])
}),
function(n) {
    n(window).load(function() {
        menuRight()
    });
    n(window).resize(function() {
        menuRight()
    });
    n(function() {
        mymap();
        myfunload();
        n(".btnMenu").click(function() {
            n(".menuHidden").hasClass("active") ? n(".menuHidden").removeClass("active slideInRight").addClass("slideOutRight") : n(".menuHidden").removeClass("slideOutRight").addClass("active slideInRight")
        });
        n(".maps .moreMaps ul li").click(function() {
            var t = n(this).attr("data-src");
            n(".maps .wrapMap iframe").attr("src", t)
        });
        delayWow();
        n(".BookSong .content .song").mCustomScrollbar({
            theme: "dark-thick"
        });
        n(".recruitment .tuyendung").mCustomScrollbar({
            theme: "dark-thick"
        })
    })
}(jQuery);
$(document).ready(function() {
    $(".interCate .item").naoTooltip();
    addClassPackageCate();
    removeShadow();
    setTimeout(function() {
        EqualSizer(".Notification .item .wrapItem, .HPTInfomation .item, .successCate .item .content,.recruitment .col-md-8 .col-sm-6 .wrapItem, .CapacityCate .item .content,.whywrap .item");
        EqualSizer_1(".benefit .itemw,.trucot .cate .item .wrapItem .head");
        EqualSizer_2(".benefited .item, .infoContactCate .wrapItem")
    }, 500);
    isotopeFake();
    contentinterCate();
    setTimeout(function() {
        isotopeReal()
    }, 700);
    randomClassName(".newsBanksSlide .item");
    addNonBreaking();
    activeMenu();
    activeTabCopor();
    $("img.lazy").lazyload({
        threshold: 200
    });
    activeWeAre();
    clickAnySelect();
    popup()
});
$(".image-popup .image-popup-wrapper .close-popup").click(function() {
    $(".image-popup").remove();
    setPopupStorage()
});
$(".image-popup .image-popup-wrapper > a").click(function() {
    setPopupStorage()
});
$(window).scroll(function() {
    $(this).scrollTop() > 100 ? $(".scroll-to-top").fadeIn() : $(".scroll-to-top").fadeOut()
});
$(window).scroll(function() {
    $(this).scrollTop() > 138 ? ($(".bot-head").addClass("bot-head-scroll"),
    $("#main-content").addClass("main-content-scroll")) : ($(".bot-head").removeClass("bot-head-scroll"),
    $("#main-content").removeClass("main-content-scroll"))
});
$(".linktarget").on("click", function(n) {
    n.preventDefault();
    var t = $(this).attr("ref-id");
    $("html,body").animate({
        scrollTop: $(t).offset().top
    }, 800)
});
$(".scroll-to-top").on("click", function(n) {
    return n.preventDefault(),
    $("html, body").animate({
        scrollTop: 0
    }, 800),
    !1
})
