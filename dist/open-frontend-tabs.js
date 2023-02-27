/*! For license information please see open-frontend-tabs.js.LICENSE.txt */
(self.webpackChunkopenfrontend_framework=self.webpackChunkopenfrontend_framework||[]).push([[406],{6385:(t,e,n)=>{"use strict";n.r(e);n(8471)},5695:function(t,e,n){t.exports=function(t,e,n,r){"use strict";const o=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},i=o(t),s=o(n),l=o(r),a="5.2.3";class u extends l.default{constructor(t,n){super(),(t=e.getElement(t))&&(this._element=t,this._config=this._getConfig(n),i.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.default.remove(this._element,this.constructor.DATA_KEY),s.default.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,n,r=!0){e.executeAfterTransition(t,n,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return i.default.get(e.getElement(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return a}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}return u}(n(493),n(4072),n(9286),n(4705))},493:function(t){t.exports=function(){"use strict";const t=new Map;return{set(e,n,r){t.has(e)||t.set(e,new Map);const o=t.get(e);o.has(n)||0===o.size?o.set(n,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get:(e,n)=>t.has(e)&&t.get(e).get(n)||null,remove(e,n){if(!t.has(e))return;const r=t.get(e);r.delete(n),0===r.size&&t.delete(e)}}}()},9286:function(t,e,n){t.exports=function(t){"use strict";const e=/[^.]*(?=\..*)\.|.*/,n=/\..*/,r=/::\d+$/,o={};let i=1;const s={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function a(t,e){return e&&`${e}::${i++}`||t.uidEvent||i++}function u(t){const e=a(t);return t.uidEvent=e,o[e]=o[e]||{},o[e]}function c(t,e){return function n(r){return E(r,{delegateTarget:t}),n.oneOff&&y.off(t,r.type,e),e.apply(t,[r])}}function f(t,e,n){return function r(o){const i=t.querySelectorAll(e);for(let{target:s}=o;s&&s!==this;s=s.parentNode)for(const l of i)if(l===s)return E(o,{delegateTarget:s}),r.oneOff&&y.off(t,o.type,e,n),n.apply(s,[o])}}function d(t,e,n=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===n))}function g(t,e,n){const r="string"==typeof e,o=r?n:e||n;let i=m(t);return l.has(i)||(i=t),[r,o,i]}function h(t,n,r,o,i){if("string"!=typeof n||!t)return;let[l,h,p]=g(n,r,o);if(n in s){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};h=t(h)}const b=u(t),m=b[p]||(b[p]={}),y=d(m,h,l?r:null);if(y)return void(y.oneOff=y.oneOff&&i);const E=a(h,n.replace(e,"")),_=l?f(t,r,h):c(t,h);_.delegationSelector=l?r:null,_.callable=h,_.oneOff=i,_.uidEvent=E,m[E]=_,t.addEventListener(p,_,l)}function p(t,e,n,r,o){const i=d(e[n],r,o);i&&(t.removeEventListener(n,i,Boolean(o)),delete e[n][i.uidEvent])}function b(t,e,n,r){const o=e[n]||{};for(const i of Object.keys(o))if(i.includes(r)){const r=o[i];p(t,e,n,r.callable,r.delegationSelector)}}function m(t){return t=t.replace(n,""),s[t]||t}const y={on(t,e,n,r){h(t,e,n,r,!1)},one(t,e,n,r){h(t,e,n,r,!0)},off(t,e,n,o){if("string"!=typeof e||!t)return;const[i,s,l]=g(e,n,o),a=l!==e,c=u(t),f=c[l]||{},d=e.startsWith(".");if(void 0===s){if(d)for(const n of Object.keys(c))b(t,c,n,e.slice(1));for(const n of Object.keys(f)){const o=n.replace(r,"");if(!a||e.includes(o)){const e=f[n];p(t,c,l,e.callable,e.delegationSelector)}}}else{if(!Object.keys(f).length)return;p(t,c,l,s,i?n:null)}},trigger(e,n,r){if("string"!=typeof n||!e)return null;const o=t.getjQuery();let i=null,s=!0,l=!0,a=!1;n!==m(n)&&o&&(i=o.Event(n,r),o(e).trigger(i),s=!i.isPropagationStopped(),l=!i.isImmediatePropagationStopped(),a=i.isDefaultPrevented());let u=new Event(n,{bubbles:s,cancelable:!0});return u=E(u,r),a&&u.preventDefault(),l&&e.dispatchEvent(u),u.defaultPrevented&&i&&i.preventDefault(),u}};function E(t,e){for(const[n,r]of Object.entries(e||{}))try{t[n]=r}catch(e){Object.defineProperty(t,n,{configurable:!0,get:()=>r})}return t}return y}(n(4072))},3175:function(t){t.exports=function(){"use strict";function t(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function e(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}return{setDataAttribute(t,n,r){t.setAttribute(`data-bs-${e(n)}`,r)},removeDataAttribute(t,n){t.removeAttribute(`data-bs-${e(n)}`)},getDataAttributes(e){if(!e)return{};const n={},r=Object.keys(e.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const o of r){let r=o.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),n[r]=t(e.dataset[o])}return n},getDataAttribute:(n,r)=>t(n.getAttribute(`data-bs-${e(r)}`))}}()},8737:function(t,e,n){t.exports=function(t){"use strict";return{find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let r=t.parentNode.closest(e);for(;r;)n.push(r),r=r.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(n,e).filter((e=>!t.isDisabled(e)&&t.isVisible(e)))}}}(n(4072))},8471:function(t,e,n){t.exports=function(t,e,n,r){"use strict";const o=t=>t&&"object"==typeof t&&"default"in t?t:{default:t},i=o(e),s=o(n),l=o(r),a="tab",u=".bs.tab",c=`hide${u}`,f=`hidden${u}`,d=`show${u}`,g=`shown${u}`,h=`click${u}`,p=`keydown${u}`,b=`load${u}`,m="ArrowLeft",y="ArrowRight",E="ArrowUp",_="ArrowDown",A="active",v="fade",w="show",O="dropdown",C=".dropdown-toggle",D=".dropdown-menu",N=":not(.dropdown-toggle)",S='.list-group, .nav, [role="tablist"]',T=".nav-item, .list-group-item",x='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',$=`.nav-link${N}, .list-group-item${N}, [role="tab"]${N}, ${x}`,j=`.${A}[data-bs-toggle="tab"], .${A}[data-bs-toggle="pill"], .${A}[data-bs-toggle="list"]`;class I extends l.default{constructor(t){super(t),this._parent=this._element.closest(S),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),i.default.on(this._element,p,(t=>this._keydown(t))))}static get NAME(){return a}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),n=e?i.default.trigger(e,c,{relatedTarget:t}):null;i.default.trigger(t,d,{relatedTarget:e}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(e,n){if(!e)return;e.classList.add(A),this._activate(t.getElementFromSelector(e));const r=()=>{"tab"===e.getAttribute("role")?(e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),i.default.trigger(e,g,{relatedTarget:n})):e.classList.add(w)};this._queueCallback(r,e,e.classList.contains(v))}_deactivate(e,n){if(!e)return;e.classList.remove(A),e.blur(),this._deactivate(t.getElementFromSelector(e));const r=()=>{"tab"===e.getAttribute("role")?(e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),i.default.trigger(e,f,{relatedTarget:n})):e.classList.remove(w)};this._queueCallback(r,e,e.classList.contains(v))}_keydown(e){if(![m,y,E,_].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=[y,_].includes(e.key),r=t.getNextActiveElement(this._getChildren().filter((e=>!t.isDisabled(e))),e.target,n,!0);r&&(r.focus({preventScroll:!0}),I.getOrCreateInstance(r).show())}_getChildren(){return s.default.find($,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",e),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(e){const n=t.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`#${e.id}`))}_toggleDropDown(t,e){const n=this._getOuterElement(t);if(!n.classList.contains(O))return;const r=(t,r)=>{const o=s.default.findOne(t,n);o&&o.classList.toggle(r,e)};r(C,A),r(D,w),n.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,n){t.hasAttribute(e)||t.setAttribute(e,n)}_elemIsActive(t){return t.classList.contains(A)}_getInnerElement(t){return t.matches($)?t:s.default.findOne($,t)}_getOuterElement(t){return t.closest(T)||t}static jQueryInterface(t){return this.each((function(){const e=I.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}return i.default.on(document,h,x,(function(e){["A","AREA"].includes(this.tagName)&&e.preventDefault(),t.isDisabled(this)||I.getOrCreateInstance(this).show()})),i.default.on(window,b,(()=>{for(const t of s.default.find(j))I.getOrCreateInstance(t)})),t.defineJQueryPlugin(I),I}(n(4072),n(9286),n(8737),n(5695))},4705:function(t,e,n){t.exports=function(t,e){"use strict";const n=(t=>t&&"object"==typeof t&&"default"in t?t:{default:t})(e);class r{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(e,r){const o=t.isElement(r)?n.default.getDataAttribute(r,"config"):{};return{...this.constructor.Default,..."object"==typeof o?o:{},...t.isElement(r)?n.default.getDataAttributes(r):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const r of Object.keys(n)){const o=n[r],i=e[r],s=t.isElement(i)?"element":t.toType(i);if(!new RegExp(o).test(s))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${o}".`)}}}return r}(n(4072),n(3175))},4072:function(t,e){!function(t){"use strict";const e=1e6,n=1e3,r="transitionend",o=t=>null==t?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),i=t=>{do{t+=Math.floor(Math.random()*e)}while(document.getElementById(t));return t},s=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},l=t=>{const e=s(t);return e&&document.querySelector(e)?e:null},a=t=>{const e=s(t);return e?document.querySelector(e):null},u=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:r}=window.getComputedStyle(t);const o=Number.parseFloat(e),i=Number.parseFloat(r);return o||i?(e=e.split(",")[0],r=r.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(r))*n):0},c=t=>{t.dispatchEvent(new Event(r))},f=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),d=t=>f(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(t):null,g=t=>{if(!f(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const e=t.closest("summary");if(e&&e.parentNode!==n)return!1;if(null===e)return!1}return e},h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),p=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?p(t.parentNode):null},b=()=>{},m=t=>{t.offsetHeight},y=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,E=[],_=t=>{"loading"===document.readyState?(E.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of E)t()})),E.push(t)):t()},A=()=>"rtl"===document.documentElement.dir,v=t=>{_((()=>{const e=y();if(e){const n=t.NAME,r=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=r,t.jQueryInterface)}}))},w=t=>{"function"==typeof t&&t()},O=(t,e,n=!0)=>{if(!n)return void w(t);const o=5,i=u(e)+o;let s=!1;const l=({target:n})=>{n===e&&(s=!0,e.removeEventListener(r,l),w(t))};e.addEventListener(r,l),setTimeout((()=>{s||c(e)}),i)},C=(t,e,n,r)=>{const o=t.length;let i=t.indexOf(e);return-1===i?!n&&r?t[o-1]:t[0]:(i+=n?1:-1,r&&(i=(i+o)%o),t[Math.max(0,Math.min(i,o-1))])};t.defineJQueryPlugin=v,t.execute=w,t.executeAfterTransition=O,t.findShadowRoot=p,t.getElement=d,t.getElementFromSelector=a,t.getNextActiveElement=C,t.getSelectorFromElement=l,t.getTransitionDurationFromElement=u,t.getUID=i,t.getjQuery=y,t.isDisabled=h,t.isElement=f,t.isRTL=A,t.isVisible=g,t.noop=b,t.onDOMContentLoaded=_,t.reflow=m,t.toType=o,t.triggerTransitionEnd=c,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}(e)}}]);