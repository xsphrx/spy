(this.webpackJsonpspy=this.webpackJsonpspy||[]).push([[0],{30:function(e,a,t){e.exports=t(59)},35:function(e,a,t){},36:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(27),s=t.n(c),r=(t(35),t(1)),m=(t(36),t(3)),i=t(9),o=t(7),d=t.n(o),u=t(10),v="https://rybieudko.pl/spy";var p=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){u.get(v+"/game").then((function(e){return c(e.data)}))}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"\u30b9\u30d1\u30a4"),l.a.createElement("div",{className:"section"}),l.a.createElement("div",{className:"row center-align"},l.a.createElement(m.b,{to:"/create",className:"btn-small grey darken-1"},"Create")),l.a.createElement("div",{className:"row"},t.map((function(e){return l.a.createElement("div",{className:"col s12",key:e},l.a.createElement("div",{className:"col s1 m3"}),l.a.createElement("div",{className:"col s5 m3"},l.a.createElement("h4",null,e)),l.a.createElement("div",{className:"col s5 m3 right-align",style:{marginTop:"25px"}},l.a.createElement(m.b,{to:"/"+e,className:"btn-small grey darken-1"},"Join")),l.a.createElement("div",{className:"col s1 m3"}))}))))},E=t(10),g="https://rybieudko.pl/spy";var b=function(e){var a=Object(i.f)();return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section"}),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{id:"name",type:"text",className:"validate",autoComplete:"off"}),l.a.createElement("label",{htmlFor:"name"},"Game Name")),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{id:"nick",type:"text",className:"validate",autoComplete:"off"}),l.a.createElement("label",{htmlFor:"nick"},"Your Name")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 center-align"},l.a.createElement("a",{className:"waves-light btn grey darken-1",onClick:function(){var t=document.getElementById("name").value,n=document.getElementById("nick").value;e.setName(n),E({method:"post",url:g+"/game",data:{name:t,admin:n},headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return a.push("/"+t)})),localStorage.setItem("username",n)}},"Create"))))};t(58),t(10);var f=function(e){return Object(n.useEffect)((function(){var a=document.getElementById("slider");d.a.Range.init(a),a.value=e.time}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section"}),l.a.createElement("div",{className:"row"},l.a.createElement("h6",null,"Players"),e.players.map((function(e){return l.a.createElement("div",{className:"col s6 m4 center-align",key:e},l.a.createElement("div",{className:"teal lighten-1",style:{margin:"15px 10px",padding:"3px",borderRadius:"2px"}},e))}))),e.admin?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 center-align"},l.a.createElement("button",{className:"btn grey darken-1",onClick:e.startGame},"Start"))):null,l.a.createElement("div",{className:"row"},l.a.createElement("h6",null,"Time"),l.a.createElement("p",{className:"range-field"},l.a.createElement("input",{type:"range",id:"slider",min:"1",max:"20",value:e.time,onChange:function(a){return e.updateTime(a.target.value)}}))),l.a.createElement("div",{className:"row"},l.a.createElement("h6",null,"Locations"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6 offset-s2"},l.a.createElement("input",{id:"place",type:"text",autoComplete:"off"}),l.a.createElement("label",{htmlFor:"place"},"New Location")),l.a.createElement("button",{className:"btn grey darken-1",style:{marginBottom:"-50px"},onClick:e.addPlace},"Add")),Object.keys(e.places).map((function(a,t){return l.a.createElement("div",{className:"col s6 m4 center-align",key:t},l.a.createElement("button",{className:e.places[a]?"btn truncate cstbtn teal lighten-1":"btn truncate cstbtn grey darken-1 dsbld",style:{margin:"15px 10px",width:"100%"},onClick:function(){return e.updatePlace(a)}},a))}))))};t(10);var N=function(e){var a=e.ends,t=e.places,c=Object(n.useState)(Object.assign({},t)),s=Object(r.a)(c,2),m=s[0],i=s[1],o=Object(n.useState)(!0),u=Object(r.a)(o,2);u[0],u[1],Object(n.useEffect)((function(){var e=document.querySelectorAll(".collapsible");return d.a.Collapsible.init(e),p(),function(){clearInterval(E)}}));var v=function(e,a){var t=a-e.toString().length+1;return Array(+(t>0&&t)).join("0")+e},p=function(){var e=a-Math.floor(Date.now()/1e3);document.getElementById("time").innerHTML=v(Math.floor(e/60),2)+":"+v(Math.floor(e%60),2),e<=0&&(clearInterval(E),document.getElementById("time").innerHTML="00:00")},E=setInterval(p,1e3);return l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"collapsible",id:"collapsible"},l.a.createElement("li",null,l.a.createElement("div",{className:"collapsible-header background1F"},l.a.createElement("i",{className:"material-icons"},"assignment_ind"),"Your Role"),l.a.createElement("div",{className:"collapsible-body background1F"},l.a.createElement("span",null,e.place)))),e.admin?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 center-align"},l.a.createElement("button",{className:"btn grey darken-1",onClick:e.startVoting},"Start Voting"))):null,l.a.createElement("div",{className:"row center-align"},l.a.createElement("h5",{id:"time"})),l.a.createElement("div",{className:"row"},Object.keys(t).map((function(e,a){if(t[e])return l.a.createElement("div",{className:"col s6 m4 center-align",key:a},l.a.createElement("button",{className:m[e]?"btn truncate cstbtn teal lighten-1":"btn truncate cstbtn grey darken-1 dsbld",style:{margin:"15px 10px",width:"100%"},onClick:function(){return function(e){var a=Object.assign({},m);a[e]=!a[e],i(a)}(e)}},e))}))))};t(10);var y=function(e){var a=e.votes,t=Object(n.useState)(""),c=Object(r.a)(t,2),s=c[0],m=c[1];return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"section"}),e.admin?l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 center-align"},l.a.createElement("button",{className:"btn grey darken-1",onClick:e.endGame},"End Game"))):null,Object.keys(a).map((function(t,n){return l.a.createElement("div",{className:"row",key:n},l.a.createElement("div",{className:"col m3 hide-on-small-only"}),l.a.createElement("div",{className:"col s8 m4"},l.a.createElement("h4",{className:"truncate"},t)),l.a.createElement("div",{className:"col s1 m1"},l.a.createElement("h4",null,a[t].length)),l.a.createElement("div",{className:"col s3 m1 right-align",style:{marginTop:"25px"}},l.a.createElement("button",{className:"btn-small grey darken-1",onClick:function(){var a;(a=t)!==s&&(e.castVote(a),m(a))}},"Vote")),l.a.createElement("div",{className:"col m3 hide-on-small-only"}))})))},h=(t(10),null);var O=function(e){var a=e.match.params.id,t=Object(n.useState)(localStorage.getItem("username")||""),c=Object(r.a)(t,2),s=c[0],m=c[1],i=Object(n.useState)([]),o=Object(r.a)(i,2),u=o[0],v=o[1],p=Object(n.useState)(0),E=Object(r.a)(p,2),g=E[0],b=E[1],O=Object(n.useState)(""),j=Object(r.a)(O,2),k=j[0],S=j[1],w=Object(n.useState)([]),I=Object(r.a)(w,2),x=I[0],C=I[1],B=Object(n.useState)(0),J=Object(r.a)(B,2),_=J[0],F=J[1],M=Object(n.useState)(""),T=Object(r.a)(M,2),G=T[0],V=T[1],P=Object(n.useState)(""),A=Object(r.a)(P,2),L=A[0],R=A[1],W=Object(n.useState)(""),Y=Object(r.a)(W,2),H=Y[0],q=Y[1],D=Object(n.useState)({}),$=Object(r.a)(D,2),z=$[0],K=$[1];Object(n.useEffect)((function(){var e=document.getElementById("modal");d.a.Modal.init(e,{dismissible:!1}),s.length>0?Q():d.a.Modal.getInstance(document.getElementById("modal")).open()}),[]);var Q=function(){(h=new WebSocket("wss://rybieudko.pl/spy/ws")).onmessage=function(e){return U(e)},h.onopen=function(){var e=JSON.stringify({action:"init",data:{gameName:a,userName:localStorage.getItem("username")}});h.send(e)}},U=function(e){if("init"==(e=JSON.parse(e.data)).action){var a=e.data;v(a.players),b(a.time),S(a.admin),C(a.places),V(a.stage),F(a.ends),R(a.spy),q(a.place),K(a.votes)}else if("update_players"==e.action)v(e.data.players);else if("start"==e.action){var t=e.data;F(t.ends),R(t.spy),q(t.place),V(t.stage),K(t.votes)}else if("update_place"==e.action)C(e.data.places);else if("vote"==e.action)K(e.data);else if("start_voting"==e.action)V("voting");else if("end_game"==e.action){var n=e.data;V(n.stage),K(n.votes),q(n.place),R(n.spy),K(n.votes)}else"update_time"==e.action&&b(e.data.time)};return l.a.createElement("div",null,"pregame"==G?l.a.createElement(f,{players:u,admin:k==s,places:x,startGame:function(){var a=JSON.stringify({action:"start",data:{game:e.match.params.id}});h.send(a)},addPlace:function(){var e=document.getElementById("place");if(e.value.length>0){var t=JSON.stringify({action:"add_place",data:{place:e.value,game:a}});h.send(t),e.value="",e.blur()}},updatePlace:function(e){var t=JSON.stringify({action:"update_place",data:{place:e,game:a}});h.send(t)},time:g,updateTime:function(e){var t=JSON.stringify({action:"update_time",data:{game:a,time:e}});h.send(t)}}):"started"==G?l.a.createElement(N,{ends:_,admin:k==s,places:x,place:L==s?"spy":H,startVoting:function(){var e=JSON.stringify({action:"start_voting",data:{game:a}});h.send(e)}}):"voting"==G?l.a.createElement(y,{votes:z,admin:k==s,castVote:function(e){var t=JSON.stringify({action:"vote",data:{game:a,user:s,vote:e}});h.send(t)},endGame:function(){var e=JSON.stringify({action:"end_game",data:{game:a}});h.send(e)}}):null,s.length>0?null:l.a.createElement("div",{id:"modal",className:"modal",style:{backgroundColor:"#1F1F1F"}},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"section"}),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{id:"name",type:"text",className:"validate",autoComplete:"off"}),l.a.createElement("label",{for:"name"},"Your Name")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 center-align"},l.a.createElement("a",{className:"waves-light btn grey darken-1",onClick:function(){var e=document.getElementById("name").value;e.length>0&&(localStorage.setItem("username",e),d.a.Modal.getInstance(document.getElementById("modal")).close(),m(e),Q())}},"Set name"))))))},j=t(10),k="https://rybieudko.pl/spy";var S=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=(a[0],a[1]),c=Object(n.useState)(""),s=Object(r.a)(c,2),o=(s[0],s[1]);return Object(n.useEffect)((function(){j.get(k+"/game").then((function(e){return t(e.data)}))}),[]),l.a.createElement(m.a,{basename:"/spy"},l.a.createElement("div",null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/create"},l.a.createElement(b,{setName:function(e){return o(e)}})),l.a.createElement(i.a,{exact:!0,path:"/:id",component:O}),l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(p,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.e9ea8f14.chunk.js.map