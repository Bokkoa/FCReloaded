/*! For license information please see component---src-pages-projects-js-abebde3d3fcb18c80716.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[853],{2122:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return a}})},9756:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:function(){return a}})},5900:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var i in r)a.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},8199:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(2122),n=r(9756),l=r(5900),o=r.n(l),i=r(7294),s=r(9541);var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];e.apply(this,a),t.apply(this,a)}}),null)};function u(e){return!e||"#"===e.trim()}var d=i.forwardRef((function(e,t){var r=e.as,l=void 0===r?"a":r,o=e.disabled,s=e.onKeyDown,d=(0,n.Z)(e,["as","disabled","onKeyDown"]),f=function(e){var t=d.href,r=d.onClick;(o||u(t))&&e.preventDefault(),o?e.stopPropagation():r&&r(e)};return u(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),o&&(d.tabIndex=-1,d["aria-disabled"]=!0),i.createElement(l,(0,a.Z)({ref:t},d,{onClick:f,onKeyDown:c((function(e){" "===e.key&&(e.preventDefault(),f(e))}),s)}))}));d.displayName="SafeAnchor";var f=d,m=i.forwardRef((function(e,t){var r=e.bsPrefix,l=e.variant,c=e.size,u=e.active,d=e.className,m=e.block,p=e.type,v=e.as,b=(0,n.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=(0,s.vE)(r,"btn"),h=o()(d,y,u&&"active",l&&y+"-"+l,m&&y+"-block",c&&y+"-"+c);if(b.href)return i.createElement(f,(0,a.Z)({},b,{as:v,ref:t,className:o()(h,b.disabled&&"disabled")}));t&&(b.ref=t),p?b.type=p:v||(b.type="button");var E=v||"button";return i.createElement(E,(0,a.Z)({},b,{className:h}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var p=m},7408:function(e,t,r){"use strict";var a=r(2122),n=r(9756),l=r(5900),o=r.n(l),i=r(7294),s=r(9541),c=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var r=e.bsPrefix,l=e.className,u=e.as,d=void 0===u?"div":u,f=(0,n.Z)(e,["bsPrefix","className","as"]),m=(0,s.vE)(r,"col"),p=[],v=[];return c.forEach((function(e){var t,r,a,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var l=n.span;t=void 0===l||l,r=n.offset,a=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+m+o:""+m+o+"-"+t),null!=a&&v.push("order"+o+"-"+a),null!=r&&v.push("offset"+o+"-"+r)})),p.length||p.push(m),i.createElement(d,(0,a.Z)({},f,{ref:t,className:o().apply(void 0,[l].concat(p,v))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,r){"use strict";var a=r(2122),n=r(9756),l=r(5900),o=r.n(l),i=r(7294),s=r(9541),c=i.forwardRef((function(e,t){var r=e.bsPrefix,l=e.fluid,c=e.as,u=void 0===c?"div":c,d=e.className,f=(0,n.Z)(e,["bsPrefix","fluid","as","className"]),m=(0,s.vE)(r,"container"),p="string"==typeof l?"-"+l:"-fluid";return i.createElement(u,(0,a.Z)({ref:t},f,{className:o()(d,l?""+m+p:m)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},994:function(e,t,r){"use strict";var a=r(2122),n=r(9756),l=r(5900),o=r.n(l),i=r(7294),s=r(9541),c=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var r=e.bsPrefix,l=e.className,u=e.noGutters,d=e.as,f=void 0===d?"div":d,m=(0,n.Z)(e,["bsPrefix","className","noGutters","as"]),p=(0,s.vE)(r,"row"),v=p+"-cols",b=[];return c.forEach((function(e){var t,r=m[e];delete m[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"==typeof r?r.cols:r)&&b.push(""+v+a+"-"+t)})),i.createElement(f,(0,a.Z)({ref:t},m,{className:o().apply(void 0,[l,p,u&&"no-gutters"].concat(b))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9541:function(e,t,r){"use strict";r.d(t,{vE:function(){return l}});var a=r(7294),n=a.createContext({});n.Consumer,n.Provider;function l(e,t){var r=(0,a.useContext)(n);return e||r[t]||t}},943:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var a=r(7294),n=r(5444),l=r(6187),o=r(8199),i=r(2122),s=r(9756),c=r(5900),u=r.n(c),d=r(5697),f=r.n(d),m=r(9541),p=(f().string,f().bool,f().bool,f().bool,f().bool,a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,l=e.fluid,o=e.rounded,c=e.roundedCircle,d=e.thumbnail,f=(0,s.Z)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);r=(0,m.vE)(r,"img");var p=u()(l&&r+"-fluid",o&&"rounded",c&&"rounded-circle",d&&r+"-thumbnail");return a.createElement("img",(0,i.Z)({ref:t},f,{className:u()(n,p)}))})));p.displayName="Image",p.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var v=p,b=r.p+"static/neon-4f7af2a89a1e5a350a8ce96052cb8311.png",y=function(e){var t=e.menuColor,r=e.neon,i=e.handler;return a.createElement("header",{className:r?"menu__neon animate__animated animate__fadeIn":"menu animate__animated animate__fadeIn",style:{backgroundColor:t||"transparent"}},a.createElement(l.Z,null,a.createElement("ul",null,a.createElement("li",null,a.createElement(n.Link,{to:"/"},"Inicio")),a.createElement("li",null,a.createElement(n.Link,{to:"/skills"},"Skills")),a.createElement("li",null,a.createElement(n.Link,{to:"/projects"},"Projects")),a.createElement("li",null,a.createElement(o.Z,{onClick:i},a.createElement(v,{src:b,className:"neon-button animate__animated animate__pulse animate__infinite"}))))))},h=function(e){var t=e.children,r=e.menuColor,n=e.neon,l=e.handler;return a.createElement(a.Fragment,null,a.createElement(y,{menuColor:r,neon:n,handler:l}),t)}},1708:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var a=r(7294),n=r(943),l=r(2122),o=r(9756),i=r(5900),s=r.n(i),c=r(9541),u=/-(.)/g;var d=function(e){return e[0].toUpperCase()+(t=e,t.replace(u,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,t){var r=void 0===t?{}:t,n=r.displayName,i=void 0===n?d(e):n,u=r.Component,f=r.defaultProps,m=a.forwardRef((function(t,r){var n=t.className,i=t.bsPrefix,d=t.as,f=void 0===d?u||"div":d,m=(0,o.Z)(t,["className","bsPrefix","as"]),p=(0,c.vE)(i,e);return a.createElement(f,(0,l.Z)({ref:r,className:s()(n,p)},m))}));return m.defaultProps=f,m.displayName=i,m}var m=function(e){return a.forwardRef((function(t,r){return a.createElement("div",(0,l.Z)({},t,{ref:r,className:s()(t.className,e)}))}))},p=a.createContext(null);p.displayName="CardContext";var v=p,b=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,f=(0,o.Z)(e,["bsPrefix","className","variant","as"]),m=(0,c.vE)(r,"card-img");return a.createElement(d,(0,l.Z)({ref:t,className:s()(i?m+"-"+i:m,n)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var y=b,h=m("h5"),E=m("h6"),g=f("card-body"),N=f("card-title",{Component:h}),x=f("card-subtitle",{Component:E}),C=f("card-link",{Component:"a"}),Z=f("card-text",{Component:"p"}),P=f("card-header"),w=f("card-footer"),k=f("card-img-overlay"),_=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,i=e.bg,u=e.text,d=e.border,f=e.body,m=e.children,p=e.as,b=void 0===p?"div":p,y=(0,o.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=(0,c.vE)(r,"card"),E=(0,a.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return a.createElement(v.Provider,{value:E},a.createElement(b,(0,l.Z)({ref:t},y,{className:s()(n,h,i&&"bg-"+i,u&&"text-"+u,d&&"border-"+d)}),f?a.createElement(g,null,m):m))}));_.displayName="Card",_.defaultProps={body:!1},_.Img=y,_.Title=N,_.Subtitle=x,_.Body=g,_.Link=C,_.Text=Z,_.Header=P,_.Footer=w,_.ImgOverlay=k;var j=_,I=r(6187),R=r(994),O=r(7408),S=r(8199),A=[{title:"Contalite",description:"Sistema de facturación electrónica y contabilidad, desarrollado con laravel y react, \n                      sirviendose de distintos proveedores para temas de pago y transaciones de timbrados de CFDI (proyecto aún en desarrollo)",url:"https://app.contalite.com/",image:r.p+"static/contalite_app-d2d243707e8edc6f732b320371866d18.png"},{title:"Contalite Admin.",description:"Sistema de gestión de declaraciones, opiniones de cumplimiento y planes del servicio contable, incluye estadísticas de la\n        actividad mensual dentro del sistema de Contalite.",url:"https://apanel.contalite.com/",image:r.p+"static/twitter-0c048f56fc02844fad7618cef8271626.png"}];function D(){return a.createElement(n.Z,{menuColor:"#141321"},a.createElement(I.Z,{className:"projects"},a.createElement("h1",null,"Proyectos"),a.createElement("hr",null),a.createElement(R.Z,null,A.map((function(e,t){return a.createElement(O.Z,{key:t,xs:12,sm:4,className:"project"},a.createElement(j,null,a.createElement("div",{className:"image",style:{backgroundImage:'url("'+e.image+'")'}}),a.createElement(j.Body,null,a.createElement(j.Title,null,e.title),a.createElement(j.Text,null,e.description),a.createElement(j.Footer,null,a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},a.createElement(S.Z,{variant:"primary"},"Ver proyecto"))))))})))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-abebde3d3fcb18c80716.js.map