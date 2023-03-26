/* details-toggle 
   1.0.0
   By Stephen Band
   Built 2023-03-26 03:51 */

var ot=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,Pt=Object.prototype.propertyIsEnumerable;var rt=(t,e)=>{var o={};for(var r in t)kt.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&ot)for(var r of ot(t))e.indexOf(r)<0&&Pt.call(t,r)&&(o[r]=t[r]);return o};function E(t){return t}function w(t,e){return function(){let r=t.apply(this,arguments),i=e[r]||e.default;if(!i)throw new Error('overload() no handler for "'+r+'"');return i.apply(this,arguments)}}function M(t){var e=new Map;return function(r){if(e.has(r))return e.get(r);var i=t(r);return e.set(r,i),i}}var Dt=Array.prototype;function Bt(t,e){return typeof t=="function"?t.apply(null,e):t}function it(t,e,o){o=o||t.length;var r=o===1?e?t:M(t):M(function(i){return it(function(){var s=[i];return s.push.apply(s,arguments),t.apply(null,s)},e,o-1)});return function i(s){return arguments.length===0?i:arguments.length===1?r(s):arguments.length>=o?t.apply(null,arguments):Bt(r(s),Dt.slice.call(arguments,1))}}var f=it;function A(){}var At=w(E,{is:A,tag:A,data:function(t,e,o){Object.assign(e.dataset,o)},html:function(t,e,o){e.innerHTML=o},text:function(t,e,o){e.textContent=o},children:function(t,e,o){e.innerHTML="",e.append.apply(e,o)},points:T,cx:T,cy:T,r:T,transform:T,preserveAspectRatio:T,viewBox:T,default:function(t,e,o){t in e?e[t]=o:e.setAttribute(t,o)}});function T(t,e,o){e.setAttribute(t,o)}function zt(t,e){for(var o=Object.keys(e),r=o.length;r--;)At(o[r],t,e[o[r]]);return t}var z=f(zt,!0);var q="http://www.w3.org/2000/svg",st=document.createElement("template"),$=(t,e)=>e&&typeof e;function at(t,e){let o=document.createRange();return o.selectNode(t),o.createContextualFragment(e)}var p=w($,{string:function(t,e){let o=document.createElementNS(q,t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElementNS(q,t);return typeof e.length=="number"?o.append.apply(o,e):z(o,e),o},default:t=>document.createElementNS(q,t)}),jt=w($,{string:function(t,e){let o=document.createElement(t);return o.innerHTML=e,o},object:function(t,e){let o=document.createElement(t);return typeof e.length=="number"?o.append.apply(o,e):z(o,e),o},default:t=>document.createElement(t)}),Vt=w(E,{comment:function(t,e){return document.createComment(e||"")},fragment:w($,{string:function(t,e,o){return o?at(o,e):(st.innerHTML=e,st.content.cloneNode(!0))},object:function(t,e,o){let r=o?at(o):document.createDocumentFragment();return typeof e.length=="number"?r.append.apply(r,e):z(r,e),r},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:p,ellipse:p,g:p,glyph:p,image:p,line:p,rect:p,use:p,path:p,pattern:p,polygon:p,polyline:p,svg:p,default:jt}),b=Vt;function _(t,e,o){let r;typeof o!="string"&&o.input!==void 0&&o.index!==void 0&&(r=o,o=r.input.slice(o.index+o[0].length+(o.consumed||0)));let i=t.exec(o);if(!i)return;let s=e(i);return r&&(r.consumed=(r.consumed||0)+i.index+i[0].length+(i.consumed||0)),s}var De=f(_,!0);function Gt(t,e,o){throw o.input!==void 0&&o.index!==void 0&&(o=o.input),new Error('Cannot parse string "'+(o.length>128?o.length.slice(0,128)+"…":o)+'"')}function Ut(t,e,o){let r=-1;for(;++r<o.length;)e=o[r]!==void 0&&t[r]?t[r](e,o):e;return t.done?t.done(e,o):t.close?t.close(e,o):e}function It(t,e,o,r){let i=_(t,s=>Ut(e,o,s),r);return i===void 0?e.catch?e.catch(o,r):Gt(t,e,r):i}var ut=f(It,!0);var c=Symbol("internals"),L=Symbol("shadow"),ct=Object.defineProperties,Rt={a:HTMLAnchorElement,article:HTMLElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,section:HTMLElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},Wt={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[c].form}},labels:{get:function(){return this[c].labels}},validity:{get:function(){return this[c].validity}},validationMessage:{get:function(){return this[c].validationMessage}},willValidate:{get:function(){return this[c].willValidate}},checkValidity:{value:function(){return this[c].checkValidity()}},reportValidity:{value:function(){return this[c].reportValidity()}}},Nt={},lt={once:!0},pt=0,ft=!1;function qt(t){return Rt[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var $t=ut(/^\s*<?([a-z][\w]*-[\w-]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is[=\s]*["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function _t(t,e){if(t.hasOwnProperty(e)){let o=t[e];delete t[e],t[e]=o}return t}function dt(t,e,o){t._initialLoad=!0;let r=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(o){let i=b("link",{rel:"stylesheet",href:o});r.append(i)}return t[L]=r,r}function Qt(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=b("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(o){this.input.value=o},e}function Xt(t){return!!t.attribute}function Yt(t){return t.set||t.get||t.hasOwnProperty("value")}function Jt(t,e){return Xt(e[1])&&(t.attributes[e[0]]=e[1].attribute),Yt(e[1])&&(t.properties[e[0]]=e[1]),t}function O(t){return t[c]=t[c]||{}}function Q(t,e,o,r,i=""){let{name:s,tag:u}=$t(t),C=typeof u=="string"?qt(u):HTMLElement,{attributes:g,properties:h}=o?Object.entries(o).reduce(Jt,{attributes:{},properties:{}}):Nt;function l(){let a=Reflect.construct(C,arguments,l),y=e.construct&&e.construct.length>pt?dt(a,e,r||e.stylesheet):void 0,m=l.formAssociated?Qt(a):{};return u&&(ft=!0),e.construct&&e.construct.call(a,y,m),h&&Object.keys(h).reduce(_t,a),a}return l.prototype=Object.create(C.prototype,h),h.value&&(l.formAssociated=!0,ct(l.prototype,Wt),(e.enable||e.disable)&&(l.prototype.formDisabledCallback=function(a){return a?e.disable&&e.disable.call(this,this[L],this[c]):e.enable&&e.enable.call(this,this[L],this[c])}),e.reset&&(l.prototype.formResetCallback=function(){return e.reset.call(this,this[L],this[c])}),e.restore&&(l.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[L],this[c])})),g&&(l.observedAttributes=Object.keys(g),l.prototype.attributeChangedCallback=function(a,y,m){return g[a].call(this,m)}),l.prototype.connectedCallback=function(){let a=this,y=a[L],m=a[c];if(a._initialLoad){let x=y.querySelectorAll('link[rel="stylesheet"]');if(x.length){let Ft=0,N=x.length,nt=function(me){++Ft>=x.length&&(delete a._initialLoad,e.load&&e.load.call(a,y))},Ct=nt;for(;N--;)x[N].addEventListener("load",nt,lt),x[N].addEventListener("error",Ct,lt)}else e.load&&Promise.resolve(1).then(()=>e.load.call(this,y,m))}e.connect&&e.connect.call(this,y,m)},e.disconnect&&(l.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[L],this[c])}),window.console&&window.console.log("%c<"+(u?u+" is="+s:s)+">%c "+i,"color: #3a8ab0; font-weight: 600;","color: #888888; font-weight: 400;"),window.customElements.define(s,l,u&&{extends:u}),u&&!ft&&document.querySelectorAll('[is="'+s+'"]').forEach(a=>{h&&ct(a,h);let y=e.construct&&e.construct.length>pt?dt(a,e,r||e.stylesheet):void 0;e.construct&&e.construct.call(a,y);let m;for(m in g){let x=a.attributes[m];x&&g[m].call(a,x.value)}e.connect&&e.connect.apply(a)}),l}function ht(t,e){t.remove&&t.remove(e);let o;for(;(o=t.indexOf(e))!==-1;)t.splice(o,1);return t}var Re=f(ht,!0);function X(t){return t&&t[Symbol.iterator]}var Kt=Object.assign;function Zt(t){return t.stop?t.stop():t()}function k(){}Kt(k.prototype,{stop:function(){let t=this.stopables;return this.stopables=void 0,t&&t.forEach(Zt),this},done:function(t){return(this.stopables||(this.stopables=[])).push(t),this}});var v=Object.assign,H=Object.create;function mt(t,e){t[0]=e,e.done(t)}function S(t,e){t&&t.push(e)}function J(t){k.prototype.stop.apply(t);let e=-1,o;for(;o=t[++e];)t[e]=void 0,o.stop()}function d(t){this.input=t}v(d.prototype,k.prototype,{push:function(t){S(this[0],t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with .broadcast().");return this[0]=t,t.done(this),this.input.pipe(this),t},map:function(t){return new wt(this,t)},filter:function(t){return new gt(this,t)},split:function(t){return new bt(this,t)},flatMap:function(t){return new yt(this,t)},slice:function(t,e){return new Y(this,t,e)},take:function(t){return console.warn(".take(a) superseded by .slice(0, a)"),new Y(this,0,t)},each:function(t){return this.pipe(new Et(t))},reduce:function(t,e){return this.pipe(new vt(t,e)).value},scan:function(t,e){return new xt(this,t,e)},stop:function(){return J(this),this}});function wt(t,e){this.input=t,this.fn=e}wt.prototype=v(H(d.prototype),{push:function(e){let r=this.fn(e);r!==void 0&&S(this[0],r)}});function gt(t,e){this.input=t,this.fn=e}gt.prototype=v(H(d.prototype),{push:function(e){this.fn(e)&&S(this[0],e)}});function yt(t,e){this.input=t,this.fn=e}yt.prototype=v(H(d.prototype),{push:function(e){let r=this.fn(e);if(r!==void 0)if(X(r))for(let i of r)S(this[0],i);else r.pipe&&this.done(r.each(i=>S(this[0],i)))}});function bt(t,e){this.input=t,this.chunk=[],typeof n=="number"?this.n=e:this.fn=e}bt.prototype=v(H(d.prototype),{fn:function(){return this.chunk.length===this.n},push:function(e){let o=this.chunk;this.fn(e)?(S(this[0],o),this.chunk=[]):o.push(e)}});function Y(t,e,o=1/0){this.input=t,this.index=-e,this.indexEnd=e+o}Y.prototype=v(H(d.prototype),{push:function(e){++this.index>0&&this[0].push(e),this.index===this.indexEnd&&this.stop()}});function vt(t,e){this.fn=t,this.value=e,this.i=0}vt.prototype=v(H(d.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function xt(t,e,o){this.input=t,this.fn=e,this.value=o}xt.prototype=v(H(d.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function Et(t){this.push=t}Et.prototype=v(H(d.prototype),{each:null,reduce:null,pipe:null});var te=Object.assign,ee=/\s+/,j={fullscreenchange:M(()=>"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"mozFullScreenElement"in document?"mozfullscreenchange":"msFullscreenElement"in document?"MSFullscreenChange":"fullscreenchange")},St=0;window.addEventListener("click",t=>St=t.timeStamp);function ne(t,e){return t.node.addEventListener(j[e]?j[e]():e,t,t.options),t}function oe(t,e){return t.node.removeEventListener(j[e]?j[e]():e,t),t}function Ht(t,e,o){this.types=t.split(ee),this.options=e,this.node=o,this.select=e&&e.select}te(Ht.prototype,{pipe:function(t){mt(this,t),this.types.reduce(ne,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=St)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}S(this[0],t)}},stop:function(){this.types.reduce(oe,this),J(this[0])}});function F(t,e){let o;return typeof t=="object"&&(o=t,t=o.type),new d(new Ht(t,o,e))}function K(t,e){let o=t.split(/\s*,\s*/),r=o.join(" {} ")+" {}",i=b("style",r);return e.appendChild(i),o.map((s,u)=>i.sheet.cssRules[u].style)}function re(t,e){let o;for(o in t)if(t[o]!==e[o])return!1;return!0}var Z=f(re,!0);var ie=Object.assign;function V(t){if(!V.prototype.isPrototypeOf(this))return new V(t);this.handlers=[],t&&(this.handleEvent=function(e){let o=t(e);return o===void 0?void 0:this.push(o)})}ie(V.prototype,{on:function(t){if(!arguments.length)throw new Error("Cannot pass `"+t+"` to distributor.on()");if(this.handlers.find(Z(arguments)))throw new Error(arguments.length===1?"Distributor: function "+arguments[0].name+"() already bound":"Distributor: object."+arguments[0]+"() already bound");return this.handlers.push(arguments),this},off:function(t){let e=this.handlers.findIndex(Z(arguments));return e===-1?this:(this.handlers.splice(e,1),this)},push:function(t){for(var e=-1,o,r,i;r=this.handlers[++e];)i=r.length===1?r[0].apply(this,arguments):r[1][r[0]].apply(r[1],arguments),o=o===void 0?i:i===void 0?o:o+i;return o},handleEvent:function(t){return this.push(t)}});function tt(t){return typeof t}var se=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function et(t){return function(o){if(typeof o=="number")return o;var r=se.exec(o);if(!r||!t[r[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+o+'" (accepted units '+Object.keys(t).join(", ")+")");return r?t.catch(parseFloat(r[1]),r[2]):t.catch(parseFloat(o))}return t[r[2]||""](parseFloat(r[1]))}}var ae=/px$/,Tt={"transform:translateX":function(t){var e=P("transform",t);if(!e||e==="none")return 0;var o=G(e);return parseFloat(o[4])},"transform:translateY":function(t){var e=P("transform",t);if(!e||e==="none")return 0;var o=G(e);return parseFloat(o[5])},"transform:scale":function(t){var e=P("transform",t);if(!e||e==="none")return 0;var o=G(e),r=parseFloat(o[0]),i=parseFloat(o[1]);return Math.sqrt(r*r+i*i)},"transform:rotate":function(t){var e=P("transform",t);if(!e||e==="none")return 0;var o=G(e),r=parseFloat(o[0]),i=parseFloat(o[1]);return Math.atan2(i,r)}};function G(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function P(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function U(t,e){if(Tt[t])return Tt[t](e);var o=P(t,e);return typeof o=="string"&&ae.test(o)?parseFloat(o):o}var I,R;function ue(){if(!I){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",I=U("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return I}function ce(){return R||(R=U("font-size",document.documentElement)),R}window.addEventListener("resize",()=>{I=void 0,R=void 0});var D=w(tt,{number:E,string:et({px:E,em:t=>ue()*t,rem:t=>ce()*t,vw:t=>window.innerWidth*t/100,vh:t=>window.innerHeight*t/100,vmin:t=>window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100,vmax:t=>window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100})});var le=Object.assign;var Lt={mode:"closed",focusable:!0,construct:function(t){let e=K(":host",t)[0],o=b("slot",{part:"content"}),r=b("slot",{name:"summary"}),i=b("button",{type:"button",html:"Open"});r.append(i),t.append(r,o);let s=F("slotchange",o);F("click",r).each(u=>this.open=!this.open),le(O(this),{button:i,changes:s,element:this,slot:o,style:e})}};var pe=Object.assign,B={bubbles:!0,cancelable:!0};function W(t,e){var h;let o=B,r,i,s,u,C,g;return typeof t=="object"?(h=t,{type:t,detail:i,bubbles:s,cancelable:u,composed:C}=h,r=rt(h,["type","detail","bubbles","cancelable","composed"]),g=pe(new CustomEvent(t,{detail:i,bubbles:s||B.bubbles,cancelable:u||B.cancelable,composed:C||B.composed}),r)):g=new CustomEvent(t,B),e.dispatchEvent(g)}var Mn=f(W,!0);function fe(t,e){let o=e.scrollHeight,r=getComputedStyle(e),i=D(r.getPropertyValue("padding-top")||0),s=D(r.getPropertyValue("padding-bottom")||0);F("transitionend",e).slice(0,1).each(u=>e.style.maxHeight=""),e.style.maxHeight=i+o+s+"px",t.setAttribute("open","")}function de(t,e){let o=e.scrollHeight,r=getComputedStyle(e),i=D(r.getPropertyValue("padding-bottom")||0),s=D(r.getPropertyValue("margin-bottom")||0);e.style.transition="none",e.style.maxHeight=o+"px",e.style.paddingBottom=i+"px",e.style.marginBottom=s+"px",t.removeAttribute("open"),requestAnimationFrame(()=>{e.style.transition="",e.style.maxHeight="",e.style.paddingBottom="",e.style.marginBottom=""})}var Mt={open:{attribute:function(t){this.open=t!==null},get:function(){return O(this).open},set:function(t){let e=O(this),{button:o,slot:r,style:i}=e;!!t!==e.open&&(t?(e.open=!0,fe(this,r),W("overflow-activate",this)):(e.open=!1,de(this,r),W("overflow-deactivate",this)))}}};var he=window.detailsToggleStylesheet||import.meta.url.replace(/\/[^\/]*([?#].*)?$/,"/")+"shadow.css",jn=Q("<details-toggle>",Lt,Mt,he);export{jn as default};
