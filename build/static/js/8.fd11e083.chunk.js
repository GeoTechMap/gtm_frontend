(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{658:function(e,t,n){"use strict";n(1);var c=n(640),i=n(641),a=n(17);t.a=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.z,{"aria-current":"page",to:"/dashboard",children:Object(a.jsxs)(c.d,{color:"dark",variant:"outline",style:{marginRight:5},children:[Object(a.jsx)(i.a,{size:"sm",name:"cil-location-pin"}),Object(a.jsx)("span",{className:"mfs-2",children:"Carte"})]})}),Object(a.jsx)(c.z,{"aria-current":"page",to:"/liste",children:Object(a.jsxs)(c.d,{color:"dark",variant:"outline",children:[Object(a.jsx)(i.a,{size:"sm",name:"cil-list-rich"}),Object(a.jsx)("span",{className:"mfs-2",children:"Liste"})]})})]})}},719:function(e,t){},871:function(e,t){},872:function(e,t){},873:function(e,t){},874:function(e,t){},875:function(e,t){},882:function(e,t,n){},906:function(e,t,n){"use strict";n.r(t);var c=n(161),i=n(1),a=n(722),r=n(720),o=n.n(r),s=n(17);function u(e){var t=Object(i.useState)(null),n=Object(c.a)(t,2),r=n[0],u=n[1],j=Object(i.useState)(1),l=Object(c.a)(j,2),d=l[0],f=l[1];function h(e){f((function(t){return t+e}))}var b=e.pdf;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(a.a,{file:b,options:{workerSrc:"/pdf.worker.js"},loading:Object(s.jsx)(o.a,{loading:!0,size:35}),onLoadSuccess:function(e){var t=e.numPages;u(t),f(1)},children:Object(s.jsx)(a.b,{pageNumber:d})}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Page ",d||(r?1:"--")," sur ",r||"--"]}),Object(s.jsx)("button",{type:"button",disabled:d<=1,onClick:function(){h(-1)},children:"Pr\xe9c\xe9dent"}),Object(s.jsx)("button",{type:"button",disabled:d>=r,onClick:function(){h(1)},children:"Suivant"})]})]})}a.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(a.c.version,"/pdf.worker.js");n(882);var j=n(658);t.default=function(e){var t=e.match,n=Object(i.useState)(!1),a=Object(c.a)(n,2),r=(a[0],a[1]),o=Object(i.useState)({}),l=Object(c.a)(o,2),d=l[0],f=l[1];return Object(i.useEffect)((function(){r(!0),fetch("http://localhost:8080/api/file/info?id=".concat(t.params.id)).then((function(e){return e.json()})).then((function(e){return fetch("http://localhost:8081/api/file/getfile",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({nomFichier:e.nom,hashNomFichier:e.hashNomFichier,hashBase64:e.hashPdf})}).then((function(e){return e.json()})).then((function(e){return f(e)})).catch((function(e){console.error("Error:",e)})),e})).then((function(){return r(!1)})).catch((function(e){console.log(e),r(!1)}))}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(j.a,{}),Object(s.jsx)(u,{pdf:"data:application/pdf;base64,".concat(d.base64File)})]})}}}]);
//# sourceMappingURL=8.fd11e083.chunk.js.map