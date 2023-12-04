var pl=Object.defineProperty;var fl=(e,t,s)=>t in e?pl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var et=(e,t,s)=>(fl(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();var fa=Object.defineProperty,ml=Object.defineProperties,gl=Object.getOwnPropertyDescriptor,bl=Object.getOwnPropertyDescriptors,Dr=Object.getOwnPropertySymbols,vl=Object.prototype.hasOwnProperty,yl=Object.prototype.propertyIsEnumerable,Bo=(e,t)=>{if(t=Symbol[e])return t;throw Error("Symbol."+e+" is not defined")},Pr=(e,t,s)=>t in e?fa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Je=(e,t)=>{for(var s in t||(t={}))vl.call(t,s)&&Pr(e,s,t[s]);if(Dr)for(var s of Dr(t))yl.call(t,s)&&Pr(e,s,t[s]);return e},Ri=(e,t)=>ml(e,bl(t)),d=(e,t,s,i)=>{for(var o=i>1?void 0:i?gl(t,s):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(o=(i?n(t,s,o):n(o))||o);return i&&o&&fa(t,s,o),o},_l=function(e,t){this[0]=e,this[1]=t},wl=e=>{var t=e[Bo("asyncIterator")],s=!1,i,o={};return t==null?(t=e[Bo("iterator")](),i=r=>o[r]=n=>t[r](n)):(t=t.call(e),i=r=>o[r]=n=>{if(s){if(s=!1,r==="throw")throw n;return n}return s=!0,{done:!1,value:new _l(new Promise(l=>{var a=t[r](n);if(!(a instanceof Object))throw TypeError("Object expected");l(a)}),1)}}),o[Bo("iterator")]=()=>o,i("next"),"throw"in t?i("throw"):o.throw=r=>{throw r},"return"in t&&i("return"),o},hi=new WeakMap,pi=new WeakMap,fi=new WeakMap,Ro=new WeakSet,Qi=new WeakMap,ts=class{constructor(e,t){this.handleFormData=s=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!i&&!n&&typeof o=="string"&&o.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(l=>{s.formData.append(o,l.toString())}):s.formData.append(o,r.toString()))},this.handleFormSubmit=s=>{var i;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=hi.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Qi.set(this.host,[])},this.handleInteraction=s=>{const i=Qi.get(this.host);i.includes(s.type)||i.push(s.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const i of s)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Je({form:s=>{const i=s.form;if(i){const r=s.getRootNode().getElementById(i);if(r)return r}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var i;return(i=s.disabled)!=null?i:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,i)=>s.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Qi.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Qi.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,hi.has(this.form)?hi.get(this.form).add(this.host):hi.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),pi.has(this.form)||(pi.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),fi.has(this.form)||(fi.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=hi.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),pi.has(this.form)&&(this.form.reportValidity=pi.get(this.form),pi.delete(this.form)),fi.has(this.form)&&(this.form.checkValidity=fi.get(this.form),fi.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Ro.add(e):Ro.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const s=document.createElement("button");s.type=e,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",t&&(s.name=t.name,s.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&s.setAttribute(i,t.getAttribute(i))})),this.form.append(s),s.click(),s.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,s=!!Ro.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&s),t.toggleAttribute("data-user-valid",e&&s)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},ko=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),xl=Object.freeze(Ri(Je({},ko),{valid:!1,valueMissing:!0})),kl=Object.freeze(Ri(Je({},ko),{valid:!1,customError:!0}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=globalThis,br=oo.ShadowRoot&&(oo.ShadyCSS===void 0||oo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vr=Symbol(),Br=new WeakMap;let ma=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==vr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(br&&t===void 0){const i=s!==void 0&&s.length===1;i&&(t=Br.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Br.set(s,t))}return t}toString(){return this.cssText}};const $l=e=>new ma(typeof e=="string"?e:e+"",void 0,vr),X=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new ma(s,e,vr)},Cl=(e,t)=>{if(br)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const i=document.createElement("style"),o=oo.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,e.appendChild(i)}},Rr=br?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return $l(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sl,defineProperty:Al,getOwnPropertyDescriptor:zl,getOwnPropertyNames:El,getOwnPropertySymbols:Ll,getPrototypeOf:Tl}=Object,ls=globalThis,Vr=ls.trustedTypes,Ol=Vr?Vr.emptyScript:"",Vo=ls.reactiveElementPolyfillSupport,yi=(e,t)=>e,Zs={toAttribute(e,t){switch(t){case Boolean:e=e?Ol:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},yr=(e,t)=>!Sl(e,t),Fr={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:yr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ls.litPropertyMetadata??(ls.litPropertyMetadata=new WeakMap);class qs extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Fr){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,s);o!==void 0&&Al(this.prototype,t,o)}}static getPropertyDescriptor(t,s,i){const{get:o,set:r}=zl(this.prototype,t)??{get(){return this[s]},set(n){this[s]=n}};return{get(){return o==null?void 0:o.call(this)},set(n){const l=o==null?void 0:o.call(this);r.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fr}static _$Ei(){if(this.hasOwnProperty(yi("elementProperties")))return;const t=Tl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yi("properties"))){const s=this.properties,i=[...El(s),...Ll(s)];for(const o of i)this.createProperty(o,s[o])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[i,o]of s)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const o=this._$Eu(s,i);o!==void 0&&this._$Eh.set(o,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)s.unshift(Rr(o))}else t!==void 0&&s.push(Rr(t));return s}static _$Eu(t,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$E_)==null||s.delete(t)}_$ES(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Cl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EO(t,s){var r;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Zs).toAttribute(s,i.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,s){var r;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const n=i.getPropertyOptions(o),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:Zs;this._$Em=o,this[o]=l.fromAttribute(s,n.type),this._$Em=null}}requestUpdate(t,s,i,o=!1,r){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??yr)(o?r:this[t],s))return;this.C(t,s,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,n]of o)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],n)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(i=this._$E_)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(s)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$E_)==null||s.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EO(s,this[s]))),this._$ET()}updated(t){}firstUpdated(t){}}qs.elementStyles=[],qs.shadowRootOptions={mode:"open"},qs[yi("elementProperties")]=new Map,qs[yi("finalized")]=new Map,Vo==null||Vo({ReactiveElement:qs}),(ls.reactiveElementVersions??(ls.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=globalThis,co=_i.trustedTypes,Nr=co?co.createPolicy("lit-html",{createHTML:e=>e}):void 0,ga="$lit$",rs=`lit$${(Math.random()+"").slice(9)}$`,ba="?"+rs,Ml=`<${ba}>`,As=document,Li=()=>As.createComment(""),Ti=e=>e===null||typeof e!="object"&&typeof e!="function",va=Array.isArray,Il=e=>va(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Fo=`[ 	
\f\r]`,mi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hr=/-->/g,Ur=/>/g,ws=RegExp(`>|${Fo}(?:([^\\s"'>=/]+)(${Fo}*=${Fo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qr=/'/g,jr=/"/g,ya=/^(?:script|style|textarea|title)$/i,Dl=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),R=Dl(1),he=Symbol.for("lit-noChange"),Et=Symbol.for("lit-nothing"),Wr=new WeakMap,$s=As.createTreeWalker(As,129);function _a(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nr!==void 0?Nr.createHTML(t):t}const Pl=(e,t)=>{const s=e.length-1,i=[];let o,r=t===2?"<svg>":"",n=mi;for(let l=0;l<s;l++){const a=e[l];let c,h,u=-1,g=0;for(;g<a.length&&(n.lastIndex=g,h=n.exec(a),h!==null);)g=n.lastIndex,n===mi?h[1]==="!--"?n=Hr:h[1]!==void 0?n=Ur:h[2]!==void 0?(ya.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=ws):h[3]!==void 0&&(n=ws):n===ws?h[0]===">"?(n=o??mi,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?ws:h[3]==='"'?jr:qr):n===jr||n===qr?n=ws:n===Hr||n===Ur?n=mi:(n=ws,o=void 0);const f=n===ws&&e[l+1].startsWith("/>")?" ":"";r+=n===mi?a+Ml:u>=0?(i.push(c),a.slice(0,u)+ga+a.slice(u)+rs+f):a+rs+(u===-2?l:f)}return[_a(e,r+(e[s]||"<?>")+(t===2?"</svg>":"")),i]};class Oi{constructor({strings:t,_$litType$:s},i){let o;this.parts=[];let r=0,n=0;const l=t.length-1,a=this.parts,[c,h]=Pl(t,s);if(this.el=Oi.createElement(c,i),$s.currentNode=this.el.content,s===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=$s.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const u of o.getAttributeNames())if(u.endsWith(ga)){const g=h[n++],f=o.getAttribute(u).split(rs),m=/([.?@])?(.*)/.exec(g);a.push({type:1,index:r,name:m[2],strings:f,ctor:m[1]==="."?Rl:m[1]==="?"?Vl:m[1]==="@"?Fl:$o}),o.removeAttribute(u)}else u.startsWith(rs)&&(a.push({type:6,index:r}),o.removeAttribute(u));if(ya.test(o.tagName)){const u=o.textContent.split(rs),g=u.length-1;if(g>0){o.textContent=co?co.emptyScript:"";for(let f=0;f<g;f++)o.append(u[f],Li()),$s.nextNode(),a.push({type:2,index:++r});o.append(u[g],Li())}}}else if(o.nodeType===8)if(o.data===ba)a.push({type:2,index:r});else{let u=-1;for(;(u=o.data.indexOf(rs,u+1))!==-1;)a.push({type:7,index:r}),u+=rs.length-1}r++}}static createElement(t,s){const i=As.createElement("template");return i.innerHTML=t,i}}function Qs(e,t,s=e,i){var n,l;if(t===he)return t;let o=i!==void 0?(n=s._$Co)==null?void 0:n[i]:s._$Cl;const r=Ti(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),r===void 0?o=void 0:(o=new r(e),o._$AT(e,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=o:s._$Cl=o),o!==void 0&&(t=Qs(e,o._$AS(e,t.values),o,i)),t}class Bl{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??As).importNode(s,!0);$s.currentNode=o;let r=$s.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new Vi(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Nl(r,this,t)),this._$AV.push(c),a=i[++l]}n!==(a==null?void 0:a.index)&&(r=$s.nextNode(),n++)}return $s.currentNode=As,o}p(t){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class Vi{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,i,o){this.type=2,this._$AH=Et,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Qs(this,t,s),Ti(t)?t===Et||t==null||t===""?(this._$AH!==Et&&this._$AR(),this._$AH=Et):t!==this._$AH&&t!==he&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Il(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Et&&Ti(this._$AH)?this._$AA.nextSibling.data=t:this.$(As.createTextNode(t)),this._$AH=t}g(t){var r;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Oi.createElement(_a(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(s);else{const n=new Bl(o,this),l=n.u(this.options);n.p(s),this.$(l),this._$AH=n}}_$AC(t){let s=Wr.get(t.strings);return s===void 0&&Wr.set(t.strings,s=new Oi(t)),s}T(t){va(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,o=0;for(const r of t)o===s.length?s.push(i=new Vi(this.k(Li()),this.k(Li()),this,this.options)):i=s[o],i._$AI(r),o++;o<s.length&&(this._$AR(i&&i._$AB.nextSibling,o),s.length=o)}_$AR(t=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class $o{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,o,r){this.type=1,this._$AH=Et,this._$AN=void 0,this.element=t,this.name=s,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Et}_$AI(t,s=this,i,o){const r=this.strings;let n=!1;if(r===void 0)t=Qs(this,t,s,0),n=!Ti(t)||t!==this._$AH&&t!==he,n&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=Qs(this,l[i+a],s,a),c===he&&(c=this._$AH[a]),n||(n=!Ti(c)||c!==this._$AH[a]),c===Et?t=Et:t!==Et&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}n&&!o&&this.O(t)}O(t){t===Et?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Rl extends $o{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===Et?void 0:t}}let Vl=class extends $o{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==Et)}};class Fl extends $o{constructor(t,s,i,o,r){super(t,s,i,o,r),this.type=5}_$AI(t,s=this){if((t=Qs(this,t,s,0)??Et)===he)return;const i=this._$AH,o=t===Et&&i!==Et||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Et&&(i===Et||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class Nl{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Qs(this,t)}}const No=_i.litHtmlPolyfillSupport;No==null||No(Oi,Vi),(_i.litHtmlVersions??(_i.litHtmlVersions=[])).push("3.1.0");const Hl=(e,t,s)=>{const i=(s==null?void 0:s.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const r=(s==null?void 0:s.renderBefore)??null;i._$litPart$=o=new Vi(t.insertBefore(Li(),r),r,void 0,s??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wi=class extends qs{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Hl(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return he}};var pa;wi._$litElement$=!0,wi.finalized=!0,(pa=globalThis.litElementHydrateSupport)==null||pa.call(globalThis,{LitElement:wi});const Ho=globalThis.litElementPolyfillSupport;Ho==null||Ho({LitElement:wi});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");var Q=X`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Ul=X`
  ${Q}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ql={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:yr},jl=(e=ql,t,s)=>{const{kind:i,metadata:o}=s;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(s.name,e),i==="accessor"){const{name:n}=s;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,e)},init(l){return l!==void 0&&this.C(n,void 0,e),l}}}if(i==="setter"){const{name:n}=s;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+i)};function b(e){return(t,s)=>typeof s=="object"?jl(e,t,s):((i,o,r)=>{const n=o.hasOwnProperty(r);return o.constructor.createProperty(r,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function it(e){return b({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wa(e){return(t,s)=>{const i=typeof t=="function"?t:t[s];Object.assign(i,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(e,t){return(s,i,o)=>{const r=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(e))??null};if(t){const{get:n,set:l}=typeof i=="object"?s:o??(()=>{const a=Symbol();return{get(){return this[a]},set(c){this[a]=c}}})();return Jo(s,i,{get(){let a=n.call(this);return a===void 0&&(a=r(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return Jo(s,i,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wl(e){return(t,s)=>Jo(t,s,{async get(){var i;return await this.updateComplete,((i=this.renderRoot)==null?void 0:i.querySelector(e))??null}})}var K=class extends wi{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,Je({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const i=customElements.get(e);if(!i){customElements.define(e,class extends t{},s);return}let o=" (unknown version)",r=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in i&&i.version&&(r=" v"+i.version),!(o&&r&&o===r)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${r} has already been registered.`)}};K.version="2.12.0";K.dependencies={};d([b()],K.prototype,"dir",2);d([b()],K.prototype,"lang",2);var _r=class extends K{render(){return R` <slot></slot> `}};_r.styles=Ul;_r.define("sl-visually-hidden");var Kl=X`
  ${Q}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Gl=X`
  ${Q}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const ds=Math.min,de=Math.max,uo=Math.round,Ji=Math.floor,us=e=>({x:e,y:e}),Yl={left:"right",right:"left",bottom:"top",top:"bottom"},Xl={start:"end",end:"start"};function tr(e,t,s){return de(e,ds(t,s))}function ei(e,t){return typeof e=="function"?e(t):e}function hs(e){return e.split("-")[0]}function si(e){return e.split("-")[1]}function xa(e){return e==="x"?"y":"x"}function wr(e){return e==="y"?"height":"width"}function Fi(e){return["top","bottom"].includes(hs(e))?"y":"x"}function xr(e){return xa(Fi(e))}function Zl(e,t,s){s===void 0&&(s=!1);const i=si(e),o=xr(e),r=wr(o);let n=o==="x"?i===(s?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(n=ho(n)),[n,ho(n)]}function Ql(e){const t=ho(e);return[er(e),t,er(t)]}function er(e){return e.replace(/start|end/g,t=>Xl[t])}function Jl(e,t,s){const i=["left","right"],o=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return s?t?o:i:t?i:o;case"left":case"right":return t?r:n;default:return[]}}function tc(e,t,s,i){const o=si(e);let r=Jl(hs(e),s==="start",i);return o&&(r=r.map(n=>n+"-"+o),t&&(r=r.concat(r.map(er)))),r}function ho(e){return e.replace(/left|right|bottom|top/g,t=>Yl[t])}function ec(e){return{top:0,right:0,bottom:0,left:0,...e}}function ka(e){return typeof e!="number"?ec(e):{top:e,right:e,bottom:e,left:e}}function po(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Kr(e,t,s){let{reference:i,floating:o}=e;const r=Fi(t),n=xr(t),l=wr(n),a=hs(t),c=r==="y",h=i.x+i.width/2-o.width/2,u=i.y+i.height/2-o.height/2,g=i[l]/2-o[l]/2;let f;switch(a){case"top":f={x:h,y:i.y-o.height};break;case"bottom":f={x:h,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:u};break;case"left":f={x:i.x-o.width,y:u};break;default:f={x:i.x,y:i.y}}switch(si(t)){case"start":f[n]-=g*(s&&c?-1:1);break;case"end":f[n]+=g*(s&&c?-1:1);break}return f}const sc=async(e,t,s)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:n}=s,l=r.filter(Boolean),a=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:e,floating:t,strategy:o}),{x:h,y:u}=Kr(c,i,a),g=i,f={},m=0;for(let p=0;p<l.length;p++){const{name:v,fn:_}=l[p],{x:w,y:$,data:k,reset:x}=await _({x:h,y:u,initialPlacement:i,placement:g,strategy:o,middlewareData:f,rects:c,platform:n,elements:{reference:e,floating:t}});if(h=w??h,u=$??u,f={...f,[v]:{...f[v],...k}},x&&m<=50){m++,typeof x=="object"&&(x.placement&&(g=x.placement),x.rects&&(c=x.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:h,y:u}=Kr(c,g,a)),p=-1;continue}}return{x:h,y:u,placement:g,strategy:o,middlewareData:f}};async function kr(e,t){var s;t===void 0&&(t={});const{x:i,y:o,platform:r,rects:n,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:g=!1,padding:f=0}=ei(t,e),m=ka(f),v=l[g?u==="floating"?"reference":"floating":u],_=po(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(v)))==null||s?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),w=u==="floating"?{...n.floating,x:i,y:o}:n.reference,$=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),k=await(r.isElement==null?void 0:r.isElement($))?await(r.getScale==null?void 0:r.getScale($))||{x:1,y:1}:{x:1,y:1},x=po(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:$,strategy:a}):w);return{top:(_.top-x.top+m.top)/k.y,bottom:(x.bottom-_.bottom+m.bottom)/k.y,left:(_.left-x.left+m.left)/k.x,right:(x.right-_.right+m.right)/k.x}}const ic=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:i,placement:o,rects:r,platform:n,elements:l,middlewareData:a}=t,{element:c,padding:h=0}=ei(e,t)||{};if(c==null)return{};const u=ka(h),g={x:s,y:i},f=xr(o),m=wr(f),p=await n.getDimensions(c),v=f==="y",_=v?"top":"left",w=v?"bottom":"right",$=v?"clientHeight":"clientWidth",k=r.reference[m]+r.reference[f]-g[f]-r.floating[m],x=g[f]-r.reference[f],A=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let M=A?A[$]:0;(!M||!await(n.isElement==null?void 0:n.isElement(A)))&&(M=l.floating[$]||r.floating[m]);const O=k/2-x/2,I=M/2-p[m]/2-1,V=ds(u[_],I),ct=ds(u[w],I),J=V,lt=M-p[m]-ct,ot=M/2-p[m]/2+O,W=tr(J,ot,lt),L=!a.arrow&&si(o)!=null&&ot!=W&&r.reference[m]/2-(ot<J?V:ct)-p[m]/2<0,nt=L?ot<J?ot-J:ot-lt:0;return{[f]:g[f]+nt,data:{[f]:W,centerOffset:ot-W-nt,...L&&{alignmentOffset:nt}},reset:L}}}),oc=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,i;const{placement:o,middlewareData:r,rects:n,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:p=!0,...v}=ei(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const _=hs(o),w=hs(l)===l,$=await(a.isRTL==null?void 0:a.isRTL(c.floating)),k=g||(w||!p?[ho(l)]:Ql(l));!g&&m!=="none"&&k.push(...tc(l,p,m,$));const x=[l,...k],A=await kr(t,v),M=[];let O=((i=r.flip)==null?void 0:i.overflows)||[];if(h&&M.push(A[_]),u){const J=Zl(o,n,$);M.push(A[J[0]],A[J[1]])}if(O=[...O,{placement:o,overflows:M}],!M.every(J=>J<=0)){var I,V;const J=(((I=r.flip)==null?void 0:I.index)||0)+1,lt=x[J];if(lt)return{data:{index:J,overflows:O},reset:{placement:lt}};let ot=(V=O.filter(W=>W.overflows[0]<=0).sort((W,L)=>W.overflows[1]-L.overflows[1])[0])==null?void 0:V.placement;if(!ot)switch(f){case"bestFit":{var ct;const W=(ct=O.map(L=>[L.placement,L.overflows.filter(nt=>nt>0).reduce((nt,tt)=>nt+tt,0)]).sort((L,nt)=>L[1]-nt[1])[0])==null?void 0:ct[0];W&&(ot=W);break}case"initialPlacement":ot=l;break}if(o!==ot)return{reset:{placement:ot}}}return{}}}};async function rc(e,t){const{placement:s,platform:i,elements:o}=e,r=await(i.isRTL==null?void 0:i.isRTL(o.floating)),n=hs(s),l=si(s),a=Fi(s)==="y",c=["left","top"].includes(n)?-1:1,h=r&&a?-1:1,u=ei(t,e);let{mainAxis:g,crossAxis:f,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),a?{x:f*h,y:g*c}:{x:g*c,y:f*h}}const nc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:s,y:i}=t,o=await rc(t,e);return{x:s+o.x,y:i+o.y,data:o}}}},ac=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:i,placement:o}=t,{mainAxis:r=!0,crossAxis:n=!1,limiter:l={fn:v=>{let{x:_,y:w}=v;return{x:_,y:w}}},...a}=ei(e,t),c={x:s,y:i},h=await kr(t,a),u=Fi(hs(o)),g=xa(u);let f=c[g],m=c[u];if(r){const v=g==="y"?"top":"left",_=g==="y"?"bottom":"right",w=f+h[v],$=f-h[_];f=tr(w,f,$)}if(n){const v=u==="y"?"top":"left",_=u==="y"?"bottom":"right",w=m+h[v],$=m-h[_];m=tr(w,m,$)}const p=l.fn({...t,[g]:f,[u]:m});return{...p,data:{x:p.x-s,y:p.y-i}}}}},Gr=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:s,rects:i,platform:o,elements:r}=t,{apply:n=()=>{},...l}=ei(e,t),a=await kr(t,l),c=hs(s),h=si(s),u=Fi(s)==="y",{width:g,height:f}=i.floating;let m,p;c==="top"||c==="bottom"?(m=c,p=h===(await(o.isRTL==null?void 0:o.isRTL(r.floating))?"start":"end")?"left":"right"):(p=c,m=h==="end"?"top":"bottom");const v=f-a[m],_=g-a[p],w=!t.middlewareData.shift;let $=v,k=_;if(u){const A=g-a.left-a.right;k=h||w?ds(_,A):A}else{const A=f-a.top-a.bottom;$=h||w?ds(v,A):A}if(w&&!h){const A=de(a.left,0),M=de(a.right,0),O=de(a.top,0),I=de(a.bottom,0);u?k=g-2*(A!==0||M!==0?A+M:de(a.left,a.right)):$=f-2*(O!==0||I!==0?O+I:de(a.top,a.bottom))}await n({...t,availableWidth:k,availableHeight:$});const x=await o.getDimensions(r.floating);return g!==x.width||f!==x.height?{reset:{rects:!0}}:{}}}};function ps(e){return $a(e)?(e.nodeName||"").toLowerCase():"#document"}function pe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function es(e){var t;return(t=($a(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function $a(e){return e instanceof Node||e instanceof pe(e).Node}function Ze(e){return e instanceof Element||e instanceof pe(e).Element}function Ne(e){return e instanceof HTMLElement||e instanceof pe(e).HTMLElement}function Yr(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof pe(e).ShadowRoot}function Ni(e){const{overflow:t,overflowX:s,overflowY:i,display:o}=ke(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+s)&&!["inline","contents"].includes(o)}function lc(e){return["table","td","th"].includes(ps(e))}function $r(e){const t=Cr(),s=ke(e);return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(s.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(s.contain||"").includes(i))}function cc(e){let t=Js(e);for(;Ne(t)&&!Co(t);){if($r(t))return t;t=Js(t)}return null}function Cr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Co(e){return["html","body","#document"].includes(ps(e))}function ke(e){return pe(e).getComputedStyle(e)}function So(e){return Ze(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Js(e){if(ps(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Yr(e)&&e.host||es(e);return Yr(t)?t.host:t}function Ca(e){const t=Js(e);return Co(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ne(t)&&Ni(t)?t:Ca(t)}function Mi(e,t,s){var i;t===void 0&&(t=[]),s===void 0&&(s=!0);const o=Ca(e),r=o===((i=e.ownerDocument)==null?void 0:i.body),n=pe(o);return r?t.concat(n,n.visualViewport||[],Ni(o)?o:[],n.frameElement&&s?Mi(n.frameElement):[]):t.concat(o,Mi(o,[],s))}function Sa(e){const t=ke(e);let s=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=Ne(e),r=o?e.offsetWidth:s,n=o?e.offsetHeight:i,l=uo(s)!==r||uo(i)!==n;return l&&(s=r,i=n),{width:s,height:i,$:l}}function Sr(e){return Ze(e)?e:e.contextElement}function Ks(e){const t=Sr(e);if(!Ne(t))return us(1);const s=t.getBoundingClientRect(),{width:i,height:o,$:r}=Sa(t);let n=(r?uo(s.width):s.width)/i,l=(r?uo(s.height):s.height)/o;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}const dc=us(0);function Aa(e){const t=pe(e);return!Cr()||!t.visualViewport?dc:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function uc(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==pe(e)?!1:t}function zs(e,t,s,i){t===void 0&&(t=!1),s===void 0&&(s=!1);const o=e.getBoundingClientRect(),r=Sr(e);let n=us(1);t&&(i?Ze(i)&&(n=Ks(i)):n=Ks(e));const l=uc(r,s,i)?Aa(r):us(0);let a=(o.left+l.x)/n.x,c=(o.top+l.y)/n.y,h=o.width/n.x,u=o.height/n.y;if(r){const g=pe(r),f=i&&Ze(i)?pe(i):i;let m=g.frameElement;for(;m&&i&&f!==g;){const p=Ks(m),v=m.getBoundingClientRect(),_=ke(m),w=v.left+(m.clientLeft+parseFloat(_.paddingLeft))*p.x,$=v.top+(m.clientTop+parseFloat(_.paddingTop))*p.y;a*=p.x,c*=p.y,h*=p.x,u*=p.y,a+=w,c+=$,m=pe(m).frameElement}}return po({width:h,height:u,x:a,y:c})}function hc(e){let{rect:t,offsetParent:s,strategy:i}=e;const o=Ne(s),r=es(s);if(s===r)return t;let n={scrollLeft:0,scrollTop:0},l=us(1);const a=us(0);if((o||!o&&i!=="fixed")&&((ps(s)!=="body"||Ni(r))&&(n=So(s)),Ne(s))){const c=zs(s);l=Ks(s),a.x=c.x+s.clientLeft,a.y=c.y+s.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-n.scrollLeft*l.x+a.x,y:t.y*l.y-n.scrollTop*l.y+a.y}}function pc(e){return Array.from(e.getClientRects())}function za(e){return zs(es(e)).left+So(e).scrollLeft}function fc(e){const t=es(e),s=So(e),i=e.ownerDocument.body,o=de(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=de(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let n=-s.scrollLeft+za(e);const l=-s.scrollTop;return ke(i).direction==="rtl"&&(n+=de(t.clientWidth,i.clientWidth)-o),{width:o,height:r,x:n,y:l}}function mc(e,t){const s=pe(e),i=es(e),o=s.visualViewport;let r=i.clientWidth,n=i.clientHeight,l=0,a=0;if(o){r=o.width,n=o.height;const c=Cr();(!c||c&&t==="fixed")&&(l=o.offsetLeft,a=o.offsetTop)}return{width:r,height:n,x:l,y:a}}function gc(e,t){const s=zs(e,!0,t==="fixed"),i=s.top+e.clientTop,o=s.left+e.clientLeft,r=Ne(e)?Ks(e):us(1),n=e.clientWidth*r.x,l=e.clientHeight*r.y,a=o*r.x,c=i*r.y;return{width:n,height:l,x:a,y:c}}function Xr(e,t,s){let i;if(t==="viewport")i=mc(e,s);else if(t==="document")i=fc(es(e));else if(Ze(t))i=gc(t,s);else{const o=Aa(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return po(i)}function Ea(e,t){const s=Js(e);return s===t||!Ze(s)||Co(s)?!1:ke(s).position==="fixed"||Ea(s,t)}function bc(e,t){const s=t.get(e);if(s)return s;let i=Mi(e,[],!1).filter(l=>Ze(l)&&ps(l)!=="body"),o=null;const r=ke(e).position==="fixed";let n=r?Js(e):e;for(;Ze(n)&&!Co(n);){const l=ke(n),a=$r(n);!a&&l.position==="fixed"&&(o=null),(r?!a&&!o:!a&&l.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Ni(n)&&!a&&Ea(e,n))?i=i.filter(h=>h!==n):o=l,n=Js(n)}return t.set(e,i),i}function vc(e){let{element:t,boundary:s,rootBoundary:i,strategy:o}=e;const n=[...s==="clippingAncestors"?bc(t,this._c):[].concat(s),i],l=n[0],a=n.reduce((c,h)=>{const u=Xr(t,h,o);return c.top=de(u.top,c.top),c.right=ds(u.right,c.right),c.bottom=ds(u.bottom,c.bottom),c.left=de(u.left,c.left),c},Xr(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function yc(e){return Sa(e)}function _c(e,t,s){const i=Ne(t),o=es(t),r=s==="fixed",n=zs(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const a=us(0);if(i||!i&&!r)if((ps(t)!=="body"||Ni(o))&&(l=So(t)),i){const c=zs(t,!0,r,t);a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}else o&&(a.x=za(o));return{x:n.left+l.scrollLeft-a.x,y:n.top+l.scrollTop-a.y,width:n.width,height:n.height}}function Zr(e,t){return!Ne(e)||ke(e).position==="fixed"?null:t?t(e):e.offsetParent}function La(e,t){const s=pe(e);if(!Ne(e))return s;let i=Zr(e,t);for(;i&&lc(i)&&ke(i).position==="static";)i=Zr(i,t);return i&&(ps(i)==="html"||ps(i)==="body"&&ke(i).position==="static"&&!$r(i))?s:i||cc(e)||s}const wc=async function(e){let{reference:t,floating:s,strategy:i}=e;const o=this.getOffsetParent||La,r=this.getDimensions;return{reference:_c(t,await o(s),i),floating:{x:0,y:0,...await r(s)}}};function xc(e){return ke(e).direction==="rtl"}const ro={convertOffsetParentRelativeRectToViewportRelativeRect:hc,getDocumentElement:es,getClippingRect:vc,getOffsetParent:La,getElementRects:wc,getClientRects:pc,getDimensions:yc,getScale:Ks,isElement:Ze,isRTL:xc};function kc(e,t){let s=null,i;const o=es(e);function r(){clearTimeout(i),s&&s.disconnect(),s=null}function n(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),r();const{left:c,top:h,width:u,height:g}=e.getBoundingClientRect();if(l||t(),!u||!g)return;const f=Ji(h),m=Ji(o.clientWidth-(c+u)),p=Ji(o.clientHeight-(h+g)),v=Ji(c),w={rootMargin:-f+"px "+-m+"px "+-p+"px "+-v+"px",threshold:de(0,ds(1,a))||1};let $=!0;function k(x){const A=x[0].intersectionRatio;if(A!==a){if(!$)return n();A?n(!1,A):i=setTimeout(()=>{n(!1,1e-7)},100)}$=!1}try{s=new IntersectionObserver(k,{...w,root:o.ownerDocument})}catch{s=new IntersectionObserver(k,w)}s.observe(e)}return n(!0),r}function $c(e,t,s,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=Sr(e),h=o||r?[...c?Mi(c):[],...Mi(t)]:[];h.forEach(_=>{o&&_.addEventListener("scroll",s,{passive:!0}),r&&_.addEventListener("resize",s)});const u=c&&l?kc(c,s):null;let g=-1,f=null;n&&(f=new ResizeObserver(_=>{let[w]=_;w&&w.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{f&&f.observe(t)})),s()}),c&&!a&&f.observe(c),f.observe(t));let m,p=a?zs(e):null;a&&v();function v(){const _=zs(e);p&&(_.x!==p.x||_.y!==p.y||_.width!==p.width||_.height!==p.height)&&s(),p=_,m=requestAnimationFrame(v)}return s(),()=>{h.forEach(_=>{o&&_.removeEventListener("scroll",s),r&&_.removeEventListener("resize",s)}),u&&u(),f&&f.disconnect(),f=null,a&&cancelAnimationFrame(m)}}const Cc=(e,t,s)=>{const i=new Map,o={platform:ro,...s},r={...o.platform,_c:i};return sc(e,t,{...o,platform:r})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Hi=e=>(...t)=>({_$litDirective$:e,values:t});let Ui=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=Hi(class extends Ui{constructor(e){var t;if(super(e),e.type!==Ve.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((i=this.st)!=null&&i.has(r))&&this.it.add(r);return this.render(t)}const s=e.element.classList;for(const r of this.it)r in t||(s.remove(r),this.it.delete(r));for(const r in t){const n=!!t[r];n===this.it.has(r)||(o=this.st)!=null&&o.has(r)||(n?(s.add(r),this.it.add(r)):(s.remove(r),this.it.delete(r)))}return he}});function Sc(e){return Ac(e)}function Uo(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ac(e){for(let t=e;t;t=Uo(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Uo(e);t;t=Uo(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||s.filter!=="none"||t.tagName==="BODY"))return t}return null}function zc(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e}var At=class extends K{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||zc(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=$c(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[nc({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Gr({apply:({rects:s})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${s.reference.width}px`:"",this.popup.style.height=o?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(oc({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(ac({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(Gr({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(ic({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>ro.getOffsetParent(s,Sc):ro.getOffsetParent;Cc(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ri(Je({},ro),{getOffsetParent:t})}).then(({x:s,y:i,middlewareData:o,placement:r})=>{const n=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${s}px`,top:`${i}px`}),this.arrow){const a=o.arrow.x,c=o.arrow.y;let h="",u="",g="",f="";if(this.arrowPlacement==="start"){const m=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?m:"",f=n?"":m}else if(this.arrowPlacement==="end"){const m=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":m,f=n?m:"",g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof a=="number"?`${a}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:g,left:f,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return R`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${st({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?R`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};At.styles=Gl;d([H(".popup")],At.prototype,"popup",2);d([H(".popup__arrow")],At.prototype,"arrowEl",2);d([b()],At.prototype,"anchor",2);d([b({type:Boolean,reflect:!0})],At.prototype,"active",2);d([b({reflect:!0})],At.prototype,"placement",2);d([b({reflect:!0})],At.prototype,"strategy",2);d([b({type:Number})],At.prototype,"distance",2);d([b({type:Number})],At.prototype,"skidding",2);d([b({type:Boolean})],At.prototype,"arrow",2);d([b({attribute:"arrow-placement"})],At.prototype,"arrowPlacement",2);d([b({attribute:"arrow-padding",type:Number})],At.prototype,"arrowPadding",2);d([b({type:Boolean})],At.prototype,"flip",2);d([b({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],At.prototype,"flipFallbackPlacements",2);d([b({attribute:"flip-fallback-strategy"})],At.prototype,"flipFallbackStrategy",2);d([b({type:Object})],At.prototype,"flipBoundary",2);d([b({attribute:"flip-padding",type:Number})],At.prototype,"flipPadding",2);d([b({type:Boolean})],At.prototype,"shift",2);d([b({type:Object})],At.prototype,"shiftBoundary",2);d([b({attribute:"shift-padding",type:Number})],At.prototype,"shiftPadding",2);d([b({attribute:"auto-size"})],At.prototype,"autoSize",2);d([b()],At.prototype,"sync",2);d([b({type:Object})],At.prototype,"autoSizeBoundary",2);d([b({attribute:"auto-size-padding",type:Number})],At.prototype,"autoSizePadding",2);var Ta=new Map,Ec=new WeakMap;function Lc(e){return e??{keyframes:[],options:{duration:0}}}function Qr(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Ct(e,t){Ta.set(e,Lc(t))}function Lt(e,t,s){const i=Ec.get(e);if(i!=null&&i[t])return Qr(i[t],s.dir);const o=Ta.get(t);return o?Qr(o,s.dir):{keyframes:[],options:{duration:0}}}function te(e,t){return new Promise(s=>{function i(o){o.target===e&&(e.removeEventListener(t,i),s())}e.addEventListener(t,i)})}function It(e,t,s){return new Promise(i=>{if((s==null?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Ri(Je({},s),{duration:Ar()?0:s.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function Jr(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Ar(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Rt(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{const i=requestAnimationFrame(s);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}function fo(e,t){return e.map(s=>Ri(Je({},s),{height:s.height==="auto"?`${t}px`:s.height}))}const sr=new Set,Tc=new MutationObserver(Da),Ws=new Map;let Oa=document.documentElement.dir||"ltr",Ma=document.documentElement.lang||navigator.language,ks;Tc.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ia(...e){e.map(t=>{const s=t.$code.toLowerCase();Ws.has(s)?Ws.set(s,Object.assign(Object.assign({},Ws.get(s)),t)):Ws.set(s,t),ks||(ks=t)}),Da()}function Da(){Oa=document.documentElement.dir||"ltr",Ma=document.documentElement.lang||navigator.language,[...sr.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Oc=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){sr.add(this.host)}hostDisconnected(){sr.delete(this.host)}dir(){return`${this.host.dir||Oa}`.toLowerCase()}lang(){return`${this.host.lang||Ma}`.toLowerCase()}getTranslationData(t){var s,i;const o=new Intl.Locale(t.replace(/_/g,"-")),r=o==null?void 0:o.language.toLowerCase(),n=(i=(s=o==null?void 0:o.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&i!==void 0?i:"",l=Ws.get(`${r}-${n}`),a=Ws.get(r);return{locale:o,language:r,region:n,primary:l,secondary:a}}exists(t,s){var i;const{primary:o,secondary:r}=this.getTranslationData((i=s.lang)!==null&&i!==void 0?i:this.lang());return s=Object.assign({includeFallback:!1},s),!!(o&&o[t]||r&&r[t]||s.includeFallback&&ks&&ks[t])}term(t,...s){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(o&&o[t])r=o[t];else if(ks&&ks[t])r=ks[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...s):r}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,s)}};var Pa={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ia(Pa);var Mc=Pa,xt=class extends Oc{};Ia(Mc);function F(e,t){const s=Je({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:r}=i,n=Array.isArray(e)?e:[e];i.update=function(l){n.forEach(a=>{const c=a;if(l.has(c)){const h=l.get(c),u=this[c];h!==u&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[o](h,u)}}),r.call(this,l)}}}var qt=class extends K{constructor(){super(),this.localize=new xt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=e=>{this.open&&!this.disabled&&e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=Jr(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=Jr(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Rt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Lt(this,"tooltip.show",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Rt(this.body);const{keyframes:e,options:t}=Lt(this,"tooltip.hide",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,te(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,te(this,"sl-after-hide")}render(){return R`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${st({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};qt.styles=Kl;qt.dependencies={"sl-popup":At};d([H("slot:not([name])")],qt.prototype,"defaultSlot",2);d([H(".tooltip__body")],qt.prototype,"body",2);d([H("sl-popup")],qt.prototype,"popup",2);d([b()],qt.prototype,"content",2);d([b()],qt.prototype,"placement",2);d([b({type:Boolean,reflect:!0})],qt.prototype,"disabled",2);d([b({type:Number})],qt.prototype,"distance",2);d([b({type:Boolean,reflect:!0})],qt.prototype,"open",2);d([b({type:Number})],qt.prototype,"skidding",2);d([b()],qt.prototype,"trigger",2);d([b({type:Boolean})],qt.prototype,"hoist",2);d([F("open",{waitUntilFirstUpdate:!0})],qt.prototype,"handleOpenChange",1);d([F(["content","distance","hoist","placement","skidding"])],qt.prototype,"handleOptionsChange",1);d([F("disabled")],qt.prototype,"handleDisabledChange",1);Ct("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Ct("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});qt.define("sl-tooltip");var Ic=X`
  ${Q}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,Dc=X`
  ${Q}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Pc=X`
  ${Q}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ls=(e="value")=>(t,s)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,n,l){var a;const c=i.getPropertyOptions(e),h=typeof c.attribute=="string"?c.attribute:e;if(r===h){const u=c.converter||Zs,f=(typeof u=="function"?u:(a=u==null?void 0:u.fromAttribute)!=null?a:Zs.fromAttribute)(l,c.type);this[e]!==f&&(this[s]=f)}o.call(this,r,n,l)}},Bc=X`
  ${Q}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,ir="";function tn(e){ir=e}function Rc(e=""){if(!ir){const t=[...document.getElementsByTagName("script")],s=t.find(i=>i.hasAttribute("data-shoelace"));if(s)tn(s.getAttribute("data-shoelace"));else{const i=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let o="";i&&(o=i.getAttribute("src")),tn(o.split("/").slice(0,-1).join("/"))}}return ir.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Vc={name:"default",resolver:e=>Rc(`assets/icons/${e}.svg`)},Fc=Vc,en={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Nc={name:"system",resolver:e=>e in en?`data:image/svg+xml,${encodeURIComponent(en[e])}`:""},Hc=Nc,Uc=[Fc,Hc],or=[];function qc(e){or.push(e)}function jc(e){or=or.filter(t=>t!==e)}function sn(e){return Uc.find(t=>t.name===e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wc=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,Ba=e=>e.strings===void 0,Kc={},Gc=(e,t=Kc)=>e._$AH=t;var gi=Symbol(),to=Symbol(),qo,jo=new Map,zt=class extends K{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let i;if(t!=null&&t.spriteSheet)return R`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?gi:to}catch{return to}try{const o=document.createElement("div");o.innerHTML=await i.text();const r=o.firstElementChild;if(((s=r==null?void 0:r.tagName)==null?void 0:s.toLowerCase())!=="svg")return gi;qo||(qo=new DOMParser);const l=qo.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):gi}catch{return gi}}connectedCallback(){super.connectedCallback(),qc(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),jc(this)}getIconSource(){const e=sn(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),i=s?sn(this.library):void 0;if(!t){this.svg=null;return}let o=jo.get(t);if(o||(o=this.resolveIcon(t,i),jo.set(t,o)),!this.initialRender)return;const r=await o;if(r===to&&jo.delete(t),t===this.getIconSource().url){if(Wc(r)){this.svg=r;return}switch(r){case to:case gi:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};zt.styles=Bc;d([it()],zt.prototype,"svg",2);d([b({reflect:!0})],zt.prototype,"name",2);d([b()],zt.prototype,"src",2);d([b()],zt.prototype,"label",2);d([b({reflect:!0})],zt.prototype,"library",2);d([F("label")],zt.prototype,"handleLabelChange",1);d([F(["name","src","library"])],zt.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=e=>e??Et;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Es=Hi(class extends Ui{constructor(e){if(super(e),e.type!==Ve.PROPERTY&&e.type!==Ve.ATTRIBUTE&&e.type!==Ve.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ba(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===he||t===Et)return t;const s=e.element,i=e.name;if(e.type===Ve.PROPERTY){if(t===s[i])return he}else if(e.type===Ve.BOOLEAN_ATTRIBUTE){if(!!t===s.hasAttribute(i))return he}else if(e.type===Ve.ATTRIBUTE&&s.getAttribute(i)===t+"")return he;return Gc(e),t}});var jt=class extends K{constructor(){super(...arguments),this.formControlController=new ts(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return R`
      <label
        part="base"
        class=${st({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${G(this.value)}
          .indeterminate=${Es(this.indeterminate)}
          .checked=${Es(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?R`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?R`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};jt.styles=Pc;jt.dependencies={"sl-icon":zt};d([H('input[type="checkbox"]')],jt.prototype,"input",2);d([it()],jt.prototype,"hasFocus",2);d([b()],jt.prototype,"title",2);d([b()],jt.prototype,"name",2);d([b()],jt.prototype,"value",2);d([b({reflect:!0})],jt.prototype,"size",2);d([b({type:Boolean,reflect:!0})],jt.prototype,"disabled",2);d([b({type:Boolean,reflect:!0})],jt.prototype,"checked",2);d([b({type:Boolean,reflect:!0})],jt.prototype,"indeterminate",2);d([Ls("checked")],jt.prototype,"defaultChecked",2);d([b({reflect:!0})],jt.prototype,"form",2);d([b({type:Boolean,reflect:!0})],jt.prototype,"required",2);d([F("disabled",{waitUntilFirstUpdate:!0})],jt.prototype,"handleDisabledChange",1);d([F(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],jt.prototype,"handleStateChange",1);var Yc=X`
  ${Q}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Ao=class extends K{constructor(){super(...arguments),this.localize=new xt(this)}render(){return R`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ao.styles=Yc;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function on(e,t,s){return e?t(e):s==null?void 0:s(e)}var Dt=class rr extends K{constructor(){super(...arguments),this.localize=new xt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Rt(this.childrenContainer);const{keyframes:t,options:s}=Lt(this,"tree-item.collapse",{dir:this.localize.dir()});await It(this.childrenContainer,fo(t,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&rr.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Rt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:s}=Lt(this,"tree-item.expand",{dir:this.localize.dir()});await It(this.childrenContainer,fo(t,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>rr.isTreeItem(s)&&(t||!s.disabled)):[]}render(){const t=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return R`
      <div
        part="base"
        class="${st({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${st({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${on(this.loading,()=>R` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${on(this.selectable,()=>R`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Es(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Dt.styles=Dc;Dt.dependencies={"sl-checkbox":jt,"sl-icon":zt,"sl-spinner":Ao};d([it()],Dt.prototype,"indeterminate",2);d([it()],Dt.prototype,"isLeaf",2);d([it()],Dt.prototype,"loading",2);d([it()],Dt.prototype,"selectable",2);d([b({type:Boolean,reflect:!0})],Dt.prototype,"expanded",2);d([b({type:Boolean,reflect:!0})],Dt.prototype,"selected",2);d([b({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);d([b({type:Boolean,reflect:!0})],Dt.prototype,"lazy",2);d([H("slot:not([name])")],Dt.prototype,"defaultSlot",2);d([H("slot[name=children]")],Dt.prototype,"childrenSlot",2);d([H(".tree-item__item")],Dt.prototype,"itemElement",2);d([H(".tree-item__children")],Dt.prototype,"childrenContainer",2);d([H(".tree-item__expand-button slot")],Dt.prototype,"expandButtonSlot",2);d([F("loading",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleLoadingChange",1);d([F("disabled")],Dt.prototype,"handleDisabledChange",1);d([F("selected")],Dt.prototype,"handleSelectedChange",1);d([F("expanded",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleExpandedChange",1);d([F("expanded",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleExpandAnimation",1);d([F("lazy",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleLazyChange",1);var xi=Dt;Ct("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});Ct("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function Bt(e,t,s){const i=o=>Object.is(o,-0)?0:o;return e<t?i(t):e>s?i(s):i(e)}function rn(e,t=!1){function s(r){const n=r.getChildrenItems({includeDisabled:!1});if(n.length){const l=n.every(c=>c.selected),a=n.every(c=>!c.selected&&!c.indeterminate);r.selected=l,r.indeterminate=!l&&!a}}function i(r){const n=r.parentElement;xi.isTreeItem(n)&&(s(n),i(n))}function o(r){for(const n of r.getChildrenItems())n.selected=t?r.selected||n.selected:!n.disabled&&r.selected,o(n);t&&s(r)}o(e),i(e)}var Ts=class extends K{constructor(){super(),this.selection="single",this.localize=new xt(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const s=e.querySelector(`[slot="${t}-icon"]`);s===null?e.append(this.getExpandButtonIcon(t)):s.hasAttribute("data-default")&&s.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const s=[...t.addedNodes].filter(xi.isTreeItem),i=[...t.removedNodes].filter(xi.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),xi.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const s=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const i=s.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),rn(e);else if(this.selection==="single"||e.isLeaf){const i=this.getAllTreeItems();for(const o of i)o.selected=o===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const s=this.selectedItems;(t.length!==s.length||s.some(i=>!t.includes(i)))&&Promise.all(s.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(o=>{var r;return["input","textarea"].includes((r=o==null?void 0:o.tagName)==null?void 0:r.toLowerCase())}))return;const t=this.getFocusableItems(),s=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const o=t.findIndex(a=>a.matches(":focus")),r=t[o],n=a=>{const c=t[Bt(a,0,t.length-1)];this.focusItem(c)},l=a=>{r.expanded=a};e.key==="ArrowDown"?n(o+1):e.key==="ArrowUp"?n(o-1):s&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?n(o+1):l(!0):s&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"?!r||r.disabled||r.isLeaf||!r.expanded?n(o-1):l(!1):e.key==="Home"?n(0):e.key==="End"?n(t.length-1):(e.key==="Enter"||e.key===" ")&&(r.disabled||this.selectItem(r))}}handleClick(e){const t=e.target,s=t.closest("sl-tree-item"),i=e.composedPath().some(o=>{var r;return(r=o==null?void 0:o.classList)==null?void 0:r.contains("tree-item__expand-button")});!s||s.disabled||t!==this.clickTarget||(i?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const s of t)s.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>rn(s,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=s=>s.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(s=>{var i;if(s.disabled)return!1;const o=(i=s.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(s),!t.has(s)})}render(){return R`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ts.styles=Ic;d([H("slot:not([name])")],Ts.prototype,"defaultSlot",2);d([H("slot[name=expand-icon]")],Ts.prototype,"expandedIconSlot",2);d([H("slot[name=collapse-icon]")],Ts.prototype,"collapsedIconSlot",2);d([b()],Ts.prototype,"selection",2);d([F("selection")],Ts.prototype,"handleSelectionChange",1);Ts.define("sl-tree");xi.define("sl-tree-item");var Xc=X`
  ${Q}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Zc=0,qi=class extends K{constructor(){super(...arguments),this.attrId=++Zc,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return R`
      <slot
        part="base"
        class=${st({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};qi.styles=Xc;d([b({reflect:!0})],qi.prototype,"name",2);d([b({type:Boolean,reflect:!0})],qi.prototype,"active",2);d([F("active")],qi.prototype,"handleActiveChange",1);qi.define("sl-tab-panel");var Qc=X`
  ${Q}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Jc=X`
  ${Q}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ra=Symbol.for(""),td=e=>{if((e==null?void 0:e.r)===Ra)return e==null?void 0:e._$litStatic$},mo=(e,...t)=>({_$litStatic$:t.reduce((s,i,o)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:Ra}),nn=new Map,ed=e=>(t,...s)=>{const i=s.length;let o,r;const n=[],l=[];let a,c=0,h=!1;for(;c<i;){for(a=t[c];c<i&&(r=s[c],(o=td(r))!==void 0);)a+=o+t[++c],h=!0;c!==i&&l.push(r),n.push(a),c++}if(c===i&&n.push(t[i]),h){const u=n.join("$$lit$$");(t=nn.get(u))===void 0&&(n.raw=n,nn.set(u,t=n)),s=l}return e(t,...s)},ki=ed(R);var Nt=class extends K{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?mo`a`:mo`button`;return ki`
      <${t}
        part="base"
        class=${st({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${G(e?void 0:this.disabled)}
        type=${G(e?void 0:"button")}
        href=${G(e?this.href:void 0)}
        target=${G(e?this.target:void 0)}
        download=${G(e?this.download:void 0)}
        rel=${G(e&&this.target?"noreferrer noopener":void 0)}
        role=${G(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${G(this.name)}
          library=${G(this.library)}
          src=${G(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Nt.styles=Jc;Nt.dependencies={"sl-icon":zt};d([H(".icon-button")],Nt.prototype,"button",2);d([it()],Nt.prototype,"hasFocus",2);d([b()],Nt.prototype,"name",2);d([b()],Nt.prototype,"library",2);d([b()],Nt.prototype,"src",2);d([b()],Nt.prototype,"href",2);d([b()],Nt.prototype,"target",2);d([b()],Nt.prototype,"download",2);d([b()],Nt.prototype,"label",2);d([b({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);var gs=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return R`
      <span
        part="base"
        class=${st({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?R`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};gs.styles=Qc;gs.dependencies={"sl-icon-button":Nt};d([b({reflect:!0})],gs.prototype,"variant",2);d([b({reflect:!0})],gs.prototype,"size",2);d([b({type:Boolean,reflect:!0})],gs.prototype,"pill",2);d([b({type:Boolean})],gs.prototype,"removable",2);gs.define("sl-tag");var ji=X`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,sd=X`
  ${Q}
  ${ji}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,fe=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=s=>{const i=s.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function id(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let s="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(s+=i.textContent)}),s}var kt=class extends K{constructor(){super(...arguments),this.formControlController=new ts(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new fe(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,i){this.input.setRangeText(e,t,s,i),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t;return R`
      <div
        part="form-control"
        class=${st({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${st({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${G(this.name)}
              .value=${Es(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${G(this.placeholder)}
              rows=${G(this.rows)}
              minlength=${G(this.minlength)}
              maxlength=${G(this.maxlength)}
              autocapitalize=${G(this.autocapitalize)}
              autocorrect=${G(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${G(this.spellcheck)}
              enterkeyhint=${G(this.enterkeyhint)}
              inputmode=${G(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};kt.styles=sd;d([H(".textarea__control")],kt.prototype,"input",2);d([it()],kt.prototype,"hasFocus",2);d([b()],kt.prototype,"title",2);d([b()],kt.prototype,"name",2);d([b()],kt.prototype,"value",2);d([b({reflect:!0})],kt.prototype,"size",2);d([b({type:Boolean,reflect:!0})],kt.prototype,"filled",2);d([b()],kt.prototype,"label",2);d([b({attribute:"help-text"})],kt.prototype,"helpText",2);d([b()],kt.prototype,"placeholder",2);d([b({type:Number})],kt.prototype,"rows",2);d([b()],kt.prototype,"resize",2);d([b({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);d([b({type:Boolean,reflect:!0})],kt.prototype,"readonly",2);d([b({reflect:!0})],kt.prototype,"form",2);d([b({type:Boolean,reflect:!0})],kt.prototype,"required",2);d([b({type:Number})],kt.prototype,"minlength",2);d([b({type:Number})],kt.prototype,"maxlength",2);d([b()],kt.prototype,"autocapitalize",2);d([b()],kt.prototype,"autocorrect",2);d([b()],kt.prototype,"autocomplete",2);d([b({type:Boolean})],kt.prototype,"autofocus",2);d([b()],kt.prototype,"enterkeyhint",2);d([b({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],kt.prototype,"spellcheck",2);d([b()],kt.prototype,"inputmode",2);d([Ls()],kt.prototype,"defaultValue",2);d([F("disabled",{waitUntilFirstUpdate:!0})],kt.prototype,"handleDisabledChange",1);d([F("rows",{waitUntilFirstUpdate:!0})],kt.prototype,"handleRowsChange",1);d([F("value",{waitUntilFirstUpdate:!0})],kt.prototype,"handleValueChange",1);kt.define("sl-textarea");var od=X`
  ${Q}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,ee=class extends K{constructor(){super(...arguments),this.formControlController=new ts(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return R`
      <label
        part="base"
        class=${st({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${G(this.value)}
          .checked=${Es(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};ee.styles=od;d([H('input[type="checkbox"]')],ee.prototype,"input",2);d([it()],ee.prototype,"hasFocus",2);d([b()],ee.prototype,"title",2);d([b()],ee.prototype,"name",2);d([b()],ee.prototype,"value",2);d([b({reflect:!0})],ee.prototype,"size",2);d([b({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);d([b({type:Boolean,reflect:!0})],ee.prototype,"checked",2);d([Ls("checked")],ee.prototype,"defaultChecked",2);d([b({reflect:!0})],ee.prototype,"form",2);d([b({type:Boolean,reflect:!0})],ee.prototype,"required",2);d([F("checked",{waitUntilFirstUpdate:!0})],ee.prototype,"handleCheckedChange",1);d([F("disabled",{waitUntilFirstUpdate:!0})],ee.prototype,"handleDisabledChange",1);ee.define("sl-switch");var rd=X`
  ${Q}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,nd=0,He=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.attrId=++nd,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,R`
      <div
        part="base"
        class=${st({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?R`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};He.styles=rd;He.dependencies={"sl-icon-button":Nt};d([H(".tab")],He.prototype,"tab",2);d([b({reflect:!0})],He.prototype,"panel",2);d([b({type:Boolean,reflect:!0})],He.prototype,"active",2);d([b({type:Boolean})],He.prototype,"closable",2);d([b({type:Boolean,reflect:!0})],He.prototype,"disabled",2);d([F("active")],He.prototype,"handleActiveChange",1);d([F("disabled")],He.prototype,"handleDisabledChange",1);He.define("sl-tab");var ad=X`
  ${Q}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function ld(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var nr=new Set;function cd(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function $i(e){if(nr.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=cd();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Ci(e){nr.delete(e),nr.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function ar(e,t,s="vertical",i="smooth"){const o=ld(e,t),r=o.top+t.scrollTop,n=o.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;(s==="horizontal"||s==="both")&&(n<l?t.scrollTo({left:n,behavior:i}):n+e.clientWidth>a&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(r<c?t.scrollTo({top:r,behavior:i}):r+e.clientHeight>h&&t.scrollTo({top:r-t.offsetHeight+e.clientHeight,behavior:i}))}var me=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(s=>s.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((s,i)=>{var o;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(s=>e.includeDisabled?s.tagName.toLowerCase()==="sl-tab":s.tagName.toLowerCase()==="sl-tab"&&!s.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const s=e.target.closest("sl-tab");(s==null?void 0:s.closest("sl-tab-group"))===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(e){const s=e.target.closest("sl-tab");if((s==null?void 0:s.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=this.tabs.find(n=>n.matches(":focus")),r=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(o);e.key==="Home"?n=0:e.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&ar(this.tabs[n],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Je({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const s=this.activeTab;this.activeTab=e,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&ar(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(s=>s.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,s=e.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),n=o.slice(0,o.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(s=>s.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return R`
      <div
        part="base"
        class=${st({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?R`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?R`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};me.styles=ad;me.dependencies={"sl-icon-button":Nt};d([H(".tab-group")],me.prototype,"tabGroup",2);d([H(".tab-group__body")],me.prototype,"body",2);d([H(".tab-group__nav")],me.prototype,"nav",2);d([H(".tab-group__indicator")],me.prototype,"indicator",2);d([it()],me.prototype,"hasScrollControls",2);d([b()],me.prototype,"placement",2);d([b()],me.prototype,"activation",2);d([b({attribute:"no-scroll-controls",type:Boolean})],me.prototype,"noScrollControls",2);d([F("noScrollControls",{waitUntilFirstUpdate:!0})],me.prototype,"updateScrollControls",1);d([F("placement",{waitUntilFirstUpdate:!0})],me.prototype,"syncIndicator",1);me.define("sl-tab-group");var dd=X`
  ${Q}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,zr=class extends K{constructor(){super(...arguments),this.effect="none"}render(){return R`
      <div
        part="base"
        class=${st({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};zr.styles=dd;d([b()],zr.prototype,"effect",2);zr.define("sl-skeleton");var ud=X`
  ${Q}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Si(e,t){function s(o){const r=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,l=r.left+n.scrollX,a=r.top+n.scrollY,c=o.pageX-l,h=o.pageY-a;t!=null&&t.onMove&&t.onMove(c,h)}function i(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&s(t.initialEvent)}var ge=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Si(this,{onMove:(s,i)=>{let o=this.vertical?i:s;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(n=>{let l;n.endsWith("%")?l=this.size*(parseFloat(n)/100):l=parseFloat(n),t&&!this.vertical&&(l=this.size-l),o>=l-this.snapThreshold&&o<=l+this.snapThreshold&&(o=l)}),this.position=Bt(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const s=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=s),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=s),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Bt(t,0,100)}}handleResize(e){const{width:t,height:s}=e[0].contentRect;this.size=this.vertical?s:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?s&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${i}`:s&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${o}`,this.style[t]="",R`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${G(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ge.styles=ud;d([H(".divider")],ge.prototype,"divider",2);d([b({type:Number,reflect:!0})],ge.prototype,"position",2);d([b({attribute:"position-in-pixels",type:Number})],ge.prototype,"positionInPixels",2);d([b({type:Boolean,reflect:!0})],ge.prototype,"vertical",2);d([b({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);d([b()],ge.prototype,"primary",2);d([b()],ge.prototype,"snap",2);d([b({type:Number,attribute:"snap-threshold"})],ge.prototype,"snapThreshold",2);d([F("position")],ge.prototype,"handlePositionChange",1);d([F("positionInPixels")],ge.prototype,"handlePositionInPixelsChange",1);d([F("vertical")],ge.prototype,"handleVerticalChange",1);ge.define("sl-split-panel");var hd=X`
  ${Q}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Va="important",pd=" !"+Va,ne=Hi(class extends Ui{constructor(e){var t;if(super(e),e.type!==Ve.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const i=e[s];return i==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(const i of this.ut)t[i]==null&&(this.ut.delete(i),i.includes("-")?s.removeProperty(i):s[i]=null);for(const i in t){const o=t[i];if(o!=null){this.ut.add(i);const r=typeof o=="string"&&o.endsWith(pd);i.includes("-")||r?s.setProperty(i,r?o.slice(0,-11):o,r?Va:""):s[i]=o}}return he}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lr=class extends Ui{constructor(t){if(super(t),this.et=Et,t.type!==Ve.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Et||t==null)return this.vt=void 0,this.et=t;if(t===he)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const s=[t];return s.raw=s,this.vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}};lr.directiveName="unsafeHTML",lr.resultType=1;const no=Hi(lr);var Zt=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:s,right:i,width:o}=this.rating.getBoundingClientRect(),r=t?this.roundToPrecision((i-e)/o*this.max,this.precision):this.roundToPrecision((e-s)/o*this.max,this.precision);return Bt(r,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"){const o=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"){const o=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const s=1/t;return Math.ceil(e*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,R`
      <div
        part="base"
        class=${st({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(i=>s>i&&s<i+1?R`
                <span
                  class=${st({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${ne({clipPath:e?`inset(0 ${(s-i)*100}% 0 0)`:`inset(0 0 0 ${(s-i)*100}%)`})}
                  >
                    ${no(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${ne({clipPath:e?`inset(0 0 0 ${100-(s-i)*100}%)`:`inset(0 ${100-(s-i)*100}% 0 0)`})}
                  >
                    ${no(this.getSymbol(i+1))}
                  </div>
                </span>
              `:R`
              <span
                class=${st({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===i+1,"rating__symbol--active":s>=i+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${no(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Zt.styles=hd;Zt.dependencies={"sl-icon":zt};d([H(".rating")],Zt.prototype,"rating",2);d([it()],Zt.prototype,"hoverValue",2);d([it()],Zt.prototype,"isHovering",2);d([b()],Zt.prototype,"label",2);d([b({type:Number})],Zt.prototype,"value",2);d([b({type:Number})],Zt.prototype,"max",2);d([b({type:Number})],Zt.prototype,"precision",2);d([b({type:Boolean,reflect:!0})],Zt.prototype,"readonly",2);d([b({type:Boolean,reflect:!0})],Zt.prototype,"disabled",2);d([b()],Zt.prototype,"getSymbol",2);d([wa({passive:!0})],Zt.prototype,"handleTouchMove",1);d([F("hoverValue")],Zt.prototype,"handleHoverValueChange",1);d([F("isHovering")],Zt.prototype,"handleIsHoveringChange",1);Zt.define("sl-rating");var fd=X`
  ${Q}
  ${ji}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,ft=class extends K{constructor(){super(...arguments),this.formControlController=new ts(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new fe(this,"help-text","label"),this.localize=new xt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>R`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,s=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(s||i)){if(e.key==="Escape"&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),r=o.indexOf(this.currentOption);let n=Math.max(0,r);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(n=r+1,n>o.length-1&&(n=0)):e.key==="ArrowUp"?(n=r-1,n<0&&(n=o.length-1)):e.key==="Home"?n=0:e.key==="End"&&(n=o.length-1),this.setCurrentOption(o[n])}if(e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const r of o)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const s=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const s=e.target.closest("sl-option"),i=this.value;s&&!s.disabled&&(this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],s=[];customElements.get("sl-option")?(e.forEach(i=>s.push(i.value)),this.setSelectedOptions(e.filter(i=>t.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),s=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),s.length&&s.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,s,i;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(i=(s=this.selectedOptions[0])==null?void 0:s.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(e,t);return R`<div @sl-remove=${i=>this.handleTagRemove(i,e)}>
          ${typeof s=="string"?no(s):s}
        </div>`}else if(t===this.maxOptionsVisible)return R`<sl-tag>+${this.selectedOptions.length-t}</sl-tag>`;return R``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(s=>t.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Rt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=Lt(this,"select.show",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.currentOption&&ar(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Rt(this);const{keyframes:e,options:t}=Lt(this,"select.hide",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,te(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,te(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value.length===0;return R`
      <div
        part="form-control"
        class=${st({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${st({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?R`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?R`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ft.styles=fd;ft.dependencies={"sl-icon":zt,"sl-popup":At,"sl-tag":gs};d([H(".select")],ft.prototype,"popup",2);d([H(".select__combobox")],ft.prototype,"combobox",2);d([H(".select__display-input")],ft.prototype,"displayInput",2);d([H(".select__value-input")],ft.prototype,"valueInput",2);d([H(".select__listbox")],ft.prototype,"listbox",2);d([it()],ft.prototype,"hasFocus",2);d([it()],ft.prototype,"displayLabel",2);d([it()],ft.prototype,"currentOption",2);d([it()],ft.prototype,"selectedOptions",2);d([b()],ft.prototype,"name",2);d([b({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],ft.prototype,"value",2);d([Ls()],ft.prototype,"defaultValue",2);d([b({reflect:!0})],ft.prototype,"size",2);d([b()],ft.prototype,"placeholder",2);d([b({type:Boolean,reflect:!0})],ft.prototype,"multiple",2);d([b({attribute:"max-options-visible",type:Number})],ft.prototype,"maxOptionsVisible",2);d([b({type:Boolean,reflect:!0})],ft.prototype,"disabled",2);d([b({type:Boolean})],ft.prototype,"clearable",2);d([b({type:Boolean,reflect:!0})],ft.prototype,"open",2);d([b({type:Boolean})],ft.prototype,"hoist",2);d([b({type:Boolean,reflect:!0})],ft.prototype,"filled",2);d([b({type:Boolean,reflect:!0})],ft.prototype,"pill",2);d([b()],ft.prototype,"label",2);d([b({reflect:!0})],ft.prototype,"placement",2);d([b({attribute:"help-text"})],ft.prototype,"helpText",2);d([b({reflect:!0})],ft.prototype,"form",2);d([b({type:Boolean,reflect:!0})],ft.prototype,"required",2);d([b()],ft.prototype,"getTag",2);d([F("disabled",{waitUntilFirstUpdate:!0})],ft.prototype,"handleDisabledChange",1);d([F("value",{waitUntilFirstUpdate:!0})],ft.prototype,"handleValueChange",1);d([F("open",{waitUntilFirstUpdate:!0})],ft.prototype,"handleOpenChange",1);Ct("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ct("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ft.define("sl-select");Ao.define("sl-spinner");var md=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],bs=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=t.getTime()-e.getTime(),{unit:i,value:o}=md.find(r=>Math.abs(s)<r.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(s/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let r;i==="minute"?r=eo("second"):i==="hour"?r=eo("minute"):i==="day"?r=eo("hour"):r=eo("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),r)}return R` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};d([it()],bs.prototype,"isoTime",2);d([it()],bs.prototype,"relativeTime",2);d([it()],bs.prototype,"titleTime",2);d([b()],bs.prototype,"date",2);d([b()],bs.prototype,"format",2);d([b()],bs.prototype,"numeric",2);d([b({type:Boolean})],bs.prototype,"sync",2);function eo(e){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return s-Date.now()%s}bs.define("sl-relative-time");var gd=X`
  ${Q}
  ${ji}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,Tt=class extends K{constructor(){super(...arguments),this.formControlController=new ts(this),this.hasSlotController=new fe(this,"help-text","label"),this.localize=new xt(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,s=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",r=t*e;if(o){const n=`${t-r}px + ${e} * ${i}`;this.output.style.translate=`calc((${n} - ${s/2}px - ${i} / 2))`}else{const n=`${r}px - ${e} * ${i}`;this.output.style.translate=`calc(${n} - ${s/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t;return R`
      <div
        part="form-control"
        class=${st({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${st({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${G(this.name)}
              ?disabled=${this.disabled}
              min=${G(this.min)}
              max=${G(this.max)}
              step=${G(this.step)}
              .value=${Es(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?R`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Tt.styles=gd;d([H(".range__control")],Tt.prototype,"input",2);d([H(".range__tooltip")],Tt.prototype,"output",2);d([it()],Tt.prototype,"hasFocus",2);d([it()],Tt.prototype,"hasTooltip",2);d([b()],Tt.prototype,"title",2);d([b()],Tt.prototype,"name",2);d([b({type:Number})],Tt.prototype,"value",2);d([b()],Tt.prototype,"label",2);d([b({attribute:"help-text"})],Tt.prototype,"helpText",2);d([b({type:Boolean,reflect:!0})],Tt.prototype,"disabled",2);d([b({type:Number})],Tt.prototype,"min",2);d([b({type:Number})],Tt.prototype,"max",2);d([b({type:Number})],Tt.prototype,"step",2);d([b()],Tt.prototype,"tooltip",2);d([b({attribute:!1})],Tt.prototype,"tooltipFormatter",2);d([b({reflect:!0})],Tt.prototype,"form",2);d([Ls()],Tt.prototype,"defaultValue",2);d([wa({passive:!0})],Tt.prototype,"handleThumbDragStart",1);d([F("value",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleValueChange",1);d([F("disabled",{waitUntilFirstUpdate:!0})],Tt.prototype,"handleDisabledChange",1);d([F("hasTooltip",{waitUntilFirstUpdate:!0})],Tt.prototype,"syncRange",1);Tt.define("sl-range");var bd=X`
  ${Q}

  :host {
    display: contents;
  }
`,zo=class extends K{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],t.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return R` <slot @slotchange=${this.handleSlotChange}></slot> `}};zo.styles=bd;d([b({type:Boolean,reflect:!0})],zo.prototype,"disabled",2);d([F("disabled",{waitUntilFirstUpdate:!0})],zo.prototype,"handleDisabledChange",1);zo.define("sl-resize-observer");var vd=X`
  ${Q}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ue=class extends K{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return R`
      <span
        part="base"
        class=${st({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?R` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ue.styles=vd;Ue.dependencies={"sl-icon":zt};d([it()],Ue.prototype,"checked",2);d([it()],Ue.prototype,"hasFocus",2);d([b()],Ue.prototype,"value",2);d([b({reflect:!0})],Ue.prototype,"size",2);d([b({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);d([F("checked")],Ue.prototype,"handleCheckedChange",1);d([F("disabled",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleDisabledChange",1);Ue.define("sl-radio");var Fa=X`
  ${Q}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,yd=X`
  ${Fa}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Oe=class extends K{constructor(){super(...arguments),this.hasSlotController=new fe(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return ki`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${st({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${G(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Oe.styles=yd;d([H(".button")],Oe.prototype,"input",2);d([H(".hidden-input")],Oe.prototype,"hiddenInput",2);d([it()],Oe.prototype,"hasFocus",2);d([b({type:Boolean,reflect:!0})],Oe.prototype,"checked",2);d([b()],Oe.prototype,"value",2);d([b({type:Boolean,reflect:!0})],Oe.prototype,"disabled",2);d([b({reflect:!0})],Oe.prototype,"size",2);d([b({type:Boolean,reflect:!0})],Oe.prototype,"pill",2);d([F("disabled",{waitUntilFirstUpdate:!0})],Oe.prototype,"handleDisabledChange",1);Oe.define("sl-radio-button");var _d=X`
  ${Q}
  ${ji}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,wd=X`
  ${Q}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Os=class extends K{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=bi(e.target);t==null||t.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=bi(e.target);t==null||t.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=bi(e.target);t==null||t.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=bi(e.target);t==null||t.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const s=e.indexOf(t),i=bi(t);i&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",s===0),i.classList.toggle("sl-button-group__button--inner",s>0&&s<e.length-1),i.classList.toggle("sl-button-group__button--last",s===e.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return R`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Os.styles=wd;d([H("slot")],Os.prototype,"defaultSlot",2);d([it()],Os.prototype,"disableRole",2);d([b()],Os.prototype,"label",2);function bi(e){var t;const s="sl-button, sl-radio-button";return(t=e.closest(s))!=null?t:e.querySelector(s)}var Xt=class extends K{constructor(){super(...arguments),this.formControlController=new ts(this),this.hasSlotController=new fe(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?kl:e?xl:ko}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,s.forEach(o=>o.checked=o===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const s=this.getAllRadios().filter(l=>!l.disabled),i=(t=s.find(l=>l.checked))!=null?t:s[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,r=this.value;let n=s.indexOf(i)+o;n<0&&(n=s.length-1),n>s.length-1&&(n=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=s[n].value,s[n].checked=!0,this.hasButtonGroup?s[n].shadowRoot.querySelector("button").focus():(s[n].tabIndex=0,s[n].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),s=e.find(i=>i.checked)||e[0];s&&s.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const s=this.getAllRadios();if(await Promise.all(s.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=s.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),!s.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=s[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else s[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=R`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return R`
      <fieldset
        part="form-control"
        class=${st({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?R`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Xt.styles=_d;Xt.dependencies={"sl-button-group":Os};d([H("slot:not([name])")],Xt.prototype,"defaultSlot",2);d([H(".radio-group__validation-input")],Xt.prototype,"validationInput",2);d([it()],Xt.prototype,"hasButtonGroup",2);d([it()],Xt.prototype,"errorMessage",2);d([it()],Xt.prototype,"defaultValue",2);d([b()],Xt.prototype,"label",2);d([b({attribute:"help-text"})],Xt.prototype,"helpText",2);d([b()],Xt.prototype,"name",2);d([b({reflect:!0})],Xt.prototype,"value",2);d([b({reflect:!0})],Xt.prototype,"size",2);d([b({reflect:!0})],Xt.prototype,"form",2);d([b({type:Boolean,reflect:!0})],Xt.prototype,"required",2);d([F("size",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleSizeChange",1);d([F("value")],Xt.prototype,"handleValueChange",1);Xt.define("sl-radio-group");var xd=X`
  ${Q}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Wi=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return R`
      <div
        part="base"
        class=${st({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${G(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ne({width:`${this.value}%`})}>
          ${this.indeterminate?"":R` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Wi.styles=xd;d([b({type:Number,reflect:!0})],Wi.prototype,"value",2);d([b({type:Boolean,reflect:!0})],Wi.prototype,"indeterminate",2);d([b()],Wi.prototype,"label",2);Wi.define("sl-progress-bar");var kd=X`
  ${Q}

  :host {
    display: inline-block;
  }
`;let Na=null;class Ha{}Ha.render=function(e,t){Na(e,t)};self.QrCreator=Ha;(function(e){function t(l,a,c,h){var u={},g=e(c,a);g.u(l),g.J(),h=h||0;var f=g.h(),m=g.h()+2*h;return u.text=l,u.level=a,u.version=c,u.O=m,u.a=function(p,v){return p-=h,v-=h,0>p||p>=f||0>v||v>=f?!1:g.a(p,v)},u}function s(l,a,c,h,u,g,f,m,p,v){function _(w,$,k,x,A,M,O){w?(l.lineTo($+M,k+O),l.arcTo($,k,x,A,g)):l.lineTo($,k)}f?l.moveTo(a+g,c):l.moveTo(a,c),_(m,h,c,h,u,-g,0),_(p,h,u,a,u,0,-g),_(v,a,u,a,c,g,0),_(f,a,c,h,c,0,g)}function i(l,a,c,h,u,g,f,m,p,v){function _(w,$,k,x){l.moveTo(w+k,$),l.lineTo(w,$),l.lineTo(w,$+x),l.arcTo(w,$,w+k,$,g)}f&&_(a,c,g,g),m&&_(h,c,-g,g),p&&_(h,u,-g,-g),v&&_(a,u,g,-g)}function o(l,a){var c=a.fill;if(typeof c=="string")l.fillStyle=c;else{var h=c.type,u=c.colorStops;if(c=c.position.map(f=>Math.round(f*a.size)),h==="linear-gradient")var g=l.createLinearGradient.apply(l,c);else if(h==="radial-gradient")g=l.createRadialGradient.apply(l,c);else throw Error("Unsupported fill");u.forEach(([f,m])=>{g.addColorStop(f,m)}),l.fillStyle=g}}function r(l,a){t:{var c=a.text,h=a.v,u=a.N,g=a.K,f=a.P;for(u=Math.max(1,u||1),g=Math.min(40,g||40);u<=g;u+=1)try{var m=t(c,h,u,f);break t}catch{}m=void 0}if(!m)return null;for(c=l.getContext("2d"),a.background&&(c.fillStyle=a.background,c.fillRect(a.left,a.top,a.size,a.size)),h=m.O,g=a.size/h,c.beginPath(),f=0;f<h;f+=1)for(u=0;u<h;u+=1){var p=c,v=a.left+u*g,_=a.top+f*g,w=f,$=u,k=m.a,x=v+g,A=_+g,M=w-1,O=w+1,I=$-1,V=$+1,ct=Math.floor(Math.min(.5,Math.max(0,a.R))*g),J=k(w,$),lt=k(M,I),ot=k(M,$);M=k(M,V);var W=k(w,V);V=k(O,V),$=k(O,$),O=k(O,I),w=k(w,I),v=Math.round(v),_=Math.round(_),x=Math.round(x),A=Math.round(A),J?s(p,v,_,x,A,ct,!ot&&!w,!ot&&!W,!$&&!W,!$&&!w):i(p,v,_,x,A,ct,ot&&w&&lt,ot&&W&&M,$&&W&&V,$&&w&&O)}return o(c,a),c.fill(),l}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Na=function(l,a){var c={};Object.assign(c,n,l),c.N=c.minVersion,c.K=c.maxVersion,c.v=c.ecLevel,c.left=c.left,c.top=c.top,c.size=c.size,c.fill=c.fill,c.background=c.background,c.text=c.text,c.R=c.radius,c.P=c.quiet,a instanceof HTMLCanvasElement?((a.width!==c.size||a.height!==c.size)&&(a.width=c.size,a.height=c.size),a.getContext("2d").clearRect(0,0,a.width,a.height),r(a,c)):(l=document.createElement("canvas"),l.width=c.size,l.height=c.size,c=r(l,c),a.appendChild(c))}})(function(){function e(a){var c=s.s(a);return{S:function(){return 4},b:function(){return c.length},write:function(h){for(var u=0;u<c.length;u+=1)h.put(c[u],8)}}}function t(){var a=[],c=0,h={B:function(){return a},c:function(u){return(a[Math.floor(u/8)]>>>7-u%8&1)==1},put:function(u,g){for(var f=0;f<g;f+=1)h.m((u>>>g-f-1&1)==1)},f:function(){return c},m:function(u){var g=Math.floor(c/8);a.length<=g&&a.push(0),u&&(a[g]|=128>>>c%8),c+=1}};return h}function s(a,c){function h(w,$){for(var k=-1;7>=k;k+=1)if(!(-1>=w+k||m<=w+k))for(var x=-1;7>=x;x+=1)-1>=$+x||m<=$+x||(f[w+k][$+x]=0<=k&&6>=k&&(x==0||x==6)||0<=x&&6>=x&&(k==0||k==6)||2<=k&&4>=k&&2<=x&&4>=x)}function u(w,$){for(var k=m=4*a+17,x=Array(k),A=0;A<k;A+=1){x[A]=Array(k);for(var M=0;M<k;M+=1)x[A][M]=null}for(f=x,h(0,0),h(m-7,0),h(0,m-7),k=r.G(a),x=0;x<k.length;x+=1)for(A=0;A<k.length;A+=1){M=k[x];var O=k[A];if(f[M][O]==null)for(var I=-2;2>=I;I+=1)for(var V=-2;2>=V;V+=1)f[M+I][O+V]=I==-2||I==2||V==-2||V==2||I==0&&V==0}for(k=8;k<m-8;k+=1)f[k][6]==null&&(f[k][6]=k%2==0);for(k=8;k<m-8;k+=1)f[6][k]==null&&(f[6][k]=k%2==0);for(k=r.w(g<<3|$),x=0;15>x;x+=1)A=!w&&(k>>x&1)==1,f[6>x?x:8>x?x+1:m-15+x][8]=A,f[8][8>x?m-x-1:9>x?15-x:14-x]=A;if(f[m-8][8]=!w,7<=a){for(k=r.A(a),x=0;18>x;x+=1)A=!w&&(k>>x&1)==1,f[Math.floor(x/3)][x%3+m-8-3]=A;for(x=0;18>x;x+=1)A=!w&&(k>>x&1)==1,f[x%3+m-8-3][Math.floor(x/3)]=A}if(p==null){for(w=l.I(a,g),k=t(),x=0;x<v.length;x+=1)A=v[x],k.put(4,4),k.put(A.b(),r.f(4,a)),A.write(k);for(x=A=0;x<w.length;x+=1)A+=w[x].j;if(k.f()>8*A)throw Error("code length overflow. ("+k.f()+">"+8*A+")");for(k.f()+4<=8*A&&k.put(0,4);k.f()%8!=0;)k.m(!1);for(;!(k.f()>=8*A)&&(k.put(236,8),!(k.f()>=8*A));)k.put(17,8);var ct=0;for(A=x=0,M=Array(w.length),O=Array(w.length),I=0;I<w.length;I+=1){var J=w[I].j,lt=w[I].o-J;for(x=Math.max(x,J),A=Math.max(A,lt),M[I]=Array(J),V=0;V<M[I].length;V+=1)M[I][V]=255&k.B()[V+ct];for(ct+=J,V=r.C(lt),J=i(M[I],V.b()-1).l(V),O[I]=Array(V.b()-1),V=0;V<O[I].length;V+=1)lt=V+J.b()-O[I].length,O[I][V]=0<=lt?J.c(lt):0}for(V=k=0;V<w.length;V+=1)k+=w[V].o;for(k=Array(k),V=ct=0;V<x;V+=1)for(I=0;I<w.length;I+=1)V<M[I].length&&(k[ct]=M[I][V],ct+=1);for(V=0;V<A;V+=1)for(I=0;I<w.length;I+=1)V<O[I].length&&(k[ct]=O[I][V],ct+=1);p=k}for(w=p,k=-1,x=m-1,A=7,M=0,$=r.F($),O=m-1;0<O;O-=2)for(O==6&&--O;;){for(I=0;2>I;I+=1)f[x][O-I]==null&&(V=!1,M<w.length&&(V=(w[M]>>>A&1)==1),$(x,O-I)&&(V=!V),f[x][O-I]=V,--A,A==-1&&(M+=1,A=7));if(x+=k,0>x||m<=x){x-=k,k=-k;break}}}var g=o[c],f=null,m=0,p=null,v=[],_={u:function(w){w=e(w),v.push(w),p=null},a:function(w,$){if(0>w||m<=w||0>$||m<=$)throw Error(w+","+$);return f[w][$]},h:function(){return m},J:function(){for(var w=0,$=0,k=0;8>k;k+=1){u(!0,k);var x=r.D(_);(k==0||w>x)&&(w=x,$=k)}u(!1,$)}};return _}function i(a,c){if(typeof a.length>"u")throw Error(a.length+"/"+c);var h=function(){for(var g=0;g<a.length&&a[g]==0;)g+=1;for(var f=Array(a.length-g+c),m=0;m<a.length-g;m+=1)f[m]=a[m+g];return f}(),u={c:function(g){return h[g]},b:function(){return h.length},multiply:function(g){for(var f=Array(u.b()+g.b()-1),m=0;m<u.b();m+=1)for(var p=0;p<g.b();p+=1)f[m+p]^=n.i(n.g(u.c(m))+n.g(g.c(p)));return i(f,0)},l:function(g){if(0>u.b()-g.b())return u;for(var f=n.g(u.c(0))-n.g(g.c(0)),m=Array(u.b()),p=0;p<u.b();p+=1)m[p]=u.c(p);for(p=0;p<g.b();p+=1)m[p]^=n.i(n.g(g.c(p))+f);return i(m,0).l(g)}};return u}s.s=function(a){for(var c=[],h=0;h<a.length;h++){var u=a.charCodeAt(h);128>u?c.push(u):2048>u?c.push(192|u>>6,128|u&63):55296>u||57344<=u?c.push(224|u>>12,128|u>>6&63,128|u&63):(h++,u=65536+((u&1023)<<10|a.charCodeAt(h)&1023),c.push(240|u>>18,128|u>>12&63,128|u>>6&63,128|u&63))}return c};var o={L:1,M:0,Q:3,H:2},r=function(){function a(u){for(var g=0;u!=0;)g+=1,u>>>=1;return g}var c=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],h={w:function(u){for(var g=u<<10;0<=a(g)-a(1335);)g^=1335<<a(g)-a(1335);return(u<<10|g)^21522},A:function(u){for(var g=u<<12;0<=a(g)-a(7973);)g^=7973<<a(g)-a(7973);return u<<12|g},G:function(u){return c[u-1]},F:function(u){switch(u){case 0:return function(g,f){return(g+f)%2==0};case 1:return function(g){return g%2==0};case 2:return function(g,f){return f%3==0};case 3:return function(g,f){return(g+f)%3==0};case 4:return function(g,f){return(Math.floor(g/2)+Math.floor(f/3))%2==0};case 5:return function(g,f){return g*f%2+g*f%3==0};case 6:return function(g,f){return(g*f%2+g*f%3)%2==0};case 7:return function(g,f){return(g*f%3+(g+f)%2)%2==0};default:throw Error("bad maskPattern:"+u)}},C:function(u){for(var g=i([1],0),f=0;f<u;f+=1)g=g.multiply(i([1,n.i(f)],0));return g},f:function(u,g){if(u!=4||1>g||40<g)throw Error("mode: "+u+"; type: "+g);return 10>g?8:16},D:function(u){for(var g=u.h(),f=0,m=0;m<g;m+=1)for(var p=0;p<g;p+=1){for(var v=0,_=u.a(m,p),w=-1;1>=w;w+=1)if(!(0>m+w||g<=m+w))for(var $=-1;1>=$;$+=1)0>p+$||g<=p+$||(w!=0||$!=0)&&_==u.a(m+w,p+$)&&(v+=1);5<v&&(f+=3+v-5)}for(m=0;m<g-1;m+=1)for(p=0;p<g-1;p+=1)v=0,u.a(m,p)&&(v+=1),u.a(m+1,p)&&(v+=1),u.a(m,p+1)&&(v+=1),u.a(m+1,p+1)&&(v+=1),(v==0||v==4)&&(f+=3);for(m=0;m<g;m+=1)for(p=0;p<g-6;p+=1)u.a(m,p)&&!u.a(m,p+1)&&u.a(m,p+2)&&u.a(m,p+3)&&u.a(m,p+4)&&!u.a(m,p+5)&&u.a(m,p+6)&&(f+=40);for(p=0;p<g;p+=1)for(m=0;m<g-6;m+=1)u.a(m,p)&&!u.a(m+1,p)&&u.a(m+2,p)&&u.a(m+3,p)&&u.a(m+4,p)&&!u.a(m+5,p)&&u.a(m+6,p)&&(f+=40);for(p=v=0;p<g;p+=1)for(m=0;m<g;m+=1)u.a(m,p)&&(v+=1);return f+=Math.abs(100*v/g/g-50)/5*10}};return h}(),n=function(){for(var a=Array(256),c=Array(256),h=0;8>h;h+=1)a[h]=1<<h;for(h=8;256>h;h+=1)a[h]=a[h-4]^a[h-5]^a[h-6]^a[h-8];for(h=0;255>h;h+=1)c[a[h]]=h;return{g:function(u){if(1>u)throw Error("glog("+u+")");return c[u]},i:function(u){for(;0>u;)u+=255;for(;256<=u;)u-=255;return a[u]}}}(),l=function(){function a(u,g){switch(g){case o.L:return c[4*(u-1)];case o.M:return c[4*(u-1)+1];case o.Q:return c[4*(u-1)+2];case o.H:return c[4*(u-1)+3]}}var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],h={I:function(u,g){var f=a(u,g);if(typeof f>"u")throw Error("bad rs block @ typeNumber:"+u+"/errorCorrectLevel:"+g);u=f.length/3,g=[];for(var m=0;m<u;m+=1)for(var p=f[3*m],v=f[3*m+1],_=f[3*m+2],w=0;w<p;w+=1){var $=_,k={};k.o=v,k.j=$,g.push(k)}return g}};return h}();return s}());const $d=QrCreator;var Me=class extends K{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&$d.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return R`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${ne({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Me.styles=kd;d([H("canvas")],Me.prototype,"canvas",2);d([b()],Me.prototype,"value",2);d([b()],Me.prototype,"label",2);d([b({type:Number})],Me.prototype,"size",2);d([b()],Me.prototype,"fill",2);d([b()],Me.prototype,"background",2);d([b({type:Number})],Me.prototype,"radius",2);d([b({attribute:"error-correction"})],Me.prototype,"errorCorrection",2);d([F(["background","errorCorrection","fill","radius","size","value"])],Me.prototype,"generate",1);Me.define("sl-qr-code");var Cd=X`
  ${Q}

  :host {
    display: contents;
  }
`,qe=class extends K{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return R` <slot></slot> `}};qe.styles=Cd;d([b({reflect:!0})],qe.prototype,"attr",2);d([b({attribute:"attr-old-value",type:Boolean,reflect:!0})],qe.prototype,"attrOldValue",2);d([b({attribute:"char-data",type:Boolean,reflect:!0})],qe.prototype,"charData",2);d([b({attribute:"char-data-old-value",type:Boolean,reflect:!0})],qe.prototype,"charDataOldValue",2);d([b({attribute:"child-list",type:Boolean,reflect:!0})],qe.prototype,"childList",2);d([b({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);d([F("disabled")],qe.prototype,"handleDisabledChange",1);d([F("attr",{waitUntilFirstUpdate:!0}),F("attr-old-value",{waitUntilFirstUpdate:!0}),F("char-data",{waitUntilFirstUpdate:!0}),F("char-data-old-value",{waitUntilFirstUpdate:!0}),F("childList",{waitUntilFirstUpdate:!0})],qe.prototype,"handleChange",1);qe.define("sl-mutation-observer");At.define("sl-popup");var Sd=X`
  ${Q}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,ii=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*t,i=s-this.value/100*s;this.indicatorOffset=`${i}px`}}render(){return R`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};ii.styles=Sd;d([H(".progress-ring__indicator")],ii.prototype,"indicator",2);d([it()],ii.prototype,"indicatorOffset",2);d([b({type:Number,reflect:!0})],ii.prototype,"value",2);d([b()],ii.prototype,"label",2);ii.define("sl-progress-ring");var Ad=X`
  ${Q}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,$e=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return R`
      <div
        part="base"
        class=${st({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};$e.styles=Ad;$e.dependencies={"sl-icon":zt};d([H(".option__label")],$e.prototype,"defaultSlot",2);d([it()],$e.prototype,"current",2);d([it()],$e.prototype,"selected",2);d([it()],$e.prototype,"hasHover",2);d([b({reflect:!0})],$e.prototype,"value",2);d([b({type:Boolean,reflect:!0})],$e.prototype,"disabled",2);d([F("disabled")],$e.prototype,"handleDisabledChange",1);d([F("selected")],$e.prototype,"handleSelectedChange",1);d([F("value")],$e.prototype,"handleValueChange",1);$e.define("sl-option");var zd=X`
  ${Q}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=(e,t)=>{var i;const s=e._$AN;if(s===void 0)return!1;for(const o of s)(i=o._$AO)==null||i.call(o,t,!1),Ai(o,t);return!0},go=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while((s==null?void 0:s.size)===0)},Ua=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Td(t)}};function Ed(e){this._$AN!==void 0?(go(this),this._$AM=e,Ua(this)):this._$AM=e}function Ld(e,t=!1,s=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)Ai(i[r],!1),go(i[r]);else i!=null&&(Ai(i,!1),go(i));else Ai(this,e)}const Td=e=>{e.type==Ve.CHILD&&(e._$AP??(e._$AP=Ld),e._$AQ??(e._$AQ=Ed))};class Od extends Ui{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),Ua(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),s&&(Ai(this,t),go(this))}setValue(t){if(Ba(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Md=()=>new Id;class Id{}const Wo=new WeakMap,Dd=Hi(class extends Od{render(e){return Et}update(e,[t]){var i;const s=t!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=t,this.ct=(i=e.options)==null?void 0:i.host,this.ot(this.lt=e.element)),Et}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let s=Wo.get(t);s===void 0&&(s=new WeakMap,Wo.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ct,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=Wo.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Pd=class{constructor(e,t,s){this.popupRef=Md(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(o=i.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),o=i==null?void 0:i.assignedElements({flatten:!0}).filter(h=>h.localName==="sl-menu")[0],r=this.localize.dir()==="rtl";if(!o)return;const{left:n,top:l,width:a,height:c}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?n+a:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=s}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const i of t.assignedElements())if(s=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let i=1;i!==s.length;++i)s[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,r)=>{var n;const l=(n=t.get(r))!=null?n:new CSSUnitValue(0,"px"),c=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return o-c.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?R`
      <sl-popup
        ${Dd(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:R` <slot name="submenu" hidden></slot> `}},Ce=class extends K{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new xt(this),this.hasSlotController=new fe(this,"submenu"),this.submenuController=new Pd(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return id(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return R`
      <div
        id="anchor"
        part="base"
        class=${st({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};Ce.styles=zd;Ce.dependencies={"sl-icon":zt,"sl-popup":At};d([H("slot:not([name])")],Ce.prototype,"defaultSlot",2);d([H(".menu-item")],Ce.prototype,"menuItem",2);d([b()],Ce.prototype,"type",2);d([b({type:Boolean,reflect:!0})],Ce.prototype,"checked",2);d([b()],Ce.prototype,"value",2);d([b({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);d([F("checked")],Ce.prototype,"handleCheckedChange",1);d([F("disabled")],Ce.prototype,"handleDisabledChange",1);d([F("type")],Ce.prototype,"handleTypeChange",1);Ce.define("sl-menu-item");var Bd=X`
  ${Q}
  ${ji}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,ht=class extends K{constructor(){super(...arguments),this.formControlController=new ts(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new fe(this,"help-text","label"),this.localize=new xt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,i){this.input.setRangeText(e,t,s,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&!this.readonly,r=o&&(typeof this.value=="number"||this.value.length>0);return R`
      <div
        part="form-control"
        class=${st({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${st({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${G(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${G(this.placeholder)}
              minlength=${G(this.minlength)}
              maxlength=${G(this.maxlength)}
              min=${G(this.min)}
              max=${G(this.max)}
              step=${G(this.step)}
              .value=${Es(this.value)}
              autocapitalize=${G(this.autocapitalize)}
              autocomplete=${G(this.autocomplete)}
              autocorrect=${G(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${G(this.pattern)}
              enterkeyhint=${G(this.enterkeyhint)}
              inputmode=${G(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?R`
                  <button
                    part="clear-button"
                    class=${st({input__clear:!0,"input__clear--visible":r})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?R`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?R`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:R`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ht.styles=Bd;ht.dependencies={"sl-icon":zt};d([H(".input__control")],ht.prototype,"input",2);d([it()],ht.prototype,"hasFocus",2);d([b()],ht.prototype,"title",2);d([b({reflect:!0})],ht.prototype,"type",2);d([b()],ht.prototype,"name",2);d([b()],ht.prototype,"value",2);d([Ls()],ht.prototype,"defaultValue",2);d([b({reflect:!0})],ht.prototype,"size",2);d([b({type:Boolean,reflect:!0})],ht.prototype,"filled",2);d([b({type:Boolean,reflect:!0})],ht.prototype,"pill",2);d([b()],ht.prototype,"label",2);d([b({attribute:"help-text"})],ht.prototype,"helpText",2);d([b({type:Boolean})],ht.prototype,"clearable",2);d([b({type:Boolean,reflect:!0})],ht.prototype,"disabled",2);d([b()],ht.prototype,"placeholder",2);d([b({type:Boolean,reflect:!0})],ht.prototype,"readonly",2);d([b({attribute:"password-toggle",type:Boolean})],ht.prototype,"passwordToggle",2);d([b({attribute:"password-visible",type:Boolean})],ht.prototype,"passwordVisible",2);d([b({attribute:"no-spin-buttons",type:Boolean})],ht.prototype,"noSpinButtons",2);d([b({reflect:!0})],ht.prototype,"form",2);d([b({type:Boolean,reflect:!0})],ht.prototype,"required",2);d([b()],ht.prototype,"pattern",2);d([b({type:Number})],ht.prototype,"minlength",2);d([b({type:Number})],ht.prototype,"maxlength",2);d([b()],ht.prototype,"min",2);d([b()],ht.prototype,"max",2);d([b()],ht.prototype,"step",2);d([b()],ht.prototype,"autocapitalize",2);d([b()],ht.prototype,"autocorrect",2);d([b()],ht.prototype,"autocomplete",2);d([b({type:Boolean})],ht.prototype,"autofocus",2);d([b()],ht.prototype,"enterkeyhint",2);d([b({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],ht.prototype,"spellcheck",2);d([b()],ht.prototype,"inputmode",2);d([F("disabled",{waitUntilFirstUpdate:!0})],ht.prototype,"handleDisabledChange",1);d([F("step",{waitUntilFirstUpdate:!0})],ht.prototype,"handleStepChange",1);d([F("value",{waitUntilFirstUpdate:!0})],ht.prototype,"handleValueChange",1);ht.define("sl-input");var Rd=X`
  ${Q}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Er=class extends K{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],s=e.composedPath().find(o=>{var r;return t.includes(((r=o==null?void 0:o.getAttribute)==null?void 0:r.call(o,"role"))||"")});if(!s)return;const i=s;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),s=this.getCurrentItem();let i=s?t.indexOf(s):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===e?"0":"-1")})}render(){return R`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Er.styles=Rd;d([H("slot")],Er.prototype,"defaultSlot",2);Er.define("sl-menu");var Vd=X`
  ${Q}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,qa=class extends K{render(){return R` <slot part="base" class="menu-label"></slot> `}};qa.styles=Vd;qa.define("sl-menu-label");var Fd=X`
  ${Q}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Ms=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";e.preventDefault(),Si(this.base,{onMove:i=>{this.position=parseFloat(Bt(i/t*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const i=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight")&&(o-=i),(t&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft")&&(o+=i),e.key==="Home"&&(o=0),e.key==="End"&&(o=100),o=Bt(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return R`
      <div
        part="base"
        id="image-comparer"
        class=${st({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${ne({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${ne({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Ms.styles=Fd;Ms.scopedElement={"sl-icon":zt};d([H(".image-comparer")],Ms.prototype,"base",2);d([H(".image-comparer__handle")],Ms.prototype,"handle",2);d([b({type:Number,reflect:!0})],Ms.prototype,"position",2);d([F("position",{waitUntilFirstUpdate:!0})],Ms.prototype,"handlePositionChange",1);Ms.define("sl-image-comparer");var Nd=X`
  ${Q}

  :host {
    display: block;
  }
`,Ko=new Map;function Hd(e,t="cors"){const s=Ko.get(e);if(s!==void 0)return Promise.resolve(s);const i=fetch(e,{mode:t}).then(async o=>{const r={ok:o.ok,status:o.status,html:await o.text()};return Ko.set(e,r),r});return Ko.set(e,i),i}var oi=class extends K{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(s=>t.setAttribute(s.name,s.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await Hd(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return R`<slot></slot>`}};oi.styles=Nd;d([b()],oi.prototype,"src",2);d([b()],oi.prototype,"mode",2);d([b({attribute:"allow-scripts",type:Boolean})],oi.prototype,"allowScripts",2);d([F("src")],oi.prototype,"handleSrcChange",1);oi.define("sl-include");zt.define("sl-icon");Nt.define("sl-icon-button");var Ud=X`
  ${Q}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function qd(e){return!!(e.offsetParent||e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function jd(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!qd(e)||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Wd(e){var t,s;const i=cr(e),o=(t=i[0])!=null?t:null,r=(s=i[i.length-1])!=null?s:null;return{start:o,end:r}}function cr(e){const t=[];function s(i){if(i instanceof Element){if(i.hasAttribute("inert"))return;!t.includes(i)&&jd(i)&&t.push(i);const o=r=>{var n;return((n=r.getRootNode({composed:!0}))==null?void 0:n.host)!==e};i instanceof HTMLSlotElement&&o(i)&&i.assignedElements({flatten:!0}).forEach(r=>{s(r)}),i.shadowRoot!==null&&i.shadowRoot.mode==="open"&&s(i.shadowRoot)}[...i.children].forEach(o=>s(o))}return s(e),t.sort((i,o)=>{const r=Number(i.getAttribute("tabindex"))||0;return(Number(o.getAttribute("tabindex"))||0)-r})}var Qt=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,i,o;const r=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(r==null?void 0:r.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const s=t.getAllItems(),i=s[0],o=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Wd(i).start);let s;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=t.button;break;default:s=t}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,te(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,te(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Rt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Lt(this,"dropdown.show",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Rt(this);const{keyframes:e,options:t}=Lt(this,"dropdown.hide",{dir:this.localize.dir()});await It(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return R`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${st({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Qt.styles=Ud;Qt.dependencies={"sl-popup":At};d([H(".dropdown")],Qt.prototype,"popup",2);d([H(".dropdown__trigger")],Qt.prototype,"trigger",2);d([H(".dropdown__panel")],Qt.prototype,"panel",2);d([b({type:Boolean,reflect:!0})],Qt.prototype,"open",2);d([b({reflect:!0})],Qt.prototype,"placement",2);d([b({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);d([b({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Qt.prototype,"stayOpenOnSelect",2);d([b({attribute:!1})],Qt.prototype,"containingElement",2);d([b({type:Number})],Qt.prototype,"distance",2);d([b({type:Number})],Qt.prototype,"skidding",2);d([b({type:Boolean})],Qt.prototype,"hoist",2);d([F("open",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleOpenChange",1);Ct("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});Ct("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Qt.define("sl-dropdown");var Eo=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?e:t,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),o=s[i]+this.unit,r=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(r,{style:"unit",unit:o,unitDisplay:this.display})}};d([b({type:Number})],Eo.prototype,"value",2);d([b()],Eo.prototype,"unit",2);d([b()],Eo.prototype,"display",2);Eo.define("sl-format-bytes");var be=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return R`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};d([b()],be.prototype,"date",2);d([b()],be.prototype,"weekday",2);d([b()],be.prototype,"era",2);d([b()],be.prototype,"year",2);d([b()],be.prototype,"month",2);d([b()],be.prototype,"day",2);d([b()],be.prototype,"hour",2);d([b()],be.prototype,"minute",2);d([b()],be.prototype,"second",2);d([b({attribute:"time-zone-name"})],be.prototype,"timeZoneName",2);d([b({attribute:"time-zone"})],be.prototype,"timeZone",2);d([b({attribute:"hour-format"})],be.prototype,"hourFormat",2);be.define("sl-format-date");var Ie=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};d([b({type:Number})],Ie.prototype,"value",2);d([b()],Ie.prototype,"type",2);d([b({attribute:"no-grouping",type:Boolean})],Ie.prototype,"noGrouping",2);d([b()],Ie.prototype,"currency",2);d([b({attribute:"currency-display"})],Ie.prototype,"currencyDisplay",2);d([b({attribute:"minimum-integer-digits",type:Number})],Ie.prototype,"minimumIntegerDigits",2);d([b({attribute:"minimum-fraction-digits",type:Number})],Ie.prototype,"minimumFractionDigits",2);d([b({attribute:"maximum-fraction-digits",type:Number})],Ie.prototype,"maximumFractionDigits",2);d([b({attribute:"minimum-significant-digits",type:Number})],Ie.prototype,"minimumSignificantDigits",2);d([b({attribute:"maximum-significant-digits",type:Number})],Ie.prototype,"maximumSignificantDigits",2);Ie.define("sl-format-number");var Kd=X`
  ${Q}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Lo=class extends K{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Lo.styles=Kd;d([b({type:Boolean,reflect:!0})],Lo.prototype,"vertical",2);d([F("vertical")],Lo.prototype,"handleVerticalChange",1);Lo.define("sl-divider");var Gd=X`
  ${Q}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*ja(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*wl(ja(e.shadowRoot.activeElement))))}function Yd(){return[...ja()].pop()}var vi=[],Wa=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=s=>{var i,o;if(s.key!=="Tab"||this.isExternalActivated||!this.isActive())return;s.shiftKey?this.tabDirection="backward":this.tabDirection="forward",s.preventDefault();const r=cr(this.element),n=Yd();let l=r.findIndex(c=>c===n);if(l===-1){this.currentFocus=r[0],(i=this.currentFocus)==null||i.focus({preventScroll:!0});return}const a=this.tabDirection==="forward"?1:-1;l+a>=r.length?l=0:l+a<0?l=r.length-1:l+=a,this.currentFocus=r[l],(o=this.currentFocus)==null||o.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){vi.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){vi=vi.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return vi[vi.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=cr(this.element);if(!this.element.matches(":focus-within")){const s=t[0],i=t[t.length-1],o=this.tabDirection==="forward"?s:i;typeof(o==null?void 0:o.focus)=="function"&&(this.currentFocus=o,o.focus({preventScroll:!0}))}}}};function an(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ve=class extends K{constructor(){super(...arguments),this.hasSlotController=new fe(this,"footer"),this.localize=new xt(this),this.modal=new Wa(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),$i(this)))}disconnectedCallback(){super.disconnectedCallback(),Ci(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=Lt(this,"drawer.denyClose",{dir:this.localize.dir()});It(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),$i(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Rt(this.drawer),Rt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Lt(this,`drawer.show${an(this.placement)}`,{dir:this.localize.dir()}),s=Lt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([It(this.panel,t.keyframes,t.options),It(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Ci(this)),await Promise.all([Rt(this.drawer),Rt(this.overlay)]);const e=Lt(this,`drawer.hide${an(this.placement)}`,{dir:this.localize.dir()}),t=Lt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([It(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),It(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),$i(this)),this.open&&this.contained&&(this.modal.deactivate(),Ci(this))}async show(){if(!this.open)return this.open=!0,te(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,te(this,"sl-after-hide")}render(){return R`
      <div
        part="base"
        class=${st({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${G(this.noHeader?this.label:void 0)}
          aria-labelledby=${G(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":R`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ve.styles=Gd;ve.dependencies={"sl-icon-button":Nt};d([H(".drawer")],ve.prototype,"drawer",2);d([H(".drawer__panel")],ve.prototype,"panel",2);d([H(".drawer__overlay")],ve.prototype,"overlay",2);d([b({type:Boolean,reflect:!0})],ve.prototype,"open",2);d([b({reflect:!0})],ve.prototype,"label",2);d([b({reflect:!0})],ve.prototype,"placement",2);d([b({type:Boolean,reflect:!0})],ve.prototype,"contained",2);d([b({attribute:"no-header",type:Boolean,reflect:!0})],ve.prototype,"noHeader",2);d([F("open",{waitUntilFirstUpdate:!0})],ve.prototype,"handleOpenChange",1);d([F("contained",{waitUntilFirstUpdate:!0})],ve.prototype,"handleNoModalChange",1);Ct("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ct("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});Ct("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ct("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});Ct("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});Ct("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});Ct("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});Ct("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});Ct("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});Ct("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ct("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ve.define("sl-drawer");var Xd=X`
  ${Q}

  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Wt=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),s=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let o=this.from,r="";s?[o,r]=this.from.trim().split("."):i&&([o,r]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(o):null;n?i?e=n.getAttribute(r)||"":s?e=n[r]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),o=e==="success"?this.successIcon:this.errorIcon,r=Lt(this,"copy.in",{dir:"ltr"}),n=Lt(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?s:i,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,o.hidden=!1,await o.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return R`
      <sl-tooltip
        class=${st({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Wt.styles=Xd;Wt.dependencies={"sl-icon":zt,"sl-tooltip":qt};d([H('slot[name="copy-icon"]')],Wt.prototype,"copyIcon",2);d([H('slot[name="success-icon"]')],Wt.prototype,"successIcon",2);d([H('slot[name="error-icon"]')],Wt.prototype,"errorIcon",2);d([H("sl-tooltip")],Wt.prototype,"tooltip",2);d([it()],Wt.prototype,"isCopying",2);d([it()],Wt.prototype,"status",2);d([b()],Wt.prototype,"value",2);d([b()],Wt.prototype,"from",2);d([b({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2);d([b({attribute:"copy-label"})],Wt.prototype,"copyLabel",2);d([b({attribute:"success-label"})],Wt.prototype,"successLabel",2);d([b({attribute:"error-label"})],Wt.prototype,"errorLabel",2);d([b({attribute:"feedback-duration",type:Number})],Wt.prototype,"feedbackDuration",2);d([b({attribute:"tooltip-placement"})],Wt.prototype,"tooltipPlacement",2);d([b({type:Boolean})],Wt.prototype,"hoist",2);Ct("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Ct("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Wt.define("sl-copy-button");var Zd=X`
  ${Q}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,De=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Rt(this.body);const{keyframes:t,options:s}=Lt(this,"details.show",{dir:this.localize.dir()});await It(this.body,fo(t,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Rt(this.body);const{keyframes:t,options:s}=Lt(this,"details.hide",{dir:this.localize.dir()});await It(this.body,fo(t,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,te(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,te(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return R`
      <details
        part="base"
        class=${st({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};De.styles=Zd;De.dependencies={"sl-icon":zt};d([H(".details")],De.prototype,"details",2);d([H(".details__header")],De.prototype,"header",2);d([H(".details__body")],De.prototype,"body",2);d([H(".details__expand-icon-slot")],De.prototype,"expandIconSlot",2);d([b({type:Boolean,reflect:!0})],De.prototype,"open",2);d([b()],De.prototype,"summary",2);d([b({type:Boolean,reflect:!0})],De.prototype,"disabled",2);d([F("open",{waitUntilFirstUpdate:!0})],De.prototype,"handleOpenChange",1);Ct("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Ct("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});De.define("sl-details");var Qd=X`
  ${Q}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,je=class extends K{constructor(){super(...arguments),this.hasSlotController=new fe(this,"footer"),this.localize=new xt(this),this.modal=new Wa(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),$i(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Ci(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=Lt(this,"dialog.denyClose",{dir:this.localize.dir()});It(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),$i(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([Rt(this.dialog),Rt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Lt(this,"dialog.show",{dir:this.localize.dir()}),s=Lt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([It(this.panel,t.keyframes,t.options),It(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Rt(this.dialog),Rt(this.overlay)]);const e=Lt(this,"dialog.hide",{dir:this.localize.dir()}),t=Lt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([It(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),It(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Ci(this);const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,te(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,te(this,"sl-after-hide")}render(){return R`
      <div
        part="base"
        class=${st({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${G(this.noHeader?this.label:void 0)}
          aria-labelledby=${G(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":R`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};je.styles=Qd;je.dependencies={"sl-icon-button":Nt};d([H(".dialog")],je.prototype,"dialog",2);d([H(".dialog__panel")],je.prototype,"panel",2);d([H(".dialog__overlay")],je.prototype,"overlay",2);d([b({type:Boolean,reflect:!0})],je.prototype,"open",2);d([b({reflect:!0})],je.prototype,"label",2);d([b({attribute:"no-header",type:Boolean,reflect:!0})],je.prototype,"noHeader",2);d([F("open",{waitUntilFirstUpdate:!0})],je.prototype,"handleOpenChange",1);Ct("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ct("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ct("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});Ct("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});Ct("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});je.define("sl-dialog");var Jd=X`
  ${Q}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Ka=class extends K{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return R` <slot></slot> `}};Ka.styles=Jd;Ka.define("sl-carousel-item");jt.define("sl-checkbox");var tu=X`
  ${Q}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,St=class extends K{constructor(){super(...arguments),this.formControlController=new ts(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new fe(this,"[default]","prefix","suffix"),this.localize=new xt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ko}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?mo`a`:mo`button`;return ki`
      <${t}
        part="base"
        class=${st({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${G(e?void 0:this.disabled)}
        type=${G(e?void 0:this.type)}
        title=${this.title}
        name=${G(e?void 0:this.name)}
        value=${G(e?void 0:this.value)}
        href=${G(e?this.href:void 0)}
        target=${G(e?this.target:void 0)}
        download=${G(e?this.download:void 0)}
        rel=${G(e?this.rel:void 0)}
        role=${G(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?ki` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?ki`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};St.styles=Fa;St.dependencies={"sl-icon":zt,"sl-spinner":Ao};d([H(".button")],St.prototype,"button",2);d([it()],St.prototype,"hasFocus",2);d([it()],St.prototype,"invalid",2);d([b()],St.prototype,"title",2);d([b({reflect:!0})],St.prototype,"variant",2);d([b({reflect:!0})],St.prototype,"size",2);d([b({type:Boolean,reflect:!0})],St.prototype,"caret",2);d([b({type:Boolean,reflect:!0})],St.prototype,"disabled",2);d([b({type:Boolean,reflect:!0})],St.prototype,"loading",2);d([b({type:Boolean,reflect:!0})],St.prototype,"outline",2);d([b({type:Boolean,reflect:!0})],St.prototype,"pill",2);d([b({type:Boolean,reflect:!0})],St.prototype,"circle",2);d([b()],St.prototype,"type",2);d([b()],St.prototype,"name",2);d([b()],St.prototype,"value",2);d([b()],St.prototype,"href",2);d([b()],St.prototype,"target",2);d([b()],St.prototype,"rel",2);d([b()],St.prototype,"download",2);d([b()],St.prototype,"form",2);d([b({attribute:"formaction"})],St.prototype,"formAction",2);d([b({attribute:"formenctype"})],St.prototype,"formEnctype",2);d([b({attribute:"formmethod"})],St.prototype,"formMethod",2);d([b({attribute:"formnovalidate",type:Boolean})],St.prototype,"formNoValidate",2);d([b({attribute:"formtarget"})],St.prototype,"formTarget",2);d([F("disabled",{waitUntilFirstUpdate:!0})],St.prototype,"handleDisabledChange",1);function Gt(e,t){eu(e)&&(e="100%");const s=su(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),s&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function so(e){return Math.min(1,Math.max(0,e))}function eu(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function su(e){return typeof e=="string"&&e.indexOf("%")!==-1}function Ga(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function io(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Cs(e){return e.length===1?"0"+e:String(e)}function iu(e,t,s){return{r:Gt(e,255)*255,g:Gt(t,255)*255,b:Gt(s,255)*255}}function ln(e,t,s){e=Gt(e,255),t=Gt(t,255),s=Gt(s,255);const i=Math.max(e,t,s),o=Math.min(e,t,s);let r=0,n=0;const l=(i+o)/2;if(i===o)n=0,r=0;else{const a=i-o;switch(n=l>.5?a/(2-i-o):a/(i+o),i){case e:r=(t-s)/a+(t<s?6:0);break;case t:r=(s-e)/a+2;break;case s:r=(e-t)/a+4;break}r/=6}return{h:r,s:n,l}}function Go(e,t,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(t-e)*(6*s):s<1/2?t:s<2/3?e+(t-e)*(2/3-s)*6:e}function ou(e,t,s){let i,o,r;if(e=Gt(e,360),t=Gt(t,100),s=Gt(s,100),t===0)o=s,r=s,i=s;else{const n=s<.5?s*(1+t):s+t-s*t,l=2*s-n;i=Go(l,n,e+1/3),o=Go(l,n,e),r=Go(l,n,e-1/3)}return{r:i*255,g:o*255,b:r*255}}function cn(e,t,s){e=Gt(e,255),t=Gt(t,255),s=Gt(s,255);const i=Math.max(e,t,s),o=Math.min(e,t,s);let r=0;const n=i,l=i-o,a=i===0?0:l/i;if(i===o)r=0;else{switch(i){case e:r=(t-s)/l+(t<s?6:0);break;case t:r=(s-e)/l+2;break;case s:r=(e-t)/l+4;break}r/=6}return{h:r,s:a,v:n}}function ru(e,t,s){e=Gt(e,360)*6,t=Gt(t,100),s=Gt(s,100);const i=Math.floor(e),o=e-i,r=s*(1-t),n=s*(1-o*t),l=s*(1-(1-o)*t),a=i%6,c=[s,n,r,r,l,s][a],h=[l,s,s,n,r,r][a],u=[r,r,l,s,s,n][a];return{r:c*255,g:h*255,b:u*255}}function dn(e,t,s,i){const o=[Cs(Math.round(e).toString(16)),Cs(Math.round(t).toString(16)),Cs(Math.round(s).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function nu(e,t,s,i,o){const r=[Cs(Math.round(e).toString(16)),Cs(Math.round(t).toString(16)),Cs(Math.round(s).toString(16)),Cs(au(i))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function au(e){return Math.round(parseFloat(e)*255).toString(16)}function un(e){return ce(e)/255}function ce(e){return parseInt(e,16)}function lu(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const dr={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function cu(e){let t={r:0,g:0,b:0},s=1,i=null,o=null,r=null,n=!1,l=!1;return typeof e=="string"&&(e=hu(e)),typeof e=="object"&&(Xe(e.r)&&Xe(e.g)&&Xe(e.b)?(t=iu(e.r,e.g,e.b),n=!0,l=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Xe(e.h)&&Xe(e.s)&&Xe(e.v)?(i=io(e.s),o=io(e.v),t=ru(e.h,i,o),n=!0,l="hsv"):Xe(e.h)&&Xe(e.s)&&Xe(e.l)&&(i=io(e.s),r=io(e.l),t=ou(e.h,i,r),n=!0,l="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(s=e.a)),s=Ga(s),{ok:n,format:e.format||l,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:s}}const du="[-\\+]?\\d+%?",uu="[-\\+]?\\d*\\.\\d+%?",ns=`(?:${uu})|(?:${du})`,Yo=`[\\s|\\(]+(${ns})[,|\\s]+(${ns})[,|\\s]+(${ns})\\s*\\)?`,Xo=`[\\s|\\(]+(${ns})[,|\\s]+(${ns})[,|\\s]+(${ns})[,|\\s]+(${ns})\\s*\\)?`,Ee={CSS_UNIT:new RegExp(ns),rgb:new RegExp("rgb"+Yo),rgba:new RegExp("rgba"+Xo),hsl:new RegExp("hsl"+Yo),hsla:new RegExp("hsla"+Xo),hsv:new RegExp("hsv"+Yo),hsva:new RegExp("hsva"+Xo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function hu(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(dr[e])e=dr[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=Ee.rgb.exec(e);return s?{r:s[1],g:s[2],b:s[3]}:(s=Ee.rgba.exec(e),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=Ee.hsl.exec(e),s?{h:s[1],s:s[2],l:s[3]}:(s=Ee.hsla.exec(e),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=Ee.hsv.exec(e),s?{h:s[1],s:s[2],v:s[3]}:(s=Ee.hsva.exec(e),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=Ee.hex8.exec(e),s?{r:ce(s[1]),g:ce(s[2]),b:ce(s[3]),a:un(s[4]),format:t?"name":"hex8"}:(s=Ee.hex6.exec(e),s?{r:ce(s[1]),g:ce(s[2]),b:ce(s[3]),format:t?"name":"hex"}:(s=Ee.hex4.exec(e),s?{r:ce(s[1]+s[1]),g:ce(s[2]+s[2]),b:ce(s[3]+s[3]),a:un(s[4]+s[4]),format:t?"name":"hex8"}:(s=Ee.hex3.exec(e),s?{r:ce(s[1]+s[1]),g:ce(s[2]+s[2]),b:ce(s[3]+s[3]),format:t?"name":"hex"}:!1)))))))))}function Xe(e){return!!Ee.CSS_UNIT.exec(String(e))}class Mt{constructor(t="",s={}){if(t instanceof Mt)return t;typeof t=="number"&&(t=lu(t)),this.originalInput=t;const i=cu(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??i.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let s,i,o;const r=t.r/255,n=t.g/255,l=t.b/255;return r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),l<=.03928?o=l/12.92:o=Math.pow((l+.055)/1.055,2.4),.2126*s+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=Ga(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=cn(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=cn(this.r,this.g,this.b),s=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?`hsv(${s}, ${i}%, ${o}%)`:`hsva(${s}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){const t=ln(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=ln(this.r,this.g,this.b),s=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?`hsl(${s}, ${i}%, ${o}%)`:`hsla(${s}, ${i}%, ${o}%, ${this.roundA})`}toHex(t=!1){return dn(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return nu(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),s=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${t}, ${s}, ${i})`:`rgba(${t}, ${s}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=s=>`${Math.round(Gt(s,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=s=>Math.round(Gt(s,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+dn(this.r,this.g,this.b,!1);for(const[s,i]of Object.entries(dr))if(t===i)return s;return!1}toString(t){const s=!!t;t=t??this.format;let i=!1;const o=this.a<1&&this.a>=0;return!s&&o&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new Mt(this.toString())}lighten(t=10){const s=this.toHsl();return s.l+=t/100,s.l=so(s.l),new Mt(s)}brighten(t=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(t/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(t/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(t/100)))),new Mt(s)}darken(t=10){const s=this.toHsl();return s.l-=t/100,s.l=so(s.l),new Mt(s)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const s=this.toHsl();return s.s-=t/100,s.s=so(s.s),new Mt(s)}saturate(t=10){const s=this.toHsl();return s.s+=t/100,s.s=so(s.s),new Mt(s)}greyscale(){return this.desaturate(100)}spin(t){const s=this.toHsl(),i=(s.h+t)%360;return s.h=i<0?360+i:i,new Mt(s)}mix(t,s=50){const i=this.toRgb(),o=new Mt(t).toRgb(),r=s/100,n={r:(o.r-i.r)*r+i.r,g:(o.g-i.g)*r+i.g,b:(o.b-i.b)*r+i.b,a:(o.a-i.a)*r+i.a};return new Mt(n)}analogous(t=6,s=30){const i=this.toHsl(),o=360/s,r=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,r.push(new Mt(i));return r}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new Mt(t)}monochromatic(t=6){const s=this.toHsv(),{h:i}=s,{s:o}=s;let{v:r}=s;const n=[],l=1/t;for(;t--;)n.push(new Mt({h:i,s:o,v:r})),r=(r+l)%1;return n}splitcomplement(){const t=this.toHsl(),{h:s}=t;return[this,new Mt({h:(s+72)%360,s:t.s,l:t.l}),new Mt({h:(s+216)%360,s:t.s,l:t.l})]}onBackground(t){const s=this.toRgb(),i=new Mt(t).toRgb(),o=s.a+i.a*(1-s.a);return new Mt({r:(s.r*s.a+i.r*i.a*(1-s.a))/o,g:(s.g*s.a+i.g*i.a*(1-s.a))/o,b:(s.b*s.a+i.b*i.a*(1-s.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const s=this.toHsl(),{h:i}=s,o=[this],r=360/t;for(let n=1;n<t;n++)o.push(new Mt({h:(i+n*r)%360,s:s.s,l:s.l}));return o}equals(t){return this.toRgbString()===new Mt(t).toRgbString()}}var hn="EyeDropper"in window,mt=class extends K{constructor(){super(),this.formControlController=new ts(this),this.isSafeValue=!1,this.localize=new xt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value,r=this.value;s.focus(),e.preventDefault(),Si(t,{onMove:n=>{this.alpha=Bt(n/i*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value,r=this.value;s.focus(),e.preventDefault(),Si(t,{onMove:n=>{this.hue=Bt(n/i*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),s=t.querySelector(".color-picker__grid-handle"),{width:i,height:o}=t.getBoundingClientRect();let r=this.value,n=this.value;s.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Si(t,{onMove:(l,a)=>{this.saturation=Bt(l/i*100,0,100),this.brightness=Bt(100-a/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Bt(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Bt(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Bt(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Bt(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,s=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Bt(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Bt(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Bt(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Bt(this.brightness-t,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,s=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new Mt(e);if(!t.isValid)return null;const s=t.toHsl(),i={h:s.h,s:s.s*100,l:s.l*100,a:s.a},o=t.toRgb(),r=t.toHexString(),n=t.toHex8String(),l=t.toHsv(),a={h:l.h,s:l.s*100,v:l.v*100,a:l.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:a.h,s:a.s,v:a.v,string:this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)},hsva:{h:a.h,s:a.s,v:a.v,a:a.a,string:this.setLetterCase(`hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(n)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!hn)return;new EyeDropper().open().then(t=>{const s=this.value;this.setColor(t.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,s,i=100){const o=new Mt(`hsva(${e}, ${t}, ${s}, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(t);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=R`
      <div
        part="base"
        class=${st({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?R`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ne({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${st({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ne({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${G(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${ne({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${G(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?R`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ne({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${ne({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${G(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${ne({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":R`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${hn?R`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${s.length>0?R`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(o=>{const r=this.parseColor(o);return r?R`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${G(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(r.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${ne({backgroundColor:r.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:R`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${st({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${ne({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};mt.styles=tu;mt.dependencies={"sl-button-group":Os,"sl-button":St,"sl-dropdown":Qt,"sl-icon":zt,"sl-input":ht,"sl-visually-hidden":_r};d([H('[part~="base"]')],mt.prototype,"base",2);d([H('[part~="input"]')],mt.prototype,"input",2);d([H(".color-dropdown")],mt.prototype,"dropdown",2);d([H('[part~="preview"]')],mt.prototype,"previewButton",2);d([H('[part~="trigger"]')],mt.prototype,"trigger",2);d([it()],mt.prototype,"hasFocus",2);d([it()],mt.prototype,"isDraggingGridHandle",2);d([it()],mt.prototype,"isEmpty",2);d([it()],mt.prototype,"inputValue",2);d([it()],mt.prototype,"hue",2);d([it()],mt.prototype,"saturation",2);d([it()],mt.prototype,"brightness",2);d([it()],mt.prototype,"alpha",2);d([b()],mt.prototype,"value",2);d([Ls()],mt.prototype,"defaultValue",2);d([b()],mt.prototype,"label",2);d([b()],mt.prototype,"format",2);d([b({type:Boolean,reflect:!0})],mt.prototype,"inline",2);d([b({reflect:!0})],mt.prototype,"size",2);d([b({attribute:"no-format-toggle",type:Boolean})],mt.prototype,"noFormatToggle",2);d([b()],mt.prototype,"name",2);d([b({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);d([b({type:Boolean})],mt.prototype,"hoist",2);d([b({type:Boolean})],mt.prototype,"opacity",2);d([b({type:Boolean})],mt.prototype,"uppercase",2);d([b()],mt.prototype,"swatches",2);d([b({reflect:!0})],mt.prototype,"form",2);d([b({type:Boolean,reflect:!0})],mt.prototype,"required",2);d([F("format",{waitUntilFirstUpdate:!0})],mt.prototype,"handleFormatChange",1);d([F("opacity",{waitUntilFirstUpdate:!0})],mt.prototype,"handleOpacityChange",1);d([F("value")],mt.prototype,"handleValueChange",1);mt.define("sl-color-picker");var pu=X`
  ${Q}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Ya=class extends K{constructor(){super(...arguments),this.hasSlotController=new fe(this,"footer","header","image")}render(){return R`
      <div
        part="base"
        class=${st({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ya.styles=pu;Ya.define("sl-card");var fu=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},mu=X`
  ${Q}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,gu=class{constructor(e){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=t=>{if(t.pointerType==="touch")return;this.mouseDragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{const s=this.host.scrollContainer,i=!!t.movementX||!!t.movementY;!this.dragging&&i?(s.setPointerCapture(t.pointerId),this.handleDragStart()):s.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.host.scrollContainer.releasePointerCapture(t.pointerId),this.handleDragEnd()},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("scrollend",this.handleScrollEnd,!0),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("scrollend",this.handleScrollEnd,!0),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove);const s=t.scrollLeft,i=t.scrollTop;t.style.removeProperty("scroll-snap-type");const o=t.scrollLeft,r=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:s,top:i,behavior:"auto"}),t.scrollTo({left:o,top:r,behavior:Ar()?"auto":"smooth"}),requestAnimationFrame(async()=>{(s!==o||i!==r)&&await te(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,e.requestUpdate()})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*bu(e,t){if(e!==void 0){let s=0;for(const i of e)yield t(i,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*vu(e,t,s=1){const i=t===void 0?0:e;t??(t=e);for(let o=i;s>0?o<t:t<o;o+=s)yield o}var yu=(e,t)=>{let s=0;return function(...i){window.clearTimeout(s),s=window.setTimeout(()=>{e.call(this,...i)},t)}},pn=(e,t,s)=>{const i=e[t];e[t]=function(...o){i.call(this,...o),s.call(this,i,...o)}},_u="onscrollend"in window;if(!_u){const e=new Set,t=new WeakMap,s=o=>{e.add(o.pointerId)},i=o=>{e.delete(o.pointerId)};document.addEventListener("pointerdown",s),document.addEventListener("pointerup",i),pn(EventTarget.prototype,"addEventListener",function(o,r){if(r!=="scroll")return;const n=yu(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",n,{passive:!0}),t.set(this,n)}),pn(EventTarget.prototype,"removeEventListener",function(o,r){if(r!=="scroll")return;const n=t.get(this);n&&o.call(this,"scroll",n,{passive:!0})})}var Vt=class extends K{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new fu(this,()=>this.next()),this.scrollController=new gu(this),this.intersectionObserverEntries=new Map,this.localize=new xt(this),this.handleSlotChange=e=>{e.some(s=>[...s.addedNodes,...s.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(s=>{this.intersectionObserverEntries.set(s.target,s);const i=s.target;i.toggleAttribute("inert",!s.isIntersecting),i.classList.toggle("--in-view",s.isIntersecting),i.setAttribute("aria-hidden",s.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:s,loop:i}=this,o=i?e/s:(e-t)/s+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,s=this.localize.dir()==="rtl",i=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!s&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft",r=e.key==="ArrowUp"||!s&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight";e.preventDefault(),r&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;const l=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');l&&l.focus()})}}handleScrollEnd(){const e=this.getSlides(),s=[...this.intersectionObserverEntries.values()].find(i=>i.isIntersecting);if(this.loop&&(s!=null&&s.target.hasAttribute("data-clone"))){const i=Number(s.target.getAttribute("data-clone"));this.goToSlide(i,"auto")}else if(s){const i=e.indexOf(s.target);this.activeSlide=Math.ceil(i/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((t,s)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",s+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,s=e.slice(-t),i=e.slice(0,t);s.reverse().forEach((o,r)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(e.length-r-1)),this.prepend(n)}),i.forEach((o,r)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(r)),this.append(n)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,s)=>{t.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((s,i)=>{(i+t)%t===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:s,loop:i,scrollContainer:o}=this,r=this.getSlides(),n=this.getSlides({excludeClones:!1});if(!r.length)return;const l=i?(e+r.length)%r.length:Bt(e,0,r.length-1);this.activeSlide=l;const a=Bt(e+(i?s:0),0,n.length-1),c=n[a],h=o.getBoundingClientRect(),u=c.getBoundingClientRect();o.scrollTo({left:u.left-h.left+o.scrollLeft,top:u.top-h.top+o.scrollTop,behavior:Ar()?"auto":t})}render(){const{scrollController:e,slidesPerMove:t}=this,s=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),r=this.canScrollNext(),n=this.localize.dir()==="ltr";return R`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${st({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?R`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${st({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${st({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?R`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${bu(vu(s),l=>{const a=l===i;return R`
                    <button
                      part="pagination-item ${a?"pagination-item--active":""}"
                      class="${st({"carousel__pagination-item":!0,"carousel__pagination-item--active":a})}"
                      role="tab"
                      aria-selected="${a?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",l+1,s)}"
                      tabindex=${a?"0":"-1"}
                      @click=${()=>this.goToSlide(l*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};Vt.styles=mu;Vt.dependencies={"sl-icon":zt};d([b({type:Boolean,reflect:!0})],Vt.prototype,"loop",2);d([b({type:Boolean,reflect:!0})],Vt.prototype,"navigation",2);d([b({type:Boolean,reflect:!0})],Vt.prototype,"pagination",2);d([b({type:Boolean,reflect:!0})],Vt.prototype,"autoplay",2);d([b({type:Number,attribute:"autoplay-interval"})],Vt.prototype,"autoplayInterval",2);d([b({type:Number,attribute:"slides-per-page"})],Vt.prototype,"slidesPerPage",2);d([b({type:Number,attribute:"slides-per-move"})],Vt.prototype,"slidesPerMove",2);d([b()],Vt.prototype,"orientation",2);d([b({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],Vt.prototype,"mouseDragging",2);d([H(".carousel__slides")],Vt.prototype,"scrollContainer",2);d([H(".carousel__pagination")],Vt.prototype,"paginationContainer",2);d([it()],Vt.prototype,"activeSlide",2);d([F("loop",{waitUntilFirstUpdate:!0}),F("slidesPerPage",{waitUntilFirstUpdate:!0})],Vt.prototype,"initializeSlides",1);d([F("activeSlide")],Vt.prototype,"handelSlideChange",1);d([F("slidesPerMove")],Vt.prototype,"updateSlidesSnap",1);d([F("autoplay")],Vt.prototype,"handleAutoplayChange",1);d([F("mouseDragging")],Vt.prototype,"handleMouseDraggingChange",1);Vt.define("sl-carousel");St.define("sl-button");Os.define("sl-button-group");var wu=X`
  ${Q}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Ki=class extends K{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return R`
      <span
        part="base"
        class=${st({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ki.styles=wu;d([b({reflect:!0})],Ki.prototype,"variant",2);d([b({type:Boolean,reflect:!0})],Ki.prototype,"pill",2);d([b({type:Boolean,reflect:!0})],Ki.prototype,"pulse",2);Ki.define("sl-badge");var xu=X`
  ${Q}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Gi=class extends K{constructor(){super(...arguments),this.hasSlotController=new fe(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return R`
      <div
        part="base"
        class=${st({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?R`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${G(this.target?this.target:void 0)}"
                rel=${G(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:R`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Gi.styles=xu;d([b()],Gi.prototype,"href",2);d([b()],Gi.prototype,"target",2);d([b()],Gi.prototype,"rel",2);Gi.define("sl-breadcrumb-item");var ku=X`
  ${Q}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,ri=class extends K{constructor(){super(...arguments),this.localize=new xt(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,s)=>{const i=t.querySelector('[slot="separator"]');i===null?t.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),s===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),R`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};ri.styles=ku;ri.dependencies={"sl-icon":zt};d([H("slot")],ri.prototype,"defaultSlot",2);d([H('slot[name="separator"]')],ri.prototype,"separatorSlot",2);d([b()],ri.prototype,"label",2);ri.define("sl-breadcrumb");var $u=X`
  ${Q}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,We=class extends K{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=R`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=R``;return this.initials?t=R`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=R`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,R`
      <div
        part="base"
        class=${st({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};We.styles=$u;We.dependencies={"sl-icon":zt};d([it()],We.prototype,"hasError",2);d([b()],We.prototype,"image",2);d([b()],We.prototype,"label",2);d([b()],We.prototype,"initials",2);d([b()],We.prototype,"loading",2);d([b({reflect:!0})],We.prototype,"shape",2);d([F("image")],We.prototype,"handleImageChange",1);We.define("sl-avatar");var Cu=X`
  ${Q}

  :host {
    display: contents;
  }
`;const Su=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Au=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],zu=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Eu=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Lu=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Tu=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ou=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Mu=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Iu=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Du=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pu=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Bu=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ru=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vu=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Fu=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Nu=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Hu=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Uu=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],qu=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],ju=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Wu=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ku=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Gu=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Yu=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Xu=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Zu=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Qu=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Ju=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],th=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],eh=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],sh=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],ih=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],oh=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rh=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],nh=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ah=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],lh=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ch=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dh=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],uh=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hh=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ph=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fh=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mh=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gh=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],bh=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],vh=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],yh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],_h=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],wh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],xh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],kh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],$h=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Ch=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Sh=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Ah=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],zh=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Eh=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Lh=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Th=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Oh=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Mh=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Ih=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Dh=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ph=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Bh=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Rh=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Vh=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Fh=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Nh=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Hh=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Uh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],qh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],jh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Wh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Kh=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Gh=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Yh=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Xh=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Zh=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Qh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],Jh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],tp=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],ep=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],sp=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],ip=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],op=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],rp=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],np=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],ap=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],lp=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],cp=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],dp=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],up=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],hp=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],pp=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],fp=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],mp=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Xa={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},gp=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Vu,backInLeft:Fu,backInRight:Nu,backInUp:Hu,backOutDown:Uu,backOutLeft:qu,backOutRight:ju,backOutUp:Wu,bounce:Su,bounceIn:Ku,bounceInDown:Gu,bounceInLeft:Yu,bounceInRight:Xu,bounceInUp:Zu,bounceOut:Qu,bounceOutDown:Ju,bounceOutLeft:th,bounceOutRight:eh,bounceOutUp:sh,easings:Xa,fadeIn:ih,fadeInBottomLeft:oh,fadeInBottomRight:rh,fadeInDown:nh,fadeInDownBig:ah,fadeInLeft:lh,fadeInLeftBig:ch,fadeInRight:dh,fadeInRightBig:uh,fadeInTopLeft:hh,fadeInTopRight:ph,fadeInUp:fh,fadeInUpBig:mh,fadeOut:gh,fadeOutBottomLeft:bh,fadeOutBottomRight:vh,fadeOutDown:yh,fadeOutDownBig:_h,fadeOutLeft:wh,fadeOutLeftBig:xh,fadeOutRight:kh,fadeOutRightBig:$h,fadeOutTopLeft:Ch,fadeOutTopRight:Sh,fadeOutUp:Ah,fadeOutUpBig:zh,flash:Au,flip:Eh,flipInX:Lh,flipInY:Th,flipOutX:Oh,flipOutY:Mh,headShake:zu,heartBeat:Eu,hinge:sp,jackInTheBox:ip,jello:Lu,lightSpeedInLeft:Ih,lightSpeedInRight:Dh,lightSpeedOutLeft:Ph,lightSpeedOutRight:Bh,pulse:Tu,rollIn:op,rollOut:rp,rotateIn:Rh,rotateInDownLeft:Vh,rotateInDownRight:Fh,rotateInUpLeft:Nh,rotateInUpRight:Hh,rotateOut:Uh,rotateOutDownLeft:qh,rotateOutDownRight:jh,rotateOutUpLeft:Wh,rotateOutUpRight:Kh,rubberBand:Ou,shake:Mu,shakeX:Iu,shakeY:Du,slideInDown:Gh,slideInLeft:Yh,slideInRight:Xh,slideInUp:Zh,slideOutDown:Qh,slideOutLeft:Jh,slideOutRight:tp,slideOutUp:ep,swing:Pu,tada:Bu,wobble:Ru,zoomIn:np,zoomInDown:ap,zoomInLeft:lp,zoomInRight:cp,zoomInUp:dp,zoomOut:up,zoomOutDown:hp,zoomOutLeft:pp,zoomOutRight:fp,zoomOutUp:mp},Symbol.toStringTag,{value:"Module"}));var Kt=class extends K{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const s=(e=Xa[this.easing])!=null?e:this.easing,i=(t=this.keyframes)!=null?t:gp[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!i?!1:(this.destroyAnimation(),this.animation=r.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return R` <slot @slotchange=${this.handleSlotChange}></slot> `}};Kt.styles=Cu;d([Wl("slot")],Kt.prototype,"defaultSlot",2);d([b()],Kt.prototype,"name",2);d([b({type:Boolean,reflect:!0})],Kt.prototype,"play",2);d([b({type:Number})],Kt.prototype,"delay",2);d([b()],Kt.prototype,"direction",2);d([b({type:Number})],Kt.prototype,"duration",2);d([b()],Kt.prototype,"easing",2);d([b({attribute:"end-delay",type:Number})],Kt.prototype,"endDelay",2);d([b()],Kt.prototype,"fill",2);d([b({type:Number})],Kt.prototype,"iterations",2);d([b({attribute:"iteration-start",type:Number})],Kt.prototype,"iterationStart",2);d([b({attribute:!1})],Kt.prototype,"keyframes",2);d([b({attribute:"playback-rate",type:Number})],Kt.prototype,"playbackRate",2);d([F(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Kt.prototype,"handleAnimationChange",1);d([F("play")],Kt.prototype,"handlePlayChange",1);d([F("playbackRate")],Kt.prototype,"handlePlaybackRateChange",1);Kt.define("sl-animation");var bp=X`
  ${Q}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Hs=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Ke=class extends K{constructor(){super(...arguments),this.hasSlotController=new fe(this,"icon","suffix"),this.localize=new xt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Rt(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=Lt(this,"alert.show",{dir:this.localize.dir()});await It(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Rt(this.base);const{keyframes:e,options:t}=Lt(this,"alert.hide",{dir:this.localize.dir()});await It(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,te(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,te(this,"sl-after-hide")}async toast(){return new Promise(e=>{Hs.parentElement===null&&document.body.append(Hs),Hs.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Hs.removeChild(this),e(),Hs.querySelector("sl-alert")===null&&Hs.remove()},{once:!0})})}render(){return R`
      <div
        part="base"
        class=${st({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?R`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};Ke.styles=bp;Ke.dependencies={"sl-icon-button":Nt};d([H('[part~="base"]')],Ke.prototype,"base",2);d([b({type:Boolean,reflect:!0})],Ke.prototype,"open",2);d([b({type:Boolean,reflect:!0})],Ke.prototype,"closable",2);d([b({reflect:!0})],Ke.prototype,"variant",2);d([b({type:Number})],Ke.prototype,"duration",2);d([F("open",{waitUntilFirstUpdate:!0})],Ke.prototype,"handleOpenChange",1);d([F("duration")],Ke.prototype,"handleDurationChange",1);Ct("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});Ct("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ke.define("sl-alert");var vp=X`
  ${Q}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Pe=class extends K{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:s}=this.animatedImage;e.width=t,e.height=s,e.getContext("2d").drawImage(this.animatedImage,0,0,t,s),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return R`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?R`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Pe.styles=vp;Pe.dependencies={"sl-icon":zt};d([H(".animated-image__animated")],Pe.prototype,"animatedImage",2);d([it()],Pe.prototype,"frozenFrame",2);d([it()],Pe.prototype,"isLoaded",2);d([b()],Pe.prototype,"src",2);d([b()],Pe.prototype,"alt",2);d([b({type:Boolean,reflect:!0})],Pe.prototype,"play",2);d([F("play",{waitUntilFirstUpdate:!0})],Pe.prototype,"handlePlayChange",1);d([F("src")],Pe.prototype,"handleSrcChange",1);Pe.define("sl-animated-image");function ut(){}function yp(e,t){for(const s in t)e[s]=t[s];return e}function Za(e){return e()}function fn(){return Object.create(null)}function ss(e){e.forEach(Za)}function Qa(e){return typeof e=="function"}function vt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function _p(e){return Object.keys(e).length===0}function Is(e,t,s,i){if(e){const o=Ja(e,t,s,i);return e[0](o)}}function Ja(e,t,s,i){return e[1]&&i?yp(s.ctx.slice(),e[1](i(t))):s.ctx}function Ds(e,t,s,i){if(e[2]&&i){const o=e[2](i(s));if(t.dirty===void 0)return o;if(typeof o=="object"){const r=[],n=Math.max(t.dirty.length,o.length);for(let l=0;l<n;l+=1)r[l]=t.dirty[l]|o[l];return r}return t.dirty|o}return t.dirty}function Ps(e,t,s,i,o,r){if(o){const n=Ja(t,s,i,r);e.p(n,o)}}function Bs(e){if(e.ctx.length>32){const t=[],s=e.ctx.length/32;for(let i=0;i<s;i++)t[i]=-1;return t}return-1}function mn(e){return e??""}function y(e,t){e.appendChild(t)}function E(e,t,s){e.insertBefore(t,s||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function Pt(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function C(e){return document.createElement(e)}function Le(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function N(e){return document.createTextNode(e)}function T(){return N(" ")}function Se(){return N("")}function Ft(e,t,s,i){return e.addEventListener(t,s,i),()=>e.removeEventListener(t,s,i)}function S(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function P(e,t,s){const i=t.toLowerCase();i in e?e[i]=typeof e[i]=="boolean"&&s===""?!0:s:t in e?e[t]=typeof e[t]=="boolean"&&s===""?!0:s:S(e,t,s)}function wp(e){return Array.from(e.childNodes)}function at(e,t){t=""+t,e.data!==t&&(e.data=t)}function Fe(e,t,s,i){s==null?e.style.removeProperty(t):e.style.setProperty(t,s,i?"important":"")}function xp(e,t,{bubbles:s=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:s,cancelable:i})}function fs(e,t){return new e(t)}let Ii;function zi(e){Ii=e}function Yi(){if(!Ii)throw new Error("Function called outside component initialization");return Ii}function kp(e){Yi().$$.before_update.push(e)}function To(e){Yi().$$.on_mount.push(e)}function vs(e){Yi().$$.after_update.push(e)}function $p(e){Yi().$$.on_destroy.push(e)}function se(){const e=Yi();return(t,s,{cancelable:i=!1}={})=>{const o=e.$$.callbacks[t];if(o){const r=xp(t,s,{cancelable:i});return o.slice().forEach(n=>{n.call(e,r)}),!r.defaultPrevented}return!0}}const js=[],Y=[];let Gs=[];const ur=[],tl=Promise.resolve();let hr=!1;function el(){hr||(hr=!0,tl.then(sl))}function Cp(){return el(),tl}function pr(e){Gs.push(e)}function Di(e){ur.push(e)}const Zo=new Set;let Us=0;function sl(){if(Us!==0)return;const e=Ii;do{try{for(;Us<js.length;){const t=js[Us];Us++,zi(t),Sp(t.$$)}}catch(t){throw js.length=0,Us=0,t}for(zi(null),js.length=0,Us=0;Y.length;)Y.pop()();for(let t=0;t<Gs.length;t+=1){const s=Gs[t];Zo.has(s)||(Zo.add(s),s())}Gs.length=0}while(js.length);for(;ur.length;)ur.pop()();hr=!1,Zo.clear(),zi(e)}function Sp(e){if(e.fragment!==null){e.update(),ss(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(pr)}}function Ap(e){const t=[],s=[];Gs.forEach(i=>e.indexOf(i)===-1?t.push(i):s.push(i)),s.forEach(i=>i()),Gs=t}const ao=new Set;let Ss;function Ht(){Ss={r:0,c:[],p:Ss}}function Ut(){Ss.r||ss(Ss.c),Ss=Ss.p}function D(e,t){e&&e.i&&(ao.delete(e),e.i(t))}function B(e,t,s,i){if(e&&e.o){if(ao.has(e))return;ao.add(e),Ss.c.push(()=>{ao.delete(e),i&&(s&&e.d(1),i())}),e.o(t)}else i&&i()}function gt(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Pi(e,t,s){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=s,s(e.$$.ctx[i]))}function j(e){e&&e.c()}function U(e,t,s){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,s),pr(()=>{const r=e.$$.on_mount.map(Za).filter(Qa);e.$$.on_destroy?e.$$.on_destroy.push(...r):ss(r),e.$$.on_mount=[]}),o.forEach(pr)}function q(e,t){const s=e.$$;s.fragment!==null&&(Ap(s.after_update),ss(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function zp(e,t){e.$$.dirty[0]===-1&&(js.push(e),el(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function yt(e,t,s,i,o,r,n=null,l=[-1]){const a=Ii;zi(e);const c=e.$$={fragment:null,ctx:[],props:r,update:ut,not_equal:o,bound:fn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:fn(),dirty:l,skip_bound:!1,root:t.target||a.$$.root};n&&n(c.root);let h=!1;if(c.ctx=s?s(e,t.props||{},(u,g,...f)=>{const m=f.length?f[0]:g;return c.ctx&&o(c.ctx[u],c.ctx[u]=m)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](m),h&&zp(e,u)),g}):[],c.update(),h=!0,ss(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const u=wp(t.target);c.fragment&&c.fragment.l(u),u.forEach(z)}else c.fragment&&c.fragment.c();t.intro&&D(e.$$.fragment),U(e,t.target,t.anchor),sl()}zi(a)}class _t{constructor(){et(this,"$$");et(this,"$$set")}$destroy(){q(this,1),this.$destroy=ut}$on(t,s){if(!Qa(s))return ut;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const o=i.indexOf(s);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!_p(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ep="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ep);var Ys=(e=>(e.AccentLight="bg-accent-light",e.Valid="bg-valid",e.Warning="bg-warning",e.Error="bg-error",e))(Ys||{});const Ei=class Ei{constructor(t){et(this,"amount");this.amount=t}value(){return this.amount}toString(){const[t,s]=this.amount.toFixed(2).toString().split(".");return`${t.replace(/\B(?=(\d{3})+(?!\d))/g,"'")},${s}${Ei.currencyType}`}static currency(){return Ei.currencyType}};et(Ei,"currencyType","€");let pt=Ei;const il=30,as=new Date(2023,8,23);class lo{constructor(t,s,i,o){et(this,"currentSpent",0);et(this,"max");et(this,"name");et(this,"numPeriods");et(this,"categories");this.max=s,this.name=t,this.numPeriods=i,this.categories=o}changeData(t,s,i){t&&(this.name=t),s&&(this.max=s),i&&(this.categories=i)}getName(){return this.name}getMax(){return this.max}getCategories(){return this.categories}getCurrentSpent(){return new pt(this.currentSpent)}getRemainingDays(t,s){return s.getRemainingDays(t)+(this.numPeriods-1)*il}calculatePctValue(){return this.currentSpent*100/this.max.value()}isOverspent(){return this.currentSpent>=this.max.value()}calculateRemainingSpend(){return new pt(this.max.value()-this.currentSpent)}calculateAverageSpent(t,s){let i=ol(t,s);return i===0&&(i=1),this.currentSpent/i}calculateDaysBeforeOverflow(t){return this.max.value()/t}calculateCurrentSpent(t){return this.currentSpent=this.findRelatedExpenses(t).map(s=>s.getAmount().value()).reduce((s,i)=>s+i,0),new pt(this.currentSpent)}findRelatedExpenses(t){return t.findExpenses(...this.categories)}}function ms(e){return("0"+e.getDate()).slice(-2)+"/"+("0"+(e.getMonth()+1)).slice(-2)+"/"+e.getFullYear()}function ol(e,t){return(t.getTime()-e.getTime())/(1e3*3600*24)}function bo(e){let t=e.calculatePctValue();return t>=100?Ys.Error:t>=75?Ys.Warning:Ys.Valid}function gn(e,t,s){const i=.5-.5*Math.cos(Math.PI*s);return e+(t-e)*i}let vo=500,xs=45;function Lp(e,t){const s=t-e,i=s+360,o=s-360,r=[Math.abs(s),Math.abs(i),Math.abs(o)],n=Math.min(...r),l=r.indexOf(n);return l===0?e+s:l===1?e+i:e+o}function bn(e,t){const s=t.timeSecs*60;let i=0,o=xs,r=vo,n=t.toAngle===void 0?o:t.toAngle,l=t.toDistance===void 0?r:t.toDistance;n=Lp(o,n);let a=()=>{if(++i,xs=gn(o,n,i/s),vo=gn(r,l,i/s),Tp(e),i>=s){xs<0?xs+=360:xs>360&&(xs-=360);return}requestAnimationFrame(a)};a()}function Tp(e){const t=e.container.getBoundingClientRect(),s={x:t.x+t.width/2,y:t.y+t.height/2};let i=xs*Math.PI/180,o={x:Math.cos(i)*vo,y:Math.sin(i)*vo},r=e.greenEllipse.getBoundingClientRect().width/2,n=e.greenEllipse.getBoundingClientRect().height/2;e.greenEllipse.setAttribute("style",`left: ${s.x-o.x-r}px; top: ${s.y-o.y-n}px`),r=e.purpleEllipse.getBoundingClientRect().width/2,n=e.purpleEllipse.getBoundingClientRect().height/2,e.purpleEllipse.setAttribute("style",`left: ${s.x+o.x-r}px; top: ${s.y+o.y-n}px`)}var ue=(e=>(e.Home="home",e.Budgets="budgets",e.Accounts="accounts",e.Charts="charts",e.Settings="settings",e.Profile="profile",e))(ue||{});function Op(e){var g;let t,s,i,o=((g=e[4])==null?void 0:g.svg)+"",r,n,l,a,c,h,u;return{c(){var f,m;t=C("button"),s=C("div"),i=Le("svg"),n=T(),l=C("span"),a=N(e[1]),S(i,"viewBox","0 0 "+((f=e[4])==null?void 0:f.box)+" "+((m=e[4])==null?void 0:m.box)),S(i,"class",r=mn(e[0]?"fill-accent-light stroke-accent-light":"fill-text stroke-text")+" svelte-1jm7p9l"),S(s,"class","h-6 w-6 aspect-square svelte-1jm7p9l"),S(l,"class","text-left"),t.disabled=e[2],S(t,"class",c="flex flex-row items-center gap-4 text-sm font-bold "+(e[0]?"text-accent-light":"text-text")+" svelte-1jm7p9l")},m(f,m){E(f,t,m),y(t,s),y(s,i),i.innerHTML=o,y(t,n),y(t,l),y(l,a),h||(u=Ft(t,"click",e[3]),h=!0)},p(f,[m]){m&1&&r!==(r=mn(f[0]?"fill-accent-light stroke-accent-light":"fill-text stroke-text")+" svelte-1jm7p9l")&&S(i,"class",r),m&2&&at(a,f[1]),m&4&&(t.disabled=f[2]),m&1&&c!==(c="flex flex-row items-center gap-4 text-sm font-bold "+(f[0]?"text-accent-light":"text-text")+" svelte-1jm7p9l")&&S(t,"class",c)},i:ut,o:ut,d(f){f&&z(t),h=!1,u()}}}function Mp(e,t,s){const i=se();function o(){i("click",{label:a})}const r=[{name:ue.Home,box:24,svg:'<g stroke-width="2.5" fill="none"><path d="M11.3861 1.21065C11.7472 0.929784 12.2528 0.929784 12.6139 1.21065L21.6139 8.21065C21.8575 8.4001 22 8.69141 22 9V20.5C22 21.3284 21.3284 22 20.5 22H15V14C15 13.4477 14.5523 13 14 13H10C9.44772 13 9 13.4477 9 14V22H3.5C2.67157 22 2 21.3284 2 20.5V9C2 8.69141 2.14247 8.4001 2.38606 8.21065L11.3861 1.21065Z"></path></g>'},{name:ue.Budgets,box:24,svg:'<g><path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.94358 3.25H13.0564C14.8942 3.24998 16.3498 3.24997 17.489 3.40314C18.6614 3.56076 19.6104 3.89288 20.3588 4.64124C21.2831 5.56563 21.5777 6.80363 21.6847 8.41008C22.2619 8.6641 22.6978 9.2013 22.7458 9.88179C22.7501 9.94199 22.75 10.0069 22.75 10.067C22.75 10.0725 22.75 10.0779 22.75 10.0833V13.9167C22.75 13.9221 22.75 13.9275 22.75 13.933C22.75 13.9931 22.7501 14.058 22.7458 14.1182C22.6978 14.7987 22.2619 15.3359 21.6847 15.5899C21.5777 17.1964 21.2831 18.4344 20.3588 19.3588C19.6104 20.1071 18.6614 20.4392 17.489 20.5969C16.3498 20.75 14.8942 20.75 13.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM20.1679 15.75H18.2308C16.0856 15.75 14.25 14.1224 14.25 12C14.25 9.87756 16.0856 8.25 18.2308 8.25H20.1679C20.0541 6.90855 19.7966 6.20043 19.2981 5.7019C18.8749 5.27869 18.2952 5.02502 17.2892 4.88976C16.2615 4.75159 14.9068 4.75 13 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H13C14.9068 19.25 16.2615 19.2484 17.2892 19.1102C18.2952 18.975 18.8749 18.7213 19.2981 18.2981C19.7966 17.7996 20.0541 17.0915 20.1679 15.75ZM5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H10C10.4142 7.25 10.75 7.58579 10.75 8C10.75 8.41421 10.4142 8.75 10 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8ZM20.9235 9.75023C20.9032 9.75001 20.8766 9.75 20.8333 9.75H18.2308C16.8074 9.75 15.75 10.8087 15.75 12C15.75 13.1913 16.8074 14.25 18.2308 14.25H20.8333C20.8766 14.25 20.9032 14.25 20.9235 14.2498C20.936 14.2496 20.9426 14.2495 20.9457 14.2493L20.9479 14.2492C21.1541 14.2367 21.2427 14.0976 21.2495 14.0139C21.2495 14.0139 21.2497 14.0076 21.2498 13.9986C21.25 13.9808 21.25 13.9572 21.25 13.9167V10.0833C21.25 10.0428 21.25 10.0192 21.2498 10.0014C21.2497 9.99238 21.2495 9.98609 21.2495 9.98609C21.2427 9.90242 21.1541 9.7633 20.9479 9.75076C20.9479 9.75076 20.943 9.75043 20.9235 9.75023Z"></path></g>'},{name:ue.Charts,box:32,svg:'<g transform="translate(-312.000000, -671.000000)"><path d="M336,700 C336,700.553 335.553,701 335,701 C334.447,701 334,700.553 334,700 L334,690 C334,689.448 334.447,689 335,689 C335.553,689 336,689.448 336,690 L336,700 L336,700 Z M336,687 L334,687 C332.896,687 332,687.896 332,689 L332,701 C332,702.104 332.896,703 334,703 L336,703 C337.104,703 338,702.104 338,701 L338,689 C338,687.896 337.104,687 336,687 L336,687 Z M316,700 C316,700.553 315.553,701 315,701 C314.447,701 314,700.553 314,700 L314,683 C314,682.448 314.447,682 315,682 C315.553,682 316,682.448 316,683 L316,700 L316,700 Z M316,680 L314,680 C312.896,680 312,680.896 312,682 L312,701 C312,702.104 312.896,703 314,703 L316,703 C317.104,703 318,702.104 318,701 L318,682 C318,680.896 317.104,680 316,680 L316,680 Z M326,700 C326,700.553 325.553,701 325,701 C324.447,701 324,700.553 324,700 L324,674 C324,673.447 324.447,673 325,673 C325.553,673 326,673.447 326,674 L326,700 L326,700 Z M326,671 L324,671 C322.896,671 322,671.896 322,673 L322,701 C322,702.104 322.896,703 324,703 L326,703 C327.104,703 328,702.104 328,701 L328,673 C328,671.896 327.104,671 326,671 L326,671 Z"></path></g>'},{name:ue.Accounts,box:24,svg:'<g><path d="M20.082 3.01787L20.1081 3.76741L20.082 3.01787ZM16.5 3.48757L16.2849 2.76907V2.76907L16.5 3.48757ZM13.6738 4.80287L13.2982 4.15375L13.2982 4.15375L13.6738 4.80287ZM3.9824 3.07501L3.93639 3.8236L3.9824 3.07501ZM7 3.48757L7.19136 2.76239V2.76239L7 3.48757ZM10.2823 4.87558L9.93167 5.5386L10.2823 4.87558ZM13.6276 20.0694L13.9804 20.7312L13.6276 20.0694ZM17 18.6335L16.8086 17.9083H16.8086L17 18.6335ZM19.9851 18.2229L20.032 18.9715L19.9851 18.2229ZM10.3724 20.0694L10.0196 20.7312H10.0196L10.3724 20.0694ZM7 18.6335L7.19136 17.9083H7.19136L7 18.6335ZM4.01486 18.2229L3.96804 18.9715H3.96804L4.01486 18.2229ZM2.75 16.1437V4.99792H1.25V16.1437H2.75ZM22.75 16.1437V4.93332H21.25V16.1437H22.75ZM20.0559 2.26832C18.9175 2.30798 17.4296 2.42639 16.2849 2.76907L16.7151 4.20606C17.6643 3.92191 18.9892 3.80639 20.1081 3.76741L20.0559 2.26832ZM16.2849 2.76907C15.2899 3.06696 14.1706 3.6488 13.2982 4.15375L14.0495 5.452C14.9 4.95981 15.8949 4.45161 16.7151 4.20606L16.2849 2.76907ZM3.93639 3.8236C4.90238 3.88297 5.99643 3.99842 6.80864 4.21274L7.19136 2.76239C6.23055 2.50885 5.01517 2.38707 4.02841 2.32642L3.93639 3.8236ZM6.80864 4.21274C7.77076 4.46663 8.95486 5.02208 9.93167 5.5386L10.6328 4.21257C9.63736 3.68618 8.32766 3.06224 7.19136 2.76239L6.80864 4.21274ZM13.9804 20.7312C14.9714 20.2029 16.1988 19.6206 17.1914 19.3587L16.8086 17.9083C15.6383 18.2171 14.2827 18.8702 13.2748 19.4075L13.9804 20.7312ZM17.1914 19.3587C17.9943 19.1468 19.0732 19.0314 20.032 18.9715L19.9383 17.4744C18.9582 17.5357 17.7591 17.6575 16.8086 17.9083L17.1914 19.3587ZM10.7252 19.4075C9.71727 18.8702 8.3617 18.2171 7.19136 17.9083L6.80864 19.3587C7.8012 19.6206 9.0286 20.2029 10.0196 20.7312L10.7252 19.4075ZM7.19136 17.9083C6.24092 17.6575 5.04176 17.5357 4.06168 17.4744L3.96804 18.9715C4.9268 19.0314 6.00566 19.1468 6.80864 19.3587L7.19136 17.9083ZM21.25 16.1437C21.25 16.8295 20.6817 17.4279 19.9383 17.4744L20.032 18.9715C21.5062 18.8793 22.75 17.6799 22.75 16.1437H21.25ZM22.75 4.93332C22.75 3.47001 21.5847 2.21507 20.0559 2.26832L20.1081 3.76741C20.7229 3.746 21.25 4.25173 21.25 4.93332H22.75ZM1.25 16.1437C1.25 17.6799 2.49378 18.8793 3.96804 18.9715L4.06168 17.4744C3.31831 17.4279 2.75 16.8295 2.75 16.1437H1.25ZM13.2748 19.4075C12.4825 19.8299 11.5175 19.8299 10.7252 19.4075L10.0196 20.7312C11.2529 21.3886 12.7471 21.3886 13.9804 20.7312L13.2748 19.4075ZM13.2982 4.15375C12.4801 4.62721 11.4617 4.65083 10.6328 4.21257L9.93167 5.5386C11.2239 6.22189 12.791 6.18037 14.0495 5.452L13.2982 4.15375ZM2.75 4.99792C2.75 4.30074 3.30243 3.78463 3.93639 3.8236L4.02841 2.32642C2.47017 2.23065 1.25 3.49877 1.25 4.99792H2.75Z"></path><path d="M12 5.50049V20.5005" stroke-width="1.5" stroke="inherit"></path></g>'},{name:ue.Settings,box:24,svg:'<g fill="none"><circle cx="12" cy="12" r="3" stroke-width="1.5"></circle><path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke-width="1.5"></path></g>'},{name:ue.Profile,box:24,svg:'<g fill="none"><path d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g>'}];let{iconName:n}=t,{currentPage:l=!1}=t,{label:a=""}=t,{disabled:c=!1}=t,h=r.find(u=>u.name===n);return e.$$set=u=>{"iconName"in u&&s(5,n=u.iconName),"currentPage"in u&&s(0,l=u.currentPage),"label"in u&&s(1,a=u.label),"disabled"in u&&s(2,c=u.disabled)},[l,a,c,o,h,n]}class yo extends _t{constructor(t){super(),yt(this,t,Mp,Op,vt,{iconName:5,currentPage:0,label:1,disabled:2})}}function vn(e,t,s){const i=e.slice();return i[5]=t[s],i}function yn(e,t,s){const i=e.slice();return i[5]=t[s],i}function _n(e){let t,s,i;var o=yo;function r(n,l){return{props:{disabled:n[0],iconName:n[5].iconName,label:n[5].label,currentPage:n[5].currentPage}}}return o&&(t=fs(o,r(e)),t.$on("click",e[2])),{c(){t&&j(t.$$.fragment),s=Se()},m(n,l){t&&U(t,n,l),E(n,s,l),i=!0},p(n,l){if(o!==(o=yo)){if(t){Ht();const a=t;B(a.$$.fragment,1,0,()=>{q(a,1)}),Ut()}o?(t=fs(o,r(n)),t.$on("click",n[2]),j(t.$$.fragment),D(t.$$.fragment,1),U(t,s.parentNode,s)):t=null}else if(o){const a={};l&1&&(a.disabled=n[0]),l&2&&(a.iconName=n[5].iconName),l&2&&(a.label=n[5].label),l&2&&(a.currentPage=n[5].currentPage),t.$set(a)}},i(n){i||(t&&D(t.$$.fragment,n),i=!0)},o(n){t&&B(t.$$.fragment,n),i=!1},d(n){n&&z(s),t&&q(t,n)}}}function wn(e){let t,s,i;var o=yo;function r(n,l){return{props:{disabled:n[0],iconName:n[5].iconName,label:n[5].label,currentPage:n[5].currentPage}}}return o&&(t=fs(o,r(e)),t.$on("click",e[2])),{c(){t&&j(t.$$.fragment),s=Se()},m(n,l){t&&U(t,n,l),E(n,s,l),i=!0},p(n,l){if(o!==(o=yo)){if(t){Ht();const a=t;B(a.$$.fragment,1,0,()=>{q(a,1)}),Ut()}o?(t=fs(o,r(n)),t.$on("click",n[2]),j(t.$$.fragment),D(t.$$.fragment,1),U(t,s.parentNode,s)):t=null}else if(o){const a={};l&1&&(a.disabled=n[0]),l&2&&(a.iconName=n[5].iconName),l&2&&(a.label=n[5].label),l&2&&(a.currentPage=n[5].currentPage),t.$set(a)}},i(n){i||(t&&D(t.$$.fragment,n),i=!0)},o(n){t&&B(t.$$.fragment,n),i=!1},d(n){n&&z(s),t&&q(t,n)}}}function Ip(e){let t,s,i,o,r,n,l=gt(e[1].filter(xn)),a=[];for(let f=0;f<l.length;f+=1)a[f]=_n(yn(e,l,f));const c=f=>B(a[f],1,1,()=>{a[f]=null});let h=gt(e[1].filter(kn)),u=[];for(let f=0;f<h.length;f+=1)u[f]=wn(vn(e,h,f));const g=f=>B(u[f],1,1,()=>{u[f]=null});return{c(){t=C("aside"),s=C("div"),i=C("nav");for(let f=0;f<a.length;f+=1)a[f].c();o=T(),r=C("div");for(let f=0;f<u.length;f+=1)u[f].c();S(i,"class","flex flex-col gap-12"),S(r,"class","flex flex-col w-full gap-8"),S(s,"class","flex flex-col justify-between mx-auto w-fit h-full"),S(t,"id","side-bar-container"),S(t,"class","z-20 px-8 py-12 bg-dark svelte-1dqwvvw")},m(f,m){E(f,t,m),y(t,s),y(s,i);for(let p=0;p<a.length;p+=1)a[p]&&a[p].m(i,null);y(s,o),y(s,r);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(r,null);n=!0},p(f,[m]){if(m&7){l=gt(f[1].filter(xn));let p;for(p=0;p<l.length;p+=1){const v=yn(f,l,p);a[p]?(a[p].p(v,m),D(a[p],1)):(a[p]=_n(v),a[p].c(),D(a[p],1),a[p].m(i,null))}for(Ht(),p=l.length;p<a.length;p+=1)c(p);Ut()}if(m&7){h=gt(f[1].filter(kn));let p;for(p=0;p<h.length;p+=1){const v=vn(f,h,p);u[p]?(u[p].p(v,m),D(u[p],1)):(u[p]=wn(v),u[p].c(),D(u[p],1),u[p].m(r,null))}for(Ht(),p=h.length;p<u.length;p+=1)g(p);Ut()}},i(f){if(!n){for(let m=0;m<l.length;m+=1)D(a[m]);for(let m=0;m<h.length;m+=1)D(u[m]);n=!0}},o(f){a=a.filter(Boolean);for(let m=0;m<a.length;m+=1)B(a[m]);u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)B(u[m]);n=!1},d(f){f&&z(t),Pt(a,f),Pt(u,f)}}}const xn=e=>e.bottomMenu==!1,kn=e=>e.bottomMenu==!0;function Dp(e,t,s){const i=se(),o=[{iconName:ue.Home,label:"Home",currentPage:!0,bottomMenu:!1},{iconName:ue.Budgets,label:"Budgets",currentPage:!1,bottomMenu:!1},{iconName:ue.Accounts,label:"Accounts & Transactions",currentPage:!1,bottomMenu:!1},{iconName:ue.Charts,label:"Charts",currentPage:!1,bottomMenu:!1},{iconName:ue.Profile,label:"Profile",currentPage:!1,bottomMenu:!0},{iconName:ue.Settings,label:"Settings",currentPage:!1,bottomMenu:!0}];let r=0;function n(a){let c=o.findIndex(h=>h.label==a.detail.label);s(1,o[r].currentPage=!1,o),s(1,o[c].currentPage=!0,o),r=c,i("selectionUpdated",{newIndex:r})}let{disabled:l=!1}=t;return e.$$set=a=>{"disabled"in a&&s(0,l=a.disabled)},[l,o,n]}class Pp extends _t{constructor(t){super(),yt(this,t,Dp,Ip,vt,{disabled:0})}}function Bp(e){let t,s,i,o,r;const n=e[3].default,l=Is(n,e,e[2],null);return{c(){t=C("div"),s=C("div"),s.innerHTML="",i=T(),l&&l.c(),S(s,"class","appearance-container absolute position-0 pointer-events-none svelte-oxdnxl"),S(t,"class",o=e[1]+" glass-container text-text glare-line svelte-oxdnxl")},m(a,c){E(a,t,c),y(t,s),y(t,i),l&&l.m(t,null),e[4](t),r=!0},p(a,[c]){l&&l.p&&(!r||c&4)&&Ps(l,n,a,a[2],r?Ds(n,a[2],c,null):Bs(a[2]),null),(!r||c&2&&o!==(o=a[1]+" glass-container text-text glare-line svelte-oxdnxl"))&&S(t,"class",o)},i(a){r||(D(l,a),r=!0)},o(a){B(l,a),r=!1},d(a){a&&z(t),l&&l.d(a),e[4](null)}}}function Rp(e,t,s){let{$$slots:i={},$$scope:o}=t,{extraClasses:r=""}=t,{container:n=void 0}=t;function l(a){Y[a?"unshift":"push"](()=>{n=a,s(0,n)})}return e.$$set=a=>{"extraClasses"in a&&s(1,r=a.extraClasses),"container"in a&&s(0,n=a.container),"$$scope"in a&&s(2,o=a.$$scope)},[n,r,o,i,l]}class Rs extends _t{constructor(t){super(),yt(this,t,Rp,Bp,vt,{extraClasses:1,container:0})}}function Vp(e){let t,s,i;const o=e[2].default,r=Is(o,e,e[1],null);return{c(){t=C("h1"),r&&r.c(),S(t,"class",s="text-xl font-semibold "+(e[0]?"mb-4":""))},m(n,l){E(n,t,l),r&&r.m(t,null),i=!0},p(n,[l]){r&&r.p&&(!i||l&2)&&Ps(r,o,n,n[1],i?Ds(o,n[1],l,null):Bs(n[1]),null),(!i||l&1&&s!==(s="text-xl font-semibold "+(n[0]?"mb-4":"")))&&S(t,"class",s)},i(n){i||(D(r,n),i=!0)},o(n){B(r,n),i=!1},d(n){n&&z(t),r&&r.d(n)}}}function Fp(e,t,s){let{$$slots:i={},$$scope:o}=t,{margin:r=!0}=t;return e.$$set=n=>{"margin"in n&&s(0,r=n.margin),"$$scope"in n&&s(1,o=n.$$scope)},[r,o,i]}class ae extends _t{constructor(t){super(),yt(this,t,Fp,Vp,vt,{margin:0})}}function $n(e){let t,s,i,o,r,n,l;const a=e[4].default,c=Is(a,e,e[3],null);return{c(){t=C("div"),s=C("div"),i=C("button"),i.textContent="×",o=T(),c&&c.c(),S(i,"class","absolute right-4 top-4 text-3xl"),S(s,"class","relative modal-appearance w-full h-full p-4 svelte-6ebnj7"),S(t,"class","fixed right-0 top-0 bottom-0 z-50 p-32 min-h-fit")},m(h,u){E(h,t,u),y(t,s),y(s,i),y(s,o),c&&c.m(s,null),e[5](t),r=!0,n||(l=Ft(i,"click",e[0]),n=!0)},p(h,u){c&&c.p&&(!r||u&8)&&Ps(c,a,h,h[3],r?Ds(a,h[3],u,null):Bs(h[3]),null)},i(h){r||(D(c,h),r=!0)},o(h){B(c,h),r=!1},d(h){h&&z(t),c&&c.d(h),e[5](null),n=!1,l()}}}function Np(e){let t,s,i=e[2]&&$n(e);return{c(){i&&i.c(),t=Se()},m(o,r){i&&i.m(o,r),E(o,t,r),s=!0},p(o,[r]){o[2]?i?(i.p(o,r),r&4&&D(i,1)):(i=$n(o),i.c(),D(i,1),i.m(t.parentNode,t)):i&&(Ht(),B(i,1,1,()=>{i=null}),Ut())},i(o){s||(D(i),s=!0)},o(o){B(i),s=!1},d(o){o&&z(t),i&&i.d(o)}}}function Hp(e,t,s){let{$$slots:i={},$$scope:o}=t,r=se(),n,l=!1,a=!1;function c(){if(s(2,l=!l),l){let u=document.querySelector("main");if(u.classList.contains("modal-open")){s(2,l=!1);return}u.classList.add("modal-open"),a=!0}else document.querySelector("main").classList.remove("modal-open")}vs(()=>{a&&(s(1,n.style.left=document.querySelector("main").getBoundingClientRect().left+"px",n),a=!1,l?(document.querySelector("main").appendChild(n),r("modalOpened")):r("modalClosed"))});function h(u){Y[u?"unshift":"push"](()=>{n=u,s(1,n)})}return e.$$set=u=>{"$$scope"in u&&s(3,o=u.$$scope)},[c,n,l,o,i,h]}class Xi extends _t{constructor(t){super(),yt(this,t,Hp,Np,vt,{toggleOpen:0})}get toggleOpen(){return this.$$.ctx[0]}}class os{constructor(t){et(this,"label");this.label=t}}class rl{static getId(){return++this.currentId}}et(rl,"currentId",0);const oe=class oe{constructor(){et(this,"spendingAccounts",[]);et(this,"savingAccounts",[]);et(this,"updateCallbacks",[]);et(this,"timeoutId");oe.instance=this}set(t,s){let i=oe.get();return i.spendingAccounts=t,i.savingAccounts=s,i}static get(){return oe.instance===null?new oe:oe.instance}getSpendingAccounts(){return this.spendingAccounts}getSavingAccounts(){return this.savingAccounts}getAllAccounts(){return this.spendingAccounts.concat(...this.savingAccounts)}addSavingAccount(t){oe.instance.savingAccounts.push(t),oe.instance.requestUpdate()}addSpendingAccount(t){oe.instance.spendingAccounts.push(t),oe.instance.requestUpdate()}onAccountsUpdated(t){this.updateCallbacks.push(t)}deleteAccount(t){let s=oe.instance,i=s.spendingAccounts.findIndex(o=>o.id===t);if(i===-1){if(i=s.savingAccounts.findIndex(r=>r.id===t),i===-1)return;let o=s.savingAccounts.splice(i,1)[0];s.removeRelatedTransactions(o),s.requestUpdate()}else{let o=s.spendingAccounts.splice(i,1)[0];s.removeRelatedTransactions(o),s.requestUpdate()}}removeRelatedTransactions(t){let s=bt.getTransactionsForAccount(t);bt.removeTransactions(s)}requestUpdate(){this.timeoutId||(this.timeoutId=setTimeout(this.runCallbacks,0))}runCallbacks(){let t=oe.get();t.updateCallbacks.forEach(s=>s()),t.timeoutId=void 0}};et(oe,"instance",null);let Xs=oe;class _o{constructor(t,s){et(this,"name");et(this,"amount");et(this,"id");this.name=t,this.amount=s,this.id=rl.getId()}static findById(t,s){return t.find(i=>i.id===s)}getName(){return this.name}setName(t){this.name=t,Xs.get().requestUpdate()}getAmount(){return this.amount}decreaseAccountValue(t){this.amount=new pt(this.amount.value()-t),Xs.get().requestUpdate()}increaseAccountValue(t){this.amount=new pt(this.amount.value()+t),Xs.get().requestUpdate()}}class ti extends _o{}class Oo{constructor(t,s,i,o){et(this,"name");et(this,"amount");et(this,"date");et(this,"account");this.name=t,this.amount=s,this.date=i,this.account=o}getAmount(){return this.amount}preDeleteRoutine(){}static getTransactionsByDate(t,s){let i=new Map;return s.forEach(o=>{o.getTransactionsOfType(t).forEach(r=>{let n=r.date.getTime();i.has(n)?i.get(n).unshift(r):i.set(n,[r])})}),new Map(Array.from(i,([o,r])=>[new Date(o),r]))}}class Te extends Oo{constructor(s,i,o,r,n){super(s,i,o,r);et(this,"category");this.category=n}getRelatedBudget(s){if(this.category)return s.find(i=>i.getCategories().includes(this.category))}static getExpensesByDate(s){return super.getTransactionsByDate(Te,s)}}class Qe extends Oo{constructor(s,i,o,r,n,l=0){super(s,i,o,r);et(this,"percentSavings",0);et(this,"savingAccount");this.savingAccount=n,this.percentSavings=Math.min(1,Math.max(0,l))}static getIncomesByDate(s){return super.getTransactionsByDate(Qe,s)}getSavedAmountNumber(){return this.amount.value()*this.percentSavings}getTotalAmount(){return this.amount}getAmount(){return this.savingAccount===void 0?this.getTotalAmount():new pt(this.amount.value()-this.getSavedAmountNumber())}getSavedAmount(){return new pt(this.getSavedAmountNumber())}preDeleteRoutine(){var s;(s=this.savingAccount)==null||s.decreaseAccountValue(this.getSavedAmountNumber())}}class wo extends Oo{constructor(s,i,o,r,n){super(s,i,o,r);et(this,"receiverAccount");this.receiverAccount=n}getGiverAccount(){return this.account}getReceiverAccount(){return this.receiverAccount}preDeleteRoutine(){}}class Cn extends Oo{}var cs=(e=>(e[e.Expense=0]="Expense",e[e.Income=1]="Income",e[e.Transfer=2]="Transfer",e[e.Balancing=3]="Balancing",e))(cs||{});class Up{constructor(t,s){et(this,"startDate");et(this,"duration");et(this,"endDate");et(this,"transactions",[]);et(this,"transactionsUpdatedCallback",[]);this.startDate=t,this.duration=s,this.endDate=new Date(t.getTime()+s*24*60*60*1e3)}getStartDate(){return this.startDate}getEndDate(){return this.endDate}getDuration(){return this.duration}getRemainingDays(t){return ol(t,this.endDate)}makeAndAdd(...t){t.forEach(s=>{switch(s.type){case 0:this.addTransaction(new Te(s.name,s.amount,s.date,s.account,s.category));break;case 1:this.addTransaction(new Qe(s.name,s.amount,s.date,s.account,s.otherAccount,s.savingPercent));break;case 2:this.addTransaction(new wo(s.name,s.amount,s.date,s.account,s.otherAccount));break;case 3:this.addTransaction(new Cn(s.name,s.amount,s.date,s.account));break}})}addTransaction(t){var i;this.transactions.push(t);let s=t.getAmount().value();t instanceof Te?t.account.decreaseAccountValue(s):t instanceof Qe?(t.account.increaseAccountValue(s),(i=t.savingAccount)==null||i.addIncomes(t)):t instanceof wo?(t.getGiverAccount().decreaseAccountValue(s),t.getReceiverAccount().increaseAccountValue(s)):t instanceof Cn&&(s>0?t.account.increaseAccountValue(s):t.account.decreaseAccountValue(-s)),this.invokeUpdateEvent()}invokeUpdateEvent(){this.transactionsUpdatedCallback.forEach(t=>t())}onTransactionsUpdated(t){this.transactionsUpdatedCallback.push(t)}getTransactions(){return this.transactions.toReversed()}getTransactionsForAccount(t){return this.transactions.filter(s=>s.account===t)}getTransactionsOfTypeForAccount(t,s){return this.transactions.filter(i=>i instanceof t&&i.account===s)}findExpenses(...t){return this.transactions.filter(s=>s instanceof Te&&s.category!==void 0&&t.includes(s.category))}getTransactionsOfType(t){return this.transactions.filter(s=>s instanceof t)}removeTransactions(t){this.transactions=this.transactions.filter(s=>t.includes(s)?(s.preDeleteRoutine(),!1):!0),this.invokeUpdateEvent()}}class Bi extends _o{addIncomes(...t){t.forEach(s=>{this.increaseAccountValue(s.getSavedAmount().value())})}getIncomes(t){return t.map(s=>s.getTransactionsOfTypeForAccount(Qe,this)).flat()}}const re=class re{static getCategory(t){return re[t]}static getIdentifier(t){let s=Object.entries(re).find(i=>i[1]instanceof os&&i[1]===t);return s?s[0]:null}static getAllIdentifiers(t=!1){return t?Object.keys(re):Object.keys(re).filter(s=>s!=="None")}constructor(){}};et(re,"None"),et(re,"Errands",new os("Errands")),et(re,"Gas",new os("Gas")),et(re,"Clothing",new os("Clothing")),et(re,"Other",new os("Other")),et(re,"Education",new os("Education")),et(re,"House",new os("House")),et(re,"Fixed",new os("Fixed Expenses"));let Yt=re,Sn=[new Up(new Date(2023,8,20),il)],bt=Sn[Sn.length-1],nl=[new ti("Main account",new pt(0)),new ti("Cash",new pt(315))],qp=[new Bi("Bank account",new pt(0))],wt=Xs.get().set(nl,qp),xe=[new lo("Food",new pt(250),1,[Yt.Errands]),new lo("Gas",new pt(170),1,[Yt.Gas]),new lo("Clothing",new pt(200),1,[Yt.Clothing])];bt.makeAndAdd({type:cs.Income,name:"Salary",amount:new pt(1534.22),date:new Date(2023,8,22),account:nl[0],savingPercent:.1,otherAccount:wt.getSavingAccounts()[0]},{type:cs.Expense,name:"Errands",amount:new pt(84.27),category:Yt.Errands,date:new Date(2023,8,22),account:wt.getSpendingAccounts()[0]},{type:cs.Expense,name:"Car insurance",amount:new pt(112.33),category:Yt.Fixed,date:new Date(2023,8,22),account:wt.getSpendingAccounts()[0]});function An(e,t,s){const i=e.slice();return i[13]=t[s],i}function jp(e){let t,s;return t=new ae({props:{$$slots:{default:[Kp]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},m(i,o){U(t,i,o),s=!0},i(i){s||(D(t.$$.fragment,i),s=!0)},o(i){B(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}function Wp(e){let t,s;return t=new ae({props:{$$slots:{default:[Gp]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},m(i,o){U(t,i,o),s=!0},i(i){s||(D(t.$$.fragment,i),s=!0)},o(i){B(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}function Kp(e){let t;return{c(){t=N("Create new account")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function Gp(e){let t;return{c(){t=N("Edit account")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function zn(e){let t,s,i=gt(e[0]),o=[];for(let r=0;r<i.length;r+=1)o[r]=En(An(e,i,r));return{c(){t=C("sl-select");for(let r=0;r<o.length;r+=1)o[r].c();P(t,"name","selected-account"),P(t,"label","Account to edit"),P(t,"value",s=`${e[0][0].id}`)},m(r,n){E(r,t,n);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(t,null)},p(r,n){if(n&1){i=gt(r[0]);let l;for(l=0;l<i.length;l+=1){const a=An(r,i,l);o[l]?o[l].p(a,n):(o[l]=En(a),o[l].c(),o[l].m(t,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=i.length}n&1&&s!==(s=`${r[0][0].id}`)&&P(t,"value",s)},d(r){r&&z(t),Pt(o,r)}}}function En(e){let t,s=e[13].getName()+"",i,o;return{c(){t=C("sl-option"),i=N(s),P(t,"value",o=e[13].id)},m(r,n){E(r,t,n),y(t,i)},p(r,n){n&1&&s!==(s=r[13].getName()+"")&&at(i,s),n&1&&o!==(o=r[13].id)&&P(t,"value",o)},d(r){r&&z(t)}}}function Yp(e){let t,s,i,o,r,n,l,a,c,h,u,g,f,m,p,v;const _=[Wp,jp],w=[];function $(x,A){return x[0]!==void 0?0:1}t=$(e),s=w[t]=_[t](e);let k=e[0]!==void 0&&zn(e);return{c(){s.c(),i=T(),o=C("form"),k&&k.c(),r=T(),n=C("sl-input"),a=T(),c=C("sl-input"),h=C("span"),h.textContent=`${pt.currencyType}`,g=T(),f=C("sl-button"),f.textContent="Submit",P(n,"value",l=e[3]?e[3].getName():""),P(n,"name","account-name"),P(n,"required",""),P(n,"label","Account name"),S(h,"slot","prefix"),P(c,"value",u=e[3]?e[3].getAmount().value():""),P(c,"name","account-amount"),P(c,"required",""),P(c,"label","Amount"),P(c,"pattern","([0-9.,])+"),P(f,"class","submit-button"),P(f,"type","submit"),P(f,"variant","primary"),S(o,"class","validity-styles input-validation-required")},m(x,A){w[t].m(x,A),E(x,i,A),E(x,o,A),k&&k.m(o,null),y(o,r),y(o,n),y(o,a),y(o,c),y(c,h),y(o,g),y(o,f),e[9](o),m=!0,p||(v=Ft(o,"submit",e[5]),p=!0)},p(x,A){let M=t;t=$(x),t!==M&&(Ht(),B(w[M],1,1,()=>{w[M]=null}),Ut(),s=w[t],s||(s=w[t]=_[t](x),s.c()),D(s,1),s.m(i.parentNode,i)),x[0]!==void 0?k?k.p(x,A):(k=zn(x),k.c(),k.m(o,r)):k&&(k.d(1),k=null),(!m||A&8&&l!==(l=x[3]?x[3].getName():""))&&P(n,"value",l),(!m||A&8&&u!==(u=x[3]?x[3].getAmount().value():""))&&P(c,"value",u)},i(x){m||(D(s),m=!0)},o(x){B(s),m=!1},d(x){x&&(z(i),z(o)),w[t].d(x),k&&k.d(),e[9](null),p=!1,v()}}}function Xp(e){let t,s,i={$$slots:{default:[Yp]},$$scope:{ctx:e}};return t=new Xi({props:i}),e[10](t),t.$on("modalOpened",e[6]),t.$on("modalClosed",e[11]),{c(){j(t.$$.fragment)},m(o,r){U(t,o,r),s=!0},p(o,[r]){const n={};r&65549&&(n.$$scope={dirty:r,ctx:o}),t.$set(n)},i(o){s||(D(t.$$.fragment,o),s=!0)},o(o){B(t.$$.fragment,o),s=!1},d(o){e[10](null),q(t,o)}}}function Zp(e,t,s){const i=se();let o;function r(){o.toggleOpen()}let{accounts:n=void 0}=t,{type:l}=t,a,c;function h(v){if(v.preventDefault(),!a.checkValidity())return;let _=new FormData(a),w=_.get("account-name").toString(),$=_.get("account-amount").toString(),k=Number.parseFloat($);if(c){let x=k-c.getAmount().value();bt.makeAndAdd({type:cs.Balancing,name:"Balancing",date:as,amount:new pt(x),account:c}),c.setName(w)}else l===ti?wt.addSpendingAccount(new ti(w,new pt(k))):l===Bi&&wt.addSavingAccount(new Bi(w,new pt(k)));r()}function u(v){let _=Number.parseInt(v.value);s(3,c=n.find(w=>w.id===_))}function g(){if(new FormData(a).get("selected-account")){let _=a.querySelector("sl-select");_.addEventListener("sl-change",w=>{u(w.target)}),u(_)}i("modalOpened")}function f(v){Y[v?"unshift":"push"](()=>{a=v,s(2,a)})}function m(v){Y[v?"unshift":"push"](()=>{o=v,s(1,o)})}const p=()=>i("modalClosed");return e.$$set=v=>{"accounts"in v&&s(0,n=v.accounts),"type"in v&&s(8,l=v.type)},[n,o,a,c,i,h,g,r,l,f,m,p]}class Ln extends _t{constructor(t){super(),yt(this,t,Zp,Xp,vt,{toggleOpen:7,accounts:0,type:8})}get toggleOpen(){return this.$$.ctx[7]}}function Tn(e,t,s){const i=e.slice();return i[12]=t[s],i}function Qp(e){let t;return{c(){t=N("Select an account to delete")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function On(e){let t,s=e[12].getName()+"",i,o;return{c(){t=C("sl-option"),i=N(s),P(t,"value",o=e[12].id)},m(r,n){E(r,t,n),y(t,i)},p(r,n){n&2&&s!==(s=r[12].getName()+"")&&at(i,s),n&2&&o!==(o=r[12].id)&&P(t,"value",o)},d(r){r&&z(t)}}}function Jp(e){let t,s,i,o,r,n,l,a,c,h,u;t=new ae({props:{$$slots:{default:[Qp]},$$scope:{ctx:e}}});let g=gt(e[1]),f=[];for(let m=0;m<g.length;m+=1)f[m]=On(Tn(e,g,m));return{c(){j(t.$$.fragment),s=T(),i=C("sl-select");for(let m=0;m<f.length;m+=1)f[m].c();r=T(),n=C("sl-button"),n.textContent="Cancel",l=T(),a=C("sl-button"),a.textContent="Delete",P(i,"value",o=`${e[1][0].id}`),P(i,"label","Account to delete"),P(a,"variant","danger")},m(m,p){U(t,m,p),E(m,s,p),E(m,i,p);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(i,null);e[7](i),E(m,r,p),E(m,n,p),E(m,l,p),E(m,a,p),c=!0,h||(u=[Ft(n,"click",e[0]),Ft(a,"click",e[5])],h=!0)},p(m,p){const v={};if(p&32768&&(v.$$scope={dirty:p,ctx:m}),t.$set(v),p&2){g=gt(m[1]);let _;for(_=0;_<g.length;_+=1){const w=Tn(m,g,_);f[_]?f[_].p(w,p):(f[_]=On(w),f[_].c(),f[_].m(i,null))}for(;_<f.length;_+=1)f[_].d(1);f.length=g.length}(!c||p&2&&o!==(o=`${m[1][0].id}`))&&P(i,"value",o)},i(m){c||(D(t.$$.fragment,m),c=!0)},o(m){B(t.$$.fragment,m),c=!1},d(m){m&&(z(s),z(i),z(r),z(n),z(l),z(a)),q(t,m),Pt(f,m),e[7](null),h=!1,ss(u)}}}function tf(e){let t,s,i={$$slots:{default:[Jp]},$$scope:{ctx:e}};return t=new Xi({props:i}),e[8](t),t.$on("modalClosed",e[9]),t.$on("modalOpened",e[6]),{c(){j(t.$$.fragment)},m(o,r){U(t,o,r),s=!0},p(o,[r]){const n={};r&32778&&(n.$$scope={dirty:r,ctx:o}),t.$set(n)},i(o){s||(D(t.$$.fragment,o),s=!0)},o(o){B(t.$$.fragment,o),s=!1},d(o){e[8](null),q(t,o)}}}function ef(e,t,s){const i=se();let o;function r(){o.toggleOpen()}let{accounts:n}=t,l,a;function c(){wt.deleteAccount(a.id),r()}function h(p){let v=Number.parseInt(p.value);a=n.find(_=>_.id===v)}function u(){l.addEventListener("sl-change",p=>{h(p.target)}),h(l),i("modalOpened")}function g(p){Y[p?"unshift":"push"](()=>{l=p,s(3,l)})}function f(p){Y[p?"unshift":"push"](()=>{o=p,s(2,o)})}const m=()=>i("modalClosed");return e.$$set=p=>{"accounts"in p&&s(1,n=p.accounts)},[r,n,o,l,i,c,u,g,f,m]}class sf extends _t{constructor(t){super(),yt(this,t,ef,tf,vt,{toggleOpen:0,accounts:1})}get toggleOpen(){return this.$$.ctx[0]}}function Mn(e,t,s){const i=e.slice();return i[22]=t[s],i}function of(e){let t;return{c(){t=N(e[1])},m(s,i){E(s,t,i)},p(s,i){i&2&&at(t,s[1])},d(s){s&&z(t)}}}function In(e){let t;return{c(){t=C("span"),t.innerHTML="You haven&#39;t added any account yet.<br/>Create a new account by clicking on the three dots above and start tracking your expenses",S(t,"class","text-sm")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function Dn(e){let t,s,i=e[22].getName()+"",o,r,n,l=e[22].getAmount().toString()+"",a,c;return{c(){t=C("div"),s=C("span"),o=N(i),r=T(),n=C("span"),a=N(l),c=T(),S(n,"class","font-mono"),S(t,"class","flex justify-between")},m(h,u){E(h,t,u),y(t,s),y(s,o),y(t,r),y(t,n),y(n,a),y(t,c)},p(h,u){u&4&&i!==(i=h[22].getName()+"")&&at(o,i),u&4&&l!==(l=h[22].getAmount().toString()+"")&&at(a,l)},d(h){h&&z(t)}}}function rf(e){let t,s,i,o,r,n,l=e[2].map(Pn).reduce(e[12],new pt(0)).toString()+"",a,c,h,u,g,f,m,p,v,_,w,$,k,x,A,M,O,I,V,ct;i=new ae({props:{margin:!1,$$slots:{default:[of]},$$scope:{ctx:e}}});let J=e[2].length===0&&In(),lt=gt(e[2]),ot=[];for(let W=0;W<lt.length;W+=1)ot[W]=Dn(Mn(e,lt,W));return{c(){t=C("div"),s=C("div"),j(i.$$.fragment),o=T(),r=C("div"),n=C("span"),a=N(l),c=T(),h=C("button"),h.innerHTML='<svg height="1.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>',u=T(),g=C("sl-menu"),f=C("sl-menu-item"),f.textContent="Create new account",m=T(),p=C("sl-menu-item"),v=N("Edit account"),w=T(),$=C("sl-menu-item"),k=N("Delete account"),A=T(),M=C("div"),J&&J.c(),O=T();for(let W=0;W<ot.length;W+=1)ot[W].c();S(n,"class","inline-block"),S(h,"class","fill-text"),P(f,"value","create"),P(p,"disabled",_=e[2].length===0),P(p,"value","edit"),P($,"disabled",x=e[2].length===0),P($,"value","delete"),P(g,"class","hidden absolute z-20 left-[90%] top-[80%] rounded-lg"),S(r,"class","relative flex items-center"),S(s,"class","flex justify-between gap-2 font-bold text-xl"),S(t,"class","separator mb-4"),S(M,"class","flex flex-col opacity-75 gap-2 max-h-24 overflow-y-scroll no-scroll")},m(W,L){E(W,t,L),y(t,s),U(i,s,null),y(s,o),y(s,r),y(r,n),y(n,a),y(r,c),y(r,h),y(r,u),y(r,g),y(g,f),y(g,m),y(g,p),y(p,v),y(g,w),y(g,$),y($,k),e[16](g),E(W,A,L),E(W,M,L),J&&J.m(M,null),y(M,O);for(let nt=0;nt<ot.length;nt+=1)ot[nt]&&ot[nt].m(M,null);I=!0,V||(ct=[Ft(h,"click",e[8]),Ft(f,"click",e[13]),Ft(p,"click",e[14]),Ft($,"click",e[15])],V=!0)},p(W,L){const nt={};if(L&33554434&&(nt.$$scope={dirty:L,ctx:W}),i.$set(nt),(!I||L&4)&&l!==(l=W[2].map(Pn).reduce(W[12],new pt(0)).toString()+"")&&at(a,l),(!I||L&4&&_!==(_=W[2].length===0))&&P(p,"disabled",_),(!I||L&4&&x!==(x=W[2].length===0))&&P($,"disabled",x),W[2].length===0?J||(J=In(),J.c(),J.m(M,O)):J&&(J.d(1),J=null),L&4){lt=gt(W[2]);let tt;for(tt=0;tt<lt.length;tt+=1){const Ae=Mn(W,lt,tt);ot[tt]?ot[tt].p(Ae,L):(ot[tt]=Dn(Ae),ot[tt].c(),ot[tt].m(M,null))}for(;tt<ot.length;tt+=1)ot[tt].d(1);ot.length=lt.length}},i(W){I||(D(i.$$.fragment,W),I=!0)},o(W){B(i.$$.fragment,W),I=!1},d(W){W&&(z(t),z(A),z(M)),q(i),e[16](null),J&&J.d(),Pt(ot,W),V=!1,ss(ct)}}}function nf(e){let t,s,i,o,r,n,l,a,c,h={type:e[3],accounts:e[2]};t=new Ln({props:h}),e[9](t);let u={type:e[3]};i=new Ln({props:u}),e[10](i);let g={accounts:e[2]};r=new sf({props:g}),e[11](r);function f(p){e[17](p)}let m={extraClasses:"p-4 min-w-fit",$$slots:{default:[rf]},$$scope:{ctx:e}};return e[0]!==void 0&&(m.container=e[0]),l=new Rs({props:m}),Y.push(()=>Pi(l,"container",f)),{c(){j(t.$$.fragment),s=T(),j(i.$$.fragment),o=T(),j(r.$$.fragment),n=T(),j(l.$$.fragment)},m(p,v){U(t,p,v),E(p,s,v),U(i,p,v),E(p,o,v),U(r,p,v),E(p,n,v),U(l,p,v),c=!0},p(p,[v]){const _={};v&8&&(_.type=p[3]),v&4&&(_.accounts=p[2]),t.$set(_);const w={};v&8&&(w.type=p[3]),i.$set(w);const $={};v&4&&($.accounts=p[2]),r.$set($);const k={};v&33554678&&(k.$$scope={dirty:v,ctx:p}),!a&&v&1&&(a=!0,k.container=p[0],Di(()=>a=!1)),l.$set(k)},i(p){c||(D(t.$$.fragment,p),D(i.$$.fragment,p),D(r.$$.fragment,p),D(l.$$.fragment,p),c=!0)},o(p){B(t.$$.fragment,p),B(i.$$.fragment,p),B(r.$$.fragment,p),B(l.$$.fragment,p),c=!1},d(p){p&&(z(s),z(o),z(n)),e[9](null),q(t,p),e[10](null),q(i,p),e[11](null),q(r,p),q(l,p)}}}const Pn=e=>e.getAmount();function af(e,t,s){let{sectionName:i}=t,{accounts:o}=t,{type:r}=t,n,l,a,c,h=!1,{container:u=void 0}=t;function g(I){return c?c.contains(I):!1}let f=!0;function m(I){if(f){f=!1;return}I.target&&(g(I.target)||p())}function p(){h=!h,h?(c.classList.remove("hidden"),f=!0,window.addEventListener("click",m)):(c.classList.add("hidden"),window.removeEventListener("click",m))}function v(I){Y[I?"unshift":"push"](()=>{l=I,s(5,l)})}function _(I){Y[I?"unshift":"push"](()=>{n=I,s(4,n)})}function w(I){Y[I?"unshift":"push"](()=>{a=I,s(6,a)})}const $=(I,V)=>new pt(I.value()+V.value()),k=()=>{p(),n.toggleOpen()},x=()=>{p(),l.toggleOpen()},A=()=>{p(),a.toggleOpen()};function M(I){Y[I?"unshift":"push"](()=>{c=I,s(7,c)})}function O(I){u=I,s(0,u)}return e.$$set=I=>{"sectionName"in I&&s(1,i=I.sectionName),"accounts"in I&&s(2,o=I.accounts),"type"in I&&s(3,r=I.type),"container"in I&&s(0,u=I.container)},[u,i,o,r,n,l,a,c,p,v,_,w,$,k,x,A,M,O]}class xo extends _t{constructor(t){super(),yt(this,t,af,nf,vt,{sectionName:1,accounts:2,type:3,container:0})}}function lf(e){let t,s,i,o,r;const n=e[3].default,l=Is(n,e,e[2],null);return{c(){t=C("button"),l&&l.c(),S(t,"class",s=e[0]+" purple-gradient border-box rounded-xl after:rounded-xl svelte-1vgeym1")},m(a,c){E(a,t,c),l&&l.m(t,null),i=!0,o||(r=Ft(t,"click",e[1]),o=!0)},p(a,[c]){l&&l.p&&(!i||c&4)&&Ps(l,n,a,a[2],i?Ds(n,a[2],c,null):Bs(a[2]),null),(!i||c&1&&s!==(s=a[0]+" purple-gradient border-box rounded-xl after:rounded-xl svelte-1vgeym1"))&&S(t,"class",s)},i(a){i||(D(l,a),i=!0)},o(a){B(l,a),i=!1},d(a){a&&z(t),l&&l.d(a),o=!1,r()}}}function cf(e,t,s){let{$$slots:i={},$$scope:o}=t;const r=se();let{extraClasses:n=""}=t;function l(){r("click")}return e.$$set=a=>{"extraClasses"in a&&s(0,n=a.extraClasses),"$$scope"in a&&s(2,o=a.$$scope)},[n,l,o,i]}class Mo extends _t{constructor(t){super(),yt(this,t,cf,lf,vt,{extraClasses:0})}}function df(e,t,s){const i=e.slice();return i[13]=t[s],i}function uf(e,t,s){const i=e.slice();return i[16]=t[s],i}function hf(e,t,s){const i=e.slice();return i[13]=t[s],i}function pf(e,t,s){const i=e.slice();return i[16]=t[s],i}function ff(e){let t,s,i,o;return{c(){t=Le("svg"),s=Le("g"),i=Le("path"),o=Le("path"),S(i,"d","M20 10L4 10L9.5 4"),S(i,"stroke-width","1.5"),S(i,"stroke-linecap","round"),S(i,"stroke-linejoin","round"),S(o,"d","M4 14L20 14L14.5 20"),S(o,"stroke-width","1.5"),S(o,"stroke-linecap","round"),S(o,"stroke-linejoin","round"),S(t,"class","stroke-text"),S(t,"viewBox","0 0 24 24"),S(t,"fill","none")},m(r,n){E(r,t,n),y(t,s),y(s,i),y(s,o)},p:ut,d(r){r&&z(t)}}}function mf(e){let t;return{c(){t=C("div"),t.innerHTML='<h1 class="text-lg text-text font-medium">You need at least two accounts to make a transfer 🗄️</h1>',S(t,"class","flex justify-center text-center items-center h-full")},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function gf(e){let t,s,i,o,r,n,l,a,c,h,u,g,f,m,p,v,_,w,$,k,x,A,M,O=gt(wt.getSpendingAccounts()),I=[];for(let L=0;L<O.length;L+=1)I[L]=bf(pf(e,O,L));let V=gt(wt.getSavingAccounts()),ct=[];for(let L=0;L<V.length;L+=1)ct[L]=vf(hf(e,V,L));let J=gt(wt.getSpendingAccounts()),lt=[];for(let L=0;L<J.length;L+=1)lt[L]=yf(uf(e,J,L));let ot=gt(wt.getSavingAccounts()),W=[];for(let L=0;L<ot.length;L+=1)W[L]=_f(df(e,ot,L));return{c(){t=C("form"),s=C("sl-select"),i=C("small"),i.textContent="Spending accounts",o=T();for(let L=0;L<I.length;L+=1)I[L].c();r=T(),n=C("small"),n.textContent="Saving accounts",l=T();for(let L=0;L<ct.length;L+=1)ct[L].c();c=T(),h=C("sl-select"),u=C("small"),u.textContent="Spending accounts",g=T();for(let L=0;L<lt.length;L+=1)lt[L].c();f=T(),m=C("small"),m.textContent="Saving accounts",p=T();for(let L=0;L<W.length;L+=1)W[L].c();_=T(),w=C("sl-input"),$=C("span"),$.textContent=`${pt.currencyType}`,k=T(),x=C("sl-button"),x.textContent="Submit",P(s,"name","giver-account"),P(s,"value",a=`${e[1][0].id}`),P(s,"label","From"),P(h,"name","receiver-account"),P(h,"value",v=`${e[1][1].id}`),P(h,"label","To"),S($,"slot","prefix"),P(w,"value",0),P(w,"name","transfer-amount"),P(w,"required",""),P(w,"label","Amount"),P(w,"pattern","([0-9.,])+"),P(x,"class","submit-button"),P(x,"type","submit"),P(x,"variant","primary"),S(t,"class","validity-styles input-validation-required")},m(L,nt){E(L,t,nt),y(t,s),y(s,i),y(s,o);for(let tt=0;tt<I.length;tt+=1)I[tt]&&I[tt].m(s,null);y(s,r),y(s,n),y(s,l);for(let tt=0;tt<ct.length;tt+=1)ct[tt]&&ct[tt].m(s,null);y(t,c),y(t,h),y(h,u),y(h,g);for(let tt=0;tt<lt.length;tt+=1)lt[tt]&&lt[tt].m(h,null);y(h,f),y(h,m),y(h,p);for(let tt=0;tt<W.length;tt+=1)W[tt]&&W[tt].m(h,null);y(t,_),y(t,w),y(w,$),y(t,k),y(t,x),e[7](t),A||(M=Ft(t,"submit",e[5]),A=!0)},p(L,nt){nt&2&&a!==(a=`${L[1][0].id}`)&&P(s,"value",a),nt&2&&v!==(v=`${L[1][1].id}`)&&P(h,"value",v)},d(L){L&&z(t),Pt(I,L),Pt(ct,L),Pt(lt,L),Pt(W,L),e[7](null),A=!1,M()}}}function bf(e){let t;return{c(){t=C("sl-option"),t.textContent=`${e[16].getName()}`,P(t,"value",e[16].id)},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function vf(e){let t;return{c(){t=C("sl-option"),t.textContent=`${e[13].getName()}`,P(t,"value",e[13].id)},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function yf(e){let t;return{c(){t=C("sl-option"),t.textContent=`${e[16].getName()}`,P(t,"value",e[16].id)},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function _f(e){let t;return{c(){t=C("sl-option"),t.textContent=`${e[13].getName()}`,P(t,"value",e[13].id)},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function wf(e){let t;function s(r,n){return r[1].length>=2?gf:mf}let i=s(e),o=i(e);return{c(){o.c(),t=Se()},m(r,n){o.m(r,n),E(r,t,n)},p(r,n){i===(i=s(r))&&o?o.p(r,n):(o.d(1),o=i(r),o&&(o.c(),o.m(t.parentNode,t)))},d(r){r&&z(t),o.d(r)}}}function xf(e){let t,s,i,o,r,n,l,a,c;return r=new Mo({props:{extraClasses:"aspect-square w-10 p-2",$$slots:{default:[ff]},$$scope:{ctx:e}}}),r.$on("click",e[6]),a=new Rs({props:{extraClasses:"h-full w-64 p-4",$$slots:{default:[wf]},$$scope:{ctx:e}}}),{c(){t=C("div"),s=C("div"),i=T(),o=C("div"),j(r.$$.fragment),n=T(),l=C("div"),j(a.$$.fragment),S(s,"class","container-link opacity-30 mx-auto bg-white w-[2px] svelte-1dr1lja"),S(l,"class","transfer-box absolute left-44 svelte-1dr1lja"),S(o,"class","absolute position-0 flex items-center justify-center"),Fe(t,"--transferbox-height","318px"),Fe(t,"--initial-height",e[0]),S(t,"class","overall-container relative w-full svelte-1dr1lja")},m(h,u){E(h,t,u),y(t,s),y(t,i),y(t,o),U(r,o,null),y(o,n),y(o,l),U(a,l,null),e[8](l),e[9](t),c=!0},p(h,[u]){const g={};u&8388608&&(g.$$scope={dirty:u,ctx:h}),r.$set(g);const f={};u&8388626&&(f.$$scope={dirty:u,ctx:h}),a.$set(f),(!c||u&1)&&Fe(t,"--initial-height",h[0])},i(h){c||(D(r.$$.fragment,h),D(a.$$.fragment,h),c=!0)},o(h){B(r.$$.fragment,h),B(a.$$.fragment,h),c=!1},d(h){h&&z(t),q(r),q(a),e[8](null),e[9](null)}}}function kf(e,t,s){let{containerInitialHeight:i="80px"}=t;const o=se();let r=wt.getAllAccounts(),n,l,a,c=!1;function h(){c=!c,c?(n.classList.add("open"),n.classList.remove("close"),l.classList.add("expanded"),l.classList.remove("collapsed")):(n.classList.add("close"),n.classList.remove("open"),l.classList.add("collapsed"),l.classList.remove("expanded"))}function u(v){if(v.preventDefault(),!a.checkValidity())return;let _=new FormData(a),w=_.get("giver-account").toString(),$=_.get("receiver-account").toString(),k=_.get("transfer-amount").toString(),x=r.find(M=>M.id===Number.parseInt(w)),A=r.find(M=>M.id===Number.parseInt($));bt.makeAndAdd({type:cs.Transfer,name:`${x==null?void 0:x.getName()} => ${A==null?void 0:A.getName()}`,amount:new pt(Number.parseFloat(k)),date:as,account:x,otherAccount:A}),h()}function g(){h(),o("click",c)}vs(()=>{wt.onAccountsUpdated(()=>{s(1,r=wt.getAllAccounts())})});function f(v){Y[v?"unshift":"push"](()=>{a=v,s(4,a)})}function m(v){Y[v?"unshift":"push"](()=>{n=v,s(2,n)})}function p(v){Y[v?"unshift":"push"](()=>{l=v,s(3,l)})}return e.$$set=v=>{"containerInitialHeight"in v&&s(0,i=v.containerInitialHeight)},[i,r,n,l,a,u,g,f,m,p]}class al extends _t{constructor(t){super(),yt(this,t,kf,xf,vt,{containerInitialHeight:0})}}function $f(e){let t,s,i,o,r,n,l,a;return s=new xo({props:{type:ti,sectionName:"Spending accounts",accounts:e[0]}}),r=new al({props:{containerInitialHeight:"80px"}}),r.$on("click",e[3]),l=new xo({props:{type:Bi,sectionName:"Savings",accounts:e[1]}}),{c(){t=C("div"),j(s.$$.fragment),i=T(),o=C("div"),j(r.$$.fragment),n=T(),j(l.$$.fragment),S(t,"class","relative flex flex-col w-full")},m(c,h){E(c,t,h),U(s,t,null),y(t,i),y(t,o),U(r,o,null),e[4](o),y(t,n),U(l,t,null),a=!0},p(c,[h]){const u={};h&1&&(u.accounts=c[0]),s.$set(u);const g={};h&2&&(g.accounts=c[1]),l.$set(g)},i(c){a||(D(s.$$.fragment,c),D(r.$$.fragment,c),D(l.$$.fragment,c),a=!0)},o(c){B(s.$$.fragment,c),B(r.$$.fragment,c),B(l.$$.fragment,c),a=!1},d(c){c&&z(t),q(s),q(r),e[4](null),q(l)}}}function Cf(e,t,s){let{spendingAccounts:i}=t,{savingAccounts:o}=t,r,n=!1;function l(){n=!n,n?s(2,r.style.width="50%",r):setTimeout(()=>s(2,r.style.width="auto",r),150)}function a(c){Y[c?"unshift":"push"](()=>{r=c,s(2,r)})}return e.$$set=c=>{"spendingAccounts"in c&&s(0,i=c.spendingAccounts),"savingAccounts"in c&&s(1,o=c.savingAccounts)},[i,o,r,l,a]}class Sf extends _t{constructor(t){super(),yt(this,t,Cf,$f,vt,{spendingAccounts:0,savingAccounts:1})}}function Bn(e){let t,s=e[0].account.getName()+"",i;return{c(){t=C("span"),i=N(s),S(t,"class","block opacity-75")},m(o,r){E(o,t,r),y(t,i)},p(o,r){r&1&&s!==(s=o[0].account.getName()+"")&&at(i,s)},d(o){o&&z(t)}}}function Rn(e){var o;let t,s=((o=e[0].getRelatedBudget(xe))==null?void 0:o.getName())+"",i;return{c(){t=C("span"),i=N(s),S(t,"class","block")},m(r,n){E(r,t,n),y(t,i)},p(r,n){var l;n&1&&s!==(s=((l=r[0].getRelatedBudget(xe))==null?void 0:l.getName())+"")&&at(i,s)},d(r){r&&z(t)}}}function Af(e){let t,s,i,o,r=e[0].name+"",n,l,a,c=ms(e[0].date)+"",h,u,g,f=e[0]instanceof Te&&e[0].category!==Yt.None&&e[0].getRelatedBudget(xe),m,p,v,_=!(e[0]instanceof wo)&&Bn(e),w=f&&Rn(e);return{c(){t=C("div"),s=C("div"),i=C("div"),o=C("span"),n=N(r),l=T(),a=C("span"),h=N(c),u=T(),_&&_.c(),g=T(),w&&w.c(),m=T(),p=C("div"),v=N(e[2]),S(o,"class","font-medium"),S(a,"class","text-sm text-text-secondary"),S(s,"class","flex flex-col"),S(p,"class","font-medium font-mono my-auto"),S(t,"class","flex flex-row justify-between")},m($,k){E($,t,k),y(t,s),y(s,i),y(i,o),y(o,n),y(i,l),y(i,a),y(a,h),y(s,u),_&&_.m(s,null),y(s,g),w&&w.m(s,null),y(t,m),y(t,p),y(p,v),e[3](p)},p($,[k]){k&1&&r!==(r=$[0].name+"")&&at(n,r),k&1&&c!==(c=ms($[0].date)+"")&&at(h,c),$[0]instanceof wo?_&&(_.d(1),_=null):_?_.p($,k):(_=Bn($),_.c(),_.m(s,g)),k&1&&(f=$[0]instanceof Te&&$[0].category!==Yt.None&&$[0].getRelatedBudget(xe)),f?w?w.p($,k):(w=Rn($),w.c(),w.m(s,null)):w&&(w.d(1),w=null),k&4&&at(v,$[2])},i:ut,o:ut,d($){$&&z(t),_&&_.d(),w&&w.d(),e[3](null)}}}function zf(e,t,s){let{transaction:i}=t,o,r="";vs(()=>{o.classList.remove("text-accent-light","text-valid"),i instanceof Te?(s(2,r=`-${i.getAmount().toString()}`),o.classList.add("text-accent-light")):i instanceof Qe?(s(2,r=`+${i.getAmount().toString()}`),o.classList.add("text-valid")):(s(2,r=`${i.getAmount().toString()}`),o.classList.add("text-text-secondary"))});function n(l){Y[l?"unshift":"push"](()=>{o=l,s(1,o)})}return e.$$set=l=>{"transaction"in l&&s(0,i=l.transaction)},[i,o,r,n]}class Ef extends _t{constructor(t){super(),yt(this,t,zf,Af,vt,{transaction:0})}}function Lf(e,t,s){const i=e.slice();return i[12]=t[s],i}function Tf(e,t,s){const i=e.slice();return i[12]=t[s],i}function Of(e,t,s){const i=e.slice();return i[12]=t[s],i}function Mf(e,t,s){const i=e.slice();return i[19]=t[s],i}function Vn(e){let t;return{c(){t=C("sl-select"),t.innerHTML='<sl-option value="expense">Expense</sl-option> <sl-option value="income">Income</sl-option>',P(t,"class","transaction-type"),P(t,"name","transaction-type"),P(t,"label","Type"),P(t,"value","expense")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function Fn(e){let t,s=gt(Yt.getAllIdentifiers()),i=[];for(let o=0;o<s.length;o+=1)i[o]=If(Mf(e,s,o));return{c(){t=C("sl-select");for(let o=0;o<i.length;o+=1)i[o].c();P(t,"name","transaction-category"),P(t,"clearable",""),P(t,"label","category")},m(o,r){E(o,t,r);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(t,null)},d(o){o&&z(t),Pt(i,o)}}}function If(e){let t;return{c(){var s;t=C("sl-option"),t.textContent=`${(s=Yt.getCategory(e[19]))==null?void 0:s.label}`,P(t,"value",e[19])},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function Df(e){let t;return{c(){t=C("sl-option"),t.textContent=`${e[12].getName()}`,P(t,"value",e[12].id)},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function Nn(e){let t,s,i,o=gt(wt.getSavingAccounts()),r=[];for(let n=0;n<o.length;n+=1)r[n]=Pf(Tf(e,o,n));return{c(){t=C("small"),t.textContent="Saving accounts",s=T();for(let n=0;n<r.length;n+=1)r[n].c();i=Se()},m(n,l){E(n,t,l),E(n,s,l);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(n,l);E(n,i,l)},d(n){n&&(z(t),z(s),z(i)),Pt(r,n)}}}function Pf(e){let t;return{c(){t=C("sl-option"),t.textContent=`${e[12].getName()}`,P(t,"value",e[12].id)},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function Hn(e){let t,s,i,o,r,n,l,a,c,h,u,g=gt(wt.getSavingAccounts()),f=[];for(let m=0;m<g.length;m+=1)f[m]=Bf(Lf(e,g,m));return{c(){t=C("sl-select");for(let m=0;m<f.length;m+=1)f[m].c();s=T(),i=C("label"),i.textContent="saving proportion",o=T(),r=C("div"),n=C("sl-input"),l=T(),a=C("sl-select"),c=C("sl-option"),c.textContent="%",h=T(),u=C("sl-option"),u.textContent=`${pt.currency()}`,P(t,"name","saving-account"),P(t,"placeholder","Select a saving account"),P(t,"clearable",""),P(t,"label","Saving account"),S(i,"for","amount-saved"),P(n,"required",""),P(n,"name","amount-saved"),P(n,"pattern","([0-9.,])+"),P(n,"value","10"),P(c,"value","percent"),P(u,"value","currency"),P(a,"name","saving-proportion-type"),P(a,"class","absolute top-0 bottom-0 w-24 right-0"),P(a,"value","percent"),S(r,"class","relative")},m(m,p){E(m,t,p);for(let v=0;v<f.length;v+=1)f[v]&&f[v].m(t,null);E(m,s,p),E(m,i,p),E(m,o,p),E(m,r,p),y(r,n),y(r,l),y(r,a),y(a,c),y(a,h),y(a,u)},d(m){m&&(z(t),z(s),z(i),z(o),z(r)),Pt(f,m)}}}function Bf(e){let t;return{c(){t=C("sl-option"),t.textContent=`${e[12].getName()}`,P(t,"value",e[12].id)},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function Rf(e){let t,s,i,o,r,n,l,a,c,h,u,g,f,m,p,v,_,w=e[0]===void 0&&Vn(),$=e[3]==="expense"&&Fn(e),k=gt(wt.getSpendingAccounts()),x=[];for(let O=0;O<k.length;O+=1)x[O]=Df(Of(e,k,O));let A=e[3]==="income"&&Nn(e),M=e[3]==="income"&&Hn(e);return{c(){t=C("form"),w&&w.c(),s=T(),i=C("sl-input"),o=T(),r=C("sl-input"),n=C("span"),n.textContent=`${pt.currencyType}`,l=T(),$&&$.c(),a=T(),c=C("sl-select"),h=C("small"),h.textContent="Spending accounts",u=T();for(let O=0;O<x.length;O+=1)x[O].c();g=T(),A&&A.c(),f=T(),M&&M.c(),m=T(),p=C("sl-button"),p.textContent="Submit",P(i,"required",""),P(i,"name","transaction-name"),P(i,"label","Name"),S(n,"slot","prefix"),P(r,"required",""),P(r,"placeholder","0"),P(r,"name","transaction-amount"),P(r,"label","Amount"),P(r,"pattern","([0-9.,])+"),P(c,"name","transaction-account"),P(c,"value",`${wt.getSpendingAccounts()[0].id}`),P(c,"label","Account"),P(p,"class","submit-button"),P(p,"variant","primary"),P(p,"type","submit"),S(t,"class","validity-styles input-validation-required")},m(O,I){E(O,t,I),w&&w.m(t,null),y(t,s),y(t,i),y(t,o),y(t,r),y(r,n),y(t,l),$&&$.m(t,null),y(t,a),y(t,c),y(c,h),y(c,u);for(let V=0;V<x.length;V+=1)x[V]&&x[V].m(c,null);y(c,g),A&&A.m(c,null),y(t,f),M&&M.m(t,null),y(t,m),y(t,p),e[8](t),v||(_=Ft(t,"submit",e[5]),v=!0)},p(O,I){O[0]===void 0?w||(w=Vn(),w.c(),w.m(t,s)):w&&(w.d(1),w=null),O[3]==="expense"?$||($=Fn(O),$.c(),$.m(t,a)):$&&($.d(1),$=null),O[3]==="income"?A||(A=Nn(O),A.c(),A.m(c,null)):A&&(A.d(1),A=null),O[3]==="income"?M||(M=Hn(O),M.c(),M.m(t,m)):M&&(M.d(1),M=null)},d(O){O&&z(t),w&&w.d(),$&&$.d(),Pt(x,O),A&&A.d(),M&&M.d(),e[8](null),v=!1,_()}}}function Vf(e){let t,s,i={$$slots:{default:[Rf]},$$scope:{ctx:e}};return t=new Xi({props:i}),e[9](t),t.$on("modalOpened",e[6]),t.$on("modalClosed",e[10]),{c(){j(t.$$.fragment)},m(o,r){U(t,o,r),s=!0},p(o,[r]){const n={};r&4194317&&(n.$$scope={dirty:r,ctx:o}),t.$set(n)},i(o){s||(D(t.$$.fragment,o),s=!0)},o(o){B(t.$$.fragment,o),s=!1},d(o){e[9](null),q(t,o)}}}function Ff(e,t,s){const i=se(),o=()=>n.toggleOpen();let{type:r=void 0}=t,n,l,a="expense";function c(p){s(3,a=p.value)}function h(p){if(p.preventDefault(),!l.checkValidity())return;let v=new FormData(l),_=v.get("transaction-amount").toString(),w=v.get("transaction-name").toString(),$=v.get("transaction-account").toString(),k=Number.parseFloat(_),x={type:a==="expense"?cs.Expense:cs.Income,name:w,amount:new pt(k),date:as,account:_o.findById(wt.getAllAccounts(),Number.parseInt($)),category:Yt.None};if(a==="expense"){let A=v.get("transaction-category").toString();x.category=Yt.getCategory(A)}if(a==="income"){let A=v.get("saving-proportion-type").toString(),M=v.get("amount-saved").toString(),O=v.get("saving-account").toString();x.otherAccount=_o.findById(wt.getSavingAccounts(),Number.parseInt(O));let I=Number.parseFloat(M),V=A,ct=I/100;V==="currency"&&(ct=I/k),x.savingPercent=ct}bt.makeAndAdd(x),n.toggleOpen()}function u(){let p=l.querySelector(".transaction-type");p?(p.addEventListener("sl-change",v=>{c(v.target)}),c(p)):r&&s(3,a=r)}function g(p){Y[p?"unshift":"push"](()=>{l=p,s(2,l)})}function f(p){Y[p?"unshift":"push"](()=>{n=p,s(1,n)})}const m=()=>i("modalClosed");return e.$$set=p=>{"type"in p&&s(0,r=p.type)},[r,n,l,a,i,h,u,o,g,f,m]}class fr extends _t{constructor(t){super(),yt(this,t,Ff,Vf,vt,{toggleOpen:7,type:0})}get toggleOpen(){return this.$$.ctx[7]}}function Nf(e){let t;const s=e[4].default,i=Is(s,e,e[7],null);return{c(){i&&i.c()},m(o,r){i&&i.m(o,r),t=!0},p(o,r){i&&i.p&&(!t||r&128)&&Ps(i,s,o,o[7],t?Ds(s,o[7],r,null):Bs(o[7]),null)},i(o){t||(D(i,o),t=!0)},o(o){B(i,o),t=!1},d(o){i&&i.d(o)}}}function Hf(e){let t,s,i;return s=new Mo({props:{extraClasses:e[0],$$slots:{default:[Nf]},$$scope:{ctx:e}}}),s.$on("click",e[5]),{c(){t=C("sl-tooltip"),j(s.$$.fragment),P(t,"placement","bottom-start"),P(t,"content","You need at least one account to add a transaction"),P(t,"trigger","manual")},m(o,r){E(o,t,r),U(s,t,null),e[6](t),i=!0},p(o,[r]){const n={};r&1&&(n.extraClasses=o[0]),r&128&&(n.$$scope={dirty:r,ctx:o}),s.$set(n)},i(o){i||(D(s.$$.fragment,o),i=!0)},o(o){B(s.$$.fragment,o),i=!1},d(o){o&&z(t),q(s),e[6](null)}}}function Uf(e,t,s){let{$$slots:i={},$$scope:o}=t,{extraClasses:r=void 0}=t;const n=se();let l,a=0;function c(){l.open?(s(1,l.open=!1,l),clearTimeout(a)):(s(1,l.open=!0,l),a=setTimeout(()=>s(1,l.open=!1,l),3e3))}const h=()=>n("click");function u(g){Y[g?"unshift":"push"](()=>{l=g,s(1,l)})}return e.$$set=g=>{"extraClasses"in g&&s(0,r=g.extraClasses),"$$scope"in g&&s(7,o=g.$$scope)},[r,l,n,c,i,h,u,o]}class Lr extends _t{constructor(t){super(),yt(this,t,Uf,Hf,vt,{extraClasses:0,triggerTooltip:3})}get triggerTooltip(){return this.$$.ctx[3]}}function Un(e,t,s){const i=e.slice();return i[7]=t[s],i}function qf(e){let t;return{c(){t=N("Last transactions")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function jf(e){let t;return{c(){t=C("span"),t.textContent="+",S(t,"class","text-lg font-bold")},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function Wf(e){let t;return{c(){t=C("h2"),t.textContent="There are no recent transactions for this period.",S(t,"class","text-lg text-text font-semibold text-center")},m(s,i){E(s,t,i)},p:ut,i:ut,o:ut,d(s){s&&z(t)}}}function Kf(e){let t,s,i=gt(e[0]),o=[];for(let n=0;n<i.length;n+=1)o[n]=qn(Un(e,i,n));const r=n=>B(o[n],1,1,()=>{o[n]=null});return{c(){for(let n=0;n<o.length;n+=1)o[n].c();t=Se()},m(n,l){for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(n,l);E(n,t,l),s=!0},p(n,l){if(l&1){i=gt(n[0]);let a;for(a=0;a<i.length;a+=1){const c=Un(n,i,a);o[a]?(o[a].p(c,l),D(o[a],1)):(o[a]=qn(c),o[a].c(),D(o[a],1),o[a].m(t.parentNode,t))}for(Ht(),a=i.length;a<o.length;a+=1)r(a);Ut()}},i(n){if(!s){for(let l=0;l<i.length;l+=1)D(o[l]);s=!0}},o(n){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)B(o[l]);s=!1},d(n){n&&z(t),Pt(o,n)}}}function qn(e){let t,s;return t=new Ef({props:{transaction:e[7]}}),{c(){j(t.$$.fragment)},m(i,o){U(t,i,o),s=!0},p(i,o){const r={};o&1&&(r.transaction=i[7]),t.$set(r)},i(i){s||(D(t.$$.fragment,i),s=!0)},o(i){B(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}function Gf(e){let t,s,i,o,r,n,l,a,c,h;i=new ae({props:{$$slots:{default:[qf]},$$scope:{ctx:e}}});let u={extraClasses:"aspect-square h-10 w-10",$$slots:{default:[jf]},$$scope:{ctx:e}};r=new Lr({props:u}),e[5](r),r.$on("click",e[3]);const g=[Kf,Wf],f=[];function m(p,v){return p[0].length>0?0:1}return a=m(e),c=f[a]=g[a](e),{c(){t=C("div"),s=C("div"),j(i.$$.fragment),o=T(),j(r.$$.fragment),n=T(),l=C("div"),c.c(),S(s,"class","flex-grow mr-10 font-bold leading-none separator"),S(t,"class","flex flex-row"),S(l,"class","pt-4 gap-8 flex flex-col w-full")},m(p,v){E(p,t,v),y(t,s),U(i,s,null),y(t,o),U(r,t,null),E(p,n,v),E(p,l,v),f[a].m(l,null),h=!0},p(p,v){const _={};v&1024&&(_.$$scope={dirty:v,ctx:p}),i.$set(_);const w={};v&1024&&(w.$$scope={dirty:v,ctx:p}),r.$set(w);let $=a;a=m(p),a===$?f[a].p(p,v):(Ht(),B(f[$],1,1,()=>{f[$]=null}),Ut(),c=f[a],c?c.p(p,v):(c=f[a]=g[a](p),c.c()),D(c,1),c.m(l,null))},i(p){h||(D(i.$$.fragment,p),D(r.$$.fragment,p),D(c),h=!0)},o(p){B(i.$$.fragment,p),B(r.$$.fragment,p),B(c),h=!1},d(p){p&&(z(t),z(n),z(l)),q(i),e[5](null),q(r),f[a].d()}}}function Yf(e){let t,s,i,o,r={};return t=new fr({props:r}),e[4](t),i=new Rs({props:{extraClasses:"p-8",$$slots:{default:[Gf]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment),s=T(),j(i.$$.fragment)},m(n,l){U(t,n,l),E(n,s,l),U(i,n,l),o=!0},p(n,[l]){const a={};t.$set(a);const c={};l&1027&&(c.$$scope={dirty:l,ctx:n}),i.$set(c)},i(n){o||(D(t.$$.fragment,n),D(i.$$.fragment,n),o=!0)},o(n){B(t.$$.fragment,n),B(i.$$.fragment,n),o=!1},d(n){n&&z(s),e[4](null),q(t,n),q(i,n)}}}function Xf(e,t,s){let i=r(),o;function r(){return bt.getTransactions().sort((h,u)=>u.date.getTime()-h.date.getTime())}function n(){wt.getAllAccounts().length>0?l.toggleOpen():o.triggerTooltip()}To(()=>{bt.onTransactionsUpdated(()=>s(0,i=r()))});let l;function a(h){Y[h?"unshift":"push"](()=>{l=h,s(2,l)})}function c(h){Y[h?"unshift":"push"](()=>{o=h,s(1,o)})}return[i,o,l,n,a,c]}class Zf extends _t{constructor(t){super(),yt(this,t,Xf,Yf,vt,{})}}function Qf(e){let t,s,i,o,r,n,l,a;return{c(){t=C("div"),s=C("div"),o=T(),r=C("div"),l=T(),a=C("div"),S(s,"class",i="absolute position-0 progress-bar "+e[1]+" rounded-full svelte-1satr94"),S(r,"class",n="absolute position-0 progress-bar "+e[1]+" rounded-full opacity-50 blur-xl svelte-1satr94"),S(a,"class","budget-overflow-indicator opacity-0 "+Ys.Error+" svelte-1satr94"),Fe(t,"--progress",e[0]+"%"),Fe(t,"--anim-delay",e[4]+"s"),Fe(t,"--anim-duration",e[5]+"s"),S(t,"class","relative rounded-full bg-dark w-full")},m(c,h){E(c,t,h),y(t,s),e[7](s),y(t,o),y(t,r),y(t,l),y(t,a),e[8](t)},p(c,[h]){h&2&&i!==(i="absolute position-0 progress-bar "+c[1]+" rounded-full svelte-1satr94")&&S(s,"class",i),h&2&&n!==(n="absolute position-0 progress-bar "+c[1]+" rounded-full opacity-50 blur-xl svelte-1satr94")&&S(r,"class",n),h&1&&Fe(t,"--progress",c[0]+"%")},i:ut,o:ut,d(c){c&&z(t),e[7](null),e[8](null)}}}function Jf(e,t,s){let{progress:i}=t,{color:o}=t,{height:r="small"}=t,n=Math.random()*.3,l=Math.random()*(1.2-.8)+.8,a="",c="";r=="small"?(a="h-5",c="h-8"):r=="large"&&(a="h-7",c="h-10");let h,u;function g(_,w=!1){let $=u.getBoundingClientRect();if(!$)return;let k=_.getBoundingClientRect().height,x=Math.round((k-$.height)/2);s(2,h.style.marginBlock=`${x}px`,h);let A=()=>{$=u.getBoundingClientRect();let M=Math.round($.width*100/i);_&&(_.classList.remove("opacity-0"),_.setAttribute("style",`left: ${M}px; top: -${x}px`))};w?A():u==null||u.addEventListener("animationend",()=>A(),{once:!0})}function f(){let _=h.querySelector(".budget-overflow-indicator");h.classList.add(a),_==null||_.classList.add(c),_&&o===Ys.Error?g(_,m):_==null||_.classList.add("opacity-0")}let m=!1;vs(()=>{f(),m||(m=!0)});function p(_){Y[_?"unshift":"push"](()=>{u=_,s(3,u)})}function v(_){Y[_?"unshift":"push"](()=>{h=_,s(2,h)})}return e.$$set=_=>{"progress"in _&&s(0,i=_.progress),"color"in _&&s(1,o=_.color),"height"in _&&s(6,r=_.height)},[i,o,h,u,n,l,r,p,v]}class ll extends _t{constructor(t){super(),yt(this,t,Jf,Qf,vt,{progress:0,color:1,height:6})}}function tm(e){let t,s,i=e[0].getName()+"",o,r,n,l,a,c=e[0].calculateCurrentSpent(bt).toString()+"",h,u,g,f=e[0].calculateRemainingSpend().toString()+"",m,p,v,_,w=e[0].getMax().toString()+"",$,k,x,A;return x=new ll({props:{color:e[1],progress:e[2]}}),{c(){t=C("div"),s=C("span"),o=N(i),r=T(),n=C("div"),l=C("div"),a=C("span"),h=N(c),u=T(),g=C("span"),m=N(f),p=N(" remaining"),v=T(),_=C("span"),$=N(w),k=T(),j(x.$$.fragment),S(s,"class","inline-block font-medium text-lg"),S(g,"class","opacity-75 text-sm"),S(l,"class","flex flex-row justify-between items-center"),S(n,"class","w-72"),S(t,"class","px-8 flex flex-row justify-between items-center")},m(M,O){E(M,t,O),y(t,s),y(s,o),y(t,r),y(t,n),y(n,l),y(l,a),y(a,h),y(l,u),y(l,g),y(g,m),y(g,p),y(l,v),y(l,_),y(_,$),y(n,k),U(x,n,null),A=!0},p(M,[O]){(!A||O&1)&&i!==(i=M[0].getName()+"")&&at(o,i),(!A||O&1)&&c!==(c=M[0].calculateCurrentSpent(bt).toString()+"")&&at(h,c),(!A||O&1)&&f!==(f=M[0].calculateRemainingSpend().toString()+"")&&at(m,f),(!A||O&1)&&w!==(w=M[0].getMax().toString()+"")&&at($,w);const I={};O&2&&(I.color=M[1]),O&4&&(I.progress=M[2]),x.$set(I)},i(M){A||(D(x.$$.fragment,M),A=!0)},o(M){B(x.$$.fragment,M),A=!1},d(M){M&&z(t),q(x)}}}function em(e,t,s){let{budget:i}=t,o=bo(i),r=i.calculatePctValue();return vs(()=>{i.calculateCurrentSpent(bt),s(1,o=bo(i)),s(2,r=i.calculatePctValue())}),e.$$set=n=>{"budget"in n&&s(0,i=n.budget)},[i,o,r]}class jn extends _t{constructor(t){super(),yt(this,t,em,tm,vt,{budget:0})}}function Wn(e,t,s){const i=e.slice();return i[1]=t[s],i}function sm(e){let t;return{c(){t=N("Budgets")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function im(e){let t;return{c(){t=C("span"),t.textContent='There are no budgets yet. Head over to the "Budgets" tab to manage your budgets.',S(t,"class","px-8 text-xl text-text font-medium text-center")},m(s,i){E(s,t,i)},p:ut,i:ut,o:ut,d(s){s&&z(t)}}}function om(e){let t,s,i=gt(e[0]),o=[];for(let n=0;n<i.length;n+=1)o[n]=Kn(Wn(e,i,n));const r=n=>B(o[n],1,1,()=>{o[n]=null});return{c(){for(let n=0;n<o.length;n+=1)o[n].c();t=Se()},m(n,l){for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(n,l);E(n,t,l),s=!0},p(n,l){if(l&1){i=gt(n[0]);let a;for(a=0;a<i.length;a+=1){const c=Wn(n,i,a);o[a]?(o[a].p(c,l),D(o[a],1)):(o[a]=Kn(c),o[a].c(),D(o[a],1),o[a].m(t.parentNode,t))}for(Ht(),a=i.length;a<o.length;a+=1)r(a);Ut()}},i(n){if(!s){for(let l=0;l<i.length;l+=1)D(o[l]);s=!0}},o(n){o=o.filter(Boolean);for(let l=0;l<o.length;l+=1)B(o[l]);s=!1},d(n){n&&z(t),Pt(o,n)}}}function Kn(e){let t,s,i;var o=jn;function r(n,l){return{props:{budget:n[1]}}}return o&&(t=fs(o,r(e))),{c(){t&&j(t.$$.fragment),s=Se()},m(n,l){t&&U(t,n,l),E(n,s,l),i=!0},p(n,l){if(o!==(o=jn)){if(t){Ht();const a=t;B(a.$$.fragment,1,0,()=>{q(a,1)}),Ut()}o?(t=fs(o,r(n)),j(t.$$.fragment),D(t.$$.fragment,1),U(t,s.parentNode,s)):t=null}else if(o){const a={};l&1&&(a.budget=n[1]),t.$set(a)}},i(n){i||(t&&D(t.$$.fragment,n),i=!0)},o(n){t&&B(t.$$.fragment,n),i=!1},d(n){n&&z(s),t&&q(t,n)}}}function rm(e){let t,s,i,o,r,n,l,a,c,h,u,g;i=new ae({props:{$$slots:{default:[sm]},$$scope:{ctx:e}}});const f=[om,im],m=[];function p(v,_){return v[0].length>=1?0:1}return h=p(e),u=m[h]=f[h](e),{c(){t=C("div"),s=C("div"),j(i.$$.fragment),o=T(),r=C("span"),r.textContent=`${ms(bt.getStartDate())} -> ${ms(bt.getEndDate())}`,n=T(),l=C("button"),l.textContent="Close period",a=T(),c=C("div"),u.c(),S(r,"class","font-light text-text-secondary"),S(l,"class","bg-none text-text-secondary underline"),S(t,"class","px-8 flex flex-row justify-between mb-8"),S(c,"class","flex flex-col gap-4 max-h-[272px] overflow-y-scroll no-scroll")},m(v,_){E(v,t,_),y(t,s),U(i,s,null),y(s,o),y(s,r),y(t,n),y(t,l),E(v,a,_),E(v,c,_),m[h].m(c,null),g=!0},p(v,_){const w={};_&16&&(w.$$scope={dirty:_,ctx:v}),i.$set(w);let $=h;h=p(v),h===$?m[h].p(v,_):(Ht(),B(m[$],1,1,()=>{m[$]=null}),Ut(),u=m[h],u?u.p(v,_):(u=m[h]=f[h](v),u.c()),D(u,1),u.m(c,null))},i(v){g||(D(i.$$.fragment,v),D(u),g=!0)},o(v){B(i.$$.fragment,v),B(u),g=!1},d(v){v&&(z(t),z(a),z(c)),q(i),m[h].d()}}}function nm(e){let t,s;return t=new Rs({props:{extraClasses:"py-8 w-full min-w-[450px] h-fit",$$slots:{default:[rm]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},m(i,o){U(t,i,o),s=!0},p(i,[o]){const r={};o&17&&(r.$$scope={dirty:o,ctx:i}),t.$set(r)},i(i){s||(D(t.$$.fragment,i),s=!0)},o(i){B(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}function am(e,t,s){let{budgets:i=[]}=t;return e.$$set=o=>{"budgets"in o&&s(0,i=o.budgets)},[i]}class lm extends _t{constructor(t){super(),yt(this,t,am,nm,vt,{budgets:0})}}function mr(e,t,s){let i=s.offsetAngle,o=s.sweepAngle;if(o>Math.PI){let a=o-Math.PI;return`${mr(e,t,{offsetAngle:i,sweepAngle:a})} ${mr(e,t,{offsetAngle:i+a,sweepAngle:o-a})}`}let r=e/2,n={x:r+Math.cos(i)*t,y:r-Math.sin(i)*t},l={x:r+Math.cos(i+o)*t,y:r-Math.sin(i+o)*t};return`M${n.x}, ${n.y}A${t},${t} 0 0,0 ${l.x},${l.y}`}class cm{constructor(t,s,i=[]){et(this,"hoverCheck",!1);et(this,"svgsArcs",[]);et(this,"radius",1);et(this,"strokeWidth",1);et(this,"mousePos",{x:0,y:0});et(this,"hoverCallback");et(this,"stopHoverCallbackx");et(this,"currentlyHovered",-1);i.length>0&&(this.svgsArcs=[...i]),this.radius=t,this.strokeWidth=s,window.addEventListener("mousemove",o=>{this.mousePos={x:o.clientX,y:o.clientY}})}addSvg(t){t.svg.addEventListener("mouseenter",()=>{this.startHoverCheck()}),t.svg.addEventListener("mouseleave",()=>{this.stopHoverCheck()}),this.svgsArcs.push(t)}clear(){this.svgsArcs=[]}startHoverCheck(){if(this.svgsArcs.length===0)return;this.hoverCheck=!0;let t=this.svgsArcs[0].svg,s=1;t.parentElement&&(s=t.parentElement.getBoundingClientRect().width/t.viewBox.baseVal.width),requestAnimationFrame(()=>{this.mouseInChart(this.radius*s,this.strokeWidth*s/2)})}stopHoverCheck(){this.hoverCheck=!1}onSectionHovered(t){this.hoverCallback=t}onSectionStopHover(t){this.stopHoverCallbackx=t}mouseInChart(t,s){var v,_,w;if(!this.hoverCheck||this.svgsArcs.length===0)return;let i=this.svgsArcs[0].svg.getBoundingClientRect(),o=-(i.left+i.width/2-this.mousePos.x),r=i.top+i.height/2-this.mousePos.y,n=Math.atan2(r,o);n<0&&(n+=Math.PI*2);let l=Math.sin(n),a=l*(t-s),c=l*(t+s),h=Math.cos(n),u=h*(t-s),g=h*(t+s),f=($,k,x)=>{let A=Math.abs(k);return A>=Math.abs($)&&A<=Math.abs(x)},m=f(u,o,g)||f(a,r,c),p=!0;for(let[$,k]of this.svgsArcs.entries()){let x=k.svg,A=k.arc;if(m&&f(A.offsetAngle,n,A.offsetAngle+A.sweepAngle)){$!==this.currentlyHovered&&(this.currentlyHovered>=0&&((v=this.stopHoverCallbackx)==null||v.call(this,{svg:this.svgsArcs[this.currentlyHovered].svg,index:this.currentlyHovered})),this.currentlyHovered=$,(_=this.hoverCallback)==null||_.call(this,{svg:x,index:$})),p=!1;break}}this.currentlyHovered>=0&&p&&((w=this.stopHoverCallbackx)==null||w.call(this,{svg:this.svgsArcs[this.currentlyHovered].svg,index:this.currentlyHovered}),this.currentlyHovered=-1),requestAnimationFrame(()=>{this.mouseInChart(t,s)})}}function Gn(e,t,s){const i=e.slice();return i[13]=t[s],i[15]=s,i}function dm(e){let t,s,i,o;return t=new ae({props:{$$slots:{default:[hm]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment),s=T(),i=C("div"),i.innerHTML='<span class="block font-medium">hover over a section to display information</span>'},m(r,n){U(t,r,n),E(r,s,n),E(r,i,n),o=!0},p(r,n){const l={};n&65536&&(l.$$scope={dirty:n,ctx:r}),t.$set(l)},i(r){o||(D(t.$$.fragment,r),o=!0)},o(r){B(t.$$.fragment,r),o=!1},d(r){r&&(z(s),z(i)),q(t,r)}}}function um(e){let t,s,i,o,r=`${e[0].calculateRemainingSpend().toString()} remaining`,n,l,a,c=`${e[0].calculatePctValue().toFixed(2)}% spent`,h,u;return t=new ae({props:{$$slots:{default:[pm]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment),s=T(),i=C("div"),o=C("span"),n=N(r),l=T(),a=C("span"),h=N(c),S(o,"class","block font-medium"),S(a,"class","block font-medium")},m(g,f){U(t,g,f),E(g,s,f),E(g,i,f),y(i,o),y(o,n),y(i,l),y(i,a),y(a,h),u=!0},p(g,f){const m={};f&65537&&(m.$$scope={dirty:f,ctx:g}),t.$set(m),(!u||f&1)&&r!==(r=`${g[0].calculateRemainingSpend().toString()} remaining`)&&at(n,r),(!u||f&1)&&c!==(c=`${g[0].calculatePctValue().toFixed(2)}% spent`)&&at(h,c)},i(g){u||(D(t.$$.fragment,g),u=!0)},o(g){B(t.$$.fragment,g),u=!1},d(g){g&&(z(s),z(i)),q(t,g)}}}function hm(e){let t;return{c(){t=N("Hovered budget")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function pm(e){let t=e[0].getName()+"",s;return{c(){s=N(t)},m(i,o){E(i,s,o)},p(i,o){o&1&&t!==(t=i[0].getName()+"")&&at(s,t)},d(i){i&&z(s)}}}function Yn(e){let t,s,i;return{c(){t=Le("svg"),s=Le("path"),S(s,"fill","none"),S(s,"d",i=e[13].path),S(t,"class","absolute position-0 "+e[3][e[15]%10]+" transition-transform duration-300"),S(t,"viewBox","0 0 "+gr+" "+gr)},m(o,r){E(o,t,r),y(t,s)},p(o,r){r&4&&i!==(i=o[13].path)&&S(s,"d",i)},d(o){o&&z(t)}}}function fm(e){let t,s,i,o,r,n,l,a,c;const h=[um,dm],u=[];function g(p,v){return p[0]?0:1}i=g(e),o=u[i]=h[i](e);let f=gt(e[2]),m=[];for(let p=0;p<f.length;p+=1)m[p]=Yn(Gn(e,f,p));return{c(){t=C("div"),s=C("div"),o.c(),r=T(),n=C("empty"),l=T(),a=C("div");for(let p=0;p<m.length;p+=1)m[p].c();S(s,"class","flex flex-col justify-between w-48"),Fe(a,"stroke-width",cl+"px"),S(a,"class","relative w-64 aspect-square"),S(t,"class","flex justify-between")},m(p,v){E(p,t,v),y(t,s),u[i].m(s,null),y(s,r),y(s,n),y(t,l),y(t,a);for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(a,null);e[5](a),c=!0},p(p,v){let _=i;if(i=g(p),i===_?u[i].p(p,v):(Ht(),B(u[_],1,1,()=>{u[_]=null}),Ut(),o=u[i],o?o.p(p,v):(o=u[i]=h[i](p),o.c()),D(o,1),o.m(s,r)),v&12){f=gt(p[2]);let w;for(w=0;w<f.length;w+=1){const $=Gn(p,f,w);m[w]?m[w].p($,v):(m[w]=Yn($),m[w].c(),m[w].m(a,null))}for(;w<m.length;w+=1)m[w].d(1);m.length=f.length}},i(p){c||(D(o),c=!0)},o(p){B(o),c=!1},d(p){p&&z(t),u[i].d(),Pt(m,p),e[5](null)}}}function mm(e){let t,s;return t=new Rs({props:{extraClasses:"p-8 h-fit",$$slots:{default:[fm]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},m(i,o){U(t,i,o),s=!0},p(i,[o]){const r={};o&65543&&(r.$$scope={dirty:o,ctx:i}),t.$set(r)},i(i){s||(D(t.$$.fragment,i),s=!0)},o(i){B(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}const Xn=38,cl=18,gr=100;function gm(e,t,s){const i=["stroke-chart-1","stroke-chart-2","stroke-chart-3","stroke-chart-4","stroke-chart-5","stroke-chart-6","stroke-chart-7","stroke-chart-8","stroke-chart-9","stroke-chart-10"];let o=new cm(Xn,cl),r,{budgets:n=[]}=t,l,a=[];o.onSectionHovered(v=>{s(0,r=n[v.index]),v.svg.style.transform="scale(1.05)"}),o.onSectionStopHover(v=>{v.svg.style.transform=""});let c=!1;function h(){n.forEach(v=>v.calculateCurrentSpent(bt)),s(2,a=m(f())),c=!0}let u=!1;kp(()=>{u||(u=!0,h(),bt.onTransactionsUpdated(()=>h()))}),vs(()=>{c&&(c=!1,o.clear(),g())});function g(){let v=l.querySelectorAll("svg");if(v.length>a.length)for(let _=v.length-a.length;_<v.length;++_)v[_].remove();for(let _=0;_<a.length;++_){o.addSvg({svg:v[_],arc:a[_].arc});let w=v[_].cloneNode(!0);w.classList.add("blur-md","opacity-50","pointer-events-none"),l.appendChild(w)}}function f(){let v=0;return n.map(_=>{v+=_.getCurrentSpent().value()}),v===0?[]:n.map(_=>_.getCurrentSpent().value()*100/v)}function m(v){let _=[],w=0,$=Math.PI*2;for(let k of v){let x=w,A=$*(k/100),M={offsetAngle:x,sweepAngle:A};_.push({arc:M,path:mr(gr,Xn,M)}),w=x+A}return _}function p(v){Y[v?"unshift":"push"](()=>{l=v,s(1,l)})}return e.$$set=v=>{"budgets"in v&&s(4,n=v.budgets)},[r,l,a,i,n,p]}class bm extends _t{constructor(t){super(),yt(this,t,gm,mm,vt,{budgets:4})}}function vm(e){let t,s,i;return s=new bm({props:{budgets:e[0]}}),{c(){t=C("div"),j(s.$$.fragment),S(t,"class","my-auto min-w-[512px]")},m(o,r){E(o,t,r),U(s,t,null),i=!0},p(o,r){const n={};r&1&&(n.budgets=o[0]),s.$set(n)},i(o){i||(D(s.$$.fragment,o),i=!0)},o(o){B(s.$$.fragment,o),i=!1},d(o){o&&z(t),q(s)}}}function ym(e){let t,s,i,o,r,n,l,a,c,h,u=e[3](),g;i=new Sf({props:{spendingAccounts:e[1],savingAccounts:e[2]}}),n=new lm({props:{budgets:e[0]}}),c=new Zf({});let f=u&&vm(e);return{c(){t=C("div"),s=C("div"),j(i.$$.fragment),o=T(),r=C("div"),j(n.$$.fragment),l=T(),a=C("div"),j(c.$$.fragment),h=T(),f&&f.c(),S(s,"class","w-[80%] mx-auto min-w-[300px]"),S(a,"class","m-auto max-w-[440px] w-full"),S(t,"class","grid grid-cols-2 grid-rows-2 gap-8")},m(m,p){E(m,t,p),y(t,s),U(i,s,null),y(t,o),y(t,r),U(n,r,null),y(t,l),y(t,a),U(c,a,null),y(t,h),f&&f.m(t,null),g=!0},p(m,[p]){const v={};p&2&&(v.spendingAccounts=m[1]),p&4&&(v.savingAccounts=m[2]),i.$set(v);const _={};p&1&&(_.budgets=m[0]),n.$set(_),u&&f.p(m,p)},i(m){g||(D(i.$$.fragment,m),D(n.$$.fragment,m),D(c.$$.fragment,m),D(f),g=!0)},o(m){B(i.$$.fragment,m),B(n.$$.fragment,m),B(c.$$.fragment,m),B(f),g=!1},d(m){m&&z(t),q(i),q(n),q(c),f&&f.d()}}}function _m(e,t,s){let i=xe,o=wt.getSpendingAccounts(),r=wt.getSavingAccounts();bt.onTransactionsUpdated(()=>{s(0,i=xe)}),wt.onAccountsUpdated(()=>{s(1,o=wt.getSpendingAccounts()),s(2,r=wt.getSavingAccounts())});function n(){let l=i.length>0,a=i.map(c=>c.findRelatedExpenses(bt)).flat().length>0;return l&&a}return[i,o,r,n]}class wm extends _t{constructor(t){super(),yt(this,t,_m,ym,vt,{})}}function xm(e,t,s){const i=e.slice();return i[13]=t[s],i}function km(e){let t,s;return t=new ae({props:{$$slots:{default:[Cm]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},m(i,o){U(t,i,o),s=!0},i(i){s||(D(t.$$.fragment,i),s=!0)},o(i){B(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}function $m(e){let t,s;return t=new ae({props:{$$slots:{default:[Sm]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},m(i,o){U(t,i,o),s=!0},i(i){s||(D(t.$$.fragment,i),s=!0)},o(i){B(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}function Cm(e){let t;return{c(){t=N("Create new budget")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function Sm(e){let t;return{c(){t=N("Edit budget")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function Am(e){let t;return{c(){var s;t=C("sl-option"),t.textContent=`${(s=Yt.getCategory(e[13]))==null?void 0:s.label}`,P(t,"value",e[13])},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function zm(e){let t,s,i,o,r,n,l,a,c,h,u,g,f,m,p;const v=[$m,km],_=[];function w(x,A){return x[0]!==void 0?0:1}t=w(e),s=_[t]=v[t](e);let $=gt(Yt.getAllIdentifiers()),k=[];for(let x=0;x<$.length;x+=1)k[x]=Am(xm(e,$,x));return{c(){s.c(),i=T(),o=C("form"),r=C("sl-input"),n=T(),l=C("sl-input"),a=C("span"),a.textContent=`${pt.currencyType}`,c=T(),h=C("sl-select");for(let x=0;x<k.length;x+=1)k[x].c();u=T(),g=C("sl-button"),g.textContent="Submit",P(r,"required",""),P(r,"value",e[6]()),P(r,"name","budget-name"),P(r,"label","Budget name"),S(a,"slot","prefix"),P(l,"required",""),P(l,"value",e[7]()),P(l,"placeholder","0"),P(l,"name","budget-max"),P(l,"label","Maximum allocated"),P(l,"pattern","([0-9.,])+"),P(h,"value",e[8]()),P(h,"name","categories-keys"),P(h,"label","categories"),P(h,"multiple",""),P(h,"clearable",""),P(g,"class","submit-button"),P(g,"type","submit"),P(g,"variant","primary"),S(o,"class","validity-styles input-validation-required")},m(x,A){_[t].m(x,A),E(x,i,A),E(x,o,A),y(o,r),y(o,n),y(o,l),y(l,a),y(o,c),y(o,h);for(let M=0;M<k.length;M+=1)k[M]&&k[M].m(h,null);y(o,u),y(o,g),e[10](o),f=!0,m||(p=Ft(o,"submit",e[4]),m=!0)},p(x,A){let M=t;t=w(x),t!==M&&(Ht(),B(_[M],1,1,()=>{_[M]=null}),Ut(),s=_[t],s||(s=_[t]=v[t](x),s.c()),D(s,1),s.m(i.parentNode,i))},i(x){f||(D(s),f=!0)},o(x){B(s),f=!1},d(x){x&&(z(i),z(o)),_[t].d(x),Pt(k,x),e[10](null),m=!1,p()}}}function Em(e){let t,s,i={$$slots:{default:[zm]},$$scope:{ctx:e}};return t=new Xi({props:i}),e[11](t),t.$on("modalOpened",e[5]),t.$on("modalClosed",e[12]),{c(){j(t.$$.fragment)},m(o,r){U(t,o,r),s=!0},p(o,[r]){const n={};r&65541&&(n.$$scope={dirty:r,ctx:o}),t.$set(n)},i(o){s||(D(t.$$.fragment,o),s=!0)},o(o){B(t.$$.fragment,o),s=!1},d(o){e[11](null),q(t,o)}}}function Lm(e,t,s){const i=se();let o;function r(){o.toggleOpen()}let{budget:n=void 0}=t,l;function a(v){if(v.preventDefault(),!l.checkValidity())return;let _=new FormData(l),w=_.getAll("categories-keys"),$=_.get("budget-max").toString(),k=_.get("budget-name").toString(),x=()=>w.map(A=>Yt[A.toString()]);if(n)n.changeData(k,new pt(Number.parseFloat($)),x()),n.calculateCurrentSpent(bt);else{let A=new lo(k,new pt(Number.parseFloat($)),1,x());xe.push(A),A.calculateCurrentSpent(bt)}r()}function c(){i("modalOpened")}function h(){return n?n.getName():""}function u(){return n?n.getMax().value().toString():""}function g(){return n?n.getCategories().map(v=>Yt.getIdentifier(v)).join(" "):""}function f(v){Y[v?"unshift":"push"](()=>{l=v,s(2,l)})}function m(v){Y[v?"unshift":"push"](()=>{o=v,s(1,o)})}const p=()=>i("modalClosed");return e.$$set=v=>{"budget"in v&&s(0,n=v.budget)},[n,o,l,i,a,c,h,u,g,r,f,m,p]}class dl extends _t{constructor(t){super(),yt(this,t,Lm,Em,vt,{toggleOpen:9,budget:0})}get toggleOpen(){return this.$$.ctx[9]}}function Tm(e){var r;let t,s=((r=e[1])==null?void 0:r.getName())+"",i,o;return{c(){t=N('Are you sure you want to delete "'),i=N(s),o=N('"')},m(n,l){E(n,t,l),E(n,i,l),E(n,o,l)},p(n,l){var a;l&2&&s!==(s=((a=n[1])==null?void 0:a.getName())+"")&&at(i,s)},d(n){n&&(z(t),z(i),z(o))}}}function Om(e){let t,s,i,o,r,n,l,a;return t=new ae({props:{$$slots:{default:[Tm]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment),s=T(),i=C("sl-button"),i.textContent="Cancel",o=T(),r=C("sl-button"),r.textContent="Yes, delete",P(r,"variant","danger")},m(c,h){U(t,c,h),E(c,s,h),E(c,i,h),E(c,o,h),E(c,r,h),n=!0,l||(a=[Ft(i,"click",e[0]),Ft(r,"click",e[4])],l=!0)},p(c,h){const u={};h&258&&(u.$$scope={dirty:h,ctx:c}),t.$set(u)},i(c){n||(D(t.$$.fragment,c),n=!0)},o(c){B(t.$$.fragment,c),n=!1},d(c){c&&(z(s),z(i),z(o),z(r)),q(t,c),l=!1,ss(a)}}}function Mm(e){let t,s,i={$$slots:{default:[Om]},$$scope:{ctx:e}};return t=new Xi({props:i}),e[5](t),t.$on("modalClosed",e[6]),t.$on("modalOpened",e[7]),{c(){j(t.$$.fragment)},m(o,r){U(t,o,r),s=!0},p(o,[r]){const n={};r&258&&(n.$$scope={dirty:r,ctx:o}),t.$set(n)},i(o){s||(D(t.$$.fragment,o),s=!0)},o(o){B(t.$$.fragment,o),s=!1},d(o){e[5](null),q(t,o)}}}function Im(e,t,s){const i=se();let o;function r(){o.toggleOpen()}let{budget:n}=t;function l(){if(n){const u=xe.indexOf(n);xe.splice(u,1)}r()}function a(u){Y[u?"unshift":"push"](()=>{o=u,s(2,o)})}const c=()=>i("modalClosed"),h=()=>i("modalOpened");return e.$$set=u=>{"budget"in u&&s(1,n=u.budget)},[r,n,o,i,l,a,c,h]}class Dm extends _t{constructor(t){super(),yt(this,t,Im,Mm,vt,{toggleOpen:0,budget:1})}get toggleOpen(){return this.$$.ctx[0]}}function Pm(e){let t,s,i,o,r,n,l;const a=e[3].default,c=Is(a,e,e[2],null);return{c(){t=C("button"),c&&c.c(),s=T(),i=C("div"),S(i,"class","button-appearance svelte-1vfnb9o"),S(t,"class",o=e[0]+" relative svelte-1vfnb9o")},m(h,u){E(h,t,u),c&&c.m(t,null),y(t,s),y(t,i),r=!0,n||(l=Ft(t,"click",e[4]),n=!0)},p(h,[u]){c&&c.p&&(!r||u&4)&&Ps(c,a,h,h[2],r?Ds(a,h[2],u,null):Bs(h[2]),null),(!r||u&1&&o!==(o=h[0]+" relative svelte-1vfnb9o"))&&S(t,"class",o)},i(h){r||(D(c,h),r=!0)},o(h){B(c,h),r=!1},d(h){h&&z(t),c&&c.d(h),n=!1,l()}}}function Bm(e,t,s){let{$$slots:i={},$$scope:o}=t,r=se(),{extraClasses:n=""}=t;const l=()=>r("click");return e.$$set=a=>{"extraClasses"in a&&s(0,n=a.extraClasses),"$$scope"in a&&s(2,o=a.$$scope)},[n,r,o,i,l]}class Rm extends _t{constructor(t){super(),yt(this,t,Bm,Pm,vt,{extraClasses:0})}}function Zn(e,t,s){const i=e.slice();return i[21]=t[s][0],i[22]=t[s][1],i}function Vm(e){let t=e[0].getName()+"",s;return{c(){s=N(t)},m(i,o){E(i,s,o)},p(i,o){o&1&&t!==(t=i[0].getName()+"")&&at(s,t)},d(i){i&&z(s)}}}function Fm(e){let t,s,i;return{c(){t=C("span"),s=C("span"),s.textContent="Will overflow ~ ",i=C("span"),i.textContent=`${e[10]()}`,S(s,"class","opacity-75"),S(i,"class","font-medium"),S(t,"class","block text-right")},m(o,r){E(o,t,r),y(t,s),y(t,i)},p:ut,d(o){o&&z(t)}}}function Nm(e){let t;return{c(){t=C("span"),t.textContent="Overspent budget",S(t,"class","block text-right text-text-error font-medium")},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function Hm(e){let t;return{c(){t=N("Edit")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function Qn(e){let t,s,i,o=e[22].name+"",r,n,l,a=ms(e[22].date)+"",c,h,u,g,f=e[22].getAmount().toString()+"",m,p,v;return{c(){t=C("div"),s=C("div"),i=C("span"),r=N(o),n=T(),l=C("span"),c=N(a),h=T(),u=C("span"),g=N("-"),m=N(f),p=T(),S(i,"class","block font-medium"),S(l,"class","block opacity-75 text-sm"),S(u,"class","font-mono font-medium text-accent-light ml-auto"),S(t,"class",v="px-4 py-2 w-full flex justify-between items-center "+(e[21]%2==1?"bg-white bg-opacity-10":""))},m(_,w){E(_,t,w),y(t,s),y(s,i),y(i,r),y(s,n),y(s,l),y(l,c),y(t,h),y(t,u),y(u,g),y(u,m),y(t,p)},p(_,w){w&1&&o!==(o=_[22].name+"")&&at(r,o),w&1&&a!==(a=ms(_[22].date)+"")&&at(c,a),w&1&&f!==(f=_[22].getAmount().toString()+"")&&at(m,f),w&1&&v!==(v="px-4 py-2 w-full flex justify-between items-center "+(_[21]%2==1?"bg-white bg-opacity-10":""))&&S(t,"class",v)},d(_){_&&z(t)}}}function Um(e){let t,s,i,o,r,n=e[0].getRemainingDays(as,bt).toFixed(0)+"",l,a,c,h,u,g,f,m=new pt(e[0].calculateAverageSpent(bt.getStartDate(),as)).toString()+"",p,v,_,w,$,k,x,A,M,O=e[0].getCurrentSpent().toString()+"",I,V,ct,J=e[0].calculatePctValue().toFixed(2)+"",lt,ot,W,L,nt=e[0].calculateRemainingSpend().toString()+"",tt,Ae,Be,dt,Re,Ge=e[0].getMax().toString()+"",ni,ai,ye,li,ci,rt,Ot,Vs,ys,di,is,_e,Zi,Ye,ui,le,ze,Io,Tr;i=new ae({props:{$$slots:{default:[Vm]},$$scope:{ctx:e}}});function Or(Z,$t){if($t&1&&(w=null),$t&1&&($=null),w==null&&(w=!!Z[0].isOverspent()),w)return Nm;if($==null&&($=Z[0].getCurrentSpent().value()>0),$)return Fm}let Fs=Or(e,-1),ie=Fs&&Fs(e);function ul(Z){e[15](Z)}function hl(Z){e[16](Z)}let Do={height:"large"};e[4]!==void 0&&(Do.color=e[4]),e[5]!==void 0&&(Do.progress=e[5]),ye=new ll({props:Do}),Y.push(()=>Pi(ye,"color",ul)),Y.push(()=>Pi(ye,"progress",hl)),_e=new Rm({props:{extraClasses:"px-8 py-2",$$slots:{default:[Hm]},$$scope:{ctx:e}}}),_e.$on("click",e[18]);let Ns=gt(e[0].findRelatedExpenses(bt).entries()),Jt=[];for(let Z=0;Z<Ns.length;Z+=1)Jt[Z]=Qn(Zn(e,Ns,Z));return{c(){t=C("div"),s=C("div"),j(i.$$.fragment),o=T(),r=C("span"),l=N(n),a=N(" days remaining"),c=T(),h=C("div"),u=C("span"),g=C("span"),g.textContent="Avg spending – ",f=C("span"),p=N(m),v=N("/day"),_=T(),ie&&ie.c(),k=T(),x=C("div"),A=C("div"),M=C("span"),I=N(O),V=T(),ct=C("span"),lt=N(J),ot=N("%"),W=T(),L=C("span"),tt=N(nt),Ae=N(" remaining"),dt=T(),Re=C("span"),ni=N(Ge),ai=T(),j(ye.$$.fragment),rt=T(),Ot=C("div"),Vs=C("div"),ys=C("button"),ys.textContent="View related expenses",di=T(),is=C("div"),j(_e.$$.fragment),Zi=T(),Ye=C("button"),Ye.textContent="Delete",ui=T(),le=C("div");for(let Z=0;Z<Jt.length;Z+=1)Jt[Z].c();S(r,"class","opacity-75"),S(g,"class","opacity-75"),S(f,"class","font-medium"),S(u,"class","block text-right"),S(t,"class","flex justify-between mb-12"),S(ct,"class","text-sm opacity-75"),S(L,"class",Be=e[0].isOverspent()?"text-text-error":""),S(x,"class","flex justify-between mb-2"),S(ys,"class","underline"),S(Vs,"class","absolute position-0 text-center"),S(Ye,"class","ml-6 underline opacity-75"),S(is,"class","mx-auto"),S(Ot,"class","relative w-full text-right mt-8"),Fe(le,"--height","128px"),Fe(le,"--margin-top","16px"),S(le,"class","bg-dark bg-opacity-50 rounded-xl max-h-0 overflow-y-scroll no-scroll")},m(Z,$t){E(Z,t,$t),y(t,s),U(i,s,null),y(s,o),y(s,r),y(r,l),y(r,a),y(t,c),y(t,h),y(h,u),y(u,g),y(u,f),y(f,p),y(f,v),y(h,_),ie&&ie.m(h,null),E(Z,k,$t),E(Z,x,$t),y(x,A),y(A,M),y(M,I),y(A,V),y(A,ct),y(ct,lt),y(ct,ot),y(x,W),y(x,L),y(L,tt),y(L,Ae),y(x,dt),y(x,Re),y(Re,ni),E(Z,ai,$t),U(ye,Z,$t),E(Z,rt,$t),E(Z,Ot,$t),y(Ot,Vs),y(Vs,ys),y(Ot,di),y(Ot,is),U(_e,is,null),y(is,Zi),y(is,Ye),E(Z,ui,$t),E(Z,le,$t);for(let _s=0;_s<Jt.length;_s+=1)Jt[_s]&&Jt[_s].m(le,null);e[20](le),ze=!0,Io||(Tr=[Ft(ys,"click",e[17]),Ft(Ye,"click",e[19])],Io=!0)},p(Z,$t){const _s={};$t&33554433&&(_s.$$scope={dirty:$t,ctx:Z}),i.$set(_s),(!ze||$t&1)&&n!==(n=Z[0].getRemainingDays(as,bt).toFixed(0)+"")&&at(l,n),(!ze||$t&1)&&m!==(m=new pt(Z[0].calculateAverageSpent(bt.getStartDate(),as)).toString()+"")&&at(p,m),Fs===(Fs=Or(Z,$t))&&ie?ie.p(Z,$t):(ie&&ie.d(1),ie=Fs&&Fs(Z),ie&&(ie.c(),ie.m(h,null))),(!ze||$t&1)&&O!==(O=Z[0].getCurrentSpent().toString()+"")&&at(I,O),(!ze||$t&1)&&J!==(J=Z[0].calculatePctValue().toFixed(2)+"")&&at(lt,J),(!ze||$t&1)&&nt!==(nt=Z[0].calculateRemainingSpend().toString()+"")&&at(tt,nt),(!ze||$t&1&&Be!==(Be=Z[0].isOverspent()?"text-text-error":""))&&S(L,"class",Be),(!ze||$t&1)&&Ge!==(Ge=Z[0].getMax().toString()+"")&&at(ni,Ge);const Po={};!li&&$t&16&&(li=!0,Po.color=Z[4],Di(()=>li=!1)),!ci&&$t&32&&(ci=!0,Po.progress=Z[5],Di(()=>ci=!1)),ye.$set(Po);const Mr={};if($t&33554432&&(Mr.$$scope={dirty:$t,ctx:Z}),_e.$set(Mr),$t&1){Ns=gt(Z[0].findRelatedExpenses(bt).entries());let we;for(we=0;we<Ns.length;we+=1){const Ir=Zn(Z,Ns,we);Jt[we]?Jt[we].p(Ir,$t):(Jt[we]=Qn(Ir),Jt[we].c(),Jt[we].m(le,null))}for(;we<Jt.length;we+=1)Jt[we].d(1);Jt.length=Ns.length}},i(Z){ze||(D(i.$$.fragment,Z),D(ye.$$.fragment,Z),D(_e.$$.fragment,Z),ze=!0)},o(Z){B(i.$$.fragment,Z),B(ye.$$.fragment,Z),B(_e.$$.fragment,Z),ze=!1},d(Z){Z&&(z(t),z(k),z(x),z(ai),z(rt),z(Ot),z(ui),z(le)),q(i),ie&&ie.d(),q(ye,Z),q(_e),Pt(Jt,Z),e[20](null),Io=!1,ss(Tr)}}}function qm(e){let t,s,i,o,r,n,l={budget:e[0]};t=new Dm({props:l}),e[11](t),t.$on("modalClosed",e[12]);let a={budget:e[0]};return i=new dl({props:a}),e[13](i),i.$on("modalClosed",e[14]),r=new Rs({props:{extraClasses:"min-w-full px-10 py-8",$$slots:{default:[Um]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment),s=T(),j(i.$$.fragment),o=T(),j(r.$$.fragment)},m(c,h){U(t,c,h),E(c,s,h),U(i,c,h),E(c,o,h),U(r,c,h),n=!0},p(c,[h]){const u={};h&1&&(u.budget=c[0]),t.$set(u);const g={};h&1&&(g.budget=c[0]),i.$set(g);const f={};h&33554489&&(f.$$scope={dirty:h,ctx:c}),r.$set(f)},i(c){n||(D(t.$$.fragment,c),D(i.$$.fragment,c),D(r.$$.fragment,c),n=!0)},o(c){B(t.$$.fragment,c),B(i.$$.fragment,c),B(r.$$.fragment,c),n=!1},d(c){c&&(z(s),z(o)),e[11](null),q(t,c),e[13](null),q(i,c),q(r,c)}}}function jm(e,t,s){const i=se();let{budget:o}=t,r,n,l,a=bo(o),c=o.calculatePctValue();function h(){n.toggleOpen()}function u(){r.toggleOpen()}function g(){let O=l;O!=null&&O.classList.contains("reveal-related-expenses")?(O.classList.remove("reveal-related-expenses"),O.classList.add("hide-related-expenses"),O.addEventListener("animationend",()=>{O==null||O.classList.remove("hide-related-expenses")},{once:!0})):O==null||O.classList.add("reveal-related-expenses")}function f(){let O=o.calculateDaysBeforeOverflow(o.calculateAverageSpent(bt.getStartDate(),as));return O>1?O.toFixed(0)+" days":O.toFixed(0)+" day"}vs(()=>{s(4,a=bo(o)),s(5,c=o.calculatePctValue())});function m(O){Y[O?"unshift":"push"](()=>{r=O,s(1,r)})}const p=()=>i("budgetEditOrDelete");function v(O){Y[O?"unshift":"push"](()=>{n=O,s(2,n)})}const _=()=>i("budgetEditOrDelete");function w(O){a=O,s(4,a)}function $(O){c=O,s(5,c)}const k=()=>g(),x=()=>h(),A=()=>u();function M(O){Y[O?"unshift":"push"](()=>{l=O,s(3,l)})}return e.$$set=O=>{"budget"in O&&s(0,o=O.budget)},[o,r,n,l,a,c,i,h,u,g,f,m,p,v,_,w,$,k,x,A,M]}class Wm extends _t{constructor(t){super(),yt(this,t,jm,qm,vt,{budget:0})}}function Jn(e,t,s){const i=e.slice();return i[7]=t[s],i}function Km(e){let t,s,i,o,r;return o=new Mo({props:{extraClasses:"font-bold px-6 py-4",$$slots:{default:[Ym]},$$scope:{ctx:e}}}),o.$on("click",e[2]),{c(){t=C("div"),s=C("h1"),s.innerHTML="It looks like you don&#39;t have any budget yet.<br/>Create a budget to have a better view of your expenses. 📊",i=T(),j(o.$$.fragment),S(s,"class","text-2xl text-text font-semibold text-center"),S(t,"class","flex flex-col items-center justify-center h-full my-auto gap-8")},m(n,l){E(n,t,l),y(t,s),y(t,i),U(o,t,null),r=!0},p(n,l){const a={};l&1024&&(a.$$scope={dirty:l,ctx:n}),o.$set(a)},i(n){r||(D(o.$$.fragment,n),r=!0)},o(n){B(o.$$.fragment,n),r=!1},d(n){n&&z(t),q(o)}}}function Gm(e){let t,s,i,o,r;s=new Mo({props:{extraClasses:"font-bold px-6 py-4",$$slots:{default:[Xm]},$$scope:{ctx:e}}}),s.$on("click",e[2]);let n=gt(e[1]),l=[];for(let c=0;c<n.length;c+=1)l[c]=ta(Jn(e,n,c));const a=c=>B(l[c],1,1,()=>{l[c]=null});return{c(){t=C("div"),j(s.$$.fragment),i=T(),o=C("div");for(let c=0;c<l.length;c+=1)l[c].c();S(t,"class","w-full text-right mb-8"),S(o,"class","w-full flex flex-col gap-8")},m(c,h){E(c,t,h),U(s,t,null),E(c,i,h),E(c,o,h);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(o,null);r=!0},p(c,h){const u={};if(h&1024&&(u.$$scope={dirty:h,ctx:c}),s.$set(u),h&2){n=gt(c[1]);let g;for(g=0;g<n.length;g+=1){const f=Jn(c,n,g);l[g]?(l[g].p(f,h),D(l[g],1)):(l[g]=ta(f),l[g].c(),D(l[g],1),l[g].m(o,null))}for(Ht(),g=n.length;g<l.length;g+=1)a(g);Ut()}},i(c){if(!r){D(s.$$.fragment,c);for(let h=0;h<n.length;h+=1)D(l[h]);r=!0}},o(c){B(s.$$.fragment,c),l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)B(l[h]);r=!1},d(c){c&&(z(t),z(i),z(o)),q(s),Pt(l,c)}}}function Ym(e){let t;return{c(){t=N("Create new budget")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function Xm(e){let t;return{c(){t=N("Create new budget")},m(s,i){E(s,t,i)},d(s){s&&z(t)}}}function ta(e){let t,s;return t=new Wm({props:{budget:e[7]}}),t.$on("budgetEditOrDelete",e[5]),{c(){j(t.$$.fragment)},m(i,o){U(t,i,o),s=!0},p(i,o){const r={};o&2&&(r.budget=i[7]),t.$set(r)},i(i){s||(D(t.$$.fragment,i),s=!0)},o(i){B(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}function Zm(e){let t,s,i,o,r,n,l={};t=new dl({props:l}),e[3](t),t.$on("modalClosed",e[4]);const a=[Gm,Km],c=[];function h(u,g){return u[1].length>0?0:1}return i=h(e),o=c[i]=a[i](e),{c(){j(t.$$.fragment),s=T(),o.c(),r=Se()},m(u,g){U(t,u,g),E(u,s,g),c[i].m(u,g),E(u,r,g),n=!0},p(u,[g]){const f={};t.$set(f);let m=i;i=h(u),i===m?c[i].p(u,g):(Ht(),B(c[m],1,1,()=>{c[m]=null}),Ut(),o=c[i],o?o.p(u,g):(o=c[i]=a[i](u),o.c()),D(o,1),o.m(r.parentNode,r))},i(u){n||(D(t.$$.fragment,u),D(o),n=!0)},o(u){B(t.$$.fragment,u),B(o),n=!1},d(u){u&&(z(s),z(r)),e[3](null),q(t,u),c[i].d(u)}}}function Qm(e,t,s){function i(){o.toggleOpen()}let o,r=xe;To(()=>r.forEach(c=>c.calculateCurrentSpent(bt)));function n(c){Y[c?"unshift":"push"](()=>{o=c,s(0,o)})}return[o,r,i,n,()=>s(1,r=xe),()=>s(1,r=xe)]}class Jm extends _t{constructor(t){super(),yt(this,t,Qm,Zm,vt,{})}}function ea(e){let t,s,i,o=e[0].name+"",r,n,l,a,c,h,u,g=e[0].account.getName()+"",f,m,p,v,_,w=e[0].getAmount().toString()+"",$,k=e[0].category&&sa(e);return{c(){t=C("li"),s=C("div"),i=C("span"),r=N(o),n=T(),l=C("div"),a=Le("svg"),c=Le("path"),h=T(),u=C("span"),f=N(g),m=T(),k&&k.c(),p=T(),v=C("span"),_=N("-"),$=N(w),S(i,"class","block font-medium"),S(c,"fill-rule","evenodd"),S(c,"clip-rule","evenodd"),S(c,"d","M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"),S(a,"class","h-4 -rotate-90 fill-text-secondary"),S(a,"viewBox","0 0 24 24"),S(a,"xmlns","http://www.w3.org/2000/svg"),S(u,"class","text-text-secondary"),S(l,"class","flex items-center"),S(v,"class","text-accent-light font-mono font-medium"),S(t,"class","flex justify-between items-center my-2")},m(x,A){E(x,t,A),y(t,s),y(s,i),y(i,r),y(s,n),y(s,l),y(l,a),y(a,c),y(l,h),y(l,u),y(u,f),y(s,m),k&&k.m(s,null),y(t,p),y(t,v),y(v,_),y(v,$)},p(x,A){A&1&&o!==(o=x[0].name+"")&&at(r,o),A&1&&g!==(g=x[0].account.getName()+"")&&at(f,g),x[0].category?k?k.p(x,A):(k=sa(x),k.c(),k.m(s,null)):k&&(k.d(1),k=null),A&1&&w!==(w=x[0].getAmount().toString()+"")&&at($,w)},d(x){x&&z(t),k&&k.d()}}}function sa(e){let t,s=e[0].category.label+"",i;return{c(){t=C("span"),i=N(s),S(t,"class","block text-sm opacity-75")},m(o,r){E(o,t,r),y(t,i)},p(o,r){r&1&&s!==(s=o[0].category.label+"")&&at(i,s)},d(o){o&&z(t)}}}function tg(e){let t,s=e[0]!==void 0&&ea(e);return{c(){s&&s.c(),t=Se()},m(i,o){s&&s.m(i,o),E(i,t,o)},p(i,[o]){i[0]!==void 0?s?s.p(i,o):(s=ea(i),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:ut,o:ut,d(i){i&&z(t),s&&s.d(i)}}}function eg(e,t,s){let{transaction:i}=t,o;return i instanceof Te?o=i:console.error("Failed to cast transaction as Expense. Make sure the prop is of type Expense"),e.$$set=r=>{"transaction"in r&&s(1,i=r.transaction)},[o,i]}class sg extends _t{constructor(t){super(),yt(this,t,eg,tg,vt,{transaction:1})}}function ia(e){let t,s,i,o,r=e[0].name+"",n,l,a,c,h,u=e[0].account.getName()+"",g,f,m,p,v=e[0].getAmount().toString()+"",_,w,$=e[0].savingAccount!==void 0&&oa(e),k=e[0].savingAccount!==void 0&&ra(e);return{c(){t=C("li"),s=C("div"),i=C("div"),o=C("span"),n=N(r),l=T(),$&&$.c(),a=T(),c=C("div"),h=C("span"),g=N(u),f=T(),m=C("span"),p=N("+"),_=N(v),w=T(),k&&k.c(),S(o,"class","block font-medium"),S(i,"class","w-full flex justify-between items-center"),S(h,"class","block opacity-75"),S(m,"class","font-mono text-valid "+e[1]()),S(c,"class","px-2 w-full flex justify-between items-center"),S(s,"class","w-full"),S(t,"class","flex justify-between items-center my-2")},m(x,A){E(x,t,A),y(t,s),y(s,i),y(i,o),y(o,n),y(i,l),$&&$.m(i,null),y(s,a),y(s,c),y(c,h),y(h,g),y(c,f),y(c,m),y(m,p),y(m,_),y(s,w),k&&k.m(s,null)},p(x,A){A&1&&r!==(r=x[0].name+"")&&at(n,r),x[0].savingAccount!==void 0?$?$.p(x,A):($=oa(x),$.c(),$.m(i,null)):$&&($.d(1),$=null),A&1&&u!==(u=x[0].account.getName()+"")&&at(g,u),A&1&&v!==(v=x[0].getAmount().toString()+"")&&at(_,v),x[0].savingAccount!==void 0?k?k.p(x,A):(k=ra(x),k.c(),k.m(s,null)):k&&(k.d(1),k=null)},d(x){x&&z(t),$&&$.d(),k&&k.d()}}}function oa(e){let t,s,i=e[0].getTotalAmount().toString()+"",o;return{c(){t=C("span"),s=N("+"),o=N(i),S(t,"class","font-mono")},m(r,n){E(r,t,n),y(t,s),y(t,o)},p(r,n){n&1&&i!==(i=r[0].getTotalAmount().toString()+"")&&at(o,i)},d(r){r&&z(t)}}}function ra(e){let t,s,i=e[0].savingAccount.getName()+"",o,r,n,l,a=e[0].getSavedAmount().toString()+"",c,h,u=e[0].percentSavings*100+"",g,f;return{c(){t=C("div"),s=C("span"),o=N(i),r=T(),n=C("span"),l=N("+"),c=N(a),h=N(" ("),g=N(u),f=N("%)"),S(s,"class","block opacity-50"),S(n,"class","font-mono text-valid "+e[2]()),S(t,"class","px-2 w-full flex justify-between items-center")},m(m,p){E(m,t,p),y(t,s),y(s,o),y(t,r),y(t,n),y(n,l),y(n,c),y(n,h),y(n,g),y(n,f)},p(m,p){p&1&&i!==(i=m[0].savingAccount.getName()+"")&&at(o,i),p&1&&a!==(a=m[0].getSavedAmount().toString()+"")&&at(c,a),p&1&&u!==(u=m[0].percentSavings*100+"")&&at(g,u)},d(m){m&&z(t)}}}function ig(e){let t,s=e[0]!==void 0&&ia(e);return{c(){s&&s.c(),t=Se()},m(i,o){s&&s.m(i,o),E(i,t,o)},p(i,[o]){i[0]!==void 0?s?s.p(i,o):(s=ia(i),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:ut,o:ut,d(i){i&&z(t),s&&s.d(i)}}}function og(e,t,s){let{transaction:i}=t,o;i instanceof Qe?o=i:console.error("Failed to cast transaction as Income. Make sure the prop is of type Income");function r(){let l=o;return l.savingAccount===void 0?"font-bold":l.percentSavings>.75?"font-thin":l.percentSavings>.5?"font-normal":l.percentSavings>.25?"font-medium":"font-bold"}function n(){let l=o;return l.savingAccount===void 0?"font-thin":l.percentSavings>.75?"font-bold":l.percentSavings>.5?"font-medium":l.percentSavings>.25?"font-normal":"font-thin"}return e.$$set=l=>{"transaction"in l&&s(3,i=l.transaction)},[o,r,n,i]}class rg extends _t{constructor(t){super(),yt(this,t,og,ig,vt,{transaction:3})}}function ng(e){let t,s,i;return{c(){t=C("button"),t.innerHTML='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"></path></svg>',S(t,"class","aspect-square h-8 fill-text transition-transform duration-200 ease-in-out")},m(o,r){E(o,t,r),e[3](t),s||(i=Ft(t,"click",e[1]),s=!0)},p:ut,i:ut,o:ut,d(o){o&&z(t),e[3](null),s=!1,i()}}}function ag(e,t,s){let i=se();function o(){r.classList.toggle("chevron-close"),n==="close"?s(2,n="open"):s(2,n="close"),i("click",{newState:n})}let r,{state:n="open"}=t;function l(a){Y[a?"unshift":"push"](()=>{r=a,s(0,r)})}return e.$$set=a=>{"state"in a&&s(2,n=a.state)},[r,o,n,l]}class lg extends _t{constructor(t){super(),yt(this,t,ag,ng,vt,{state:2})}}const cg=e=>({}),na=e=>({});function aa(e,t,s){const i=e.slice();return i[29]=t[s][0],i[30]=t[s][1],i}function dg(e){let t,s,i,o,r,n,l,a;t=new ae({props:{$$slots:{default:[hg]},$$scope:{ctx:e}}});let c={extraClasses:"w-fit py-4 px-8",$$slots:{default:[pg]},$$scope:{ctx:e}};return l=new Lr({props:c}),e[22](l),l.$on("click",e[23]),{c(){j(t.$$.fragment),s=T(),i=C("div"),o=C("h1"),r=N(e[0]),n=T(),j(l.$$.fragment),S(o,"class","text-lg text-text font-medium"),S(i,"class","flex-grow flex flex-col text-center gap-8 justify-center items-center")},m(h,u){U(t,h,u),E(h,s,u),E(h,i,u),y(i,o),y(o,r),y(i,n),U(l,i,null),e[24](i),a=!0},p(h,u){const g={};u[0]&33554436&&(g.$$scope={dirty:u,ctx:h}),t.$set(g),(!a||u[0]&1)&&at(r,h[0]);const f={};u[0]&33554434&&(f.$$scope={dirty:u,ctx:h}),l.$set(f)},i(h){a||(D(t.$$.fragment,h),D(l.$$.fragment,h),a=!0)},o(h){B(t.$$.fragment,h),B(l.$$.fragment,h),a=!1},d(h){h&&(z(s),z(i)),q(t,h),e[22](null),q(l),e[24](null)}}}function ug(e){let t,s,i,o,r,n,l,a;s=new ae({props:{$$slots:{default:[fg]},$$scope:{ctx:e}}});let c={extraClasses:"aspect-square w-10",$$slots:{default:[mg]},$$scope:{ctx:e}};o=new Lr({props:c}),e[18](o),o.$on("click",e[19]);let h=gt(e[12].entries()),u=[];for(let p=0;p<h.length;p+=1)u[p]=la(aa(e,h,p));const g=p=>B(u[p],1,1,()=>{u[p]=null}),f=e[17]["list-end"],m=Is(f,e,e[25],na);return{c(){t=C("div"),j(s.$$.fragment),i=T(),j(o.$$.fragment),r=T(),n=C("div");for(let p=0;p<u.length;p+=1)u[p].c();l=T(),m&&m.c(),S(t,"class","flex justify-between items-center"),S(n,"class","flex-grow overflow-y-scroll no-scroll")},m(p,v){E(p,t,v),U(s,t,null),y(t,i),U(o,t,null),E(p,r,v),E(p,n,v);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(n,null);y(n,l),m&&m.m(n,null),e[21](n),a=!0},p(p,v){const _={};v[0]&33554436&&(_.$$scope={dirty:v,ctx:p}),s.$set(_);const w={};if(v[0]&33554432&&(w.$$scope={dirty:v,ctx:p}),o.$set(w),v[0]&20480){h=gt(p[12].entries());let $;for($=0;$<h.length;$+=1){const k=aa(p,h,$);u[$]?(u[$].p(k,v),D(u[$],1)):(u[$]=la(k),u[$].c(),D(u[$],1),u[$].m(n,l))}for(Ht(),$=h.length;$<u.length;$+=1)g($);Ut()}m&&m.p&&(!a||v[0]&33554432)&&Ps(m,f,p,p[25],a?Ds(f,p[25],v,cg):Bs(p[25]),na)},i(p){if(!a){D(s.$$.fragment,p),D(o.$$.fragment,p);for(let v=0;v<h.length;v+=1)D(u[v]);D(m,p),a=!0}},o(p){B(s.$$.fragment,p),B(o.$$.fragment,p),u=u.filter(Boolean);for(let v=0;v<u.length;v+=1)B(u[v]);B(m,p),a=!1},d(p){p&&(z(t),z(r),z(n)),q(s),e[18](null),q(o),Pt(u,p),m&&m.d(p),e[21](null)}}}function hg(e){let t;return{c(){t=N(e[2])},m(s,i){E(s,t,i)},p(s,i){i[0]&4&&at(t,s[2])},d(s){s&&z(t)}}}function pg(e){let t,s;return{c(){t=C("span"),s=N(e[1]),S(t,"class","font-medium")},m(i,o){E(i,t,o),y(t,s)},p(i,o){o[0]&2&&at(s,i[1])},d(i){i&&z(t)}}}function fg(e){let t;return{c(){t=N(e[2])},m(s,i){E(s,t,i)},p(s,i){i[0]&4&&at(t,s[2])},d(s){s&&z(t)}}}function mg(e){let t;return{c(){t=C("span"),t.textContent="+",S(t,"class","text-lg font-bold")},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function la(e){let t,s,i,o=ms(e[30])+"",r,n,l,a,c,h,u;function g(...f){return e[20](e[29],...f)}return l=new lg({}),l.$on("click",g),{c(){t=C("div"),s=C("div"),i=C("span"),r=N(o),n=T(),j(l.$$.fragment),a=T(),c=C("ol"),S(i,"class","text-lg font-medium"),S(s,"class","flex justify-between items-center"),S(c,"data-date-index",h=e[29]),S(c,"class","px-4 transaction-list"),S(t,"class","my-2")},m(f,m){E(f,t,m),y(t,s),y(s,i),y(i,r),y(s,n),U(l,s,null),y(t,a),y(t,c),u=!0},p(f,m){e=f,(!u||m[0]&4096)&&o!==(o=ms(e[30])+"")&&at(r,o),(!u||m[0]&4096&&h!==(h=e[29]))&&S(c,"data-date-index",h)},i(f){u||(D(l.$$.fragment,f),u=!0)},o(f){B(l.$$.fragment,f),u=!1},d(f){f&&z(t),q(l)}}}function gg(e){let t,s,i,o;const r=[ug,dg],n=[];function l(a,c){return a[3].size>0?0:1}return t=l(e),s=n[t]=r[t](e),{c(){s.c(),i=Se()},m(a,c){n[t].m(a,c),E(a,i,c),o=!0},p(a,c){let h=t;t=l(a),t===h?n[t].p(a,c):(Ht(),B(n[h],1,1,()=>{n[h]=null}),Ut(),s=n[t],s?s.p(a,c):(s=n[t]=r[t](a),s.c()),D(s,1),s.m(i.parentNode,i))},i(a){o||(D(s),o=!0)},o(a){B(s),o=!1},d(a){a&&z(i),n[t].d(a)}}}function bg(e){let t,s;return t=new Rs({props:{extraClasses:e[4]+" "+e[5]+" "+e[6]+" "+e[7]+" "+e[8]+" "+e[9]+` 
    py-6 px-6 flex flex-col`,$$slots:{default:[gg]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},m(i,o){U(t,i,o),s=!0},p(i,o){const r={};o[0]&1008&&(r.extraClasses=i[4]+" "+i[5]+" "+i[6]+" "+i[7]+" "+i[8]+" "+i[9]+` 
    py-6 px-6 flex flex-col`),o[0]&33561615&&(r.$$scope={dirty:o,ctx:i}),t.$set(r)},i(i){s||(D(t.$$.fragment,i),s=!0)},o(i){B(t.$$.fragment,i),s=!1},d(i){q(t,i)}}}function vg(e,t,s){let{$$slots:i={},$$scope:o}=t;const r=se();let{emptyMessage:n=""}=t,{emptyButtonMessage:l="+"}=t,{title:a}=t,{transactions:c}=t,{listElement:h}=t,{width:u=""}=t,{minWidth:g=""}=t,{maxWidth:f=""}=t,{height:m=""}=t,{minHeight:p=""}=t,{maxHeight:v=""}=t,_,w,$=(L,nt)=>nt.getTime()-L.getTime(),k=O();function x(){w.triggerTooltip()}function A(L){return c.get(L)}function M(L,nt){let tt=_.querySelectorAll(".transaction-list").item(L);switch(nt.detail.newState){case"open":tt.classList.remove("collapsed"),tt.classList.add("uncollapsed");break;case"close":tt.style.setProperty("--list-height",`${tt.getBoundingClientRect().height}px`),tt.classList.remove("uncollapsed"),tt.classList.add("collapsed");break}}function O(){return Array.from(c.keys()).sort($)}vs(async()=>{s(12,k=O()),await Cp(),_.querySelectorAll(".transaction-list").forEach(nt=>{for(;nt.firstChild;)nt.removeChild(nt.firstChild);let tt=Number.parseInt(nt.dataset.dateIndex),Ae=O()[tt];A(Ae).forEach(Be=>{new h({target:nt,props:{transaction:Be}})})})});function I(L){Y[L?"unshift":"push"](()=>{w=L,s(11,w)})}const V=()=>r("buttonClicked"),ct=(L,nt)=>{M(L,nt)};function J(L){Y[L?"unshift":"push"](()=>{_=L,s(10,_)})}function lt(L){Y[L?"unshift":"push"](()=>{w=L,s(11,w)})}const ot=()=>r("buttonClicked");function W(L){Y[L?"unshift":"push"](()=>{_=L,s(10,_)})}return e.$$set=L=>{"emptyMessage"in L&&s(0,n=L.emptyMessage),"emptyButtonMessage"in L&&s(1,l=L.emptyButtonMessage),"title"in L&&s(2,a=L.title),"transactions"in L&&s(3,c=L.transactions),"listElement"in L&&s(15,h=L.listElement),"width"in L&&s(4,u=L.width),"minWidth"in L&&s(5,g=L.minWidth),"maxWidth"in L&&s(6,f=L.maxWidth),"height"in L&&s(7,m=L.height),"minHeight"in L&&s(8,p=L.minHeight),"maxHeight"in L&&s(9,v=L.maxHeight),"$$scope"in L&&s(25,o=L.$$scope)},[n,l,a,c,u,g,f,m,p,v,_,w,k,r,M,h,x,i,I,V,ct,J,lt,ot,W,o]}class ca extends _t{constructor(t){super(),yt(this,t,vg,bg,vt,{emptyMessage:0,emptyButtonMessage:1,title:2,transactions:3,listElement:15,width:4,minWidth:5,maxWidth:6,height:7,minHeight:8,maxHeight:9,triggerTooltip:16},null,[-1,-1])}get triggerTooltip(){return this.$$.ctx[16]}}function da(e,t,s){const i=e.slice();return i[7]=t[s],i}function ua(e){let t,s;return{c(){t=Le("svg"),s=Le("path"),S(s,"fill-rule","evenodd"),S(s,"clip-rule","evenodd"),S(s,"d","M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"),S(t,"class","h-6 w-6"),S(t,"viewBox","0 0 24 24"),S(t,"xmlns","http://www.w3.org/2000/svg")},m(i,o){E(i,t,o),y(t,s)},p:ut,d(i){i&&z(t)}}}function yg(e){let t,s,i,o,r,n,l=gt(Array.from({length:e[2]},ha)),a=[];for(let c=0;c<l.length;c+=1)a[c]=ua(da(e,l,c));return{c(){t=C("div"),s=C("div"),o=T(),r=C("div");for(let c=0;c<a.length;c+=1)a[c].c();S(s,"class",i="absolute "+(e[3]==="vertical"?"top-[100%]":"left-[100%]")+" opacity-30 mx-auto "+e[0]+" "+(e[3]==="horizontal"?"h-[2px] my-auto":"w-[2px] mx-auto")),S(r,"class",n="absolute "+(e[3]==="vertical"?"top-[100%]":"left-[100%]")+" flex "+(e[3]==="vertical"?"flex-col":"")+" justify-center opacity-100 "+e[1]+" "+(e[3]==="horizontal"?"-rotate-90":"")),S(t,"class","absolute flex items-center justify-center")},m(c,h){E(c,t,h),y(t,s),y(t,o),y(t,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(r,null);e[6](t)},p(c,[h]){if(h&9&&i!==(i="absolute "+(c[3]==="vertical"?"top-[100%]":"left-[100%]")+" opacity-30 mx-auto "+c[0]+" "+(c[3]==="horizontal"?"h-[2px] my-auto":"w-[2px] mx-auto"))&&S(s,"class",i),h&4){l=gt(Array.from({length:c[2]},ha));let u;for(u=0;u<l.length;u+=1){const g=da(c,l,u);a[u]?a[u].p(g,h):(a[u]=ua(),a[u].c(),a[u].m(r,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=l.length}h&10&&n!==(n="absolute "+(c[3]==="vertical"?"top-[100%]":"left-[100%]")+" flex "+(c[3]==="vertical"?"flex-col":"")+" justify-center opacity-100 "+c[1]+" "+(c[3]==="horizontal"?"-rotate-90":""))&&S(r,"class",n)},i:ut,o:ut,d(c){c&&z(t),Pt(a,c),e[6](null)}}}const ha=()=>[0];function _g(e,t,s){let{linkColorClass:i}=t,{arrowColorClass:o}=t,{numArrows:r=1}=t,{direction:n}=t,l;function a(h,u){let g=l.querySelector(":first-child"),f=l.querySelector(":last-child"),m=document.querySelector("main"),p=m.getBoundingClientRect(),v=h.getBoundingClientRect(),_=u.getBoundingClientRect();if(n==="horizontal"){let w=_.left-v.right;g.style.width=w+"px",f.style.width=w+"px",s(4,l.style.left=v.right-p.x+"px",l),s(4,l.style.top=v.top+v.height/2+m.scrollTop+"px",l)}else{let w=_.top-v.bottom;g.style.height=w+"px",f.style.height=w+"px",s(4,l.style.left=v.left+v.width/2-p.x+"px",l),s(4,l.style.top=v.bottom+m.scrollTop+"px",l)}}function c(h){Y[h?"unshift":"push"](()=>{l=h,s(4,l)})}return e.$$set=h=>{"linkColorClass"in h&&s(0,i=h.linkColorClass),"arrowColorClass"in h&&s(1,o=h.arrowColorClass),"numArrows"in h&&s(2,r=h.numArrows),"direction"in h&&s(3,n=h.direction)},[i,o,r,n,l,a,c]}class Qo extends _t{constructor(t){super(),yt(this,t,_g,yg,vt,{linkColorClass:0,arrowColorClass:1,numArrows:2,direction:3,positionLine:5})}get positionLine(){return this.$$.ctx[5]}}function wg(e){let t;return{c(){t=C("div"),t.textContent="You have reached the start of this period.",S(t,"slot","list-end"),S(t,"class","w-full mt-16 text-center opacity-75 text-xl font-medium")},m(s,i){E(s,t,i)},p:ut,d(s){s&&z(t)}}}function xg(e){let t,s,i,o,r,n,l,a,c,h,u,g,f,m,p,v,_,w,$,k,x,A,M,O,I,V,ct,J,lt,ot,W,L,nt,tt={type:"expense"};t=new fr({props:tt}),e[17](t);let Ae={type:"income"};i=new fr({props:Ae}),e[18](i);let Be={title:"Incomes",transactions:e[14],listElement:rg,emptyMessage:"There are currently no incomes for this time period. Start by adding one 👇",emptyButtonMessage:"Add income",width:"w-full",maxHeight:"max-h-[250px]",minHeight:"min-h-[150px]"};a=new ca({props:Be}),e[19](a),a.$on("buttonClicked",e[20]);let dt={linkColorClass:"bg-valid",arrowColorClass:"fill-valid",numArrows:1,direction:"vertical"};u=new Qo({props:dt}),e[22](u);function Re(rt){e[24](rt)}let Ge={type:ti,sectionName:"Spendings",accounts:e[12]};e[5]!==void 0&&(Ge.container=e[5]),p=new xo({props:Ge}),Y.push(()=>Pi(p,"container",Re)),$=new al({props:{containerInitialHeight:"80px"}}),$.$on("click",kg);let ni={linkColorClass:"bg-valid",arrowColorClass:"fill-valid",numArrows:3,direction:"vertical"};A=new Qo({props:ni}),e[25](A);function ai(rt){e[26](rt)}let ye={type:Bi,sectionName:"Savings",accounts:e[13]};e[6]!==void 0&&(ye.container=e[6]),V=new xo({props:ye}),Y.push(()=>Pi(V,"container",ai));let li={linkColorClass:"bg-accent-light",arrowColorClass:"fill-accent-light",numArrows:1,direction:"horizontal"};lt=new Qo({props:li}),e[27](lt);let ci={title:"Expenses",transactions:e[15],listElement:sg,width:"w-full",minWidth:"min-w-[50%]",minHeight:"min-h-[375px]",maxHeight:"max-h-full",emptyMessage:"There are no expenses for the current time period. Start by adding one 👇",emptyButtonMessage:"Add expense",$$slots:{"list-end":[wg]},$$scope:{ctx:e}};return L=new ca({props:ci}),e[28](L),L.$on("buttonClicked",e[29]),{c(){j(t.$$.fragment),s=T(),j(i.$$.fragment),o=T(),r=C("div"),n=C("div"),l=C("div"),j(a.$$.fragment),c=T(),h=C("div"),j(u.$$.fragment),g=T(),f=C("div"),m=C("div"),j(p.$$.fragment),_=T(),w=C("div"),j($.$$.fragment),k=T(),x=C("div"),j(A.$$.fragment),M=T(),O=C("div"),I=C("div"),j(V.$$.fragment),J=T(),j(lt.$$.fragment),ot=T(),W=C("div"),j(L.$$.fragment),S(h,"class","h-8"),S(m,"class","w-[80%] min-w-[300px] mx-auto"),S(w,"class","w-[50%] h-fit"),S(x,"class","bottom-link-element opacity-100 svelte-tjszp1"),S(I,"class","w-[80%] min-w-[300px] mx-auto"),S(n,"class","flex-1"),S(W,"class","flex-1 min-w-[440px]"),S(r,"class","flex justify-between h-full gap-16")},m(rt,Ot){U(t,rt,Ot),E(rt,s,Ot),U(i,rt,Ot),E(rt,o,Ot),E(rt,r,Ot),y(r,n),y(n,l),U(a,l,null),e[21](l),y(n,c),y(n,h),U(u,h,null),e[23](h),y(n,g),y(n,f),y(f,m),U(p,m,null),y(n,_),y(n,w),U($,w,null),y(n,k),y(n,x),U(A,x,null),y(n,M),y(n,O),y(O,I),U(V,I,null),y(r,J),U(lt,r,null),y(r,ot),y(r,W),U(L,W,null),e[30](W),nt=!0},p(rt,Ot){const Vs={};t.$set(Vs);const ys={};i.$set(ys);const di={};Ot[0]&16384&&(di.transactions=rt[14]),a.$set(di);const is={};u.$set(is);const _e={};Ot[0]&4096&&(_e.accounts=rt[12]),!v&&Ot[0]&32&&(v=!0,_e.container=rt[5],Di(()=>v=!1)),p.$set(_e);const Zi={};A.$set(Zi);const Ye={};Ot[0]&8192&&(Ye.accounts=rt[13]),!ct&&Ot[0]&64&&(ct=!0,Ye.container=rt[6],Di(()=>ct=!1)),V.$set(Ye);const ui={};lt.$set(ui);const le={};Ot[0]&32768&&(le.transactions=rt[15]),Ot[1]&8&&(le.$$scope={dirty:Ot,ctx:rt}),L.$set(le)},i(rt){nt||(D(t.$$.fragment,rt),D(i.$$.fragment,rt),D(a.$$.fragment,rt),D(u.$$.fragment,rt),D(p.$$.fragment,rt),D($.$$.fragment,rt),D(A.$$.fragment,rt),D(V.$$.fragment,rt),D(lt.$$.fragment,rt),D(L.$$.fragment,rt),nt=!0)},o(rt){B(t.$$.fragment,rt),B(i.$$.fragment,rt),B(a.$$.fragment,rt),B(u.$$.fragment,rt),B(p.$$.fragment,rt),B($.$$.fragment,rt),B(A.$$.fragment,rt),B(V.$$.fragment,rt),B(lt.$$.fragment,rt),B(L.$$.fragment,rt),nt=!1},d(rt){rt&&(z(s),z(o),z(r)),e[17](null),q(t,rt),e[18](null),q(i,rt),e[19](null),q(a),e[21](null),e[22](null),q(u),e[23](null),q(p),q($),e[25](null),q(A),q(V),e[27](null),q(lt),e[28](null),q(L),e[30](null)}}}function kg(e){let t=document.querySelector(".bottom-link-element");e.detail?(t.classList.remove("opacity-100"),t.classList.add("opacity-0")):setTimeout(()=>{t.classList.remove("opacity-0"),t.classList.add("opacity-100")},200)}function $g(e,t,s){let i,o,r,n,l,a,c,h,u,g,f,m,p=wt.getSpendingAccounts(),v=wt.getSavingAccounts(),_=Qe.getIncomesByDate([bt]),w=Te.getExpensesByDate([bt]),$=NaN,k=new ResizeObserver(dt=>{Number.isNaN($)&&($=r.clientHeight);let Re=dt[0].target.clientHeight,Ge=$-Re;s(8,u.style.height=Number.parseInt(getComputedStyle(u).height)+Ge+"px",u),f.positionLine(r,a),g.positionLine(a,c),$=Re}),x=new ResizeObserver(dt=>{m.positionLine(a,h)});bt.onTransactionsUpdated(()=>{s(14,_=Qe.getIncomesByDate([bt])),s(15,w=Te.getExpensesByDate([bt]))}),wt.onAccountsUpdated(()=>{s(12,p=wt.getSpendingAccounts()),s(13,v=wt.getSavingAccounts())});function A(dt,Re){wt.getAllAccounts().length>0?Re.toggleOpen():dt.triggerTooltip()}To(()=>{k.observe(r),x.observe(document.querySelector("main")),m.positionLine(a,h)}),$p(()=>{k.disconnect(),x.disconnect()});function M(dt){Y[dt?"unshift":"push"](()=>{i=dt,s(0,i)})}function O(dt){Y[dt?"unshift":"push"](()=>{o=dt,s(1,o)})}function I(dt){Y[dt?"unshift":"push"](()=>{n=dt,s(3,n)})}const V=()=>A(n,o);function ct(dt){Y[dt?"unshift":"push"](()=>{r=dt,s(2,r)})}function J(dt){Y[dt?"unshift":"push"](()=>{f=dt,s(10,f)})}function lt(dt){Y[dt?"unshift":"push"](()=>{u=dt,s(8,u)})}function ot(dt){a=dt,s(5,a)}function W(dt){Y[dt?"unshift":"push"](()=>{g=dt,s(9,g)})}function L(dt){c=dt,s(6,c)}function nt(dt){Y[dt?"unshift":"push"](()=>{m=dt,s(11,m)})}function tt(dt){Y[dt?"unshift":"push"](()=>{l=dt,s(4,l)})}const Ae=()=>A(l,i);function Be(dt){Y[dt?"unshift":"push"](()=>{h=dt,s(7,h)})}return[i,o,r,n,l,a,c,h,u,g,f,m,p,v,_,w,A,M,O,I,V,ct,J,lt,ot,W,L,nt,tt,Ae,Be]}class Cg extends _t{constructor(t){super(),yt(this,t,$g,xg,vt,{},null,[-1,-1])}}function Sg(e){let t,s,i,o,r,n,l,a,c,h;n=new Pp({props:{disabled:e[3]}}),n.$on("selectionUpdated",e[5]);var u=e[4];function g(f,m){return{}}return u&&(c=fs(u,g())),{c(){t=C("div"),t.innerHTML='<img src="assets/green-ellipse.png" alt=""/>',s=T(),i=C("div"),i.innerHTML='<img src="assets/purple-ellipse.png" alt=""/>',o=T(),r=C("div"),j(n.$$.fragment),l=T(),a=C("main"),c&&j(c.$$.fragment),S(t,"id","bg-green-ellipse"),S(t,"class","fixed w-[1420px] h-[600px]"),S(i,"id","bg-purple-ellipse"),S(i,"class","fixed w-[1420px] h-[600px]"),S(a,"class","relative flex-grow-[9] px-12 py-8 min-w-[700px]"),S(r,"class","flex h-[100vh]")},m(f,m){E(f,t,m),e[6](t),E(f,s,m),E(f,i,m),e[7](i),E(f,o,m),E(f,r,m),U(n,r,null),y(r,l),y(r,a),c&&U(c,a,null),e[8](a),h=!0},p(f,[m]){const p={};if(m&8&&(p.disabled=f[3]),n.$set(p),m&16&&u!==(u=f[4])){if(c){Ht();const v=c;B(v.$$.fragment,1,0,()=>{q(v,1)}),Ut()}u?(c=fs(u,g()),j(c.$$.fragment),D(c.$$.fragment,1),U(c,a,null)):c=null}},i(f){h||(D(n.$$.fragment,f),c&&D(c.$$.fragment,f),h=!0)},o(f){B(n.$$.fragment,f),c&&B(c.$$.fragment,f),h=!1},d(f){f&&(z(t),z(s),z(i),z(o),z(r)),e[6](null),e[7](null),q(n),c&&q(c),e[8](null)}}}function Ag(e,t,s){let i,o,r,n=!1;const l=new MutationObserver((_,w)=>{for(let $ of _)$.type==="attributes"&&$.attributeName==="class"&&(r.className.includes("modal-open")?s(3,n=!0):s(3,n=!1))}),a=[{component:wm,sideBarIndex:0},{component:Jm,sideBarIndex:1},{component:Cg,sideBarIndex:2}],c=[{toAngle:40,toDistance:500,timeSecs:.75},{toAngle:60,toDistance:100,timeSecs:.75},{toAngle:140,toDistance:400,timeSecs:.75}];let h;function u(_){return a.findIndex(w=>w.sideBarIndex===_)}let g=a[u(0)].component;function f(_){let w=u(_.detail.newIndex);bn(h,c[w]),s(4,g=a.find($=>$.sideBarIndex===_.detail.newIndex).component)}To(()=>{l.observe(r,{attributes:!0}),h={greenEllipse:i,purpleEllipse:o,container:document.querySelector("main")},bn(h,c[0])});function m(_){Y[_?"unshift":"push"](()=>{i=_,s(0,i)})}function p(_){Y[_?"unshift":"push"](()=>{o=_,s(1,o)})}function v(_){Y[_?"unshift":"push"](()=>{r=_,s(2,r)})}return[i,o,r,n,g,f,m,p,v]}class zg extends _t{constructor(t){super(),yt(this,t,Ag,Sg,vt,{})}}new zg({target:document.getElementById("app")});
