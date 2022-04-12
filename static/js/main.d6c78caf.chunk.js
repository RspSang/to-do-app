(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{34:function(e,n,t){"use strict";t.r(n);var r,o,c,i,a=t(0),l=t.n(a),d=t(14),s=t.n(d),b=t(8),u=t(7),f=t(9),j=t(3),m=t(2),h=function(e){return function(n){var t=n.setSelf,r=n.onSet,o=localStorage.getItem(e);null!=o&&t(JSON.parse(o)),r((function(n,t,r){r?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(n))}))}},g=Object(b.b)({key:"toDo",default:[],effects_UNSTABLE:[h("toDo")]}),p=Object(b.b)({key:"category",default:[],effects_UNSTABLE:[h("category")]}),O=Object(b.b)({key:"selectInput",default:"",effects_UNSTABLE:[h("selectInput")]}),x=Object(b.c)({key:"toDoSelector",get:function(e){var n=e.get,t=n(g),r=n(O);return t.filter((function(e){return e.category===r}))}}),y=t(6),v=t(22),k=t(4),w=u.c.form(r||(r=Object(f.a)(["\n  margin-top: 2rem;\n  display: flex;\n  width: 62%;\n"]))),S=u.c.input(o||(o=Object(f.a)(["\n  height: 4rem;\n  width: 70%;\n  border: 1px solid black;\n  border-radius: 10px;\n  font-size: 1.4rem;\n  padding: 0 1.2rem;\n  :focus {\n    outline: none;\n    border-color: #9147ff;\n  }\n"]))),q=u.c.input(c||(c=Object(f.a)(["\n  margin-left: 0.5rem;\n  height: 4rem;\n  width: 30%;\n  border: 1px solid black;\n  border-radius: 10px;\n  font-size: 1rem;\n  padding: 0 0.6rem;\n  :focus {\n    outline: none;\n    border-color: #9147ff;\n  }\n"]))),C=u.c.button(i||(i=Object(f.a)(["\n  margin-left: 0.5rem;\n  padding: 0.8em 3em;\n  height: 4rem;\n  background-color: #9147ff;\n  border-radius: 1rem;\n  font-size: 1rem;\n  :active {\n    transform: translateY(5px);\n  }\n"])));var D,z,T,I,B=function(){var e=Object(b.f)(g),n=Object(b.f)(p),t=Object(b.f)(O),r=Object(v.a)(),o=r.register,c=r.handleSubmit,i=r.setValue;return Object(k.jsxs)(w,{onSubmit:c((function(r){var o=r.category,c=r.toDo;e((function(e){return[{text:c,id:Date.now(),category:o}].concat(Object(y.a)(e))})),n((function(e){return(null===e||void 0===e?void 0:e.includes(o))?Object(y.a)(e):[o].concat(Object(y.a)(e))})),t(o),i("category",""),i("toDo","")})),children:[Object(k.jsx)(q,Object(j.a)(Object(j.a)({},o("category")),{},{placeholder:"Write a category"})),Object(k.jsx)(S,Object(j.a)(Object(j.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(k.jsx)(C,{children:"Add"})]})},L=u.c.li(D||(D=Object(f.a)(["\n  list-style-type: none;\n  margin-top: 1rem;\n  width: 60%;\n"]))),N=u.c.div(z||(z=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ",";\n  height: 50px;\n  border-radius: 10px;\n  width: 100%;\n"])),(function(e){return e.theme.textColor})),A=u.c.div(T||(T=Object(f.a)(["\n  color: ",";\n  font-size: 2rem;\n"])),(function(e){return e.theme.bgColor})),E=u.c.div(I||(I=Object(f.a)(["\n  background-color: #9147ff;\n  border-radius: 10px;\n  color: ",";\n  margin-right: 1rem;\n  min-width: 3rem;\n  text-align: center;\n"])),(function(e){return e.theme.textColor}));var J,M,P,U=function(e){var n=e.text,t=e.category;return e.id,Object(b.f)(g),Object(b.e)(p),Object(k.jsx)(L,{children:Object(k.jsxs)(N,{children:[Object(k.jsx)(A,{children:n}),Object(k.jsx)(E,{children:t})]})})},_=u.c.div(J||(J=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),H=u.c.div(M||(M=Object(f.a)(["\n  font-size: 5rem;\n  margin-top: 5rem;\n"]))),W=u.c.select(P||(P=Object(f.a)(["\n  margin-top: 2rem;\n  width: 60%;\n  height: 4rem;\n  font-size: 2rem;\n  :focus {\n    outline: none;\n    border-color: #9147ff;\n  }\n"])));var F,V=function(){var e=Object(b.e)(x),n=Object(b.e)(p),t=Object(b.d)(O),r=Object(m.a)(t,2),o=r[0],c=r[1];return Object(k.jsxs)(_,{children:[Object(k.jsx)(H,{children:"To Dos"}),Object(k.jsx)(W,{value:o,onInput:function(e){c(e.currentTarget.value)},children:n.map((function(e){return Object(k.jsx)("option",{value:e,children:e})}))}),Object(k.jsx)(B,{}),null===e||void 0===e?void 0:e.map((function(e){return Object(k.jsx)(U,Object(j.a)({},e),e.id)}))]})},Y=Object(u.b)(F||(F=Object(f.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(e){return e.theme.bgColor}),(function(e){return e.theme.textColor}));var G=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Y,{}),Object(k.jsx)(V,{})]})};s.a.render(Object(k.jsx)(l.a.StrictMode,{children:Object(k.jsx)(b.a,{children:Object(k.jsx)(u.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(k.jsx)(G,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d6c78caf.chunk.js.map