(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(3),o=n.n(r),s=(n(12),n(13),n(4)),i=n(5),u=n(7),l=n(6),p=(n(14),n(0)),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).timer=function(){t.state.currentCount<=0||(t.setState({currentCount:t.state.currentCount-1}),t.state.currentCount<1&&clearInterval(t.intervalId))},t.resetState=function(){t.setState({currentCount:10})},t.state={pokeInfo:"",pokeSprite:"",pokeName:""},t}return Object(i.a)(n,[{key:"fetchPokemon",value:function(){var t=this,e=Math.ceil(1),n=Math.floor(152),a=Math.floor(Math.random()*(n-e)+e);fetch("https://pokeapi.co/api/v2/pokemon/".concat(a),{method:"GET"}).then((function(t){return t.json()})).then((function(e){t.setState({pokeInfo:e,pokeSprite:e.sprites.front_default,pokeName:e.species.name})})).catch((function(t){return console.log(t)}))}},{key:"componentDidUpdate",value:function(){this.intervalId=setInterval(this.timer.bind(this),1e3)}},{key:"componentWillUpdate",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("button",{className:"start",onClick:function(){t.resetState(),t.fetchPokemon()},children:"Start!"}),Object(p.jsx)("h1",{className:"timer",children:"Timer Display: ".concat(this.state.currentCount)}),Object(p.jsxs)("div",{className:"pokeWrap",children:[Object(p.jsx)("img",{className:"pokeImg",src:this.state.pokeSprite,style:0===this.state.currentCount?{filter:"brightness(100%)"}:{filter:"brightness(0%)"}}),Object(p.jsx)("h1",{className:"pokeName",children:this.state.pokeName})]})]})}}]),n}(a.Component);var f=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(h,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.1b729293.chunk.js.map