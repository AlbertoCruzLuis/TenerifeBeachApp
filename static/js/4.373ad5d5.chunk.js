(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[4],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=(a(91),a(30)),l=a(27),i=(a(92),a(77)),s=(a(93),function(e){var t=e.id,a=e.name,n=e.image,r=e.scrollPosition;return c.a.createElement(l.b,{to:"/beach/".concat(t,"/")},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-name"},c.a.createElement("h1",null,a)),c.a.createElement("div",{className:"card-body"},c.a.createElement(i.LazyLoadImage,{className:"lazy-image",effect:"blur",src:n,alt:a,width:"100%",height:"100%",scrollPosition:r}))))}),o=(a(94),a(124)),u=a(3),m=a(76),f=Object(i.trackWindowScroll)((function(e){var t=e.limitItemsPerPage,a=void 0===t?5:t,l=e.scrollPosition,i=Object(n.useState)([]),f=Object(r.a)(i,2),p=f[0],d=f[1],h=Object(n.useState)([]),E=Object(r.a)(h,2),b=E[0],v=E[1],g=Object(u.f)();Object(n.useEffect)((function(){Object(m.b)(d,v,g)}),[g]);return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"list-card"},p.map((function(e,t){return c.a.createElement(s,{key:t,id:e._id,name:e.name,image:e.image,scrollPosition:l})}))),c.a.createElement("div",{className:"pagination"},c.a.createElement(o.a,{count:Math.ceil(b.length/a),onChange:function(e,t){var n=b,c=(t-1)*a,r=n.length>a+(t-1)*a?a+(t-1)*a:n.length;d(n.slice(c,r))},showFirstButton:!0,showLastButton:!0})))})),p=a(89),d=a(74);t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(p.a,null,c.a.createElement("meta",{name:"description",content:"Las mejores playas de Tenerife para hacer turismo las podras encontrar en esta pagina web. "}),c.a.createElement("title",null,"Tenerife Beach App")),c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"Conoce las mejores Playas de Tenerife")),c.a.createElement(f,null)))}},70:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(71),a(27));t.a=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"navbar-name"},c.a.createElement(r.b,{to:"/"},c.a.createElement("span",null,"Tenerife Beach App"))),c.a.createElement("div",{className:"navbar-item"},c.a.createElement(r.b,{to:"/"},c.a.createElement("span",null,"Home"))))}},71:function(e,t,a){},72:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(73);t.a=function(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("p",null,"\xa9 2021 Tenerife Beach App"))}},73:function(e,t,a){},74:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(75),a(70)),l=a(72);t.a=function(e){var t=e.children;return c.a.createElement(n.Fragment,null,c.a.createElement("header",null,c.a.createElement(r.a,null)),c.a.createElement("main",null,t),c.a.createElement("footer",null,c.a.createElement(l.a,null)))}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u}));var n=a(78),c=a.n(n),r=a(79),l="https://tenerifebeachapi.herokuapp.com/api/",i=a(80),s=a.n(i),o=function(){var e=Object(r.a)(c.a.mark((function e(t,a,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get(l+"beachlist/").then((function(e){t(e.data.slice(0,5)),a(e.data)})).catch((function(e){n.push("/".concat(e.response.status))}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(r.a)(c.a.mark((function e(t,a,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get(l+"beach/".concat(t,"/")).then((function(e){a(e.data)})).catch((function(e){n.push("/".concat(e.response.status))}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},91:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){}}]);
//# sourceMappingURL=4.373ad5d5.chunk.js.map