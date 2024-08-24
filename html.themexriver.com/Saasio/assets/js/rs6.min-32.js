/*!

  - Slider Revolution 6.4.0 JavaScript Plugin -

..........................xXXXXX.................
................. xXXXXX..xXXXXX..xXXXXX.........
..................xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.........,xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
..........xXXXXX..xXXXXX..xXXXXX..xXXXXX.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........
.....................xxxxxxxxxxxxxxxxxxx.........

				VERSION: 6.4.6
			   DATE: 2021-03-19
    @author: Krisztian Horvath, ThemePunch OHG.


UPDATES AND DOCS AT: 
https://www.themepunch.com/support-center
			
GET LICENSE AT: 
https://www.themepunch.com/links/slider_revolution_wordpress_regular_license

LICENSE:
Copyright (c) 2009-2019, ThemePunch. All rights reserved.
This work is subject to the terms at https://www.themepunch.com/links/slider_revolution_wordpress_regular_license (Regular / Extended)

*/
! function(e, t) {
    "use strict";
    var i;
    window.RSANYID = window.RSANYID === t ? [] : window.RSANYID, window.RSANYID_sliderID = window.RSANYID_sliderID === t ? [] : window.RSANYID_sliderID, e.fn.extend({
        revolution: function(s) {
            return this.each(function() {
                i = e.fn.revolution;
                for (var n = document.getElementsByClassName("rs-p-wp-fix"); n[0];) n[0].parentNode.removeChild(n[0]);
                this.id !== t ? (i[d] = {
                    anyid: []
                }, this.id = i.revCheckIDS(d, this, !0)) : this.id = "rs_module_" + Math.round(1e7 * Math.random());
                var d = this.id,
                    l = i.clone(s);
                i[d] = G(s), i[d].ignoreHeightChange = a && "fullscreen" === i[d].sliderLayout && i[d].ignoreHeightChange, i[d].option_export = l, i[d].anyid = [], i[d]._Lshortcuts = {}, i[d].computedStyle = {}, i[d].c = e(this), i[d].cpar = i[d].c.parent(), i[d].canvas = i[d].c.find("rs-slides"), i[d].caches = {
                    calcResponsiveLayersList: [],
                    contWidthManager: {}
                }, i[d].sbgs = {}, window.RSBrowser = window.RSBrowser === t ? i.get_browser() : window.RSBrowser, i.setIsIOS(), i.setIsChrome8889(), i[d].noDetach = i[d].BUG_ie_clipPath = "Edge" === window.RSBrowser || "IE" === window.RSBrowser, i.getByTag = r(), i[d].indexhelper = 0, i[d].fullScreenOffsetResult = 0, i[d].level = 0, i[d].rtl = e("body").hasClass("rtl"), i[d]._L = i[d]._L === t ? {} : i[d]._L, i[d].emptyObject = "{}", i[d].dimensionReCheck = {}, i.globalListener === t && i.pageHandler(d), i[d].stopAfterLoops != t && i[d].stopAfterLoops > -1 ? i[d].looptogo = i[d].stopAfterLoops : i[d].looptogo = "disabled", window.T = i[d], i[d].BUG_safari_clipPath = "Safari" === i.get_browser() && i.get_browser_version() > "12", i[d].minHeight = "fullwidth" === i[d].sliderLayout ? 0 : i[d].minHeight != t && "" !== i[d].minHeight ? parseInt(i[d].minHeight, 0) : 0, i[d].minHeight = i[d].minHeight === t ? 0 : i[d].minHeight, i[d].isEdge = "Edge" === i.get_browser(), o(d), i.updateVisibleArea(d), D(d), window.requestAnimationFrame(function() {
                    if ("fullscreen" === i[d].sliderLayout) {
                        var e = i.getFullscreenOffsets(d);
                        0 !== e && i[d].cpar.height(i.getWinH(d) - e)
                    }
                    i[d].cpar[0].style.visibility = "visible"
                }), "hero" == i[d].sliderType && i[d].c.find("rs-slide").each(function(t) {
                    t > 0 && e(this).remove()
                }), i[d].navigation.use = "hero" !== i[d].sliderType && ("carousel" == i[d].sliderType || i[d].navigation.keyboardNavigation || "on" == i[d].navigation.mouseScrollNavigation || "carousel" == i[d].navigation.mouseScrollNavigation || i[d].navigation.touch.touchenabled || i[d].navigation.arrows.enable || i[d].navigation.bullets.enable || i[d].navigation.thumbnails.enable || i[d].navigation.tabs.enable), i[d].c.find("rs-bgvideo").each(function() {
                    "RS-BGVIDEO" !== this.tagName || this.id !== t && "" !== this.id || (this.id = "rs-bg-video-" + Math.round(1e6 * Math.random()))
                }), tpGS.force3D = "auto", !0 === i[d].modal.useAsModal && -1 === i.RS_prioList.indexOf(d) && (i.RS_toInit[d] = !1, i.RS_prioList.push(d)), i.RS_killedlist !== t && -1 !== i.RS_killedlist.indexOf(d) && (i.RS_toInit[d] = !1, i.RS_prioList.push(d)), !0 === i.RS_prioListFirstInit && !0 !== i[d].modal.useAsModal && -1 === i.RS_prioList.indexOf(d) && (i.RS_toInit[d] = !1, i.RS_prioList.push(d)), i.initNextRevslider(d)
            })
        },
        getRSJASONOptions: function(e) {
            console.log(JSON.stringify(i[e].option_export))
        },
        getRSVersion: function(e) {
            var t, i, a = window.SliderRevolutionVersion;
            if (!e) {
                for (var r in t = i = "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n" + i, a) a.hasOwnProperty(r) && (t += a[r].alias + ": " + a[r].ver + "\n");
                t += i
            }
            return e ? a : t
        },
        revremoveslide: function(t) {
            return this.each(function() {
                var a = this.id;
                if (!(t < 0 || t > i[a].slideamount) && i[a] && i[a].slides.length > 0 && (t > 0 || t <= i[a].slides.length)) {
                    var r = i.gA(i[a].slides[t], "key");
                    i[a].slideamount = i[a].slideamount - 1, i[a].realslideamount = i[a].realslideamount - 1, n("rs-bullet", r, a), n("rs-tab", r, a), n("rs-thumb", r, a), e(i[a].slides[t]).remove(), i[a].thumbs = s(i[a].thumbs, t), i.updateNavIndexes && i.updateNavIndexes(a), t <= i[a].pr_active_key && (i[a].pr_active_key = i[a].pr_active_key - 1)
                }
            })
        },
        revaddcallback: function(e) {
            return this.each(function() {
                i[this.id] && (i[this.id].callBackArray === t && (i[this.id].callBackArray = []), i[this.id].callBackArray.push(e))
            })
        },
        revgetparallaxproc: function() {
            if (i[this[0].id]) return i[this[0].id].scrollproc
        },
        revdebugmode: function() {},
        revscroll: function(t) {
            return this.each(function() {
                var i = e(this);
                e("body,html").animate({
                    scrollTop: i.offset().top + i.height() - t + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                m(this.id, t, !0)
            })
        },
        revkill: function() {
            return this.each(function() {
                var a = this.id;
                i[a].c.data("conthover", 1), i[a].c.data("conthoverchanged", 1), i[a].c.trigger("revolution.slide.onpause"), i[a].tonpause = !0, i[a].c.trigger("stoptimer"), i[a].sliderisrunning = !1;
                var r = "updateContainerSizes." + i[a].c.attr("id");
                i.window.unbind(r), tpGS.gsap.killTweensOf(i[a].c.find("*"), !1), tpGS.gsap.killTweensOf(i[a].c, !1), i[a].c.unbind("hover, mouseover, mouseenter,mouseleave, resize"), i[a].c.find("*").each(function() {
                    var i = e(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("pztl") != t && i.data("pztl").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                }), tpGS.gsap.killTweensOf(i[a].c.find("*"), !1), tpGS.gsap.killTweensOf(i[a].c, !1), i[a].progressC.remove();
                try {
                    i[a].c.closest(".rev_slider_wrapper").detach()
                } catch (e) {}
                try {
                    i[a].c.closest("rs-fullwidth-wrap").remove()
                } catch (e) {}
                try {
                    i[a].c.closest("rs-module-wrap").remove()
                } catch (e) {}
                try {
                    i[a].c.remove()
                } catch (e) {}
                i[a].cpar.detach(), i[a].c.html(""), i[a].c = null, delete i[a], i.RS_prioList.splice(i.RS_prioList.indexOf(a), 1), i.RS_toInit[a] = !1, i.RS_killedlist = i.RS_killedlist === t ? [] : i.RS_killedlist, -1 === i.RS_killedlist.indexOf(a) && i.RS_killedlist.push(a)
            })
        },
        revpause: function() {
            return this.each(function() {
                var a = e(this);
                a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0 && (a.data("conthover", 1), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onpause"), i[this.id].tonpause = !0, a.trigger("stoptimer"))
            })
        },
        revresume: function() {
            return this.each(function() {
                if (i[this.id] !== t) {
                    var a = e(this);
                    a.data("conthover", 0), a.data("conthoverchanged", 1), a.trigger("revolution.slide.onresume"), i[this.id].tonpause = !1, a.trigger("starttimer")
                }
            })
        },
        revmodal: function(a) {
            var r = this instanceof e ? this[0] : this,
                o = r.id;
            i[r.id] !== t && i.revModal(o, a)
        },
        revstart: function() {
            var a = this instanceof e ? this[0] : this;
            return i[a.id] === t ? (console.log("Slider is Not Existing"), !1) : i[a.id].sliderisrunning || !0 === i[a.id].initEnded ? (console.log("Slider Is Running Already"), !1) : (i[a.id].c = e(a), i[a.id].canvas = i[a.id].c.find("rs-slides"), u(a.id), !0)
        },
        revnext: function() {
            return this.each(function() {
                i[this.id] !== t && i.callingNewSlide(this.id, 1, "carousel" === i[this.id].sliderType)
            })
        },
        revprev: function() {
            return this.each(function() {
                i[this.id] !== t && i.callingNewSlide(this.id, -1, "carousel" === i[this.id].sliderType)
            })
        },
        revmaxslide: function() {
            return e(this).find("rs-slide").length
        },
        revcurrentslide: function() {
            if (i[e(this)[0].id] !== t) return parseInt(i[e(this)[0].id].pr_active_key, 0) + 1
        },
        revlastslide: function() {
            return e(this).find("rs-slide").length
        },
        revshowslide: function(e) {
            return this.each(function() {
                i[this.id] !== t && e !== t && i.callingNewSlide(this.id, "to" + (e - 1))
            })
        },
        revcallslidewithid: function(e) {
            return this.each(function() {
                i[this.id] !== t && i.callingNewSlide(this.id, e, "carousel" === i[this.id].sliderType)
            })
        }
    }), i = e.fn.revolution, e.extend(!0, i, {
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        trim: function(e) {
            return e !== t && null !== e && "string" == typeof e ? e.trim() : e
        },
        pageHandler: function(r) {
            i.globalListener = !0, i.window = e(window), i.document = e(document), i.RS_toInit = {}, i.RS_prioList = [], i.RS_swapping = [], i.RS_swapList = {}, window.isSafari11 === t && (window.isSafari11 = i.isSafari11()), a ? window.addEventListener("orientationchange", function() {
                i.getWindowDimension(!1, !0), setTimeout(function() {
                    i.getWindowDimension(!0, !0)
                }, 400)
            }) : window.addEventListener("resize", i.getWindowDimension), i.getWindowDimension(!1), i.stickySupported = !1, "IE" !== window.RSBrowser && (i.stickySupported = !0), i.checkParrentOverflows(r);
            var o = i.getByTag(document, "RS-MODULE");
            for (var s in o) o.hasOwnProperty(s) && (i.RS_toInit[o[s].id] = !1, i.RS_prioList.push(o[s].id));
            i.nextSlider = r, i.RS_prioListFirstInit = !0
        },
        checkParrentOverflows: function(e) {
            window.requestAnimationFrame(function() {
                for (var t = i[e].cpar[0]; t.parentNode && !1 !== i.stickySupported;) {
                    if ("RS-MODULE-WRAP" !== t.tagName && "RS-FULLWIDTH-WRAP" !== t.tagName && "RS-MODULE-WRAP" !== t.tagName && -1 === t.className.indexOf("wp-block-themepunch-revslider")) {
                        var a = window.getComputedStyle(t);
                        i.stickySupported = "hidden" !== a.overflow && "hidden" !== a.overflowX && "hidden" !== a.overflowY
                    }
                    t = t.parentNode
                }
            })
        },
        initNextRevslider: function(e) {
            i.RS_prioList[0] === e && !1 === i.RS_toInit[e] ? (i.RS_toInit[e] = "waiting", c(e), setTimeout(function() {
                i.initNextRevslider(e)
            }, 19)) : i.RS_prioList[0] === e && "waiting" === i.RS_toInit[e] ? setTimeout(function() {
                i.initNextRevslider(e)
            }, 19) : i.RS_prioList[0] === e && !0 === i.RS_toInit[e] ? (i.RS_prioList.shift(), 0 !== i.RS_prioList.length && setTimeout(function() {
                i.initNextRevslider(e)
            }, 19)) : i.RS_prioList[0] !== e && !1 === i.RS_toInit[e] ? setTimeout(function() {
                i.initNextRevslider(e)
            }, 19) : 0 === i.RS_prioList.length && !0 === i.RS_toInit[e] && c(e)
        },
        scrollTicker: function(e) {
            1 != i.scrollTickerAdded && (i.slidersToScroll = [], i.scrollTickerAdded = !0, a ? (tpGS.gsap.ticker.fps(150), tpGS.gsap.ticker.add(function() {
                i.generalObserver()
            })) : document.addEventListener("scroll", function(e) {
                i.scrollRaF === t && (i.scrollRaF = requestAnimationFrame(i.generalObserver.bind(this, !0)))
            }, {
                passive: !0
            })), i.slidersToScroll.push(e), i.generalObserver(a)
        },
        generalObserver: function(e, a) {
            for (var r in i.scrollRaF && (i.scrollRaF = cancelAnimationFrame(i.scrollRaF)), i.lastwindowheight = i.lastwindowheight || i.winH, i.scrollY = window.scrollY, i.slidersToScroll) i.slidersToScroll.hasOwnProperty(r) && i.scrollHandling(i.slidersToScroll[r], e, t, a)
        },
        wrapObserver: {
            targets: [],
            init: function(e) {
                var t = 1,
                    a = 0,
                    r = 0,
                    o = s.bind(i.wrapObserver);

                function s() {
                    if (r++, requestAnimationFrame(o), !(r - a < 30 / t))
                        for (var s in a = r, i.wrapObserver.targets)
                            if (i.wrapObserver.targets.hasOwnProperty(s)) {
                                var n = i.wrapObserver.targets[s],
                                    d = n.elem.getBoundingClientRect();
                                n.lw === d.width && n.lh === d.height || 0 === d.width || (n.callback && (n.callback.pause(), n.callback.kill(), n.callback = null), n.callback = tpGS.gsap.to({}, {
                                    duration: .2,
                                    onComplete: e.bind(window, n.elem, n.id)
                                })), n.lw = d.width, n.lh = d.height
                            }
                }
                s()
            },
            observe: function(e, t) {
                if ("" !== (e = e.getBoundingClientRect ? e : e[0].getBoundingClientRect ? e[0] : "")) {
                    var a = e.getBoundingClientRect();
                    i.wrapObserver.targets.push({
                        elem: e,
                        id: t,
                        lw: a.width,
                        lh: a.height
                    })
                }
            }
        },
        enterViewPort: function(a, r) {
            !0 !== i[a].started ? (i[a].started = !0, i[a].c.trigger("revolution.slide.firstrun"), setTimeout(function() {
                k(a), "hero" !== i[a].sliderType && i.manageNavigation && i[a].navigation.use && !0 === i[a].navigation.createNavigationDone && i.manageNavigation(a), i[a].slideamount > 1 && C(a), setTimeout(function() {
                    i[a] !== t && (i[a].revolutionSlideOnLoaded = !0, i[a].c.trigger("revolution.slide.onloaded"))
                }, 50)
            }, i[a].startDelay), i[a].startDelay = 0, window.requestAnimationFrame(function() {
                h(a)
            })) : (i[a].waitForCountDown && (C(a), i[a].waitForCountDown = !1), "playing" != i[a].sliderlaststatus && i[a].sliderlaststatus != t || i[a].c.trigger("starttimer"), i[a].lastplayedvideos != t && i[a].lastplayedvideos.length > 0 && e.each(i[a].lastplayedvideos, function(e, t) {
                i.playVideo(t, a)
            }))
        },
        leaveViewPort: function(a) {
            i[a].sliderlaststatus = i[a].sliderstatus, i[a].c.trigger("stoptimer"), i[a].playingvideos != t && i[a].playingvideos.length > 0 && (i[a].lastplayedvideos = e.extend(!0, [], i[a].playingvideos), i[a].playingvideos && e.each(i[a].playingvideos, function(e, t) {
                i[a].leaveViewPortBasedStop = !0, i.stopVideo && i.stopVideo(t, a)
            }))
        },
        scrollHandling: function(e, a, r, o) {
            if (i[e] !== t) {
                var s = i[e].topc !== t ? i[e].topc[0].getBoundingClientRect() : 0 === i[e].canv.height ? i[e].cpar[0].getBoundingClientRect() : i[e].c[0].getBoundingClientRect();
                s.hheight = 0 === s.height ? 0 === i[e].canv.height ? i[e].module.height : i[e].canv.height : s.height, i[e].scrollproc = s.top < 0 || s.hheight > i.lastwindowheight && s.top < i.lastwindowheight ? s.top / s.hheight : s.bottom > i.lastwindowheight ? (s.bottom - i.lastwindowheight) / s.hheight : 0;
                var n = Math.max(0, 1 - Math.abs(i[e].scrollproc));
                i[e].viewPort.enable && ("%" === i[e].viewPort.vaType[i[e].level] && (i[e].viewPort.visible_area[i[e].level] <= n || n >= 0 && n <= 1 && i[e].sbtimeline.fixed) || "px" === i[e].viewPort.vaType[i[e].level] && (s.top <= 0 && s.bottom >= i.lastwindowheight || s.top >= 0 && s.bottom <= i.lastwindowheight || s.top >= 0 && s.top < i.lastwindowheight - i[e].viewPort.visible_area[i[e].level] || s.bottom >= i[e].viewPort.visible_area[i[e].level] && s.bottom < i.lastwindowheight) ? i[e].inviewport || (i[e].inviewport = !0, i.enterViewPort(e, !0), i[e].c.trigger("enterviewport")) : i[e].inviewport && (i[e].inviewport = !1, i.leaveViewPort(e), i[e].c.trigger("leftviewport"))), i[e].inviewport && (i.callBackHandling && i.callBackHandling(e, "parallax", "start"), requestAnimationFrame(function() {
                    "fullscreen" === i[e].sliderLayout && i.getFullscreenOffsets(e)
                }), i.parallaxProcesses(e, s, o, r), i.callBackHandling && i.callBackHandling(e, "parallax", "end"))
            }
        },
        clone: function(e, i) {
            if (i === t && e === t) return {};
            return function e(i, a) {
                var r = Array.isArray(i) ? [] : {};
                for (var o in i) i.hasOwnProperty(o) && (i[o] !== t && "object" == typeof i[o] && a ? r[o] = e(i[o], !0) : i[o] !== t && (r[o] = i[o]));
                return r
            }(e, i)
        },
        closest: function(e, t) {
            return e && (t(e) ? e : i.closest(e.parentNode, t))
        },
        closestNode: function(e, t) {
            return i.closest(e, function(e) {
                return e.nodeName === t
            })
        },
        closestClass: function(e, t) {
            return i.closest(e, function(e) {
                return (" " + e.className + " ").indexOf(" " + t + " ") >= 0
            })
        },
        getWinH: function(e) {
            return i[e].ignoreHeightChange ? i.mobileWinH : i.winH
        },
        getWindowDimension: function(e, r) {
            !1 === e ? (i.rAfScrollbar = "skip", i.winWAll = window.innerWidth, i.winWSbar = document.documentElement.clientWidth, a ? (i.zoom = r ? 1 : i.winWSbar / i.winWAll, i.winW = 1 !== i.zoom ? i.winWSbar * i.zoom : Math.min(i.winWAll, i.winWSbar), i.winH = 1 !== i.zoom ? window.innerHeight * i.zoom : window.innerHeight, r && window.visualViewport && (i.winH *= window.visualViewport.scale, i.winWAll *= window.visualViewport.scale), i.scrollBarWidth = 0) : (i.scrollBarWidth = i.winWAll - i.winWSbar, i.winW = Math.min(i.winWAll, i.winWSbar), i.winH = window.innerHeight), a && i.winH > 125 && (i.lastwindowheight !== t && Math.abs(i.lastwindowheight - i.winH) < 125 ? i.mobileWinH = i.lastwindowheight : i.mobileWinH = i.winH)) : clearTimeout(i.windowDimenstionDelay), i.windowDimenstionDelay = setTimeout(function() {
                i.rAfScrollbar = t, i.winWAll = window.innerWidth, i.winWSbar = document.documentElement.clientWidth, a ? (i.zoom = r ? 1 : i.winWSbar / i.winWAll, i.RS_px_ratio = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth, i.winW = 1 !== i.zoom ? i.winWSbar * i.zoom : Math.min(i.winWAll, i.winWSbar), i.winH = 1 !== i.zoom ? window.innerHeight * i.zoom : window.innerHeight, r && window.visualViewport && (i.winH *= window.visualViewport.scale, i.winWAll *= window.visualViewport.scale), i.scrollBarWidth = 0, r && tpGS.gsap.delayedCall(.1, function() {
                    i.getWindowDimension()
                })) : (i.scrollBarWidth = i.winWAll - i.winWSbar, i.winW = Math.min(i.winWAll, i.winWSbar), i.winH = window.innerHeight), a && i.winH > 125 && (i.lastwindowheight !== t && Math.abs(i.lastwindowheight - i.winH) < 125 ? i.mobileWinH = i.lastwindowheight : i.mobileWinH = i.winH), !1 !== e && i.document.trigger("updateContainerSizes")
            }, 100)
        },
        aC: function(t, i) {
            t && (t.classList && t.classList.add ? t.classList.add("" + i) : e(t).addClass(i))
        },
        rC: function(t, i) {
            t && (t.classList && t.classList.remove ? t.classList.remove("" + i) : e(t).removeClass(i))
        },
        sA: function(e, t, i) {
            e && e.setAttribute && e.setAttribute("data-" + t, i)
        },
        gA: function(e, i, a) {
            return e === t ? t : e.hasAttribute && e.hasAttribute("data-" + i) && e.getAttribute("data-" + i) !== t && null !== e.getAttribute("data-" + i) ? e.getAttribute("data-" + i) : a !== t ? a : t
        },
        rA: function(e, t) {
            e && e.removeAttribute && e.removeAttribute("data-" + t)
        },
        iWA: function(e, a) {
            return i[e].justifyCarousel ? "static" === a ? i[e].carousel.wrapwidth : i[e].carousel.slide_widths[a !== t ? a : i[e].carousel.focused] : i[e].gridwidth[i[e].level]
        },
        iHE: function(e, t) {
            return i[e].useFullScreenHeight ? i[e].canv.height : Math.max(i[e].currentRowsHeight, i[e].gridheight[i[e].level])
        },
        updateFixedScrollTimes: function(e) {
            !0 === i[e].sbtimeline.set && !0 === i[e].sbtimeline.fixed && "auto" !== i[e].sliderLayout && (i[e].sbtimeline.rest = i[e].duration - i[e].sbtimeline.fixEnd, i[e].sbtimeline.time = i[e].duration - (i[e].sbtimeline.fixStart + i[e].sbtimeline.rest), i[e].sbtimeline.extended = i[e].sbtimeline.time / 10)
        },
        addSafariFix: function(e) {
            !0 === window.isSafari11 && !0 !== i[e].safari3dFix && (i[e].safari3dFix = !0, i[e].c[0].className += " safarifix")
        },
        showModalCover: function(a, r, o) {
            switch (o) {
                case "show":
                    var s;
                    if (r.spin !== t && "off" !== r.spin && (s = i.buildSpinner(a, "spinner" + r.spin, r.spinc, "modalspinner")), r.bg !== t && !1 !== r.bg && "false" !== r.bg && "transparent" !== r.bg) {
                        var n = e('<rs-modal-cover data-alias="' + r.alias + '" data-rid="' + a + '" id="' + a + '_modal_bg" style="display:none;opacity:0;background:' + r.bg + '"></rs-modal-cover>');
                        e("body").append(n), r.speed = parseFloat(r.speed), r.speed = r.speed > 200 ? r.speed / 1e3 : r.speed, r.speed = Math.max(Math.min(3, r.speed), .3), tpGS.gsap.to(n, r.speed, {
                            display: "block",
                            opacity: 1,
                            ease: "power3.inOut"
                        }), i.isModalOpen = !0, s !== t && n.append(s)
                    } else s !== t && i[a].c.append(s);
                    break;
                case "hide":
                    (n = e('rs-modal-cover[data-alias="' + r.alias + '"] .modalspinner')) !== t && n.length > 0 ? n.remove() : i[a].c.find(".modalspinner").remove()
            }
        },
        revModal: function(a, r) {
            if (a !== t && i[a] !== t && "clicked" !== i[a].modal.closeProtection) {
                if (!0 === i[a].modal.closeProtection) return i[a].modal.closeProtection, void setTimeout(function() {
                    i[a].modal.closeProtection = !1, i.revModal(a, r)
                }, 750);
                switch (r.mode) {
                    case "show":
                        if (!0 === i[a].modal.isLive) return;
                        if (!0 === i.anyModalclosing) return;
                        i[a].modal.isLive = !0, r.slide = r.slide === t ? "to0" : r.slide, i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.add(i[a].modal.bodyclass), tpGS.gsap.to(i[a].modal.bg, i[a].modal.coverSpeed, {
                            display: "block",
                            opacity: 1,
                            ease: "power3.inOut"
                        }), tpGS.gsap.set(i[a].modal.c, {
                            display: "auto" === i[a].sliderLayout ? "inline-block" : "block",
                            opacity: 0
                        }), i[a].cpar.removeClass("hideallscrollbars"), tpGS.gsap.set(i[a].cpar, {
                            display: "block",
                            opacity: 1
                        });
                        var o = {
                            a: 0
                        };
                        i.isModalOpen = !0, i[a].clearModalBG = !0, tpGS.gsap.fromTo(o, i[a].modal.coverSpeed / 5, {
                            a: 0
                        }, {
                            a: 10,
                            ease: "power3.inOut",
                            onComplete: function() {
                                i.openModalId = a, i[a].sliderisrunning ? i.callingNewSlide(a, r.slide) : ("to0" !== r.slide && (i[a].startWithSlideKey = r.slide), u(a))
                            }
                        }), tpGS.gsap.fromTo([i[a].modal.c], .01, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: i[a].modal.coverSpeed / 4,
                            ease: "power3.inOut",
                            onComplete: function() {}
                        }), window.overscrollhistory = document.body.style.overflow, setTimeout(function() {
                            document.body.style.overflow = "hidden"
                        }, 250), i.getWindowDimension();
                        break;
                    case "close":
                        if (!0 === i.anyModalclosing) return;
                        i.anyModalclosing = !0, i.openModalId = t, S(a), document.body.style.overflow = window.overscrollhistory, i[a].cpar.addClass("hideallscrollbars"), i[a].modal.bodyclass !== t && i[a].modal.bodyclass.length >= 0 && document.body.classList.remove(i[a].modal.bodyclass), tpGS.gsap.to(i[a].modal.bg, i[a].modal.coverSpeed, {
                            display: "none",
                            opacity: 0,
                            ease: "power3.inOut"
                        }), tpGS.gsap.to(i[a].modal.c, i[a].modal.coverSpeed / 6.5, {
                            display: "none",
                            delay: i[a].modal.coverSpeed / 4,
                            opacity: 0,
                            onComplete: function() {
                                tpGS.gsap.set(i[a].cpar, {
                                    display: "none",
                                    opacity: 0
                                }), i.document.trigger("revolution.all.resize"), i.getWindowDimension(), i.isModalOpen = !1
                            }
                        }), i[a].modal.closeProtection = !0, clearTimeout(i[a].modal.closeTimer), i[a].modal.closeTimer = setTimeout(function() {
                            i.anyModalclosing = !1, i[a].modal.isLive = !1, i[a].modal.closeProtection = !1
                        }, Math.max(750, 1020 * i[a].modal.coverSpeed));
                        break;
                    case "init":
                        if (window.RS_60_MODALS = window.RS_60_MODALS === t ? [] : window.RS_60_MODALS, -1 === e.inArray(i[a].modal.alias, window.RS_60_MODALS) && window.RS_60_MODALS.push(i[a].modal.alias), i[a].modal.listener === t && (i[a].modal.c = e("#" + a + "_modal"), !1 !== i[a].modal.cover && "false" !== i[a].modal.cover || (i[a].modal.coverColor = "transparent"), i[a].modal.bg = e('rs-modal-cover[data-alias="' + r.alias + '"]'), i[a].modal.bg === t || 0 === i[a].modal.bg.length ? (i[a].modal.bg = e('<rs-modal-cover style="display:none;opacity:0;background:' + i[a].modal.coverColor + '" data-rid="' + a + '" id="' + a + '_modal_bg"></rs-modal-cover>'), "auto" === i[a].sliderLayout && i[a].modal.cover ? e("body").append(i[a].modal.bg) : i[a].modal.c.append(i[a].modal.bg)) : i[a].modal.bg.attr("data-rid", a), i[a].modal.c[0].className += "rs-modal-" + i[a].sliderLayout, i[a].modal.calibration = {
                                left: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "50%" : "left" === i[a].modal.horizontal ? "0px" : "auto" : "0px",
                                right: "auto" === i[a].sliderLayout ? "center" === i[a].modal.horizontal ? "auto" : "left" === i[a].modal.horizontal ? "auto" : "0px" : "0px",
                                top: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "50%" : "top" === i[a].modal.vertical ? "0px" : "auto" : "0px",
                                bottom: "auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout ? "middle" === i[a].modal.vertical ? "auto" : "top" === i[a].modal.vertical ? "auto" : "0px" : "0px",
                                y: ("auto" === i[a].sliderLayout || "fullwidth" === i[a].sliderLayout) && "middle" === i[a].modal.vertical ? "-50%" : 0,
                                x: "auto" === i[a].sliderLayout && "center" === i[a].modal.horizontal ? "-50%" : 0
                            }, "-50%" === i[a].modal.calibration.y && (i[a].modal.calibration.filter = "blur(0px)"), tpGS.gsap.set(i[a].modal.c, "auto" === i[a].sliderLayout || "fullscreen" === i[a].sliderLayout ? e.extend(!0, i[a].modal.calibration, {
                                opacity: 0,
                                display: "none"
                            }) : {
                                opacity: 0,
                                display: "none"
                            }), "fullwidth" === i[a].sliderLayout && tpGS.gsap.set(i[a].modal.c.find("rs-module-wrap"), i[a].modal.calibration), i.document.on("RS_OPENMODAL_" + i[a].modal.alias, function(e, t) {
                                i.revModal(a, {
                                    mode: "show",
                                    slide: t
                                })
                            }), i.document.on("click", "rs-modal-cover", function() {
                                i.revModal(i.gA(this, "rid"), {
                                    mode: "close"
                                })
                            }), i[a].modal.listener = !0, i[a].modal.trigger !== t)) {
                            var s, n = i[a].modal.trigger.split(";");
                            for (o in i[a].modal.trigger = {}, n)
                                if (n.hasOwnProperty(o)) switch ((s = n[o].split(":"))[0]) {
                                    case "t":
                                        i[a].modal.trigger.time = parseInt(s[1], 0);
                                        break;
                                    case "s":
                                        i[a].modal.trigger.scroll = s[1];
                                        break;
                                    case "so":
                                        i[a].modal.trigger.scrollo = parseInt(s[1], 0);
                                        break;
                                    case "e":
                                        i[a].modal.trigger.event = s[1]
                                }
                            if (i[a].modal.trigger.time !== t && 0 !== i[a].modal.trigger.time && setTimeout(function() {
                                    i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias)
                                }, i[a].modal.trigger.time), i[a].modal.trigger.scrollo !== t || i[a].modal.trigger.scroll !== t) {
                                i[a].modal.trigger.scroll !== t && e(i[a].modal.trigger.scroll)[0] !== t && (i[a].modal.trigger.scroll = e(i[a].modal.trigger.scroll)[0]);
                                var d = function() {
                                    if (i[a].modal.trigger.scroll !== t) var e = i[a].modal.trigger.scroll.getBoundingClientRect();
                                    (i[a].modal.trigger.scroll !== t && Math.abs(e.top + (e.bottom - e.top) / 2 - i.getWinH(a) / 2) < 50 || i[a].modal.trigger.scrollo !== t && Math.abs(i[a].modal.trigger.scrollo - (i.scrollY !== t ? i.scrollY : window.scrollY)) < 100) && (i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias), document.removeEventListener("scroll", d))
                                };
                                document.addEventListener("scroll", d, {
                                    id: a,
                                    passive: !0
                                })
                            }
                            i[a].modal.trigger.event !== t && i.document.on(i[a].modal.trigger.event, function() {
                                i.document.trigger("RS_OPENMODAL_" + i[a].modal.alias)
                            })
                        }
                }
            }
        },
        smartConvertDivs: function(e) {
            var t = "";
            if ("string" == typeof e && e.indexOf("#") >= 0) {
                var i = e.split(","),
                    a = i.length - 1;
                for (var r in i) t = "string" == typeof i[r] && "#" === i[r][0] ? t + i[r][1] / i[r][3] * 100 + "%" + (r < a ? "," : "") : t + i[r] + (r < a ? "," : "")
            } else t = e;
            return t
        },
        revToResp: function(e, i, a, r) {
            if ((e = e === t ? a : e) !== t) {
                if (r = r === t ? "," : r, "boolean" != typeof e && ("object" != typeof e || Array.isArray(e))) {
                    try {
                        e = e.replace(/[[\]]/g, "").replace(/\'/g, "").split(r)
                    } catch (e) {}
                    for (e = Array.isArray(e) ? e : [e]; e.length < i;) e[e.length] = e[e.length - 1]
                }
                return e
            }
        },
        loadImages: function(a, r, o, s) {
            if (a !== t && 0 !== a.length) {
                var n = [];
                if (Array.isArray(a))
                    for (var d in a) a.hasOwnProperty(d) && a[d] !== t && n.push(a[d]);
                else n.push(a);
                for (var l in n)
                    if (n.hasOwnProperty(l)) {
                        var c = n[l].querySelectorAll("img, rs-sbg, .rs-svg");
                        for (var d in c)
                            if (c.hasOwnProperty(d)) {
                                var p = g(c[d], t, r),
                                    u = p !== t ? p : i.gA(c[d], "svg_src") != t ? i.gA(c[d], "svg_src") : c[d].src === t ? e(c[d]).data("src") : c[d].src,
                                    h = i.gA(c[d], "svg_src") != t ? "svg" : "img";
                                u !== t && i[r].loadqueue !== t && 0 == i[r].loadqueue.filter(function(e) {
                                    return e.src === u
                                }).length && i[r].loadqueue.push({
                                    src: u,
                                    index: d,
                                    starttoload: e.now(),
                                    type: h || "img",
                                    prio: o,
                                    progress: c[d].complete && u === c[d].src ? "loaded" : "prepared",
                                    static: s,
                                    width: c[d].complete && u === c[d].src ? c[d].width : t,
                                    height: c[d].complete && u === c[d].src ? c[d].height : t
                                })
                            }
                    }
                w(r)
            }
        },
        waitForCurrentImages: function(r, o, s) {
            if (r !== t && 0 !== r.length && i[o] !== t) {
                var n = !1,
                    d = [];
                if (Array.isArray(r))
                    for (var l in r) r.hasOwnProperty(l) && r[l] !== t && d.push(r[l]);
                else d.push(r);
                for (var c in d)
                    if (d.hasOwnProperty(c)) {
                        var p = d[c].querySelectorAll("img, rs-sbg, .rs-svg");
                        for (l in p)
                            if (p.hasOwnProperty(l) && "length" !== l && !(p[l].className.indexOf("rs-pzimg") >= 0)) {
                                var u = e(p[l]).data(),
                                    h = g(p[l], t, o),
                                    m = h !== t ? h : i.gA(p[l], "svg_src") != t ? i.gA(p[l], "svg_src") : p[l].src === t ? u.src : p[l].src,
                                    v = i.getLoadObj(o, m);
                                if (i.sA(p[l], "src-rs-ref", m), u.loaded === t && v !== t && v.progress && "loaded" == v.progress) {
                                    if (p[l].src = v.src, "img" == v.type) {
                                        if (u.slidebgimage) {
                                            -1 == v.src.indexOf("images/transparent.png") && -1 == v.src.indexOf("assets/transparent.png") || u.bgcolor === t || u.bgcolor !== t && "transparent" !== u.bgcolor && (v.bgColor = !0), i.sA(d[c], "owidth", v.width), i.sA(d[c], "oheight", v.height);
                                            var f = i.getByTag(d[c], "RS-SBG-WRAP"),
                                                y = i.gA(d[c], "key");
                                            if (i[o].sbgs[y].loadobj = v, f.length > 0 && (i.sA(f[0], "owidth", v.width), i.sA(f[0], "oheight", v.height)), "carousel" === i[o].sliderType) {
                                                var b = e(f),
                                                    w = i.getSlideIndex(o, y);
                                                (i[o].carousel.justify && i[o].carousel.slide_widths === t || i[o].carousel.slide_width === t) && i.setCarouselDefaults(o, !0), b.data("panzoom") === t || i[o].panzoomTLs !== t && i[o].panzoomTLs[w] !== t || i.startPanZoom(b, o, 0, w, "prepare", y), i[o].sbgs[y].isHTML5 && !i[o].sbgs[y].videoisplaying && (i[o].sbgs[y].video = i[o].sbgs[y].loadobj.img), d[c].getAttribute("data-iratio") !== t && !d[c].getAttribute("data-iratio") && v.img && v.img.naturalWidth && (d[c].setAttribute("data-iratio", v.img.naturalWidth / v.img.naturalHeight), i.setCarouselDefaults(o, "redraw"), !0 === i[o].carousel.ocfirsttun && i.organiseCarousel(o, "right", !0, !1, !1)), i.updateSlideBGs(o, y, i[o].sbgs[y])
                                            }
                                        }
                                    } else "svg" == v.type && "loaded" == v.progress && (p[l].innerHTML = v.innerHTML);
                                    u.loaded = !0
                                }
                                v && v.progress && v.progress.match(/inprogress|inload|prepared/g) && (!v.error && e.now() - v.starttoload < 15e3 ? n = !0 : (v.progress = "failed", v.reported_img || (v.reported_img = !0, console.log(m + "  Could not be loaded !")))), 1 != i[o].youtubeapineeded || window.YT && YT.Player != t || (n = x("youtube", o)), 1 != i[o].vimeoapineeded || window.Vimeo || (n = x("vimeo", o))
                            }
                    }!a && i[o].audioqueue && i[o].audioqueue.length > 0 && e.each(i[o].audioqueue, function(t, i) {
                    i.status && "prepared" === i.status && e.now() - i.start < i.waittime && (n = !0)
                }), e.each(i[o].loadqueue, function(t, i) {
                    !0 === i.static && ("loaded" != i.progress && "done" !== i.progress || "failed" === i.progress) && ("failed" != i.progress || i.reported ? !i.error && e.now() - i.starttoload < 5e3 ? n = !0 : i.reported || (i.reported = _(i.src, i.error)) : i.reported = _(i.src, i.error))
                }), n ? tpGS.gsap.delayedCall(.02, i.waitForCurrentImages, [r, o, s]) : s !== t && tpGS.gsap.delayedCall(1e-4, s)
            }
        },
        updateVisibleArea: function(e) {
            for (var a in i[e].viewPort.visible_area = i.revToResp(i[e].viewPort.visible_area, i[e].rle, "0px"), i[e].viewPort.vaType = new Array(4), i[e].viewPort.visible_area) i[e].viewPort.visible_area.hasOwnProperty(a) && (i.isNumeric(i[e].viewPort.visible_area[a]) && (i[e].viewPort.visible_area[a] += "%"), i[e].viewPort.visible_area[a] !== t && (i[e].viewPort.vaType[a] = i[e].viewPort.visible_area[a].indexOf("%") >= 0 ? "%" : "px"), i[e].viewPort.visible_area[a] = parseInt(i[e].viewPort.visible_area[a], 0), i[e].viewPort.visible_area[a] = "%" == i[e].viewPort.vaType[a] ? i[e].viewPort.visible_area[a] / 100 : i[e].viewPort.visible_area[a])
        },
        observeFonts: function(e, a, r) {
            r = r === t ? 0 : r, i.fonts === t && (i.fonts = {}, i.monoWidth = d("monospace"), i.sansWidth = d("sans-serif"), i.serifWidth = d("serif")), r++;
            var o = i.fonts[e];
            !0 !== i.fonts[e] && (i.fonts[e] = i.monoWidth !== d(e + ",monospace") || i.sansWidth !== d(e + ",sans-serif") || i.serifWidth !== d(e + ",serif")), 100 === r || (!1 === o || o === t) && !0 === i.fonts[e] ? (d(e + ",monospace", !0), d(e + ",sans-serif", !0), d(e + ",serif", !0), a()) : setTimeout(function() {
                i.observeFonts(e, a, r)
            }, 19)
        },
        getversion: function() {
            return "Slider Revolution 6.4.0"
        },
        currentSlideIndex: function(e) {
            return i[e].pr_active_key
        },
        iOSVersion: function() {
            return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) && navigator.userAgent.match(/OS 4_\d like Mac OS X/i)
        },
        setIsIOS: function() {
            i.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || "MacIntel" === navigator.platform && void 0 !== navigator.standalone
        },
        setIsChrome8889: function() {
            i.isChrome8889 = i.isChrome8889 === t ? navigator.userAgent.indexOf("Chrome/88") >= 0 || navigator.userAgent.indexOf("Chrome/89") >= 0 : i.isChrome8889
        },
        isIE: function() {
            if (i.isIERes === t) {
                var a = e('<div style="display:none;"/>').appendTo(e("body"));
                a.html("\x3c!--[if IE 8]><a>&nbsp;</a><![endif]--\x3e"), i.isIERes = a.find("a").length, a.remove()
            }
            return i.isIERes
        },
        is_mobile: function() {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                i = !1;
            if (window.orientation !== t) i = !0;
            else
                for (var a in e) e.hasOwnProperty(a) && (i = !!(i || navigator.userAgent.split(e[a]).length > 1) || i);
            return i && document.body && -1 === document.body.className.indexOf("rs-ISM") && (document.body.className += " rs-ISM"), i
        },
        is_android: function() {
            var e = ["android", "Android"],
                t = !1;
            for (var i in e) e.hasOwnProperty(i) && (t = !!(t || navigator.userAgent.split(e[i]).length > 1) || t);
            return t
        },
        callBackHandling: function(t, a, r) {
            i[t].callBackArray && e.each(i[t].callBackArray, function(e, t) {
                t && t.inmodule && t.inmodule === a && t.atposition && t.atposition === r && t.callback && t.callback.call()
            })
        },
        get_browser: function() {
            var e, t = navigator.userAgent,
                i = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            return /trident/i.test(i[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE") : "Chrome" === i[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e[1].replace("OPR", "Opera") : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), i[0])
        },
        get_browser_version: function() {
            var e, t = navigator.appName,
                i = navigator.userAgent,
                a = i.match(/(edge|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"])[1]
        },
        isFaceBook: function() {
            return i.isFaceBookApp == t && (i.isFaceBookApp = navigator.userAgent || navigator.vendor || window.opera, i.isFaceBookApp = i.isFaceBookApp.indexOf("FBAN") > -1 || i.isFaceBookApp.indexOf("FBAV") > -1), i.isFaceBookApp
        },
        isFirefox: function(e) {
            return i[e].isFirefox = i[e].isFirefox === t ? "Firefox" === i.get_browser() : i[e].isFirefox, i[e].isFirefox
        },
        isSafari11: function() {
            return "safari" === i.trim(i.get_browser().toLowerCase()) && parseFloat(i.get_browser_version()) >= 11
        },
        isWebkit: function() {
            var e = /(webkit)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase());
            return e && e[1] && "webkit" === e[1]
        },
        isIE11: function() {
            return i.IE11 = i.IE11 === t ? !!navigator.userAgent.match(/Trident.*rv\:11\./) : i.IE11, i.IE11
        },
        deepLink: function(e, a) {
            if (a !== t) {
                var r = parseInt(a.toString().replace(/^slide/, "").replace("-", ""), 10);
                if (isNaN(r))
                    for (var o in i[e].slides)
                        if (i[e].slides.hasOwnProperty(o) && i.gA(i[e].slides[o], "deeplink") === a) {
                            r = parseInt(i.gA(i[e].slides[o], "originalindex"), 10);
                            break
                        }
                return isNaN(r) || r < 1 || r > i[e].realslideamount ? void 0 : r
            }
        },
        getHorizontalOffset: function(e, t) {
            var i = l(e, ".outer-left"),
                a = l(e, ".outer-right");
            return "left" == t ? i : "right" == t ? a : "all" == t ? {
                left: i,
                right: a,
                both: i + a,
                inuse: i + a != 0
            } : i + a
        },
        getComingSlide: function(e, a) {
            var r = i[e].pr_next_key !== t ? i[e].pr_next_key : i[e].pr_processing_key !== t ? i[e].pr_processing_key : i[e].pr_active_key,
                o = 0;
            if (o = 0, i[e].pr_active_slide !== t && "true" == i.gA(i[e].pr_active_slide[0], "not_in_nav") && (r = i[e].pr_lastshown_key), a !== t && i.isNumeric(a) || a !== t && a.match(/to/g)) o = 1 === a || -1 === a ? parseInt(r, 0) + a < 0 ? i[e].slideamount - 1 : parseInt(r, 0) + a >= i[e].slideamount ? 0 : parseInt(r, 0) + a : (a = i.isNumeric(a) ? a : parseInt(a.split("to")[1], 0)) < 0 ? 0 : a > i[e].slideamount - 1 ? i[e].slideamount - 1 : a;
            else if (a)
                for (var s in i[e].slides) i[e].slides.hasOwnProperty(s) && (o = i[e].slides && i[e].slides[s] && i.gA(i[e].slides[s], "key") === a ? s : o);
            return {
                nindex: o,
                aindex: r
            }
        },
        callingNewSlide: function(e, a, r) {
            var o = i.getComingSlide(e, a);
            i[e].pr_next_key = o.nindex, i[e].sdir = i[e].pr_next_key < i[e].pr_active_key ? 1 : 0, r && i[e].carousel !== t && (i[e].carousel.focused = i[e].pr_next_key), i[e].ctNavElement ? i[e].ctNavElement = !1 : i[e].c.trigger("revolution.nextslide.waiting"), (i[e].started && o.aindex === i[e].pr_next_key && o.aindex === i[e].pr_lastshown_key || i[e].pr_next_key !== o.aindex && -1 != i[e].pr_next_key && i[e].pr_lastshown_key !== t) && k(e, r)
        },
        getLoadObj: function(e, a) {
            var r = i[e].loadqueue !== t && i[e].loadqueue.filter(function(e) {
                return e.src === a
            })[0];
            return r === t ? {
                src: a
            } : r
        },
        getResponsiveLevel: function(e) {
            var t = 9999,
                a = 0,
                r = 0,
                o = 0;
            if (i[e].responsiveLevels && i[e].responsiveLevels.length)
                for (var s in i[e].responsiveLevels) i[e].responsiveLevels.hasOwnProperty(s) && (i.winWAll < i[e].responsiveLevels[s] && (0 == a || a > parseInt(i[e].responsiveLevels[s])) && (t = parseInt(i[e].responsiveLevels[s]), o = parseInt(s), a = parseInt(i[e].responsiveLevels[s])), i.winWAll > i[e].responsiveLevels[s] && a < i[e].responsiveLevels[s] && (a = parseInt(i[e].responsiveLevels[s]), r = parseInt(s)));
            return a < t ? r : o
        },
        getSizeMultpilicator: function(e, t, a) {
            var r = {
                h: 0,
                w: 0
            };
            return i[e].justifyCarousel ? r.h = r.w = 1 : (r.w = a.width / i[e].gridwidth[i[e].level], r.h = a.height / i[e].gridheight[i[e].level], r.w = isNaN(r.w) ? 1 : r.w, r.h = isNaN(r.h) ? 1 : r.h, 1 == i[e].enableUpscaling ? r.h = r.w : (r.h > r.w ? r.h = r.w : r.w = r.h, (r.h > 1 || r.w > 1) && (r.w = 1, r.h = 1))), r
        },
        updateDims: function(e, a) {
            var r = i[e].pr_processing_key || i[e].pr_active_key || 0,
                o = i[e].pr_active_key || 0,
                s = i[e].modal !== t && i[e].modal.useAsModal,
                n = s ? i.winWAll : i.winW,
                d = !1;
            if (i[e].lastScrollBarWidth = i.scrollBarWidth, i[e].redraw = i[e].redraw === t ? {} : i[e].redraw, i[e].module = i[e].module === t ? {} : i[e].module, i[e].canv = i[e].canv === t ? {} : i[e].canv, i[e].content = i[e].content === t ? {} : i[e].content, i[e].drawUpdates = {
                    c: {},
                    cpar: {},
                    canv: {}
                }, "carousel" == i[e].sliderType ? i[e].module.margins = {
                    top: parseInt(i[e].carousel.padding_top || 0, 0),
                    bottom: parseInt(i[e].carousel.padding_bottom || 0, 0)
                } : i[e].module.margins = {
                    top: 0,
                    bottom: 0
                }, i[e].module.paddings === t && (i[e].module.paddings = {
                    top: parseInt(i[e].cpar.css("paddingTop"), 0) || 0,
                    bottom: parseInt(i[e].cpar.css("paddingBottom"), 0) || 0
                }), i[e].blockSpacing !== t ? (i[e].block = {
                    bottom: i[e].blockSpacing.bottom !== t ? parseInt(i[e].blockSpacing.bottom[i[e].level], 0) : 0,
                    top: i[e].blockSpacing.top !== t ? parseInt(i[e].blockSpacing.top[i[e].level], 0) : 0,
                    left: i[e].blockSpacing.left !== t ? parseInt(i[e].blockSpacing.left[i[e].level], 0) : 0,
                    right: i[e].blockSpacing.right !== t ? parseInt(i[e].blockSpacing.right[i[e].level], 0) : 0
                }, i[e].block.hor = i[e].block.left + i[e].block.right, i[e].block.ver = i[e].block.top + i[e].block.bottom) : i[e].block === t && (i[e].block = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    hor: 0,
                    ver: 0
                }), i[e].blockSpacing !== t) {
                var l = {
                        paddingLeft: i[e].block.left,
                        paddingRight: i[e].block.right,
                        marginTop: i[e].block.top,
                        marginBottom: i[e].block.bottom
                    },
                    c = JSON.stringify(l);
                l !== i[e].emptyObject && c !== i[e].caches.setsizeBLOCKOBJ && (tpGS.gsap.set(i[e].blockSpacing.block, l), i[e].caches.setsizeBLOCKOBJ = c, d = !0)
            }
            if (i[e].levelForced = i[e].level = i.getResponsiveLevel(e), i[e].rowHeights = i.getRowHeights(e), i[e].aratio = i[e].gridheight[i[e].level] / i[e].gridwidth[i[e].level], i[e].module.width = "auto" === i[e].sliderLayout || 1 == i[e].disableForceFullWidth ? i[e].cpar.width() : n - i[e].block.hor, i[e].outNavDims = i.getOuterNavDimension(e), i[e].canv.width = i[e].module.width - i[e].outNavDims.horizontal - (s ? i.scrollBarWidth : 0), s && "auto" === i[e].sliderLayout && (i[e].canv.width = Math.min(i[e].gridwidth[i[e].level], n)), "fullscreen" === i[e].sliderLayout || i[e].infullscreenmode) {
                var p = i.getWinH(e) - i.getFullscreenOffsets(e);
                i[e].canv.height = Math.max(i[e].rowHeights.cur, Math.max(p - i[e].outNavDims.vertical, i[e].minHeight)), o !== r && (i[e].currentSlideHeight = Math.max(i[e].rowHeights.last, Math.max(p - i[e].outNavDims.vertical, i[e].minHeight)), i[e].redraw.maxHeightOld = !0), i[e].drawUpdates.c.height = "100%"
            } else i[e].canv.height = i[e].keepBPHeight ? i[e].gridheight[i[e].level] : Math.round(i[e].canv.width * i[e].aratio), i[e].canv.height = i[e].autoHeight ? i[e].canv.height : Math.min(i[e].canv.height, i[e].gridheight[i[e].level]), i[e].canv.height = Math.max(Math.max(i[e].rowHeights.cur, i[e].canv.height), i[e].minHeight), i[e].drawUpdates.c.height = i[e].canv.height;
            i[e].module.height = i[e].canv.height, "fullwidth" != i[e].sliderLayout || i[e].autoHeight || (i[e].drawUpdates.c.maxHeight = 0 != i[e].maxHeight ? Math.min(i[e].canv.height, i[e].maxHeight) : i[e].canv.height), i[e].CM = i.getSizeMultpilicator(e, i[e].enableUpscaling, {
                width: i[e].canv.width,
                height: i[e].canv.height
            }), i[e].content.width = i[e].gridwidth[i[e].level] * i[e].CM.w, i[e].content.height = Math.round(Math.max(i[e].rowHeights.cur, i[e].gridheight[i[e].level] * i[e].CM.h));
            var g = i[e].module.margins.top + i[e].module.margins.bottom + i[e].outNavDims.vertical + i[e].canv.height + i[e].module.paddings.top + i[e].module.paddings.bottom;
            i[e].drawUpdates.cpar.height = g, i[e].drawUpdates.cpar.width = "auto" === i[e].sliderLayout ? "auto" : i[e].module.width, "auto" === i[e].sliderLayout || "fullscreen" === i[e].sliderLayout && !0 === i[e].disableForceFullWidth || i[e].rsFullWidthWrap === t ? "fullscreen" == i[e].sliderLayout && 1 == i[e].disableForceFullWidth && (i[e].drawUpdates.cpar.left = 0) : i[e].drawUpdates.cpar.left = 0 - Math.ceil(i[e].rsFullWidthWrap.offset().left - (i[e].outNavDims.left + i[e].block.left)), i[e].sbtimeline.set && i[e].sbtimeline.fixed ? (i[e].sbtimeline.extended === t && i.updateFixedScrollTimes(e), i[e].forcerHeight = 2 * g + i[e].sbtimeline.extended) : i[e].forcerHeight = g, i[e].forcerHeight !== i[e].caches.setsizeForcerHeight && i[e].forcer !== t && (i[e].caches.setsizeForcerHeight = i[e].forcerHeight, d = !0, i[e].redraw.forcer = !0), i[e].drawUpdates.c.width = i[e].canv.width, "auto" === i[e].sliderLayout && (i[e].drawUpdates.c.left = i[e].outNavDims.left), i[e].drawUpdates.c !== i[e].emptyObject && JSON.stringify(i[e].drawUpdates.c) !== i[e].caches.setsizeCOBJ && (i[e].caches.setsizeCOBJ = JSON.stringify(i[e].drawUpdates.c), d = !0, i[e].redraw.c = !0), i[e].drawUpdates.cpar !== i[e].emptyObject && JSON.stringify(i[e].drawUpdates.cpar) !== i[e].caches.setsizeCPAROBJ && (i[e].caches.setsizeCPAROBJ = JSON.stringify(i[e].drawUpdates.cpar), d = !0, i[e].redraw.cpar = !0), s && "auto" === i[e].sliderLayout && i[e].caches.canWidth !== i[e].canv.width && (i[e].caches.canWidth = i[e].canv.width, d = !0, i[e].redraw.modalcanvas = !0), i[e].slayers && i[e].slayers.length > 0 && i[e].outNavDims.left !== i[e].caches.outNavDimsLeft && "fullwidth" != i[e].sliderLayout && "fullscreen" != i[e].sliderLayout && (i[e].caches.outNavDimsLeft = i[e].outNavDims.left, i[e].redraw.slayers = !0), s && i[e].modal.calibration !== t && "middle" === i[e].modal.vertical && (i[e].modal.calibration.top = i.getWinH(e) < g ? "0%" : "50%", i[e].modal.calibration.y = i.getWinH(e) < g ? "0px" : "-50%", "fullwidth" === i[e].sliderLayout && (d = !0, i[e].redraw.modulewrap = !0)), i[e].gridOffsetWidth = (i[e].module.width - i[e].gridwidth[i[e].level]) / 2, i[e].gridOffsetHeight = (i[e].module.height - i[e].content.height) / 2, i[e].caches.curRowsHeight = i[e].currentRowsHeight = i[e].rowHeights.cur, i[e].caches.moduleWidth = i[e].width = i[e].module.width, i[e].caches.moduleHeight = i[e].height = i[e].module.height, i[e].caches.canWidth = i[e].conw = i[e].canv.width, i[e].caches.canHeight = i[e].conh = i[e].canv.height, i[e].bw = i[e].CM.w, i[e].bh = i[e].CM.h, i[e].caches.outNavDimsLeft = i[e].outNavDims.left, window.requestAnimationFrame(function() {
                i[e].redraw.forcer && tpGS.gsap.set(i[e].forcer, {
                    height: i[e].forcerHeight
                }), i[e].redraw.c && tpGS.gsap.set(i[e].c, i[e].drawUpdates.c), i[e].redraw.cpar && tpGS.gsap.set(i[e].cpar, i[e].drawUpdates.cpar), i[e].redraw.modalcanvas && tpGS.gsap.set([i[e].modal.c, i[e].canvas], {
                    width: i[e].canv.width
                }), i[e].redraw.maxHeightOld && (i[e].slides[o].style.maxHeight = i[e].currentSlideHeight !== i[e].canv.height ? i[e].currentSlideHeight + "px" : "none"), i[e].redraw.slayers && tpGS.gsap.set(i[e].slayers, {
                    left: i[e].outNavDims.left
                }), i[e].redraw.modulewrap && tpGS.gsap.set(i[e].modal.c.find("rs-module-wrap"), i[e].modal.calibration), !0 !== i[e].navigation.initialised && "prepared" === a && ("hero" !== i[e].sliderType && i.createNavigation && i[e].navigation.use && !0 !== i[e].navigation.createNavigationDone && i.createNavigation(e), i.resizeThumbsTabs && i.resizeThumbsTabs && i[e].navigation.use && i.resizeThumbsTabs(e)), i[e].rebuildProgressBar && O(e), i[e].redraw = {}
            });
            var u = i[e].inviewport && (i[e].heightInLayers !== t && i[e].module.height !== i[e].heightInLayers || i[e].widthInLayers !== t && i[e].module.width !== i[e].widthInLayers);
            return "ignore" !== a && u && (i[e].heightInLayers = t, i[e].widthInLayers = t, "carousel" !== i[e].sliderType && (i[e].pr_next_key !== t ? i.animateTheLayers({
                slide: i[e].pr_next_key,
                id: e,
                mode: "rebuild",
                caller: "swapSlideProgress_1"
            }) : i[e].pr_processing_key !== t ? i.animateTheLayers({
                slide: i[e].pr_processing_key,
                id: e,
                mode: "rebuild",
                caller: "swapSlideProgress_2"
            }) : i[e].pr_active_key !== t && i.animateTheLayers({
                slide: i[e].pr_active_key,
                id: e,
                mode: "rebuild",
                caller: "swapSlideProgress_3"
            })), d = !0), d && "ignore" !== a && i.requestLayerUpdates(e, "enterstage"), i[e].module.height !== i[e].module.lastHeight && (i[e].module.lastHeight = i[e].module.height, window.requestAnimationFrame(function() {
                m(e, t, !1)
            })), tpGS.gsap.delayedCall(.1, function() {
                i[e].lastScrollBarWidth !== i.scrollBarWidth ? (i.updateDims(e, "ignore"), m(e)) : i.isModalOpen || i.scrollBarWidth === window.innerWidth - document.documentElement.clientWidth || i.rAfScrollbar === t && (i.rAfScrollbar = requestAnimationFrame(function() {
                    i.rAfScrollbar = t, i.getWindowDimension(e, !1)
                }))
            }), d
        },
        getSlideIndex: function(e, t) {
            var a = !1;
            for (var r in i[e].slides) {
                if (!i[e].slides.hasOwnProperty(r) || !1 !== a) continue;
                a = i.gA(i[e].slides[r], "key") === t ? r : a
            }
            return !1 === a ? 0 : a
        },
        loadUpcomingContent: function(e) {
            if ("smart" == i[e].lazyType) {
                var t = [],
                    a = parseInt(i.getSlideIndex(e, i.gA(i[e].pr_next_slide[0], "key")), 0),
                    r = a - 1 < 0 ? i[e].realslideamount - 1 : a - 1,
                    o = a + 1 == i[e].realslideamount ? 0 : a + 1;
                r !== a && t.push(i[e].slides[r]), o !== a && t.push(i[e].slides[o]), t.length > 0 && (i.loadImages(t, e, 2), i.waitForCurrentImages(t, e, function() {}))
            }
        },
        getFullscreenOffsets: function(a) {
            var r = 0;
            if (i[a].fullScreenOffsetContainer != t) {
                var o = ("" + i[a].fullScreenOffsetContainer).split(",");
                for (var s in o) o.hasOwnProperty(s) && (r += e(o[s]).outerHeight(!0) || 0)
            }
            return i[a].fullScreenOffset != t && (!i.isNumeric(i[a].fullScreenOffset) && i[a].fullScreenOffset.split("%").length > 1 ? r += i.getWinH(a) * parseInt(i[a].fullScreenOffset, 0) / 100 : i.isNumeric(parseInt(i[a].fullScreenOffset, 0)) && (r += parseInt(i[a].fullScreenOffset, 0) || 0)), i[a].fullScreenOffsetResult = r, r
        },
        unToggleState: function(e) {
            if (e !== t)
                for (var i = 0; i < e.length; i++) try {
                    document.getElementById(e[i]).classList.remove("rs-tc-active")
                } catch (e) {}
        },
        toggleState: function(e) {
            if (e !== t)
                for (var i = 0; i < e.length; i++) try {
                    document.getElementById(e[i]).classList.add("rs-tc-active")
                } catch (e) {}
        },
        swaptoggleState: function(e) {
            if (e != t && e.length > 0)
                for (var a = 0; a < e.length; a++) {
                    var r = document.getElementById(e[a]);
                    if (i.gA(r, "toggletimestamp") !== t && (new Date).getTime() - i.gA(r, "toggletimestamp") < 250) return;
                    i.sA(r, "toggletimestamp", (new Date).getTime()), null !== r && (r.className.indexOf("rs-tc-active") >= 0 ? r.classList.remove("rs-tc-active") : r.classList.add("rs-tc-active"))
                }
        },
        lastToggleState: function(e) {
            var i;
            if (e !== t)
                for (var a = 0; a < e.length; a++) {
                    var r = document.getElementById(e[a]);
                    i = !0 === i || null !== r && r.className.indexOf("rs-tc-active") >= 0 || i
                }
            return i
        },
        revCheckIDS: function(a, r) {
            if (i.gA(r, "idcheck") === t) {
                var o = r.id,
                    s = e.inArray(r.id, window.RSANYID),
                    n = -1; - 1 !== s && (n = e.inArray(r.id, i[a].anyid), window.RSANYID_sliderID[s] === a && -1 === n || (r.id = r.id + "_" + Math.round(9999 * Math.random()), console.log("Warning - ID:" + o + " exists already. New Runtime ID:" + r.id), s = n = -1)), -1 === n && i[a].anyid.push(r.id), -1 === s && (window.RSANYID.push(r.id), window.RSANYID_sliderID.push(a))
            }
            return i.sA(r, "idcheck", !0), r.id
        },
        buildSpinner: function(i, a, r, o) {
            var s;
            if ("off" !== a) {
                o = o === t ? "" : o, r = r === t ? "#ffffff" : r;
                var n = parseInt(a.replace("spinner", ""), 10);
                if (isNaN(n) || n < 6) {
                    var d = 'style="background-color:' + r + '"',
                        l = o === t || 3 !== n && 4 != n ? "" : d;
                    s = e("<rs-loader " + (o === t || 1 !== n && 2 != n ? "" : d) + ' class="' + a + " " + o + '"><div ' + l + ' class="dot1"></div><div ' + l + ' class="dot2"></div><div ' + l + ' class="bounce1"></div><div ' + l + ' class="bounce2"></div><div ' + l + ' class="bounce3"></div></rs-loader>')
                } else {
                    var c, p = '<div class="rs-spinner-inner"';
                    if (7 === n) - 1 !== r.search("#") ? (c = r.replace("#", ""), c = "rgba(" + parseInt(c.substring(0, 2), 16) + ", " + parseInt(c.substring(2, 4), 16) + ", " + parseInt(c.substring(4, 6), 16) + ", ") : -1 !== r.search("rgb") && (c = r.substring(r.indexOf("(") + 1, r.lastIndexOf(")")).split(",")).length > 2 && (c = "rgba(" + c[0].trim() + ", " + c[1].trim() + ", " + c[2].trim() + ", "), c && "string" == typeof c && (p += ' style="border-top-color: ' + c + "0.65); border-bottom-color: " + c + "0.15); border-left-color: " + c + "0.65); border-right-color: " + c + '0.15)"');
                    else 12 === n && (p += ' style="background:' + r + '"');
                    p += ">";
                    for (var g = [10, 0, 4, 2, 5, 9, 0, 4, 4, 2][n - 6], u = 0; u < g; u++) u > 0 && (p += " "), p += '<span style="background:' + r + '"></span>';
                    s = e('<rs-loader class="' + a + " " + o + '">' + (p += "</div>") + "</div></rs-loader>")
                }
                return s
            }
        },
        addStaticLayerTo: function(e, t, a) {
            if (i[e].slayers.length < 2) {
                var r = document.createElement("rs-static-layers");
                r.className = "rs-stl-" + t, r.appendChild(a[0]), i[e].c[0].appendChild(r), i[e].slayers.push(r)
            } else i[e].slayers[1].appendChild(a[0])
        }
    });
    var a = i.is_mobile(),
        r = (i.is_android(), function() {
            return i.isIE11() ? function(e, t) {
                return e.querySelectorAll(t)
            } : function(e, t) {
                return e.getElementsByTagName(t)
            }
        }),
        o = function(e) {
            i[e].responsiveLevels = i.revToResp(i[e].responsiveLevels, i[e].rle), i[e].visibilityLevels = i.revToResp(i[e].visibilityLevels, i[e].rle), i[e].responsiveLevels[0] = 9999, i[e].rle = i[e].responsiveLevels.length || 1, i[e].gridwidth = i.revToResp(i[e].gridwidth, i[e].rle), i[e].gridheight = i.revToResp(i[e].gridheight, i[e].rle), i[e].editorheight !== t && (i[e].editorheight = i.revToResp(i[e].editorheight, i[e].rle)), i.updateDims(e)
        },
        s = function(t, i) {
            var a = [];
            return e.each(t, function(e, t) {
                e != i && a.push(t)
            }), a
        },
        n = function(t, a, r) {
            i[r].c.find(t).each(function() {
                var t = e(this);
                t.data("key") === a && t.remove()
            })
        },
        d = function(e, a) {
            if (i["rsfont_" + e] == t && (i["rsfont_" + e] = document.createElement("span"), i["rsfont_" + e].innerHTML = Array(100).join("wi"), i["rsfont_" + e].style.cssText = ["position:absolute", "width:auto", "font-size:128px", "left:-99999px"].join(" !important;"), i["rsfont_" + e].style.fontFamily = e, document.body.appendChild(i["rsfont_" + e])), a === t) return i["rsfont_" + e].clientWidth;
            document.body.removeChild(i["rsfont_" + e])
        },
        l = function(t, i) {
            var a = 0;
            return t.find(i).each(function() {
                var t = e(this);
                !t.hasClass("tp-forcenotvisible") && a < t.outerWidth() && (a = t.outerWidth())
            }), a
        },
        c = function(r) {
            if (r === t || i[r] === t || i[r].c === t) return !1;
            if (i[r].cpar !== t && i[r].cpar.data("aimg") != t && ("enabled" == i[r].cpar.data("aie8") && i.isIE(8) || "enabled" == i[r].cpar.data("amobile") && a)) i[r].c.html('<img class="tp-slider-alternative-image" src="' + i[r].cpar.data("aimg") + '">');
            else {
                window._rs_firefox13 = !1, window._rs_firefox = i.isFirefox(), window._rs_ie = window._rs_ie === t ? !e.support.opacity : window._rs_ie, window._rs_ie9 = window._rs_ie9 === t ? 9 == document.documentMode : window._rs_ie9;
                var o = e.fn.jquery.split("."),
                    s = parseFloat(o[0]),
                    n = parseFloat(o[1]);
                1 == s && n < 7 && i[r].c.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + o + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), s > 1 && (window._rs_ie = !1), i[r].realslideamount = i[r].slideamount = 0;
                var d = i.getByTag(i[r].canvas[0], "RS-SLIDE"),
                    l = [];
                for (var c in i[r].notInNav = [], i[r].slides = [], d) d.hasOwnProperty(c) && ("on" == i.gA(d[c], "hsom") && a ? l.push(d[c]) : (i.gA(d[c], "invisible") || 1 == i.gA(d[c], "invisible") ? i[r].notInNav.push(d[c]) : (i[r].slides.push(d[c]), i[r].slideamount++), i[r].realslideamount++, i.sA(d[c], "originalindex", i[r].realslideamount), i.sA(d[c], "origindex", i[r].realslideamount - 1)));
                for (c in l) l.hasOwnProperty(c) && l[c].remove();
                for (c in i[r].notInNav) i[r].notInNav.hasOwnProperty(c) && (i.sA(i[r].notInNav[c], "not_in_nav", !0), i[r].canvas[0].appendChild(i[r].notInNav[c]));
                if (i[r].canvas.css({
                        visibility: "visible"
                    }), i[r].slayers = i[r].c.find("rs-static-layers"), i[r].slayers.length > 0 && i.sA(i[r].slayers[0], "key", "staticlayers"), !0 === i[r].modal.useAsModal && (i[r].cpar.wrap('<rs-modal id="' + i[r].c[0].id + '_modal"></rs-modal>'), i[r].modal.c = e(i.closestNode(i[r].cpar[0], "RS-MODAL")), i[r].modal.c.appendTo(e("body")), i[r].modal !== t && i[r].modal.alias !== t && i.revModal(r, {
                        mode: "init"
                    })), 1 == i[r].waitForInit || 1 == i[r].modal.useAsModal) return i.RS_toInit !== t && (i.RS_toInit[r] = !0), i[r].c.trigger("revolution.slide.waitingforinit"), void(i[r].waitingForInit = !0);
                window.requestAnimationFrame(function() {
                    u(r)
                }), i[r].initEnded = !0
            }
        },
        p = function() {
            e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function() {
                i.window.trigger("resize")
            }, 200)
        },
        g = function(e, a, r) {
            return i.gA(e, "lazyload") !== t ? i.gA(e, "lazyload") : i[r].lazyloaddata !== t && i[r].lazyloaddata.length > 0 && i.gA(e, i[r].lazyloaddata) !== t ? i.gA(e, i[r].lazyloaddata) : i.gA(e, "lazy-src") !== t ? i.gA(e, "lazy-src") : i.gA(e, "lazy-wpfc-original-src") !== t ? i.gA(e, "lazy-wpfc-original-src") : i.gA(e, "lazy") !== t ? i.gA(e, "lazy") : a
        },
        u = function(r) {
            if (i[r] !== t) {
                if (i[r].sliderisrunning = !0, !0 !== i[r].noDetach && i[r].c.detach(), i[r].shuffle) {
                    for (var o = i[r].canvas.find("rs-slide:first-child"), s = i.gA(o[0], "firstanim"), n = 0; n < i[r].slideamount; n++) i[r].canvas.find("rs-slide:eq(" + Math.round(Math.random() * i[r].slideamount) + ")").prependTo(i[r].canvas);
                    i.sA(i[r].canvas.find("rs-slide:first-child")[0], "firstanim", s)
                }
                i[r].slides = i.getByTag(i[r].canvas[0], "RS-SLIDE"), i[r].thumbs = new Array(i[r].slides.length), i[r].slots = 1, i[r].firststart = 1, i[r].loadqueue = [], i[r].syncload = 0;
                var d = 0,
                    l = "carousel" === i[r].sliderType && i[r].carousel.border_radius !== t ? parseInt(i[r].carousel.border_radius, 0) : 0;
                for (var c in i[r].slides)
                    if (i[r].slides.hasOwnProperty(c) && "length" !== c) {
                        var u = i[r].slides[c],
                            h = i.getByTag(u, "IMG")[0];
                        i.gA(u, "key") === t && i.sA(u, "key", "rs-" + Math.round(999999 * Math.random()));
                        var v = {
                            params: Array(12),
                            id: i.gA(u, "key"),
                            src: i.gA(u, "thumb") !== t ? i.gA(u, "thumb") : g(h, h !== t ? h.src : t, r)
                        };
                        i.gA(u, "title") === t && i.sA(u, "title", ""), i.gA(u, "description") === t && i.sA(u, "description", ""), v.params[0] = {
                            from: RegExp("\\{\\{title\\}\\}", "g"),
                            to: i.gA(u, "title")
                        }, v.params[1] = {
                            from: RegExp("\\{\\{description\\}\\}", "g"),
                            to: i.gA(u, "description")
                        };
                        for (var y = 1; y <= 10; y++) i.gA(u, "p" + y) !== t ? v.params[y + 1] = {
                            from: RegExp("\\{\\{param" + y + "\\}\\}", "g"),
                            to: i.gA(u, "p" + y)
                        } : v.params[y + 1] = {
                            from: RegExp("\\{\\{param" + y + "\\}\\}", "g"),
                            to: ""
                        };
                        if (i[r].thumbs[d] = e.extend({}, !0, v), l > 0 && tpGS.gsap.set(u, {
                                borderRadius: l + "px"
                            }), i.gA(u, "link") != t || i.gA(u, "linktoslide") !== t) {
                            var b = i.gA(u, "link") !== t ? i.gA(u, "link") : "slide",
                                w = "slide" != b ? "no" : i.gA(u, "linktoslide"),
                                _ = i.gA(u, "seoz");
                            if (w != t && "no" != w && "next" != w && "prev" != w)
                                for (var x in i[r].slides) i[r].slides.hasOwnProperty(x) && parseInt(i.gA(i[r].slides[x], "origindex"), 0) + 1 == i.gA(u, "linktoslide") && (w = i.gA(i[r].slides[x], "key"));
                            e(u).prepend('<rs-layer class="rs-layer slidelink" id="rs_slidelink_' + Math.round(1e5 * Math.random()) + '" data-zindex="' + ("back" === _ ? 0 : "front" === _ ? 95 : _ !== t ? parseInt(_, 0) : 100) + '" dataxy="x:c;y:c" data-dim="w:100%;h:100%" data-basealign="slide"' + ("no" == w ? "slide" == b || a ? "" : "  data-actions='o:click;a:simplelink;target:" + (i.gA(u, "target") || "_self") + ";url:" + b + ";'" : "  data-actions='" + ("scroll_under" === w ? "o:click;a:scrollbelow;offset:100px;" : "prev" === w ? "o:click;a:jumptoslide;slide:prev;d:0.2;" : "next" === w ? "o:click;a:jumptoslide;slide:next;d:0.2;" : "o:click;a:jumptoslide;slide:" + w + ";d:0.2;") + "'") + " data-frame_1='e:power3.inOut;st:100;sp:100' data-frame_999='e:power3.inOut;o:0;st:w;sp:100'>" + (a ? "<a " + ("slide" != b ? ("_blank" === i.gA(u, "target") ? 'rel="noopener" ' : "") + 'target="' + (i.gA(u, "target") || "_self") + '" href="' + b + '"' : "") + "><span></span></a>" : "") + "</rs-layer>")
                        }
                        d++
                    }
                if (i[r].simplifyAll && (i.isIE(8) || i.iOSVersion()) && (i[r].c.find(".rs-layer").each(function() {
                        var t = e(this);
                        t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
                    }), i[r].c.find("rs-slide").each(function() {
                        var t = e(this);
                        t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1), (t.find(".rev-slidebg") || t.find(">img").first()).data("panzoom", null)
                    })), window._rs_desktop = window._rs_desktop === t ? !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i) : window._rs_desktop, i[r].autoHeight = "fullscreen" == i[r].sliderLayout || i[r].autoHeight, "fullwidth" != i[r].sliderLayout || i[r].autoHeight || i[r].c.css({
                        maxHeight: i[r].gridheight[i[r].level] + "px"
                    }), "auto" == i[r].sliderLayout || null !== i.closestNode(i[r].c[0], "RS-FULLWIDTH-WRAP") || "fullscreen" === i[r].sliderLayout && 1 == i[r].disableForceFullWidth) i[r].topc = i[r].cpar;
                else {
                    var S = i[r].cpar[0].style.marginTop,
                        k = i[r].cpar[0].style.marginBottom;
                    S = S === t || "" === S ? "" : "margin-top:" + S + ";", k = k === t || "" === k ? "" : "margin-bottom:" + k + ";", i[r].rsFullWidthWrap = i[r].topc = e('<rs-fullwidth-wrap id="' + i[r].c[0].id + '_forcefullwidth" style="' + S + k + '"></rs-fullwidth-wrap>'), i[r].forcer = e('<rs-fw-forcer style="height:' + (i[r].forcerHeight === t ? i[r].cpar.height() : i[r].forcerHeight) + 'px"></rs-fw-forcer>'), i[r].topc.append(i[r].forcer), i[r].topc.insertBefore(i[r].cpar), i[r].cpar.detach(), i[r].cpar.css({
                        marginTop: "0px",
                        marginBottom: "0px",
                        position: "absolute"
                    }), i[r].cpar.prependTo(i[r].topc)
                }
                if (i[r].forceOverflow && i[r].topc[0].classList.add("rs-forceoverflow"), "carousel" === i[r].sliderType && !0 !== i[r].overflowHidden && i[r].c.css({
                        overflow: "visible"
                    }), 0 !== i[r].maxHeight && tpGS.gsap.set([i[r].cpar, i[r].c, i[r].topc], {
                        maxHeight: i[r].maxHeight + "px"
                    }), i[r].fixedOnTop && tpGS.gsap.set(i[r].blockSpacing !== t && i[r].blockSpacing.block !== t ? i[r].blockSpacing.block : i[r].topc, {
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        pointerEvents: "none",
                        zIndex: 5e3
                    }), i[r].shadow !== t && i[r].shadow > 0 && i[r].cpar.addClass("tp-shadow" + i[r].shadow).append('<div class="tp-shadowcover" style="background-color:' + i[r].cpar.css("backgroundColor") + ";background-image:" + i[r].cpar.css("backgroundImage") + '"></div>'), i.updateDims(r, "prepared"), i.observeWraps === t && (i.observeWraps = new i.wrapObserver.init(function(e, i) {
                        m(i, t, !0)
                    })), !i[r].c.hasClass("revslider-initialised")) {
                    i[r].c[0].classList.add("revslider-initialised"), i[r].c[0].id = i[r].c[0].id === t ? "revslider-" + Math.round(1e3 * Math.random() + 5) : i[r].c[0].id, i.revCheckIDS(r, i[r].c[0]), i[r].origcd = parseInt(i[r].duration, 0), i[r].scrolleffect._L = [], i[r].sbas = i[r].sbas === t ? {} : i[r].sbas, i[r].layers = i[r].layers || {}, i[r].sortedLayers = i[r].sortedLayers || {};
                    var L = i[r].c[0].querySelectorAll("rs-layer, rs-row, rs-column, rs-group,  rs-bgvideo, .rs-layer");
                    for (var R in L)
                        if (L.hasOwnProperty(R)) {
                            var O, I, T = e(L[R]),
                                C = T.data();
                            if (C.startclasses = L[R].className, C.startclasses = C.startclasses === t || null === C.startclasses ? "" : C.startclasses, C.animationonscroll = !!i[r].sbtimeline.set && i[r].sbtimeline.layers, C.animationonscroll = !0 === C.animationonscroll || "true" == C.animationonscroll, C.filteronscroll = !!i[r].scrolleffect.set && i[r].scrolleffect.layers, C.pxundermask = C.startclasses.indexOf("rs-pxmask") >= 0 && "off" !== i[r].parallax.type && C.startclasses.indexOf("rs-pxl-") >= 0, C.noPevents = C.startclasses.indexOf("rs-noevents") >= 0, C.sba)
                                for (var y in O = C.sba.split(";")) O.hasOwnProperty(y) && ("t" == (I = O[y].split(":"))[0] && (C.animationonscroll = I[1], "false" == I[1] && (C.animOnScrollForceDisable = !0)), "e" == I[0] && (C.filteronscroll = I[1]), "so" == I[0] && (C.scrollBasedOffset = parseInt(I[1]) / 1e3));
                            if ("true" != C.animationonscroll && 1 != C.animationonscroll || (C.startclasses += " rs-sba", T[0].className += " rs-sba"), C.startclasses.indexOf("rs-layer-static") >= 0 && i.handleStaticLayers && i.handleStaticLayers(T, r), "RS-BGVIDEO" !== T[0].tagName) {
                                if (T[0].classList.add("rs-layer"), "column" === C.type && (C.columnwidth = "33.33%", C.verticalalign = "top", C.column !== t))
                                    for (var A in O = C.column.split(";")) O.hasOwnProperty(A) && ("w" === (I = O[A].split(":"))[0] && (C.columnwidth = I[1]), "a" === I[0] && (C.verticalalign = I[1]));
                                var M = C.startclasses.indexOf("slidelink") >= 0 ? "z-index:" + C.zindex + ";width:100% !important;height:100% !important;" : "",
                                    D = "column" !== C.type ? "" : C.verticalalign === t ? " vertical-align:top;" : " vertical-align:" + C.verticalalign + ";",
                                    z = "row" === C.type || "column" === C.type ? "position:relative;" : "position:absolute;",
                                    G = "",
                                    N = "row" === C.type ? "rs-row-wrap" : "column" === C.type ? "rs-column-wrap" : "group" === C.type ? "rs-group-wrap" : "rs-layer-wrap",
                                    H = "",
                                    j = "",
                                    F = (C.noPevents, ";pointer-events:none");
                                "row" === C.type || "column" === C.type || "group" === C.type ? (T[0].classList.remove("tp-resizeme"), "column" === C.type && (C.width = "auto", T[0].group = "row", tpGS.gsap.set(T, {
                                    width: "auto"
                                }), C.filteronscroll = !1)) : (H = "display:" + ("inline-block" === T[0].style.display ? "inline-block" : "block") + ";", null !== i.closestNode(T[0], "RS-COLUMN") ? (T[0].group = "column", C.filteronscroll = !1) : null !== i.closestNode(T[0], "RS-GROUP-WRAP") && (T[0].group = "group", C.filteronscroll = !1)), C.wrpcls !== t && (G = G + " " + C.wrpcls), C.wrpid !== t && (j = 'id="' + C.wrpid + '"'), T.wrap("<" + N + " " + j + ' class="rs-parallax-wrap ' + G + '" style="' + D + " " + M + z + H + F + '"><rs-loop-wrap style="' + M + z + H + '"><rs-mask-wrap style="' + M + z + H + '">' + (C.pxundermask ? "<rs-px-mask></rs-px-mask>" : "") + "</rs-mask-wrap></rs-loop-wrap></" + N + ">"), !0 !== C.filteronscroll && "true" != C.filteronscroll || i[r].scrolleffect._L.push(T.parent()), T[0].id = T[0].id === t ? "layer-" + Math.round(999999999 * Math.random()) : T[0].id, i.revCheckIDS(r, T[0]), C.pxundermask ? i[r]._Lshortcuts[T[0].id] = {
                                    p: e(T[0].parentNode.parentNode.parentNode.parentNode),
                                    lp: e(T[0].parentNode.parentNode.parentNode),
                                    m: e(T[0].parentNode.parentNode)
                                } : i[r]._Lshortcuts[T[0].id] = {
                                    p: e(T[0].parentNode.parentNode.parentNode),
                                    lp: e(T[0].parentNode.parentNode),
                                    m: e(T[0].parentNode)
                                }, "column" === C.type && i[r]._Lshortcuts[T[0].id].p.append('<rs-cbg-mask-wrap><rs-column-bg id="' + T[0].id + '_rs_cbg"></rs-column-bg></rs-cbg-mask-wrap>'), "text" === C.type && i.getByTag(T[0], "IFRAME").length > 0 && (i[r].slideHasIframe = !0, T[0].classList.add("rs-ii-o")), i[r].BUG_safari_clipPath && "true" != C.animationonscroll && 1 != C.animationonscroll && T[0].classList.add("rs-pelock"), T[0].dataset.staticz !== t && "row" !== C.type && "row" !== T[0].group && "column" !== T[0].group && i.addStaticLayerTo(r, T[0].dataset.staticz, i[r]._Lshortcuts[T[0].id].p)
                            }
                            i.gA(T[0], "actions") && i.checkActions && i.checkActions(T, r, i[r]), !i.checkVideoApis || window.rs_addedvim && window.rs_addedyt || i[r].youtubeapineeded && i[r].vimeoapineeded || i.checkVideoApis(T, r)
                        }
                    i.checkActions && i.checkActions(t, r), i[r].c[0].addEventListener("mousedown", function() {
                        if (!0 !== i[r].onceClicked && (i[r].onceClicked = !0, !0 !== i[r].onceVideoPlayed && i[r].activeRSSlide !== t && i[r].slides !== t && i[r].slides[i[r].activeRSSlide] !== t)) {
                            var a = e(i[r].slides[i[r].activeRSSlide]).find("rs-bgvideo");
                            a !== t && null !== a && a.length > 0 && i.playVideo(a, r)
                        }
                    }), i[r].c[0].addEventListener("mouseenter", function() {
                        i[r].c.trigger("tp-mouseenter"), i[r].overcontainer = !0
                    }, {
                        passive: !0
                    }), i[r].c[0].addEventListener("mouseover", function() {
                        i[r].c.trigger("tp-mouseover"), i[r].overcontainer = !0
                    }, {
                        passive: !0
                    }), i[r].c[0].addEventListener("mouseleave", function() {
                        i[r].c.trigger("tp-mouseleft"), i[r].overcontainer = !1
                    }, {
                        passive: !0
                    }), i[r].c.find(".rs-layer video").each(function(t) {
                        var i = e(this);
                        i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({
                            display: "none"
                        })
                    }), i[r].rs_static_layer = i.getByTag(i[r].c[0], "RS-STATIC-LAYERS"), i.preLoadAudio && i[r].rs_static_layer.length > 0 && i.preLoadAudio(e(i[r].rs_static_layer), r, 1), i[r].rs_static_layer.length > 0 && (i.loadImages(i[r].rs_static_layer[0], r, 0, !0), i.waitForCurrentImages(i[r].rs_static_layer[0], r, function() {
                        i[r] !== t && i[r].c.find("rs-static-layers img").each(function() {
                            this.src = i.getLoadObj(r, i.gA(this, "src") != t ? i.gA(this, "src") : this.src).src
                        })
                    })), i[r].rowzones = [], i[r].rowzonesHeights = [], i[r].middleZones = [];
                    let a = i.deepLink(r, B("#")[0]);
                    a !== t && (i[r].startWithSlide = a, i[r].deepLinkListener = !0, window.addEventListener("hashchange", function() {
                        if (!0 !== i[r].ignoreDeeplinkChange) {
                            let e = i.deepLink(r, B("#")[0]);
                            e !== t && i.callingNewSlide(r, e, !0)
                        }
                        i[r].ignoreDeeplinkChange = !1
                    })), i[r].loader = i.buildSpinner(r, i[r].spinner, i[r].spinnerclr), i[r].loaderVisible = !0, i[r].c.append(i[r].loader), f(r), ("off" !== i[r].parallax.type || i[r].scrolleffect.set || i[r].sbtimeline.set) && i.checkForParallax && i.checkForParallax(r), i[r].fallbacks.disableFocusListener || "true" == i[r].fallbacks.disableFocusListener || !0 === i[r].fallbacks.disableFocusListener || (i[r].c.addClass("rev_redraw_on_blurfocus"), P());
                    var W = i[r].viewPort;
                    for (var y in "on" === i[r].navigation.mouseScrollNavigation && (W.enable = !0), i[r].slides)
                        if (i[r].slides.hasOwnProperty(y)) {
                            var V = e(i[r].slides[y]);
                            i[r].rowzones[y] = [], i[r].rowzonesHeights[y] = [], i[r].middleZones[y] = [], V.find("rs-zone").each(function() {
                                i[r].rowzones[y].push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].middleZones[y].push(this)
                            }), (W.enable && i[r].inviewport || !W.enable) && "all" == i[r].lazyType && (i.loadImages(V[0], r, y), i.waitForCurrentImages(V[0], r, function() {}))
                        }
                    i[r].srowzones = [], i[r].smiddleZones = [], i[r].slayers && i[r].slayers.find("rs-zone").each(function() {
                        i[r].srowzones.push(e(this)), this.className.indexOf("rev_row_zone_middle") >= 0 && i[r].smiddleZones.push(this)
                    }), "carousel" === i[r].sliderType && tpGS.gsap.set(i[r].canvas, {
                        scale: 1,
                        perspective: 1200,
                        transformStyle: "flat",
                        opacity: 0
                    }), i[r].c.prependTo(i[r].cpar), e("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", p, {
                        passive: !0
                    }), window.addEventListener("mozfullscreenchange", p, {
                        passive: !0
                    }), window.addEventListener("webkitfullscreenchange", p, {
                        passive: !0
                    }), i.document.on("updateContainerSizes." + i[r].c.attr("id"), function() {
                        if (i[r] !== t) return i[r].c != t && void(i.updateDims(r, "ignore") && window.requestAnimationFrame(function() {
                            i.updateDims(r, "ignore"), i[r].fullScreenMode = i.checkfullscreenEnabled(r), i.lastwindowheight = i.getWinH(r), m(r)
                        }))
                    }), W.presize && (i[r].pr_next_slide = e(i[r].slides[0]), i.loadImages(i[r].pr_next_slide[0], r, 0, !0), i.waitForCurrentImages(i[r].pr_next_slide.find(".tp-layers"), r, function() {
                        i.animateTheLayers && i.animateTheLayers({
                            slide: i[r].pr_next_key,
                            id: r,
                            mode: "preset",
                            caller: "runSlider"
                        })
                    })), ("off" != i[r].parallax.type || i[r].sbtimeline.set || !0 === W.enable) && i.scrollTicker(r), !0 !== W.enable && (i[r].inviewport = !0, i.enterViewPort(r)), i.RS_toInit !== t && (i.RS_toInit[r] = !0), i[r].observeWrap && i.observeWraps && i.wrapObserver.observe(i[r].rsFullWidthWrap !== t ? i[r].rsFullWidthWrap[0] : i[r].cpar[0], r)
                }
            }
        },
        h = function(e, a) {
            i.winW < i[e].hideSliderAtLimit ? (i[e].c.trigger("stoptimer"), !0 !== i[e].sliderIsHidden && (i.sA(i[e].cpar[0], "displaycache", "none" != i[e].cpar.css("display") ? i[e].cpar.css("display") : i.gA(i[e].cpar[0], "displaycache")), i[e].cpar.css({
                display: "none"
            }), i[e].sliderIsHidden = !0)) : (!0 === i[e].sliderIsHidden || i[e].sliderIsHidden === t && i[e].c.is(":hidden")) && a && (i[e].cpar[0].style.display = i.gA(i[e].cpar[0], "displaycache") != t && "none" != i.gA(i[e].cpar[0], "displaycache") ? i.gA(i[e].cpar[0], "displaycache") : "block", i[e].sliderIsHidden = !1, i[e].c.trigger("restarttimer"), window.requestAnimationFrame(function() {
                m(e, !0)
            })), i.hideUnHideNav && i[e].navigation.use && i.hideUnHideNav(e)
        },
        m = function(e, r, o) {
            if (i[e].c === t) return !1;
            if (i[e].dimensionReCheck = {}, i[e].c.trigger("revolution.slide.beforeredraw"), 1 == i[e].infullscreenmode && (i[e].minHeight = i.getWinH(e)), a && (i[e].lastMobileHeight = i.getWinH(e)), o && i.updateDims(e), !i.resizeThumbsTabs || !0 === i.resizeThumbsTabs(e)) {
                if (window.requestAnimationFrame(function() {
                        h(e, !0 !== r), O(e)
                    }), i[e].started) {
                    if ("carousel" == i[e].sliderType)
                        for (var s in i.prepareCarousel(e), i[e].sbgs) i[e].sbgs.hasOwnProperty(s) && i[e].sbgs[s].mDIM !== t && i.updateSlideBGs(e, i[e].sbgs[s].key, i[e].sbgs[s]);
                    else i.updateSlideBGs(e);
                    if ("carousel" === i[e].sliderType && i[e].carCheckconW != i[e].canv.width) {
                        for (var n in clearTimeout(i[e].pcartimer), i[e].sbgs) i[e].sbgs[n].loadobj !== t && i.updateSlideBGs(e, i[e].sbgs[n].key, i[e].sbgs[n]);
                        i[e].pcartimer = setTimeout(function() {
                            i.prepareCarousel(e), i.animateTheLayers({
                                slide: "individual",
                                id: e,
                                mode: "rebuild",
                                caller: "containerResized_1"
                            }), i[e].carCheckconW = i[e].canv.width
                        }, 100), i[e].lastconw = i[e].canv.width
                    }
                    if (i[e].pr_processing_key !== t ? i.animateTheLayers({
                            slide: i[e].pr_processing_key,
                            id: e,
                            mode: "rebuild",
                            caller: "containerResized_2"
                        }) : i[e].pr_active_key !== t && i.animateTheLayers({
                            slide: i[e].pr_active_key,
                            id: e,
                            mode: "rebuild",
                            caller: "containerResized_3"
                        }), "carousel" === i[e].sliderType) {
                        for (var n in i[e].panzoomTLs)
                            if (i[e].panzoomTLs.hasOwnProperty(n)) {
                                var d = i.gA(i[e].panzoomBGs[n][0], "key");
                                i.startPanZoom(i[e].panzoomBGs[n], e, i[e].panzoomTLs[n].progress(), n, i[e].panzoomTLs[n].isActive() ? "play" : "reset", d)
                            }
                    } else i[e].pr_active_bg !== t && i[e].pr_active_bg[0] !== t && v(e, i[e].pr_active_bg, i[e].pr_active_bg[0].dataset.key), i[e].pr_next_bg !== t && i[e].pr_next_bg[0] !== t && v(e, i[e].pr_next_bg, i[e].pr_next_bg[0].dataset.key);
                    clearTimeout(i[e].mNavigTimeout), i.manageNavigation && (i[e].mNavigTimeout = setTimeout(function() {
                        i.manageNavigation(e)
                    }, 20))
                }
                i.prepareCoveredVideo(e)
            }
            i[e].c.trigger("revolution.slide.afterdraw", [{
                id: e
            }])
        },
        v = function(e, a, r) {
            if (i[e].panzoomTLs !== t) {
                var o = i.getSlideIndex(e, r);
                i.startPanZoom(a, e, i[e].panzoomTLs[o] !== t ? i[e].panzoomTLs[o].progress() : 0, o, "play", r)
            }
        },
        f = function(a) {
            !0 !== i[a].noDetach && i[a].canvas.detach();
            var r = i.isFaceBook() ? "visible" : "hidden";
            if (i[a].autoHeight && tpGS.gsap.set([i[a].c, i[a].cpar], {
                    maxHeight: "none"
                }), tpGS.gsap.set(i[a].canvas, i[a].modal !== t && i[a].modal.useAsModal ? {
                    overflow: r,
                    width: "100%",
                    height: "100%"
                } : {
                    overflow: r,
                    width: "100%",
                    height: "100%",
                    maxHeight: i[a].autoHeight ? "none" : i[a].cpar.css("maxHeight")
                }), "carousel" === i[a].sliderType) {
                var o = "margin-top:" + parseInt(i[a].carousel.padding_top || 0, 0) + "px;";
                i[a].canvas.css({
                    overflow: "visible"
                }).wrap('<rs-carousel-wrap style="' + o + '"></rs-carousel-wrap>'), i[a].cpar.prepend("<rs-carousel-space></rs-carousel-space>").append("<rs-carousel-space></rs-carousel-space>"), i.defineCarouselElements(a)
            }
            i[a].startWithSlide = i[a].startWithSlide === t ? t : Math.max(1, (i[a].sliderType, parseInt(i[a].startWithSlide))), i[a].cpar.css({
                overflow: "visible"
            }), i[a].scrolleffect.bgs = [];
            for (var s = 0; s < i[a].slides.length; s++) {
                var n = e(i[a].slides[s]),
                    d = i.gA(n[0], "key"),
                    l = n.find(".rev-slidebg") || n.find(">img"),
                    c = i[a].sbgs[d] = y(l.data(), a),
                    p = n.data("mediafilter");
                if (c.skeyindex = i.getSlideIndex(a, d), c.bgvid = n.find("rs-bgvideo"), l.detach(), c.bgvid.detach(), (i[a].startWithSlide != t && i.gA(i[a].slides[s], "originalindex") == i[a].startWithSlide || i[a].startWithSlide === t && 0 == s) && (i[a].pr_next_key = n.index()), tpGS.gsap.set(n, {
                        width: "100%",
                        height: "100%",
                        overflow: r
                    }), l.wrap('<rs-sbg-px><rs-sbg-wrap data-key="' + d + '"></rs-sbg-wrap></rs-sbg-px>'), c.wrap = e(i.closestNode(l[0], "RS-SBG-WRAP")), c.src = l[0].src, c.lazyload = c.lazyload = g(l[0], t, a), c.slidebgimage = !0, c.loadobj = c.loadobj === t ? {} : c.loadobj, c.mediafilter = p = "none" === p || p === t ? "" : p, c.sbg = document.createElement("rs-sbg"), i[a].overlay !== t && "none" != i[a].overlay.type && i[a].overlay.type != t) {
                    var u = i.createOverlay(a, i[a].overlay.type, i[a].overlay.size, {
                        0: i[a].overlay.colora,
                        1: i[a].overlay.colorb
                    });
                    c.wrap.append('<rs-dotted style="background-image:' + u + '"></rs-dotted>')
                }
                l.data("mediafilter", p), c.canvas = document.createElement("canvas"), c.sbg.appendChild(c.canvas), c.canvas.style.width = "100%", c.canvas.style.height = "100%", c.ctx = c.canvas.getContext("2d"), c.lazyload !== t && (c.sbg.dataset.lazyload = c.lazyload), c.sbg.className = p, c.sbg.src = c.src, c.sbg.dataset.bgcolor = c.bgcolor, c.sbg.style.width = "100%", c.sbg.style.height = "100%", c.key = d, c.wrap[0].dataset.key = d, e(c.sbg).data(c), c.wrap.data(c), c.wrap[0].appendChild(c.sbg);
                var h = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + l.get(0).outerHTML);
                l.replaceWith(h), i.gA(n[0], "sba") === t && i.sA(n[0], "sba", "");
                var m = {},
                    v = i.gA(n[0], "sba").split(";");
                for (var f in v)
                    if (v.hasOwnProperty(f)) {
                        var b = v[f].split(":");
                        switch (b[0]) {
                            case "f":
                                m.f = b[1];
                                break;
                            case "b":
                                m.b = b[1];
                                break;
                            case "g":
                                m.g = b[1];
                                break;
                            case "t":
                                m.s = b[1]
                        }
                    }
                i.sA(n[0], "scroll-based", !!i[a].sbtimeline.set && (m.s !== t && m.s)), c.bgvid.length > 0 && (c.bgvidid = c.bgvid[0].id, c.animateDirection = "idle", c.bgvid.addClass("defaultvid").css({
                    zIndex: 30
                }), p !== t && "" !== p && "none" !== p && c.bgvid.addClass(p), c.bgvid.appendTo(c.wrap), c.parallax != t && (c.bgvid.data("parallax", c.parallax), c.bgvid.data("showcoveronpause", "on"), c.bgvid.data("mediafilter", p)), c.poster = !1, (c.src !== t && -1 == c.src.indexOf("assets/dummy.png") && -1 == c.src.indexOf("assets/transparent.png") || c.lazyload !== t && -1 == c.lazyload.indexOf("assets/transparent.png") && -1 == c.lazyload.indexOf("assets/dummy.png")) && (c.poster = !0), c.bgvid.data("bgvideo", 1), c.bgvid[0].dataset.key = d, i.manageVideoLayer(c.bgvid, a, d), 0 == c.bgvid.find(".rs-fullvideo-cover").length && c.bgvid.append('<div class="rs-fullvideo-cover"></div>')), i[a].scrolleffect.set ? (i[a].scrolleffect.bgs.push({
                    fade: m.f !== t ? m.f : !!i[a].scrolleffect.slide && i[a].scrolleffect.fade,
                    blur: m.b !== t ? m.b : !!i[a].scrolleffect.slide && i[a].scrolleffect.blur,
                    grayscale: m.g !== t ? m.g : !!i[a].scrolleffect.slide && i[a].scrolleffect.grayscale,
                    c: c.wrap.wrap("<rs-sbg-effectwrap></rs-sbg-effectwrap>").parent()
                }), n.prepend(c.wrap.parent().parent())) : n.prepend(c.wrap.parent())
            }
            "carousel" === i[a].sliderType ? (tpGS.gsap.set(i[a].carousel.wrap, {
                opacity: 0
            }), i[a].c[0].appendChild(i[a].carousel.wrap[0])) : i[a].c[0].appendChild(i[a].canvas[0])
        },
        y = function(r, o) {
            r.bg = r.bg === t ? "" : r.bg;
            var s = r.bg.split(";"),
                n = {
                    bgposition: "50% 50%",
                    bgfit: "cover",
                    bgrepeat: "no-repeat",
                    bgcolor: "transparent"
                };
            for (var d in s)
                if (s.hasOwnProperty(d)) {
                    var l = s[d].split(":"),
                        c = l[0],
                        p = l[1],
                        g = "";
                    switch (c) {
                        case "p":
                            g = "bgposition";
                            break;
                        case "f":
                            g = "bgfit";
                            break;
                        case "r":
                            g = "bgrepeat";
                            break;
                        case "c":
                            g = "bgcolor"
                    }
                    g !== t && (n[g] = p)
                }
            return i[o].fallbacks.panZoomDisableOnMobile && a && (n.panzoom = t, n.bgfit = "cover"), e.extend(!0, r, n)
        },
        b = function(e, a, r) {
            if (i[a] !== t) {
                i[a].syncload--;
                var o = i.gA(e, "reference");
                for (var s in i[a].loadqueue) i[a].loadqueue.hasOwnProperty(s) && "loaded" !== i[a].loadqueue[s].progress && o == i[a].loadqueue[s].src && (i[a].loadqueue[s].img = e, i[a].loadqueue[s].progress = r, i[a].loadqueue[s].width = e.width, i[a].loadqueue[s].height = e.height);
                w(a)
            }
        },
        w = function(a) {
            4 != i[a].syncload && i[a].loadqueue && e.each(i[a].loadqueue, function(r, o) {
                if ("prepared" == o.progress && i[a].syncload <= 4) {
                    if (i[a].syncload++, "img" == o.type) {
                        var s = new Image;
                        i.sA(s, "reference", o.src), /^([\w]+\:)?\/\//.test(o.src) && -1 === o.src.indexOf(location.host) && "" !== i[a].imgCrossOrigin && i[a].imgCrossOrigin !== t && (s.crossOrigin = i[a].imgCrossOrigin), s.onload = function() {
                            b(this, a, "loaded"), o.error = !1
                        }, s.onerror = function() {
                            b(this, a, "failed"), o.error = !0
                        }, s.src = o.src, o.starttoload = e.now()
                    } else e.get(o.src, function(e) {
                        o.innerHTML = (new XMLSerializer).serializeToString(e.documentElement), o.progress = "loaded", i[a].syncload--, w(a)
                    }).fail(function() {
                        o.progress = "failed", i[a].syncload--, w(a)
                    });
                    o.progress = "inload"
                }
            })
        },
        _ = function(e, t) {
            return console.log("Static Image " + e + "  Could not be loaded in time. Error Exists:" + t), !0
        },
        x = function(t, a) {
            if (e.now() - i[a][t + "starttime"] > 5e3 && 1 != i[a][t + "warning"]) {
                i[a][t + "warning"] = !0;
                var r = t + " Api Could not be loaded !";
                "https:" === location.protocol && (r += " Please Check and Renew SSL Certificate !"), console.error(r), i[a].c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + r + "</strong></div>")
            }
            return !0
        },
        S = function(a) {
            i[a] !== t && (i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_processing_key]), i[a].pr_active_bg = i[a].pr_active_slide.find("rs-sbg-wrap"), i[a].pr_next_bg = i[a].pr_next_slide.find("rs-sbg-wrap"), i[a].pr_active_bg !== t && i[a].pr_active_bg.length > 0 && tpGS.gsap.to(i[a].pr_active_bg, .5, {
                opacity: 0
            }), i[a].pr_next_bg !== t && i[a].pr_next_bg.length > 0 && tpGS.gsap.to(i[a].pr_next_bg, .5, {
                opacity: 0
            }), tpGS.gsap.set(i[a].pr_active_slide, {
                zIndex: 18
            }), i[a].pr_next_slide !== t && i[a].pr_next_slide.length > 0 && tpGS.gsap.set(i[a].pr_next_slide, {
                autoAlpha: 0,
                zIndex: 20
            }), i[a].tonpause = !1, i[a].pr_active_key !== t && i.removeTheLayers(i[a].pr_active_slide, a, !0), i[a].firststart = 1, setTimeout(function() {
                delete i[a].pr_active_key, delete i[a].pr_processing_key
            }, 200))
        },
        k = function(a, r) {
            if (i[a] !== t)
                if (clearTimeout(i[a].waitWithSwapSlide), i[a].pr_processing_key === t || !0 !== i[a].firstSlideShown) {
                    if (clearTimeout(i[a].waitWithSwapSlide), i[a].startWithSlideKey !== t && (i[a].pr_next_key = i.getComingSlide(a, i[a].startWithSlideKey).nindex, delete i[a].startWithSlideKey), i[a].pr_active_slide = e(i[a].slides[i[a].pr_active_key]), i[a].pr_next_slide = e(i[a].slides[i[a].pr_next_key]), i[a].pr_next_key == i[a].pr_active_key) return delete i[a].pr_next_key;
                    i[a].pr_processing_key = i[a].pr_next_key, i[a].pr_cache_pr_next_key = i[a].pr_next_key, delete i[a].pr_next_key, i[a].pr_next_slide !== t && i[a].pr_next_slide[0] !== t && i.gA(i[a].pr_next_slide[0], "hal") !== t && i.sA(i[a].pr_next_slide[0], "sofacounter", i.gA(i[a].pr_next_slide[0], "sofacounter") === t ? 1 : parseInt(i.gA(i[a].pr_next_slide[0], "sofacounter"), 0) + 1), i[a].stopLoop && i[a].pr_processing_key == i[a].lastslidetoshow - 1 && (i[a].progressC.css({
                        visibility: "hidden"
                    }), i[a].c.trigger("revolution.slide.onstop"), i[a].noloopanymore = 1), i[a].pr_next_slide.index() === i[a].slideamount - 1 && i[a].looptogo > 0 && "disabled" !== i[a].looptogo && (i[a].looptogo--, i[a].looptogo <= 0 && (i[a].stopLoop = !0)), i[a].tonpause = !0, i[a].slideInSwapTimer = !0, i[a].c.trigger("stoptimer"), "off" === i[a].spinner ? i[a].loader !== t && !0 === i[a].loaderVisible && (i[a].loader.css({
                        display: "none"
                    }), i[a].loaderVisible = !1) : i[a].loadertimer = setTimeout(function() {
                        i[a].loader !== t && !0 !== i[a].loaderVisible && (i[a].loader.css({
                            display: "block"
                        }), i[a].loaderVisible = !0)
                    }, 50);
                    var o = "carousel" === i[a].sliderType && "all" !== i[a].lazyType ? i.loadVisibleCarouselItems(a) : i[a].pr_next_slide[0];
                    i.loadImages(o, a, 1), i.preLoadAudio && i.preLoadAudio(i[a].pr_next_slide, a, 1), i.waitForCurrentImages(o, a, function() {
                        i[a].firstSlideShown = !0, i[a].pr_next_slide.find("rs-bgvideo").each(function() {
                            i.prepareCoveredVideo(a)
                        }), i.loadUpcomingContent(a), window.requestAnimationFrame(function() {
                            L(i[a].pr_next_slide.find("rs-sbg"), a, r)
                        })
                    })
                } else i[a].waitWithSwapSlide = setTimeout(function() {
                    k(a, r)
                }, 18)
        },
        L = function(a, r, o) {
            if (i[r] !== t) {
                if (O(r), i[r].pr_active_slide = e(i[r].slides[i[r].pr_active_key]), i[r].pr_next_slide = e(i[r].slides[i[r].pr_processing_key]), i[r].pr_active_bg = i[r].pr_active_slide.find("rs-sbg-wrap"), i[r].pr_next_bg = i[r].pr_next_slide.find("rs-sbg-wrap"), i[r].tonpause = !1, clearTimeout(i[r].loadertimer), i[r].loader !== t && !0 === i[r].loaderVisible && (window.requestAnimationFrame(function() {
                        i[r].loader.css({
                            display: "none"
                        })
                    }), i[r].loaderVisible = !1), i[r].onBeforeSwap = {
                        slider: r,
                        slideIndex: parseInt(i[r].pr_active_key, 0) + 1,
                        slideLIIndex: i[r].pr_active_key,
                        nextSlideIndex: parseInt(i[r].pr_processing_key, 0) + 1,
                        nextSlideLIIndex: i[r].pr_processing_key,
                        nextslide: i[r].pr_next_slide,
                        slide: i[r].pr_active_slide,
                        currentslide: i[r].pr_active_slide,
                        prevslide: i[r].pr_lastshown_key !== t ? i[r].slides[i[r].pr_lastshown_key] : ""
                    }, i[r].c.trigger("revolution.slide.onbeforeswap", i[r].onBeforeSwap), i[r].transition = 1, i[r].stopByVideo = !1, i[r].pr_next_slide[0] !== t && i.gA(i[r].pr_next_slide[0], "duration") != t && "" != i.gA(i[r].pr_next_slide[0], "duration") ? i[r].duration = parseInt(i.gA(i[r].pr_next_slide[0], "duration"), 0) : i[r].duration = i[r].origcd, i[r].pr_next_slide[0] === t || "true" != i.gA(i[r].pr_next_slide[0], "ssop") && !0 !== i.gA(i[r].pr_next_slide[0], "ssop") ? i[r].ssop = !1 : i[r].ssop = !0, i[r].sbtimeline.set && i[r].sbtimeline.fixed && i.updateFixedScrollTimes(r), i[r].c.trigger("nulltimer"), i[r].sdir = i[r].pr_processing_key < i[r].pr_active_key ? 1 : 0, "arrow" == i[r].sc_indicator && (0 == i[r].pr_active_key && i[r].pr_processing_key == i[r].slideamount - 1 && (i[r].sdir = 1), i[r].pr_active_key == i[r].slideamount - 1 && 0 == i[r].pr_processing_key && (i[r].sdir = 0)), i[r].lsdir = i[r].sdir, i[r].pr_active_key != i[r].pr_processing_key && 1 != i[r].firststart && "carousel" !== i[r].sliderType && i.removeTheLayers && i.removeTheLayers(i[r].pr_active_slide, r), 1 !== i.gA(i[r].pr_next_slide[0], "rspausetimeronce") && 1 !== i.gA(i[r].pr_next_slide[0], "rspausetimeralways") ? i[r].c.trigger("restarttimer") : (i[r].stopByVideo = !0, i.unToggleState(i[r].slidertoggledby)), i.sA(i[r].pr_next_slide[0], "rspausetimeronce", 0), i[r].pr_next_slide[0] !== t && i.sA(i[r].c[0], "slideactive", i.gA(i[r].pr_next_slide[0], "key")), "carousel" == i[r].sliderType) {
                    if (i[r].mtl = tpGS.gsap.timeline(), i.prepareCarousel(r), R(r), i.updateSlideBGs(r), !0 !== i[r].carousel.checkFVideo) {
                        var s = i.gA(i[r].pr_next_slide[0], "key");
                        i[r].sbgs[s] !== t && i[r].sbgs[s].bgvid !== t && 0 !== i[r].sbgs[s].bgvid.length && i.playBGVideo(r, s), i[r].carousel.checkFVideo = !0
                    }
                    i[r].transition = 0
                } else {
                    i[r].pr_lastshown_key = i[r].pr_lastshown_key === t ? i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key !== t ? i[r].pr_active_key : i[r].pr_lastshown_key : i[r].pr_lastshown_key, i[r].mtl = tpGS.gsap.timeline({
                        paused: !0,
                        onComplete: function() {
                            R(r)
                        }
                    }), i[r].pr_next_key !== t ? i.animateTheLayers({
                        slide: i[r].pr_next_key,
                        id: r,
                        mode: "preset",
                        caller: "swapSlideProgress_1"
                    }) : i[r].pr_processing_key !== t ? i.animateTheLayers({
                        slide: i[r].pr_processing_key,
                        id: r,
                        mode: "preset",
                        caller: "swapSlideProgress_2"
                    }) : i[r].pr_active_key !== t && i.animateTheLayers({
                        slide: i[r].pr_active_key,
                        id: r,
                        mode: "preset",
                        caller: "swapSlideProgress_3"
                    }), 1 == i[r].firststart && (i[r].pr_active_slide[0] !== t && tpGS.gsap.set(i[r].pr_active_slide, {
                        autoAlpha: 0
                    }), i[r].firststart = 0), i[r].pr_active_slide[0] !== t && tpGS.gsap.set(i[r].pr_active_slide, {
                        zIndex: 18
                    }), i[r].pr_next_slide[0] !== t && tpGS.gsap.set(i[r].pr_next_slide, {
                        autoAlpha: 0,
                        zIndex: 20
                    });
                    s = i.gA(i[r].pr_next_slide[0], "key");
                    i[r].sbgs[s].alt === t && (i[r].sbgs[s].alt = i.gA(i[r].pr_next_slide[0], "alttrans") || !1, i[r].sbgs[s].alt = !1 !== i[r].sbgs[s].alt && i[r].sbgs[s].alt.split(","), i[r].sbgs[s].altIndex = 0, i[r].sbgs[s].altLen = !1 !== i[r].sbgs[s].alt ? i[r].sbgs[s].alt.length : 0);
                    i[r].firstSlideAnimDone === t && i[r].fanim !== t && !1 !== i[r].fanim || (i[r].sbgs[s].slideanimation === t || i[r].sbgs[s].slideanimationRebuild || (i[r].sbgs[s].random !== t && i.SLTR !== t || i[r].sbgs[s].altLen > 0 && i.SLTR));
                    i[r].sbgs[s].slideanimation = i[r].firstSlideAnimDone === t && i[r].fanim !== t && !1 !== i[r].fanim ? i.convertSlideAnimVals(e.extend(!0, {}, i.getSlideAnim_EmptyObject(), i[r].fanim)) : i[r].sbgs[s].slideanimation === t || i[r].sbgs[s].slideanimationRebuild ? i.getSlideAnimationObj(r, {
                        anim: i.gA(i[r].pr_next_slide[0], "anim"),
                        filter: i.gA(i[r].pr_next_slide[0], "filter"),
                        in: i.gA(i[r].pr_next_slide[0], "in"),
                        out: i.gA(i[r].pr_next_slide[0], "out"),
                        d3: i.gA(i[r].pr_next_slide[0], "d3")
                    }, s) : i[r].sbgs[s].random !== t && i.SLTR !== t ? i.convertSlideAnimVals(e.extend(!0, {}, i.getSlideAnim_EmptyObject(), i.getAnimObjectByKey(i.getRandomSlideTrans(i[r].sbgs[s].random.rndmain, i[r].sbgs[s].random.rndgrp, i.SLTR), i.SLTR))) : i[r].sbgs[s].altLen > 0 && i.SLTR !== t ? i.convertSlideAnimVals(e.extend(!0, {
                        altAnim: i[r].sbgs[s].alt[i[r].sbgs[s].altIndex]
                    }, i.getSlideAnim_EmptyObject(), i.getAnimObjectByKey(i[r].sbgs[s].alt[i[r].sbgs[s].altIndex], i.SLTR))) : i[r].sbgs[s].slideanimation, i[r].sbgs[s].altLen > 0 && (i[r].sbgs[s].firstSlideAnimDone !== t ? (i[r].sbgs[s].altIndex++, i[r].sbgs[s].altIndex = i[r].sbgs[s].altIndex >= i[r].sbgs[s].altLen ? 0 : i[r].sbgs[s].altIndex) : (i[r].sbgs[s].firstSlideAnimDone = !0, i.SLTR === t && i.SLTR_loading === t && i.loadSlideAnimLibrary(r))), i[r].sbgs[s].currentState = "animating", i.animateSlide(r, i[r].sbgs[s].slideanimation), i[r].firstSlideAnimDone === t && i[r].fanim !== t && !1 !== i[r].fanim && (i[r].sbgs[s].slideanimationRebuild = !0), i[r].firstSlideAnimDone = !0, i[r].pr_next_bg.data("panzoom") !== t && requestAnimationFrame(function() {
                        var e = i.gA(i[r].pr_next_slide[0], "key");
                        i.startPanZoom(i[r].pr_next_bg, r, 0, i.getSlideIndex(r, e), "first", e)
                    }), i[r].mtl.pause()
                }
                i.animateTheLayers ? "carousel" === i[r].sliderType ? (!1 !== i[r].carousel.showLayersAllTime && (i[r].carousel.allLayersStarted ? i.animateTheLayers({
                    slide: "individual",
                    id: r,
                    mode: "rebuild",
                    caller: "swapSlideProgress_5"
                }) : i.animateTheLayers({
                    slide: "individual",
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_4"
                }), i[r].carousel.allLayersStarted = !0), 0 !== i[r].firststart ? i.animateTheLayers({
                    slide: 0,
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_6"
                }) : !0 !== o && i.animateTheLayers({
                    slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key,
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_7"
                }), i[r].firststart = 0) : i.animateTheLayers({
                    slide: i[r].pr_next_key !== t ? i[r].pr_next_key : i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key,
                    id: r,
                    mode: "start",
                    caller: "swapSlideProgress_8"
                }) : i[r].mtl != t && setTimeout(function() {
                    i[r].mtl.resume()
                }, 18), "carousel" !== i[r].sliderType && tpGS.gsap.to(i[r].pr_next_slide, .001, {
                    autoAlpha: 1
                })
            }
        },
        R = function(r) {
            if (i[r] !== t) {
                if ("done" !== i.RS_swapList[r]) {
                    i.RS_swapList[r] = "done";
                    var o = e.inArray(r, i.RS_swapping);
                    i.RS_swapping.splice(o, 1)
                }
                if (i[r].firstSlideAvailable === t && (i[r].firstSlideAvailable = !0, window.requestAnimationFrame(function() {
                        "hero" !== i[r].sliderType && i.createNavigation && i[r].navigation.use && !0 !== i[r].navigation.createNavigationDone && i.createNavigation(r)
                    })), "carousel" === i[r].sliderType && tpGS.gsap.to(i[r].carousel.wrap, 1, {
                        opacity: 1
                    }), i[r].pr_active_key = i[r].pr_processing_key !== t ? i[r].pr_processing_key : i[r].pr_active_key, delete i[r].pr_processing_key, "scroll" != i[r].parallax.type && "scroll+mouse" != i[r].parallax.type && "mouse+scroll" != i[r].parallax.type || (i[r].lastscrolltop = -999, i.generalObserver(a)), i[r].mtldiff = i[r].mtl.time(), delete i[r].mtl, i[r].pr_active_key !== t) {
                    i.gA(i[r].slides[i[r].pr_active_key], "sloop") !== t && function(e) {
                        if (i[e] !== t) {
                            i[e].sloops = i[e].sloops === t ? {} : i[e].sloops;
                            var a = i.gA(i[e].slides[i[e].pr_active_key], "key"),
                                r = i[e].sloops[a];
                            if (r === t) {
                                r = {
                                    s: 2500,
                                    e: 4500,
                                    r: "unlimited"
                                };
                                var o = i.gA(i[e].slides[i[e].pr_active_key], "sloop").split(";");
                                for (var s in o)
                                    if (o.hasOwnProperty(s)) {
                                        var n = o[s].split(":");
                                        switch (n[0]) {
                                            case "s":
                                                r.s = parseInt(n[1], 0) / 1e3;
                                                break;
                                            case "e":
                                                r.e = parseInt(n[1], 0) / 1e3;
                                                break;
                                            case "r":
                                                r.r = n[1]
                                        }
                                    }
                                r.r = "unlimited" === r.r ? -1 : parseInt(r.r, 0), i[e].sloops[a] = r, r.key = a
                            }
                            r.ct = {
                                time: r.s
                            }, r.tl = tpGS.gsap.timeline({}), r.timer = tpGS.gsap.fromTo(r.ct, r.e - r.s, {
                                time: r.s
                            }, {
                                time: r.e,
                                ease: "none",
                                onRepeat: function() {
                                    for (var a in i[e].layers[r.key]) i[e].layers[r.key].hasOwnProperty(a) && i[e]._L[a].timeline.play(r.s);
                                    var o = i[e].progressC;
                                    o !== t && o[0] !== t && o[0].tween !== t && o[0].tween.time(r.s)
                                },
                                onUpdate: function() {},
                                onComplete: function() {}
                            }).repeat(r.r), r.tl.add(r.timer, r.s), r.tl.time(i[e].mtldiff)
                        }
                    }(r), i.sA(i[r].slides[i[r].activeRSSlide], "isactiveslide", !1), i[r].activeRSSlide = i[r].pr_active_key, i.sA(i[r].slides[i[r].activeRSSlide], "isactiveslide", !0);
                    var s = i.gA(i[r].slides[i[r].pr_active_key], "key"),
                        n = i.gA(i[r].slides[i[r].pr_lastshown_key], "key");
                    i.sA(i[r].c[0], "slideactive", s), n !== t && i[r].panzoomTLs !== t && i[r].panzoomTLs[i.getSlideIndex(r, n)] !== t && ("carousel" === i[r].sliderType ? (i[r].panzoomTLs[i.getSlideIndex(r, n)].timeScale(3), i[r].panzoomTLs[i.getSlideIndex(r, n)].reverse()) : i[r].panzoomTLs[i.getSlideIndex(r, n)].pause()), i[r].pr_next_bg.data("panzoom") !== t && (i[r].panzoomTLs !== t && i[r].panzoomTLs[i.getSlideIndex(r, s)] !== t ? (i[r].panzoomTLs[i.getSlideIndex(r, s)].timeScale(1), i[r].panzoomTLs[i.getSlideIndex(r, s)].play()) : i.startPanZoom(i[r].pr_next_bg, r, 0, i.getSlideIndex(r, s), "play", s));
                    var d = {
                        slider: r,
                        slideIndex: parseInt(i[r].pr_active_key, 0) + 1,
                        slideLIIndex: i[r].pr_active_key,
                        slide: i[r].pr_next_slide,
                        currentslide: i[r].pr_next_slide,
                        prevSlideIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0) + 1,
                        prevSlideLIIndex: i[r].pr_lastshown_key !== t && parseInt(i[r].pr_lastshown_key, 0),
                        prevSlide: i[r].pr_lastshown_key !== t && i[r].slides[i[r].pr_lastshown_key]
                    };
                    if (i[r].c.trigger("revolution.slide.onchange", d), i[r].c.trigger("revolution.slide.onafterswap", d), i[r].deepLinkListener || i[r].enableDeeplinkHash) {
                        let e = i.gA(i[r].slides[i[r].pr_active_key], "deeplink");
                        e !== t && e.length > 0 && (i[r].ignoreDeeplinkChange = !0, window.location.hash = i.gA(i[r].slides[i[r].pr_active_key], "deeplink"))
                    }
                    i[r].pr_lastshown_key = i[r].pr_active_key, i[r].startWithSlide !== t && "done" !== i[r].startWithSlide && "carousel" === i[r].sliderType && (i[r].firststart = 0), i[r].duringslidechange = !1, i[r].pr_active_slide.length > 0 && 0 != i.gA(i[r].pr_active_slide[0], "hal") && i.gA(i[r].pr_active_slide[0], "hal") <= i.gA(i[r].pr_active_slide[0], "sofacounter") && i[r].c.revremoveslide(i[r].pr_active_slide.index());
                    var l = i[r].pr_processing_key || i[r].pr_active_key || 0;
                    i[r].rowzones != t && (l = l > i[r].rowzones.length ? i[r].rowzones.length : l), (i[r].rowzones != t && i[r].rowzones.length > 0 && i[r].rowzones[l] != t && l >= 0 && l <= i[r].rowzones.length && i[r].rowzones[l].length > 0 || i.winH < i[r].module.height) && i.updateDims(r), delete i[r].sc_indicator, delete i[r].sc_indicator_dir, i[r].firstLetItFree === t && (i.generalObserver(a), i[r].firstLetItFree = !0)
                }
            }
        },
        O = function(a) {
            var r = i[a].progressBar;
            if (i[a].progressC === t || 0 == i[a].progressC.length)
                if (i[a].progressC = e('<rs-progress style="visibility:hidden;"></rs-progress>'), "horizontal" === r.style || "vertical" === r.style) {
                    if ("module" === r.basedon) {
                        for (var o = "", s = 0; s < i[a].slideamount; s++) o += "<rs-progress-bar></rs-progress-bar>";
                        o += "<rs-progress-bgs>";
                        for (s = 0; s < i[a].slideamount; s++) o += "<rs-progress-bg></rs-progress-bg>";
                        if (o += "</rs-progress-bgs>", "nogap" !== r.gaptype)
                            for (s = 0; s < i[a].slideamount; s++) o += "<rs-progress-gap></rs-progress-gap>";
                        i[a].progressC[0].innerHTML = o, !0 === i[a].noDetach && i[a].c.append(i[a].progressC), i[a].progressCBarBGS = i.getByTag(i[a].progressC[0], "RS-PROGRESS-BG"), i[a].progressCBarGAPS = i.getByTag(i[a].progressC[0], "RS-PROGRESS-GAP"), "nogap" !== r.gaptype && tpGS.gsap.set(i[a].progressCBarGAPS, {
                            backgroundColor: r.gapcolor,
                            zIndex: "gapbg" === r.gaptype ? 17 : 27
                        }), tpGS.gsap.set(i[a].progressCBarBGS, {
                            backgroundColor: r.bgcolor
                        })
                    } else i[a].progressC[0].innerHTML = "<rs-progress-bar></rs-progress-bar>", !0 === i[a].noDetach && i[a].c.append(i[a].progressC);
                    i[a].progressCBarInner = i.getByTag(i[a].progressC[0], "RS-PROGRESS-BAR"), tpGS.gsap.set(i[a].progressCBarInner, {
                        background: r.color
                    })
                } else i[a].progressC[0].innerHTML = '<canvas width="' + 2 * r.radius + '" height="' + 2 * r.radius + '" style="position:absolute" class="rs-progress-bar"></canvas>', !0 === i[a].noDetach && i[a].c.append(i[a].progressC), i[a].progressCBarInner = i[a].progressC[0].getElementsByClassName("rs-progress-bar")[0], i[a].progressBCanvas = i[a].progressCBarInner.getContext("2d"), i[a].progressBar.degree = "cw" === i[a].progressBar.style ? 360 : 0, I(a);
            if (!0 !== i[a].noDetach && i[a].progressC.detach(), i[a].progressBar.visibility[i[a].level] && 1 != i[a].progressBar.disableProgressBar)
                if ("horizontal" === r.style || "vertical" === r.style) {
                    var n, d, l = i[a].slideamount - 1;
                    if ("horizontal" === r.style) {
                        var c = "grid" === r.alignby ? i[a].gridwidth[i[a].level] : i[a].module.width;
                        n = Math.ceil(c / i[a].slideamount), d = Math.ceil((c - l * r.gapsize) / i[a].slideamount), tpGS.gsap.set(i[a].progressC, {
                            visibility: "visible",
                            top: "top" === r.vertical ? r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto",
                            bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0),
                            left: "left" === r.horizontal && "grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : "auto",
                            right: "right" === r.horizontal && "grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : "auto",
                            y: "center" === r.vertical ? r.y : 0,
                            height: r.size,
                            backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor,
                            marginTop: "bottom" === r.vertical ? 0 : "top" === r.vertical ? 0 : parseInt(r.size, 0) / 2,
                            width: "grid" === r.alignby ? i[a].gridwidth[i[a].level] : "100%"
                        }), tpGS.gsap.set(i[a].progressCBarInner, {
                            x: "module" === r.basedon ? r.gap ? function(e) {
                                return ("right" === r.horizontal ? l - e : e) * (d + r.gapsize)
                            } : function(e) {
                                return ("right" === r.horizontal ? l - e : e) * n
                            } : 0,
                            width: "module" === r.basedon ? r.gap ? d + "px" : 100 / i[a].slideamount + "%" : "100%"
                        }), "module" === r.basedon && (tpGS.gsap.set(i[a].progressCBarBGS, {
                            x: "module" === r.basedon ? r.gap ? function(e) {
                                return e * (d + r.gapsize)
                            } : function(e) {
                                return e * n
                            } : 0,
                            width: "module" === r.basedon ? r.gap ? d + "px" : 100 / i[a].slideamount + "%" : "100%"
                        }), tpGS.gsap.set(i[a].progressCBarGAPS, {
                            width: r.gap ? r.gapsize + "px" : 0,
                            x: r.gap ? function(e) {
                                return (e + 1) * d + parseInt(r.gapsize, 0) * e
                            } : 0
                        }))
                    } else if ("vertical" === r.style) {
                        c = "grid" === r.alignby ? i[a].gridheight[i[a].level] : i[a].module.height;
                        n = Math.ceil(c / i[a].slideamount), d = Math.ceil((c - l * r.gapsize) / i[a].slideamount), tpGS.gsap.set(i[a].progressC, {
                            visibility: "visible",
                            left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto",
                            right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0),
                            x: "center" === r.horizontal ? r.x : 0,
                            top: "top" === r.vertical && "grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(i[a].gridOffsetHeight, 0) : "auto",
                            bottom: "bottom" === r.vertical && "grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(i[a].gridOffsetHeight, 0) : "auto",
                            width: r.size,
                            marginLeft: "left" === r.horizontal ? 0 : "right" === r.horizontal ? 0 : parseInt(r.size, 0) / 2,
                            backgroundColor: "module" === r.basedon ? "transparent" : r.bgcolor,
                            height: "grid" === r.alignby ? i[a].gridheight[i[a].level] : "100%"
                        }), tpGS.gsap.set(i[a].progressCBarInner, {
                            y: "module" === r.basedon ? r.gap ? function(e) {
                                return ("bottom" === r.vertical ? l - e : e) * (d + r.gapsize)
                            } : function(e) {
                                return ("bottom" === r.vertical ? l - e : e) * n
                            } : 0,
                            height: "module" === r.basedon ? r.gap ? d + "px" : 100 / i[a].slideamount + "%" : "100%"
                        }), "module" === r.basedon && (tpGS.gsap.set(i[a].progressCBarBGS, {
                            y: "module" === r.basedon ? r.gap ? function(e) {
                                return e * (d + r.gapsize)
                            } : function(e) {
                                return e * n
                            } : 0,
                            height: "module" === r.basedon ? r.gap ? d + "px" : 100 / i[a].slideamount + "%" : "100%"
                        }), tpGS.gsap.set(i[a].progressCBarGAPS, {
                            height: r.gap ? r.gapsize + "px" : 0,
                            y: r.gap ? function(e) {
                                return (e + 1) * d + parseInt(r.gapsize, 0) * e
                            } : 0
                        }))
                    }
                } else tpGS.gsap.set(i[a].progressC, {
                    top: "top" === r.vertical ? r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0) : "center" === r.vertical ? "50%" : "auto",
                    bottom: "top" === r.vertical || "center" === r.vertical ? "auto" : r.y + ("grid" === r.alignby && i[a].gridOffsetHeight !== t ? Math.max(0, i[a].gridOffsetHeight) : 0),
                    left: "left" === r.horizontal ? r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0) : "center" === r.horizontal ? "50%" : "auto",
                    right: "left" === r.horizontal || "center" === r.horizontal ? "auto" : r.x + ("grid" === r.alignby && i[a].gridOffsetWidth !== t ? Math.max(0, i[a].gridOffsetWidth) : 0),
                    y: "center" === r.vertical ? r.y : 0,
                    x: "center" === r.horizontal ? r.x : 0,
                    width: 2 * r.radius,
                    height: 2 * r.radius,
                    marginTop: "center" === r.vertical ? 0 - r.radius : 0,
                    marginLeft: "center" === r.horizontal ? 0 - r.radius : 0,
                    backgroundColor: "transparent",
                    visibility: "visible"
                });
            else i[a].progressC[0].style.visibility = "hidden";
            !0 !== i[a].noDetach && i[a].c.append(i[a].progressC), i[a].gridOffsetWidth === t && "grid" === r.alignby ? i[a].rebuildProgressBar = !0 : i[a].rebuildProgressBar = !1
        },
        I = function(e) {
            var t = i[e].progressBar;
            t.radius - parseInt(t.size, 0) <= 0 && (t.size = t.radius / 4);
            var a = parseInt(t.radius),
                r = parseInt(t.radius);
            i[e].progressBCanvas.lineCap = "round", i[e].progressBCanvas.clearRect(0, 0, 2 * t.radius, 2 * t.radius), i[e].progressBCanvas.beginPath(), i[e].progressBCanvas.arc(a, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * 630), i[e].progressBCanvas.strokeStyle = t.bgcolor, i[e].progressBCanvas.lineWidth = parseInt(t.size, 0) - 1, i[e].progressBCanvas.stroke(), i[e].progressBCanvas.beginPath(), i[e].progressBCanvas.strokeStyle = t.color, i[e].progressBCanvas.lineWidth = parseInt(t.size, 0), i[e].progressBCanvas.arc(a, r, t.radius - parseInt(t.size, 0), Math.PI / 180 * 270, Math.PI / 180 * (270 + i[e].progressBar.degree), "cw" !== t.style), i[e].progressBCanvas.stroke()
        },
        T = function(a) {
            var r = function() {
                    a !== t && i !== t && i[a] !== t && (0 == e("body").find(i[a].c).length || null === i[a] || null === i[a].c || i[a].c === t || 0 === i[a].length ? (! function(t) {
                        i[t].c.children().each(function() {
                            try {
                                e(this).die("click")
                            } catch (e) {}
                            try {
                                e(this).die("mouseenter")
                            } catch (e) {}
                            try {
                                e(this).die("mouseleave")
                            } catch (e) {}
                            try {
                                e(this).unbind("hover")
                            } catch (e) {}
                        });
                        try {
                            i[t].c.die("click", "mouseenter", "mouseleave")
                        } catch (e) {}
                        clearInterval(i[t].cdint), i[t].c = null
                    }(a), clearInterval(i[a].cdint)) : (i[a].c.trigger("revolution.slide.slideatend"), 1 == i[a].c.data("conthoverchanged") && (i[a].conthover = i[a].c.data("conthover"), i[a].c.data("conthoverchanged", 0)), i.callingNewSlide(a, 1, !0)))
                },
                o = tpGS.gsap.timeline({
                    paused: !0
                }),
                s = "reset" === i[a].progressBar.reset || i[a].progressBar.notnew === t ? 0 : .2,
                n = "slide" === i[a].progressBar.basedon ? 0 : i[a].pr_processing_key !== t ? i[a].pr_processing_key : i[a].pr_active_key;
            if (n = n === t ? 0 : n, "horizontal" === i[a].progressBar.style) {
                if (o.add(tpGS.gsap.to(i[a].progressCBarInner[n], s, {
                        scaleX: 0,
                        transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%"
                    })), o.add(tpGS.gsap.to(i[a].progressCBarInner[n], i[a].duration / 1e3, {
                        transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%",
                        force3D: "auto",
                        scaleX: 1,
                        onComplete: r,
                        delay: .5,
                        ease: i[a].progressBar.ease
                    })), "module" === i[a].progressBar.basedon)
                    for (var d = 0; d < i[a].slideamount; d++) d !== n && o.add(tpGS.gsap.set(i[a].progressCBarInner[d], {
                        scaleX: d < n ? 1 : 0,
                        transformOrigin: "right" === i[a].progressBar.horizontal ? "100% 50%" : "0% 50%"
                    }), 0)
            } else if ("vertical" === i[a].progressBar.style) {
                if (i[a].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(i[a].progressCBarInner[n], s, {
                        scaleY: 0,
                        transformOrigin: "bottom" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%"
                    })), i[a].progressCBarInner[n] !== t && o.add(tpGS.gsap.to(i[a].progressCBarInner[n], i[a].duration / 1e3, {
                        transformOrigin: "bottom" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%",
                        force3D: "auto",
                        scaleY: 1,
                        onComplete: r,
                        delay: .5,
                        ease: i[a].progressBar.ease
                    })), "module" === i[a].progressBar.basedon)
                    for (d = 0; d < i[a].slideamount; d++) d !== n && i[a].progressCBarInner[d] !== t && o.add(tpGS.gsap.set(i[a].progressCBarInner[d], {
                        scaleY: d < n ? 1 : 0,
                        transformOrigin: "botton" === i[a].progressBar.vertical ? "50% 100%" : "50% 0%"
                    }), 0)
            } else {
                var l = "slide" === i[a].progressBar.basedon ? 0 : Math.max(0, 360 / i[a].slideamount * n),
                    c = "slide" === i[a].progressBar.basedon ? 360 : 360 / i[a].slideamount * (n + 1);
                "ccw" === i[a].progressBar.style && "slide" !== i[a].progressBar.basedon && (l = 360 - c, c = 360 - 360 / i[a].slideamount * n), o.add(tpGS.gsap.to(i[a].progressBar, s, {
                    degree: "cw" === i[a].progressBar.style ? l : c,
                    onUpdate: function() {
                        I(a)
                    }
                })), o.add(tpGS.gsap.to(i[a].progressBar, i[a].duration / 1e3, {
                    degree: "cw" === i[a].progressBar.style ? c : l,
                    onUpdate: function() {
                        I(a)
                    },
                    onComplete: r,
                    delay: .5,
                    ease: i[a].progressBar.ease
                }))
            }
            return i[a].progressBar.notnew = !0, o
        },
        C = function(e) {
            i[e].progressC == t && O(e), i[e].loop = 0, i[e].stopAtSlide != t && i[e].stopAtSlide > -1 ? i[e].lastslidetoshow = i[e].stopAtSlide : i[e].lastslidetoshow = 999, i[e].stopLoop = !1, 0 == i[e].looptogo && (i[e].stopLoop = !0), i[e].c.on("stoptimer", function() {
                i[e].progressC != t && (i[e].progressC[0].tween.pause(), i[e].progressBar.disableProgressBar && (i[e].progressC[0].style.visibility = "hidden"), i[e].sliderstatus = "paused", i[e].slideInSwapTimer || i.unToggleState(i[e].slidertoggledby), i[e].slideInSwapTimer = !1)
            }), i[e].c.on("starttimer", function() {
                i[e].progressC != t && (i[e].forcepaused || (1 != i[e].conthover && 1 != i[e].stopByVideo && i[e].module.width > i[e].hideSliderAtLimit && 1 != i[e].tonpause && 1 != i[e].overnav && 1 != i[e].ssop && (1 === i[e].noloopanymore || i[e].viewPort.enable && !i[e].inviewport || (i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "visible"), i[e].progressC[0].tween.resume(), i[e].sliderstatus = "playing")), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i.toggleState(i[e].slidertoggledby)))
            }), i[e].c.on("restarttimer", function() {
                if (i[e].progressC != t && !i[e].forcepaused) {
                    if (i[e].mouseoncontainer && "on" == i[e].navigation.onHoverStop && !a) return !1;
                    1 === i[e].noloopanymore || i[e].viewPort.enable && !i[e].inviewport || 1 == i[e].ssop ? i.unToggleState(i[e].slidertoggledby) : (i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "visible"), i[e].progressC[0].tween !== t && i[e].progressC[0].tween.kill(), i[e].progressC[0].tween = T(e), i[e].progressC[0].tween.play(), i[e].sliderstatus = "playing", i.toggleState(i[e].slidertoggledby)), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i[e].mouseoncontainer && 1 == i[e].navigation.onHoverStop && !a && (i[e].c.trigger("stoptimer"), i[e].c.trigger("revolution.slide.onpause"))
                }
            }), i[e].c.on("nulltimer", function() {
                i[e].progressC != t && i[e].progressC[0] !== t && (i[e].progressC[0].tween !== t && i[e].progressC[0].tween.kill(), i[e].progressC[0].tween = T(e), i[e].progressC[0].tween.pause(0), !i[e].progressBar.disableProgressBar && i[e].progressBar.visibility[i[e].level] || (i[e].progressC[0].style.visibility = "hidden"), i[e].sliderstatus = "paused")
            }), i[e].progressC !== t && (i[e].progressC[0].tween = T(e)), i[e].slideamount > 1 && (0 != i[e].stopAfterLoops || 1 != i[e].stopAtSlide) ? i[e].c.trigger("starttimer") : (i[e].noloopanymore = 1, i[e].c.trigger("nulltimer")), i[e].c.on("tp-mouseenter", function() {
                i[e].mouseoncontainer = !0, 1 != i[e].navigation.onHoverStop || a || (i[e].c.trigger("stoptimer"), i[e].c.trigger("revolution.slide.onpause"))
            }), i[e].c.on("tp-mouseleft", function() {
                i[e].mouseoncontainer = !1, 1 != i[e].c.data("conthover") && 1 == i[e].navigation.onHoverStop && (1 == i[e].viewPort.enable && i[e].inviewport || 0 == i[e].viewPort.enable) && (i[e].c.trigger("revolution.slide.onresume"), i[e].c.trigger("starttimer"))
            })
        },
        A = function() {
            e(".rev_redraw_on_blurfocus").each(function() {
                var e = this.id;
                if (i[e] == t || i[e].c == t || 0 === i[e].c.length) return !1;
                1 != i[e].windowfocused && (i[e].windowfocused = !0, tpGS.gsap.delayedCall(.1, function() {
                    i[e].fallbacks.nextSlideOnWindowFocus && i[e].c.revnext(), i[e].c.revredraw(), "playing" == i[e].lastsliderstatus && i[e].c.revresume(), i[e].c.trigger("revolution.slide.tabfocused")
                }))
            })
        },
        M = function() {
            document.hasFocus() || e(".rev_redraw_on_blurfocus").each(function(e) {
                var t = this.id;
                i[t].windowfocused = !1, i[t].lastsliderstatus = i[t].sliderstatus, i[t].c.revpause(), i[t].c.trigger("revolution.slide.tabblured")
            })
        },
        P = function() {
            var e = document.documentMode === t,
                a = window.chrome;
            1 !== i.revslider_focus_blur_listener && (i.revslider_focus_blur_listener = 1, e && !a ? i.window.on("focusin", function() {
                !0 !== i.windowIsFocused && A(), i.windowIsFocused = !0
            }).on("focusout", function() {
                !0 !== i.windowIsFocused && i.windowIsFocused !== t || M(), i.windowIsFocused = !1
            }) : window.addEventListener ? (window.addEventListener("focus", function(e) {
                !0 !== i.windowIsFocused && A(), i.windowIsFocused = !0
            }, {
                capture: !1,
                passive: !0
            }), window.addEventListener("blur", function(e) {
                !0 !== i.windowIsFocused && i.windowIsFocused !== t || M(), i.windowIsFocused = !1
            }, {
                capture: !1,
                passive: !0
            })) : (window.attachEvent("focus", function(e) {
                !0 !== i.windowIsFocused && A(), i.windowIsFocused = !0
            }), window.attachEvent("blur", function(e) {
                !0 !== i.windowIsFocused && i.windowIsFocused !== t || M(), i.windowIsFocused = !1
            })))
        },
        B = function(e) {
            for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), r = 0; r < a.length; r++) a[r] = a[r].replace("%3D", "="), t = a[r].split("="), i.push(t[0]), i[t[0]] = t[1];
            return i
        },
        D = function(a) {
            if (i[a].blockSpacing !== t) {
                var r = i[a].blockSpacing.split(";");
                for (var o in i[a].blockSpacing = {}, r)
                    if (r.hasOwnProperty(o)) {
                        var s = r[o].split(":");
                        switch (s[0]) {
                            case "t":
                                i[a].blockSpacing.top = i.revToResp(s[1], 4, 0);
                                break;
                            case "b":
                                i[a].blockSpacing.bottom = i.revToResp(s[1], 4, 0);
                                break;
                            case "l":
                                i[a].blockSpacing.left = i.revToResp(s[1], 4, 0);
                                break;
                            case "r":
                                i[a].blockSpacing.right = i.revToResp(s[1], 4, 0)
                        }
                    }
                i[a].blockSpacing.block = e(i.closestClass(i[a].c[0], "wp-block-themepunch-revslider")), i[a].level !== t && i[a].blockSpacing !== t && tpGS.gsap.set(i[a].blockSpacing.block, {
                    paddingLeft: i[a].blockSpacing.left[i[a].level],
                    paddingRight: i[a].blockSpacing.right[i[a].level],
                    marginTop: i[a].blockSpacing.top[i[a].level],
                    marginBottom: i[a].blockSpacing.bottom[i[a].level]
                })
            }
        },
        z = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        },
        G = function(a) {
            return function(e) {
                for (var a in e.minHeight = e.minHeight !== t ? "none" === e.minHeight || "0" === e.minHeight || "0px" === e.minHeight || "" == e.minHeight || " " == e.minHeight ? 0 : parseInt(e.minHeight, 0) : 0, e.maxHeight = "none" === e.maxHeight || "0" === e.maxHeight ? 0 : parseInt(e.maxHeight, 0), e.carousel.maxVisibleItems = e.carousel.maxVisibleItems < 1 ? 999 : e.carousel.maxVisibleItems, e.carousel.vertical_align = "top" === e.carousel.vertical_align ? "0%" : "bottom" === e.carousel.vertical_align ? "100%" : "50%", e.carousel.space = parseInt(e.carousel.space, 0), e.carousel.maxOpacity = parseInt(e.carousel.maxOpacity, 0), e.carousel.maxOpacity = e.carousel.maxOpacity > 1 ? e.carousel.maxOpacity / 100 : e.carousel.maxOpacity, e.carousel.showLayersAllTime = "true" === e.carousel.showLayersAllTime || !0 === e.carousel.showLayersAllTime ? "all" : e.carousel.showLayersAllTime, e.carousel.maxRotation = parseInt(e.carousel.maxRotation, 0), e.carousel.minScale = parseInt(e.carousel.minScale, 0), e.carousel.minScale = e.carousel.minScale > .9 ? e.carousel.minScale / 100 : e.carousel.minScale, e.carousel.speed = parseInt(e.carousel.speed, 0), e.navigation.maintypes = ["arrows", "tabs", "thumbnails", "bullets"], e.perspective = parseInt(e.perspective, 0), e.navigation.maintypes) e.navigation.maintypes.hasOwnProperty(a) && e.navigation[e.navigation.maintypes[a]] !== t && (e.navigation[e.navigation.maintypes[a]].animDelay = e.navigation[e.navigation.maintypes[a]].animDelay === t ? 1e3 : e.navigation[e.navigation.maintypes[a]].animDelay, e.navigation[e.navigation.maintypes[a]].animSpeed = e.navigation[e.navigation.maintypes[a]].animSpeed === t ? 1e3 : e.navigation[e.navigation.maintypes[a]].animSpeed, e.navigation[e.navigation.maintypes[a]].animDelay = parseInt(e.navigation[e.navigation.maintypes[a]].animDelay, 0) / 1e3, e.navigation[e.navigation.maintypes[a]].animSpeed = parseInt(e.navigation[e.navigation.maintypes[a]].animSpeed, 0) / 1e3);
                if (i.isNumeric(e.scrolleffect.tilt) || -1 !== e.scrolleffect.tilt.indexOf("%") && (e.scrolleffect.tilt = parseInt(e.scrolleffect.tilt)), e.scrolleffect.tilt = e.scrolleffect.tilt / 100, e.navigation.thumbnails.position = "outer-horizontal" == e.navigation.thumbnails.position ? "bottom" == e.navigation.thumbnails.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.thumbnails.position ? "left" == e.navigation.thumbnails.h_align ? "outer-left" : "outer-right" : e.navigation.thumbnails.position, e.navigation.tabs.position = "outer-horizontal" == e.navigation.tabs.position ? "bottom" == e.navigation.tabs.v_align ? "outer-bottom" : "outer-top" : "outer-vertical" == e.navigation.tabs.position ? "left" == e.navigation.tabs.h_align ? "outer-left" : "outer-right" : e.navigation.tabs.position, e.sbtimeline.speed = parseInt(e.sbtimeline.speed, 0) / 1e3 || .5, !0 === e.sbtimeline.set && !0 === e.sbtimeline.fixed && "auto" !== e.sliderLayout ? (e.sbtimeline.fixStart = parseInt(e.sbtimeline.fixStart), e.sbtimeline.fixEnd = parseInt(e.sbtimeline.fixEnd)) : e.sbtimeline.fixed = !1, e.progressBar === t || "true" != e.progressBar.disableProgressBar && 1 != e.progressBar.disableProgressBar || (e.progressBar.disableProgressBar = !0), e.startDelay = parseInt(e.startDelay, 0) || 0, e.navigation !== t && e.navigation.arrows != t && e.navigation.arrows.hide_under != t && (e.navigation.arrows.hide_under = parseInt(e.navigation.arrows.hide_under)), e.navigation !== t && e.navigation.bullets != t && e.navigation.bullets.hide_under != t && (e.navigation.bullets.hide_under = parseInt(e.navigation.bullets.hide_under)), e.navigation !== t && e.navigation.thumbnails != t && e.navigation.thumbnails.hide_under != t && (e.navigation.thumbnails.hide_under = parseInt(e.navigation.thumbnails.hide_under)), e.navigation !== t && e.navigation.tabs != t && e.navigation.tabs.hide_under != t && (e.navigation.tabs.hide_under = parseInt(e.navigation.tabs.hide_under)), e.navigation !== t && e.navigation.arrows != t && e.navigation.arrows.hide_over != t && (e.navigation.arrows.hide_over = parseInt(e.navigation.arrows.hide_over)), e.navigation !== t && e.navigation.bullets != t && e.navigation.bullets.hide_over != t && (e.navigation.bullets.hide_over = parseInt(e.navigation.bullets.hide_over)), e.navigation !== t && e.navigation.thumbnails != t && e.navigation.thumbnails.hide_over != t && (e.navigation.thumbnails.hide_over = parseInt(e.navigation.thumbnails.hide_over)), e.navigation !== t && e.navigation.tabs != t && e.navigation.tabs.hide_over != t && (e.navigation.tabs.hide_over = parseInt(e.navigation.tabs.hide_over)), e.lazyloaddata !== t && e.lazyloaddata.length > 0 && e.lazyloaddata.indexOf("-") > 0) {
                    var r = e.lazyloaddata.split("-");
                    for (e.lazyloaddata = r[0], a = 1; a < r.length; a++) e.lazyloaddata += z(r[a])
                }
                return e.duration = parseInt(e.duration), "single" === e.lazyType && "carousel" === e.sliderType && (e.lazyType = "smart"), "carousel" === e.sliderType && e.carousel.justify && (e.justifyCarousel = !0, e.keepBPHeight = !0), e.enableUpscaling = 1 == e.enableUpscaling && "carousel" !== e.sliderType && "fullwidth" === e.sliderLayout, e.useFullScreenHeight = "carousel" === e.sliderType && "fullscreen" === e.sliderLayout && !0 === e.useFullScreenHeight, e.progressBar.y = parseInt(e.progressBar.y, 0), e.progressBar.x = parseInt(e.progressBar.x, 0),
                    /*! Custom Eases */
                    "IE" !== window.RSBrowser && e.customEases !== t && (!e.customEases.SFXBounceLite && "true" != e.customEases.SFXBounceLite || tpGS.SFXBounceLite !== t || (tpGS.SFXBounceLite = tpGS.CustomBounce.create("SFXBounceLite", {
                        strength: .3,
                        squash: 1,
                        squashID: "SFXBounceLite-squash"
                    })), !e.customEases.SFXBounceSolid && "true" != e.customEases.SFXBounceSolid || tpGS.SFXBounceSolid !== t || (tpGS.SFXBounceSolid = tpGS.CustomBounce.create("SFXBounceSolid", {
                        strength: .5,
                        squash: 2,
                        squashID: "SFXBounceSolid-squash"
                    })), !e.customEases.SFXBounceStrong && "true" != e.customEases.SFXBounceStrong || tpGS.SFXBounceStrong !== t || (tpGS.SFXBounceStrong = tpGS.CustomBounce.create("SFXBounceStrong", {
                        strength: .7,
                        squash: 3,
                        squashID: "SFXBounceStrong-squash"
                    })), !e.customEases.SFXBounceExtrem && "true" != e.customEases.SFXBounceExtrem || tpGS.SFXBounceExtrem !== t || (tpGS.SFXBounceExtrem = tpGS.CustomBounce.create("SFXBounceExtrem", {
                        strength: .9,
                        squash: 4,
                        squashID: "SFXBounceExtrem-squash"
                    })), !e.customEases.BounceLite && "true" != e.customEases.BounceLite || tpGS.BounceLite !== t || (tpGS.BounceLite = tpGS.CustomBounce.create("BounceLite", {
                        strength: .3
                    })), !e.customEases.BounceSolid && "true" != e.customEases.BounceSolid || tpGS.BounceSolid !== t || (tpGS.BounceSolid = tpGS.CustomBounce.create("BounceSolid", {
                        strength: .5
                    })), !e.customEases.BounceStrong && "true" != e.customEases.BounceStrong || tpGS.BounceStrong !== t || (tpGS.BounceStrong = tpGS.CustomBounce.create("BounceStrong", {
                        strength: .7
                    })), !e.customEases.BounceExtrem && "true" != e.customEases.BounceExtrem || tpGS.BounceExtrem !== t || (tpGS.BounceExtrem = tpGS.CustomBounce.create("BounceExtrem", {
                        strength: .9
                    }))), e.modal.coverSpeed = parseFloat(e.modal.coverSpeed), e.modal.coverSpeed = e.modal.coverSpeed > 200 ? e.modal.coverSpeed / 1e3 : e.modal.coverSpeed, e.modal.coverSpeed = Math.max(Math.min(3, e.modal.coverSpeed), .3), e.navigation.wheelViewPort = e.navigation.wheelViewPort === t ? .5 : e.navigation.wheelViewPort / 100, e.navigation.wheelCallDelay = e.navigation.wheelCallDelay === t ? 1e3 : parseInt(e.navigation.wheelCallDelay), e.autoDPR = "string" == typeof e.DPR && -1 !== e.DPR.indexOf("ax"), e.DPR = e.DPR.replace("ax", ""), e.DPR = parseInt(e.DPR.replace("x", "")), e.DPR = isNaN(e.DPR) ? window.devicePixelRatio : e.autoDPR ? Math.min(window.devicePixelRatio, e.DPR) : e.DPR, e
            }(e.extend(!0, {
                DPR: "dpr",
                sliderType: "standard",
                sliderLayout: "auto",
                overlay: {
                    type: "none",
                    size: 1,
                    colora: "transparent",
                    colorb: "#000000"
                },
                duration: 9e3,
                imgCrossOrigin: "",
                modal: {
                    useAsModal: !1,
                    cover: !0,
                    coverColor: "rgba(0,0,0,0.5)",
                    horizontal: "center",
                    vertical: "middle",
                    coverSpeed: 1
                },
                navigation: {
                    keyboardNavigation: !1,
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    wheelViewPort: 50,
                    wheelCallDelay: "1000ms",
                    onHoverStop: !0,
                    mouseScrollReverse: "default",
                    touch: {
                        touchenabled: !1,
                        touchOnDesktop: !1,
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: !1,
                        mobileCarousel: !0,
                        desktopCarousel: !0
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_under: 0,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_over: 9999,
                        tmp: "",
                        rtl: !1,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0,
                            container: "slider"
                        }
                    },
                    bullets: {
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        space: 5,
                        h_offset: 0,
                        v_offset: 20,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>',
                        container: "slider",
                        rtl: !1,
                        style: ""
                    },
                    thumbnails: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "transparent",
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        mhoff: 0,
                        mvoff: 0
                    },
                    tabs: {
                        container: "slider",
                        rtl: !1,
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "transparent",
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !1,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        mhoff: 0,
                        mvoff: 0
                    }
                },
                responsiveLevels: 4064,
                visibilityLevels: [2048, 1024, 778, 480],
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                maxHeight: 0,
                keepBPHeight: !1,
                useFullScreenHeight: !0,
                overflowHidden: !1,
                forceOverflow: !1,
                fixedOnTop: !1,
                autoHeight: !1,
                gridEQModule: !1,
                disableForceFullWidth: !1,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideLayerAtLimit: 0,
                hideAllLayerAtLimit: 0,
                hideSliderAtLimit: 0,
                progressBar: {
                    disableProgressBar: !1,
                    style: "horizontal",
                    size: "5px",
                    radius: 10,
                    vertical: "bottom",
                    horizontal: "left",
                    x: 0,
                    y: 0,
                    color: "rgba(255,255,255,0.5)",
                    bgcolor: "transparent",
                    basedon: "slide",
                    gapsize: 0,
                    reset: "reset",
                    gaptype: "gapboth",
                    gapcolor: "rgba(255,255,255,0.5)",
                    ease: "none",
                    visibility: {
                        0: !0,
                        1: !0,
                        2: !0,
                        3: !0
                    }
                },
                stopAtSlide: -1,
                stopAfterLoops: 0,
                shadow: 0,
                startDelay: 0,
                lazyType: "none",
                spinner: "off",
                shuffle: !1,
                perspective: "600px",
                perspectiveType: "local",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "200px",
                    presize: !1
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: !1,
                    simplifyAll: !0,
                    nextSlideOnWindowFocus: !1,
                    disableFocusListener: !1,
                    allowHTML5AutoPlayOnAndroid: !0
                },
                fanim: !1,
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    disable_onmobile: !1,
                    ddd_shadow: !1,
                    ddd_bgfreeze: !1,
                    ddd_overflow: "visible",
                    ddd_layer_overflow: "visible",
                    ddd_z_correction: 65,
                    speed: 400,
                    speedbg: 0,
                    speedls: 0
                },
                scrolleffect: {
                    set: !1,
                    fade: !1,
                    blur: !1,
                    scale: !1,
                    grayscale: !1,
                    maxblur: 10,
                    layers: !1,
                    slide: !1,
                    direction: "both",
                    multiplicator: 1.35,
                    multiplicator_layers: .5,
                    tilt: 30,
                    disable_onmobile: !1
                },
                sbtimeline: {
                    set: !1,
                    fixed: !1,
                    fixStart: 0,
                    fixEnd: 0,
                    layers: !1,
                    slide: !1,
                    ease: "none",
                    speed: 500
                },
                carousel: {
                    easing: "power3.inOut",
                    speed: 800,
                    showLayersAllTime: !1,
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: !1,
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: !1,
                    fadeout: !0,
                    maxRotation: 0,
                    maxOpacity: 100,
                    minScale: 0,
                    offsetScale: !1,
                    vary_fade: !1,
                    vary_rotation: !1,
                    vary_scale: !1,
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                observeWrap: !1,
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                stopLoop: !1,
                waitForInit: !1,
                ignoreHeightChange: !0
            }, a))
        }
}(jQuery),
function($, undefined) {
    "use strict";
    var _R = jQuery.fn.revolution,
        _ISM = _R.is_mobile();
    jQuery.extend(!0, _R, {
        checkActions: function(e, t) {
            e === undefined ? moduleEnterLeaveActions(t) : checkActions_intern(e, t)
        },
        delayer: function(e, t, i) {
            _R[e].timeStamps = _R[e].timeStamps === undefined ? {} : _R[e].timeStamps;
            var a = (new Date).getTime(),
                r = _R[e].timeStamps[i] === undefined ? parseInt(t) + 100 : a - _R[e].timeStamps[i],
                o = parseInt(r) > t;
            return o && (_R[e].timeStamps[i] = a), o
        },
        getURLDetails: function(e) {
            (e = e === undefined ? {} : e).url = e.url === undefined ? window.location.href : e.url, e.url = e.url.replace("www", ""), e.protocol = 0 === e.url.indexOf("http://") ? "http://" : 0 === e.url.indexOf("https://") ? "https://" : 0 === e.url.indexOf("//") ? "//" : "relative";
            var t = e.url.replace("https://", "");
            t = t.replace("http://", ""), "relative" === e.protocol && (t = t.replace("//", "")), t = t.split("#"), e.anchor = (e.anchor === undefined || "" == e.anchor || 0 == e.anchor.length) && t.length > 1 ? t[1] : e.anchor === undefined ? "" : e.anchor.replace("#", ""), e.anchor = e.anchor.split("?"), e.queries = t[0].split("?"), e.queries = e.queries.length > 1 ? e.queries[1] : "", e.queries = e.queries.length > 1 ? e.queries[1] : e.anchor.length > 1 ? e.anchor[1] : e.queries, e.anchor = e.anchor[0];
            (t = t[0]).split("/");
            var i = t.split("/");
            return e.host = i[0], i.splice(0, 1), e.path = "/" + i.join("/"), "/" == e.path[e.path.length - 1] && (e.path = e.path.slice(0, -1)), e.origin = "relative" !== e.protocol ? e.protocol + e.host : window.location.origin.replace("www", "") + window.location.pathname, e.hash = ("" !== e.queries && e.queries !== undefined ? "?" + e.queries : "") + ("" !== e.anchor && e.anchor !== undefined ? "#" + e.anchor : ""), e
        },
        scrollToId: function(e) {
            var t = "scrollbelow" === e.action ? (getOffContH(_R[e.id].fullScreenOffsetContainer) || 0) - (parseInt(e.offset, 0) || 0) || 0 : 0 - (parseInt(e.offset, 0) || 0),
                i = "scrollbelow" === e.action ? _R[e.id].c : jQuery("#" + e.anchor),
                a = i.length > 0 ? i.offset().top : 0,
                r = {
                    _y: _R[e.id].modal.useAsModal ? _R[e.id].cpar[0].scrollTop : window.pageYOffset !== document.documentElement.scrollTop ? 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop : window.pageYOffset
                };
            a += "scrollbelow" === e.action ? _R[e.id].sbtimeline.fixed ? _R[e.id].cpar.parent().height() + _R[e.id].fullScreenOffsetResult : jQuery(_R[e.id].slides[0]).height() : 0, tpGS.gsap.to(r, e.speed / 1e3, {
                _y: a - t,
                ease: e.ease,
                onUpdate: function() {
                    _R[e.id].modal.useAsModal ? _R[e.id].cpar.scrollTop(r._y) : _R.document.scrollTop(r._y)
                },
                onComplete: function() {
                    e.hash !== undefined && (window.location.hash = e.hash)
                }
            })
        }
    });
    var moduleEnterLeaveActions = function(e) {
            !_R[e].moduleActionsPrepared && _R[e].c[0].getElementsByClassName("rs-on-sh").length > 0 && (_R[e].c.on("tp-mouseenter", function() {
                _R[e].mouseoncontainer = !0;
                var t, i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
                if ("none" !== i && i !== undefined) {
                    if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i])
                        for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                            layer: jQuery(_R[e].layers[i][t]),
                            frame: "frame_1",
                            mode: "trigger",
                            id: e
                        });
                    for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                        layer: jQuery(_R[e].layers.static[t]),
                        frame: "frame_1",
                        mode: "trigger",
                        id: e
                    })
                }
            }), _R[e].c.on("tp-mouseleft", function() {
                _R[e].mouseoncontainer = !0;
                var t, i = _R[e].pr_next_key !== undefined ? _R[e].pr_next_key : _R[e].pr_processing_key !== undefined ? _R[e].pr_processing_key : _R[e].pr_active_key !== undefined ? _R[e].pr_active_key : _R[e].pr_next_key;
                if ("none" !== i && i !== undefined) {
                    if ((i = _R.gA(_R[e].slides[i], "key")) !== undefined && _R[e].layers[i])
                        for (t in _R[e].layers[i]) _R[e].layers[i][t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                            layer: jQuery(_R[e].layers[i][t]),
                            frame: "frame_999",
                            mode: "trigger",
                            id: e
                        });
                    for (t in _R[e].layers.static) _R[e].layers.static[t].className.indexOf("rs-on-sh") >= 0 && _R.renderLayerAnimation({
                        layer: jQuery(_R[e].layers.static[t]),
                        frame: "frame_999",
                        mode: "trigger",
                        id: e
                    })
                }
            })), _R[e].moduleActionsPrepared = !0
        },
        checkActions_intern = function(layer, id) {
            var actions = _R.gA(layer[0], "actions"),
                _L = layer.data();
            for (var ei in actions = actions.split("||"), layer.addClass("rs-waction"), _L.events = _L.events === undefined ? [] : _L.events, _R[id].lastMouseDown = {}, actions)
                if (actions.hasOwnProperty(ei)) {
                    var event = getEventParams(actions[ei].split(";"));
                    _L.events.push(event), "click" === event.on && layer[0].classList.add("rs-wclickaction"), _R[id].fullscreen_esclistener || "exitfullscreen" != event.action && "togglefullscreen" != event.action || (_R.document.keyup(function(e) {
                        27 == e.keyCode && jQuery("#rs-go-fullscreen").length > 0 && layer.trigger(event.on)
                    }), _R[id].fullscreen_esclistener = !0);
                    var targetlayer = "backgroundvideo" == event.layer ? jQuery("rs-bgvideo") : "firstvideo" == event.layer ? jQuery("rs-slide").find(".rs-layer-video") : jQuery("#" + event.layer);
                    switch (-1 != jQuery.inArray(event.action, ["toggleslider", "toggle_mute_video", "toggle_global_mute_video", "togglefullscreen"]) && (_L._togglelisteners = !0), event.action) {
                        case "togglevideo":
                            jQuery.each(targetlayer, function() {
                                updateToggleByList(jQuery(this), "videotoggledby", layer[0].id)
                            });
                            break;
                        case "togglelayer":
                            jQuery.each(targetlayer, function() {
                                updateToggleByList(jQuery(this), "layertoggledby", layer[0].id), jQuery(this).data("triggered_startstatus", event.togglestate)
                            });
                            break;
                        case "toggle_global_mute_video":
                        case "toggle_mute_video":
                            jQuery.each(targetlayer, function() {
                                updateToggleByList(jQuery(this), "videomutetoggledby", layer[0].id)
                            });
                            break;
                        case "toggleslider":
                            _R[id].slidertoggledby == undefined && (_R[id].slidertoggledby = []), _R[id].slidertoggledby.push(layer[0].id);
                            break;
                        case "togglefullscreen":
                            _R[id].fullscreentoggledby == undefined && (_R[id].fullscreentoggledby = []), _R[id].fullscreentoggledby.push(layer[0].id)
                    }
                }
            _R[id].actionsPrepared = !0, layer.on("mousedown", function(e) {
                e.touches && (e = e.touches[0]), _R[id].lastMouseDown.pageX = e.pageX, _R[id].lastMouseDown.pageY = e.pageY
            }), layer.on("click mouseenter mouseleave", function(e) {
                if ("click" === e.type) {
                    var evt = e.touches ? e.touches[0] : e;
                    if (Math.abs(evt.pageX - _R[id].lastMouseDown.pageX) > 5 || Math.abs(evt.pageY - _R[id].lastMouseDown.pageY) > 5) return
                }
                for (var i in _L.events)
                    if (_L.events.hasOwnProperty(i) && _L.events[i].on === e.type) {
                        var event = _L.events[i];
                        if (!(event.repeat !== undefined && event.repeat > 0) || _R.delayer(id, 1e3 * event.repeat, _L.c[0].id + "_" + event.action)) {
                            if ("click" === event.on && layer.hasClass("tp-temporarydisabled")) return !1;
                            var targetlayer = "backgroundvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find("rs-sbg-wrap rs-bgvideo") : "firstvideo" == event.layer ? jQuery(_R[id].slides[_R[id].pr_active_key]).find(".rs-layer-video").first() : jQuery("#" + event.layer),
                                tex = targetlayer.length > 0;
                            switch (event.action) {
                                case "menulink":
                                    var linkto = _R.getURLDetails({
                                            url: event.url,
                                            anchor: event.anchor
                                        }),
                                        linkfrom = _R.getURLDetails();
                                    linkto.host == linkfrom.host && linkto.path == linkfrom.path && "_self" === event.target ? _R.scrollToId({
                                        id: id,
                                        offset: event.offset,
                                        action: event.action,
                                        anchor: event.anchor,
                                        hash: linkto.hash,
                                        speed: event.speed,
                                        ease: event.ease
                                    }) : "_self" === event.target ? window.location = linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "") : window.open(linkto.url + (linkto.anchor !== undefined && "" !== linkto.anchor ? "#" + linkto.anchor : "")), e.preventDefault();
                                    break;
                                case "nextframe":
                                case "prevframe":
                                case "gotoframe":
                                case "togglelayer":
                                case "toggleframes":
                                case "startlayer":
                                case "stoplayer":
                                    if (targetlayer[0] === undefined) continue;
                                    var _ = _R[id]._L[targetlayer[0].id],
                                        frame = event.frame,
                                        tou = "triggerdelay";
                                    if ("click" === e.type && _.clicked_time_stamp !== undefined && (new Date).getTime() - _.clicked_time_stamp < 300) return;
                                    if ("mouseenter" === e.type && _.mouseentered_time_stamp !== undefined && (new Date).getTime() - _.mouseentered_time_stamp < 300) return;
                                    if (clearTimeout(_.triggerdelayIn), clearTimeout(_.triggerdelayOut), clearTimeout(_.triggerdelay), "click" === e.type && (_.clicked_time_stamp = (new Date).getTime()), "mouseenter" === e.type && (_.mouseentered_time_stamp = (new Date).getTime()), "mouseleave" === e.type && (_.mouseentered_time_stamp = undefined), "nextframe" === event.action || "prevframe" === event.action) {
                                        _.forda = _.forda === undefined ? getFordWithAction(_) : _.forda;
                                        var inx = jQuery.inArray(_.currentframe, _.ford);
                                        for ("nextframe" === event.action && inx++, "prevframe" === event.action && inx--;
                                            "skip" !== _.forda[inx] && inx > 0 && inx < _.forda.length - 1;) "nextframe" === event.action && inx++, "prevframe" === event.action && inx--, inx = Math.min(Math.max(0, inx), _.forda.length - 1);
                                        frame = _.ford[inx]
                                    }
                                    jQuery.inArray(event.action, ["toggleframes", "togglelayer", "startlayer", "stoplayer"]) >= 0 && (_.triggeredstate = "startlayer" === event.action || "togglelayer" === event.action && "frame_1" !== _.currentframe || "toggleframes" === event.action && _.currentframe !== event.frameN, "togglelayer" === event.action && !0 === _.triggeredstate && _.currentframe !== undefined && "frame_999" !== _.currentframe && (_.triggeredstate = !1), frame = _.triggeredstate ? "toggleframes" === event.action ? event.frameN : "frame_1" : "toggleframes" === event.action ? event.frameM : "frame_999", tou = _.triggeredstate ? "triggerdelayIn" : "triggerdelayOut", _.triggeredstate ? _R.toggleState(_.layertoggledby) : (_R.stopVideo && _R.stopVideo(targetlayer, id), _R.unToggleState(_.layertoggledby)));
                                    var pars = {
                                        layer: targetlayer,
                                        frame: frame,
                                        mode: "trigger",
                                        id: id
                                    };
                                    !0 === event.children && (pars.updateChildren = !0, pars.fastforward = !0), _R.renderLayerAnimation && (clearTimeout(_[tou]), _[tou] = setTimeout(function(e) {
                                        _R.renderLayerAnimation(e)
                                    }, 1e3 * event.delay, pars));
                                    break;
                                case "playvideo":
                                    tex && _R.playVideo(targetlayer, id);
                                    break;
                                case "stopvideo":
                                    tex && _R.stopVideo && _R.stopVideo(targetlayer, id);
                                    break;
                                case "togglevideo":
                                    tex && (_R.isVideoPlaying(targetlayer, id) ? _R.stopVideo && _R.stopVideo(targetlayer, id) : _R.playVideo(targetlayer, id));
                                    break;
                                case "mutevideo":
                                    tex && _R.Mute(targetlayer, id, !0);
                                    break;
                                case "unmutevideo":
                                    tex && _R.Mute && _R.Mute(targetlayer, id, !1);
                                    break;
                                case "toggle_mute_video":
                                    tex && (_R.Mute(targetlayer, id) ? _R.Mute(targetlayer, id, !1) : _R.Mute && _R.Mute(targetlayer, id, !0));
                                    break;
                                case "toggle_global_mute_video":
                                    var pvl = _R[id].playingvideos != undefined && _R[id].playingvideos.length > 0;
                                    pvl && (_R[id].globalmute ? jQuery.each(_R[id].playingvideos, function(e, t) {
                                        _R.Mute && _R.Mute(t, id, !1)
                                    }) : jQuery.each(_R[id].playingvideos, function(e, t) {
                                        _R.Mute && _R.Mute(t, id, !0)
                                    })), _R[id].globalmute = !_R[id].globalmute;
                                    break;
                                default:
                                    tpGS.gsap.delayedCall(event.delay, function(targetlayer, id, event, layer) {
                                        switch (event.action) {
                                            case "openmodal":
                                                if (event.modalslide = event.modalslide === undefined ? 0 : event.modalslide, window.RS_60_MODALS === undefined || -1 == jQuery.inArray(event.modal, window.RS_60_MODALS)) {
                                                    _R.showModalCover(id, event, "show");
                                                    var data = {
                                                        action: "revslider_ajax_call_front",
                                                        client_action: "get_slider_html",
                                                        token: _R[id].ajaxNonce,
                                                        alias: event.modal,
                                                        usage: "modal"
                                                    };
                                                    jQuery.ajax({
                                                        type: "post",
                                                        url: _R[id].ajaxUrl,
                                                        dataType: "json",
                                                        data: data,
                                                        success: function(e, t, i) {
                                                            1 == e.success && (jQuery("body").append(e.data), setTimeout(function() {
                                                                _R.showModalCover(id, event, "hide"), _R.document.trigger("RS_OPENMODAL_" + event.modal, event.modalslide)
                                                            }, 49))
                                                        },
                                                        error: function(e) {
                                                            console.log("Modal Can not be Loaded"), console.log(e)
                                                        }
                                                    })
                                                } else _R.document.trigger("RS_OPENMODAL_" + event.modal, event.modalslide);
                                                break;
                                            case "closemodal":
                                                _R.revModal(id, {
                                                    mode: "close"
                                                });
                                                break;
                                            case "callback":
                                                eval(event.callback);
                                                break;
                                            case "simplelink":
                                                window.open(event.url, event.target);
                                                break;
                                            case "simulateclick":
                                                targetlayer.length > 0 && targetlayer.trigger("click");
                                                break;
                                            case "toggleclass":
                                                targetlayer.length > 0 && targetlayer.toggleClass(event.classname);
                                                break;
                                            case "scrollbelow":
                                            case "scrollto":
                                                "scrollbelow" === event.action && layer.addClass("tp-scrollbelowslider"), _R.scrollToId({
                                                    id: id,
                                                    offset: event.offset,
                                                    action: event.action,
                                                    anchor: event.id,
                                                    speed: event.speed,
                                                    ease: event.ease
                                                });
                                                break;
                                            case "jumptoslide":
                                                switch (event.slide.toLowerCase()) {
                                                    case "rs-random":
                                                        var ts = Math.min(Math.max(0, Math.ceil(Math.random() * _R[id].realslideamount) - 1));
                                                        ts = _R[id].activeRSSlide == ts ? ts > 0 ? ts - 1 : ts + 1 : ts, _R.callingNewSlide(id, _R[id].slides[ts].dataset.key, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "+1":
                                                    case "next":
                                                    case "rs-next":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, 1, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "rs-previous":
                                                    case "rs-prev":
                                                    case "previous":
                                                    case "prev":
                                                    case "-1":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, -1, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "first":
                                                    case "rs-first":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 1, _R.callingNewSlide(id, 0, "carousel" === _R[id].sliderType);
                                                        break;
                                                    case "last":
                                                    case "rs-last":
                                                        _R[id].sc_indicator = "arrow", _R[id].sc_indicator_dir = 0, _R.callingNewSlide(id, _R[id].slideamount - 1, "carousel" === _R[id].sliderType);
                                                        break;
                                                    default:
                                                        var ts = _R.isNumeric(event.slide) ? parseInt(event.slide, 0) : event.slide;
                                                        _R.callingNewSlide(id, ts, "carousel" === _R[id].sliderType)
                                                }
                                                break;
                                            case "toggleslider":
                                                _R[id].noloopanymore = 0, "playing" == _R[id].sliderstatus ? (_R[id].c.revpause(), _R[id].forcepaused = !0, _R.unToggleState(_R[id].slidertoggledby)) : (_R[id].forcepaused = !1, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby));
                                                break;
                                            case "pauseslider":
                                                _R[id].c.revpause(), _R.unToggleState(_R[id].slidertoggledby);
                                                break;
                                            case "playslider":
                                                _R[id].noloopanymore = 0, _R[id].c.revresume(), _R.toggleState(_R[id].slidertoggledby);
                                                break;
                                            case "gofullscreen":
                                            case "exitfullscreen":
                                            case "togglefullscreen":
                                                var gf;
                                                jQuery(".rs-go-fullscreen").length > 0 && ("togglefullscreen" == event.action || "exitfullscreen" == event.action) ? (jQuery(".rs-go-fullscreen").removeClass("rs-go-fullscreen"), gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), _R[id].minHeight = _R[id].oldminheight, _R[id].infullscreenmode = !1, _R[id].c.revredraw(), _R[id].c.revredraw(), jQuery(window).trigger("resize"), _R.unToggleState(_R[id].fullscreentoggledby)) : 0 != jQuery(".rs-go-fullscreen").length || "togglefullscreen" != event.action && "gofullscreen" != event.action || (gf = _R[id].c.closest("rs-fullwidth-wrap").length > 0 ? _R[id].c.closest("rs-fullwidth-wrap") : _R[id].c.closest("rs-module-wrap"), gf.addClass("rs-go-fullscreen"), _R[id].oldminheight = _R[id].minHeight, _R[id].minHeight = _R.getWinH(id), _R[id].infullscreenmode = !0, jQuery(window).trigger("resize"), _R.toggleState(_R[id].fullscreentoggledby), _R[id].c.revredraw());
                                                break;
                                            default:
                                                _R[id].c.trigger("layeraction", [event.action, layer, event])
                                        }
                                    }, [targetlayer, id, event, layer])
                            }
                        }
                    }
            })
        };

    function getFordWithAction(e) {
        var t = [];
        for (var i in e.ford) e.frames[e.ford[i]].timeline.waitoncall ? t.push(e.ford[i]) : t.push("skip");
        return t
    }

    function updateToggleByList(e, t, i) {
        var a = e.data(t);
        a === undefined && (a = []), a.push(i), e.data(t, a)
    }

    function getEventParams(e) {
        var t = {
            on: "click",
            delay: 0,
            ease: "power2.out",
            speed: 400
        };
        for (var i in e)
            if (e.hasOwnProperty(i)) {
                var a = e[i].split(":");
                switch (a.length > 2 && "call" === a[0] && (a[1] = a.join(":").replace(a[0] + ":", "")), a[0]) {
                    case "modal":
                        t.modal = a[1];
                        break;
                    case "ms":
                        t.modalslide = a[1];
                        break;
                    case "m":
                        t.frameM = a[1];
                        break;
                    case "n":
                        t.frameN = a[1];
                        break;
                    case "o":
                        t.on = "click" === a[1] || "c" === a[1] ? "click" : "ml" === a[1] || "mouseleave" === a[1] ? "mouseleave" : "mouseenter" === a[1] || "me" === a[1] ? "mouseenter" : a[1];
                        break;
                    case "d":
                        t.delay = parseInt(a[1], 0) / 1e3, t.delay = "NaN" === t.delay || isNaN(t.delay) ? 0 : t.delay;
                        break;
                    case "rd":
                        t.repeat = parseInt(a[1], 0) / 1e3, t.repeat = "NaN" === t.repeat || isNaN(t.repeat) ? 0 : t.repeat;
                        break;
                    case "a":
                        t.action = a[1];
                        break;
                    case "f":
                        t.frame = a[1];
                        break;
                    case "slide":
                        t.slide = a[1];
                        break;
                    case "layer":
                        t.layer = a[1];
                        break;
                    case "sp":
                        t.speed = parseInt(a[1], 0);
                        break;
                    case "e":
                        t.ease = a[1];
                        break;
                    case "ls":
                        t.togglestate = a[1];
                        break;
                    case "offset":
                        t.offset = a[1];
                        break;
                    case "call":
                        t.callback = a[1];
                        break;
                    case "url":
                        t.url = "";
                        for (var r = 1; r < a.length; r++) t.url += a[r] + (r === a.length - 1 ? "" : ":");
                        break;
                    case "target":
                        t.target = a[1];
                        break;
                    case "class":
                        t.classname = a[1];
                        break;
                    case "ch":
                        t.children = "true" == a[1] || 1 == a[1] || "t" == a[1];
                        break;
                    default:
                        a[0].length > 0 && "" !== a[0] && (t[a[0]] = a[1])
                }
            }
        return t
    }
    var getOffContH = function(e) {
        if (e == undefined) return 0;
        if (e.split(",").length > 1) {
            var t = e.split(","),
                i = 0;
            return t && jQuery.each(t, function(e, t) {
                jQuery(t).length > 0 && (i += jQuery(t).outerHeight(!0))
            }), i
        }
        return jQuery(e).height()
    }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution;
    t.is_mobile();
    jQuery.extend(!0, t, {
        prepareCarousel: function(e, i, a) {
            if (void 0 !== e) {
                var o = t[e].carousel;
                o.slidepositions = void 0 === o.slidepositions ? [] : o.slidepositions, o.slideFakePositions = void 0 === o.slideFakePositions ? [] : o.slideFakePositions, i = o.lastdirection = r(i, o.lastdirection), t.setCarouselDefaults(e), void 0 === o.slidepositions[0] && (o.slideAnims = [], t.organiseCarousel(e, "right", !0, !1, !1), o.focused = 0, o.keepFocusedFirst = !0), o.slide_offset = void 0 !== o.slide_offset && t.isNumeric(o.slide_offset) ? o.slide_offset : 0, o.swipeTo = o.slide_offset + s(e), o.swipeToDistance = Math.abs(o.slide_offset) + Math.abs(s(e)), void 0 !== o.swipeTo && t.isNumeric(o.swipeTo) ? void 0 !== a ? t.swipeAnimate({
                    id: e,
                    to: o.swipeTo,
                    distance: o.swipeToDistance,
                    direction: i,
                    fix: !0,
                    speed: a
                }) : t.swipeAnimate({
                    id: e,
                    to: o.swipeTo,
                    distance: o.swipeToDistance,
                    direction: i,
                    fix: !0
                }) : t.swipeAnimate({
                    id: e,
                    to: 0,
                    direction: i,
                    speed: 0
                })
            }
        },
        carouselToEvalPosition: function(e, a, o) {
            var s = t[e].carousel;
            if (s.justify) s.focused = void 0 === s.focused ? 0 : s.focused, s.slidepositions[s.focused] = void 0 === s.slidepositions[s.focused] ? 0 : s.slidepositions[s.focused], s.slide_offset_target = i(e, s.focused);
            else {
                a = s.lastdirection = r(a, s.lastdirection);
                var n = "center" === s.horizontal_align ? (s.wrapwidth / 2 - s.slide_width / 2 - s.slide_offset) / s.slide_width : (0 - s.slide_offset) / s.slide_width,
                    d = n % t[e].slideamount,
                    l = d - Math.floor(d),
                    c = -1 * (Math.ceil(d) - d),
                    p = -1 * (Math.floor(d) - d),
                    g = l * s.slide_width,
                    u = g >= 20 && "left" === a ? 1 : g >= s.slide_width - 20 && "right" === a ? 2 : g < 20 && "left" === a ? 3 : g < s.slide_width - 20 && "right" === a ? 4 : 5,
                    h = 1 === u || 2 === u ? c : 3 === u || 4 === u ? p : 0;
                s.slide_offset_target = (s.infinity ? h : d < 0 ? d : n > t[e].slideamount - 1 ? n - (t[e].slideamount - 1) : h) * s.slide_width
            }
            return s.slide_offset_target !== s.slide_offset_targetCACHE && !0 !== o && (0 !== Math.abs(s.slide_offset_target) ? t.animateCarousel(e, a, !0) : t.organiseCarousel(e, a), s.slide_offset_targetCACHE = s.slide_offset_target), s.slide_offset_target
        },
        loadVisibleCarouselItems: function(e, i) {
            var a = [];
            t[e].carousel.focused = parseInt(t[e].carousel.focused, 0), t[e].carousel.focused = t.isNumeric(t[e].carousel.focused) ? t[e].carousel.focused : 0;
            for (var r = 0; r < Math.ceil(t[e].carousel.maxVisibleItems / 2); r++) {
                var o = "right" === t[e].carousel.horizontal_align ? t[e].carousel.focused - r : t[e].carousel.focused + r,
                    s = "center" === t[e].carousel.horizontal_align ? t[e].carousel.focused - r : "left" === t[e].carousel.horizontal_align ? t[e].carousel.maxVisibleItems + o - 1 : o - t[e].carousel.maxVisibleItems + 1;
                o = o >= t[e].slideamount ? o - t[e].slideamount + 0 : o, s = s >= t[e].slideamount ? s - t[e].slideamount + 0 : s, o = o < 0 ? t[e].slideamount + o : o, s = s < 0 ? t[e].slideamount + s : s, a.push(t[e].slides[o]), o !== s && a.push(t[e].slides[s])
            }
            return i && (t.loadImages(a, e, 1), t.waitForCurrentImages(a, e)), a
        },
        organiseCarousel: function(e, i, a, r, o) {
            Math.round(1e5 * Math.random());
            var s = t[e].carousel,
                n = "center" === s.horizontal_align ? 2 : 1,
                d = Math.ceil(s.maxVisibleItems / n),
                l = "center" === s.horizontal_align ? s.wrapwidth / 2 + s.maxwidth / 2 : s.maxwidth - s.slide_width,
                c = "center" === s.horizontal_align ? s.wrapwidth / 2 - s.maxwidth / 2 : 0 - s.slide_width,
                p = 0,
                g = 0,
                u = 0;
            if (s.ocfirsttun = !0, i = s.slide_offset < s.cached_slide_offset ? "left" : "right", s.cached_slide_offset = s.slide_offset, !0 !== s.justify && "center" === s.horizontal_align) {
                var h = 2 * (s.windhalf - s.wrapoffset) + s.slide_width;
                h >= s.maxwidth && ("left" === i && (l = 2 * s.windhalf, c = 0 - (s.slide_width - (h - s.maxwidth))), "right" === i && (l = 2 * s.windhalf - (h - s.maxwidth), c = 0 - s.slide_width))
            }
            for (var m = 2 * s.windhalf, v = 0, f = -1, y = 0; y < s.len; y++) !0 === s.justify ? (p += y > 0 ? s.slide_widths[y - 1] + s.space : s.slide_offset, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align && (s.slideFakePositions[y] = p - s.slide_offset), c = 0 - s.slide_widths[y], l = s.maxwidth - s.slide_widths[y], s.inneroffset = 0) : (p = y * s.slide_width + s.slide_offset, s.wrapwidth >= s.maxwidth && "left" === s.horizontal_align && (s.slideFakePositions[y] = y * s.slide_width), s.wrapwidth >= s.maxwidth && "right" === s.horizontal_align && (s.slideFakePositions[y] = s.wrapwidth - (y + 1) * s.slide_width)), u = g = p, s.infinity && (g = g >= l - s.inneroffset ? g - s.maxwidth : g <= c - s.inneroffset ? g + s.maxwidth : g), m > g && (m = g, y), v < g && (v = g, f = y), s.slidepositions[y] = u > s.maxwidth + l ? g - s.maxwidth : u < c - s.maxwidth ? g + s.maxwidth : g;
            s.infinity && m > 0 && v > s.wrapwidth && (s.slidepositions[f] -= s.maxwidth);
            var b = 999,
                w = 0,
                _ = (t[e].module.width, !1),
                x = "right" === s.horizontal_align ? 0 : s.wrapwidth;
            if (t[e].slides)
                for (y = 0; y < t[e].slides.length; y++) {
                    var S = {
                            left: (g = s.slidepositions[y]) + s.inneroffset,
                            width: !0 === s.justify ? s.slide_widths[y] : s.slide_width,
                            x: 0
                        },
                        k = 0;
                    if (void 0 === s.slideAnims[y] && (S.transformOrigin = "50% " + s.vertical_align, S.scale = 1, S.force3D = !0, S.transformStyle = "3D" != t[e].parallax.type && "3d" != t[e].parallax.type ? "flat" : "preserve-3d"), s.justify) S.autoAlpha = 1, s.wrapwidth >= s.maxwidth && "center" !== s.horizontal_align || ("center" === s.horizontal_align && s.slidepositions[y] < s.windhalf && s.slidepositions[y] + s.slide_widths[y] > s.windhalf ? s.focused = y : "left" === s.horizontal_align && s.slidepositions[y] >= -25 && s.slidepositions[y] < s.windhalf && (!_ || s.slidepositions[y] < x) ? (s.focused = y, _ = !0, x = s.slidepositions[y]) : "right" === s.horizontal_align && s.slidepositions[y] + s.slide_widths[y] <= s.wrapwidth + 25 && (s.slide_widths[y] < s.windhalf && s.slidepositions[y] > s.windhalf || s.slidepositions[y] > s.wrapwidth - s.slide_widths[y]) && (!_ || s.slidepositions[y] > x) && (s.focused = y, _ = !0, x = s.slidepositions[y]), s.focused = s.focused >= s.len ? s.infinity ? 0 : s.len - 1 : s.focused < 0 ? s.infinity ? s.len - 1 : 0 : s.focused);
                    else {
                        k = "center" === s.horizontal_align ? (Math.abs(s.wrapwidth / 2) - (S.left + s.slide_width / 2)) / s.slide_width : (s.inneroffset - S.left) / s.slide_width, (Math.abs(k) < b || 0 === k) && (b = Math.abs(k), s.focused = y), void 0 !== s.minScale && s.minScale > 0 && (s.vary_scale ? S.scale = 1 - Math.abs((1 - s.minScale) / d * k) : S.scale = k >= 1 || k <= -1 ? s.minScale : s.minScale + (1 - s.minScale) * (1 - Math.abs(k)), w = k * (S.width - S.width * S.scale) / 2), s.fadeout && (s.vary_fade ? S.autoAlpha = 1 - Math.abs(s.maxOpacity / d * k) : S.autoAlpha = k >= 1 || k <= -1 ? s.maxOpacity : s.maxOpacity + (1 - s.maxOpacity) * (1 - Math.abs(k)));
                        var L = Math.ceil(s.maxVisibleItems / n) - Math.abs(k);
                        S.autoAlpha = void 0 === S.autoAlpha ? 1 : S.autoAlpha, S.autoAlpha = Math.max(0, Math.min(L, S.autoAlpha)), void 0 !== s.maxRotation && 0 != Math.abs(s.maxRotation) && (s.vary_rotation ? (S.rotationY = Math.abs(s.maxRotation) - Math.abs((1 - Math.abs(1 / d * k)) * s.maxRotation), S.autoAlpha = Math.abs(S.rotationY) > 90 ? 0 : S.autoAlpha) : S.rotationY = k >= 1 || k <= -1 ? s.maxRotation : Math.abs(k) * s.maxRotation, S.rotationY = k < 0 ? -1 * S.rotationY : S.rotationY, t.isSafari11() && (S.z = 0 !== k ? 0 - Math.abs(S.rotationY) : 0)), S.x = Math.floor(-1 * s.space * k * (s.offsetScale ? S.scale : 1)), void 0 !== S.scale && (S.x = S.x + w)
                    }
                    S.x += s.wrapwidth >= s.maxwidth && ("left" === s.horizontal_align || "right" === s.horizontal_align) ? s.slideFakePositions[y] : Math.floor(S.left), delete S.left, S.zIndex = s.justify ? 95 : Math.round(100 - Math.abs(5 * k)), !0 !== o && (void 0 !== s.slideAnims[y] && (S.width === s.slideAnims[y].width && delete S.width, S.x === s.slideAnims[y].x && delete S.x, S.autoAlpha === s.slideAnims[y].autoAlpha && delete S.autoAlpha, S.scale === s.slideAnims[y].scale && delete S.scale, S.zIndex === s.slideAnims[y].zIndex && delete S.zIndex, S.rotationY === s.slideAnims[y].rotationY && delete S.rotationY), tpGS.gsap.set(t[e].slides[y], S), s.slideAnims[y] = jQuery.extend(!0, s.slideAnims[y], S))
                }
            if (t.loadVisibleCarouselItems(e, !0), r && !0 !== o) {
                if (s.focused = void 0 === s.focused ? 0 : s.focused, s.oldfocused = void 0 === s.oldfocused ? 0 : s.oldfocused, t[e].pr_next_key = s.focused, s.focused !== s.oldfocused)
                    for (var R in void 0 !== s.oldfocused && t.removeTheLayers(jQuery(t[e].slides[s.oldfocused]), e), t.animateTheLayers({
                            slide: s.focused,
                            id: e,
                            mode: "start"
                        }), t.animateTheLayers({
                            slide: "individual",
                            id: e,
                            mode: t[e].carousel.allLayersStarted ? "rebuild" : "start"
                        }), t[e].sbgs) t[e].sbgs.hasOwnProperty(R) && void 0 !== t[e].sbgs[R].bgvid && 0 !== t[e].sbgs[R].bgvid.length && ("" + t[e].sbgs[R].skeyindex == "" + s.focused ? t.playBGVideo(e, t.gA(t[e].pr_next_slide[0], "key")) : t.stopBGVideo(e, t[e].sbgs[R].key));
                s.oldfocused = s.focused, t[e].c.trigger("revolution.nextslide.waiting")
            }
        },
        swipeAnimate: function(e) {
            var i = t[e.id].carousel,
                r = {
                    from: i.slide_offset,
                    to: e.to
                },
                o = void 0 === e.speed ? .5 : e.speed;
            if (i.distance = void 0 !== e.distance ? e.distance : e.to, void 0 !== i.positionanim && i.positionanim.pause(), e.fix) {
                if (!1 !== i.snap) {
                    var s = i.slide_offset,
                        n = "end" === e.phase ? i.focusedBeforeSwipe : i.focused;
                    i.slide_offset = e.to, t.organiseCarousel(e.id, e.direction, !0, !1, !1), Math.abs(i.swipeDistance) > 40 && n == i.focused && (i.focused = "right" === e.direction ? i.focused - 1 : i.focused + 1, i.focused = i.focused >= i.len ? i.infinity ? 0 : i.len - 1 : i.focused < 0 ? i.infinity ? i.len - 1 : 0 : i.focused), r.to += t.carouselToEvalPosition(e.id, e.direction, !0), i.slide_offset = s, t.organiseCarousel(e.id, e.direction, !0, !1, !1), i.keepFocusedFirst && (i.keepFocusedFirst = !1, i.focused = 0)
                } else !0 !== i.infinity ? (r.to > 0 && (r.to = 0), r.to < i.wrapwidth - i.maxwidth && (r.to = i.wrapwidth - i.maxwidth)) : "end" === e.phase ? i.dragModeJustEnded = !0 : !0 !== i.dragModeJustEnded ? r.to += t.carouselToEvalPosition(e.id, e.direction, !0) : i.dragModeJustEnded = !1;
                0 !== (o = i.speed / 1e3 * a(Math.abs(Math.abs(r.from) - Math.abs(i.distance)) / i.wrapwidth)) && o < .1 && Math.abs(r.to) > 25 && (o = .3)
            }
            i.swipeDistance = 0, o = !0 !== i.firstSwipedDone ? 0 : o, i.firstSwipedDone = !0, i.positionanim = tpGS.gsap.to(r, o, {
                from: r.to,
                onUpdate: function() {
                    i.slide_offset = r.from % i.maxwidth, t.organiseCarousel(e.id, e.direction, !0 !== e.fix, !0 !== e.fix), i.slide_offset = r.from
                },
                onComplete: function() {
                    i.slide_offset = r.from % i.maxwidth, "carousel" !== t[e.id].sliderType || i.fadein || (tpGS.gsap.to(t[e.id].canvas, 1, {
                        scale: 1,
                        opacity: 1
                    }), i.fadein = !0), i.lastNotSimplifedSlideOffset = i.slide_offset, i.justDragged = !1, e.fix && (i.focusedAfterAnimation = i.focused, e.newSlide && i.focusedBeforeSwipe !== i.focused && t.callingNewSlide(e.id, jQuery(t[e.id].slides[i.focused]).data("key"), !0), t.organiseCarousel(e.id, e.direction, !0, !0), t[e.id].c.trigger("revolution.slide.carouselchange", {
                        slider: e.id,
                        slideIndex: parseInt(t[e.id].pr_active_key, 0) + 1,
                        slideLIIndex: t[e.id].pr_active_key,
                        slide: t[e.id].pr_next_slide,
                        currentslide: t[e.id].pr_next_slide,
                        prevSlideIndex: void 0 !== t[e.id].pr_lastshown_key && parseInt(t[e.id].pr_lastshown_key, 0) + 1,
                        prevSlideLIIndex: void 0 !== t[e.id].pr_lastshown_key && parseInt(t[e.id].pr_lastshown_key, 0),
                        prevSlide: void 0 !== t[e.id].pr_lastshown_key && t[e.id].slides[t[e.id].pr_lastshown_key]
                    }))
                },
                ease: e.easing ? e.easing : i.easing
            })
        },
        defineCarouselElements: function(e) {
            var i = t[e].carousel;
            i.infbackup = i.infinity, i.maxVisiblebackup = i.maxVisibleItems, i.slide_offset = "none", i.slide_offset = 0, i.cached_slide_offset = 0, i.wrap = jQuery(t[e].canvas[0].parentNode), 0 !== i.maxRotation && ("3D" !== t[e].parallax.type && "3d" !== t[e].parallax.type || tpGS.gsap.set(i.wrap, {
                perspective: "1600px",
                transformStyle: "preserve-3d"
            }))
        },
        setCarouselDefaults: function(e, i) {
            var a = t[e].carousel;
            if (a.slide_width = !0 !== a.stretch ? t[e].gridwidth[t[e].level] * (0 === t[e].CM.w ? 1 : t[e].CM.w) : t[e].canv.width, a.slide_height = !0 !== a.stretch ? t[e].infullscreenmode ? t.getWinH(e) - t.getFullscreenOffsets(e) : t[e].gridheight[t[e].level] * (0 === t[e].CM.w ? 1 : t[e].CM.w) : t[e].canv.height, a.ratio = a.slide_width / a.slide_height, a.len = t[e].slides.length, a.maxwidth = t[e].slideamount * a.slide_width, 1 != a.justify && a.maxVisiblebackup > a.len && (a.maxVisibleItems = a.len % 2 ? a.len : a.len + 1), a.wrapwidth = a.maxVisibleItems * a.slide_width + (a.maxVisibleItems - 1) * a.space, a.wrapwidth = "auto" != t[e].sliderLayout ? a.wrapwidth > t[e].canv.width ? t[e].canv.width : a.wrapwidth : a.wrapwidth > t[e].module.width ? t[e].module.width : a.wrapwidth, !0 === a.justify) {
                a.slide_height = "fullscreen" === t[e].sliderLayout ? t[e].module.height : t[e].gridheight[t[e].level], a.slide_widths = [], a.slide_widthsCache = void 0 === a.slide_widthsCache ? [] : a.slide_widthsCache, a.maxwidth = 0;
                for (var r = 0; r < a.len; r++)
                    if (t[e].slides.hasOwnProperty(r)) {
                        var o = t.gA(t[e].slides[r], "iratio");
                        o = void 0 === o || 0 === o || null === o ? a.ratio : o, a.slide_widths[r] = Math.round(a.slide_height * o), !1 !== a.justifyMaxWidth && (a.slide_widths[r] = Math.min(a.wrapwidth, a.slide_widths[r])), a.slide_widths[r] !== a.slide_widthsCache[r] && (a.slide_widthsCache[r] = a.slide_widths[r], !0 !== i && tpGS.gsap.set(t[e].slides[r], {
                            width: a.slide_widths[r]
                        })), a.maxwidth += a.slide_widths[r] + a.space
                    }
            }
            if (a.infinity = !(a.wrapwidth >= a.maxwidth) && a.infbackup, !0 !== a.quickmode) {
                a.wrapoffset = "center" === a.horizontal_align ? (t[e].canv.width - t[e].outNavDims.right - t[e].outNavDims.left - a.wrapwidth) / 2 : 0, a.wrapoffset = "auto" != t[e].sliderLayout && t[e].outernav ? 0 : a.wrapoffset < t[e].outNavDims.left ? t[e].outNavDims.left : a.wrapoffset;
                var s = "3D" == t[e].parallax.type || "3d" == t[e].parallax.type ? "visible" : "hidden",
                    n = "right" === a.horizontal_align ? {
                        left: "auto",
                        right: a.wrapoffset + "px",
                        width: a.wrapwidth,
                        overflow: s
                    } : "left" === a.horizontal_align || a.wrapwidth < t.winW ? {
                        right: "auto",
                        left: a.wrapoffset + "px",
                        width: a.wrapwidth,
                        overflow: s
                    } : {
                        right: "auto",
                        left: "auto",
                        width: "100%",
                        overflow: s
                    };
                void 0 !== a.cacheWrapObj && n.left === a.cacheWrapObj.left && n.right === a.cacheWrapObj.right && n.width === a.cacheWrapObj.width || (window.requestAnimationFrame(function() {
                    tpGS.gsap.set(a.wrap, n), t[e].carousel.wrapoffset > 0 && tpGS.gsap.set(t[e].canvas, {
                        left: 0
                    })
                }), a.cacheWrapObj = jQuery.extend(!0, {}, n)), a.inneroffset = "right" === a.horizontal_align ? a.wrapwidth - a.slide_width : 0, a.windhalf = "auto" === t[e].sliderLayout ? t[e].module.width / 2 : t.winW / 2
            }
        }
    });
    var i = function(e, i) {
            var a = t[e].carousel;
            return "center" === a.horizontal_align ? a.windhalf - a.slide_widths[i] / 2 - a.slidepositions[i] : "left" === a.horizontal_align ? 0 - a.slidepositions[i] : a.wrapwidth - a.slide_widths[i] - a.slidepositions[i]
        },
        a = function(e) {
            return e < 1 ? Math.sqrt(1 - (e -= 1) * e) : Math.sqrt(e)
        },
        r = function(e, t) {
            return null === e || jQuery.isEmptyObject(e) ? t : void 0 === e ? "right" : e
        },
        o = function(e, t) {
            return Math.abs(e) > Math.abs(t) ? e > 0 ? e - Math.abs(Math.floor(e / t) * t) : e + Math.abs(Math.floor(e / t) * t) : e
        },
        s = function(e) {
            var i, a, r, s, n, d = 0,
                l = t[e].carousel;
            if (void 0 !== l.positionanim && l.positionanim.pause(), l.justify) "center" === l.horizontal_align ? d = l.windhalf - l.slide_widths[l.focused] / 2 - l.slidepositions[l.focused] : "left" === l.horizontal_align ? d = 0 - l.slidepositions[l.focused] : "right" === l.horizontal_align && (d = l.wrapwidth - l.slide_widths[l.focused] - l.slidepositions[l.focused]), d = d > l.maxwidth / 2 ? l.maxwidth - d : d < 0 - l.maxwidth / 2 ? d + l.maxwidth : d;
            else {
                var c = t[e].pr_processing_key >= 0 ? t[e].pr_processing_key : t[e].pr_active_key >= 0 ? t[e].pr_active_key : 0,
                    p = ("center" === l.horizontal_align ? (l.wrapwidth / 2 - l.slide_width / 2 - l.slide_offset) / l.slide_width : (0 - l.slide_offset) / l.slide_width) % t[e].slideamount;
                d = (l.infinity ? (i = p, a = c, r = t[e].slideamount, n = a - r - i, s = o(s = a - i, r), n = o(n, r), -(Math.abs(s) > Math.abs(n) ? n : s)) : p - c) * l.slide_width
            }
            return !1 === l.snap && l.justDragged && (d = 0), l.justDragged = !1, d
        }
}(jQuery),
function(e) {
    "use strict";
    var t = ["chars", "words", "lines"],
        i = ["Top", "Right", "Bottom", "Left"],
        a = ["TopLeft", "TopRight", "BottomRight", "BottomLeft"],
        r = ["top", "right", "bottom", "left"],
        o = jQuery.fn.revolution,
        s = o.is_mobile();
    o.is_android();
    jQuery.extend(!0, o, {
        checkLayerDimensions: function(e) {
            var t = !1;
            for (var i in o[e.id].layers[e.skey])
                if (o[e.id].layers[e.skey].hasOwnProperty(i)) {
                    var a = o[e.id].layers[e.skey][i],
                        r = o[e.id]._L[a.id];
                    r.eow !== a.offsetWidth && "true" !== o.gA(a, "vary-layer-dims") && (t = !0), r.lastknownwidth = r.eow, r.lastknownheight = r.eoh, r._slidelink || o[e.id].caches.calcResponsiveLayersList.push({
                        a: o[e.id]._L[a.id].c,
                        b: e.id,
                        c: 0,
                        d: r.rsp_bd,
                        e: e.slideIndex
                    })
                }
            return t
        },
        requestLayerUpdates: function(e, t, i, a) {
            var r, s, n, d;
            if (void 0 !== i) r = i, o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (void 0 === o[e]._L[r]._ligid || !0 !== o[e]._L[o[e]._L[r]._ligid].childrenAtStartNotVisible ? (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, d = ("row" === o[e]._L[r].type || "column" === o[e]._L[r].type || "group" === o[e]._L[r].type) && void 0 !== o[e]._L[r].frames && void 0 !== o[e]._L[r].frames.frame_999 && void 0 !== o[e]._L[r].frames.frame_999.transform && "" + o[e]._L[r].frames.frame_999.transform.opacity != "0", n = 1 === o[e]._L[r].pVisRequest ? "remove" : d ? n : "add", s = 1 === o[e]._L[r].pVisRequest ? "remove" : d ? "add" : s) : (n = "add", s = "remove"), void 0 !== s && o[e]._L[r].p[0].classList[s]("rs-forceuntouchable"), void 0 !== n && o[e]._L[r].p[0].classList[n]("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
                pointerEvents: o[e]._L[r].pPointerStatus,
                visibility: 1 === o[e]._L[r].pVisStatus ? "visible" : 0 === o[e]._L[r].pVisStatus ? "hidden" : o[e]._L[r].pVisStatus
            })), void 0 !== a && "ignore" !== a && 0 !== a && (a++, "enterstage" === t || "leavestage" === t || "framestarted" === t ? o.isFirefox(e) ? -1 === o[e]._L[r].p[0].style.transform.indexOf("perspective") && (o[e]._L[r].p[0].style.transform += (0 === o[e]._L[r].p[0].style.transform.length ? " " : "") + "perspective(" + a + "px)") : (!window.isSafari11 && !0 !== o[e]._L[r].maskHasPerspective && 0 === o[e]._L[r].p[0].style.perspective.length || "none" == o[e]._L[r].p[0].style.perspective) && (o[e]._L[r].p[0].style.perspective = a + "px") : "frameended" === t && (o.isFirefox(e) ? o[e]._L[r].p[0].style.transform = o[e]._L[r].p[0].style.transform.replace("perspective(" + a + "px)", "") : window.isSafari11 || (o[e]._L[r].p[0].style.perspective = o[e]._L[r].p[0].style.perspective.replace(a - 1 + "px", ""))));
            else
                for (r in o[e]._L) o[e]._L.hasOwnProperty(r) && (o[e]._L[r].pVisRequest !== o[e]._L[r].pVisStatus && (o[e]._L[r].pVisStatus = o[e]._L[r].pVisRequest, 0 === o[e]._L[r].pVisStatus ? o[e]._L[r].p[0].classList.add("rs-forcehidden") : o[e]._L[r].p[0].classList.remove("rs-forcehidden")), o[e]._L[r].pPointerStatus !== o[e]._L[r].pPeventsRequest && (o[e]._L[r].pPointerStatus = o[e]._L[r].pPeventsRequest, tpGS.gsap.set(o[e]._L[r].p[0], {
                    pointerEvents: o[e]._L[r].pPointerStatus,
                    visibility: o[e]._L[r].pVisStatus
                })));
            "enterstage" === t && void 0 !== i && void 0 !== o[e]._L[i].esginside && o[e]._L[i].esginside.length > 0 && void 0 !== o[e]._L[i].esginside.esredraw && o[e]._L[i].esginside.esredraw()
        },
        updateMiddleZonesAndESG: function(e) {
            var t, i = o[e].pr_processing_key || o[e].pr_active_key || 0;
            if (o[e].middleZones && o[e].middleZones.length > 0 && void 0 !== o[e].middleZones[i])
                for (t = 0; t < o[e].middleZones[i].length; t++) tpGS.gsap.set(o[e].middleZones[i][t], {
                    y: Math.round(o[e].module.height / 2 - o[e].middleZones[i][t].offsetHeight / 2) + "px"
                });
            if (o[e].smiddleZones && o[e].smiddleZones.length > 0)
                for (t = 0; t < o[e].smiddleZones.length; t++) tpGS.gsap.set(o[e].smiddleZones[t], {
                    y: Math.round(o[e].module.height / 2 - o[e].smiddleZones[t].offsetHeight / 2) + "px"
                })
        },
        getRowHeights: function(e) {
            var t = 0,
                i = 0,
                a = 0,
                r = o[e].pr_processing_key || o[e].pr_active_key || 0,
                s = o[e].pr_active_key || 0;
            if (o[e].rowzones && o[e].rowzones.length > 0) {
                if (void 0 !== o[e].rowzones[r])
                    for (var n = 0; n < o[e].rowzones[r].length; n++) o[e].rowzonesHeights[r][n] = o[e].rowzones[r][n][0].offsetHeight, t += o[e].rowzonesHeights[r][n];
                if (s !== r)
                    for (n = 0; n < o[e].rowzones[s].length; n++) o[e].rowzonesHeights[s][n] = o[e].rowzones[s][n][0].offsetHeight, i += o[e].rowzonesHeights[s][n]
            }
            if (o[e].srowzones && o[e].srowzones.length > 0)
                for (n = 0; n < o[e].srowzones.length; n++) a += o[e].srowzones[n][0].offsetHeight;
            return {
                cur: t = t < a ? a : t,
                last: i
            }
        },
        getGridOffset: function(e, t, i, a) {
            var r = "grid" === i ? o[e].canv.width : "carousel" !== o[e].sliderType || a ? o[e].canv.width : o[e].carousel.slide_width,
                s = o[e].useFullScreenHeight ? o[e].module.height : "grid" === i ? o[e].content.height : "carousel" !== o[e].sliderType || a ? o[e].module.height : o[e].canv.height,
                n = "slide" === i ? 0 : Math.max(0, "fullscreen" == o[e].sliderLayout ? o[e].module.height / 2 - o.iHE(e) * (o[e].keepBPHeight ? 1 : o[e].CM.h) / 2 : o[e].autoHeight || null != o[e].minHeight && o[e].minHeight > 0 || o[e].keepBPHeight ? o[e].canv.height / 2 - o.iHE(e) * o[e].CM.h / 2 : 0),
                d = "slide" === i ? 0 : Math.max(0, "carousel" === o[e].sliderType ? 0 : o[e].canv.width / 2 - o.iWA(e, t) * o[e].CM.w / 2);
            return "slide" !== i && "carousel" === o[e].sliderType && a && void 0 !== o[e].carousel && void 0 !== o[e].carousel.horizontal_align && (d = Math.max(0, "center" === o[e].carousel.horizontal_align ? 0 + (o[e].module.width - o.iWA(e, "static") * o[e].CM.w) / 2 : "right" === o[e].carousel.horizontal_align ? o[e].module.width - o[e].gridwidth[o[e].level] * o[e].CM.w : d)), [r, s, d, n]
        },
        initLayer: function(e) {
            var t, i, a, r = e.id,
                s = e.skey;
            for (var n in o[r].layers[e.skey])
                if (o[r].layers[e.skey].hasOwnProperty(n)) {
                    var d = o[r].layers[e.skey][n],
                        l = jQuery(d),
                        c = o.gA(d, "initialised"),
                        p = c ? o[r]._L[d.id] : l.data();
                    if ("individual" === e.skey && (p.slideKey = void 0 === p.slideKey ? o.gA(l.closest("rs-slide")[0], "key") : p.slideKey, p.slideIndex = void 0 === p.slideIndex ? o.getSlideIndex(r, p.slideKey) : p.slideIndex, e.slideIndex = p.slideIndex, s = p.slideKey), void 0 === c) {
                        if (o.revCheckIDS(r, d), o[r]._L[d.id] = p, p.ford = void 0 === p.ford ? "frame_0;frame_1;frame_999" : p.ford, p.ford = ";" == p.ford[p.ford.length - 1] ? p.ford.substring(0, p.ford.length - 1) : p.ford, p.ford = p.ford.split(";"), void 0 !== p.clip)
                            for (t in p.clipPath = {
                                    use: !1,
                                    origin: "l",
                                    type: "rectangle"
                                }, p.clip = p.clip.split(";"), p.clip) p.clip.hasOwnProperty(t) && ("u" == (i = p.clip[t].split(":"))[0] && (p.clipPath.use = "true" == i[1]), "o" == i[0] && (p.clipPath.origin = i[1]), "t" == i[0] && (p.clipPath.type = i[1]));
                        if (p.frames = L(p, r), p.caches = {}, p.OBJUPD = {}, p.c = l, p.p = o[r]._Lshortcuts[d.id].p, p.lp = o[r]._Lshortcuts[d.id].lp, p.m = o[r]._Lshortcuts[d.id].m, p.triggercache = void 0 === p.triggercache ? "reset" : p.triggercache, p.rsp_bd = void 0 === p.rsp_bd ? "column" === p.type || "row" === p.type ? "off" : "on" : p.rsp_bd, p.rsp_o = void 0 === p.rsp_o ? "on" : p.rsp_o, p.basealign = void 0 === p.basealign ? "grid" : p.basealign, p.group = "group" !== p.type && null !== o.closestNode(l[0], "RS-GROUP-WRAP") ? "group" : "column" !== p.type && null !== o.closestNode(l[0], "RS-COLUMN") ? "column" : "row" !== p.type && null !== o.closestNode(l[0], "RS-ROW") ? "row" : void 0, p._lig = "group" === p.group ? jQuery(o.closestNode(l[0], "RS-GROUP")) : "column" === p.group ? jQuery(o.closestNode(l[0], "RS-COLUMN")) : "row" === p.group ? jQuery(o.closestNode(l[0], "RS-ROW")) : void 0, p._ligid = void 0 !== p._lig ? p._lig[0].id : void 0, p._column = "RS-COLUMN" === l[0].tagName ? jQuery(o.closestNode(l[0], "RS-COLUMN-WRAP")) : "none", p._row = "RS-COLUMN" === l[0].tagName && jQuery(o.closestNode(l[0], "RS-ROW")), p._ingroup = "group" === p.group, p._incolumn = "column" === p.group, p._inrow = "row" === p.group, (p._ingroup || p._incolumn) && p._lig[0].className.indexOf("rs-sba") >= 0 && (!1 !== p.animationonscroll || void 0 === p.frames.loop) && !0 !== p.animOnScrollForceDisable && (p.animationonscroll = !0, l[0].className += " rs-sba", o[r].sbas[s][d.id] = l[0]), p.animOnScrollRepeats = 0, p._isgroup = "RS-GROUP" === l[0].tagName, p.type = p.type || "none", "row" === p.type && void 0 === p.cbreak && (p.cbreak = 2), p.esginside = jQuery(l[0].getElementsByClassName("esg-grid")[0]), p._isnotext = -1 !== jQuery.inArray(p.type, ["video", "image", "audio", "shape", "row", "group"]), p._mediatag = "html5" == p.audio ? "audio" : "video", p.img = l.find("img"), p.deepiframe = o.getByTag(l[0], "iframe"), p.deepmedia = o.getByTag(l[0], p._mediatag), p.layertype = "image" === p.type ? "image" : l[0].className.indexOf("rs-layer-video") >= 0 || l[0].className.indexOf("rs-layer-audio") >= 0 || p.deepiframe.length > 0 && (p.deepiframe[0].src.toLowerCase().indexOf("youtube") > 0 || p.deepiframe[0].src.toLowerCase().indexOf("vimeo") > 0) || p.deepmedia.length > 0 ? "video" : "html", p.deepiframe.length > 0 && o.sA(p.deepiframe[0], "layertype", p.layertype), "column" === p.type && (p.cbg = jQuery(o.getByTag(p.p[0], "RS-COLUMN-BG")[0]), p.cbgmask = jQuery(o.getByTag(p.p[0], "RS-CBG-MASK-WRAP")[0])), p._slidelink = l[0].className.indexOf("slidelink") >= 0, p._isstatic = l[0].className.indexOf("rs-layer-static") >= 0, p.slidekey = p._isstatic ? "staticlayers" : s, p._togglelisteners = l[0].getElementsByClassName("rs-toggled-content").length > 0, p.bgcol = void 0 === p.bgcol ? l[0].style.background.indexOf("gradient") >= 0 ? l[0].style.background : l[0].style.backgroundColor : p.bgcol, p.bgcol = "" === p.bgcol ? "rgba(0, 0, 0, 0)" : p.bgcol, p.bgcol = 0 === p.bgcol.indexOf("rgba(0, 0, 0, 0)") && p.bgcol.length > 18 ? p.bgcol.replace("rgba(0, 0, 0, 0)", "") : p.bgcol, p.zindex = void 0 === p.zindex ? l[0].style.zIndex : p.zindex, p._isgroup && (p.frames.frame_1.timeline.waitoncall && (p.childrenAtStartNotVisible = !0), p.pVisRequest = 0), p._togglelisteners && l.on("click", function() {
                                o.swaptoggleState([this.id])
                            }), void 0 !== p.border)
                            for (t in p.border = p.border.split(";"), p.bordercolor = "transparent", p.border)
                                if (p.border.hasOwnProperty(t)) switch ((i = p.border[t].split(":"))[0]) {
                                    case "boc":
                                        p.bordercolor = i[1];
                                        break;
                                    case "bow":
                                        p.borderwidth = o.revToResp(i[1], 4, 0);
                                        break;
                                    case "bos":
                                        p.borderstyle = o.revToResp(i[1], 4, 0);
                                        break;
                                    case "bor":
                                        p.borderradius = o.revToResp(i[1], 4, 0)
                                }
                        if ("svg" === p.type && (p.svg = l.find("svg"), p.svgPath = p.svg.find("path"), p.svgI = y(p.svgi, r), p.svgH = void 0 !== p.svgi && -1 === p.svgi.indexOf("oc:t") ? y(p.svgh, r) : {}), void 0 !== p.btrans) {
                            var g = p.btrans;
                            for (t in p.btrans = {
                                    rX: 0,
                                    rY: 0,
                                    rZ: 0,
                                    o: 1
                                }, g = g.split(";"))
                                if (g.hasOwnProperty(t)) switch ((i = g[t].split(":"))[0]) {
                                    case "rX":
                                        p.btrans.rX = i[1];
                                        break;
                                    case "rY":
                                        p.btrans.rY = i[1];
                                        break;
                                    case "rZ":
                                        p.btrans.rZ = i[1];
                                        break;
                                    case "o":
                                        p.btrans.o = i[1]
                                }
                        }
                        if (void 0 !== p.tsh)
                            for (t in p.tshadow = {
                                    c: "rgba(0,0,0,0.25)",
                                    v: 0,
                                    h: 0,
                                    b: 0
                                }, p.tsh = p.tsh.split(";"), p.tsh)
                                if (p.tsh.hasOwnProperty(t)) switch ((i = p.tsh[t].split(":"))[0]) {
                                    case "c":
                                        p.tshadow.c = i[1];
                                        break;
                                    case "h":
                                        p.tshadow.h = i[1];
                                        break;
                                    case "v":
                                        p.tshadow.v = i[1];
                                        break;
                                    case "b":
                                        p.tshadow.b = i[1]
                                }
                        if (void 0 !== p.tst)
                            for (t in p.tstroke = {
                                    c: "rgba(0,0,0,0.25)",
                                    w: 1
                                }, p.tst = p.tst.split(";"), p.tst)
                                if (p.tst.hasOwnProperty(t)) switch ((i = p.tst[t].split(":"))[0]) {
                                    case "c":
                                        p.tstroke.c = i[1];
                                        break;
                                    case "w":
                                        p.tstroke.w = i[1]
                                }
                        if (void 0 !== p.bsh)
                            for (t in p.bshadow = {
                                    e: "c",
                                    c: "rgba(0,0,0,0.25)",
                                    v: 0,
                                    h: 0,
                                    b: 0,
                                    s: 0
                                }, p.bsh = p.bsh.split(";"), p.bsh)
                                if (p.bsh.hasOwnProperty(t)) switch ((i = p.bsh[t].split(":"))[0]) {
                                    case "c":
                                        p.bshadow.c = i[1];
                                        break;
                                    case "h":
                                        p.bshadow.h = i[1];
                                        break;
                                    case "v":
                                        p.bshadow.v = i[1];
                                        break;
                                    case "b":
                                        p.bshadow.b = i[1];
                                        break;
                                    case "s":
                                        p.bshadow.s = i[1];
                                        break;
                                    case "e":
                                        p.bshadow.e = i[1]
                                }
                        if (void 0 !== p.dim)
                            for (t in p.dim = p.dim.split(";"), p.dim)
                                if (p.dim.hasOwnProperty(t)) switch ((i = p.dim[t].split(":"))[0]) {
                                    case "w":
                                        p.width = i[1];
                                        break;
                                    case "h":
                                        p.height = i[1];
                                        break;
                                    case "maxw":
                                        p.maxwidth = i[1];
                                        break;
                                    case "maxh":
                                        p.maxheight = i[1];
                                        break;
                                    case "minw":
                                        p.minwidth = i[1];
                                        break;
                                    case "minh":
                                        p.minheight = i[1]
                                }
                        if (void 0 !== p.xy)
                            for (t in p.xy = p.xy.split(";"), p.xy)
                                if (p.xy.hasOwnProperty(t)) switch ((i = p.xy[t].split(":"))[0]) {
                                    case "x":
                                        p.x = i[1].replace("px", "");
                                        break;
                                    case "y":
                                        p.y = i[1].replace("px", "");
                                        break;
                                    case "xo":
                                        p.hoffset = i[1].replace("px", "");
                                        break;
                                    case "yo":
                                        p.voffset = i[1].replace("px", "")
                                }
                        if (!p._isnotext && void 0 !== p.text)
                            for (t in p.text = p.text.split(";"), p.text)
                                if (p.text.hasOwnProperty(t)) switch ((i = p.text[t].split(":"))[0]) {
                                    case "w":
                                        p.whitespace = i[1];
                                        break;
                                    case "td":
                                        p.textDecoration = i[1];
                                        break;
                                    case "c":
                                        p.clear = i[1];
                                        break;
                                    case "f":
                                        p.float = i[1];
                                        break;
                                    case "s":
                                        p.fontsize = i[1];
                                        break;
                                    case "l":
                                        p.lineheight = i[1];
                                        break;
                                    case "ls":
                                        p.letterspacing = i[1];
                                        break;
                                    case "fw":
                                        p.fontweight = i[1];
                                        break;
                                    case "a":
                                        p.textalign = i[1]
                                }
                        if ("column" === p.type && void 0 !== p.textDecoration && delete p.textDecoration, void 0 !== p.flcr)
                            for (t in p.flcr = p.flcr.split(";"), p.flcr)
                                if (p.flcr.hasOwnProperty(t)) switch ((i = p.flcr[t].split(":"))[0]) {
                                    case "c":
                                        p.clear = i[1];
                                        break;
                                    case "f":
                                        p.float = i[1]
                                }
                        if (void 0 !== p.padding)
                            for (t in p.padding = p.padding.split(";"), p.padding)
                                if (p.padding.hasOwnProperty(t)) switch ((i = p.padding[t].split(":"))[0]) {
                                    case "t":
                                        p.paddingtop = i[1];
                                        break;
                                    case "b":
                                        p.paddingbottom = i[1];
                                        break;
                                    case "l":
                                        p.paddingleft = i[1];
                                        break;
                                    case "r":
                                        p.paddingright = i[1]
                                }
                        if (void 0 !== p.margin)
                            for (t in p.margin = p.margin.split(";"), p.margin)
                                if (p.margin.hasOwnProperty(t)) switch ((i = p.margin[t].split(":"))[0]) {
                                    case "t":
                                        p.margintop = i[1];
                                        break;
                                    case "b":
                                        p.marginbottom = i[1];
                                        break;
                                    case "l":
                                        p.marginleft = i[1];
                                        break;
                                    case "r":
                                        p.marginright = i[1]
                                }
                        if (void 0 !== p.spike && (p.spike = G(p.spike)), void 0 !== p.corners)
                            for (t in a = p.corners.split(";"), p.corners = {}, a) a.hasOwnProperty(t) && a[t].length > 0 && (p.corners[a[t]] = jQuery("<" + a[t] + "></" + a[t] + ">"), p.c.append(p.corners[a[t]]));
                        p.textalign = b(p.textalign), p.vbility = o.revToResp(p.vbility, o[r].rle, !0), p.hoffset = o.revToResp(p.hoffset, o[r].rle, 0), p.voffset = o.revToResp(p.voffset, o[r].rle, 0), p.x = o.revToResp(p.x, o[r].rle, "l"), p.y = o.revToResp(p.y, o[r].rle, "t"), M(l, 0, r), o.sA(d, "initialised", !0), o[r].c.trigger("layerinitialised", {
                            layer: l[0].id,
                            slider: r
                        })
                    }
                    var u = p.x[o[r].level],
                        h = p.y[o[r].level],
                        [m, v, f, w] = o.getGridOffset(r, e.slideIndex, p.basealign, p._isstatic);
                    if (p.slideIndex = e.slideIndex, "updateposition" !== e.mode) {
                        if (0 == p.vbility[o[r].levelForced] || "f" == p.vbility[o[r].levelForced] || m < o[r].hideLayerAtLimit && "on" == p.layeronlimit || m < o[r].hideAllLayerAtLimit ? (!0 !== p.layerIsHidden && p.p[0].classList.add("rs-layer-hidden"), p.layerIsHidden = !0) : (p.layerIsHidden && p.p[0].classList.remove("rs-layer-hidden"), p.layerIsHidden = !1), p.poster = null == p.poster && void 0 !== p.thumbimage ? p.thumbimage : p.poster, "image" === p.layertype)
                            if (p.imgOBJ = {}, "cover-proportional" === p.img.data("c")) {
                                o.sA(p.img[0], "owidth", o.gA(p.img[0], "owidth", p.img[0].width)), o.sA(p.img[0], "oheight", o.gA(p.img[0], "oheight", p.img[0].height));
                                var _ = o.gA(p.img[0], "owidth") / o.gA(p.img[0], "oheight"),
                                    x = m / v;
                                p.imgOBJ = _ > x && _ <= 1 || _ < x && _ > 1 ? {
                                    width: "100%",
                                    height: "auto",
                                    left: "c" === u || "center" === u ? "50%" : "left" === u || "l" === u ? "0" : "auto",
                                    right: "r" === u || "right" === u ? "0" : "auto",
                                    top: "c" === h || "center" === h ? "50%" : "top" === h || "t" === h ? "0" : "auto",
                                    bottom: "b" === h || "bottom" === h ? "0" : "auto",
                                    x: "c" === u || "center" === u ? "-50%" : "0",
                                    y: "c" === h || "center" === u ? "-50%" : "0"
                                } : {
                                    height: "100%",
                                    width: "auto",
                                    left: "c" === u || "center" === u ? "50%" : "left" === u || "l" === u ? "0" : "auto",
                                    right: "r" === u || "right" === u ? "0" : "auto",
                                    top: "c" === h || "center" === h ? "50%" : "top" === h || "t" === h ? "0" : "auto",
                                    bottom: "b" === h || "bottom" === h ? "0" : "auto",
                                    x: "c" === u || "center" === u ? "-50%" : "0",
                                    y: "c" === h || "center" === u ? "-50%" : "0"
                                }
                            } else void 0 === p.group && "auto" === p.width[o[r].level] && "auto" === p.height[o[r].level] && (p.width[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].width), p.height[o[r].level] = o.gA(p.img[0], "owidth", p.img[0].height)), p.imgOBJ = {
                                width: "auto" !== p.width[o[r].level] || isNaN(p.width[o[r].level]) && p.width[o[r].level].indexOf("%") >= 0 ? "100%" : "auto",
                                height: "auto" !== p.height[o[r].level] || isNaN(p.height[o[r].level]) && p.height[o[r].level].indexOf("%") >= 0 ? "100%" : "auto"
                            };
                        else if ("video" === p.layertype) {
                            o.manageVideoLayer(l, r, s), "rebuild" !== e.mode && o.resetVideo(l, r, e.mode), null != p.aspectratio && p.aspectratio.split(":").length > 1 && 1 == p.bgvideo && o.prepareCoveredVideo(r, l), p.media = void 0 === p.media ? p.deepiframe.length > 0 ? jQuery(p.deepiframe[0]) : jQuery(p.deepmedia[0]) : p.media, p.html5vid = void 0 === p.html5vid ? !(p.deepiframe.length > 0) : p.html5vid, p.mediaOBJ = {
                                display: "block"
                            };
                            var S = p.width[o[r].level],
                                k = p.height[o[r].level];
                            if (S = "auto" === S ? S : !o.isNumeric(S) && S.indexOf("%") > 0 ? p._incolumn || p._ingroup ? "100%" : "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : m : "off" !== p.rsp_bd ? parseFloat(S) * o[r].CM.w + "px" : parseFloat(S) + "px", k = "auto" === k ? k : !o.isNumeric(k) && k.indexOf("%") > 0 ? "grid" === p.basealign ? o.iHE(r) * o[r].CM.w : v : "off" !== p.rsp_bd ? parseFloat(k) * o[r].CM.h + "px" : parseFloat(k) + "px", p.vd = void 0 === p.vd ? o[r].videos[l[0].id].ratio.split(":").length > 1 ? o[r].videos[l[0].id].ratio.split(":")[0] / o[r].videos[l[0].id].ratio.split(":")[1] : 1 : p.vd, !p._incolumn || "100%" !== S && "auto" !== k || void 0 === p.ytid) - 1 == l[0].className.indexOf("rs-fsv") ? (k = "auto" === k && void 0 !== p.vd && "auto" !== S ? "100%" === S ? l.width() / p.vd : S / p.vd : k, p.vidOBJ = {
                                width: S,
                                height: k
                            }) : ("grid" !== p.basealign && (f = 0, w = 0), p.x = o.revToResp(0, o[r].rle, 0), p.y = o.revToResp(0, o[r].rle, 0), p.vidOBJ = {
                                width: S,
                                height: o[r].autoHeight ? o[r].canv.height : k
                            }), 0 != p.html5vid && l.hasClass("rs-fsv") || (p.mediaOBJ = {
                                width: S,
                                height: k,
                                display: "block"
                            }), p._ingroup && null !== p.vidOBJ.width && void 0 !== p.vidOBJ.width && !o.isNumeric(p.vidOBJ.width) && p.vidOBJ.width.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ = {
                                minWidth: S
                            });
                            else {
                                var R = l.width(),
                                    O = "auto" === k ? R / p.vd : k;
                                p.vidOBJ = {
                                    width: "auto",
                                    height: O
                                }, p.heightSetByVideo = !0
                            }
                        }
                        p._slidelink || o[r].caches.calcResponsiveLayersList.push({
                            a: l,
                            b: r,
                            c: 0,
                            d: p.rsp_bd,
                            e: e.slideIndex
                        }), "on" === p.rsp_ch && "row" !== p.type && "column" !== p.type && "group" !== p.type && "image" !== p.type && "video" !== p.type && "shape" !== p.type && l.find("*").each(function() {
                            var t = jQuery(this);
                            "true" !== o.gA(this, "stylerecorder") && !0 !== o.gA(this, "stylerecorder") && M(t, "rekursive", r), o[r].caches.calcResponsiveLayersList.push({
                                a: t,
                                b: r,
                                c: "rekursive",
                                d: p.rsp_bd,
                                e: e.slideIndex,
                                RSL: l
                            })
                        })
                    }
                    if ("preset" !== e.mode) {
                        if (p.oldeow = p.eow, p.oldeoh = p.eoh, p.eow = l.outerWidth(!0), p.eoh = l.outerHeight(!0), p.imgInFirefox = "image" == p.type && "auto" == p.width[o[r].level] && "100%" == p.height[o[r].level] && o.isFirefox(r), p.imgInFirefox) {
                            var I = p.img.width();
                            p.eow = 0 !== I ? I : p.eow
                        }
                        if (p.eow <= 0 && void 0 !== p.lastknownwidth && (p.eow = p.lastknownwidth), p.eoh <= 0 && void 0 !== p.lastknownheight && (p.eoh = p.lastknownheight), void 0 !== p.corners && ("text" === p.type || "button" === p.type || "shape" === p.type)) {
                            for (a in p.corners)
                                if (p.corners.hasOwnProperty(a)) {
                                    p.corners[a].css("borderWidth", p.eoh + "px");
                                    var T = "rs-fcrt" === a || "rs-fcr" === a;
                                    p.corners[a].css("border" + (T ? "Right" : "Left"), "0px solid transparent"), p.corners[a].css("border" + ("rs-fcrt" == a || "rs-bcr" == a ? "Bottom" : "Top") + "Color", p.bgcol)
                                }
                            p.eow = l.outerWidth(!0)
                        }
                        0 == p.eow && 0 == p.eoh && (p.eow = "grid" === p.basealign ? o[r].content.width : o[r].module.width, p.eoh = "grid" === p.basealign ? o[r].content.height : o[r].module.height), p.basealign = o[r].justifyCarousel ? "grid" : p.basealign;
                        var C = "on" === p.rsp_o ? parseInt(p.voffset[o[r].level], 0) * o[r].CM.w : parseInt(p.voffset[o[r].level], 0),
                            A = "on" === p.rsp_o ? parseInt(p.hoffset[o[r].level], 0) * o[r].CM.w : parseInt(p.hoffset[o[r].level], 0),
                            P = "grid" === p.basealign ? o.iWA(r, e.slideIndex) * o[r].CM.w : m,
                            B = "grid" === p.basealign ? o.iHE(r) * (o[r].keepBPHeight || o[r].currentRowsHeight > o[r].gridheight[o[r].level] ? 1 : o[r].CM.h) : v;
                        (1 == o[r].gridEQModule || void 0 !== p._lig && "row" !== p.type && "column" !== p.type && "group" !== p.type) && (P = void 0 !== p._lig ? p._lig.width() : o[r].module.width, B = void 0 !== p._lig ? p._lig.height() : o[r].module.height, f = 0, w = 0), "video" === p.type && null != p.vidOBJ && (p.vidOBJ.height >= 0 && 0 === p.eoh && (p.eoh = p.vidOBJ.height), p.vidOBJ.width >= 0 && 0 === p.eow && (p.eow = p.vidOBJ.width)), u = "c" === u || "m" === u || "center" === u || "middle" === u ? P / 2 - p.eow / 2 + A : "l" === u || "left" === u ? A : "r" === u || "right" === u ? P - p.eow - A : "off" !== p.rsp_o ? u * o[r].CM.w : u, h = "m" === h || "c" === h || "center" === h || "middle" === h ? B / 2 - p.eoh / 2 + C : "t" === h || "top" == h ? C : "b" === h || "bottom" == h ? B - p.eoh - C : "off" !== p.rsp_o ? h * o[r].CM.w : h, u = p._slidelink ? 0 : o[r].rtl && -1 == ("" + p.width[o[r].level]).indexOf("%") ? parseInt(u) + p.eow : u, p.calcx = parseInt(u, 0) + f, p.calcy = parseInt(h, 0) + w, "row" !== p.type && "column" !== p.type ? p.OBJUPD.POBJ = {
                            zIndex: p.zindex,
                            top: p.calcy,
                            left: p.calcx,
                            overwrite: "auto"
                        } : "row" !== p.type ? p.OBJUPD.POBJ = {
                            zIndex: p.zindex,
                            width: p.columnwidth,
                            top: 0,
                            left: 0,
                            overwrite: "auto"
                        } : "row" === p.type && (p.OBJUPD.POBJ = {
                            zIndex: p.zindex,
                            width: "grid" === p.basealign ? P + "px" : "100%",
                            top: 0,
                            left: o[r].rtl ? -1 * f : f,
                            overwrite: "auto"
                        }, p.cbreak <= o[r].level ? -1 === l[0].className.indexOf("rev_break_columns") && l[0].classList.add("rev_break_columns") : l[0].className.indexOf("rev_break_columns") > 0 && l[0].classList.remove("rev_break_columns"), p.rowcalcx = p.OBJUPD.POBJ.left, p.pow = p.p.outerWidth(!0)), void 0 !== p.blendmode && (p.OBJUPD.POBJ.mixBlendMode = p.blendmode), (void 0 !== p.frames.loop || p.imgInFirefox) && (p.OBJUPD.LPOBJ = {
                            width: p.eow,
                            height: p.eoh
                        }), p._ingroup && (void 0 !== p._groupw && !o.isNumeric(p._groupw) && p._groupw.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minWidth = p._groupw), void 0 !== p._grouph && !o.isNumeric(p._grouph) && p._grouph.indexOf("%") > 0 && (p.OBJUPD.lppmOBJ.minHeight = p._grouph)), "updateposition" === e.mode && (p.caches.POBJ_LEFT === p.OBJUPD.POBJ.left && p.caches.POBJ_TOP === p.OBJUPD.POBJ.top || (tpGS.gsap.set(p.p, p.OBJUPD.POBJ), p.caches.POBJ_LEFT = p.OBJUPD.POBJ.left, p.caches.POBJ_TOP = p.OBJUPD.POBJ.top)), e.animcompleted && o.animcompleted(l, r)
                    }
                }
        },
        hoverReverseDone: function(e) {
            o[e.id]._L[e.L[0].id].textDecoration && tpGS.gsap.set(o[e.id]._L[e.L[0].id].c, {
                textDecoration: o[e.id]._L[e.L[0].id].textDecoration
            })
        },
        animcompleted: function(e, t, i) {
            if (void 0 !== o[t].videos) {
                var a = o[t].videos[e[0].id];
                null != a && null != a.type && "none" != a.type && (1 == a.aplay || "true" == a.aplay || "on" == a.aplay || "1sttime" == a.aplay ? (("carousel" !== o[t].sliderType || e.closest("rs-slide").index() == o[t].carousel.focused || e.closest("rs-slide").index() == o[t].activeRSSlide && o[t].carousel.oldfocused == o[t].carousel.focused || i) && o.playVideo(e, t), o.toggleState(e.data("videotoggledby")), (a.aplay1 || "1sttime" == a.aplay) && (a.aplay1 = !1, a.aplay = !1)) : ("no1sttime" == a.aplay && (a.aplay = !0), o.unToggleState(e.data("videotoggledby"))))
            }
        },
        handleStaticLayers: function(e, t) {
            var i = 0,
                a = o[t].realslideamount + 1;
            if (void 0 !== o.gA(e[0], "onslides")) {
                var r = o.gA(e[0], "onslides").split(";");
                for (var s in r)
                    if (r.hasOwnProperty(s)) {
                        var n = r[s].split(":");
                        "s" === n[0] && (i = parseInt(n[1], 0)), "e" === n[0] && (a = parseInt(n[1], 0))
                    }
            }
            i = Math.max(0, i), a = Math.min(o[t].realslideamount, a < 0 ? o[t].realslideamount : a), a = 1 !== i && 0 !== i || a !== o[t].realslideamount ? a : o[t].realslideamount + 1, e.data("startslide", i), e.data("endslide", a), o.sA(e[0], "startslide", i), o.sA(e[0], "endslide", a)
        },
        updateLayersOnFullStage: function(e) {
            if (o[e].caches.calcResponsiveLayersList.length > 0) {
                !0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].carousel.wrap.detach() : o[e].canvas.detach());
                for (var t = 0; t < o[e].caches.calcResponsiveLayersList.length; t++) void 0 !== o[e].caches.calcResponsiveLayersList[t] && z(o[e].caches.calcResponsiveLayersList[t]);
                !0 !== o[e].slideHasIframe && !0 !== o[e].fullScreenMode && ("carousel" === o[e].sliderType ? o[e].c[0].appendChild(o[e].carousel.wrap[0]) : o[e].c[0].appendChild(o[e].canvas[0]))
            }
        },
        animateTheLayers: function(e) {
            if (void 0 === e.slide) return !1;
            var t = e.id;
            if (void 0 === o[t].slides[e.slide] && "individual" !== e.slide) return !1;
            if ("carousel" === o[t].sliderType) {
                if ("start" === e.mode && "start" === o[t].lastATLmode) {
                    if (e.slide === o[t].lastATLslide && (new Date).getTime() - o[t].lastATLtime < 1500) return;
                    o[t].lastATLtime = (new Date).getTime()
                }
                o[t].lastATLmode = e.mode, o[t].lastATLslide = e.slide
            }
            var i = "individual" !== e.slide ? o.gA(o[t].slides[e.slide], "key") : "individual",
                a = o[t].pr_processing_key || o[t].pr_active_key || 0;
            o[t].caches.calcResponsiveLayersList = [], o[t].layers = o[t].layers || {}, "individual" === i ? o[t].layers.individual = void 0 === o[t].layers.individual ? "all" === o[t].carousel.showLayersAllTime ? C(jQuery(o[t].c), "rs-layer", "rs-layer-static") : C(jQuery(o[t].c), "rs-on-car") : o[t].layers.individual : (o[t].layers[i] = void 0 === o[t].layers[i] ? "all" === o[t].carousel.showLayersAllTime ? [] : C(jQuery(o[t].slides[e.slide]), "rs-layer", "carousel" === o[t].sliderType ? "rs-on-car" : void 0) : o[t].layers[i], o[t].layers.static = void 0 === o[t].layers.static ? C(jQuery(o[t].c.find("rs-static-layers")), "rs-layer", "rs-on-car") : o[t].layers.static, o[t].sbas[i] = void 0 === o[t].sbas[i] ? C(jQuery(o[t].slides[e.slide]), "rs-sba") : o[t].sbas[i]);
            var r = "rebuild" === e.mode && "carousel" === o[t].sliderType && "individual" === i;
            void 0 !== i && o[t].layers[i] && o.initLayer({
                id: t,
                slideIndex: e.slide,
                skey: i,
                mode: e.mode,
                animcompleted: r
            }), o[t].layers.static && o.initLayer({
                id: t,
                skey: "static",
                slideIndex: "static",
                mode: e.mode,
                animcompleted: r
            }), o.updateLayersOnFullStage(t), "preset" !== e.mode || void 0 !== o[t].slidePresets && void 0 !== o[t].slidePresets[e.slide] || (o[t].slidePresets = void 0 === o[t].slidePresets ? {} : o[t].slidePresets, o[t].slidePresets[e.slide] = !0, o[t].c.trigger("revolution.slideprepared", {
                slide: e.slide,
                key: i
            })), o[t].heightInLayers = o[t].module.height, o[t].widthInLayers = o[t].module.width, o[t].levelInLayers = o[t].level;
            var s = {
                id: t,
                skey: i,
                slide: e.slide,
                key: i,
                mode: e.mode,
                index: a
            };
            window.requestAnimationFrame(function() {
                if (void 0 === o[t].dimensionReCheck[i] ? (o.updateLayerDimensions(s), !0 !== o[t].doubleDimensionCheck ? setTimeout(function() {
                        o.updateLayerDimensions(s), o.updateRowZones(s)
                    }, 150) : o.updateRowZones(s), o[t].doubleDimensionCheck = !0, o[t].dimensionReCheck[i] = !0) : o.updateRowZones(s), void 0 !== i && o[t].layers[i])
                    for (var a in o[t].layers[i]) o[t].layers[i].hasOwnProperty(a) && o.renderLayerAnimation({
                        layer: jQuery(o[t].layers[i][a]),
                        id: t,
                        mode: e.mode,
                        caller: e.caller
                    });
                if (o[t].layers.static)
                    for (var a in o[t].layers.static) o[t].layers.static.hasOwnProperty(a) && o.renderLayerAnimation({
                        layer: jQuery(o[t].layers.static[a]),
                        id: t,
                        mode: e.mode,
                        caller: e.caller
                    });
                null != o[t].mtl && o[t].mtl.resume()
            })
        },
        updateRowZones: function(e) {
            (void 0 !== o[e.id].rowzones && o[e.id].rowzones.length > 0 && e.index >= 0 && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)] && o[e.id].rowzones[Math.min(e.index, o[e.id].rowzones.length)].length > 0 || void 0 !== o[e.id].srowzones && o[e.id].srowzones.length > 0 || void 0 !== o[e.id].smiddleZones && o[e.id].smiddleZones.length > 0) && (o.updateDims(e.id), o.initLayer({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide,
                mode: "updateposition"
            }), o.initLayer({
                id: e.id,
                skey: "static",
                slideIndex: "static",
                mode: "updateposition"
            }), "start" !== e.mode && "preset" !== e.mode || o.manageNavigation(e.id))
        },
        updateLayerDimensions: function(e) {
            var t = !1;
            o[e.id].caches.calcResponsiveLayersList = [], void 0 === e.key || "individual" != e.key && void 0 === o[e.id].layers[e.key] || !o.checkLayerDimensions({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide
            }) || (t = !0), o.initLayer({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide,
                mode: "updateAndResize"
            }), o[e.id].layers.static && o.checkLayerDimensions({
                id: e.id,
                skey: "static",
                slideIndex: "static"
            }) && (t = !0, o.initLayer({
                id: e.id,
                skey: "static",
                slideIndex: "static",
                mode: "updateAndResize"
            })), t && o.updateLayersOnFullStage(e.id)
        },
        updateAnimatingLayerPositions: function(e) {
            o.initLayer({
                id: e.id,
                skey: e.key,
                slideIndex: e.slide,
                mode: "updateposition"
            })
        },
        removeTheLayers: function(e, t, i) {
            var a = o.gA(e[0], "key");
            for (var r in o[t].sloops && o[t].sloops[a] && o[t].sloops[a].tl && o[t].sloops[a].tl.pause(), o[t].layers[a]) o[t].layers[a].hasOwnProperty(r) && o.renderLayerAnimation({
                layer: jQuery(o[t].layers[a][r]),
                frame: "frame_999",
                mode: "continue",
                remove: !0,
                id: t,
                allforce: i
            });
            for (var r in o[t].layers.static) o[t].layers.static.hasOwnProperty(r) && o.renderLayerAnimation({
                layer: jQuery(o[t].layers.static[r]),
                frame: "frame_999",
                mode: "continue",
                remove: !0,
                id: t,
                allforce: i
            })
        },
        renderLayerAnimation: function(e) {
            var i, a = e.layer,
                r = e.id,
                s = o[r].level,
                h = o[r]._L[a[0].id],
                v = void 0 !== h.timeline ? h.timeline.time() : void 0,
                f = !1,
                y = !1,
                b = "none";
            if (("containerResized_2" !== e.caller && "swapSlideProgress_2" !== e.caller || !0 === h.animationRendered) && (h.animationRendered = !0, "preset" !== e.mode || !0 === h.frames.frame_1.timeline.waitoncall || void 0 !== h.scrollBasedOffset)) {
                if ("trigger" == e.mode && (h.triggeredFrame = e.frame), h._isstatic) {
                    var x = "carousel" === o[r].sliderType && void 0 !== o[r].carousel.oldfocused ? o[r].carousel.oldfocused : void 0 === o[r].pr_lastshown_key ? 1 : parseInt(o[r].pr_lastshown_key, 0) + 1,
                        k = "carousel" === o[r].sliderType ? void 0 === o[r].pr_next_key ? 0 === x ? 1 : x : parseInt(o[r].pr_next_key, 0) + 1 : void 0 === o[r].pr_processing_key ? x : parseInt(o[r].pr_processing_key, 0) + 1,
                        L = x >= h.startslide && x <= h.endslide,
                        R = k >= h.startslide && k <= h.endslide;
                    if (b = x === h.endslide && "continue" === e.mode || ("continue" === e.mode || x === h.endslide) && "none", !0 === e.allforce || !0 === b) {
                        if ("continue" === e.mode && "frame_999" === e.frame && (R || void 0 === h.lastRequestedMainFrame)) return
                    } else {
                        if ("preset" === e.mode && (h.elementHovered || !R)) return;
                        if ("rebuild" === e.mode && !L && !R) return;
                        if ("start" === e.mode && R && "frame_1" === h.lastRequestedMainFrame) return;
                        if (("start" === e.mode || "preset" === e.mode) && "frame_999" === h.lastRequestedMainFrame && !0 !== h.leftstage) return;
                        if ("continue" === e.mode && "frame_999" === e.frame && (R || void 0 === h.lastRequestedMainFrame)) return;
                        if ("start" === e.mode && !R) return
                    }
                } else "start" === e.mode && "keep" !== h.triggercache && (h.triggeredFrame = void 0);
                for (var O in "start" === e.mode && (void 0 !== h.layerLoop && (h.layerLoop.count = 0), e.frame = void 0 === h.triggeredFrame ? 0 : h.triggeredFrame), "continue" === e.mode || "trigger" === e.mode || void 0 === h.timeline || h._isstatic && !0 === h.leftstage || h.timeline.pause(0), "continue" !== e.mode && "trigger" !== e.mode || void 0 === h.timeline || h.timeline.pause(), h.timeline = tpGS.gsap.timeline({
                        paused: !0
                    }), "text" !== h.type && "button" !== h.type || void 0 !== h.splitText && (void 0 !== h.splitTextFix || "start" !== e.mode && "preset" !== e.mode) || (w({
                        layer: a,
                        id: r
                    }), "start" === e.mode && (h.splitTextFix = !0)), h.ford)
                    if (h.ford.hasOwnProperty(O)) {
                        var I = h.ford[O],
                            T = !1;
                        if ("frame_0" !== I && "frame_hover" !== I && "loop" !== I) {
                            if ("frame_999" === I && !h.frames[I].timeline.waitoncall && h.frames[I].timeline.start >= o[r].duration && !0 !== e.remove && (h.frames[I].timeline.waitoncall = !0), "start" === e.mode && "keep" !== h.triggercache && (h.frames[I].timeline.callstate = h.frames[I].timeline.waitoncall ? "waiting" : ""), "trigger" === e.mode && h.frames[I].timeline.waitoncall && (I === e.frame ? (h.frames[I].timeline.triggered = !0, h.frames[I].timeline.callstate = "called") : h.frames[I].timeline.triggered = !1), "rebuild" === e.mode || h.frames[I].timeline.triggered || (h.frames[I].timeline.callstate = h.frames[I].timeline.waitoncall ? "waiting" : ""), !1 !== e.fastforward) {
                                if (("continue" === e.mode || "trigger" === e.mode) && !1 === y && I !== e.frame) continue;
                                if (("rebuild" === e.mode || "preset" === e.mode) && !1 === y && void 0 !== h.triggeredFrame && I !== h.triggeredFrame) continue;
                                (I === e.frame || "rebuild" === e.mode && I === h.triggeredFrame) && (y = !0)
                            } else I === e.frame && (y = !0);
                            if (I !== e.frame && h.frames[I].timeline.waitoncall && "called" !== h.frames[I].timeline.callstate && (f = !0), I !== e.frame && y && (f = !0 === f && h.frames[I].timeline.waitoncall ? "skiprest" : !0 !== f && f), void 0 === h.hideonfirststart && "frame_1" === I && h.frames[I].timeline.waitoncall && (h.hideonfirststart = !0), f && "waiting" === h.frames[I].timeline.callstate && "preset" === e.mode && 1 != h.firstTimeRendered) {
                                if (h._isstatic && void 0 === h.currentframe) continue;
                                T = !0, h.firstTimeRendered = !0
                            } else if ("skiprest" === f || "called" !== h.frames[I].timeline.callstate && f && e.toframe !== I) continue;
                            if ("frame_999" !== I || !1 !== b || "continue" !== e.mode && "start" !== e.mode && "rebuild" !== e.mode) {
                                h.fff = "frame_1" === I && ("trigger" !== e.mode || "frame_999" === h.currentframe || "frame_0" === h.currentframe || void 0 === h.currentframe), "trigger" === e.mode && "frame_1" === e.frame && !1 === h.leftstage && (h.fff = !1), T || (h.frames[I].timeline.callstate = "called", h.currentframe = I);
                                var C = h.frames[I],
                                    A = h.fff ? h.frames.frame_0 : void 0,
                                    M = tpGS.gsap.timeline(),
                                    P = tpGS.gsap.timeline(),
                                    B = h.c,
                                    D = void 0 !== C.sfx && _(C.sfx.effect, h.m, C.timeline.ease),
                                    z = C.timeline.speed / 1e3,
                                    G = 0,
                                    N = S({
                                        id: r,
                                        frame: C,
                                        layer: a,
                                        ease: C.timeline.ease,
                                        splitAmount: B.length,
                                        target: I,
                                        forcefilter: void 0 !== h.frames.frame_hover && void 0 !== h.frames.frame_hover.filter
                                    }),
                                    H = h.fff ? S({
                                        id: r,
                                        frame: A,
                                        layer: a,
                                        ease: C.timeline.ease,
                                        splitAmount: B.length,
                                        target: "frame_0"
                                    }) : void 0,
                                    j = void 0 !== C.mask ? S({
                                        id: r,
                                        frame: {
                                            transform: {
                                                x: C.mask.x,
                                                y: C.mask.y
                                            }
                                        },
                                        layer: a,
                                        ease: N.ease,
                                        target: "mask"
                                    }) : void 0,
                                    F = void 0 !== j && h.fff ? S({
                                        id: r,
                                        frame: {
                                            transform: {
                                                x: A.mask.x,
                                                y: A.mask.y
                                            }
                                        },
                                        layer: a,
                                        ease: N.ease,
                                        target: "frommask"
                                    }) : void 0,
                                    W = N.ease;
                                if (N.force3D = !0, "block" === D.type && (D.ft[0].background = C.sfx.fxc, D.ft[0].visibility = "visible", D.ft[1].visibility = "visible", M.add(tpGS.gsap.fromTo(D.bmask_in, z / 2, D.ft[0], D.ft[1], 0)), M.add(tpGS.gsap.fromTo(D.bmask_in, z / 2, D.ft[1], D.t, z / 2)), "frame_0" !== I && "frame_1" !== I || (H.opacity = 0)), void 0 !== C.color ? N.color = C.color : void 0 !== h.color && "npc" !== h.color[s] && (N.color = h.color[s]), void 0 !== A && void 0 !== A.color ? H.color = A.color : void 0 !== A && void 0 !== h.color && "npc" !== h.color[s] && (H.color = h.color[s]), void 0 !== C.bgcolor ? C.bgcolor.indexOf("gradient") >= 0 ? N.background = C.bgcolor : N.backgroundColor = C.bgcolor : !0 === h.bgcolinuse && (h.bgcol.indexOf("gradient") >= 0 ? N.background = h.bgcol : N.backgroundColor = h.bgcol), void 0 !== A && (void 0 !== A.bgcolor ? A.bgcolor.indexOf("gradient") >= 0 ? H.background = A.bgcolor : H.backgroundColor = A.bgcolor : !0 === h.bgcolinuse && (h.bgcol.indexOf("gradient") >= 0 ? H.background = h.bgcol : H.backgroundColor = h.bgcol)), void 0 !== h.splitText && !1 !== h.splitText)
                                    for (var V in t)
                                        if (void 0 !== C[t[V]] && !h.quickRendering) {
                                            var E = h.splitText[t[V]],
                                                X = S({
                                                    id: r,
                                                    frame: C,
                                                    source: t[V],
                                                    ease: W,
                                                    layer: a,
                                                    splitAmount: E.length,
                                                    target: I + "_" + t[V]
                                                }),
                                                Y = h.fff ? S({
                                                    id: r,
                                                    frame: A,
                                                    ease: X.ease,
                                                    source: t[V],
                                                    layer: a,
                                                    splitAmount: E.length,
                                                    target: "frame_0_" + t[V]
                                                }) : void 0,
                                                Q = h.frames[I].dosplit ? void 0 === C[t[V]].delay ? .05 : C[t[V]].delay / 100 : 0;
                                            h.color[s] === N.color && "frame_1" === I || (X.color = N.color), void 0 !== H && h.color[s] !== H.color && (Y.color = H.color), void 0 !== Y && Y.color !== N.color && (X.color = N.color);
                                            var J = o.clone(X),
                                                q = h.fff ? o.clone(Y) : void 0,
                                                U = C[t[V]].dir;
                                            delete J.dir, J.data = {
                                                splitted: !0
                                            }, J.stagger = "center" === U || "edge" === U ? c({
                                                each: Q,
                                                offset: Q / 2,
                                                from: U
                                            }) : {
                                                each: Q,
                                                from: U
                                            }, J.duration = z, void 0 !== q && delete q.dir, h.fff ? M.add(P.fromTo(E, q, J), 0) : M.add(P.to(E, J), 0), G = Math.max(G, E.length * Q)
                                        }
                                if (z += G, void 0 === i && (i = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType ? void 0 !== N.transformPerspective ? N.transformPerspective : h.fff && void 0 !== H.transfromPerspective ? H.transfromPerspective : o[r].perspective : o[r].perspective), h.knowTransformPerspective = i, h.pxundermask || void 0 !== j && (void 0 !== A && "hidden" === A.mask.overflow || "hidden" === C.mask.overflow)) M.add(tpGS.gsap.to(h.m, .001, {
                                    overflow: "hidden"
                                }), 0), "column" === h.type && M.add(tpGS.gsap.to(h.cbgmask, .001, {
                                    overflow: "hidden"
                                }), 0), h.btrans && (F && (F.rotationX = h.btrans.rX, F.rotationY = h.btrans.rY, F.rotationZ = h.btrans.rZ, F.opacity = h.btrans.o), j.rotationX = h.btrans.rX, j.rotationY = h.btrans.rY, j.rotationZ = h.btrans.rZ, j.opacity = h.btrans.o), h.fff ? M.add(tpGS.gsap.fromTo([h.m, h.cbgmask], z, o.clone(F), o.clone(j)), .001) : M.add(tpGS.gsap.to([h.m, h.cbgmask], z, o.clone(j)), .001);
                                else if (void 0 !== h.btrans) {
                                    var Z = {
                                        x: 0,
                                        y: 0,
                                        filter: "none",
                                        opacity: h.btrans.o,
                                        rotationX: h.btrans.rX,
                                        rotationY: h.btrans.rY,
                                        rotationZ: h.btrans.rZ,
                                        overflow: "visible"
                                    };
                                    0 === h.btrans.rX && 0 == h.btrans.rY || (h.maskHasPerspective = !0, Z.transformPerspective = i), M.add(tpGS.gsap.to(h.m, .001, Z), 0)
                                } else M.add(tpGS.gsap.to(h.m, .001, {
                                    clearProps: "transform",
                                    overflow: "visible"
                                }), 0);
                                N.force3D = "auto", h.fff ? (N.visibility = "visible", void 0 !== h.cbg && M.fromTo(h.cbg, z, H, N, 0), o[r].BUG_safari_clipPath && (H.clipPath || N.clipPath || h.spike) && (H.z && parseInt(H.z, 10) || (H.z = -1e-4), N.z && parseInt(N.z, 10) || (N.z = 0)), void 0 !== h.cbg && "column" === h.type ? M.fromTo(B, z, n(H), n(N), 0) : M.fromTo(B, z, H, N, 0), M.invalidate()) : ("frame_999" !== h.frame && (N.visibility = "visible"), void 0 !== h.cbg && M.to(h.cbg, z, N, 0), !o[r].BUG_safari_clipPath || !N.clipPath && !h.spike || N.z && parseInt(N.z, 10) || (N.z = 0 - .01 * Math.random()), void 0 !== h.cbg && "column" === h.type ? M.to(B, z, n(N), 0) : M.to(B, z, N, 0)), void 0 !== W && "object" != typeof W && "function" != typeof W && W.indexOf("SFXBounce") >= 0 && M.to(B, z, {
                                    scaleY: .5,
                                    scaleX: 1.3,
                                    ease: N.ease + "-squash",
                                    transformOrigin: "bottom"
                                }, 1e-4);
                                var K = "trigger" !== e.mode && (!0 !== f && "skiprest" !== f || "rebuild" !== e.mode) || e.frame === I || void 0 === C.timeline.start || !o.isNumeric(C.timeline.start) ? "+=0" === C.timeline.start || void 0 === C.timeline.start ? "+=0.05" : parseInt(C.timeline.start, 0) / 1e3 : "+=" + parseInt(C.timeline.startRelative, 0) / 1e3;
                                h.timeline.addLabel(I, K), h.timeline.add(M, K), h.timeline.addLabel(I + "_end", "+=0.01"), M.eventCallback("onStart", p, [{
                                    id: r,
                                    frame: I,
                                    L: a,
                                    tPE: i
                                }]), "true" == h.animationonscroll || 1 == h.animationonscroll ? (M.eventCallback("onUpdate", g, [{
                                    id: r,
                                    frame: I,
                                    L: a
                                }]), M.smoothChildTiming = !0) : M.eventCallback("onUpdate", g, [{
                                    id: r,
                                    frame: I,
                                    L: a
                                }]), M.eventCallback("onComplete", u, [{
                                    id: r,
                                    frame: I,
                                    L: a,
                                    tPE: i
                                }])
                            }
                        }
                    }
                if (void 0 !== h.frames.loop) {
                    var $ = parseInt(h.frames.loop.timeline.speed, 0) / 1e3,
                        ee = parseInt(h.frames.loop.timeline.start) / 1e3 || 0,
                        te = "trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame ? .2 : 0,
                        ie = ee + te;
                    h.loop = {
                        root: tpGS.gsap.timeline({}),
                        preset: tpGS.gsap.timeline({}),
                        move: tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: h.frames.loop.timeline.yoyo_move
                        }),
                        rotate: tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: h.frames.loop.timeline.yoyo_rotate
                        }),
                        scale: tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: h.frames.loop.timeline.yoyo_scale
                        }),
                        filter: tpGS.gsap.timeline({
                            repeat: -1,
                            yoyo: h.frames.loop.timeline.yoyo_filter
                        })
                    };
                    var ae = h.frames.loop.frame_0,
                        re = h.frames.loop.frame_999,
                        oe = "blur(" + parseInt(ae.blur || 0, 0) + "px) grayscale(" + parseInt(ae.grayscale || 0, 0) + "%) brightness(" + parseInt(ae.brightness || 100, 0) + "%)",
                        se = "blur(" + (re.blur || 0) + "px) grayscale(" + (re.grayscale || 0) + "%) brightness(" + (re.brightness || 100) + "%)";
                    if (h.loop.root.add(h.loop.preset, 0), h.loop.root.add(h.loop.move, te), h.loop.root.add(h.loop.rotate, te), h.loop.root.add(h.loop.scale, te), h.loop.root.add(h.loop.filter, te), "blur(0px) grayscale(0%) brightness(100%)" === oe && "blur(0px) grayscale(0%) brightness(100%)" === se && (oe = "none", se = "none"), re.originX = ae.originX, re.originY = ae.originY, re.originZ = ae.originZ, void 0 === i && (i = "isometric" === o[r].perspectiveType ? 0 : "local" === o[r].perspectiveType && void 0 !== N ? void 0 !== N.transformPerspective ? N.transformPerspective : h.fff && void 0 !== H.transfromPerspective ? H.transfromPerspective : o[r].perspective : o[r].perspective), h.frames.loop.timeline.curved) {
                        var ne = parseInt(h.frames.loop.timeline.radiusAngle, 0) || 0,
                            de = [{
                                x: (ae.x - ae.xr) * o[r].CM.w,
                                y: 0,
                                z: (ae.z - ae.zr) * o[r].CM.w
                            }, {
                                x: 0,
                                y: (ae.y + ae.yr) * o[r].CM.w,
                                z: 0
                            }, {
                                x: (re.x + re.xr) * o[r].CM.w,
                                y: 0,
                                z: (re.z + re.zr) * o[r].CM.w
                            }, {
                                x: 0,
                                y: (re.y - re.yr) * o[r].CM.w,
                                z: 0
                            }],
                            le = {
                                type: "thru",
                                curviness: h.frames.loop.timeline.curviness,
                                path: [],
                                autoRotate: h.frames.loop.timeline.autoRotate
                            };
                        for (var ce in de) de.hasOwnProperty(ce) && (le.path[ce] = de[ne], ne = ++ne == de.length ? 0 : ne);
                        ("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && h.loop.preset.fromTo(h.lp, te, {
                            "-webkit-filter": oe,
                            filter: oe,
                            x: 0,
                            y: 0,
                            z: 0,
                            minWidth: h._incolumn || h._ingroup ? "100%" : void 0 === h.eow ? 0 : h.eow,
                            minHeight: h._incolumn || h._ingroup ? "100%" : void 0 === h.eoh ? 0 : h.eoh,
                            scaleX: 1,
                            scaleY: 1,
                            skewX: 0,
                            skewY: 0,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            transformPerspective: i,
                            transformOrigin: re.originX + " " + re.originY + " " + re.originZ,
                            opacity: 1
                        }, l({
                            x: le.path[3].x,
                            y: le.path[3].y,
                            z: le.path[3].z,
                            scaleX: ae.scaleX,
                            skewX: ae.skewX,
                            skewY: ae.skewY,
                            scaleY: ae.scaleY,
                            rotationX: ae.rotationX,
                            rotationY: ae.rotationY,
                            rotationZ: ae.rotationZ,
                            "-webkit-filter": oe,
                            filter: oe,
                            ease: "sine.inOut",
                            opacity: ae.opacity
                        }), 0), d(le) && h.loop.move.to(h.lp, h.frames.loop.timeline.yoyo_move ? $ / 2 : $, {
                            motionPath: le,
                            ease: h.frames.loop.timeline.ease
                        })
                    } else("trigger" !== e.mode && "frame_999" !== e.frame || "frame_999" !== e.frame) && h.loop.preset.fromTo(h.lp, te, {
                        "-webkit-filter": oe,
                        filter: oe,
                        x: 0,
                        y: 0,
                        z: 0,
                        minWidth: h._incolumn || h._ingroup ? "100%" : void 0 === h.eow ? 0 : h.eow,
                        minHeight: h._incolumn || h._ingroup ? "100%" : void 0 === h.eoh ? 0 : h.eoh,
                        scaleX: 1,
                        scaleY: 1,
                        skewX: 0,
                        skewY: 0,
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        transformPerspective: i,
                        transformOrigin: re.originX + " " + re.originY + " " + re.originZ,
                        opacity: 1
                    }, l({
                        x: ae.x * o[r].CM.w,
                        y: ae.y * o[r].CM.w,
                        z: ae.z * o[r].CM.w,
                        scaleX: ae.scaleX,
                        skewX: ae.skewX,
                        skewY: ae.skewY,
                        scaleY: ae.scaleY,
                        rotationX: ae.rotationX,
                        rotationY: ae.rotationY,
                        rotationZ: ae.rotationZ,
                        ease: "sine.out",
                        opacity: ae.opacity,
                        "-webkit-filter": oe,
                        filter: oe
                    }), 0), h.loop.move.to(h.lp, h.frames.loop.timeline.yoyo_move ? $ / 2 : $, {
                        x: re.x * o[r].CM.w,
                        y: re.y * o[r].CM.w,
                        z: re.z * o[r].CM.w,
                        ease: h.frames.loop.timeline.ease
                    });
                    h.loop.rotate.to(h.lp, h.frames.loop.timeline.yoyo_rotate ? $ / 2 : $, {
                        rotationX: re.rotationX,
                        rotationY: re.rotationY,
                        rotationZ: re.rotationZ,
                        ease: h.frames.loop.timeline.ease
                    }), h.loop.scale.to(h.lp, h.frames.loop.timeline.yoyo_scale ? $ / 2 : $, l({
                        scaleX: re.scaleX,
                        scaleY: re.scaleY,
                        skewX: re.skewX,
                        skewY: re.skewY,
                        ease: h.frames.loop.timeline.ease
                    }));
                    var pe = {
                        opacity: re.opacity || 1,
                        ease: h.frames.loop.timeline.ease,
                        "-webkit-filter": se,
                        filter: se
                    };
                    h.loop.filter.to(h.lp, h.frames.loop.timeline.yoyo_filter ? $ / 2 : $, pe), h.timeline.add(h.loop.root, ie)
                }
                if (void 0 !== h.frames.frame_hover && ("start" === e.mode || void 0 === h.hoverframeadded)) {
                    h.hoverframeadded = !0;
                    var ge = h.frames.frame_hover.timeline.speed / 1e3;
                    ge = 0 === ge ? 1e-5 : ge, h.hoverlistener || (h.hoverlistener = !0, o.document.on("mouseenter mousemove", ("column" === h.type ? "#" + h.cbg[0].id + "," : "") + "#" + h.c[0].id, function(e) {
                        if ("mousemove" !== e.type || !0 !== h.ignoremousemove) {
                            if (h.animationonscroll || h.readyForHover) {
                                if (h.elementHovered = !0, h.hovertimeline || (h.hovertimeline = tpGS.gsap.timeline({
                                        paused: !0
                                    })), 0 == h.hovertimeline.progress() && (void 0 === h.lastHoveredTimeStamp || (new Date).getTime() - h.lastHoveredTimeStamp > 150) && (h.ignoremousemove = !0, h.hovertimeline.to([h.m, h.cbgmask], ge, {
                                        overflow: h.frames.frame_hover.mask ? "hidden" : "visible"
                                    }, 0), "column" === h.type && h.hovertimeline.to(h.cbg, ge, o.clone(m(h.frames.frame_hover, h.cbg, {
                                        bgCol: h.bgcol,
                                        bg: h.styleProps.background
                                    })), 0), "text" !== h.type && "button" !== h.type || void 0 === h.splitText || !1 === h.splitText || h.hovertimeline.to([h.splitText.lines, h.splitText.words, h.splitText.chars], ge, {
                                        color: h.frames.frame_hover.color,
                                        ease: h.frames.frame_hover.transform.ease
                                    }, 0), "column" === h.type ? h.hovertimeline.to(h.c, ge, n(o.clone(m(h.frames.frame_hover, h.c, {
                                        bgCol: h.bgcol,
                                        bg: h.styleProps.background
                                    }))), 0) : h.hovertimeline.to(h.c, ge, o.clone(m(h.frames.frame_hover, h.c, {
                                        bgCol: h.bgcol,
                                        bg: h.styleProps.background
                                    })), 0), "svg" === h.type)) {
                                    h.svgHTemp = o.clone(h.svgH);
                                    var t = Array.isArray(h.svgHTemp.fill) ? h.svgHTemp.fill[o[r].level] : h.svgHTemp.fill;
                                    h.svgHTemp.fill = t, h.hovertimeline.to(h.svg, ge, h.svgHTemp, 0), h.hovertimeline.to(h.svgPath, ge, {
                                        fill: t
                                    }, 0)
                                }
                                h.hovertimeline.play()
                            }
                            h.lastHoveredTimeStamp = (new Date).getTime()
                        }
                    }), o.document.on("mouseleave", ("column" === h.type ? "#" + h.cbg[0].id + "," : "") + "#" + h.c[0].id, function() {
                        h.elementHovered = !1, (h.animationonscroll || h.readyForHover) && void 0 !== h.hovertimeline && (h.hovertimeline.reverse(), h.hovertimeline.eventCallback("onReverseComplete", o.hoverReverseDone, [{
                            id: r,
                            L: a
                        }]))
                    }))
                }
                if (T || (h.lastRequestedMainFrame = "start" === e.mode ? "frame_1" : "continue" === e.mode ? void 0 === e.frame ? h.currentframe : e.frame : h.lastRequestedMainFrame), void 0 !== e.totime ? h.tSTART = e.totime : void 0 !== v && void 0 === e.frame ? h.tSTART = v : void 0 !== e.frame ? h.tSTART = e.frame : h.tSTART = 0, 0 === h.tSTART && void 0 === h.startedAnimOnce && void 0 === h.leftstage && void 0 === h.startedAnimOnce && !0 === h.hideonfirststart && "preset" === e.mode && (o[r]._L[a[0].id].pVisRequest = 0, h.hideonfirststart = !1), "frame_999" !== h.tSTART && "frame_999" !== h.triggeredFrame || !h.leftstage && void 0 !== h.startedAnimOnce) {
                    if ("true" != h.animationonscroll && 1 != h.animationonscroll ? h.timeline.play(h.tSTART) : h.timeline.time(h.tSTART), jQuery.inArray(h.type, ["group", "row", "column"]) >= 0 && void 0 !== e.frame) {
                        if (void 0 === h.childrenJS)
                            for (var V in h.childrenJS = {}, o[r]._L) void 0 !== o[r]._L[V]._lig && void 0 !== o[r]._L[V]._lig[0] && o[r]._L[V]._lig[0].id === a[0].id && o[r]._L[V]._lig[0].id !== o[r]._L[V].c[0].id && (h.childrenJS[o[r]._L[V].c[0].id] = o[r]._L[V].c);
                        e.frame = "0" == e.frame ? "frame_0" : e.frame, e.frame = "1" == e.frame ? "frame_1" : e.frame, e.frame = "999" == e.frame ? "frame_999" : e.frame;
                        var ue = void 0 === e.totime ? void 0 !== h.frames[e.frame].timeline.startAbsolute ? parseInt(h.frames[e.frame].timeline.startAbsolute, 0) / 1e3 : void 0 !== h.frames[e.frame].timeline.start ? o.isNumeric(h.frames[e.frame].timeline.start) ? parseInt(h.frames[e.frame].timeline.start, 0) / 1e3 : 0 : .001 : e.totime;
                        if (!0 === e.updateChildren)
                            for (var V in h.childrenJS) h.childrenJS.hasOwnProperty(V) && o.renderLayerAnimation({
                                layer: h.childrenJS[V],
                                fastforward: !1,
                                id: r,
                                mode: "continue",
                                updateChildren: !0,
                                totime: ue
                            });
                        else
                            for (var V in h.childrenJS) h.childrenJS.hasOwnProperty(V) && o[r]._L[V].pausedTrueParrent && (o.renderLayerAnimation({
                                layer: h.childrenJS[V],
                                fastforward: !1,
                                id: r,
                                mode: "continue",
                                updateChildren: !0,
                                totime: ue
                            }), o[r]._L[V].pausedTrueParrent = !1)
                    }
                } else;
            }
        }
    });
    var n = function(e) {
            var t = o.clone(e);
            return delete t.backgroundColor, delete t.background, delete t.backgroundImage, delete t.borderSize, delete t.borderStyle, delete t["backdrop-filter"], t
        },
        d = function(e) {
            if (void 0 !== e && void 0 !== e.path && Array.isArray(e.path)) {
                var t = 0,
                    i = 0;
                for (var a in e.path) !e.path.hasOwnProperty(a) || t > 0 || i > 0 || (t += e.path[a].x, i += e.path[a].y);
                return 0 != t || 0 != i
            }
        },
        l = function(e) {
            return void 0 === e.skewX && delete e.skewX, void 0 === e.skewY && delete e.skewY, e
        },
        c = function(e) {
            e.from = "edge" === e.from ? "edges" : e.from;
            var t = tpGS.gsap.utils.distribute(e);
            return function(i, a, r) {
                return t(i, a, r) + (i <= r.length / 2 ? 0 : e.offset || 0)
            }
        },
        p = function(e) {
            o[e.id].BUG_safari_clipPath && e.L[0].classList.remove("rs-pelock"), (o[e.id]._L[e.L[0].id]._ingroup || o[e.id]._L[e.L[0].id]._incolumn || o[e.id]._L[e.L[0].id]._inrow) && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid] && void 0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline && (o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timeline.isActive() || void 0 === o[e.id]._L[e.L[0].id] || void 0 === o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()] || (null == o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone || o[e.id]._L[o[e.id]._L[e.L[0].id]._ligid].timezone.to <= parseInt(o[e.id]._L[e.L[0].id].frames[o[e.id]._L[e.L[0].id].timeline.currentLabel()].timeline.start, 0)) && !0 !== o[e.id]._L[e.L[0].id].animOnScrollForceDisable && (o[e.id]._L[e.L[0].id].pausedTrueParrent = !0, o[e.id]._L[e.L[0].id].timeline.pause()));
            var t = o[e.id]._L[e.L[0].id],
                i = t.hovertimeline;
            i && i.time() > 0 && (i.pause(), i.time(0), i.kill(), delete t.hovertimeline), delete o[e.id]._L[e.L[0].id].childrenAtStartNotVisible, o[e.id]._L[e.L[0].id].pVisRequest = 1;
            var a = {
                layer: e.L
            };
            o[e.id]._L[e.L[0].id].ignoremousemove = !1, o[e.id]._L[e.L[0].id].leftstage = !1, o[e.id]._L[e.L[0].id].readyForHover = !1, void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.from === e.frame && o[e.id]._L[e.L[0].id].layerLoop.count++, "frame_1" === e.frame && "Safari" === window.RSBrowser && void 0 === o[e.id]._L[e.L[0].id].safariRenderIssue && (tpGS.gsap.set([o[e.id]._L[e.L[0].id].c], {
                opacity: 1
            }), o[e.id]._L[e.L[0].id].safariRenderIssue = !0), "frame_999" !== e.frame && (o[e.id]._L[e.L[0].id].startedAnimOnce = !0, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto"), a.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enterstage" : "frame_999" === e.frame ? "leavestage" : "framestarted", window.requestAnimationFrame(function() {
                o[e.id]._L[e.L[0].id]._ingroup && !0 !== o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].frames.frame_1.timeline.waitoncall && (o[e.id]._L[o[e.id]._L[e.L[0].id]._lig[0].id].pVisRequest = 1), o.requestLayerUpdates(e.id, a.eventtype, e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective ? e.tPE : "ignore")
            }), a.id = e.id, a.layerid = e.L[0].id, a.layertype = o[e.id]._L[e.L[0].id].type, a.frame_index = e.frame, a.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [a]), "enterstage" === a.eventtype && o.toggleState(o[e.id]._L[e.L[0].id].layertoggledby), "frame_1" === e.frame && o.animcompleted(e.L, e.id)
        },
        g = function(e) {
            "frame_999" === e.frame && (o[e.id]._L[e.L[0].id].pVisRequest = 1, o[e.id]._L[e.L[0].id].pPeventsRequest = o[e.id]._L[e.L[0].id].noPevents ? "none" : "auto", o[e.id]._L[e.L[0].id].leftstage = !1, window.requestAnimationFrame(function() {
                o.requestLayerUpdates(e.id, "update", e.L[0].id)
            }))
        },
        u = function(e) {
            var t = !0;
            if ("column" === o[e.id]._L[e.L[0].id].type || "row" === o[e.id]._L[e.L[0].id].type || "group" === o[e.id]._L[e.L[0].id].type) {
                var i = o[e.id]._L[e.L[0].id].timeline.currentLabel(),
                    a = jQuery.inArray(i, o[e.id]._L[e.L[0].id].ford);
                a++, a = o[e.id]._L[e.L[0].id].ford.length > a ? o[e.id]._L[e.L[0].id].ford[a] : i, void 0 !== o[e.id]._L[e.L[0].id].frames[a] && void 0 !== o[e.id]._L[e.L[0].id].frames[i] && (o[e.id]._L[e.L[0].id].timezone = {
                    from: parseInt(o[e.id]._L[e.L[0].id].frames[i].timeline.startAbsolute, 0),
                    to: parseInt(o[e.id]._L[e.L[0].id].frames[a].timeline.startAbsolute, 0)
                })
            }
            if ("frame_999" !== e.frame && o[e.id].isEdge && "shape" === o[e.id]._L[e.L[0].id].type) {
                var r = o[e.id]._L[e.L[0].id].c[0].style.opacity;
                o[e.id]._L[e.L[0].id].c[0].style.opacity = r - 1e-4, tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
                    opacity: r - .001,
                    delay: .05
                }), tpGS.gsap.set(o[e.id]._L[e.L[0].id].c[0], {
                    opacity: r,
                    delay: .1
                })
            }
            var s = {};
            s.layer = e.L, s.eventtype = "frame_0" === e.frame || "frame_1" === e.frame ? "enteredstage" : "frame_999" === e.frame ? "leftstage" : "frameended", o[e.id]._L[e.L[0].id].readyForHover = !0, s.layertype = o[e.id]._L[e.L[0].id].type, s.frame_index = e.frame, s.layersettings = o[e.id]._L[e.L[0].id], o[e.id].c.trigger("revolution.layeraction", [s]), "frame_999" === e.frame && "leftstage" === s.eventtype ? (o[e.id]._L[e.L[0].id].leftstage = !0, o[e.id]._L[e.L[0].id].pVisRequest = 0, o[e.id]._L[e.L[0].id].pPeventsRequest = "none", t = !1, window.requestAnimationFrame(function() {
                o.requestLayerUpdates(e.id, "leftstage", e.L[0].id)
            })) : (e.L[0].id, void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame] && void 0 !== o[e.id]._L[e.L[0].id].frames[e.frame].timeline && 0 == o[e.id]._L[e.L[0].id].frames[e.frame].timeline.usePerspective && window.requestAnimationFrame(function() {
                o.requestLayerUpdates(e.id, "frameended", e.L[0].id, e.tPE)
            })), "leftstage" === s.eventtype && void 0 !== o[e.id].videos && void 0 !== o[e.id].videos[e.L[0].id] && o.stopVideo && o.stopVideo(e.L, e.id), "column" === o[e.id]._L[e.L[0].id].type && tpGS.gsap.to(o[e.id]._L[e.L[0].id].cbg, .01, {
                visibility: "visible"
            }), "leftstage" === s.eventtype && (o.unToggleState(e.layertoggledby), "video" === o[e.id]._L[e.L[0].id].type && o.resetVideo && setTimeout(function() {
                o.resetVideo(e.L, e.id)
            }, 100)), o[e.id].BUG_safari_clipPath && !t && e.L[0].classList.add("rs-pelock"), void 0 !== o[e.id]._L[e.L[0].id].layerLoop && o[e.id]._L[e.L[0].id].layerLoop.to === e.frame && (-1 == o[e.id]._L[e.L[0].id].layerLoop.repeat || o[e.id]._L[e.L[0].id].layerLoop.repeat > o[e.id]._L[e.L[0].id].layerLoop.count) && o.renderLayerAnimation({
                layer: o[e.id]._L[e.L[0].id].c,
                frame: o[e.id]._L[e.L[0].id].layerLoop.from,
                updateChildren: o[e.id]._L[e.L[0].id].layerLoop.children,
                mode: "continue",
                fastforward: !0 === o[e.id]._L[e.L[0].id].layerLoop.keep,
                id: e.id
            })
        },
        h = function(e) {
            if (void 0 === e) return "";
            var t = "";
            return o.isChrome8889 && 0 === e.blur && (e.blur = .05), t = void 0 !== e.blur ? "blur(" + (e.blur || 0) + "px)" : "", t += void 0 !== e.grayscale ? (t.length > 0 ? " " : "") + "grayscale(" + (e.grayscale || 0) + "%)" : "", "" === (t += void 0 !== e.brightness ? (t.length > 0 ? " " : "") + "brightness(" + (e.brightness || 100) + "%)" : "") ? "none" : t
        },
        m = function(e, t, i) {
            var a, r = o.clone(e.transform);
            if ((r.originX || r.originY || r.originZ) && (r.transformOrigin = (void 0 === r.originX ? "50%" : r.originX) + " " + (void 0 === r.originY ? "50%" : r.originY) + " " + (void 0 === r.originZ ? "50%" : r.originZ), delete r.originX, delete r.originY, delete r.originZ), void 0 !== e && void 0 !== e.filter && (r.filter = h(e.filter), r["-webkit-filter"] = r.filter), r.color = void 0 === r.color ? "rgba(255,255,255,1)" : r.color, r.force3D = "auto", void 0 !== r.borderRadius && ((a = r.borderRadius.split(" ")).length, r.borderTopLeftRadius = a[0], r.borderTopRightRadius = a[1], r.borderBottomRightRadius = a[2], r.borderBottomLeftRadius = a[3], delete r.borderRadius), void 0 !== r.borderWidth && ((a = r.borderWidth.split(" ")).length, r.borderTopWidth = a[0], r.borderRightWidth = a[1], r.borderBottomWidth = a[2], r.borderLeftWidth = a[3], delete r.borderWidth), void 0 === i.bg || -1 === i.bg.indexOf("url")) {
                var s = -1 !== i.bgCol.search("gradient"),
                    n = r.backgroundImage && "string" == typeof r.backgroundImage && -1 !== r.backgroundImage.search("gradient");
                n && s ? (180 !== f(i.bgCol) && 180 == f(r.backgroundImage) && (r.backgroundImage = v(r.backgroundImage, 180)), r.backgroundImage = tpGS.getSSGColors(i.bgCol, r.backgroundImage, void 0 === r.gs ? "fading" : r.gs).to) : n && !s ? r.backgroundImage = tpGS.getSSGColors(i.bgCol, r.backgroundImage, void 0 === r.gs ? "fading" : r.gs).to : !n && s && (r.backgroundImage = tpGS.getSSGColors(i.bgCol, r.backgroundColor, void 0 === r.gs ? "fading" : r.gs).to)
            }
            return delete r.gs, r
        },
        v = function(e, t) {
            var i = (e = e.split("("))[0];
            return e.shift(), i + "(" + t + "deg, " + e.join("(")
        },
        f = function(e) {
            if (-1 !== e.search("deg,")) {
                var t = e.split("deg,")[0];
                if (-1 !== t.search(/\(/)) return parseInt(t.split("(")[1], 10)
            }
            return 180
        },
        y = function(e, t) {
            if (void 0 !== e && e.indexOf("oc:t") >= 0) return {};
            e = void 0 === e ? "" : e.split(";");
            var i = {
                fill: o.revToResp("#ffffff", o[t].rle),
                stroke: "transparent",
                "stroke-width": "0px",
                "stroke-dasharray": "0",
                "stroke-dashoffset": "0"
            };
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var r = e[a].split(":");
                    switch (r[0]) {
                        case "c":
                            i.fill = o.revToResp(r[1], o[t].rle, void 0, "||");
                            break;
                        case "sw":
                            i["stroke-width"] = r[1];
                            break;
                        case "sc":
                            i.stroke = r[1];
                            break;
                        case "so":
                            i["stroke-dashoffset"] = r[1];
                            break;
                        case "sa":
                            i["stroke-dasharray"] = r[1]
                    }
                }
            return i
        },
        b = function(e) {
            return "c" === e ? "center" : "l" === e ? "left" : "r" === e ? "right" : e
        },
        w = function(e) {
            var t = o[e.id]._L[e.layer[0].id],
                i = !1;
            if (t.splitText && !1 !== t.splitText && t.splitText.revert(), "text" === t.type || "button" === t.type) {
                for (var a in t.frames)
                    if (void 0 !== t.frames[a].chars || void 0 !== t.frames[a].words || void 0 !== t.frames[a].lines) {
                        i = !0;
                        break
                    }
                t.splitText = !!i && new tpGS.SplitText(t.c, {
                    type: "lines,words,chars",
                    wordsClass: "rs_splitted_words",
                    linesClass: "rs_splitted_lines",
                    charsClass: "rs_splitted_chars"
                })
            } else t.splitText = !1
        },
        _ = function(e, t, i) {
            if (void 0 !== e && e.indexOf("block") >= 0) {
                var a = {};
                switch (0 === t[0].getElementsByClassName("tp-blockmask_in").length && (t.append('<div class="tp-blockmask_in"></div>'), t.append('<div class="tp-blockmask_out"></div>')), i = void 0 === i ? "power3.inOut" : i, a.ft = [{
                    scaleY: 1,
                    scaleX: 0,
                    transformOrigin: "0% 50%"
                }, {
                    scaleY: 1,
                    scaleX: 1,
                    ease: i,
                    immediateRender: !1
                }], a.t = {
                    scaleY: 1,
                    scaleX: 0,
                    transformOrigin: "100% 50%",
                    ease: i,
                    immediateRender: !1
                }, a.bmask_in = t.find(".tp-blockmask_in"), a.bmask_out = t.find(".tp-blockmask_out"), a.type = "block", e) {
                    case "blocktoleft":
                    case "blockfromright":
                        a.ft[0].transformOrigin = "100% 50%", a.t.transformOrigin = "0% 50%";
                        break;
                    case "blockfromtop":
                    case "blocktobottom":
                        a.ft = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: i,
                            immediateRender: !1
                        }], a.t = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%",
                            ease: i,
                            immediateRender: !1
                        };
                        break;
                    case "blocktotop":
                    case "blockfrombottom":
                        a.ft = [{
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 100%"
                        }, {
                            scaleX: 1,
                            scaleY: 1,
                            ease: i,
                            immediateRender: !1
                        }], a.t = {
                            scaleX: 1,
                            scaleY: 0,
                            transformOrigin: "50% 0%",
                            ease: i,
                            immediateRender: !1
                        }
                }
                return a.ft[1].overwrite = "auto", a.t.overwrite = "auto", a
            }
            return !1
        },
        x = function(e, t, i, a, r) {
            return 0 === o[r].sdir || void 0 === t ? e : ("mask" === i ? a = "x" === a ? "mX" : "y" === a ? "mY" : a : "chars" === i ? a = "x" === a ? "cX" : "y" === a ? "cY" : "dir" === a ? "cD" : a : "words" === i ? a = "x" === a ? "wX" : "y" === a ? "wY" : "dir" === a ? "wD" : a : "lines" === i && (a = "x" === a ? "lX" : "y" === a ? "lY" : "dir" === a ? "lD" : a), void 0 === t[a] || !1 === t[a] ? e : void 0 !== t && !0 === t[a] ? "t" === e || "top" === e ? "b" : "b" === e || "bottom" === e ? "t" : "l" === e || "left" === e ? "r" : "r" === e || "right" === e ? "l" : -1 * e : void 0)
        },
        S = function(e) {
            var t, i = o[e.id]._L[e.layer[0].id],
                a = void 0 === e.source ? o.clone(e.frame.transform) : o.clone(e.frame[e.source]),
                r = {
                    originX: "50%",
                    originY: "50%",
                    originZ: "0"
                },
                s = void 0 !== i._lig ? o[e.id]._L[i._lig[0].id].eow : o[e.id].conw,
                n = void 0 !== i._lig ? o[e.id]._L[i._lig[0].id].eoh : o[e.id].conh;
            for (var d in a)
                if (a.hasOwnProperty(d)) {
                    if (a[d] = "object" == typeof a[d] ? a[d][o[e.id].level] : a[d], "inherit" === a[d] || "delay" === d || "direction" === d || "use" === d) delete a[d];
                    else if ("originX" === d || "originY" === d || "originZ" === d) r[d] = a[d], delete a[d];
                    else if (o.isNumeric(a[d], 0)) a[d] = x(a[d], e.frame.reverse, e.target, d, e.id, e.id);
                    else if ("r" === a[d][0] && "a" === a[d][1] && "(" === a[d][3]) a[d] = a[d].replace("ran", "random");
                    else if (a[d].indexOf("cyc(") >= 0) {
                        var l = a[d].replace("cyc(", "").replace(")", "").replace("[", "").replace("]", "").split("|");
                        a[d] = new function(e) {
                            return tpGS.gsap.utils.wrap(l, void 0)
                        }
                    } else if (a[d].indexOf("%") >= 0 && o.isNumeric(t = parseInt(a[d], 0))) a[d] = "x" === d ? x((i.eow || 0) * t / 100, e.frame.reverse, e.target, d, e.id) : "y" === d ? x((i.eoh || 0) * t / 100, e.frame.reverse, e.target, d, e.id) : a[d];
                    else switch (a[d] = a[d].replace("[", "").replace("]", ""), a[d] = x(a[d], e.frame.reverse, e.target, d, e.id, e.id), a[d]) {
                        case "t":
                        case "top":
                            a[d] = 0 - (i.eoh || 0) - ("column" === i.type ? 0 : i.calcy || 0) - o.getLayerParallaxOffset(e.id, e.layer[0].id, "v") - ("row" === i.type && void 0 !== i.marginTop ? i.marginTop[o[e.id].level] : 0);
                            break;
                        case "b":
                        case "bottom":
                            a[d] = n - ("column" === i.type ? 0 : i.calcy || 0) + o.getLayerParallaxOffset(e.id, e.layer[0].id, "v");
                            break;
                        case "l":
                        case "left":
                            a[d] = 0 - ("row" === i.type ? i.pow : i.eow || 0) - ("column" === i.type ? 0 : "row" === i.type ? i.rowcalcx : i.calcx || 0) - o.getLayerParallaxOffset(e.id, e.layer[0].id, "h");
                            break;
                        case "r":
                        case "right":
                            a[d] = s - ("column" === i.type ? 0 : "row" === i.type ? i.rowcalcx : i.calcx || 0) + o.getLayerParallaxOffset(e.id, e.layer[0].id, "h");
                            break;
                        case "m":
                        case "c":
                        case "middle":
                        case "center":
                            a[d] = "x" === d ? x(s / 2 - ("column" === i.type ? 0 : i.calcx || 0) - (i.eow || 0) / 2, e.frame.reverse, e.target, d, e.id) : "y" === d ? x(n / 2 - ("column" === i.type ? 0 : i.calcy || 0) - (i.eoh || 0) / 2, e.frame.reverse, e.target, d, e.id) : a[d]
                    }
                    "skewX" === d && void 0 !== a[d] && (a.scaleY = void 0 === a.scaleY ? 1 : parseFloat(a.scaleY), a.scaleY *= Math.cos(parseFloat(a[d]) * tpGS.DEG2RAD)), "skewY" === d && void 0 !== a[d] && (a.scaleX = void 0 === a.scaleX ? 1 : parseFloat(a.scaleX), a.scaleX *= Math.cos(parseFloat(a[d]) * tpGS.DEG2RAD))
                }
            if (a.transformOrigin = r.originX + " " + r.originY + " " + r.originZ, !o[e.id].BUG_ie_clipPath && void 0 !== a.clip && void 0 !== i.clipPath && i.clipPath.use) {
                var c = "rectangle" == i.clipPath.type,
                    p = parseInt(a.clip, 0),
                    g = 100 - parseInt(a.clipB, 0),
                    u = Math.round(p / 2);
                switch (i.clipPath.origin) {
                    case "invh":
                        a.clipPath = "polygon(0% 0%, 0% 100%, " + p + "% 100%, " + p + "% 0%, 100% 0%, 100% 100%, " + g + "% 100%, " + g + "% 0%, 0% 0%)";
                        break;
                    case "invv":
                        a.clipPath = "polygon(100% 0%, 0% 0%, 0% " + p + "%, 100% " + p + "%, 100% 100%, 0% 100%, 0% " + g + "%, 100% " + g + "%, 100% 0%)";
                        break;
                    case "cv":
                        a.clipPath = c ? "polygon(" + (50 - u) + "% 0%, " + (50 + u) + "% 0%, " + (50 + u) + "% 100%, " + (50 - u) + "% 100%)" : "circle(" + p + "% at 50% 50%)";
                        break;
                    case "ch":
                        a.clipPath = c ? "polygon(0% " + (50 - u) + "%, 0% " + (50 + u) + "%, 100% " + (50 + u) + "%, 100% " + (50 - u) + "%)" : "circle(" + p + "% at 50% 50%)";
                        break;
                    case "l":
                        a.clipPath = c ? "polygon(0% 0%, " + p + "% 0%, " + p + "% 100%, 0% 100%)" : "circle(" + p + "% at 0% 50%)";
                        break;
                    case "r":
                        a.clipPath = c ? "polygon(" + (100 - p) + "% 0%, 100% 0%, 100% 100%, " + (100 - p) + "% 100%)" : "circle(" + p + "% at 100% 50%)";
                        break;
                    case "t":
                        a.clipPath = c ? "polygon(0% 0%, 100% 0%, 100% " + p + "%, 0% " + p + "%)" : "circle(" + p + "% at 50% 0%)";
                        break;
                    case "b":
                        a.clipPath = c ? "polygon(0% 100%, 100% 100%, 100% " + (100 - p) + "%, 0% " + (100 - p) + "%)" : "circle(" + p + "% at 50% 100%)";
                        break;
                    case "lt":
                        a.clipPath = c ? "polygon(0% 0%," + 2 * p + "% 0%, 0% " + 2 * p + "%)" : "circle(" + p + "% at 0% 0%)";
                        break;
                    case "lb":
                        a.clipPath = c ? "polygon(0% " + (100 - 2 * p) + "%, 0% 100%," + 2 * p + "% 100%)" : "circle(" + p + "% at 0% 100%)";
                        break;
                    case "rt":
                        a.clipPath = c ? "polygon(" + (100 - 2 * p) + "% 0%, 100% 0%, 100% " + 2 * p + "%)" : "circle(" + p + "% at 100% 0%)";
                        break;
                    case "rb":
                        a.clipPath = c ? "polygon(" + (100 - 2 * p) + "% 100%, 100% 100%, 100% " + (100 - 2 * p) + "%)" : "circle(" + p + "% at 100% 100%)";
                        break;
                    case "clr":
                        a.clipPath = c ? "polygon(0% 0%, 0% " + p + "%, " + (100 - p) + "% 100%, 100% 100%, 100% " + (100 - p) + "%, " + p + "% 0%)" : "circle(" + p + "% at 50% 50%)";
                        break;
                    case "crl":
                        a.clipPath = c ? "polygon(0% " + (100 - p) + "%, 0% 100%, " + p + "% 100%, 100% " + p + "%, 100% 0%, " + (100 - p) + "% 0%)" : "circle(" + p + "% at 50% 50%)"
                }!0 !== o.isFirefox(e.id) && (a["-webkit-clip-path"] = a.clipPath), a["clip-path"] = a.clipPath, delete a.clip, delete a.clipB
            } else delete a.clip;
            return "mask" !== e.target && (void 0 === e.frame || void 0 === e.frame.filter && !e.forcefilter || (a.filter = h(e.frame.filter), a["-webkit-filter"] = a.filter, a["backdrop-filter"] = function(e) {
                if (void 0 === e) return "";
                var t = "";
                return o.isChrome8889 && 0 === e.b_blur && (e.b_blur = .05), t = void 0 !== e.b_blur ? "blur(" + (e.b_blur || 0) + "px)" : "", t += void 0 !== e.b_grayscale ? (t.length > 0 ? " " : "") + "grayscale(" + (e.b_grayscale || 0) + "%)" : "", t += void 0 !== e.b_sepia ? (t.length > 0 ? " " : "") + "sepia(" + (e.b_sepia || 0) + "%)" : "", t += void 0 !== e.b_invert ? (t.length > 0 ? " " : "") + "invert(" + (e.b_invert || 0) + "%)" : "", "" == (t += void 0 !== e.b_brightness ? (t.length > 0 ? " " : "") + "brightness(" + (e.b_brightness || 100) + "%)" : "") ? "none" : t
            }(e.frame.filter), window.isSafari11 && (a["-webkit-backdrop-filter"] = a["backdrop-filter"]), window.isSafari11 && void 0 !== a.filter && void 0 === a.rotationX && void 0 !== e.frame.filter && void 0 !== e.frame.filter.blur && (a.rotationX = .001)), jQuery.inArray(e.source, ["chars", "words", "lines"]) >= 0 && (void 0 !== e.frame[e.source].blur || e.forcefilter) && (a.filter = h(e.frame[e.source]), a["-webkit-filter"] = a.filter), delete a.grayscale, delete a.blur, delete a.brightness), a.ease = void 0 !== a.ease ? a.ease : void 0 === a.ease && void 0 !== e.ease || void 0 !== a.ease && void 0 !== e.ease && "inherit" === a.ease ? e.ease : e.frame.timeline.ease, a.ease = void 0 === a.ease || "default" === a.ease ? "power3.inOut" : a.ease, a
        },
        k = function(e, t, i, a, r) {
            var s, n, d = {},
                l = {},
                c = {};
            for (var p in a = void 0 === a ? "transform" : a, "loop" === r ? (c.autoRotate = !1, c.yoyo_filter = !1, c.yoyo_rotate = !1, c.yoyo_move = !1, c.yoyo_scale = !1, c.curved = !1, c.curviness = 2, c.ease = "none", c.speed = 1e3, c.st = 0, d.x = 0, d.y = 0, d.z = 0, d.xr = 0, d.yr = 0, d.zr = 0, d.scaleX = 1, d.scaleY = 1, d.originX = "50%", d.originY = "50%", d.originZ = "0", d.rotationX = "0deg", d.rotationY = "0deg", d.rotationZ = "0deg") : (c.speed = 300, i ? c.ease = "default" : d.ease = "default"), "sfx" === r && (d.fxc = "#ffffff"), e = e.split(";"))
                if (e.hasOwnProperty(p)) {
                    var g = e[p].split(":");
                    switch (g[0]) {
                        case "u":
                            d.use = "true" === g[1] || "t" === g[1] || fasle;
                            break;
                        case "c":
                            s = g[1];
                            break;
                        case "fxc":
                            d.fxc = g[1];
                            break;
                        case "bgc":
                            n = g[1];
                            break;
                        case "auto":
                            d.auto = "t" === g[1] || void 0 === g[1] || "true" === g[1];
                            break;
                        case "o":
                            d.opacity = g[1];
                            break;
                        case "oX":
                            d.originX = g[1];
                            break;
                        case "oY":
                            d.originY = g[1];
                            break;
                        case "oZ":
                            d.originZ = g[1];
                            break;
                        case "sX":
                            d.scaleX = g[1];
                            break;
                        case "sY":
                            d.scaleY = g[1];
                            break;
                        case "skX":
                            d.skewX = g[1];
                            break;
                        case "skY":
                            d.skewY = g[1];
                            break;
                        case "rX":
                            d.rotationX = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
                            break;
                        case "rY":
                            d.rotationY = g[1], 0 != g[1] && "0deg" !== g[1] && o.addSafariFix(t);
                            break;
                        case "rZ":
                            d.rotationZ = g[1];
                            break;
                        case "sc":
                            d.color = g[1];
                            break;
                        case "se":
                            d.effect = g[1];
                            break;
                        case "bos":
                            d.borderStyle = g[1];
                            break;
                        case "boc":
                            d.borderColor = g[1];
                            break;
                        case "td":
                            d.textDecoration = g[1];
                            break;
                        case "zI":
                            d.zIndex = g[1];
                            break;
                        case "tp":
                            d.transformPerspective = "isometric" === o[t].perspectiveType ? 0 : "global" === o[t].perspectiveType ? o[t].perspective : g[1];
                            break;
                        case "cp":
                            d.clip = parseInt(g[1], 0);
                            break;
                        case "cpb":
                            d.clipB = parseInt(g[1], 0);
                            break;
                        case "aR":
                            c.autoRotate = "t" == g[1];
                            break;
                        case "rA":
                            c.radiusAngle = g[1];
                            break;
                        case "yyf":
                            c.yoyo_filter = "t" == g[1];
                            break;
                        case "yym":
                            c.yoyo_move = "t" == g[1];
                            break;
                        case "yyr":
                            c.yoyo_rotate = "t" == g[1];
                            break;
                        case "yys":
                            c.yoyo_scale = "t" == g[1];
                            break;
                        case "crd":
                            c.curved = "t" == g[1];
                            break;
                        case "x":
                            d.x = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
                            break;
                        case "y":
                            d.y = "reverse" === r ? "t" === g[1] || !0 === g[1] || "true" == g[1] : "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle);
                            break;
                        case "z":
                            d.z = "loop" === r ? parseInt(g[1], 0) : o.revToResp(g[1], o[t].rle), 0 != g[1] && o.addSafariFix(t);
                            break;
                        case "bow":
                            d.borderWidth = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
                            break;
                        case "bor":
                            d.borderRadius = o.revToResp(g[1], 4, 0).toString().replace(/,/g, " ");
                            break;
                        case "m":
                            d.mask = "t" === g[1] || "f" !== g[1] && g[1];
                            break;
                        case "iC":
                            d.instantClick = "t" === g[1] || "f" !== g[1] && g[1];
                            break;
                        case "xR":
                            d.xr = parseInt(g[1], 0), o.addSafariFix(t);
                            break;
                        case "yR":
                            d.yr = parseInt(g[1], 0), o.addSafariFix(t);
                            break;
                        case "zR":
                            d.zr = parseInt(g[1], 0);
                            break;
                        case "blu":
                            "loop" === r ? d.blur = parseInt(g[1], 0) : l.blur = parseInt(g[1], 0);
                            break;
                        case "gra":
                            "loop" === r ? d.grayscale = parseInt(g[1], 0) : l.grayscale = parseInt(g[1], 0);
                            break;
                        case "bri":
                            "loop" === r ? d.brightness = parseInt(g[1], 0) : l.brightness = parseInt(g[1], 0);
                            break;
                        case "bB":
                            l.b_blur = parseInt(g[1], 0);
                            break;
                        case "bG":
                            l.b_grayscale = parseInt(g[1], 0);
                            break;
                        case "bR":
                            l.b_brightness = parseInt(g[1], 0);
                            break;
                        case "bI":
                            l.b_invert = parseInt(g[1], 0);
                            break;
                        case "bS":
                            l.b_sepia = parseInt(g[1], 0);
                            break;
                        case "sp":
                            c.speed = parseInt(g[1], 0);
                            break;
                        case "d":
                            d.delay = parseInt(g[1], 0);
                            break;
                        case "crns":
                            c.curviness = parseInt(g[1], 0);
                            break;
                        case "st":
                            c.start = "w" === g[1] || "a" === g[1] ? "+=0" : g[1], c.waitoncall = "w" === g[1] || "a" === g[1];
                            break;
                        case "sA":
                            c.startAbsolute = g[1];
                            break;
                        case "sR":
                            c.startRelative = g[1];
                            break;
                        case "e":
                            i ? c.ease = g[1] : d.ease = g[1];
                            break;
                        default:
                            g[0].length > 0 && (d[g[0]] = "t" === g[1] || "f" !== g[1] && g[1])
                    }
                }
            var u = {
                timeline: c
            };
            return jQuery.isEmptyObject(l) || ("split" === r ? d = jQuery.extend(!0, d, l) : u.filter = l), "split" === r && (d.dir = void 0 === d.dir ? "start" : "backward" === d.dir ? "end" : "middletoedge" === d.dir ? "center" : "edgetomiddle" === d.dir ? "edge" : d.dir), jQuery.isEmptyObject(s) || (u.color = s), jQuery.isEmptyObject(n) || (u.bgcolor = n), u[a] = d, u
        },
        L = function(e, t) {
            var i = {},
                a = 0;
            if (void 0 === window.rdF0) {
                var r = k("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;dir:forward;d:5", t).transform;
                window.rdF0 = window.rdF1 = {
                    transform: k("x:0;y:0;z:0;rX:0;rY:0;rZ:0;o:0;skX:0;skY:0;sX:0;sY:0;oX:50%;oY:50%;oZ:0;tp:600px", t, !0).transform,
                    mask: k("x:0;y:0", t, !0).transform,
                    chars: jQuery.extend(!0, {
                        blur: 0,
                        grayscale: 0,
                        brightness: 100
                    }, r),
                    words: jQuery.extend(!0, {
                        blur: 0,
                        grayscale: 0,
                        brightness: 100
                    }, r),
                    lines: jQuery.extend(!0, {
                        blur: 0,
                        grayscale: 0,
                        brightness: 100
                    }, r)
                }, window.rdF1.transform.opacity = window.rdF1.chars.opacity = window.rdF1.words.opacity = window.rdF1.lines.opacity = window.rdF1.transform.scaleX = window.rdF1.chars.scaleX = window.rdF1.words.scaleX = window.rdF1.lines.scaleX = window.rdF1.transform.scaleY = window.rdF1.chars.scaleY = window.rdF1.words.scaleY = window.rdF1.lines.scaleY = 1
            }
            for (var a in void 0 === e.frame_0 && (e.frame_0 = "x:0"), void 0 === e.frame_1 && (e.frame_1 = "x:0"), e.dddNeeded = !1, e.ford)
                if (e.ford.hasOwnProperty(a)) {
                    var n = e.ford[a];
                    if (e[n]) {
                        if (i[n] = k(e[n], t, !0), void 0 !== i[n].bgcolor && (e.bgcolinuse = !0), o[t].BUG_ie_clipPath && void 0 !== e.clipPath && e.clipPath.use && void 0 !== i[n].transform.clip) {
                            var d = "rectangle" === e.clipPath.type ? 100 - parseInt(i[n].transform.clip) : 100 - Math.min(100, 2 * parseInt(i[n].transform.clip));
                            switch (e.clipPath.origin) {
                                case "clr":
                                case "rb":
                                case "rt":
                                case "r":
                                    e[n + "_mask"] = "u:t;x:" + d + "%;y:0px;", i[n].transform.x = o.revToResp("-" + d + "%", o[t].rle);
                                    break;
                                case "crl":
                                case "lb":
                                case "lt":
                                case "cv":
                                case "l":
                                    e[n + "_mask"] = "u:t;x:-" + d + "%;y:0px;", i[n].transform.x = o.revToResp(d + "%", o[t].rle);
                                    break;
                                case "ch":
                                case "t":
                                    e[n + "_mask"] = "u:t;y:-" + d + "%;y:0px;", i[n].transform.y = o.revToResp(d + "%", o[t].rle);
                                    break;
                                case "b":
                                    e[n + "_mask"] = "u:t;y:" + d + "%;y:0px;", i[n].transform.y = o.revToResp("-" + d + "%", o[t].rle)
                            }
                            delete i[n].transform.clip, delete i[n].transform.clipB
                        }
                        e[n + "_mask"] && (i[n].mask = k(e[n + "_mask"], t).transform), null != i[n].mask && i[n].mask.use ? (i[n].mask.x = void 0 === i[n].mask.x ? 0 : i[n].mask.x, i[n].mask.y = void 0 === i[n].mask.y ? 0 : i[n].mask.y, delete i[n].mask.use, i[n].mask.overflow = "hidden") : i[n].mask = {
                            ease: "default",
                            overflow: "visible"
                        }, e[n + "_chars"] && (i[n].chars = k(e[n + "_chars"], t, void 0, void 0, "split").transform), e[n + "_words"] && (i[n].words = k(e[n + "_words"], t, void 0, void 0, "split").transform), e[n + "_lines"] && (i[n].lines = k(e[n + "_lines"], t, void 0, void 0, "split").transform), (e[n + "_chars"] || e[n + "_words"] || e[n + "_lines"]) && (i[n].dosplit = !0), i.frame_0 = void 0 === i.frame_0 ? {
                            transform: {}
                        } : i.frame_0, i[n].transform.auto && (i[n].transform = o.clone(i.frame_0.transform), i[n].transform.opacity = void 0 === i[n].transform.opacity ? 0 : i[n].transform.opacity, void 0 !== i.frame_0.filter && (i[n].filter = o.clone(i.frame_0.filter)), void 0 !== i.frame_0.mask && (i[n].mask = o.clone(i.frame_0.mask)), void 0 !== i.frame_0.chars && (i[n].chars = o.clone(i.frame_0.chars)), void 0 !== i.frame_0.words && (i[n].words = o.clone(i.frame_0.words)), void 0 !== i.frame_0.lines && (i[n].lines = o.clone(i.frame_0.lines)), void 0 === i.frame_0.chars && void 0 === i.frame_0.words && void 0 === i.frame_0.lines || (i[n].dosplit = !0)), e[n + "_sfx"] && (i[n].sfx = k(e[n + "_sfx"], t, !1, void 0, "sfx").transform), e[n + "_reverse"] && (i[n].reverse = k(e[n + "_reverse"], t, !1, void 0, "reverse").transform)
                    }
                }
            if (i.frame_0.dosplit && (i.frame_1.dosplit = !0), void 0 === e.frame_hover && void 0 === e.svgh || (i.frame_hover = k(void 0 === e.frame_hover ? "" : e.frame_hover, t), !s || "true" != i.frame_hover.transform.instantClick && 1 != i.frame_hover.transform.instantClick ? (delete i.frame_hover.transform.instantClick, i.frame_hover.transform.color = i.frame_hover.color, void 0 === i.frame_hover.transform.color && delete i.frame_hover.transform.color, void 0 !== i.frame_hover.bgcolor && i.frame_hover.bgcolor.indexOf("gradient") >= 0 ? i.frame_hover.transform.backgroundImage = i.frame_hover.bgcolor : void 0 !== i.frame_hover.bgcolor && (i.frame_hover.transform.backgroundColor = i.frame_hover.bgcolor), void 0 !== i.frame_hover.bgcolor && (e.bgcolinuse = !0), i.frame_hover.transform.opacity = void 0 === i.frame_hover.transform.opacity ? 1 : i.frame_hover.transform.opacity, i.frame_hover.mask = void 0 !== i.frame_hover.transform.mask && i.frame_hover.transform.mask, delete i.frame_hover.transform.mask, void 0 !== i.frame_hover.transform && ((i.frame_hover.transform.borderWidth || i.frame_hover.transform.borderStyle) && (i.frame_hover.transform.borderColor = void 0 === i.frame_hover.transform.borderColor ? "transparent" : i.frame_hover.transform.borderColor), "none" !== i.frame_hover.transform.borderStyle && void 0 === i.frame_hover.transform.borderWidth && (i.frame_hover.transform.borderWidth = o.revToResp(0, 4, 0).toString().replace(/,/g, " ")), void 0 === e.bordercolor && void 0 !== i.frame_hover.transform.borderColor && (e.bordercolor = "transparent"), void 0 === e.borderwidth && void 0 !== i.frame_hover.transform.borderWidth && (e.borderwidth = o.revToResp(i.frame_hover.transform.borderWidth, 4, 0)), void 0 === e.borderstyle && void 0 !== i.frame_hover.transform.borderStyle && (e.borderstyle = o.revToResp(i.frame_hover.transform.borderStyle, 4, 0)))) : delete i.frame_hover), void 0 !== e.tloop) {
                e.layerLoop = {
                    from: "frame_1",
                    to: "frame_999",
                    repeat: -1,
                    keep: !0,
                    children: !0
                };
                var l = e.tloop.split(";");
                for (var a in l)
                    if (l.hasOwnProperty(a)) {
                        var c = l[a].split(":");
                        switch (c[0]) {
                            case "f":
                                e.layerLoop.from = c[1];
                                break;
                            case "t":
                                e.layerLoop.to = c[1];
                                break;
                            case "k":
                                e.layerLoop.keep = c[1];
                                break;
                            case "r":
                                e.layerLoop.repeat = parseInt(c[1], 0);
                                break;
                            case "c":
                                e.layerLoop.children = c[1]
                        }
                    }
                e.layerLoop.count = 0
            }
            for (var a in (e.loop_0 || e.loop_999) && (i.loop = k(e.loop_999, t, !0, "frame_999", "loop"), i.loop.frame_0 = k(e.loop_0 || "", t, !1, void 0, "loop").transform), i.frame_0.transform.opacity = void 0 === i.frame_0.transform.opacity ? 0 : i.frame_0.transform.opacity, i.frame_1.transform.opacity = void 0 === i.frame_1.transform.opacity ? 1 : i.frame_1.transform.opacity, i.frame_999.transform.opacity = void 0 === i.frame_999.transform.opacity ? "inherit" : i.frame_999.transform.opacity, e.clipPath && e.clipPath.use && (i.frame_0.transform.clip = void 0 === i.frame_0.transform.clip ? 100 : parseInt(i.frame_0.transform.clip), i.frame_1.transform.clip = void 0 === i.frame_1.transform.clip ? 100 : parseInt(i.frame_1.transform.clip)), e.resetfilter = !1, e.useFilter = {
                    blur: !1,
                    grayscale: !1,
                    brightness: !1,
                    b_blur: !1,
                    b_grayscale: !1,
                    b_brightness: !1,
                    b_invert: !1,
                    b_sepia: !1
                }, i) void 0 !== i[a].filter && (e.resetfilter = !0, e.useFilter = O(e.useFilter, i[a].filter));
            if (!0 !== e.resetFilter && void 0 !== i.frame_hover && (e.useFilter = O(e.useFilter, i.frame_hover)), e.resetfilter)
                for (var a in i.frame_0.filter = o.clone(i.frame_0.filter), i.frame_0.filter = R(e.useFilter, o.clone(i.frame_0.filter)), i) void 0 !== i[a].filter && "frame_1" !== a && "frame_0" !== a && (i[a].filter = o.clone(i[a].filter), i[a].filter = R(e.useFilter, o.clone(i[a].filter)));
            return void 0 !== i.frame_0.filter && (i.frame_1.filter = o.clone(i.frame_1.filter), void 0 !== i.frame_0.filter.blur && 0 !== i.frame_1.filter.blur && (i.frame_1.filter.blur = void 0 === i.frame_1.filter.blur ? 0 : i.frame_1.filter.blur), void 0 !== i.frame_0.filter.brightness && 100 !== i.frame_1.filter.brightness && (i.frame_1.filter.brightness = void 0 === i.frame_1.filter.brightness ? 100 : i.frame_1.filter.brightness), void 0 !== i.frame_0.filter.grayscale && 0 !== i.frame_1.filter.grayscale && (i.frame_1.filter.grayscale = void 0 === i.frame_1.filter.grayscale ? 0 : i.frame_1.filter.grayscale), void 0 !== i.frame_0.filter.b_blur && 0 !== i.frame_1.filter.b_blur && (i.frame_1.filter.b_blur = void 0 === i.frame_1.filter.b_blur ? 0 : i.frame_1.filter.b_blur), void 0 !== i.frame_0.filter.b_brightness && 100 !== i.frame_1.filter.b_brightness && (i.frame_1.filter.b_brightness = void 0 === i.frame_1.filter.b_brightness ? 100 : i.frame_1.filter.b_brightness), void 0 !== i.frame_0.filter.b_grayscale && 0 !== i.frame_1.filter.b_grayscale && (i.frame_1.filter.b_grayscale = void 0 === i.frame_1.filter.b_grayscale ? 0 : i.frame_1.filter.b_grayscale), void 0 !== i.frame_0.filter.b_invert && 0 !== i.frame_1.filter.b_invert && (i.frame_1.filter.b_invert = void 0 === i.frame_1.filter.b_invert ? 0 : i.frame_1.filter.b_invert), void 0 !== i.frame_0.filter.b_sepia && 0 !== i.frame_1.filter.b_sepia && (i.frame_1.filter.b_sepia = void 0 === i.frame_1.filter.b_sepia ? 0 : i.frame_1.filter.b_sepia)), T(i, t, e)
        },
        R = function(e, t) {
            return e.blur ? t.blur = void 0 === t.blur ? 0 : t.blur : delete t.blur, e.brightness ? t.brightness = void 0 === t.brightness ? 100 : t.brightness : delete t.brightness, e.grayscale ? t.grayscale = void 0 === t.grayscale ? 0 : t.grayscale : delete t.grayscale, e.b_blur ? t.b_blur = void 0 === t.b_blur ? 0 : t.b_blur : delete t.b_blur, e.b_brightness ? t.b_brightness = void 0 === t.b_brightness ? 100 : t.b_brightness : delete t.b_brightness, e.b_grayscale ? t.b_grayscale = void 0 === t.b_grayscale ? 0 : t.b_grayscale : delete t.b_grayscale, e.b_invert ? t.b_invert = void 0 === t.b_invert ? 0 : t.b_invert : delete t.b_invert, e.b_sepia ? t.b_sepia = void 0 === t.b_sepia ? 0 : t.b_sepia : delete t.b_sepia, t
        },
        O = function(e, t) {
            return e.blur = !0 === e.blur || void 0 !== t.blur && 0 !== t.blur && "0px" !== t.blur, e.grayscale = !0 === e.grayscale || void 0 !== t.grayscale && 0 !== t.grayscale && "0%" !== t.grayscale, e.brightness = !0 === e.brightness || void 0 !== t.brightness && 100 !== t.brightness && "100%" !== t.brightness, e.b_blur = !0 === e.b_blur || void 0 !== t.b_blur && 0 !== t.b_blur && "0px" !== t.b_blur, e.b_grayscale = !0 === e.b_grayscale || void 0 !== t.b_grayscale && 0 !== t.b_grayscale && "0%" !== t.b_grayscale, e.b_brightness = !0 === e.b_brightness || void 0 !== t.b_brightness && 100 !== t.b_brightness && "100%" !== t.b_brightness, e.b_invert = !0 === e.b_invert || void 0 !== t.b_invert && 0 !== t.b_invert && "0%" !== t.b_invert, e.b_sepia = !0 === e.b_sepia || void 0 !== t.b_sepia && 0 !== t.b_sepia && "0%" !== t.b_sepia, e
        },
        I = function(e) {
            return void 0 !== e && (void 0 !== e.rotationY || void 0 !== e.rotationX || void 0 !== e.z)
        },
        T = function(e, t, i) {
            var a, r = {},
                s = ["transform", "words", "chars", "lines", "mask"],
                n = "global" == o[t].perspectiveType ? o[t].perspective : 0,
                d = !0,
                l = !1;
            for (var c in e) "loop" !== c && "frame_hover" !== c && (r = jQuery.extend(!0, r, e[c]));
            for (var c in e)
                if (e.hasOwnProperty(c) && (void 0 !== e[c].timeline && (e[c].timeline.usePerspective = !1), "loop" !== c && "frame_hover" !== c)) {
                    for (a in r.transform) r.transform.hasOwnProperty(a) && (r.transform[a] = void 0 === e[c].transform[a] ? "frame_0" === c ? window.rdF0.transform[a] : "frame_1" === c ? window.rdF1.transform[a] : r.transform[a] : e[c].transform[a], e[c].transform[a] = void 0 === e[c].transform[a] ? r.transform[a] : e[c].transform[a]);
                    for (var p = 1; p <= 4; p++)
                        for (a in r[s[p]]) r[s[p]].hasOwnProperty(a) && (e[c][s[p]] = void 0 === e[c][s[p]] ? {} : e[c][s[p]], r[s[p]][a] = void 0 === e[c][s[p]][a] ? "frame_0" === c ? window.rdF0[s[p]][a] : "frame_1" === c ? window.rdF1[s[p]][a] : r[s[p]][a] : e[c][s[p]][a], e[c][s[p]][a] = void 0 === e[c][s[p]][a] ? r[s[p]][a] : e[c][s[p]][a]);
                    void 0 !== e[c].timeline && !1 === e[c].timeline.usePerspective && void 0 !== e[c].transform && (void 0 !== e[c].transform.rotationY || void 0 !== e[c].transform.rotationX || void 0 !== e[c].transform.z || I(e[c].chars) || I(e[c].words) || I(e[c].lines)) && (n = "local" == o[t].perspectiveType ? void 0 === e[c].transform.transformPerspective ? 600 : e[c].transform.transformPerspective : n, e[c].timeline.usePerspective = !0, (I(e[c].chars) || I(e[c].words) || I(e[c].lines)) && !o.isFirefox(t) && (l = !0), d = !1)
                }
            if (l && requestAnimationFrame(function() {
                    tpGS.gsap.set(i.c, {
                        transformStyle: "preserve-3d"
                    })
                }), void 0 !== e.frame_0.timeline && e.frame_0.timeline.usePerspective && (e.frame_0.transform.transformPerspective = "local" === o[t].perspectiveType ? void 0 === e.frame_0.transform.transformPerspective ? n : e.frame_0.transform.transformPerspective : "isometric" === o[t].perspectiveType ? 0 : o[t].perspective), d)
                for (var c in e) {
                    if (!e.hasOwnProperty(c) || void 0 === e[c].transform) continue;
                    delete e[c].transform.transformPerspective
                }
            return e
        },
        C = function(e, t, i) {
            if (0 === e.length) return {};
            for (var a = e[0].getElementsByClassName(t), r = {}, o = 0; o < a.length; o++) void 0 !== i && -1 !== a[o].className.indexOf(i) || (r[a[o].id] = a[o]);
            if (void 0 !== e[1])
                for (a = e[1].getElementsByClassName(t), o = 0; o < a.length; o++) void 0 !== i && -1 !== a[o].className.indexOf(i) || (r[a[o].id] = a[o]);
            return r
        },
        A = function(e) {
            return "thin" === (e = o.isNumeric(e) ? e : e.toLowerCase()) ? "00" : "extra light" === e ? 200 : "light" === e ? 300 : "normal" === e ? 400 : "medium" === e ? 500 : "semi bold" === e ? 600 : "bold" === e ? 700 : "extra bold" === e ? 800 : "ultra bold" === e ? 900 : "black" === e ? 900 : e
        },
        M = function(e, t, s) {
            var n;
            if ("BR" == e[0].nodeName || "br" == e[0].tagName || "object" != typeof e[0].className && e[0].className.indexOf("rs_splitted_") >= 0) return !1;
            o.sA(e[0], "stylerecorder", !0), void 0 === e[0].id && (e[0].id = "rs-layer-sub-" + Math.round(1e6 * Math.random())), o[s].computedStyle[e[0].id] = window.getComputedStyle(e[0], null);
            var d = void 0 !== e[0].id && void 0 !== o[s]._L[e[0].id] ? o[s]._L[e[0].id] : e.data(),
                l = "rekursive" === t ? jQuery(o.closestClass(e[0], "rs-layer")) : void 0;
            void 0 !== l && (o[s].computedStyle[l[0].id] = void 0 === o[s].computedStyle[l[0].id] ? window.getComputedStyle(l[0], null) : o[s].computedStyle[l[0].id]);
            var c = void 0 !== l && o[s].computedStyle[e[0].id].fontSize == o[s].computedStyle[l[0].id].fontSize && A(o[s].computedStyle[e[0].id].fontWeight) == A(o[s].computedStyle[l[0].id].fontWeight) && o[s].computedStyle[e[0].id].lineHeight == o[s].computedStyle[l[0].id].lineHeight,
                p = c ? void 0 !== l[0].id && void 0 !== o[s]._L[l[0].id] ? o[s]._L[l[0].id] : l.data() : void 0,
                g = 0;
            for (d.basealign = void 0 === d.basealign ? "grid" : d.basealign, d._isnotext || (d.fontSize = o.revToResp(c ? void 0 === p.fontsize ? parseInt(o[s].computedStyle[l[0].id].fontSize, 0) || 20 : p.fontsize : void 0 === d.fontsize ? "rekursive" !== t ? 20 : "inherit" : d.fontsize, o[s].rle), d.fontWeight = o.revToResp(c ? void 0 === p.fontweight ? o[s].computedStyle[l[0].id].fontWeight || "inherit" : p.fontweight : void 0 === d.fontweight ? o[s].computedStyle[e[0].id].fontWeight || "inherit" : d.fontweight, o[s].rle), d.whiteSpace = o.revToResp(c ? void 0 === p.whitespace ? "nowrap" : p.whitespace : void 0 === d.whitespace ? "nowrap" : d.whitespace, o[s].rle), d.textAlign = o.revToResp(c ? void 0 === p.textalign ? "left" : p.textalign : void 0 === d.textalign ? "left" : d.textalign, o[s].rle), d.letterSpacing = o.revToResp(c ? void 0 === p.letterspacing ? parseInt(o[s].computedStyle[l[0].id].letterSpacing, 0) || "inherit" : p.letterspacing : void 0 === d.letterspacing ? parseInt("normal" === o[s].computedStyle[e[0].id].letterSpacing ? 0 : o[s].computedStyle[e[0].id].letterSpacing, 0) || "inherit" : d.letterspacing, o[s].rle), d.textDecoration = c ? void 0 === p.textDecoration ? "none" : p.textDecoration : void 0 === d.textDecoration ? "none" : d.textDecoration, g = 25, g = void 0 !== l && "I" === e[0].tagName ? "inherit" : g, void 0 !== d.tshadow && (d.tshadow.b = o.revToResp(d.tshadow.b, o[s].rle), d.tshadow.h = o.revToResp(d.tshadow.h, o[s].rle), d.tshadow.v = o.revToResp(d.tshadow.v, o[s].rle))), void 0 !== d.bshadow && (d.bshadow.b = o.revToResp(d.bshadow.b, o[s].rle), d.bshadow.h = o.revToResp(d.bshadow.h, o[s].rle), d.bshadow.v = o.revToResp(d.bshadow.v, o[s].rle), d.bshadow.s = o.revToResp(d.bshadow.s, o[s].rle)), void 0 !== d.tstroke && (d.tstroke.w = o.revToResp(d.tstroke.w, o[s].rle)), d.display = c ? void 0 === p.display ? o[s].computedStyle[l[0].id].display : p.display : void 0 === d.display ? o[s].computedStyle[e[0].id].display : d.display, d.float = o.revToResp(c ? void 0 === p.float ? o[s].computedStyle[l[0].id].float || "none" : p.float : void 0 === d.float ? "none" : d.float, o[s].rle), d.clear = o.revToResp(c ? void 0 === p.clear ? o[s].computedStyle[l[0].id].clear || "none" : p.clear : void 0 === d.clear ? "none" : d.clear, o[s].rle), d.lineHeight = o.revToResp(e.is("img") || -1 != jQuery.inArray(d.layertype, ["video", "image", "audio"]) ? g : c ? void 0 === p.lineheight ? parseInt(o[s].computedStyle[l[0].id].lineHeight, 0) || g : p.lineheight : void 0 === d.lineheight ? g : d.lineheight, o[s].rle), d.zIndex = c ? void 0 === p.zindex ? parseInt(o[s].computedStyle[l[0].id].zIndex, 0) || "inherit" : p.zindex : void 0 === d.zindex ? parseInt(o[s].computedStyle[e[0].id].zIndex, 0) || "inherit" : d.zindex, n = 0; n < 4; n++) d["padding" + i[n]] = o.revToResp(void 0 === d["padding" + r[n]] ? parseInt(o[s].computedStyle[e[0].id]["padding" + i[n]], 0) || 0 : d["padding" + r[n]], o[s].rle), d["margin" + i[n]] = o.revToResp(void 0 === d["margin" + r[n]] ? parseInt(o[s].computedStyle[e[0].id]["margin" + i[n]], 0) || 0 : d["margin" + r[n]], o[s].rle), d["border" + i[n] + "Width"] = void 0 === d.borderwidth ? parseInt(o[s].computedStyle[e[0].id]["border" + i[n] + "Width"], 0) || 0 : d.borderwidth[n], d["border" + i[n] + "Color"] = void 0 === d.bordercolor ? o[s].computedStyle[e[0].id]["border-" + r[n] + "-color"] : d.bordercolor, d["border" + a[n] + "Radius"] = o.revToResp(void 0 === d.borderradius ? o[s].computedStyle[e[0].id]["border" + a[n] + "Radius"] || 0 : d.borderradius[n], o[s].rle);
            for (d.borderStyle = o.revToResp(void 0 === d.borderstyle ? o[s].computedStyle[e[0].id].borderStyle || 0 : d.borderstyle, o[s].rle), "rekursive" !== t ? (d.color = o.revToResp(void 0 === d.color ? "#ffffff" : d.color, o[s].rle, void 0, "||"), d.minWidth = o.revToResp(void 0 === d.minwidth ? parseInt(o[s].computedStyle[e[0].id].minWidth, 0) || 0 : d.minwidth, o[s].rle), d.minHeight = o.revToResp(void 0 === d.minheight ? parseInt(o[s].computedStyle[e[0].id].minHeight, 0) || 0 : d.minheight, o[s].rle), d.width = o.revToResp(void 0 === d.width ? "auto" : o.smartConvertDivs(d.width), o[s].rle), d.height = o.revToResp(void 0 === d.height ? "auto" : o.smartConvertDivs(d.height), o[s].rle), d.maxWidth = o.revToResp(void 0 === d.maxwidth ? parseInt(o[s].computedStyle[e[0].id].maxWidth, 0) || "none" : d.maxwidth, o[s].rle), d.maxHeight = o.revToResp(-1 !== jQuery.inArray(d.type, ["column", "row"]) ? "none" : void 0 !== d.maxheight ? parseInt(o[s].computedStyle[e[0].id].maxHeight, 0) || "none" : d.maxheight, o[s].rle)) : "html" === d.layertype && (d.width = o.revToResp(e[0].width, o[s].rle), d.height = o.revToResp(e[0].height, o[s].rle)), d.styleProps = {
                    background: e[0].style.background,
                    "background-color": e[0].style["background-color"],
                    color: e[0].style.color,
                    cursor: e[0].style.cursor,
                    "font-style": e[0].style["font-style"]
                }, null == d.bshadow && (d.styleProps.boxShadow = e[0].style.boxShadow), "" !== d.styleProps.background && void 0 !== d.styleProps.background && d.styleProps.background !== d.styleProps["background-color"] || delete d.styleProps.background, "" == d.styleProps.color && (d.styleProps.color = o[s].computedStyle[e[0].id].color), n = 0; n < 4; n++) P(d["padding" + i[n]], 0) && delete d["padding" + i[n]], P(d["margin" + i[n]], 0) && delete d["margin" + i[n]], P(d["border" + a[n] + "Radius"], "0px") ? delete d["border" + a[n] + "Radius"] : P(d["border" + a[n] + "Radius"], "0") && delete d["border" + a[n] + "Radius"];
            if (P(d.borderStyle, "none"))
                for (delete d.borderStyle, n = 0; n < 4; n++) delete d["border" + i[n] + "Width"], delete d["border" + i[n] + "Color"]
        },
        P = function(e, t) {
            return t === e[0] && t === e[1] && t === e[2] && t === e[3]
        },
        B = function(e, t, i, a, r) {
            var s = o.isNumeric(e) || void 0 === e ? "" : e.indexOf("px") >= 0 ? "px" : e.indexOf("%") >= 0 ? "%" : "";
            return e = o.isNumeric(parseInt(e)) ? parseInt(e) : e, e = null == (e = "full" === (e = o.isNumeric(e) ? e * t + s : e) ? a : "auto" === e || "none" === e ? i : e) ? r : e
        },
        D = function(e) {
            return null != e && 0 !== parseInt(e, 0)
        },
        z = function(e) {
            var t, s, n, d, l, c, p, g, u, h, m = e.a,
                v = e.b,
                f = e.c,
                y = e.d,
                b = e.e,
                w = {},
                _ = {},
                x = o[v]._L[m[0].id],
                S = m[0].className;
            if (x = void 0 === x ? {} : x, "object" == typeof S && (S = ""), void 0 !== m && void 0 !== m[0] && (S.indexOf("rs_splitted") >= 0 || "BR" == m[0].nodeName || "br" == m[0].tagName || m[0].tagName.indexOf("FCR") > 0 || m[0].tagName.indexOf("BCR") > 0)) return !1;
            b = "individual" === b ? x.slideIndex : b;
            e = function(e, t, r) {
                if (void 0 !== e) {
                    if ("BR" == e[0].nodeName || "br" == e[0].tagName) return !1;
                    var s, n = o[t].level,
                        d = void 0 !== e[0] && void 0 !== e[0].id && void 0 !== o[t]._L[e[0].id] ? o[t]._L[e[0].id] : e.data();
                    void 0 === (d = void 0 === d.basealign ? r.data() : d)._isnotext && (d._isnotext = void 0 !== r && void 0 !== r[0] && r[0].length > 0 ? o.gA(r[0], "_isnotext") : d._isnotext);
                    var l = {
                        basealign: void 0 === d.basealign ? "grid" : d.basealign,
                        lineHeight: void 0 === d.basealign ? "inherit" : parseInt(d.lineHeight[n]),
                        color: void 0 === d.color ? void 0 : d.color[n],
                        width: void 0 === d.width ? void 0 : "a" === d.width[n] ? "auto" : d.width[n],
                        height: void 0 === d.height ? void 0 : "a" === d.height[n] ? "auto" : d.height[n],
                        minWidth: void 0 === d.minWidth ? void 0 : "n" === d.minWidth[n] ? "none" : d.minWidth[n],
                        minHeight: void 0 === d.minHeight ? void 0 : "n" == d.minHeight[n] ? "none" : d.minHeight[n],
                        maxWidth: void 0 === d.maxWidth ? void 0 : "n" == d.maxWidth[n] ? "none" : d.maxWidth[n],
                        maxHeight: void 0 === d.maxHeight ? void 0 : "n" == d.maxHeight[n] ? "none" : d.maxHeight[n],
                        float: d.float[n],
                        clear: d.clear[n]
                    };
                    for (d.borderStyle && (l.borderStyle = d.borderStyle[n]), s = 0; s < 4; s++) d["padding" + i[s]] && (l["padding" + i[s]] = d["padding" + i[s]][n]), d["margin" + i[s]] && (l["margin" + i[s]] = parseInt(d["margin" + i[s]][n])), d["border" + a[s] + "Radius"] && (l["border" + a[s] + "Radius"] = d["border" + a[s] + "Radius"][n]), d["border" + i[s] + "Color"] && (l["border" + i[s] + "Color"] = d["border" + i[s] + "Color"]), d["border" + i[s] + "Width"] && (l["border" + i[s] + "Width"] = parseInt(d["border" + i[s] + "Width"]));
                    return d._isnotext || (l.textDecoration = d.textDecoration, l.fontSize = parseInt(d.fontSize[n]), l.fontWeight = parseInt(d.fontWeight[n]), l.letterSpacing = parseInt(d.letterSpacing[n]) || 0, l.textAlign = d.textAlign[n], l.whiteSpace = d.whiteSpace[n], l.whiteSpace = "normal" === l.whiteSpace && "auto" === l.width && !0 !== d._incolumn ? "nowrap" : l.whiteSpace, l.display = d.display, void 0 !== d.tshadow && (l.textShadow = parseInt(d.tshadow.h[n], 0) + "px " + parseInt(d.tshadow.v[n], 0) + "px " + d.tshadow.b[n] + " " + d.tshadow.c), void 0 !== d.tstroke && (l.textStroke = parseInt(d.tstroke.w[n], 0) + "px " + d.tstroke.c)), void 0 !== d.bshadow && (l.boxShadow = parseInt(d.bshadow.h[n], 0) + "px " + parseInt(d.bshadow.v[n], 0) + "px " + parseInt(d.bshadow.b[n], 0) + "px " + parseInt(d.bshadow.s[n], 0) + "px " + d.bshadow.c), l
                }
            }(m, v, e.RSL);
            var k, L = "off" === y ? 1 : o[v].CM.w;
            if (void 0 === x._isnotext && (x._isnotext = void 0 !== e.RSL && void 0 !== e.RSL[0] && e.RSL[0].length > 0 ? o.gA(e.RSL[0], "_isnotext") : x._isnotext), x.OBJUPD = null == x.OBJUPD ? {} : x.OBJUPD, x.caches = null == x.caches ? {} : x.caches, "column" === x.type) {
                for (s = {}, k = {}, t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (s["padding" + i[t]] = Math.round(e["margin" + i[t]] * L) + "px", k["margin" + i[t]] = e["margin" + i[t]], delete e["margin" + i[t]]);
                jQuery.isEmptyObject(s) || tpGS.gsap.set(x._column, s)
            }
            var R = o.clone(x.OBJUPD.POBJ),
                O = o.clone(x.OBJUPD.LPOBJ);
            if (-1 === S.indexOf("rs_splitted_")) {
                for (s = {
                        overwrite: "auto"
                    }, t = 0; t < 4; t++) void 0 !== e["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = e["border" + a[t] + "Radius"]), void 0 !== e["padding" + i[t]] && (s["padding" + i[t]] = Math.round(e["padding" + i[t]] * L) + "px"), void 0 === e["margin" + i[t]] || x._incolumn || (s["margin" + i[t]] = "row" === x.type ? 0 : Math.round(e["margin" + i[t]] * L) + "px");
                if (void 0 !== x.spike && (s["clip-path"] = s["-webkit-clip-path"] = x.spike), e.boxShadow && (s.boxShadow = e.boxShadow), "column" !== x.type && (void 0 !== e.borderStyle && "none" !== e.borderStyle && (0 !== e.borderTopWidth || e.borderBottomWidth > 0 || e.borderLeftWidth > 0 || e.borderRightWidth > 0) ? (s.borderTopWidth = Math.round(e.borderTopWidth * L) + "px", s.borderBottomWidth = Math.round(e.borderBottomWidth * L) + "px", s.borderLeftWidth = Math.round(e.borderLeftWidth * L) + "px", s.borderRightWidth = Math.round(e.borderRightWidth * L) + "px", s.borderStyle = e.borderStyle, s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor) : ("none" === e.borderStyle && (s.borderStyle = "none"), s.borderTopColor = e.borderTopColor, s.borderBottomColor = e.borderBottomColor, s.borderLeftColor = e.borderLeftColor, s.borderRightColor = e.borderRightColor)), "shape" !== x.type && "image" !== x.type || !(D(e.borderTopLeftRadius) || D(e.borderTopRightRadius) || D(e.borderBottomLeftRadius) || D(e.borderBottomRightRadius)) || (s.overflow = "hidden"), x._isnotext || ("column" !== x.type && (s.fontSize = Math.round(e.fontSize * L) + "px", s.fontWeight = e.fontWeight, s.letterSpacing = e.letterSpacing * L + "px", e.textShadow && (s.textShadow = e.textShadow), e.textStroke && (s["-webkit-text-stroke"] = e.textStroke)), s.lineHeight = Math.round(e.lineHeight * L) + "px", s.textAlign = e.textAlign), "column" === x.type && (void 0 === x.cbg_set && (x.cbg_set = x.styleProps["background-color"], x.cbg_set = "" == x.cbg_set || void 0 === x.cbg_set || 0 == x.cbg_set.length ? "transparent" : x.cbg_set, x.cbg_img = m.css("backgroundImage"), "" !== x.cbg_img && void 0 !== x.cbg_img && "none" !== x.cbg_img && (x.cbg_img_r = m.css("backgroundRepeat"), x.cbg_img_p = m.css("backgroundPosition"), x.cbg_img_s = m.css("backgroundSize")), x.cbg_o = x.bgopacity ? 1 : x.bgopacity, w.backgroundColor = "transparent", w.backgroundImage = ""), s.backgroundColor = "transparent", s.backgroundImage = "none"), x._isstatic && x.elementHovered && (p = m.data("frames")) && p.frame_hover && p.frame_hover.transform)
                    for (g in s) s.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete s[g];
                if ("IFRAME" == m[0].nodeName && "html" === o.gA(m[0], "layertype") && (u = "slide" == e.basealign ? o[v].module.width : o.iWA(v, b), h = "slide" == e.basealign ? o[v].module.height : o.iHE(v), s.width = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : B(e.width, L, "auto", u, "auto"), s.height = !o.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.height : h * parseInt(e.height, 0) / 100 : B(e.height, L, "auto", u, "auto")), w = jQuery.extend(!0, w, s), "rekursive" != f) {
                    u = "slide" == e.basealign ? o[v].module.width : o.iWA(v, b), h = "slide" == e.basealign ? o[v].module.height : o.iHE(v);
                    var I = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.width : u * parseInt(e.width, 0) / 100 : B(e.width, L, "auto", u, "auto"),
                        T = !o.isNumeric(e.height) && e.height.indexOf("%") >= 0 ? !x._isstatic || x._incolumn || x._ingroup ? e.height : h * parseInt(e.height, 0) / 100 : B(e.height, L, "auto", u, "auto"),
                        C = {
                            maxWidth: B(e.maxWidth, L, "none", u, "none"),
                            maxHeight: B(e.maxHeight, L, "none", h, "none"),
                            minWidth: B(e.minWidth, L, "0px", u, 0),
                            minHeight: B(e.minHeight, L, "0px", h, 0),
                            height: T,
                            width: I,
                            overwrite: "auto"
                        };
                    1 == x.heightSetByVideo && (C.height = x.vidOBJ.height);
                    var A = !1;
                    if (x._incolumn) {
                        for (R = jQuery.extend(!0, R, {
                                minWidth: I,
                                maxWidth: I,
                                float: e.float,
                                clear: e.clear
                            }), t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (R["margin" + i[t]] = e["margin" + i[t]] * L + "px");
                        O.width = "100%", void 0 !== e.display && "inline-block" !== e.display || (_ = {
                            width: "100%"
                        }), C.width = !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 ? "100%" : I, "image" === x.type && tpGS.gsap.set(x.img, {
                            width: "100%"
                        })
                    } else !o.isNumeric(e.width) && e.width.indexOf("%") >= 0 && (R.minWidth = "slide" === x.basealign || !0 === x._ingroup ? I : o.iWA(v, b) * o[v].CM.w * parseInt(I) / 100 + "px", O.width = "100%", _.width = "100%");
                    if (!o.isNumeric(e.height) && e.height.indexOf("%") >= 0 && (R.minHeight = "slide" === x.basealign || !0 === x._ingroup ? T : o.iHE(v) * (o[v].currentRowsHeight > o[v].gridheight[o[v].level] ? 1 : o[v].CM.w) * parseInt(T) / 100 + "px", O.height = "100%", _.height = "100%", A = !0), x._isnotext || (C.whiteSpace = e.whiteSpace, C.textAlign = e.textAlign, C.textDecoration = e.textDecoration), "npc" != e.color && void 0 !== e.color && (C.color = e.color), x._ingroup && (x._groupw = C.minWidth, x._grouph = C.minHeight), "row" === x.type && (o.isNumeric(C.minHeight) || C.minHeight.indexOf("px") >= 0) && "0px" !== C.minHeight && 0 !== C.minHeight && "0" !== C.minHeight && "none" !== C.minHeight ? C.height = C.minHeight : "row" === x.type && (C.height = "auto"), x._isstatic && x.elementHovered && (p = m.data("frames")) && p.frame_hover && p.frame_hover.transform)
                        for (g in C) C.hasOwnProperty(g) && p.frame_hover.transform.hasOwnProperty(g) && delete C[g];
                    "group" !== x.type && "row" !== x.type && "column" !== x.type && (!o.isNumeric(C.width) && C.width.indexOf("%") >= 0 && (C.width = "100%"), !o.isNumeric(C.height) && C.height.indexOf("%") >= 0 && (C.height = "100%")), x._isgroup && (!o.isNumeric(C.width) && C.width.indexOf("%") >= 0 && (C.width = "100%"), R.height = A ? "100%" : C.height), w = jQuery.extend(!0, w, C), null != x.svg_src && void 0 !== x.svgI && ("string" == typeof x.svgI.fill && (x.svgI.fill = [x.svgI.fill]), x.svgTemp = o.clone(x.svgI), void 0 !== x.svgTemp.fill && (x.svgTemp.fill = x.svgTemp.fill[o[v].level], tpGS.gsap.set(x.svgPath, {
                        fill: x.svgI.fill[o[v].level]
                    })), tpGS.gsap.set(x.svg, x.svgTemp))
                }
                if ("row" === x.type)
                    for (t = 0; t < 4; t++) void 0 !== e["margin" + i[t]] && (R["padding" + i[t]] = e["margin" + i[t]] * L + "px");
                if ("column" === x.type && x.cbg && x.cbg.length > 0) {
                    for (void 0 !== x.cbg_img_s && (x.cbg[0].style.backgroundSize = x.cbg_img_s), s = {}, "" !== x.styleProps.cursor && (s.cursor = x.styleProps.cursor), "" !== x.cbg_set && "transparent" !== x.cbg_set && (s.backgroundColor = x.cbg_set), "" !== x.cbg_img && "none" !== x.cbg_img && (s.backgroundImage = x.cbg_img, "" !== x.cbg_img_r && (s.backgroundRepeat = x.cbg_img_r), "" !== x.cbg_img_p && (s.backgroundPosition = x.cbg_img_p)), "" !== x.cbg_o && void 0 !== x.cbg_o && (s.opacity = x.cbg_o), t = 0; t < 4; t++) void 0 !== e.borderStyle && "none" !== e.borderStyle && (void 0 !== e["border" + i[t] + "Width"] && (s["border" + i[t] + "Width"] = Math.round(parseInt(e["border" + i[t] + "Width"]) * L) + "px"), void 0 !== e["border" + i[t] + "Color"] && (s["border" + i[t] + "Color"] = e["border" + i[t] + "Color"])), e["border" + a[t] + "Radius"] && (s["border" + a[t] + "Radius"] = e["border" + a[t] + "Radius"]);
                    for (void 0 !== e.borderStyle && "none" !== e.borderStyle && (s.borderStyle = e.borderStyle), (n = JSON.stringify(s)) !== o[v].emptyObject && n !== x.caches.cbgS && tpGS.gsap.set(x.cbg, s), x.caches.cbgS = n, s = {}, t = 0; t < 4; t++) k["margin" + i[t]] && (s[r[t]] = k["margin" + i[t]] * L + "px");
                    (n = JSON.stringify(s)) !== o[v].emptyObject && n !== x.caches.cbgmaskS && (tpGS.gsap.set(x.cbgmask, s), x.caches.cbgmaskS = n)
                }
                "auto" === R.maxWidth && (R.maxWidth = "inherit"), "auto" === R.maxHeight && (R.maxHeight = "inherit"), "auto" === _.maxWidth && (_.maxWidth = "inherit"), "auto" === _.maxHeight && (_.maxHeight = "inherit"), "auto" === O.maxWidth && (O.maxWidth = "inherit"), "auto" === O.maxHeight && (O.maxHeight = "inherit"), void 0 !== x.vidOBJ && (w.width = x.vidOBJ.width, w.height = x.vidOBJ.height), void 0 !== x.OBJUPD.lppmOBJ && (void 0 !== x.OBJUPD.lppmOBJ.minWidth && (O.minWidth = x.OBJUPD.lppmOBJ.minWidth, _.minWidth = x.OBJUPD.lppmOBJ.minWidth, R.minWidth = x.OBJUPD.lppmOBJ.minWidth), void 0 !== x.OBJUPD.lppmOBJ.minHeight && (O.minHeight = x.OBJUPD.lppmOBJ.minHeight, _.minHeight = x.OBJUPD.lppmOBJ.minHeight, R.minHeight = x.OBJUPD.lppmOBJ.minHeight)), n = JSON.stringify(w), d = JSON.stringify(O), l = JSON.stringify(_), c = JSON.stringify(R), void 0 === x.imgOBJ || void 0 !== x.caches.imgOBJ && x.caches.imgOBJ.width === x.imgOBJ.width && x.caches.imgOBJ.height === x.imgOBJ.height && x.caches.imgOBJ.left === x.imgOBJ.left && x.caches.imgOBJ.right === x.imgOBJ.right && x.caches.imgOBJ.top === x.imgOBJ.top && x.caches.imgOBJ.bottom === x.imgOBJ.bottom || (x.caches.imgOBJ = o.clone(x.imgOBJ), x.imgOBJ.position = "relative", tpGS.gsap.set(x.img, x.imgOBJ)), void 0 === x.mediaOBJ || void 0 !== x.caches.mediaOBJ && x.caches.mediaOBJ.width === x.mediaOBJ.width && x.caches.mediaOBJ.height === x.mediaOBJ.height && x.caches.mediaOBJ.display === x.mediaOBJ.display || (x.caches.mediaOBJ = o.clone(x.mediaOBJ), x.media.css(x.mediaOBJ)), n != o[v].emptyObject && n != x.caches.LOBJ && (tpGS.gsap.set(m, w), x.caches.LOBJ = n), d != o[v].emptyObject && d != x.caches.LPOBJ && (tpGS.gsap.set(x.lp, O), x.caches.LPOBJ = d), l != o[v].emptyObject && l != x.caches.MOBJ && (tpGS.gsap.set(x.m, _), x.caches.MOBJ = l), c != o[v].emptyObject && c != x.caches.POBJ && (tpGS.gsap.set(x.p, R), x.caches.POBJ = c, x.caches.POBJ_LEFT = R.left, x.caches.POBJ_TOP = R.top)
            }
        },
        G = function(e) {
            var t = {
                l: "none",
                lw: 10,
                r: "none",
                rw: 10
            };
            for (var i in e = e.split(";"))
                if (e.hasOwnProperty(i)) {
                    var a = e[i].split(":");
                    switch (a[0]) {
                        case "l":
                            t.l = a[1];
                            break;
                        case "r":
                            t.r = a[1];
                            break;
                        case "lw":
                            t.lw = a[1];
                            break;
                        case "rw":
                            t.rw = a[1]
                    }
                }
            return "polygon(" + N(t.l, 0, parseFloat(t.lw)) + "," + N(t.r, 100, 100 - parseFloat(t.rw), !0) + ")"
        },
        N = function(e, t, i, a) {
            var r;
            switch (e) {
                case "none":
                    r = t + "% 100%," + t + "% 0%";
                    break;
                case "top":
                    r = i + "% 100%," + t + "% 0%";
                    break;
                case "middle":
                    r = i + "% 100%," + t + "% 50%," + i + "% 0%";
                    break;
                case "bottom":
                    r = t + "% 100%," + i + "% 0%";
                    break;
                case "two":
                    r = i + "% 100%," + t + "% 75%," + i + "% 50%," + t + "% 25%," + i + "% 0%";
                    break;
                case "three":
                    r = t + "% 100%," + i + "% 75%," + t + "% 50%," + i + "% 25%," + t + "% 0%";
                    break;
                case "four":
                    r = t + "% 100%," + i + "% 87.5%," + t + "% 75%," + i + "% 62.5%," + t + "% 50%," + i + "% 37.5%," + t + "% 25%," + i + "% 12.5%," + t + "% 0%";
                    break;
                case "five":
                    r = t + "% 100%," + i + "% 90%," + t + "% 80%," + i + "% 70%," + t + "% 60%," + i + "% 50%," + t + "% 40%," + i + "% 30%," + t + "% 20%," + i + "% 10%," + t + "% 0%"
            }
            if (a) {
                var o = r.split(",");
                for (var i in r = "", o) o.hasOwnProperty(i) && (r += o[o.length - 1 - i] + (i < o.length - 1 ? "," : ""))
            }
            return r
        }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution,
        i = t.is_mobile();

    function a(e, i) {
        var a = new Object({
            single: ".tp-" + i,
            c: t[e].cpar.find(".tp-" + i + "s")
        });
        return a.mask = a.c.find(".tp-" + i + "-mask"), a.wrap = a.c.find(".tp-" + i + "s-inner-wrapper"), a
    }
    jQuery.extend(!0, t, {
        hideUnHideNav: function(e) {
            window.requestAnimationFrame(function() {
                var i = !1;
                p(t[e].navigation.arrows) && (i = S(t[e].navigation.arrows, e, i)), p(t[e].navigation.bullets) && (i = S(t[e].navigation.bullets, e, i)), p(t[e].navigation.thumbnails) && (i = S(t[e].navigation.thumbnails, e, i)), p(t[e].navigation.tabs) && (i = S(t[e].navigation.tabs, e, i)), i && t.manageNavigation(e)
            })
        },
        getOuterNavDimension: function(e) {
            t[e].navigation.scaler = Math.max(0, Math.min(1, (t.winW - 480) / 500));
            var i = {
                left: 0,
                right: 0,
                horizontal: 0,
                vertical: 0,
                top: 0,
                bottom: 0
            };
            return t[e].navigation.thumbnails && t[e].navigation.thumbnails.enable && (t[e].navigation.thumbnails.isVisible = t[e].navigation.thumbnails.hide_under < t[e].module.width && t[e].navigation.thumbnails.hide_over > t[e].module.width, t[e].navigation.thumbnails.cw = Math.max(Math.round(t[e].navigation.thumbnails.width * t[e].navigation.scaler), t[e].navigation.thumbnails.min_width), t[e].navigation.thumbnails.ch = Math.round(t[e].navigation.thumbnails.cw / t[e].navigation.thumbnails.width * t[e].navigation.thumbnails.height), t[e].navigation.thumbnails.isVisible && "outer-left" === t[e].navigation.thumbnails.position ? i.left = t[e].navigation.thumbnails.cw + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-right" === t[e].navigation.thumbnails.position ? i.right = t[e].navigation.thumbnails.cw + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-top" === t[e].navigation.thumbnails.position ? i.top = t[e].navigation.thumbnails.ch + 2 * t[e].navigation.thumbnails.wrapper_padding : t[e].navigation.thumbnails.isVisible && "outer-bottom" === t[e].navigation.thumbnails.position && (i.bottom = t[e].navigation.thumbnails.ch + 2 * t[e].navigation.thumbnails.wrapper_padding)), t[e].navigation.tabs && t[e].navigation.tabs.enable && (t[e].navigation.tabs.isVisible = t[e].navigation.tabs.hide_under < t[e].module.width && t[e].navigation.tabs.hide_over > t[e].module.width, t[e].navigation.tabs.cw = Math.max(Math.round(t[e].navigation.tabs.width * t[e].navigation.scaler), t[e].navigation.tabs.min_width), t[e].navigation.tabs.ch = Math.round(t[e].navigation.tabs.cw / t[e].navigation.tabs.width * t[e].navigation.tabs.height), t[e].navigation.tabs.isVisible && "outer-left" === t[e].navigation.tabs.position ? i.left += t[e].navigation.tabs.cw + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-right" === t[e].navigation.tabs.position ? i.right += t[e].navigation.tabs.cw + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-top" === t[e].navigation.tabs.position ? i.top += t[e].navigation.tabs.ch + 2 * t[e].navigation.tabs.wrapper_padding : t[e].navigation.tabs.isVisible && "outer-bottom" === t[e].navigation.tabs.position && (i.bottom += t[e].navigation.tabs.ch + 2 * t[e].navigation.tabs.wrapper_padding)), {
                left: i.left,
                right: i.right,
                horizontal: i.left + i.right,
                vertical: i.top + i.bottom,
                top: i.top,
                bottom: i.bottom
            }
        },
        resizeThumbsTabs: function(e, i) {
            if (void 0 !== t[e] && t[e].navigation.use && (t[e].navigation && t[e].navigation.bullets.enable || t[e].navigation && t[e].navigation.tabs.enable || t[e].navigation && t[e].navigation.thumbnails.enable)) {
                var a = tpGS.gsap.timeline(),
                    r = t[e].navigation.tabs,
                    s = t[e].navigation.thumbnails,
                    n = t[e].navigation.bullets;
                if (a.pause(), p(r) && (i || r.width > r.min_width) && o(e, a, t[e].c, r, t[e].slideamount, "tab"), p(s) && (i || s.width > s.min_width) && o(e, a, t[e].c, s, t[e].slideamount, "thumb", e), p(n) && i) {
                    var d = t[e].c.find(".tp-bullets");
                    d.find(".tp-bullet").each(function(e) {
                        var t = jQuery(this),
                            i = e + 1,
                            a = t.outerWidth() + parseInt(void 0 === n.space ? 0 : n.space, 0),
                            r = t.outerHeight() + parseInt(void 0 === n.space ? 0 : n.space, 0);
                        "vertical" === n.direction ? (t.css({
                            top: (i - 1) * r + "px",
                            left: "0px"
                        }), d.css({
                            height: (i - 1) * r + t.outerHeight(),
                            width: t.outerWidth()
                        })) : (t.css({
                            left: (i - 1) * a + "px",
                            top: "0px"
                        }), d.css({
                            width: (i - 1) * a + t.outerWidth(),
                            height: t.outerHeight()
                        }))
                    })
                }
                a.play()
            }
            return !0
        },
        updateNavIndexes: function(e) {
            var i = t[e].c;

            function a(e) {
                i.find(e).lenght > 0 && i.find(e).each(function(e) {
                    jQuery(this).data("liindex", e)
                })
            }
            a("rs-tab"), a("rs-bullet"), a("rs-thumb"), t.resizeThumbsTabs(e, !0), t.manageNavigation(e)
        },
        manageNavigation: function(e, i) {
            t[e].navigation.use && (p(t[e].navigation.bullets) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.bullets.h_offset_old = void 0 === t[e].navigation.bullets.h_offset_old ? parseInt(t[e].navigation.bullets.h_offset, 0) : t[e].navigation.bullets.h_offset_old, t[e].navigation.bullets.h_offset = "center" === t[e].navigation.bullets.h_align ? t[e].navigation.bullets.h_offset_old + t[e].outNavDims.left / 2 - t[e].outNavDims.right / 2 : t[e].navigation.bullets.h_offset_old + t[e].outNavDims.left), w(t[e].navigation.bullets.c, t[e].navigation.bullets, e)), p(t[e].navigation.thumbnails) && w(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && w(t[e].navigation.tabs, e), p(t[e].navigation.arrows) && ("fullscreen" != t[e].sliderLayout && "fullwidth" != t[e].sliderLayout && (t[e].navigation.arrows.left.h_offset_old = void 0 === t[e].navigation.arrows.left.h_offset_old ? parseInt(t[e].navigation.arrows.left.h_offset, 0) : t[e].navigation.arrows.left.h_offset_old, t[e].navigation.arrows.left.h_offset = (t[e].navigation.arrows.left.h_align, t[e].navigation.arrows.left.h_offset_old), t[e].navigation.arrows.right.h_offset_old = void 0 === t[e].navigation.arrows.right.h_offset_old ? parseInt(t[e].navigation.arrows.right.h_offset, 0) : t[e].navigation.arrows.right.h_offset_old, t[e].navigation.arrows.right.h_offset = (t[e].navigation.arrows.right.h_align, t[e].navigation.arrows.right.h_offset_old)), w(t[e].navigation.arrows.left, e), w(t[e].navigation.arrows.right, e)), !1 !== i && (p(t[e].navigation.thumbnails) && r(t[e].navigation.thumbnails, e), p(t[e].navigation.tabs) && r(t[e].navigation.tabs, e)))
        },
        showFirstTime: function(e) {
            u(e), t.hideUnHideNav(e)
        },
        selectNavElement: function(e, i, a, r) {
            for (var o = t[e].cpar[0].getElementsByClassName(a), s = 0; s < o.length; s++) t.gA(o[s], "key") === i ? (o[s].classList.add("selected"), void 0 !== r && r()) : o[s].classList.remove("selected")
        },
        transferParams: function(e, t) {
            if (void 0 !== t)
                for (var i in t.params) e = e.replace(t.params[i].from, t.params[i].to);
            return e
        },
        updateNavElementContent: function(e, i, a, o, s) {
            if (void 0 !== t[e].pr_next_key || void 0 !== t[e].pr_active_key) {
                var n = void 0 === t[e].pr_next_key ? void 0 === t[e].pr_cache_pr_next_key ? t[e].pr_active_key : t[e].pr_cache_pr_next_key : t[e].pr_next_key,
                    d = t.gA(t[e].slides[n], "key"),
                    l = 0,
                    c = !1;
                for (var p in a.enable && t.selectNavElement(e, d, "tp-bullet"), o.enable && t.selectNavElement(e, d, "tp-thumb", function() {
                        r(o, e)
                    }), s.enable && t.selectNavElement(e, d, "tp-tab", function() {
                        r(s, e)
                    }), t[e].thumbs) l = !0 === c ? l : p, c = t[e].thumbs[p].id === d || p == d || c;
                var g = (l = parseInt(l, 0)) > 0 ? l - 1 : t[e].slideamount - 1,
                    u = l + 1 == t[e].slideamount ? 0 : l + 1;
                if (!0 === i.enable && i.pi !== g && i.ni !== u) {
                    if (i.pi = g, i.ni = u, i.left.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[g]), u > t[e].slideamount) return;
                    i.right.c[0].innerHTML = t.transferParams(i.tmp, t[e].thumbs[u]), i.right.iholder = i.right.c.find(".tp-arr-imgholder"), i.left.iholder = i.left.c.find(".tp-arr-imgholder"), i.rtl ? (void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, {
                        backgroundImage: "url(" + t[e].thumbs[u].src + ")"
                    }), void 0 !== t[e].thumbs[g] && void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, {
                        backgroundImage: "url(" + t[e].thumbs[g].src + ")"
                    })) : (void 0 !== t[e].thumbs[g] && void 0 !== i.left.iholder[0] && tpGS.gsap.set(i.left.iholder, {
                        backgroundImage: "url(" + t[e].thumbs[g].src + ")"
                    }), void 0 !== i.right.iholder[0] && tpGS.gsap.set(i.right.iholder, {
                        backgroundImage: "url(" + t[e].thumbs[u].src + ")"
                    }))
                }
            }
        },
        createNavigation: function(e) {
            var r = t[e].navigation.arrows,
                o = t[e].navigation.bullets,
                d = t[e].navigation.thumbnails,
                h = t[e].navigation.tabs,
                v = p(r),
                y = p(o),
                b = p(d),
                S = p(h);
            for (var k in s(e), n(e), v && (f(r, e), r.c = t[e].cpar.find(".tparrows")), t[e].slides)
                if (t[e].slides.hasOwnProperty(k) && "true" != t.gA(t[e].slides[k], "not_in_nav")) {
                    var L = jQuery(t[e].slides[t[e].slides.length - 1 - k]),
                        R = jQuery(t[e].slides[k]);
                    y && (t[e].navigation.bullets.rtl ? _(t[e].c, o, L, e) : _(t[e].c, o, R, e)), b && (t[e].navigation.thumbnails.rtl ? x(t[e].c, d, L, "tp-thumb", e) : x(t[e].c, d, R, "tp-thumb", e)), S && (t[e].navigation.tabs.rtl ? x(t[e].c, h, L, "tp-tab", e) : x(t[e].c, h, R, "tp-tab", e))
                }
            y && w(o, e), b && w(d, e), S && w(h, e), (b || S) && t.updateDims(e), t[e].navigation.createNavigationDone = !0, b && jQuery.extend(!0, d, a(e, "thumb")), S && jQuery.extend(!0, h, a(e, "tab")), t[e].c.on("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                t.updateNavElementContent(e, r, o, d, h)
            }), c(r), c(o), c(d), c(h), t[e].cpar.on("mouseenter mousemove", function(a) {
                void 0 !== a.target && void 0 !== a.target.className && "string" == typeof a.target.className && a.target.className.indexOf("rs-waction") >= 0 || !0 !== t[e].tpMouseOver && t[e].firstSlideAvailable && (t[e].tpMouseOver = !0, u(e), i && !0 !== t[e].someNavIsDragged && (g(t[e].hideAllNavElementTimer), t[e].hideAllNavElementTimer = setTimeout(function() {
                    t[e].tpMouseOver = !1, m(e)
                }, 150)))
            }), t[e].cpar.on("mouseleave ", function() {
                t[e].tpMouseOver = !1, m(e)
            }), (b || S || "carousel" === t[e].sliderType || t[e].navigation.touch.touchOnDesktop || t[e].navigation.touch.touchenabled && i) && l(e), t[e].navigation.initialised = !0, t.updateNavElementContent(e, r, o, d, h), t.showFirstTime(e)
        }
    });
    var r = function(e, i) {
            if (void 0 !== e && null != e.mask) {
                var a = "vertical" === e.direction ? e.mask.find(e.single).first().outerHeight(!0) + e.space : e.mask.find(e.single).first().outerWidth(!0) + e.space,
                    r = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
                    o = e.mask.find(e.single + ".selected").data("liindex");
                o = (o = void 0 === (o = e.rtl ? t[i].slideamount - o : o) ? 0 : o) > 0 && 1 === t[i].sdir && e.visibleAmount > 1 ? o - 1 : o;
                var s = r / a,
                    n = "vertical" === e.direction ? e.mask.height() : e.mask.width(),
                    d = 0 - o * a,
                    l = "vertical" === e.direction ? e.wrap.height() : e.wrap.width(),
                    c = d < 0 - (l - n) ? 0 - (l - n) : d,
                    p = t.gA(e.wrap[0], "offset");
                p = void 0 === p ? 0 : p, s > 2 && (c = d - (p + a) <= 0 ? d - (p + a) < 0 - a ? p : c + a : c, c = d - a + p + r < a && d + (Math.round(s) - 2) * a < p ? d + (Math.round(s) - 2) * a : c), c = "vertical" !== e.direction && e.mask.width() >= e.wrap.width() || "vertical" === e.direction && e.mask.height() >= e.wrap.height() ? 0 : c < 0 - (l - n) ? 0 - (l - n) : c > 0 ? 0 : c, e.c.hasClass("dragged") || ("vertical" === e.direction ? e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
                    top: c + "px",
                    ease: "power3.inOut"
                })) : e.wrap.data("tmmove", tpGS.gsap.to(e.wrap, .5, {
                    left: c + "px",
                    ease: "power3.inOut"
                })), e.wrap.data("offset", c))
            }
        },
        o = function(e, i, a, r, o, s) {
            var n = a.parent().find(".tp-" + s + "s"),
                d = n.find(".tp-" + s + "s-inner-wrapper"),
                l = n.find(".tp-" + s + "-mask"),
                c = "vertical" === r.direction ? r.cw : r.cw * o + parseFloat(r.space) * (o - 1),
                p = "vertical" === r.direction ? r.ch * o + parseInt(r.space) * (o - 1) : r.ch,
                g = "vertical" === r.direction ? {
                    width: r.cw + "px"
                } : {
                    height: r.ch + "px"
                };
            if (i.add(tpGS.gsap.set(n, g)), i.add(tpGS.gsap.set(d, {
                    width: c + "px",
                    height: p + "px"
                })), "horizontal" === r.direction) {
                var u = Math.min(c, r.cw * r.visibleAmount + parseFloat(r.space) * (r.visibleAmount - 1));
                i.add(tpGS.gsap.set(l, {
                    width: u + "px",
                    height: p + "px"
                }))
            } else {
                var h = Math.min(p, r.ch * r.visibleAmount + parseFloat(r.space) * (r.visibleAmount - 1));
                i.add(tpGS.gsap.set(l, {
                    width: c + "px",
                    height: h + "px"
                }))
            }
            null !== d.outerWidth() && (t[e].thumbResized = !0);
            var m = d.find(".tp-" + s);
            return m && jQuery.each(m, function(e, t) {
                "vertical" === r.direction ? i.add(tpGS.gsap.set(t, {
                    top: e * (r.ch + parseInt(void 0 === r.space ? 0 : r.space, 0)),
                    width: r.cw + "px",
                    height: r.ch + "px"
                })) : "horizontal" === r.direction && i.add(tpGS.gsap.set(t, {
                    left: e * (r.cw + parseInt(void 0 === r.space ? 0 : r.space, 0)),
                    width: r.cw + "px",
                    height: r.ch + "px"
                }))
            }), i
        },
        s = function(e) {
            !0 === t[e].navigation.keyboardNavigation && t.document.on("keydown", function(i) {
                if ("horizontal" == t[e].navigation.keyboard_direction && 39 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 40 == i.keyCode) {
                    if (void 0 !== t[e].keydown_time_stamp && (new Date).getTime() - t[e].keydown_time_stamp < 1e3) return;
                    t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 0, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 1, "carousel" === t[e].sliderType)
                }
                if ("horizontal" == t[e].navigation.keyboard_direction && 37 == i.keyCode || "vertical" == t[e].navigation.keyboard_direction && 38 == i.keyCode) {
                    if (void 0 !== t[e].keydown_time_stamp && (new Date).getTime() - t[e].keydown_time_stamp < 1e3) return;
                    t[e].sc_indicator = "arrow", t[e].sc_indicator_dir = 1, "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, -1, "carousel" === t[e].sliderType)
                }
                t[e].keydown_time_stamp = (new Date).getTime()
            })
        },
        n = function(e) {
            !0 !== t[e].navigation.mouseScrollNavigation && "on" !== t[e].navigation.mouseScrollNavigation && "carousel" !== t[e].navigation.mouseScrollNavigation || t[e].c.on("wheel mousewheel DOMMouseScroll", function(i) {
                var a = function(e) {
                        var t = 0;
                        return "deltaY" in e || "deltaX" in e ? t = 0 != e.deltaY && -0 != e.deltaY || !(e.deltaX < 0 || e.deltaX > 0) ? e.deltaY : e.deltaX : ("detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120)), ((t = navigator.userAgent.match(/mozilla/i) ? 10 * t : t) > 300 || t < -300) && (t /= 10), t
                    }(i.originalEvent),
                    r = !1,
                    o = 0 == t[e].pr_active_key || 0 == t[e].pr_processing_key,
                    s = t[e].pr_active_key == t[e].slideamount - 1 || t[e].pr_processing_key == t[e].slideamount - 1,
                    n = void 0 !== t[e].topc ? t[e].topc[0].getBoundingClientRect() : 0 === t[e].canv.height ? t[e].cpar[0].getBoundingClientRect() : t[e].c[0].getBoundingClientRect();
                if ((n.top > 0 && n.bottom < t.winH ? 1 : n.top >= 0 && n.bottom >= t.winH ? (t.winH - n.top) / n.height : n.top <= 0 && n.bottom <= t.winH ? n.bottom / n.height : 1) >= t[e].navigation.wheelViewPort) {
                    if ("reverse" == t[e].navigation.mouseScrollReverse) {
                        let e = s;
                        s = o, o = e
                    }
                    if ("carousel" === t[e].sliderType && !1 === t[e].carousel.snap) t.swipeAnimate({
                        id: e,
                        to: t[e].carousel.slide_offset + 5 * a,
                        direction: a < 0 ? "left" : "right",
                        easing: "power2.out",
                        phase: "move"
                    });
                    else {
                        var d = a < 0 ? -1 : 1;
                        t[e].sc_indicator_dir = "reverse" === t[e].navigation.mouseScrollReverse && d < 0 || "reverse" !== t[e].navigation.mouseScrollReverse && d > 0 ? 0 : 1, "carousel" == t[e].navigation.mouseScrollNavigation || 0 === t[e].sc_indicator_dir && !s || 1 === t[e].sc_indicator_dir && !o ? void 0 === t[e].pr_processing_key && !0 !== t[e].justmouseScrolled ? (t[e].sc_indicator = "arrow", "carousel" === t[e].sliderType && (t[e].ctNavElement = !0), t.callingNewSlide(e, 0 === t[e].sc_indicator_dir ? 1 : -1, "carousel" === t[e].sliderType), t[e].justmouseScrolled = !0, setTimeout(function() {
                            t[e].justmouseScrolled = !1
                        }, t[e].navigation.wheelCallDelay)) : delete t[e].sc_indicator_dir : !0 !== t[e].justmouseScrolled && (r = !0)
                    }
                    return !!r || (i.preventDefault(i), !1)
                }
            })
        },
        d = function(e, t) {
            var a = !1;
            for (var r in (void 0 === t.path || i) && (a = function(e, t) {
                    for (; e && e !== document; e = e.parentNode)
                        if (e.tagName === t) return e;
                    return !1
                }(t.target, e)), t.path) t.path.hasOwnProperty(r) && t.path[r].tagName === e && (a = !0);
            return a
        },
        l = function(e) {
            var a = t[e].carousel,
                r = t.is_android();
            jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), t[e].navigation.touch = void 0 === t[e].navigation.touch ? {} : t[e].navigation.touch, t[e].navigation.touch.swipe_direction = void 0 === t[e].navigation.touch.swipe_direction ? "horizontal" : t[e].navigation.touch.swipe_direction, jQuery(".rs-nav-element").rsswipe({
                allowPageScroll: "vertical",
                triggerOnTouchLeave: !0,
                treshold: t[e].navigation.touch.swipe_treshold,
                fingers: t[e].navigation.touch.swipe_min_touches > 5 ? 1 : t[e].navigation.touch.swipe_min_touches,
                excludedElements: "button, input, select, textarea, .noSwipe, .rs-waction",
                tap: function(e, t) {
                    if (void 0 !== t) var i = jQuery(t).closest("rs-thumb");
                    void 0 !== i && i.length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-tab")).length > 0 ? i.trigger("click") : (i = jQuery(t).closest("rs-bullet")).length > 0 && i.trigger("click")
                },
                swipeStatus: function(i, o, s, n, l, c, p) {
                    if ("start" !== o && "move" !== o && "end" !== o && "cancel" != o) return !0;
                    var u = d("RS-THUMB", i),
                        m = d("RS-TAB", i);
                    !1 === u && !1 === m && !0 !== (u = "RS-THUMBS-WRAP" === i.target.tagName || "RS-THUMBS" === i.target.tagName || i.target.className.indexOf("tp-thumb-mask") >= 0) && (m = "RS-TABS-WRAP" === i.target.tagName || "RS-TABS" === i.target.tagName || i.target.className.indexOf("tp-tab-mask") >= 0);
                    var v = "start" === o ? 0 : r ? p[0].end.x - p[0].start.x : i.pageX - a.screenX,
                        f = "start" === o ? 0 : r ? p[0].end.y - p[0].start.y : i.pageY - a.screenY,
                        y = u ? ".tp-thumbs" : ".tp-tabs",
                        b = u ? ".tp-thumb-mask" : ".tp-tab-mask",
                        w = u ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                        _ = u ? ".tp-thumb" : ".tp-tab",
                        x = u ? t[e].navigation.thumbnails : t[e].navigation.tabs,
                        S = t[e].cpar.find(b),
                        k = S.find(w),
                        L = x.direction,
                        R = "vertical" === L ? k.height() : k.width(),
                        O = "vertical" === L ? S.height() : S.width(),
                        I = "vertical" === L ? S.find(_).first().outerHeight(!0) + parseFloat(x.space) : S.find(_).first().outerWidth(!0) + parseFloat(x.space),
                        T = void 0 === k.data("offset") ? 0 : parseInt(k.data("offset"), 0),
                        C = 0;
                    switch (o) {
                        case "start":
                            "vertical" === L && i.preventDefault(), a.screenX = r ? p[0].end.x : i.pageX, a.screenY = r ? p[0].end.y : i.pageY, t[e].cpar.find(y).addClass("dragged"), T = "vertical" === L ? k.position().top : k.position().left, k.data("offset", T), k.data("tmmove") && k.data("tmmove").pause(), t[e].someNavIsDragged = !0, h(e);
                            break;
                        case "move":
                            if (R <= O) return !1;
                            C = (C = T + ("vertical" === L ? f : v)) > 0 ? "horizontal" === L ? C - k.width() * (C / k.width() * C / k.width()) : C - k.height() * (C / k.height() * C / k.height()) : C;
                            var A = "vertical" === L ? 0 - (k.height() - S.height()) : 0 - (k.width() - S.width());
                            C = C < A ? "horizontal" === L ? C + k.width() * (C - A) / k.width() * (C - A) / k.width() : C + k.height() * (C - A) / k.height() * (C - A) / k.height() : C, "vertical" === L ? tpGS.gsap.set(k, {
                                top: C + "px"
                            }) : tpGS.gsap.set(k, {
                                left: C + "px"
                            }), g(t[e].hideAllNavElementTimer);
                            break;
                        case "end":
                        case "cancel":
                            return C = T + ("vertical" === L ? f : v), C = (C = "vertical" === L ? C < 0 - (k.height() - S.height()) ? 0 - (k.height() - S.height()) : C : C < 0 - (k.width() - S.width()) ? 0 - (k.width() - S.width()) : C) > 0 ? 0 : C, C = Math.abs(n) > I / 10 ? n <= 0 ? Math.floor(C / I) * I : Math.ceil(C / I) * I : n < 0 ? Math.ceil(C / I) * I : Math.floor(C / I) * I, C = (C = "vertical" === L ? C < 0 - (k.height() - S.height()) ? 0 - (k.height() - S.height()) : C : C < 0 - (k.width() - S.width()) ? 0 - (k.width() - S.width()) : C) > 0 ? 0 : C, "vertical" === L ? tpGS.gsap.to(k, .5, {
                                top: C + "px",
                                ease: "power3.out"
                            }) : tpGS.gsap.to(k, .5, {
                                left: C + "px",
                                ease: "power3.out"
                            }), C = C || ("vertical" === L ? k.position().top : k.position().left), k.data("offset", C), k.data("distance", n), t[e].cpar.find(y).removeClass("dragged"), t[e].someNavIsDragged = !1, !0
                    }
                }
            }), ("carousel" !== t[e].sliderType && (i && t[e].navigation.touch.touchenabled || !0 !== i && t[e].navigation.touch.touchOnDesktop) || "carousel" === t[e].sliderType && (i && t[e].navigation.touch.mobileCarousel || !0 !== i && t[e].navigation.touch.desktopCarousel)) && (t[e].preventClicks = !1, t[e].c.on("click", function(i) {
                t[e].preventClicks && i.preventDefault()
            }), t[e].c.rsswipe({
                allowPageScroll: "vertical",
                triggerOnTouchLeave: !0,
                treshold: t[e].navigation.touch.swipe_treshold,
                fingers: t[e].navigation.touch.swipe_min_touches > 5 ? 1 : t[e].navigation.touch.swipe_min_touches,
                excludedElements: "label, button, input, select, textarea, .noSwipe, .rs-nav-element",
                swipeStatus: function(o, s, n, d, l, c, p) {
                    t[e].preventClicks = !0;
                    var g = "start" === s ? 0 : r ? p[0].end.x - p[0].start.x : o.pageX - a.screenX,
                        u = "start" === s ? 0 : r ? p[0].end.x - p[0].start.y : o.pageY - a.screenY;
                    if (!("carousel" === t[e].sliderType && t[e].carousel.wrapwidth > t[e].carousel.maxwidth && "center" !== t[e].carousel.horizontal_align)) {
                        if ("carousel" !== t[e].sliderType) {
                            if ("end" == s) {
                                if (t[e].sc_indicator = "arrow", "horizontal" == t[e].navigation.touch.swipe_direction && "left" == n || "vertical" == t[e].navigation.touch.swipe_direction && "up" == n) return t[e].sc_indicator_dir = 0, t.callingNewSlide(e, 1), !1;
                                if ("horizontal" == t[e].navigation.touch.swipe_direction && "right" == n || "vertical" == t[e].navigation.touch.swipe_direction && "down" == n) return t[e].sc_indicator_dir = 1, t.callingNewSlide(e, -1), !1
                            }
                            return !0
                        }
                        switch ((a.preventSwipe || i && ("left" === n || "right" === n)) && o.preventDefault(), void 0 !== a.positionanim && a.positionanim.pause(), a.carouselAutomatic = !1, s) {
                            case "start":
                                clearTimeout(a.swipeMainTimer), a.beforeSwipeOffet = a.slide_offset, a.focusedBeforeSwipe = a.focused, a.beforeDragStatus = t[e].sliderstatus, t[e].c.trigger("stoptimer"), a.swipeStartPos = r ? p[0].start.x : o.pageX, a.swipeStartTime = (new Date).getTime(), a.screenX = r ? p[0].end.x : o.pageX, a.screenY = r ? p[0].end.y : o.pageY, void 0 !== a.positionanim && (a.positionanim.pause(), a.carouselAutomatic = !1), a.overpull = "none", a.wrap.addClass("dragged");
                                break;
                            case "move":
                                if ("left" !== n && "right" !== n || (a.preventSwipe = !0), a.justDragged = !0, Math.abs(g) >= 10 || t[e].carousel.isDragged) {
                                    if (t[e].carousel.isDragged = !0, t[e].c.find(".rs-waction").addClass("tp-temporarydisabled"), a.CACHE_slide_offset = a.beforeSwipeOffet + g, !a.infinity) {
                                        var h = "center" === a.horizontal_align ? (a.wrapwidth / 2 - a.slide_width / 2 - a.CACHE_slide_offset) / a.slide_width : (0 - a.CACHE_slide_offset) / a.slide_width;
                                        "none" !== a.overpull && 0 !== a.overpull || !(h < 0 || h > t[e].slideamount - 1) ? h >= 0 && h <= t[e].slideamount - 1 && (h >= 0 && g > a.overpull || h <= t[e].slideamount - 1 && g < a.overpull) && (a.overpull = 0) : a.overpull = g, a.CACHE_slide_offset = h < 0 ? a.CACHE_slide_offset + (a.overpull - g) / 1.5 + Math.sqrt(Math.abs((a.overpull - g) / 1.5)) : h > t[e].slideamount - 1 ? a.CACHE_slide_offset + (a.overpull - g) / 1.5 - Math.sqrt(Math.abs((a.overpull - g) / 1.5)) : a.CACHE_slide_offset
                                    }
                                    t.swipeAnimate({
                                        id: e,
                                        to: a.CACHE_slide_offset,
                                        direction: n,
                                        easing: "power2.out",
                                        phase: "move"
                                    })
                                }
                                break;
                            case "end":
                            case "cancel":
                                if (clearTimeout(a.swipeMainTimer), a.swipeMainTimer = setTimeout(function() {
                                        a.preventSwipe = !1
                                    }, 500), t[e].carousel.isDragged = !1, a.wrap.removeClass("dragged"), a.swipeEndPos = r ? p[0].end.x : o.pageX, a.swipeEndTime = (new Date).getTime(), a.swipeDuration = a.swipeEndTime - a.swipeStartTime, a.swipeDistance = i ? a.swipeEndPos - a.swipeStartPos : (a.swipeEndPos - a.swipeStartPos) / 1.5, a.swipePower = a.swipeDistance / a.swipeDuration, a.CACHE_slide_offset = a.slide_offset + a.swipeDistance * Math.abs(a.swipePower), Math.abs(g) < 5 && Math.abs(u) < 5) break;
                                t.swipeAnimate({
                                    id: e,
                                    to: a.CACHE_slide_offset,
                                    direction: n,
                                    fix: !0,
                                    newSlide: !0,
                                    easing: "power2.out",
                                    phase: "end"
                                }), "playing" === a.beforeDragStatus && t[e].c.trigger("restarttimer"), setTimeout(function() {
                                    t[e].c.find(".rs-waction").removeClass("tp-temporarydisabled")
                                }, 19)
                        }
                    }
                },
                tap: function() {
                    t[e].preventClicks = !1
                }
            })), "carousel" === t[e].sliderType && (i && 0 == t[e].navigation.touch.mobileCarousel || !0 !== i && !1 === t[e].navigation.touch.desktopCarousel) && a.wrap.addClass("noswipe"), t[e].navigation.touch.drag_block_vertical && t[e].c.addClass("disableVerticalScroll")
        },
        c = function(e) {
            e.hide_delay = t.isNumeric(parseInt(e.hide_delay, 0)) ? e.hide_delay : .2, e.hide_delay_mobile = t.isNumeric(parseInt(e.hide_delay_mobile, 0)) ? e.hide_delay_mobile : .2
        },
        p = function(e) {
            return e && e.enable
        },
        g = function(e) {
            clearTimeout(e)
        },
        u = function(e) {
            var i = t[e].navigation.maintypes;
            for (var a in i) i.hasOwnProperty(a) && p(t[e].navigation[i[a]]) && void 0 !== t[e].navigation[i[a]].c && (g(t[e].navigation[i[a]].showCall), t[e].navigation[i[a]].showCall = setTimeout(function(i) {
                g(i.hideCall), i.hide_onleave && !0 !== t[e].tpMouseOver || (void 0 === i.tween ? i.tween = v(i) : i.tween.play())
            }, t[e].navigation[i[a]].hide_onleave && !0 !== t[e].tpMouseOver ? 0 : parseInt(t[e].navigation[i[a]].animDelay), t[e].navigation[i[a]]))
        },
        h = function(e) {
            var i = t[e].navigation.maintypes;
            for (var a in i) i.hasOwnProperty(a) && void 0 !== t[e].navigation[i[a]] && t[e].navigation[i[a]].hide_onleave && p(t[e].navigation[i[a]]) && g(t[e].navigation[i[a]].hideCall)
        },
        m = function(e, a) {
            var r = t[e].navigation.maintypes;
            for (var o in r) r.hasOwnProperty(o) && void 0 !== t[e].navigation[r[o]] && t[e].navigation[r[o]].hide_onleave && p(t[e].navigation[r[o]]) && (g(t[e].navigation[r[o]].hideCall), t[e].navigation[r[o]].hideCall = setTimeout(function(e) {
                g(e.showCall), e.tween && e.tween.reverse()
            }, i ? parseInt(t[e].navigation[r[o]].hide_delay_mobile, 0) : parseInt(t[e].navigation[r[o]].hide_delay, 0), t[e].navigation[r[o]]))
        },
        v = function(e) {
            e.speed = void 0 === e.speed ? .5 : e.speed, e.anims = [], void 0 !== e.anim && void 0 === e.left && e.anims.push(e.anim), void 0 !== e.left && e.anims.push(e.left.anim), void 0 !== e.right && e.anims.push(e.right.anim);
            var t = tpGS.gsap.timeline();
            for (var i in t.add(tpGS.gsap.to(e.c, e.speed, {
                    opacity: 1,
                    ease: "power3.inOut"
                }), 0), e.anims)
                if (e.anims.hasOwnProperty(i)) switch (e.anims[i]) {
                    case "left":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            marginLeft: -50
                        }, {
                            marginLeft: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "right":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            marginLeft: 50
                        }, {
                            marginLeft: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "top":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            marginTop: -50
                        }, {
                            marginTop: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "bottom":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            marginTop: 50
                        }, {
                            marginTop: 0,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "zoomin":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            scale: .5
                        }, {
                            scale: 1,
                            ease: "power3.inOut"
                        }), 0);
                        break;
                    case "zoomout":
                        t.add(tpGS.gsap.fromTo(e.c[i], e.speed, {
                            scale: 1.2
                        }, {
                            scale: 1,
                            ease: "power3.inOut"
                        }), 0)
                }
            return t.play(), t
        },
        f = function(e, i) {
            e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, void 0 === e.left.c && (e.left.c = jQuery('<rs-arrow style="opacity:0" class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.left.c)), void 0 === e.right.c && (e.right.c = jQuery('<rs-arrow style="opacity:0"  class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</rs-arrow>"), t[i].c.append(e.right.c)), e[e.rtl ? "left" : "right"].c.on("click", function() {
                "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 0, t[i].c.revnext()
            }), e[e.rtl ? "right" : "left"].c.on("click", function() {
                "carousel" === t[i].sliderType && (t[i].ctNavElement = !0), t[i].sc_indicator = "arrow", t[i].sc_indicator_dir = 1, t[i].c.revprev()
            }), e.padding_top = parseInt(t[i].carousel.padding_top || 0, 0), e.padding_bottom = parseInt(t[i].carousel.padding_bottom || 0, 0), w(e.left, i), w(e.right, i), "outer-left" != e.position && "outer-right" != e.position || (t[i].outernav = !0)
        },
        y = function(e, i, a, r) {
            r = void 0 === r ? e.outerHeight(!0) : r;
            var o = null == t[a] ? 0 : 0 == t[a].canv.height ? t[a].module.height : t[a].canv.height,
                s = "layergrid" == i.container ? "fullscreen" == t[a].sliderLayout ? t[a].module.height / 2 - t[a].gridheight[t[a].level] * t[a].CM.h / 2 : t[a].autoHeight || null != t[a].minHeight && t[a].minHeight > 0 ? o / 2 - t[a].gridheight[t[a].level] * t[a].CM.h / 2 : 0 : 0,
                n = "top" === i.v_align ? {
                    top: "0px",
                    y: Math.round(i.v_offset + s) + "px"
                } : "center" === i.v_align ? {
                    top: "50%",
                    y: Math.round(0 - r / 2 + i.v_offset) + "px"
                } : {
                    top: "100%",
                    y: Math.round(0 - (r + i.v_offset + s)) + "px"
                };
            e.hasClass("outer-bottom") || tpGS.gsap.set(e, n)
        },
        b = function(e, i, a, r) {
            r = void 0 === r ? e.outerWidth() : r;
            var o = "layergrid" === i.container ? t[a].module.width / 2 - t[a].gridwidth[t[a].level] * t[a].CM.w / 2 : 0,
                s = "left" === i.h_align ? {
                    left: "0px",
                    x: Math.round(i.h_offset + o) + "px"
                } : "center" === i.h_align ? {
                    left: "50%",
                    x: Math.round(0 - r / 2 + i.h_offset) + "px"
                } : {
                    left: "100%",
                    x: Math.round(0 - (r + i.h_offset + o)) + "px"
                };
            tpGS.gsap.set(e, s)
        },
        w = function(e, i) {
            if (null != e && void 0 !== e.c) {
                var a = "fullwidth" == t[i].sliderLayout || "fullscreen" == t[i].sliderLayout ? t[i].module.width : t[i].canv.width,
                    r = e.c.outerWidth(),
                    o = e.c.outerHeight();
                if (!(r <= 0 || o <= 0) && (y(e.c, e, i, o), b(e.c, e, i, r), "outer-left" === e.position ? tpGS.gsap.set(e.c, {
                        left: 0 - r + "px",
                        x: e.h_offset + "px"
                    }) : "outer-right" === e.position && tpGS.gsap.set(e.c, {
                        right: 0 - r + "px",
                        x: e.h_offset + "px"
                    }), "tp-thumb" === e.type || "tp-tab" === e.type)) {
                    var s = parseInt(e.padding_top || 0, 0),
                        n = parseInt(e.padding_bottom || 0, 0),
                        d = {},
                        l = {};
                    e.maxw > a && "outer-left" !== e.position && "outer-right" !== e.position ? (d.left = "0px", d.x = 0, d.maxWidth = a - 2 * e.wpad + "px", l.maxWidth = a - 2 * e.wpad + "px") : (d.maxWidth = e.maxw, l.maxWidth = a + "px"), e.maxh + 2 * e.wpad > t[i].conh && "outer-bottom" !== e.position && "outer-top" !== e.position ? (d.top = "0px", d.y = 0, d.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px", l.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px") : (d.maxHeight = e.maxh + "px", l.maxHeight = e.maxh + "px"), e.mask = void 0 === e.mask ? e.c.find("rs-navmask") : e.mask, (e.mhoff > 0 || e.mvoff > 0) && (l.padding = e.mvoff + "px " + e.mhoff + "px"), e.span ? ("layergrid" == e.container && "outer-left" !== e.position && "outer-right" !== e.position && (s = n = 0), "vertical" === e.direction ? (d.maxHeight = s + n + (t[i].conh - 2 * e.wpad) + "px", d.height = s + n + (t[i].conh - 2 * e.wpad) + "px", d.top = 0, d.y = 0, l.maxHeight = s + n + Math.min(e.maxh, t[i].conh - 2 * e.wpad) + "px", tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, l), y(e.mask, e, i)) : "horizontal" === e.direction && (d.maxWidth = "100%", d.width = a - 2 * e.wpad + "px", d.left = 0, d.x = 0, l.maxWidth = e.maxw >= a ? "100%" : Math.min(e.maxw, a) + "px", tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, l), b(e.mask, e, i))) : (tpGS.gsap.set(e.c, d), tpGS.gsap.set(e.mask, l))
                }
            }
        },
        _ = function(e, i, a, r) {
            0 === e.find(".tp-bullets").length && (i.style = void 0 === i.style ? "" : i.style, i.c = jQuery('<rs-bullets style="opacity:0"  class="tp-bullets ' + i.style + " " + i.direction + " nav-pos-hor-" + i.h_align + " nav-pos-ver-" + i.v_align + " nav-dir-" + i.direction + '"></rs-bullets>'));
            var o = a.data("key"),
                s = i.tmp;
            void 0 !== t[r].thumbs[a.index()] && jQuery.each(t[r].thumbs[a.index()].params, function(e, t) {
                s = s.replace(t.from, t.to)
            });
            var n = jQuery('<rs-bullet data-key="' + o + '" class="tp-bullet">' + s + "</rs-bullet>");
            void 0 !== t[r].thumbs[a.index()] && n.find(".tp-bullet-image").css({
                backgroundImage: "url(" + t[r].thumbs[a.index()].src + ")"
            }), i.c.append(n), e.append(i.c);
            var d = i.c.find(".tp-bullet").length,
                l = n.outerWidth(),
                c = n.outerHeight(),
                p = l + parseInt(void 0 === i.space ? 0 : i.space, 0),
                g = c + parseInt(void 0 === i.space ? 0 : i.space, 0);
            "vertical" === i.direction ? (n.css({
                top: (d - 1) * g + "px",
                left: "0px"
            }), i.c.css({
                height: (d - 1) * g + c,
                width: l
            })) : (n.css({
                left: (d - 1) * p + "px",
                top: "0px"
            }), i.c.css({
                width: (d - 1) * p + l,
                height: c
            })), n.on("click", function() {
                "carousel" === t[r].sliderType && (t[r].ctNavElement = !0), t[r].sc_indicator = "bullet", e.revcallslidewithid(o), e.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected")
            }), i.padding_top = parseInt(t[r].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[r].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[r].outernav = !0)
        },
        x = function(e, i, a, r, o) {
            var s = "tp-thumb" === r ? ".tp-thumbs" : ".tp-tabs",
                n = "tp-thumb" === r ? ".tp-thumb-mask" : ".tp-tab-mask",
                d = "tp-thumb" === r ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                l = "tp-thumb" === r ? ".tp-thumb" : ".tp-tab",
                c = "tp-thumb" === r ? ".tp-thumb-image" : ".tp-tab-image",
                p = "tp-thumb" === r ? "rs-thumb" : "rs-tab";
            i.type = r, i.visibleAmount = i.visibleAmount > t[o].slideamount ? t[o].slideamount : i.visibleAmount, i.sliderLayout = t[o].sliderLayout, void 0 === i.c && (i.wpad = i.wrapper_padding, i.c = jQuery("<" + p + 's style="opacity:0" class="nav-dir-' + i.direction + " nav-pos-ver-" + i.v_align + " nav-pos-hor-" + i.h_align + " rs-nav-element " + r + "s " + (!0 === i.span ? "tp-span-wrapper" : "") + " " + i.position + " " + (void 0 === i.style ? "" : i.style) + '"><rs-navmask class="' + r + '-mask" style="overflow:hidden;position:relative"><' + p + 's-wrap class="' + r + 's-inner-wrapper" style="position:relative;"></' + p + "s-wrap></rs-navmask></" + p + "s>"), i.c.css({
                overflow: "visible",
                position: "outer-top" === i.position || "outer-bottom" === i.position ? "relative" : "absolute",
                background: i.wrapper_color,
                padding: i.wpad + "px",
                boxSizing: "contet-box"
            }), "outer-top" === i.position ? e.parent().prepend(i.c) : "outer-bottom" === i.position ? e.after(i.c) : e.append(i.c), "outer-left" !== i.position && "outer-right" !== i.position || tpGS.gsap.set(t[o].c, {
                overflow: "visible"
            }), i.padding_top = parseInt(t[o].carousel.padding_top || 0, 0), i.padding_bottom = parseInt(t[o].carousel.padding_bottom || 0, 0), "outer-left" != i.position && "outer-right" != i.position || (t[o].outernav = !0));
            var g = a.data("key"),
                u = i.c.find(n),
                h = u.find(d),
                m = i.tmp;
            i.space = parseFloat(i.space) || 0, i.maxw = "horizontal" === i.direction ? i.width * i.visibleAmount + i.space * (i.visibleAmount - 1) : i.width, i.maxh = "horizontal" === i.direction ? i.height : i.height * i.visibleAmount + i.space * (i.visibleAmount - 1), i.maxw += 2 * i.mhoff, i.maxh += 2 * i.mvoff, void 0 !== t[o].thumbs[a.index()] && jQuery.each(t[o].thumbs[a.index()].params, function(e, t) {
                m = m.replace(t.from, t.to)
            });
            var v = jQuery("<" + p + ' data-liindex="' + a.index() + '" data-key="' + g + '" class="' + r + '" style="width:' + i.width + "px;height:" + i.height + 'px;">' + m + "<" + p + ">");
            void 0 !== t[o].thumbs[a.index()] && v.find(c).css({
                backgroundImage: "url(" + t[o].thumbs[a.index()].src + ")"
            }), h.append(v);
            var f = i.c.find(l).length,
                y = v.outerWidth(),
                b = v.outerHeight(),
                w = y + parseInt(void 0 === i.space ? 0 : i.space, 0),
                _ = b + parseInt(void 0 === i.space ? 0 : i.space, 0);
            "vertical" === i.direction ? (v.css({
                top: (f - 1) * _ + "px",
                left: "0px"
            }), h.css({
                height: (f - 1) * _ + b,
                width: y
            })) : (v.css({
                left: (f - 1) * w + "px",
                top: "0px"
            }), h.css({
                width: (f - 1) * w + y,
                height: b
            })), u.css({
                maxWidth: i.maxw + "px",
                maxHeight: i.maxh + "px"
            }), i.c.css({
                maxWidth: i.maxw + "px",
                maxHeight: i.maxh + "px"
            }), v.on("click", function() {
                t[o].sc_indicator = "bullet", "carousel" === t[o].sliderType && (t[o].ctNavElement = !0);
                var i = e.parent().find(d).data("distance");
                i = void 0 === i ? 0 : i, Math.abs(i) < 10 && (e.revcallslidewithid(g), e.parent().find(s).removeClass("selected"), jQuery(this).addClass("selected"))
            })
        },
        S = function(e, i, a) {
            return null == e || void 0 === e.c ? a : (e.hide_under > t[i].canv.width || t[i].canv.width > e.hide_over ? (!0 !== e.tpForceNotVisible && (e.c.addClass("tp-forcenotvisible"), e.isVisible = !1, a = !0), e.tpForceNotVisible = !0) : (!1 !== e.tpForceNotVisible && (e.c.removeClass("tp-forcenotvisible"), e.isVisible = !0, a = !0), e.tpForceNotVisible = !1), a)
        }
}(jQuery),
function(e) {
    "use strict";
    window._R_is_Editor ? RVS._R = void 0 === RVS._R ? {} : RVS._R : window._R_is_Editor = !1;
    var t = _R_is_Editor ? RVS._R : jQuery.fn.revolution;
    jQuery.extend(!0, t, {
        bgW: function(e, i) {
            return _R_is_Editor ? RVS.RMD.width : "carousel" === t[e].sliderType ? t[e].justifyCarousel ? t[e].carousel.slide_widths[void 0 !== i ? i : t[e].carousel.focused] : t[e].carousel.slide_width : t[e].module.width
        },
        bgH: function(e, i) {
            return _R_is_Editor ? RVS.RMD.height : "carousel" === t[e].sliderType ? t[e].carousel.slide_height : t[e].module.height
        },
        getPZSides: function(e, t, i, a, r, o, s) {
            var n = e * i,
                d = t * i,
                l = Math.abs(a - n),
                c = Math.abs(r - d),
                p = new Object;
            return p.l = (0 - o) * l, p.r = p.l + n, p.t = (0 - s) * c, p.b = p.t + d, p.h = o, p.v = s, p
        },
        getPZCorners: function(e, i, a, r) {
            var o = e.bgposition.split(" ") || "center center",
                s = "center" == o[0] ? "50%" : "left" == o[0] || "left" == o[1] ? "0%" : "right" == o[0] || "right" == o[1] ? "100%" : o[0],
                n = "center" == o[1] ? "50%" : "top" == o[0] || "top" == o[1] ? "0%" : "bottom" == o[0] || "bottom" == o[1] ? "100%" : o[1];
            s = parseInt(s, 0) / 100 || 0, n = parseInt(n, 0) / 100 || 0;
            var d = new Object;
            return d.start = t.getPZSides(r.start.width, r.start.height, r.start.scale, i, a, s, n), d.end = t.getPZSides(r.start.width, r.start.height, r.end.scale, i, a, s, n), d
        },
        getPZValues: function(e) {
            var t = e.panzoom.split(";"),
                i = {
                    duration: 10,
                    ease: "none",
                    scalestart: 1,
                    scaleend: 1,
                    rotatestart: .01,
                    rotateend: 0,
                    blurstart: 0,
                    blurend: 0,
                    offsetstart: "0/0",
                    offsetend: "0/0"
                };
            for (var a in t)
                if (t.hasOwnProperty(a)) {
                    var r = t[a].split(":"),
                        o = r[0],
                        s = r[1];
                    switch (o) {
                        case "d":
                            i.duration = parseInt(s, 0) / 1e3;
                            break;
                        case "e":
                            i.ease = s;
                            break;
                        case "ss":
                            i.scalestart = parseInt(s, 0) / 100;
                            break;
                        case "se":
                            i.scaleend = parseInt(s, 0) / 100;
                            break;
                        case "rs":
                            i.rotatestart = parseInt(s, 0);
                            break;
                        case "re":
                            i.rotateend = parseInt(s, 0);
                            break;
                        case "bs":
                            i.blurstart = parseInt(s, 0);
                            break;
                        case "be":
                            i.blurend = parseInt(s, 0);
                            break;
                        case "os":
                            i.offsetstart = s;
                            break;
                        case "oe":
                            i.offsetend = s
                    }
                }
            return i.offsetstart = i.offsetstart.split("/") || [0, 0], i.offsetend = i.offsetend.split("/") || [0, 0], i.rotatestart = 0 === i.rotatestart ? .01 : i.rotatestart, e.panvalues = i, e.bgposition = "center center" == e.bgposition ? "50% 50%" : e.bgposition, i
        },
        pzCalcL: function(e, i, a) {
            var r, o, s, n, d, l, c = void 0 === a.panvalues ? jQuery.extend(!0, {}, t.getPZValues(a)) : jQuery.extend(!0, {}, a.panvalues),
                p = c.offsetstart,
                g = c.offsetend,
                u = {
                    start: {
                        width: e,
                        height: _R_is_Editor ? e / a.loadobj.width * a.loadobj.height : e / a.owidth * a.oheight,
                        rotation: c.rotatestart,
                        scale: c.scalestart,
                        transformOrigin: "0% 0%"
                    },
                    end: {
                        rotation: c.rotateend,
                        scale: c.scaleend
                    }
                };
            c.scalestart, a.owidth, a.oheight, c.scaleend, a.owidth, a.oheight;
            return u.start.height < i && (l = i / u.start.height, u.start.height = i, u.start.width = u.start.width * l), .01 === c.rotatestart && 0 === c.rotateend && (delete u.start.rotation, delete u.end.rotation), r = t.getPZCorners(a, e, i, u), p[0] = parseFloat(p[0]) + r.start.l, g[0] = parseFloat(g[0]) + r.end.l, p[1] = parseFloat(p[1]) + r.start.t, g[1] = parseFloat(g[1]) + r.end.t, o = r.start.r - r.start.l, s = r.start.b - r.start.t, n = r.end.r - r.end.l, d = r.end.b - r.end.t, p[0] = p[0] > 0 ? 0 : o + p[0] < e ? e - o : p[0], g[0] = g[0] > 0 ? 0 : n + g[0] < e ? e - n : g[0], p[1] = p[1] > 0 ? 0 : s + p[1] < i ? i - s : p[1], g[1] = g[1] > 0 ? 0 : d + g[1] < i ? i - d : g[1], u.start.x = p[0], u.start.y = p[1], u.end.x = g[0], u.end.y = g[1], u.end.ease = c.ease, u
        },
        pzDrawShadow: function(e, i, a) {
            var r = a.start.width * a.start.scale,
                o = a.start.height * a.start.scale;
            "animating" === i.currentState || i.shadowCanvas.width === i.pzDims.width && i.shadowCanvas.height === i.pzDims.height || (i.shadowCanvas.width = i.pzDims.width, i.shadowCanvas.height = i.pzDims.height), i.shadowCTX.clearRect(0, 0, i.pzDims.width, i.pzDims.height), i.shadowCTX.save(), i.shadowCTX.translate(a.start.x, a.start.y), void 0 !== a.start.rotation && i.shadowCTX.rotate(a.start.rotation * Math.PI / 180), i.shadowCTX.drawImage(i.loadobj.img, 0, 0, r, o), i.shadowCTX.restore(), "animating" !== i.currentState ? (t.updateSlideBGs(e, a.slidekey, i), void 0 !== a.start.blur && (i.canvas.style.filter = 0 === a.start.blur ? "none" : "blur(" + a.start.blur + "px)")) : void 0 !== a.start.blur && (i.canvasFilter ? i.canvasFilterBlur = a.start.blur : i.canvas.style.filter = 0 === a.start.blur ? "none" : "blur(" + a.start.blur + "px)")
        },
        startPanZoom: function(e, i, a, r, o, s) {
            var n = _R_is_Editor ? e : e.data();
            if (void 0 !== n.panzoom && null !== n.panzoom) {
                _R_is_Editor || "carousel" !== t[i].sliderType || (t[i].carousel.justify && void 0 === t[i].carousel.slide_widths && t.setCarouselDefaults(i, !0), t[i].carousel.justify || (void 0 === t[i].carousel.slide_width && (t[i].carousel.slide_width = !0 !== t[i].carousel.stretch ? t[i].gridwidth[t[i].level] * (0 === t[i].CM.w ? 1 : t[i].CM.w) : t[i].canv.width), void 0 === t[i].carousel.slide_height && (t[i].carousel.slide_height = !0 !== t[i].carousel.stretch ? t[i].gridheight[t[i].level] * (0 === t[i].CM.w ? 1 : t[i].CM.w) : t[i].canv.height)));
                var d, l = _R_is_Editor ? Math.min(window.devicePixelRatio, 2) : t[i].DPR,
                    c = t.bgW(i, r) * l,
                    p = t.bgH(i, r) * l,
                    g = t.pzCalcL(c, p, n);
                _R_is_Editor || (t[i].panzoomTLs = void 0 === t[i].panzoomTLs ? {} : t[i].panzoomTLs, t[i].panzoomBGs = void 0 === t[i].panzoomBGs ? {} : t[i].panzoomBGs, void 0 === t[i].panzoomBGs[r] && (t[i].panzoomBGs[r] = e), d = t[i].panzoomTLs[r]), a = a || 0, void 0 !== d && (d.pause(), d.kill(), d = void 0), d = tpGS.gsap.timeline({
                    paused: !0
                }), n.panvalues.duration = NaN === n.panvalues.duration || void 0 === n.panvalues.duration ? 10 : n.panvalues.duration;
                var u = _R_is_Editor ? n : t[i].sbgs[s];
                _R_is_Editor || void 0 === n || void 0 === u || (u.panvalues = n.panvalues), void 0 !== u && (void 0 === u.shadowCanvas && (u.shadowCanvas = document.createElement("canvas"), u.shadowCTX = u.shadowCanvas.getContext("2d"), u.shadowCanvas.style.background = "transparent", u.shadowCanvas.style.opacity = 1), u.pzDims = {
                    width: c,
                    height: p
                }, u.shadowCanvas.width = c * Math.max(g.end.scale, g.start.scale), u.shadowCanvas.height = p * Math.max(g.end.scale, g.start.scale), g.slideindex = r, g.slidekey = _R_is_Editor ? void 0 : s, t.pzDrawShadow(i, u, g), g.end.onUpdate = function() {
                    t.pzDrawShadow(i, u, g)
                }, u.panStart = jQuery.extend(!0, {}, g.start), void 0 === n.panvalues.blurstart || void 0 === n.panvalues.blurend || 0 === n.panvalues.blurstart && 0 === n.panvalues.blurend || (g.start.blur = n.panvalues.blurstart, g.end.blur = n.panvalues.blurend), d.add(tpGS.gsap.to(g.start, n.panvalues.duration, g.end), 0), d.progress(a), "play" !== o && "first" !== o || d.play(), _R_is_Editor ? RVS.TL[RVS.S.slideId].panzoom = d : t[i].panzoomTLs[r] = d)
            }
        }
    })
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution,
        i = t.is_mobile();
    jQuery.extend(!0, t, {
        checkForParallax: function(e) {
            var o = t[e].parallax;
            if (!o.done) {
                if (o.done = !0, i && o.disable_onmobile) return !1;
                if ("3D" == o.type || "3d" == o.type) {
                    if (t.addSafariFix(e), tpGS.gsap.set(t[e].c, {
                            overflow: o.ddd_overflow
                        }), tpGS.gsap.set(t[e].canvas, {
                            overflow: o.ddd_overflow
                        }), "carousel" != t[e].sliderType && o.ddd_shadow) {
                        var s = jQuery('<div class="dddwrappershadow"></div>');
                        tpGS.gsap.set(s, {
                            force3D: "auto",
                            transformPerspective: 1600,
                            transformOrigin: "50% 50%",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), t[e].c.prepend(s)
                    }
                    for (var n in t[e].slides) t[e].slides.hasOwnProperty(n) && a(jQuery(t[e].slides[n]), e);
                    t[e].c.find("rs-static-layers").length > 0 && (tpGS.gsap.set(t[e].c.find("rs-static-layers"), {
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), a(t[e].c.find("rs-static-layers"), e))
                }
                o.pcontainers = {}, o.bgcontainers = [], o.bgcontainer_depths = [], o.speed = void 0 === o.speed ? 0 : parseInt(o.speed, 0), o.speedbg = void 0 === o.speedbg ? 0 : parseInt(o.speedbg, 0), o.speedls = void 0 === o.speedls ? 0 : parseInt(o.speedls, 0), t[e].c.find("rs-slide rs-sbg-wrap, rs-slide rs-bgvideo").each(function() {
                    var i = jQuery(this),
                        a = i.data("parallax");
                    window.isSafari11 || (t[e].parZ = 1), void 0 !== (a = "on" == a || !0 === a ? 1 : a) && "off" !== a && !1 !== a && (o.bgcontainers.push(i.closest("rs-sbg-px")), o.bgcontainer_depths.push(t[e].parallax.levels[parseInt(a, 0) - 1] / 100))
                });
                for (n = 1; n <= o.levels.length; n++) {
                    for (var d in t[e].slides)
                        if (t[e].slides.hasOwnProperty(d)) {
                            var l = (p = t[e].slides[d]).dataset.key;
                            void 0 === o.pcontainers[l] && (o.pcontainers[l] = {}), r(n, o, p, o.pcontainers[l])
                        }
                    l = "static";
                    void 0 === o.pcontainers[l] && (o.pcontainers[l] = {}), r(n, o, t[e].slayers[0], o.pcontainers[l]), JSON.stringify(o.pcontainers[l]) == JSON.stringify({}) && delete o.pcontainers[l]
                }
                if ("mouse" == o.type || "mousescroll" == o.type || "3D" == o.type || "3d" == o.type) {
                    var c = "rs-slide .dddwrapper, .dddwrappershadow, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer";
                    for (var d in "carousel" === t[e].sliderType && (c = "rs-slide .dddwrapper, rs-slide .dddwrapper-layer, rs-static-layers .dddwrapper-layer"), o.sctors = {}, t[e].slides)
                        if (t[e].slides.hasOwnProperty(d)) {
                            var p;
                            l = (p = t[e].slides[d]).dataset.key;
                            o.sctors[l] = p.querySelectorAll(c)
                        }
                    t[e].slayers[0] && (o.sctors.static = t[e].slayers[0].querySelectorAll(c)), o.mouseEntered = !1, t[e].c.on("mouseenter", function(i) {
                        var a = t[e].c.offset().top,
                            r = t[e].c.offset().left;
                        o.mouseEnterX = i.pageX - r, o.mouseEnterY = i.pageY - a, o.mouseEntered = !0
                    });
                    var g = this.updateParallax.bind(this, e, o);
                    t[e].c.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function(e) {
                        o.eventData = e, void 0 !== o.frame && "mouseleave" !== e.type || (o.frame = window.requestAnimationFrame(g))
                    }), i && window.addEventListener("deviceorientation", function(e) {
                        o.eventData = e, void 0 === o.frame && (o.frame = window.requestAnimationFrame(g))
                    })
                }
                var u = t[e].scrolleffect;
                u.set && (u.multiplicator_layers = parseFloat(u.multiplicator_layers), u.multiplicator = parseFloat(u.multiplicator)), void 0 !== u._L && 0 === u._L.length && (u._L = !1), void 0 !== u.bgs && 0 === u.bgs.length && (u.bgs = !1)
            }
        },
        getLayerParallaxOffset: function(e, i, a) {
            return void 0 !== t[e].parallax && void 0 !== t[e].parallax.pcontainers && void 0 !== t[e].parallax.pcontainers[t[e]._L[i].slidekey] && void 0 !== t[e].parallax.pcontainers[t[e]._L[i].slidekey][i] ? Math.abs(t[e].parallax.pcontainers[t[e]._L[i].slidekey][i]["offs" + a]) : 0
        },
        updateParallax: function(e, i) {
            i.frame && (i.frame = window.cancelAnimationFrame(i.frame));
            var a, r, o = i.eventData,
                s = t[e].c.offset().left,
                n = t[e].c.offset().top,
                d = t[e].canv.width,
                l = t[e].canv.height,
                c = i.speed / 1e3 || 3;
            if ("enterpoint" == i.origo && "deviceorientation" !== o.type ? (!1 === i.mouseEntered && (i.mouseEnterX = o.pageX - s, i.mouseEnterY = o.pageY - n, i.mouseEntered = !0), a = i.mouseEnterX - (o.pageX - s), r = i.mouseEnterY - (o.pageY - n), c = i.speed / 1e3 || .4) : "deviceorientation" !== o.type && (a = d / 2 - (o.pageX - s), r = l / 2 - (o.pageY - n)), "deviceorientation" == o.type) {
                var p, g, u;
                p = o.beta - 60, g = o.gamma, u = p;
                var h = Math.abs(i.orientationX - g) > 1 || Math.abs(i.orientationY - u) > 1;
                if (i.orientationX = g, i.orientationY = u, !h) return;
                if (t.winW > t.getWinH(e)) {
                    var m = g;
                    g = u, u = m
                }
                a = 360 / d * (g *= 1.5), r = 180 / l * (u *= 1.5)
            }
            for (var v in o.type, "mouseout" === o.type && (a = 0, r = 0, i.mouseEntered = !1), i.pcontainers)
                if (i.pcontainers.hasOwnProperty(v) && (void 0 === t[e].activeRSSlide || "static" === v || t[e].slides[t[e].activeRSSlide].dataset.key === v))
                    for (var f in i.pcontainers[v])
                        if (i.pcontainers[v].hasOwnProperty(f)) {
                            var y = i.pcontainers[v][f];
                            y.pl = "3D" == i.type || "3d" == i.type ? y.depth / 200 : y.depth / 100, y.offsh = a * y.pl, y.offsv = r * y.pl, "mousescroll" == i.type ? tpGS.gsap.to(y.tpw, c, {
                                force3D: "auto",
                                x: y.offsh,
                                ease: "power3.out",
                                overwrite: "all"
                            }) : tpGS.gsap.to(y.tpw, c, {
                                force3D: "auto",
                                x: y.offsh,
                                y: y.offsv,
                                ease: "power3.out",
                                overwrite: "all"
                            })
                        }
            if ("3D" == i.type || "3d" == i.type)
                for (var v in i.sctors)
                    if (i.sctors.hasOwnProperty(v) && (void 0 === t[e].activeRSSlide || "static" === v || t[e].slides[t[e].activeRSSlide].dataset.key === v))
                        for (var f in i.sctors[v])
                            if (i.sctors[v].hasOwnProperty(f)) {
                                n = jQuery(i.sctors[v][f]);
                                var b = t.isFirefox() ? Math.min(25, i.levels[i.levels.length - 1]) / 200 : i.levels[i.levels.length - 1] / 200,
                                    w = a * b,
                                    _ = r * b,
                                    x = 0 == t[e].canv.width ? 0 : Math.round(a / t[e].canv.width * b * 100) || 0,
                                    S = 0 == t[e].canv.height ? 0 : Math.round(r / t[e].canv.height * b * 100) || 0,
                                    k = n.closest("rs-slide"),
                                    L = 0,
                                    R = !1;
                                "deviceorientation" === o.type && (w = a * (b = i.levels[i.levels.length - 1] / 200), _ = r * b * 3, x = 0 == t[e].canv.width ? 0 : Math.round(a / t[e].canv.width * b * 500) || 0, S = 0 == t[e].canv.height ? 0 : Math.round(r / t[e].canv.height * b * 700) || 0), n.hasClass("dddwrapper-layer") && (L = i.ddd_z_correction || 65, R = !0), n.hasClass("dddwrapper-layer") && (w = 0, _ = 0), k.index() === t[e].pr_active_key || "carousel" != t[e].sliderType ? !i.ddd_bgfreeze || R ? tpGS.gsap.to(n, c, {
                                    rotationX: S,
                                    rotationY: -x,
                                    x: w,
                                    z: L,
                                    y: _,
                                    ease: "power3.out",
                                    overwrite: "all"
                                }) : tpGS.gsap.to(n, .5, {
                                    force3D: "auto",
                                    rotationY: 0,
                                    rotationX: 0,
                                    z: 0,
                                    ease: "power3.out",
                                    overwrite: "all"
                                }) : tpGS.gsap.to(n, .5, {
                                    force3D: "auto",
                                    rotationY: 0,
                                    x: 0,
                                    y: 0,
                                    rotationX: 0,
                                    z: 0,
                                    ease: "power3.out",
                                    overwrite: "all"
                                }), "mouseleave" != o.type && "mouseout" !== o.type || tpGS.gsap.to(this, 3.8, {
                                    z: 0,
                                    ease: "power3.out"
                                })
                            }
        },
        parallaxProcesses: function(e, a, r, o) {
            var s = t[e].fixedOnTop ? Math.min(1, Math.max(0, window.scrollY / t.lastwindowheight)) : Math.min(1, Math.max(0, (0 - (a.top - t.lastwindowheight)) / (a.hheight + t.lastwindowheight))),
                n = (a.top >= 0 && a.top <= t.lastwindowheight || a.top <= 0 && a.bottom >= 0 || a.top <= 0 && a.bottom, t[e].slides[void 0 === t[e].pr_active_key ? 0 : t[e].pr_active_key]);
            if (t[e].scrollProg = s, t[e].scrollProgBasics = {
                    top: a.top,
                    height: a.hheight,
                    bottom: a.bottom
                }, t[e].sbtimeline.fixed ? (!1 === t[e].fixedScrollOnState || !t.stickySupported || 0 != t[e].fullScreenOffsetResult && null != t[e].fullScreenOffsetResult ? t.stickySupported = !1 : (t[e].topc.addClass("rs-stickyscrollon"), t[e].fixedScrollOnState = !0), void 0 === t[e].sbtimeline.rest && t.updateFixedScrollTimes(e), a.top >= t[e].fullScreenOffsetResult && a.top <= t.lastwindowheight ? (s = t[e].sbtimeline.fixStart * (1 - a.top / t.lastwindowheight) / 1e3, !0 !== t.stickySupported && !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, {
                    top: 0,
                    y: 0
                }), t[e].fixedScrollOnState = !1)) : a.top <= t[e].fullScreenOffsetResult && a.bottom >= t[e].module.height ? (!0 !== t.stickySupported && !0 !== t[e].fixedScrollOnState && (t[e].fixedScrollOnState = !0, t[e].topc.addClass("rs-fixedscrollon"), tpGS.gsap.set(t[e].cpar, {
                    top: 0,
                    y: t[e].fullScreenOffsetResult
                })), s = (t[e].sbtimeline.fixStart + t[e].sbtimeline.time * (Math.abs(a.top) / (a.hheight - t[e].module.height))) / 1e3) : (!0 !== t.stickySupported && (tpGS.gsap.set(t[e].cpar, {
                    top: t[e].scrollproc >= 0 ? 0 : a.height - t[e].module.height
                }), !1 !== t[e].fixedScrollOnState && (t[e].topc.removeClass("rs-fixedscrollon"), t[e].fixedScrollOnState = !1)), s = a.top > t.lastwindowheight ? 0 : (t[e].sbtimeline.fixEnd + t[e].sbtimeline.rest * (1 - a.bottom / t[e].module.height)) / 1e3)) : s = t[e].duration * s / 1e3, void 0 !== n && void 0 !== t.gA(n, "key") && !0 !== r) {
                for (var d in t[e].sbas[t.gA(n, "key")])
                    if (void 0 !== t[e]._L[d] && void 0 !== t[e]._L[d].timeline && (1 == t[e]._L[d].animationonscroll || "true" == t[e]._L[d].animationonscroll)) {
                        var l = void 0 !== t[e]._L[d].scrollBasedOffset ? s + t[e]._L[d].scrollBasedOffset : s;
                        l = l <= 0 ? 0 : l < .1 ? .1 : l, t[e]._L[d].animteToTime !== l && (t[e]._L[d].animteToTime = l, tpGS.gsap.to(t[e]._L[d].timeline, t[e].sbtimeline.speed, {
                            time: l,
                            ease: t[e].sbtimeline.ease
                        }))
                    }
                t[e].c.trigger("timeline_scroll_processed", {
                    id: e,
                    mproc: s,
                    speed: t[e].sbtimeline.speed
                })
            }
            if (i && t[e].parallax.disable_onmobile) return !1;
            var c = t[e].parallax;
            if ("3d" != c.type && "3D" != c.type) {
                if ("scroll" == c.type || "mousescroll" == c.type)
                    for (var p in c.pcontainers)
                        if (c.pcontainers.hasOwnProperty(p) && void 0 === t[e].activeRSSlide || "static" === p || t[e].slides[t[e].activeRSSlide].dataset.key === p)
                            for (var g in c.pcontainers[p])
                                if (c.pcontainers[p].hasOwnProperty(g)) {
                                    var u = c.pcontainers[p][g],
                                        h = void 0 !== o ? o : c.speedls / 1e3 || 0;
                                    u.pl = u.depth / 100, u.offsv = Math.round(t[e].scrollproc * (-u.pl * t[e].canv.height) * 10) / 10 || 0, tpGS.gsap.to(u.tpw, h, {
                                        overwrite: "auto",
                                        force3D: "auto",
                                        y: u.offsv
                                    })
                                }
                if (c.bgcontainers)
                    for (g = 0; g < c.bgcontainers.length; g++) {
                        var m = c.bgcontainers[g],
                            v = c.bgcontainer_depths[g],
                            f = t[e].scrollproc * (-v * t[e].canv.height) || 0;
                        h = void 0 !== o ? o : c.speedbg / 1e3 || .015;
                        h = void 0 !== t[e].parallax.lastBGY && 0 === h && Math.abs(f - t[e].parallax.lastBGY) > 50 ? .15 : h, tpGS.gsap.to(m, h, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            backfaceVisibility: "hidden",
                            force3D: "true",
                            y: f + "px"
                        }), t[e].parallax.lastBGY = f
                    }
            }
            var y = t[e].scrolleffect;
            if (y.set && (!i || !1 === y.disable_onmobile)) {
                var b = Math.abs(t[e].scrollproc) - y.tilt / 100;
                if (b = b < 0 ? 0 : b, !1 !== y._L) {
                    var w = 1 - b * y.multiplicator_layers,
                        _ = {
                            force3D: "true"
                        };
                    if ("top" == y.direction && t[e].scrollproc >= 0 && (w = 1), "bottom" == y.direction && t[e].scrollproc <= 0 && (w = 1), w = w > 1 ? 1 : w < 0 ? 0 : w, y.fade && (_.opacity = w), y.scale) {
                        var x = w;
                        _.scale = 1 - x + 1
                    }
                    if (y.blur) L = (L = (1 - w) * y.maxblur) <= .03 ? 0 : L, _["-webkit-filter"] = "blur(" + L + "px)", _.filter = "blur(" + L + "px)";
                    if (y.grayscale) {
                        var S = "grayscale(" + 100 * (1 - w) + "%)";
                        _["-webkit-filter"] = void 0 === _["-webkit-filter"] ? S : _["-webkit-filter"] + " " + S, _.filter = void 0 === _.filter ? S : _.filter + " " + S
                    }
                    tpGS.gsap.set(y._L, _)
                }
                if (!1 !== y.bgs) {
                    w = 1 - b * y.multiplicator, _ = {
                        backfaceVisibility: "hidden",
                        force3D: "true"
                    };
                    for (var k in "top" == y.direction && t[e].scrollproc >= 0 && (w = 1), "bottom" == y.direction && t[e].scrollproc <= 0 && (w = 1), w = w > 1 ? 1 : w < 0 ? 0 : w, y.bgs)
                        if (y.bgs.hasOwnProperty(k)) {
                            if (y.bgs[k].fade && (_.opacity = w), y.bgs[k].blur) {
                                var L = (1 - w) * y.maxblur;
                                _["-webkit-filter"] = "blur(" + L + "px)", _.filter = "blur(" + L + "px)"
                            }
                            if (y.bgs[k].grayscale) {
                                S = "grayscale(" + 100 * (1 - w) + "%)";
                                _["-webkit-filter"] = void 0 === _["-webkit-filter"] ? S : _["-webkit-filter"] + " " + S, _.filter = void 0 === _.filter ? S : _.filter + " " + S
                            }
                            tpGS.gsap.set(y.bgs[k].c, _)
                        }
                }
            }
        }
    });
    var a = function(e, i) {
        var a = t[i].parallax;
        e.find("rs-sbg-wrap").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>');
        var r = e[0].querySelectorAll(".rs-parallax-wrap"),
            o = document.createElement("div");
        o.className = "dddwrapper-layer", o.style.width = "100%", o.style.height = "100%", o.style.position = "absolute", o.style.top = "0px", o.style.left = "0px", o.style.zIndex = 5, o.style.overflow = a.ddd_layer_overflow;
        for (var s = 0; s < r.length; s++) r.hasOwnProperty(s) && null === t.closestNode(r[s], "RS-GROUP") && null === t.closestNode(r[s], "RS-ROW") && o.appendChild(r[s]);
        e[0].appendChild(o), e.find(".rs-pxl-tobggroup").closest(".rs-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
        var n = e.find(".dddwrapper"),
            d = e.find(".dddwrapper-layer");
        e.find(".dddwrapper-layertobggroup").appendTo(n), "carousel" == t[i].sliderType && (a.ddd_shadow && n.addClass("dddwrappershadow"), tpGS.gsap.set(n, {
            borderRadius: t[i].carousel.border_radius
        })), tpGS.gsap.set(e, {
            overflow: "visible",
            transformStyle: "preserve-3d",
            perspective: 1600
        }), tpGS.gsap.set(n, {
            force3D: "auto",
            transformOrigin: "50% 50%",
            transformStyle: "preserve-3d",
            transformPerspective: 1600
        }), tpGS.gsap.set(d, {
            force3D: "auto",
            transformOrigin: "50% 50%",
            zIndex: 5,
            transformStyle: "flat",
            transformPerspective: 1600
        }), tpGS.gsap.set(t[i].canvas, {
            transformStyle: "preserve-3d",
            transformPerspective: 1600
        })
    };

    function r(i, a, r, o) {
        e(r).find(".rs-pxl-" + i).each(function() {
            var e = this.className.indexOf("rs-pxmask") >= 0,
                r = e ? t.closestNode(this, "RS-PX-MASK") : t.closestClass(this, "rs-parallax-wrap");
            r && (e && !window.isSafari11 && (tpGS.gsap.set(r, {
                z: 1
            }), tpGS.gsap.set(t.closestNode(r, "RS-BG-ELEM"), {
                z: 1
            })), r.dataset.parallaxlevel = a.levels[i - 1], r.classList.add("tp-parallax-container"), o[this.id] = {
                tpw: r,
                depth: a.levels[i - 1],
                offsv: 0,
                offsh: 0
            })
        })
    }
}(jQuery),
function(e) {
    "use strict";
    window._R_is_Editor ? RVS._R = void 0 === RVS._R ? {} : RVS._R : window._R_is_Editor = !1;
    var t = _R_is_Editor ? RVS._R : jQuery.fn.revolution,
        i = !_R_is_Editor && t.is_mobile();
    _R_is_Editor && (RVS._R.isNumeric = RVS.F.isNumeric), jQuery.extend(!0, t, {
        getSlideAnimationObj: function(e, i, a) {
            var r, o = {};
            for (var s in void 0 === i.anim && null == i.in && (i.in = "o:0"), i)
                if (i.hasOwnProperty(s) && void 0 !== i[s]) {
                    var n = i[s].split(";");
                    for (var d in n) n.hasOwnProperty(d) && void 0 !== (r = n[d].split(":"))[0] && void 0 !== r[1] && (o[s] = void 0 === o[s] ? {} : o[s], o[s][r[0]] = "d3" === s && "c" === r[0] ? r[1] : r[1].split(",")[0])
                }
            return o.in = void 0 === o.in ? {} : o.in, o.anim = void 0 === o.anim ? {
                e: "basic"
            } : o.anim, _R_is_Editor || void 0 === o.in || void 0 === o.in.prst || t.loadSlideAnimLibrary(e, {
                key: a,
                prst: o.in.prst
            }), t[e].sbgs[a].slideanimationRebuild = !1, o
        },
        loadSlideAnimLibrary: function(e, i) {
            void 0 === t.SLTR && !0 !== t.SLTR_loading ? (t.SLTR_loading = !0, jQuery.ajax({
                type: "post",
                url: t[e].ajaxUrl,
                dataType: "json",
                data: {
                    action: "revslider_ajax_call_front",
                    client_action: "get_transitions",
                    token: t[e].ajaxNonce
                },
                success: function(a, r, o) {
                    1 == a.success && (t.SLTR = a.transitions, void 0 !== i && t.setRandomDefaults(e, i.key, i.prst))
                },
                error: function(e) {
                    console.log("Transition Table can not be loaded"), console.log(e)
                }
            })) : void 0 !== i && void 0 !== t.SLTR && t.setRandomDefaults(e, i.key, i.prst)
        },
        convertSlideAnimVals: function(e) {
            return {
                anim: {
                    ms: parseInt(e.speed, 0),
                    o: e.o,
                    e: e.e,
                    f: e.f,
                    p: e.p,
                    d: parseInt(e.d, 0)
                },
                d3: {
                    f: e.d3.f,
                    d: e.d3.d,
                    z: e.d3.z,
                    t: e.d3.t,
                    c: e.d3.c,
                    e: e.d3.e,
                    fdi: e.d3.fdi,
                    fdo: e.d3.fdo,
                    fz: e.d3.fz,
                    su: e.d3.su,
                    smi: e.d3.smi,
                    sma: e.d3.sma,
                    sc: e.d3.sc,
                    sl: e.d3.sl
                },
                in: {
                    o: _R_is_Editor && void 0 !== e.preset && 0 === e.preset.indexOf("rnd") ? 0 : g(e.in.o),
                    x: g(e.in.x),
                    y: g(e.in.y),
                    r: g(e.in.r),
                    sx: g(e.in.sx),
                    sy: g(e.in.sy),
                    m: e.in.m,
                    e: e.in.e,
                    row: e.in.row,
                    col: e.in.col,
                    mo: "false" !== e.in.mou && !1 !== e.in.mou ? g(e.in.mo) : 0,
                    moo: "false" !== e.in.mou && !1 !== e.in.mou ? g(e.in.moo) : "none",
                    mou: e.in.mou
                },
                out: void 0 === e.out.a || "true" == e.out.a || !0 === e.out.a ? void 0 : {
                    a: p(e.out.a),
                    o: g(e.out.o),
                    x: g(e.out.x),
                    y: g(e.out.y),
                    r: g(e.out.r),
                    sx: g(e.out.sx),
                    sy: g(e.out.sy),
                    m: e.out.m,
                    e: e.out.e,
                    row: g(e.out.row),
                    col: g(e.out.col)
                },
                filter: {
                    u: e.filter.u,
                    e: e.filter.e,
                    b: e.filter.b,
                    g: e.filter.g,
                    h: e.filter.h,
                    s: e.filter.s,
                    c: e.filter.c,
                    i: e.filter.i
                }
            }
        },
        setRandomDefaults: function(e, i, a) {
            t[e].sbgs[i].random = t.getAnimObjectByKey(a, t.SLTR)
        },
        getSlideAnim_EmptyObject: function() {
            return {
                speed: 1e3,
                o: "inout",
                e: "basic",
                f: "start",
                p: "none",
                d: 15,
                d3: {
                    f: "none",
                    d: "horizontal",
                    z: 300,
                    t: 0,
                    c: "#ccc",
                    e: "power2.inOut",
                    fdi: 1.5,
                    fdo: 2,
                    fz: 0,
                    su: !1,
                    smi: 0,
                    sma: .5,
                    sc: "#000",
                    sl: 1
                },
                filter: {
                    u: !1,
                    e: "default",
                    b: 0,
                    g: 0,
                    h: 100,
                    s: 0,
                    c: 100,
                    i: 0
                },
                in: {
                    o: 1,
                    x: 0,
                    y: 0,
                    r: 0,
                    sx: 1,
                    sy: 1,
                    m: !1,
                    e: "power2.inOut",
                    row: 1,
                    col: 1,
                    mo: 80,
                    mou: !1
                },
                out: {
                    a: "true",
                    o: 1,
                    x: 0,
                    y: 0,
                    r: 0,
                    sx: 1,
                    sy: 1,
                    m: !1,
                    e: "power2.inOut",
                    row: 1,
                    col: 1
                }
            }
        },
        getAnimObjectByKey: function(e, i) {
            if (t.getAnimObjectCacheKey === e) return t.getAnimObjectCache;
            var a;
            for (var r in t.getAnimObjectCacheKey = e, i)
                if (i.hasOwnProperty(r) && void 0 === a)
                    for (var o in i[r])
                        if (i[r].hasOwnProperty(o) && void 0 === a)
                            if (e === o && 0 === e.indexOf("rnd"))(a = i[r][o]).main = r, a.group = o;
                            else
                                for (var s in i[r][o]) i[r][o].hasOwnProperty(s) && void 0 === a && s === e && ((a = i[r][o][s]).main = r, a.group = o);
            return t.getAnimObjectCache = jQuery.extend(!0, {}, a), a
        },
        getRandomSlideTrans: function(e, i, a) {
            if (void 0 !== t.randomSlideAnimCache && void 0 !== t.randomSlideAnimCache[e] && void 0 !== t.randomSlideAnimCache[e][i]) return t.randomSlideAnimCache[e][i][Math.floor(Math.random() * t.randomSlideAnimCache[e][i].length)];
            for (var r in t.randomSlideAnimCache = void 0 === t.randomSlideAnimCache ? {} : t.randomSlideAnimCache, t.randomSlideAnimCache[e] = void 0 === t.randomSlideAnimCache[e] ? {} : t.randomSlideAnimCache[e], t.randomSlideAnimCache[e][i] = void 0 === t.randomSlideAnimCache[e][i] ? [] : t.randomSlideAnimCache[e][i], a)
                if (a.hasOwnProperty(r) && "random" !== r && "custom" !== r && ("all" == e || r == e))
                    for (var o in a[r])
                        if (a[r].hasOwnProperty(o) && "icon" !== o && ("" + i == "undefined" || i.indexOf(o) >= 0))
                            for (var s in a[r][o]) a[r][o].hasOwnProperty(s) && -1 == jQuery.inArray(a[r][o][s].title, ["*north*", "*south*", "*east*", "*west*"]) && t.randomSlideAnimCache[e][i].push(s);
            return t.randomSlideAnimCache[e][i][Math.floor(Math.random() * t.randomSlideAnimCache[e][i].length)]
        },
        cbgW: function(e, i) {
            return _R_is_Editor ? RVS.RMD.width : "carousel" === t[e].sliderType ? t[e].justifyCarousel ? t[e].carousel.slide_widths[void 0 !== i ? i : t[e].carousel.focused] : t[e].carousel.slide_width : t[e].canv.width
        },
        cbgH: function(e, i) {
            return _R_is_Editor ? RVS.RMD.height : "carousel" === t[e].sliderType ? t[e].carousel.slide_height : t[e].canv.height
        },
        animateSlide: function(e, t) {
            return _R_is_Editor && RVS.F.resetSlideTL(), void 0 === tpGS.eases.late && (tpGS.CustomEase.create("late", "M0,0,C0,0,0.474,0.078,0.724,0.26,0.969,0.438,1,1,1,1"), tpGS.CustomEase.create("late2", "M0,0 C0,0 0.738,-0.06 0.868,0.22 1,0.506 1,1 1,1 "), tpGS.CustomEase.create("late3", "M0,0,C0,0,0.682,0.157,0.812,0.438,0.944,0.724,1,1,1,1")), s(e, t)
        },
        getBasic: function(e) {
            return jQuery.extend(!0, {
                attr: null == e || void 0 === e.attr ? ["o", "r", "sx", "sy", "x", "y", "m", "e", "row", "col", "mo", "moo"] : e.attr,
                in: {
                    f: "start",
                    m: !1,
                    o: 1,
                    r: 0,
                    sx: 1,
                    sy: 1,
                    x: 0,
                    y: 0,
                    row: 1,
                    col: 1,
                    e: "power2.inOut",
                    ms: 1e3,
                    mo: 0,
                    moo: "none"
                },
                out: {
                    f: "start",
                    m: !1,
                    o: 1,
                    r: 0,
                    sx: 1,
                    sy: 1,
                    x: 0,
                    y: 0,
                    row: 1,
                    col: 1,
                    e: "power2.inOut",
                    ms: 1e3
                }
            }, e)
        },
        playBGVideo: function(e, i, a) {
            if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;
            else {
                if (void 0 === a && (void 0 === t[e].pr_next_bg || 0 === t[e].pr_next_bg.length)) return;
                a = void 0 === a ? t[e].sbgs[void 0 === i ? t[e].pr_next_bg[0].dataset.key : i] : a
            }
            void 0 !== a.bgvid && a.bgvid.length > 0 && (h(e, {}, a, "in"), t.resetVideo(a.bgvid, e), t.playVideo(a.bgvid, e, !0), tpGS.gsap.to(a.bgvid[0], .2, {
                zIndex: 30,
                display: "block",
                autoAlpha: 1,
                delay: .075,
                overwrite: "all"
            }))
        },
        stopBGVideo: function(e, i, a) {
            if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;
            else {
                if (void 0 === a && (void 0 === t[e].pr_next_bg || 0 === t[e].pr_next_bg.length)) return;
                a = void 0 === a ? t[e].sbgs[void 0 === i ? t[e].pr_next_bg[0].dataset.key : i] : a
            }
            void 0 !== a.bgvid && a.bgvid.length > 0 && (a.drawVideoCanvasImagesRecall = !1, t.stopVideo(a.bgvid, e), tpGS.gsap.to(a.bgvid[0], .2, {
                autoAlpha: 0,
                zIndex: 0,
                display: "none"
            }))
        },
        getmDim: function(e, i, a) {
            var r = t.cbgW(e, i),
                o = t.cbgH(e, i);
            return a.DPR = _R_is_Editor ? Math.min(window.devicePixelRatio, 2) : t[e].DPR, {
                width: Math.round(r * a.DPR),
                height: Math.round(o * a.DPR),
                w: r,
                h: o
            }
        },
        updateSlideBGs: function(e, i, a) {
            if (_R_is_Editor) a = void 0 === a ? RVS.SBGS[RVS.S.slideId].n : a;
            else {
                if (void 0 === a && (void 0 === t[e].pr_next_bg || 0 === t[e].pr_next_bg.length)) return;
                a = void 0 === a ? t[e].sbgs[void 0 === i ? t[e].pr_next_bg[0].dataset.key : i] : a
            }
            a.mDIM = t.getmDim(e, a.skeyindex, a), void 0 !== a.video ? ("IMG" !== a.video.tagName && (a.isVidImg = ""), a.cDIMS = t.getBGCanvasDetails(e, a), a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, a.ctx.clearRect(0, 0, a.mDIM.width, a.mDIM.height), a.ctx.drawImage(a.shadowCanvas, 0, 0)) : (a.cDIMS = t.getBGCanvasDetails(e, a), a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, "panzoom" === a.currentState || "animating" === a.currentState || void 0 === a.currentState && !_R_is_Editor && "carousel" != t[e].sliderType || (a.ctx.clearRect(0, 0, a.mDIM.width, a.mDIM.height), a.ctx.drawImage(a.shadowCanvas, 0, 0))), "animating" === a.currentState && "carousel" !== t[e].sliderType && t.animatedCanvasUpdate(e, a)
        },
        addCanvas: function() {
            var e = document.createElement("canvas");
            return x = e.getContext("2d"), e.style.background = "transparent", e.style.opacity = 1, x
        },
        updateVideoFrames: function(e, a, r) {
            if (a.now = Date.now(), a.then = void 0 === a.then ? a.now - 500 : a.then, a.elapsed = a.now - a.then, a.fps = "animating" === a.currentState && window._rs_firefox ? 50 : 33, a.elapsed > a.fps) {
                a.then = a.now - a.elapsed % a.fps;
                var o = "img" === a.video.tagName || null == a.video.videoWidth || 0 == a.video.videoWidth;
                void 0 !== a.video && !a.video.BGrendered && void 0 !== a.loadobj && void 0 !== a.loadobj.img || i && t.isFirefox(e) ? (a.mDIM = t.getmDim(e, a.skeyindex, a), a.pDIMS = l(a.mDIM, a, {
                    width: a.mDIM.width,
                    height: a.mDIM.height,
                    x: 0,
                    y: 0,
                    contw: a.loadobj.width,
                    conth: a.loadobj.height
                }), a.shadowCanvas.width = a.mDIM.width, a.shadowCanvas.height = a.mDIM.height, a.shadowCTX.drawImage(a.loadobj.img, a.pDIMS.x, a.pDIMS.y, a.pDIMS.width, a.pDIMS.height)) : ((r || void 0 === a.sDIMS || o !== a.isVidImg || 0 === a.sDIMS.width || 0 === a.sDIMS.height) && (a.isVidImg = o, a.mDIM = t.getmDim(e, a.skeyindex, a), a.sDIMS = l(a.mDIM, a, {
                    width: a.mDIM.width,
                    height: a.mDIM.height,
                    x: 0,
                    y: 0,
                    contw: a.isVidImg ? a.loadobj.width : a.video.videoWidth,
                    conth: a.isVidImg ? a.loadobj.height : a.video.videoHeight
                })), void 0 !== a.sDIMS && 0 !== a.sDIMS.width && 0 !== a.sDIMS.height && ("animating" === a.currentState ? (a.shadowCanvas.width = a.sDIMS.width, a.shadowCanvas.height = a.sDIMS.height, a.shadowCTX.drawImage(a.video, a.sDIMS.x, a.sDIMS.y, a.sDIMS.width, a.sDIMS.height)) : void 0 === a.animateDirection && (a.canvas.width = a.mDIM.width, a.canvas.height = a.mDIM.height, a.ctx.drawImage(a.video, a.sDIMS.x, a.sDIMS.y, a.sDIMS.width, a.sDIMS.height)), a.shadowCanvas_Drawn = !0))
            }(r || a.drawVideoCanvasImagesRecall && "animating" === a.currentState || "animating" === a.currentState && void 0 === a.shadowCanvas_Drawn) && window.requestAnimationFrame(function() {
                t.updateVideoFrames(e, a)
            })
        },
        createOverlay: function(e, i, a, r) {
            if ("none" === i) return "none";
            a = void 0 === a ? 1 : a;
            r = void 0 === r ? {
                0: "rgba(0, 0, 0, 0)",
                1: "rgba(0, 0, 0, 1)"
            } : r;
            var o = {
                    none: [
                        [0]
                    ],
                    1: [
                        [1, 0],
                        [0, 0]
                    ],
                    2: [
                        [1, 0, 0],
                        [0, 0, 0],
                        [0, 0, 0]
                    ],
                    3: [
                        [1, 0, 0, 0],
                        [0, 0, 0, 0],
                        [0, 0, 0, 0]
                    ],
                    4: [
                        [1],
                        [0]
                    ],
                    5: [
                        [1],
                        [0],
                        [0]
                    ],
                    6: [
                        [1],
                        [0],
                        [0],
                        [0]
                    ],
                    7: [
                        [1, 0]
                    ],
                    8: [
                        [1, 0, 0]
                    ],
                    9: [
                        [1, 0, 0, 0]
                    ],
                    10: [
                        [1, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 0],
                        [0, 1, 0, 1, 0],
                        [0, 0, 0, 0, 1]
                    ],
                    11: [
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0],
                        [1, 0, 0, 0, 1],
                        [0, 1, 0, 1, 0],
                        [0, 0, 1, 0, 0]
                    ],
                    12: [
                        [1, 0, 0],
                        [0, 1, 0],
                        [0, 0, 1]
                    ],
                    13: [
                        [0, 0, 1],
                        [0, 1, 0],
                        [1, 0, 0]
                    ],
                    14: [
                        [1, 0, 0, 0, 0],
                        [0, 1, 0, 0, 0],
                        [0, 0, 1, 0, 0],
                        [0, 0, 0, 1, 0],
                        [0, 0, 0, 0, 0]
                    ],
                    15: [
                        [0, 0, 0, 0, 1],
                        [0, 0, 0, 1, 0],
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 0, 0],
                        [1, 0, 0, 0, 0]
                    ],
                    16: [
                        [1, 0, 0, 0, 1],
                        [0, 1, 0, 1, 0],
                        [0, 0, 1, 0, 0],
                        [0, 1, 0, 1, 0],
                        [1, 0, 0, 0, 1]
                    ]
                },
                s = void 0 === o[i = void 0 === i ? 1 : i] ? o[2] : o[i];
            _R_is_Editor && (t[e] = void 0 === t[e] ? {} : t[e]), t[e].patternCanvas = document.createElement("canvas"), t[e].patternCtx = t[e].patternCanvas.getContext("2d"), t[e].patternCanvas.width = s[0].length * a, t[e].patternCanvas.height = s.length * a;
            for (var n = 0; n < s.length; n++)
                for (var d = 0; d < s[n].length; d++) "transparent" != r[s[n][d]] && (t[e].patternCtx.fillStyle = r[s[n][d]], t[e].patternCtx.fillRect(d * a, n * a, a, a));
            return "url(" + t[e].patternCanvas.toDataURL() + ")"
        },
        getBGCanvasDetails: function(e, i, a, r) {
            var o;
            return i.mDIM = t.getmDim(e, i.skeyindex, i), i.usepattern = "auto" === i.bgfit || i.bgfit.indexOf("%") >= 0, _R_is_Editor && void 0 === i.panzoom && delete i.shadowCanvas, void 0 === i.shadowCanvas && (i.shadowCanvas = document.createElement("canvas"), i.shadowCTX = i.shadowCanvas.getContext("2d"), i.shadowCanvas.style.background = "transparent", i.shadowCanvas.style.opacity = 1), !0 === i.replaceShadowCanvas || !0 === i.loadobj.bgColor || !0 === i.usebgColor || void 0 !== i.panzoom || null != i.isHTML5 && 1 != i.poster || i.usepattern ? (o = {
                width: i.mDIM.width,
                height: i.mDIM.height,
                x: 0,
                y: 0
            }, i.usepattern && void 0 !== i.loadobj && void 0 !== i.loadobj.img ? t.getCanvasPattern(e, i, {
                ratio: i.loadobj.height / i.loadobj.width
            }) : (i.loadobj.bgColor || i.usebgColor) && (i.shadowCanvas.width = i.mDIM.width, i.shadowCanvas.height = i.mDIM.height, t.getCanvasGradients(e, i))) : (o = l(i.mDIM, i, {
                width: i.mDIM.width,
                height: i.mDIM.height,
                x: 0,
                y: 0,
                contw: i.loadobj.width,
                conth: i.loadobj.height
            }), i.shadowCanvas.width = i.mDIM.width, i.shadowCanvas.height = i.mDIM.height, void 0 !== i.loadobj && void 0 !== i.loadobj.img && i.shadowCTX.drawImage(i.loadobj.img, o.x, o.y, o.width, o.height), o = {
                width: i.mDIM.width,
                height: i.mDIM.height,
                x: 0,
                y: 0
            }), o
        },
        getCanvasPattern: function(e, i, a) {
            void 0 === i.patternImageCanvas && (i.patternImageCanvas = document.createElement("canvas"), i.patternImageCTX = i.patternImageCanvas.getContext("2d"));
            var r = i.bgfit.split(" ");
            1 === r.length && (r[1] = r[0]), a.width = "auto" === r[0] ? i.loadobj.width : i.loadobj.width * (parseInt(r[0], 0) / 100), a.height = "auto" === r[1] ? i.loadobj.height : a.width * a.ratio, i.DPR = _R_is_Editor ? Math.min(window.devicePixelRatio, 2) : t[e].DPR, a.width = a.width * i.DPR, a.height = a.height * i.DPR, i.patternImageCanvas.width = a.width, i.patternImageCanvas.height = a.height, i.patternImageCTX.drawImage(i.loadobj.img, 0, 0, a.width, a.height), i.shadowCanvas.width = i.mDIM.width, i.shadowCanvas.height = i.mDIM.height, i.pattern = i.shadowCTX.createPattern(i.patternImageCanvas, i.bgrepeat), i.shadowCTX.fillStyle = i.pattern, i.shadowShifts = {
                h: i.bgposition.split(" ")[0],
                v: i.bgposition.split(" ")[1]
            }, i.shadowShifts.hperc = t.isNumeric(parseInt(i.shadowShifts.h)) ? parseInt(i.shadowShifts.h) / 100 * i.mDIM.width : 0, i.shadowShifts.vperc = t.isNumeric(parseInt(i.shadowShifts.v)) ? parseInt(i.shadowShifts.v) / 100 * i.mDIM.height : 0, i.shadowShifts.x = "left" === i.shadowShifts.h ? 0 : "center" === i.shadowShifts.h || "50%" == i.shadowShifts.h ? "repeat" == i.bgrepeat || "repeat-x" == i.bgrepeat ? i.mDIM.width / 2 - a.width / 2 - Math.ceil(i.mDIM.width / 2 / a.width) * a.width : i.mDIM.width / 2 - a.width / 2 : "right" === i.shadowShifts.h ? "repeat" == i.bgrepeat || "repeat-x" == i.bgrepeat ? -(a.width - i.mDIM.width % a.width) : i.mDIM.width - a.width : "repeat" == i.bgrepeat || "repeat-x" == i.bgrepeat ? -(a.width - i.shadowShifts.hperc % a.width) : i.shadowShifts.hperc, i.shadowShifts.y = "top" === i.shadowShifts.v ? 0 : "center" === i.shadowShifts.v || "50%" == i.shadowShifts.v ? "repeat" == i.bgrepeat || "repeat-y" == i.bgrepeat ? i.mDIM.height / 2 - a.height / 2 - Math.ceil(i.mDIM.height / 2 / a.height) * a.height : i.mDIM.height / 2 - a.height / 2 : "bottom" === i.shadowShifts.v ? "repeat" == i.bgrepeat || "repeat-y" == i.bgrepeat ? -(a.height - i.mDIM.height % a.height) : i.mDIM.height - a.height : "repeat" == i.bgrepeat || "repeat-y" == i.bgrepeat ? -(a.height - i.shadowShifts.vperc % a.height) : i.shadowShifts.vperc, i.shadowCTX.translate(i.shadowShifts.x, i.shadowShifts.y), i.shadowCTX.fillRect(0, 0, i.mDIM.width - i.shadowShifts.x, i.mDIM.height - i.shadowShifts.y)
        },
        getCanvasGradients: function(e, i) {
            if (i.bgcolor.indexOf("gradient") >= 0) {
                i.gradient = null == i.gradient || _R_is_Editor ? t.getGradients(i.bgcolor) : i.gradient, i.shadowGrd = "radialGradient" === i.gradient.Type ? i.shadowCTX.createRadialGradient(i.mDIM.width / 2, i.mDIM.height / 2, 0, i.mDIM.width / 2, i.mDIM.height / 2, Math.max(i.mDIM.width / 2, i.mDIM.height / 2)) : t.calcLinearGradient(i.shadowCTX, i.shadowCanvas.width, i.shadowCanvas.height, i.gradient.deg);
                for (var a = 0; a < i.gradient.stops.length; a += 2) i.shadowGrd.addColorStop(i.gradient.stops[a + 1], i.gradient.stops[a]);
                i.shadowCTX.clearRect(0, 0, i.mDIM.width, i.mDIM.height), i.shadowCTX.fillStyle = i.shadowGrd, i.shadowCTX.fillRect(0, 0, i.mDIM.width, i.mDIM.height)
            } else i.shadowCTX.fillStyle = i.bgcolor, i.shadowCTX.fillRect(0, 0, i.mDIM.width, i.mDIM.height)
        },
        cNS: function(e) {
            var t;
            for (t in e.n = document.createElementNS("http://www.w3.org/2000/svg", e.n), e.v) e.n.setAttributeNS(null, t.replace(/[A-Z]/g, function(e, t, i, a) {
                return "-" + e.toLowerCase()
            }), e.v[t]);
            for (t in void 0 !== e.c && e.n.setAttribute("class", e.c), void 0 !== e.id && (e.n.id = e.id), void 0 !== e.t && (e.n.textContent = e.t), e.s) e.s.hasOwnProperty(t) && (e.n.style[t] = e.s[t]);
            return e.n
        },
        rgbToHex: function(e) {
            return "#" + u(e[0]) + u(e[1]) + u(e[2])
        },
        getSVGGradient: function(e) {
            if (void 0 === e) return e;
            if (_R_is_Editor && (e = RSColor.convert(e)), -1 == e.indexOf("gradient")) return e;
            var i = t.getGradients(e);
            void 0 === t.gradSVG && (t.gradSVG = t.cNS({
                n: "svg",
                id: "tp_svg_gradients",
                s: {
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    pointerEvents: "none"
                }
            }), t.gradSVG.setAttribute("viewBox", "0 0 1 1"), t.gradSVG.setAttribute("preserveAspectRatio", "none"), document.body.appendChild(t.gradSVG), t.svgGradients = []);
            for (var a = !1, r = JSON.stringify(e), o = 0; o < t.svgGradients.length; o++) a || t.svgGradients[o].src == r && (a = !0, e = t.svgGradients[o].url);
            if (!a) {
                var s, n, d, l = "radialGradient" === i.type ? 0 : i.deg * (Math.PI / 180),
                    c = "radialGradient" === i.type ? 0 : {
                        x1: Math.round(50 + 50 * Math.sin(l)) + "%",
                        y1: Math.round(50 + 50 * Math.cos(l)) + "%",
                        x2: Math.round(50 + 50 * Math.sin(l + Math.PI)) + "%",
                        y2: Math.round(50 + 50 * Math.cos(l + Math.PI)) + "%"
                    };
                d = t.cNS({
                    n: i.type,
                    id: "tp_svg_gradient_" + t.svgGradients.length,
                    v: "radialGradient" === i.type ? void 0 : {
                        gradientUnits: "userSpaceOnUse",
                        x1: c.x1,
                        y1: c.y1,
                        x2: c.x2,
                        y2: c.y2
                    }
                });
                for (var p = 0; p <= i.stops.length / 2; p += 2) n = tpGS.gsap.utils.splitColor(i.stops[p]), s = t.cNS({
                    n: "stop",
                    v: {
                        offset: 100 * i.stops[p + 1] + "%",
                        stopColor: t.rgbToHex(n),
                        stopOpacity: n.length > 3 ? n[3] : 1
                    }
                }), d.appendChild(s);
                t.gradSVG.appendChild(d), e = "url(#tp_svg_gradient_" + t.svgGradients.length + ")", t.svgGradients.push({
                    url: e,
                    src: r,
                    g: d
                })
            }
            return e
        },
        getGradients: function(e) {
            return e.indexOf("radial-gradient") >= 0 ? {
                stops: t.getGradientColorStopPoints(e.split("radial-gradient(ellipse at center, ")[1]),
                type: "radialGradient",
                deg: 0
            } : -1 !== e.indexOf("gradient") ? t.getLinearGradientStops(e) : e
        },
        getLinearGradientStops: function(e) {
            var t = e.split("linear-gradient(")[1];
            _R_is_Editor && (t = (t = t.split(", ").join(",")).split(",rgba").join(", rgba"));
            var i = t.split("deg, ");
            for (var a in t = (i.length > 1 ? i[1] : i[0]).split(" "), i = i.length > 1 ? i[0] : 180, t) t.hasOwnProperty(a) && t[a].indexOf("%") >= 0 && (t[a] = "" + Math.round(100 * parseFloat(t[a].split("%,")[0].split("%)")[0])) / 1e4);
            return {
                stops: t,
                deg: i,
                type: "linearGradient"
            }
        },
        getGradientColorStopPoints: function(e) {
            var t = /rgb([\s\S]*?)%/g,
                i = [],
                a = [];
            do {
                (o = t.exec(e)) && i.push(o[0])
            } while (o);
            for (var r = 0; r < i.length; r++) {
                var o = i[r],
                    s = (e = /rgb([\s\S]*?)\)/.exec(o), /\)([\s\S]*?)%/.exec(o));
                e[0] && (e = e[0]), s[1] && (s = s[1]), a.push(e), a.push(parseFloat(s) / 100)
            }
            return a
        },
        calcLinearGradient: function(e, t, i, a) {
            a = a * Math.PI / 180 + Math.PI / 2;
            for (var r, o, s, n, d = t / 2, l = i / 2, c = Math.sqrt(d * d + l * l), p = {
                    x1: Math.cos(a) * c + d,
                    y1: Math.sin(a) * c + l,
                    x2: d,
                    y2: l
                }, g = [v({
                    x: 0,
                    y: 0
                }, a), v({
                    x: t,
                    y: 0
                }, a), v({
                    x: t,
                    y: i
                }, a), v({
                    x: 0,
                    y: i
                }, a)], u = [], h = 0; h < g.length; h++) u.push(f(g[h], p));
            if (m(d, l, u[0].x, u[0].y) > m(d, l, u[1].x, u[1].y) ? (r = u[0].x, o = u[0].y) : (r = u[1].x, o = u[1].y), m(d, l, u[2].x, u[2].y) > m(d, l, u[3].x, u[3].y) ? (s = u[2].x, n = u[2].y) : (s = u[3].x, n = u[3].y), Math.round(100 * Math.atan2(l - o, d - r)) / 100 === Math.round(a % (2 * Math.PI) * 100) / 100) {
                var y = r,
                    b = o;
                r = s, o = n, s = y, n = b
            }
            return e.createLinearGradient(Math.round(r), Math.round(o), Math.round(s), Math.round(n))
        },
        transitions: {
            filter: {
                update: function(e, t, i) {
                    if (void 0 !== e && void 0 !== e.tl) {
                        var a = void 0 !== i || void 0 !== e.tl.blur ? " blur(" + (void 0 !== i ? i : 0 + e.tl.blur !== void 0 ? e.tl.blur : 0) + "px)" : "";
                        t.canvas.style.filter = void 0 === e.tl.filter ? "" + a : e.tl.filter + a
                    }
                },
                extendTimeLine: function(e, t, i) {
                    if (null != t) {
                        var a = void 0 !== t.g && "0%" !== t.g && 0 !== t.g ? ("" === a ? "" : " ") + "grayscale(_g_%)" : "";
                        a += void 0 !== t.h && "100%" !== t.h && 100 !== t.h ? ("" === a ? "" : " ") + "brightness(_h_%)" : "", a += void 0 !== t.s && "0px" !== t.s && 0 !== t.s ? ("" === a ? "" : " ") + "sepia(_s_%)" : "", a += void 0 !== t.c && 100 !== t.c ? ("" === a ? "" : " ") + "contrast(_c_%)" : "", "" !== (a += void 0 !== t.i && 0 !== t.i ? ("" === a ? "" : " ") + "invert(_i_%)" : "") && (t.tl = {
                            filter: a.replace("_g_", parseFloat(t.g)).replace("_h_", parseFloat(t.h)).replace("_s_", parseFloat(t.s)).replace("_c_", parseFloat(t.c)).replace("_i_", parseFloat(t.i))
                        }), void 0 !== t.b && "0px" !== t.b && 0 !== t.b && (void 0 === t.tl ? t.tl = {
                            blur: parseFloat(t.b)
                        } : t.tl.blur = parseFloat(t.b)), void 0 !== t.tl && (e.add(tpGS.gsap.to(t.tl, t.ms / t.sec, void 0 === t.tl.filter ? {
                            blur: 0
                        } : void 0 === t.tl.blur ? {
                            filter: a.replace("_g_", "0").replace("_h_", "100").replace("_s_", "0").replace("_c_", 100).replace("_i_", 0),
                            ease: t.e
                        } : {
                            blur: 0,
                            filter: a.replace("_g_", "0").replace("_h_", "100").replace("_s_", "0").replace("_c_", 100).replace("_i_", 0),
                            ease: t.e
                        }), 0), i.canvasFilter = !0)
                    }
                }
            },
            slidingoverlay: {
                getBasic: function() {
                    return t.getBasic({
                        attr: ["x", "y"],
                        in: {
                            m: !0,
                            o: -1,
                            _xy: 20,
                            _gxys: 10,
                            _gxye: -10,
                            zIndex: 20,
                            e: "power1.inOut"
                        },
                        out: {
                            m: !0,
                            reversed: !1,
                            _xy: -100,
                            o: 0,
                            zIndex: 10,
                            e: "power1.inOut"
                        }
                    })
                },
                updateAnim: function(e, t, i) {
                    var a = void 0 !== t.in.x && 0 !== t.in.x && "0%" !== t.in.x ? "x" : "y";
                    t.in["g" + a + "s"] = n(t.in[a], t.in._gxys, i, 1) + "%", t.in["g" + a + "e"] = n(t.in[a], t.in._gxye, i, 1) + "%", t.out[a] = n(t.in[a], t.out._xy, i, 1) + "%", t.in[a] = n(t.in[a], t.in._xy, i, 1) + "%";
                    var r = parseInt(t.in[a]) >= 0;
                    return t.in.d = "x" === a ? r ? "left" : "right" : r ? "up" : "down", t
                },
                beforeDraw: function(e, t, i, a) {
                    void 0 !== i.d && (i._dxs = "right" === i.d ? 0 + i.mw : "left" === i.d ? 0 - i.mw : 0, i._dys = "down" === i.d ? 0 + i.mh : "up" === i.d ? 0 - i.mh : 0, i._xs = "left" === i.d ? 0 - i.mw : 0, i._ys = "up" === i.d ? 0 - i.mh : 0, i._xe = "right" === i.d ? a.SLOT.OW + i.mw : "left" === i.d ? a.SLOT.OW - i.mw : a.SLOT.OW, i._ye = "down" === i.d ? a.SLOT.OH + i.mh : "up" === i.d ? a.SLOT.OH - i.mh : a.SLOT.OH, t.beginPath(), t.rect("left" === i.d ? Math.max(0, i._xs) : "right" === i.d ? Math.min(0, i._xs) : 0, "up" === i.d ? Math.max(0, i._ys) : "down" === i.d ? Math.min(0, i._ys) : 0, "left" === i.d ? Math.max(a.SLOT.OW, i._xe) : "right" === i.d ? Math.min(a.SLOT.OW, i._xe) : i._xe, "up" === i.d ? Math.max(a.SLOT.OH, i._ye) : "down" === i.d ? Math.min(a.SLOT.OH, i._ye) : i._ye), t.clip())
                },
                afterDraw: function(e, t, i, a, r) {
                    void 0 !== i.d && (t.save(), t.beginPath(), t.rect(Math.max(0, i._dxs), Math.max(0, i._dys), i._xe, i._ye), t.clip(), t.save(), t.transform(r.csx, r.ssx, r.ssy, r.csy, .5 * a.SLOT.OW + i.x + i.sgx, .5 * a.SLOT.OH + i.y + i.sgy), t.drawImage(void 0 !== a.shadowCanvas ? a.shadowCanvas : a.loadobj.img, 0, 0, a.SLOT.OW, a.SLOT.OH, i.sgx - a.SLOT.OW / 2, i.sgy - a.SLOT.OH / 2, a.SLOT.OW, a.SLOT.OH), t.restore(), t.fillStyle = "rgba(0,0,0,0.6)", t.fillRect(i.gx, i.gy, a.SLOT.OW, a.SLOT.OH), t.restore())
                },
                extendTimeLine: function(e, t, i, a, r, o) {
                    "in" !== r.direction || void 0 === a.gxe && void 0 === a.gye || (jQuery.extend(!0, i[0], {
                        d: a.d,
                        gx: void 0 === a.gxs ? 0 : 2 * n(a.gxs, o.width, r.sdir, 0),
                        gy: void 0 === a.gys ? 0 : 2 * n(a.gys, o.height, r.sdir, 0),
                        sgx: void 0 === a.gxs ? 0 : n(a.gxs, o.width, r.sdir, 0),
                        sgy: void 0 === a.gys ? 0 : n(a.gys, o.height, r.sdir, 0),
                        mw: 0 - o.width,
                        mh: 0 - o.height
                    }), t.add(tpGS.gsap.to(i, a.ms / a.sec, {
                        gx: void 0 === a.gxe ? 0 : 2 * n(a.gxe, o.width, r.sdir, 0),
                        gy: void 0 === a.gye ? 0 : 2 * n(a.gye, o.height, r.sdir, 0),
                        sgx: void 0 === a.gxe ? 0 : 2 * n(a.gxe, o.width, r.sdir, 0),
                        sgy: void 0 === a.gye ? 0 : 2 * n(a.gye, o.height, r.sdir, 0),
                        mw: o.width,
                        mh: o.height,
                        ease: a.e
                    }), 0))
                }
            },
            motionFilter: {
                init: function(e, t) {
                    return void 0 !== t && parseFloat(t) > 0 ? (t = parseFloat(t), e.fmExists = !0, e.fmShadow = void 0 === e.fmShadow ? document.createElement("canvas") : e.fmShadow, e.fmCtx = e.fmShadow.getContext("2d"), e.fmShadow.width = e.ctx.canvas.width, e.fmShadow.height = e.ctx.canvas.height, e.fmCtx.globalAlpha = tpGS.gsap.utils.mapRange(100, 0, 40, 0, t) / 100, e.fmCtx.clearRect(0, 0, e.ctx.canvas.width, e.ctx.canvas.height)) : e.fmExists = !1, t
                },
                render: function(e, t) {
                    "partial" === t && (e.fmCtx.globalCompositeOperation = "source-over"), e.fmCtx.drawImage(e.canvas, 0, 0, e.canvas.width, e.canvas.height), e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height), e.ctx.drawImage(e.fmCtx.canvas, 0, 0, e.canvas.width, e.canvas.height), "partial" === t && (e.fmCtx.globalCompositeOperation = "source-atop"), "partial" !== t && "full" !== t || (e.fmCtx.fillStyle = "rgba(255, 255, 255, 0.1)", e.fmCtx.fillRect(0, 0, e.canvas.width, e.canvas.height))
                },
                clearFull: function(e, t) {
                    e.fmExists && void 0 !== e.fmCtx && (e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fmCtx.clearRect(0, 0, e.canvas.width, e.canvas.height), void 0 !== t && t.render(t.time(), !0, !0))
                },
                complete: function(e) {
                    e.fmShadow && e.fmShadow.remove()
                }
            },
            d3: {
                ticker: function(e, t, i) {
                    if (void 0 !== e.helper) {
                        var a = e.smi * ("in" === i ? e.helper.oo : e.helper.o),
                            r = e.sma * ("in" === i ? e.helper.oo : e.helper.o);
                        if (e.gradient = "vertical" === e.d ? "in" === i ? t.ctx.createLinearGradient(0, 0, 0, t.canvas.height) : t.ctx.createLinearGradient(0, t.canvas.height, 0, 0) : "in" === i ? t.ctx.createLinearGradient(0, 0, t.canvas.width, 0) : t.ctx.createLinearGradient(t.canvas.width, 0, 0, 0), e.gradient.addColorStop(0, "rgba(" + e.sc + "," + a + ")"), e.gradient.addColorStop(e.sl, "rgba(" + e.sc + "," + r + ")"), t.ctx.fillStyle = e.gradient, t.ctx.fillRect(0, 0, t.canvas.width, t.canvas.height), void 0 !== t.cube && t.cube.ctx) {
                            var o = void 0 !== e.roomhelper && !1 !== e.roomhelper && (90 - e.roomhelper.r) / 90;
                            a = !1 !== o ? o : e.smi * e.helper.o, r = !1 !== o ? o : e.sma * e.helper.o, t.cube.ctx.clearRect(0, 0, t.cube.ctx.canvas.width, t.cube.ctx.canvas.height), e.gradientW = !1 !== o ? "vertical" === e.d ? e.t < 0 && 1 === e.sdir || e.t > 0 && -1 === e.sdir ? t.ctx.createRadialGradient(0, t.cube.ctx.canvas.width / 2, 0, 0, 0, 2 * t.cube.ctx.canvas.width) : t.ctx.createRadialGradient(t.cube.ctx.canvas.width, 0, 0, 0, 0, 2 * t.cube.ctx.canvas.width) : e.t > 0 && 1 === e.sdir || e.t < 0 && -1 === e.sdir ? t.ctx.createRadialGradient(t.cube.ctx.canvas.width / 2, t.cube.ctx.canvas.height, 0, t.cube.ctx.canvas.width / 2, t.cube.ctx.canvas.height, t.cube.ctx.canvas.width) : t.ctx.createRadialGradient(t.cube.ctx.canvas.width / 2, .2 * t.cube.ctx.canvas.height, 0, t.cube.ctx.canvas.width / 2, .2 * t.cube.ctx.canvas.height, t.cube.ctx.canvas.width) : "vertical" === e.d ? t.ctx.createLinearGradient(0, 0, 0, t.cube.ctx.canvas.height) : t.ctx.createLinearGradient(0, 0, t.cube.ctx.canvas.width, 0), e.gradientW.addColorStop(0, "rgba(" + e.sc + "," + (!1 !== o ? "a" === e.DIR ? r : 0 : "a" === e.DIR ? 0 : r) + ")"), e.gradientW.addColorStop(1, "rgba(" + e.sc + "," + (!1 !== o ? "a" === e.DIR ? 0 : r : "a" === e.DIR ? r : 0) + ")"), t.cube.ctx.fillStyle = e.gradientW, t.cube.ctx.fillRect(0, 0, t.cube.ctx.canvas.width, t.cube.ctx.canvas.height)
                        }
                    }
                },
                setWall: function(e, t, i, a, r, o) {
                    return e.TL = tpGS.gsap.timeline(), e.TL.add(tpGS.gsap.to(e.c, .2, {
                        display: "block"
                    }), 0), "rotationX" === i ? (e.ctx.canvas.width = a.w, e.ctx.canvas.height = a.w, e.TL.add(tpGS.gsap.set(e.w, {
                        backgroundColor: r,
                        width: a.w,
                        height: a.w,
                        transformOrigin: "50% 50% -" + a.w / 2 + "px",
                        x: 0,
                        y: t > 0 ? -(a.w - a.h) : 0,
                        rotationX: t > 0 ? -90 : 90,
                        rotationY: 0
                    }), 0)) : (e.ctx.canvas.width = o ? a.w : a.h, e.ctx.canvas.height = a.h, e.TL.add(tpGS.gsap.set(e.w, {
                        backgroundColor: r,
                        width: o ? a.w : a.h,
                        height: a.h,
                        transformOrigin: "50% 50% -" + (o ? a.w : a.h) / 2 + "px",
                        x: t < 0 ? a.w - a.h : 0,
                        y: 0,
                        rotationX: 0,
                        rotationY: t > 0 ? -90 : 90
                    }), 0)), e.TL
                },
                buildCube: function(e) {
                    e.cube = {
                        c: document.createElement("div"),
                        w: document.createElement("canvas")
                    }, e.cube.ctx = e.cube.w.getContext("2d"), e.cube.c.className = "rs_fake_cube", e.cube.w.className = "rs_fake_cube_wall", tpGS.gsap.set(e.cube.c, {
                        width: e.mDIM.w,
                        height: e.mDIM.h
                    }), tpGS.gsap.set(e.cube.w, {
                        width: e.mDIM.w,
                        height: e.mDIM.h,
                        backgroundColor: "#ccc"
                    }), e.cube.c.appendChild(e.cube.w), e.sbg.appendChild(e.cube.c)
                },
                cubeTL: function(e, i, a, r) {
                    if ("none" !== i.f && void 0 !== i.f) {
                        a.sbg.style.transformStyle = "preserve-3d";
                        var o = tpGS.gsap.timeline(),
                            s = "incube" === i.f ? 1 : -1,
                            n = "incube" === i.f || "cube" === i.f,
                            d = "fly" === i.f ? -30 : 90,
                            l = "turn" !== i.f && !1 !== i.t && (_R_is_Editor || !0 === t[e].firstSlideAnimDone),
                            c = -1 * i.z,
                            p = {},
                            g = {
                                z: l ? 0 : c,
                                ease: "power1.inOut"
                            },
                            u = {
                                ease: i.e
                            },
                            h = [a.canvas],
                            m = n ? "50% 50% " : "20% 20% ",
                            v = "rotationX",
                            f = "rotationY",
                            y = "y",
                            b = "height",
                            w = i.fd;
                        if ("vertical" !== i.d ? (v = "rotationY", f = "rotationX", y = "x", b = "width", i.DIR = 1 === i.sdir ? "b" : "a") : i.DIR = 1 === i.sdir ? "a" : "b", b = "width" === b ? "w" : "height" === b ? "h" : b, "turn" === i.f ? (d = "vertical" === i.d ? -120 : 120, m = "vertical" === i.d ? 1 === i.sdir ? "in" === r ? "0% 0% 0%" : "0% 100% 0%" : "in" === r ? "0% 100% 0%" : "0% 0% 0%" : 1 === i.sdir ? "in" === r ? "0% 0% 0%" : "100% 0% 0%" : "in" === r ? "100% 0% 0%" : "0% 0% 0%", g.z = 0, u.ease = "out" === r ? "power3.out" : u.ease, w = "out" === r ? w / 2 : w) : m += s * a.mDIM[b] / 2 + "px", u[v] = 0, u[y] = 0, "in" === r ? p[v] = d * i.sdir : u[v] = -d * i.sdir, "fly" === i.f) {
                            var _ = void 0 === i.fz ? 20 * Math.random() - 10 : parseInt(i.fz);
                            "in" === r ? (p[y] = a.mDIM[b] * (void 0 === i.fdi ? 1.5 : parseFloat(i.fdi)) * i.sdir, p.rotateZ = i.sdir * _, u.rotateZ = 0) : (u[y] = a.mDIM[b] * (void 0 === i.fdo ? 2 : parseFloat(i.fdo)) * i.sdir * -1, u.rotateZ = i.sdir * _ * -1)
                        }
                        if (a.sbg.style.perspective = l ? "2500px" : "1500px", l) {
                            var x = {
                                    z: c * ("fly" === i.f ? 1.5 : 3),
                                    ease: "power1.inOut"
                                },
                                S = {
                                    z: 0,
                                    ease: "power1.inOut"
                                };
                            x[f] = -1 * i.t, S[f] = 0, i.roomhelper = {
                                r: 0
                            }, o.add(tpGS.gsap.set(_R_is_Editor ? RVS.SBGS[RVS.S.slideId].wrap : a.wrap[0], {
                                perspective: 1200,
                                transformStyle: "preserve-3d",
                                transformOrigin: m
                            }), 0), o.add(tpGS.gsap.to(a.sbg, 3 * i.md, x), 0), o.add(tpGS.gsap.to(a.sbg, 3 * i.md, S), w - i.md), o.add(tpGS.gsap.to(i.roomhelper, 3 * i.md, {
                                r: Math.abs(i.t)
                            }), 0), o.add(tpGS.gsap.to(i.roomhelper, 3 * i.md, {
                                r: 0
                            }), w - i.md), "in" === r && 1 !== s && n && (void 0 === a.cube && t.transitions.d3.buildCube(a), o.add(t.transitions.d3.setWall(a.cube, x[f], f, a.mDIM, i.c), 0), h.push(a.cube.c))
                        } else i.roomhelper = !1, o.add(tpGS.gsap.set(_R_is_Editor ? RVS.SBGS[RVS.S.slideId].wrap : a.wrap[0], {
                            perspective: "none",
                            transformStyle: "none",
                            transformOrigin: "50% 50%"
                        }), 0), !_R_is_Editor && !0 !== t[e].firstSlideAnimDone && n && (void 0 === a.cube && t.transitions.d3.buildCube(a), o.add(t.transitions.d3.setWall(a.cube, p[v], v, a.mDIM, i.c, !0), 0), o.add(tpGS.gsap.fromTo(a.cube.w, 4 * i.md, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }), 0), h.push(a.cube.c));
                        return i.helper = {
                            o: 0,
                            oo: 1
                        }, o.add(tpGS.gsap.to(i.helper, w, {
                            o: 1,
                            oo: 0,
                            ease: i.e
                        }), i.md + 0), o.add(tpGS.gsap.set(h, jQuery.extend(!0, {}, p, {
                            force3D: !0,
                            transformOrigin: m
                        })), 0), "turn" !== i.f && o.add(tpGS.gsap.to(h, 3 * i.md, g), 0), o.add(tpGS.gsap.to(h, w, u), i.md + 0), "turn" !== i.f && o.add(tpGS.gsap.to(h, 3 * i.md, {
                            z: 0,
                            ease: "power1.inOut"
                        }), w - i.md), "out" === r && 1 !== s && o.add(tpGS.gsap.to(h, 2 * i.md, {
                            opacity: 0
                        }), i.dur - 2 * i.md), o
                    }
                }
            }
        },
        animatedCanvasUpdate: function(e, i) {
            i.cDIMS = t.getBGCanvasDetails(e, i), i.canvas.style.backgroundColor = "transparent", i.canvas.style.opacity = 1, i.canvas.width !== i.mDIM.width && (i.canvas.width = i.mDIM.width), i.canvas.height !== i.mDIM.height && (i.canvas.height = i.mDIM.height), _R_is_Editor || !0 !== t[e].clearModalBG || (i.ctx.clearRect(0, 0, i.canvas.width, i.canvas.height), t[e].clearModalBG = !1, i.sbg.parentNode.style.opacity = 1), i.SLOT = jQuery.extend(!0, {
                s: {},
                c: {}
            }, r(e, i.col, i.row, i.mDIM, "OW", "OH")), i.SLOT.DX = 0 - i.SLOT.OW / 2, i.SLOT.DY = 0 - i.SLOT.OH / 2, i.row = Math.ceil(i.mDIM.height / i.SLOT.OH) || 1
        },
        animateCore: function(e, i, a, r) {
            var o, s, l, c, p = i.canvas,
                g = i.ctx,
                u = 0;
            i.col = a.col, i.row = a.row, t.animatedCanvasUpdate(e, i), a.row = i.row, i.animateDirection = r.direction, r.delay = void 0 === r.delay ? 0 : r.delay, l = a.col * a.row, c = Array(l), void 0 === i.help_canvas && "out" === r.direction && void 0 !== r.bgColor && (i.help_canvas = document.createElement("canvas"), i.help_ctx = i.help_canvas.getContext("2d")), "out" === r.direction && void 0 !== r.bgColor && (i.help_canvas.width = i.mDIM.width, i.help_canvas.height = i.mDIM.height, i.help_ctx.fillStyle = r.bgColor, i.help_ctx.fillRect(0, 0, i.mDIM.width, i.mDIM.height)), a.mo = t.transitions.motionFilter.init(i, a.mo), a.dur = a.ms / a.sec, void 0 !== r.d3 && (r.d3.dur = a.dur, r.d3.fd = .7 * a.dur, r.d3.md = .15 * a.dur, r.d3.sdir = r.sdir), i.SLOT.c = {
                ws: 0,
                hs: 0,
                wd: 0,
                hd: 0
            }, a.mo > 0 && _R_is_Editor && g.clearRect(0, 0, p.width, p.height);
            var h = tpGS.gsap.timeline({
                onUpdate: function() {
                    if (u = 0, a.mo > 0 ? t.transitions.motionFilter.render(i, a.moo) : g.clearRect(0, 0, p.width, p.height), i.help_canvas && "out" === r.direction && g.drawImage(i.help_canvas, 0, 0), (r.filter && r.filter.u || !_R_is_Editor) && t.transitions.filter.update(r.filter, g, i.canvasFilterBlur), _R_is_Editor && 0 !== a.zIndex && void 0 !== a.zIndex && tpGS.gsap.set(r.slide, {
                            zIndex: a.zIndex
                        }), void 0 !== i.shadowCanvas)
                        for (o = 0; o < a.col; o++)
                            for (i.SLOT.SX = i.SLOT.OW * o, i.SLOT.tw = i.SLOT.OW * (o + .5), i.SLOT.c.wd = i.mDIM.width - (i.SLOT.tw + i.SLOT.DX + i.SLOT.OW), i.SLOT.c.wd = i.SLOT.c.wd < 0 ? i.SLOT.c.wd : 0, i.SLOT.DW = i.SLOT.SW = i.SLOT.OW + i.SLOT.c.wd, s = 0; s < a.row; s++) {
                                g.save();
                                let n = -Math.PI / 180 * c[u].r,
                                    d = 0 !== a.r ? Math.cos(n) * c[u].sx : c[u].sx,
                                    l = 0 !== a.r ? Math.cos(n) * c[u].sy : c[u].sy,
                                    p = 0 !== a.r ? Math.sin(n) * c[u].sx : 0,
                                    h = 0 !== a.r ? Math.sin(n) * -c[u].sy : 0;
                                i.SLOT.SY = i.SLOT.OH * s, i.SLOT.th = i.SLOT.OH * (s + .5), t.transitions[r.effect] && t.transitions[r.effect].beforeDraw && t.transitions[r.effect].beforeDraw(e, g, c[u], i), a.m && (g.beginPath(), g.rect(i.SLOT.OW * o, i.SLOT.OH * s, i.SLOT.OW, i.SLOT.OH), g.clip()), g.transform(d, p, h, l, i.SLOT.tw + c[u].x, i.SLOT.th + c[u].y), g.globalAlpha = Math.max(0, c[u].o), i.SLOT.c.hd = i.mDIM.height - (i.SLOT.th + i.SLOT.DY + i.SLOT.OH), i.SLOT.c.hd = i.SLOT.c.hd < 0 ? i.SLOT.c.hd : 0, i.SLOT.DH = i.SLOT.SH = i.SLOT.OH + i.SLOT.c.hd, i.SLOT.SW > 1 && i.SLOT.SH > 1 && g.drawImage(i.shadowCanvas, i.SLOT.SX, i.SLOT.SY, i.SLOT.SW, i.SLOT.SH, i.SLOT.DX, i.SLOT.DY, i.SLOT.DW, i.SLOT.DH), g.restore(), t.transitions[r.effect] && t.transitions[r.effect].afterDraw && t.transitions[r.effect].afterDraw(e, g, c[u], i, {
                                    csx: d,
                                    csy: l,
                                    ssx: p,
                                    ssy: h
                                }), u++
                            }
                    void 0 !== r.d3 && r.d3.su && t.transitions.d3.ticker(r.d3, i, r.direction), i.currentState = "animating"
                },
                onComplete: function() {
                    void 0 !== i.bgvid && i.bgvid.length > 0 && "out" === r.direction && (i.drawVideoCanvasImagesRecall = !1, t.stopVideo(i.bgvid, e), i.bgvid[0].style.display = "none", i.bgvid[0].style.zIndex = 0), "in" === r.direction && (t.transitions.motionFilter.complete(i), g.canvas.style.filter = "none", void 0 !== r.BG && r.BG.ctx.clearRect(0, 0, p.width, p.height), tpGS.gsap.set(r.slide, {
                        zIndex: 20
                    }), delete i.animateDirection, i.bgvid.length > 0 && (i.isHTML5 || (t.resetVideo(i.bgvid, e), t.playVideo(i.bgvid, e, !0)), tpGS.gsap.to(i.bgvid[0], .001, {
                        zIndex: 30,
                        display: "block",
                        opacity: 1
                    }))), "out" === r.direction ? (tpGS.gsap.set(r.slide, {
                        zIndex: 10
                    }), tpGS.gsap.set(i.canvas, {
                        rotationX: 0,
                        rotationY: 0,
                        rotationZ: 0,
                        x: 0,
                        y: 0,
                        z: 0,
                        opacity: 1
                    }), i.currentState = void 0) : i.currentState = "idle", void 0 !== i.cube && (i.cube.c.style.display = "none")
                }
            });
            if (a.col * a.row < 2 && (a.f = "start"), 0 !== a.zIndex && void 0 !== a.zIndex && h.add(tpGS.gsap.set(r.slide, {
                    zIndex: parseInt(a.zIndex, 0)
                }), 0), a.m = "false" != a.m && !1 !== a.m, "in" === r.direction) {
                for (o = 0; o < l; o++) c[o] = {
                    x: n(a.x, a.m ? i.SLOT.OW : i.mDIM.width, r.sdir, o),
                    y: n(a.y, a.m ? i.SLOT.OH : i.mDIM.height, r.sdir, o),
                    o: d(a.o, o, r.sdir),
                    sx: d(a.sx, o, r.sdir),
                    sy: d(a.sy, o, r.sdir),
                    r: 0 !== a.r ? d(a.r, o, r.sdir) : 0
                };
                h.add(tpGS.gsap.to(c, a.dur, {
                    o: 1,
                    sx: 1,
                    sy: 1,
                    r: 0,
                    x: 0,
                    y: 0,
                    ease: a.e,
                    stagger: {
                        amount: "nodelay" === a.f ? 0 : a.ms / a.stasec,
                        grid: [a.col, a.row],
                        from: "nodelay" === a.f ? "start" : a.f
                    }
                }), r.delay), void 0 !== r.d3 && h.add(t.transitions.d3.cubeTL(e, r.d3, i, "in"), 0), t.transitions.filter.extendTimeLine(h, r.filter, i)
            } else {
                for (o = 0; o < l; o++) c[o] = {
                    x: 0,
                    y: 0,
                    o: 1,
                    sx: 1,
                    sy: 1,
                    r: 0
                };
                h.add(tpGS.gsap.to(c, a.dur, {
                    o: function(e) {
                        return d(a.o, e, r.sdir)
                    },
                    sx: function(e) {
                        return d(a.sx, e, r.sdir)
                    },
                    sy: function(e) {
                        return d(a.sy, e, r.sdir)
                    },
                    r: 0 !== a.r && void 0 !== a.r ? function(e) {
                        return d(a.r, e, r.sdir)
                    } : 0,
                    x: function(e) {
                        return n(a.x, a.m ? i.SLOT.OW : i.mDIM.width, r.sdir, e) * (a.reversed ? -1 : 1)
                    },
                    y: function(e) {
                        return n(a.y, a.m ? i.SLOT.OH : i.mDIM.height, r.sdir, e) * (a.reversed ? -1 : 1)
                    },
                    ease: a.e,
                    stagger: {
                        amount: "nodelay" === a.f ? 0 : a.ms / a.stasec,
                        grid: [a.col, a.row],
                        from: "nodelay" === a.f ? "start" : a.f
                    }
                }), r.delay + (void 0 !== a.outdelay ? a.outdelay : 0)), void 0 !== r.d3 && h.add(t.transitions.d3.cubeTL(e, r.d3, i, "out"), 0)
            }
            t.transitions[r.effect] && t.transitions[r.effect].extendTimeLine && t.transitions[r.effect].extendTimeLine(e, h, c, a, r, i.mDIM), _R_is_Editor ? RVS.TL[RVS.S.slideId].slide.add(h, 0) : t[e].mtl.add(h, r.delay)
        }
    });
    var a = function(e, i) {
            return void 0 !== i && t.isNumeric(i) ? parseFloat(i, 0) : null == i || "default" === i || "d" === i ? e : i
        },
        r = function(e, t, i, a, r, o) {
            var s = {};
            return s[r] = Math.ceil(a.width / t), s[o] = (_R_is_Editor, Math.ceil(a.height / i)), s
        },
        o = function(e) {
            return null == e || 0 === e || NaN === e ? 1 : e
        },
        s = function(e, r) {
            _R_is_Editor || (t[e].duringslidechange = !0);
            var s, n = _R_is_Editor ? -1 : "arrow" == t[e].sc_indicator ? void 0 === t[e].sc_indicator_dir ? t[e].sdir : t[e].sc_indicator_dir : t[e].sdir,
                d = !!_R_is_Editor || void 0 !== t[e].pr_next_bg && t[e].pr_next_bg.length > 0 && void 0 !== t[e].pr_next_bg[0],
                l = !!_R_is_Editor || void 0 !== t[e].pr_active_bg && t[e].pr_active_bg.length > 0 && void 0 !== t[e].pr_active_bg[0],
                p = _R_is_Editor ? RVS.SBGS[RVS.S.slideId].n : d ? t[e].sbgs[t[e].pr_next_bg[0].dataset.key] : void 0,
                g = _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c : l ? t[e].sbgs[t[e].pr_active_bg[0].dataset.key] : void 0;
            n = 1 === n ? -1 : 1, s = jQuery.extend(!0, {}, function(e, i, r) {
                var s = void 0 !== t.transitions[i.anim.e] && void 0 !== t.transitions[i.anim.e].getBasic ? t.transitions[i.anim.e].getBasic() : t.getBasic(),
                    n = "";
                s.out = null == s.out ? {} : s.out, s.out.reversed = void 0 === i.out && (void 0 === s.out.reversed || s.out.reversed);
                void 0 !== i.iw && parseInt(i.iw, 0), void 0 !== i.ow && parseInt(i.ow, 0);
                for (var d in s.attr) n = s.attr[d], s.in[n] = a(s.in[n], i.in[n]), s.out[n] = s.out.reversed ? s.in[n] : void 0 === i.out ? s.out[n] : a(s.out[n], i.out[n]);
                return s.filter = void 0 !== i.filter ? jQuery.extend(!0, i.filter, i.filter) : s.filter, t.transitions[i.anim.e] && t.transitions[i.anim.e].updateAnim && (s = t.transitions[i.anim.e].updateAnim(e, s, r)), s.e = i.anim.e, void 0 !== s.in && (s.in.col = "random" === s.in.col ? tpGS.gsap.utils.random(1, 10, 1) : o(s.in.col), s.in.row = "random" === s.in.row ? tpGS.gsap.utils.random(1, 10, 1) : o(s.in.row)), void 0 !== s.out && (s.out.col = "random" === s.out.col ? tpGS.gsap.utils.random(1, 10, 1) : o(s.out.col), s.out.row = "random" === s.out.row ? tpGS.gsap.utils.random(1, 10, 1) : o(s.out.row)), s
            }(e, r, n)), void 0 !== p.random && void 0 !== t.SLTR && void 0 !== g && (delete g.help_canvas, delete g.help_ctx), s.ms = a(void 0, void 0 === r.anim.ms ? 1e3 : r.anim.ms), s.f = a(void 0, r.anim.f), s.p = a(void 0, r.anim.p), s.d = a(void 0, r.anim.d), s.o = r.anim.o, void 0 !== r.d3 && (r.d3.t = void 0 !== r.d3.t && 0 !== r.d3.t && r.d3.t, r.d3.su = "true" == r.d3.su || 1 == r.d3.su, r.d3.su && (r.d3.smi = void 0 === r.d3.smi ? 0 : parseFloat(r.d3.smi), r.d3.sl = void 0 === r.d3.sl ? 1 : parseFloat(r.d3.sl), r.d3.sma = void 0 === r.d3.sma ? .5 : parseFloat(r.d3.sma), r.d3.sc = void 0 === r.d3.sc ? "0,0,0" : tpGS.gsap.utils.splitColor(r.d3.sc).join(",")), s.p = "none", void 0 !== s.in.row && void 0 !== s.in.col && s.in.row * s.in.col > 200 && (s.filter = void 0)), s.in.sec = void 0 === s.in.sec ? 1e3 : s.in.sec, s.in.stasec = void 0 === s.in.stasec ? void 0 === s.d ? 1500 : 100 * s.d : s.in.stasec, s.in.ms = "default" === s.ms || "d" === s.ms ? s.in.ms : "random" === s.ms ? Math.round(1e3 * Math.random() + 300) : null != s.ms ? parseInt(s.ms, 0) : s.in.ms, s.out.ms = s.in.ms, void 0 !== s.filter && (s.filter.ms = s.in.ms, s.filter.sec = s.in.sec, s.filter.e = void 0 === s.filter.e || "default" === s.filter.e ? s.in.e : s.filter.e), s.in.f = void 0 === s.f || "default" === s.f || "d" === s.f ? s.in.f : s.f, s.in.f = "slidebased" === s.in.f ? 1 == n ? "start" : "end" : "oppslidebased" === s.in.f ? 1 === n ? "end" : "start" : s.in.f, s.out.f = s.in.f, s.out = jQuery.extend(!0, {}, s.in, s.out), void 0 !== s.p && "none" !== s.p && (s.in.bg = "dark" === s.p ? "#000" : "light" === s.p ? "#fff" : "transparent", s.out.delay = "none" !== s.p ? function(e, t) {
                return e / 2.5
            } : 0, 1 === s.out.o && 0 === s.out.x && 0 === s.out.y && (s.out.o = 0)), "forceinout" === s.o ? (s.in.zIndex = 20, s.out.zIndex = 10) : "outin" !== s.o && (1 !== s.in.o || 0 !== s.in.x || 0 !== s.in.y || void 0 === r.out || 1 === s.out.o && 0 === s.out.x && 0 === s.out.y) || (s.in.zIndex = 10, s.out.zIndex = 20), p.bgvid.length > 0 && (s.in = h(e, s.in, p, "in")), l && void 0 !== g.bgvid && g.bgvid.length > 0 && (s.out = h(e, s.out, g, "out")), void 0 !== s.out && (s.out.simplify || s.in.simplify) && (s.out = c(s.out)), s.in.simplify && (s.in = c(s.in)), _R_is_Editor || requestAnimationFrame(function() {
                t.generalObserver(i, !0)
            }), s.in.animator = void 0 === s.in.animator ? "animateCore" : s.in.animator, s.out.animator = void 0 === s.out.animator ? "animateCore" : s.out.animator, l && !0 !== s.out.skip && t[s.out.animator](e, g, s.out, {
                effect: s.e,
                slide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].c.sbg : t[e].pr_active_slide,
                direction: "out",
                delay: 0,
                bgColor: s.in.bg,
                sdir: n,
                filter: void 0,
                d3: r.d3
            }), !0 !== s.in.skip && t[s.in.animator](e, p, s.in, {
                effect: s.e,
                slide: _R_is_Editor ? RVS.SBGS[RVS.S.slideId].n.sbg : t[e].pr_next_slide,
                direction: "in",
                delay: l ? "function" == typeof s.out.delay ? s.out.delay(s.in.ms / 1e3, s.out.row * s.out.col) : s.out.delay : s.in.delay,
                BG: g,
                sdir: n,
                filter: s.filter,
                d3: r.d3
            })
        },
        n = function(e, t, i, a) {
            var r = ("" + e).indexOf("%") >= 0;
            return 0 == (e = d(e, a, i)) || void 0 === e ? 0 : r ? t * (parseInt(e) / 100) : parseInt(e)
        },
        d = function(e, i, a, r) {
            if (t.isNumeric(parseFloat(e, 0))) return parseFloat(e, 0);
            var o = ("" + e).split("ran(").length > 1 ? "random" : ("" + e).split("cyc(").length > 1 ? "wrap" : ("" + e).split("(").length > 1 ? "dir" : "unknown",
                s = ("random" === o ? e.slice(4, -1) : "wrap" === o ? e.slice(4, -1) : e.slice(1, -1)).split("|");
            if ("random" === o) return tpGS.gsap.utils.random(parseFloat(s[0]), parseFloat(s.length > 1 ? s[1] : 0 - s[0]));
            if ("wrap" === o) {
                var n = tpGS.gsap.utils.wrap(s, i);
                return ("" + n).split("(").length > 1 ? parseFloat(n.slice(1, -1)) * a + (r ? "%" : "") : n
            }
            return "dir" === o ? parseFloat(s[0]) * a + (r ? "%" : "") : void 0
        },
        l = function(e, i, a) {
            var r = e.height / e.width;
            if (a.ratio = a.conth / a.contw, a.ratio < r && "contain" === i.bgfit || a.ratio > r && "cover" === i.bgfit) a.height = e.width * a.ratio;
            else if (a.ratio > r && "contain" === i.bgfit || a.ratio < r && "cover" === i.bgfit) a.width = e.width * r / a.ratio;
            else if (a.ratio !== r || "contain" !== i.bgfit && "cover" !== i.bgfit) {
                var o = i.bgfit.split(" ");
                1 === o.length && (o[1] = o[0]), a.width = "auto" === o[0] ? a.contw : e.width * (parseInt(o[0], 0) / 100), a.height = "auto" === o[1] ? a.conth : a.width * a.ratio, i.usepattern = !0
            } else a.width = e.width;
            var s = function(e, i, a) {
                return 1 === (a = a.split(" ")).length && (a[1] = a[0]), {
                    x: "center" === a[0] || "50%" === a[0] ? (e.width - i.width) / 2 : "left" === a[0] ? 0 : "right" === a[0] ? e.width - i.width : t.isNumeric(a[0]) ? 0 : a[0].indexOf("%") >= 0 ? parseInt(a[0], 0) / 100 * e.width - parseInt(a[0], 0) / 100 * i.width : parseInt(a[0], 0),
                    y: "center" === a[1] || "50%" === a[1] ? (e.height - i.height) / 2 : "top" === a[1] ? 0 : "bottom" === a[1] ? e.height - i.height : t.isNumeric(a[1]) ? 0 : a[1].indexOf("%") >= 0 ? parseInt(a[1], 0) / 100 * e.height - parseInt(a[1], 0) / 100 * i.height : parseInt(a[1], 0)
                }
            }(e, a, i.bgposition);
            return a.x = s.x, a.y = s.y, a
        },
        c = function(e) {
            return e.o = 0, e.r = 0, e.row = 1, e.col = 1, e.x = 0, e.y = 0, e.sx = 1, e.sy = 1, e
        },
        p = function(e) {
            return e = "false" !== e && !1 !== e && "off" !== e && void 0 !== e && 0 !== e && -1 !== e
        },
        g = function(e) {
            return e = ("" + (e = ("" + (e = ("" + (e = ("" + (e = ("" + e).split(",").join("|"))).replace("{", "ran("))).replace("}", ")"))).replace("[", "cyc("))).replace("]", ")")
        },
        u = function(e) {
            var t = e.toString(16);
            return 1 == t.length ? "0" + t : t
        },
        h = function(e, i, a, r) {
            return i.skip = !1, "in" === r ? a.isHTML5 ? (a.bgvid[0].style.display = "none", t.resetVideo(a.bgvid, e), a.animateDirection = "in", a.currentState = "animating", a.drawVideoCanvasImagesRecall = !0, t.updateVideoFrames(e, a, !0), t.playVideo(a.bgvid, e)) : (t[e].videos[a.bgvid[0].id].pauseCalled = !1, i.waitToSlideTrans = t[e].videos[a.bgvid[0].id].waitToSlideTrans, !0 !== a.poster ? (t.resetVideo(a.bgvid, e), t[e].videos[a.bgvid[0].id].prePlayForaWhile = !1, !0 !== i.waitToSlideTrans && t.playVideo(a.bgvid, e, !0), tpGS.gsap.fromTo(a.bgvid, i.ms / i.sec, {
                zIndex: 30,
                display: "block",
                opacity: 0
            }, {
                opacity: 1,
                zIndex: 30,
                display: "block"
            }), a.loadobj.bgColor = !0, a.bgcolor = "#000", i.simplify = !0) : (t[e].videos[a.bgvid[0].id].prePlayForaWhile = !1, t.resetVideo(a.bgvid, e), t.playVideo(a.bgvid, e), a.bgvid[0].style.display = "none", a.bgvid[0].style.zIndex = 0, a.bgvid[0].style.opacity = 0)) : "out" === r && (a.isHTML5 ? (a.currentState = "animating", a.drawVideoCanvasImagesRecall = !0, t.updateVideoFrames(e, a, !0), window.requestAnimationFrame(function() {
                tpGS.gsap.to(a.bgvid, .1, {
                    zIndex: 0,
                    display: "none"
                })
            })) : (t.stopVideo(a.bgvid, e, !0), !0 !== a.poster && (a.loadobj.bgColor = !0, a.bgcolor = "#000"))), i
        },
        m = function(e, t, i, a) {
            return Math.sqrt(Math.pow(e - i, 2) + Math.pow(t - a, 2))
        },
        v = function(e, t) {
            var i = t + Math.PI / 2;
            return {
                x1: e.x,
                y1: e.y,
                x2: e.x + 100 * Math.cos(i),
                y2: e.y + 100 * Math.sin(i)
            }
        },
        f = function(e, t) {
            var i = e.y2 - e.y1,
                a = e.x1 - e.x2,
                r = i * e.x1 + a * e.y1,
                o = t.y2 - t.y1,
                s = t.x1 - t.x2,
                n = o * t.x1 + s * t.y1,
                d = i * s - o * a;
            return 0 !== d && {
                x: Math.round((s * r - a * n) / d * 100) / 100,
                y: Math.round((i * n - o * r) / d * 100) / 100
            }
        }
}(jQuery),
function(e) {
    "use strict";
    var t = jQuery.fn.revolution,
        i = t.is_mobile();
    t.is_android();

    function a(e) {
        return null == e ? -1 : t.isNumeric(e) ? e : e.split(":").length > 1 ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0) : e
    }
    jQuery.extend(!0, t, {
        preLoadAudio: function(e, i) {
            t[i].videos = void 0 === t[i].videos ? {} : t[i].videos, e.find(".rs-layer-audio").each(function() {
                var a = jQuery(this),
                    r = t[i].videos[a[0].id] = void 0 === t[i].videos[a[0].id] ? y(a.data(), "audio", t.gA(e[0], "key")) : t[i].videos[a[0].id],
                    o = {};
                0 === a.find("audio").length && (o.src = null != r.mp4 ? r.mp4 : "", o.pre = r.pload || "", this.id = void 0 === this.id || "" === this.id ? a.attr("audio-layer-" + Math.round(199999 * Math.random())) : this.id, o.id = this.id, o.status = "prepared", o.start = jQuery.now(), o.waittime = void 0 !== r.ploadwait ? 1e3 * r.ploadwait : 5e3, "auto" != o.pre && "canplaythrough" != o.pre && "canplay" != o.pre && "progress" != o.pre || (void 0 === t[i].audioqueue && (t[i].audioqueue = []), t[i].audioqueue.push(o), t.manageVideoLayer(a, i, t.gA(e[0], "key"), !0)))
            })
        },
        preLoadAudioDone: function(e, i, a) {
            var r = t[i].videos[e[0].id];
            t[i].audioqueue && t[i].audioqueue.length > 0 && jQuery.each(t[i].audioqueue, function(e, t) {
                r.mp4 !== t.src || t.pre !== a && "auto" !== t.pre || (t.status = "loaded")
            })
        },
        checkfullscreenEnabled: function(e) {
            if (void 0 !== window.fullScreen) return window.fullScreen;
            if (void 0 !== document.fullscreen) return document.fullscreen;
            if (void 0 !== document.mozFullScreen) return document.mozFullScreen;
            if (void 0 !== document.webkitIsFullScreen) return document.webkitIsFullScreen;
            var i = t.isWebkit() && /Apple Computer/.test(navigator.vendor) ? 42 : 5;
            return screen.width == t.winW && Math.abs(screen.height - t.getWinH(e)) < i
        },
        showVideo: function(e) {
            tpGS.gsap.to(e, .3, {
                opacity: 1,
                display: "block",
                ease: "power3.inOut"
            })
        },
        resetVideo: function(e, a, r) {
            if ("updateAndResize" !== r) {
                var o = t[a].videos[e[0].id];
                if ("resetVideo" !== o.cRS) switch (o.cRS = "resetVideo", o.type) {
                    case "youtube":
                        o.rwd && null != o.player && void 0 !== o.player.seekTo && (o.player.seekTo(-1 == o.ssec ? 0 : o.ssec), o.player.pauseVideo()), o.bgvideo || "preset" === r || 0 != o.jsposter.length || t.showVideo(e.find("iframe"));
                        break;
                    case "vimeo":
                        void 0 !== o.vimeoplayer && o.rwd && (0 !== o.ssec && -1 !== o.ssec || o.bgvideo || o.jsposter.length > 0) && (o.vimeoplayer.setCurrentTime(-1 == o.ssec ? 0 : o.ssec), o.vimeoplayer.pause()), 0 != o.jsposter.length || o.bgvideo || "preset" === r || t.showVideo(e.find("iframe"));
                        break;
                    case "html5":
                        if (i && o.notonmobile) return !1;
                        o.bgvideo || t.showVideo(o.jvideo), o.rwd && "playing" !== o.cSS && !isNaN(o.video.duration) && (o.justReseted = !0, o.video.currentTime = -1 == o.ssec ? 0 : o.ssec), ("mute" == o.volume || t.lastToggleState(e.videomutetoggledby) || !0 === t[a].globalmute) && (o.video.muted = !0)
                }
            }
        },
        Mute: function(e, i, a) {
            var r = !1,
                o = t[i].videos[e[0].id];
            switch (o.type) {
                case "youtube":
                    o.player && (!0 === a && o.player.mute(), !1 === a && d(o, parseInt(o.volcache, 0)), r = o.player.isMuted());
                    break;
                case "vimeo":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.volume = !0 === a ? "mute" : !1 === a ? o.volcache : o.volume, void 0 !== a && null != o.vimeoplayer && n(o, !0 === a ? 0 : o.volcache), r = "mute" == o.volume || 0 === o.volume;
                    break;
                case "html5":
                    o.volcachecheck || (o.volcache = o.volcache > 1 ? o.volcache / 100 : o.volcache, o.volcachecheck = !0), o.video.volume = o.volcache, void 0 !== a && o.video && (o.video.muted = a), r = void 0 !== o.video ? o.video.muted : r
            }
            if (void 0 === a) return r
        },
        stopVideo: function(e, a, r) {
            if (void 0 !== t[a] && void 0 !== t[a]) {
                var o = t[a].videos[e[0].id];
                if (void 0 !== o && ("stopVideo" !== o.cRS || "paused" !== o.cSS)) switch (o.cRS = "stopVideo", t[a].leaveViewPortBasedStop || (t[a].lastplayedvideos = []), t[a].leaveViewPortBasedStop = !1, o.type) {
                    case "youtube":
                        void 0 !== o.player && 2 !== o.player.getPlayerState() && 5 !== o.player.getPlayerState() && (o.player.pauseVideo(), void 0 !== r && g(a, o, "hide"));
                        break;
                    case "vimeo":
                        void 0 !== o.vimeoplayer && (o.vimeoplayer.pause(), void 0 !== r && g(a, o, "hide"));
                        break;
                    case "html5":
                        o.video && (o.video.pause(), i && _(o, 1))
                }
            }
        },
        playVideo: function(e, i, a) {
            var o = t[i].videos[e[0].id];
            if (clearTimeout(o.videoplaywait), "playVideo" !== o.cRS || "playing" !== o.cSS) switch (o.cRS = "playVideo", o.type) {
                case "youtube":
                    if (0 == e.find("iframe").length) e.append(o.videomarkup), h(e, i, !0);
                    else if (void 0 !== o.player && null != o.player.playVideo) {
                        var s = o.player.getCurrentTime();
                        o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.player.seekTo(o.ssec), p(o)
                    } else o.videoplaywait = setTimeout(function() {
                        t.playVideo(e, i)
                    }, 50);
                    break;
                case "vimeo":
                    if (0 == e.find("iframe").length) delete o.vimeoplayer, e.append(o.videomarkup), h(e, i, !0);
                    else if (e.hasClass("rs-apiready"))
                        if (o.vimeoplayer = null == o.vimeoplayer ? new Vimeo.Player(e.find("iframe").attr("id")) : o.vimeoplayer, o.vimeoplayer.getPaused()) {
                            s = void 0 === o.currenttime ? 0 : o.currenttime;
                            o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.vimeoplayer.setCurrentTime(o.ssec), ("mute" == o.volume || 0 === o.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[i].globalmute) && (o.volumetoken = !0, o.vimeoplayer.setVolume(0)), c(o)
                        } else o.videoplaywait = setTimeout(function() {
                            t.playVideo(e, i)
                        }, 50);
                    else o.videoplaywait = setTimeout(function() {
                        t.playVideo(e, i)
                    }, 50);
                    break;
                case "html5":
                    if (o.metaloaded) {
                        if (("" + o.video.duration == "NaN" || o.video.readyState < 4) && !a) return o.loadRequested || (o.video.load(), o.loadRequested = !0), void setTimeout(function() {
                            t.playVideo(e, i)
                        }, 50);
                        s = o.video.currentTime;
                        o.nseTriggered && (s = -1, o.nseTriggered = !1), -1 != o.ssec && o.ssec > s && o.ssec < o.video.duration && (o.video.currentTime = o.ssec), l(o)
                    } else r(o.video, "loadedmetadata", function(e) {
                        t.playVideo(e, i)
                    }(e))
            }
        },
        isVideoPlaying: function(e, i) {
            var a = !1;
            return null != t[i].playingvideos && jQuery.each(t[i].playingvideos, function(t, i) {
                e.attr("id") == i.attr("id") && (a = !0)
            }), a
        },
        removeMediaFromList: function(e, t) {
            w(e, t)
        },
        prepareCoveredVideo: function(e) {
            clearTimeout(t[e].resizePrepareCoverVideolistener);
            var i = "carousel" === t[e].sliderType ? t[e].carousel.justify ? void 0 === t[e].carousel.slide_widths ? void 0 : t[e].carousel.slide_widths[t[e].carousel.focused] : t[e].carousel.slide_width : t[e].canv.width,
                a = "carousel" === t[e].sliderType ? t[e].carousel.slide_height : t[e].canv.height;
            if (0 !== i && 0 !== a && void 0 !== i && void 0 !== a)
                for (var r in t[e].videos) {
                    var o = t[e].videos[r];
                    if (void 0 !== o.jvideo && ((o.bgvideo || o.jvideo.parent().hasClass("rs-fsv") || t.closestNode(o.video, "RS-LAYER") && t.closestNode(o.video, "RS-LAYER").classList.contains("rs-fsv")) && ("html5" === o.type && void 0 !== o.jvideo && tpGS.gsap.set(o.jvideo, {
                            width: i
                        }), void 0 === t[e].activeRSSlide || o.slideid === t.gA(t[e].slides[t[e].activeRSSlide], "key") || void 0 === t[e].pr_next_slide || o.slideid === t.gA(t[e].pr_next_slide[0], "key")))) {
                        o.vd = o.ratio.split(":").length > 1 ? o.ratio.split(":")[0] / o.ratio.split(":")[1] : 1;
                        var s, n = i / a,
                            d = n / o.vd * 100,
                            l = o.vd / n * 100;
                        s = "Edge" === t.get_browser() || "IE" === t.get_browser() ? n > o.vd ? {
                            minWidth: "100%",
                            height: d + "%",
                            x: "-50%",
                            y: "-50%",
                            top: "50%",
                            left: "50%",
                            position: "absolute"
                        } : {
                            minHeight: "100%",
                            width: l + "%",
                            x: "-50%",
                            y: "-50%",
                            top: "50%",
                            left: "50%",
                            position: "absolute"
                        } : n > o.vd ? {
                            height: (o.fitCover ? 100 : d) + "%",
                            width: "100%",
                            top: o.fitCover ? 0 : -(d - 100) / 2 + "%",
                            left: "0px",
                            position: "absolute"
                        } : {
                            width: (o.fitCover ? 100 : l) + "%",
                            height: "100%",
                            left: o.fitCover ? 0 : -(l - 100) / 2 + "%",
                            top: "0px",
                            position: "absolute"
                        }, void 0 === o.vimeoid && void 0 === o.ytid || (s.maxWidth = "none", s.maxHeight = "none"), tpGS.gsap.set(o.jvideo, s)
                    }
                } else t[e].resizePrepareCoverVideolistener = setTimeout(function() {
                    t.prepareCoveredVideo(e)
                }, 100)
        },
        checkVideoApis: function(e, i) {
            location.protocol;
            if (!t[i].youtubeapineeded && ((null != e.data("ytid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t[i].youtubeapineeded = !0), t[i].youtubeapineeded && !window.rs_addedyt)) {
                t[i].youtubestarttime = jQuery.now(), window.rs_addedyt = !0;
                var a = document.createElement("script"),
                    r = t.getByTag(document, "script")[0],
                    o = !0;
                a.src = "https://www.youtube.com/iframe_api", jQuery("head").find("*").each(function() {
                    "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (o = !1)
                }), o && r.parentNode.insertBefore(a, r)
            }
            if (!t[i].vimeoapineeded && ((null != e.data("vimeoid") || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t[i].vimeoapineeded = !0), t[i].vimeoapineeded && !window.rs_addedvim)) {
                t[i].vimeostarttime = jQuery.now(), window.rs_addedvim = !0;
                var s = document.createElement("script");
                r = t.getByTag(document, "script")[0], o = !0;
                s.src = "https://player.vimeo.com/api/player.js", jQuery("head").find("*").each(function() {
                    "https://player.vimeo.com/api/player.js" == jQuery(this).attr("src") && (o = !1)
                }), o && r.parentNode.insertBefore(s, r)
            }
        },
        manageVideoLayer: function(e, a, o, s) {
            if (t[a].videos = void 0 === t[a].videos ? {} : t[a].videos, void 0 === t[a].videos[e[0].id] || !0 === s) {
                var n = t[a].videos[e[0].id] = void 0 === t[a].videos[e[0].id] ? y(e.data(), void 0, o) : t[a].videos[e[0].id];
                if (n.audio = void 0 !== n.audio && n.audio, i && n.opom) 0 == e.find("rs-poster").length && e.append('<rs-poster class="noSwipe" style="background-image:url(' + n.poster + ');"></rs-poster>');
                else {
                    n.jsposter = e.find("rs-poster"), n.id = e[0].id, n.pload = "auto" === n.pload || "canplay" === n.pload || "canplaythrough" === n.pload || "progress" === n.pload ? "auto" : n.pload, n.type = null != n.mp4 || null != n.webm ? "html5" : null != n.ytid && String(n.ytid).length > 1 ? "youtube" : null != n.vimeoid && String(n.vimeoid).length > 1 ? "vimeo" : "none", n.newtype = "html5" == n.type && 0 == e.find(n.audio ? "audio" : "video").length ? "html5" : "youtube" == n.type && 0 == e.find("iframe").length ? "youtube" : "vimeo" == n.type && 0 == e.find("iframe").length ? "vimeo" : "none", n.extras = "", n.posterMarkup = void 0 === n.posterMarkup ? "" : n.posterMarkup, !n.audio && "1sttime" == n.aplay && n.pausetimer && n.bgvideo && t.sA(e.closest("rs-slide")[0], "rspausetimeronce", 1), n.audio || !n.bgvideo || !n.pausetimer || 1 != n.aplay && "true" != n.aplay && "no1sttime" != n.aplay || t.sA(e.closest("rs-slide")[0], "rspausetimeralways", 1), n.noInt && e.addClass("rs-nointeraction"), !(null != n.poster && n.poster.length > 2) || i && n.npom || 0 == n.jsposter.length && (n.posterMarkup += '<rs-poster class="noSwipe" style="background-image:url(' + n.poster + ');"></rs-poster>');
                    var d = !0;
                    switch (n.cSS = "created", n.cRS = "created", n.newtype) {
                        case "html5":
                            1 == window.isSafari11 && (t[a].slideHasIframe = !0), n.audio && e.addClass("rs-audio"), n.tag = n.audio ? "audio" : "video";
                            var l = "video" === n.tag && (t.is_mobile() || t.isSafari11()) ? n.aplay || "true" === n.aplay ? "muted playsinline autoplay" : n.inline ? " playsinline" : "" : "",
                                c = '<div class="html5vid rs_html5vidbasicstyles ' + (!1 === n.afs ? "hidefullscreen" : "") + '">';
                            c += "<" + n.tag + " " + l + " " + (n.controls && "none" !== n.controls ? " controls" : "") + (n.bgvideo && -1 == l.indexOf("autoplay") ? " autoplay" : "") + (n.bgvideo && -1 == l.indexOf("muted") ? " muted" : "") + ' style="' + ("Edge" !== t.get_browser() ? (n.fitCover ? "object-fit:cover;background-size:cover;" : "") + "opacity:0;width:100%; height:100%" : "") + '" class="" ' + (n.loop ? "loop" : "") + ' preload="' + n.pload + '">', "video" === n.tag && null != n.webm && "firefox" == t.get_browser().toLowerCase() && (c = c + '<source src="' + n.webm + '" type="video/webm" />'), null != n.mp4 && (c = c + '<source src="' + n.mp4 + '" type="' + ("video" === n.tag ? "video/mp4" : n.mp4.toLowerCase().indexOf("m4a") > 0 ? "audio/x-m4a" : "audio/mpeg") + '" />'), null != n.ogv && (c = c + '<source src="' + n.mp4 + '" type="' + n.tag + '/ogg" />'), c += "</" + n.tag + "></div>", c += n.posterMarkup, n.controls && !n.audio && void 0 === n.poster || (c += '<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), n.videomarkup = c, d = !1, i && n.notonmobile || t.isIE(8) || e.append(c), n.jvideo = e.find(n.tag), n.video = n.jvideo[0], n.html5vid = n.jvideo.parent(), r(n.video, "canplay", function(e) {
                                v(e, a), t.resetVideo(e, a)
                            }(e));
                            break;
                        case "youtube":
                            t[a].slideHasIframe = !0, n.controls && "none" !== n.controls || (n.vatr = n.vatr.replace("controls=1", "controls=0"), -1 == n.vatr.toLowerCase().indexOf("controls") && (n.vatr = n.vatr + "&controls=0")), (n.inline || "RS-BGVIDEO" === e[0].tagName) && (n.vatr = n.vatr + "&playsinline=1"), -1 != n.ssec && (n.vatr += "&start=" + n.ssec), -1 != n.esec && (n.vatr += "&end=" + n.esec);
                            var p = n.vatr.split("origin=https://");
                            n.vatrnew = p.length > 1 ? p[0] + "origin=https://" + (self.location.href.match(/www/gi) && !p[1].match(/www/gi) ? "www." + p[1] : p[1]) : n.vatr, n.videomarkup = '<iframe allow="autoplay; ' + (!0 === n.afs ? "fullscreen" : "") + '" type="text/html" src="https://www.youtube-nocookie.com/embed/' + n.ytid + "?" + n.vatrnew + '" ' + (!0 === n.afs ? "allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>';
                            break;
                        case "vimeo":
                            t[a].slideHasIframe = !0, n.controls && "none" !== n.controls ? (n.vatr = n.vatr.replace("background=0", "background=1"), -1 == n.vatr.toLowerCase().indexOf("background") && (n.vatr = n.vatr + "&background=1")) : (n.vatr = n.vatr.replace("background=1", "background=0"), -1 == n.vatr.toLowerCase().indexOf("background") && (n.vatr = n.vatr + "&background=0")), n.vatr = "autoplay=" + (!0 === n.aplay ? 1 : 0) + "&" + n.vatr, n.bgvideo && (n.prePlayForaWhile = !0), i && !0 === n.aplay && (n.vatr = "muted=1&" + n.vatr), n.loop && (n.vatr = "loop=1&" + n.vatr), n.videomarkup = '<iframe  allow="autoplay; ' + (!0 === n.afs ? "fullscreen" : "") + '" src="https://player.vimeo.com/video/' + n.vimeoid + "?" + n.vatr + '" ' + (!0 === n.afs ? "webkitallowfullscreen mozallowfullscreen allowfullscreen" : "") + ' width="100%" height="100%" class="intrinsic-ignore" style="opacity:0;visibility:visible;width:100%;height:100%"></iframe>'
                    }
                    if (!(null != n.poster && n.poster.length > 2) || i && n.npom) {
                        if (i && n.notonmobile) return !1;
                        0 != e.find("iframe").length || "youtube" != n.type && "vimeo" != n.type || (delete n.vimeoplayer, e.append(n.videomarkup), h(e, a, !("vimeo" !== n.newtype || !n.bgvideo), !0))
                    } else d && 0 == e.find("rs-poster").length && e.append(n.posterMarkup), 0 == e.find("iframe").length && (n.jsposter = e.find("rs-poster"), n.jsposter.on("click", function() {
                        if (t.playVideo(e, a, !0), i) {
                            if (n.notonmobile) return !1;
                            tpGS.gsap.to(n.jsposter, .3, {
                                opacity: 0,
                                visibility: "hidden",
                                force3D: "auto",
                                ease: "power3.inOut"
                            }), t.showVideo(e.find("iframe"))
                        }
                    }));
                    if ("none" !== n.doverlay && void 0 !== n.doverlay) {
                        var g = t.createOverlay(a, n.doverlay, n.doverlaysize, {
                            0: n.doverlaycolora,
                            1: n.doverlaycolorb
                        });
                        n.bgvideo && 1 != e.closest("rs-sbg-wrap").find("rs-dotted").length ? e.closest("rs-sbg-wrap").append('<rs-dotted style="background-image:' + g + '"></rs-dotted>') : n.bgvideo || 1 == e.find("rs-dotted").length || e.append('<rs-dotted style="background-image:' + g + '"></rs-dotted>')
                    }
                    n.bgvideo && (e[0].style.display = "none", e[0].style.zIndex = 0, tpGS.gsap.set(e.find("video, iframe"), {
                        opacity: 0
                    }))
                }
            }
        }
    });
    var r = function(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i, {
                capture: !1,
                passive: !0
            }) : e.attachEvent(t, i, {
                capture: !1,
                passive: !0
            })
        },
        o = function(e, t, i) {
            var a = {};
            return a.video = e, a.type = t, a.settings = i, a
        },
        s = function(e, i) {
            var a = t[e].videos[i[0].id];
            (a.bgvideo || i.hasClass("rs-fsv")) && ((void 0 === a.ratio || a.ratio.split(":").length <= 1) && (a.ratio = "16:9"), requestAnimationFrame(function() {
                t.prepareCoveredVideo(e)
            }))
        },
        n = function(e, t) {
            var a = e.vimeoplayer;
            a.getPaused().then(function(r) {
                e.volumetoken = !0;
                var o = !r,
                    s = a.setVolume(t);
                void 0 !== s && s.then(function(t) {
                    a.getPaused().then(function(t) {
                        o === t && (e.volume = "mute", e.volumetoken = !0, a.setVolume(0), a.play())
                    }).catch(function(e) {
                        console.log("Get Paused Function Failed for Vimeo Volume Changes Inside the Promise")
                    })
                }).catch(function(t) {
                    o && (e.volume = "mute", e.volumetoken = !0, a.setVolume(0), a.play()), i && _(e, 0)
                })
            }).catch(function() {
                console.log("Get Paused Function Failed for Vimeo Volume Changes")
            })
        },
        d = function(e, t) {
            var i = e.player.getPlayerState();
            "mute" === t ? e.player.mute() : (e.player.unMute(), e.player.setVolume(t)), setTimeout(function() {
                1 === i && 1 !== e.player.getPlayerState() && (e.player.mute(), e.player.playVideo())
            }, 39)
        },
        l = function(e, t) {
            if ("playVideo" === e.cRS) {
                var a = e.video.play();
                void 0 !== a && a.then(function(e) {}).catch(function(i) {
                    e.video.pause(), !0 !== t && l(e, !0)
                }), i && _(e, 0)
            }
        },
        c = function(e) {
            if ("playVideo" === e.cRS) {
                var t = e.vimeoplayer.play();
                void 0 !== t && t.then(function(e) {}).catch(function(t) {
                    e.vimeoplayer.volumetoken = !0, e.vimeoplayer.setVolume(0), e.vimeoplayer.play()
                })
            }
        },
        p = function(e) {
            "playVideo" === e.cRS && e.player.playVideo()
        },
        g = function(e, i, a, r) {
            clearTimeout(i.repeatedPosterCalls), i.repeatedPosterCalls = setTimeout(function() {
                "show" === a || "playing" === i.cSS && !0 !== i.VideoIsVisible ? (void 0 !== i.showhideposter && i.showhideposter.pause(), i.showhideposter = tpGS.gsap.timeline(), i.jsposter.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jsposter, .3, {
                    zIndex: 5,
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: "power3.inOut"
                }), 0), i.jvideo.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jvideo, void 0 !== r ? r : .001, {
                    opacity: 1,
                    display: "block",
                    ease: i.jsposter.length > 0 ? "power3.inOut" : "power3.out"
                }), 0), i.VideoIsVisible = !0) : ("hide" === a || "paused" === i.cSS && 1 != t.checkfullscreenEnabled(e) && i.jsposter.length > 0 && !1 !== i.VideoIsVisible && !0 !== i.seeking) && (void 0 !== i.showhideposter && i.showhideposter.pause(), i.showhideposter = tpGS.gsap.timeline(), i.jsposter.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jsposter, .3, {
                    zIndex: 5,
                    autoAlpha: 1,
                    force3D: "auto",
                    ease: "power3.inOut"
                }), 0), i.jvideo.length > 0 && i.showhideposter.add(tpGS.gsap.to(i.jvideo, void 0 !== r ? r : .001, {
                    opacity: 0,
                    ease: i.jsposter.length > 0 ? "power3.inOut" : "power3.out"
                }), .3), i.bgvideo && void 0 !== i.nBG && void 0 !== i.nBG.loadobj && (i.nBG.video = i.nBG.loadobj.img), i.VideoIsVisible = !1)
            }, void 0 !== a ? 0 : 100)
        },
        u = function(e, i, a) {
            e.cSS = "playing", e.vimeostarted = !0, e.nextslidecalled = !1, e.jsposter = void 0 === e.jsposter || 0 === e.jsposter.length ? i.find("rs-poster") : e.jsposter, e.jvideo = i.find("iframe"), t[a].c.trigger("revolution.slide.onvideoplay", o(e.vimeoplayer, "vimeo", e)), t[a].stopByVideo = e.pausetimer, b(i, a), "mute" == e.volume || 0 === e.volume || t.lastToggleState(i.data("videomutetoggledby")) || !0 === t[a].globalmute ? (e.volumetoken = !0, e.vimeoplayer.setVolume(0)) : n(e, parseInt(e.volcache, 0) / 100 || .75), t.toggleState(e.videotoggledby)
        },
        h = function(e, a, r, n) {
            var l = t[a].videos[e[0].id],
                c = "iframe" + Math.round(1e5 * Math.random() + 1);
            if (l.jvideo = e.find("iframe"), s(a, e), l.jvideo.attr("id", c), l.startvideonow = r, l.videolistenerexist) {
                if (r) switch (l.type) {
                    case "youtube":
                        t.playVideo(e, a), -1 != l.ssec && l.player.seekTo(l.ssec);
                        break;
                    case "vimeo":
                        t.playVideo(e, a), -1 != l.ssec && l.vimeoplayer.seekTo(l.ssec)
                }
            } else switch (l.type) {
                case "youtube":
                    if ("undefined" == typeof YT || void 0 === YT.Player) return t.checkVideoApis(e, a), void setTimeout(function() {
                        h(e, a, r, n)
                    }, 50);
                    l.player = new YT.Player(c, {
                        events: {
                            onStateChange: function(i) {
                                i.data == YT.PlayerState.PLAYING ? (l.cSS = "playing", t[a].onceVideoPlayed = !0, "mute" == l.volume || 0 === l.volume || t.lastToggleState(e.data("videomutetoggledby")) || !0 === t[a].globalmute ? l.player.mute() : d(l, parseInt(l.volcache, 0) || 75), t[a].stopByVideo = !0, b(e, a), l.pausetimer ? t[a].c.trigger("stoptimer") : t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideoplay", o(l.player, "youtube", l)), t.toggleState(l.videotoggledby)) : (l.cSS = "paused", 0 == i.data && l.loop && (-1 != l.ssec && l.player.seekTo(l.ssec), t.playVideo(e, a), t.toggleState(l.videotoggledby)), -1 != i.data && 3 != i.data && (t[a].stopByVideo = !1, t[a].tonpause = !1, w(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(l.player, "youtube", l)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby)), 0 == i.data && l.nse ? (m(), l.nseTriggered = !0, t[a].c.revnext(), w(e, a)) : (w(e, a), t[a].stopByVideo = !1, 3 !== i.data && (-1 != l.lasteventdata && 3 != l.lasteventdata && void 0 !== l.lasteventdata || -1 != i.data && 3 != i.data) && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(l.player, "youtube", l)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby))), clearTimeout(l.postOrVideoTimer), 3 !== i.data && (l.postOrVideoTimer = setTimeout(function() {
                                    g(a, l)
                                }, 1 === l.lasteventdata && 2 === i.data || 2 === l.lasteventdata && 3 !== i.data ? 1e3 : 0), l.lasteventdata = i.data)
                            },
                            onReady: function(i) {
                                var r, o = t.is_mobile(),
                                    s = e.hasClass("rs-layer-video");
                                l.ready = !0, !o && (!t.isSafari11() || o && s) || "RS-BGVIDEO" !== e[0].tagName && (!s || !0 !== l.aplay && "true" !== l.aplay) || (r = !0, l.player.setVolume(0), l.volume = "mute", l.player.mute(), clearTimeout(e.data("mobilevideotimr")), 2 !== l.player.getPlayerState() && -1 !== l.player.getPlayerState() || e.data("mobilevideotimr", setTimeout(function() {
                                    t.playVideo(e, a)
                                }, 500))), r || "mute" != l.volume || (l.player.setVolume(0), l.player.mute()), e.addClass("rs-apiready"), null == l.speed && 1 === l.speed || i.target.setPlaybackRate(parseFloat(l.speed)), l.jsposter.unbind("click"), l.jsposter.on("click", function() {
                                    t.playVideo(e, a, !0)
                                }), l.startvideonow ? (t.playVideo(e, a), -1 != l.ssec && l.player.seekTo(l.ssec)) : n && g(a, l, "show", .2), l.videolistenerexist = !0
                            }
                        }
                    });
                    break;
                case "vimeo":
                    if ("undefined" == typeof Vimeo || void 0 === Vimeo.Player) return t.checkVideoApis(e, a), void setTimeout(function() {
                        h(e, a, r, n)
                    }, 50);
                    for (var p, v = l.jvideo.attr("src"), f = {}, y = v, _ = /([^&=]+)=([^&]*)/g; p = _.exec(y);) f[decodeURIComponent(p[1])] = decodeURIComponent(p[2]);
                    v = (v = null != f.player_id ? v.replace(f.player_id, c) : v + "&player_id=" + c).replace(/&api=0|&api=1/g, "");
                    var x, S = t.is_mobile() || t.isSafari11(),
                        k = "RS-BGVIDEO" === e[0].tagName;
                    if (S && k && (v += "&background=1"), l.jvideo.attr("src", v), l.vimeoplayer = void 0 === l.vimeoplayer || !1 === l.vimeoplayer ? new Vimeo.Player(c) : l.vimeoplayer, S) k ? x = !0 : (l.aplay || "true" === l.aplay) && (x = !0), x && (l.volumetoken = !0, l.vimeoplayer.setVolume(0), l.volume = "mute");
                    l.vimeoplayer.on("play", function(i) {
                        t[a].onceVideoPlayed = !0, l.cSS = "playing", l.vimeostarted || u(l, e, a)
                    }), l.vimeoplayer.on("loaded", function(i) {
                        var r = {};
                        l.vimeoplayer.getVideoWidth().then(function(t) {
                            r.width = t, void 0 !== r.width && void 0 !== r.height && (l.ratio = r.width + ":" + r.height, l.vimeoplayerloaded = !0, s(a, e))
                        }), l.vimeoplayer.getVideoHeight().then(function(t) {
                            r.height = t, void 0 !== r.width && void 0 !== r.height && (l.ratio = r.width + ":" + r.height, l.vimeoplayerloaded = !0, s(a, e))
                        }), l.startvideonow ? ("mute" === l.volume && (l.volumetoken = !0, l.vimeoplayer.setVolume(0)), t.playVideo(e, a), -1 != l.ssec && l.vimeoplayer.setCurrentTime(l.ssec)) : n && g(a, l, "show", .2)
                    }), e.addClass("rs-apiready"), l.vimeoplayer.on("volumechange", function(e) {
                        l.volumetoken && (l.volume = e.volume), l.volumetoken = !1
                    }), l.vimeoplayer.on("timeupdate", function(i) {
                        g(a, l), l.vimeostarted || 0 === i.percent || void 0 !== t[a].activeRSSlide && l.slideid !== t.gA(t[a].slides[t[a].activeRSSlide], "key") || u(l, e, a), l.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), l.currenttime = i.seconds, 0 != l.esec && -1 !== l.esec && l.esec < i.seconds && !0 !== l.nextslidecalled && (l.loop ? (t.playVideo(e, a), l.vimeoplayer.setCurrentTime(-1 !== l.ssec ? l.ssec : 0)) : (l.nse && (l.nseTriggered = !0, l.nextslidecalled = !0, t[a].c.revnext()), l.vimeoplayer.pause())), l.prePlayForaWhile && l.vimeoplayer.pause()
                    }), l.vimeoplayer.on("ended", function(i) {
                        l.cSS = "paused", g(a, l), l.vimeostarted = !1, w(e, a), t[a].stopByVideo = !1, t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(l.vimeoplayer, "vimeo", l)), l.nse && (l.nseTriggered = !0, t[a].c.revnext()), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby)
                    }), l.vimeoplayer.on("pause", function(i) {
                        l.vimeostarted = !1, l.cSS = "paused", g(a, l), t[a].stopByVideo = !1, t[a].tonpause = !1, w(e, a), t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(l.vimeoplayer, "vimeo", l)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(l.videotoggledby)
                    }), l.jsposter.unbind("click"), l.jsposter.on("click", function() {
                        if (!i) return t.playVideo(e, a, !0), !1
                    }), l.videolistenerexist = !0
            }
        },
        m = function() {
            document.exitFullscreen && document.fullscreen ? document.exitFullscreen() : document.mozCancelFullScreen && document.mozFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitIsFullScreen && document.webkitExitFullscreen()
        },
        v = function(e, a, s) {
            var n = t[a].videos[e[0].id];
            if (i && n.notonmobile) return !1;
            if (n.metaloaded = !0, "html5" === n.newtype && n.bgvideo && (n.nBG = t[a].sbgs[e[0].dataset.key], void 0 === n.nBG.shadowCanvas && (n.nBG.shadowCanvas = document.createElement("canvas"), n.nBG.shadowCTX = n.nBG.shadowCanvas.getContext("2d"), n.nBG.shadowCanvas.style.background = "transparent", n.nBG.shadowCanvas.style.opacity = 1), n.nBG.isHTML5 = !0, n.nBG.video = void 0 !== n.nBG.loadobj && void 0 !== n.nBG.loadobj.img ? n.nBG.loadobj.img : n.video, n.nBG.drawVideoCanvasImagesRecall = !1), !n.controls || n.audio || void 0 !== n.poster) {
                0 != e.find(".tp-video-play-button").length || i || e.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>');
                var d = "video, rs-poster, .tp-video-play-button";
                void 0 !== n.poster && n.controls && (d = ".tp-video-play-button"), e.find(d).on("click", function() {
                    !1 === n.loop && n.esec > 0 && n.esec <= n.video.currentTime || (e.hasClass("videoisplaying") ? t.stopVideo(e, a) : t.playVideo(e, a, !0))
                })
            }(e.hasClass("rs-fsv") || n.bgvideo) && (n.bgvideo || e.hasClass("rs-fsv") ? (n.html5vid.addClass("fullcoveredvideo"), void 0 !== n.ratio && 1 != n.ratio.split(":").length || (n.ratio = "16:9"), t.prepareCoveredVideo(a)) : n.html5vid.addClass("rs-fsv")), r(n.video, "canplaythrough", function() {
                t.preLoadAudioDone(e, a, "canplaythrough")
            }), r(n.video, "canplay", function() {
                t.preLoadAudioDone(e, a, "canplay")
            }), r(n.video, "progress", function() {
                t.preLoadAudioDone(e, a, "progress")
            }), r(n.video, "pause", function() {
                i && _(n, 1)
            }), r(n.video, "timeupdate", function(e) {
                this.BGrendered = !0, g(a, n), -1 === n.esec && n.loop && 1 == window.isSafari11 && (n.esec = n.video.duration - .075), void 0 !== n.lastCurrentTime ? n.fps = n.video.currentTime - n.lastCurrentTime : n.fps = .1, n.lastCurrentTime = n.video.currentTime, 0 != n.esec && -1 != n.esec && n.esec < n.video.currentTime && !n.nextslidecalled && (n.loop ? (l(n), n.video.currentTime = -1 === n.ssec ? .5 : n.ssec) : (n.nse && (n.nseTriggered = !0, n.nextslidecalled = !0, t[a].jcnah = !0, t[a].c.revnext(), setTimeout(function() {
                    t[a].jcnah = !1
                }, 1e3)), n.video.pause()))
            }), r(n.video, "play", function() {
                n.cSS = "playing", g(a, n), n.bgvideo && (n.nBG.drawVideoCanvasImagesRecall = !0, n.nBG.videoisplaying = !0, n.nBG.video = n.video, t.updateVideoFrames(a, n.nBG)), t[a].onceVideoPlayed = !0, n.nextslidecalled = !1, n.volume = null != n.volume && "mute" != n.volume ? parseFloat(n.volcache) : n.volume, n.volcache = null != n.volcache && "mute" != n.volcache ? parseFloat(n.volcache) : n.volcache, t.is_mobile() || t.isSafari11() || (!0 === t[a].globalmute ? n.video.muted = !0 : n.video.muted = "mute" == n.volume, n.volcache = t.isNumeric(n.volcache) && n.volcache > 1 ? n.volcache / 100 : n.volcache, "mute" == n.volume ? n.video.muted = !0 : null != n.volcache && (n.video.volume = n.volcache)), e.addClass("videoisplaying"), b(e, a), clearTimeout(n.showCoverSoon), !0 !== n.pausetimer || "audio" == n.tag ? (t[a].stopByVideo = !1, t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n))) : (t[a].stopByVideo = !0, t[a].c.trigger("revolution.slide.onvideoplay", o(n.video, "html5", n))), n.pausetimer && "playing" == t[a].sliderstatus && (t[a].stopByVideo = !0, t[a].c.trigger("stoptimer")), t.toggleState(n.videotoggledby)
            }), r(n.video, "seeked", function() {
                n.seeking = !1
            }), r(n.video, "seeking", function() {
                n.seeking = !0
            }), r(n.video, "pause", function(i) {
                n.cSS = "paused", g(a, n), e.removeClass("videoisplaying"), n.bgvideo && (n.nBG.drawVideoCanvasImagesRecall = !1, n.nBG.videoisplaying = !1), t[a].stopByVideo = !1, w(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", n)), null != t[a].videoIsPlaying && t[a].videoIsPlaying.attr("id") != e.attr("id") || t.unToggleState(n.videotoggledby)
            }), r(n.video, "ended", function() {
                n.cSS = "paused", m(), g(a, n), w(e, a), t[a].stopByVideo = !1, w(e, a), "audio" != n.tag && t[a].c.trigger("starttimer"), t[a].c.trigger("revolution.slide.onvideostop", o(n.video, "html5", e.data())), n.nse && n.video.currentTime > 0 && (1 == !t[a].jcnah && (n.nseTriggered = !0, t[a].c.revnext(), t[a].jcnah = !0), setTimeout(function() {
                    t[a].jcnah = !1
                }, 1500)), e.removeClass("videoisplaying"), n.bgvideo && (n.nBG.drawVideoCanvasImagesRecall = !1, n.nBG.videoisplaying = !1), !0 !== t[a].inviewport && void 0 !== t[a].inviewport || (t[a].lastplayedvideos = [])
            })
        },
        f = function(e) {
            return "t" === e || !0 === e || "true" === e || "f" !== e && !1 !== e && "false" !== e && e
        },
        y = function(e, t, i) {
            e.audio = "audio" === t;
            var r = void 0 === e.video ? [] : e.video.split(";"),
                o = {
                    volume: e.audio ? 1 : "mute",
                    pload: "auto",
                    ratio: "16:9",
                    loop: !0,
                    aplay: "true",
                    fitCover: !0,
                    afs: !0,
                    controls: !1,
                    nse: !0,
                    npom: !1,
                    opom: !1,
                    inline: !0,
                    notonmobile: !1,
                    start: -1,
                    end: -1,
                    doverlay: "none",
                    doverlaysize: 1,
                    doverlaycolora: "transparent",
                    doverlaycolorb: "#000000",
                    scop: !1,
                    rwd: !0,
                    speed: 1,
                    ploadwait: 5,
                    stopAV: 1 !== e.bgvideo,
                    noInt: !1,
                    volcache: 75
                };
            for (var s in r)
                if (r.hasOwnProperty(s)) {
                    var n = r[s].split(":");
                    switch (n[0]) {
                        case "v":
                            o.volume = n[1];
                            break;
                        case "vd":
                            o.volcache = n[1];
                            break;
                        case "p":
                            o.pload = n[1];
                            break;
                        case "ar":
                            o.ratio = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "ap":
                            o.aplay = f(n[1]);
                            break;
                        case "vfc":
                            o.fitCover = f(n[1]);
                            break;
                        case "afs":
                            o.afs = f(n[1]);
                            break;
                        case "vc":
                            o.controls = n[1];
                            break;
                        case "nse":
                            o.nse = f(n[1]);
                            break;
                        case "npom":
                            o.npom = f(n[1]);
                            break;
                        case "opom":
                            o.opom = f(n[1]);
                            break;
                        case "t":
                            o.vtype = n[1];
                            break;
                        case "inl":
                            o.inline = f(n[1]);
                            break;
                        case "nomo":
                            o.notonmobile = f(n[1]);
                            break;
                        case "sta":
                            o.start = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "end":
                            o.end = n[1] + (void 0 !== n[2] ? ":" + n[2] : "");
                            break;
                        case "do":
                            o.doverlay = n[1];
                            break;
                        case "dos":
                            o.doverlaysize = n[1];
                            break;
                        case "doca":
                            o.doverlaycolora = n[1];
                            break;
                        case "docb":
                            o.doverlaycolorb = n[1];
                            break;
                        case "scop":
                            o.scop = f(n[1]);
                            break;
                        case "rwd":
                            o.rwd = f(n[1]);
                            break;
                        case "sp":
                            o.speed = n[1];
                            break;
                        case "vw":
                            o.ploadwait = parseInt(n[1], 0) || 5;
                            break;
                        case "sav":
                            o.stopAV = f(n[1]);
                            break;
                        case "noint":
                            o.noInt = f(n[1]);
                            break;
                        case "l":
                            o.loopcache = n[1], o.loop = "loop" === n[1] || "loopandnoslidestop" === n[1] || "none" !== n[1] && f(n[1]);
                            break;
                        case "ptimer":
                            o.pausetimer = f(n[1]);
                            break;
                        case "sat":
                            o.waitToSlideTrans = f(n[1])
                    }
                }
            return null == e.mp4 && null == e.webm && (o.fitCover = !1), void 0 !== e.bgvideo && (o.bgvideo = e.bgvideo), o.noInt && (o.controls = !1), void 0 !== e.mp4 && (o.mp4 = e.mp4), void 0 !== e.videomp4 && (o.mp4 = e.videomp4), void 0 !== e.ytid && (o.ytid = e.ytid), void 0 !== e.ogv && (o.ogv = e.ogv), void 0 !== e.webm && (o.webm = e.webm), void 0 !== e.vimeoid && (o.vimeoid = e.vimeoid), void 0 !== e.vatr && (o.vatr = e.vatr), void 0 !== e.videoattributes && (o.vatr = e.videoattributes), void 0 !== e.poster && (o.poster = e.poster), o.slideid = i, o.aplay = "true" === o.aplay || o.aplay, 1 === o.bgvideo && (o.volume = "mute"), o.ssec = a(o.start), o.esec = a(o.end), o.pausetimer = void 0 === o.pausetimer ? "loopandnoslidestop" !== o.loopcache : o.pausetimer, o.inColumn = e._incolumn, o.audio = e.audio, !0 !== o.loop && "true" !== o.loop || !0 !== o.nse && "true" !== o.nse || (o.loop = !1), o
        },
        b = function(e, i) {
            if (t[i].playingvideos = void 0 === t[i].playingvideos ? new Array : t[i].playingvideos, t[i].videos[e[0].id].stopAV && void 0 !== t[i].playingvideos && t[i].playingvideos.length > 0)
                for (var a in t[i].lastplayedvideos = jQuery.extend(!0, [], t[i].playingvideos), t[i].playingvideos) t[i].playingvideos.hasOwnProperty(a) && t.stopVideo(t[i].playingvideos[a], i);
            t[i].playingvideos.push(e), t[i].videoIsPlaying = e
        },
        w = function(e, i) {
            void 0 !== t[i] && void 0 !== t[i] && null != t[i].playingvideos && jQuery.inArray(e, t[i].playingvideos) >= 0 && t[i].playingvideos.splice(jQuery.inArray(e, t[i].playingvideos), 1)
        },
        _ = function(e, a) {
            if (void 0 !== e && (void 0 === a && (a = 0), i && !e.bgvideo)) {
                e.playPauseBtnTween && e.playPauseBtnTween.kill && e.playPauseBtnTween.kill();
                var r = t.closestNode(e.video, "RS-LAYER"),
                    o = e.controls ? 1 : 0,
                    s = e.controls ? 0 : .3;
                e.controls && e.poster && 0 === a && (s = 0, o = 0), r && (e.playPauseBtnTween = tpGS.gsap.to(r.querySelector(".tp-video-play-button"), {
                    duration: s,
                    delay: o,
                    opacity: a
                }))
            }
        }
}(jQuery);