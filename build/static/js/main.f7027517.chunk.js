(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(47)},24:function(e,t,n){},25:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),s=(n(24),n(2)),u=n(3),i=n(5),l=n(4),h=n(6),p=(n(25),n(8)),f=n.n(p),m=n(16),d=n(17),b=n.n(d),v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).options=function(){return n.props.results.map(function(e){return r.a.createElement("option",{key:e.name},e.name)})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("datalist",{id:"countryList"},this.options()))}}]),t}(a.Component),y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1,query:"",results:[],helpText:""},n.getData=Object(m.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://restcountries.eu/rest/v2/name/".concat(n.state.query)).then(function(e){var t=e.data;n.setState({results:t}),console.log(n.state.results)}).catch(function(){return n.setState({error:!0,helpText:"No Results Found"})});case 2:case"end":return e.stop()}},e,this)})),n.handleChange=function(){n.setState({query:n.search.value,helpText:""},function(){n.state.query&&n.state.query.length>1&&n.getData()})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Search here",ref:function(t){return e.search=t},onChange:this.handleChange,list:"countryList",className:"cogoport-input"}),r.a.createElement(v,{results:this.state.results}),r.a.createElement("p",{className:"cogoport-no-results"},this.state.helpText))}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(y,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.f7027517.chunk.js.map