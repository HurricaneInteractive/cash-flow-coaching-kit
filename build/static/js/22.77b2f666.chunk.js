(this["webpackJsonpdcfck-app"]=this["webpackJsonpdcfck-app"]||[]).push([[22],{807:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),i=a(792),o=a(873),c=a(307),s=a(826),l=a.n(s);function m(e){var t=e.open,a=e.msg,n=e.onClose,s=e.severity,m=void 0===s?"info":s;return r.a.createElement(o.a,{open:t,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:n},r.a.createElement(i.a,{severity:m,variant:"filled",action:r.a.createElement(c.a,{size:"small","aria-label":"close",color:"inherit"},r.a.createElement(l.a,{fontSize:"small"}))},a))}},815:function(e,t,a){var n={"./ActionChecklistTip":[808,4],"./ActionChecklistTip.tsx":[808,4],"./CFCanvasTip":[809,5],"./CFCanvasTip.tsx":[809,5],"./ChangeLevers":[810,6],"./ChangeLevers.tsx":[810,6],"./ClientListTips":[811,7],"./ClientListTips.tsx":[811,7],"./CoachingKitTips":[812,8],"./CoachingKitTips.tsx":[812,8],"./DiscoverTopicsTips":[813,9],"./DiscoverTopicsTips.tsx":[813,9],"./HCQuestionnaire":[814,10],"./HCQuestionnaire.tsx":[814,10],"./style":[806,11],"./style.ts":[806,11]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=815,e.exports=r},816:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(17),r=a(0),i=a.n(r),o=a(841),c=a(803),s=a(733),l=a(73),m=a(753),u=a(243),p=a.n(u),d=a(376),f=a.n(d),h=a(139),g=Object(h.a)((function(e){return{root:{position:"fixed",left:e.spacing(2),bottom:e.spacing(2)},icon:{marginRight:e.spacing(1)},drawer:{padding:e.spacing(2),maxWidth:"350px",width:"100%"},closeBox:{display:"flex",justifyContent:"space-between",marginBottom:e.spacing(2),paddingBottom:e.spacing(2),borderBottom:1,borderBottomColor:e.palette.grey[500],borderBottomStyle:"solid"}}})),b=a(48),y=a(173),v=Object(b.a)((function(e){return a(815)("./".concat(e.tip))}),{fallback:i.a.createElement(y.a,null)}),E=function(e){var t=e.tip,a=g(),u=Object(r.useState)(!1),d=Object(n.a)(u,2),h=d[0],b=d[1],y=function(e){return function(t){t instanceof KeyboardEvent&&"keydown"===t.type&&("Tab"===t.key||"Shift"===t.key)||b(e)}};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:a.root},i.a.createElement(o.a,{color:"secondary",onClick:y(!0),variant:"extended"},i.a.createElement(p.a,{className:a.icon}),"Tips")),i.a.createElement(c.a,{anchor:"left",open:h,onClose:y(!1),classes:{paper:a.drawer}},i.a.createElement(s.a,{className:a.closeBox},i.a.createElement(l.a,{variant:"h6"},"Tips"),i.a.createElement(m.a,{onClick:y(!1),startIcon:i.a.createElement(f.a,null)},"Close")),i.a.createElement(v,{tip:t})))}},817:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),i=a(173);function o(e){var t=e.children;return e.if?r.a.createElement(r.a.Fragment,null,t):r.a.createElement(i.a,null)}},818:function(e,t,a){"use strict";function n(e,t){return new Array(e).fill(t)}a.d(t,"a",(function(){return n}))},819:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={cashInActions:"Cash IN actions",cashOutActions:"Cash OUT actions",planningBusiness:"Planning your business actions",recordKeeping:"Record keeping actions",funding:"Funding your business actions",managing:"Managing your cash flow actions",planningCommitments:"Planning your regular financial commitments actions",tracking:"Tracking your performance actions",transition:"Selling, closing and succession planning"}},820:function(e,t,a){"use strict";var n=a(807);a.d(t,"a",(function(){return n.a}))},822:function(e,t,a){"use strict";var n=a(139),r=Object(n.a)((function(e){return{tagline:{marginBottom:e.spacing(4),fontSize:"2rem"},container:{paddingTop:e.spacing(5)},grid:{paddingTop:e.spacing(5)},SectionTitle:{paddingTop:e.spacing(5),paddingBottom:e.spacing(2),fontSize:"1.8rem"},embed:{minHeight:"300px",border:"none"},button:{margin:e.spacing(2,0,2,0),textAlign:"center",backgroundColor:"#ffffff",textTransform:"none"},containerActivity:{backgroundColor:"#ce93d8",paddingBottom:e.spacing(3),marginTop:e.spacing(5)},containerWrapUp:{backgroundColor:"#e1bee7",paddingBottom:e.spacing(3)},containerMoreInfo:{backgroundColor:"#f3e5f5",paddingBottom:e.spacing(3)},list:{listStyle:"disc",paddingLeft:e.spacing(1),margin:e.spacing(.5,0,.5,2)},contentText:{margin:e.spacing(2,0)}}}));t.a=r},823:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=a(819),r=function(e){return n.a[e]},i=function(e){return-1===["cashInActions","cashOutActions"].indexOf(e)}},828:function(e,t,a){"use strict";a.d(t,"a",(function(){return P}));var n=a(17),r=a(0),i=a.n(r),o=a(733),c=a(73),s=a(242),l=a(139),m=Object(l.a)((function(e){return{innerBox:{paddingRight:e.spacing(2),paddingLeft:e.spacing(2)},content:{marginBottom:e.spacing(2)}}})),u=Object(l.a)((function(e){return{divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},actions:{marginTop:e.spacing(3)},fill:{width:"100%"},label:{display:"flex"}}})),p=a(18),d=a.n(p),f=a(5),h=a(29),g=a(774),b=a(794),y=a(759),v=a(797),E=a(753),w=a(374),k=a.n(w),x=a(105);function O(e){return e.toLowerCase().replace(/[^a-zA-Z0-9]/g,"_")}function j(e,t){return"undefined"!==typeof t.find((function(t){return t.description===e}))}function C(e,t){return 0===t.length?new Array(e.length).fill(!1):e.map((function(e){return j(e,t)}))}function N(e,t,a){return function(n,r,i){return e[i]?n.concat(Object(f.a)(Object(f.a)({},Object(x.c)(t,a)),{},{description:r})):n}}var T=a(244),A=a(817),S=a(818),B=a(378),I=a(164),W=a(377),z=a(86),H=a(383),D=a(820),U=a(823),F=a(211);function M(e){var t=e.container,a=e.client,c=u(),s=Object(r.useState)(!1),l=Object(n.a)(s,2),m=l[0],p=l[1],w=Object(r.useState)(Object(T.b)()),M=Object(n.a)(w,1)[0],_=Object(r.useContext)(W.a),P=_.dispatch,K=_.notes,R=_.databaseSyced,L=_.checklistCollection,Q=Object(r.useState)({open:!1,msg:""}),q=Object(n.a)(Q,2),V=q[0],Y=q[1],G=Object(r.useState)(),J=Object(n.a)(G,2),Z=J[0],X=J[1],$=Object(r.useState)(),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ne=Object(r.useState)(),re=Object(n.a)(ne,2),ie=re[0],oe=re[1],ce=Object(r.useState)(function(e){return{cashInActions:[],cashOutActions:[],planningBusiness:["Forecast my demand.","Set the right price for my product or service.","Assess the capital I need to start up or grow.","Build my business plan."],recordKeeping:["Ensure my records are reliable.","Find an efficient accounting system for my needs.","Get help if I need it.","Ensure my records meet my commitments.","Complete the record keeping activity.","Download the ATO app."],funding:["Understand the four main funding types.","Articulate my purpose for seeking funding.","Know how much funding I need.","Know when to seek funding.","Understand the terms that suit my business.","Complete the funding activity."],managing:["Manage the timing of my cash flow.","Understand the difference between profit and cash flow.","Know how much cash doesn\u2019t belong to my business.","Set out my working capital.","Use the Cash Flow Canvas."],planningCommitments:["Understand which business actions trigger payments.","Be aware of important dates.","Calculate how much to put aside.","Know what can go wrong when I don\u2019t meet obligations.","Complete the financial commitments activity."],tracking:["Set out a plan to review regularly.","Learn what to look for in my cash flow.","Watch my performance to measure my success.","Complete the performance tracking activity."],transition:["Articulate my purpose for exiting.","Consider my family objectives and support when exiting.","Explore options to exit.","Prepare my exit."]}[e]}(t)),se=Object(n.a)(ce,1)[0],le=Object(r.useState)(Object(S.a)(se.length,!1)),me=Object(n.a)(le,2),ue=me[0],pe=me[1],de=Object(r.useState)(""),fe=Object(n.a)(de,2),he=fe[0],ge=fe[1],be=Object(r.useCallback)(Object(h.a)(d.a.mark((function e(){var n,r,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e){P({type:z.a.AddNotes,payload:e})},!(null===(r=K.filter(Object(H.a)(t))[0])||void 0===r?void 0:r.id)){e.next=7;break}ge(r.notes),oe(r.id),e.next=13;break;case 7:return i=Object(x.d)(a,t),e.next=10,B.a.create(i);case 10:o=e.sent,n(Object(f.a)(Object(f.a)({},i),{},{id:o})),oe(o);case 13:case"end":return e.stop()}}),e)}))),[K,t,a,P]),ye=Object(r.useCallback)(Object(h.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof ie){e.next=3;break}return e.next=3,be();case 3:a=L.filter(Object(H.a)(t)),X(a),pe(C(se,a)),p(!0);case 7:case"end":return e.stop()}}),e)}))),[t,se,be,ie,L]);function ve(e,t){Y(Object(f.a)(Object(f.a)({},V),{},{msg:e,severity:t,open:!0}))}function Ee(){return we.apply(this,arguments)}function we(){return(we=Object(h.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof te){e.next=12;break}return e.next=3,I.a.findByClientAndContainer(t,a);case 3:if(0!==(n=e.sent).length){e.next=10;break}return e.next=7,I.a.create(Object(x.e)(a,t));case 7:return r=e.sent,ae(r),e.abrupt("return",r);case 10:return ae(n[0].id||""),e.abrupt("return",n[0].id||"");case 12:return e.abrupt("return",te);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(){return(ke=Object(h.a)(d.a.mark((function e(r){var i,o,c,s,l,m,u,p,h,g,b,y;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),-1===ue.indexOf(!0)){e.next=19;break}return e.next=4,Ee();case 4:return i=e.sent,o=se.reduce(N(ue,a,t),[]),c=o.map((function(e){var t=null===Z||void 0===Z?void 0:Z.filter((function(t){return t.description===e.description}));return t&&t.length>0?Object(f.a)(Object(f.a)({},e),{},{id:t[0].id||""}):e})),e.next=9,Object(x.a)(c,i);case 9:if(s=e.sent,l=Object(n.a)(s,2),m=l[0],l[1]){e.next=16;break}return ve("Something went wrong. Check the data and try again","error"),e.abrupt("return");case 16:P({type:z.a.BulkAddActionItems,payload:{items:m,priorityId:i}}),e.next=33;break;case 19:return e.next=21,Ee();case 21:return u=e.sent,e.next=24,I.a.findById(u);case 24:if(0!==(null===(p=e.sent)||void 0===p?void 0:p.order.length)){e.next=33;break}return h=Object(x.c)(a,t),e.next=29,F.a.create(h);case 29:return g=e.sent,e.next=32,I.a.update(u,Object(f.a)(Object(f.a)({},p),{},{order:[g]}));case 32:P({type:z.a.AddNewActionItem,payload:{checklist:Object(f.a)(Object(f.a)({},h),{},{id:g}),priority:u}});case 33:if("undefined"!==typeof ie){e.next=36;break}return ve("Something went wrong. Check the data and try again","error"),e.abrupt("return");case 36:return b=K.filter(Object(H.a)(t)),y=Object(f.a)(Object(f.a)({},b[0]),{},{notes:he}),e.next=40,B.a.put(y);case 40:P({type:z.a.UpdateNotes,payload:{data:y,id:ie}}),ve("Items we added to the ".concat(Object(U.a)(t)," checklist"),"success");case 42:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){R&&ye()}),[ye,R]),i.a.createElement("form",{autoComplete:"off",noValidate:!0,onSubmit:function(e){return ke.apply(this,arguments)}},i.a.createElement(D.a,{open:V.open,msg:V.msg,severity:V.severity,onClose:function(e,t){"clickaway"!==t&&Y(Object(f.a)(Object(f.a)({},V),{},{open:!1}))}}),i.a.createElement(A.a,{if:m},se.map((function(e,t){return i.a.createElement(g.a,{label:e,key:Object(T.a)(M,t),control:i.a.createElement(b.a,{name:e,onChange:function(e){!function(e,t){var a=ue.reduce((function(a,n,r){return a.concat(r===t?e:n)}),[]);pe(a)}(e.target.checked,t)}}),name:O(e),checked:ue[t],disabled:j(e,Z||[]),className:c.label})})),i.a.createElement(y.a,{className:c.divider}),i.a.createElement(v.a,{multiline:!0,rows:3,variant:"outlined",className:c.fill,label:"Notes",value:he,onChange:function(e){ge(e.target.value)}})),i.a.createElement(o.a,{className:c.actions},i.a.createElement(E.a,{color:"primary",variant:"contained",startIcon:i.a.createElement(k.a,null),className:c.fill,type:"submit"},"Add to action checklist")))}var _=a(115);function P(e){var t=e.container,a=m(),r=Object(_.a)(),l=Object(n.a)(r,1)[0];return i.a.createElement(s.a,{title:"Task builder"},i.a.createElement(o.a,{className:a.innerBox},i.a.createElement(c.a,{className:a.content},"Review the topic content and mark the tasks you will complete to better understand your cash flow."),i.a.createElement(A.a,{if:"undefined"!==typeof(null===l||void 0===l?void 0:l.id)},i.a.createElement(M,{container:t,client:null===l||void 0===l?void 0:l.id}))))}},829:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),r=a.n(n),i=a(757),o=a(730),c=a(785),s=a(778),l=a(821),m=a.n(l),u=a(242);function p(e){var t=e.filename;return r.a.createElement(u.a,null,r.a.createElement(i.a,{component:"nav",disablePadding:!0},r.a.createElement(o.a,{component:"a",href:"/pdf/".concat(t),target:"_blank",rel:"noopener noreferrer",style:{color:"inherit"}},r.a.createElement(c.a,null,r.a.createElement(m.a,null)),r.a.createElement(s.a,null,"Quicksnaps PDF"))))}},850:function(e,t,a){"use strict";var n=a(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(64)).default)(r.default.createElement("path",{d:"M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z"}),"VerticalSplit");t.default=i},920:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(42),o=a(768),c=a(73),s=a(757),l=a(781),m=a(782),u=a(783),p=a(784),d=a(753),f=a(800),h=a(776),g=a(777),b=a(780),y=a(382),v=a.n(y),E=a(850),w=a.n(E),k=a(333),x=a(816),O=a(822),j=a(12),C=a(828),N=a(829);t.default=function(){var e=Object(O.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{role:"main"},r.a.createElement(o.a,{container:!0,spacing:2},r.a.createElement(o.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(c.a,{component:"h1",align:"center",className:e.tagline},"Tracking your performance"),r.a.createElement(c.a,{variant:"body1",component:"p",className:e.contentText,gutterBottom:!0},"It is vital for every business to track performance over time, to monitor and address cash flow issues before it\u2019s too late. Tracking accurately reveals how you are performing against your plan and allows you to revisit your budget with a clear path to improve your cash flow."),r.a.createElement(c.a,{variant:"body1",component:"p",className:e.contentText},r.a.createElement("strong",null,"Tracking your performance can help you:")),r.a.createElement(s.a,null,r.a.createElement(c.a,{component:"li",className:e.list},"Operate profitably and continue to generate a positive cash flow."),r.a.createElement(c.a,{component:"li",className:e.list},"Make changes to improve cash flow in a timely manner."),r.a.createElement(c.a,{component:"li",className:e.list},"Make informed decisions."),r.a.createElement(c.a,{component:"li",className:e.list},"Gather and analyse comprehensive information to prepare reports."),r.a.createElement(c.a,{component:"li",className:e.list},"Review past performance and make plans to improve your business."),r.a.createElement(c.a,{component:"li",className:e.list},"Use reliable financial details to track your business."),r.a.createElement(c.a,{component:"li",className:e.list},"Reach your financial and business goals.")),r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,sm:6},r.a.createElement(l.a,{variant:"outlined"},r.a.createElement(m.a,{title:"Tina's Hair & Beauty"}),r.a.createElement(u.a,{title:"Tina's Hair & Beauty",className:e.embed,component:"iframe",src:"https://www.youtube.com/embed/VRxQ7AkxsfY"}),r.a.createElement(p.a,null,r.a.createElement(d.a,{color:"primary",href:"/transcripts/Tinas-hair-and-beauty.docx",target:"_blank",rel:"noopener noreferrer"},"Download Transcript: Tina's Hair & Beauty")))),r.a.createElement(o.a,{item:!0,sm:6},r.a.createElement(l.a,{variant:"outlined"},r.a.createElement(m.a,{title:"Anders' Retirement Plan"}),r.a.createElement(u.a,{title:"Anders' Retirement Plan",className:e.embed,component:"iframe",src:"https://www.youtube.com/embed/MPNkTF-puTQ"}),r.a.createElement(p.a,null,r.a.createElement(d.a,{color:"primary",href:"/transcripts/Anders-retirement-plan.docx",target:"_blank",rel:"noopener noreferrer"},"Download Transcript: Anders' Retirement Plan")))))),r.a.createElement(o.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(C.a,{container:"tracking"}),r.a.createElement(N.a,{filename:"Tracking your performance - Quicksnaps.pdf"}))),r.a.createElement(c.a,{component:"h2",className:e.SectionTitle},"Quicksnaps - How to best track your business performance."),r.a.createElement(f.a,null,r.a.createElement(h.a,{expandIcon:r.a.createElement(v.a,null),"aria-controls":"review-regularly-content",id:"review-regularly-header"},r.a.createElement(c.a,{variant:"h5",component:"h3"},"Review your business regularly")),r.a.createElement(g.a,null,r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,sm:6},r.a.createElement(c.a,{variant:"h6",component:"h4"},"Why?"),r.a.createElement(c.a,{variant:"body1",component:"p",className:e.contentText},"Understanding your regular financial commitments is essential for budgeting. Appreciating when they occur, how much they are likely to be and who they are owed to is a great place to start. By mapping these expenses, you will gain a better idea of the cash you need during certain time frames to pay your debts.")),r.a.createElement(o.a,{item:!0,sm:6},r.a.createElement(s.a,null,r.a.createElement(c.a,{component:"li",className:e.list},"Do you set aside time at the end of each week, month, quarter and year to review your financial performance?"),r.a.createElement(c.a,{component:"li",className:e.list},"Are there issues which have arisen in the past which you have not been prepared for?"),r.a.createElement(c.a,{component:"li",className:e.list},"Could you have avoided cash flow problems in the past if you had a better understanding of how your business was truly performing?")))))),r.a.createElement(f.a,null,r.a.createElement(h.a,{expandIcon:r.a.createElement(v.a,null),"aria-controls":"know-what-content",id:"know-what-header"},r.a.createElement(c.a,{variant:"h5",component:"h3"},"Know what to look for")),r.a.createElement(g.a,null,r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,sm:6},r.a.createElement(c.a,{variant:"h6",component:"h4"},"Why?"),r.a.createElement(c.a,{variant:"body1",component:"p",className:e.contentText},"Obtaining a clearer picture of your cash flow and business will allow you to make better decisions. Knowing exactly what to look for will vary, but asking yourself these Quicksnap questions will ensure you are on your way to identifying key areas.")),r.a.createElement(o.a,{item:!0,sm:6},r.a.createElement(s.a,null,r.a.createElement(c.a,{component:"li",className:e.list},"What is working well?"),r.a.createElement(c.a,{component:"li",className:e.list},"What is not working well?"),r.a.createElement(c.a,{component:"li",className:e.list},"Did you meet your budget?"),r.a.createElement(c.a,{component:"li",className:e.list},"Do you have enough cash for the upcoming months?"),r.a.createElement(c.a,{component:"li",className:e.list},"Which product or customer do you make the most money on?"),r.a.createElement(c.a,{component:"li",className:e.list},"Which debtors are the slowest payers? Can you address this?"),r.a.createElement(c.a,{component:"li",className:e.list},"Have you performed better than this time last year?"),r.a.createElement(c.a,{component:"li",className:e.list},"Are expenses in line with your expectations?")))))),r.a.createElement(f.a,null,r.a.createElement(h.a,{expandIcon:r.a.createElement(v.a,null),"aria-controls":"past-performance-content",id:"past-performance-header"},r.a.createElement(c.a,{variant:"h5",component:"h3"},"Past performance, future success")),r.a.createElement(g.a,null,r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,sm:6},r.a.createElement(c.a,{variant:"h6",component:"h4"},"Why?"),r.a.createElement(c.a,{variant:"body1",component:"p",className:e.contentText},"Your past performance is not a reliable assurance of future success. However, it may assist you in forecasting and budgeting, allowing you to make informed decisions that maximise your cash flow.")),r.a.createElement(o.a,{item:!0,sm:6},r.a.createElement(s.a,null,r.a.createElement(c.a,{component:"li",className:e.list},"How is your business tracking against your business plan?"),r.a.createElement(c.a,{component:"li",className:e.list},"How is your business tracking against your budget and forecast?"),r.a.createElement(c.a,{component:"li",className:e.list},"Do you know the busy and quiet periods in your business?"),r.a.createElement(c.a,{component:"li",className:e.list},"What can you change? (Use the Change lever cards)")))))),r.a.createElement(b.a,{maxWidth:"lg",component:"div",className:e.containerActivity},r.a.createElement(c.a,{component:"h2",className:e.SectionTitle},"Track Canvas activity"),r.a.createElement(c.a,{variant:"body1",component:"p",className:e.contentText,gutterBottom:!0},"This is your opportunity to use the Track Canvas to track your business performance. You may wish to revisit your business plan, choose a goal and track your progress towards it. The Track Canvas helps you determine how you are tracking. Click \u201cShow Me How\u201d at any time to get help using the tool."),r.a.createElement(d.a,{variant:"contained",color:"primary",size:"large",startIcon:r.a.createElement(w.a,null),component:i.b,to:j.a.CFC},"Cash flow canvas")),r.a.createElement(b.a,{maxWidth:"lg",component:"div",className:e.containerWrapUp},r.a.createElement(c.a,{component:"h2",className:e.SectionTitle},"Wrap up"),r.a.createElement(c.a,{variant:"body1",component:"p",className:e.contentText},"If you have a business advisor, consider asking for assistance in interpreting and responding to information revealed through tracking your performance. An advisor may be able to help you take advantage of opportunities in your industry, make changes within your business, or understand whether your business is performing well or not.")),r.a.createElement(b.a,{maxWidth:"lg",component:"div",className:e.containerMoreInfo},r.a.createElement(c.a,{component:"h2",className:e.SectionTitle},"More information"),r.a.createElement(c.a,{variant:"body1",component:"p",className:e.contentText},"You might like to visit these links for more information"),r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,sm:6,md:!0},r.a.createElement(d.a,{variant:"contained",fullWidth:!0,size:"large",className:e.button,href:"https://www.business.qld.gov.au/running-business/protecting-business/risk-management/surviving-downturn/assess-performance",title:"assess business performance",target:"_blank",rel:"noopener noreferrer"},"Assess business performance")),r.a.createElement(o.a,{item:!0,sm:6,md:!0},r.a.createElement(d.a,{variant:"contained",fullWidth:!0,size:"large",className:e.button,href:"https://www.business.qld.gov.au/running-business/finances-cash-flow/managing-money/monitoring-performance",title:"monitoring your financial performance",target:"_blank",rel:"noopener noreferrer"},"Monitoring your financial performance")),r.a.createElement(o.a,{item:!0,sm:6,md:!0},r.a.createElement(d.a,{variant:"contained",fullWidth:!0,size:"large",className:e.button,href:"https://www.business.qld.gov.au/starting-business/planning/market-customer-research/benchmarking",title:"benchmarking your business",target:"_blank",rel:"noopener noreferrer"},"Benchmarking your business")),r.a.createElement(o.a,{item:!0,sm:6,md:!0},r.a.createElement(d.a,{variant:"contained",fullWidth:!0,size:"large",className:e.button,href:"https://www.business.vic.gov.au/money-profit-and-accounting/financial-processes-and-procedures/check-your-financial-health",title:"check the financial health of your business",target:"_blank",rel:"noopener noreferrer"},"Check the financial health of your business")),r.a.createElement(o.a,{item:!0,sm:6,md:!0},r.a.createElement(d.a,{variant:"contained",fullWidth:!0,size:"large",className:e.button,href:"https://www.business.qld.gov.au/running-business/growing-business/tips-improving",title:"improving business performance",target:"_blank",rel:"noopener noreferrer"},"Improving business performance"))))),r.a.createElement(x.a,{tip:"DiscoverTopicsTips"}))}}}]);
//# sourceMappingURL=22.77b2f666.chunk.js.map