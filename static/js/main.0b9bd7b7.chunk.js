(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{32:function(e,a,t){},36:function(e,a,t){e.exports=t(70)},41:function(e,a,t){},59:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),i=t(15),m=t(2),s=(t(41),t(10)),o=t(11),u=t(13),h=t(12),E=t(18),p=t.n(E),d=(t(59),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.id,t=e.name,n=e.image;return c.a.createElement(i.b,{to:"https://albertocruzluis.github.io//TenerifeBeachApp/beach/".concat(a,"/")},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-name"},c.a.createElement("h1",null,t)),c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{src:n,alt:t}))))}}]),t}(c.a.Component)),v="https://tenerifebeachapi.herokuapp.com/api/",f=(t(65),t(85)),b=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e,a){var t=n.state.originalBeaches,c=n.state.limitItemsPerPage,l=(a-1)*c,r=t.length>c+(a-1)*c?c+(a-1)*c:t.length;n.setState({beaches:t.slice(l,r)})},n.state={beaches:[],originalBeaches:[],limitItemsPerPage:5},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get(v+"beachlist/").then((function(a){console.log(a),e.setState({beaches:a.data.slice(0,5)}),e.setState({originalBeaches:a.data})})).catch()}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"list-card"},this.state.beaches.map((function(e,a){return c.a.createElement(d,{key:a,id:e._id,name:e.name,image:e.image})}))),c.a.createElement("div",{className:"pagination"},c.a.createElement(f.a,{count:Math.ceil(this.state.originalBeaches.length/this.state.limitItemsPerPage),onChange:this.handleChange,showFirstButton:!0,showLastButton:!0})))}}]),t}(n.Component),g=(t(66),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"navbar-name"},c.a.createElement(i.b,{to:"/TenerifeBeachApp/"},c.a.createElement("span",null,"Tenerife Beach App"))),c.a.createElement("div",{className:"navbar-item"},c.a.createElement(i.b,{to:"/TenerifeBeachApp/"},c.a.createElement("span",null,"Home"))))}}]),t}(c.a.Component)),N=(t(67),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("p",null,"\xa9 2020 Tenerife Beach App"))}}]),t}(c.a.Component)),j=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement(g,null)),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"container"},c.a.createElement("p",null,"Conoce las mejores Playas de Tenerife")),c.a.createElement(b,null)),c.a.createElement("div",{className:"footer"},c.a.createElement(N,null)))},O=(t(68),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={beach:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;p.a.get(v+"beach/".concat(a,"/")).then((function(a){console.log(a),e.setState({beach:a.data})})).catch()}},{key:"render",value:function(){var e=this.state.beach,a=e.name,t=e.image,l=e.location,r=e.length,i=e.composition;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement(g,null)),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"container-beach"},c.a.createElement("div",{className:"name"},c.a.createElement("h1",null,a)),c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:t,alt:a})),c.a.createElement("div",{className:"details-container"},c.a.createElement("h2",null,"Datos sobre ",a),c.a.createElement("hr",null),c.a.createElement("div",{className:"details"},c.a.createElement("p",null,c.a.createElement("strong",null,"\u27a4 Location: "),l),c.a.createElement("p",null,c.a.createElement("strong",null,"\u27a4 Length: "),r),c.a.createElement("p",null,c.a.createElement("strong",null,"\u27a4 Composition: "),i)))),c.a.createElement("div",{className:"space"})),c.a.createElement("div",{className:"footer"},c.a.createElement(N,null)))}}]),t}(n.Component)),y=(t(32),function(){return c.a.createElement("div",{className:"Error"},c.a.createElement("h1",null,"404 Page Not Found"))}),B=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement(g,null)),c.a.createElement("div",{className:"main"},c.a.createElement(y,null)),c.a.createElement("div",{className:"footer"},c.a.createElement(N,null)))},k=function(){return c.a.createElement(i.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/TenerifeBeachApp",component:j}),c.a.createElement(m.a,{exact:!0,path:"/TenerifeBeachApp/beach/:id",component:O}),c.a.createElement(m.a,{component:B})))},C=(t(69),document.getElementById("root"));r.a.render(c.a.createElement(k,null),C)}},[[36,1,2]]]);
//# sourceMappingURL=main.0b9bd7b7.chunk.js.map