(this.webpackJsonpface_recognition_brain=this.webpackJsonpface_recognition_brain||[]).push([[0],{129:function(e,a,t){},277:function(e,a,t){},279:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(42),l=t.n(c),s=(t(89),t(5)),i=(t(90),function(e){var a=e.route,t=e.setRoute;return"signin"!==a&&r.a.createElement("nav",{className:"",onClick:function(){return t("signin")},style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim white underline dib pa3 pointer"},"home"===a?"Sign out":"Sign In"))}),o=t(81),m=t.n(o),u=(t(91),t(82)),b=t.n(u),d=function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(m.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa3 tc"},r.a.createElement("img",{style:{paddingTop:"3px",width:"90%"},src:b.a,alt:"Brain"}))))},p=(t(92),r.a.createContext()),E=p.Provider,f=t(43),g=t.n(f),h=function(e,a,t){var n=new g.a.App({apiKey:"3a879ad121ef4d19b77a4b0d465a18f1"});a(e),n.models.predict(g.a.FACE_DETECT_MODEL,e).then((function(e){return t(function(e){var a=e.outputs[0].data.regions[0].region_info.bounding_box,t=document.getElementById("inputImage"),n=Number(t.width),r=Number(t.height);return{leftCol:a.left_col*n,topRow:a.top_row*r,rightCol:n-a.right_col*n,bottomRow:r-a.bottom_row*r}}(e))})).catch((function(e){return console.log(e)}))},w=function(){var e=Object(n.useContext)(p),a=Object(s.a)(e,7),t=a[0],c=a[2],l=a[4],i=a[6];return r.a.createElement("div",null,r.a.createElement("p",{className:"f3 mv4 white tc"},"This Magic Brain Will Detect Faces In Your Pictures.Give It A Try."),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form pa4 br3 shadow-5 center"},r.a.createElement("input",{className:"f4 pa2 w-70 ",type:"text",onChange:c}),r.a.createElement("button",{className:"w-30  grow f4 link ph3 pv2 dib white bg-light-purple",onClick:function(){return h(t,l,i)}},"Detect"))))},v=(t(129),function(){var e=Object(n.useContext)(p),a=Object(s.a)(e,6),t=a[3],c=a[5];return console.log("hi"),r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputImage",src:t,alt:"",width:"500px",height:"auto"}),r.a.createElement("div",{className:"bounding-box",style:{top:c.topRow,right:c.rightCol,bottom:c.bottomRow,left:c.leftCol}})))}),N=function(){return r.a.createElement("div",{className:"tc "},r.a.createElement("div",{className:"f3 black "},"Asharib, your current rank is... "),r.a.createElement("div",{className:"f1 black "},"#5 "))},A=t(83),y=t.n(A),B=(t(277),function(){return r.a.createElement("div",{className:"particles "},r.a.createElement(y.a,{params:{particles:{line_linked:{shadow:{}},number:{value:30,density:{enable:!0,value_area:100}},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"repulse"}}}}}))}),R=function(e){var a=e.setRoute;return r.a.createElement("article",{className:"br3 panel ba dark-gray b--black-10 mv4 w-120 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80 "},r.a.createElement("form",{className:"measure tc "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0 "},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",onClick:function(){return a("home")},value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return a("register")},className:"f6 link dim black db pointer"},"Register")))))},Q=function(e){var a=e.setRoute;return r.a.createElement("article",{className:"br3 panel ba dark-gray b--black-10 mv4 w-120 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80 "},r.a.createElement("form",{className:"measure tc "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0 "},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",for:"name"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",onClick:function(){return a("home")},value:"Register"})))))};var k=function(){var e=Object(n.useState)("signin"),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"cen"},r.a.createElement(B,null),r.a.createElement(i,{route:t,setRoute:c}),"home"===t?r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(N,null),r.a.createElement(w,null),r.a.createElement(v,null)):"signin"===t?r.a.createElement(R,{setRoute:c}):r.a.createElement(Q,{setRoute:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(278);var x=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),m=o[0],u=o[1],b=Object(n.useState)({}),d=Object(s.a)(b,2),p=d[0],f=d[1];return r.a.createElement(E,{value:[c,l,function(e){l(e.target.value)},m,u,p,f]},e.children)};l.a.render(r.a.createElement(x,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,a){e.exports="data:image/png;base64,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"},84:function(e,a,t){e.exports=t(279)},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.3511decb.chunk.js.map