(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,n,t){e.exports={Input:"Input_Input__1Q3TL",Label:"Input_Label__2Wd4O",InputElement:"Input_InputElement__1RYnI",NameInput:"Input_NameInput__3o-kq",ChatInput:"Input_ChatInput__2WYJL"}},,,,,,,,,function(e,n,t){e.exports={Banner:"Banner_Banner__3b6yK",Logo:"Banner_Logo__BT6bG",BannerContainer:"Banner_BannerContainer__2XyUb"}},,,,function(e,n,t){e.exports={Form:"ChatForm_Form__ZkqmN",Button:"ChatForm_Button__iy5gb"}},,,,,,function(e,n,t){e.exports=t.p+"static/media/all_chat_white.8c91f203.svg"},function(e,n,t){e.exports={MainBody:"MainBody_MainBody__2guv3"}},function(e,n,t){e.exports={ChatWindow:"ChatWindow_ChatWindow__Bnetz"}},function(e,n,t){e.exports={MessagesDisplay:"MessagesDisplay_MessagesDisplay__16POm"}},function(e,n,t){e.exports={App:"App_App__3yJvo"}},function(e,n,t){e.exports=t(38)},,,,,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(20),c=t.n(o),u=t(1),s=t(2),l=t(22),i=(t(37),t(5)),m=t(6),p=t(8),h=t(7),d=t(9),g=t(23),f=t.n(g),_=t(13),b=t.n(_),v=function(){return r.a.createElement("header",{className:b.a.Banner},r.a.createElement("div",{className:b.a.BannerContainer},r.a.createElement("img",{className:b.a.Logo,src:f.a,alt:"All_Chat"})))},y=t(24),E=t.n(y),C=t(4),N=t.n(C),j=function(e){var n=r.a.createElement("input",{className:[N.a.InputElement,N.a.NameInput].join(" "),name:e.inputName,placeholder:e.placeholder,value:e.value,onChange:e.changed});return"ChatInput"===e.inputName&&(n=r.a.createElement("textarea",{className:[N.a.InputElement,N.a.ChatInput].join(" "),name:e.inputName,placeholder:e.placeholder,value:e.value,onChange:e.changed,rows:"1",columns:"1"})),r.a.createElement("div",{className:N.a.Input},"NameInput"===e.inputName?r.a.createElement("label",{className:N.a.Label},e.label):null,n)},I=t(25),O=t.n(I),w=t(26),B=t.n(w),A=Object(u.b)(function(e){return{messages:e.chat.messagesList}})(function(e){var n=0,t=e.messages.map(function(e){return n+=1,r.a.createElement("p",{key:n},r.a.createElement("strong",{style:e.color},e.name,":")," ",e.message)});return r.a.createElement("div",{className:B.a.MessagesDisplay},t)}),M=t(17),L=t.n(M),S=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={message:""},t.inputChangedHandler=function(e){t.setState({message:e.target.value})},t.chatSubmit=function(e){e.preventDefault(),t.state.message.length>0&&t.props.onChatSubmit(t.props.name,t.state.message),e.target.value="",t.setState({message:""})},t}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.chatSubmit,className:L.a.Form},r.a.createElement(j,{inputName:"ChatInput",placeholder:"What do you want to say?",changed:function(n){return e.inputChangedHandler(n)},value:this.state.message}),r.a.createElement("button",{className:L.a.Button,type:"submit"},"SEND"))}}]),n}(r.a.Component),k=Object(u.b)(function(e){return{name:e.name.name}},function(e){return{onChatSubmit:function(n,t){return e(function(e,n){return{type:"CHAT_SUBMIT",name:e,message:n}}(n,t))}}})(S),x=function(e){return r.a.createElement("div",{className:O.a.ChatWindow},r.a.createElement(A,null),r.a.createElement(k,null))},W=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).inputChangedHandler=function(e){var n="Anonymous";e.target.value.length>0&&(n=e.target.value),t.props.onNameChanged(n)},t}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:E.a.MainBody},r.a.createElement(j,{inputName:"NameInput",label:"You're using the name",placeholder:"Anonymous",changed:function(n){return e.inputChangedHandler(n)}}),r.a.createElement(x,null))}}]),n}(r.a.Component),D=Object(u.b)(null,function(e){return{onNameChanged:function(n){return e(function(e){return{type:"NAME_CHANGED",name:e}}(n))}}})(W),H=t(27),T=t.n(H),F=function(e){function n(){return Object(i.a)(this,n),Object(p.a)(this,Object(h.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:T.a.App},r.a.createElement(v,null),r.a.createElement(D,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(12),G={messagesList:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHAT_SUBMIT":return Object(J.a)({},e,{messagesList:e.messagesList.concat({name:n.name,color:{color:"#"+Math.floor(16777215*Math.random()).toString(16)},message:n.message})});default:return e}},Y={name:"Anonymous"},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"NAME_CHANGED":return Object(J.a)({},e,{name:n.name});default:return e}},z=Object(s.c)({name:q,chat:U}),K=Object(s.e)(z,Object(s.d)(Object(s.a)(l.a)));c.a.render(r.a.createElement(u.a,{store:K},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[28,1,2]]]);
//# sourceMappingURL=main.c441592e.chunk.js.map