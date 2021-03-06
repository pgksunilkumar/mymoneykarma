! function(a, b) {
    "function" == typeof define && define.amd ? define(function() {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b : a.Carousel = b(a)
}(this, function() {
    "use strict";
    var a = function(b) {
        return this && this instanceof a ? ("string" == typeof b && (b = {
            key: b
        }), this.target = b.target, void this.early()) : new a(b)
    };
    return a.init = function(b) {
        return new a(b)
    }, a.prototype = {
        early: function() {
            this.target.append('<span class="nav-left"></span><span class="nav-right"></span>'), this.setupClass(), this.events()
        },
        isInViewport: function(a) {
            "function" == typeof jQuery && a instanceof jQuery && (a = a[0]);
            var b = a.getBoundingClientRect();
            return b.top >= 0 && b.left >= 0 && b.bottom <= (window.innerHeight || document.documentElement.clientHeight) && b.right <= (window.innerWidth || document.documentElement.clientWidth)
        },
        setupClass: function() {
            var a = this.target.find(".carousel-box");
            a.eq(0).addClass("left"), a.eq(1).addClass("is-active"), a.eq(2).addClass("right")
        },
        moveCarousel: function(a, b, c, d) {
            var e, f = this.target.find(".is-active");
            a.removeClass(b), f.removeClass("is-active").addClass(b), e = f.siblings("." + c).removeClass(c).addClass("is-active").index(), e = d(e, a), a.eq(e).addClass(c)
        },
        events: function() {
            var a = this;
            this.target.on("click", ".nav-left, .left", function(b) {
                b.preventDefault(), a.moveCarousel(a.target.find(".carousel-wrapper li"), "right", "left", function(a) {
                    return 1 === a ? "0" : a - 1
                })
            }), this.target.on("click", ".nav-right, .right", function(b) {
                b.preventDefault(), a.moveCarousel(a.target.find(".carousel-wrapper li"), "left", "right", function(a, b) {
                    return a === b.length - 1 ? "0" : a + 1
                })
            }), $(document).keyup(function(b) {
                39 === b.which && a.isInViewport(a.target) && a.target.find(".nav-right").trigger("click"), 37 === b.which && a.isInViewport(a.target) && a.target.find(".nav-left").trigger("click")
            })
        }
    }, a
});