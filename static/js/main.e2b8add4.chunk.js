(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n(4),a=n.n(c),o=n(5),i=n(6),u=n(8),h=n(7),l=(n(14),n(15),function(e){return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(s.jsx)("h2",{children:e.monster.name}),Object(s.jsxs)("p",{children:[e.monster.email," "]})]})}),d=function(e){return Object(s.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(s.jsx)(l,{monster:e},e.id)}))})},j=(n(16),n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(s.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),m=(n(3),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("h1",{children:"Monster Rolodex"}),Object(s.jsx)(j,{placeholder:"serach monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(s.jsx)(d,{monsters:c})]})}}]),n}(r.Component));a.a.render(Object(s.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.e2b8add4.chunk.js.map