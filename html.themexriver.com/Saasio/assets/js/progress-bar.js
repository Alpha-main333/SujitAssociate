/** 
 * ProgressBar : Simple animated progress bar
 * Author : Nayem > https://facebook.com/sadik5g
 * Version : 1.0.0
 */
(function($) {

    $.fn.ProgressBar = function() {
        var targetParent = $(this);
        targetParent.each(function() {

            //required variables
            var target = $(this).children();
            var offsetTop = $(this).offset().top;
            var winHeight = $(window).height();
            var data_width = target.attr("data-percent") + "%";
            var data_color = target.attr("data-color");

            //animation starts
            if (winHeight > offsetTop) {
                target.css({
                    backgroundColor: data_color,
                });
                target.animate({
                    width: data_width,
                }, 1000);
            }

            //animation with scroll 
            $(window).scroll(function() {
                var scrollBar = $(this).scrollTop();
                var animateStart = offsetTop - winHeight;
                if (scrollBar > animateStart) {
                    target.css({
                        backgroundColor: data_color,
                    });
                    target.animate({
                        width: data_width,
                    }, 1000);
                }
            });
        });

        return this;
    }
})(jQuery)
// jquery.filterizr.js
! function(t, i) {
    "use strict";
    if (!i) throw new Error("Filterizr requires jQuery to work.");
    var e, n = function(t) {
        this.init(t)
    };
    n.prototype = {
        init: function(t) {
            this.root = {
                x: 0,
                y: 0,
                w: t
            }
        },
        fit: function(t) {
            var i, e, n, r = t.length,
                o = r > 0 ? t[0].h : 0;
            for (this.root.h = o, i = 0; i < r; i++) n = t[i], (e = this.findNode(this.root, n.w, n.h)) ? n.fit = this.splitNode(e, n.w, n.h) : n.fit = this.growDown(n.w, n.h)
        },
        findNode: function(t, i, e) {
            return t.used ? this.findNode(t.right, i, e) || this.findNode(t.down, i, e) : i <= t.w && e <= t.h ? t : null
        },
        splitNode: function(t, i, e) {
            return t.used = !0, t.down = {
                x: t.x,
                y: t.y + e,
                w: t.w,
                h: t.h - e
            }, t.right = {
                x: t.x + i,
                y: t.y,
                w: t.w - i,
                h: e
            }, t
        },
        growDown: function(t, i) {
            var e;
            return this.root = {
                used: !0,
                x: 0,
                y: 0,
                w: this.root.w,
                h: this.root.h + i,
                down: {
                    x: 0,
                    y: this.root.h,
                    w: this.root.w,
                    h: i
                },
                right: this.root
            }, (e = this.findNode(this.root, t, i)) ? this.splitNode(e, t, i) : null
        }
    }, i.fn.filterizr = function() {
        var t = arguments;
        if (this._fltr || (this._fltr = i.fn.filterizr.prototype.init(this, "object" == typeof t[0] ? t[0] : void 0)), "string" == typeof t[0]) {
            if (t[0].lastIndexOf("_") > -1) throw new Error("Filterizr error: You cannot call private methods");
            if ("function" != typeof this._fltr[t[0]]) throw new Error("Filterizr error: There is no such function");
            this._fltr[t[0]](t[1], t[2])
        }
        return this
    }, i.fn.filterizr.prototype = {
        init: function(t, e) {
            var n = i(t).extend(i.fn.filterizr.prototype);
            return n.options = {
                animationDuration: .5,
                callbacks: {
                    onFilteringStart: function() {},
                    onFilteringEnd: function() {},
                    onShufflingStart: function() {},
                    onShufflingEnd: function() {},
                    onSortingStart: function() {},
                    onSortingEnd: function() {}
                },
                delay: 0,
                delayMode: "progressive",
                easing: "ease-out",
                filter: "all",
                filterOutCss: {
                    opacity: 0,
                    transform: "scale(0.5)"
                },
                filterInCss: {
                    opacity: 1,
                    transform: "scale(1)"
                },
                layout: "sameSize",
                setupControls: !0
            }, 0 === arguments.length && (e = n.options), 1 === arguments.length && "object" == typeof arguments[0] && (e = arguments[0]), e && n.setOptions(e), n.css({
                padding: 0,
                position: "relative"
            }), n._lastCategory = 0, n._isAnimating = !1, n._isShuffling = !1, n._isSorting = !1, n._mainArray = n._getFiltrItems(), n._subArrays = n._makeSubarrays(), n._activeArray = n._getCollectionByFilter(n.options.filter), n._toggledCategories = {}, n._typedText = i("input[data-search]").val() || "", n._uID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var i = 16 * Math.random() | 0;
                return ("x" == t ? i : 3 & i | 8).toString(16)
            }), n._setupEvents(), n.options.setupControls && n._setupControls(), n.filter(n.options.filter), n
        },
        filter: function(t) {
            var i = this._getCollectionByFilter(t);
            this.options.filter = t, this.trigger("filteringStart"), this._handleFiltering(i), this._isSearchActivated() && this.search(this._typedText)
        },
        toggleFilter: function(t) {
            var i = [];
            this.trigger("filteringStart"), t && (this._toggledCategories[t] ? delete this._toggledCategories[t] : this._toggledCategories[t] = !0), this._multifilterModeOn() ? (i = this._makeMultifilterArray(), this._handleFiltering(i), this._isSearchActivated() && this.search(this._typedText)) : (this.filter("all"), this._isSearchActivated() && this.search(this._typedText))
        },
        search: function(t) {
            var i = this._multifilterModeOn() ? this._makeMultifilterArray() : this._getCollectionByFilter(this.options.filter),
                e = [],
                n = 0;
            if (this._isSearchActivated())
                for (n = 0; n < i.length; n++) {
                    i[n].text().toLowerCase().indexOf(t.toLowerCase()) > -1 && e.push(i[n])
                }
            if (e.length > 0) this._handleFiltering(e);
            else if (this._isSearchActivated())
                for (n = 0; n < this._activeArray.length; n++) this._activeArray[n]._filterOut();
            else this._handleFiltering(i)
        },
        shuffle: function() {
            this._isAnimating = !0, this._isShuffling = !0, this.trigger("shufflingStart"), this._mainArray = this._fisherYatesShuffle(this._mainArray), this._subArrays = this._makeSubarrays();
            var t = this._multifilterModeOn() ? this._makeMultifilterArray() : this._getCollectionByFilter(this.options.filter);
            this._isSearchActivated() ? this.search(this._typedText) : this._placeItems(t)
        },
        sort: function(t, i) {
            if (t = t || "domIndex", i = i || "asc", this._isAnimating = !0, this._isSorting = !0, this.trigger("sortingStart"), "domIndex" !== t && "sortData" !== t && "w" !== t && "h" !== t)
                for (var e = 0; e < this._mainArray.length; e++) this._mainArray[e][t] = this._mainArray[e].data(t);
            this._mainArray.sort(this._comparator(t, i)), this._subArrays = this._makeSubarrays();
            var n = this._multifilterModeOn() ? this._makeMultifilterArray() : this._getCollectionByFilter(this.options.filter);
            this._isSearchActivated() ? this.search(this._typedText) : this._placeItems(n)
        },
        setOptions: function(t) {
            var i = 0;
            for (var e in t) this.options[e] = t[e];
            if (this._mainArray && (t.animationDuration || t.delay || t.easing || t.delayMode))
                for (i = 0; i < this._mainArray.length; i++) this._mainArray[i].css("transition", "all " + this.options.animationDuration + "s " + this.options.easing + " " + this._mainArray[i]._calcDelay() + "ms");
            t.callbacks && (t.callbacks.onFilteringStart || (this.options.callbacks.onFilteringStart = function() {}), t.callbacks.onFilteringEnd || (this.options.callbacks.onFilteringEnd = function() {}), t.callbacks.onShufflingStart || (this.options.callbacks.onShufflingStart = function() {}), t.callbacks.onShufflingEnd || (this.options.callbacks.onShufflingEnd = function() {}), t.callbacks.onSortingStart || (this.options.callbacks.onSortingStart = function() {}), t.callbacks.onSortingEnd || (this.options.callbacks.onSortingEnd = function() {})), this.options.filterInCss.transform || (this.options.filterInCss.transform = "translate3d(0,0,0)"), this.options.filterOutCss.transform || (this.options.filterOutCss.transform = "translate3d(0,0,0)")
        },
        _getFiltrItems: function() {
            var t = this,
                e = i(t.find(".filtr-item")),
                n = [];
            return i.each(e, function(e, o) {
                var s = i(o).extend(r)._init(e, t);
                n.push(s)
            }), n
        },
        _makeSubarrays: function() {
            for (var t = [], i = 0; i < this._lastCategory; i++) t.push([]);
            for (i = 0; i < this._mainArray.length; i++)
                if ("object" == typeof this._mainArray[i]._category)
                    for (var e = this._mainArray[i]._category.length, n = 0; n < e; n++) t[this._mainArray[i]._category[n] - 1].push(this._mainArray[i]);
                else t[this._mainArray[i]._category - 1].push(this._mainArray[i]);
            return t
        },
        _makeMultifilterArray: function() {
            for (var t = [], i = {}, e = 0; e < this._mainArray.length; e++) {
                var n = this._mainArray[e],
                    r = !1,
                    o = n.domIndex in i == !1;
                if (Array.isArray(n._category)) {
                    for (var s = 0; s < n._category.length; s++)
                        if (n._category[s] in this._toggledCategories) {
                            r = !0;
                            break
                        }
                } else n._category in this._toggledCategories && (r = !0);
                o && r && (i[n.domIndex] = !0, t.push(n))
            }
            return t
        },
        _setupControls: function() {
            var t = this;
            i("*[data-filter]").click(function() {
                var e = i(this).data("filter");
                t.options.filter !== e && t.filter(e)
            }), i("*[data-multifilter]").click(function() {
                var e = i(this).data("multifilter");
                "all" === e ? (t._toggledCategories = {}, t.filter("all")) : t.toggleFilter(e)
            }), i("*[data-shuffle]").click(function() {
                t.shuffle()
            }), i("*[data-sortAsc]").click(function() {
                var e = i("*[data-sortOrder]").val();
                t.sort(e, "asc")
            }), i("*[data-sortDesc]").click(function() {
                var e = i("*[data-sortOrder]").val();
                t.sort(e, "desc")
            }), i("input[data-search]").keyup(function() {
                t._typedText = i(this).val(), t._delayEvent(function() {
                    t.search(t._typedText)
                }, 250, t._uID)
            })
        },
        _setupEvents: function() {
            var e = this;
            i(t).resize(function() {
                e._delayEvent(function() {
                    e.trigger("resizeFiltrContainer")
                }, 250, e._uID)
            }), e.on("resizeFiltrContainer", function() {
                e._multifilterModeOn() ? e.toggleFilter() : e.filter(e.options.filter)
            }).on("filteringStart", function() {
                e.options.callbacks.onFilteringStart()
            }).on("filteringEnd", function() {
                e.options.callbacks.onFilteringEnd()
            }).on("shufflingStart", function() {
                e._isShuffling = !0, e.options.callbacks.onShufflingStart()
            }).on("shufflingEnd", function() {
                e.options.callbacks.onShufflingEnd(), e._isShuffling = !1
            }).on("sortingStart", function() {
                e._isSorting = !0, e.options.callbacks.onSortingStart()
            }).on("sortingEnd", function() {
                e.options.callbacks.onSortingEnd(), e._isSorting = !1
            })
        },
        _calcItemPositions: function() {
            var t = this._activeArray,
                e = 0,
                r = Math.round(this.width() / this.find(".filtr-item").outerWidth()),
                o = 0,
                s = t[0].outerWidth(),
                a = 0,
                l = 0,
                h = 0,
                f = 0,
                u = 0,
                c = [];
            if ("packed" === this.options.layout) {
                i.each(this._activeArray, function(t, i) {
                    i._updateDimensions()
                });
                var g = new n(this.outerWidth());
                for (g.fit(this._activeArray), f = 0; f < t.length; f++) c.push({
                    left: t[f].fit.x,
                    top: t[f].fit.y
                });
                e = g.root.h
            }
            if ("horizontal" === this.options.layout)
                for (o = 1, f = 1; f <= t.length; f++) s = t[f - 1].outerWidth(), a = t[f - 1].outerHeight(), c.push({
                    left: l,
                    top: h
                }), l += s, e < a && (e = a);
            else if ("vertical" === this.options.layout) {
                for (f = 1; f <= t.length; f++) a = t[f - 1].outerHeight(), c.push({
                    left: l,
                    top: h
                }), h += a;
                e = h
            } else if ("sameHeight" === this.options.layout) {
                o = 1;
                var d = this.outerWidth();
                for (f = 1; f <= t.length; f++) {
                    s = t[f - 1].width();
                    var _ = t[f - 1].outerWidth(),
                        p = 0;
                    t[f] && (p = t[f].width()), c.push({
                        left: l,
                        top: h
                    }), (u = l + s + p) > d ? (u = 0, l = 0, h += t[0].outerHeight(), o++) : l += _
                }
                e = o * t[0].outerHeight()
            } else if ("sameWidth" === this.options.layout) {
                for (f = 1; f <= t.length; f++) {
                    if (c.push({
                            left: l,
                            top: h
                        }), f % r == 0 && o++, l += s, h = 0, o > 0)
                        for (u = o; u > 0;) h += t[f - r * u].outerHeight(), u--;
                    f % r == 0 && (l = 0)
                }
                for (f = 0; f < r; f++) {
                    for (var y = 0, m = f; t[m];) y += t[m].outerHeight(), m += r;
                    y > e ? (e = y, y = 0) : y = 0
                }
            } else if ("sameSize" === this.options.layout) {
                for (f = 1; f <= t.length; f++) c.push({
                    left: l,
                    top: h
                }), l += s, f % r == 0 && (h += t[0].outerHeight(), l = 0);
                e = (o = Math.ceil(t.length / r)) * t[0].outerHeight()
            }
            return this.css("height", e), c
        },
        _handleFiltering: function(t) {
            for (var i = this._getArrayOfUniqueItems(this._activeArray, t), e = 0; e < i.length; e++) i[e]._filterOut();
            this._activeArray = t, this._placeItems(t)
        },
        _multifilterModeOn: function() {
            return Object.keys(this._toggledCategories).length > 0
        },
        _isSearchActivated: function() {
            return this._typedText.length > 0
        },
        _placeItems: function(t) {
            this._isAnimating = !0, this._itemPositions = this._calcItemPositions();
            for (var i = 0; i < t.length; i++) t[i]._filterIn(this._itemPositions[i])
        },
        _getCollectionByFilter: function(t) {
            return "all" === t ? this._mainArray : this._subArrays[t - 1]
        },
        _makeDeepCopy: function(t) {
            var i = {};
            for (var e in t) i[e] = t[e];
            return i
        },
        _comparator: function(t, i) {
            return function(e, n) {
                return "asc" === i ? e[t] < n[t] ? -1 : e[t] > n[t] ? 1 : 0 : "desc" === i ? n[t] < e[t] ? -1 : n[t] > e[t] ? 1 : 0 : void 0
            }
        },
        _getArrayOfUniqueItems: function(t, i) {
            var e, n, r = [],
                o = {},
                s = i.length;
            for (e = 0; e < s; e++) o[i[e].domIndex] = !0;
            for (s = t.length, e = 0; e < s; e++)(n = t[e]).domIndex in o || r.push(n);
            return r
        },
        _delayEvent: (e = {}, function(t, i, n) {
            if (null === n) throw Error("UniqueID needed");
            e[n] && clearTimeout(e[n]), e[n] = setTimeout(t, i)
        }),
        _fisherYatesShuffle: function(t) {
            for (var i, e, n = t.length; n;) e = Math.floor(Math.random() * n--), i = t[n], t[n] = t[e], t[e] = i;
            return t
        }
    };
    var r = {
        _init: function(t, i) {
            var e = this;
            return e._parent = i, e._category = e._getCategory(), e._lastPos = {}, e.domIndex = t, e.sortData = e.data("sort"), e.w = 0, e.h = 0, e._isFilteredOut = !0, e._filteringOut = !1, e._filteringIn = !1, e.css(i.options.filterOutCss).css({
                "-webkit-backface-visibility": "hidden",
                perspective: "1000px",
                "-webkit-perspective": "1000px",
                "-webkit-transform-style": "preserve-3d",
                position: "absolute",
                transition: "all " + i.options.animationDuration + "s " + i.options.easing + " " + e._calcDelay() + "ms"
            }), e.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                e._onTransitionEnd()
            }), e
        },
        _updateDimensions: function() {
            this.w = this.outerWidth(), this.h = this.outerHeight()
        },
        _calcDelay: function() {
            var t = 0;
            return "progressive" === this._parent.options.delayMode ? t = this._parent.options.delay * this.domIndex : this.domIndex % 2 == 0 && (t = this._parent.options.delay), t
        },
        _getCategory: function() {
            var t = this.data("category");
            if ("string" == typeof t) {
                t = t.split(", ");
                for (var i = 0; i < t.length; i++) {
                    if (isNaN(parseInt(t[i]))) throw new Error("Filterizr: the value of data-category must be a number, starting from value 1 and increasing.");
                    parseInt(t[i]) > this._parent._lastCategory && (this._parent._lastCategory = parseInt(t[i]))
                }
            } else t > this._parent._lastCategory && (this._parent._lastCategory = t);
            return t
        },
        _onTransitionEnd: function() {
            this._filteringOut ? (i(this).addClass("filteredOut"), this._isFilteredOut = !0, this._filteringOut = !1) : this._filteringIn && (this._isFilteredOut = !1, this._filteringIn = !1), this._parent._isAnimating && (this._parent._isShuffling ? this._parent.trigger("shufflingEnd") : this._parent._isSorting ? this._parent.trigger("sortingEnd") : this._parent.trigger("filteringEnd"), this._parent._isAnimating = !1)
        },
        _filterOut: function() {
            var t = this._parent._makeDeepCopy(this._parent.options.filterOutCss);
            t.transform += " translate3d(" + this._lastPos.left + "px," + this._lastPos.top + "px, 0)", this.css(t), this.css("pointer-events", "none"), this._filteringOut = !0
        },
        _filterIn: function(t) {
            var e = this._parent._makeDeepCopy(this._parent.options.filterInCss);
            i(this).removeClass("filteredOut"), this._filteringIn = !0, this._lastPos = t, this.css("pointer-events", "auto"), e.transform += " translate3d(" + t.left + "px," + t.top + "px, 0)", this.css(e)
        }
    }
}(this, jQuery),
function(t) {
    "use strict";
    var i, e = {
            selector: "",
            dataattr: "src",
            background: !1,
            each: null,
            eacherror: null,
            callback: null,
            timeout: 5e3
        },
        n = function(i, e, n, o) {
            var s = i.currentTarget,
                a = t(s).data(i.namespace);
            a.isLoading && (o ? "function" == typeof a.eacherror ? a.eacherror(e) : null !== e.parentNode && e.parentNode.removeChild(e) : "function" == typeof a.each && a.each(e, n), ++a.loadedImageCounter, a.loadedImageCounter >= a.length && r(s, i.namespace))
        },
        r = function(i, e) {
            var r = t(i),
                o = r.data(),
                s = o[e].callback;
            r.off("loadImage." + e, n), delete o[e], "function" == typeof s && setTimeout(function() {
                s(i)
            }, 2 * t.imageloader.queueInterval)
        },
        o = function(i, e, n, r, o, s) {
            var a = t(i),
                l = a.data(o),
                h = !1,
                f = function(r, s) {
                    a.removeAttr(["data-", o].join("")), t(e).triggerHandler("loadImage." + n, [i, s, r && "error" === r.type])
                };
            return function() {
                var i, e = t("<img />");
                e.bind("error", function(e) {
                    h = !0, clearTimeout(i), t(this).unbind("error").unbind("load"), f(e)
                }).bind("load", function(n) {
                    h = !0, clearTimeout(i), t(this).unbind("error").unbind("load"), r ? a.css("background-image", ["url(", l, ")"].join("")) : a.attr("src", l), f(n, e[0])
                }).attr("src", l), i = setTimeout(function() {
                    !1 === h && e.trigger("error")
                }, s)
            }
        },
        s = {
            getInstance: function() {
                return i instanceof a == !1 && (i = new a), i
            }
        },
        a = function() {
            this.index = 0, this.queue = [], this.isRunning = !1
        };
    a.prototype.add = function(t) {
        if ("function" != typeof t) throw new Error("you can only pass function.");
        this.queue.push(t)
    }, a.prototype.run = function(i) {
        var e = t.proxy(this.run, this);
        i = i || !1, this.isRunning && !i || (this.isRunning = !0, this.queue[this.index++](), this.index < this.queue.length ? setTimeout(function() {
            e(!0)
        }, t.imageloader.queueInterval) : this.isRunning = !1)
    }, t.imageloader = {
        queueInterval: 17
    }, t.fn.imageloader = function(i) {
        return this.each(function(a, l) {
            ! function(i, a, l) {
                var h, f = s.getInstance(),
                    u = t(a),
                    c = t.extend({}, e, l || {}),
                    g = "_" + ("" + (new Date).valueOf()).slice(-7),
                    d = 0;
                "" === c.selector && u.data(c.dataattr) ? (h = u, d = 1) : d = (h = u.find([c.selector, "[data-", c.dataattr, "]"].join(""))).length, u.data(g, {
                    each: c.each,
                    eacherror: c.eacherror,
                    callback: c.callback,
                    isLoading: !0,
                    loadedImageCounter: 0,
                    length: d
                }), 0 === d ? r(a, g) : (h.each(function(t, i) {
                    f.add(o(i, a, g, c.background, c.dataattr, c.timeout))
                }), u.on("loadImage." + g, n), f.run())
            }(0, l, i)
        })
    }
}(jQuery);