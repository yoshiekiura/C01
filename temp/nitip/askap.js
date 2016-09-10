loc = location.href;
if (loc.indexOf('adsource') == -1)
    cURI = loc.split('/');
else
    cURI = loc.substr(0, loc.indexOf('adsource')).split('/');
new Image().src = "/next" + cURI[cURI.length - 1];
if (document.getElementById("banner_slide")) {
    (function(e) {
        function J(a, b) {
            e(a.currentImg.attr("data-text-id")).css("display", "block");
            var c = e(a.currentImg.attr("data-text-id")).children(),
                g = 0;
            currentText_arr = [];
            c.each(function() {
                currentText_arr[g] = e(this);
                var f = currentText_arr[g].attr("data-initial-left"),
                    c = currentText_arr[g].attr("data-initial-top");
                b.responsive && (f = parseInt(f / (b.origWidth / b.width), 10), c = parseInt(c / (b.origWidth / b.width), 10));
                currentText_arr[g].css({
                    left: f + "px",
                    top: c + "px",
                    opacity: parseInt(currentText_arr[g].attr("data-fade-start"), 10) / 100
                });
                var l = currentText_arr[g];
                setTimeout(function() {
                    b.responsive && (newCss = "", -1 != l.css("font-size").lastIndexOf("px") ? (fontSize = l.css("font-size").substr(0, l.css("font-size").lastIndexOf("px")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "px;") : -1 != l.css("font-size").lastIndexOf("em") && (fontSize = l.css("font-size").substr(0, l.css("font-size").lastIndexOf("em")), newCss += "font-size:" + fontSize / (b.origWidth / b.width) + "em;"), -1 != l.css("line-height").lastIndexOf("px") ? (lineHeight = l.css("line-height").substr(0, l.css("line-height").lastIndexOf("px")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "px;") : -1 != l.css("line-height").lastIndexOf("em") && (lineHeight = l.css("line-height").substr(0, l.css("line-height").lastIndexOf("em")), newCss += "line-height:" + lineHeight / (b.origWidth / b.width) + "em;"), l.wrapInner('<div class="newFS" style="' + newCss + '" />'));
                    var f = l.attr("data-final-left"),
                        c = l.attr("data-final-top");
                    b.responsive && (f = parseInt(f / (b.origWidth / b.width), 10), c = parseInt(c / (b.origWidth / b.width), 10));
                    var g = 1;
                    !0 == a.isVideoPlaying && (g = 0);
                    l.animate({
                        opacity: g,
                        left: f + "px",
                        top: c + "px"
                    }, 1E3 * l.attr("data-duration"), function() {
                        !0 == a.isVideoPlaying && e(a.currentImg.attr("data-text-id")).children().css("opacity", 0)
                    })
                }, 1E3 * currentText_arr[g].attr("data-delay"));
                g++
            })
        }

        function K(a, b) {
            nowx = (new Date).getTime();
            !a.mouseOverBanner && (!a.effectIsRunning && b.showCircleTimer) && (a.ctx.clearRect(0, 0, a.canvas.width, a.canvas.height), a.ctx.beginPath(), a.ctx.globalAlpha = b.behindCircleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth + 2, a.ctx.strokeStyle = b.behindCircleColor, a.ctx.stroke(), a.ctx.beginPath(), a.ctx.globalAlpha = b.circleAlpha / 100, a.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * ((a.timeElapsed + nowx - a.arcInitialTime) / 1E3) / b.autoPlay * Math.PI, !1), a.ctx.lineWidth = b.circleLineWidth, a.ctx.strokeStyle = b.circleColor, a.ctx.stroke())
        }

        function L(a, b, c) {
            var g = E();
            e(".stripe", a).remove();
            e(".block", a).remove();
            F = u = Math.round(b.width / b.numberOfStripes);
            for (var f = !0, h = 0; h < b.numberOfStripes; h++) h == b.numberOfStripes - 1 && (F = a.width() - u * (b.numberOfStripes - 1)), !b.responsive || -1 == g || -1 != g && 9 <= g ? -1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") ? f = !1 : a.append(e('<div class="stripe"></div>').css({
                opacity: "0",
                left: u * h + "px",
                width: F + "px",
                height: "0px",
                background: 'url("' + c.current_imgInside.attr("src") + '") ' + -1 * h * u + "px 0%"
            })) : f = !1, f || (mleft = -1 * u * h, a.append(e('<div class="stripe"><img src="' + c.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + 'px;"></div>').css({
                opacity: "0",
                left: u * h + "px",
                width: F + "px",
                height: "0px"
            })));
            b.responsive && f && (-1 == g || -1 != g && 9 <= g) && e(".stripe", a).css({
                "-webkit-background-size": b.width + "px " + b.height + "px",
                "-moz-background-size": b.width + "px " + b.height + "px",
                "-o-background-size": b.width + "px " + b.height + "px",
                "-ms-background-size": b.width + "px " + b.height + "px",
                "background-size": b.width + "px " + b.height + "px"
            })
        }

        function I(a, b, e, g, f) {
            var h = a.width(),
                l = a.height();
            a.css({
                width: "0",
                height: "0"
            });
            b == g.numberOfRows - 1 && e == g.numberOfColumns - 1 ? setTimeout(function() {
                a.animate({
                    opacity: "1.0",
                    width: h,
                    height: l
                }, 1E3 * g.effectDuration / 3, "", function() {
                    f.trigger("effectComplete")
                })
            }, m) : setTimeout(function() {
                a.animate({
                    opacity: "1.0",
                    width: h,
                    height: l
                }, 1E3 * g.effectDuration / 3)
            }, m);
            m += G
        }

        function B(a, b, c, g, f, h, l, D) {
            var r = !0;
            if (!b.loop && c.current_img_no + a >= g || !b.loop && 0 > c.current_img_no + a) r = !1;
            if (r) {
                e(".newFS", h).contents().unwrap();
                b.showCircleTimer && (c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height), c.ctx.beginPath(), c.ctx.globalAlpha = b.behindCircleAlpha / 100, c.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 2 * Math.PI, !1), c.ctx.lineWidth = b.circleLineWidth + 2, c.ctx.strokeStyle = b.behindCircleColor, c.ctx.stroke(), c.ctx.beginPath(), c.ctx.globalAlpha = b.circleAlpha / 100, c.ctx.arc(b.circleRadius + 2 * b.circleLineWidth, b.circleRadius + 2 * b.circleLineWidth, b.circleRadius, 0, 0, !1), c.ctx.lineWidth = b.circleLineWidth, c.ctx.strokeStyle = b.circleColor, c.ctx.stroke());
                e(c.currentImg.attr("data-text-id")).css("display", "none");
                e(l[c.current_img_no]).removeClass("bottomNavButtonON");
                b.randomizeImages && !c.bottomNavClicked ? (a = Math.floor(Math.random() * g), c.current_img_no = c.current_img_no === a ? Math.floor(Math.random() * g) : a) : c.current_img_no = c.current_img_no + a >= g ? 0 : 0 > c.current_img_no + a ? g - 1 : c.current_img_no + a;
                c.bottomNavClicked = !1;
                e(l[c.current_img_no]).addClass("bottomNavButtonON");
                c.currentImg = e(D[c.current_img_no]);
                c.current_imgInside = c.currentImg.find("img:first");
                c.currentImg.attr("data-transition") ? (f = c.currentImg.attr("data-transition"), "random" == f && (f = H[Math.floor(Math.random() * H.length)])) : f = "random" != b.defaultEffect ? b.defaultEffect : H[Math.floor(Math.random() * H.length)];
                c.effectIsRunning = !0;
                if ("fade" == f || "slideFromLeft" == f || "slideFromRight" == f || "slideFromTop" == f || "slideFromBottom" == f) L(h, b, c), g = e(".stripe:first", h), "fade" == f && (g.css({
                    top: "0px",
                    height: "100%",
                    width: h.width() + "px"
                }), g.animate({
                    opacity: "1.0"
                }, 2E3 * b.effectDuration, "", function() {
                    h.trigger("effectComplete")
                })), "slideFromLeft" == f && (g.css({
                    top: "0px",
                    height: "100%",
                    width: "0"
                }), g.animate({
                    opacity: "1.0",
                    width: h.width() + "px"
                }, 1E3 * b.effectDuration, "", function() {
                    h.trigger("effectComplete")
                })), "slideFromRight" == f && (g.css({
                    top: "0px",
                    height: "100%",
                    width: "0",
                    left: h.width() + 5 + "px"
                }), g.animate({
                    opacity: "1.0",
                    left: "0",
                    width: h.width() + "px"
                }, 1E3 * b.effectDuration, "", function() {
                    h.trigger("effectComplete")
                })), "slideFromTop" == f && (g.css({
                    top: "0px",
                    height: "0",
                    width: h.width() + "px"
                }), g.animate({
                    opacity: "1.0",
                    height: h.height() + "px"
                }, 1E3 * b.effectDuration, "", function() {
                    h.trigger("effectComplete")
                })), "slideFromBottom" == f && (g.css({
                    top: "0px",
                    height: "0",
                    width: h.width() + "px",
                    top: h.height() + "px"
                }), g.animate({
                    opacity: "1.0",
                    top: 0,
                    height: h.height() + "px"
                }, 1E3 * b.effectDuration, "", function() {
                    h.trigger("effectComplete")
                }));
                0 <= f.indexOf("Stripes") && (L(h, b, c), g = 0 <= f.indexOf("Reverse") ? e(".stripe", h).myReverse() : e(".stripe", h), m = 100, i = 0, g.each(function() {
                    var a = e(this);
                    ("topBottomDroppingStripes" == f || "topBottomDroppingReverseStripes" == f) && a.css({
                        top: "0px"
                    });
                    ("bottomTopDroppingStripes" == f || "bottomTopDroppingReverseStripes" == f) && a.css({
                        bottom: "0px"
                    });
                    ("leftRightFadingStripes" == f || "leftRightFadingReverseStripes" == f) && a.css({
                        top: "0px",
                        height: "100%",
                        width: "0"
                    });
                    "asynchronousDroppingStripes" == f && (i % 2 ? a.css({
                        top: "0px"
                    }) : a.css({
                        bottom: "0px"
                    }));
                    if ("leftRightFadingStripes" == f || "leftRightFadingReverseStripes" == f) {
                        var d = u;
                        if ("leftRightFadingStripes" == f && i == b.numberOfStripes - 1 || "leftRightFadingReverseStripes" == f && 0 == i) d = F;
                        i == b.numberOfStripes - 1 ? setTimeout(function() {
                            a.animate({
                                width: d + "px",
                                opacity: "1.0"
                            }, 800 * b.effectDuration, "", function() {
                                h.trigger("effectComplete")
                            })
                        }, m) : setTimeout(function() {
                            a.animate({
                                width: d + "px",
                                opacity: "1.0"
                            }, 800 * b.effectDuration)
                        }, m)
                    } else i == b.numberOfStripes - 1 ? setTimeout(function() {
                        a.animate({
                            height: "100%",
                            opacity: "1.0"
                        }, 1E3 * b.effectDuration, "", function() {
                            h.trigger("effectComplete")
                        })
                    }, m) : setTimeout(function() {
                        a.animate({
                            height: "100%",
                            opacity: "1.0"
                        }, 1E3 * b.effectDuration)
                    }, m);
                    m += M;
                    i++
                }));
                if (0 <= f.indexOf("Blocks")) {
                    g = E();
                    e(".stripe", h).remove();
                    e(".block", h).remove();
                    l = Math.round(b.width / b.numberOfColumns);
                    D = Math.round(b.height / b.numberOfRows);
                    a = l;
                    for (var r = D, k = 0, v = 0, x = !0, z = 0; z < b.numberOfRows; z++)
                        for (var y = 0; y < b.numberOfColumns; y++) k = l * y, v = D * z, a = y == b.numberOfColumns - 1 ? b.width - l * (b.numberOfColumns - 1) : l, r = z == b.numberOfRows - 1 ? b.height - D * (b.numberOfRows - 1) : D, !b.responsive || -1 == g || -1 != g && 9 <= g ? -1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") ? x = !1 : h.append(e('<div class="block"></div>').css({
                            opacity: "0",
                            left: k + "px",
                            top: v + "px",
                            width: a + "px",
                            height: r + "px",
                            background: 'url("' + c.current_imgInside.attr("src") + '") -' + k + "px -" + v + "px"
                        })) : x = !1, x || (mleft = -1 * k, mtop = -1 * v, h.append(e('<div class="block"><img src="' + c.current_imgInside.attr("src") + '" width="' + b.width + '" height="' + b.height + '" style="margin-left:' + mleft + "px; margin-top:" + mtop + 'px;"></div>').css({
                            opacity: "0",
                            left: k + "px",
                            top: v + "px",
                            width: a + "px",
                            height: r + "px"
                        })));
                    b.responsive && x && (-1 == g || -1 != g && 9 <= g) && e(".block", h).css({
                        "-webkit-background-size": b.width + "px " + b.height + "px",
                        "-moz-background-size": b.width + "px " + b.height + "px",
                        "-o-background-size": b.width + "px " + b.height + "px",
                        "-ms-background-size": b.width + "px " + b.height + "px",
                        "background-size": b.width + "px " + b.height + "px"
                    });
                    if (0 <= f.indexOf("Reverse")) var p = e(".block", h).myReverse();
                    else if ("randomBlocks" == f) {
                        c = e(".block", h);
                        var d;
                        for (g = c.length; g; p = parseInt(Math.random() * g, 10), d = c[--g], c[g] = c[p], c[p] = d);
                        p = c
                    } else p = e(".block", h);
                    m = 100;
                    if ("randomBlocks" == f) {
                        i = 0;
                        var s = b.numberOfRows * b.numberOfColumns;
                        p.each(function() {
                            var a = e(this),
                                d = a.width(),
                                f = a.height();
                            a.css({
                                width: "0",
                                height: "0"
                            });
                            i == s - 1 ? setTimeout(function() {
                                a.animate({
                                    opacity: "1.0",
                                    width: d,
                                    height: f
                                }, 1E3 * b.effectDuration / 3, "", function() {
                                    h.trigger("effectComplete")
                                })
                            }, m) : setTimeout(function() {
                                a.animate({
                                    opacity: "1.0",
                                    width: d,
                                    height: f
                                }, 1E3 * b.effectDuration / 3)
                            }, m);
                            m += G;
                            i++
                        })
                    } else {
                        var n = 0,
                            q = 0,
                            A = [];
                        A[n] = [];
                        p.each(function() {
                            A[n][q] = e(this);
                            q++;
                            q == b.numberOfColumns && (n++, q = 0, A[n] = [])
                        });
                        q = n = 0;
                        m = 100;
                        p = e(A[n][q]);
                        for (I(p, 0, 0, b, h); n < b.numberOfRows - 1 || q < b.numberOfColumns - 1;) {
                            n < b.numberOfRows - 1 && n++;
                            q < b.numberOfColumns - 1 && q++;
                            i = n;
                            q < n && b.numberOfRows > b.numberOfColumns && (i = n - q);
                            j = 0;
                            for (n < q && b.numberOfRows < b.numberOfColumns && (j = q - n); 0 <= i && j <= q;) p = e(A[i--][j++]), I(p, i, j, b, h)
                        }
                        m = b.numberOfRows < b.numberOfColumns ? m - (b.numberOfRows - 1) * G : m - (b.numberOfColumns - 1) * G;
                        limit_i = 0;
                        for (limit_j = q - n; limit_i < n && limit_j < q;) {
                            i = n + 1;
                            for (j = limit_j; i > limit_i && j < q;) i -= 1, j += 1, p = e(A[i][j]), I(p, i, j, b, h);
                            limit_i++;
                            limit_j++
                        }
                    }
                }
            }
        }

        function E() {
            var a = -1;
            "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
            return parseInt(a, 10)
        }
        var H = "fade slideFromLeft slideFromRight slideFromTop slideFromBottom topBottomDroppingStripes topBottomDroppingReverseStripes bottomTopDroppingStripes bottomTopDroppingReverseStripes asynchronousDroppingStripes leftRightFadingStripes leftRightFadingReverseStripes topBottomDiagonalBlocks topBottomDiagonalReverseBlocks randomBlocks".split(" "),
            u, F, m = 100,
            M = 50,
            G = 25,
            C = !1,
            t = navigator.userAgent.toLowerCase();
        e.fn.jadiSlide = function(a) {
            a = e.extend({}, e.fn.jadiSlide.defaults, a);
            return this.each(function() {
                var b = e(this);
                responsiveWidth = b.parent().width();
                responsiveHeight = b.parent().height();
                a.responsiveRelativeToBrowser && (responsiveWidth = e(window).width(), responsiveHeight = e(window).height());
                a.origWidth = a.width;
                a.width100Proc && (a.width = responsiveWidth);
                a.origHeight = a.height;
                a.height100Proc && (a.height = responsiveHeight);
                if (a.responsive && (a.origWidth != responsiveWidth || a.width100Proc)) a.width = a.origWidth > responsiveWidth || a.width100Proc ? responsiveWidth : a.origWidth, a.height100Proc || (a.height = a.width / (a.origWidth / a.origHeight));
                a.width = parseInt(a.width, 10);
                a.height = parseInt(a.height, 10);
                a.enableTouchScreen && a.responsive && (a.width -= 1);
                b.css("display", "block");
                var c = e("<div></div>").addClass("jadiSlide").addClass(a.skin),
                    g = e('<div class="bannerControls"> <div class="leftNav"></div> <div class="rightNav"></div> </div> <canvas class="mycanvas"></canvas>');
                b.wrap(c);
                b.after(g);
                var f = b.parent(".jadiSlide"),
                    h = e(".bannerControls", f),
                    c = e('<div class="bottomNavLeft"></div>'),
                    g = e('<div class="bottomNav"></div>'),
                    l = e('<div class="bottomNavRight"></div>');
                b.after(c);
                b.after(g);
                b.after(l);
                a.showAllControllers || h.css("display", "none");
                var m = e(".leftNav", f),
                    r = e(".rightNav", f);
                m.css("opacity", "0");
                r.css("opacity", "0");
                a.showNavArrows && a.showOnInitNavArrows && (m.css("display", "block"), r.css("display", "block"));
                var k = e(".bottomNav", f),
                    v = e(".bottomNavLeft", f),
                    x = e(".bottomNavRight", f),
                    z;
                k.css("display", "block");
                v.css("display", "none");
                x.css("display", "block");
                k.css("top", a.height + "px");
                k.css({
                    bottom: a.thumbsWrapperMarginBottom + "px",
                    top: "auto"
                });
                v.css({
                    bottom: a.thumbsWrapperMarginBottom + "px",
                    top: "auto"
                });
                x.css({
                    bottom: a.thumbsWrapperMarginBottom + "px",
                    top: "auto"
                });
                a.showBottomNav || (k.css("display", "none"), v.css("display", "none"), x.css("display", "none"));
                a.showOnInitBottomNav || (k.css("left", "-5000px"), v.css("left", "-5000px"), x.css("left", "-5000px"));
                var c = E(),
                    y = a.defaultEffect,
                    p = 0,
                    d = {
                        current_img_no: 0,
                        currentImg: 0,
                        current_imgInside: "",
                        bottomNavClicked: !1,
                        effectIsRunning: !1,
                        mouseOverBanner: !1,
                        rightVal: 0,
                        isAttractiveResp: !1,
                        timeoutID: "",
                        intervalID: "",
                        arcInitialTime: (new Date).getTime(),
                        timeElapsed: 0,
                        windowWidth: 0,
                        canvas: "",
                        ctx: "",
                        bannerRatio: a.origWidth / a.origHeight
                    };
                d.canvas = e(".mycanvas", f)[0];
                d.canvas.width = 2 * a.circleRadius + 4 * a.circleLineWidth;
                d.canvas.height = 2 * a.circleRadius + 4 * a.circleLineWidth; - 1 != c && 9 > c && (a.showCircleTimer = !1);
                a.showCircleTimer && (d.ctx = d.canvas.getContext("2d"));
                f.width(a.width);
                f.height(a.height);
                h.css("margin-top", parseInt((a.height - m.height()) / 2, 10) + "px");
                var s = b.find("ul:first").children(),
                    n, q = 0,
                    A = 0;
                s.each(function() {
                    d.currentImg = e(this);
                    d.currentImg.is("li") || (d.currentImg = d.currentImg.find("li:first"));
                    d.currentImg.is("li") && (d.currentImg.css("display", "none"), p++, n = e('<div class="bottomNavButtonOFF" rel="' + (p - 1) + '"></div>'), k.append(n), q += parseInt(n.css("padding-left").substring(0, n.css("padding-left").length - 2), 10) + n.width(), A = parseInt((k.height() - parseInt(n.css("height").substring(0, n.css("height").length - 2))) / 2, 10), n.css("margin-top", A + "px"))
                });
                k.width(q);
                a.showOnInitBottomNav && (k.css("left", parseInt((f.width() - q) / 2, 10) + "px"), v.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) - v.width() + "px"), x.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) + k.width() + parseInt(n.css("padding-left").substring(0, n.css("padding-left").length - 2), 10) + "px"));
                d.current_img_no = a.firstImg;
                a.firstImg > p && (d.current_img_no = p);
                0 > a.firstImg && (d.current_img_no = 0);
                a.randomizeImages && (d.current_img_no = Math.floor(Math.random() * p));
                d.currentImg = e(s[d.current_img_no]);
                d.current_imgInside = d.currentImg.find("img:first"); - 1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") || -1 != c && 7 >= c ? f.append('<img id="curBgImgIos" src="' + d.current_imgInside.attr("src") + '" width="' + a.width + '" height="' + a.height + '">') : (f.css("background", 'url("' + d.current_imgInside.attr("src") + '") no-repeat'), a.responsive && (-1 == c || -1 != c && 9 <= c ? f.css({
                    "-webkit-background-size": a.width + "px " + a.height + "px",
                    "-moz-background-size": a.width + "px " + a.height + "px",
                    "-o-background-size": a.width + "px " + a.height + "px",
                    "-ms-background-size": a.width + "px " + a.height + "px",
                    "background-size": a.width + "px " + a.height + "px"
                }) : 8 == c && f.css({
                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d.current_imgInside.attr("src") + "',sizingMethod='scale')"
                })));
                a.enableTouchScreen && (c = Math.floor(1E5 * Math.random()), f.wrap('<div id="bannerRotatorParent_' + c + '" style="position:relative;" />'), e("#bannerRotatorParent_" + c).width(a.width + 1), e("#bannerRotatorParent_" + c).height(a.height), a.rightVal = parseInt(r.css("right").substring(0, r.css("right").length - 2), 10), "attractive" == a.skin && a.width100Proc && r.css("right", a.rightVal - 1 + "px"), f.mousedown(function() {
                    0 > a.rightVal && !C && (r.css({
                        visibility: "hidden",
                        right: "0"
                    }), ("attractive" == a.skin && a.width100Proc || "attractive" == a.skin && a.isAttractiveResp) && r.css("right", a.rightVal - 1 + "px"), m.css("visibility", "hidden"))
                }), f.mouseup(function() {
                    C = !1;
                    0 > a.rightVal && (r.css({
                        right: a.rightVal + "px",
                        visibility: "visible"
                    }), ("attractive" == a.skin && a.width100Proc || "attractive" == a.skin && a.isAttractiveResp) && r.css("right", a.rightVal - 1 + "px"), m.css("visibility", "visible"))
                }));
                J(d, a, b, h);
                f.bind("effectComplete", function() {
                    var c = E();
                    d.effectIsRunning = !1; - 1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") || -1 != c && 7 >= c ? (e("#curBgImgIos", f).attr("src", d.current_imgInside.attr("src")), e("#curBgImgIos", f).width(a.width), e("#curBgImgIos", f).height(a.height)) : (f.css("background", 'url("' + d.current_imgInside.attr("src") + '") no-repeat'), a.responsive && (-1 == c || -1 != c && 9 <= c ? f.css({
                        "-webkit-background-size": a.width + "px " + a.height + "px",
                        "-moz-background-size": a.width + "px " + a.height + "px",
                        "-o-background-size": a.width + "px " + a.height + "px",
                        "-ms-background-size": a.width + "px " + a.height + "px",
                        "background-size": a.width + "px " + a.height + "px"
                    }) : 8 == c && f.css({
                        filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d.current_imgInside.attr("src") + "',sizingMethod='scale')"
                    })));
                    d.arcInitialTime = (new Date).getTime();
                    d.timeElapsed = 0;
                    a.showCircleTimer && (clearInterval(d.intervalID), d.ctx.clearRect(0, 0, d.canvas.width, d.canvas.height), d.ctx.beginPath(), d.ctx.globalAlpha = a.behindCircleAlpha / 100, d.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 2 * Math.PI, !1), d.ctx.lineWidth = a.circleLineWidth + 2, d.ctx.strokeStyle = a.behindCircleColor, d.ctx.stroke(), d.ctx.beginPath(), d.ctx.globalAlpha = a.circleAlpha / 100, d.ctx.arc(a.circleRadius + 2 * a.circleLineWidth, a.circleRadius + 2 * a.circleLineWidth, a.circleRadius, 0, 0, !1), d.ctx.lineWidth = a.circleLineWidth, d.ctx.strokeStyle = a.circleColor, d.ctx.stroke(), d.intervalID = setInterval(function() {
                        K(d, a)
                    }, 125));
                    J(d, a, b, h);
                    0 < a.autoPlay && (1 < p && !d.mouseOverBanner) && (clearTimeout(d.timeoutID), d.timeoutID = setTimeout(function() {
                        B(1, a, d, p, y, f, w, s)
                    }, 1E3 * a.autoPlay))
                });
                f.mouseenter(function() {
                    d.mouseOverBanner = !0;
                    clearTimeout(d.timeoutID);
                    nowx = (new Date).getTime();
                    d.timeElapsed += nowx - d.arcInitialTime;
                    a.autoHideNavArrows && a.showNavArrows && (m.animate({
                        "opacity": "0.7"
                    }, 500), r.animate({
                        "opacity": "0.7"
                    }, 500));
                    a.autoHideBottomNav && a.showBottomNav && (k.css({
                        display: "block",
                        left: parseInt((f.width() - q) / 2, 10) + "px"
                    }), v.css({
                        display: "block",
                        left: parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) - v.width() + "px"
                    }), x.css({
                        display: "block",
                        left: parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) + k.width() + parseInt(n.css("padding-left").substring(0, n.css("padding-left").length - 2), 10) + "px"
                    }))
                });
                f.mouseleave(function() {
                    d.mouseOverBanner = !1;
                    nowx = (new Date).getTime();
                    a.autoHideNavArrows && a.showNavArrows && (m.animate({
                        "opacity": "0"
                    }, 500), r.animate({
                        "opacity": "0"
                    }, 500));
                    a.autoHideBottomNav && a.showBottomNav && (k.css("display", "none"), v.css("display", "none"), x.css("display", "none"));
                    if (0 < a.autoPlay && 1 < p) {
                        clearTimeout(d.timeoutID);
                        d.arcInitialTime = (new Date).getTime();
                        var b = parseInt(1E3 * a.autoPlay - (d.timeElapsed + nowx - d.arcInitialTime), 10);
                        d.timeoutID = setTimeout(function() {
                            B(1, a, d, p, y, f, w, s)
                        }, b)
                    }
                });
                f.click(function() {
                    if (void 0 != e(s[d.current_img_no]).attr("data-link") && !d.effectIsRunning && "" != e(s[d.current_img_no]).attr("data-link")) {
                        var b = a.target;
                        void 0 != e(s[d.current_img_no]).attr("data-target") && "" != e(s[d.current_img_no]).attr("data-target") && (b = e(s[d.current_img_no]).attr("data-target"));
                        "_blank" == b ? window.open(e(s[d.current_img_no]).attr("data-link")) : window.location = e(s[d.current_img_no]).attr("data-link")
                    }
                });
                m.mousedown(function() {
                    C = !0;
                    d.effectIsRunning || (clearTimeout(d.timeoutID), B(-1, a, d, p, y, f, w, s))
                });
                m.mouseup(function() {
                    C = !1
                });
                r.mousedown(function() {
                    C = !0;
                    d.effectIsRunning || (clearTimeout(d.timeoutID), B(1, a, d, p, y, f, w, s))
                });
                r.mouseup(function() {
                    C = !1
                });
                var u = !1;
                e(window).resize(function() {
                    var c = E();
                    doResizeNow = !0; - 1 != navigator.userAgent.indexOf("Android") && (0 == a.windowOrientationScreenSize0 && 0 == window.orientation && (a.windowOrientationScreenSize0 = e(window).width()), 0 == a.windowOrientationScreenSize90 && 90 == window.orientation && (a.windowOrientationScreenSize90 = e(window).height()), 0 == a.windowOrientationScreenSize_90 && -90 == window.orientation && (a.windowOrientationScreenSize_90 = e(window).height()), a.windowOrientationScreenSize0 && (0 == window.orientation && e(window).width() > a.windowOrientationScreenSize0) && (doResizeNow = !1), a.windowOrientationScreenSize90 && (90 == window.orientation && e(window).height() > a.windowOrientationScreenSize90) && (doResizeNow = !1), a.windowOrientationScreenSize_90 && (-90 == window.orientation && e(window).height() > a.windowOrientationScreenSize_90) && (doResizeNow = !1), 0 == d.windowWidth && (doResizeNow = !1, d.windowWidth = e(window).width())); - 1 != c && (9 == c && 0 == d.windowWidth) && (doResizeNow = !1);
                    d.windowWidth == e(window).width() ? (doResizeNow = !1, a.windowCurOrientation != window.orientation && -1 != navigator.userAgent.indexOf("Android") && (a.windowCurOrientation = window.orientation, doResizeNow = !0)) : d.windowWidth = e(window).width();
                    a.responsive && doResizeNow && (!1 !== u && clearTimeout(u), u = setTimeout(function() {
                        var c = a,
                            g = p,
                            l = w,
                            q = n,
                            u = E(),
                            z = e("body").css("overflow");
                        e("body").css("overflow", "hidden");
                        c.enableTouchScreen ? (responsiveWidth = b.parent().parent().parent().width(), responsiveHeight = b.parent().parent().parent().height()) : (responsiveWidth = b.parent().parent().width(), responsiveHeight = b.parent().parent().height());
                        c.responsiveRelativeToBrowser && (responsiveWidth = e(window).width(), responsiveHeight = e(window).height());
                        c.width100Proc && (c.width = responsiveWidth);
                        c.height100Proc && (c.height = responsiveHeight);
                        "attractive" == c.skin && (c.isAttractiveResp = !1, r.css("right", c.rightVal + "px"));
                        if (c.origWidth != responsiveWidth || c.width100Proc) {
                            c.origWidth > responsiveWidth || c.width100Proc ? (c.width = responsiveWidth, c.isAttractiveResp = !0, "attractive" == c.skin && r.css("right", c.rightVal - 1 + "px")) : c.width100Proc || (c.width = c.origWidth);
                            c.height100Proc || (c.height = c.width / d.bannerRatio);
                            c.width = parseInt(c.width, 10);
                            c.height = parseInt(c.height, 10);
                            c.enableTouchScreen && c.responsive && (c.width -= 1);
                            f.width(c.width);
                            f.height(c.height); - 1 != t.indexOf("ipad") || -1 != t.indexOf("iphone") || -1 != t.indexOf("ipod") || -1 != t.indexOf("webos") || -1 != u && 7 >= u ? (e("#curBgImgIos", f).attr("src", d.current_imgInside.attr("src")), e("#curBgImgIos", f).width(c.width), e("#curBgImgIos", f).height(c.height)) : -1 == u || -1 != u && 9 <= u ? f.css({
                                "-webkit-background-size": c.width + "px " + c.height + "px",
                                "-moz-background-size": c.width + "px " + c.height + "px",
                                "-o-background-size": c.width + "px " + c.height + "px",
                                "-ms-background-size": c.width + "px " + c.height + "px",
                                "background-size": c.width + "px " + c.height + "px"
                            }) : 8 == u && f.css({
                                filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + d.current_imgInside.attr("src") + "',sizingMethod='scale')"
                            });
                            c.enableTouchScreen && (f.parent().width(c.width + 1), f.parent().height(c.height));
                            h.css("margin-top", parseInt((c.height - m.height()) / 2, 10) + "px");
                            for (i = 0; i < g; i++) e(e(s[i]).attr("data-text-id")).css("width", b.width() + "px");
                            k.css("left", parseInt((f.width() - k.width()) / 2, 10) + "px");
                            v.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) - v.width() + "px");
                            x.css("left", parseInt(k.css("left").substring(0, k.css("left").length - 2), 10) + k.width() + parseInt(q.css("padding-left").substring(0, q.css("padding-left").length - 2), 10) + "px");
                            clearTimeout(d.timeoutID);
                            B(1, c, d, g, y, f, l, s)
                        }
                        e("body").css("overflow", z)
                    }, 300))
                });
                var w = e(".bottomNavButtonOFF", f);
                w.mousedown(function() {
                    C = !0;
                    if (!d.effectIsRunning) {
                        var b = e(this).attr("rel");
                        e(w[d.current_img_no]).removeClass("bottomNavButtonON");
                        d.bottomNavClicked = !0;
                        d.current_img_no = b - 1;
                        B(1, a, d, p, y, f, w, s)
                    }
                });
                w.mouseup(function() {
                    C = !1
                });
                w.mouseenter(function() {
                    var b = e(this),
                        c = b.attr("rel");
                    a.showPreviewThumbs && (z = e('<div class="bottomOverThumb"></div>'), b.append(z), c = e(s[c]).attr("data-bottom-thumb"), z.html('<img src="' + c + '">'));
                    b.addClass("bottomNavButtonON")
                });
                w.mouseleave(function() {
                    var b = e(this),
                        c = b.attr("rel");
                    a.showPreviewThumbs && z.remove();
                    d.current_img_no != c && b.removeClass("bottomNavButtonON")
                });
                e(w[d.current_img_no]).addClass("bottomNavButtonON");
                0 < a.autoPlay && 1 < p && (a.showCircleTimer && (d.intervalID = setInterval(function() {
                    K(d, a)
                }, 1000)), d.timeoutID = setTimeout(function() {
                    B(1, a, d, p, y, f, w, s)
                }, 1E3 * a.autoPlay))
            })
        };
        e.fn.myReverse = [].reverse;
        e.fn.jadiSlide.defaults = {
            skin: "classic",
            width: 960,
            height: 384,
            width100Proc: !1,
            height100Proc: !1,
            randomizeImages: !1,
            firstImg: 0,
            numberOfStripes: 20,
            numberOfRows: 5,
            numberOfColumns: 10,
            defaultEffect: "random",
            effectDuration: 0,
            autoPlay: 4,
            loop: !0,
            target: "_blank",
            showAllControllers: !0,
            showNavArrows: !0,
            showOnInitNavArrows: !0,
            autoHideNavArrows: !0,
            showBottomNav: !0,
            showOnInitBottomNav: !0,
            autoHideBottomNav: !0,
            showPreviewThumbs: !0,
            enableTouchScreen: !0,
            absUrl: "",
            showCircleTimer: !0,
            showCircleTimerIE8IE7: !1,
            circleRadius: 10,
            circleLineWidth: 4,
            circleColor: "#FF0000",
            circleAlpha: 100,
            behindCircleColor: "#000000",
            behindCircleAlpha: 50,
            responsive: !1,
            responsiveRelativeToBrowser: !0,
            origWidth: 0,
            origHeight: 0,
            thumbsWrapperMarginBottom: 0,
            windowOrientationScreenSize0: 0,
            windowOrientationScreenSize90: 0,
            windowOrientationScreenSize_90: 0,
            windowCurOrientation: 0
        }
    })(jQuery);
}
jQuery(document).ready(function($) {
    if (location.href.indexOf('?development') != -1) {
        $('link[rel=stylesheet]').each(function() {
            if ($(this).attr('href').indexOf('/custom/custom.css') != -1) {
                $(this).remove();
                return false;
            }
        })
    }
    if ($("#nextp").length && !$("#prevp").length) {
        $("#nextp").parent().css({
            "position": "relative",
            "margin": "0",
            "left": "470px"
        })
    }
    /*$("#megaMen > li").click(function(){
		location=$(this).children("a").attr("href");
	})*/
    if (typeof($f) != 'undefined') {
        var player = $f("webinar", "/flash/flowplayer-3.2.15.swf", {
            clip: {
                url: 'askaptv',
                provider: 'rtmp',
                autoPlay: true
            },
            plugins: {
                rtmp: {
                    url: '/flash/flowplayer.rtmp-3.2.11.swf',
                    netConnectionUrl: 'rtmp://video4.onlivestreaming.net/askaptv',
                    subscribe: true
                }
            }
        });
        $("button[rel]").overlay({
            effect: 'apple',
            onLoad: function() {
                player.load();
            },
            onClose: function() {
                player.unload();
            }
        });
    }
    (a = (b = document).createElement('script')).src = '//account.askapsocial.com/cross-domain.php?' + $.now(), b.getElementById("javascript").appendChild(a);
    $(".logo-nav").click(function() {
        location.href = '//www.askapsocial.com/';
    });
    $(".reg-button").click(function() {
        window.open('https://account.askapsocial.com/', '_blank');
    });
    $(".reg-button").css('cursor', 'pointer');
    $('#login-trigger').click(function() {
        $(this).next('#login-content').slideToggle(50);
        $("input[name=username]").focus();
    });
    $("#login-close").click(function() {
        $('#login-trigger').click();
    });
    $('#search input[name=s]').focus(function() {
        if ($(this).val() == "Search") {
            $(this).val("");
        }
        $(this).animate({
            "width": "241"
        }, 500);
    });
    $('#searchText').focus(function() {
        if ($(this).val() == "search") {
            $(this).val("");
        }
    });
    $('#searchNewsText').focus(function() {
        if ($(this).val() == "Search Askap Social News") {
            $(this).val("");
        }
    });
    $('#search input[name=s]').blur(function() {
        if ($(this).val() == "") {
            $(this).val("Search");
        }
        $(this).animate({
            "width": "118"
        }, 500);
    });
    $("#search").submit(function() {
        $('input[name=s]').val($('input[name=s]').val().split(" ").join("+"))
    })
    $('#searchText').blur(function() {
        if ($(this).val() == "") {
            $(this).val("search");
        }
    });
    $('#searchNewsText').blur(function() {
        if ($(this).val() == "") {
            $(this).val("Search Askap Social News");
        }
    });
    $('#login-content input[name=username]').focus(function() {
        if ($(this).val() == "Username") {
            $(this).val("");
        }
    });
    $('#login-content input[name=username]').blur(function() {
        if ($(this).val() == "") {
            $(this).val("Username");
        }
    });
    $('#login-content input[name=password]').focus(function() {
        if ($(this).val() == "Password") {
            $(this).val("");
            marker = $('<span />').insertBefore('#login-content input[name=password]');
            $('#login-content input[name=password]').detach().attr('type', 'password').insertAfter(marker);
            marker.remove();
            $(this).focus();
        }
    });
    $('#login-content input[name=password]').blur(function() {
        if ($(this).val() == "Password") {
            marker = $('<span />').insertBefore('#login-content input[name=password]');
            $('#login-content input[name=password]').detach().attr('type', 'text').insertAfter(marker);
            $(this).val("Password");
            marker.remove();
        }

    });
    if ($("#daftar-event1").length > 0) {
        $("#daftar-event1").click(function() {
            window.open('https://account.askapsocial.com/?action=joinmt');
        });
        $("#daftar-event2").click(function() {
            window.open('https://account.askapsocial.com/?action=joinmt');
        })
    }
    $("#commentform p:nth(0)").css("float", "left");
    $("#commentform input.form_submit").attr("value", "SEND");
    if ($('#banner_slide').length > 0) {
        $('#banner_slide').jadiSlide({
            skin: 'universal',
            width: 900,
            height: 200,
            thumbsWrapperMarginBottom: 5,
            defaultEffect: 'fade'
        });
        $(".bannerControls div").css("opacity", "0");
        $(".bottomNav").remove();
    }
    if ($("#cap-perform").length > 0 || 1) {
        var clientUrl = '//widget.forexwebservices.com',
            webUrl = '//trade.askapsocial.com',
            socServerUrl = '//social-askap.forexwebservices.com',
            ServerUrl = 'https://uk1-websrv1-askap.FOREXWEBSERVICES.COM';
        var js = document.createElement('script');
        js.type = 'text/javascript';
        js.async = true;
        js.src = clientUrl + '/PageScripts/GetJavaScript/?files=Framework.jQuery.Tpl.js;Social.Feed.Widget.js;TopPerformers.Widget.js;FeaturedUser.Widget.js;RatesEngine.js;MarketRates.Grid.Widget.js;MarketRates.Ticker.Widget.js;Join.Widget.js;Leverate.Util.js;ProfitablePositions.Widget.js&callback=window.onLeverateWidgetsLoad';
        document.getElementsByTagName('head')[0].appendChild(js);
        var css = document.createElement('link');
        css.type = 'text/css';
        css.async = true;
        css.rel = 'stylesheet';
        css.href = clientUrl + '/PageScripts/GetCss/?files=Social.Widget.css;TopPerformers.Widget.css;FeaturedUser.Widget.css;MarketRates.Grid.Widget.css;MarketRates.Ticker.Widget.css;Join.Widget.css;ProfitablePositions.Widget.css;';
        document.getElementsByTagName('head')[0].appendChild(css);
        var customCss = document.createElement('link');
        css.type = 'text/css';
        customCss.async = true;
        customCss.rel = 'stylesheet';
        customCss.href = '/custom-css/widget.css';
        document.getElementsByTagName('head')[0].appendChild(customCss);
        onLeverateWidgetsLoad = function() {
            // var join = new $.Leverate.Join({
            // socialServerUrl: socServerUrl,
            // webServerUrl: ServerUrl,
            // sirixWebUrl : webUrl,
            // openAccountUrl: 'https://account.askapsocial.com/?tipe=open-account&webtrader',
            // language: 'en'
            // });
            // $('#login-webtrader').on('click', function() {
            // join.show();
            // });
            // $("#social-stream").leverateSocialFeed({
            // socialWidgetClientUrl: clientUrl,
            // fetchDataUrl: socServerUrl,
            // maxItems: 4,
            // language: "en",
            // copyClick: function (item) {
            // window.open(webUrl,'_blank');
            // }
            // });
            // $("#top-perform").leverateTopPerformers({
            // socialWidgetClientUrl: clientUrl,
            // fetchDataUrl: socServerUrl,
            // maxItems: 3,
            // profitPoint: 2,
            // language: "en",
            // copyClick: function (item) {
            // window.open(webUrl,'_blank');
            // }
            // });
            // $("#spotlight").leverateFeaturedUser({
            // socialWidgetClientUrl: clientUrl,
            // fetchDataUrl: socServerUrl,
            // language: "en"
            // });
            $("#marketrates").leverateMarketRatesTicker({
                socialWidgetClientUrl: clientUrl,
                updateInterval: 5,
                speed: 5000,
                instruments: [{
                    name: 'EURUSD',
                    precision: 4
                }, {
                    name: 'USDJPY',
                    precision: 4
                }, {
                    name: 'GBPUSD',
                    precision: 4
                }, {
                    name: 'USDCHF',
                    precision: 4
                }, {
                    name: 'AUDUSD',
                    precision: 4
                }],
                skin: "dark"
            });
        }
    }
});