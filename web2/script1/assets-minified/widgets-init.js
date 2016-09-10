function themefromCookie() {
    var a = $.cookie("set-layout-theme"), b = $.cookie("set-framework-theme");
    null != a && $("#layout-color").attr("href", "assets-minified/themes/supina/" + a + "/layout-color.css"), null != b && $("#framework-color").attr("href", "assets-minified/themes/supina/" + b + "/framework-color.css")
}
$(function() {
    $('a[href="#"]').click(function(a) {
        a.preventDefault()
    })
}), $(function() {
    $(".todo-box li input").on("click", function() {
        $(this).parent().toggleClass("todo-done")
    })
}), $(function() {
    var a = 0;
    $(".timeline-scroll .tl-row").each(function(b, c) {
        var d = $(c);
        a += d.outerWidth() + parseInt(d.css("margin-left"), 10) + parseInt(d.css("margin-right"), 10)
    }), $(".timeline-horizontal", this).width(a)
}), $(document).on("ready", function() {
    $(".scrollable-nice").niceScroll({horizrailenabled: !1, cursorborder: "0", cursorwidth: "6px", cursorcolor: "#363636", zindex: "5555", autohidemode: !0, bouncescroll: !0, mousescrollstep: "40", scrollspeed: "100", background: "#cdcdcd", cursoropacitymax: "0.6", cursorborderradius: "0"}), $(".scrollable-nice").getNiceScroll().resize()
}), $(function() {
    $(".loading-button").click(function() {
        var a = $(this);
        a.button("loading")
    })
}), $(function() {
    $('input[type="checkbox"].custom-checkbox').uniform(), $('input[type="radio"].custom-radio').uniform(), $(".custom-select").uniform(), $(".selector").append('<i class="glyph-icon icon-caret-down"></i>'), $(".checker span").append('<i class="glyph-icon icon-check"></i>'), $(".radio span").append('<i class="glyph-icon icon-circle"></i>')
}), $(function() {
    $(".chosen-select").chosen(), $(".chosen-search").append('<i class="glyph-icon icon-search"></i>'), $(".chosen-single div").html('<i class="glyph-icon icon-caret-down"></i>')
}), $(function() {
    var a = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
    $(".autocomplete-input").autocomplete({source: a})
}), $(function() {
    $(".thumbnail-box").hover(function() {
        $(".thumbnail-overlay", this).fadeIn("fast"), $(".thumbnail-content", this).slideDown("fast")
    }, function() {
        $(".thumbnail-overlay", this).fadeOut("fast"), $(".thumbnail-content", this).slideUp("fast")
    })
}), $(function() {
    $(".tooltip-button").tooltip({container: "body"})
}), $(function() {
    $(".alert-close-btn").click(function() {
        $(this).parent().addClass("animated fadeOutDown")
    })
}), $(function() {
    $(".popover-button").popover({container: "body", html: !0, animation: !0, content: function() {
            var a = $(this).attr("data-id");
            return $(a).html()
        }}).click(function(a) {
        a.preventDefault()
    })
}), $(function() {
    $(".popover-button-default").popover({container: "body", html: !0, animation: !0}).click(function(a) {
        a.preventDefault()
    })
}), function(a) {
    a(document).ready(function() {
        a.slidebars()
    })
}(jQuery), $(document).ready(function() {
    $(".choose-theme").click(function() {
        var a = $(this).attr("layout-color"), b = $(this).attr("framework-color");
        $("#loading").slideDown({complete: function() {
                if ("" != a) {
                    $("#layout-color").attr("href", "assets-minified/themes/supina/" + a + "/layout-color.css");
                    {
                        $.cookie("set-layout-theme", a)
                    }
                }
                if ("" != b) {
                    $("#framework-color").attr("href", "assets-minified/themes/supina/" + b + "/framework-color.css");
                    {
                        $.cookie("set-framework-theme", b)
                    }
                }
            }}), $("#loading").delay(1500).slideUp()
    }), themefromCookie()
});