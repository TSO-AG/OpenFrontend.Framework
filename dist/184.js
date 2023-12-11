"use strict";(self.webpackChunkopenfrontend_framework=self.webpackChunkopenfrontend_framework||[]).push([[184],{1184:function(e,t,n){n.d(t,{Z:function(){return f}});const r=new Map;var o={set(e,t,n){r.has(e)||r.set(e,new Map);const o=r.get(e);o.has(t)||0===o.size?o.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)},get(e,t){return r.has(e)&&r.get(e).get(t)||null},remove(e,t){if(!r.has(e))return;const n=r.get(e);n.delete(t),0===n.size&&r.delete(e)}},s=n(2930);function i(e){if("true"===e)return!0;if("false"===e)return!1;if(e===Number(e).toString())return Number(e);if(""===e||"null"===e)return null;if("string"!=typeof e)return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function u(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}var c={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${u(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${u(t)}`)},getDataAttributes(e){if(!e)return{};const t={},n=Object.keys(e.dataset).filter((e=>e.startsWith("bs")&&!e.startsWith("bsConfig")));for(const r of n){let n=r.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),t[n]=i(e.dataset[r])}return t},getDataAttribute(e,t){return i(e.getAttribute(`data-bs-${u(t)}`))}},a=n(4147);var l=class{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=(0,a.kK)(t)?c.getDataAttribute(t,"config"):{};return{...this.constructor.Default,..."object"==typeof n?n:{},...(0,a.kK)(t)?c.getDataAttributes(t):{},..."object"==typeof e?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,r]of Object.entries(t)){const t=e[n],o=(0,a.kK)(t)?"element":(0,a.Fy)(t);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${r}".`)}}};var f=class extends l{constructor(e,t){super(),(e=(0,a.sb)(e))&&(this._element=e,this._config=this._getConfig(t),o.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.remove(this._element,this.constructor.DATA_KEY),s.Z.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){(0,a.e0)(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return o.get((0,a.sb)(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"==typeof t?t:null)}static get VERSION(){return"5.3.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}},2930:function(e,t,n){var r=n(4147);const o=/[^.]*(?=\..*)\.|.*/,s=/\..*/,i=/::\d+$/,u={};let c=1;const a={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function f(e,t){return t&&`${t}::${c++}`||e.uidEvent||c++}function d(e){const t=f(e);return e.uidEvent=t,u[t]=u[t]||{},u[t]}function g(e,t,n=null){return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===n))}function p(e,t,n){const r="string"==typeof t,o=r?n:t||n;let s=y(e);return l.has(s)||(s=e),[r,o,s]}function h(e,t,n,r,s){if("string"!=typeof t||!e)return;let[i,u,c]=p(t,n,r);if(t in a){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};u=e(u)}const l=d(e),h=l[c]||(l[c]={}),b=g(h,u,i?n:null);if(b)return void(b.oneOff=b.oneOff&&s);const m=f(u,t.replace(o,"")),y=i?function(e,t,n){return function r(o){const s=e.querySelectorAll(t);for(let{target:i}=o;i&&i!==this;i=i.parentNode)for(const u of s)if(u===i)return E(o,{delegateTarget:i}),r.oneOff&&v.off(e,o.type,t,n),n.apply(i,[o])}}(e,n,u):function(e,t){return function n(r){return E(r,{delegateTarget:e}),n.oneOff&&v.off(e,r.type,t),t.apply(e,[r])}}(e,u);y.delegationSelector=i?n:null,y.callable=u,y.oneOff=s,y.uidEvent=m,h[m]=y,e.addEventListener(c,y,i)}function b(e,t,n,r,o){const s=g(t[n],r,o);s&&(e.removeEventListener(n,s,Boolean(o)),delete t[n][s.uidEvent])}function m(e,t,n,r){const o=t[n]||{};for(const[s,i]of Object.entries(o))s.includes(r)&&b(e,t,n,i.callable,i.delegationSelector)}function y(e){return e=e.replace(s,""),a[e]||e}const v={on(e,t,n,r){h(e,t,n,r,!1)},one(e,t,n,r){h(e,t,n,r,!0)},off(e,t,n,r){if("string"!=typeof t||!e)return;const[o,s,u]=p(t,n,r),c=u!==t,a=d(e),l=a[u]||{},f=t.startsWith(".");if(void 0===s){if(f)for(const n of Object.keys(a))m(e,a,n,t.slice(1));for(const[n,r]of Object.entries(l)){const o=n.replace(i,"");c&&!t.includes(o)||b(e,a,u,r.callable,r.delegationSelector)}}else{if(!Object.keys(l).length)return;b(e,a,u,s,o?n:null)}},trigger(e,t,n){if("string"!=typeof t||!e)return null;const o=(0,r.KF)();let s=null,i=!0,u=!0,c=!1;t!==y(t)&&o&&(s=o.Event(t,n),o(e).trigger(s),i=!s.isPropagationStopped(),u=!s.isImmediatePropagationStopped(),c=s.isDefaultPrevented());const a=E(new Event(t,{bubbles:i,cancelable:!0}),n);return c&&a.preventDefault(),u&&e.dispatchEvent(a),a.defaultPrevented&&s&&s.preventDefault(),a}};function E(e,t={}){for(const[n,r]of Object.entries(t))try{e[n]=r}catch{Object.defineProperty(e,n,{configurable:!0,get(){return r}})}return e}t.Z=v},4147:function(e,t,n){n.d(t,{Fy:function(){return s},KF:function(){return l},e0:function(){return p},kK:function(){return i},pF:function(){return d},pK:function(){return a},pn:function(){return c},rV:function(){return o},sb:function(){return u}});const r="transitionend",o=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,((e,t)=>`#${CSS.escape(t)}`))),e),s=e=>null==e?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),i=e=>!(!e||"object"!=typeof e)&&(void 0!==e.jquery&&(e=e[0]),void 0!==e.nodeType),u=e=>i(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?document.querySelector(o(e)):null,c=e=>{if(!i(e)||0===e.getClientRects().length)return!1;const t="visible"===getComputedStyle(e).getPropertyValue("visibility"),n=e.closest("details:not([open])");if(!n)return t;if(n!==e){const t=e.closest("summary");if(t&&t.parentNode!==n)return!1;if(null===t)return!1}return t},a=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||(void 0!==e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),l=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],d=e=>{var t;t=()=>{const t=l();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const e of f)e()})),f.push(t)):t()},g=(e,t=[],n=e)=>"function"==typeof e?e(...t):n,p=(e,t,n=!0)=>{if(!n)return void g(e);const o=(e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),o=Number.parseFloat(n);return r||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(t)+Number.parseFloat(n))):0})(t)+5;let s=!1;const i=({target:n})=>{n===t&&(s=!0,t.removeEventListener(r,i),g(e))};t.addEventListener(r,i),setTimeout((()=>{s||t.dispatchEvent(new Event(r))}),o)}}}]);