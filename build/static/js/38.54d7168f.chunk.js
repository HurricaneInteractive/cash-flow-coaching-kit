(this["webpackJsonpdcfck-app"]=this["webpackJsonpdcfck-app"]||[]).push([[38],{1761:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(771),i=a(736),o=a(73),l=a(760),s=a(762),u=a(733),m=a(791),p=a(781),f=a(39),d=a(913),b=a.n(d),h=a(334),E=a(824),v=a(242),g=a(12),y=a(17),O=a.n(y),j=a(28),k=a(46),C=a(13),w=a(1767),x=a(1745),T=a(1764),S=a(1746),N=a(731),B=a(1482),A=a.n(B),D=a(1483),H=a.n(D),I=a(47),L=a(36),F=a(139),q=Object(F.a)((function(e){var t;return{actions:(t={display:"flex",flexDirection:"column",marginTop:e.spacing(5)},Object(L.a)(t,e.breakpoints.up("sm"),{flexDirection:"row",justifyContent:"space-between"}),Object(L.a)(t,"& button:first-child",Object(L.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(1)})),t),subtitle:Object(L.a)({marginTop:e.spacing(2),lineHeight:1},e.breakpoints.down("sm"),{marginTop:e.spacing(4)}),title:Object(L.a)({marginBottom:e.spacing(3)},e.breakpoints.down("sm"),{fontSize:e.typography.h5.fontSize})}})),z=Object(F.a)((function(){return{cardContent:{display:"flex",flexDirection:"column",alignItems:"center"}}})),K=a(380),P=a(243),Q=a(54),J=a(784),R=a(912),U=a(879),W=a(385),_=function(e){var t=e.optionKey,a=e.option,n=e.currentAnswer,r=e.changeAnswer,i=z(),l=Object(W.a)(t,K.a),s=Object(Q.a)();return c.a.createElement(J.a,{onClick:function(e){r(e,t)},style:{boxShadow:n===t?"inset 0 0 0 3px ".concat(s.palette.primary.main):""}},c.a.createElement(R.a,null,c.a.createElement(U.a,{className:i.cardContent},c.a.createElement(o.a,{variant:"h6"},a),c.a.createElement(l.Icon,{style:{color:l.color,fontSize:50}}))))},M=a(102),V=function(){var e=Object(Q.a)(),t=Object(n.useContext)(M.a).state,a=t.currentClient;return!t.clientSynced||"undefined"!==typeof a&&"undefined"!==typeof a.id?c.a.createElement(c.a.Fragment,null):c.a.createElement(o.a,{variant:"h6",color:"error",style:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}},"Please select or add a client before continuing")},Y=a(854),G=a(244),X=a(98),Z=function(){var e=Object(X.a)(),t=Object(C.a)(e,1)[0],a=q(),o=Object(n.useState)([]),l=Object(C.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(0),p=Object(C.a)(m,2),f=p[0],d=p[1],b=Object(n.useState)(K.c[f]),h=Object(C.a)(b,2),E=h[0],v=h[1],y=Object(n.useState)(Object(P.b)()),B=Object(C.a)(y,1)[0],D=Object(I.f)(),L=K.c.map((function(e){return e.question}));Object(n.useEffect)((function(){v(K.c[f])}),[f]);var F=function(e,t){e.preventDefault();var a=Object(k.a)(s);a[f]=t,u(Object(k.a)(a))},z=function(){return f===K.c.length-1},Q=function(){var e=Object(j.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t||void 0===t?void 0:t.id){e.next=3;break}return alert("A client needs to be selected, please add or select a client before submitting"),e.abrupt("return");case 3:return e.prev=3,e.next=6,Y.a.create({clientId:t.id,answers:s,createdAt:Object(G.b)()});case 6:a=e.sent,n=a,D.push(Object(g.c)(g.a.HealthCheckSummary,[[":id","".concat(n)]])),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0.stack||e.t0);case 13:case"end":return e.stop()}var n}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(i.a,null,c.a.createElement(V,null),c.a.createElement(w.a,{activeStep:f,orientation:"vertical",style:{paddingLeft:0,paddingRight:0}},L.map((function(e){return c.a.createElement(x.a,{key:e},c.a.createElement(T.a,null,e),c.a.createElement(S.a,null,c.a.createElement(r.a,{container:!0,spacing:2},Object.keys(E.options).map((function(e,t){return c.a.createElement(r.a,{item:!0,xs:12,sm:4,key:Object(P.a)(B,t)},c.a.createElement(_,{optionKey:e,option:E.options[e],changeAnswer:F,currentAnswer:s[f]||!1}))}))),c.a.createElement(i.a,{className:a.actions},c.a.createElement(N.a,{startIcon:c.a.createElement(A.a,null),variant:"outlined",color:"primary",disabled:0===f,onClick:function(e){e.preventDefault(),d(f-1)}},"Previous question"),c.a.createElement(N.a,{endIcon:c.a.createElement(H.a,null),variant:"contained",color:"primary",disabled:"undefined"===typeof s[f],onClick:function(e){e.preventDefault(),z()?Q():d(f+1)}},z()?"View results":"Next question"))))}))))},$=a(75),ee=a(832);t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null,c.a.createElement(r.a,{container:!0,spacing:3},c.a.createElement(r.a,{item:!0,xs:12,md:9},c.a.createElement(ee.a,{component:"h1"},"Health Check"),c.a.createElement($.a,null),c.a.createElement(i.a,{className:"content-area"},c.a.createElement(o.a,{className:"list-describer"},"This quick health check will help you:"),c.a.createElement(l.a,{component:"ul",className:"ul-list"},c.a.createElement(o.a,{component:"li"},"fill knowledge gaps"),c.a.createElement(o.a,{component:"li"},"identify areas to improve your cash flow")),c.a.createElement(o.a,null,"Your results will show you key discover topics and activities to complete."),c.a.createElement(o.a,null,"As you make changes to your business, you can use the health check to review your progress."),c.a.createElement(o.a,null,"If you want to see your previous health checks, see \u2018List of Health Checks\u2019 in the control panel.")),c.a.createElement($.a,{space:3}),c.a.createElement(s.a,null),c.a.createElement($.a,null),c.a.createElement(Z,null)),c.a.createElement(r.a,{item:!0,xs:12,md:3},c.a.createElement(v.a,null,c.a.createElement(l.a,{component:"nav",disablePadding:!0},c.a.createElement(u.a,{button:!0,component:f.b,to:g.a.HealthCheckList},c.a.createElement(m.a,null,c.a.createElement(b.a,null)),c.a.createElement(p.a,null,"Saved Health Checks"))))))),c.a.createElement(E.a,{tip:"HCQuestionnaire"}))}},823:function(e,t,a){var n={"./ActionChecklistTip":[816,4],"./ActionChecklistTip.tsx":[816,4],"./CFCanvasTip":[817,5],"./CFCanvasTip.tsx":[817,5],"./ChangeLevers":[818,6],"./ChangeLevers.tsx":[818,6],"./ClientListTips":[819,7],"./ClientListTips.tsx":[819,7],"./CoachingKitTips":[820,8],"./CoachingKitTips.tsx":[820,8],"./DiscoverTopicsTips":[821,9],"./DiscoverTopicsTips.tsx":[821,9],"./HCQuestionnaire":[822,10],"./HCQuestionnaire.tsx":[822,10],"./style":[812,11],"./style.ts":[812,11]};function c(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],c=t[0];return a.e(t[1]).then((function(){return a(c)}))}c.keys=function(){return Object.keys(n)},c.id=823,e.exports=c},824:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(13),c=a(0),r=a.n(c),i=a(867),o=a(806),l=a(736),s=a(73),u=a(731),m=a(377),p=a.n(m),f=a(378),d=a.n(f),b=a(139),h=Object(b.a)((function(e){return{root:{position:"fixed",left:e.spacing(2),bottom:e.spacing(2)},icon:{marginRight:e.spacing(1)},drawer:{padding:e.spacing(2),maxWidth:"350px",width:"100%"},closeBox:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(2),paddingBottom:e.spacing(2),borderBottom:1,borderBottomColor:e.palette.grey[500],borderBottomStyle:"solid"}}})),E=a(48),v=a(172),g=Object(E.a)((function(e){return a(823)("./".concat(e.tip))}),{fallback:r.a.createElement(v.a,null)}),y=function(e){var t=e.tip,a=h(),m=Object(c.useState)(!1),f=Object(n.a)(m,2),b=f[0],E=f[1],v=function(e){return function(t){t instanceof KeyboardEvent&&"keydown"===t.type&&("Tab"===t.key||"Shift"===t.key)||E(e)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(i.a,{color:"secondary",onClick:v(!0),variant:"extended"},r.a.createElement(p.a,{className:a.icon}),"Tips")),r.a.createElement(o.a,{anchor:"left",open:b,onClose:v(!1),classes:{paper:a.drawer}},r.a.createElement(l.a,{className:a.closeBox},r.a.createElement(s.a,{variant:"h6"},"Tips"),r.a.createElement(u.a,{onClick:v(!1),startIcon:r.a.createElement(d.a,null)},"Close")),r.a.createElement(g,{tip:t})))}},832:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(110),c=a(0),r=a.n(c),i=a(73),o=a(36),l=a(139),s=Object(l.a)((function(e){return{title:Object(o.a)({fontWeight:500,marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:e.typography.h5.fontSize})}})),u=function(e){var t=e.children,a=e.className,c=Object(n.a)(e,["children","className"]),o=s();return r.a.createElement(i.a,Object.assign({variant:"h4",color:"textPrimary",className:"".concat(o.title," ").concat(a)},c),t)}},854:function(e,t,a){"use strict";var n=a(50),c=a(57),r=a(59),i=a(58),o=a(120),l=a(212),s=new(function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.call(this,l.a,l.a.healthChecks)}return Object(c.a)(a,[{key:"findByClientId",value:function(e,t){var a=this;return this.database.transaction("r",this.table.name,(function(){return a.table.where({id:e,clientId:t}).first()}))}},{key:"findClientHealthChecks",value:function(e){var t=this;return this.database.transaction("r",this.table.name,(function(){return t.table.where("clientId").equals(e).toArray()}))}}]),a}(o.a));t.a=s}}]);
//# sourceMappingURL=38.54d7168f.chunk.js.map