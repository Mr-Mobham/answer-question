(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/comment.8013e581.svg"},20:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/closeModal.07baf142.svg"},21:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/addQuestion.575079a5.svg"},22:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/userAvatar.b26d654e.svg"},36:function(e,t,s){var a={"./addQuestion.svg":21,"./closeModal.svg":20,"./comment.svg":18,"./images.jpg":37,"./message.svg":38,"./userAvatar.svg":22};function c(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=n,e.exports=c,c.id=36},37:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/images.c1594dc6.jpg"},38:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/message.6708a448.svg"},41:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(12),n=s.n(c),i=s(23),r=s(24),l=s(27),d=s(26),o=s(14),j=s(3),m=s(18),u=s(8),h=function(e){return{type:"SHOW-MODALCOMMENT",payload:e}},b=s(1);var _=function(e){var t=Object(u.c)((function(e){return e.questions})),a=t.showModalAddComment,c=Object(u.b)(),n=t.formData,i=function(e,t){var s=e.target.value;n[t]=s};return Object(b.jsx)("div",{className:"modal"+(a?" show--modal":""),children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("div",{className:"modal__header",children:[Object(b.jsx)("div",{className:"modal__header-right",children:Object(b.jsx)("h3",{className:"modal__header-title",children:"\u0627\u06cc\u062c\u0627\u062f \u0633\u0648\u0627\u0644 \u062c\u062f\u06cc\u062f"})}),Object(b.jsx)("div",{className:"modal__header-left",children:Object(b.jsx)("img",{alt:"",onClick:function(){c(h(!1))},className:"modal__header-close",src:s(20).default})})]}),Object(b.jsx)("div",{className:"modal__content-items",children:Object(b.jsxs)("div",{className:"modal__content-main",children:[Object(b.jsxs)("div",{className:"modal__content-data",children:[Object(b.jsxs)("div",{className:"modal__content-item",children:[Object(b.jsx)("h3",{className:"modal__label-title",children:"\u0645\u0648\u0636\u0648\u0639"}),Object(b.jsx)("input",{onKeyUp:function(e){return i(e,"title")},className:"modal__label-item",type:"text"})]}),Object(b.jsxs)("div",{className:"modal__content-item",children:[Object(b.jsx)("h3",{className:"modal__label-title",children:"\u0645\u062a\u0646 \u0633\u0648\u0627\u0644"}),Object(b.jsx)("textarea",{onKeyUp:function(e){return i(e,"subject")},className:"modal__label-item modal--textarea",rows:"4",cols:"50"})]})]}),Object(b.jsxs)("div",{className:"modal__content-btn",children:[Object(b.jsx)("button",{onClick:function(){c(h(!1))},className:"header__btn-item modal--cancel",type:"button",children:Object(b.jsx)("h3",{className:"header__btn-title",children:"\u0627\u0646\u0635\u0631\u0627\u0641"})}),Object(b.jsx)("button",{onClick:function(){return function(){var e=!0;for(var t in n)""===n[t]&&(e=!1);e&&c({type:"ADD-QUESTION",payload:n})}()},className:"header__btn-item modal--btn",type:"button",children:Object(b.jsx)("h3",{className:"header__btn-title",children:" \u0627\u06cc\u062c\u0627\u062f \u0633\u0648\u0627\u0644"})})]})]})})]},a)})};var O=function(e){var t=e.data;return Object(b.jsxs)("div",{className:"questions__content",children:[t.map((function(e){return Object(b.jsx)("div",{className:"questions__content-item",children:Object(b.jsxs)("div",{className:"questions__content-main",children:[Object(b.jsxs)("div",{className:"questions__content-header",children:[Object(b.jsx)("div",{className:"question__header-right",children:Object(b.jsxs)("div",{className:"question__header-avatar",children:[Object(b.jsx)("img",{alt:"",className:"question__avatar-item",src:s(36)("./".concat(e.avatar)).default}),Object(b.jsx)("h3",{className:"question__header-title",children:e.title})]})}),Object(b.jsxs)("div",{className:"question__header-left",children:[Object(b.jsxs)("div",{className:"question__date-time",children:[Object(b.jsxs)("div",{className:"question__header-time",children:[Object(b.jsx)("h3",{className:"question__time-title",children:"\u0633\u0627\u0639\u062a"}),Object(b.jsx)("span",{className:"question__time-colon",children:":"}),Object(b.jsx)("h3",{className:"question__time-item",children:"14:48"})]}),Object(b.jsx)("span",{className:"question__time-line"}),Object(b.jsxs)("div",{className:"question__header-time",children:[Object(b.jsx)("h3",{className:"question__time-title",children:"\u062a\u0627\u0631\u06cc\u062e"}),Object(b.jsx)("span",{className:"question__time-colon",children:":"}),Object(b.jsx)("h3",{className:"question__time-item",children:"1400/02/12"})]})]}),Object(b.jsxs)("div",{className:"question__header-answer",children:[Object(b.jsx)("img",{alt:"",className:"question__answer-icon",src:m.default}),Object(b.jsx)("h3",{className:"question__answer-title",children:e.countAnswer})]})]})]}),Object(b.jsxs)("div",{className:"questions__content-data",children:[Object(b.jsx)("p",{className:"questions__content-answer",children:e.subject}),Object(b.jsx)("div",{className:" questions__content-btn",children:Object(b.jsx)(o.b,{to:"/question/".concat(e.id),children:Object(b.jsx)("button",{className:"questions--btn",type:"button",children:"\u0645\u0634\u0627\u0647\u062f\u0647 \u062c\u0632\u0626\u06cc\u0627\u062a"})})})]})]})},e.id)})),Object(b.jsx)(_,{})]})};var v=function(){var e=Object(u.c)((function(e){return e.questions}));return Object(b.jsx)("div",{className:"questions",children:Object(b.jsx)("div",{className:"questions__container container",children:Object(b.jsx)(O,{data:e.Items})})})};var x=function(){var e=Object(u.b)();return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"header__right",children:Object(b.jsx)("h3",{className:"header__title",children:"\u0644\u06cc\u0633\u062a \u0633\u0648\u0627\u0644\u0627\u062a"})}),Object(b.jsx)("div",{className:"header__left",children:Object(b.jsxs)("div",{className:"header__left-main",children:[Object(b.jsx)("div",{className:"header__btn",children:Object(b.jsxs)("button",{onClick:function(){e(h(!0))},className:"header__btn-item",type:"button",children:[Object(b.jsx)("img",{alt:"",src:s(21).default}),Object(b.jsx)("h3",{className:"header__btn-title",children:"\u0633\u0648\u0627\u0644 \u062c\u062f\u06cc\u062f"})]})}),Object(b.jsxs)("div",{className:"header__avatar-item",children:[Object(b.jsx)("img",{alt:"",className:"header__avatar-img",src:s(22).default}),Object(b.jsx)("h3",{className:"header__username-title",children:"\u0645\u0631\u0636\u06cc\u0647 \u0627\u0628\u0631\u0627\u0647\u06cc\u0645\u06cc"})]})]})})]})};s(41);var N=function(e){return Object(u.b)(),Object(u.c)((function(e){return e.questions})),Object(b.jsx)("div",{className:"questions",children:e.match.params.id})},f=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",component:v}),Object(b.jsx)(j.a,{path:"/question/:id",component:N})]})]})})}}]),s}(a.Component),p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))},g=s(15),q=s(10),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{Items:[{id:1,title:"\u0645\u0634\u06a9\u0644 \u062f\u0631 auth",subject:"\u0647\u0631\u0627\u062f \u062f\u0648\u062c\u0648 \u06cc\u0644\u06a9\u0634\u0645 \u0647\u0686 \u0627\u0642\u06cc\u0642\u062f \u062f\u06cc\u0646\u06cc\u0628\u0628 \u0647\u06a9 \u0645\u062a\u0634\u0627\u0630\u06af \u0645\u0647 \u0648\u0631 console \u06cc\u062c\u0648\u0631\u062e \u0633\u06a9\u0639 .\u062a\u0633\u0627\u062c\u06a9 \u0632\u0627 \u0644\u06a9\u0634\u0645 \u0645\u0646\u0648\u062f\u06cc\u0645\u0646 .\u0647\u062f\u06cc\u0645 \u0645\u0647\u0628 \u0648\u0631 error \u0646\u06cc\u0627 \u0627\u0645\u0627 \u0645\u0632\u0627\u0633\u0628 react \u0648\u062a \u0647\u062f\u0627\u0633 authentication \u0647\u06cc \u0645\u0627\u0648\u062e\u06cc\u0645 \u0646\u0645 \u0645\u0627\u0644\u0633",avatar:"images.jpg",countAnswer:"1"},{id:2,title:"\u0645\u0634\u06a9\u0644 \u062f\u0631 auth",subject:"\u0647\u0631\u0627\u062f \u062f\u0648\u062c\u0648 \u06cc\u0644\u06a9\u0634\u0645 \u0647\u0686 \u0627\u0642\u06cc\u0642\u062f \u062f\u06cc\u0646\u06cc\u0628\u0628 \u0647\u06a9 \u0645\u062a\u0634\u0627\u0630\u06af \u0645\u0647 \u0648\u0631 console \u06cc\u062c\u0648\u0631\u062e \u0633\u06a9\u0639 .\u062a\u0633\u0627\u062c\u06a9 \u0632\u0627 \u0644\u06a9\u0634\u0645 \u0645\u0646\u0648\u062f\u06cc\u0645\u0646 .\u0647\u062f\u06cc\u0645 \u0645\u0647\u0628 \u0648\u0631 error \u0646\u06cc\u0627 \u0627\u0645\u0627 \u0645\u0632\u0627\u0633\u0628 react \u0648\u062a \u0647\u062f\u0627\u0633 authentication \u0647\u06cc \u0645\u0627\u0648\u062e\u06cc\u0645 \u0646\u0645 \u0645\u0627\u0644\u0633",avatar:"images.jpg",countAnswer:"2"},{id:3,title:"\u0645\u0634\u06a9\u0644 \u062f\u0631 auth",subject:"\u0647\u0631\u0627\u062f \u062f\u0648\u062c\u0648 \u06cc\u0644\u06a9\u0634\u0645 \u0647\u0686 \u0627\u0642\u06cc\u0642\u062f \u062f\u06cc\u0646\u06cc\u0628\u0628 \u0647\u06a9 \u0645\u062a\u0634\u0627\u0630\u06af \u0645\u0647 \u0648\u0631 console \u06cc\u062c\u0648\u0631\u062e \u0633\u06a9\u0639 .\u062a\u0633\u0627\u062c\u06a9 \u0632\u0627 \u0644\u06a9\u0634\u0645 \u0645\u0646\u0648\u062f\u06cc\u0645\u0646 .\u0647\u062f\u06cc\u0645 \u0645\u0647\u0628 \u0648\u0631 error \u0646\u06cc\u0627 \u0627\u0645\u0627 \u0645\u0632\u0627\u0633\u0628 react \u0648\u062a \u0647\u062f\u0627\u0633 authentication \u0647\u06cc \u0645\u0627\u0648\u062e\u06cc\u0645 \u0646\u0645 \u0645\u0627\u0644\u0633",avatar:"images.jpg",countAnswer:"3"}],formData:{subject:"",title:"",avatar:"images.jpg",id:0,countAnswer:0},idStaticCreateQuestion:10,showModalAddComment:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-QUESTION":var s,a,c=t.payload,n=Object(q.a)({},c),i=function(){var t=e.formData;t.title="",t.subject=""},r=function(){s=0===e.Items.length?e.idStaticCreateQuestion:e.Items[e.Items.length-1].id,e.idStaticCreateQuestion=s,a=e.idStaticCreateQuestion+1,n.id=a,e.Items.push(n)};return r(),i(),Object(q.a)(Object(q.a)({},e),{},{idStaticCreateQuestion:a,Items:e.Items,showModalAddComment:!1});case"SHOW-MODALCOMMENT":return Object(q.a)(Object(q.a)({},e),{},{showModalAddComment:t.payload});default:return e}},y=Object(g.a)({questions:w}),C=Object(g.b)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(Object(b.jsx)(u.a,{store:C,children:Object(b.jsx)(f,{})}),document.getElementById("root")),p()}},[[42,1,2]]]);
//# sourceMappingURL=main.ac3081e3.chunk.js.map