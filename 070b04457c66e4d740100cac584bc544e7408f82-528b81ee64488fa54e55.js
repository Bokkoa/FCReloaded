/*! For license information please see 070b04457c66e4d740100cac584bc544e7408f82-528b81ee64488fa54e55.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[185],{2122:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return a}})},9756:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:function(){return a}})},5900:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=n.apply(null,r);s&&e.push(s)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var l in r)a.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},8199:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(2122),n=r(9756),i=r(5900),s=r.n(i),l=r(7294),o=r(9541);var d=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];e.apply(this,a),t.apply(this,a)}}),null)};function u(e){return!e||"#"===e.trim()}var c=l.forwardRef((function(e,t){var r=e.as,i=void 0===r?"a":r,s=e.disabled,o=e.onKeyDown,c=(0,n.Z)(e,["as","disabled","onKeyDown"]),f=function(e){var t=c.href,r=c.onClick;(s||u(t))&&e.preventDefault(),s?e.stopPropagation():r&&r(e)};return u(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),s&&(c.tabIndex=-1,c["aria-disabled"]=!0),l.createElement(i,(0,a.Z)({ref:t},c,{onClick:f,onKeyDown:d((function(e){" "===e.key&&(e.preventDefault(),f(e))}),o)}))}));c.displayName="SafeAnchor";var f=c,p=l.forwardRef((function(e,t){var r=e.bsPrefix,i=e.variant,d=e.size,u=e.active,c=e.className,p=e.block,m=e.type,h=e.as,g=(0,n.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=(0,o.vE)(r,"btn"),b=s()(c,v,u&&"active",i&&v+"-"+i,p&&v+"-block",d&&v+"-"+d);if(g.href)return l.createElement(f,(0,a.Z)({},g,{as:h,ref:t,className:s()(b,g.disabled&&"disabled")}));t&&(g.ref=t),m?g.type=m:h||(g.type="button");var y=h||"button";return l.createElement(y,(0,a.Z)({},g,{className:b}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};var m=p},7408:function(e,t,r){"use strict";var a=r(2122),n=r(9756),i=r(5900),s=r.n(i),l=r(7294),o=r(9541),d=["xl","lg","md","sm","xs"],u=l.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,u=e.as,c=void 0===u?"div":u,f=(0,n.Z)(e,["bsPrefix","className","as"]),p=(0,o.vE)(r,"col"),m=[],h=[];return d.forEach((function(e){var t,r,a,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var i=n.span;t=void 0===i||i,r=n.offset,a=n.order}else t=n;var s="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+p+s:""+p+s+"-"+t),null!=a&&h.push("order"+s+"-"+a),null!=r&&h.push("offset"+s+"-"+r)})),m.length||m.push(p),l.createElement(c,(0,a.Z)({},f,{ref:t,className:s().apply(void 0,[i].concat(m,h))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,r){"use strict";var a=r(2122),n=r(9756),i=r(5900),s=r.n(i),l=r(7294),o=r(9541),d=l.forwardRef((function(e,t){var r=e.bsPrefix,i=e.fluid,d=e.as,u=void 0===d?"div":d,c=e.className,f=(0,n.Z)(e,["bsPrefix","fluid","as","className"]),p=(0,o.vE)(r,"container"),m="string"==typeof i?"-"+i:"-fluid";return l.createElement(u,(0,a.Z)({ref:t},f,{className:s()(c,i?""+p+m:p)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.Z=d},994:function(e,t,r){"use strict";var a=r(2122),n=r(9756),i=r(5900),s=r.n(i),l=r(7294),o=r(9541),d=["xl","lg","md","sm","xs"],u=l.forwardRef((function(e,t){var r=e.bsPrefix,i=e.className,u=e.noGutters,c=e.as,f=void 0===c?"div":c,p=(0,n.Z)(e,["bsPrefix","className","noGutters","as"]),m=(0,o.vE)(r,"row"),h=m+"-cols",g=[];return d.forEach((function(e){var t,r=p[e];delete p[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"==typeof r?r.cols:r)&&g.push(""+h+a+"-"+t)})),l.createElement(f,(0,a.Z)({ref:t},p,{className:s().apply(void 0,[i,m,u&&"no-gutters"].concat(g))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},9541:function(e,t,r){"use strict";r.d(t,{vE:function(){return i}});var a=r(7294),n=a.createContext({});n.Consumer,n.Provider;function i(e,t){var r=(0,a.useContext)(n);return e||r[t]||t}},1496:function(e,t,r){"use strict";var a=r(5318);t.Z=void 0;var n,i=a(r(1506)),s=a(r(5354)),l=a(r(7316)),o=a(r(7154)),d=a(r(7294)),u=a(r(5697)),c=function(e){var t=(0,o.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=m(t||r||[]);return a&&a.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=c(e),r=p(t);return h[r]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&d.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function x(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function R(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function N(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),E.set(e,t)),function(){r.unobserve(e),E.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+s+l+r+a+t+i+n+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=d.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(P,(0,o.default)({ref:t,src:r},i,{ariaHidden:s}));return a.length>1?d.default.createElement("picture",null,n(a),l):l})),P=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},m,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));P.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!v&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||b&&(v||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,N=e.draggable,L=h||g;if(!L)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,Z=(0,o.default)({opacity:k?1:0,transition:O?"opacity "+b+"ms":"none"},l),_="boolean"==typeof v?"lightgray":v,z={transitionDelay:b+"ms"},V=(0,o.default)({opacity:this.state.imgLoaded?0:1},O&&z,l,f),j={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:E},H=this.state.isHydrated?m(L):L[0];if(h)return d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),_&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&z)}),H.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:j,imageVariants:L,generateSources:R}),H.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:j,imageVariants:L,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(L),d.default.createElement(P,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:Z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:r,title:t,loading:w},H,{imageVariants:L}))}}));if(g){var T=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete T.display,d.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},_&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:_,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},O&&z)}),H.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:j,imageVariants:L,generateSources:R}),H.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:j,imageVariants:L,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,S(L),d.default.createElement(P,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:Z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:r,title:t,loading:w},H,{imageVariants:L}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),Z=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function _(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}k.propTypes={resolutions:O,sizes:Z,fixed:_(u.default.oneOfType([O,u.default.arrayOf(O)])),fluid:_(u.default.oneOfType([Z,u.default.arrayOf(Z)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=k;t.Z=z},7276:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(7294),n=r(5444),i=r(1496);function s(e){var t=e.fileName,r=e.alt,s=e.classStyle,l=void 0===s?null:s;return a.createElement(n.StaticQuery,{query:"2115015798",render:function(e){var n=e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));return n?a.createElement(i.Z,{alt:r,fluid:n.node.childImageSharp.fluid,style:{borderRadius:"180px"},className:l||""}):null}})}},943:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var a=r(7294),n=r(5444),i=r(6187),s=r(8199),l=r(2122),o=r(9756),d=r(5900),u=r.n(d),c=r(5697),f=r.n(c),p=r(9541),m=(f().string,f().bool,f().bool,f().bool,f().bool,a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,i=e.fluid,s=e.rounded,d=e.roundedCircle,c=e.thumbnail,f=(0,o.Z)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);r=(0,p.vE)(r,"img");var m=u()(i&&r+"-fluid",s&&"rounded",d&&"rounded-circle",c&&r+"-thumbnail");return a.createElement("img",(0,l.Z)({ref:t},f,{className:u()(n,m)}))})));m.displayName="Image",m.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var h=m,g=r.p+"static/neon-4f7af2a89a1e5a350a8ce96052cb8311.png",v=function(e){var t=e.menuColor,r=e.neon,l=e.handler;return a.createElement("header",{className:r?"menu__neon animate__animated animate__fadeIn":"menu animate__animated animate__fadeIn",style:{backgroundColor:t||"transparent"}},a.createElement(i.Z,null,a.createElement("ul",null,a.createElement("li",null,a.createElement(n.Link,{to:"/"},"Inicio")),a.createElement("li",null,a.createElement(n.Link,{to:"/skills"},"Skills")),a.createElement("li",null,a.createElement(n.Link,{to:"/projects"},"Projects")),a.createElement("li",null,a.createElement(s.Z,{onClick:l},a.createElement(h,{src:g,className:"neon-button animate__animated animate__pulse animate__infinite"}))))))},b=function(e){var t=e.children,r=e.menuColor,n=e.neon,i=e.handler;return a.createElement(a.Fragment,null,a.createElement(v,{menuColor:r,neon:n,handler:i}),t)}}}]);
//# sourceMappingURL=070b04457c66e4d740100cac584bc544e7408f82-528b81ee64488fa54e55.js.map