(this["webpackJsonpreact-append-nodes"]=this["webpackJsonpreact-append-nodes"]||[]).push([[0],{13:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),u=n(5),s=n(3),i=n(4),l=n(6),p=n(7),d=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).run=function(){for(var t=[],e=0;e<a.n;e++)t.push(a.total+e);a.total+=a.n,a.setState({nodes:[].concat(Object(u.a)(a.state.nodes),t)})},a.state={nodes:[],time:0},a.total=0,a.n=1e3,a.t1=0,a.t2=0,a}return Object(i.a)(n,[{key:"componentWillUpdate",value:function(){this.t1=performance.now()}},{key:"componentDidUpdate",value:function(){this.t2=performance.now(),document.querySelector("#output").textContent=this.t2-this.t1+"ms"}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("button",{onClick:this.run},"\u8fd0\u884c"),o.a.createElement("div",{id:"output"}),o.a.createElement("div",null,this.state.nodes.map((function(t){return o.a.createElement("div",{key:t},t)}))))}}]),n}(o.a.Component);r.a.render(o.a.createElement(d,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.be65552c.chunk.js.map