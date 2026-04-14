_satellite["_runScript85"](function(event, target, Promise) {
    window.LP_CHAT_RUN = function() {
        function e(e) {
            var t = null;
            try {
                if ("" != e && (stringValue = e.indexOf('"conversion_likelihood_score":'),
                -1 != stringValue)) {
                    var n = e.substring(e.indexOf('"conversion_likelihood_score":') + 30);
                    t = n.substring(1, n.indexOf(",") - 1)
                }
            } catch (e) {
                console.log(e, "extractSOIScoreFromJSON function error")
            }
            return t
        }
        function t(t, n, o, i, l, a) {
            Jt = !0,
                Wt = 0;
            var d = null
                , r = "";
            try {
                try {
                    void 0 !== i && null != i && null != (d = e(i)) && (d = parseFloat(d))
                } catch (e) {
                    console.log("extractSOIScore error " + e)
                }
                var s = window.lpTag && window.lpTag.section || []
                    , c = [];
                if (void 0 !== l && null != l && "" != l && (r = l),
                ("y" == r.toLowerCase() || (null == d || d > .135 || isNaN(d)) && void 0 !== t && null != t && "" != t.trim()) && s.push("Error:true"),
                void 0 !== t && null != t && void 0 !== n && null != n) {
                    var p = {
                        type: "error",
                        error: {
                            message: t,
                            code: n
                        }
                    };
                    c.push(p)
                }
                if (null == d || isNaN(d)) {
                    if ("y" == r.toLowerCase()) {
                        v = {
                            type: "lead",
                            lead: {
                                topic: "PEGA-SOI",
                                value: r,
                                leadId: "ErrorId"
                            }
                        };
                        c.push(v)
                    }
                } else {
                    var v = {
                        type: "lead",
                        lead: {
                            topic: "SOI",
                            value: d,
                            leadId: "ErrorId"
                        }
                    };
                    c.push(v)
                }
                if (st || Je())
                    return;
                "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && window.lpTag.newPage(document.URL, {
                    section: s,
                    sdes: c,
                    taglets: {}
                }),
                void 0 !== a && "" != a && null != a && L(a)
            } catch (e) {}
        }
        function n() {
            try {
                St = !1,
                    st = !1,
                    rt = 0,
                    dt = !1,
                    mt = !1;
                var e = window.sessionStorage.getItem("wjt");
                if (pn = !1,
                    !window.lpTag)
                    return void console.log("LP tag not Loaded");
                if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.flow && null != vzdl.page.flow && "" != vzdl.page.flow && "true" != VZ_Chat.getCookie("lpFdvLockChatInProgress") && 1 != VZ_Chat.getCookie("lpFdvLockChatInProgress") && (-1 != vzdl.page.flow.toLowerCase().indexOf("5g_preorder_nse") || -1 != vzdl.page.flow.toLowerCase().indexOf("5g_preorder_aal")))
                    return;
                try {
                    if (Z() && -1 != window.location.href.indexOf("/plans/selector.html") && -1 != vzdl.page.flow.indexOf("aal") && null != VZ_Chat.getCookie("cdlThrottleList").indexOf("CHAT_PLAN_E") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("CHAT_PLAN_E") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("CHAT_PLAN_E") && (st = !0)) {
                        if (d(),
                        "undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.createChatButton && null != EchannelVera.createChatButton && "function" == typeof EchannelVera.createChatButton) {
                            var t = document.getElementById("askvzStartButton");
                            void 0 !== t && null != t || (EchannelVera.createChatButton(),
                            "undefined" != typeof vzdl && null != vzdl && "" != vzdl && (void 0 !== vzdl.park && null != vzdl.park && "" != vzdl.park || (vzdl.park = {}),
                                vzdl.park.usertext = "sales%20chat"))
                        }
                        return
                    }
                } catch (e) {}
                At = !1,
                    Wt = 0;
                var n = [];
                if (In) {
                    n = "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList && "" != vzdl.page.throttleList && -1 != vzdl.page.throttleList.indexOf("C_LPNS") || null != VZ_Chat.getCookie("cdlThrottleList").indexOf("C_LPNS") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("C_LPNS") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("C_LPNS") ? je() : Ue(),
                        Qe();
                    try {
                        "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && -1 != vzdl.page.name.toLowerCase().indexOf("pdp") && (-1 == document.location.pathname.toLowerCase().indexOf("certified-pre-owned") && -1 == vzdl.page.name.toLowerCase().replace(/\s/g, "").indexOf("certifiedpre-owned") || lpTag.section.push("CPO"))
                    } catch (e) {}
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.throttle && null != vzdl.page.throttle && "" != vzdl.page.throttle && -1 != vzdl.page.throttle.toLowerCase().replace(/\s/g, "").indexOf("nsaversion") && n.push("nsaversion")
                } else
                    try {
                        n = ["wireless"],
                            Z() ? n.push("PEGA") : n.push("CFD"),
                            "y" == Dn.Authentication.toLowerCase() || Z() && void 0 !== e && null != e && "" != e ? (Sn = "EX",
                                n.push("ex"),
                                n.push("auth:true")) : (Sn = "NC",
                                n.push("nc"),
                                n.push("auth:false")),
                        "" != Bt && n.push(Bt)
                    } catch (e) {}
                sn = 0,
                    an = {
                        engagementAddedBeforeChatShown: [],
                        engagementAddedAfterChatShown: [],
                        engagementIdAddedBeforeChatShown: [],
                        engagementIdAddedAfterChatShown: [],
                        isLpChatShown: !1
                    },
                    dn = [],
                    Gt = !1,
                    -1 != window.location.hostname.toLowerCase().indexOf("espanol.verizon.com") || -1 != window.location.hostname.toLowerCase().indexOf("es-vzwqa") ? (lpTag.section.push("spanish"),
                        n.push("spanish")) : "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.language) ? (lpTag.section.push(vzwDL.page.language),
                        n.push(vzwDL.page.language)) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && x(vzdl.page) && x(vzdl.page.language) && (lpTag.section.push(vzdl.page.language),
                        n.push(vzdl.page.language));
                var o, i, l;
                e = window.sessionStorage.getItem("wjt");
                if (Z() && null != e && null != e && "" != e)
                    try {
                        function a(e) {
                            var t = (new Date).getTime() + "" + parseInt(1e3 * Math.random());
                            try {
                                "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.authentication && null != vzwDL.authentication ? void 0 !== vzwDL.authentication.mdn && null != vzwDL.authentication.mdn && "" != vzwDL.authentication.mdn && vzwDL.authentication.mdn.length > 5 ? t = vzwDL.authentication.mdn : void 0 !== vzwDL.authentication.visHashedMdn && null != vzwDL.authentication.visHashedMdn && "" != vzwDL.authentication.visHashedMdn && vzwDL.authentication.visHashedMdn.length > 5 && (t = vzwDL.authentication.visHashedMdn) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.user && null != vzdl.user && "" != vzdl.user && void 0 !== vzdl.user.id && null != vzdl.user.id && "" != vzdl.user.id && (t = vzdl.user.id)
                            } catch (e) {}
                            e({
                                iss: "verizon.com",
                                acr: "loa1",
                                sub: t
                            })
                        }
                        lpTag.identities = [],
                            lpTag.identities.push(a)
                    } catch (e) {}
                try {
                    var r = !1;
                    if (null != Ie("returnChatterWireless") && "" != Ie("returnChatterWireless") && ((r = Ie("returnChatterWireless")) || "true" == r)) {
                        var s = {
                            type: "service",
                            service: {
                                topic: "RepeatMessager",
                                status: 1
                            }
                        };
                        lpTag.sdes = window.lpTag.sdes || [],
                            lpTag.sdes.push(s)
                    }
                } catch (e) {}
                if (Re(),
                "undefined" != typeof vzwDL && null !== vzwDL || "undefined" != typeof vzdl && null !== vzdl) {
                    var c = "";
                    if ("undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && void 0 !== vzwDL.page.hardResponse && null != vzwDL.page.hardResponse && "" != vzwDL.page.hardResponse ? c = vzwDL.page.hardResponse : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.user && null != vzdl.user && void 0 !== vzdl.user.creditAppNum && null != vzdl.user.creditAppNum && "" != vzdl.user.creditAppNum && (c = vzdl.user.creditAppNum),
                    "" != c && "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && -1 != vzdl.page.name.toLowerCase().indexOf("credithold")) {
                        var p = {
                            type: "searchInfo",
                            keywords: ["LP credit app num info " + c]
                        };
                        lpTag.sdes.push(p),
                            l = {
                                type: "error",
                                error: {}
                            };
                        var v = c.split("|");
                        if (v.length > 2 && "HD" == v[1] && !Xe(v)) {
                            try {
                                if (n.push("messagingExclude"),
                                document.getElementById("nuance-chat-container-1") && (document.getElementById("nuance-chat-container-1").style.display = "none"),
                                    d(),
                                st || Je())
                                    return;
                                "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && (console.log("credithold messaging exclude change1"),
                                    window.lpTag.newPage(document.URL, {
                                        section: n,
                                        sdes: [],
                                        taglets: {}
                                    }))
                            } catch (e) {
                                console.log("credithold messaging exclude change1")
                            }
                            return
                        }
                        if (v.length > 2 && "HD" == v[1] && Xe(v))
                            try {
                                l.error.message = v[0],
                                    l.error.code = v[1] + "|" + v[2],
                                    lpTag.sdes.push(l),
                                    Be()
                            } catch (e) {}
                    } else if ("" == c && "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && -1 != vzdl.page.name.toLowerCase().indexOf("credithold")) {
                        try {
                            if (n.push("messagingExclude"),
                            document.getElementById("nuance-chat-container-1") && (document.getElementById("nuance-chat-container-1").style.display = "none"),
                                d(),
                            st || Je())
                                return;
                            "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && (console.log("credithold messaging exclude change1"),
                                window.lpTag.newPage(document.URL, {
                                    section: n,
                                    sdes: [],
                                    taglets: {}
                                }))
                        } catch (e) {
                            console.log("credithold messaging exclude change1")
                        }
                        return
                    }
                    var u = {};
                    if ("undefined" != typeof vzwDL && null !== vzwDL && void 0 !== vzwDL.cart && null != vzwDL.cart ? u = vzwDL.cart : "undefined" != typeof vzdl && null !== vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && (u = vzdl.txn.product),
                    Object.keys(u).length > 0) {
                        lpTag.sdes = lpTag.sdes || [];
                        var g = [];
                        if (void 0 !== u.items && null != u.items ? g = u.items : void 0 !== u.current && null != u.current && (g = u.current),
                        g && g.length > 0) {
                            for (var h = {
                                products: []
                            }, w = 0; w < g.length; w++) {
                                var z = g[w]
                                    , f = {
                                    product: {}
                                };
                                z.name && (f.product.name = z.name,
                                "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && "Decline Device Protection" == z.name && (lpTag.section.push("DEVICEPROTECTIONDECLINED"),
                                    te())),
                                z.category && (f.product.category = z.category),
                                    z.productId ? f.product.sku = z.productId : z.id && (f.product.sku = z.id),
                                    z.price ? f.product.price = z.price : z.nonRecurringPrice && (f.product.price = z.nonRecurringPrice),
                                    z.quantity ? f.product.quantity = z.quantity : z.qty && (f.product.quantity = z.qty),
                                    z.promoCode ? f.product.promoCode = z.promoCode : z.discount && (f.product.promoCode = z.discount),
                                    h.products.push(f)
                            }
                            o = {
                                type: "cart",
                                currency: "USD",
                                cartInfo: {
                                    numItems: g.length,
                                    products: h.products
                                }
                            }
                        }
                    }
                    var m = {};
                    if ("undefined" != typeof vzwDL && null !== vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase ? m = vzwDL.purchase : "undefined" != typeof vzdl && null !== vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && (m = vzdl.txn.product),
                    Object.keys(m).length > 0) {
                        lpTag.sdes = lpTag.sdes || [];
                        var L = [];
                        if (void 0 !== m.items && null != m.items ? L = m.items : void 0 !== m.current && null != m.current && (L = m.current),
                        L && L.length > 0) {
                            var y = 0;
                            try {
                                if ("undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.orderTotal && null != vzwDL.purchase.orderTotal && "" != vzwDL.purchase.orderTotal)
                                    try {
                                        y = parseFloat(vzwDL.purchase.orderTotal)
                                    } catch (e) {}
                                else if ("undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.total && null != vzdl.txn.total && "" != vzdl.txn.total)
                                    try {
                                        y = parseFloat(vzdl.txn.total)
                                    } catch (e) {}
                            } catch (e) {}
                            var C = "";
                            "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.orderNumber && null != vzwDL.purchase.orderNumber && "" != vzwDL.purchase.orderNumber ? C = vzwDL.purchase.orderNumber : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.id && null != vzdl.txn.id && "" != vzdl.txn.id && (C = vzdl.txn.id),
                                i = {
                                    type: "purchase",
                                    currency: "USD",
                                    orderId: C,
                                    total: y,
                                    cart: {
                                        products: []
                                    }
                                };
                            for (var _ = 0; _ < L.length; _++) {
                                var T = L[_]
                                    , I = {
                                    product: {}
                                };
                                T.name && (I.product.name = T.name),
                                T.category && (I.product.category = T.category),
                                    T.productId ? I.product.sku = T.productId : T.id && (I.product.sku = T.id),
                                    T.price ? I.product.price = T.price : T.nonRecurringPrice && (I.product.price = T.nonRecurringPrice),
                                    i.cart.products.push(I)
                            }
                            var D = {
                                product: {}
                            };
                            "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingMethod && null != vzwDL.purchase.shippingMethod && "" != vzwDL.purchase.shippingMethod && (D.product.name = "Shipping Method: " + vzwDL.purchase.shippingMethod),
                                "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingState && null != vzwDL.purchase.shippingState && vzwDL.purchase.shippingState && "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingZipCode && null != vzwDL.purchase.shippingZipCode && vzwDL.purchase.shippingZipCode ? D.product.sku = vzwDL.purchase.shippingState + "," + vzwDL.purchase.shippingZipCode : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.shippingState && null != vzdl.txn.shippingState && vzdl.txn.shippingState && void 0 !== vzdl.txn.shippingZip && null != vzdl.txn.shippingZip && vzdl.txn.shippingZip && (D.product.sku = vzdl.txn.shippingState + "," + vzdl.txn.shippingZip),
                                i.cart.products.push(D)
                        }
                    }
                    try {
                        var S = "";
                        if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList && "" != vzdl.page.throttleList && (S = vzdl.page.throttleList),
                        "" == S || -1 == S.indexOf("|ShowProactiveLiveChat|") && -1 == S.indexOf("|ProActiveChat|") || lpTag.section.push("ChannelOrchestrationExperience"),
                        st || Je())
                            return;
                        ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && "" != vzwDL.page && void 0 !== vzwDL.page.fireProactiveChat && null != vzwDL.page.fireProactiveChat && "" != vzwDL.page.fireProactiveChat && "y" == vzwDL.page.fireProactiveChat.toLowerCase() || "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.fireProactiveChat && null != vzdl.page.fireProactiveChat && "" != vzdl.page.fireProactiveChat && "y" == vzdl.page.fireProactiveChat.toLowerCase()) && "undefined" != typeof lpTag && null != lpTag && 0 != Object.keys(lpTag).length && lpTag && lpTag.section && lpTag.section.indexOf("CMP:5GHomeQR") <= -1 && n.push("CMP:5GHomeQR")
                    } catch (e) {}
                    try {
                        e = window.sessionStorage.getItem("wjt");
                        ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.authentication && null != vzwDL.authentication && "" != vzwDL.authentication && vzwDL.authentication.mdn && void 0 !== e && null != e && "" != e && In || Z() && null != e && "" != e && In) && (lpTag.section.push("Auth:true"),
                            n.push("Auth:true"))
                    } catch (e) {}
                    var k = {
                        section: n,
                        taglets: {
                            rendererStub: {
                                divIdsToKeep: {
                                    inqC2CImgContainer_Fixed1: !0,
                                    lp_sales_mobile_embedded_text: !0,
                                    lp_sales_mobile_embedded: !0
                                }
                            }
                        }
                    }
                        , P = [];
                    null != o && P.push(o),
                    null != i && "" != C && "none" != C && P.push(i),
                    null != l && Object.keys(l.error).length > 0 && P.push(l),
                        k.sdes = P
                }
                if (st || Je())
                    return;
                "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && window.lpTag.newPage(document.URL, k),
                    Fe(),
                    Ze(),
                    null == document.getElementById("nuance-chat-container-1") && "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.user && null != vzdl.user && void 0 !== vzdl.user.creditAppNum && null != vzdl.user.creditAppNum && "" != vzdl.user.creditAppNum && Xe(c.split("|")) ? setTimeout(te(), 5e3) : te(),
                    Be(),
                    nt()
            } catch (e) {}
        }
        function o() {
            try {
                if (!window.lpTag)
                    return void console.log("LP tag not Loaded");
                rt = 0,
                    mt = !1,
                    dt = !1,
                    pn = !1,
                    At = !1,
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList && "" != vzdl.page.throttleList && -1 != vzdl.page.throttleList.indexOf("C_LPNS") || null != VZ_Chat.getCookie("cdlThrottleList").indexOf("C_LPNS") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("C_LPNS") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("C_LPNS") ? je() : Ue(),
                    Qe();
                try {
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && -1 != vzdl.page.name.toLowerCase().indexOf("pdp") && (-1 == document.location.pathname.toLowerCase().indexOf("certified-pre-owned") && -1 == vzdl.page.name.toLowerCase().replace(/\s/g, "").indexOf("certifiedpre-owned") || lpTag.section.push("CPO"))
                } catch (e) {}
                var e, t, n;
                if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.throttle && null != vzdl.page.throttle && "" != vzdl.page.throttle && -1 != vzdl.page.throttle.toLowerCase().replace(/\s/g, "").indexOf("nsaversion") && section.push("nsaversion"),
                    te(),
                    sn = 0,
                    an = {
                        engagementAddedBeforeChatShown: [],
                        engagementAddedAfterChatShown: [],
                        engagementIdAddedBeforeChatShown: [],
                        engagementIdAddedAfterChatShown: [],
                        isLpChatShown: !1
                    },
                    dn = [],
                    Gt = !1,
                "undefined" != typeof vzwDL && null !== vzwDL || "undefined" != typeof vzdl && null !== vzdl) {
                    var o = "";
                    if ("undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && void 0 !== vzwDL.page.hardResponse && null != vzwDL.page.hardResponse && "" != vzwDL.page.hardResponse ? o = vzwDL.page.hardResponse : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.user && null != vzdl.user && void 0 !== vzdl.user.creditAppNum && null != vzdl.user.creditAppNum && "" != vzdl.user.creditAppNum && (o = vzdl.user.creditAppNum),
                    "" != o && "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && -1 != vzdl.page.name.toLowerCase().indexOf("credithold")) {
                        var i = {
                            type: "searchInfo",
                            keywords: ["LP credit app num info " + o]
                        };
                        lpTag.sdes.push(i),
                            n = {
                                type: "error",
                                error: {}
                            };
                        var l = o.split("|");
                        if (l.length > 2 && !Xe(l)) {
                            try {
                                if (section.push("messagingExclude"),
                                document.getElementById("nuance-chat-container-1") && (document.getElementById("nuance-chat-container-1").style.display = "none"),
                                    d(),
                                st || Je())
                                    return;
                                "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && (console.log("credithold messaging exclude change1"),
                                    window.lpTag.newPage(document.URL, {
                                        section: section,
                                        sdes: [],
                                        taglets: {}
                                    }))
                            } catch (e) {
                                console.log("credithold messaging exclude change1")
                            }
                            return
                        }
                        if (l.length > 2 && "HD" == l[1] && Xe(l))
                            try {
                                n.error.message = l[0],
                                    n.error.code = l[1] + "|" + l[2],
                                    lpTag.sdes.push(n),
                                    Be()
                            } catch (e) {}
                    } else if ("" == o && "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && -1 != vzdl.page.name.toLowerCase().indexOf("credithold")) {
                        try {
                            if (section.push("messagingExclude"),
                            document.getElementById("nuance-chat-container-1") && (document.getElementById("nuance-chat-container-1").style.display = "none"),
                                d(),
                            st || Je())
                                return;
                            "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && (console.log("credithold messaging exclude change1"),
                                window.lpTag.newPage(document.URL, {
                                    section: section,
                                    sdes: [],
                                    taglets: {}
                                }))
                        } catch (e) {
                            console.log("credithold messaging exclude change1")
                        }
                        return
                    }
                    var a = {};
                    if ("undefined" != typeof vzwDL && null !== vzwDL && void 0 !== vzwDL.cart && null != vzwDL.cart ? a = vzwDL.cart : "undefined" != typeof vzdl && null !== vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && (a = vzdl.txn.product),
                    Object.keys(a).length > 0) {
                        lpTag.sdes = lpTag.sdes || [];
                        var r = [];
                        if (void 0 !== a.items && null != a.items ? r = a.items : void 0 !== a.current && null != a.current && (r = a.current),
                        r && r.length > 0) {
                            for (var s = {
                                products: []
                            }, c = 0; c < r.length; c++) {
                                var p = r[c]
                                    , v = {
                                    product: {}
                                };
                                p.name && (v.product.name = p.name),
                                p.category && (v.product.category = p.category),
                                    p.productId ? v.product.sku = p.productId : p.id && (v.product.sku = p.id),
                                    p.price ? v.product.price = p.price : p.nonRecurringPrice && (v.product.price = p.nonRecurringPrice),
                                    p.quantity ? v.product.quantity = p.quantity : p.qty && (v.product.quantity = p.qty),
                                    p.promoCode ? v.product.promoCode = p.promoCode : p.discount && (v.product.promoCode = p.discount),
                                    s.products.push(v)
                            }
                            e = {
                                type: "cart",
                                currency: "USD",
                                cartInfo: {
                                    numItems: r.length,
                                    products: s.products
                                }
                            }
                        }
                    }
                    var u = {};
                    if ("undefined" != typeof vzwDL && null !== vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase ? u = vzwDL.purchase : "undefined" != typeof vzdl && null !== vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && (u = vzdl.txn.product),
                    Object.keys(u).length > 0) {
                        lpTag.sdes = lpTag.sdes || [];
                        var g = [];
                        if (void 0 !== u.items && null != u.items ? g = u.items : void 0 !== u.current && null != u.current && (g = u.current),
                        g && g.length > 0) {
                            var h = 0;
                            try {
                                if ("undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.orderTotal && null != vzwDL.purchase.orderTotal && "" != vzwDL.purchase.orderTotal)
                                    try {
                                        h = parseFloat(vzwDL.purchase.orderTotal)
                                    } catch (e) {}
                                else if ("undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.total && null != vzdl.txn.total && "" != vzdl.txn.total)
                                    try {
                                        h = parseFloat(vzdl.txn.total)
                                    } catch (e) {}
                            } catch (e) {}
                            var w = "";
                            "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.orderNumber && null != vzwDL.purchase.orderNumber && "" != vzwDL.purchase.orderNumber ? w = vzwDL.purchase.orderNumber : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.id && null != vzdl.txn.id && "" != vzdl.txn.id && (w = vzdl.txn.id),
                                t = {
                                    type: "purchase",
                                    currency: "USD",
                                    orderId: w,
                                    total: h,
                                    cart: {
                                        products: []
                                    }
                                };
                            for (var z = 0; z < g.length; z++) {
                                var f = g[z]
                                    , m = {
                                    product: {}
                                };
                                f.name && (m.product.name = f.name),
                                f.category && (m.product.category = f.category),
                                    f.productId ? m.product.sku = f.productId : f.id && (m.product.sku = f.id),
                                    f.price ? m.product.price = f.price : f.nonRecurringPrice && (m.product.price = f.nonRecurringPrice),
                                    t.cart.products.push(m)
                            }
                            var L = {
                                product: {}
                            };
                            "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingMethod && null != vzwDL.purchase.shippingMethod && "" != vzwDL.purchase.shippingMethod && (L.product.name = "Shipping Method: " + vzwDL.purchase.shippingMethod),
                                "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingState && null != vzwDL.purchase.shippingState && vzwDL.purchase.shippingState && "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingZipCode && null != vzwDL.purchase.shippingZipCode && vzwDL.purchase.shippingZipCode ? L.product.sku = vzwDL.purchase.shippingState + "," + vzwDL.purchase.shippingZipCode : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.shippingState && null != vzdl.txn.shippingState && vzdl.txn.shippingState && void 0 !== vzdl.txn.shippingZip && null != vzdl.txn.shippingZip && vzdl.txn.shippingZip && (L.product.sku = vzdl.txn.shippingState + "," + vzdl.txn.shippingZip),
                                t.cart.products.push(L)
                        }
                    }
                    var y = {
                        section: section,
                        taglets: {
                            rendererStub: {
                                divIdsToKeep: {
                                    inqC2CImgContainer_Fixed1: !0,
                                    lp_sales_mobile_embedded_text: !0,
                                    lp_sales_mobile_embedded: !0
                                }
                            }
                        }
                    }
                        , C = [];
                    null != e && C.push(e),
                    null != t && "" != w && "none" != w && C.push(t),
                    null != n && Object.keys(n.error).length > 0 && C.push(n),
                        y.sdes = C
                }
                if (st || Je())
                    return;
                "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && window.lpTag.newPage(document.URL, y),
                    null == document.getElementById("nuance-chat-container-1") && "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.user && null != vzdl.user && void 0 !== vzdl.user.creditAppNum && null != vzdl.user.creditAppNum && "" != vzdl.user.creditAppNum && Xe(o.split("|")) ? setTimeout(te(), 5e3) : te()
            } catch (e) {}
        }
        function l() {
            try {
                var e = document.getElementById("vzChatWithUs")
                    , t = document.getElementById("vzChat");
                void 0 !== e && null != e && (e.style.display = "none"),
                void 0 !== t && null != t && (t.style.display = "none")
            } catch (e) {}
        }
        function a() {
            try {
                document.getElementById("inqC2CImgContainer_Fixed1") && (document.getElementById("inqC2CImgContainer_Fixed1").style.display = "none"),
                document.getElementById("nuance-chat-container-1") && (document.getElementById("nuance-chat-container-1").style.display = "none"),
                document.getElementById("LPMcontainer-1597421234268-4") && (document.getElementById("LPMcontainer-1597421234268-4").style.display = "none"),
                document.getElementById("nuance-chat-container-2") && (document.getElementById("nuance-chat-container-2").style.display = "none");
                try {
                    setTimeout(lpTag.events.hasFired("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE").forEach((function(e) {
                            var t = document.getElementById(e.data.eng.mainContainer.id);
                            void 0 !== t && null != t && (t.style.display = "none")
                        }
                    )), 5e3)
                } catch (e) {}
                var e = document.getElementById("vzChatWithUs")
                    , t = document.getElementById("vzChat");
                void 0 !== e && null != e && (e.style.display = ""),
                void 0 !== t && null != t && (t.style.display = ""),
                mt || In || Z() || !zt || null != VZ_Chat.getCookie("lpZineOneProViewedCodeFBLFlag") && "" != VZ_Chat.getCookie("lpZineOneProViewedCodeFBLFlag") && "false" != VZ_Chat.getCookie("lpZineOneProViewedCodeFBLFlag") || (xe(kt),
                    mt = !0,
                    document.cookie = "lpZineOneProViewedCodeFBLFlag=true; domain=.verizon.com; path=/;",
                    document.cookie = "lpZineOneProViewedCodeFBLFlag=true; domain=.verizonwireless.com; path=/;")
            } catch (e) {}
        }
        function d() {
            try {
                if (++zn >= 15 && clearInterval(fn),
                    In) {
                    document.getElementById("inqC2CImgContainer_Fixed1") && (document.getElementById("inqC2CImgContainer_Fixed1").style.display = "none"),
                    document.getElementById("nuance-chat-container-1") && (document.getElementById("nuance-chat-container-1").style.display = "none"),
                    document.getElementById("LPMcontainer-1597421234268-4") && (document.getElementById("LPMcontainer-1597421234268-4").style.display = "none"),
                    document.getElementById("nuance-chat-container-2") && (document.getElementById("nuance-chat-container-2").style.display = "none");
                    try {
                        lpTag.events.hasFired("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE").forEach((function(e) {
                                var t = document.getElementById(e.data.eng.mainContainer.id);
                                void 0 !== t && null != t && (t.style.display = "none")
                            }
                        ))
                    } catch (e) {}
                    window.lpTag && window.lpTag.events.trigger("LP_OFFERS", "HIDE")
                } else {
                    var e = document.getElementById("vzChatWithUs")
                        , t = document.getElementById("vzChat");
                    void 0 !== e && null != e && (e.style.display = "none"),
                    void 0 !== t && null != t && (t.style.display = "none")
                }
                if ((!0 === window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS") || "true" === window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS")) && null != VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS") && "open" == VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS").toLowerCase() && (St = !0,
                "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1)) {
                    var n = lpTag && lpTag.section || [];
                    lpTag.section.indexOf("messagingExclude") <= -1 && n.push("messagingExclude"),
                        window.lpTag.newPage(document.URL, {
                            section: n,
                            sdes: [],
                            taglets: {}
                        }),
                        l()
                }
                window.addEventListener("storage", (function(e) {
                        if ((!0 === e.storageArea.UNIFIED_CHAT_INPROGRESS || "true" === e.storageArea.UNIFIED_CHAT_INPROGRESS) && null != VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS") && "open" == VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS").toLowerCase() && Dt) {
                            if (St = !0,
                            "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1) {
                                var t = lpTag && lpTag.section || [];
                                lpTag.section.indexOf("messagingExclude") <= -1 && t.push("messagingExclude"),
                                    window.lpTag.newPage(document.URL, {
                                        section: t,
                                        sdes: [],
                                        taglets: {}
                                    }),
                                    l()
                            }
                            Dt = !1
                        }
                    }
                ))
            } catch (e) {}
        }
        function r() {
            try {
                if (st) {
                    if (d(),
                    "undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.createChatButton && null != EchannelVera.createChatButton && "function" == typeof EchannelVera.createChatButton) {
                        var e = document.getElementById("askvzStartButton");
                        void 0 !== e && null != e || EchannelVera.createChatButton()
                    }
                    return
                }
                if (!St)
                    if (In) {
                        if (an.engagementAddedBeforeChatShown.length > 1)
                            for (var t = 0; t < an.engagementAddedBeforeChatShown.length; t++) {
                                var n = an.engagementAddedBeforeChatShown[t]
                                    , o = (an.engagementIdAddedBeforeChatShown[t],
                                    "");
                                o = n.split("-")[n.split("-").length - 1],
                                void 0 !== n && null != n && "" != n && "" != o && ("s" == o.toLowerCase() && F("event245", "LPSalesExposed", n, ""),
                                "e" == o.toLowerCase() && F("event244", "LPSalesExposed", n, ""),
                                "o" == o.toLowerCase() && (F("event246", "LPSalesExposed", n, ""),
                                dt && F("event259", "LPSalesExposed", n, "")))
                            }
                        try {
                            if (1 == Mt && VZ_Chat.init({
                                debugMode: !0,
                                scrubber: VZ_Chat.LPMobileDataScrubber,
                                builder: VZ_Chat.TCMobileDataBuilder
                            }),
                            st || Je())
                                return;
                            var i = window.lpTag && window.lpTag.section || [];
                            "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && window.lpTag.newPage(document.URL, {
                                section: i,
                                sdes: [],
                                taglets: {}
                            }),
                            document.getElementById("inqC2CImgContainer_Fixed1") && (document.getElementById("inqC2CImgContainer_Fixed1").style.display = "block"),
                            document.getElementById("nuance-chat-container-1") && (document.getElementById("nuance-chat-container-1").style.display = "block"),
                            document.getElementById("nuance-chat-container-2") && (document.getElementById("nuance-chat-container-2").style.display = "block")
                        } catch (e) {}
                    } else {
                        try {
                            0 != Dn.LC_Available.length && -1 == Dn.LC_Available.indexOf("false") || Dn.LC_Available.unshift("true")
                        } catch (e) {}
                        E();
                        var l = document.getElementById("vzChatWithUs")
                            , a = document.getElementById("vzChat");
                        void 0 !== l && null != l && (l.style.display = ""),
                        void 0 !== a && null != a && (a.style.display = ""),
                        mt || In || Z() || !zt || null != VZ_Chat.getCookie("lpZineOneProViewedCodeFBLFlag") && "" != VZ_Chat.getCookie("lpZineOneProViewedCodeFBLFlag") && "false" != VZ_Chat.getCookie("lpZineOneProViewedCodeFBLFlag") || (xe(kt),
                            mt = !0,
                            document.cookie = "lpZineOneProViewedCodeFBLFlag=true; domain=.verizon.com; path=/;",
                            document.cookie = "lpZineOneProViewedCodeFBLFlag=true; domain=.verizonwireless.com; path=/;"),
                            W(Dn)
                    }
            } catch (e) {}
        }
        function s() {
            try {
                function e() {
                    "undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.lpUtilsService && null != EchannelVera.lpUtilsService && void 0 !== EchannelVera.lpUtilsService.getAuthJWTToken && null != EchannelVera.lpUtilsService.getAuthJWTToken && Z() && EchannelVera.lpUtilsService.getAuthJWTToken()
                }
                try {
                    var t = window.sessionStorage.getItem("wjt")
                } catch (e) {}
                V(),
                null != t && "" !== t || e()
            } catch (e) {}
        }
        function c(e) {
            var t = "";
            try {
                var n = k("LP_CHAT_IN_PROGRESS");
                t = null != k("lp_jwt_wln") && "" != k("lp_jwt_wln") && null != n && "Y" == n ? k("lp_jwt_wln") : window.sessionStorage.getItem("wjt")
            } catch (e) {
                t = window.sessionStorage.getItem("wjt"),
                    console.log("LPCB error" + e)
            }
            try {
                null != t && "" !== t ? e(t) : e(null, "JWT error")
            } catch (e) {}
        }
        function p(e) {
            var t = "";
            try {
                var n = k("LP_CHAT_IN_PROGRESS");
                t = null != k("lp_jwt_wln") && "" != k("lp_jwt_wln") && null != n && "Y" == n ? k("lp_jwt_wln") : window.sessionStorage.getItem("wjt")
            } catch (e) {
                t = window.sessionStorage.getItem("wjt"),
                    console.log("LPCB error" + e)
            }
            try {
                null != t && "" !== t ? e(t) : e(null, "JWT error")
            } catch (e) {}
        }
        function v() {
            try {
                if (Ln > 1e4 ? Ln += Ln : Ln <= 1e4 && (Ln += 1e3),
                Ln > 6e4)
                    return;
                if ("undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.lpUtilsService && null != EchannelVera.lpUtilsService && void 0 !== EchannelVera.lpUtilsService.isUnifiedButtonEnabled && null != EchannelVera.lpUtilsService.isUnifiedButtonEnabled && Ln < 6e4 && EchannelVera.lpUtilsService.isUnifiedButtonEnabled()) {
                    try {
                        try {
                            B(),
                            "N" == VZ_Chat.getCookie("lp_jwt_wireless") && null != window.sessionStorage.getItem("wjt") && "" != window.sessionStorage.getItem("wjt") && window.sessionStorage.removeItem("wjt")
                        } catch (e) {
                            console.log("loggedin MDN changes 7")
                        }
                        d()
                    } catch (e) {
                        console.log("check HICB" + e)
                    }
                    setTimeout(v, Ln)
                }
            } catch (e) {
                console.log("err" + e)
            }
        }
        function u() {
            try {
                if (yn > 1e4 ? yn += yn : yn <= 1e4 && (yn += 1e3),
                yn > 6e4)
                    return;
                try {
                    d()
                } catch (e) {
                    console.log("HideCB" + e)
                }
                setTimeout(u, yn)
            } catch (e) {
                console.log("err" + hiderr)
            }
        }
        function g(e) {
            try {
                var t = e.data;
                if (t.isAuthToken) {
                    var n = t.token;
                    window.sessionStorage.setItem("wjt", n);
                    try {
                        window.location.host.split(".").length > 0 && ("www" == window.location.host.split(".")[0].toLowerCase() || -1 != window.location.host.split(".")[0].toLowerCase().indexOf("vzwqa")) && (document.cookie = "lp_jwt_wireless=Y;path=/;domain=verizon.com",
                            document.cookie = "lp_jwt_wireless=Y;path=/;domain=verizonwireless.com")
                    } catch (e) {
                        console.log("loggedin MDN changes 8")
                    }
                }
            } catch (e) {}
        }
        function h(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = w(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0
                        , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var l, a = !0, d = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                        e
                },
                e: function(e) {
                    d = !0,
                        l = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (d)
                            throw l
                    }
                }
            }
        }
        function w(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return z(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? z(e, t) : void 0
            }
        }
        function z(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function f(e) {
            try {
                "undefined" != typeof lpTag && null != e && null != e && (void 0 !== lpTag.sdes.get().service && null != lpTag.sdes.get().service && (lpTag.sdes.get().service = []),
                    lpTag.sdes.push(e))
            } catch (e) {
                console.log("updateLivechatevents error " + e)
            }
        }
        function h(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = w(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0
                        , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var l, a = !0, d = !1;
            return {
                s: function() {
                    n = e[Symbol.iterator]()
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                        e
                },
                e: function(e) {
                    d = !0,
                        l = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (d)
                            throw l
                    }
                }
            }
        }
        function w(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return z(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? z(e, t) : void 0
            }
        }
        function z(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function m() {}
        function L(e) {
            lpTag.external = lpTag.external || {},
                lpTag.external.custEngagement = {
                    engNameString: "Error",
                    placeholder: "We see you are experiencing issues with your order. Chat now to connect to a live agent for further assistance.",
                    customizeProactive: function(e) {
                        var t, n;
                        if (!e.eng.engData.engagementName.includes(lpTag.external.custEngagement.engNameString))
                            return !1;
                        var o = lpTag.external.custEngagement._getErrorText();
                        if (!o)
                            return !1;
                        var i = document.getElementById(null == e || null === (t = e.eng) || void 0 === t || null === (n = t.mainContainer) || void 0 === n ? void 0 : n.id)
                            , l = lpTag.external.custEngagement._findNode(lpTag.external.custEngagement.placeholder, i);
                        l.parentNode.replaceChild(document.createTextNode(o), l)
                    },
                    customizeOpener: function() {
                        var e = lpTag.external.custEngagement._getErrorText();
                        if (!e)
                            return !1;
                        var t = document.querySelectorAll("[data-lp-point='lines_area']");
                        if (!t)
                            return !1;
                        var n = new MutationObserver((function(t) {
                                var n, o = h(t);
                                try {
                                    for (o.s(); !(n = o.n()).done; ) {
                                        var i = n.value;
                                        if (i.addedNodes.length > 0) {
                                            var l = lpTag.external.custEngagement._findNode(lpTag.external.custEngagement.placeholder, i.target);
                                            l && l.parentNode.replaceChild(document.createTextNode(e), l)
                                        }
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                            }
                        ));
                        t.forEach((function(e) {
                                n.observe(e, {
                                    childList: !0
                                })
                            }
                        ))
                    },
                    _getErrorText: function() {
                        return e
                    },
                    _findNode: function(e, t) {
                        if (3 === t.nodeType && t.textContent.includes(e))
                            return t;
                        for (var n = 0; n < t.childNodes.length; n += 1) {
                            var o = t.childNodes[n]
                                , i = lpTag.external.custEngagement._findNode(e, o);
                            if (!1 !== i)
                                return i
                        }
                        return !1
                    }
                },
                lpTag.events.bind({
                    eventName: "AFTER_CREATE_ENGAGEMENT_INSTANCE",
                    appName: "RENDERER_STUB",
                    func: lpTag.external.custEngagement.customizeProactive
                }),
                lpTag.events.bind({
                    eventName: "state",
                    appName: "lpUnifiedWindow",
                    func: lpTag.external.custEngagement.customizeOpener
                })
        }
        function y() {
            try {
                fetch("https://soe-hivv-nssit1.ebiz.verizon.com/cartservice/cart/removeLock", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    }
                }).then((function(e) {
                        e.json().then((function(e) {
                                console.log(e)
                            }
                        ))
                    }
                ))
            } catch (e) {}
        }
        function C() {
            try {
                return en + "||" + tn
            } catch (e) {
                return ""
            }
        }
        function _() {
            try {
                "undefined" != typeof hideconnectwithus && null != hideconnectwithus && "function" == typeof hideconnectwithus && hideconnectwithus(),
                    window.lpTag.taglets.rendererStub.click(nn),
                document.getElementById("inqC2CImgContainer_Fixed1") && (document.getElementById("inqC2CImgContainer_Fixed1").style.display = "block"),
                document.getElementById("nuance-chat-container-1") && (document.getElementById("nuance-chat-container-1").style.display = "block"),
                document.getElementById("nuance-chat-container-2") && (document.getElementById("nuance-chat-container-2").style.display = "block")
            } catch (e) {}
        }
        function T() {
            try {
                return void 0 !== window.lpTag && null != window.lpTag && "" != window.lpTag
            } catch (e) {}
        }
        function I() {
            try {
                var e = document.querySelectorAll("[data-lp-point='chat_input']")[0];
                void 0 !== e && null != e && "" != e && (e.value = "Live chat");
                var t = document.querySelectorAll("[data-lp-point='send_button']")[0];
                void 0 !== t && null != t && "" != t && (t.disabled = !1,
                    t.click())
            } catch (e) {}
        }
        function D() {
            try {
                var e = "";
                void 0 !== document.getElementsByClassName("lp_header lpc_maximized-header lpc_desktop")[0] && (e = document.getElementsByClassName("lp_header lpc_maximized-header lpc_desktop")[0]),
                void 0 !== e && "" != e && (e.style.backgroundColor = "white",
                    e.style.borderColor = "white");
                var t = "";
                void 0 !== document.getElementsByClassName("lp_transcript_widget lp_lpview_widgetContent transcript_scroll lpc_layout lpc_layout_maximized lpc_desktop")[0] && (t = document.getElementsByClassName("lp_transcript_widget lp_lpview_widgetContent transcript_scroll lpc_layout lpc_layout_maximized lpc_desktop")[0]),
                void 0 !== t && "" != t && (t.style.backgroundColor = "white");
                var n = "";
                void 0 !== document.getElementsByClassName("lp_lpview_mp lp_main_area")[0] && (n = document.getElementsByClassName("lp_lpview_mp lp_main_area")[0]),
                void 0 !== n && "" != n && (n.style.backgroundColor = "white");
                var o = "";
                void 0 !== document.getElementsByClassName("lp_top-text lpc_maximized-header__text lpc_desktop")[0] && (o = document.getElementsByClassName("lp_top-text lpc_maximized-header__text lpc_desktop")[0]),
                void 0 !== o && "" != o && (o.style.color = "black");
                var i = "";
                void 0 !== document.querySelectorAll("[data-lp-point='minimize_icon']")[0] && (i = document.querySelectorAll("[data-lp-point='minimize_icon']")[0]),
                void 0 !== i && "" != i && (i.className = "lp_minimize-icon lp_icon-black");
                var l = "";
                void 0 !== document.getElementsByClassName("lp_close-icon lp_icon-white")[0] && (l = document.getElementsByClassName("lp_close-icon lp_icon-white")[0]),
                void 0 !== l && "" != l && (l.className = "lp_close-icon lp_icon-black");
                var a = "";
                void 0 !== document.getElementsByClassName("lp_close-icon lp_icon-white")[0] && (a = document.getElementsByClassName("lp_close-icon lp_icon-white")[0]),
                void 0 !== a && "" != a && (a.className = "lp_close-icon lp_icon-black")
            } catch (e) {}
        }
        function S() {
            var e = "";
            return "undefined" != typeof vzwDL && null != vzwDL ? e = vzwDL : "undefined" != typeof vzdl && null != vzdl && (e = vzdl),
                e
        }
        function x(e) {
            try {
                return void 0 !== e && null != e && "" != e
            } catch (e) {
                return !1
            }
        }
        function k(e) {
            var t = null;
            if (e += "=",
            document.cookie && "" != document.cookie)
                for (var n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                    var i = n[o].trim();
                    if (i.substring(0, e.length) == e) {
                        t = i.substring(e.length);
                        break
                    }
                }
            return t
        }
        function P(e) {
            try {
                var t = "";
                void 0 !== VZ_Chat.getCookie("amID") && null != VZ_Chat.getCookie("amID") && "" != VZ_Chat.getCookie("amID") && (t = VZ_Chat.getCookie("amID")),
                void 0 !== window.triggerFBLFromLiveChat && null != window.triggerFBLFromLiveChat && "function" == typeof window.triggerFBLFromLiveChat && window.triggerFBLFromLiveChat(e, "82", t)
            } catch (e) {}
        }
        function O() {
            try {
                void 0 !== window.triggerFBLFromLiveChat && null != window.triggerFBLFromLiveChat && "function" == typeof window.triggerFBLFromLiveChat && window.triggerFBLFromLiveChat("Overlay", "81", "overlayclicked")
            } catch (e) {}
        }
        function E() {
            try {
                if (In)
                    return;
                if (void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length) {
                    var e = {};
                    if (0 != Object.keys(Rt).length && (e = Rt),
                    void 0 !== Dn.Embedded && null != Dn.Embedded && "Y" == Dn.Embedded) {
                        var t = "";
                        0 != Object.keys(e).length && void 0 !== e.embedded_soi_id && null != e.embedded_soi_id && "" != e.embedded_soi_id && (t = e.embedded_soi_id),
                            F("event244", "LPNBXExposed", t, ""),
                            P("Embedded")
                    }
                    if (void 0 !== Dn.Sticky && null != Dn.Sticky && "Y" == Dn.Sticky) {
                        var n = "";
                        0 != Object.keys(e).length && void 0 !== e.sticky_soi_id && null != e.sticky_soi_id && "" != e.sticky_soi_id && (n = e.sticky_soi_id),
                            F("event245", "LPNBXExposed", n, ""),
                            P("Sticky")
                    }
                    if (void 0 !== Dn.Overlay && null != Dn.Overlay && "Y" == Dn.Overlay) {
                        var o = "";
                        0 != Object.keys(e).length && void 0 !== e.overlay_soi_id && null != e.overlay_soi_id && "" != e.overlay_soi_id && (o = e.overlay_soi_id),
                            F("event246", "LPNBXExposed", o, ""),
                            P("Overlay")
                    }
                }
            } catch (e) {}
        }
        function N() {
            try {
                return
            } catch (e) {}
        }
        function b() {
            try {
                return
            } catch (e) {}
        }
        function A() {
            try {
                return
            } catch (e) {}
        }
        function V() {
            try {
                if ("undefined" == typeof lpTag || null == lpTag || -1 != lpTag.section.indexOf("Auth:true") || -1 != lpTag.section.indexOf("auth:true"))
                    return;
                var e = !1
                    , t = window.sessionStorage.getItem("wjt");
                if (("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.authentication && null != vzwDL.authentication && "" != vzwDL.authentication && vzwDL.authentication.mdn && void 0 !== t && null != t && "" != t || Z() && void 0 !== t && null != t && "" != t) && (e = !0),
                    e) {
                    try {
                        function n(e) {
                            var t = (new Date).getTime() + "" + parseInt(1e3 * Math.random());
                            try {
                                "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.authentication && null != vzwDL.authentication ? void 0 !== vzwDL.authentication.mdn && null != vzwDL.authentication.mdn && "" != vzwDL.authentication.mdn && vzwDL.authentication.mdn.length > 5 ? t = vzwDL.authentication.mdn : void 0 !== vzwDL.authentication.visHashedMdn && null != vzwDL.authentication.visHashedMdn && "" != vzwDL.authentication.visHashedMdn && vzwDL.authentication.visHashedMdn.length > 5 && (t = vzwDL.authentication.visHashedMdn) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.user && null != vzdl.user && "" != vzdl.user && void 0 !== vzdl.user.id && null != vzdl.user.id && "" != vzdl.user.id && (t = vzdl.user.id)
                            } catch (e) {}
                            e({
                                iss: "verizon.com",
                                acr: "loa1",
                                sub: t
                            })
                        }
                        lpTag.identities = [],
                            lpTag.identities.push(n)
                    } catch (e) {}
                    if (In && lpTag.section.push("Auth:true"),
                    st || Je())
                        return;
                    var o = window.lpTag && window.lpTag.section || [];
                    "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && window.lpTag.newPage(document.URL, {
                        section: o,
                        sdes: [],
                        taglets: {}
                    })
                }
            } catch (e) {}
        }
        function B() {
            try {
                !Z() && (document.cookie = "lp_jwt_wireless=N;path=/;domain=verizon.com",
                    document.cookie = "lp_jwt_wireless=N;path=/;domain=verizonwireless.com")
            } catch (e) {
                console.log("loggedin MDN changes 9")
            }
        }
        function R() {
            try {
                return
            } catch (e) {}
        }
        function F(e, t, n, o) {
            try {
                if (null == VZ_Chat.getCookie("chatEventsFired") || "null" == VZ_Chat.getCookie("chatEventsFired"))
                    document.cookie = "chatEventsFired=" + e + "; domain=.verizon.com; path=/;",
                        document.cookie = "chatEventsFired=" + e + "; domain=.verizonwireless.com; path=/;";
                else if (null != VZ_Chat.getCookie("chatEventsFired") && "null" != VZ_Chat.getCookie("chatEventsFired") && -1 == VZ_Chat.getCookie("chatEventsFired").indexOf(e)) {
                    var i = VZ_Chat.getCookie("chatEventsFired") + "|" + e;
                    document.cookie = "chatEventsFired=" + i + "; domain=.verizon.com; path=/;",
                        document.cookie = "chatEventsFired=" + i + "; domain=.verizonwireless.com; path=/;"
                } else if (null != VZ_Chat.getCookie("chatEventsFired") && "null" != VZ_Chat.getCookie("chatEventsFired") && -1 != VZ_Chat.getCookie("chatEventsFired").indexOf(e))
                    return;
                at && void 0 !== window._chatsStoreSoi.firstPromotion && null != window._chatsStoreSoi.firstPromotion && "" != window._chatsStoreSoi.firstPromotion && void 0 !== window._chatsStoreSoi.firstPromotion.soiId && null != window._chatsStoreSoi.firstPromotion.soiId && "" != window._chatsStoreSoi.firstPromotion.soiId && (n = window._chatsStoreSoi.firstPromotion.soiId),
                "" != lt && (n = lt),
                void 0 !== e && null != e || (e = ""),
                void 0 !== n && null != n || (n = ""),
                void 0 !== o && null != o || (o = ""),
                void 0 !== t && null != t || (t = "");
                try {
                    "" != _t ? n = _t : null != VZ_Chat.getCookie("noNbaFlowSOIId") && "null" != VZ_Chat.getCookie("noNbaFlowSOIId") && "" != VZ_Chat.getCookie("noNbaFlowSOIId") && (n = VZ_Chat.getCookie("noNbaFlowSOIId"))
                } catch (e) {}
                if ("true" == e || 1 == e || "true" == t || 1 == t || "true" == o || 1 == o || "true" == n || 1 == n)
                    return;
                window.VZTAG_IS_READY ? "undefined" != typeof vztag && null != vztag && void 0 !== vztag.api && null != vztag.api && void 0 !== vztag.api.dispatch && null != vztag.api.dispatch && "function" == typeof vztag.api.dispatch && ("evar120" != e.toLowerCase() && ("LPNBXClicked" == t || "LPSalesClicked" == t ? vztag.api.dispatch("fragment", {
                    name: "chat: user sent message" + n,
                    event: e
                }) : vztag.api.dispatch("fragment", {
                    name: "LP targeted " + n,
                    event: e
                })),
                "" != o && vztag.api.dispatch("sendData", {
                    name: "LP data",
                    data: {
                        page: {
                            detail: "LP chat"
                        },
                        user: {
                            chatId: "vzw-" + o
                        },
                        target: {
                            engagement: {
                                id: n
                            }
                        }
                    }
                })) : document.addEventListener("vztagReady", (function() {
                        "undefined" != typeof vztag && null != vztag && void 0 !== vztag.api && null != vztag.api && void 0 !== vztag.api.dispatch && null != vztag.api.dispatch && "function" == typeof vztag.api.dispatch && ("evar120" != e.toLowerCase() && ("LPNBXClicked" == t || "LPSalesClicked" == t ? vztag.api.dispatch("fragment", {
                            name: "chat: user sent message" + n,
                            event: e
                        }) : vztag.api.dispatch("fragment", {
                            name: "LP targeted " + n,
                            event: e
                        })),
                        "" != o && vztag.api.dispatch("sendData", {
                            name: "LP data",
                            data: {
                                page: {
                                    detail: "LP chat"
                                },
                                user: {
                                    chatId: "vzw-" + o
                                },
                                target: {
                                    engagement: {
                                        id: n
                                    }
                                }
                            }
                        }))
                    }
                ))
            } catch (e) {}
        }
        function Z() {
            var e = !1;
            try {
                "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.authentication && null != vzwDL.authentication && "" != vzwDL.authentication && void 0 !== vzwDL.authentication.visHashedMdn && null != vzwDL.authentication.visHashedMdn && "" != vzwDL.authentication.visHashedMdn || "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.user && null != vzdl.user && "" != vzdl.user && void 0 !== vzdl.user.id && null != vzdl.user.id && "" != vzdl.user.id || "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && "" != vzwDL.page && void 0 !== vzwDL.page.authStatus && null != vzwDL.page.authStatus && "" != vzwDL.page.authStatus && "authenticated" == vzwDL.page.authStatus.toLowerCase() ? e = !0 : "undefined" == typeof vzdl || null == vzdl || "" == vzdl || void 0 === vzdl.user || null == vzdl.user || "" == vzdl.user || void 0 === vzdl.user.authStatus || null == vzdl.user.authStatus || "" == vzdl.user.authStatus || "authenticated" != vzdl.user.authStatus.toLowerCase() && "loggedin" != vzdl.user.authStatus.toLowerCase().replace(/ +/g, "") ? void 0 !== VZ_Chat.getCookie("loggedIn") && null != VZ_Chat.getCookie("loggedIn") && "" != VZ_Chat.getCookie("loggedIn") && "true" == VZ_Chat.getCookie("loggedIn").toLowerCase() && (e = !0) : e = !0
            } catch (e) {}
            return e
        }
        function M() {
            var e = "23979466";
            try {
                return -1 == window.location.hostname.toLowerCase().indexOf("vzwqa") && -1 == window.location.hostname.toLowerCase().indexOf("accessmgrqa") || (e = "87604225"),
                    e
            } catch (t) {
                return e
            }
        }
        function U(e) {
            try {
                void 0 !== e && null != e && "" != e && (lpTag.hooks = lpTag.hooks || [],
                    lpTag.hooks.push({
                        name: "AFTER_GET_LINES",
                        callback: function(t) {
                            const n = t.data.lines.findIndex((e=>(e.isWelcomeMessage,
                                e.isWelcomeMessage)));
                            return -1 !== n && (t.data.lines[n].text = e),
                                t
                        }
                    }))
            } catch (e) {}
        }
        function j(e) {
            console.log(e, "LP Button type");
            try {
                "" != e && (Nt = e.toLowerCase())
            } catch (e) {}
            if (!It) {
                It = !0;
                try {
                    Z() && ("sticky" == Nt && void 0 !== Dn.Opener_Verbiage_Sticky && null != Dn.Opener_Verbiage_Sticky && "" != Dn.Opener_Verbiage_Sticky ? U(Dn.Opener_Verbiage_Sticky) : "overlay" == Nt && void 0 !== Dn.Opener_Verbiage_Overlay && null != Dn.Opener_Verbiage_Overlay && "" != Dn.Opener_Verbiage_Overlay ? U(Dn.Opener_Verbiage_Overlay) : "embedded" == Nt && void 0 !== Dn.Opener_Verbiage_Embedded && null != Dn.Opener_Verbiage_Embedded && "" != Dn.Opener_Verbiage_Embedded && U(Dn.Opener_Verbiage_Embedded))
                } catch (e) {}
                try {
                    try {
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (Lt = !0)
                    } catch (e) {}
                    var t = "VZW-DOTCOM";
                    try {
                        null != window.sessionStorage.getItem("channelId") && "" != window.sessionStorage.getItem("channelId") && (t = window.sessionStorage.getItem("channelId"))
                    } catch (e) {}
                    if (Z() || Lt || "vzw-dotcom-mob" == t.toLowerCase())
                        G();
                    else {
                        VZ_Chat.initiateLPZineOnePDMAPI("onClickCall");
                        try {
                            We(),
                            void 0 !== document.getElementsByClassName("chatwithus__label")[0] && null != document.getElementsByClassName("chatwithus__label")[0] && "" != document.getElementsByClassName("chatwithus__label")[0].innerHTML && "Chat with us" == document.getElementsByClassName("chatwithus__label")[0].innerHTML && (document.getElementsByClassName("chatwithus__label")[0].innerHTML = "Connecting...")
                        } catch (e) {}
                    }
                } catch (e) {}
            }
        }
        function G() {
            try {
                try {
                    void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.Priority && null != Dn.Priority && Dn.Priority.length > 0 && void 0 !== Dn.Priority[0] && null != Dn.Priority[0] && "" != Dn.Priority[0].toLowerCase() && Bt != Dn.Priority[0] && "" != Dn.Priority[0] && (Le(),
                        be(),
                        ee(),
                        te())
                } catch (e) {}
                if (void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length) {
                    var e = {};
                    if (0 != Object.keys(Rt).length && (e = Rt),
                    void 0 !== Nt && null != Nt && "" != Nt && "embedded" == Nt.toLowerCase() && void 0 !== Dn.Embedded && null != Dn.Embedded && "Y" == Dn.Embedded) {
                        var t = "";
                        0 != Object.keys(e).length && void 0 !== e.embedded_soi_id && null != e.embedded_soi_id && "" != e.embedded_soi_id && (t = e.embedded_soi_id,
                            Ft = t,
                            document.cookie = "clickedLPNBXSoiId=" + t + "; domain=.verizon.com; path=/;",
                            document.cookie = "clickedLPNBXSoiId=" + t + "; domain=.verizonwireless.com; path=/;"),
                            F("event247", "LPNBXClicked", t, "")
                    }
                    if (void 0 !== Nt && null != Nt && "" != Nt && "sticky" == Nt.toLowerCase() && void 0 !== Dn.Sticky && null != Dn.Sticky && "Y" == Dn.Sticky) {
                        var n = "";
                        0 != Object.keys(e).length && void 0 !== e.sticky_soi_id && null != e.sticky_soi_id && "" != e.sticky_soi_id && (n = e.sticky_soi_id,
                            Ft = n,
                            document.cookie = "clickedLPNBXSoiId=" + n + "; domain=.verizon.com; path=/;",
                            document.cookie = "clickedLPNBXSoiId=" + n + "; domain=.verizonwireless.com; path=/;"),
                            F("event248", "LPNBXClicked", n, "")
                    }
                    if (void 0 !== Nt && null != Nt && "" != Nt && "overlay" == Nt.toLowerCase() && void 0 !== Dn.Overlay && null != Dn.Overlay && "Y" == Dn.Overlay) {
                        var o = "";
                        0 != Object.keys(e).length && void 0 !== e.overlay_soi_id && null != e.overlay_soi_id && "" != e.overlay_soi_id && (o = e.overlay_soi_id,
                            Ft = o,
                            document.cookie = "clickedLPNBXSoiId=" + o + "; domain=.verizon.com; path=/;",
                            document.cookie = "clickedLPNBXSoiId=" + o + "; domain=.verizonwireless.com; path=/;"),
                            Gt = !0
                    }
                }
                It = !1,
                    _e()
            } catch (e) {}
        }
        function H(e) {
            try {
                if (At)
                    return;
                if (At = !0,
                    Dn = e,
                    _n = !0,
                    me(),
                    Le(),
                    ye(),
                    Ce(),
                    console.log(e, "LP NBX params"),
                void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length) {
                    void 0 !== Dn.propositionId && null != Dn.propositionId && Dn.propositionId.length > 0 && (In = -1 != Dn.propositionId.indexOf("P_NoNBA") || -1 != Dn.propositionId.indexOf("No_NBA") || -1 != Dn.propositionId.indexOf("no_nba"));
                    var t = {};
                    if (0 != Object.keys(Rt).length && (t = Rt),
                    void 0 !== Dn.Embedded && null != Dn.Embedded && "Y" == Dn.Embedded) {
                        var n = "";
                        0 != Object.keys(t).length && void 0 !== t.embedded_soi_id && null != t.embedded_soi_id && "" != t.embedded_soi_id && (n = t.embedded_soi_id),
                            F("event241", "LPNBXTargeted", n, "")
                    }
                    if (void 0 !== Dn.Sticky && null != Dn.Sticky && "Y" == Dn.Sticky) {
                        var o = "";
                        0 != Object.keys(t).length && void 0 !== t.sticky_soi_id && null != t.sticky_soi_id && "" != t.sticky_soi_id && (o = t.sticky_soi_id),
                            F("event242", "LPNBXTargeted", o, "")
                    }
                    if (void 0 !== Dn.Overlay && null != Dn.Overlay && "Y" == Dn.Overlay) {
                        var i = "";
                        0 != Object.keys(t).length && void 0 !== t.overlay_soi_id && null != t.overlay_soi_id && "" != t.overlay_soi_id && (i = t.overlay_soi_id),
                            F("event243", "LPNBXTargeted", i, "")
                    }
                }
            } catch (e) {}
        }
        function W(e) {
            try {
                if (void 0 !== e.Overlay && null != typeof e.Overlay && "Y" == e.Overlay) {
                    var t = document.getElementById("vzChatWithUs");
                    if (pn && Pe() && -1 != vzdl.page.throttleList.indexOf("C_LPP"))
                        return;
                    if ("true" == VZ_Chat.getCookie("proActiveDisable" + Bt))
                        return !1;
                    if (void 0 !== e.Overlay && null != e.Overlay && "Y" == e.Overlay) {
                        var n = {};
                        0 != Object.keys(Rt).length && (n = Rt);
                        var o = "";
                        0 != Object.keys(n).length && void 0 !== n.overlay_soi_id && null != n.overlay_soi_id && "" != n.overlay_soi_id && (o = n.overlay_soi_id,
                            Ft = o,
                            document.cookie = "clickedLPNBXSoiId=" + o + "; domain=.verizon.com; path=/;",
                            document.cookie = "clickedLPNBXSoiId=" + o + "; domain=.verizonwireless.com; path=/;"),
                            Gt = !0
                    }
                    if (void 0 !== t && null != t)
                        if (0 != e.Overlay_TimeDelay) {
                            var i = 1e3 * e.Overlay_TimeDelay;
                            setTimeout((function() {
                                    jt = !0,
                                        j("overlay")
                                }
                            ), i),
                                pn = !0,
                            Z() && !In && (Gt = !0)
                        } else
                            jt = !0,
                                pn = !0,
                                j("overlay"),
                            Z() && !In && (Gt = !0)
                }
            } catch (e) {}
        }
        function q() {
            console.log("called in nbx Init");
            var e = "";
            try {
                e = window.isRPSFlow
            } catch (e) {}
            try {
                null != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "" != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "true" == VZ_Chat.getCookie("lpFdvLockChatInProgress") && "undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.lpUtilsService && null != EchannelVera.lpUtilsService && void 0 !== EchannelVera.lpUtilsService.isUnifiedButtonEnabled && null != typeof EchannelVera.lpUtilsService.isUnifiedButtonEnabled && EchannelVera.lpUtilsService.isUnifiedButtonEnabled() && void 0 !== EchannelVera.lpUtilsService.removeUnifiedChatButton && null != EchannelVera.lpUtilsService.removeUnifiedChatButton && EchannelVera.lpUtilsService.removeUnifiedChatButton()
            } catch (e) {}
            try {
                if ("true" == window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS") && null != VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS") && "open" == VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS").toLowerCase())
                    return Mt = !0,
                        void (st = !0);
                if ("true" == e || 1 == e)
                    return;
                if (-1 != document.referrer.indexOf("configuration") && -1 != document.URL.indexOf("trade-in"))
                    return
            } catch (e) {}
            String.prototype.trim || (String.prototype.trim = function() {
                    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            );
            try {
                null != VZ_Chat.getCookie("isLpFirstMessage") && "" != VZ_Chat.getCookie("isLpFirstMessage") || (document.cookie = "isLpFirstMessage=true; domain=.verizon.com; path=/;",
                    document.cookie = "isLpFirstMessage=true; domain=.verizonwireless.com; path=/;")
            } catch (e) {}
            if ("interactive" === document.readyState || "complete" === document.readyState) {
                if (se()) {
                    try {
                        B(),
                        "N" == VZ_Chat.getCookie("lp_jwt_wireless") && null != window.sessionStorage.getItem("wjt") && "" != window.sessionStorage.getItem("wjt") && window.sessionStorage.removeItem("wjt")
                    } catch (e) {
                        console.log("loggedin MDN changes 3")
                    }
                    pe(),
                        X()
                }
            } else
                document.addownloadChatTagdEventListener("DOMContentLoaded", (function() {
                        if (se()) {
                            try {
                                B(),
                                "N" == VZ_Chat.getCookie("lp_jwt_wireless") && null != window.sessionStorage.getItem("wjt") && "" != window.sessionStorage.getItem("wjt") && window.sessionStorage.removeItem("wjt")
                            } catch (e) {
                                console.log("loggedin MDN changes 5")
                            }
                            pe(),
                                X()
                        }
                    }
                ))
        }
        function X() {
            try {
                J(),
                    Q(),
                    Y()
            } catch (e) {}
        }
        function Y() {
            ae(S()),
                de()
        }
        function Q() {
            K(),
                $(),
                Ve(),
                Ze(),
            ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.authentication) && x(vzwDL.authentication.visHashedMdn) && x(vzwDL.authentication.accountNumber) && "Y" != vzwDL.authentication.prepayInd && "1" != vzwDL.authentication.prepayInd || "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.user && null != vzdl.user && void 0 !== vzdl.user.id && null != vzdl.user.id && vzdl.user.id && void 0 !== vzdl.user.accountLast2 && null != vzdl.user.accountLast2 && vzdl.user.accountLast2 && "Y" != vzdl.user.accountType && "1" != vzdl.user.accountType) && le();
            var e = "";
            try {
                e = vzdl.error
            } catch (e) {}
            if (e && null != vzdl.error.code && null != vzdl.error.code && "" != vzdl.error.code) {
                var t, n;
                try {
                    t = vzdl.error.code.split("|")[0],
                        n = vzdl.error.code.split("|")[1]
                } catch (e) {}
                re(t, n)
            }
        }
        function J() {
            "undefined" == typeof vzwDL && "undefined" == typeof vzdl || ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.chat) ? chatVars = vzwDL.page.chat : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && x(vzdl.user) && x(vzdl.user.chatId) && (chatVars = vzdl.user.chatId),
                isReady = !0)
        }
        function K() {
            Le(),
                be();
            try {
                Fe(),
                    Re();
                var e = "";
                if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList && "" != vzdl.page.throttleList && (e = vzdl.page.throttleList),
                "" == e || -1 == e.indexOf("|ShowProactiveLiveChat|") && -1 == e.indexOf("|ProActiveChat|") || lpTag.section.push("ChannelOrchestrationExperience"),
                ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && "" != vzwDL.page && void 0 !== vzwDL.page.fireProactiveChat && null != vzwDL.page.fireProactiveChat && "" != vzwDL.page.fireProactiveChat && "y" == vzwDL.page.fireProactiveChat.toLowerCase() || "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.fireProactiveChat && null != vzdl.page.fireProactiveChat && "" != vzdl.page.fireProactiveChat && "y" == vzdl.page.fireProactiveChat.toLowerCase()) && "undefined" != typeof lpTag && null != lpTag && 0 != Object.keys(lpTag).length && lpTag && lpTag.section && lpTag.section.indexOf("CMP:5GHomeQR") <= -1) {
                    window.lpTag && window.lpTag.section;
                    lpTag.section.push("CMP:5GHomeQR")
                }
            } catch (e) {}
            ne(),
                ee(),
                te()
        }
        function $() {
            try {
                if (lpTag.sdes = window.lpTag.sdes || [],
                    lpTag.sdes.push({
                        type: "lead",
                        lead: {
                            topic: window.document.URL,
                            value: -1,
                            leadId: "Page View"
                        }
                    }),
                0 != Object.keys(Rt).length)
                    var e = {
                        type: "searchInfo",
                        keywords: ["type:PEGA", "customer_type:" + Sn, "page_name:" + Dn.Page_Location, "embedded_soi_id:" + Rt.embedded_soi_id, "sticky_soi_id:" + Rt.sticky_soi_id, "overlay_soi_id:" + Rt.overlay_soi_id, "sub_page_type:" + Dn.Sub_Page_Type, "priority:" + Bt, "other:" + Dn.Other]
                    };
                else
                    e = {
                        type: "searchInfo",
                        keywords: ["type:PEGA", "customer_type:" + Sn, "page_name:" + Dn.Page_Location, "sub_page_type:" + Dn.Sub_Page_Type, "priority:" + Bt, "other:" + Dn.Other]
                    };
                lpTag.sdes.push(e)
            } catch (e) {}
        }
        function ee() {
            try {
                lpTag.section.push("VZW"),
                (-1 !== document.referrer.toLowerCase().indexOf("5g") || -1 != window.document.URL.split("?")[0].toLowerCase().indexOf("5g")) && lpTag.section.push("5g"),
                    "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.section2) ? lpTag.section.push(VZ_Chat.replaceAll(vzwDL.page.section2)) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.siteSection && null != vzdl.page.siteSection && "" != vzdl.page.siteSection && lpTag.section.push(VZ_Chat.replaceAll(vzdl.page.siteSection)),
                    -1 != window.location.hostname.toLowerCase().indexOf("es-vzwqa") ? lpTag.section.push("spanish") : "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.language) ? lpTag.section.push(vzwDL.page.language) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && x(vzdl.page) && x(vzdl.page.language) && lpTag.section.push(vzdl.page.language);
                var t = "";
                try {
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && x(vzdl.page) && x(vzdl.page.flow) && (t = VZ_Chat.replaceAll(vzdl.page.flow))
                } catch (e) {}
                void 0 !== t && null != t && "" != t ? lpTag.section.push(t) : "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.flowName) && lpTag.section.push(VZ_Chat.replaceAll(vzwDL.page.flowName)),
                    "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.mlsEXP) ? lpTag.section.push(VZ_Chat.replaceAll(vzwDL.page.mlsEXP)) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.throttle && null != vzdl.page.throttle && "" != vzdl.page.throttle && lpTag.section.push(VZ_Chat.replaceAll(vzdl.page.throttle));
                try {
                    vzdl.error.code
                } catch (e) {}
                try {
                    if (null != vzdl.error.code && null != vzdl.error.code && "" != vzdl.error.code) {
                        var n, o = null, i = "";
                        try {
                            vzdl.error.code.split("|")[0],
                                n = vzdl.error.code.split("|")[1],
                            "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.error && null != vzdl.error && null != vzdl.error.soiResponse && null != (o = e(vzdl.error.soiResponse)) && (o = parseFloat(o)),
                            "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.error && null != vzdl.error && void 0 !== vzdl.error.proactiveChatIndicator && null != vzdl.error.proactiveChatIndicator && "" != vzdl.error.proactiveChatIndicator && (i = vzdl.error.proactiveChatIndicator),
                            ("y" == i.toLowerCase() || (null == o || o > .135 || isNaN(o)) && void 0 !== n && null != n && "" != n.trim()) && lpTag.section.push("Error:true"),
                            null != vzdl && null != vzdl.error && void 0 !== vzdl.error.proactiveChatCustomMSG && "" != vzdl.error.proactiveChatCustomMSG && null != vzdl.error.proactiveChatCustomMSG && L(proactiveChatCustomMSG)
                        } catch (e) {
                            console.log("extractSOIScore error " + e)
                        }
                    }
                } catch (e) {}
                var l = window.sessionStorage.getItem("wjt");
                ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.authentication && null != vzwDL.authentication && "" != vzwDL.authentication && vzwDL.authentication.mdn && void 0 !== l && null != l && "" != l && In || Z() && void 0 !== l && null != l && "" != l && In) && lpTag.section.push("Auth:true"),
                -1 == window.document.URL.indexOf("tlogin.verizonwireless.com") && -1 == window.document.URL.indexOf("login.verizonwireless.com") && -1 == window.document.URL.indexOf("login.verizon.com") || lpTag.section.push("defaultexclude"),
                    te()
            } catch (e) {}
        }
        function te() {
            if (!st && !Je() && -1 == window.navigator.userAgent.indexOf("MY_VZW_APP") && "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1) {
                var e = lpTag && lpTag.section || [];
                window.lpTag.newPage(document.URL, {
                    section: e,
                    sdes: [],
                    taglets: {}
                })
            }
        }
        function ne() {
            window.lpTag.events.bind("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE", (function(e) {
                    console.log(e),
                        nn = e.eng.engData.engagementId,
                        e.eng.engData.engagementId,
                    "Y" != Vt || In || xn || (r(),
                        xn = !0)
                }
            ))
        }
        function oe() {
            try {
                if (window.parent != window)
                    return;
                var e = document.createElement("style");
                e.type = "text/css",
                    e.innerText = bt,
                    document.head.appendChild(e),
                    window.lpTag = window.lpTag || {},
                    void 0 === window.lpTag._tagCount ? (window.lpTag = {
                        wl: lpTag.wl || null,
                        scp: lpTag.scp || null,
                        site: M(),
                        section: lpTag.section || "",
                        tagletSection: lpTag.tagletSection || null,
                        autoStart: !1 !== lpTag.autoStart,
                        ovr: lpTag.ovr || {},
                        _v: "1.10.0",
                        _tagCount: 1,
                        protocol: "https:",
                        events: {
                            bind: function(e, t, n) {
                                lpTag.defer((function() {
                                        lpTag.events.bind(e, t, n)
                                    }
                                ), 0)
                            },
                            trigger: function(e, t, n) {
                                lpTag.defer((function() {
                                        lpTag.events.trigger(e, t, n)
                                    }
                                ), 1)
                            }
                        },
                        defer: function(e, t) {
                            0 === t ? (this._defB = this._defB || [],
                                this._defB.push(e)) : 1 === t ? (this._defT = this._defT || [],
                                this._defT.push(e)) : (this._defL = this._defL || [],
                                this._defL.push(e))
                        },
                        load: function(e, t, n) {
                            var o = this;
                            setTimeout((function() {
                                    o._load(e, t, n)
                                }
                            ), 0)
                        },
                        _load: function(e, t, n) {
                            var o = e;
                            e || (o = this.protocol + "//" + (this.ovr && this.ovr.domain ? this.ovr.domain : "lptag.liveperson.net") + "/tag/tag.js?site=" + this.site);
                            var i = document.createElement("script");
                            i.setAttribute("charset", t || "UTF-8"),
                            n && i.setAttribute("id", n),
                                i.setAttribute("src", o),
                                document.getElementsByTagName("head").item(0).appendChild(i)
                        },
                        init: function() {
                            this._timing = this._timing || {},
                                this._timing.start = (new Date).getTime();
                            var e = this;
                            window.attachEvent ? window.attachEvent("onload", (function() {
                                    e._domReady("domReady")
                                }
                            )) : (window.addEventListener("DOMContentLoaded", (function() {
                                    e._domReady("contReady")
                                }
                            ), !1),
                                window.addEventListener("load", (function() {
                                        e._domReady("domReady")
                                    }
                                ), !1)),
                            void 0 === window._lptStop && this.load()
                        },
                        start: function() {
                            this.autoStart = !0
                        },
                        _domReady: function(e) {
                            this.isDom || (this.isDom = !0,
                                this.events.trigger("LPT", "DOM_READY", {
                                    t: e
                                })),
                                this._timing[e] = (new Date).getTime()
                        },
                        vars: lpTag.vars || [],
                        dbs: lpTag.dbs || [],
                        ctn: lpTag.ctn || [],
                        sdes: lpTag.sdes || [],
                        hooks: lpTag.hooks || [],
                        identities: lpTag.identities || [],
                        ev: lpTag.ev || []
                    },
                        lpTag.init()) : window.lpTag._tagCount += 1,
                    document.dispatchEvent(ct),
                    ie()
            } catch (e) {}
        }
        function ie() {
            try {
                lpTag.external = lpTag.external || {},
                    lpTag.external.assistedalyzer = {
                        countedLines: {},
                        convs: {},
                        callback: function(e) {
                            let t = lpTag.external.assistedalyzer;
                            e.data.lines.forEach((e=>{
                                    try {
                                        void 0 !== e.isWelcomeMessage && null != e.isWelcomeMessage && e.isWelcomeMessage && void 0 !== e.source && null != e.source && "agent" === e.source && (vn = dt && ("" != gn && -1 != gn.toLowerCase().indexOf("-o") || "" == gn) ? {
                                            type: "searchInfo",
                                            keywords: ["Welcome message text : " + un]
                                        } : {
                                            type: "searchInfo",
                                            keywords: ["Welcome message text : " + e.text]
                                        })
                                    } catch (e) {}
                                    if (e.history)
                                        return;
                                    if ("system" === e.source)
                                        return;
                                    let n = t.convs[e.convId] = t.convs[e.convId] || {
                                        id: e.convId,
                                        counts: {
                                            agent: 0,
                                            consumer: 0
                                        },
                                        assisted: !1
                                    };
                                    if (!n.assisted && "PENDING" !== e.state && !(e.convId?.indexOf("-") < 0 || t.countedLines[e.localId])) {
                                        switch (e.source) {
                                            case "agent":
                                                t.convs[e.convId].counts.agent++,
                                                    t.countedLines[e.localId] = e;
                                                break;
                                            case "visitor":
                                                t.convs[e.convId].counts.consumer++,
                                                    t.countedLines[e.localId] = e
                                        }
                                        n.counts.agent >= 4 && n.counts.consumer >= 4 && n.id === t.getLastConversationID() && ["chatting", "interactive"].includes(t.getLastConversationState()) && t.reportAssisted(e)
                                    }
                                }
                            ))
                        },
                        reportAssisted: function(e) {
                            this.convs[e.convId].assisted = !0,
                                console.log(`${e.convId} assisted at ${e.time}!`);
                            try {
                                null != VZ_Chat.getCookie("clickedLPNBXSoiId") && (Ft = VZ_Chat.getCookie("clickedLPNBXSoiId")),
                                    F("event235", "AgentAssisted", Ft, e.convId)
                            } catch (e) {}
                        },
                        getLastConversationState: function() {
                            return lpTag.events?.hasFired("lpUnifiedWindow", "state").reverse()[0]?.data?.state
                        },
                        getLastConversationID: function() {
                            let e = lpTag.events?.hasFired("lpUnifiedWindow", "conversationInfo").reverse().find((e=>e.data?.conversationId));
                            return e?.data?.conversationId
                        }
                    },
                    lpTag.hooks.push({
                        name: "AFTER_GET_LINES",
                        callback: lpTag.external.assistedalyzer.callback
                    })
            } catch (e) {}
        }
        function le() {
            try {
                if ("undefined" != typeof lpTag && null != lpTag) {
                    var e = "";
                    void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.authentication.custType && null != window.vzwDL.authentication && void 0 !== window.vzwDL.authentication.custType && null != window.vzwDL.authentication.custType && "" != window.vzwDL.authentication.custType ? e = window.vzwDL.authentication.custType : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.user && null != vzdl.user && void 0 !== vzdl.user.customerType && null != vzdl.user.customerType && "" != vzdl.user.customerType && (e = vzdl.user.customerType),
                        lpTag.sdes = window.lpTag.sdes || [];
                    var t, n = VZ_Chat.getCookie("GLOBALID");
                    void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.page && null != window.vzwDL.page && void 0 !== window.vzwDL.page.sessionId && null != window.vzwDL.page.sessionId && "" != window.vzwDL.page.sessionId ? t = window.vzwDL.page.sessionId : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.channelSession && null != vzdl.page.channelSession && "" != vzdl.page.channelSession ? t = vzdl.page.channelSession : null != window.sessionStorage.getItem("SESSION_ID") && null != window.sessionStorage.getItem("SESSION_ID") && "" != window.sessionStorage.getItem("SESSION_ID") ? t = window.sessionStorage.getItem("SESSION_ID") : void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.page && null != window.vzwDL.page && void 0 !== window.vzwDL.page.session && null != window.vzwDL.page.session && "" != window.vzwDL.page.session && (t = window.vzwDL.page.session),
                        void 0 !== t && void 0 !== n && null != t && null != n ? lpTag.sdes.push({
                            type: "ctmrinfo",
                            info: {
                                ctype: e,
                                storeZipCode: n,
                                storeNumber: t
                            }
                        }) : void 0 !== t && null != t ? lpTag.sdes.push({
                            type: "ctmrinfo",
                            info: {
                                ctype: e,
                                storeNumber: t
                            }
                        }) : void 0 !== n && null != n && lpTag.sdes.push({
                            type: "ctmrinfo",
                            info: {
                                ctype: e,
                                storeZipCode: n
                            }
                        })
                }
            } catch (e) {
                console.log("Sending global session id and vzw_session_id failed " + e)
            }
        }
        function ae() {
            try {
                var e = window.lpTag
                    , t = {};
                if ("undefined" != typeof vzwDL && null !== vzwDL && void 0 !== vzwDL.cart && null != vzwDL.cart ? t = vzwDL.cart : "undefined" != typeof vzdl && null !== vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && (t = vzdl.txn.product),
                Object.keys(t).length > 0) {
                    e.sdes = e.sdes || [];
                    var n = [];
                    void 0 !== t.items && null != t.items ? n = t.items : void 0 !== t.current && null != t.current && (n = t.current);
                    for (var o = {
                        type: "cart",
                        currency: "USD",
                        numItems: n.length,
                        products: []
                    }, i = 0; i < n.length; i++) {
                        var l = n[i]
                            , a = {
                            product: {}
                        };
                        l.name && (a.product.name = l.name,
                        void 0 !== e && null != e && Object.keys(e).length > 0 && "Decline Device Protection" == l.name && (e.section.push("DEVICEPROTECTIONDECLINED"),
                            te())),
                        l.category && (a.product.category = l.category),
                            l.productId ? a.product.sku = l.productId : l.id && (a.product.sku = l.id),
                            l.price ? a.product.price = l.price : l.nonRecurringPrice && (a.product.price = l.nonRecurringPrice),
                            l.quantity ? a.product.quantity = l.quantity : l.qty && (a.product.quantity = l.qty),
                            l.promoCode ? a.product.promoCode = l.promoCode : l.discount && (a.product.promoCode = l.discount),
                            o.products.push(a)
                    }
                    e.sdes.push(o)
                }
            } catch (e) {}
        }
        function de() {
            var e = {};
            if ("undefined" != typeof vzwDL && null !== vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase ? e = vzwDL.purchase : "undefined" != typeof vzdl && null !== vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && (e = vzdl.txn.product),
            Object.keys(e).length > 0) {
                lpTag.sdes = lpTag.sdes || [];
                var t = [];
                void 0 !== e.items && null != e.items ? t = e.items : void 0 !== e.current && null != e.current && (t = e.current),
                    lpTag.sdes = window.lpTag.sdes || [];
                "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.orderNumber && null != vzwDL.purchase.orderNumber && "" != vzwDL.purchase.orderNumber ? vzwDL.purchase.orderNumber : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.id && null != vzdl.txn.id && "" != vzdl.txn.id && vzdl.txn.id;
                var n = 0;
                try {
                    if ("undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.orderTotal && null != vzwDL.purchase.orderTotal && "" != vzwDL.purchase.orderTotal)
                        try {
                            n = parseFloat(vzwDL.purchase.orderTotal)
                        } catch (e) {}
                    else if ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.purchase) && x(vzwDL.purchase.orderTotal))
                        try {
                            n = parseFloat(vzwDL.purchase.orderTotal)
                        } catch (e) {}
                    else if ("undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.total && null != vzdl.txn.total && "" != vzdl.txn.total)
                        try {
                            n = parseFloat(vzdl.txn.total)
                        } catch (e) {}
                } catch (e) {}
                var o = "";
                "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.purchase) && x(vzwDL.purchase.orderNumber) ? o = vzwDL.purchase.orderNumber : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && x(vzdl.txn) && x(vzdl.txn.id) && (o = vzdl.txn.id);
                for (var i = {
                    type: "purchase",
                    currency: "USD",
                    orderId: o,
                    total: n,
                    cart: {
                        products: []
                    }
                }, l = 0; l < t.length; l++) {
                    var a = t[l]
                        , d = {
                        product: {}
                    };
                    a.name && (d.product.name = a.name),
                    a.category && (d.product.category = a.category),
                        a.productId ? d.product.sku = a.productId : a.id && (d.product.sku = a.id),
                        a.price ? d.product.price = a.price : a.nonRecurringPrice && (d.product.price = a.nonRecurringPrice),
                        i.cart.products.push(d)
                }
                var r = {
                    product: {}
                };
                "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingMethod && null != vzwDL.purchase.shippingMethod && "" != vzwDL.purchase.shippingMethod && (r.product.name = "Shipping Method: " + vzwDL.purchase.shippingMethod),
                    "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingState && null != vzwDL.purchase.shippingState && vzwDL.purchase.shippingState && "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingZipCode && null != vzwDL.purchase.shippingZipCode && vzwDL.purchase.shippingZipCode ? r.product.sku = vzwDL.purchase.shippingState + "," + vzwDL.purchase.shippingZipCode : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.shippingState && null != vzdl.txn.shippingState && vzdl.txn.shippingState && void 0 !== vzdl.txn.shippingZip && null != vzdl.txn.shippingZip && vzdl.txn.shippingZip && (r.product.sku = vzdl.txn.shippingState + "," + vzdl.txn.shippingZip),
                    i.cart.products.push(r)
            }
            "" != o && "none" != o && lpTag.sdes.push(i)
        }
        function re(t, n) {
            try {
                Jt = !0,
                    Wt = 0;
                var o = window.lpTag
                    , i = null
                    , l = "";
                if (o.sdes = o.sdes || [],
                "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.error && null != vzdl.error && void 0 !== vzdl.error.soiResponse && null != vzdl.error.soiResponse && null != (i = e(vzdl.error.soiResponse)) && (i = parseFloat(i)),
                "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.error && null != vzdl.error && void 0 !== vzdl.error.proactiveChatIndicator && null != vzdl.error.proactiveChatIndicator && "" != vzdl.error.proactiveChatIndicator && (l = vzdl.error.proactiveChatIndicator),
                null == i || isNaN(i)) {
                    if ("y" == l.toLowerCase()) {
                        a = {
                            type: "lead",
                            lead: {
                                topic: "PEGA-SOI",
                                value: l,
                                leadId: "ErrorId"
                            }
                        };
                        o.sdes.push(a)
                    }
                } else {
                    var a = {
                        type: "lead",
                        lead: {
                            topic: "SOI",
                            value: i,
                            leadId: "ErrorId"
                        }
                    };
                    o.sdes.push(a)
                }
                var d = {
                    type: "error",
                    error: {
                        message: n,
                        code: t
                    }
                };
                o.sdes.push(d)
            } catch (e) {}
        }
        function se() {
            try {
                if (null != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "" != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "true" == VZ_Chat.getCookie("lpFdvLockChatInProgress"))
                    return !0;
                if (Z()) {
                    var e = window.sessionStorage.getItem("wjt");
                    return void 0 !== e && null != e && "" != e || (setTimeout(ce, 1e3),
                        !1)
                }
                return !0
            } catch (e) {}
        }
        function ce() {
            try {
                var e = window.sessionStorage.getItem("wjt");
                if (void 0 !== e && null != e && "" != e || sn > 9) {
                    try {
                        B(),
                        "N" == VZ_Chat.getCookie("lp_jwt_wireless") && null != window.sessionStorage.getItem("wjt") && "" != window.sessionStorage.getItem("wjt") && window.sessionStorage.removeItem("wjt")
                    } catch (e) {
                        console.log("loggedinMDN changes")
                    }
                    pe(),
                        In ? VZ_Chat.initVars(cn.scrubber, cn.builder) : X()
                } else
                    sn++,
                        setTimeout(ce, 1e3)
            } catch (e) {}
        }
        function pe() {
            var e = window.sessionStorage.getItem("wjt");
            if (Z() && null != e && null != e && "" != e)
                try {
                    function t(e) {
                        var t = (new Date).getTime() + "" + parseInt(1e3 * Math.random());
                        try {
                            "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.authentication && null != vzwDL.authentication ? void 0 !== vzwDL.authentication.mdn && null != vzwDL.authentication.mdn && "" != vzwDL.authentication.mdn && vzwDL.authentication.mdn.length > 5 ? t = vzwDL.authentication.mdn : void 0 !== vzwDL.authentication.visHashedMdn && null != vzwDL.authentication.visHashedMdn && "" != vzwDL.authentication.visHashedMdn && vzwDL.authentication.visHashedMdn.length > 5 && (t = vzwDL.authentication.visHashedMdn) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.user && null != vzdl.user && "" != vzdl.user && void 0 !== vzdl.user.id && null != vzdl.user.id && "" != vzdl.user.id && (t = vzdl.user.id)
                        } catch (e) {}
                        e({
                            iss: "verizon.com",
                            acr: "loa1",
                            sub: t
                        })
                    }
                    lpTag.identities = [],
                        lpTag.identities.push(t)
                } catch (e) {}
            try {
                if ("undefined" != typeof lpTag && null != lpTag) {
                    null != VZ_Chat.getCookie("lpFdvLockChatInProgress") && null != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "" != VZ_Chat.getCookie("lpFdvLockChatInProgress") ? ze(VZ_Chat.getCookie("lpFdvLockChatInProgress")) : ze("false");
                    var n, o = VZ_Chat.getCookie("GLOBALID");
                    void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.page && null != window.vzwDL.page && void 0 !== window.vzwDL.page.sessionId && null != window.vzwDL.page.sessionId && "" != window.vzwDL.page.sessionId ? n = window.vzwDL.page.sessionId : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.channelSession && null != vzdl.page.channelSession && "" != vzdl.page.channelSession ? n = vzdl.page.channelSession : null != window.sessionStorage.getItem("SESSION_ID") && null != window.sessionStorage.getItem("SESSION_ID") && "" != window.sessionStorage.getItem("SESSION_ID") ? n = window.sessionStorage.getItem("SESSION_ID") : void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.page && null != window.vzwDL.page && void 0 !== window.vzwDL.page.session && null != window.vzwDL.page.session && "" != window.vzwDL.page.session && (n = window.vzwDL.page.session);
                    try {
                        var i = !1;
                        if (null != Ie("returnChatterWireless") && "" != Ie("returnChatterWireless") && ((i = Ie("returnChatterWireless")) || "true" == i)) {
                            var l = {
                                type: "service",
                                service: {
                                    topic: "RepeatMessager",
                                    status: 1
                                }
                            };
                            lpTag.sdes = window.lpTag.sdes || [],
                                lpTag.sdes.push(l)
                        }
                    } catch (e) {}
                    void 0 !== n && void 0 !== o && null != n && null != o ? lpTag.sdes.push({
                        type: "ctmrinfo",
                        info: {
                            storeZipCode: o,
                            storeNumber: n
                        }
                    }) : void 0 !== n && null != n ? lpTag.sdes.push({
                        type: "ctmrinfo",
                        info: {
                            storeNumber: n
                        }
                    }) : void 0 !== o && null != o && lpTag.sdes.push({
                        type: "ctmrinfo",
                        info: {
                            storeZipCode: o
                        }
                    }),
                    ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && "" != vzwDL.page && void 0 !== vzwDL.page.repeatLQSVisitor && null != vzwDL.page.repeatLQSVisitor && "" != vzwDL.page.repeatLQSVisitor && "y" == vzwDL.page.repeatLQSVisitor.toLowerCase() || "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.Return5GHLQ && null != vzdl.page.Return5GHLQ && "" != vzdl.page.Return5GHLQ && "y" == vzdl.page.Return5GHLQ.toLowerCase()) && lpTag.sdes.push({
                        type: "service",
                        service: {
                            topic: "LoopQual:5GHome",
                            status: 1
                        }
                    }),
                    ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && "" != vzwDL.page && void 0 !== vzwDL.page.repeatCartVisitor && null != vzwDL.page.repeatCartVisitor && "" != vzwDL.page.repeatCartVisitor && "y" == vzwDL.page.repeatCartVisitor.toLowerCase() || "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.Return5GHCart && null != vzdl.page.Return5GHCart && "" != vzdl.page.Return5GHCart && "y" == vzdl.page.Return5GHCart.toLowerCase()) && (lpTag.sdes.push({
                        type: "service",
                        service: {
                            topic: "LoopQual:5GHome",
                            status: 1
                        }
                    }),
                        lpTag.sdes.push({
                            type: "cart",
                            total: 0,
                            numItems: 1,
                            products: [{
                                product: {
                                    name: "SavedCart",
                                    category: "SavedCart:5GHome"
                                }
                            }]
                        }))
                }
            } catch (e) {}
            Ye() || (In ? he() : void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && "N" == Vt && (Ut = !0,
                he())),
                ge(),
                we()
        }
        function ve() {
            try {
                window.lpTag = window.lpTag || {},
                null != window.lpTag && null != window.lpTag && 0 != Object.keys(window.lpTag).length && lpTag.events.bind("lpUnifiedWindow", "state", (function() {
                        try {
                            for (var e = document.querySelectorAll("[data-lp-point='headerText']"), t = 0; t < e.length; t++)
                                headersData = e[t],
                                    Pn.observe(headersData, {
                                        childList: !0
                                    });
                            for (var n = document.querySelectorAll("[data-lp-point='widget_sdk']"), o = 0; o < n.length; o++)
                                inspicioData = n[o],
                                    On.observe(inspicioData, {
                                        attributes: !0
                                    });
                            for (var i = document.querySelectorAll("[data-lp-point='agent_is_typing']"), l = 0; l < i.length; l++)
                                agentTypingData = i[l],
                                    En.observe(agentTypingData, {
                                        attributes: !0
                                    })
                        } catch (e) {}
                    }
                ))
            } catch (e) {
                console.log(e)
            }
        }
        function ue() {
            try {
                var e = window.document.URL.toLowerCase();
                -1 == e.indexOf("tlogin.verizonwireless.com") && -1 == e.indexOf("login.verizonwireless.com") && -1 == e.indexOf("login.verizon.com") && -1 == e.indexOf("accessmgr") || u()
            } catch (e) {}
        }
        function ge() {
            try {
                lpTag.external = lpTag.external || {},
                    lpTag.external.convInfo = {
                        getData: function() {
                            var e = lpTag.events.hasFired("lpUnifiedWindow", "conversationInfo")
                                , t = lpTag.events.hasFired("lpUnifiedWindow", "state")
                                , n = lpTag.events.hasFired("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE")
                                , o = lpTag.events.hasFired("LP_OFFERS", "OFFER_CLICK")
                                , i = n.map(this._extractEngDetails) || []
                                , l = this._getLatest(o) || {}
                                , a = this._findRenderEvent(n, l.engagementId) || {}
                                , d = this._extractEngDetails(a)
                                , r = document.cookie.split("; ").find((function(e) {
                                    return e.startsWith("LPVID")
                                }
                            ))
                                , s = document.cookie.split("; ").find((function(e) {
                                    return e.startsWith("LPSID-".concat(lpTag.site))
                                }
                            ))
                                , c = r ? r.split("=")[1] : void 0
                                , p = s ? s.split("=")[1] : void 0
                                , v = this._getLatest(e, "visitorId")
                                , u = c !== v ? v : void 0;
                            return {
                                clickedEngagement: d,
                                latestSkillId: this._getLatest(e, "skill"),
                                latestAgentId: this._getLatest(e, "agentId"),
                                latestConvId: this._getLatest(e, "conversationId"),
                                latestAgentName: this._getLatest(e, "agentName"),
                                latestWindowState: this._getLatest(t, "state"),
                                displayedEngagements: i,
                                lpSid: p,
                                lpVid: c,
                                pid: u,
                                siteId: lpTag.site,
                                sections: lpTag.section
                            }
                        },
                        parseObjectProperties: function e(t, n) {
                            for (var o in t)
                                "object" == typeof t[o] && null !== t[o] ? (n('<div style="display:flex; width: 95%;background-color: rgb(0,0,0,0.2);margin-left:10px;margin-right: 10px;border-bottom: 1px solid rgb(0,0,0,.05);padding: 2px 5px;"><div style="font-weight: bold;width: 100%; color:rgb(0,0,0,.7);">' + o + "</div>"),
                                    e(t[o], n)) : t.hasOwnProperty(o) && n('<div style="display:flex; width: 95%;background-color: rgb(0,0,0,.05);margin-left:10px;margin-right: 10px;border-bottom: 1px solid rgb(0,0,0,.05);padding: 2px 5px;"><div style="width: 50%; color:rgb(0,0,0,.7);">' + o + '</div><div style="width:50%">' + t[o] + "</div></div>")
                        },
                        showData: function(e) {
                            if ($t.lastMessageTime = Date.now(),
                            e && e.data && e.data.line && "/convinfo" === e.data.line.text) {
                                var t = lpTag.external.convInfo.getData();
                                try {
                                    "undefined" === t.clickedEngagement && "" === t.clickedEngagement && null === t.clickedEngagement || !0 !== t.hasOwnProperty("clickedEngagement") || !0 === t.clickedEngagement.hasOwnProperty("container") && delete t.clickedEngagement.container
                                } catch (e) {
                                    console.log(e)
                                }
                                t.displayedEngagements.map((function(e) {
                                        return delete e.container,
                                            e
                                    }
                                ));
                                var n = document.createElement("div");
                                n.id = "lp_line_convinfo",
                                    lpTag.external.convInfo.parseObjectProperties(t, (function(e) {
                                            n.innerHTML += e
                                        }
                                    )),
                                    document.getElementsByClassName("lpc_transcript")[0].appendChild(n),
                                    e.data.line.text = "";
                                var o = document.getElementsByClassName("lp_location_center")[0];
                                o.scrollTop = o.scrollHeight
                            }
                        },
                        _getLatest: function(e, t) {
                            var n = void 0;
                            if (t) {
                                for (var o = e.length - 1; o >= 0; o--)
                                    if (e[o].data && e[o].data[t]) {
                                        n = e[o];
                                        break
                                    }
                            } else
                                n = e[e.length - 1];
                            return n && n.data ? t ? n.data[t] : n.data : void 0
                        },
                        _findRenderEvent: function(e, t) {
                            return e.find((function(e) {
                                    return e && e.data && e.data.conf && e.data.conf.id === t
                                }
                            ))
                        },
                        _extractEngDetails: function(e) {
                            var t = e.data && e.data.eng;
                            if (t && t.conf)
                                var n = {
                                    campaignId: t.conf.campaignId,
                                    engagementId: t.conf.id,
                                    engagementName: t.conf.name,
                                    skillId: t.conf.skillId,
                                    skillName: t.conf.skillName,
                                    container: t.mainContainer,
                                    windowId: t.conf.windowId
                                };
                            return n
                        }
                    },
                    lpTag.hooks.push({
                        name: "BEFORE_SEND_VISITOR_LINE",
                        callback: lpTag.external.convInfo.showData
                    })
            } catch (e) {
                console.log(e, "convinfo error")
            }
        }
        function he() {
            try {
                lpQueueHealthURL = -1 != window.location.hostname.toLowerCase().indexOf("vzwqa") ? "https://mobile-ppd-west.vzw.com/mfchatnode/rest/appasync/agentAvailability" : "https://mobile.vzw.com/mfchatnode/rest/appasync/agentAvailability",
                    window.lpTag.events.bind("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE", (function(e) {
                            function t() {
                                var t = vt.split(":")[0].replace("~", "");
                                try {
                                    -1 != t.indexOf("4G/5G") && (t = "Mobile Sales 4G 5G Home Internet")
                                } catch (e) {}
                                var n = {
                                    RequestParams: {
                                        skillAliasName: t,
                                        UniqueId: Qt,
                                        engagementName: gt,
                                        section: a
                                    }
                                };
                                (null == ut && null == ut || (n.RequestParams.priority = ut),
                                -1 != document.location.pathname.toLowerCase().indexOf("/stores/video-assist") || "undefined" != typeof videoChat_Lp_Flow_Indicator && null != videoChat_Lp_Flow_Indicator && "" != videoChat_Lp_Flow_Indicator) || fetch(lpQueueHealthURL, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(n)
                                }).then((function(t) {
                                        t.json().then((function(t) {
                                                try {
                                                    if (void 0 !== t && null != t && void 0 !== t.metrics && null != t.metrics && null != t.metrics.waitTimeForAgentAssignment_90thPercentile && void 0 !== t.metrics.waitTimeForAgentAssignment_90thPercentile && t.metrics.waitTimeForAgentAssignment_90thPercentile,
                                                    void 0 !== t && null != t && void 0 !== t.metrics && null != t.metrics && null != t.metrics.unassignedConversations && void 0 !== t.metrics.unassignedConversations && t.metrics.unassignedConversations,
                                                    void 0 !== t && null != t && void 0 !== t.metrics && null != t.metrics && void 0 !== t.available && null != t.available && (Zt = t.available),
                                                        Zt) {
                                                        try {
                                                            if (an.isLpChatShown = !0,
                                                            -1 == an.engagementAddedAfterChatShown.indexOf(e.eng.conf.name) && -1 == an.engagementAddedBeforeChatShown.indexOf(e.eng.conf.name)) {
                                                                an.engagementAddedAfterChatShown.push(e.eng.conf.name),
                                                                    an.engagementIdAddedAfterChatShown.push(e.eng.engData.engagementId);
                                                                var n = e.eng.conf.name
                                                                    , o = "";
                                                                o = n.split("-")[n.split("-").length - 1],
                                                                void 0 !== n && null != n && "" != n && "" != o && ("s" == o.toLowerCase() && F("event245", "LPSalesExposed", n, ""),
                                                                "e" == o.toLowerCase() && F("event244", "LPSalesExposed", n, ""),
                                                                "o" == o.toLowerCase() && (F("event246", "LPSalesExposed", n, ""),
                                                                dt && F("event259", "LPSalesExposed", n, "")))
                                                            }
                                                        } catch (e) {}
                                                        clearInterval(pt),
                                                        1 == Ut && (Ut = !1,
                                                            Wt += 1,
                                                            r());
                                                        try {
                                                            if (st || Je())
                                                                return;
                                                            if ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && "" != vzwDL.page && void 0 !== vzwDL.page.fireProactiveChat && null != vzwDL.page.fireProactiveChat && "" != vzwDL.page.fireProactiveChat && "y" == vzwDL.page.fireProactiveChat.toLowerCase() || "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.fireProactiveChat && null != vzdl.page.fireProactiveChat && "" != vzdl.page.fireProactiveChat && "y" == vzdl.page.fireProactiveChat.toLowerCase()) {
                                                                if ("undefined" != typeof lpTag && null != lpTag && 0 != Object.keys(lpTag).length && lpTag && lpTag.section && lpTag.section.indexOf("CMP:5GHomeQR") <= -1) {
                                                                    var i = window.lpTag && window.lpTag.section || [];
                                                                    i.push("CMP:5GHomeQR"),
                                                                    "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && window.lpTag.newPage(document.URL, {
                                                                        section: i,
                                                                        sdes: [],
                                                                        taglets: {}
                                                                    })
                                                                }
                                                            } else {
                                                                if ("Desktop" !== lpTag.device.familyName() && !$e())
                                                                    return !1;
                                                                if (!(e && e.eng && e.eng.engData && 1 === e.eng.engData.engagementType))
                                                                    return !1
                                                            }
                                                            if (pn && Pe() && -1 != vzdl.page.throttleList.indexOf("C_LPP"))
                                                                return !1;
                                                            if (("true" == VZ_Chat.getCookie("proActiveDisable" + Yt) || 1 == Ht) && 0 == Jt)
                                                                return !1;
                                                            try {
                                                                var l = e.eng.conf.name;
                                                                if (void 0 !== l && null != l && "" != l && -1 != l.toLowerCase().indexOf("-b"))
                                                                    return
                                                            } catch (e) {}
                                                            window.setTimeout((function() {
                                                                    var t = document.querySelector("input")
                                                                        , n = window.document.URL.toLowerCase();
                                                                    (void 0 === t || null == t || "" == t || -1 == n.indexOf("personalinfo.html") && -1 == n.indexOf("creditcheck-v2.html") && -1 == n.indexOf("contactinfo.html") && -1 == n.indexOf("creditcheck.html")) && (Gt = !0,
                                                                        lpTag.taglets.rendererStub.click(e.eng.engData.engagementId),
                                                                        pn = !0,
                                                                        jt = !0,
                                                                        Jt = !1)
                                                                }
                                                            ), 100)
                                                        } catch (e) {
                                                            console.log(e + "proactive error")
                                                        }
                                                    } else
                                                        try {
                                                            -1 == an.engagementAddedAfterChatShown.indexOf(e.eng.conf.name) && -1 == an.engagementAddedBeforeChatShown.indexOf(e.eng.conf.name) && (an.engagementAddedBeforeChatShown.push(e.eng.conf.name),
                                                                an.engagementIdAddedBeforeChatShown.push(e.eng.engData.engagementId))
                                                        } catch (e) {}
                                                } catch (e) {
                                                    console.log("queueHealthAPIerror " + e)
                                                }
                                            }
                                        ))
                                    }
                                ))
                            }
                            if (!Ye())
                                if (st || Je())
                                    d();
                                else {
                                    nn = e.eng.engData.engagementId,
                                    e.conf.skillName.split(":").length > 1 && (en = e.conf.skillName.split(":")[1].trim()),
                                        e.eng.engData.engagementId,
                                        tn = e.eng.conf.name,
                                    "Y" != Vt || In || xn || (r(),
                                        xn = !0);
                                    try {
                                        var n = tn.split("-");
                                        if (Z() && -1 != window.navigator.userAgent.indexOf("MY_VZW_APP")) {
                                            if (it(),
                                            n.length > 1 && "O" === n[n.length - 1].toUpperCase() && "function" == typeof window.invokeLPMVA && -1 != window.location.href.toLowerCase().indexOf("checkout") && (null != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat") || null != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat-wl") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat-wl") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat-wl")))
                                                return "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name ? (window.invokeLPMVA(vzdl.page.name, tn),
                                                    void console.log("Passing page name to MVA webview...... ")) : (console.log("Passing engagement name without page name to MVA webview...... "),
                                                    void window.invokeLPMVA("", tn));
                                            "function" == typeof window.invokeLPMVA && -1 != window.location.href.toLowerCase().indexOf("checkout") && "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && (null != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat") || null != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat-wl") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat-wl") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("ProChat-wl")) && (console.log("MVA default proactive timer..."),
                                                window.invokeLPMVA(vzdl.page.name, "Mobile_Sales-NC-Smartphones-10s-O"))
                                        }
                                    } catch (e) {}
                                    try {
                                        if (an.isLpChatShown && -1 == an.engagementAddedAfterChatShown.indexOf(e.eng.conf.name) && -1 == an.engagementAddedBeforeChatShown.indexOf(e.eng.conf.name)) {
                                            an.engagementAddedAfterChatShown.push(e.eng.conf.name),
                                                an.engagementIdAddedAfterChatShown.push(e.eng.engData.engagementId);
                                            var o = e.eng.conf.name
                                                , i = "";
                                            i = o.split("-")[o.split("-").length - 1],
                                            void 0 !== o && null != o && "" != o && "" != i && ("s" == i.toLowerCase() && F("event245", "LPSalesExposed", o, ""),
                                            "e" == i.toLowerCase() && F("event244", "LPSalesExposed", o, ""),
                                            "o" == i.toLowerCase() && (F("event246", "LPSalesExposed", o, ""),
                                            dt && F("event259", "LPSalesExposed", o, "")))
                                        }
                                    } catch (e) {}
                                    try {
                                        if (-1 == dn.indexOf(e.eng.conf.name)) {
                                            dn.push(e.eng.conf.name);
                                            o = e.eng.conf.name,
                                                i = "";
                                            i = o.split("-")[o.split("-").length - 1],
                                            void 0 !== o && null != o && "" != o && "" != i && ("s" == i.toLowerCase() && F("event242", "LPSalesTargeted", o, ""),
                                            "e" == i.toLowerCase() && F("event241", "LPSalesTargeted", o, ""),
                                            "o" == i.toLowerCase() && F("event243", "LPSalesTargeted", o, ""))
                                        }
                                    } catch (e) {}
                                    if (!(Wt > 0)) {
                                        try {
                                            v()
                                        } catch (e) {
                                            console.log("error setTimeoutAA" + e)
                                        }
                                        console.log("Engagement type : " + e.eng.engData.engagementType);
                                        var l = e.conf.skillName;
                                        if (vt != e.conf.skillName && (vt = e.conf.skillName),
                                        null !== l && "" !== l) {
                                            var a = "VZW";
                                            try {
                                                Qt = VZ_Chat.getCookie("LPVID"),
                                                    a += document.URL.split(".com")[1].split("?")[0].split("/").join("_")
                                            } catch (e) {}
                                            var s = e.conf.skillName.split(":")[0].replace("~", "");
                                            try {
                                                -1 != s.indexOf("4G/5G") && (s = "Mobile Sales 4G 5G Home Internet")
                                            } catch (e) {}
                                            var c = {
                                                RequestParams: {
                                                    skillAliasName: s,
                                                    UniqueId: Qt,
                                                    engagementName: e.eng.conf.name,
                                                    section: a
                                                }
                                            };
                                            if (e.conf.skillName.split(":").length > 1) {
                                                var p = e.conf.skillName.split(":")[1].split("P")[1];
                                                if (p > qt && (qt = p,
                                                    ut = e.conf.skillName.replace("~", ""),
                                                    gt = e.eng.conf.name),
                                                -1 != e.eng.conf.name.indexOf("-O")) {
                                                    console.log("engagement Type" + e.eng.conf.name),
                                                        console.log("Skill Name" + e.conf.skillName),
                                                    Yt != e.conf.skillName.split(":")[1].split(" ")[1] && (Yt = e.conf.skillName.split(":")[1].split(" ")[1]);
                                                    try {
                                                        "true" == VZ_Chat.getCookie("proActiveDisableOverlaytrial") && (void 0 === Yt || null == Yt || "" == Yt || "P1" != Yt && "P2" != Yt || 1 != lpTag.section.includes("overlaytrial") && (lpTag.section.push("overlaytrial"),
                                                            te()))
                                                    } catch (e) {}
                                                }
                                                c.RequestParams.priority = e.conf.skillName.replace("~", "")
                                            }
                                            try {
                                                e.conf.skillName.split(":").length > 1 && parseInt(Nn.split("P")[1]) < parseInt(e.conf.skillName.split(":")[1].trim().split("P")[1]) && (Nn = e.conf.skillName.split(":")[1].trim())
                                            } catch (e) {}
                                            if (-1 == document.location.pathname.toLowerCase().indexOf("/stores/video-assist") && ("undefined" == typeof videoChat_Lp_Flow_Indicator || null == videoChat_Lp_Flow_Indicator || "" == videoChat_Lp_Flow_Indicator))
                                                fetch(lpQueueHealthURL, {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify(c)
                                                }).then((function(n) {
                                                        n.json().then((function(n) {
                                                                void 0 !== n && null != n && void 0 !== n.metrics && null != n.metrics && null != n.metrics.waitTimeForAgentAssignment_90thPercentile && void 0 !== n.metrics.waitTimeForAgentAssignment_90thPercentile && n.metrics.waitTimeForAgentAssignment_90thPercentile,
                                                                void 0 !== n && null != n && void 0 !== n.metrics && null != n.metrics && null != n.metrics.unassignedConversations && void 0 !== n.metrics.unassignedConversations && n.metrics.unassignedConversations,
                                                                void 0 !== n && null != n && void 0 !== n.metrics && null != n.metrics && void 0 !== n.available && null != n.available && (Zt = n.available);
                                                                try {
                                                                    if (Zt) {
                                                                        try {
                                                                            if ((st || Je()) && setTimeout(d, 500),
                                                                                an.isLpChatShown = !0,
                                                                            -1 == an.engagementAddedAfterChatShown.indexOf(e.eng.conf.name) && -1 == an.engagementAddedBeforeChatShown.indexOf(e.eng.conf.name)) {
                                                                                an.engagementAddedAfterChatShown.push(e.eng.conf.name),
                                                                                    an.engagementIdAddedAfterChatShown.push(e.eng.engData.engagementId);
                                                                                var o = e.eng.conf.name
                                                                                    , i = "";
                                                                                i = o.split("-")[o.split("-").length - 1],
                                                                                void 0 !== o && null != o && "" != o && "" != i && ("s" == i.toLowerCase() && F("event245", "LPSalesExposed", o, ""),
                                                                                "e" == i.toLowerCase() && F("event244", "LPSalesExposed", o, ""),
                                                                                "o" == i.toLowerCase() && (F("event246", "LPSalesExposed", o, ""),
                                                                                dt && F("event259", "LPSalesExposed", o, "")))
                                                                            }
                                                                        } catch (e) {}
                                                                        clearInterval(pt),
                                                                        1 == Ut && (Ut = !1,
                                                                            Wt += 1,
                                                                            r());
                                                                        try {
                                                                            if (st || Je())
                                                                                return;
                                                                            if ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && "" != vzwDL.page && void 0 !== vzwDL.page.fireProactiveChat && null != vzwDL.page.fireProactiveChat && "" != vzwDL.page.fireProactiveChat && "y" == vzwDL.page.fireProactiveChat.toLowerCase() || "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.fireProactiveChat && null != vzdl.page.fireProactiveChat && "" != vzdl.page.fireProactiveChat && "y" == vzdl.page.fireProactiveChat.toLowerCase()) {
                                                                                if ("undefined" != typeof lpTag && null != lpTag && 0 != Object.keys(lpTag).length && lpTag && lpTag.section && lpTag.section.indexOf("CMP:5GHomeQR") <= -1) {
                                                                                    var l = window.lpTag && window.lpTag.section || [];
                                                                                    l.push("CMP:5GHomeQR"),
                                                                                    "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && window.navigator.userAgent.indexOf("MY_VZW_APP") <= -1 && window.lpTag.newPage(document.URL, {
                                                                                        section: l,
                                                                                        sdes: [],
                                                                                        taglets: {}
                                                                                    })
                                                                                }
                                                                            } else {
                                                                                if ("Desktop" !== lpTag.device.familyName() && !$e())
                                                                                    return !1;
                                                                                if (!(e && e.eng && e.eng.engData && 1 === e.eng.engData.engagementType))
                                                                                    return !1
                                                                            }
                                                                            if (pn && Pe() && -1 != vzdl.page.throttleList.indexOf("C_LPP"))
                                                                                return !1;
                                                                            if (("true" == VZ_Chat.getCookie("proActiveDisable" + Yt) || 1 == Ht) && 0 == Jt)
                                                                                return !1;
                                                                            try {
                                                                                var a = e.eng.conf.name;
                                                                                if (void 0 !== a && null != a && "" != a && -1 != a.toLowerCase().indexOf("-b"))
                                                                                    return
                                                                            } catch (e) {}
                                                                            window.setTimeout((function() {
                                                                                    var t = document.querySelector("input")
                                                                                        , n = window.document.URL.toLowerCase();
                                                                                    (void 0 === t || null == t || "" == t || -1 == n.indexOf("personalinfo.html") && -1 == n.indexOf("creditcheck-v2.html") && -1 == n.indexOf("contactinfo.html") && -1 == n.indexOf("creditcheck.html")) && (Gt = !0,
                                                                                        lpTag.taglets.rendererStub.click(e.eng.engData.engagementId),
                                                                                        pn = !0,
                                                                                        jt = !0,
                                                                                        Jt = !1)
                                                                                }
                                                                            ), 100)
                                                                        } catch (e) {
                                                                            console.log(e + "proactive error")
                                                                        }
                                                                    } else {
                                                                        try {
                                                                            -1 == an.engagementAddedAfterChatShown.indexOf(e.eng.conf.name) && -1 == an.engagementAddedBeforeChatShown.indexOf(e.eng.conf.name) && (an.engagementAddedBeforeChatShown.push(e.eng.conf.name),
                                                                                an.engagementIdAddedBeforeChatShown.push(e.eng.engData.engagementId))
                                                                        } catch (e) {}
                                                                        if (Xt = !1,
                                                                            Ut = !0,
                                                                            d(),
                                                                        "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && -1 != vzdl.page.name.toLowerCase().indexOf("gridwall_smartphones") && (Pe() && (-1 != vzdl.page.throttleList.indexOf("CB_I_P") || -1 != vzdl.page.throttleList.indexOf("CB_I")) || -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("CB_I_P") || -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("CB_I")) && Z()) {
                                                                            if ("undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.createChatButton && null != EchannelVera.createChatButton && "function" == typeof EchannelVera.createChatButton) {
                                                                                var s = document.getElementById("askvzStartButton");
                                                                                void 0 !== s && null != s || EchannelVera.createChatButton(),
                                                                                    st = !0
                                                                            }
                                                                        } else
                                                                            1 != Xt && "true" != Xt || (pt = setInterval(t, 3e4))
                                                                    }
                                                                } catch (e) {
                                                                    console.log("queueHealthAPIerror " + e)
                                                                }
                                                            }
                                                        ))
                                                    }
                                                ))
                                        }
                                    }
                                }
                        }
                    ))
            } catch (e) {
                console.log("agentAvi" + e)
            }
        }
        function we() {
            try {
                function e(e) {
                    var t = "";
                    if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList && "" != vzdl.page.throttleList && (t = vzdl.page.throttleList),
                    "" == t || -1 == t.indexOf("|ShowProactiveLiveChat|") && -1 == t.indexOf("|ProActiveChat|") || D(),
                    "init" === e.state) {
                        chatInitiated = !0,
                            l();
                        try {
                            "" != _t && (document.cookie = "noNbaFlowSOIId=" + _t + "; domain=.verizon.com; path=/;",
                                document.cookie = "noNbaFlowSOIId=" + _t + "; domain=.verizonwireless.com; path=/;"),
                                Kt = "true",
                                document.cookie = "lpFdvLockChatInProgress=" + Kt + "; domain=.verizon.com; path=/;",
                                document.cookie = "lpFdvLockChatInProgress=" + Kt + "; domain=.verizonwireless.com; path=/;",
                            null != VZ_Chat.getCookie("clickedLPNBXSoiId") && (Ft = VZ_Chat.getCookie("clickedLPNBXSoiId")),
                                F("event236", "UserInitiatedChat", Ft, n)
                        } catch (e) {}
                    }
                    if ("waiting" === e.state) {
                        if ("" != t && (-1 != t.indexOf("|ShowProactiveLiveChat|") || -1 != t.indexOf("|ProActiveChat|"))) {
                            if (null != VZ_Chat.getCookie("lpFirstMessageSent") && "" != VZ_Chat.getCookie("lpFirstMessageSent")) {
                                var o = VZ_Chat.getCookie("lpFirstMessageSent");
                                on = "true" == o
                            }
                            on || (on = !0,
                                document.cookie = "lpFirstMessageSent=" + on + "; domain=.verizon.com; path=/;",
                                document.cookie = "lpFirstMessageSent=" + on + "; domain=.verizonwireless.com; path=/;",
                                setTimeout(I, 1e3))
                        }
                        "undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.lpUtilsService && null != EchannelVera.lpUtilsService && void 0 !== EchannelVera.lpUtilsService.isUnifiedButtonEnabled && null != typeof EchannelVera.lpUtilsService.isUnifiedButtonEnabled && EchannelVera.lpUtilsService.isUnifiedButtonEnabled() && void 0 !== EchannelVera.lpUtilsService.removeUnifiedChatButton && EchannelVera.lpUtilsService.removeUnifiedChatButton()
                    } else if ("interactive" === e.state)
                        try {
                            Te("returnChatterWireless", !0, 24),
                            null != VZ_Chat.getCookie("clickedLPNBXSoiId") && (Ft = VZ_Chat.getCookie("clickedLPNBXSoiId")),
                                F("event238", "AgentInteraction", Ft, n)
                        } catch (e) {}
                    else if ("chatting" === e.state) {
                        try {
                            l();
                            try {
                                if (!In && !Z() && zt && (null == VZ_Chat.getCookie("lpZineOneProAcceptedCodeFBLFlagOverlay") || "" == VZ_Chat.getCookie("lpZineOneProAcceptedCodeFBLFlagOverlay") || "false" == VZ_Chat.getCookie("lpZineOneProAcceptedCodeFBLFlagOverlay")) && "overlay" == Nt) {
                                    if ("" != ft)
                                        for (var i = [], a = JSON.parse(JSON.stringify(kt)), d = JSON.parse(JSON.stringify(kt.customerResponse.responseList)), r = 0; r < d.length; r++)
                                            -1 != d[r].propositionName.toLowerCase().indexOf("overlay") && "overlay" == Nt && (d[r].dispositionOptionId = ft,
                                                i.push(d[r]));
                                    a.customerResponse.responseList = i,
                                        xe(a),
                                        document.cookie = "lpZineOneProAcceptedCodeFBLFlagOverlay=true; domain=.verizon.com; path=/;",
                                        document.cookie = "lpZineOneProAcceptedCodeFBLFlagOverlay=true; domain=.verizonwireless.com; path=/;"
                                }
                            } catch (e) {}
                            if ("undefined" == typeof vzdl || null == vzdl || void 0 === vzdl.page || null == vzdl.page || void 0 === vzdl.page.throttleList || null == vzdl.page.throttleList || -1 == vzdl.page.throttleList.indexOf("CHOP_T_G") || !Ot || "" == ht || null != VZ_Chat.getCookie("lpSOIProAcceptedCodeFBLFlag") && "" != VZ_Chat.getCookie("lpSOIProAcceptedCodeFBLFlag") && "false" != VZ_Chat.getCookie("lpSOIProAcceptedCodeFBLFlag") || (Pt.responseList[0].dispositionOptionId = ht,
                            Ct && (Pt.externalResponseList[0].dispositionOptionId = ht,
                                window.sessionStorage.setItem("lpRtdOfferAccepted", "Y")),
                                ke(Pt),
                                document.cookie = "lpSOIProAcceptedCodeFBLFlag=true; domain=.verizon.com; path=/;",
                                document.cookie = "lpSOIProAcceptedCodeFBLFlag=true; domain=.verizonwireless.com; path=/;"),
                            null != VZ_Chat.getCookie("isLpFirstMessage") && "" != VZ_Chat.getCookie("isLpFirstMessage") && "true" == VZ_Chat.getCookie("isLpFirstMessage")) {
                                try {
                                    Tt || null != VZ_Chat.getCookie("lpWelcomeMessageTextPushed") && "" != VZ_Chat.getCookie("lpWelcomeMessageTextPushed") && "false" != VZ_Chat.getCookie("lpWelcomeMessageTextPushed") || (lpTag.sdes.push(vn),
                                        Tt = !0,
                                        document.cookie = "lpWelcomeMessageTextPushed=true; domain=.verizon.com; path=/;",
                                        document.cookie = "lpWelcomeMessageTextPushed=true; domain=.verizonwireless.com; path=/;")
                                } catch (e) {}
                                null != VZ_Chat.getCookie("clickedLPNBXSoiId") && (Ft = VZ_Chat.getCookie("clickedLPNBXSoiId"));
                                try {
                                    if (!In && !Z() && void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.tier && null != Dn.tier && "" != Dn.tier) {
                                        var s = Dn.tier.split("_")
                                            , c = "";
                                        void 0 !== s && null != s && "" != s && void 0 !== s[1] && null != s[1] && "" != s[1] && s[1].length > 0 && (s[1].length > 1 ? c = s[1].substring(1) : 1 == s[1].length && (c = s[1]),
                                            F("event279=" + c, "AgentAssigned", Ft, n))
                                    }
                                } catch (e) {}
                                F("event237", "AgentAssigned", Ft, n),
                                    document.cookie = "isLpFirstMessage=false; domain=.verizon.com; path=/;",
                                    document.cookie = "isLpFirstMessage=false; domain=.verizonwireless.com; path=/;";
                                var p = lpTag.events.hasFired("LP_OFFERS", "OFFER_CLICK");
                                if (Gt && !In && null != Ft && "" != Ft && F("event249", "LPNBXClicked", Ft, ""),
                                Gt && !In && Z() && O(),
                                p.length > 0) {
                                    var v = p.length - 1
                                        , u = p[v].data.engagementName;
                                    p[v].data.engagementId;
                                    if (void 0 !== u && null != u && "" != u && Gt) {
                                        var g = "";
                                        g = (rn = u).split("-")[rn.split("-").length - 1],
                                        void 0 !== rn && null != rn && "" != rn && "o" == g.toLowerCase() && F("event249", "LPSalesClicked", rn, "")
                                    }
                                }
                            }
                        } catch (e) {}
                        jt = !1,
                            Ht = !0;
                        try {
                            "undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.lpUtilsService && null != EchannelVera.lpUtilsService && void 0 !== EchannelVera.lpUtilsService.isUnifiedButtonEnabled && null != typeof EchannelVera.lpUtilsService.isUnifiedButtonEnabled && EchannelVera.lpUtilsService.isUnifiedButtonEnabled() && void 0 !== EchannelVera.lpUtilsService.removeUnifiedChatButton && null != EchannelVera.lpUtilsService.removeUnifiedChatButton && EchannelVera.lpUtilsService.removeUnifiedChatButton()
                        } catch (e) {}
                        void 0 !== n && null != n && n && (document.cookie = "chatIdCookie=" + n + "; domain=.verizonwireless.com; path=/;",
                            document.cookie = "chatIdCookie=" + n + "; domain=.verizon.com; path=/;",
                        (null != VZ_Chat.getCookie("glassBoxCookieFlag") && "false" == VZ_Chat.getCookie("glassBoxCookieFlag") || null == VZ_Chat.getCookie("glassBoxCookieFlag") || "" == VZ_Chat.getCookie("glassBoxCookieFlag")) && (document.cookie = "glassBoxCookieFlag=true; domain=.verizon.com; path=/;",
                            document.cookie = "glassBoxCookieFlag=true; domain=.verizonwireless.com; path=/;",
                            window.dispatchEvent(new CustomEvent("newChat",{
                                bubbles: !0,
                                detail: {
                                    text: function() {
                                        return n
                                    }
                                }
                            }))))
                    } else if ("ended" === e.state)
                        try {
                            Gt = !1,
                            null != VZ_Chat.getCookie("clickedLPNBXSoiId") && (Ft = VZ_Chat.getCookie("clickedLPNBXSoiId")),
                                F("event239", "ChatClosed", Ft, n)
                        } catch (e) {}
                }
                lpTag.events.bind("lpUnifiedWindow", "state", e),
                    lpTag.events.bind("LP_OFFERS", "OFFER_CLICK", t);
                try {
                    lpTag.events.bind("lpUnifiedWindow", "maximized", (function() {
                            setTimeout((function() {
                                    var e = document.getElementsByClassName("lp_location_center")[0];
                                    void 0 !== e && null != e && (e.scrollTop = e.scrollHeight)
                                }
                            ), 500)
                        }
                    ))
                } catch (e) {}
                function t(e) {
                    try {
                        if (Kt = "true",
                            document.cookie = "lpFdvLockChatInProgress=" + Kt + "; domain=.verizon.com; path=/;",
                            document.cookie = "lpFdvLockChatInProgress=" + Kt + "; domain=.verizonwireless.com; path=/;",
                        "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList && -1 != vzdl.page.throttleList.indexOf("CHOP_T_G") && Ot && ke(Pt),
                        !In && !Z() && zt && (null == VZ_Chat.getCookie("lpZineOneProAcceptedCodeFBLFlag") || "" == VZ_Chat.getCookie("lpZineOneProAcceptedCodeFBLFlag") || "false" == VZ_Chat.getCookie("lpZineOneProAcceptedCodeFBLFlag")) && "overlay" != Nt) {
                            if ("" != ft)
                                for (var t = [], n = JSON.parse(JSON.stringify(kt)), o = JSON.parse(JSON.stringify(kt.customerResponse.responseList)), i = 0; i < o.length; i++)
                                    (-1 != o[i].propositionName.toLowerCase().indexOf("embedded") && "embedded" == Nt || -1 != o[i].propositionName.toLowerCase().indexOf("sticky") && "sticky" == Nt) && (o[i].dispositionOptionId = ft,
                                        t.push(o[i]));
                            n.customerResponse.responseList = t,
                                xe(n),
                                document.cookie = "lpZineOneProAcceptedCodeFBLFlag=true; domain=.verizon.com; path=/;",
                                document.cookie = "lpZineOneProAcceptedCodeFBLFlag=true; domain=.verizonwireless.com; path=/;"
                        }
                        if (void 0 !== e && null != e && "" != e && void 0 !== e.engagementName && null != e.engagementName && "" != e.engagementName && (gn = e.engagementName,
                            !Gt)) {
                            rn = e.engagementName,
                                e.engagementId;
                            var l = e.engagementName
                                , a = "";
                            a = l.split("-")[l.split("-").length - 1],
                            void 0 !== l && null != l && "" != l && ("s" == a.toLowerCase() && F("event248", "LPSalesClicked", l, ""),
                            "e" == a.toLowerCase() && F("event247", "LPSalesClicked", l, ""))
                        }
                    } catch (e) {}
                }
                lpTag.events.bind("lpUnifiedWindow", "windowClosed", (function() {
                        try {
                            gn = "",
                                Tt = !1,
                                Ct = !1,
                                !1,
                                document.cookie = "noNbaFlowSOIId=null; domain=.verizon.com; path=/;",
                                document.cookie = "noNbaFlowSOIId=null; domain=.verizonwireless.com; path=/;";
                            try {
                                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (Lt = !0)
                            } catch (e) {}
                            var e = "VZW-DOTCOM";
                            try {
                                null != window.sessionStorage.getItem("channelId") && "" != window.sessionStorage.getItem("channelId") && (e = window.sessionStorage.getItem("channelId"))
                            } catch (e) {}
                            void 0 !== window.jsvar_triggerLiveChatfromNBXResponse && null != window.jsvar_triggerLiveChatfromNBXResponse && 0 != Object.keys(window.jsvar_triggerLiveChatfromNBXResponse).length || Z() && "undefined" != typeof triggerNBXLPChatService && null != triggerNBXLPChatService && "function" == typeof triggerNBXLPChatService && triggerNBXLPChatService(Ee),
                            void 0 !== window.jsvar_triggerLiveChatfromNBXResponse && null != window.jsvar_triggerLiveChatfromNBXResponse && 0 != Object.keys(window.jsvar_triggerLiveChatfromNBXResponse).length && me(),
                            Z() || Lt || "vzw-dotcom-mob" == e.toLowerCase() || In || me(),
                            null != VZ_Chat.getCookie("chatEventsFired") && "null" != VZ_Chat.getCookie("chatEventsFired") && (document.cookie = "chatEventsFired=null; domain=.verizon.com; path=/;",
                                document.cookie = "chatEventsFired=null; domain=.verizonwireless.com; path=/;"),
                                document.cookie = "lpSOIProAcceptedCodeFBLFlag=false; domain=.verizon.com; path=/;",
                                document.cookie = "lpSOIProAcceptedCodeFBLFlag=false; domain=.verizonwireless.com; path=/;",
                                document.cookie = "lpZineOneProAcceptedCodeFBLFlag=false; domain=.verizon.com; path=/;",
                                document.cookie = "lpZineOneProAcceptedCodeFBLFlag=false; domain=.verizonwireless.com; path=/;",
                                document.cookie = "lpZineOneProViewedCodeFBLFlag=false; domain=.verizon.com; path=/;",
                                document.cookie = "lpZineOneProViewedCodeFBLFlag=false; domain=.verizonwireless.com; path=/;",
                                document.cookie = "lpZineOneProAcceptedCodeFBLFlagOverlay=false; domain=.verizon.com; path=/;",
                                document.cookie = "lpZineOneProAcceptedCodeFBLFlagOverlay=false; domain=.verizonwireless.com; path=/;",
                                document.cookie = "lpWelcomeMessageTextPushed=false; domain=.verizon.com; path=/;",
                                document.cookie = "lpWelcomeMessageTextPushed=false; domain=.verizonwireless.com; path=/;",
                                pn = !0,
                                "",
                                "",
                                n = "",
                                Gt = !1,
                                Ft = "",
                                document.cookie = "glassBoxCookieFlag=false; domain=.verizon.com; path=/;",
                                document.cookie = "glassBoxCookieFlag=false; domain=.verizonwireless.com; path=/;",
                                document.cookie = "clickedLPNBXSoiId=" + Ft + "; domain=.verizon.com; path=/;",
                                document.cookie = "clickedLPNBXSoiId=" + Ft + "; domain=.verizonwireless.com; path=/;",
                                document.cookie = "isLpFirstMessage=true; domain=.verizon.com; path=/;",
                                document.cookie = "isLpFirstMessage=true; domain=.verizonwireless.com; path=/;";
                            var t = k("LP_CHAT_IN_PROGRESS");
                            null != k("lp_jwt_wln") && "" != k("lp_jwt_wln") && null != t && "Y" == t && Cn("LP_CHAT_IN_PROGRESS", "N"),
                                on = !1,
                                document.cookie = "lpFirstMessageSent=" + on + "; domain=.verizon.com; path=/;",
                                document.cookie = "lpFirstMessageSent=" + on + "; domain=.verizonwireless.com; path=/;",
                            "undefined" != typeof displayconnectwithus && null != displayconnectwithus && "function" == typeof displayconnectwithus && displayconnectwithus(),
                                Kt = "false",
                                document.cookie = "lpFdvLockChatInProgress=" + Kt + "; domain=.verizon.com; path=/;",
                                document.cookie = "lpFdvLockChatInProgress=" + Kt + "; domain=.verizonwireless.com; path=/;",
                                te(),
                            "" != bn && "R" != bn.toUpperCase() && d()
                        } catch (e) {
                            console.log(e, "windowClosed error")
                        }
                        try {
                            1 == jt && "true" != VZ_Chat.getCookie("proActiveDisable" + Yt) && Pe() && -1 != vzdl.page.throttleList.indexOf("C_LPGO") && ("P1" != Yt && "P2" != Yt || (VZ_Chat.setLPCookie("proActiveDisableP1", !0, 24),
                                VZ_Chat.setLPCookie("proActiveDisableP2", !0, 24),
                                VZ_Chat.setLPCookie("proActiveDisableOverlaytrial", !0, 24),
                            1 != lpTag.section.includes("overlaytrial") && (lpTag.section.push("overlaytrial"),
                                te())))
                        } catch (e) {}
                        1 == jt && "true" != VZ_Chat.getCookie("proActiveDisable" + Yt) && (Pe() && -1 != vzdl.page.throttleList.indexOf("C_PPG") ? "P1" == Yt || "P2" == Yt ? (VZ_Chat.setLPCookie("proActiveDisableP1", !0, 24),
                            VZ_Chat.setLPCookie("proActiveDisableP2", !0, 24)) : "P3" == Yt || "P4" == Yt ? (VZ_Chat.setLPCookie("proActiveDisableP3", !0, 24),
                            VZ_Chat.setLPCookie("proActiveDisableP4", !0, 24)) : VZ_Chat.setLPCookie("proActiveDisable" + Yt, !0, 24) : VZ_Chat.setLPCookie("proActiveDisable" + Yt, !0, 24));
                        try {
                            if ("undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.lpUtilsService && null != EchannelVera.lpUtilsService && void 0 !== EchannelVera.lpUtilsService.isUnifiedButtonEnabled && null != typeof EchannelVera.lpUtilsService.isUnifiedButtonEnabled && EchannelVera.lpUtilsService.isUnifiedButtonEnabled()) {
                                try {
                                    B(),
                                    "N" == VZ_Chat.getCookie("lp_jwt_wireless") && null != window.sessionStorage.getItem("wjt") && "" != window.sessionStorage.getItem("wjt") && window.sessionStorage.removeItem("wjt")
                                } catch (e) {
                                    console.log("LoggedIn MDN changes 2")
                                }
                                window.hideLPChatButton(),
                                void 0 !== EchannelVera.lpUtilsService.createUnifiedChatButton && null != EchannelVera.lpUtilsService.createUnifiedChatButton && EchannelVera.lpUtilsService.createUnifiedChatButton()
                            }
                        } catch (e) {
                            console.log("CWclose" + e)
                        }
                    }
                ));
                var n = "";
                function o(e) {
                    void 0 !== e.visitorId && e.visitorId,
                    void 0 !== e.agentId && e.agentId,
                    void 0 !== e.conversationId && (console.log("function loaded"),
                        n = e.conversationId,
                    null != VZ_Chat.getCookie("clickedLPNBXSoiId") && (Ft = VZ_Chat.getCookie("clickedLPNBXSoiId")),
                        F("eVar120", "setConversationId", Ft, n))
                }
                lpTag.events.bind("lpUnifiedWindow", "conversationInfo", o)
            } catch (e) {
                console.log("CSerror" + e)
            }
            try {
                lpTag.events.bind("lpUnifiedWindow", "state", (function() {
                        var e = window.document.URL.toLowerCase();
                        -1 == e.indexOf("tlogin.verizonwireless.com") && -1 == e.indexOf("login.verizonwireless.com") && -1 == e.indexOf("login.verizon.com") && -1 == e.indexOf("accessmgr") || u()
                    }
                ))
            } catch (e) {
                console.log("HICB" + e)
            }
        }
        function ze(e) {
            try {
                var t = VZ_Chat.getCookie("lpFdvLockcookie");
                void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.authentication && null != window.vzwDL.authentication && void 0 !== window.vzwDL.authentication.fType && null != window.vzwDL.authentication.fType ? bn = window.vzwDL.authentication.fType : void 0 !== window.vzdl && null != window.vzdl && void 0 !== window.vzdl.authentication && null != window.vzdl.authentication && void 0 !== window.vzdl.authentication.fType && null != window.vzdl.authentication.fType ? bn = window.vzdl.authentication.fType : void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.page && null != window.vzwDL.page && void 0 !== window.vzwDL.page.fraudIndicator && null != window.vzwDL.page.fraudIndicator ? bn = window.vzwDL.page.fraudIndicator : void 0 !== window.vzdl && null != window.vzdl && void 0 !== window.vzdl.page && null != window.vzdl.page && void 0 !== window.vzdl.page.fraudIndicator && null != window.vzdl.page.fraudIndicator && (bn = window.vzdl.page.fraudIndicator),
                    "" != bn && "R" != bn.toUpperCase() ? (document.cookie = "lpFdvLockcookie=" + bn + "; domain=.verizon.com; path=/;",
                        document.cookie = "lpFdvLockcookie=" + bn + "; domain=.verizonwireless.com; path=/;",
                        "true" == e ? "undefined" != typeof lpTag && (lpTag.sdes = window.lpTag.sdes || [],
                            lpTag.sdes.push({
                                type: "mrktInfo",
                                info: {
                                    affiliate: bn
                                }
                            }),
                            console.log(bn, "lpFtype"),
                            console.log(e, "lpIschatting")) : d()) : null != t && null != t && "" != t && "R" != t.toUpperCase() && (bn = t,
                        "true" == e ? "undefined" != typeof lpTag && (lpTag.sdes = window.lpTag.sdes || [],
                            lpTag.sdes.push({
                                type: "mrktInfo",
                                info: {
                                    affiliate: bn
                                }
                            })) : d())
            } catch (e) {
                console.log("FDV lock error " + e)
            }
        }
        function fe(e) {
            try {
                null != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "" != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "true" == VZ_Chat.getCookie("lpFdvLockChatInProgress") ? In = !0 : void 0 !== e && null != e && e || "undefined" != typeof jsvar_isNextBestChannelFlow && null != jsvar_isNextBestChannelFlow && jsvar_isNextBestChannelFlow ? ln = !0 : In = !0
            } catch (e) {}
        }
        function me() {
            try {
                void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && (void 0 !== Dn.LC_Available && null != Dn.LC_Available && Dn.LC_Available.length > 0 && void 0 !== Dn.LC_Available[0] && null != Dn.LC_Available[0] && "true" == Dn.LC_Available[0].toLowerCase() ? (Vt = "Y",
                    a()) : Vt = "N")
            } catch (e) {}
        }
        function Le() {
            try {
                void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.Priority && null != Dn.Priority && Dn.Priority.length > 0 && void 0 !== Dn.Priority[0] && null != Dn.Priority[0] && "" != Dn.Priority[0].toLowerCase() && (Bt = Dn.Priority[0],
                    Yt = Dn.Priority[0]);
                try {
                    "true" == VZ_Chat.getCookie("proActiveDisableOverlaytrial") && (void 0 === Yt || null == Yt || "" == Yt || "P1" != Yt && "P2" != Yt || 1 != lpTag.section.includes("overlaytrial") && (lpTag.section.push("overlaytrial"),
                        te()))
                } catch (e) {}
            } catch (e) {}
        }
        function ye() {
            try {
                void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.SOI_Engagement_ids && null != Dn.SOI_Engagement_ids && Dn.SOI_Engagement_ids.length > 0 && void 0 !== Dn.SOI_Engagement_ids[0] && null != Dn.SOI_Engagement_ids[0] && 0 != Object.keys(Dn.SOI_Engagement_ids).length && (Rt = Dn.SOI_Engagement_ids[0])
            } catch (e) {}
        }
        function Ce() {
            try {
                void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.sessionId && null != Dn.sessionId && "" != Dn.sessionId && Dn.sessionId
            } catch (e) {}
        }
        function _e() {
            try {
                if ((-1 != document.location.pathname.toLowerCase().indexOf("/stores/video-assist") || "undefined" != typeof videoChat_Lp_Flow_Indicator && null != videoChat_Lp_Flow_Indicator && "" != videoChat_Lp_Flow_Indicator) && dn.length > 0)
                    for (var e = 0; e < dn.length; e++) {
                        var t = dn[e]
                            , n = (dn[e],
                            "");
                        n = t.split("-")[t.split("-").length - 1],
                        void 0 !== t && null != t && "" != t && "" != n && ("s" == n.toLowerCase() && F("event245", "LPSalesExposed", t, ""),
                        "e" == n.toLowerCase() && F("event244", "LPSalesExposed", t, ""),
                        "o" == n.toLowerCase() && (F("event246", "LPSalesExposed", t, ""),
                        dt && F("event259", "LPSalesExposed", t, "")))
                    }
                if (Ye())
                    return;
                if (("" == nn || !window.lpTag.taglets.rendererStub.click(nn)) && An < 10)
                    An++,
                        setTimeout(_e, 1e3);
                else {
                    An = 0,
                        window.lpTag.taglets.rendererStub.click(nn);
                    try {
                        void 0 !== document.getElementsByClassName("chatwithus__label")[0] && null != document.getElementsByClassName("chatwithus__label")[0] && "" != document.getElementsByClassName("chatwithus__label")[0].innerHTML && "Connecting..." == document.getElementsByClassName("chatwithus__label")[0].innerHTML && (document.getElementsByClassName("chatwithus__label")[0].innerHTML = "Chat with us")
                    } catch (e) {}
                }
            } catch (e) {}
        }
        function Te(e, t, n) {
            try {
                var o = {
                    value: t,
                    expiry: (new Date).getTime() + 60 * n * 60 * 1e3
                };
                localStorage.setItem(e, JSON.stringify(o))
            } catch (e) {}
        }
        function Ie(e) {
            try {
                var t = localStorage.getItem(e);
                if (!t)
                    return null;
                var n = JSON.parse(t);
                return (new Date).getTime() > n.expiry ? (localStorage.removeItem(e),
                    null) : n.value
            } catch (e) {}
        }
        function De(e) {
            try {
                dt = !0;
                var t = {
                    type: "searchInfo",
                    keywords: ["SOI Chat offer text : " + e]
                };
                un = e,
                    lpTag.sdes.push(t),
                    lpTag.external = lpTag.external || {},
                    lpTag.external.dynamicOpeners = {
                        proactiveEngagements: [],
                        identifyProactiveEngagementContainer: function(t) {
                            if (1 === t?.conf?.type) {
                                let n = {
                                    engagementId: t?.eng?.engData?.engagementId,
                                    container: t?.eng?.containerId,
                                    modified: !1
                                };
                                lpTag.external.dynamicOpeners.proactiveEngagements.push(n),
                                e && lpTag.external.dynamicOpeners.updateEngagementText(n.engagementId, e)
                            }
                        },
                        updateEngagementText: function(e, t) {
                            try {
                                let o = lpTag.external.dynamicOpeners.proactiveEngagements.reverse().find((t=>t.engagementId === e));
                                function n() {
                                    let n = document.getElementById(o.container)
                                        , i = n?.children[0]?.children[0]?.childNodes;
                                    if (!i)
                                        return lpTag.external.dynamicOpeners.updateEngagementText(e, t),
                                            !1;
                                    let l = i[3].innerText
                                        , a = parseInt(n.children[0].style.height)
                                        , d = n.children[0].children[0].clientHeight;
                                    if (l) {
                                        i[3].innerText = t;
                                        let e = a - (d - n.children[0].children[0].clientHeight);
                                        n.children[0].style.height = e + "px",
                                            o.modified = !0,
                                            o.newOpener = t
                                    }
                                }
                                setTimeout(n, 1)
                            } catch (e) {
                                console.error(e)
                            }
                        },
                        updateWelcomeMessage: function(e) {
                            if ("waiting" !== lpTag.events.hasFired("lpUnifiedWindow", "state").reverse()[0].data.state)
                                return;
                            let t = lpTag.events.hasFired("LP_OFFERS", "OFFER_CLICK").reverse()[0]?.data?.engagementId
                                , n = lpTag.external.dynamicOpeners.proactiveEngagements.find((e=>e.engagementId === t && e.modified));
                            (n || window.localStorage.getItem("dynamicOpeners.modifiedWelcomeMessage")) && e.data.lines.forEach((e=>{
                                    if (!e.isWelcomeMessage)
                                        return;
                                    let t = n.newOpener || window.localStorage.getItem("dynamicOpeners.modifiedWelcomeMessage");
                                    n.newOpener && (e.text = t,
                                        window.localStorage.setItem("dynamicOpeners.modifiedWelcomeMessage", t))
                                }
                            ))
                        }
                    },
                    lpTag.events.bind("RENDERER_STUB", "AFTER_CREATE_ENGAGEMENT_INSTANCE", lpTag.external.dynamicOpeners.identifyProactiveEngagementContainer),
                    lpTag.events.bind("lpUnifiedWindow", "windowClosed", (()=>window.localStorage.removeItem("dynamicOpeners.modifiedWelcomeMessage"))),
                    lpTag.hooks.push({
                        name: "AFTER_GET_LINES",
                        callback: lpTag.external.dynamicOpeners.updateWelcomeMessage
                    })
            } catch (e) {}
        }
        function Se(e, t, n) {
            try {
                var o = "VZW-DOTCOM";
                null != window.sessionStorage.getItem("channelId") && "" != window.sessionStorage.getItem("channelId") && (o = window.sessionStorage.getItem("channelId"));
                var i = ""
                    , l = "https://" + window.location.hostname.toLowerCase() + "/soe/digital/auth/personalizationrecommendationsservice/pdm/liveChatOffers"
                    , a = {
                    source: "liveChatOffers",
                    pageContext: "Devices",
                    intentType: e,
                    lineItemInfo: [{
                        itemCode: t,
                        itemType: "Device",
                        purchasePrice: n
                    }]
                };
                "EUP" === e && a.lineItemInfo.push({
                    itemCode: "UPGRADEFEE"
                }),
                    fetch(l, {
                        method: "POST",
                        headers: {
                            channelId: o,
                            DESTINATION_CLIENT_ID: "NSA",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(a)
                    }).then((function(e) {
                            e.json().then((function(e) {
                                    if (console.log(e, "response"),
                                    null != e && void 0 !== e.statusCode && null != e.statusCode && 200 == e.statusCode && void 0 !== e.response && null != e.response && void 0 !== e.response.service && null != e.response.service && void 0 !== e.response.service.serviceBody && null != e.response.service.serviceBody && void 0 !== e.response.service.serviceBody.serviceResponse && null != e.response.service.serviceBody.serviceResponse && void 0 !== e.response.service.serviceBody.serviceResponse.propositionList && null != e.response.service.serviceBody.serviceResponse.propositionList && void 0 !== e.response.service.serviceBody.serviceResponse.propositionList.proposition && null != e.response.service.serviceBody.serviceResponse.propositionList.proposition && e.response.service.serviceBody.serviceResponse.propositionList.proposition.length > 0 && void 0 !== e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].externalPropositionList && null != e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].externalPropositionList && void 0 !== e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].externalPropositionList.externalPropositions && null != e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].externalPropositionList.externalPropositions && e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].externalPropositionList.externalPropositions.length > 0) {
                                        if (e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].externalPropositionList.externalPropositions.forEach((function(e) {
                                                void 0 !== e.rank && null != e.rank && "" != e.rank && "1" === e.rank && (i = e.propositionMessage,
                                                    "undefined" != typeof lpTag && null != lpTag && 0 != Object.keys(lpTag).length ? De(i) : document.addEventListener("lpTagLoaded", (function() {
                                                            De(i)
                                                        }
                                                    )))
                                            }
                                        )),
                                        void 0 !== e.response.service.serviceBody.serviceResponse.contextInfo && null != e.response.service.serviceBody.serviceResponse.contextInfo && void 0 !== e.response.service.serviceBody.serviceResponse.contextInfo.sessionId && null != e.response.service.serviceBody.serviceResponse.contextInfo.sessionId && (Pt.feedbackSessionId = e.response.service.serviceBody.serviceResponse.contextInfo.sessionId,
                                        void 0 !== e.response.service.serviceBody.serviceResponse.contextInfo.rtdSessionID && null != e.response.service.serviceBody.serviceResponse.contextInfo.rtdSessionID && (Pt.rtdSessionID = e.response.service.serviceBody.serviceResponse.contextInfo.rtdSessionID)),
                                        void 0 !== e.response.service.serviceBody.serviceResponse.responseList && null != e.response.service.serviceBody.serviceResponse.responseList) {
                                            var t = e.response.service.serviceBody.serviceResponse.responseList;
                                            void 0 !== t.soiEngagementId && null != t.soiEngagementId && (lt = t.soiEngagementId),
                                                Ot = !0,
                                                Pt.responseList = [],
                                                Pt.responseList.push(e.response.service.serviceBody.serviceResponse.responseList)
                                        }
                                        if (void 0 !== e.response.service.serviceBody.serviceResponse.externalResponseList && null != e.response.service.serviceBody.serviceResponse.externalResponseList) {
                                            Et = !0,
                                                Pt.externalResponseList = [],
                                                Pt.externalResponseList.push(e.response.service.serviceBody.serviceResponse.externalResponseList);
                                            var n = e.response.service.serviceBody.serviceResponse.externalResponseList;
                                            try {
                                                Object.keys(n).length > 0 && void 0 !== n.dynamicAttrList && null != n.dynamicAttrList && n.dynamicAttrList.length > 0 && void 0 !== n.dynamicAttrList[0].attrId && null != n.dynamicAttrList[0].attrId && "isrtdoffer" == n.dynamicAttrList[0].attrId.toLowerCase() && void 0 !== n.dynamicAttrList[0].value && null != n.dynamicAttrList[0].value && "y" == n.dynamicAttrList[0].value.toLowerCase() && (Ct = !0)
                                            } catch (e) {}
                                        }
                                        if (void 0 !== e.response.service.serviceBody.serviceResponse.dispositionList && null != e.response.service.serviceBody.serviceResponse.dispositionList && e.response.service.serviceBody.serviceResponse.dispositionList.length > 0 && void 0 !== e.response.service.serviceBody.serviceResponse.dispositionList[0].dispositionOptionList && null != e.response.service.serviceBody.serviceResponse.dispositionList[0].dispositionOptionList && e.response.service.serviceBody.serviceResponse.dispositionList[0].dispositionOptionList.length > 0)
                                            e.response.service.serviceBody.serviceResponse.dispositionList[0].dispositionOptionList.forEach((function(e) {
                                                    "accepted" === e.label.toLowerCase() ? (ht = e.id,
                                                    Et && (Pt.externalResponseList[0].dispositionOptionId = e.id)) : "viewed" === e.label.toLowerCase() && Ot && (Pt.responseList[0].dispositionOptionId = e.id)
                                                }
                                            ))
                                    }
                                }
                            ))
                        }
                    ))
            } catch (e) {}
        }
        function xe(e) {
            try {
                var t = "VZW-DOTCOM";
                null != window.sessionStorage.getItem("channelId") && "" != window.sessionStorage.getItem("channelId") && (t = window.sessionStorage.getItem("channelId"));
                var n = window.location.hostname.toLowerCase();
                fetch("https://" + n + "/soe/digital/prospect/personalizationrecommendationsservice/pdm/nse/stpRecommendationsFeedback", {
                    method: "POST",
                    headers: {
                        channelId: t,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                }).then((function(e) {
                        e.json().then((function(e) {
                                console.log(e, "FBL API response")
                            }
                        ))
                    }
                ))
            } catch (e) {}
        }
        function ke(e) {
            try {
                var t = window.location.hostname.toLowerCase();
                fetch("https://" + t + "/soe/digital/auth/personalizationrecommendationsservice/pdm/liveChatOffersFeedback", {
                    method: "POST",
                    headers: {
                        channelId: "VZW-DOTCOM",
                        DESTINATION_CLIENT_ID: "NSA",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(e)
                }).then((function(e) {
                        e.json().then((function(e) {
                                console.log(e, "FBL API response")
                            }
                        ))
                    }
                ))
            } catch (e) {}
        }
        function Pe() {
            try {
                return "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList
            } catch (e) {
                return !1
            }
        }
        function Oe(e) {
            try {
                void 0 !== e && null != e && 0 != Object.keys(e).length && (Dn = e),
                    G()
            } catch (e) {}
        }
        function Ee(e) {
            try {
                void 0 !== e && null != e && 0 != Object.keys(e).length && (Dn = e,
                    Z() ? void 0 !== Dn.propositionId && null != Dn.propositionId && Dn.propositionId.length > 0 && (-1 != Dn.propositionId.indexOf("P_NoNBA") || -1 != Dn.propositionId.indexOf("No_NBA") || -1 != Dn.propositionId.indexOf("no_nba") ? In = !0 : (In = !1,
                        me(),
                        Le(),
                        ye(),
                        Ce(),
                        be(),
                        ee(),
                        te(),
                    void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.LC_Available && null != Dn.LC_Available && 0 == Dn.LC_Available.length && Vt && a())) : void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.tier && null != Dn.tier && "" != Dn.tier && void 0 !== Dn.throttleList && null != Dn.throttleList && "" != Dn.throttleList && -1 != Dn.throttleList.indexOf(Dn.tier + "_T") ? (In = !1,
                        me(),
                        Le(),
                        ye(),
                        Ce(),
                        be(),
                        ee(),
                        te(),
                    void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.LC_Available && null != Dn.LC_Available && 0 == Dn.LC_Available.length && Vt && a()) : In = !0)
            } catch (e) {}
        }
        function Ne() {
            Z() ? void 0 !== Dn.propositionId && null != Dn.propositionId && Dn.propositionId.length > 0 && (-1 != Dn.propositionId.indexOf("P_NoNBA") || -1 != Dn.propositionId.indexOf("No_NBA") || -1 != Dn.propositionId.indexOf("no_nba") ? In = !0 : (In = !1,
                me(),
                Le(),
                ye(),
                Ce(),
                be(),
                ee(),
                te())) : void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.tier && null != Dn.tier && "" != Dn.tier && void 0 !== Dn.throttleList && null != Dn.throttleList && "" != Dn.throttleList && -1 != Dn.throttleList.indexOf(Dn.tier + "_T") ? (In = !1,
                me(),
                Le(),
                ye(),
                Ce(),
                be(),
                ee(),
                te()) : In = !0
        }
        function be() {
            try {
                if ("true" == window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS") && null != VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS") && "open" == VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS").toLowerCase())
                    return;
                var e = window.sessionStorage.getItem("wjt")
                    , t = window.lpTag;
                t.sdes = t.sdes || [],
                    t.section = ["wireless"],
                    Z() ? t.section.push("PEGA") : t.section.push("CFD"),
                    "y" == Dn.Authentication.toLowerCase() || Z() && void 0 !== e && null != e && "" != e ? (Sn = "EX",
                        t.section.push("ex"),
                        t.section.push("auth:true")) : (Sn = "NC",
                        t.section.push("nc"),
                        t.section.push("auth:false")),
                "" != Bt && t.section.push(Bt)
            } catch (e) {}
        }
        function Ae() {
            try {
                if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && "" != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && "" != vzdl.txn.product && void 0 !== vzdl.txn.product.current && null != vzdl.txn.product.current && "" != vzdl.txn.product.current && void 0 !== vzdl.txn.product.current.discount && null != vzdl.txn.product.current.discount && "" != vzdl.txn.product.current.discount)
                    return !0
            } catch (e) {}
            return !1
        }
        function Ve() {
            try {
                if (Ae()) {
                    var e = {
                        type: "lead",
                        lead: {
                            topic: "MUC Code",
                            value: -1,
                            leadId: vzdl.txn.product.current.discount
                        }
                    };
                    lpTag.sdes.push(e)
                } else if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && "" != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && "" != vzdl.txn.product && void 0 !== vzdl.txn.product.current && null != vzdl.txn.product.current && vzdl.txn.product.current.length > 0 && void 0 !== vzdl.txn.product.current[0].discount && null != vzdl.txn.product.current[0].discount && "" != vzdl.txn.product.current[0].discount) {
                    e = {
                        type: "lead",
                        lead: {
                            topic: "MUC Code",
                            value: -1,
                            leadId: vzdl.txn.product.current[0].discount
                        }
                    };
                    lpTag.sdes.push(e)
                }
            } catch (e) {}
        }
        function Be() {
            try {
                if (null != window.sessionStorage.getItem("personalInfo") && "" != window.sessionStorage.getItem("personalInfo") || null != window.sessionStorage.getItem("CONTACT_FORM_DATA") && "" != window.sessionStorage.getItem("CONTACT_FORM_DATA")) {
                    let n = window.sessionStorage.getItem("personalInfo") || window.sessionStorage.getItem("CONTACT_FORM_DATA")
                        , o = JSON.parse(n);
                    if (null != o.firstName && "" != o.firstName)
                        var e = o.firstName;
                    if (null != o.lastName && "" != o.lastName)
                        var t = o.lastName;
                    let i = {
                        type: "searchInfo",
                        keywords: ["first name :" + e, "last name :" + t]
                    };
                    1 != wn && (lpTag.sdes.push(i),
                        wn = !0)
                }
            } catch (e) {}
        }
        function Re() {
            try {
                if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && "" != vzdl.txn && void 0 !== vzdl.txn.zipCode && null != vzdl.txn.zipCode && "" != vzdl.txn.zipCode) {
                    var e = {
                        type: "ctmrinfo",
                        info: {
                            imei: vzdl.txn.zipCode
                        }
                    };
                    lpTag.sdes.push(e)
                }
                if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.user && null != vzdl.user && "" != vzdl.user && void 0 !== vzdl.user.zip && null != vzdl.user.zip && "" != vzdl.user.zip) {
                    var t = {
                        type: "ctmrinfo",
                        info: {
                            imei: vzdl.user.zip
                        }
                    };
                    lpTag.sdes.push(t)
                }
            } catch (e) {}
        }
        function Fe() {
            try {
                "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && "" != vzdl.txn && void 0 !== vzdl.txn.tradeInQty && null != vzdl.txn.tradeInQty && "" != vzdl.txn.tradeInQty && void 0 !== vzdl.txn.tradeInAmt && null != vzdl.txn.tradeInAmt && "" != vzdl.txn.tradeInAmt && "none" != vzdl.txn.tradeInAmt && "none" != vzdl.txn.tradeInQty && "null" != vzdl.txn.tradeInQty && "null" != vzdl.txn.tradeInAmt && parseInt(vzdl.txn.tradeInAmt) > 0 && parseInt(vzdl.txn.tradeInQty) > 0 && lpTag.section.push("lptradein")
            } catch (e) {}
        }
        function Ze() {
            try {
                if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && "" != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && "" != vzdl.txn.product && void 0 !== vzdl.txn.product.current && null != vzdl.txn.product.current && void 0 !== vzdl.txn.product.current[0].contractType && null != vzdl.txn.product.current[0].contractType && "" != vzdl.txn.product.current[0].contractType) {
                    let e = vzdl.txn.product.current[0].contractType.split(" ").join("");
                    lpTag.section.push(e),
                        te()
                }
            } catch (e) {}
        }
        function Me(e, t, n) {
            try {
                var o = new Date;
                o.setTime(o.getTime() + 60 * n * 60 * 1e3);
                var i = "expires=" + o.toUTCString();
                document.cookie = e + "=" + t + ";" + i + ";domain=.verizonwireless.com; path=/;",
                    document.cookie = e + "=" + t + ";" + i + ";domain=.verizon.com; path=/;"
            } catch (e) {
                console.log("  error setting cookie" + e)
            }
        }
        function Ue() {
            try {
                if ("true" == window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS") && null != VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS") && "open" == VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS").toLowerCase())
                    return;
                lpTag.section = ["L1:wireless"];
                for (var e = document.location.pathname.split("/").filter(Boolean), t = 0; t < e.length; t++) {
                    var n = e[t];
                    n && lpTag.section.push("L" + (t + 2) + ":" + n)
                }
                null == window.sessionStorage.getItem("wasPrevLocationCheckout") || "" == window.sessionStorage.getItem("wasPrevLocationCheckout") || "true" != window.sessionStorage.getItem("wasPrevLocationCheckout").toLowerCase() && 1 != window.sessionStorage.getItem("wasPrevLocationCheckout") || lpTag.section.push("backflow"),
                ("undefined" == typeof vzdl || null == vzdl || "" == vzdl || void 0 === vzdl.page || null == vzdl.page || "" == vzdl.page || void 0 === vzdl.page.name || null == vzdl.page.name || "" == vzdl.page.name || -1 == vzdl.page.name.toLowerCase().indexOf("gridwall")) && -1 == vzdl.page.name.toLowerCase().indexOf("pdp") || null == window.sessionStorage.getItem("hasAbandonedCart") || "" == window.sessionStorage.getItem("hasAbandonedCart") || "true" != window.sessionStorage.getItem("hasAbandonedCart").toLowerCase() && 1 != window.sessionStorage.getItem("hasAbandonedCart") || lpTag.section.push("abandonCartLp");
                try {
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.cdmaRestrictedDevice && null != vzdl.page.cdmaRestrictedDevice && "" != vzdl.page.cdmaRestrictedDevice && "string" == typeof vzdl.page.cdmaRestrictedDevice && "true" == vzdl.page.cdmaRestrictedDevice.toLowerCase() && lpTag.section.push("cdmaRestrictedDevice")
                } catch (e) {}
                try {
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.cdmaSuspended && null != vzdl.page.cdmaSuspended && "" != vzdl.page.cdmaSuspended && "string" == typeof vzdl.page.cdmaSuspended && "true" == vzdl.page.cdmaSuspended.toLowerCase() && lpTag.section.push("cdmaSuspended")
                } catch (e) {}
                try {
                    if (null != VZ_Chat.getCookie("mobile_services") && "" != VZ_Chat.getCookie("mobile_services") && "N" == VZ_Chat.getCookie("mobile_services").toUpperCase()) {
                        lpTag.section.push("FWANoMobileService");
                        var o = {
                            type: "searchInfo",
                            keywords: ["FWANoMobileService:This is an existing FWA Customer, they do not have Mobile with VZ. Offer Mobile Service."]
                        };
                        lpTag.sdes.push(o)
                    }
                } catch (e) {}
                if (null != window.sessionStorage.getItem("deviceType") && "" != window.sessionStorage.getItem("deviceType")) {
                    if ("other" == window.sessionStorage.getItem("deviceType"))
                        var i = "type:OtherDevice";
                    else
                        i = "type:" + window.sessionStorage.getItem("deviceType");
                    lpTag.section.push(i)
                }
                try {
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && void 0 !== vzdl.page.flow && null != vzdl.page.flow && "" != vzdl.page.flow && "home" == vzdl.page.name.toLowerCase() && "5g" == vzdl.page.flow.toLowerCase() && null != VZ_Chat.getCookie("cdlThrottleList").indexOf("5GH_LP") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("5GH_LP") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("5GH_LP") && (Z() || lpTag.section.push("5GHcloser"))
                } catch (e) {}
                return lpTag.section
            } catch (e) {}
        }
        function je() {
            try {
                if ("true" == window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS") && null != VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS") && "open" == VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS").toLowerCase())
                    return;
                if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && -1 != vzdl.page.name.toLowerCase().indexOf("credithold"))
                    return Ue();
                lpTag.section = ["L1:wireless"],
                    Z() ? lpTag.section.push("account_type:authenticated") : lpTag.section.push("account_type:unauthenticated"),
                    ot(),
                null == window.sessionStorage.getItem("wasPrevLocationCheckout") || "" == window.sessionStorage.getItem("wasPrevLocationCheckout") || "true" != window.sessionStorage.getItem("wasPrevLocationCheckout").toLowerCase() && 1 != window.sessionStorage.getItem("wasPrevLocationCheckout") || lpTag.section.push("backflow");
                try {
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.cdmaRestrictedDevice && null != vzdl.page.cdmaRestrictedDevice && "" != vzdl.page.cdmaRestrictedDevice && "string" == typeof vzdl.page.cdmaRestrictedDevice && "true" == vzdl.page.cdmaRestrictedDevice.toLowerCase() && lpTag.section.push("cdmaRestrictedDevice")
                } catch (e) {}
                try {
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.cdmaSuspended && null != vzdl.page.cdmaSuspended && "" != vzdl.page.cdmaSuspended && "string" == typeof vzdl.page.cdmaSuspended && "true" == vzdl.page.cdmaSuspended.toLowerCase() && lpTag.section.push("cdmaSuspended")
                } catch (e) {}
                try {
                    if (null != VZ_Chat.getCookie("mobile_services") && "" != VZ_Chat.getCookie("mobile_services") && "N" == VZ_Chat.getCookie("mobile_services").toUpperCase()) {
                        lpTag.section.push("FWANoMobileService");
                        var e = {
                            type: "searchInfo",
                            keywords: ["FWANoMobileService:This is an existing FWA Customer, they do not have Mobile with VZ. Offer Mobile Service."]
                        };
                        lpTag.sdes.push(e)
                    }
                } catch (e) {}
                if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && (void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && (-1 != vzdl.page.name.toLowerCase().indexOf("pdp_smartphones") && vzdl.page.name.split("_").length > 0 && "smartphones" == vzdl.page.name.split("_")[1].toLowerCase() ? (lpTag.section.push("name:pdp_smartphones"),
                    lpTag.section.push("pdp_selected_device:" + vzdl.page.name.split("_")[2]),
                    tt()) : lpTag.section.push("name:" + vzdl.page.name)),
                void 0 !== vzdl.page.flow && null != vzdl.page.flow && "" != vzdl.page.flow && lpTag.section.push("flow_name:" + vzdl.page.flow),
                void 0 !== vzdl.page.language && null != vzdl.page.language && "" != vzdl.page.language && lpTag.section.push("language:" + vzdl.page.language),
                void 0 !== vzdl.page.throttle && null != vzdl.page.throttle && "" != vzdl.page.throttle && lpTag.section.push(vzdl.page.throttle)),
                "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.user && null != vzdl.user && "" != vzdl.user && Z() && (void 0 !== vzdl.user.accountType && null != vzdl.user.accountType && "" != vzdl.user.accountType && lpTag.section.push(vzdl.user.accountType),
                void 0 !== vzdl.user.deviceDollars && null != vzdl.user.deviceDollars && "" != vzdl.user.deviceDollars && lpTag.section.push("device_dollars:" + vzdl.user.deviceDollars),
                void 0 !== vzdl.user.customerType && null != vzdl.user.customerType && "" != vzdl.user.customerType && lpTag.section.push("customer_type:" + vzdl.user.customerType),
                void 0 !== vzdl.user.customerRole && null != vzdl.user.customerRole && "" != vzdl.user.customerRole && lpTag.section.push("customer_role:" + vzdl.user.customerRole),
                void 0 !== vzdl.user.numberOfLines && null != vzdl.user.numberOfLines && "" != vzdl.user.numberOfLines && lpTag.section.push("number_of_lines:" + vzdl.user.numberOfLines)),
                ("undefined" == typeof vzdl || null == vzdl || "" == vzdl || void 0 === vzdl.page || null == vzdl.page || "" == vzdl.page || void 0 === vzdl.page.name || null == vzdl.page.name || "" == vzdl.page.name || -1 == vzdl.page.name.toLowerCase().indexOf("gridwall")) && -1 == vzdl.page.name.toLowerCase().indexOf("pdp") || null == window.sessionStorage.getItem("hasAbandonedCart") || "" == window.sessionStorage.getItem("hasAbandonedCart") || "true" != window.sessionStorage.getItem("hasAbandonedCart").toLowerCase() && 1 != window.sessionStorage.getItem("hasAbandonedCart") || lpTag.section.push("abandonCartLp"),
                null != window.sessionStorage.getItem("deviceType") && "" != window.sessionStorage.getItem("deviceType")) {
                    if ("other" == window.sessionStorage.getItem("deviceType"))
                        var t = "type:OtherDevice";
                    else
                        t = "type:" + window.sessionStorage.getItem("deviceType");
                    lpTag.section.push(t)
                }
                try {
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && void 0 !== vzdl.page.flow && null != vzdl.page.flow && "" != vzdl.page.flow && "home" == vzdl.page.name.toLowerCase() && "5g" == vzdl.page.flow.toLowerCase() && null != VZ_Chat.getCookie("cdlThrottleList").indexOf("5GH_LP") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("5GH_LP") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("5GH_LP") && (Z() || lpTag.section.push("5GHcloser"))
                } catch (e) {}
                return lpTag.section
            } catch (e) {}
        }
        function Ge(e) {
            try {
                console.log(e, "sseObject");
                try {
                    null != window.sessionStorage.getItem("channelId") && "" != window.sessionStorage.getItem("channelId") && (yt = window.sessionStorage.getItem("channelId"))
                } catch (e) {}
                "undefined" == typeof vzdl || null == vzdl || "" == vzdl || void 0 === vzdl.page || null == vzdl.page || "" == vzdl.page || void 0 === vzdl.page.name || null == vzdl.page.name || "" == vzdl.page.name || -1 == vzdl.page.name.toLowerCase().indexOf("gridwall") && -1 == vzdl.page.name.toLowerCase().indexOf("pdp") && -1 == vzdl.page.name.toLowerCase().replace(/ +/g, "").indexOf("promohub") || null != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "true" == VZ_Chat.getCookie("lpFdvLockChatInProgress") || Lt || Z() || "vzw-dotcom-mob" == yt.toLowerCase() || void 0 !== e && null != e && void 0 !== e.triggerNBXforCFD && null != e.triggerNBXforCFD && "y" == e.triggerNBXforCFD.toLowerCase() && VZ_Chat.initiateLPZineOnePDMAPI("onSSEUpdateCall")
            } catch (e) {}
        }
        function He() {
            try {
                "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && (lpTag.section.push("clearCartLP"),
                    te())
            } catch {}
        }
        function We() {
            try {
                if (-1 != window.navigator.userAgent.indexOf("MY_VZW_APP"))
                    return;
                if ("true" == window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS") && null != VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS") && "open" == VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS").toLowerCase())
                    return;
                console.log("****lpNewPageRetryCall******");
                var e = lpTag.events.hasFired("*", "*").slice(lpTag.events.hasFired("*", "*").map((e=>e.appName + e.eventName)).lastIndexOf("lp_monitoringSDKSP_SENT"));
                for (i = 0; i < e.length; i++) {
                    if ("RENDERER_STUB" === e[i].appName && "AFTER_CREATE_ENGAGEMENT_INSTANCE" === e[i].eventName && void 0 !== e[i].data.eng.conf.name && null != e[i].data.eng.conf.name && "" != e[i].data.eng.conf.name) {
                        rt = 0;
                        break
                    }
                    i == e.length - 1 && rt < 2 && (te(),
                        setTimeout(We, 3e3),
                        rt++)
                }
            } catch (e) {}
        }
        function qe(e) {
            try {
                var t = document.querySelectorAll("div[class^='ModalContainer-sc'],div[class^='ModalContainer']")
                    , n = document.getElementsByClassName("lpc_window");
                e ? (void 0 !== t && null != t && t.length > 0 && t[0].style.setProperty("z-index", "9999999", "important"),
                void 0 !== n && null != n && n.length > 0 && (n[0].style.setProperty("z-index", "9999990", "important"),
                void 0 !== n[1] && null != n[1] && n[1].style.setProperty("z-index", "9999990", "important"))) : (void 0 !== t && null != t && t.length > 0 && t[0].style.setProperty("z-index", "", "important"),
                void 0 !== n && null != n && n.length > 0 && (n[0].style.setProperty("z-index", "", "important"),
                void 0 !== n[1] && null != n[1] && n[1].style.setProperty("z-index", "", "important")))
            } catch (e) {}
        }
        function Xe(e) {
            try {
                return "LV" == e[2] || "DF" == e[2] || "AN" == e[2] || "RL" == e[2] || "SN" == e[2] || "CB" == e[2] || "EQ" == e[2] || "FA" == e[2] || "ID" == e[2] || "NP" == e[2] || "OP" == e[2] || "SL" == e[2] || "TU" == e[2] || "XP" == e[2]
            } catch (e) {
                return !1
            }
        }
        function Ye() {
            var e = !1;
            try {
                ("true" == window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS") && null != k("UNIFIED_CHAT_INPROGRESS") && "open" == k("UNIFIED_CHAT_INPROGRESS").toLowerCase() || null != window.sessionStorage.getItem("home_bot_sId") && "" != window.sessionStorage.getItem("home_bot_sId") || void 0 !== k("LP_CHAT_IN_PROGRESS") && null != k("LP_CHAT_IN_PROGRESS") && "Y" == k("LP_CHAT_IN_PROGRESS") || null != k("lpFdvLockChatInProgress") && "" != k("lpFdvLockChatInProgress") && "true" == k("lpFdvLockChatInProgress")) && (e = !0)
            } catch (e) {}
            return e
        }
        function Qe() {
            try {
                -1 == VZ_Chat.getCookie("cdlThrottleList").indexOf("FWA_T") || null == VZ_Chat.getCookie("cdlThrottleList").indexOf("FWA_T") || "" == VZ_Chat.getCookie("cdlThrottleList").indexOf("FWA_T") || "undefined" == typeof vzdl || null == vzdl || "" == vzdl || void 0 === vzdl.page || null == vzdl.page || "" == vzdl.page || void 0 === vzdl.page.preLoopQualPageName || null == vzdl.page.preLoopQualPageName || "" == vzdl.page.preLoopQualPageName || -1 == window.location.href.indexOf("5g/home/") && -1 == window.location.href.indexOf("home/lte-home-internet/") || lpTag.section.push(vzdl.page.preLoopQualPageName)
            } catch (e) {}
        }
        function Je() {
            var e = !1;
            try {
                "true" == window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS") && null != VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS") && "open" == VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS").toLowerCase() && (e = !0)
            } catch (e) {}
            return e
        }
        function Ke() {
            try {
                if ("undefined" != typeof lpTag && null != lpTag && 0 != Object.keys(lpTag).length && void 0 !== lpTag.section && null != lpTag.section) {
                    var e = window.location.href.toLowerCase();
                    const n = ["CMP=crm_h_p_lob_dm_acq_2022_11_5GQR"];
                    if (e.includes("cmp="))
                        for (let o = 0; o < n.length; o++) {
                            var t = n[o].toLowerCase();
                            if (e && !0 === e.includes(t) && !lpTag.section.includes("5GHomeQR")) {
                                lpTag.section.push("5GHomeQR"),
                                    te();
                                break
                            }
                        }
                }
            } catch (e) {}
        }
        function $e() {
            try {
                var e = window.location.href.toLowerCase()
                    , t = !1;
                const i = ["CMP=crm_h_p_lob_dm_acq_2022_11_5GQR"];
                for (var n = 0; n < i.length; n++) {
                    var o = i[n].toLowerCase();
                    e && !0 === e.includes(o) && (t = !0)
                }
                return t
            } catch (e) {}
        }
        function et() {
            try {
                "undefined" != typeof lpTag && null != lpTag && Object.keys(lpTag).length > 0 && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && (lpTag.section.includes("LQAClose") || (lpTag.section.push("LQAClose"),
                    te()))
            } catch (e) {}
        }
        function tt() {
            try {
                "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.park && null != vzdl.park && "" != vzdl.park && void 0 !== vzdl.park.make && null != vzdl.park.make && "" != vzdl.park.make && (lpTag.section.push(vzdl.park.make),
                    te())
            } catch (e) {
                console.log(e)
            }
        }
        function nt() {
            var e = window.location.href.toLowerCase();
            if ("undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.page && null != vzdl.page && "tys" === vzdl.page.channel.toLowerCase() && (-1 !== e.indexOf("credit-hold") || -1 !== e.indexOf("credithold")))
                if (hn++,
                void 0 !== vzdl.user && null != vzdl.user && void 0 !== vzdl.user.creditAppNum && null != vzdl.user.creditAppNum && "" != vzdl.user.creditAppNum) {
                    var t = {
                        type: "searchInfo",
                        keywords: ["LP credit app num info " + vzdl.user.creditAppNum]
                    };
                    lpTag.sdes.push(t)
                } else
                    hn < 3 && setTimeout(nt, 3e3)
        }
        function ot() {
            try {
                if (void 0 !== window.getDataForVzChat && null != window.getDataForVzChat && "" != window.getDataForVzChat) {
                    if (-1 == window.getDataForVzChat.toLowerCase().indexOf("outofstock") || lpTag.section.includes("OOS") || lpTag.section.push("OOS"),
                    -1 == window.getDataForVzChat.toLowerCase().indexOf("backorder") || lpTag.section.includes("BackOrder") || lpTag.section.push("BackOrder"),
                    -1 != window.getDataForVzChat.toLowerCase().indexOf("backorder")) {
                        if (lpTag.section.includes("OOS")) {
                            const e = lpTag.section.indexOf("OOS");
                            lpTag.section.splice(e, 1)
                        }
                        if (lpTag.section.includes("PreOrder")) {
                            const e = lpTag.section.indexOf("PreOrder");
                            lpTag.section.splice(e, 1)
                        }
                    }
                    if (-1 != window.getDataForVzChat.toLowerCase().indexOf("outofstock")) {
                        if (lpTag.section.includes("BackOrder")) {
                            const e = lpTag.section.indexOf("BackOrder");
                            lpTag.section.splice(e, 1)
                        }
                        if (lpTag.section.includes("PreOrder")) {
                            const e = lpTag.section.indexOf("PreOrder");
                            lpTag.section.splice(e, 1)
                        }
                    }
                    if (-1 == window.getDataForVzChat.toLowerCase().indexOf("preorder") || lpTag.section.includes("PreOrder") || lpTag.section.push("PreOrder"),
                    -1 != window.getDataForVzChat.toLowerCase().indexOf("preorder")) {
                        if (lpTag.section.includes("BackOrder")) {
                            const e = lpTag.section.indexOf("BackOrder");
                            lpTag.section.splice(e, 1)
                        }
                        if (lpTag.section.includes("OOS")) {
                            const e = lpTag.section.indexOf("OOS");
                            lpTag.section.splice(e, 1)
                        }
                    }
                    if (-1 != window.getDataForVzChat.toLowerCase().indexOf("instock"))
                        if (lpTag.section.includes("OOS")) {
                            const e = lpTag.section.indexOf("OOS");
                            lpTag.section.splice(e, 1),
                                te()
                        } else if (lpTag.section.includes("BackOrder")) {
                            const e = lpTag.section.indexOf("BackOrder");
                            lpTag.section.splice(e, 1),
                                te()
                        } else if (lpTag.section.includes("PreOrder")) {
                            const e = lpTag.section.indexOf("PreOrder");
                            lpTag.section.splice(e, 1),
                                te()
                        }
                }
            } catch (e) {}
        }
        function it() {
            try {
                fn = setInterval(d, 1e3)
            } catch (e) {
                console.log("err" + hiderr)
            }
        }
        var lt = ""
            , at = !1
            , dt = !1
            , rt = 0
            , st = !1;
        const ct = new Event("lpTagLoaded");
        var pt, vt, ut, gt, ht = "", wt = !1, zt = !1, ft = "", mt = !1, Lt = !1, yt = "VZW-DOTCOM", Ct = !1, _t = "", Tt = !1, It = !1, Dt = !0, St = !1, xt = {
            sessionId: "",
            propositionId: [],
            LC_Available: [],
            Priority: [],
            Embedded: "N",
            Sticky: "N",
            Overlay: "N",
            Overlay_TimeDelay: "",
            Page_Location: "",
            Sub_Page_Type: "",
            intent_Flow: "",
            Customer_Type: "NC",
            Authentication: "N",
            Language: "English",
            SOI_Engagement_ids: [{
                sticky_soi_id: "",
                embedded_soi_id: "",
                overlay_soi_id: ""
            }],
            Other: "",
            tier: "",
            throttleList: ""
        }, kt = {
            source: "stpRecommendationsFeedback",
            statusMsg: "",
            nbxSessionId: "",
            customerResponse: {
                responseList: []
            }
        }, Pt = {
            source: "liveChatOffersFeedback",
            feedbackSessionId: "",
            rtdSessionID: ""
        }, Ot = !1, Et = !1, Nt = "", bt = "\n.lpc_window_slider-open {\n  height: 870px!important;\n  width: 962px!important;\n}\n.lpc_slider {\n  width: 680px!important;\n  height: 870px!important;\n}\n.lpc_maximized-header__slider-button {\n  display:none!important;\n}\n\n@media only screen \nand (min-device-width : 768px) \nand (max-device-width : 1024px) { /* tablet, landscape iPad, lo-res laptops and desktops */ \n    .lpc_window_slider-open {\n        height: 870px!important;\n    }\n    .lpc_slider {\n        width: 100vw!important;\n        height: 100vh!important; \n    }\n}\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen \nand (min-device-width : 320px) \nand (max-device-width : 480px) {\n  .lpc_window_slider-open {\n    height: 870px!important;\n  }\n  .lpc_slider {\n      width: 100vw!important;\n      height: 100vh!important; \n  }\n}\n", At = !1, Vt = "N", Bt = "", Rt = {
            sticky_soi_id: "",
            embedded_soi_id: "",
            overlay_soi_id: ""
        }, Ft = "", Zt = !0, Mt = !1, Ut = !1, jt = !1, Gt = !1, Ht = !1, Wt = 0, qt = 0, Xt = !0, Yt = null, Qt = null, Jt = !1, Kt = "false", $t = {}, en = "", tn = "", nn = "", on = !1, ln = !1, an = {
            engagementAddedBeforeChatShown: [],
            engagementAddedAfterChatShown: [],
            engagementIdAddedBeforeChatShown: [],
            engagementIdAddedAfterChatShown: [],
            isLpChatShown: !1
        }, dn = [], rn = "", sn = 0, cn = {}, pn = !1, vn = {}, un = "", gn = "", hn = 0, wn = !1, zn = 0, fn = 0;
        VZ_Chat = function() {
            function e() {
                "undefined" == typeof vzwDL && "undefined" == typeof vzdl || ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.chat) ? u = vzwDL.page.chat : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && x(vzdl.user) && x(vzdl.user.chatId) && (u = vzdl.user.chatId),
                    z = !0)
            }
            function t(e, t, o, i) {
                var l;
                if (!u)
                    throw n("DataLayerUndefinedException", "Data Layer is Undefined");
                if (l = {
                    name: e,
                    value: t,
                    scope: o,
                    mobile: i,
                    toString: function() {
                        return "{ name: " + e + ", value: " + t + ", scope: " + o + ", mobile: " + i + " }"
                    }
                },
                "string" != typeof e || void 0 === t || "string" != typeof o || "page" !== o && "session" !== o || "boolean" != typeof i)
                    throw n("InvalidVariableException", "Invalid variable format: " + l.toString());
                v && w.log("Adding var: " + l.toString()),
                    u[u.length] = l
            }
            function n(e, t) {
                return {
                    name: e,
                    msg: t,
                    toString: function() {
                        return this.name + ": " + this.msg
                    }
                }
            }
            function o(t, n) {
                try {
                    e(),
                        t ? (t = new t(VZ_Chat,S()),
                        v && w.log("Data scrubbing with: " + t.toString()),
                            t.scrub()) : v && w.log("Warning! -> Data scrubber is not defined"),
                        n ? (n = new n(VZ_Chat,S()),
                        v && w.log("Data building with: " + n.toString()),
                            n.build()) : v && w.log("Warning! -> Data builder is not defined")
                } catch (e) {
                    w.log("Critical [and ignored] error on init -> " + e)
                }
            }
            function i(e) {
                try {
                    if (cn = e,
                    -1 != window.navigator.userAgent.indexOf("MY_VZW_APP") && -1 == window.location.href.toLowerCase().indexOf("checkout"))
                        return void w.log("MVA PROACTIVE OVERLAY");
                    if (window.parent != window)
                        return;
                    try {
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (Lt = !0)
                    } catch (e) {}
                    try {
                        null != window.sessionStorage.getItem("channelId") && "" != window.sessionStorage.getItem("channelId") && window.sessionStorage.getItem("channelId")
                    } catch (e) {}
                    a()
                } catch (e) {}
            }
            function l(e) {
                try {
                    try {
                        var t = "Gridwall";
                        "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && (-1 != vzdl.page.name.toLowerCase().indexOf("pdp") ? t = "PDP" : -1 != vzdl.page.name.toLowerCase().replace(/ +/g, "").indexOf("promohub") && (t = "Cart"));
                        var n = "https://" + window.location.hostname.toLowerCase() + "/soe/digital/prospect/personalizationrecommendationsservice/pdm/nse/stpRecommendations"
                            , o = {};
                        o = {
                            source: "stpRecommendations",
                            pageContext: t,
                            byPassThrottle: "true"
                        };
                        var i = "VZW-DOTCOM";
                        null != window.sessionStorage.getItem("channelId") && "" != window.sessionStorage.getItem("channelId") && (i = window.sessionStorage.getItem("channelId")),
                            fetch(n, {
                                method: "POST",
                                headers: {
                                    channelId: i,
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(o)
                            }).then((function(e) {
                                    e.json().then((function(e) {
                                            if (w.log(e, "response"),
                                                _n = !0,
                                            !wt && (null != e && void 0 !== e.statusCode && null != e.statusCode && 200 == e.statusCode && void 0 !== e.response && null != e.response && void 0 !== e.response.tier && null != e.response.tier && "" != e.response.tier && void 0 !== e.response.throttleList && null != e.response.throttleList && "" != e.response.throttleList && (xt.tier = e.response.tier,
                                                xt.throttleList = e.response.throttleList),
                                            null != e && void 0 !== e.statusCode && null != e.statusCode && 200 == e.statusCode && void 0 !== e.response && null != e.response && void 0 !== e.response.service && null != e.response.service && void 0 !== e.response.service.serviceBody && null != e.response.service.serviceBody && void 0 !== e.response.service.serviceBody.serviceResponse && null != e.response.service.serviceBody.serviceResponse && void 0 !== e.response.service.serviceBody.serviceResponse.propositionList && null != e.response.service.serviceBody.serviceResponse.propositionList && void 0 !== e.response.service.serviceBody.serviceResponse.propositionList.proposition && null != e.response.service.serviceBody.serviceResponse.propositionList.proposition && e.response.service.serviceBody.serviceResponse.propositionList.proposition.length > 0)) {
                                                zt = !0,
                                                void 0 !== e.response.service.serviceBody.serviceResponse.contextInfo && null != e.response.service.serviceBody.serviceResponse.contextInfo && 0 != Object.keys(e.response.service.serviceBody.serviceResponse.contextInfo).length && void 0 !== e.response.service.serviceBody.serviceResponse.contextInfo.sessionId && null != e.response.service.serviceBody.serviceResponse.contextInfo.sessionId && "" != e.response.service.serviceBody.serviceResponse.contextInfo.sessionId && (xt.sessionId = e.response.service.serviceBody.serviceResponse.contextInfo.sessionId);
                                                var t = e.response.service.serviceBody.serviceResponse.propositionList.proposition;
                                                if (kt.customerResponse.responseList = t,
                                                    t.forEach((function(t) {
                                                            if (0 != Object.keys(t).length) {
                                                                void 0 !== t.propositionName && null != t.propositionName && "" != t.propositionName && void 0 !== t.soiEngagementId && null != t.soiEngagementId && "" != t.soiEngagementId && (-1 != t.propositionName.toLowerCase().indexOf("sticky") ? (xt.Sticky = "Y",
                                                                    xt.SOI_Engagement_ids[0].sticky_soi_id = t.soiEngagementId) : -1 != t.propositionName.toLowerCase().indexOf("embedded") ? (xt.Embedded = "Y",
                                                                    xt.SOI_Engagement_ids[0].embedded_soi_id = t.soiEngagementId) : -1 != t.propositionName.toLowerCase().indexOf("overlay") && (xt.Overlay = "Y",
                                                                    xt.SOI_Engagement_ids[0].overlay_soi_id = t.soiEngagementId));
                                                                try {
                                                                    void 0 !== t.soiEngagementId && null != t.soiEngagementId && "" != t.soiEngagementId && void 0 !== t.propositionName && null != t.propositionName && "" == t.propositionName && void 0 !== t.propositionId && null != t.propositionId && "" != t.propositionId && "no_nba" == t.propositionId.toLowerCase() && (_t = t.soiEngagementId)
                                                                } catch (e) {}
                                                                if (void 0 !== t.propositionId && null != t.propositionId && "" != t.propositionId && xt.propositionId.push(t.propositionId),
                                                                void 0 !== t.pageContext && null != t.pageContext && "" != t.pageContext && (xt.Page_Location = t.pageContext),
                                                                void 0 !== e.response.service.serviceHeader && null != e.response.service.serviceHeader && "" != e.response.service.serviceHeader && void 0 !== e.response.service.serviceHeader.statusMsg && null != e.response.service.serviceHeader.statusMsg && "" != e.response.service.serviceHeader.statusMsg && (kt.statusMsg = e.response.service.serviceHeader.statusMsg),
                                                                void 0 !== e.response.service.serviceBody.serviceResponse.contextInfo && null != e.response.service.serviceBody.serviceResponse.contextInfo && void 0 !== e.response.service.serviceBody.serviceResponse.contextInfo.sessionId && null != e.response.service.serviceBody.serviceResponse.contextInfo.sessionId && "" != e.response.service.serviceBody.serviceResponse.contextInfo.sessionId && (kt.nbxSessionId = e.response.service.serviceBody.serviceResponse.contextInfo.sessionId),
                                                                void 0 !== e.response.service.serviceBody.serviceResponse.dispositionList && null != e.response.service.serviceBody.serviceResponse.dispositionList && e.response.service.serviceBody.serviceResponse.dispositionList.length > 0 && void 0 !== e.response.service.serviceBody.serviceResponse.dispositionList[0].dispositionOptionList && null != e.response.service.serviceBody.serviceResponse.dispositionList[0].dispositionOptionList && e.response.service.serviceBody.serviceResponse.dispositionList[0].dispositionOptionList.length > 0)
                                                                    e.response.service.serviceBody.serviceResponse.dispositionList[0].dispositionOptionList.forEach((function(e) {
                                                                            "accepted" === e.label.toLowerCase() ? ft = e.id : "viewed" === e.label.toLowerCase() && zt && kt.customerResponse.responseList.forEach((function(t) {
                                                                                    t.dispositionOptionId = e.id,
                                                                                        t.timeStamp = (new Date).toUTCString()
                                                                                }
                                                                            ))
                                                                        }
                                                                    ))
                                                            }
                                                        }
                                                    )),
                                                void 0 !== e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].dynamicAttrList && null != e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].dynamicAttrList && e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].dynamicAttrList.length > 0)
                                                    e.response.service.serviceBody.serviceResponse.propositionList.proposition[0].dynamicAttrList.forEach((function(e) {
                                                            0 != Object.keys(e).length && (void 0 !== e.attrId && null != e.attrId && "customerpriority" == e.attrId.toLowerCase() && void 0 !== e.value && null != e.value ? xt.Priority.push(e.value.toLowerCase()) : void 0 !== e.attrId && null != e.attrId && "agentavailable" == e.attrId.toLowerCase() && void 0 !== e.value && null != e.value ? xt.LC_Available.push(e.value.toLowerCase()) : void 0 !== e.attrId && null != e.attrId && "timeDelay" == e.attrId.toLowerCase() && void 0 !== e.value && null != e.value && (xt.Overlay_TimeDelay = e.value))
                                                        }
                                                    ))
                                            }
                                        }
                                    ))
                                }
                            ))
                    } catch (e) {}
                } catch (e) {}
                setTimeout((function() {
                        Dn = xt,
                            me(),
                            Le(),
                            ye(),
                            Ce(),
                        "onClickCall" == e && G(),
                        "onSSEUpdateCall" == e && Ne()
                    }
                ), 3e3)
            }
            function a() {
                try {
                    if (null != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "" != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "true" == VZ_Chat.getCookie("lpFdvLockChatInProgress") && (Tn = 1),
                        w.log("calling vz_chat init " + Tn + " times"),
                    "undefined" != typeof jsvar_isNextBestChannelFlow && null != jsvar_isNextBestChannelFlow && jsvar_isNextBestChannelFlow && (null == VZ_Chat.getCookie("lpFdvLockChatInProgress") || "" == VZ_Chat.getCookie("lpFdvLockChatInProgress") || "true" != VZ_Chat.getCookie("lpFdvLockChatInProgress")))
                        return void (ln = !0)
                } catch (e) {}
                try {
                    if (ln)
                        return;
                    var e = VZ_Chat.getCookie("lpFdvLockcookie");
                    if ("true" != VZ_Chat.getCookie("lpFdvLockChatInProgress") && 1 != VZ_Chat.getCookie("lpFdvLockChatInProgress")) {
                        if (null != VZ_Chat.getCookie("cdlThrottleList").indexOf("CHAT_EFF_T") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("CHAT_EFF_T") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("CHAT_EFF_T"))
                            return;
                        if (Z() && -1 != window.location.href.indexOf("/plans/selector.html") && -1 != vzdl.page.flow.indexOf("aal") && null != VZ_Chat.getCookie("cdlThrottleList").indexOf("CHAT_PLAN_E") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("CHAT_PLAN_E") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("CHAT_PLAN_E") && (st = !0)) {
                            if (d(),
                            "undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.createChatButton && null != EchannelVera.createChatButton && "function" == typeof EchannelVera.createChatButton) {
                                var t = document.getElementById("askvzStartButton");
                                void 0 !== t && null != t || (EchannelVera.createChatButton(),
                                "undefined" != typeof vzdl && null != vzdl && "" != vzdl && (void 0 !== vzdl.park && null != vzdl.park && "" != vzdl.park || (vzdl.park = {}),
                                    vzdl.park.usertext = "sales%20chat"))
                            }
                            return
                        }
                        if (void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.authentication && null != window.vzwDL.authentication && void 0 !== window.vzwDL.authentication.fType && null != window.vzwDL.authentication.fType ? bn = window.vzwDL.authentication.fType : void 0 !== window.vzdl && null != window.vzdl && void 0 !== window.vzdl.authentication && null != window.vzdl.authentication && void 0 !== window.vzdl.authentication.fType && null != window.vzdl.authentication.fType ? bn = window.vzdl.authentication.fType : void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.page && null != window.vzwDL.page && void 0 !== window.vzwDL.page.fraudIndicator && null != window.vzwDL.page.fraudIndicator ? bn = window.vzwDL.page.fraudIndicator : void 0 !== window.vzdl && null != window.vzdl && void 0 !== window.vzdl.page && null != window.vzdl.page && void 0 !== window.vzdl.page.fraudIndicator && null != window.vzdl.page.fraudIndicator && (bn = window.vzdl.page.fraudIndicator),
                        "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.flow && null != vzdl.page.flow && "" != vzdl.page.flow && (-1 != vzdl.page.flow.toLowerCase().indexOf("5g_preorder_nse") || -1 != vzdl.page.flow.toLowerCase().indexOf("5g_preorder_aal")))
                            return;
                        if ("" != bn && "R" != bn.toUpperCase())
                            return;
                        if (null != e && null != e && "" != e && "R" != e.toUpperCase())
                            return;
                        if (-1 != window.location.href.indexOf("/dtd/shop") || -1 != window.location.href.indexOf("/vfw/dtd/") || -1 != window.location.href.indexOf("/vfw/cust/dtd/") || -1 != window.location.href.indexOf("/vfw/tech/") || -1 != window.location.href.indexOf("/vfw/cust/tech"))
                            return;
                        if (-1 != window.location.href.indexOf("/vfw/cust/swap/getDeviceDetails") || -1 != window.location.href.indexOf("/vfw/cust/swap/getCartDetails") || -1 != window.location.href.indexOf("/vfw/cust/swap/reviewOrder") || -1 != window.location.href.indexOf("/vfw/cust/swap/orderConfirmation"))
                            return;
                        if (-1 != window.location.href.indexOf("vfw/retail"))
                            return;
                        if (void 0 !== window.vzdl && null != window.vzdl && void 0 !== window.vzdl.page && null != window.vzdl.page && void 0 !== window.vzdl.page.vendorPartnerId && null != window.vzdl.page.vendorPartnerId && "" != window.vzdl.page.vendorPartnerId || void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.page && null != window.vzwDL.page && void 0 !== window.vzwDL.page.vendorPartnerId && null != window.vzwDL.page.vendorPartnerId && "" != window.vzwDL.page.vendorPartnerId)
                            return;
                        try {
                            if (void 0 !== window.vzdl && null != window.vzdl && "" != window.vzdl && void 0 !== window.vzdl.page && null != window.vzdl.page && "" != window.vzdl.page && void 0 !== window.vzdl.page.displayChat && null != window.vzdl.page.displayChat && "" != window.vzdl.page.displayChat && "N" == window.vzdl.page.displayChat.toUpperCase())
                                return
                        } catch (e) {}
                    }
                } catch (e) {}
                oe();
                try {
                    void 0 !== window.jsvar_triggerLiveChatfromNBXResponse && null != window.jsvar_triggerLiveChatfromNBXResponse && 0 != Object.keys(window.jsvar_triggerLiveChatfromNBXResponse).length && (H(window.jsvar_triggerLiveChatfromNBXResponse),
                        Dn = window.jsvar_triggerLiveChatfromNBXResponse,
                        _n = !0,
                        me(),
                        Le(),
                        ye(),
                        Ce())
                } catch (e) {}
                var n = !1;
                try {
                    Z() ? void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.propositionId && null != Dn.propositionId && Dn.propositionId.length > 0 && (n = -1 == Dn.propositionId.indexOf("P_NoNBA") && -1 == Dn.propositionId.indexOf("No_NBA") && -1 == Dn.propositionId.indexOf("no_nba")) : void 0 !== Dn && null != Dn && 0 != Object.keys(Dn).length && void 0 !== Dn.tier && null != Dn.tier && "" != Dn.tier && void 0 !== Dn.throttleList && null != Dn.throttleList && "" != Dn.throttleList && (n = -1 != Dn.throttleList.indexOf(Dn.tier + "_T"))
                } catch (e) {}
                try {
                    if (!_n && Tn < 1)
                        Tn++,
                            wt = !1,
                            setTimeout(VZ_Chat.init, 1e3, cn);
                    else if (_n && n)
                        In = !1,
                            q();
                    else {
                        if (In = !0,
                            At = !0,
                        "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList)
                            if (-1 != vzdl.page.throttleList.indexOf("CHOP_T_G")) {
                                if (!0,
                                void 0 !== window.chatBotPDMGW && null != window.chatBotPDMGW && "" != window.chatBotPDMGW && void 0 !== window.chatBotPDMGW.firstRecommendation && null != window.chatBotPDMGW.firstRecommendation && "" != window.chatBotPDMGW.firstRecommendation && void 0 !== window.chatBotPDMGW.firstRecommendation.skuId && null != window.chatBotPDMGW.firstRecommendation.skuId && "" != window.chatBotPDMGW.firstRecommendation.skuId && void 0 !== window.chatBotPDMGW.firstRecommendation.frp && null != window.chatBotPDMGW.firstRecommendation.frp && "" != window.chatBotPDMGW.firstRecommendation.frp) {
                                    var i = "AAL";
                                    void 0 !== window.chatBotPDMGW.firstRecommendation.intentType && null != window.chatBotPDMGW.firstRecommendation.intentType && "" != window.chatBotPDMGW.firstRecommendation.intentType && (i = window.chatBotPDMGW.firstRecommendation.intentType),
                                        Se(i, window.chatBotPDMGW.firstRecommendation.skuId, window.chatBotPDMGW.firstRecommendation.frp)
                                }
                            } else
                                -1 != vzdl.page.throttleList.indexOf("CHOP_T_P") && (at = !0,
                                void 0 !== window._chatsStoreSoi.firstPromotion && null != window._chatsStoreSoi.firstPromotion && "" != window._chatsStoreSoi.firstPromotion && void 0 !== window._chatsStoreSoi.firstPromotion.displayText && null != window._chatsStoreSoi.firstPromotion.displayText && "" != window._chatsStoreSoi.firstPromotion.displayText && ("undefined" != typeof lpTag && null != lpTag && 0 != Object.keys(lpTag).length ? De(window._chatsStoreSoi.firstPromotion.displayText) : document.addEventListener("lpTagLoaded", (function() {
                                        De(window._chatsStoreSoi.firstPromotion.displayText)
                                    }
                                ))));
                        var l = "";
                        try {
                            l = window.isRPSFlow
                        } catch (e) {}
                        try {
                            null != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "" != VZ_Chat.getCookie("lpFdvLockChatInProgress") && "true" == VZ_Chat.getCookie("lpFdvLockChatInProgress") && "undefined" != typeof EchannelVera && null != EchannelVera && void 0 !== EchannelVera.lpUtilsService && null != EchannelVera.lpUtilsService && void 0 !== EchannelVera.lpUtilsService.isUnifiedButtonEnabled && null != typeof EchannelVera.lpUtilsService.isUnifiedButtonEnabled && EchannelVera.lpUtilsService.isUnifiedButtonEnabled() && void 0 !== EchannelVera.lpUtilsService.removeUnifiedChatButton && null != EchannelVera.lpUtilsService.removeUnifiedChatButton && EchannelVera.lpUtilsService.removeUnifiedChatButton()
                        } catch (e) {}
                        try {
                            if ("true" == window.sessionStorage.getItem("UNIFIED_CHAT_INPROGRESS") && null != VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS") && "open" == VZ_Chat.getCookie("UNIFIED_CHAT_INPROGRESS").toLowerCase())
                                return Mt = !0,
                                    void (st = !0);
                            if ("true" == l || 1 == l)
                                return;
                            if (-1 != document.referrer.indexOf("configuration") && -1 != document.URL.indexOf("trade-in"))
                                return
                        } catch (e) {}
                        String.prototype.trim || (String.prototype.trim = function() {
                                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                            }
                        );
                        try {
                            null != VZ_Chat.getCookie("isLpFirstMessage") && "" != VZ_Chat.getCookie("isLpFirstMessage") || (document.cookie = "isLpFirstMessage=true; domain=.verizon.com; path=/;",
                                document.cookie = "isLpFirstMessage=true; domain=.verizonwireless.com; path=/;")
                        } catch (e) {}
                        if (options = cn || {},
                            v = options.debugMode || !1,
                        options.legacyMode || !0,
                        "interactive" === document.readyState || "complete" === document.readyState) {
                            if (se()) {
                                try {
                                    B(),
                                    "N" == VZ_Chat.getCookie("lp_jwt_wireless") && null != window.sessionStorage.getItem("wjt") && "" != window.sessionStorage.getItem("wjt") && window.sessionStorage.removeItem("wjt")
                                } catch (e) {
                                    w.log("loggedin MDN changes 3")
                                }
                                pe(),
                                    o(options.scrubber, options.builder)
                            }
                        } else
                            document.addownloadChatTagdEventListener("DOMContentLoaded", (function() {
                                    if (se()) {
                                        try {
                                            B(),
                                            "N" == VZ_Chat.getCookie("lp_jwt_wireless") && null != window.sessionStorage.getItem("wjt") && "" != window.sessionStorage.getItem("wjt") && window.sessionStorage.removeItem("wjt")
                                        } catch (e) {
                                            w.log("loggedin MDN changes 5")
                                        }
                                        pe(),
                                            o(options.scrubber, options.builder)
                                    }
                                }
                            ))
                    }
                } catch (e) {}
            }
            function r(e) {
                String.prototype.trim || (String.prototype.trim = function() {
                        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                );
                try {
                    null != VZ_Chat.getCookie("isLpFirstMessage") && "" != VZ_Chat.getCookie("isLpFirstMessage") || (document.cookie = "isLpFirstMessage=true; domain=.verizon.com; path=/;",
                        document.cookie = "isLpFirstMessage=true; domain=.verizonwireless.com; path=/;")
                } catch (e) {}
                if (v = (e = e || {}).debugMode || !1,
                e.legacyMode || !0,
                    cn = e,
                    se()) {
                    try {
                        B(),
                        "N" == VZ_Chat.getCookie("lp_jwt_wireless") && null != window.sessionStorage.getItem("wjt") && "" != window.sessionStorage.getItem("wjt") && window.sessionStorage.removeItem("wjt")
                    } catch (e) {
                        w.log("loggedin MDN changes 6")
                    }
                    pe(),
                        o(e.scrubber, e.builder)
                }
            }
            function s() {
                var e, o, i, l;
                if (!(arguments.length >= 2))
                    throw 1 == arguments.length ? n("OperationNotSupported", "This operation is not supported") : n("InvalidArgument", "Argument count is invalid");
                e = arguments[0],
                    o = arguments[1],
                    i = arguments[2] || "page",
                    l = void 0 === arguments[3] || arguments[3];
                try {
                    t(e, o, i, l)
                } catch (t) {
                    v && w.log("setVar error ->" + t),
                    "DataLayerUndefinedException" != t.name || z || h.push((function() {
                            s(e, o, i, l)
                        }
                    ))
                }
            }
            function c(e) {
                return null == e ? e : e.replace(/\//g, "")
            }
            function p(e) {
                try {
                    for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
                        for (var i = n[o]; " " == i.charAt(0); )
                            i = i.substring(1);
                        if (0 == i.indexOf(t))
                            return i.substring(t.length, i.length)
                    }
                    return ""
                } catch (e) {
                    return w.log(" unable to get cookie for Agent Avilability" + e),
                        ""
                }
            }
            var v, u, g = {}, h = [], w = window.console, z = !1;
            return g.setLPCookie = Me,
                g.getCookie = p,
                g.replaceAll = c,
                g.init = i,
                g.contactUsInit = r,
                g.setVar = s,
                g.getException = n,
                g.initVars = o,
                g.initiateLPZineOnePDMAPI = l,
                g
        }(),
            VZ_Chat.LPMobileDataScrubber = function(t, n) {
                function o() {
                    var e = window.lpTag;
                    e.sdes = e.sdes || [],
                        "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList && "" != vzdl.page.throttleList && -1 != vzdl.page.throttleList.indexOf("C_LPNS") || null != VZ_Chat.getCookie("cdlThrottleList").indexOf("C_LPNS") && "" != VZ_Chat.getCookie("cdlThrottleList").indexOf("C_LPNS") && -1 != VZ_Chat.getCookie("cdlThrottleList").indexOf("C_LPNS") ? je() : Ue(),
                        Qe(),
                        Ke();
                    try {
                        "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.name && null != vzdl.page.name && "" != vzdl.page.name && -1 != vzdl.page.name.toLowerCase().indexOf("pdp") && (-1 == document.location.pathname.toLowerCase().indexOf("certified-pre-owned") && -1 == vzdl.page.name.toLowerCase().replace(/\s/g, "").indexOf("certifiedpre-owned") || e.section.push("CPO"))
                    } catch (e) {}
                    "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.throttle && null != vzdl.page.throttle && "" != vzdl.page.throttle && -1 != vzdl.page.throttle.toLowerCase().replace(/\s/g, "").indexOf("nsaversion") && e.section.push("nsaversion");
                    try {
                        Fe(),
                            Re();
                        var t = "";
                        if ("undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.throttleList && null != vzdl.page.throttleList && "" != vzdl.page.throttleList && (t = vzdl.page.throttleList),
                        "" == t || -1 == t.indexOf("|ShowProactiveLiveChat|") && -1 == t.indexOf("|ProActiveChat|") || e.section.push("ChannelOrchestrationExperience"),
                        ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.page && null != vzwDL.page && "" != vzwDL.page && void 0 !== vzwDL.page.fireProactiveChat && null != vzwDL.page.fireProactiveChat && "" != vzwDL.page.fireProactiveChat && "y" == vzwDL.page.fireProactiveChat.toLowerCase() || "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.fireProactiveChat && null != vzdl.page.fireProactiveChat && "" != vzdl.page.fireProactiveChat && "y" == vzdl.page.fireProactiveChat.toLowerCase()) && void 0 !== e && null != e && 0 != Object.keys(e).length && e && e.section && e.section.indexOf("CMP:5GHomeQR") <= -1) {
                            window.lpTag && window.lpTag.section;
                            e.section.push("CMP:5GHomeQR")
                        }
                    } catch (e) {}
                    l()
                }
                function i() {
                    lpTag.sdes = window.lpTag.sdes || [],
                        lpTag.sdes.push({
                            type: "lead",
                            lead: {
                                topic: window.document.URL,
                                value: -1,
                                leadId: "Page View"
                            }
                        })
                }
                function l() {
                    try {
                        lpTag.section.push("VZW"),
                        (-1 !== document.referrer.toLowerCase().indexOf("5g") || -1 != window.document.URL.split("?")[0].toLowerCase().indexOf("5g") || "undefined" != typeof videoChat_Lp_Flow_Indicator && null != videoChat_Lp_Flow_Indicator && "" != videoChat_Lp_Flow_Indicator && -1 != videoChat_Lp_Flow_Indicator.toLowerCase().indexOf("5g")) && lpTag.section.push("5g"),
                            "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.section2) ? lpTag.section.push(VZ_Chat.replaceAll(vzwDL.page.section2)) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.siteSection && null != vzdl.page.siteSection && "" != vzdl.page.siteSection && lpTag.section.push(VZ_Chat.replaceAll(vzdl.page.siteSection)),
                            -1 != window.location.hostname.toLowerCase().indexOf("espanol.verizon.com") || -1 != window.location.hostname.toLowerCase().indexOf("es-vzwqa") ? lpTag.section.push("spanish") : "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.language) ? lpTag.section.push(vzwDL.page.language) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && x(vzdl.page) && x(vzdl.page.language) && lpTag.section.push(vzdl.page.language);
                        var t = "";
                        try {
                            "undefined" != typeof vzdl && null != vzdl && "" != vzdl && x(vzdl.page) && x(vzdl.page.flow) && (t = VZ_Chat.replaceAll(vzdl.page.flow))
                        } catch (e) {}
                        void 0 !== t && null != t && "" != t ? lpTag.section.push(t) : "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.flowName) && lpTag.section.push(VZ_Chat.replaceAll(vzwDL.page.flowName)),
                            "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.page) && x(vzwDL.page.mlsEXP) ? lpTag.section.push(VZ_Chat.replaceAll(vzwDL.page.mlsEXP)) : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && void 0 !== vzdl.page.throttle && null != vzdl.page.throttle && "" != vzdl.page.throttle && lpTag.section.push(VZ_Chat.replaceAll(vzdl.page.throttle));
                        try {
                            vzdl.error.code
                        } catch (e) {}
                        try {
                            if (null != vzdl.error.code && null != vzdl.error.code && "" != vzdl.error.code) {
                                var n, o = null, i = "";
                                try {
                                    vzdl.error.code.split("|")[0],
                                        n = vzdl.error.code.split("|")[1],
                                    "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.error && null != vzdl.error && null != vzdl.error.soiResponse && null != (o = e(vzdl.error.soiResponse)) && (o = parseFloat(o)),
                                    "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.error && null != vzdl.error && void 0 !== vzdl.error.proactiveChatIndicator && null != vzdl.error.proactiveChatIndicator && "" != vzdl.error.proactiveChatIndicator && (i = vzdl.error.proactiveChatIndicator),
                                    ("y" == i.toLowerCase() || (null == o || o > .135 || isNaN(o)) && void 0 !== n && null != n && "" != n.trim()) && lpTag.section.push("Error:true"),
                                    null != vzdl && null != vzdl.error && void 0 !== vzdl.error.proactiveChatCustomMSG && "" != vzdl.error.proactiveChatCustomMSG && null != vzdl.error.proactiveChatCustomMSG && L(proactiveChatCustomMSG)
                                } catch (e) {
                                    console.log("extractSOIScore error " + e)
                                }
                            }
                        } catch (e) {}
                        var l = window.sessionStorage.getItem("wjt");
                        ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && void 0 !== vzwDL.authentication && null != vzwDL.authentication && "" != vzwDL.authentication && vzwDL.authentication.mdn && void 0 !== l && null != l && "" != l && In || Z() && void 0 !== l && null != l && "" != l && In) && lpTag.section.push("Auth:true"),
                        -1 == window.document.URL.indexOf("tlogin.verizonwireless.com") && -1 == window.document.URL.indexOf("login.verizonwireless.com") && -1 == window.document.URL.indexOf("login.verizon.com") || lpTag.section.push("defaultexclude"),
                            te()
                    } catch (e) {}
                }
                function a() {
                    try {
                        if ("undefined" != typeof lpTag && null != lpTag) {
                            var e = "";
                            void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.authentication.custType && null != window.vzwDL.authentication && void 0 !== window.vzwDL.authentication.custType && null != window.vzwDL.authentication.custType && "" != window.vzwDL.authentication.custType ? e = window.vzwDL.authentication.custType : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.user && null != vzdl.user && void 0 !== vzdl.user.customerType && null != vzdl.user.customerType && "" != vzdl.user.customerType && (e = vzdl.user.customerType);
                            try {
                                var t = !1;
                                if (null != Ie("returnChatterWireless") && "" != Ie("returnChatterWireless") && ((t = Ie("returnChatterWireless")) || "true" == t)) {
                                    var n = {
                                        type: "service",
                                        service: {
                                            topic: "RepeatMessager",
                                            status: 1
                                        }
                                    };
                                    lpTag.sdes = window.lpTag.sdes || [],
                                        lpTag.sdes.push(n)
                                }
                            } catch (e) {}
                            lpTag.sdes = window.lpTag.sdes || [];
                            var o, i = VZ_Chat.getCookie("GLOBALID");
                            void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.page && null != window.vzwDL.page && void 0 !== window.vzwDL.page.sessionId && null != window.vzwDL.page.sessionId && "" != window.vzwDL.page.sessionId ? o = window.vzwDL.page.sessionId : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && void 0 !== vzdl.page && null != vzdl.page && "" != vzdl.page && void 0 !== vzdl.page.channelSession && null != vzdl.page.channelSession && "" != vzdl.page.channelSession ? o = vzdl.page.channelSession : null != window.sessionStorage.getItem("SESSION_ID") && null != window.sessionStorage.getItem("SESSION_ID") && "" != window.sessionStorage.getItem("SESSION_ID") ? o = window.sessionStorage.getItem("SESSION_ID") : void 0 !== window.vzwDL && null != window.vzwDL && void 0 !== window.vzwDL.page && null != window.vzwDL.page && void 0 !== window.vzwDL.page.session && null != window.vzwDL.page.session && "" != window.vzwDL.page.session && (o = window.vzwDL.page.session),
                                void 0 !== o && void 0 !== i && null != o && null != i ? lpTag.sdes.push({
                                    type: "ctmrinfo",
                                    info: {
                                        ctype: e,
                                        storeZipCode: i,
                                        storeNumber: o
                                    }
                                }) : void 0 !== o && null != o ? lpTag.sdes.push({
                                    type: "ctmrinfo",
                                    info: {
                                        ctype: e,
                                        storeNumber: o
                                    }
                                }) : void 0 !== i && null != i && lpTag.sdes.push({
                                    type: "ctmrinfo",
                                    info: {
                                        ctype: e,
                                        storeZipCode: i
                                    }
                                })
                        }
                    } catch (e) {
                        console.log("Sending global session id and vzw_session_id failed " + e)
                    }
                }
                function d(t, n) {
                    try {
                        Jt = !0,
                            Wt = 0;
                        var o = window.lpTag
                            , i = null
                            , l = "";
                        if (o.sdes = o.sdes || [],
                        "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.error && null != vzdl.error && void 0 !== vzdl.error.soiResponse && null != vzdl.error.soiResponse && null != (i = e(vzdl.error.soiResponse)) && (i = parseFloat(i)),
                        "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.error && null != vzdl.error && void 0 !== vzdl.error.proactiveChatIndicator && null != vzdl.error.proactiveChatIndicator && "" != vzdl.error.proactiveChatIndicator && (l = vzdl.error.proactiveChatIndicator),
                        null == i || isNaN(i)) {
                            if ("y" == l.toLowerCase()) {
                                a = {
                                    type: "lead",
                                    lead: {
                                        topic: "PEGA-SOI",
                                        value: l,
                                        leadId: "ErrorId"
                                    }
                                };
                                o.sdes.push(a)
                            }
                        } else {
                            var a = {
                                type: "lead",
                                lead: {
                                    topic: "SOI",
                                    value: i,
                                    leadId: "ErrorId"
                                }
                            };
                            o.sdes.push(a)
                        }
                        var d = {
                            type: "error",
                            error: {
                                message: n,
                                code: t
                            }
                        };
                        o.sdes.push(d)
                    } catch (e) {}
                }
                if (!n)
                    throw t.getException("InvalidParamException", "Data layer is undefined");
                this.scrub = function() {
                    o(),
                        i(),
                        Ve(),
                        Ze(),
                    ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.authentication) && x(vzwDL.authentication.visHashedMdn) && x(vzwDL.authentication.accountNumber) && "Y" != vzwDL.authentication.prepayInd && "1" != vzwDL.authentication.prepayInd || "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.user && null != vzdl.user && void 0 !== vzdl.user.id && null != vzdl.user.id && vzdl.user.id && void 0 !== vzdl.user.accountLast2 && null != vzdl.user.accountLast2 && vzdl.user.accountLast2 && "Y" != vzdl.user.accountType && "1" != vzdl.user.accountType) && a();
                    var e = "";
                    try {
                        e = vzdl.error
                    } catch (e) {}
                    if (e && null != vzdl.error.code && null != vzdl.error.code && "" != vzdl.error.code) {
                        var t, n;
                        try {
                            t = vzdl.error.code.split("|")[0],
                                n = vzdl.error.code.split("|")[1]
                        } catch (e) {}
                        d(t, n)
                    }
                }
            }
            ,
            VZ_Chat.TCMobileDataBuilder = function(e, t) {
                function n() {
                    try {
                        var e = window.lpTag
                            , t = {};
                        if ("undefined" != typeof vzwDL && null !== vzwDL && void 0 !== vzwDL.cart && null != vzwDL.cart ? t = vzwDL.cart : "undefined" != typeof vzdl && null !== vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && (t = vzdl.txn.product),
                        Object.keys(t).length > 0) {
                            e.sdes = e.sdes || [];
                            var n = [];
                            void 0 !== t.items && null != t.items ? n = t.items : void 0 !== t.current && null != t.current && (n = t.current);
                            for (var o = {
                                type: "cart",
                                currency: "USD",
                                numItems: n.length,
                                products: []
                            }, i = 0; i < n.length; i++) {
                                var l = n[i]
                                    , a = {
                                    product: {}
                                };
                                l.name && (a.product.name = l.name,
                                void 0 !== e && null != e && Object.keys(e).length > 0 && "Decline Device Protection" == l.name && (e.section.push("DEVICEPROTECTIONDECLINED"),
                                    te())),
                                l.category && (a.product.category = l.category),
                                    l.productId ? a.product.sku = l.productId : l.id && (a.product.sku = l.id),
                                    l.price ? a.product.price = l.price : l.nonRecurringPrice && (a.product.price = l.nonRecurringPrice),
                                    l.quantity ? a.product.quantity = l.quantity : l.qty && (a.product.quantity = l.qty),
                                    l.promoCode ? a.product.promoCode = l.promoCode : l.discount && (a.product.promoCode = l.discount),
                                    o.products.push(a)
                            }
                            e.sdes.push(o)
                        }
                    } catch (e) {}
                }
                function o() {
                    var e = {};
                    if ("undefined" != typeof vzwDL && null !== vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase ? e = vzwDL.purchase : "undefined" != typeof vzdl && null !== vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && (e = vzdl.txn.product),
                    Object.keys(e).length > 0) {
                        lpTag.sdes = lpTag.sdes || [];
                        var t = [];
                        void 0 !== e.items && null != e.items ? t = e.items : void 0 !== e.current && null != e.current && (t = e.current),
                            lpTag.sdes = window.lpTag.sdes || [];
                        "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.orderNumber && null != vzwDL.purchase.orderNumber && "" != vzwDL.purchase.orderNumber ? vzwDL.purchase.orderNumber : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.id && null != vzdl.txn.id && "" != vzdl.txn.id && vzdl.txn.id;
                        var n = 0;
                        try {
                            if ("undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.orderTotal && null != vzwDL.purchase.orderTotal && "" != vzwDL.purchase.orderTotal)
                                try {
                                    n = parseFloat(vzwDL.purchase.orderTotal)
                                } catch (e) {}
                            else if ("undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.purchase) && x(vzwDL.purchase.orderTotal))
                                try {
                                    n = parseFloat(vzwDL.purchase.orderTotal)
                                } catch (e) {}
                            else if ("undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.total && null != vzdl.txn.total && "" != vzdl.txn.total)
                                try {
                                    n = parseFloat(vzdl.txn.total)
                                } catch (e) {}
                        } catch (e) {}
                        var o = "";
                        "undefined" != typeof vzwDL && null != vzwDL && "" != vzwDL && x(vzwDL.purchase) && x(vzwDL.purchase.orderNumber) ? o = vzwDL.purchase.orderNumber : "undefined" != typeof vzdl && null != vzdl && "" != vzdl && x(vzdl.txn) && x(vzdl.txn.id) && (o = vzdl.txn.id);
                        for (var i = {
                            type: "purchase",
                            currency: "USD",
                            orderId: o,
                            total: n,
                            cart: {
                                products: []
                            }
                        }, l = 0; l < t.length; l++) {
                            var a = t[l]
                                , d = {
                                product: {}
                            };
                            a.name && (d.product.name = a.name),
                            a.category && (d.product.category = a.category),
                                a.productId ? d.product.sku = a.productId : a.id && (d.product.sku = a.id),
                                a.price ? d.product.price = a.price : a.nonRecurringPrice && (d.product.price = a.nonRecurringPrice),
                                i.cart.products.push(d)
                        }
                        var r = {
                            product: {}
                        };
                        "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingMethod && null != vzwDL.purchase.shippingMethod && "" != vzwDL.purchase.shippingMethod && (r.product.name = "Shipping Method: " + vzwDL.purchase.shippingMethod),
                            "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingState && null != vzwDL.purchase.shippingState && vzwDL.purchase.shippingState && "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && void 0 !== vzwDL.purchase.shippingZipCode && null != vzwDL.purchase.shippingZipCode && vzwDL.purchase.shippingZipCode ? r.product.sku = vzwDL.purchase.shippingState + "," + vzwDL.purchase.shippingZipCode : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.shippingState && null != vzdl.txn.shippingState && vzdl.txn.shippingState && void 0 !== vzdl.txn.shippingZip && null != vzdl.txn.shippingZip && vzdl.txn.shippingZip && (r.product.sku = vzdl.txn.shippingState + "," + vzdl.txn.shippingZip),
                            i.cart.products.push(r)
                    }
                    "" != o && "none" != o && lpTag.sdes.push(i)
                }
                if (!t)
                    throw e.getException("InvalidParamException", "Data layer is undefined");
                this.build = function() {
                    n(S()),
                        "undefined" != typeof vzwDL && null != vzwDL && void 0 !== vzwDL.purchase && null != vzwDL.purchase && vzwDL.purchase ? void 0 !== vzwDL.purchase.items && null != vzwDL.purchase.items && vzwDL.purchase.items && vzwDL.purchase.items.length > 0 && o(vzwDL) : "undefined" != typeof vzdl && null != vzdl && void 0 !== vzdl.txn && null != vzdl.txn && void 0 !== vzdl.txn.product && null != vzdl.txn.product && vzdl.txn.product && void 0 !== vzdl.txn.product.current && null != vzdl.txn.product.current && vzdl.txn.product.current && vzdl.txn.product.current.length > 0 && o(vzdl)
                }
            }
        ;
        var mn = setInterval((function() {
                try {
                    var e = window.sessionStorage.getItem("wjt")
                } catch (e) {}
                V(),
                    null === e || "" === e ? s() : clearInterval(mn)
            }
        ), 5e3);
        setTimeout((function() {
                clearInterval(mn)
            }
        ), 6e4);
        var Ln = 1e3
            , yn = 1e3
            , Cn = function(e, t) {
            document.cookie = e + "=" + escape(t) + ";path=/;"
        }
            , _n = !1
            , Tn = 0
            , In = !0
            , Dn = {}
            , Sn = ""
            , xn = !1;
        document.body.addEventListener("mouseout", (function(e) {
                try {
                    if (st || Je())
                        return;
                    if ("undefined" != typeof lpTag && null != lpTag && 0 != Object.keys(lpTag).length && void 0 !== lpTag.newPage && null != lpTag.newPage && "" != lpTag.newPage && e.clientY <= 50 && lpTag && lpTag.section && lpTag.section.indexOf("preemptiveLeave") <= -1) {
                        var t = lpTag && lpTag.section || [];
                        t.push("preemptiveLeave"),
                            lpTag.newPage(document.URL, {
                                section: t,
                                taglets: {
                                    rendererStub: {
                                        divIdsToKeep: {
                                            LP_SALES_HOME_EMBEDDED: !0
                                        }
                                    }
                                }
                            })
                    }
                } catch (e) {
                    console.log(e, "preemptive error")
                }
            }
        )),
            window.addEventListener("load", (function() {
                    v()
                }
            )),
            window.addEventListener("load", (function() {
                    ve()
                }
            )),
            window.addEventListener("load", (function() {
                    ue()
                }
            )),
            window.addEventListener("message", g, !1);
        var kn = {
            NEW_AGENT_TYPING_INDICATOR: "Incoming message",
            OLD_AGENT_TYPING_INDICATOR: "Agent is typing...",
            CHAT_WITH_US: "Chat with us",
            MESSAGE_US: "Message us",
            THANK_YOU: "Thank you",
            LIVE_CHAT_SURVEY: "Live chat survey"
        }
            , Pn = new MutationObserver((function(e) {
                for (var t = 0; t < e.length; t++)
                    for (var n = e[t], o = 0; o < n.addedNodes.length; o++) {
                        var i = n.addedNodes[o];
                        3 === i.nodeType && i.textContent === kn.MESSAGE_US && (i.textContent = kn.CHAT_WITH_US)
                    }
            }
        ))
            , On = new MutationObserver((function(e) {
                for (var t = 0; t < e.length; t++) {
                    e[t].target.style.display = "none"
                }
            }
        ))
            , En = new MutationObserver((function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    n.target.textContent === kn.OLD_AGENT_TYPING_INDICATOR && (n.target.textContent = kn.NEW_AGENT_TYPING_INDICATOR)
                }
            }
        ))
            , Nn = "P1"
            , bn = ""
            , An = 0;
        window.clearCartLP = He,
            window.setLocalStorageWithExpiry = Te,
            window.getLocalStorageWithExpiry = Ie,
            window.checkLPValidVariable = x,
            window.getWirelessDL = S,
            window.lpButtonHided = Ut,
            window.proAutoOpenedFlag = jt,
            window.isLpTagBlocked = Mt,
            window.errorPageProAvctive = Jt,
            window.onWindowJWTMessage = g,
            window.hideLPWithTimer = u,
            window.checkHideChatButtonTimer = v,
            window.reInitChatFramework = o,
            window.hideLPChatButton = d,
            window.displayLPChatButton = r,
            window.getJWTToken = s,
            window.lpRetailChatAuth = p,
            window.chatLPUpdateErrorTag = t,
            window.updateLiveChatevents = f,
            window.lpGetAuthenticationToken = c,
            window.lpChatObject = $t,
            window.reInitChatFrameworkNSA = n,
            window.cartUnlockApi = y,
            window.getLPEngagmentandPriority = C,
            window.fireLpAutoMessage = I,
            window.coChangeLpChatStyle = D,
            window.islpFrameworkloaded = T,
            window.showandFireLiveEngagewindow = _,
            window.readTCCookieInfo = k,
            window.createTCCookie = Cn,
            window.sendLPEngagementsData = N,
            window.sendLPEngagementsTargetData = b,
            window.sendLPEngagementsClickedData = A,
            window.pushingAuthValue = V,
            window.changeLPJWTCookieValue = B,
            window.vzdlSiteCatalyst = R,
            window.isUserAuthenticated = Z,
            window.launchLiveChatFromNBX = j,
            window.triggerLiveChatfromNBXResponse = H,
            window.lpBauFlow = In,
            window.isNextBestChannelFlow = fe,
            window.lpEngagementExternalClick = _e,
            window.coInitVars = X,
            window.nbxReporting = F,
            window.lpchatWelcomeMessageChange = m,
            window.updatedLPPEGAPriority = Oe,
            window.updateLPPegaOnclose = Ee,
            window.createBAULpSections = Ue,
            window.createNewLpSections = je,
            window.updateLpZineOneObject = Ge,
            window.chatWindowInBackGround = qe,
            window.checkIfValidCreditCode = Xe,
            window.addPersonalInformation = Be,
            window.preLoopIndicator = Qe,
            window.lpNewPageCall = te,
            window.lpSalesAskVzFlow = st,
            window.checkChatIsInProgress = Ye,
            window.checkingAskVzChatIsInProgress = Je,
            window.add5GHomeQR = Ke,
            window.lpWirelineModalCloser = et,
            window.refreshSectionValues = ot,
            window.addPersonalInformation = Be,
            window.hideLPWithTimerMVA = it
    }
    ;
});
