var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};void 0!==t&&Object.defineProperty(t,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(t){return"#{root}/dist/webviews/"}},set:function(t){}});var e={};t.d(e,{T:()=>_y});const n=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===n.trustedTypes&&(n.trustedTypes={createPolicy:(t,e)=>e});const i={configurable:!1,enumerable:!1,writable:!1};void 0===n.FAST&&Reflect.defineProperty(n,"FAST",Object.assign({value:Object.create(null)},i));const o=n.FAST;if(void 0===o.getById){const t=Object.create(null);Reflect.defineProperty(o,"getById",Object.assign({value(e,n){let i=t[e];return void 0===i&&(i=n?t[e]=n():null),i}},i))}const r=Object.freeze([]);function a(){const t=new WeakMap;return function(e){let n=t.get(e);if(void 0===n){let i=Reflect.getPrototypeOf(e);for(;void 0===n&&null!==i;)n=t.get(i),i=Reflect.getPrototypeOf(i);n=void 0===n?[]:n.slice(0),t.set(e,n)}return n}}const s=n.FAST.getById(1,(()=>{const t=[],e=[];function i(){if(e.length)throw e.shift()}function o(t){try{t.call()}catch(t){e.push(t),setTimeout(i,0)}}function r(){let e=0;for(;e<t.length;)if(o(t[e]),e++,e>1024){for(let n=0,i=t.length-e;n<i;n++)t[n]=t[n+e];t.length-=e,e=0}t.length=0}return Object.freeze({enqueue:function(e){t.length<1&&n.requestAnimationFrame(r),t.push(e)},process:r})})),c=n.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let l=c;const u=`fast-${Math.random().toString(36).substring(2,8)}`,h=`${u}{`,d=`}${u}`,f=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(l!==c)throw new Error("The HTML policy can only be set once.");l=t},createHTML:t=>l.createHTML(t),isMarker:t=>t&&8===t.nodeType&&t.data.startsWith(u),extractDirectiveIndexFromMarker:t=>parseInt(t.data.replace(`${u}:`,"")),createInterpolationPlaceholder:t=>`${h}${t}${d}`,createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder:t=>`\x3c!--${u}:${t}--\x3e`,queueUpdate:s.enqueue,processUpdates:s.process,nextUpdate:()=>new Promise(s.enqueue),setAttribute(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker:t=>document.createTreeWalker(t,133,null,!1)});class p{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return void 0===this.spillover?this.sub1===t||this.sub2===t:-1!==this.spillover.indexOf(t)}subscribe(t){const e=this.spillover;if(void 0===e){if(this.has(t))return;if(void 0===this.sub1)return void(this.sub1=t);if(void 0===this.sub2)return void(this.sub2=t);this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else{-1===e.indexOf(t)&&e.push(t)}}unsubscribe(t){const e=this.spillover;if(void 0===e)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}notify(t){const e=this.spillover,n=this.source;if(void 0===e){const e=this.sub1,i=this.sub2;void 0!==e&&e.handleChange(n,t),void 0!==i&&i.handleChange(n,t)}else for(let i=0,o=e.length;i<o;++i)e[i].handleChange(n,t)}}class g{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const n=this.subscribers[t];void 0!==n&&n.notify(t),null===(e=this.sourceSubscribers)||void 0===e||e.notify(t)}subscribe(t,e){var n;if(e){let n=this.subscribers[e];void 0===n&&(this.subscribers[e]=n=new p(this.source)),n.subscribe(t)}else this.sourceSubscribers=null!==(n=this.sourceSubscribers)&&void 0!==n?n:new p(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var n;if(e){const n=this.subscribers[e];void 0!==n&&n.unsubscribe(t)}else null===(n=this.sourceSubscribers)||void 0===n||n.unsubscribe(t)}}const v=o.getById(2,(()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,n=f.queueUpdate;let i,o=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(t){let n=t.$fastController||e.get(t);return void 0===n&&(Array.isArray(t)?n=o(t):e.set(t,n=new g(t))),n}const s=a();class c{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==i&&i.watch(t,this.name),t[this.field]}setValue(t,e){const n=this.field,i=t[n];if(i!==e){t[n]=e;const o=t[this.callback];"function"==typeof o&&o.call(t,i,e),r(t).notify(this.name)}}}class l extends p{constructor(t,e,n=!1){super(t,e),this.binding=t,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const n=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(t,e);return i=n,o}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const n=this.last,o=r(t),a=null===n?this.first:{};if(a.propertySource=t,a.propertyName=e,a.notifier=o,o.subscribe(this,e),null!==n){if(!this.needsRefresh){let e;i=void 0,e=n.propertySource[n.propertyName],i=this,t===e&&(this.needsRefresh=!0)}n.next=a}this.last=a}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(t){o=t},getNotifier:r,track(t,e){void 0!==i&&i.watch(t,e)},trackVolatile(){void 0!==i&&(i.needsRefresh=!0)},notify(t,e){r(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new c(e)),s(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors:s,binding(t,e,n=this.isVolatileBinding(t)){return new l(t,e,n)},isVolatileBinding:e=>t.test(e.toString())})}));function b(t,e){v.defineProperty(t,e)}function m(t,e,n){return Object.assign({},n,{get:function(){return v.trackVolatile(),n.get.apply(this)}})}const y=o.getById(3,(()=>{let t=null;return{get:()=>t,set(e){t=e}}}));class x{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return y.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){y.set(t)}}v.defineProperty(x.prototype,"index"),v.defineProperty(x.prototype,"length");const _=Object.seal(new x);class w{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function T(t){return t.map((t=>t instanceof w?T(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function k(t){return t.map((t=>t instanceof w?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}w.create=(()=>{if(f.supportsAdoptedStyleSheets){const t=new Map;return e=>new A(e,t)}return t=>new E(t)})();let C=(t,e)=>{t.adoptedStyleSheets=[...t.adoptedStyleSheets,...e]},S=(t,e)=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t)))};if(f.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),C=(t,e)=>{t.adoptedStyleSheets.push(...e)},S=(t,e)=>{for(const n of e){const e=t.adoptedStyleSheets.indexOf(n);-1!==e&&t.adoptedStyleSheets.splice(e,1)}}}catch(_b){}class A extends w{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=k(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=T(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let n=e.get(t);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(t),e.set(t,n)),n}))}return this._styleSheets}addStylesTo(t){C(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){S(t,this.styleSheets),super.removeStylesFrom(t)}}let $=0;class E extends w{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=k(t),this.styleSheets=T(t),this.styleClass="fast-style-class-"+ ++$}addStylesTo(t){const e=this.styleSheets,n=this.styleClass;t=this.normalizeTarget(t);for(let i=0;i<e.length;i++){const o=document.createElement("style");o.innerHTML=e[i],o.className=n,t.append(o)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let n=0,i=e.length;n<i;++n)t.removeChild(e[n]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const M=Object.freeze({locate:a()}),O={toView:t=>t?"true":"false",fromView:t=>null!=t&&"false"!==t&&!1!==t&&0!==t},D={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class P{constructor(t,e,n=e.toLowerCase(),i="reflect",o){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=n,this.mode=i,this.converter=o,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===i&&void 0===o&&(this.converter=O)}setValue(t,e){const n=t[this.fieldName],i=this.converter;void 0!==i&&(e=i.fromView(e)),n!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](n,e),t.$fastController.notify(this.name))}getValue(t){return v.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,n=this.guards;n.has(t)||"fromView"===e||f.queueUpdate((()=>{n.add(t);const i=t[this.fieldName];switch(e){case"reflect":const e=this.converter;f.setAttribute(t,this.attribute,void 0!==e?e.toView(i):i);break;case"boolean":f.setBooleanAttribute(t,this.attribute,i)}n.delete(t)}))}static collect(t,...e){const n=[];e.push(M.locate(t));for(let i=0,o=e.length;i<o;++i){const o=e[i];if(void 0!==o)for(let e=0,i=o.length;e<i;++e){const i=o[e];"string"==typeof i?n.push(new P(t,i)):n.push(new P(t,i.property,i.attribute,i.mode,i.converter))}}return n}}function R(t,e){let n;function i(t,e){arguments.length>1&&(n.property=e),M.locate(t.constructor).push(n)}return arguments.length>1?(n={},void i(t,e)):(n=void 0===t?{}:t,i)}const I={mode:"open"},L={},z=o.getById(4,(()=>{const t=new Map;return Object.freeze({register:e=>!t.has(e.type)&&(t.set(e.type,e),!0),getByType:e=>t.get(e)})}));class B{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const n=P.collect(t,e.attributes),i=new Array(n.length),o={},r={};for(let t=0,e=n.length;t<e;++t){const e=n[t];i[t]=e.attribute,o[e.name]=e,r[e.attribute]=e}this.attributes=n,this.observedAttributes=i,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=void 0===e.shadowOptions?I:null===e.shadowOptions?void 0:Object.assign(Object.assign({},I),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?L:Object.assign(Object.assign({},L),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?w.create(e.styles):e.styles instanceof w?e.styles:w.create([e.styles])}get isDefined(){return!!z.getByType(this.type)}define(t=customElements){const e=this.type;if(z.register(this)){const t=this.attributes,n=e.prototype;for(let e=0,i=t.length;e<i;++e)v.defineProperty(n,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}B.forType=z.getByType;function N(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const F=new WeakMap,X={bubbles:!0,composed:!0,cancelable:!0};function V(t){return t.shadowRoot||F.get(t)||null}class U extends g{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const n=e.shadowOptions;if(void 0!==n){const e=t.attachShadow(n);"closed"===n.mode&&F.set(t,e)}const i=v.getAccessors(t);if(i.length>0){const e=this.boundObservables=Object.create(null);for(let n=0,o=i.length;n<o;++n){const o=i[n].name,r=t[o];void 0!==r&&(delete t[o],e[o]=r)}}}get isConnected(){return v.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,v.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=V(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const n=t.behaviors;t.addStylesTo(e),null!==n&&this.addBehaviors(n)}}removeStyles(t){const e=V(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const n=t.behaviors;t.removeStylesFrom(e),null!==n&&this.removeBehaviors(n)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),n=t.length,i=[];for(let o=0;o<n;++o){const n=t[o];e.has(n)?e.set(n,e.get(n)+1):(e.set(n,1),i.push(n))}if(this._isConnected){const t=this.element;for(let e=0;e<i.length;++e)i[e].bind(t,_)}}removeBehaviors(t,e=!1){const n=this.behaviors;if(null===n)return;const i=t.length,o=[];for(let r=0;r<i;++r){const i=t[r];if(n.has(i)){const t=n.get(i)-1;0===t||e?n.delete(i)&&o.push(i):n.set(i,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<o.length;++e)o[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,_);const e=this.behaviors;if(null!==e)for(const[n]of e)n.bind(t,_);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[n]of e)n.unbind(t)}}onAttributeChangedCallback(t,e,n){const i=this.definition.attributeLookup[t];void 0!==i&&i.onAttributeChangedCallback(this.element,n)}emit(t,e,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},X),n)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const n=Object.keys(e);for(let i=0,o=n.length;i<o;++i){const o=n[i];t[o]=e[o]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,n=V(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||f.removeChildNodes(n),t&&(this.view=t.render(e,n,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const n=B.forType(t.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return t.$fastController=new U(t,n)}}function H(t){return class extends t{constructor(){super(),U.forCustomElement(this)}$emit(t,e,n){return this.$fastController.emit(t,e,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,n){this.$fastController.onAttributeChangedCallback(t,e,n)}}}const j=Object.assign(H(HTMLElement),{from:t=>H(t),define:(t,e)=>new B(t,e).define().type});const Y=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(n){Reflect.defineMetadata(t,e,n)}},Reflect.defineMetadata=function(t,e,n){let i=Y.get(n);void 0===i&&Y.set(n,i=new Map),i.set(t,e)},Reflect.getOwnMetadata=function(t,e){const n=Y.get(e);if(void 0!==n)return n.get(t)});class q{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,yt(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:n,key:i}=this;return this.container=this.key=void 0,n.registerResolver(i,new st(i,t,e))}}function G(t){const e=t.slice(),n=Object.keys(t),i=n.length;let o;for(let r=0;r<i;++r)o=n[r],At(o)||(e[o]=t[o]);return e}const W=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton:t=>new st(t,1,t),transient:t=>new st(t,2,t)}),Z=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:W.singleton})}),K=new Map;function Q(t){return e=>Reflect.getOwnMetadata(t,e)}let J=null;const tt=Object.freeze({createContainer:t=>new bt(null,Object.assign({},Z.default,t)),findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:tt.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(gt,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||tt.getOrCreateDOMContainer()},getOrCreateDOMContainer:(t,e)=>t?t.$$container$$||new bt(t,Object.assign({},Z.default,e,{parentLocator:tt.findParentContainer})):J||(J=new bt(null,Object.assign({},Z.default,e,{parentLocator:()=>null}))),getDesignParamtypes:Q("design:paramtypes"),getAnnotationParamtypes:Q("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return void 0===e&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=K.get(t);if(void 0===e){const n=t.inject;if(void 0===n){const n=tt.getDesignParamtypes(t),i=tt.getAnnotationParamtypes(t);if(void 0===n)if(void 0===i){const n=Object.getPrototypeOf(t);e="function"==typeof n&&n!==Function.prototype?G(tt.getDependencies(n)):[]}else e=G(i);else if(void 0===i)e=G(n);else{e=G(n);let t,o=i.length;for(let n=0;n<o;++n)t=i[n],void 0!==t&&(e[n]=t);const r=Object.keys(i);let a;o=r.length;for(let t=0;t<o;++t)a=r[t],At(a)||(e[a]=i[a])}}else e=G(n);K.set(t,e)}return e},defineProperty(t,e,n,i=!1){const o=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let t=this[o];if(void 0===t){const r=this instanceof HTMLElement?tt.findResponsibleContainer(this):tt.getOrCreateDOMContainer();if(t=r.get(n),this[o]=t,i&&this instanceof j){const i=this.$fastController,r=()=>{tt.findResponsibleContainer(this).get(n)!==this[o]&&(this[o]=t,i.notify(e))};i.subscribe({handleChange:r},"isConnected")}}return t}})},createInterface(t,e){const n="function"==typeof t?t:e,i="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||Tt,o="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),r=function(t,e,n){if(null==t||void 0!==new.target)throw new Error(`No registration for interface: '${r.friendlyName}'`);if(e)tt.defineProperty(t,e,r,o);else{tt.getOrCreateAnnotationParamTypes(t)[n]=r}};return r.$isInterface=!0,r.friendlyName=i??"(anonymous)",null!=n&&(r.register=function(t,e){return n(new q(t,null!=e?e:r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject:(...t)=>function(e,n,i){if("number"==typeof i){const n=tt.getOrCreateAnnotationParamTypes(e),o=t[0];void 0!==o&&(n[i]=o)}else if(n)tt.defineProperty(e,n,t[0]);else{const n=i?tt.getOrCreateAnnotationParamTypes(i.value):tt.getOrCreateAnnotationParamTypes(e);let o;for(let e=0;e<t.length;++e)o=t[e],void 0!==o&&(n[e]=o)}},transient:t=>(t.register=function(e){return xt.transient(t,t).register(e)},t.registerInRequestor=!1,t),singleton:(t,e=it)=>(t.register=function(e){return xt.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t)}),et=tt.createInterface("Container");function nt(t){return function(e){const n=function(t,e,i){tt.inject(n)(t,e,i)};return n.$isResolver=!0,n.resolve=function(n,i){return t(e,n,i)},n}}tt.inject;const it={scoped:!1};ot=(t,e,n,i)=>n.getAll(t,i);var ot;nt(((t,e,n)=>()=>n.get(t))),nt(((t,e,n)=>n.has(t,!0)?n.get(t):void 0));function rt(t,e,n){tt.inject(rt)(t,e,n)}rt.$isResolver=!0,rt.resolve=()=>{};nt(((t,e,n)=>{const i=at(t,e),o=new st(t,0,i);return n.registerResolver(t,o),i})),nt(((t,e,n)=>at(t,e)));function at(t,e){return e.getFactory(t).construct(e)}class st{constructor(t,e,n){this.key=t,this.strategy=e,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=t.getFactory(this.state);if(null===n)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,n,i;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(i=null===(n=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===n?void 0:n.call(e,t))&&void 0!==i?i:null;default:return null}}}function ct(t){return this.get(t)}function lt(t,e){return e(t)}class ut{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let n;return n=void 0===e?new this.Type(...this.dependencies.map(ct,t)):new this.Type(...this.dependencies.map(ct,t),...e),null==this.transformers?n:this.transformers.reduce(lt,n)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const ht={$isResolver:!0,resolve:(t,e)=>e};function dt(t){return"function"==typeof t.register}function ft(t){return function(t){return dt(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}const pt=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),gt="__DI_LOCATE_PARENT__",vt=new Map;class bt{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,null!==t&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(et,ht),t instanceof Node&&t.addEventListener(gt,(t=>{t.composedPath()[0]!==this.owner&&(t.detail.container=this,t.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let e,n,i,o,r;const a=this.context;for(let s=0,c=t.length;s<c;++s)if(e=t[s],kt(e))if(dt(e))e.register(this,a);else if(void 0!==e.prototype)xt.singleton(e,e).register(this);else for(n=Object.keys(e),o=0,r=n.length;o<r;++o)i=e[n[o]],kt(i)&&(dt(i)?i.register(this,a):this.register(i));return--this.registerDepth,this}registerResolver(t,e){_t(t);const n=this.resolvers,i=n.get(t);return null==i?n.set(t,e):i instanceof st&&4===i.strategy?i.state.push(e):n.set(t,new st(t,4,[i,e])),e}registerTransformer(t,e){const n=this.getResolver(t);if(null==n)return!1;if(n.getFactory){const t=n.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(_t(t),void 0!==t.resolve)return t;let n,i=this;for(;null!=i;){if(n=i.resolvers.get(t),null!=n)return n;if(null==i.parent){const n=ft(t)?this:i;return e?this.jitRegister(t,n):null}i=i.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}get(t){if(_t(t),t.$isResolver)return t.resolve(this,this);let e,n=this;for(;null!=n;){if(e=n.resolvers.get(t),null!=e)return e.resolve(n,this);if(null==n.parent){const i=ft(t)?this:n;return e=this.jitRegister(t,i),e.resolve(n,this)}n=n.parent}throw new Error(`Unable to resolve key: ${String(t)}`)}getAll(t,e=!1){_t(t);const n=this;let i,o=n;if(e){let e=r;for(;null!=o;)i=o.resolvers.get(t),null!=i&&(e=e.concat(wt(i,o,n))),o=o.parent;return e}for(;null!=o;){if(i=o.resolvers.get(t),null!=i)return wt(i,o,n);if(o=o.parent,null==o)return r}return r}getFactory(t){let e=vt.get(t);if(void 0===e){if(Ct(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);vt.set(t,e=new ut(t,tt.getDependencies(t)))}return e}registerFactory(t,e){vt.set(t,e)}createChild(t){return new bt(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(pt.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(dt(t)){const n=t.register(e);if(!(n instanceof Object)||null==n.resolve){const n=e.resolvers.get(t);if(null!=n)return n;throw new Error("A valid resolver was not returned from the static register method")}return n}if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const n=this.config.defaultResolver(t,e);return e.resolvers.set(t,n),n}}}const mt=new WeakMap;function yt(t){return function(e,n,i){if(mt.has(i))return mt.get(i);const o=t(e,n,i);return mt.set(i,o),o}}const xt=Object.freeze({instance:(t,e)=>new st(t,0,e),singleton:(t,e)=>new st(t,1,e),transient:(t,e)=>new st(t,2,e),callback:(t,e)=>new st(t,3,e),cachedCallback:(t,e)=>new st(t,3,yt(e)),aliasTo:(t,e)=>new st(e,5,t)});function _t(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function wt(t,e,n){if(t instanceof st&&4===t.strategy){const i=t.state;let o=i.length;const r=new Array(o);for(;o--;)r[o]=i[o].resolve(e,n);return r}return[t.resolve(e,n)]}const Tt="(anonymous)";function kt(t){return"object"==typeof t&&null!==t||"function"==typeof t}const Ct=function(){const t=new WeakMap;let e=!1,n="",i=0;return function(o){return e=t.get(o),void 0===e&&(n=o.toString(),i=n.length,e=i>=29&&i<=100&&125===n.charCodeAt(i-1)&&n.charCodeAt(i-2)<=32&&93===n.charCodeAt(i-3)&&101===n.charCodeAt(i-4)&&100===n.charCodeAt(i-5)&&111===n.charCodeAt(i-6)&&99===n.charCodeAt(i-7)&&32===n.charCodeAt(i-8)&&101===n.charCodeAt(i-9)&&118===n.charCodeAt(i-10)&&105===n.charCodeAt(i-11)&&116===n.charCodeAt(i-12)&&97===n.charCodeAt(i-13)&&110===n.charCodeAt(i-14)&&88===n.charCodeAt(i-15),t.set(o,e)),e}}(),St={};function At(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=St[t];if(void 0!==e)return e;const n=t.length;if(0===n)return St[t]=!1;let i=0;for(let e=0;e<n;++e)if(i=t.charCodeAt(e),0===e&&48===i&&n>1||i<48||i>57)return St[t]=!1;return St[t]=!0}default:return!1}}function $t(t){return`${t.toLowerCase()}:presentation`}const Et=new Map,Mt=Object.freeze({define(t,e,n){const i=$t(t);void 0===Et.get(i)?Et.set(i,e):Et.set(i,!1),n.register(xt.instance(i,e))},forTag(t,e){const n=$t(t),i=Et.get(n);if(!1===i){return tt.findResponsibleContainer(e).get(n)}return i||null}});class Ot{constructor(t,e){this.template=t||null,this.styles=void 0===e?null:Array.isArray(e)?w.create(e):e instanceof w?e:w.create([e])}applyTo(t){const e=t.$fastController;null===e.template&&(e.template=this.template),null===e.styles&&(e.styles=this.styles)}}class Dt extends j{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Mt.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new Rt(this===Dt?class extends Dt{}:this,t,e)}}function Pt(t,e,n){return"function"==typeof t?t(e,n):t}N([b],Dt.prototype,"template",void 0),N([b],Dt.prototype,"styles",void 0);class Rt{constructor(t,e,n){this.type=t,this.elementDefinition=e,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const n=this.definition,i=this.overrideDefinition,o=`${n.prefix||e.elementPrefix}-${n.baseName}`;e.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:t=>{const e=new Ot(Pt(n.template,t,n),Pt(n.styles,t,n));t.definePresentation(e);let o=Pt(n.shadowOptions,t,n);t.shadowRootMode&&(o?i.shadowOptions||(o.mode=t.shadowRootMode):null!==o&&(o={mode:t.shadowRootMode})),t.defineElement({elementOptions:Pt(n.elementOptions,t,n),shadowOptions:o,attributes:Pt(n.attributes,t,n)})}})}}class It{createCSS(){return""}createBehavior(){}}function Lt(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}const zt=document.createElement("div");class Bt{setProperty(t,e){f.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){f.queueUpdate((()=>this.target.removeProperty(t)))}}class Nt extends Bt{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class Ft extends Bt{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Xt{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),v.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),f.queueUpdate((()=>{null!==this.target&&this.target.setProperty(t,e)}))}removeProperty(t){this.store.delete(t),f.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(t)}))}handleChange(t,e){const{sheet:n}=this.style;if(n){const t=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[t].style}else this.target=null}}N([b],Xt.prototype,"target",void 0);class Vt{constructor(t){this.target=t.style}setProperty(t,e){f.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){f.queueUpdate((()=>this.target.removeProperty(t)))}}class Ut{setProperty(t,e){Ut.properties[t]=e;for(const n of Ut.roots.values())Yt.getOrCreate(Ut.normalizeRoot(n)).setProperty(t,e)}removeProperty(t){delete Ut.properties[t];for(const e of Ut.roots.values())Yt.getOrCreate(Ut.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=Ut;if(!e.has(t)){e.add(t);const n=Yt.getOrCreate(this.normalizeRoot(t));for(const t in Ut.properties)n.setProperty(t,Ut.properties[t])}}static unregisterRoot(t){const{roots:e}=Ut;if(e.has(t)){e.delete(t);const n=Yt.getOrCreate(Ut.normalizeRoot(t));for(const t in Ut.properties)n.removeProperty(t)}}static normalizeRoot(t){return t===zt?document:t}}Ut.roots=new Set,Ut.properties={};const Ht=new WeakMap,jt=f.supportsAdoptedStyleSheets?class extends Bt{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(w.create([e]))}}:Xt,Yt=Object.freeze({getOrCreate(t){if(Ht.has(t))return Ht.get(t);let e;return t===zt?e=new Ut:t instanceof Document?e=f.supportsAdoptedStyleSheets?new Nt:new Ft:e=t instanceof j?new jt(t):new Vt(t),Ht.set(t,e),e}});class qt extends It{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,null!==t.cssCustomPropertyName&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=qt.uniqueId(),qt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new qt({name:"string"==typeof t?t:t.name,cssCustomPropertyName:"string"==typeof t?t:void 0===t.cssCustomPropertyName?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return"string"==typeof t.cssCustomProperty}static isDerivedDesignTokenValue(t){return"function"==typeof t}static getTokenById(t){return qt.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=Qt.getOrCreate(t).get(this);if(void 0!==e)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof qt&&(e=this.alias(e)),Qt.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),Qt.existsFor(t)&&Qt.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(zt,t),this}subscribe(t,e){const n=this.getOrCreateSubscriberSet(e);e&&!Qt.existsFor(e)&&Qt.getOrCreate(e),n.has(t)||n.add(t)}unsubscribe(t,e){const n=this.subscribers.get(e||this);n&&n.has(t)&&n.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach((t=>t.handleChange(e))),this.subscribers.has(t)&&this.subscribers.get(t).forEach((t=>t.handleChange(e)))}alias(t){return e=>t.getValueFor(e)}}qt.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})(),qt.tokensById=new Map;class Gt{constructor(t,e,n){this.source=t,this.token=e,this.node=n,this.dependencies=new Set,this.observer=v.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,_))}}class Wt{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),v.getNotifier(this).notify(t.id))}get(t){return v.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const Zt=new WeakMap,Kt=new WeakMap;class Qt{constructor(t){this.target=t,this.store=new Wt,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,e)=>{const n=qt.getTokenById(e);if(n&&(n.notify(this.target),qt.isCSSDesignToken(n))){const e=this.parent,i=this.isReflecting(n);if(e){const o=e.get(n),r=t.get(n);o===r||i?o===r&&i&&this.stopReflectToCSS(n):this.reflectToCSS(n)}else i||this.reflectToCSS(n)}}},Zt.set(t,this),v.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof j?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return Zt.get(t)||new Qt(t)}static existsFor(t){return Zt.has(t)}static findParent(t){if(zt!==t.target){let e=Lt(t.target);for(;null!==e;){if(Zt.has(e))return Zt.get(e);e=Lt(e)}return Qt.getOrCreate(zt)}return null}static findClosestAssignedNode(t,e){let n=e;do{if(n.has(t))return n;n=n.parent?n.parent:n.target!==zt?Qt.getOrCreate(zt):null}while(null!==n);return null}get parent(){return Kt.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(void 0!==e)return e;const n=this.getRaw(t);return void 0!==n?(this.hydrate(t,n),this.get(t)):void 0}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):null===(e=Qt.findClosestAssignedNode(t,this))||void 0===e?void 0:e.getRaw(t)}set(t,e){qt.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),qt.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=Qt.findParent(this);t&&t.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){if(this.parent){Kt.get(this).removeChild(this)}}appendChild(t){t.parent&&Kt.get(t).removeChild(t);const e=this.children.filter((e=>t.contains(e)));Kt.set(t,this),this.children.push(t),e.forEach((e=>t.appendChild(e))),v.getNotifier(this.store).subscribe(t);for(const[e,n]of this.store.all())t.hydrate(e,this.bindingObservers.has(e)?this.getRaw(e):n)}removeChild(t){const e=this.children.indexOf(t);return-1!==e&&this.children.splice(e,1),v.getNotifier(this.store).unsubscribe(t),t.parent===this&&Kt.delete(t)}contains(t){return function(t,e){let n=e;for(;null!==n;){if(n===t)return!0;n=Lt(n)}return!1}(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),Qt.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),Qt.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const n=qt.getTokenById(e);n&&this.hydrate(n,this.getRaw(n))}hydrate(t,e){if(!this.has(t)){const n=this.bindingObservers.get(t);qt.isDerivedDesignTokenValue(e)?n?n.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(n&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const n=new Gt(e,t,this);return this.bindingObservers.set(t,n),n}tearDownBindingObserver(t){return!!this.bindingObservers.has(t)&&(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0)}}Qt.cssCustomPropertyReflector=new class{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:n}=t;this.add(e,n)}add(t,e){Yt.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(Qt.getOrCreate(e).get(t)))}remove(t,e){Yt.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}},N([b],Qt.prototype,"children",void 0);const Jt=Object.freeze({create:function(t){return qt.from(t)},notifyConnection:t=>!(!t.isConnected||!Qt.existsFor(t))&&(Qt.getOrCreate(t).bind(),!0),notifyDisconnection:t=>!(t.isConnected||!Qt.existsFor(t))&&(Qt.getOrCreate(t).unbind(),!0),registerRoot(t=zt){Ut.registerRoot(t)},unregisterRoot(t=zt){Ut.unregisterRoot(t)}}),te=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ee=new Map,ne=new Map;let ie=null;const oe=tt.createInterface((t=>t.cachedCallback((t=>(null===ie&&(ie=new ae(null,t)),ie))))),re=Object.freeze({tagFor:t=>ne.get(t),responsibleFor(t){const e=t.$$designSystem$$;if(e)return e;return tt.findResponsibleContainer(t).get(oe)},getOrCreate(t){if(!t)return null===ie&&(ie=tt.getOrCreateDOMContainer().get(oe)),ie;const e=t.$$designSystem$$;if(e)return e;const n=tt.getOrCreateDOMContainer(t);if(n.has(oe,!1))return n.get(oe);{const e=new ae(t,n);return n.register(xt.instance(oe,e)),e}}});class ae{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>te.definitionCallbackOnly,null!==t&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,n=[],i=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(t,r,a){const s=function(t,e,n){return"string"==typeof t?{name:t,type:e,callback:n}:t}(t,r,a),{name:c,callback:l,baseClass:u}=s;let{type:h}=s,d=c,f=ee.get(d),p=!0;for(;f;){const t=i(d,h,f);switch(t){case te.ignoreDuplicate:return;case te.definitionCallbackOnly:p=!1,f=void 0;break;default:d=t,f=ee.get(d)}}p&&((ne.has(h)||h===Dt)&&(h=class extends h{}),ee.set(d,h),ne.set(h,d),u&&ne.set(u,d)),n.push(new se(e,d,h,o,l,p))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&Jt.registerRoot(this.designTokenRoot)),e.registerWithContext(r,...t);for(const t of n)t.callback(t),t.willDefine&&null!==t.definition&&t.definition.define();return this}}class se{constructor(t,e,n,i,o,r){this.container=t,this.name=e,this.type=n,this.shadowRootMode=i,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(t){Mt.define(this.name,t,this.container)}defineElement(t){this.definition=new B(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return re.tagFor(t)}}let ce=0;function le(t=""){return`${t}${ce++}`}var ue;!function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(ue||(ue={}));const he="ArrowDown",de="ArrowUp",fe="Enter",pe="Escape",ge="Home",ve="End",be="Tab";function me(...t){return t.every((t=>t instanceof HTMLElement))}let ye;class xe{}N([R({attribute:"aria-atomic"})],xe.prototype,"ariaAtomic",void 0),N([R({attribute:"aria-busy"})],xe.prototype,"ariaBusy",void 0),N([R({attribute:"aria-controls"})],xe.prototype,"ariaControls",void 0),N([R({attribute:"aria-current"})],xe.prototype,"ariaCurrent",void 0),N([R({attribute:"aria-describedby"})],xe.prototype,"ariaDescribedby",void 0),N([R({attribute:"aria-details"})],xe.prototype,"ariaDetails",void 0),N([R({attribute:"aria-disabled"})],xe.prototype,"ariaDisabled",void 0),N([R({attribute:"aria-errormessage"})],xe.prototype,"ariaErrormessage",void 0),N([R({attribute:"aria-flowto"})],xe.prototype,"ariaFlowto",void 0),N([R({attribute:"aria-haspopup"})],xe.prototype,"ariaHaspopup",void 0),N([R({attribute:"aria-hidden"})],xe.prototype,"ariaHidden",void 0),N([R({attribute:"aria-invalid"})],xe.prototype,"ariaInvalid",void 0),N([R({attribute:"aria-keyshortcuts"})],xe.prototype,"ariaKeyshortcuts",void 0),N([R({attribute:"aria-label"})],xe.prototype,"ariaLabel",void 0),N([R({attribute:"aria-labelledby"})],xe.prototype,"ariaLabelledby",void 0),N([R({attribute:"aria-live"})],xe.prototype,"ariaLive",void 0),N([R({attribute:"aria-owns"})],xe.prototype,"ariaOwns",void 0),N([R({attribute:"aria-relevant"})],xe.prototype,"ariaRelevant",void 0),N([R({attribute:"aria-roledescription"})],xe.prototype,"ariaRoledescription",void 0);class _e{constructor(){this.targetIndex=0}}class we extends _e{constructor(){super(...arguments),this.createPlaceholder=f.createInterpolationPlaceholder}}class Te extends _e{constructor(t,e,n){super(),this.name=t,this.behavior=e,this.options=n}createPlaceholder(t){return f.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function ke(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=v.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function Ce(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function Se(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Ae(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function $e(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Ee(t){f.setAttribute(this.target,this.targetName,t)}function Me(t){f.setBooleanAttribute(this.target,this.targetName,t)}function Oe(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function De(t){this.target[this.targetName]=t}function Pe(t){const e=this.classVersions||Object.create(null),n=this.target;let i=this.version||0;if(null!=t&&t.length){const o=t.split(/\s+/);for(let t=0,r=o.length;t<r;++t){const r=o[t];""!==r&&(e[r]=i,n.classList.add(r))}}if(this.classVersions=e,this.version=i+1,0!==i){i-=1;for(const t in e)e[t]===i&&n.classList.remove(t)}}class Re extends we{constructor(t){super(),this.binding=t,this.bind=ke,this.unbind=Se,this.updateTarget=Ee,this.isBindingVolatile=v.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=De,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,n)=>f.createHTML(t(e,n))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=Me;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=Ce,this.unbind=$e;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=Pe)}}targetAtContent(){this.updateTarget=Oe,this.unbind=Ae}createBehavior(t){return new Ie(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ie{constructor(t,e,n,i,o,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=n,this.bind=i,this.unbind=o,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){x.setEvent(t);const e=this.binding(this.source,this.context);x.setEvent(null),!0!==e&&t.preventDefault()}}let Le=null;class ze{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Le=this}static borrow(t){const e=Le||new ze;return e.directives=t,e.reset(),Le=null,e}}function Be(t){if(1===t.length)return t[0];let e;const n=t.length,i=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),o=new Re(((t,e)=>{let o="";for(let r=0;r<n;++r)o+=i[r](t,e);return o}));return o.targetName=e,o}const Ne=d.length;function Fe(t,e){const n=e.split(h);if(1===n.length)return null;const i=[];for(let e=0,o=n.length;e<o;++e){const o=n[e],r=o.indexOf(d);let a;if(-1===r)a=o;else{const e=parseInt(o.substring(0,r));i.push(t.directives[e]),a=o.substring(r+Ne)}""!==a&&i.push(a)}return i}function Xe(t,e,n=!1){const i=e.attributes;for(let o=0,r=i.length;o<r;++o){const a=i[o],s=a.value,c=Fe(t,s);let l=null;null===c?n&&(l=new Re((()=>s)),l.targetName=a.name):l=Be(c),null!==l&&(e.removeAttributeNode(a),o--,r--,t.addFactory(l))}}function Ve(t,e,n){const i=Fe(t,e.textContent);if(null!==i){let o=e;for(let r=0,a=i.length;r<a;++r){const a=i[r],s=0===r?e:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof a?s.textContent=a:(s.textContent=" ",t.captureContentBinding(a)),o=s,t.targetIndex++,s!==e&&n.nextNode()}t.targetIndex--}}const Ue=document.createRange();class He{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const n=t.parentNode;let i,o=this.firstChild;for(;o!==e;)i=o.nextSibling,n.insertBefore(o,t),o=i;n.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let n,i=this.firstChild;for(;i!==e;)n=i.nextSibling,t.appendChild(i),i=n;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let n,i=this.firstChild;for(;i!==e;)n=i.nextSibling,t.removeChild(i),i=n;t.removeChild(e);const o=this.behaviors,r=this.source;for(let t=0,e=o.length;t<e;++t)o[t].unbind(r)}bind(t,e){const n=this.behaviors;if(this.source!==t)if(null!==this.source){const i=this.source;this.source=t,this.context=e;for(let o=0,r=n.length;o<r;++o){const r=n[o];r.unbind(i),r.bind(t,e)}}else{this.source=t,this.context=e;for(let i=0,o=n.length;i<o;++i)n[i].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let n=0,i=t.length;n<i;++n)t[n].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){Ue.setStartBefore(t[0].firstChild),Ue.setEndAfter(t[t.length-1].lastChild),Ue.deleteContents();for(let e=0,n=t.length;e<n;++e){const n=t[e],i=n.behaviors,o=n.source;for(let t=0,e=i.length;t<e;++t)i[t].unbind(o)}}}}class je{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=f.createHTML(e);const n=t.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(t=n)}else t=e;const n=function(t,e){const n=t.content;document.adoptNode(n);const i=ze.borrow(e);Xe(i,t,!0);const o=i.behaviorFactories;i.reset();const r=f.createTemplateWalker(n);let a;for(;a=r.nextNode();)switch(i.targetIndex++,a.nodeType){case 1:Xe(i,a);break;case 3:Ve(i,a,r);break;case 8:f.isMarker(a)&&i.addFactory(e[f.extractDirectiveIndexFromMarker(a)])}let s=0;(f.isMarker(n.firstChild)||1===n.childNodes.length&&e.length)&&(n.insertBefore(document.createComment(""),n.firstChild),s=-1);const c=i.behaviorFactories;return i.release(),{fragment:n,viewBehaviorFactories:c,hostBehaviorFactories:o,targetOffset:s}}(t,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,i=new Array(this.behaviorCount),o=f.createTemplateWalker(e);let r=0,a=this.targetOffset,s=o.nextNode();for(let t=n.length;r<t;++r){const t=n[r],e=t.targetIndex;for(;null!==s;){if(a===e){i[r]=t.createBehavior(s);break}s=o.nextNode(),a++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let n=0,o=e.length;n<o;++n,++r)i[r]=e[n].createBehavior(t)}return new He(e,i)}render(t,e,n){"string"==typeof e&&(e=document.getElementById(e)),void 0===n&&(n=e);const i=this.create(n);return i.bind(t,_),i.appendTo(e),i}}const Ye=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function qe(t,...e){const n=[];let i="";for(let o=0,r=t.length-1;o<r;++o){const r=t[o];let a=e[o];if(i+=r,a instanceof je){const t=a;a=()=>t}if("function"==typeof a&&(a=new Re(a)),a instanceof we){const t=Ye.exec(r);null!==t&&(a.targetName=t[2])}a instanceof _e?(i+=a.createPlaceholder(n.length),n.push(a)):i+=a}return i+=t[t.length-1],new je(i,n)}class Ge{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function We(t){return new Te("fast-ref",Ge,t)}class Ze{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Ke=(t,e)=>qe`
    <span
        part="end"
        ${We("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${We("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Qe=(t,e)=>qe`
    <span
        part="start"
        ${We("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${We("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;qe`
    <span part="end" ${We("endContainer")}>
        <slot
            name="end"
            ${We("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,qe`
    <span part="start" ${We("startContainer")}>
        <slot
            name="start"
            ${We("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;function Je(t,...e){const n=M.locate(t);e.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((n=>{"constructor"!==n&&Object.defineProperty(t.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n))}));M.locate(e).forEach((t=>n.push(t)))}))}function tn(t){return me(t)&&("option"===t.getAttribute("role")||t instanceof HTMLOptionElement)}class en extends Dt{constructor(t,e,n,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),n&&(this.defaultSelected=n),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){this.ariaChecked="boolean"!=typeof e?null:e?"true":"false"}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return null!==(t=this.value)&&void 0!==t?t:this.text}get text(){var t,e;return null!==(e=null===(t=this.textContent)||void 0===t?void 0:t.replace(/\s+/g," ").trim())&&void 0!==e?e:""}set value(t){const e=`${null!=t?t:""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),v.notify(this,"value")}get value(){var t;return v.track(this,"value"),null!==(t=this._value)&&void 0!==t?t:this.text}get form(){return this.proxy?this.proxy.form:null}}N([b],en.prototype,"checked",void 0),N([b],en.prototype,"content",void 0),N([b],en.prototype,"defaultSelected",void 0),N([R({mode:"boolean"})],en.prototype,"disabled",void 0),N([R({attribute:"selected",mode:"boolean"})],en.prototype,"selectedAttribute",void 0),N([b],en.prototype,"selected",void 0),N([R({attribute:"value",mode:"fromView"})],en.prototype,"initialValue",void 0);class nn{}N([b],nn.prototype,"ariaChecked",void 0),N([b],nn.prototype,"ariaPosInSet",void 0),N([b],nn.prototype,"ariaSelected",void 0),N([b],nn.prototype,"ariaSetSize",void 0),Je(nn,xe),Je(en,Ze,nn);class on extends Dt{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return null!==(t=this.selectedOptions[0])&&void 0!==t?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((t=>t.disabled))}get length(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.length)&&void 0!==e?e:0}get options(){return v.track(this,"options"),this._options}set options(t){this._options=t,v.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&null!==t&&(t.focus(),requestAnimationFrame((()=>{t.scrollIntoView({block:"nearest"})})))}focusinHandler(t){this.shouldSkipFocus||t.target!==t.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter((t=>t.text.trim().match(e)))}getSelectableIndex(t=this.selectedIndex,e){const n=t>e?-1:t<e?1:0,i=t+n;let o=null;switch(n){case-1:o=this.options.reduceRight(((t,e,n)=>!t&&!e.disabled&&n<i?e:t),o);break;case 1:o=this.options.reduce(((t,e,n)=>!t&&!e.disabled&&n>i?e:t),o)}return this.options.indexOf(o)}handleChange(t,e){if("selected"===e)on.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions()}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),on.TYPE_AHEAD_TIMEOUT_MS),t.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case ge:t.shiftKey||(t.preventDefault(),this.selectFirstOption());break;case he:t.shiftKey||(t.preventDefault(),this.selectNextOption());break;case de:t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break;case ve:t.preventDefault(),this.selectLastOption();break;case be:return this.focusAndScrollOptionIntoView(),!0;case fe:case pe:return!0;case" ":if(this.typeaheadExpired)return!0;default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var n;if(this.hasSelectableOptions){if((null===(n=this.options[this.selectedIndex])||void 0===n?void 0:n.disabled)&&"number"==typeof t){const n=this.getSelectableIndex(t,e),i=n>-1?n:t;return this.selectedIndex=i,void(e===i&&this.selectedIndexChanged(e,i))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(t,e){var n;const i=e.filter(on.slottedOptionFilter);null===(n=this.options)||void 0===n||n.forEach((t=>{const e=v.getNotifier(t);e.unsubscribe(this,"selected"),t.selected=i.includes(t),e.subscribe(this,"selected")}))}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=null!==(e=null===(t=this.options)||void 0===t?void 0:t.findIndex((t=>!t.disabled)))&&void 0!==e?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(t,e){let n=t.length;for(;n--;)if(e(t[n],n,t))return n;return-1}(this.options,(t=>!t.disabled)))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=null!==(e=null===(t=this.options)||void 0===t?void 0:t.findIndex((t=>t.defaultSelected)))&&void 0!==e?e:-1}setSelectedOptions(){var t,e,n;(null===(t=this.options)||void 0===t?void 0:t.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(n=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.id)&&void 0!==n?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce(((t,e)=>(tn(e)&&t.push(e),t)),[]);const n=`${this.options.length}`;this.options.forEach(((t,e)=>{t.id||(t.id=le("option-")),t.ariaPosInSet=`${e+1}`,t.ariaSetSize=n})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const t=this.getTypeaheadMatches();if(t.length){const e=this.options.indexOf(t[0]);e>-1&&(this.selectedIndex=e)}this.typeaheadExpired=!1}}}on.slottedOptionFilter=t=>tn(t)&&!t.hidden,on.TYPE_AHEAD_TIMEOUT_MS=1e3,N([R({mode:"boolean"})],on.prototype,"disabled",void 0),N([b],on.prototype,"selectedIndex",void 0),N([b],on.prototype,"selectedOptions",void 0),N([b],on.prototype,"slottedOptions",void 0),N([b],on.prototype,"typeaheadBuffer",void 0);class rn{}function an(t,e,n=0){return[e,n]=[e,n].sort(((t,e)=>t-e)),e<=t&&t<n}N([b],rn.prototype,"ariaActiveDescendant",void 0),N([b],rn.prototype,"ariaDisabled",void 0),N([b],rn.prototype,"ariaExpanded",void 0),N([b],rn.prototype,"ariaMultiSelectable",void 0),Je(rn,xe),Je(on,rn);class sn extends on{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return null===(t=this.options)||void 0===t?void 0:t.filter((t=>t.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var n,i;this.ariaActiveDescendant=null!==(i=null===(n=this.options[e])||void 0===n?void 0:n.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((t,e)=>{t.checked=an(e,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((t,e)=>{t.checked=an(e,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((t,e)=>{t.checked=an(e,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((t,e)=>{t.checked=an(e,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const n=null===(e=t.target)||void 0===e?void 0:e.closest("[role=option]");return n&&!n.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);this.shouldSkipFocus||t.target!==t.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:n}=t;switch(this.shouldSkipFocus=!1,e){case ge:return void this.checkFirstOption(n);case he:return void this.checkNextOption(n);case de:return void this.checkPreviousOption(n);case ve:return void this.checkLastOption(n);case be:return this.focusAndScrollOptionIntoView(),!0;case pe:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case" ":if(t.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var n;this.ariaMultiSelectable=e?"true":null,null===(n=this.options)||void 0===n||n.forEach((t=>{t.checked=!e&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((t=>t.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(t,e){var n;const i=Math.max(0,parseInt(null!==(n=null==e?void 0:e.toFixed())&&void 0!==n?n:"",10));i!==e&&f.queueUpdate((()=>{this.size=i}))}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter((t=>!t.disabled)),e=!t.every((t=>t.selected));t.forEach((t=>t.selected=e)),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(this.multiple){if(this.$fastController.isConnected){const t=this.getTypeaheadMatches(),e=this.options.indexOf(t[0]);e>-1&&(this.activeIndex=e,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(t,e)}uncheckAllOptions(t=!1){this.options.forEach((t=>t.checked=!this.multiple&&void 0)),t||(this.rangeStartIndex=-1)}}N([b],sn.prototype,"activeIndex",void 0),N([R({mode:"boolean"})],sn.prototype,"multiple",void 0),N([R({converter:D})],sn.prototype,"size",void 0);const cn="form-associated-proxy",ln="ElementInternals",un=ln in window&&"setFormValue"in window[ln].prototype,hn=new WeakMap;function dn(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return un}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=t?e.concat(Array.from(t)):e;return Object.freeze(n)}return r}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),f.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),f.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!un)return null;let t=hn.get(this);return t||(t=this.attachInternals(),hn.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,n){this.elementInternals?this.elementInternals.setValidity(t,e,n):"string"==typeof e&&this.proxy.setCustomValidity(e)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",cn),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",cn)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){if(t.key===fe)if(this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}stopPropagation(t){t.stopPropagation()}};return R({mode:"boolean"})(e.prototype,"disabled"),R({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),R({attribute:"current-value"})(e.prototype,"currentValue"),R(e.prototype,"name"),R({mode:"boolean"})(e.prototype,"required"),b(e.prototype,"value"),e}class fn extends sn{}class pn extends(dn(fn)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}const gn="above",vn="below";class bn extends pn{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=le("listbox-"),this.maxHeight=0}openChanged(t,e){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void f.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return v.track(this,"value"),this._value}set value(t){var e,n,i,o,r,a,s;const c=`${this._value}`;if(null===(e=this._options)||void 0===e?void 0:e.length){const e=this._options.findIndex((e=>e.value===t)),c=null!==(i=null===(n=this._options[this.selectedIndex])||void 0===n?void 0:n.value)&&void 0!==i?i:null,l=null!==(r=null===(o=this._options[e])||void 0===o?void 0:o.value)&&void 0!==r?r:null;-1!==e&&c===l||(t="",this.selectedIndex=e),t=null!==(s=null===(a=this.firstSelectedOption)||void 0===a?void 0:a.value)&&void 0!==s?s:t}c!==t&&(this._value=t,super.valueChanged(c,t),v.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,n;this.$fastController.isConnected&&(this.value=null!==(n=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.value)&&void 0!==n?n:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),e=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>e?gn:vn,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===gn?~~t.top:~~e}get displayValue(){var t,e;return v.track(this,"displayValue"),null!==(e=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.text)&&void 0!==e?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;const n=t.relatedTarget;this.isSameNode(n)?this.focus():(null===(e=this.options)||void 0===e?void 0:e.includes(n))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),"value"===e&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach((t=>{v.getNotifier(t).unsubscribe(this,"value")})),super.slottedOptionsChanged(t,e),this.options.forEach((t=>{v.getNotifier(t).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=(null===(e=this.listbox)||void 0===e?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var n;super.selectedOptionsChanged(t,e),null===(n=this.options)||void 0===n||n.forEach(((t,e)=>{var n;const i=null===(n=this.proxy)||void 0===n?void 0:n.options.item(e);i&&(i.selected=t.selected)}))}setDefaultSelectedOption(){var t;const e=null!==(t=this.options)&&void 0!==t?t:Array.from(this.children).filter(on.slottedOptionFilter),n=null==e?void 0:e.findIndex((t=>t.hasAttribute("selected")||t.selected||t.value===this.value));this.selectedIndex=-1===n?0:n}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)})))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case" ":t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case ge:case ve:t.preventDefault();break;case fe:t.preventDefault(),this.open=!this.open;break;case pe:this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break;case be:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===he||e===de)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&v.notify(this,"displayValue")}}N([R({attribute:"open",mode:"boolean"})],bn.prototype,"open",void 0),N([m],bn.prototype,"collapsible",null),N([b],bn.prototype,"control",void 0),N([R({attribute:"position"})],bn.prototype,"positionAttribute",void 0),N([b],bn.prototype,"position",void 0),N([b],bn.prototype,"maxHeight",void 0);class mn{}N([b],mn.prototype,"ariaControls",void 0),Je(mn,rn),Je(bn,Ze,mn);const yn=t=>"function"==typeof t,xn=()=>null;function _n(t){return void 0===t?xn:yn(t)?t:()=>t}function wn(t,e,n){const i=yn(t)?t:()=>t,o=_n(e),r=_n(n);return(t,e)=>i(t,e)?o(t,e):r(t,e)}class Tn{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=v.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(r),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class kn extends Tn{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Cn(t){return"string"==typeof t&&(t={property:t}),new Te("fast-slotted",kn,t)}function Sn(t,e){const n=[];let i="";const o=[];for(let r=0,a=t.length-1;r<a;++r){i+=t[r];let a=e[r];if(a instanceof It){const t=a.createBehavior();a=a.createCSS(),t&&o.push(t)}a instanceof w||a instanceof CSSStyleSheet?(""!==i.trim()&&(n.push(i),i=""),n.push(a)):i+=a}return i+=t[t.length-1],""!==i.trim()&&n.push(i),{styles:n,behaviors:o}}function An(t,...e){const{styles:n,behaviors:i}=Sn(t,e),o=w.create(n);return i.length&&o.withBehaviors(...i),o}function $n(t){return`:host([hidden]){display:none}:host{display:${t}}`}const En=function(){if("boolean"==typeof ye)return ye;if("undefined"==typeof window||!window.document||!window.document.createElement)return ye=!1,ye;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),ye=!0}catch(t){ye=!1}finally{document.head.removeChild(t)}return ye}()?"focus-visible":"focus",Mn="not-allowed";function On(t){const e=getComputedStyle(document.body),n=document.querySelector("body");if(n){const i=n.getAttribute("data-vscode-theme-kind");for(const[o,r]of t){let t=e.getPropertyValue(o).toString();if("vscode-high-contrast"===i)0===t.length&&r.name.includes("background")&&(t="transparent"),"button-icon-hover-background"===r.name&&(t="transparent");else if("vscode-high-contrast-light"===i){if(0===t.length&&r.name.includes("background"))switch(r.name){case"button-primary-hover-background":t="#0F4A85";break;case"button-secondary-hover-background":case"button-icon-hover-background":t="transparent"}}else"contrast-active-border"===r.name&&(t="transparent");r.setValueFor(n,t)}}}const Dn=new Map;let Pn=!1;function Rn(t,e){const n=Jt.create(t);if(e){if(e.includes("--fake-vscode-token")){e=`${e}-${"id"+Math.random().toString(16).slice(2)}`}Dn.set(e,n)}return Pn||(!function(t){window.addEventListener("load",(()=>{new MutationObserver((()=>{On(t)})).observe(document.body,{attributes:!0,attributeFilter:["class"]}),On(t)}))}(Dn),Pn=!0),n}Rn("background","--vscode-editor-background").withDefault("#1e1e1e");const In=Rn("border-width").withDefault(1),Ln=(Rn("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),Rn("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),Rn("corner-radius").withDefault(0)),zn=Rn("design-unit").withDefault(4),Bn=Rn("disabled-opacity").withDefault(.4),Nn=Rn("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Fn=Rn("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),Xn=(Rn("font-weight","--vscode-font-weight").withDefault("400"),Rn("foreground","--vscode-foreground").withDefault("#cccccc")),Vn=Rn("input-height").withDefault("26"),Un=Rn("input-min-width").withDefault("100px"),Hn=Rn("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),jn=Rn("type-ramp-base-line-height").withDefault("normal"),Yn=(Rn("type-ramp-minus1-font-size").withDefault("11px"),Rn("type-ramp-minus1-line-height").withDefault("16px"),Rn("type-ramp-minus2-font-size").withDefault("9px"),Rn("type-ramp-minus2-line-height").withDefault("16px"),Rn("type-ramp-plus1-font-size").withDefault("16px"),Rn("type-ramp-plus1-line-height").withDefault("24px"),Rn("scrollbarWidth").withDefault("10px"),Rn("scrollbarHeight").withDefault("10px"),Rn("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Rn("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Rn("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Rn("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Rn("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Rn("button-border","--vscode-button-border").withDefault("transparent"),Rn("button-icon-background").withDefault("transparent"),Rn("button-icon-corner-radius").withDefault("5px"),Rn("button-icon-outline-offset").withDefault(0),Rn("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Rn("button-icon-padding").withDefault("3px"),Rn("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Rn("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Rn("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Rn("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Rn("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Rn("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Rn("button-padding-horizontal").withDefault("11px"),Rn("button-padding-vertical").withDefault("4px"),Rn("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Rn("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Rn("checkbox-corner-radius").withDefault(3),Rn("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),Rn("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771")),qn=Rn("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Gn=(Rn("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Rn("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Rn("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c")),Wn=Rn("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),Zn=(Rn("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),Rn("dropdown-list-max-height").withDefault("200px"));Rn("input-background","--vscode-input-background").withDefault("#3c3c3c"),Rn("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),Rn("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Rn("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Rn("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Rn("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Rn("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Rn("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Rn("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),Rn("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),Rn("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Rn("tag-corner-radius").withDefault("2px");const Kn=class extends bn{}.compose({baseName:"dropdown",template:(t,e)=>qe`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @focusin="${(t,e)=>t.focusinHandler(e.event)}"
        @focusout="${(t,e)=>t.focusoutHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @mousedown="${(t,e)=>t.mousedownHandler(e.event)}"
    >
        ${wn((t=>t.collapsible),qe`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${We("control")}
                >
                    ${Qe(0,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Ke(0,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!!t.collapsible&&!t.open}"
            ${We("listbox")}
        >
            <slot
                ${Cn({filter:on.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:(t,e)=>An`
	${$n("inline-flex")} :host {
		background: ${Gn};
		box-sizing: border-box;
		color: ${Xn};
		contain: contents;
		font-family: ${Fn};
		height: calc(${Vn} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Un};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${In} * 1px) solid ${Wn};
		border-radius: calc(${Ln} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Hn};
		line-height: ${jn};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Gn};
		border: calc(${In} * 1px) solid ${Nn};
		border-radius: calc(${Ln} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Zn};
		padding: 0 0 calc(${zn} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${En}) .control {
		border-color: ${Nn};
	}
	:host(:not([disabled]):hover) {
		background: ${Gn};
		border-color: ${Wn};
	}
	:host(:${En}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Yn};
		border: calc(${In} * 1px) solid ${Nn};
		color: ${qn};
	}
	:host([disabled]) {
		cursor: ${Mn};
		opacity: ${Bn};
	}
	:host([disabled]) .control {
		cursor: ${Mn};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Gn};
		color: ${Xn};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${Nn};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${Nn};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Vn} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Vn} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${zn} * 4px);
		min-width: calc(${zn} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`,indicator:'\n\t\t<svg \n\t\t\tclass="select-indicator"\n\t\t\tpart="select-indicator"\n\t\t\twidth="16" \n\t\t\theight="16" \n\t\t\tviewBox="0 0 16 16" \n\t\t\txmlns="http://www.w3.org/2000/svg" \n\t\t\tfill="currentColor"\n\t\t>\n\t\t\t<path \n\t\t\t\tfill-rule="evenodd" \n\t\t\t\tclip-rule="evenodd" \n\t\t\t\td="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"\n\t\t\t/>\n\t\t</svg>\n\t'});const Qn=class extends en{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}.compose({baseName:"option",template:(t,e)=>qe`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Qe(0,e)}
        <span class="content" part="content">
            <slot ${Cn("content")}></slot>
        </span>
        ${Ke(0,e)}
    </template>
`,styles:(t,e)=>An`
	${$n("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${Ln};
		border: calc(${In} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${Xn};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Hn};
		line-height: ${jn};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${zn} / 2) * 1px)
			calc((${zn} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${En}) {
		border-color: ${Nn};
		background: ${Yn};
		color: ${Xn};
	}
	:host([aria-selected='true']) {
		background: ${Yn};
		border: calc(${In} * 1px) solid ${Nn};
		color: ${qn};
	}
	:host(:active) {
		background: ${Yn};
		color: ${qn};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Yn};
		border: calc(${In} * 1px) solid ${Nn};
		color: ${qn};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Yn};
		color: ${Xn};
	}
	:host([disabled]) {
		cursor: ${Mn};
		opacity: ${Bn};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`});class Jn{constructor(t,e=!1){this.method=t,this.reset=e}}class ti extends Jn{}class ei extends Jn{}function ni(t,e,n){t.method===e.method&&n(e.params,t)}const ii=new ti("webview/ready"),oi=new ti("webview/focus");new ti("command/execute"),new ti("configuration/preview"),new ti("configuration/update"),new ei("configuration/didChange"),new ei("configuration/didPreview"),new ei("webview/didOpenAnchor");const ri=new ei("timeline/didChange"),ai=new ti("timeline/point/open"),si=new ti("timeline/period/update");function ci(t,e){let n,i,o,r,a;function s(t){const n=t-(i??0);return null==i||n>=e||n<0}function c(){const t=Date.now();if(s(t))l();else{a=setTimeout(c,e-(t-(i??0)))}}function l(){return a=void 0,n?function(){const e=n,i=o;return n=o=void 0,r=t.apply(i,e),r}():(n=o=void 0,r)}function u(...t){const l=Date.now(),u=s(l);return n=t,o=this,i=l,u&&null==a?(a=setTimeout(c,e),r):(null==a&&(a=setTimeout(c,e)),r)}return u.cancel=function(){null!=a&&clearTimeout(a),n=i=o=a=void 0},u.flush=function(){return null!=a?l():r},u.pending=function(){return null!=a},u}const li="";const ui=new class{constructor(){this._isDebugging=!1,this.level=0,this._logLevel="off"}configure(t,e,n=!1){this.provider=t,this._isDebugging=n,this.logLevel=e}enabled(t){return this.level>=hi(t)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(t){this._logLevel=t,this.level=hi(this._logLevel),"off"===t?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(t,...e){if(this.level<4&&!this.isDebugging)return;let n;"string"==typeof t?n=t:(n=e.shift(),null!=t&&(n=`${t.prefix} ${n??li}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${n??li}${this.toLoggableParams(!0,e)}`)}error(t,e,...n){if(this.level<1&&!this.isDebugging)return;let i;if(i=null==e||"string"==typeof e?e:`${e.prefix} ${n.shift()??li}`,null==i){const e=t instanceof Error?t.stack:void 0;if(e){const t=/.*\s*?at\s(.+?)\s/.exec(e);null!=t&&(i=t[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${i??li}${this.toLoggableParams(!1,n)}${null!=t?`\n${String(t)}`:""}`)}log(t,...e){if(this.level<3&&!this.isDebugging)return;let n;"string"==typeof t?n=t:(n=e.shift(),null!=t&&(n=`${t.prefix} ${n??li}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${n??li}${this.toLoggableParams(!1,e)}`)}warn(t,...e){if(this.level<2&&!this.isDebugging)return;let n;"string"==typeof t?n=t:(n=e.shift(),null!=t&&(n=`${t.prefix} ${n??li}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${n??li}${this.toLoggableParams(!1,e)}`)}showOutputChannel(t){this.output?.show?.(t)}toLoggable(t,e){if("object"!=typeof t)return String(t);if(Array.isArray(t))return`[${t.map((t=>this.toLoggable(t,e))).join(", ")}]`;const n=this.provider.toLoggable?.(t);if(null!=n)return n;try{return JSON.stringify(t,e)}catch{return"<error>"}}toLoggableParams(t,e){if(0===e.length||t&&this.level<4&&!this.isDebugging)return li;const n=e.map((t=>this.toLoggable(t))).join(", ");return 0!==n.length?` — ${n}`:li}};function hi(t){switch(t){case"off":default:return 0;case"error":return 1;case"warn":return 2;case"info":return 3;case"debug":return 4}}var di,fi;(fi=di||(di={})).on=function(t,e,n,i){let o=!1;if("string"==typeof t){const r=function(e){const i=e?.target?.closest(t);null!=i&&n(e,i)};return document.addEventListener(e,r,i??!0),{dispose:()=>{o||(o=!0,document.removeEventListener(e,r,i??!0))}}}const r=function(t){n(t,this)};return t.addEventListener(e,r,i??!1),{dispose:()=>{o||(o=!0,t.removeEventListener(e,r,i??!1))}}},fi.insertTemplate=function(t,e,n){const i=document.getElementById(t);if(e.replaceChildren(i?.content.cloneNode(!0)),e.className=i.className,null!=n?.visible){const t=e.querySelectorAll("[data-visible]");for(const e of t){const t=e.dataset.visible;t&&(n.visible[t]?e.style.display="initial":e.style.display="none")}}if(null!=n?.bindings){const t=e.querySelectorAll("[data-bind]");for(const e of t){const t=e.dataset.bind;if(!t)continue;const i=n.bindings[t];null!=i&&(e.textContent=String(i))}}},fi.resetSlot=function(t){t.replaceChildren(),t.className=""};var pi=(t=>(t[t.Hash=35]="Hash",t[t.Slash=47]="Slash",t[t.Digit0=48]="Digit0",t[t.Digit1=49]="Digit1",t[t.Digit2=50]="Digit2",t[t.Digit3=51]="Digit3",t[t.Digit4=52]="Digit4",t[t.Digit5=53]="Digit5",t[t.Digit6=54]="Digit6",t[t.Digit7=55]="Digit7",t[t.Digit8=56]="Digit8",t[t.Digit9=57]="Digit9",t[t.Backslash=92]="Backslash",t[t.A=65]="A",t[t.B=66]="B",t[t.C=67]="C",t[t.D=68]="D",t[t.E=69]="E",t[t.F=70]="F",t[t.Z=90]="Z",t[t.a=97]="a",t[t.b=98]="b",t[t.c=99]="c",t[t.d=100]="d",t[t.e=101]="e",t[t.f=102]="f",t[t.z=122]="z",t))(pi||{});function gi(t,e){const n=t+e,i=e<0?n<0?0:n:n>255?255:n;return Math.round(i)}function vi(t,e){return bi(t,-e)}function bi(t,e){const n=function(t){const e=Mi(t);return null==e?null:[e.rgba.r,e.rgba.g,e.rgba.b,e.rgba.a]}(t);if(null==n)return t;const[i,o,r,a]=n,s=255*e/100;return`rgba(${gi(i,s)}, ${gi(o,s)}, ${gi(r,s)}, ${a})`}function mi(t,e){const n=Ci.from(t);return null==n?t:n.transparent(e/100).toString()}function yi(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}class xi{constructor(t,e,n,i=1){this._rgbaBrand=void 0,this.r=0|Math.min(255,Math.max(0,t)),this.g=0|Math.min(255,Math.max(0,e)),this.b=0|Math.min(255,Math.max(0,n)),this.a=yi(Math.max(Math.min(1,i),0),3)}static equals(t,e){return t.r===e.r&&t.g===e.g&&t.b===e.b&&t.a===e.a}}class _i{constructor(t,e,n,i){this._hslaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=yi(Math.max(Math.min(1,e),0),3),this.l=yi(Math.max(Math.min(1,n),0),3),this.a=yi(Math.max(Math.min(1,i),0),3)}static equals(t,e){return t.h===e.h&&t.s===e.s&&t.l===e.l&&t.a===e.a}static fromRGBA(t){const e=t.r/255,n=t.g/255,i=t.b/255,o=t.a,r=Math.max(e,n,i),a=Math.min(e,n,i);let s=0,c=0;const l=(a+r)/2,u=r-a;if(u>0){switch(c=Math.min(l<=.5?u/(2*l):u/(2-2*l),1),r){case e:s=(n-i)/u+(n<i?6:0);break;case n:s=(i-e)/u+2;break;case i:s=(e-n)/u+4}s*=60,s=Math.round(s)}return new _i(s,c,l,o)}static _hue2rgb(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}static toRGBA(t){const e=t.h/360,{s:n,l:i,a:o}=t;let r,a,s;if(0===n)r=a=s=i;else{const t=i<.5?i*(1+n):i+n-i*n,o=2*i-t;r=_i._hue2rgb(o,t,e+1/3),a=_i._hue2rgb(o,t,e),s=_i._hue2rgb(o,t,e-1/3)}return new xi(Math.round(255*r),Math.round(255*a),Math.round(255*s),o)}}class wi{constructor(t,e,n,i){this._hsvaBrand=void 0,this.h=0|Math.max(Math.min(360,t),0),this.s=yi(Math.max(Math.min(1,e),0),3),this.v=yi(Math.max(Math.min(1,n),0),3),this.a=yi(Math.max(Math.min(1,i),0),3)}static equals(t,e){return t.h===e.h&&t.s===e.s&&t.v===e.v&&t.a===e.a}static fromRGBA(t){const e=t.r/255,n=t.g/255,i=t.b/255,o=Math.max(e,n,i),r=o-Math.min(e,n,i),a=0===o?0:r/o;let s;return s=0===r?0:o===e?((n-i)/r%6+6)%6:o===n?(i-e)/r+2:(e-n)/r+4,new wi(Math.round(60*s),a,o,t.a)}static toRGBA(t){const{h:e,s:n,v:i,a:o}=t,r=i*n,a=r*(1-Math.abs(e/60%2-1)),s=i-r;let[c,l,u]=[0,0,0];return e<60?(c=r,l=a):e<120?(c=a,l=r):e<180?(l=r,u=a):e<240?(l=a,u=r):e<300?(c=a,u=r):e<=360&&(c=r,u=a),c=Math.round(255*(c+s)),l=Math.round(255*(l+s)),u=Math.round(255*(u+s)),new xi(c,l,u,o)}}function Ti(t,e){return e.getPropertyValue(t).trim()}const ki=class t{static from(e){return e instanceof t?e:Mi(e)||t.red}static fromCssVariable(e,n){return Mi(Ti(e,n))||t.red}static fromHex(e){return Oi(e)||t.red}static equals(t,e){return!t&&!e||!(!t||!e)&&t.equals(e)}get hsla(){return this._hsla?this._hsla:_i.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:wi.fromRGBA(this.rgba)}constructor(t){if(!t)throw new Error("Color needs a value");if(t instanceof xi)this.rgba=t;else if(t instanceof _i)this._hsla=t,this.rgba=_i.toRGBA(t);else{if(!(t instanceof wi))throw new Error("Invalid color ctor argument");this._hsva=t,this.rgba=wi.toRGBA(t)}}equals(t){return null!=t&&(Boolean(t)&&xi.equals(this.rgba,t.rgba)&&_i.equals(this.hsla,t.hsla)&&wi.equals(this.hsva,t.hsva))}getRelativeLuminance(){return yi(.2126*t._relativeLuminanceForComponent(this.rgba.r)+.7152*t._relativeLuminanceForComponent(this.rgba.g)+.0722*t._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(t){const e=t/255;return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}luminance(t){return function(t,e){if(0===e)return new Ci(new xi(0,0,0,t.rgba.a));if(1===e)return new Ci(new xi(255,255,255,t.rgba.a));const n=t.getRelativeLuminance();let i=20;const o=(t,n)=>{const r=t.mix(n,.5),a=r.getRelativeLuminance();return Math.abs(e-a)<1e-7||!i--?r:a>e?o(t,r):o(r,n)},r=(n>e?o(Ci.black,t):o(t,Ci.white)).rgba;return new Ci(new xi(r.r,r.g,r.b,t.rgba.a))}(this,t)}getContrastRatio(t){const e=this.getRelativeLuminance(),n=t.getRelativeLuminance();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(t){return this.getRelativeLuminance()>t.getRelativeLuminance()}isDarkerThan(t){return this.getRelativeLuminance()<t.getRelativeLuminance()}lighten(e){return new t(new _i(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new t(new _i(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:n,g:i,b:o,a:r}=this.rgba;return new t(new xi(n,i,o,r*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new t(new xi(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const n=e.rgba,i=this.rgba.a,o=n.a,r=i+o*(1-i);if(r<1e-6)return t.transparent;const a=this.rgba.r*i/r+n.r*o*(1-i)/r,s=this.rgba.g*i/r+n.g*o*(1-i)/r,c=this.rgba.b*i/r+n.b*o*(1-i)/r;return new t(new xi(a,s,c,r))}mix(t,e){return function(t,e,n){const i=t.rgba,o=e.rgba;return new Ci(new xi(i.r+n*(o.r-i.r),i.g+n*(o.g-i.g),i.b+n*(o.b-i.b),i.a+n*(o.a-i.a)))}(this,t,e)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:n,g:i,b:o,a:r}=this.rgba;return new t(new xi(e.rgba.r-r*(e.rgba.r-n),e.rgba.g-r*(e.rgba.g-i),e.rgba.b-r*(e.rgba.b-o),1))}flatten(...e){const n=e.reduceRight(((e,n)=>t._flatten(n,e)));return t._flatten(this,n)}static _flatten(e,n){const i=1-e.rgba.a;return new t(new xi(i*n.rgba.r+e.rgba.a*e.rgba.r,i*n.rgba.g+e.rgba.a*e.rgba.g,i*n.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(t){if(t.isOpaque())return $i(t);return Si(t)}(this)),this._toString}static getLighterColor(t,e,n){if(t.isLighterThan(e))return t;n=n||.5;const i=t.getRelativeLuminance(),o=e.getRelativeLuminance();return n=n*(o-i)/o,t.lighten(n)}static getDarkerColor(t,e,n){if(t.isDarkerThan(e))return t;n=n||.5;const i=t.getRelativeLuminance();return n=n*(i-e.getRelativeLuminance())/i,t.darken(n)}};ki.white=new ki(new xi(255,255,255,1)),ki.black=new ki(new xi(0,0,0,1)),ki.red=new ki(new xi(255,0,0,1)),ki.blue=new ki(new xi(0,0,255,1)),ki.green=new ki(new xi(0,255,0,1)),ki.cyan=new ki(new xi(0,255,255,1)),ki.lightgrey=new ki(new xi(211,211,211,1)),ki.transparent=new ki(new xi(0,0,0,0));let Ci=ki;function Si(t){return`rgba(${t.rgba.r}, ${t.rgba.g}, ${t.rgba.b}, ${Number(t.rgba.a.toFixed(2))})`}function Ai(t){const e=t.toString(16);return 2!==e.length?`0${e}`:e}function $i(t){return`#${Ai(t.rgba.r)}${Ai(t.rgba.g)}${Ai(t.rgba.b)}`}const Ei=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function Mi(t){if(0===(t=t.trim()).length)return null;if(t.charCodeAt(0)===pi.Hash)return Oi(t);const e=Ei.exec(t);if(null==e)return null;const n=e[1];let i;switch(n){case"rgb":case"hsl":i=[parseInt(e[2],10),parseInt(e[3],10),parseInt(e[4],10),1];break;case"rgba":case"hsla":i=[parseInt(e[2],10),parseInt(e[3],10),parseInt(e[4],10),parseFloat(e[5])];break;default:return null}switch(n){case"rgb":case"rgba":return new Ci(new xi(i[0],i[1],i[2],i[3]));case"hsl":case"hsla":return new Ci(new _i(i[0],i[1],i[2],i[3]))}return Ci.red}function Oi(t){const e=(t=t.trim()).length;if(0===e)return null;if(t.charCodeAt(0)!==pi.Hash)return null;switch(e){case 7:{const e=16*Di(t.charCodeAt(1))+Di(t.charCodeAt(2)),n=16*Di(t.charCodeAt(3))+Di(t.charCodeAt(4)),i=16*Di(t.charCodeAt(5))+Di(t.charCodeAt(6));return new Ci(new xi(e,n,i,1))}case 9:{const e=16*Di(t.charCodeAt(1))+Di(t.charCodeAt(2)),n=16*Di(t.charCodeAt(3))+Di(t.charCodeAt(4)),i=16*Di(t.charCodeAt(5))+Di(t.charCodeAt(6)),o=16*Di(t.charCodeAt(7))+Di(t.charCodeAt(8));return new Ci(new xi(e,n,i,o/255))}case 4:{const e=Di(t.charCodeAt(1)),n=Di(t.charCodeAt(2)),i=Di(t.charCodeAt(3));return new Ci(new xi(16*e+e,16*n+n,16*i+i))}case 5:{const e=Di(t.charCodeAt(1)),n=Di(t.charCodeAt(2)),i=Di(t.charCodeAt(3)),o=Di(t.charCodeAt(4));return new Ci(new xi(16*e+e,16*n+n,16*i+i,(16*o+o)/255))}default:return null}}function Di(t){switch(t){case pi.Digit0:return 0;case pi.Digit1:return 1;case pi.Digit2:return 2;case pi.Digit3:return 3;case pi.Digit4:return 4;case pi.Digit5:return 5;case pi.Digit6:return 6;case pi.Digit7:return 7;case pi.Digit8:return 8;case pi.Digit9:return 9;case pi.a:case pi.A:return 10;case pi.b:case pi.B:return 11;case pi.c:case pi.C:return 12;case pi.d:case pi.D:return 13;case pi.e:case pi.E:return 14;case pi.f:case pi.F:return 15}return 0}const Pi=class t{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,n,i)=>{null==this.listeners&&(this.listeners=new Bi);const o=this.listeners.push(null==n?e:[e,n]),r={dispose:()=>{r.dispose=t._noop,this._disposed||o()}};return Array.isArray(i)&&i.push(r),r}),this._event}fire(t){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new Bi);for(let e=this.listeners.iterator(),n=e.next();!n.done;n=e.next())this._deliveryQueue.push([n.value,t]);for(;this._deliveryQueue.size>0;){const[t,e]=this._deliveryQueue.shift();try{"function"==typeof t?t(e):t[0].call(t[1],e)}catch(t){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};Pi._noop=function(){};let Ri=Pi;const Ii={done:!0,value:void 0},Li=class t{constructor(e){this.element=e,this.next=t.Undefined,this.prev=t.Undefined}};Li.Undefined=new Li(void 0);let zi=Li;class Bi{constructor(){this._first=zi.Undefined,this._last=zi.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===zi.Undefined}clear(){this._first=zi.Undefined,this._last=zi.Undefined,this._size=0}unshift(t){return this._insert(t,!1)}push(t){return this._insert(t,!0)}_insert(t,e){const n=new zi(t);if(this._first===zi.Undefined)this._first=n,this._last=n;else if(e){const t=this._last;this._last=n,n.prev=t,t.next=n}else{const t=this._first;this._first=n,n.next=t,t.prev=n}this._size+=1;let i=!1;return()=>{i||(i=!0,this._remove(n))}}shift(){if(this._first===zi.Undefined)return;const t=this._first.element;return this._remove(this._first),t}pop(){if(this._last===zi.Undefined)return;const t=this._last.element;return this._remove(this._last),t}_remove(t){if(t.prev!==zi.Undefined&&t.next!==zi.Undefined){const e=t.prev;e.next=t.next,t.next.prev=e}else t.prev===zi.Undefined&&t.next===zi.Undefined?(this._first=zi.Undefined,this._last=zi.Undefined):t.next===zi.Undefined?(this._last=this._last.prev,this._last.next=zi.Undefined):t.prev===zi.Undefined&&(this._first=this._first.next,this._first.prev=zi.Undefined);this._size-=1}iterator(){let t,e=this._first;return{next:function(){return e===zi.Undefined?Ii:(null==t?t={done:!1,value:e.element}:t.value=e.element,e=e.next,t)}}}toArray(){const t=[];for(let e=this._first;e!==zi.Undefined;e=e.next)t.push(e.element);return t}}const Ni=new Ri,Fi=Ni.event;function Xi(t){const e=document.documentElement,n=window.getComputedStyle(e),i=document.body.classList,o=i.contains("vscode-light")||i.contains("vscode-high-contrast-light"),r=i.contains("vscode-high-contrast")||i.contains("vscode-high-contrast-light"),a=e.style,s=Ti("--vscode-editor-background",n);let c=Ti("--vscode-editor-foreground",n);c||(c=Ti("--vscode-foreground",n));let l=Ti("--color-background",n);return a.setProperty("--color-background--lighten-05",bi(l,5)),a.setProperty("--color-background--darken-05",vi(l,5)),a.setProperty("--color-background--lighten-075",bi(l,7.5)),a.setProperty("--color-background--darken-075",vi(l,7.5)),a.setProperty("--color-background--lighten-10",bi(l,10)),a.setProperty("--color-background--darken-10",vi(l,10)),a.setProperty("--color-background--lighten-15",bi(l,15)),a.setProperty("--color-background--darken-15",vi(l,15)),a.setProperty("--color-background--lighten-30",bi(l,30)),a.setProperty("--color-background--darken-30",vi(l,30)),a.setProperty("--color-background--lighten-50",bi(l,50)),a.setProperty("--color-background--darken-50",vi(l,50)),l=Ti("--color-button-background",n),a.setProperty("--color-button-background--darken-30",vi(l,30)),l=Ti("--color-highlight",n),a.setProperty("--color-highlight--75",mi(l,75)),a.setProperty("--color-highlight--50",mi(l,50)),a.setProperty("--color-highlight--25",mi(l,25)),l=Ti("--color-button-secondary-background",n),a.setProperty("--color-button-secondary-background--darken-30",vi(l,30)),l=Ti("--color-foreground",n),a.setProperty("--color-foreground--85",mi(l,85)),a.setProperty("--color-foreground--75",mi(l,75)),a.setProperty("--color-foreground--65",mi(l,65)),a.setProperty("--color-foreground--50",mi(l,50)),l=Ti("--color-link-foreground",n),a.setProperty("--color-link-foreground--darken-20",vi(l,20)),a.setProperty("--color-link-foreground--lighten-20",bi(l,20)),l=Ti("--color-alert-infoBackground",n),a.setProperty("--color-alert-infoHoverBackground",o?vi(l,5):bi(l,5)),l=Ti("--color-alert-warningBackground",n),a.setProperty("--color-alert-warningHoverBackground",o?vi(l,5):bi(l,5)),l=Ti("--color-alert-errorBackground",n),a.setProperty("--color-alert-errorHoverBackground",o?vi(l,5):bi(l,5)),l=o?vi(s,5):bi(s,5),a.setProperty("--color-alert-neutralBackground",l),a.setProperty("--color-alert-neutralHoverBackground",o?vi(l,5):bi(l,5)),{colors:{background:s,foreground:c},computedStyle:n,isLightTheme:o,isHighContrastTheme:r,isInitializing:null==t}}let Vi=0;function Ui(){return 1073741824===Vi?Vi=1:Vi++,`webview:${Vi}`}class Hi{constructor(t){this.appName=t;const e=[],n=Xi();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(n),e.push(Fi(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",ui.configure({name:t,createChannel:function(t){return{name:t,appendLine:function(t){}}}},"off"),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const t=this.getState();this.state.timestamp>=(t?.timestamp??0)?this._api.setState(this.state):this.state=t}e.push(function(){const t=new MutationObserver((t=>{Ni.fire(Xi(t))}));return t.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>t.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&e.push(di.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(ii,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),e.push(di.on(window,"pagehide",(()=>{e?.forEach((t=>t.dispose())),this.bindDisposables?.forEach((t=>t.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((t=>t.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const t=ci((t=>{this.sendCommand(oi,t)}),150);this.bindDisposables.push(di.on(document,"focusin",(e=>{const n=e.composedPath().some((t=>"INPUT"===t.tagName));!0===this._focused&&this._inputFocused===n||(this._focused=!0,this._inputFocused=n,t({focused:!0,inputFocused:n}))})),di.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,t({focused:!1,inputFocused:!1}))})))}log(t,...e){ui.log(t,...e)}getState(){return this._api.getState()}sendCommand(t,e){const n=Ui();this.log(`sendCommand(${n}): name=${t.method}`),this.postMessage({id:n,method:t.method,params:e})}async sendCommandWithCompletion(t,e,n){const i=Ui();this.log(`sendCommandWithCompletion(${i}): name=${t.method}`);const o=new Promise(((t,e)=>{let o;const r=[di.on(window,"message",(e=>{ni(n,e.data,(n=>{e.data.completionId===i&&(r.forEach((t=>t.dispose())),queueMicrotask((()=>t(n))))}))})),{dispose:function(){null!=o&&(clearTimeout(o),o=void 0)}}];o=setTimeout((()=>{o=void 0,r.forEach((t=>t.dispose())),e(new Error(`Timed out waiting for completion of ${n.method}`))}),6e4)}));return this.postMessage({id:i,method:t.method,params:e,completionId:i}),o}setState(t){this._api.setState(t)}postMessage(t){this._api.postMessage(t)}}const ji=new Date,Yi=new Date;function qi(t,e,n,i){function o(e){return t(e=0===arguments.length?new Date:new Date(+e)),e}return o.floor=e=>(t(e=new Date(+e)),e),o.ceil=n=>(t(n=new Date(n-1)),e(n,1),t(n),n),o.round=t=>{const e=o(t),n=o.ceil(t);return t-e<n-t?e:n},o.offset=(t,n)=>(e(t=new Date(+t),null==n?1:Math.floor(n)),t),o.range=(n,i,r)=>{const a=[];if(n=o.ceil(n),r=null==r?1:Math.floor(r),!(n<i&&r>0))return a;let s;do{a.push(s=new Date(+n)),e(n,r),t(n)}while(s<n&&n<i);return a},o.filter=n=>qi((e=>{if(e>=e)for(;t(e),!n(e);)e.setTime(e-1)}),((t,i)=>{if(t>=t)if(i<0)for(;++i<=0;)for(;e(t,-1),!n(t););else for(;--i>=0;)for(;e(t,1),!n(t););})),n&&(o.count=(e,i)=>(ji.setTime(+e),Yi.setTime(+i),t(ji),t(Yi),Math.floor(n(ji,Yi))),o.every=t=>(t=Math.floor(t),isFinite(t)&&t>0?t>1?o.filter(i?e=>i(e)%t==0:e=>o.count(0,e)%t==0):o:null)),o}const Gi=1e3,Wi=6e4,Zi=36e5,Ki=864e5,Qi=6048e5,Ji=2592e6,to=31536e6;function eo(t){return qi((e=>{e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)}),((t,e)=>{t.setDate(t.getDate()+7*e)}),((t,e)=>(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*Wi)/Qi))}const no=eo(0),io=eo(1),oo=eo(2),ro=eo(3),ao=eo(4),so=eo(5),co=eo(6);no.range,io.range,oo.range,ro.range,ao.range,so.range,co.range;function lo(t){return qi((e=>{e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCDate(t.getUTCDate()+7*e)}),((t,e)=>(e-t)/Qi))}const uo=lo(0),ho=lo(1),fo=lo(2),po=lo(3),go=lo(4),vo=lo(5),bo=lo(6),mo=(uo.range,ho.range,fo.range,po.range,go.range,vo.range,bo.range,qi((t=>t.setHours(0,0,0,0)),((t,e)=>t.setDate(t.getDate()+e)),((t,e)=>(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*Wi)/Ki),(t=>t.getDate()-1))),yo=(mo.range,qi((t=>{t.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCDate(t.getUTCDate()+e)}),((t,e)=>(e-t)/Ki),(t=>t.getUTCDate()-1))),xo=(yo.range,qi((t=>{t.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCDate(t.getUTCDate()+e)}),((t,e)=>(e-t)/Ki),(t=>Math.floor(t/Ki)))),_o=(xo.range,qi((t=>{t.setMonth(0,1),t.setHours(0,0,0,0)}),((t,e)=>{t.setFullYear(t.getFullYear()+e)}),((t,e)=>e.getFullYear()-t.getFullYear()),(t=>t.getFullYear())));_o.every=t=>isFinite(t=Math.floor(t))&&t>0?qi((e=>{e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)}),((e,n)=>{e.setFullYear(e.getFullYear()+n*t)})):null;_o.range;const wo=qi((t=>{t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCFullYear(t.getUTCFullYear()+e)}),((t,e)=>e.getUTCFullYear()-t.getUTCFullYear()),(t=>t.getUTCFullYear()));wo.every=t=>isFinite(t=Math.floor(t))&&t>0?qi((e=>{e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),((e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n*t)})):null;wo.range;function To(t){if(0<=t.y&&t.y<100){var e=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return e.setFullYear(t.y),e}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function ko(t){if(0<=t.y&&t.y<100){var e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return e.setUTCFullYear(t.y),e}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Co(t,e,n){return{y:t,m:e,d:n,H:0,M:0,S:0,L:0}}var So,Ao,$o,Eo,Mo,Oo={"-":"",_:" ",0:"0"},Do=/^\s*\d+/,Po=/^%/,Ro=/[\\^$*+?|[\]().{}]/g;function Io(t,e,n){var i=t<0?"-":"",o=(i?-t:t)+"",r=o.length;return i+(r<n?new Array(n-r+1).join(e)+o:o)}function Lo(t){return t.replace(Ro,"\\$&")}function zo(t){return new RegExp("^(?:"+t.map(Lo).join("|")+")","i")}function Bo(t){return new Map(t.map(((t,e)=>[t.toLowerCase(),e])))}function No(t,e,n){var i=Do.exec(e.slice(n,n+1));return i?(t.w=+i[0],n+i[0].length):-1}function Fo(t,e,n){var i=Do.exec(e.slice(n,n+1));return i?(t.u=+i[0],n+i[0].length):-1}function Xo(t,e,n){var i=Do.exec(e.slice(n,n+2));return i?(t.U=+i[0],n+i[0].length):-1}function Vo(t,e,n){var i=Do.exec(e.slice(n,n+2));return i?(t.V=+i[0],n+i[0].length):-1}function Uo(t,e,n){var i=Do.exec(e.slice(n,n+2));return i?(t.W=+i[0],n+i[0].length):-1}function Ho(t,e,n){var i=Do.exec(e.slice(n,n+4));return i?(t.y=+i[0],n+i[0].length):-1}function jo(t,e,n){var i=Do.exec(e.slice(n,n+2));return i?(t.y=+i[0]+(+i[0]>68?1900:2e3),n+i[0].length):-1}function Yo(t,e,n){var i=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n,n+6));return i?(t.Z=i[1]?0:-(i[2]+(i[3]||"00")),n+i[0].length):-1}function qo(t,e,n){var i=Do.exec(e.slice(n,n+1));return i?(t.q=3*i[0]-3,n+i[0].length):-1}function Go(t,e,n){var i=Do.exec(e.slice(n,n+2));return i?(t.m=i[0]-1,n+i[0].length):-1}function Wo(t,e,n){var i=Do.exec(e.slice(n,n+2));return i?(t.d=+i[0],n+i[0].length):-1}function Zo(t,e,n){var i=Do.exec(e.slice(n,n+3));return i?(t.m=0,t.d=+i[0],n+i[0].length):-1}function Ko(t,e,n){var i=Do.exec(e.slice(n,n+2));return i?(t.H=+i[0],n+i[0].length):-1}function Qo(t,e,n){var i=Do.exec(e.slice(n,n+2));return i?(t.M=+i[0],n+i[0].length):-1}function Jo(t,e,n){var i=Do.exec(e.slice(n,n+2));return i?(t.S=+i[0],n+i[0].length):-1}function tr(t,e,n){var i=Do.exec(e.slice(n,n+3));return i?(t.L=+i[0],n+i[0].length):-1}function er(t,e,n){var i=Do.exec(e.slice(n,n+6));return i?(t.L=Math.floor(i[0]/1e3),n+i[0].length):-1}function nr(t,e,n){var i=Po.exec(e.slice(n,n+1));return i?n+i[0].length:-1}function ir(t,e,n){var i=Do.exec(e.slice(n));return i?(t.Q=+i[0],n+i[0].length):-1}function or(t,e,n){var i=Do.exec(e.slice(n));return i?(t.s=+i[0],n+i[0].length):-1}function rr(t,e){return Io(t.getDate(),e,2)}function ar(t,e){return Io(t.getHours(),e,2)}function sr(t,e){return Io(t.getHours()%12||12,e,2)}function cr(t,e){return Io(1+mo.count(_o(t),t),e,3)}function lr(t,e){return Io(t.getMilliseconds(),e,3)}function ur(t,e){return lr(t,e)+"000"}function hr(t,e){return Io(t.getMonth()+1,e,2)}function dr(t,e){return Io(t.getMinutes(),e,2)}function fr(t,e){return Io(t.getSeconds(),e,2)}function pr(t){var e=t.getDay();return 0===e?7:e}function gr(t,e){return Io(no.count(_o(t)-1,t),e,2)}function vr(t){var e=t.getDay();return e>=4||0===e?ao(t):ao.ceil(t)}function br(t,e){return t=vr(t),Io(ao.count(_o(t),t)+(4===_o(t).getDay()),e,2)}function mr(t){return t.getDay()}function yr(t,e){return Io(io.count(_o(t)-1,t),e,2)}function xr(t,e){return Io(t.getFullYear()%100,e,2)}function _r(t,e){return Io((t=vr(t)).getFullYear()%100,e,2)}function wr(t,e){return Io(t.getFullYear()%1e4,e,4)}function Tr(t,e){var n=t.getDay();return Io((t=n>=4||0===n?ao(t):ao.ceil(t)).getFullYear()%1e4,e,4)}function kr(t){var e=t.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+Io(e/60|0,"0",2)+Io(e%60,"0",2)}function Cr(t,e){return Io(t.getUTCDate(),e,2)}function Sr(t,e){return Io(t.getUTCHours(),e,2)}function Ar(t,e){return Io(t.getUTCHours()%12||12,e,2)}function $r(t,e){return Io(1+yo.count(wo(t),t),e,3)}function Er(t,e){return Io(t.getUTCMilliseconds(),e,3)}function Mr(t,e){return Er(t,e)+"000"}function Or(t,e){return Io(t.getUTCMonth()+1,e,2)}function Dr(t,e){return Io(t.getUTCMinutes(),e,2)}function Pr(t,e){return Io(t.getUTCSeconds(),e,2)}function Rr(t){var e=t.getUTCDay();return 0===e?7:e}function Ir(t,e){return Io(uo.count(wo(t)-1,t),e,2)}function Lr(t){var e=t.getUTCDay();return e>=4||0===e?go(t):go.ceil(t)}function zr(t,e){return t=Lr(t),Io(go.count(wo(t),t)+(4===wo(t).getUTCDay()),e,2)}function Br(t){return t.getUTCDay()}function Nr(t,e){return Io(ho.count(wo(t)-1,t),e,2)}function Fr(t,e){return Io(t.getUTCFullYear()%100,e,2)}function Xr(t,e){return Io((t=Lr(t)).getUTCFullYear()%100,e,2)}function Vr(t,e){return Io(t.getUTCFullYear()%1e4,e,4)}function Ur(t,e){var n=t.getUTCDay();return Io((t=n>=4||0===n?go(t):go.ceil(t)).getUTCFullYear()%1e4,e,4)}function Hr(){return"+0000"}function jr(){return"%"}function Yr(t){return+t}function qr(t){return Math.floor(+t/1e3)}function Gr(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,[(i=i.matrixTransform(e.getScreenCTM().inverse())).x,i.y]}if(e.getBoundingClientRect){var o=e.getBoundingClientRect();return[t.clientX-o.left-e.clientLeft,t.clientY-o.top-e.clientTop]}}return[t.pageX,t.pageY]}function Wr(){}function Zr(t){return null==t?Wr:function(){return this.querySelector(t)}}function Kr(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}function Qr(){return[]}function Jr(t){return null==t?Qr:function(){return this.querySelectorAll(t)}}function ta(t){return function(){return this.matches(t)}}function ea(t){return function(e){return e.matches(t)}}So=function(t){var e=t.dateTime,n=t.date,i=t.time,o=t.periods,r=t.days,a=t.shortDays,s=t.months,c=t.shortMonths,l=zo(o),u=Bo(o),h=zo(r),d=Bo(r),f=zo(a),p=Bo(a),g=zo(s),v=Bo(s),b=zo(c),m=Bo(c),y={a:function(t){return a[t.getDay()]},A:function(t){return r[t.getDay()]},b:function(t){return c[t.getMonth()]},B:function(t){return s[t.getMonth()]},c:null,d:rr,e:rr,f:ur,g:_r,G:Tr,H:ar,I:sr,j:cr,L:lr,m:hr,M:dr,p:function(t){return o[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:Yr,s:qr,S:fr,u:pr,U:gr,V:br,w:mr,W:yr,x:null,X:null,y:xr,Y:wr,Z:kr,"%":jr},x={a:function(t){return a[t.getUTCDay()]},A:function(t){return r[t.getUTCDay()]},b:function(t){return c[t.getUTCMonth()]},B:function(t){return s[t.getUTCMonth()]},c:null,d:Cr,e:Cr,f:Mr,g:Xr,G:Ur,H:Sr,I:Ar,j:$r,L:Er,m:Or,M:Dr,p:function(t){return o[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:Yr,s:qr,S:Pr,u:Rr,U:Ir,V:zr,w:Br,W:Nr,x:null,X:null,y:Fr,Y:Vr,Z:Hr,"%":jr},_={a:function(t,e,n){var i=f.exec(e.slice(n));return i?(t.w=p.get(i[0].toLowerCase()),n+i[0].length):-1},A:function(t,e,n){var i=h.exec(e.slice(n));return i?(t.w=d.get(i[0].toLowerCase()),n+i[0].length):-1},b:function(t,e,n){var i=b.exec(e.slice(n));return i?(t.m=m.get(i[0].toLowerCase()),n+i[0].length):-1},B:function(t,e,n){var i=g.exec(e.slice(n));return i?(t.m=v.get(i[0].toLowerCase()),n+i[0].length):-1},c:function(t,n,i){return k(t,e,n,i)},d:Wo,e:Wo,f:er,g:jo,G:Ho,H:Ko,I:Ko,j:Zo,L:tr,m:Go,M:Qo,p:function(t,e,n){var i=l.exec(e.slice(n));return i?(t.p=u.get(i[0].toLowerCase()),n+i[0].length):-1},q:qo,Q:ir,s:or,S:Jo,u:Fo,U:Xo,V:Vo,w:No,W:Uo,x:function(t,e,i){return k(t,n,e,i)},X:function(t,e,n){return k(t,i,e,n)},y:jo,Y:Ho,Z:Yo,"%":nr};function w(t,e){return function(n){var i,o,r,a=[],s=-1,c=0,l=t.length;for(n instanceof Date||(n=new Date(+n));++s<l;)37===t.charCodeAt(s)&&(a.push(t.slice(c,s)),null!=(o=Oo[i=t.charAt(++s)])?i=t.charAt(++s):o="e"===i?" ":"0",(r=e[i])&&(i=r(n,o)),a.push(i),c=s+1);return a.push(t.slice(c,s)),a.join("")}}function T(t,e){return function(n){var i,o,r=Co(1900,void 0,1);if(k(r,t,n+="",0)!=n.length)return null;if("Q"in r)return new Date(r.Q);if("s"in r)return new Date(1e3*r.s+("L"in r?r.L:0));if(e&&!("Z"in r)&&(r.Z=0),"p"in r&&(r.H=r.H%12+12*r.p),void 0===r.m&&(r.m="q"in r?r.q:0),"V"in r){if(r.V<1||r.V>53)return null;"w"in r||(r.w=1),"Z"in r?(o=(i=ko(Co(r.y,0,1))).getUTCDay(),i=o>4||0===o?ho.ceil(i):ho(i),i=yo.offset(i,7*(r.V-1)),r.y=i.getUTCFullYear(),r.m=i.getUTCMonth(),r.d=i.getUTCDate()+(r.w+6)%7):(o=(i=To(Co(r.y,0,1))).getDay(),i=o>4||0===o?io.ceil(i):io(i),i=mo.offset(i,7*(r.V-1)),r.y=i.getFullYear(),r.m=i.getMonth(),r.d=i.getDate()+(r.w+6)%7)}else("W"in r||"U"in r)&&("w"in r||(r.w="u"in r?r.u%7:"W"in r?1:0),o="Z"in r?ko(Co(r.y,0,1)).getUTCDay():To(Co(r.y,0,1)).getDay(),r.m=0,r.d="W"in r?(r.w+6)%7+7*r.W-(o+5)%7:r.w+7*r.U-(o+6)%7);return"Z"in r?(r.H+=r.Z/100|0,r.M+=r.Z%100,ko(r)):To(r)}}function k(t,e,n,i){for(var o,r,a=0,s=e.length,c=n.length;a<s;){if(i>=c)return-1;if(37===(o=e.charCodeAt(a++))){if(o=e.charAt(a++),!(r=_[o in Oo?e.charAt(a++):o])||(i=r(t,n,i))<0)return-1}else if(o!=n.charCodeAt(i++))return-1}return i}return y.x=w(n,y),y.X=w(i,y),y.c=w(e,y),x.x=w(n,x),x.X=w(i,x),x.c=w(e,x),{format:function(t){var e=w(t+="",y);return e.toString=function(){return t},e},parse:function(t){var e=T(t+="",!1);return e.toString=function(){return t},e},utcFormat:function(t){var e=w(t+="",x);return e.toString=function(){return t},e},utcParse:function(t){var e=T(t+="",!0);return e.toString=function(){return t},e}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),Ao=So.format,$o=So.parse,Eo=So.utcFormat,Mo=So.utcParse;var na=Array.prototype.find;function ia(){return this.firstElementChild}var oa=Array.prototype.filter;function ra(){return Array.from(this.children)}function aa(t){return new Array(t.length)}function sa(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function ca(t,e,n,i,o,r){for(var a,s=0,c=e.length,l=r.length;s<l;++s)(a=e[s])?(a.__data__=r[s],i[s]=a):n[s]=new sa(t,r[s]);for(;s<c;++s)(a=e[s])&&(o[s]=a)}function la(t,e,n,i,o,r,a){var s,c,l,u=new Map,h=e.length,d=r.length,f=new Array(h);for(s=0;s<h;++s)(c=e[s])&&(f[s]=l=a.call(c,c.__data__,s,e)+"",u.has(l)?o[s]=c:u.set(l,c));for(s=0;s<d;++s)l=a.call(t,r[s],s,r)+"",(c=u.get(l))?(i[s]=c,c.__data__=r[s],u.delete(l)):n[s]=new sa(t,r[s]);for(s=0;s<h;++s)(c=e[s])&&u.get(f[s])===c&&(o[s]=c)}function ua(t){return t.__data__}function ha(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function da(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}sa.prototype={constructor:sa,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var fa="http://www.w3.org/1999/xhtml";const pa={svg:"http://www.w3.org/2000/svg",xhtml:fa,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ga(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),pa.hasOwnProperty(e)?{space:pa[e],local:t}:t}function va(t){return function(){this.removeAttribute(t)}}function ba(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ma(t,e){return function(){this.setAttribute(t,e)}}function ya(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function xa(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function _a(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function wa(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Ta(t){return function(){this.style.removeProperty(t)}}function ka(t,e,n){return function(){this.style.setProperty(t,e,n)}}function Ca(t,e,n){return function(){var i=e.apply(this,arguments);null==i?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function Sa(t,e){return t.style.getPropertyValue(e)||wa(t).getComputedStyle(t,null).getPropertyValue(e)}function Aa(t){return function(){delete this[t]}}function $a(t,e){return function(){this[t]=e}}function Ea(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function Ma(t){return t.trim().split(/^|\s+/)}function Oa(t){return t.classList||new Da(t)}function Da(t){this._node=t,this._names=Ma(t.getAttribute("class")||"")}function Pa(t,e){for(var n=Oa(t),i=-1,o=e.length;++i<o;)n.add(e[i])}function Ra(t,e){for(var n=Oa(t),i=-1,o=e.length;++i<o;)n.remove(e[i])}function Ia(t){return function(){Pa(this,t)}}function La(t){return function(){Ra(this,t)}}function za(t,e){return function(){(e.apply(this,arguments)?Pa:Ra)(this,t)}}function Ba(){this.textContent=""}function Na(t){return function(){this.textContent=t}}function Fa(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function Xa(){this.innerHTML=""}function Va(t){return function(){this.innerHTML=t}}function Ua(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function Ha(){this.nextSibling&&this.parentNode.appendChild(this)}function ja(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Ya(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===fa&&e.documentElement.namespaceURI===fa?e.createElement(t):e.createElementNS(n,t)}}function qa(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Ga(t){var e=ga(t);return(e.local?qa:Ya)(e)}function Wa(){return null}function Za(){var t=this.parentNode;t&&t.removeChild(this)}function Ka(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Qa(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Ja(t){return function(){var e=this.__on;if(e){for(var n,i=0,o=-1,r=e.length;i<r;++i)n=e[i],t.type&&n.type!==t.type||n.name!==t.name?e[++o]=n:this.removeEventListener(n.type,n.listener,n.options);++o?e.length=o:delete this.__on}}}function ts(t,e,n){return function(){var i,o=this.__on,r=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(o)for(var a=0,s=o.length;a<s;++a)if((i=o[a]).type===t.type&&i.name===t.name)return this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=r,i.options=n),void(i.value=e);this.addEventListener(t.type,r,n),i={type:t.type,name:t.name,value:e,listener:r,options:n},o?o.push(i):this.__on=[i]}}function es(t,e,n){var i=wa(t),o=i.CustomEvent;"function"==typeof o?o=new o(e,n):(o=i.document.createEvent("Event"),n?(o.initEvent(e,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(e,!1,!1)),t.dispatchEvent(o)}function ns(t,e){return function(){return es(this,t,e)}}function is(t,e){return function(){return es(this,t,e.apply(this,arguments))}}Da.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var os=[null];function rs(t,e){this._groups=t,this._parents=e}function as(){return new rs([[document.documentElement]],os)}rs.prototype=as.prototype={constructor:rs,select:function(t){"function"!=typeof t&&(t=Zr(t));for(var e=this._groups,n=e.length,i=new Array(n),o=0;o<n;++o)for(var r,a,s=e[o],c=s.length,l=i[o]=new Array(c),u=0;u<c;++u)(r=s[u])&&(a=t.call(r,r.__data__,u,s))&&("__data__"in r&&(a.__data__=r.__data__),l[u]=a);return new rs(i,this._parents)},selectAll:function(t){t="function"==typeof t?function(t){return function(){return Kr(t.apply(this,arguments))}}(t):Jr(t);for(var e=this._groups,n=e.length,i=[],o=[],r=0;r<n;++r)for(var a,s=e[r],c=s.length,l=0;l<c;++l)(a=s[l])&&(i.push(t.call(a,a.__data__,l,s)),o.push(a));return new rs(i,o)},selectChild:function(t){return this.select(null==t?ia:function(t){return function(){return na.call(this.children,t)}}("function"==typeof t?t:ea(t)))},selectChildren:function(t){return this.selectAll(null==t?ra:function(t){return function(){return oa.call(this.children,t)}}("function"==typeof t?t:ea(t)))},filter:function(t){"function"!=typeof t&&(t=ta(t));for(var e=this._groups,n=e.length,i=new Array(n),o=0;o<n;++o)for(var r,a=e[o],s=a.length,c=i[o]=[],l=0;l<s;++l)(r=a[l])&&t.call(r,r.__data__,l,a)&&c.push(r);return new rs(i,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,ua);var n=e?la:ca,i=this._parents,o=this._groups;"function"!=typeof t&&(t=function(t){return function(){return t}}(t));for(var r=o.length,a=new Array(r),s=new Array(r),c=new Array(r),l=0;l<r;++l){var u=i[l],h=o[l],d=h.length,f=ha(t.call(u,u&&u.__data__,l,i)),p=f.length,g=s[l]=new Array(p),v=a[l]=new Array(p);n(u,h,g,v,c[l]=new Array(d),f,e);for(var b,m,y=0,x=0;y<p;++y)if(b=g[y]){for(y>=x&&(x=y+1);!(m=v[x])&&++x<p;);b._next=m||null}}return(a=new rs(a,i))._enter=s,a._exit=c,a},enter:function(){return new rs(this._enter||this._groups.map(aa),this._parents)},exit:function(){return new rs(this._exit||this._groups.map(aa),this._parents)},join:function(t,e,n){var i=this.enter(),o=this,r=this.exit();return"function"==typeof t?(i=t(i))&&(i=i.selection()):i=i.append(t+""),null!=e&&(o=e(o))&&(o=o.selection()),null==n?r.remove():n(r),i&&o?i.merge(o).order():o},merge:function(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,o=n.length,r=i.length,a=Math.min(o,r),s=new Array(o),c=0;c<a;++c)for(var l,u=n[c],h=i[c],d=u.length,f=s[c]=new Array(d),p=0;p<d;++p)(l=u[p]||h[p])&&(f[p]=l);for(;c<o;++c)s[c]=n[c];return new rs(s,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i,o=t[e],r=o.length-1,a=o[r];--r>=0;)(i=o[r])&&(a&&4^i.compareDocumentPosition(a)&&a.parentNode.insertBefore(i,a),a=i);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=da);for(var n=this._groups,i=n.length,o=new Array(i),r=0;r<i;++r){for(var a,s=n[r],c=s.length,l=o[r]=new Array(c),u=0;u<c;++u)(a=s[u])&&(l[u]=a);l.sort(e)}return new rs(o,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],o=0,r=i.length;o<r;++o){var a=i[o];if(a)return a}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var o,r=e[n],a=0,s=r.length;a<s;++a)(o=r[a])&&t.call(o,o.__data__,a,r);return this},attr:function(t,e){var n=ga(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((null==e?n.local?ba:va:"function"==typeof e?n.local?_a:xa:n.local?ya:ma)(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?Ta:"function"==typeof e?Ca:ka)(t,e,n??"")):Sa(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?Aa:"function"==typeof e?Ea:$a)(t,e)):this.node()[t]},classed:function(t,e){var n=Ma(t+"");if(arguments.length<2){for(var i=Oa(this.node()),o=-1,r=n.length;++o<r;)if(!i.contains(n[o]))return!1;return!0}return this.each(("function"==typeof e?za:e?Ia:La)(n,e))},text:function(t){return arguments.length?this.each(null==t?Ba:("function"==typeof t?Fa:Na)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Xa:("function"==typeof t?Ua:Va)(t)):this.node().innerHTML},raise:function(){return this.each(Ha)},lower:function(){return this.each(ja)},append:function(t){var e="function"==typeof t?t:Ga(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))},insert:function(t,e){var n="function"==typeof t?t:Ga(t),i=null==e?Wa:"function"==typeof e?e:Zr(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)}))},remove:function(){return this.each(Za)},clone:function(t){return this.select(t?Qa:Ka)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var i,o,r=function(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}(t+""),a=r.length;if(!(arguments.length<2)){for(s=e?ts:Ja,i=0;i<a;++i)this.each(s(r[i],e,n));return this}var s=this.node().__on;if(s)for(var c,l=0,u=s.length;l<u;++l)for(i=0,c=s[l];i<a;++i)if((o=r[i]).type===c.type&&o.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?is:ns)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i,o=t[e],r=0,a=o.length;r<a;++r)(i=o[r])&&(yield i)}};const ss=as;function cs(t){return"string"==typeof t?new rs([[document.querySelector(t)]],[document.documentElement]):new rs([[t]],os)}function ls(t){return"string"==typeof t?new rs([document.querySelectorAll(t)],[document.documentElement]):new rs([Kr(t)],os)}var us={value:()=>{}};function hs(){for(var t,e=0,n=arguments.length,i={};e<n;++e){if(!(t=arguments[e]+"")||t in i||/[\s.]/.test(t))throw new Error("illegal type: "+t);i[t]=[]}return new ds(i)}function ds(t){this._=t}function fs(t,e){for(var n,i=0,o=t.length;i<o;++i)if((n=t[i]).name===e)return n.value}function ps(t,e,n){for(var i=0,o=t.length;i<o;++i)if(t[i].name===e){t[i]=us,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=n&&t.push({name:e,value:n}),t}ds.prototype=hs.prototype={constructor:ds,on:function(t,e){var n,i,o=this._,r=(i=o,(t+"").trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");if(n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),t&&!i.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))),a=-1,s=r.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++a<s;)if(n=(t=r[a]).type)o[n]=ps(o[n],t.name,e);else if(null==e)for(n in o)o[n]=ps(o[n],t.name,null);return this}for(;++a<s;)if((n=(t=r[a]).type)&&(n=fs(o[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new ds(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,i,o=new Array(n),r=0;r<n;++r)o[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=0,n=(i=this._[t]).length;r<n;++r)i[r].value.apply(e,o)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],o=0,r=i.length;o<r;++o)i[o].value.apply(e,n)}};const gs=hs,vs={passive:!1},bs={capture:!0,passive:!1};function ms(t){t.stopImmediatePropagation()}function ys(t){t.preventDefault(),t.stopImmediatePropagation()}function xs(t){var e=t.document.documentElement,n=cs(t).on("dragstart.drag",ys,bs);"onselectstart"in e?n.on("selectstart.drag",ys,bs):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function _s(t,e){var n=t.document.documentElement,i=cs(t).on("dragstart.drag",null);e&&(i.on("click.drag",ys,bs),setTimeout((function(){i.on("click.drag",null)}),0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function ws(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Ts(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function ks(){}var Cs=.7,Ss=1/Cs,As="\\s*([+-]?\\d+)\\s*",$s="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Es="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ms=/^#([0-9a-f]{3,8})$/,Os=new RegExp(`^rgb\\(${As},${As},${As}\\)$`),Ds=new RegExp(`^rgb\\(${Es},${Es},${Es}\\)$`),Ps=new RegExp(`^rgba\\(${As},${As},${As},${$s}\\)$`),Rs=new RegExp(`^rgba\\(${Es},${Es},${Es},${$s}\\)$`),Is=new RegExp(`^hsl\\(${$s},${Es},${Es}\\)$`),Ls=new RegExp(`^hsla\\(${$s},${Es},${Es},${$s}\\)$`),zs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Bs(){return this.rgb().formatHex()}function Ns(){return this.rgb().formatRgb()}function Fs(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=Ms.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?Xs(e):3===n?new Hs(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?Vs(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?Vs(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=Os.exec(t))?new Hs(e[1],e[2],e[3],1):(e=Ds.exec(t))?new Hs(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=Ps.exec(t))?Vs(e[1],e[2],e[3],e[4]):(e=Rs.exec(t))?Vs(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=Is.exec(t))?Zs(e[1],e[2]/100,e[3]/100,1):(e=Ls.exec(t))?Zs(e[1],e[2]/100,e[3]/100,e[4]):zs.hasOwnProperty(t)?Xs(zs[t]):"transparent"===t?new Hs(NaN,NaN,NaN,0):null}function Xs(t){return new Hs(t>>16&255,t>>8&255,255&t,1)}function Vs(t,e,n,i){return i<=0&&(t=e=n=NaN),new Hs(t,e,n,i)}function Us(t,e,n,i){return 1===arguments.length?function(t){return t instanceof ks||(t=Fs(t)),t?new Hs((t=t.rgb()).r,t.g,t.b,t.opacity):new Hs}(t):new Hs(t,e,n,i??1)}function Hs(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}function js(){return`#${Ws(this.r)}${Ws(this.g)}${Ws(this.b)}`}function Ys(){const t=qs(this.opacity);return`${1===t?"rgb(":"rgba("}${Gs(this.r)}, ${Gs(this.g)}, ${Gs(this.b)}${1===t?")":`, ${t})`}`}function qs(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Gs(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Ws(t){return((t=Gs(t))<16?"0":"")+t.toString(16)}function Zs(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Qs(t,e,n,i)}function Ks(t){if(t instanceof Qs)return new Qs(t.h,t.s,t.l,t.opacity);if(t instanceof ks||(t=Fs(t)),!t)return new Qs;if(t instanceof Qs)return t;var e=(t=t.rgb()).r/255,n=t.g/255,i=t.b/255,o=Math.min(e,n,i),r=Math.max(e,n,i),a=NaN,s=r-o,c=(r+o)/2;return s?(a=e===r?(n-i)/s+6*(n<i):n===r?(i-e)/s+2:(e-n)/s+4,s/=c<.5?r+o:2-r-o,a*=60):s=c>0&&c<1?0:a,new Qs(a,s,c,t.opacity)}function Qs(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}function Js(t){return(t=(t||0)%360)<0?t+360:t}function tc(t){return Math.max(0,Math.min(1,t||0))}function ec(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}function nc(t,e,n,i,o){var r=t*t,a=r*t;return((1-3*t+3*r-a)*e+(4-6*r+3*a)*n+(1+3*t+3*r-3*a)*i+a*o)/6}ws(ks,Fs,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Bs,formatHex:Bs,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return Ks(this).formatHsl()},formatRgb:Ns,toString:Ns}),ws(Hs,Us,Ts(ks,{brighter(t){return t=null==t?Ss:Math.pow(Ss,t),new Hs(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?Cs:Math.pow(Cs,t),new Hs(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Hs(Gs(this.r),Gs(this.g),Gs(this.b),qs(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:js,formatHex:js,formatHex8:function(){return`#${Ws(this.r)}${Ws(this.g)}${Ws(this.b)}${Ws(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:Ys,toString:Ys})),ws(Qs,(function(t,e,n,i){return 1===arguments.length?Ks(t):new Qs(t,e,n,i??1)}),Ts(ks,{brighter(t){return t=null==t?Ss:Math.pow(Ss,t),new Qs(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?Cs:Math.pow(Cs,t),new Qs(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,o=2*n-i;return new Hs(ec(t>=240?t-240:t+120,o,i),ec(t,o,i),ec(t<120?t+240:t-120,o,i),this.opacity)},clamp(){return new Qs(Js(this.h),tc(this.s),tc(this.l),qs(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=qs(this.opacity);return`${1===t?"hsl(":"hsla("}${Js(this.h)}, ${100*tc(this.s)}%, ${100*tc(this.l)}%${1===t?")":`, ${t})`}`}}));const ic=t=>()=>t;function oc(t,e){return function(n){return t+n*e}}function rc(t){return 1==(t=+t)?ac:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}(e,n,t):ic(isNaN(e)?n:e)}}function ac(t,e){var n=e-t;return n?oc(t,n):ic(isNaN(t)?e:t)}const sc=function t(e){var n=rc(e);function i(t,e){var i=n((t=Us(t)).r,(e=Us(e)).r),o=n(t.g,e.g),r=n(t.b,e.b),a=ac(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=o(e),t.b=r(e),t.opacity=a(e),t+""}}return i.gamma=t,i}(1);function cc(t){return function(e){var n,i,o=e.length,r=new Array(o),a=new Array(o),s=new Array(o);for(n=0;n<o;++n)i=Us(e[n]),r[n]=i.r||0,a[n]=i.g||0,s[n]=i.b||0;return r=t(r),a=t(a),s=t(s),i.opacity=1,function(t){return i.r=r(t),i.g=a(t),i.b=s(t),i+""}}}cc((function(t){var e=t.length-1;return function(n){var i=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),o=t[i],r=t[i+1],a=i>0?t[i-1]:2*o-r,s=i<e-1?t[i+2]:2*r-o;return nc((n-i/e)*e,a,o,r,s)}})),cc((function(t){var e=t.length;return function(n){var i=Math.floor(((n%=1)<0?++n:n)*e),o=t[(i+e-1)%e],r=t[i%e],a=t[(i+1)%e],s=t[(i+2)%e];return nc((n-i/e)*e,o,r,a,s)}}));function lc(t,e){var n,i=e?e.length:0,o=t?Math.min(i,t.length):0,r=new Array(o),a=new Array(i);for(n=0;n<o;++n)r[n]=bc(t[n],e[n]);for(;n<i;++n)a[n]=e[n];return function(t){for(n=0;n<o;++n)a[n]=r[n](t);return a}}function uc(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function hc(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function dc(t,e){var n,i={},o={};for(n in null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={}),e)n in t?i[n]=bc(t[n],e[n]):o[n]=e[n];return function(t){for(n in i)o[n]=i[n](t);return o}}var fc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pc=new RegExp(fc.source,"g");function gc(t,e){var n,i,o,r=fc.lastIndex=pc.lastIndex=0,a=-1,s=[],c=[];for(t+="",e+="";(n=fc.exec(t))&&(i=pc.exec(e));)(o=i.index)>r&&(o=e.slice(r,o),s[a]?s[a]+=o:s[++a]=o),(n=n[0])===(i=i[0])?s[a]?s[a]+=i:s[++a]=i:(s[++a]=null,c.push({i:a,x:hc(n,i)})),r=pc.lastIndex;return r<e.length&&(o=e.slice(r),s[a]?s[a]+=o:s[++a]=o),s.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var n,i=0;i<e;++i)s[(n=c[i]).i]=n.x(t);return s.join("")})}function vc(t,e){e||(e=[]);var n,i=t?Math.min(e.length,t.length):0,o=e.slice();return function(r){for(n=0;n<i;++n)o[n]=t[n]*(1-r)+e[n]*r;return o}}function bc(t,e){var n,i=typeof e;return null==e||"boolean"===i?ic(e):("number"===i?hc:"string"===i?(n=Fs(e))?(e=n,sc):gc:e instanceof Fs?sc:e instanceof Date?uc:function(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}(e)?vc:Array.isArray(e)?lc:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?dc:hc)(t,e)}var mc,yc,xc=0,_c=0,wc=0,Tc=1e3,kc=0,Cc=0,Sc=0,Ac="object"==typeof performance&&performance.now?performance:Date,$c="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Ec(){return Cc||($c(Mc),Cc=Ac.now()+Sc)}function Mc(){Cc=0}function Oc(){this._call=this._time=this._next=null}function Dc(t,e,n){var i=new Oc;return i.restart(t,e,n),i}function Pc(){Cc=(kc=Ac.now())+Sc,xc=_c=0;try{!function(){Ec(),++xc;for(var t,e=mc;e;)(t=Cc-e._time)>=0&&e._call.call(void 0,t),e=e._next;--xc}()}finally{xc=0,function(){var t,e,n=mc,i=1/0;for(;n;)n._call?(i>n._time&&(i=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:mc=e);yc=t,Ic(i)}(),Cc=0}}function Rc(){var t=Ac.now(),e=t-kc;e>Tc&&(Sc-=e,kc=t)}function Ic(t){xc||(_c&&(_c=clearTimeout(_c)),t-Cc>24?(t<1/0&&(_c=setTimeout(Pc,t-Ac.now()-Sc)),wc&&(wc=clearInterval(wc))):(wc||(kc=Ac.now(),wc=setInterval(Rc,Tc)),xc=1,$c(Pc)))}function Lc(t,e,n){var i=new Oc;return e=null==e?0:+e,i.restart((n=>{i.stop(),t(n+e)}),e,n),i}Oc.prototype=Dc.prototype={constructor:Oc,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?Ec():+n)+(null==e?0:+e),this._next||yc===this||(yc?yc._next=this:mc=this,yc=this),this._call=t,this._time=n,Ic()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ic())}};var zc=gs("start","end","cancel","interrupt"),Bc=[],Nc=0,Fc=1,Xc=2,Vc=3,Uc=4,Hc=5,jc=6;function Yc(t,e,n,i,o,r){var a=t.__transition;if(a){if(n in a)return}else t.__transition={};!function(t,e,n){var i,o=t.__transition;function r(t){n.state=Fc,n.timer.restart(a,n.delay,n.time),n.delay<=t&&a(t-n.delay)}function a(r){var l,u,h,d;if(n.state!==Fc)return c();for(l in o)if((d=o[l]).name===n.name){if(d.state===Vc)return Lc(a);d.state===Uc?(d.state=jc,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete o[l]):+l<e&&(d.state=jc,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete o[l])}if(Lc((function(){n.state===Vc&&(n.state=Uc,n.timer.restart(s,n.delay,n.time),s(r))})),n.state=Xc,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Xc){for(n.state=Vc,i=new Array(h=n.tween.length),l=0,u=-1;l<h;++l)(d=n.tween[l].value.call(t,t.__data__,n.index,n.group))&&(i[++u]=d);i.length=u+1}}function s(e){for(var o=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(c),n.state=Hc,1),r=-1,a=i.length;++r<a;)i[r].call(t,o);n.state===Hc&&(n.on.call("end",t,t.__data__,n.index,n.group),c())}function c(){for(var i in n.state=jc,n.timer.stop(),delete o[e],o)return;delete t.__transition}o[e]=n,n.timer=Dc(r,0,n.time)}(t,n,{name:e,index:i,group:o,on:zc,tween:Bc,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:Nc})}function qc(t,e){var n=Wc(t,e);if(n.state>Nc)throw new Error("too late; already scheduled");return n}function Gc(t,e){var n=Wc(t,e);if(n.state>Vc)throw new Error("too late; already running");return n}function Wc(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function Zc(t,e){var n,i,o,r=t.__transition,a=!0;if(r){for(o in e=null==e?null:e+"",r)(n=r[o]).name===e?(i=n.state>Xc&&n.state<Hc,n.state=jc,n.timer.stop(),n.on.call(i?"interrupt":"cancel",t,t.__data__,n.index,n.group),delete r[o]):a=!1;a&&delete t.__transition}}var Kc,Qc=180/Math.PI,Jc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function tl(t,e,n,i,o,r){var a,s,c;return(a=Math.sqrt(t*t+e*e))&&(t/=a,e/=a),(c=t*n+e*i)&&(n-=t*c,i-=e*c),(s=Math.sqrt(n*n+i*i))&&(n/=s,i/=s,c/=s),t*i<e*n&&(t=-t,e=-e,c=-c,a=-a),{translateX:o,translateY:r,rotate:Math.atan2(e,t)*Qc,skewX:Math.atan(c)*Qc,scaleX:a,scaleY:s}}function el(t,e,n,i){function o(t){return t.length?t.pop()+" ":""}return function(r,a){var s=[],c=[];return r=t(r),a=t(a),function(t,i,o,r,a,s){if(t!==o||i!==r){var c=a.push("translate(",null,e,null,n);s.push({i:c-4,x:hc(t,o)},{i:c-2,x:hc(i,r)})}else(o||r)&&a.push("translate("+o+e+r+n)}(r.translateX,r.translateY,a.translateX,a.translateY,s,c),function(t,e,n,r){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),r.push({i:n.push(o(n)+"rotate(",null,i)-2,x:hc(t,e)})):e&&n.push(o(n)+"rotate("+e+i)}(r.rotate,a.rotate,s,c),function(t,e,n,r){t!==e?r.push({i:n.push(o(n)+"skewX(",null,i)-2,x:hc(t,e)}):e&&n.push(o(n)+"skewX("+e+i)}(r.skewX,a.skewX,s,c),function(t,e,n,i,r,a){if(t!==n||e!==i){var s=r.push(o(r)+"scale(",null,",",null,")");a.push({i:s-4,x:hc(t,n)},{i:s-2,x:hc(e,i)})}else 1===n&&1===i||r.push(o(r)+"scale("+n+","+i+")")}(r.scaleX,r.scaleY,a.scaleX,a.scaleY,s,c),r=a=null,function(t){for(var e,n=-1,i=c.length;++n<i;)s[(e=c[n]).i]=e.x(t);return s.join("")}}}var nl=el((function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Jc:tl(e.a,e.b,e.c,e.d,e.e,e.f)}),"px, ","px)","deg)"),il=el((function(t){return null==t?Jc:(Kc||(Kc=document.createElementNS("http://www.w3.org/2000/svg","g")),Kc.setAttribute("transform",t),(t=Kc.transform.baseVal.consolidate())?tl((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Jc)}),", ",")",")");function ol(t,e){var n,i;return function(){var o=Gc(this,t),r=o.tween;if(r!==n)for(var a=0,s=(i=n=r).length;a<s;++a)if(i[a].name===e){(i=i.slice()).splice(a,1);break}o.tween=i}}function rl(t,e,n){var i,o;if("function"!=typeof n)throw new Error;return function(){var r=Gc(this,t),a=r.tween;if(a!==i){o=(i=a).slice();for(var s={name:e,value:n},c=0,l=o.length;c<l;++c)if(o[c].name===e){o[c]=s;break}c===l&&o.push(s)}r.tween=o}}function al(t,e,n){var i=t._id;return t.each((function(){var t=Gc(this,i);(t.value||(t.value={}))[e]=n.apply(this,arguments)})),function(t){return Wc(t,i).value[e]}}function sl(t,e){var n;return("number"==typeof e?hc:e instanceof Fs?sc:(n=Fs(e))?(e=n,sc):gc)(t,e)}function cl(t){return function(){this.removeAttribute(t)}}function ll(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ul(t,e,n){var i,o,r=n+"";return function(){var a=this.getAttribute(t);return a===r?null:a===i?o:o=e(i=a,n)}}function hl(t,e,n){var i,o,r=n+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===r?null:a===i?o:o=e(i=a,n)}}function dl(t,e,n){var i,o,r;return function(){var a,s,c=n(this);if(null!=c)return(a=this.getAttribute(t))===(s=c+"")?null:a===i&&s===o?r:(o=s,r=e(i=a,c));this.removeAttribute(t)}}function fl(t,e,n){var i,o,r;return function(){var a,s,c=n(this);if(null!=c)return(a=this.getAttributeNS(t.space,t.local))===(s=c+"")?null:a===i&&s===o?r:(o=s,r=e(i=a,c));this.removeAttributeNS(t.space,t.local)}}function pl(t,e){var n,i;function o(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&function(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}(t,o)),n}return o._value=e,o}function gl(t,e){var n,i;function o(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&function(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}(t,o)),n}return o._value=e,o}function vl(t,e){return function(){qc(this,t).delay=+e.apply(this,arguments)}}function bl(t,e){return e=+e,function(){qc(this,t).delay=e}}function ml(t,e){return function(){Gc(this,t).duration=+e.apply(this,arguments)}}function yl(t,e){return e=+e,function(){Gc(this,t).duration=e}}var xl=ss.prototype.constructor;function _l(t){return function(){this.style.removeProperty(t)}}var wl=0;function Tl(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function kl(t){return ss().transition(t)}function Cl(){return++wl}var Sl=ss.prototype;Tl.prototype=kl.prototype={constructor:Tl,select:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Zr(t));for(var i=this._groups,o=i.length,r=new Array(o),a=0;a<o;++a)for(var s,c,l=i[a],u=l.length,h=r[a]=new Array(u),d=0;d<u;++d)(s=l[d])&&(c=t.call(s,s.__data__,d,l))&&("__data__"in s&&(c.__data__=s.__data__),h[d]=c,Yc(h[d],e,n,d,h,Wc(s,n)));return new Tl(r,this._parents,e,n)},selectAll:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Jr(t));for(var i=this._groups,o=i.length,r=[],a=[],s=0;s<o;++s)for(var c,l=i[s],u=l.length,h=0;h<u;++h)if(c=l[h]){for(var d,f=t.call(c,c.__data__,h,l),p=Wc(c,n),g=0,v=f.length;g<v;++g)(d=f[g])&&Yc(d,e,n,g,f,p);r.push(f),a.push(c)}return new Tl(r,a,e,n)},selectChild:Sl.selectChild,selectChildren:Sl.selectChildren,filter:function(t){"function"!=typeof t&&(t=ta(t));for(var e=this._groups,n=e.length,i=new Array(n),o=0;o<n;++o)for(var r,a=e[o],s=a.length,c=i[o]=[],l=0;l<s;++l)(r=a[l])&&t.call(r,r.__data__,l,a)&&c.push(r);return new Tl(i,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,o=n.length,r=Math.min(i,o),a=new Array(i),s=0;s<r;++s)for(var c,l=e[s],u=n[s],h=l.length,d=a[s]=new Array(h),f=0;f<h;++f)(c=l[f]||u[f])&&(d[f]=c);for(;s<i;++s)a[s]=e[s];return new Tl(a,this._parents,this._name,this._id)},selection:function(){return new xl(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,n=Cl(),i=this._groups,o=i.length,r=0;r<o;++r)for(var a,s=i[r],c=s.length,l=0;l<c;++l)if(a=s[l]){var u=Wc(a,e);Yc(a,t,n,l,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Tl(i,this._parents,t,n)},call:Sl.call,nodes:Sl.nodes,node:Sl.node,size:Sl.size,empty:Sl.empty,each:Sl.each,on:function(t,e){var n=this._id;return arguments.length<2?Wc(this.node(),n).on.on(t):this.each(function(t,e,n){var i,o,r=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}(e)?qc:Gc;return function(){var a=r(this,t),s=a.on;s!==i&&(o=(i=s).copy()).on(e,n),a.on=o}}(n,t,e))},attr:function(t,e){var n=ga(t),i="transform"===n?il:sl;return this.attrTween(t,"function"==typeof e?(n.local?fl:dl)(n,i,al(this,"attr."+t,e)):null==e?(n.local?ll:cl)(n):(n.local?hl:ul)(n,i,e))},attrTween:function(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;var i=ga(t);return this.tween(n,(i.local?pl:gl)(i,e))},style:function(t,e,n){var i="transform"==(t+="")?nl:sl;return null==e?this.styleTween(t,function(t,e){var n,i,o;return function(){var r=Sa(this,t),a=(this.style.removeProperty(t),Sa(this,t));return r===a?null:r===n&&a===i?o:o=e(n=r,i=a)}}(t,i)).on("end.style."+t,_l(t)):"function"==typeof e?this.styleTween(t,function(t,e,n){var i,o,r;return function(){var a=Sa(this,t),s=n(this),c=s+"";return null==s&&(this.style.removeProperty(t),c=s=Sa(this,t)),a===c?null:a===i&&c===o?r:(o=c,r=e(i=a,s))}}(t,i,al(this,"style."+t,e))).each(function(t,e){var n,i,o,r,a="style."+e,s="end."+a;return function(){var c=Gc(this,t),l=c.on,u=null==c.value[a]?r||(r=_l(e)):void 0;l===n&&o===u||(i=(n=l).copy()).on(s,o=u),c.on=i}}(this._id,t)):this.styleTween(t,function(t,e,n){var i,o,r=n+"";return function(){var a=Sa(this,t);return a===r?null:a===i?o:o=e(i=a,n)}}(t,i,e),n).on("end.style."+t,null)},styleTween:function(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(null==e)return this.tween(i,null);if("function"!=typeof e)throw new Error;return this.tween(i,function(t,e,n){var i,o;function r(){var r=e.apply(this,arguments);return r!==o&&(i=(o=r)&&function(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}(t,r,n)),i}return r._value=e,r}(t,e,n??""))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=e??""}}(al(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,n;function i(){var i=t.apply(this,arguments);return i!==n&&(e=(n=i)&&function(t){return function(e){this.textContent=t.call(this,e)}}(i)),e}return i._value=t,i}(t))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i,o=Wc(this.node(),n).tween,r=0,a=o.length;r<a;++r)if((i=o[r]).name===t)return i.value;return null}return this.each((null==e?ol:rl)(n,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?vl:bl)(e,t)):Wc(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?ml:yl)(e,t)):Wc(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){Gc(this,t).ease=e}}(e,t)):Wc(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var n=e.apply(this,arguments);if("function"!=typeof n)throw new Error;Gc(this,t).ease=n}}(this._id,t))},end:function(){var t,e,n=this,i=n._id,o=n.size();return new Promise((function(r,a){var s={value:a},c={value:function(){0==--o&&r()}};n.each((function(){var n=Gc(this,i),o=n.on;o!==t&&((e=(t=o).copy())._.cancel.push(s),e._.interrupt.push(s),e._.end.push(c)),n.on=e})),0===o&&r()}))},[Symbol.iterator]:Sl[Symbol.iterator]};var Al={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function $l(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}ss.prototype.interrupt=function(t){return this.each((function(){Zc(this,t)}))},ss.prototype.transition=function(t){var e,n;t instanceof Tl?(e=t._id,t=t._name):(e=Cl(),(n=Al).time=Ec(),t=null==t?null:t+"");for(var i=this._groups,o=i.length,r=0;r<o;++r)for(var a,s=i[r],c=s.length,l=0;l<c;++l)(a=s[l])&&Yc(a,t,e,l,s,n||$l(a,e));return new Tl(i,this._parents,t,e)};const{abs:El,max:Ml,min:Ol}=Math;function Dl(t){return[+t[0],+t[1]]}function Pl(t){return[Dl(t[0]),Dl(t[1])]}["w","e"].map(Rl),["n","s"].map(Rl),["n","w","e","s","nw","ne","sw","se"].map(Rl);function Rl(t){return{type:t}}function Il(t){var e=t.__brush;return e?e.dim.output(e.selection):null}var Ll={},zl={};function Bl(t){return new Function("d","return {"+t.map((function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'})).join(",")+"}")}function Nl(t){var e=Object.create(null),n=[];return t.forEach((function(t){for(var i in t)i in e||n.push(e[i]=i)})),n}function Fl(t,e){var n=t+"",i=n.length;return i<e?new Array(e-i+1).join(0)+n:n}function Xl(t){var e,n=t.getUTCHours(),i=t.getUTCMinutes(),o=t.getUTCSeconds(),r=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((e=t.getUTCFullYear())<0?"-"+Fl(-e,6):e>9999?"+"+Fl(e,6):Fl(e,4))+"-"+Fl(t.getUTCMonth()+1,2)+"-"+Fl(t.getUTCDate(),2)+(r?"T"+Fl(n,2)+":"+Fl(i,2)+":"+Fl(o,2)+"."+Fl(r,3)+"Z":o?"T"+Fl(n,2)+":"+Fl(i,2)+":"+Fl(o,2)+"Z":i||n?"T"+Fl(n,2)+":"+Fl(i,2)+"Z":"")}function Vl(t){var e=new RegExp('["'+t+"\n\r]"),n=t.charCodeAt(0);function i(t,e){var i,o=[],r=t.length,a=0,s=0,c=r<=0,l=!1;function u(){if(c)return zl;if(l)return l=!1,Ll;var e,i,o=a;if(34===t.charCodeAt(o)){for(;a++<r&&34!==t.charCodeAt(a)||34===t.charCodeAt(++a););return(e=a)>=r?c=!0:10===(i=t.charCodeAt(a++))?l=!0:13===i&&(l=!0,10===t.charCodeAt(a)&&++a),t.slice(o+1,e-1).replace(/""/g,'"')}for(;a<r;){if(10===(i=t.charCodeAt(e=a++)))l=!0;else if(13===i)l=!0,10===t.charCodeAt(a)&&++a;else if(i!==n)continue;return t.slice(o,e)}return c=!0,t.slice(o,r)}for(10===t.charCodeAt(r-1)&&--r,13===t.charCodeAt(r-1)&&--r;(i=u())!==zl;){for(var h=[];i!==Ll&&i!==zl;)h.push(i),i=u();e&&null==(h=e(h,s++))||o.push(h)}return o}function o(e,n){return e.map((function(e){return n.map((function(t){return a(e[t])})).join(t)}))}function r(e){return e.map(a).join(t)}function a(t){return null==t?"":t instanceof Date?Xl(t):e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,e){var n,o,r=i(t,(function(t,i){if(n)return n(t,i-1);o=t,n=e?function(t,e){var n=Bl(t);return function(i,o){return e(n(i),o,t)}}(t,e):Bl(t)}));return r.columns=o||[],r},parseRows:i,format:function(e,n){return null==n&&(n=Nl(e)),[n.map(a).join(t)].concat(o(e,n)).join("\n")},formatBody:function(t,e){return null==e&&(e=Nl(t)),o(t,e).join("\n")},formatRows:function(t){return t.map(r).join("\n")},formatRow:r,formatValue:a}}var Ul=Vl(","),Hl=Ul.parse,jl=Ul.parseRows,Yl=(Ul.format,Ul.formatBody,Ul.formatRows,Ul.formatRow,Ul.formatValue,Vl("\t")),ql=Yl.parse,Gl=Yl.parseRows;Yl.format,Yl.formatBody,Yl.formatRows,Yl.formatRow,Yl.formatValue;const Wl=t=>()=>t;function Zl(t,{sourceEvent:e,subject:n,target:i,identifier:o,active:r,x:a,y:s,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:o,enumerable:!0,configurable:!0},active:{value:r,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}function Kl(t){return!t.ctrlKey&&!t.button}function Ql(){return this.parentNode}function Jl(t,e){return e??{x:t.x,y:t.y}}function tu(){return navigator.maxTouchPoints||"ontouchstart"in this}function eu(){var t,e,n,i,o=Kl,r=Ql,a=Jl,s=tu,c={},l=gs("start","drag","end"),u=0,h=0;function d(t){t.on("mousedown.drag",f).filter(s).on("touchstart.drag",v).on("touchmove.drag",b,vs).on("touchend.drag touchcancel.drag",m).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function f(a,s){if(!i&&o.call(this,a,s)){var c=y(this,r.call(this,a,s),a,s,"mouse");c&&(cs(a.view).on("mousemove.drag",p,bs).on("mouseup.drag",g,bs),xs(a.view),ms(a),n=!1,t=a.clientX,e=a.clientY,c("start",a))}}function p(i){if(ys(i),!n){var o=i.clientX-t,r=i.clientY-e;n=o*o+r*r>h}c.mouse("drag",i)}function g(t){cs(t.view).on("mousemove.drag mouseup.drag",null),_s(t.view,n),ys(t),c.mouse("end",t)}function v(t,e){if(o.call(this,t,e)){var n,i,a=t.changedTouches,s=r.call(this,t,e),c=a.length;for(n=0;n<c;++n)(i=y(this,s,t,e,a[n].identifier,a[n]))&&(ms(t),i("start",t,a[n]))}}function b(t){var e,n,i=t.changedTouches,o=i.length;for(e=0;e<o;++e)(n=c[i[e].identifier])&&(ys(t),n("drag",t,i[e]))}function m(t){var e,n,o=t.changedTouches,r=o.length;for(i&&clearTimeout(i),i=setTimeout((function(){i=null}),500),e=0;e<r;++e)(n=c[o[e].identifier])&&(ms(t),n("end",t,o[e]))}function y(t,e,n,i,o,r){var s,h,f,p=l.copy(),g=Gr(r||n,e);if(null!=(f=a.call(t,new Zl("beforestart",{sourceEvent:n,target:d,identifier:o,active:u,x:g[0],y:g[1],dx:0,dy:0,dispatch:p}),i)))return s=f.x-g[0]||0,h=f.y-g[1]||0,function n(r,a,l){var v,b=g;switch(r){case"start":c[o]=n,v=u++;break;case"end":delete c[o],--u;case"drag":g=Gr(l||a,e),v=u}p.call(r,t,new Zl(r,{sourceEvent:a,subject:f,target:d,identifier:o,active:v,x:g[0]+s,y:g[1]+h,dx:g[0]-b[0],dy:g[1]-b[1],dispatch:p}),i)}}return d.filter=function(t){return arguments.length?(o="function"==typeof t?t:Wl(!!t),d):o},d.container=function(t){return arguments.length?(r="function"==typeof t?t:Wl(t),d):r},d.subject=function(t){return arguments.length?(a="function"==typeof t?t:Wl(t),d):a},d.touchable=function(t){return arguments.length?(s="function"==typeof t?t:Wl(!!t),d):s},d.on=function(){var t=l.on.apply(l,arguments);return t===l?d:t},d.clickDistance=function(t){return arguments.length?(h=(t=+t)*t,d):Math.sqrt(h)},d}Zl.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};class nu extends Map{constructor(t,e=au){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const[e,n]of t)this.set(e,n)}get(t){return super.get(iu(this,t))}has(t){return super.has(iu(this,t))}set(t,e){return super.set(ou(this,t),e)}delete(t){return super.delete(ru(this,t))}}function iu({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function ou({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function ru({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function au(t){return null!==t&&"object"==typeof t?t.valueOf():t}function su(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}const cu=Symbol("implicit");function lu(){var t=new nu,e=[],n=[],i=cu;function o(o){let r=t.get(o);if(void 0===r){if(i!==cu)return i;t.set(o,r=e.push(o)-1)}return n[r%n.length]}return o.domain=function(n){if(!arguments.length)return e.slice();e=[],t=new nu;for(const i of n)t.has(i)||t.set(i,e.push(i)-1);return o},o.range=function(t){return arguments.length?(n=Array.from(t),o):n.slice()},o.unknown=function(t){return arguments.length?(i=t,o):i},o.copy=function(){return lu(e,n).unknown(i)},su.apply(o,arguments),o}const uu=Math.sqrt(50),hu=Math.sqrt(10),du=Math.sqrt(2);function fu(t,e,n){const i=(e-t)/Math.max(0,n),o=Math.floor(Math.log10(i)),r=i/Math.pow(10,o),a=r>=uu?10:r>=hu?5:r>=du?2:1;let s,c,l;return o<0?(l=Math.pow(10,-o)/a,s=Math.round(t*l),c=Math.round(e*l),s/l<t&&++s,c/l>e&&--c,l=-l):(l=Math.pow(10,o)*a,s=Math.round(t/l),c=Math.round(e/l),s*l<t&&++s,c*l>e&&--c),c<s&&.5<=n&&n<2?fu(t,e,2*n):[s,c,l]}function pu(t,e,n){if(!((n=+n)>0))return[];if((t=+t)===(e=+e))return[t];const i=e<t,[o,r,a]=i?fu(e,t,n):fu(t,e,n);if(!(r>=o))return[];const s=r-o+1,c=new Array(s);if(i)if(a<0)for(let t=0;t<s;++t)c[t]=(r-t)/-a;else for(let t=0;t<s;++t)c[t]=(r-t)*a;else if(a<0)for(let t=0;t<s;++t)c[t]=(o+t)/-a;else for(let t=0;t<s;++t)c[t]=(o+t)*a;return c}function gu(t,e,n){return fu(t=+t,e=+e,n=+n)[2]}function vu(t,e,n){n=+n;const i=(e=+e)<(t=+t),o=i?gu(e,t,n):gu(t,e,n);return(i?-1:1)*(o<0?1/-o:o)}function bu(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function mu(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function yu(t){let e,n,i;function o(t,i,o=0,r=t.length){if(o<r){if(0!==e(i,i))return r;do{const e=o+r>>>1;n(t[e],i)<0?o=e+1:r=e}while(o<r)}return o}return 2!==t.length?(e=bu,n=(e,n)=>bu(t(e),n),i=(e,n)=>t(e)-n):(e=t===bu||t===mu?t:xu,n=t,i=t),{left:o,center:function(t,e,n=0,r=t.length){const a=o(t,e,n,r-1);return a>n&&i(t[a-1],e)>-i(t[a],e)?a-1:a},right:function(t,i,o=0,r=t.length){if(o<r){if(0!==e(i,i))return r;do{const e=o+r>>>1;n(t[e],i)<=0?o=e+1:r=e}while(o<r)}return o}}}function xu(){return 0}const _u=yu(bu),wu=_u.right,Tu=(_u.left,yu((function(t){return null===t?NaN:+t})).center,wu);function ku(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function Cu(t){return+t}var Su=[0,1];function Au(t){return t}function $u(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:function(t){return function(){return t}}(isNaN(e)?NaN:.5)}function Eu(t,e,n){var i=t[0],o=t[1],r=e[0],a=e[1];return o<i?(i=$u(o,i),r=n(a,r)):(i=$u(i,o),r=n(r,a)),function(t){return r(i(t))}}function Mu(t,e,n){var i=Math.min(t.length,e.length)-1,o=new Array(i),r=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++a<i;)o[a]=$u(t[a],t[a+1]),r[a]=n(e[a],e[a+1]);return function(e){var n=Tu(t,e,1,i)-1;return r[n](o[n](e))}}function Ou(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function Du(){var t,e,n,i,o,r,a=Su,s=Su,c=bc,l=Au;function u(){var t=Math.min(a.length,s.length);return l!==Au&&(l=function(t,e){var n;return t>e&&(n=t,t=e,e=n),function(n){return Math.max(t,Math.min(e,n))}}(a[0],a[t-1])),i=t>2?Mu:Eu,o=r=null,h}function h(e){return null==e||isNaN(e=+e)?n:(o||(o=i(a.map(t),s,c)))(t(l(e)))}return h.invert=function(n){return l(e((r||(r=i(s,a.map(t),hc)))(n)))},h.domain=function(t){return arguments.length?(a=Array.from(t,Cu),u()):a.slice()},h.range=function(t){return arguments.length?(s=Array.from(t),u()):s.slice()},h.rangeRound=function(t){return s=Array.from(t),c=ku,u()},h.clamp=function(t){return arguments.length?(l=!!t||Au,u()):l!==Au},h.interpolate=function(t){return arguments.length?(c=t,u()):c},h.unknown=function(t){return arguments.length?(n=t,h):n},function(n,i){return t=n,e=i,u()}}function Pu(){return Du()(Au,Au)}var Ru,Iu=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Lu(t){if(!(e=Iu.exec(t)))throw new Error("invalid format: "+t);var e;return new zu({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function zu(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function Bu(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,i=t.slice(0,n);return[i.length>1?i[0]+i.slice(2):i,+t.slice(n+1)]}function Nu(t){return(t=Bu(Math.abs(t)))?t[1]:NaN}function Fu(t,e){var n=Bu(t,e);if(!n)return t+"";var i=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+i:i.length>o+1?i.slice(0,o+1)+"."+i.slice(o+1):i+new Array(o-i.length+2).join("0")}Lu.prototype=zu.prototype,zu.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};const Xu={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>Fu(100*t,e),r:Fu,s:function(t,e){var n=Bu(t,e);if(!n)return t+"";var i=n[0],o=n[1],r=o-(Ru=3*Math.max(-8,Math.min(8,Math.floor(o/3))))+1,a=i.length;return r===a?i:r>a?i+new Array(r-a+1).join("0"):r>0?i.slice(0,r)+"."+i.slice(r):"0."+new Array(1-r).join("0")+Bu(t,Math.max(0,e+r-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Vu(t){return t}var Uu,Hu,ju,Yu=Array.prototype.map,qu=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Gu(t){var e,n,i=void 0===t.grouping||void 0===t.thousands?Vu:(e=Yu.call(t.grouping,Number),n=t.thousands+"",function(t,i){for(var o=t.length,r=[],a=0,s=e[0],c=0;o>0&&s>0&&(c+s+1>i&&(s=Math.max(1,i-c)),r.push(t.substring(o-=s,o+s)),!((c+=s+1)>i));)s=e[a=(a+1)%e.length];return r.reverse().join(n)}),o=void 0===t.currency?"":t.currency[0]+"",r=void 0===t.currency?"":t.currency[1]+"",a=void 0===t.decimal?".":t.decimal+"",s=void 0===t.numerals?Vu:function(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}(Yu.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function h(t){var e=(t=Lu(t)).fill,n=t.align,h=t.sign,d=t.symbol,f=t.zero,p=t.width,g=t.comma,v=t.precision,b=t.trim,m=t.type;"n"===m?(g=!0,m="g"):Xu[m]||(void 0===v&&(v=12),b=!0,m="g"),(f||"0"===e&&"="===n)&&(f=!0,e="0",n="=");var y="$"===d?o:"#"===d&&/[boxX]/.test(m)?"0"+m.toLowerCase():"",x="$"===d?r:/[%p]/.test(m)?c:"",_=Xu[m],w=/[defgprs%]/.test(m);function T(t){var o,r,c,d=y,T=x;if("c"===m)T=_(t)+T,t="";else{var k=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:_(Math.abs(t),v),b&&(t=function(t){t:for(var e,n=t.length,i=1,o=-1;i<n;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;default:if(!+t[i])break t;o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t}(t)),k&&0==+t&&"+"!==h&&(k=!1),d=(k?"("===h?h:l:"-"===h||"("===h?"":h)+d,T=("s"===m?qu[8+Ru/3]:"")+T+(k&&"("===h?")":""),w)for(o=-1,r=t.length;++o<r;)if(48>(c=t.charCodeAt(o))||c>57){T=(46===c?a+t.slice(o+1):t.slice(o))+T,t=t.slice(0,o);break}}g&&!f&&(t=i(t,1/0));var C=d.length+t.length+T.length,S=C<p?new Array(p-C+1).join(e):"";switch(g&&f&&(t=i(S+t,S.length?p-T.length:1/0),S=""),n){case"<":t=d+t+T+S;break;case"=":t=d+S+t+T;break;case"^":t=S.slice(0,C=S.length>>1)+d+t+T+S.slice(C);break;default:t=S+d+t+T}return s(t)}return v=void 0===v?6:/[gprs]/.test(m)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v)),T.toString=function(){return t+""},T}return{format:h,formatPrefix:function(t,e){var n=h(((t=Lu(t)).type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(Nu(e)/3))),o=Math.pow(10,-i),r=qu[8+i/3];return function(t){return n(o*t)+r}}}}function Wu(t,e,n,i){var o,r=vu(t,e,n);switch((i=Lu(i??",f")).type){case"s":var a=Math.max(Math.abs(t),Math.abs(e));return null!=i.precision||isNaN(o=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Nu(e)/3)))-Nu(Math.abs(t)))}(r,a))||(i.precision=o),ju(i,a);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,Nu(e)-Nu(t))+1}(r,Math.max(Math.abs(t),Math.abs(e))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=function(t){return Math.max(0,-Nu(Math.abs(t)))}(r))||(i.precision=o-2*("%"===i.type))}return Hu(i)}function Zu(t){var e=t.domain;return t.ticks=function(t){var n=e();return pu(n[0],n[n.length-1],t??10)},t.tickFormat=function(t,n){var i=e();return Wu(i[0],i[i.length-1],t??10,n)},t.nice=function(n){null==n&&(n=10);var i,o,r=e(),a=0,s=r.length-1,c=r[a],l=r[s],u=10;for(l<c&&(o=c,c=l,l=o,o=a,a=s,s=o);u-- >0;){if((o=gu(c,l,n))===i)return r[a]=c,r[s]=l,e(r);if(o>0)c=Math.floor(c/o)*o,l=Math.ceil(l/o)*o;else{if(!(o<0))break;c=Math.ceil(c*o)/o,l=Math.floor(l*o)/o}i=o}return t},t}function Ku(){var t=Pu();return t.copy=function(){return Ou(t,Ku())},su.apply(t,arguments),Zu(t)}function Qu(t){return function(e){return Math.sign(e)*Math.log1p(Math.abs(e/t))}}function Ju(t){return function(e){return Math.sign(e)*Math.expm1(Math.abs(e))*t}}function th(){var t=function(t){var e=1,n=t(Qu(e),Ju(e));return n.constant=function(n){return arguments.length?t(Qu(e=+n),Ju(e)):e},Zu(n)}(Du());return t.copy=function(){return Ou(t,th()).constant(t.constant())},su.apply(t,arguments)}function eh(t,e){var n,i=0,o=(t=t.slice()).length-1,r=t[i],a=t[o];return a<r&&(n=i,i=o,o=n,n=r,r=a,a=n),t[i]=e.floor(r),t[o]=e.ceil(a),t}function nh(t){return Math.log(t)}function ih(t){return Math.exp(t)}function oh(t){return-Math.log(-t)}function rh(t){return-Math.exp(-t)}function ah(t){return isFinite(t)?+("1e"+t):t<0?0:t}function sh(t){return(e,n)=>-t(-e,n)}function ch(t){const e=t(nh,ih),n=e.domain;let i,o,r=10;function a(){return i=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),e=>Math.log(e)/t)}(r),o=function(t){return 10===t?ah:t===Math.E?Math.exp:e=>Math.pow(t,e)}(r),n()[0]<0?(i=sh(i),o=sh(o),t(oh,rh)):t(nh,ih),e}return e.base=function(t){return arguments.length?(r=+t,a()):r},e.domain=function(t){return arguments.length?(n(t),a()):n()},e.ticks=t=>{const e=n();let a=e[0],s=e[e.length-1];const c=s<a;c&&([a,s]=[s,a]);let l,u,h=i(a),d=i(s);const f=null==t?10:+t;let p=[];if(!(r%1)&&d-h<f){if(h=Math.floor(h),d=Math.ceil(d),a>0){for(;h<=d;++h)for(l=1;l<r;++l)if(u=h<0?l/o(-h):l*o(h),!(u<a)){if(u>s)break;p.push(u)}}else for(;h<=d;++h)for(l=r-1;l>=1;--l)if(u=h>0?l/o(-h):l*o(h),!(u<a)){if(u>s)break;p.push(u)}2*p.length<f&&(p=pu(a,s,f))}else p=pu(h,d,Math.min(d-h,f)).map(o);return c?p.reverse():p},e.tickFormat=(t,n)=>{if(null==t&&(t=10),null==n&&(n=10===r?"s":","),"function"!=typeof n&&(r%1||null!=(n=Lu(n)).precision||(n.trim=!0),n=Hu(n)),t===1/0)return n;const a=Math.max(1,r*t/e.ticks().length);return t=>{let e=t/o(Math.round(i(t)));return e*r<r-.5&&(e*=r),e<=a?n(t):""}},e.nice=()=>n(eh(n(),{floor:t=>o(Math.floor(i(t))),ceil:t=>o(Math.ceil(i(t)))})),e}function lh(){const t=ch(Du()).domain([1,10]);return t.copy=()=>Ou(t,lh()).base(t.base()),su.apply(t,arguments),t}!function(t){Uu=Gu(t),Hu=Uu.format,ju=Uu.formatPrefix}({thousands:",",grouping:[3],currency:["$",""]});const uh=qi((()=>{}),((t,e)=>{t.setTime(+t+e)}),((t,e)=>e-t));uh.every=t=>(t=Math.floor(t),isFinite(t)&&t>0?t>1?qi((e=>{e.setTime(Math.floor(e/t)*t)}),((e,n)=>{e.setTime(+e+n*t)}),((e,n)=>(n-e)/t)):uh:null);uh.range;const hh=qi((t=>{t.setTime(t-t.getMilliseconds())}),((t,e)=>{t.setTime(+t+e*Gi)}),((t,e)=>(e-t)/Gi),(t=>t.getUTCSeconds())),dh=(hh.range,qi((t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*Gi)}),((t,e)=>{t.setTime(+t+e*Wi)}),((t,e)=>(e-t)/Wi),(t=>t.getMinutes()))),fh=(dh.range,qi((t=>{t.setUTCSeconds(0,0)}),((t,e)=>{t.setTime(+t+e*Wi)}),((t,e)=>(e-t)/Wi),(t=>t.getUTCMinutes()))),ph=(fh.range,qi((t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*Gi-t.getMinutes()*Wi)}),((t,e)=>{t.setTime(+t+e*Zi)}),((t,e)=>(e-t)/Zi),(t=>t.getHours()))),gh=(ph.range,qi((t=>{t.setUTCMinutes(0,0,0)}),((t,e)=>{t.setTime(+t+e*Zi)}),((t,e)=>(e-t)/Zi),(t=>t.getUTCHours()))),vh=(gh.range,qi((t=>{t.setDate(1),t.setHours(0,0,0,0)}),((t,e)=>{t.setMonth(t.getMonth()+e)}),((t,e)=>e.getMonth()-t.getMonth()+12*(e.getFullYear()-t.getFullYear())),(t=>t.getMonth()))),bh=(vh.range,qi((t=>{t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),((t,e)=>{t.setUTCMonth(t.getUTCMonth()+e)}),((t,e)=>e.getUTCMonth()-t.getUTCMonth()+12*(e.getUTCFullYear()-t.getUTCFullYear())),(t=>t.getUTCMonth())));bh.range;function mh(t,e,n,i,o,r){const a=[[hh,1,Gi],[hh,5,5e3],[hh,15,15e3],[hh,30,3e4],[r,1,Wi],[r,5,3e5],[r,15,9e5],[r,30,18e5],[o,1,Zi],[o,3,108e5],[o,6,216e5],[o,12,432e5],[i,1,Ki],[i,2,1728e5],[n,1,Qi],[e,1,Ji],[e,3,7776e6],[t,1,to]];function s(e,n,i){const o=Math.abs(n-e)/i,r=yu((([,,t])=>t)).right(a,o);if(r===a.length)return t.every(vu(e/to,n/to,i));if(0===r)return uh.every(Math.max(vu(e,n,i),1));const[s,c]=a[o/a[r-1][2]<a[r][2]/o?r-1:r];return s.every(c)}return[function(t,e,n){const i=e<t;i&&([t,e]=[e,t]);const o=n&&"function"==typeof n.range?n:s(t,e,n),r=o?o.range(t,+e+1):[];return i?r.reverse():r},s]}const[yh,xh]=mh(wo,bh,uo,xo,gh,fh),[_h,wh]=mh(_o,vh,no,mo,ph,dh);function Th(t){return new Date(t)}function kh(t){return t instanceof Date?+t:+new Date(+t)}function Ch(t,e,n,i,o,r,a,s,c,l){var u=Pu(),h=u.invert,d=u.domain,f=l(".%L"),p=l(":%S"),g=l("%I:%M"),v=l("%I %p"),b=l("%a %d"),m=l("%b %d"),y=l("%B"),x=l("%Y");function _(t){return(c(t)<t?f:s(t)<t?p:a(t)<t?g:r(t)<t?v:i(t)<t?o(t)<t?b:m:n(t)<t?y:x)(t)}return u.invert=function(t){return new Date(h(t))},u.domain=function(t){return arguments.length?d(Array.from(t,kh)):d().map(Th)},u.ticks=function(e){var n=d();return t(n[0],n[n.length-1],e??10)},u.tickFormat=function(t,e){return null==e?_:l(e)},u.nice=function(t){var n=d();return t&&"function"==typeof t.range||(t=e(n[0],n[n.length-1],t??10)),t?d(eh(n,t)):u},u.copy=function(){return Ou(u,Ch(t,e,n,i,o,r,a,s,c,l))},u}function Sh(){return su.apply(Ch(_h,wh,_o,vh,no,mo,ph,dh,hh,Ao).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function Ah(){return su.apply(Ch(yh,xh,wo,bh,uo,yo,gh,fh,hh,Eo).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function $h(t,e,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+n)/6)}function Eh(t){this._context=t}function Mh(t){return new Eh(t)}function Oh(){}function Dh(t){this._context=t}function Ph(t){return new Dh(t)}function Rh(t){this._context=t}function Ih(t){return new Rh(t)}function Lh(t,e){this._basis=new Eh(t),this._beta=e}Eh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:$h(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:$h(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}},Dh.prototype={areaStart:Oh,areaEnd:Oh,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x2=t,this._y2=e;break;case 1:this._point=2,this._x3=t,this._y3=e;break;case 2:this._point=3,this._x4=t,this._y4=e,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+e)/6);break;default:$h(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}},Rh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var n=(this._x0+4*this._x1+t)/6,i=(this._y0+4*this._y1+e)/6;this._line?this._context.lineTo(n,i):this._context.moveTo(n,i);break;case 3:this._point=4;default:$h(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}},Lh.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,e=this._y,n=t.length-1;if(n>0)for(var i,o=t[0],r=e[0],a=t[n]-o,s=e[n]-r,c=-1;++c<=n;)i=c/n,this._basis.point(this._beta*t[c]+(1-this._beta)*(o+i*a),this._beta*e[c]+(1-this._beta)*(r+i*s));this._x=this._y=null,this._basis.lineEnd()},point:function(t,e){this._x.push(+t),this._y.push(+e)}};const zh=function t(e){function n(t){return 1===e?new Eh(t):new Lh(t,e)}return n.beta=function(e){return t(+e)},n}(.85);function Bh(t,e,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function Nh(t,e){this._context=t,this._k=(1-e)/6}Nh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Bh(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2,this._x1=t,this._y1=e;break;case 2:this._point=3;default:Bh(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Fh=function t(e){function n(t){return new Nh(t,e)}return n.tension=function(e){return t(+e)},n}(0);function Xh(t,e){this._context=t,this._k=(1-e)/6}Xh.prototype={areaStart:Oh,areaEnd:Oh,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x3=t,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:this._point=3,this._x5=t,this._y5=e;break;default:Bh(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Vh=function t(e){function n(t){return new Xh(t,e)}return n.tension=function(e){return t(+e)},n}(0);function Uh(t,e){this._context=t,this._k=(1-e)/6}Uh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Bh(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Hh=function t(e){function n(t){return new Uh(t,e)}return n.tension=function(e){return t(+e)},n}(0),jh=(Math.abs,Math.atan2,Math.cos,Math.max,Math.min,Math.sin,Math.sqrt,1e-12);Math.PI;function Yh(t,e,n){var i=t._x1,o=t._y1,r=t._x2,a=t._y2;if(t._l01_a>jh){var s=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);i=(i*s-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,o=(o*s-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>jh){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,u=3*t._l23_a*(t._l23_a+t._l12_a);r=(r*l+t._x1*t._l23_2a-e*t._l12_2a)/u,a=(a*l+t._y1*t._l23_2a-n*t._l12_2a)/u}t._context.bezierCurveTo(i,o,r,a,t._x2,t._y2)}function qh(t,e){this._context=t,this._alpha=e}qh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,i=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3;default:Yh(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Gh=function t(e){function n(t){return e?new qh(t,e):new Nh(t,0)}return n.alpha=function(e){return t(+e)},n}(.5);function Wh(t,e){this._context=t,this._alpha=e}Wh.prototype={areaStart:Oh,areaEnd:Oh,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,i=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:this._point=3,this._x5=t,this._y5=e;break;default:Yh(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Zh=function t(e){function n(t){return e?new Wh(t,e):new Xh(t,0)}return n.alpha=function(e){return t(+e)},n}(.5);function Kh(t,e){this._context=t,this._alpha=e}Kh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,i=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+i*i,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Yh(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const Qh=function t(e){function n(t){return e?new Kh(t,e):new Uh(t,0)}return n.alpha=function(e){return t(+e)},n}(.5);function Jh(t){return t<0?-1:1}function td(t,e,n){var i=t._x1-t._x0,o=e-t._x1,r=(t._y1-t._y0)/(i||o<0&&-0),a=(n-t._y1)/(o||i<0&&-0),s=(r*o+a*i)/(i+o);return(Jh(r)+Jh(a))*Math.min(Math.abs(r),Math.abs(a),.5*Math.abs(s))||0}function ed(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function nd(t,e,n){var i=t._x0,o=t._y0,r=t._x1,a=t._y1,s=(r-i)/3;t._context.bezierCurveTo(i+s,o+s*e,r-s,a-s*n,r,a)}function id(t){this._context=t}function od(t){this._context=new rd(t)}function rd(t){this._context=t}function ad(t){return new id(t)}function sd(t){return new od(t)}function cd(t){this._context=t}function ld(t){var e,n,i=t.length-1,o=new Array(i),r=new Array(i),a=new Array(i);for(o[0]=0,r[0]=2,a[0]=t[0]+2*t[1],e=1;e<i-1;++e)o[e]=1,r[e]=4,a[e]=4*t[e]+2*t[e+1];for(o[i-1]=2,r[i-1]=7,a[i-1]=8*t[i-1]+t[i],e=1;e<i;++e)n=o[e]/r[e-1],r[e]-=n,a[e]-=n*a[e-1];for(o[i-1]=a[i-1]/r[i-1],e=i-2;e>=0;--e)o[e]=(a[e]-o[e+1])/r[e];for(r[i-1]=(t[i]+o[i-1])/2,e=0;e<i-1;++e)r[e]=2*t[e+1]-o[e+1];return[o,r]}function ud(t){return new cd(t)}function hd(t){this._context=t}function dd(t){return new hd(t)}function fd(t){this._context=t}function pd(t){return new fd(t)}function gd(t,e){this._context=t,this._t=e}function vd(t){return new gd(t,.5)}function bd(t){return new gd(t,0)}function md(t){return new gd(t,1)}id.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:nd(this,this._t0,ed(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN;if(e=+e,(t=+t)!==this._x1||e!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,nd(this,ed(this,n=td(this,t,e)),n);break;default:nd(this,this._t0,n=td(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}},(od.prototype=Object.create(id.prototype)).point=function(t,e){id.prototype.point.call(this,e,t)},rd.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,i,o,r){this._context.bezierCurveTo(e,t,i,n,r,o)}},cd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,e=this._y,n=t.length;if(n)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),2===n)this._context.lineTo(t[1],e[1]);else for(var i=ld(t),o=ld(e),r=0,a=1;a<n;++r,++a)this._context.bezierCurveTo(i[0][r],o[0][r],i[1][r],o[1][r],t[a],e[a]);(this._line||0!==this._line&&1===n)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,e){this._x.push(+t),this._y.push(+e)}},hd.prototype={areaStart:Oh,areaEnd:Oh,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,e){t=+t,e=+e,this._point?this._context.lineTo(t,e):(this._point=1,this._context.moveTo(t,e))}},fd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e)}}},gd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{var n=this._x*(1-this._t)+t*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,e)}}this._x=t,this._y=e}};Array.prototype.slice;const yd=Math.PI,xd=2*yd,_d=1e-6,wd=xd-_d;function Td(t){this._+=t[0];for(let e=1,n=t.length;e<n;++e)this._+=arguments[e]+t[e]}class kd{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==t?Td:function(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return Td;const n=10**e;return function(t){this._+=t[0];for(let e=1,i=t.length;e<i;++e)this._+=Math.round(arguments[e]*n)/n+t[e]}}(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,n,i){this._append`Q${+t},${+e},${this._x1=+n},${this._y1=+i}`}bezierCurveTo(t,e,n,i,o,r){this._append`C${+t},${+e},${+n},${+i},${this._x1=+o},${this._y1=+r}`}arcTo(t,e,n,i,o){if(t=+t,e=+e,n=+n,i=+i,(o=+o)<0)throw new Error(`negative radius: ${o}`);let r=this._x1,a=this._y1,s=n-t,c=i-e,l=r-t,u=a-e,h=l*l+u*u;if(null===this._x1)this._append`M${this._x1=t},${this._y1=e}`;else if(h>_d)if(Math.abs(u*s-c*l)>_d&&o){let d=n-r,f=i-a,p=s*s+c*c,g=d*d+f*f,v=Math.sqrt(p),b=Math.sqrt(h),m=o*Math.tan((yd-Math.acos((p+h-g)/(2*v*b)))/2),y=m/b,x=m/v;Math.abs(y-1)>_d&&this._append`L${t+y*l},${e+y*u}`,this._append`A${o},${o},0,0,${+(u*d>l*f)},${this._x1=t+x*s},${this._y1=e+x*c}`}else this._append`L${this._x1=t},${this._y1=e}`;else;}arc(t,e,n,i,o,r){if(t=+t,e=+e,r=!!r,(n=+n)<0)throw new Error(`negative radius: ${n}`);let a=n*Math.cos(i),s=n*Math.sin(i),c=t+a,l=e+s,u=1^r,h=r?i-o:o-i;null===this._x1?this._append`M${c},${l}`:(Math.abs(this._x1-c)>_d||Math.abs(this._y1-l)>_d)&&this._append`L${c},${l}`,n&&(h<0&&(h=h%xd+xd),h>wd?this._append`A${n},${n},0,1,${u},${t-a},${e-s}A${n},${n},0,1,${u},${this._x1=c},${this._y1=l}`:h>_d&&this._append`A${n},${n},0,${+(h>=yd)},${u},${this._x1=t+n*Math.cos(o)},${this._y1=e+n*Math.sin(o)}`)}rect(t,e,n,i){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${n=+n}v${+i}h${-n}Z`}toString(){return this._}}function Cd(t){return t}kd.prototype;var Sd=1,Ad=2,$d=3,Ed=4,Md=1e-6;function Od(t){return"translate("+t+",0)"}function Dd(t){return"translate(0,"+t+")"}function Pd(t){return e=>+t(e)}function Rd(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function Id(){return!this.__axis}function Ld(t,e){var n=[],i=null,o=null,r=6,a=6,s=3,c="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,l=t===Sd||t===Ed?-1:1,u=t===Ed||t===Ad?"x":"y",h=t===Sd||t===$d?Od:Dd;function d(d){var f=i??(e.ticks?e.ticks.apply(e,n):e.domain()),p=o??(e.tickFormat?e.tickFormat.apply(e,n):Cd),g=Math.max(r,0)+s,v=e.range(),b=+v[0]+c,m=+v[v.length-1]+c,y=(e.bandwidth?Rd:Pd)(e.copy(),c),x=d.selection?d.selection():d,_=x.selectAll(".domain").data([null]),w=x.selectAll(".tick").data(f,e).order(),T=w.exit(),k=w.enter().append("g").attr("class","tick"),C=w.select("line"),S=w.select("text");_=_.merge(_.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(k),C=C.merge(k.append("line").attr("stroke","currentColor").attr(u+"2",l*r)),S=S.merge(k.append("text").attr("fill","currentColor").attr(u,l*g).attr("dy",t===Sd?"0em":t===$d?"0.71em":"0.32em")),d!==x&&(_=_.transition(d),w=w.transition(d),C=C.transition(d),S=S.transition(d),T=T.transition(d).attr("opacity",Md).attr("transform",(function(t){return isFinite(t=y(t))?h(t+c):this.getAttribute("transform")})),k.attr("opacity",Md).attr("transform",(function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:y(t))+c)}))),T.remove(),_.attr("d",t===Ed||t===Ad?a?"M"+l*a+","+b+"H"+c+"V"+m+"H"+l*a:"M"+c+","+b+"V"+m:a?"M"+b+","+l*a+"V"+c+"H"+m+"V"+l*a:"M"+b+","+c+"H"+m),w.attr("opacity",1).attr("transform",(function(t){return h(y(t)+c)})),C.attr(u+"2",l*r),S.attr(u,l*g).text(p),x.filter(Id).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Ad?"start":t===Ed?"end":"middle"),x.each((function(){this.__axis=y}))}return d.scale=function(t){return arguments.length?(e=t,d):e},d.ticks=function(){return n=Array.from(arguments),d},d.tickArguments=function(t){return arguments.length?(n=null==t?[]:Array.from(t),d):n.slice()},d.tickValues=function(t){return arguments.length?(i=null==t?null:Array.from(t),d):i&&i.slice()},d.tickFormat=function(t){return arguments.length?(o=t,d):o},d.tickSize=function(t){return arguments.length?(r=a=+t,d):r},d.tickSizeInner=function(t){return arguments.length?(r=+t,d):r},d.tickSizeOuter=function(t){return arguments.length?(a=+t,d):a},d.tickPadding=function(t){return arguments.length?(s=+t,d):s},d.offset=function(t){return arguments.length?(c=+t,d):c},d}function zd(t){return Ld(Sd,t)}function Bd(t){return Ld(Ad,t)}function Nd(t){return Ld($d,t)}function Fd(t){return Ld(Ed,t)}const Xd=t=>+t;function Vd(t,e,n,i,o){for(var r,a=t.children,s=-1,c=a.length,l=t.value&&(i-e)/t.value;++s<c;)(r=a[s]).y0=n,r.y1=o,r.x0=e,r.x1=e+=r.value*l}function Ud(t,e,n,i,o){for(var r,a=t.children,s=-1,c=a.length,l=t.value&&(o-n)/t.value;++s<c;)(r=a[s]).x0=e,r.x1=i,r.y0=n,r.y1=n+=r.value*l}var Hd=(1+Math.sqrt(5))/2;function jd(t,e,n,i,o,r){for(var a,s,c,l,u,h,d,f,p,g,v,b=[],m=e.children,y=0,x=0,_=m.length,w=e.value;y<_;){c=o-n,l=r-i;do{u=m[x++].value}while(!u&&x<_);for(h=d=u,v=u*u*(g=Math.max(l/c,c/l)/(w*t)),p=Math.max(d/v,v/h);x<_;++x){if(u+=s=m[x].value,s<h&&(h=s),s>d&&(d=s),v=u*u*g,(f=Math.max(d/v,v/h))>p){u-=s;break}p=f}b.push(a={value:u,dice:c<l,children:m.slice(y,x)}),a.dice?Vd(a,n,i,o,w?i+=l*u/w:r):Ud(a,n,i,w?n+=c*u/w:o,r),w-=u,y=x}return b}(function t(e){function n(t,n,i,o,r){jd(e,t,n,i,o,r)}return n.ratio=function(e){return t((e=+e)>1?e:1)},n})(Hd);function Yd(t){var e=0,n=t.children,i=n&&n.length;if(i)for(;--i>=0;)e+=n[i].value;else e=1;t.value=e}function qd(t,e){t instanceof Map?(t=[void 0,t],void 0===e&&(e=Wd)):void 0===e&&(e=Gd);for(var n,i,o,r,a,s=new Qd(t),c=[s];n=c.pop();)if((o=e(n.data))&&(a=(o=Array.from(o)).length))for(n.children=o,r=a-1;r>=0;--r)c.push(i=o[r]=new Qd(o[r])),i.parent=n,i.depth=n.depth+1;return s.eachBefore(Kd)}function Gd(t){return t.children}function Wd(t){return Array.isArray(t)?t[1]:null}function Zd(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function Kd(t){var e=0;do{t.height=e}while((t=t.parent)&&t.height<++e)}function Qd(t){this.data=t,this.depth=this.height=0,this.parent=null}Qd.prototype=qd.prototype={constructor:Qd,count:function(){return this.eachAfter(Yd)},each:function(t,e){let n=-1;for(const i of this)t.call(e,i,++n,this);return this},eachAfter:function(t,e){for(var n,i,o,r=this,a=[r],s=[],c=-1;r=a.pop();)if(s.push(r),n=r.children)for(i=0,o=n.length;i<o;++i)a.push(n[i]);for(;r=s.pop();)t.call(e,r,++c,this);return this},eachBefore:function(t,e){for(var n,i,o=this,r=[o],a=-1;o=r.pop();)if(t.call(e,o,++a,this),n=o.children)for(i=n.length-1;i>=0;--i)r.push(n[i]);return this},find:function(t,e){let n=-1;for(const i of this)if(t.call(e,i,++n,this))return i},sum:function(t){return this.eachAfter((function(e){for(var n=+t(e.data)||0,i=e.children,o=i&&i.length;--o>=0;)n+=i[o].value;e.value=n}))},sort:function(t){return this.eachBefore((function(e){e.children&&e.children.sort(t)}))},path:function(t){for(var e=this,n=function(t,e){if(t===e)return t;var n=t.ancestors(),i=e.ancestors(),o=null;t=n.pop(),e=i.pop();for(;t===e;)o=t,t=n.pop(),e=i.pop();return o}(e,t),i=[e];e!==n;)e=e.parent,i.push(e);for(var o=i.length;t!==n;)i.splice(o,0,t),t=t.parent;return i},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e},descendants:function(){return Array.from(this)},leaves:function(){var t=[];return this.eachBefore((function(e){e.children||t.push(e)})),t},links:function(){var t=this,e=[];return t.each((function(n){n!==t&&e.push({source:n.parent,target:n})})),e},copy:function(){return qd(this).eachBefore(Zd)},[Symbol.iterator]:function*(){var t,e,n,i,o=this,r=[o];do{for(t=r.reverse(),r=[];o=t.pop();)if(yield o,e=o.children)for(n=0,i=e.length;n<i;++n)r.push(e[n])}while(r.length)}};(function t(e){function n(t,n,i,o,r){if((a=t._squarify)&&a.ratio===e)for(var a,s,c,l,u,h=-1,d=a.length,f=t.value;++h<d;){for(c=(s=a[h]).children,l=s.value=0,u=c.length;l<u;++l)s.value+=c[l].value;s.dice?Vd(s,n,i,o,f?i+=(r-i)*s.value/f:r):Ud(s,n,i,f?n+=(o-n)*s.value/f:o,r),f-=s.value}else t._squarify=a=jd(e,t,n,i,o,r),a.ratio=e}return n.ratio=function(e){return t((e=+e)>1?e:1)},n})(Hd);function Jd(t){return((t=Math.exp(t))+1/t)/2}const tf=function t(e,n,i){function o(t,o){var r,a,s=t[0],c=t[1],l=t[2],u=o[0],h=o[1],d=o[2],f=u-s,p=h-c,g=f*f+p*p;if(g<1e-12)a=Math.log(d/l)/e,r=function(t){return[s+t*f,c+t*p,l*Math.exp(e*t*a)]};else{var v=Math.sqrt(g),b=(d*d-l*l+i*g)/(2*l*n*v),m=(d*d-l*l-i*g)/(2*d*n*v),y=Math.log(Math.sqrt(b*b+1)-b),x=Math.log(Math.sqrt(m*m+1)-m);a=(x-y)/e,r=function(t){var i=t*a,o=Jd(y),r=l/(n*v)*(o*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(e*i+y)-function(t){return((t=Math.exp(t))-1/t)/2}(y));return[s+r*f,c+r*p,l*o/Jd(e*i+y)]}}return r.duration=1e3*a*e/Math.SQRT2,r}return o.rho=function(e){var n=Math.max(.001,+e),i=n*n;return t(n,i,i*i)},o}(Math.SQRT2,2,4),ef=t=>()=>t;function nf(t,{sourceEvent:e,target:n,transform:i,dispatch:o}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:o}})}function of(t,e,n){this.k=t,this.x=e,this.y=n}of.prototype={constructor:of,scale:function(t){return 1===t?this:new of(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new of(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var rf=new of(1,0,0);function af(t){for(;!t.__zoom;)if(!(t=t.parentNode))return rf;return t.__zoom}function sf(t){t.stopImmediatePropagation()}function cf(t){t.preventDefault(),t.stopImmediatePropagation()}function lf(t){return!(t.ctrlKey&&"wheel"!==t.type||t.button)}function uf(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t).hasAttribute("viewBox")?[[(t=t.viewBox.baseVal).x,t.y],[t.x+t.width,t.y+t.height]]:[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]:[[0,0],[t.clientWidth,t.clientHeight]]}function hf(){return this.__zoom||rf}function df(t){return-t.deltaY*(1===t.deltaMode?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function ff(){return navigator.maxTouchPoints||"ontouchstart"in this}function pf(t,e,n){var i=t.invertX(e[0][0])-n[0][0],o=t.invertX(e[1][0])-n[1][0],r=t.invertY(e[0][1])-n[0][1],a=t.invertY(e[1][1])-n[1][1];return t.translate(o>i?(i+o)/2:Math.min(0,i)||Math.max(0,o),a>r?(r+a)/2:Math.min(0,r)||Math.max(0,a))}af.prototype=of.prototype;var gf="object"==typeof globalThis&&null!==globalThis&&globalThis.Object===Object&&globalThis||"object"==typeof global&&null!==global&&global.Object===Object&&global||"object"==typeof self&&null!==self&&self.Object===Object&&self||Function("return this")(),vf=null==gf?void 0:gf.document,bf=function(t){var e="function"==typeof(null==t?void 0:t.requestAnimationFrame)&&"function"==typeof(null==t?void 0:t.cancelAnimationFrame),n="function"==typeof(null==t?void 0:t.requestIdleCallback)&&"function"==typeof(null==t?void 0:t.cancelIdleCallback),i=function(t){return setTimeout(t,1)},o=function(t){return clearTimeout(t)};return[e?t.requestAnimationFrame:i,e?t.cancelAnimationFrame:o,n?t.requestIdleCallback:i,n?t.cancelIdleCallback:o]}(gf),mf=bf[0],yf=bf[2],xf={AREA:"area",AREA_LINE_RANGE:"area-line-range",AREA_SPLINE:"area-spline",AREA_SPLINE_RANGE:"area-spline-range",AREA_STEP:"area-step",BAR:"bar",BUBBLE:"bubble",CANDLESTICK:"candlestick",DONUT:"donut",GAUGE:"gauge",LINE:"line",PIE:"pie",POLAR:"polar",RADAR:"radar",SCATTER:"scatter",SPLINE:"spline",STEP:"step",TREEMAP:"treemap"},_f={AREA:"initArea",AREA_LINE_RANGE:"initArea",AREA_SPLINE:"initArea",AREA_SPLINE_RANGE:"initArea",AREA_STEP:"initArea",BAR:"initBar",BUBBLE:"initCircle",CANDLESTICK:"initCandlestick",DONUT:"initArc",GAUGE:"initArc",LINE:"initLine",PIE:"initArc",POLAR:"initPolar",RADAR:"initCircle",SCATTER:"initCircle",SPLINE:"initLine",STEP:"initLine",TREEMAP:"initTreemap"},wf={Area:[xf.AREA,xf.AREA_SPLINE,xf.AREA_SPLINE_RANGE,xf.AREA_LINE_RANGE,xf.AREA_STEP],AreaRange:[xf.AREA_SPLINE_RANGE,xf.AREA_LINE_RANGE],Arc:[xf.PIE,xf.DONUT,xf.GAUGE,xf.POLAR,xf.RADAR],Line:[xf.LINE,xf.SPLINE,xf.AREA,xf.AREA_SPLINE,xf.AREA_SPLINE_RANGE,xf.AREA_LINE_RANGE,xf.STEP,xf.AREA_STEP],Step:[xf.STEP,xf.AREA_STEP],Spline:[xf.SPLINE,xf.AREA_SPLINE,xf.AREA_SPLINE_RANGE]},Tf=function(){return Tf=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Tf.apply(this,arguments)};function kf(t,e,n){if(n||2===arguments.length)for(var i,o=0,r=e.length;o<r;o++)!i&&o in e||(i||(i=Array.prototype.slice.call(e,0,o)),i[o]=e[o]);return t.concat(i||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError;var Cf=function(t){return t||0===t},Sf=function(t){return"function"==typeof t},Af=function(t){return"string"==typeof t},$f=function(t){return"number"==typeof t},Ef=function(t){return void 0===t},Mf=function(t){return void 0!==t},Of=function(t){return"boolean"==typeof t},Df=function(t){return Math.ceil(t)+.5},Pf=function(t){return t[1]-t[0]},Rf=function(t){return"object"==typeof t},If=function(t){return Ef(t)||null===t||Af(t)&&0===t.length||Rf(t)&&!(t instanceof Date)&&0===Object.keys(t).length||$f(t)&&isNaN(t)},Lf=function(t){return!If(t)},zf=function(t){return Array.isArray(t)},Bf=function(t){return t&&!(null==t?void 0:t.nodeType)&&Rf(t)&&!zf(t)};function Nf(t,e,n){return Mf(t[e])?t[e]:n}function Ff(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var o=Sf(t);return o&&t.call.apply(t,kf([e],n,!1)),o}function Xf(t,e){var n=0,i=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];! --n&&e.apply.apply(e,kf([this],t,!1))};"duration"in t?t.each((function(){return++n})).on("end",i):(++n,t.call(i))}function Vf(t){return Af(t)?t.replace(/<(script|img)?/gi,"&lt;").replace(/(script)?>/gi,"&gt;"):t}function Uf(t,e,n,i){if(void 0===n&&(n=[-1,1]),void 0===i&&(i=!1),t&&Af(e))if(-1===e.indexOf("\n"))t.text(e);else{var o=[t.text(),e].map((function(t){return t.replace(/[\s\n]/g,"")}));if(o[0]!==o[1]){var r=e.split("\n"),a=i?r.length-1:1;t.html(""),r.forEach((function(e,i){t.append("tspan").attr("x",0).attr("dy","".concat(0===i?n[0]*a:n[1],"em")).text(e)}))}}}function Hf(t){var e=t.getBBox(),n=e.x,i=e.y,o=e.width,r=e.height;return[{x:n,y:i+r},{x:n,y:i},{x:n+o,y:i},{x:n+o,y:i+r}]}function jf(t,e){var n,i=t&&(null===(n=t.touches||t.sourceEvent&&t.sourceEvent.touches)||void 0===n?void 0:n[0]),o=[0,0];try{o=Gr(i||t,e)}catch(t){}return o.map((function(t){return isNaN(t)?0:t}))}function Yf(t){var e,n=t.event,i=t.$el,o=i.subchart.main||i.main;return n&&"brush"===n.type?e=n.selection:o&&(e=o.select(".bb-brush").node())&&(e=Il(e)),e}function qf(t){return!("rect"in t)||"rect"in t&&t.hasAttribute("width")&&t.rect.width!==+t.getAttribute("width")?t.rect=t.getBoundingClientRect():t.rect}function Gf(t,e,n){void 0===t&&(t=!0),void 0===e&&(e=0),void 0===n&&(n=1e4);var i=gf.crypto||gf.msCrypto,o=i?e+i.getRandomValues(new Uint32Array(1))[0]%(n-e+1):Math.floor(Math.random()*(n-e)+e);return t?String(o):o}function Wf(t,e,n,i,o){if(n>i)return-1;var r=Math.floor((n+i)/2),a=t[r],s=a.x,c=a.w,l=void 0===c?0:c;return o&&(s=t[r].y,l=t[r].h),e>=s&&e<=s+l?r:e<s?Wf(t,e,n,r-1,o):Wf(t,e,r+1,i,o)}function Zf(t){var e=Yf(t);return!e||e[0]===e[1]}function Kf(t,e){for(var n in void 0===t&&(t={}),zf(e)&&e.forEach((function(e){return Kf(t,e)})),e)/^\d+$/.test(n)||n in t||(t[n]=e[n]);return t}var Qf=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};var Jf=function(t){return[].slice.call(t)};function tp(t){var e=t?t.transform:null,n=e&&e.baseVal;return n&&n.numberOfItems?n.getItem(0).matrix:{a:0,b:0,c:0,d:0,e:0,f:0}}function ep(t){var e=t[0]instanceof Date,n=(e?t.map(Number):t).filter((function(t,e,n){return n.indexOf(t)===e}));return e?n.map((function(t){return new Date(t)})):n}function np(t){return t&&t.length?t.reduce((function(t,e){return t.concat(e)})):[]}function ip(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!e.length||1===e.length&&!e[0])return t;var i=e.shift();return Bf(t)&&Bf(i)&&Object.keys(i).forEach((function(e){var n=i[e];Bf(n)?(!t[e]&&(t[e]={}),t[e]=ip(t[e],n)):t[e]=zf(n)?n.concat():n})),ip.apply(void 0,kf([t],e,!1))}function op(t,e){var n;return void 0===e&&(e=!0),t[0]instanceof Date?n=e?function(t,e){return t-e}:function(t,e){return e-t}:e&&!t.every(isNaN)?n=function(t,e){return t-e}:e||(n=function(t,e){return(t>e?-1:t<e&&1)||t===e&&0}),t.concat().sort(n)}function rp(t,e){var n=e.filter((function(t){return Lf(t)}));return n.length?$f(n[0])?n=Math[t].apply(Math,n):n[0]instanceof Date&&(n=op(n,"min"===t)[0]):n=void 0,n}var ap={mouse:function(){try{return new MouseEvent("t"),function(t,e,n){void 0===n&&(n={bubbles:!1,cancelable:!1,screenX:0,screenY:0,clientX:0,clientY:0}),t.dispatchEvent(new MouseEvent(e,n))}}catch(t){return function(t,e,n){void 0===n&&(n={bubbles:!1,cancelable:!1,screenX:0,screenY:0,clientX:0,clientY:0});var i=vf.createEvent("MouseEvent");i.initMouseEvent(e,n.bubbles,n.cancelable,gf,0,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),t.dispatchEvent(i)}}}(),touch:function(t,e,n){var i=new Touch(ip({identifier:Date.now(),target:t,radiusX:2.5,radiusY:2.5,rotationAngle:10,force:.5},n));t.dispatchEvent(new TouchEvent(e,{cancelable:!0,bubbles:!0,shiftKey:!0,touches:[i],targetTouches:[],changedTouches:[i]}))}};function sp(t,e){var n=t;for(var i in e)n=n.replace(new RegExp("{=".concat(i,"}"),"g"),e[i]);return n}function cp(t){var e,n;if(t instanceof Date)n=t;else if(Af(t)){var i=this.config;n=null!==(e=this.format.dataTime(i.data_xFormat)(t))&&void 0!==e?e:new Date(t)}else $f(t)&&!isNaN(t)&&(n=new Date(+t));return n&&!isNaN(+n)||console&&console.error,n}function lp(){return!1===(null==vf?void 0:vf.hidden)||"visible"===(null==vf?void 0:vf.visibilityState)}function up(t,e){!1===e()?mf((function(){return up(t,e)})):t()}function hp(t){var e,n=t,i=n.config,o="";if(If(i.data_type||i.data_types)&&!n[_f.LINE])o="line";else for(var r in _f){var a=xf[r];if(n.hasType(a)&&!n[_f[r]]){o=a;break}}o&&function(t,e){var n,i="[billboard.js]";null===(n=gf.console)||void 0===n||n.error;throw Error("".concat(i," ").concat(t.replace(/\%c([a-z-]+)/i,"'$1' ")," ").concat(e))}("Please, make sure if %c".concat((void 0===e&&(e="-"),o.split(e).map((function(t,e){return e?t.charAt(0).toUpperCase()+t.slice(1).toLowerCase():t.toLowerCase()})).join(""))),"module has been imported and specified correctly.")}var dp={button:"bb-button",chart:"bb-chart",empty:"bb-empty",main:"bb-main",target:"bb-target",EXPANDED:"_expanded_"},fp={arc:"bb-arc",arcLabelLine:"bb-arc-label-line",arcs:"bb-arcs",chartArc:"bb-chart-arc",chartArcs:"bb-chart-arcs",chartArcsBackground:"bb-chart-arcs-background",chartArcsTitle:"bb-chart-arcs-title",needle:"bb-needle"},pp={area:"bb-area",areas:"bb-areas"},gp={axis:"bb-axis",axisX:"bb-axis-x",axisXLabel:"bb-axis-x-label",axisY:"bb-axis-y",axisY2:"bb-axis-y2",axisY2Label:"bb-axis-y2-label",axisYLabel:"bb-axis-y-label"},vp={bar:"bb-bar",bars:"bb-bars",chartBar:"bb-chart-bar",chartBars:"bb-chart-bars"},bp={candlestick:"bb-candlestick",candlesticks:"bb-candlesticks",chartCandlestick:"bb-chart-candlestick",chartCandlesticks:"bb-chart-candlesticks",valueDown:"bb-value-down",valueUp:"bb-value-up"},mp={chartCircles:"bb-chart-circles",circle:"bb-circle",circles:"bb-circles"},yp={colorPattern:"bb-color-pattern",colorScale:"bb-colorscale"},xp={dragarea:"bb-dragarea",INCLUDED:"_included_"},_p={chartArcsGaugeMax:"bb-chart-arcs-gauge-max",chartArcsGaugeMin:"bb-chart-arcs-gauge-min",chartArcsGaugeUnit:"bb-chart-arcs-gauge-unit",chartArcsGaugeTitle:"bb-chart-arcs-gauge-title",gaugeValue:"bb-gauge-value"},wp={legend:"bb-legend",legendBackground:"bb-legend-background",legendItem:"bb-legend-item",legendItemEvent:"bb-legend-item-event",legendItemHidden:"bb-legend-item-hidden",legendItemPoint:"bb-legend-item-point",legendItemTile:"bb-legend-item-tile"},Tp={chartLine:"bb-chart-line",chartLines:"bb-chart-lines",line:"bb-line",lines:"bb-lines"},kp={eventRect:"bb-event-rect",eventRects:"bb-event-rects",eventRectsMultiple:"bb-event-rects-multiple",eventRectsSingle:"bb-event-rects-single"},Cp={focused:"bb-focused",defocused:"bb-defocused",legendItemFocused:"bb-legend-item-focused",xgridFocus:"bb-xgrid-focus",ygridFocus:"bb-ygrid-focus"},Sp={grid:"bb-grid",gridLines:"bb-grid-lines",xgrid:"bb-xgrid",xgridLine:"bb-xgrid-line",xgridLines:"bb-xgrid-lines",xgrids:"bb-xgrids",ygrid:"bb-ygrid",ygridLine:"bb-ygrid-line",ygridLines:"bb-ygrid-lines",ygrids:"bb-ygrids"},Ap={chartRadar:"bb-chart-radar",chartRadars:"bb-chart-radars"},$p={region:"bb-region",regions:"bb-regions"},Ep={selectedCircle:"bb-selected-circle",selectedCircles:"bb-selected-circles",SELECTED:"_selected_"},Mp={shape:"bb-shape",shapes:"bb-shapes"},Op={brush:"bb-brush",subchart:"bb-subchart"},Dp={chartText:"bb-chart-text",chartTexts:"bb-chart-texts",text:"bb-text",texts:"bb-texts",title:"bb-title",TextOverlapping:"text-overlapping"},Pp={tooltip:"bb-tooltip",tooltipContainer:"bb-tooltip-container",tooltipName:"bb-tooltip-name"},Rp={treemap:"bb-treemap",chartTreemap:"bb-chart-treemap",chartTreemaps:"bb-chart-treemaps"},Ip={buttonZoomReset:"bb-zoom-reset",zoomBrush:"bb-zoom-brush"},Lp=Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf(Tf({},dp),fp),pp),gp),vp),bp),mp),yp),xp),_p),wp),Tp),kp),Cp),Sp),Ap),$p),Ep),Mp),Op),Dp),Pp),Rp),Ip),zp={element:function(){return{chart:null,main:null,svg:null,axis:{x:null,y:null,y2:null,subX:null},defs:null,tooltip:null,legend:null,title:null,subchart:{main:null,bar:null,line:null,area:null},arcs:null,bar:null,candlestick:null,line:null,area:null,circle:null,radar:null,text:null,grid:{main:null,x:null,y:null},gridLines:{main:null,x:null,y:null},region:{main:null,list:null},eventRect:null,zoomResetBtn:null}},state:function(){return{width:0,width2:0,height:0,height2:0,margin:{top:0,bottom:0,left:0,right:0},margin2:{top:0,bottom:0,left:0,right:0},margin3:{top:0,bottom:0,left:0,right:0},arcWidth:0,arcHeight:0,xAxisHeight:0,hasAxis:!1,hasRadar:!1,hasTreemap:!1,cssRule:{},current:{domain:void 0,width:0,height:0,dataMax:0,maxTickSize:{x:{width:0,height:0,ticks:[],clipPath:0,domain:""},y:{width:0,height:0,domain:""},y2:{width:0,height:0,domain:""}},types:[],needle:void 0},isLegendRight:!1,isLegendInset:!1,isLegendTop:!1,isLegendLeft:!1,legendStep:0,legendItemWidth:0,legendItemHeight:0,legendHasRendered:!1,eventReceiver:{currentIdx:-1,rect:{},data:[],coords:[]},axis:{x:{padding:{left:0,right:0},tickCount:0}},rotatedPadding:{left:30,right:0,top:5},withoutFadeIn:{},inputType:"",datetimeId:"",clip:{id:"",idXAxis:"",idYAxis:"",idXAxisTickTexts:"",idGrid:"",idSubchart:"",path:"",pathXAxis:"",pathYAxis:"",pathXAxisTickTexts:"",pathGrid:""},event:null,dragStart:null,dragging:!1,flowing:!1,cancelClick:!1,mouseover:!1,rendered:!1,transiting:!1,redrawing:!1,resizing:!1,toggling:!1,zooming:!1,hasNegativeValue:!1,hasPositiveValue:!0,orgAreaOpacity:"0.2",orgConfig:{},hiddenTargetIds:[],hiddenLegendIds:[],focusedTargetIds:[],defocusedTargetIds:[],radius:0,innerRadius:0,outerRadius:void 0,innerRadiusRatio:0,gaugeArcWidth:0,radiusExpanded:0,xgridAttr:{x1:null,x2:null,y1:null,y2:null}}}},Bp=function(){function t(){var t=this;Object.keys(zp).forEach((function(e){t[e]=new zp[e]}))}return t.prototype.getStore=function(t){return this[t]},t}(),Np={bindto:"#chart",background:{},clipPath:!0,svg_classname:void 0,size_width:void 0,size_height:void 0,padding:!0,padding_mode:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,resize_auto:!0,resize_timer:!0,onclick:void 0,onover:void 0,onout:void 0,onresize:void 0,onresized:void 0,onbeforeinit:void 0,oninit:void 0,onafterinit:void 0,onrendered:void 0,transition_duration:250,plugins:[],render:{},regions:[]},Fp={boost_useCssRule:!1,boost_useWorker:!1},Xp={data_x:void 0,data_idConverter:function(t){return t},data_names:{},data_classes:{},data_type:void 0,data_types:{},data_order:"desc",data_groups:[],data_groupsZeroAs:"positive",data_color:void 0,data_colors:{},data_labels:{},data_labels_backgroundColors:void 0,data_labels_colors:void 0,data_labels_position:{},data_hide:!1,data_filter:void 0,data_onclick:function(){},data_onover:function(){},data_onout:function(){},data_onshown:void 0,data_onhidden:void 0,data_onmin:void 0,data_onmax:void 0,data_url:void 0,data_headers:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:"csv",data_keys:void 0,data_empty_label_text:""},Vp={color_pattern:[],color_tiles:void 0,color_threshold:{},color_onover:void 0},Up={interaction_enabled:!0,interaction_brighten:!0,interaction_inputType_mouse:!0,interaction_inputType_touch:{}},Hp={legend_contents_bindto:void 0,legend_contents_template:"<span style='color:#fff;padding:5px;background-color:{=COLOR}'>{=TITLE}</span>",legend_equally:!1,legend_hide:!1,legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_interaction:!0,legend_item_dblclick:!1,legend_item_onclick:void 0,legend_item_onover:void 0,legend_item_onout:void 0,legend_item_tile_width:10,legend_item_tile_height:10,legend_item_tile_r:5,legend_item_tile_type:"rectangle",legend_padding:0,legend_position:"bottom",legend_show:!0,legend_usePoint:!1},jp={title_text:void 0,title_padding:{top:0,right:0,bottom:0,left:0},title_position:"center"},Yp={tooltip_show:!0,tooltip_doNotHide:!1,tooltip_grouped:!0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_position:void 0,tooltip_contents:{},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:void 0,tooltip_linked:!1,tooltip_linked_name:"",tooltip_onshow:function(){},tooltip_onhide:function(){},tooltip_onshown:function(){},tooltip_onhidden:function(){},tooltip_order:null},qp=function(){function t(){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=function(t){if(Bf(t)&&t.constructor){var e=new t.constructor;for(var i in t)e[i]=n(t[i]);return e}return t};return t.map((function(t){return n(t)})).reduce((function(t,e){return Tf(Tf({},t),e)}))}(Np,Fp,Xp,Vp,Up,Hp,jp,Yp,t.data)}return t.setOptions=function(t){this.data=t.reduce((function(t,e){return Tf(Tf({},t),e)}),this.data)},t.data={},t}(),Gp="$baseLength",Wp="__colorPattern__",Zp="$dataMinMax",Kp="$dataTotalSum",Qp="$totalPerIndex",Jp="legendItemTextBox",tg="setOverOut",eg="callOverOutForTouch",ng="textRect",ig=function(){function t(){this.cache={}}return t.prototype.add=function(t,e,n){return void 0===n&&(n=!1),this.cache[t]=n?this.cloneTarget(e):e,this.cache[t]},t.prototype.remove=function(t){var e=this;(Af(t)?[t]:t).forEach((function(t){return delete e.cache[t]}))},t.prototype.get=function(t,e){if(void 0===e&&(e=!1),e&&Array.isArray(t)){for(var n=[],i=0,o=void 0;o=t[i];i++)o in this.cache&&n.push(this.cloneTarget(this.cache[o]));return n}var r=this.cache[t];return Cf(r)?r:null},t.prototype.reset=function(t){for(var e in this.cache)(t||/^\$/.test(e))&&(this.cache[e]=null)},t.prototype.cloneTarget=function(t){return{id:t.id,id_org:t.id_org,values:t.values.map((function(t){return{x:t.x,value:t.value,id:t.id}}))}},t}(),og=gf.setTimeout,rg=gf.clearTimeout;function ag(){var t=[],e=function(e,n){up((function(){null==n||n()}),(function(){for(var e,n=0,i=0,o=void 0;o=t[i];i++)if(!0===o||(null===(e=o.empty)||void 0===e?void 0:e.call(o)))n++;else{if(!1===lp()){n=t.length;break}try{o.transition()}catch(t){n++}}return n===t.length}))};return e.add=function(e){zf(e)?t=t.concat(e):t.push(e)},e}var sg={};function cg(t,e,n,i){void 0===t&&(t=!0);var o,r,a=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var o=e.apply(void 0,t);n(o)};if(gf.Worker&&t){var s=function(t,e){var n,i=t.toString(),o=i.replace(/(function|[\s\W\n])/g,"").substring(0,15);return o in sg||(sg[o]=new gf.Blob(["".concat(null!==(n=null==e?void 0:e.map(String).join(";"))&&void 0!==n?n:"","\n\n\t\t\tself.onmessage=function({data}) {\n\t\t\t\tconst result = (").concat(i,").apply(null, data);\n\t\t\t\tself.postMessage(result);\n\t\t\t};")],{type:"text/javascript"})),gf.URL.createObjectURL(sg[o])}(e,i),c=(o=s,(r=new gf.Worker(o)).onerror=function(t){console.error},r);a=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];c.postMessage(t),c.onmessage=function(t){return gf.URL.revokeObjectURL(s),n(t.data)}}}return a}function lg(t){var e=[];return t.forEach((function(t,n){var i=t[0];t.forEach((function(t,o){if(o>0){if(void 0===e[o-1]&&(e[o-1]={}),void 0===t)throw new Error("Source data is missing a component at (".concat(n,", ").concat(o,")!"));e[o-1][i]=t}}))})),e}function ug(t){var e=t[0],n=[];return t.forEach((function(t,i){if(i>0){var o={};t.forEach((function(t,n){if(void 0===t)throw new Error("Source data is missing a component at (".concat(i,", ").concat(n,")!"));o[e[n]]=t})),n.push(o)}})),n}function hg(t,e){var n,i,o=[];if(Array.isArray(t)){n=e.x?e.value.concat(e.x):e.value,o.push(n),t.forEach((function(t){var e=n.map((function(e){var n=function(t,e){if(void 0!==t[e])return t[e];var n=e.replace(/\[(\w+)\]/g,".$1").replace(/^\./,"").split("."),i=t;return n.some((function(t){return!(i=i&&t in i?i[t]:void 0)})),i}(t,e);return void 0===n&&(n=null),n}));o.push(e)})),i=ug(o)}else Object.keys(t).forEach((function(e){var n,i=t[e].concat();null===(n=i.unshift)||void 0===n||n.call(i,e),o.push(i)})),i=lg(o);return i}function dg(t,e){var n,i=t.rows(e);return 1===i.length?(n=[{}],i[0].forEach((function(t){n[0][t]=null}))):n=t.parse(e),n}function fg(t){return dg({rows:jl,parse:Hl},t)}function pg(t){return dg({rows:Gl,parse:ql},t)}function gg(t,e){var n=t||(null==e?void 0:e.data_keys);return(null==n?void 0:n.x)&&(e.data_x=n.x),n}var vg={convertData:function(t,e){var n=this.config,i=n.boost_useWorker,o=t;if(t.bindto&&(o={},["url","mimeType","headers","keys","json","keys","rows","columns"].forEach((function(e){var n="data_".concat(e);n in t&&(o[e]=t[n])}))),o.url&&e)!function(t,e,n,i,o){void 0===e&&(e="csv");var r=new XMLHttpRequest,a={csv:fg,tsv:pg,json:hg};r.open("GET",t),n&&Object.keys(n).forEach((function(t){r.setRequestHeader(t,n[t])})),r.onreadystatechange=function(){if(4===r.readyState){if(200!==r.status)throw new Error("".concat(t,": Something went wrong loading!"));var n=r.responseText;n&&o.call(this,a[e]("json"===e?JSON.parse(n):n,i))}},r.send()}(o.url,o.mimeType,o.headers,gg(o.keys,n),e);else if(o.json)cg(i,hg,e,[lg,ug])(o.json,gg(o.keys,n));else if(o.rows)cg(i,ug,e)(o.rows);else if(o.columns)cg(i,lg,e)(o.columns);else if(t.bindto)throw Error("url or json or rows or columns is required.")},convertDataToTargets:function(t,e){var n=this,i=this,o=i.axis,r=i.config,a=i.state,s=r.data_type,c=!1,l=!1,u=!1;o&&(c=o.isCategorized(),l=o.isTimeSeries(),u=o.isCustomX());var h,d=Object.keys(t[0]||{}),f=d.length?d.filter(i.isNotX,i):[],p=d.length?d.filter(i.isX,i):[];f.forEach((function(o){var a=n.getXKey(o);u||l?p.indexOf(a)>=0?h=(e&&i.data.xs[o]||[]).concat(t.map((function(t){return t[a]})).filter(Cf).map((function(t,e){return i.generateTargetX(t,o,e)}))):r.data_x?h=n.getOtherTargetXs():Lf(r.data_xs)&&(h=i.getXValuesOfXKey(a,i.data.targets)):h=t.map((function(t,e){return e})),h&&(n.data.xs[o]=h)})),f.forEach((function(t){if(!n.data.xs[t])throw new Error('x is not defined for id = "'.concat(t,'".'))}));var g=f.map((function(e,n){var o=r.data_idConverter.bind(i.api)(e),s=i.getXKey(e),l=u&&c,h=l&&t.map((function(t){return t.x})).every((function(t){return r.axis_x_categories.indexOf(t)>-1})),d=t.__append__,f=null===s&&d?i.api.data.values(e).length:0;return{id:o,id_org:e,values:t.map((function(t,c){var u,p=t[s],g=t[e];return g=null===g||isNaN(g)||Bf(g)?zf(g)||Bf(g)?g:null:+g,!l&&!a.hasRadar||0!==n||Ef(p)?u=i.generateTargetX(p,e,f+c):(h||0!==n||0!==c||d||(r.axis_x_categories=[]),-1===(u=r.axis_x_categories.indexOf(p))&&(u=r.axis_x_categories.length,r.axis_x_categories.push(p))),(Ef(g)||i.data.xs[e].length<=c)&&(u=void 0),{x:u,value:g,id:o,index:-1}})).filter((function(t){return Mf(t.x)}))}}));if(g.forEach((function(t){var e;r.data_xSort&&(t.values=t.values.sort((function(t,e){return(t.x||0===t.x?t.x:1/0)-(e.x||0===e.x?e.x:1/0)}))),t.values.forEach((function(t,e){return t.index=e})),null===(e=i.data.xs[t.id])||void 0===e||e.sort((function(t,e){return t-e}))})),a.hasNegativeValue=i.hasNegativeValueInTargets(g),a.hasPositiveValue=i.hasPositiveValueInTargets(g),s&&i.isValidChartType(s)){var v=i.mapToIds(g).filter((function(t){return!(t in r.data_types)||!i.isValidChartType(r.data_types[t])}));i.setTargetType(v,s)}return g.forEach((function(t){return i.cache.add(t.id_org,t,!0)})),g}},bg={isX:function(t){var e=this.config,n=e.data_x&&t===e.data_x,i=Lf(e.data_xs)&&function(t,e){var n=!1;return Object.keys(t).forEach((function(i){return t[i]===e&&(n=!0)})),n}(e.data_xs,t);return n||i},isNotX:function(t){return!this.isX(t)},isStackNormalized:function(){var t=this.config;return!(!t.data_stack_normalize||!t.data_groups.length)},isGrouped:function(t){var e=this.config.data_groups;return t?e.some((function(e){return e.indexOf(t)>=0&&e.length>1})):e.length>0},getXKey:function(t){var e=this.config;return e.data_x?e.data_x:Lf(e.data_xs)?e.data_xs[t]:null},getXValuesOfXKey:function(t,e){var n,i=this;return(e&&Lf(e)?i.mapToIds(e):[]).forEach((function(e){i.getXKey(e)===t&&(n=i.data.xs[e])})),n},getIndexByX:function(t,e){return e?e.indexOf(Af(t)?t:+t):(this.filterByX(this.data.targets,t)[0]||{index:null}).index},getXValue:function(t,e){var n=this;return t in n.data.xs&&n.data.xs[t]&&Cf(n.data.xs[t][e])?n.data.xs[t][e]:e},getOtherTargetXs:function(){var t=Object.keys(this.data.xs);return t.length?this.data.xs[t[0]]:null},getOtherTargetX:function(t){var e=this.getOtherTargetXs();return e&&t<e.length?e[t]:null},addXs:function(t){var e=this.config;Object.keys(t).forEach((function(n){e.data_xs[n]=t[n]}))},isMultipleX:function(){return Lf(this.config.data_xs)||this.hasType("bubble")||this.hasType("scatter")},addName:function(t){var e,n=this.config;return t&&(e=n.data_names[t.id],t.name=void 0!==e?e:t.id),t},getAllValuesOnIndex:function(t,e){void 0===e&&(e=!1);var n=this,i=n.filterTargetsToShow(n.data.targets).map((function(e){return n.addName(n.getValueOnIndex(e.values,t))}));return e&&(i=i.filter((function(t){return t&&"value"in t&&Cf(t.value)}))),i},getValueOnIndex:function(t,e){var n=t.filter((function(t){return t.index===e}));return n.length?n[0]:null},updateTargetX:function(t,e){var n=this;t.forEach((function(t){t.values.forEach((function(i,o){i.x=n.generateTargetX(e[o],t.id,o)})),n.data.xs[t.id]=e}))},updateTargetXs:function(t,e){var n=this;t.forEach((function(t){e[t.id]&&n.updateTargetX([t],e[t.id])}))},generateTargetX:function(t,e,n){var i=this,o=i.axis,r=(null==o?void 0:o.isCategorized())?n:t||n;if(null==o?void 0:o.isTimeSeries()){var a=cp.bind(i);r=a(t||i.getXValue(e,n))}else(null==o?void 0:o.isCustomX())&&!(null==o?void 0:o.isCategorized())&&(r=Cf(t)?+t:i.getXValue(e,n));return r},updateXs:function(t){t.length&&(this.axis.xs=t.map((function(t){return t.x})))},getPrevX:function(t){var e=this.axis.xs[t-1];return Mf(e)?e:null},getNextX:function(t){var e=this.axis.xs[t+1];return Mf(e)?e:null},getBaseValue:function(t){var e=this,n=e.state.hasAxis,i=t.value;return i&&n&&(e.isAreaRangeType(t)?i=e.getRangedData(t,"mid"):e.isBubbleZType(t)&&(i=e.getBubbleZData(i,"y"))),i},getMinMaxValue:function(t){var e,n,i=this.getBaseValue.bind(this);return(t||this.data.targets.map((function(t){return t.values}))).forEach((function(t,o){var r=t.map(i).filter($f);e=Math.min.apply(Math,kf([o?e:1/0],r,!1)),n=Math.max.apply(Math,kf([o?n:-1/0],r,!1))})),{min:e,max:n}},getMinMaxData:function(){var t=this,e=Zp,n=t.cache.get(e);if(!n){var i=t.data.targets.map((function(t){return t.values})),o=t.getMinMaxValue(i),r=[],a=[];i.forEach((function(e){var n=t.getFilteredDataByValue(e,o.min),i=t.getFilteredDataByValue(e,o.max);n.length&&(r=r.concat(n)),i.length&&(a=a.concat(i))})),t.cache.add(e,n={min:r,max:a})}return n},getTotalPerIndex:function(){var t=this,e=Qp,n=t.cache.get(e);return!t.config.data_groups.length&&!t.isStackNormalized()||n||(n=[],t.data.targets.forEach((function(t){t.values.forEach((function(t,e){n[e]||(n[e]=0),n[e]+=$f(t.value)?t.value:0}))}))),n},getTotalDataSum:function(t){var e=this,n=Kp,i=e.cache.get(n);if(!$f(i)){var o=np(e.data.targets.map((function(t){return t.values}))).map((function(t){return t.value}));i=o.length?o.reduce((function(t,e){return t+e})):0,e.cache.add(n,i)}return t&&(i-=e.getHiddenTotalDataSum()),i},getHiddenTotalDataSum:function(){var t=this.api,e=this.state.hiddenTargetIds,n=0;return e.length&&(n=t.data.values.bind(t)(e).reduce((function(t,e){return t+e}))),n},getFilteredDataByValue:function(t,e){var n=this;return t.filter((function(t){return n.getBaseValue(t)===e}))},getMaxDataCount:function(){return Math.max.apply(Math,kf(kf([],this.data.targets.map((function(t){return t.values.length})),!1),[0],!1))},getMaxDataCountTarget:function(){var t=this.filterTargetsToShow()||[],e=t.length,n=this.config.axis_x_inverted;return e>1?(t=t.map((function(t){return t.values})).reduce((function(t,e){return t.concat(e)})).map((function(t){return t.x})),t=op(ep(t)).map((function(t,e,i){return{x:t,index:n?i.length-e-1:e}}))):e&&(t=t[0].values.concat()),t},mapToIds:function(t){return t.map((function(t){return t.id}))},mapToTargetIds:function(t){return t?zf(t)?t.concat():[t]:this.mapToIds(this.data.targets)},hasTarget:function(t,e){for(var n=this.mapToIds(t),i=0,o=void 0;o=n[i];i++)if(o===e)return!0;return!1},isTargetToShow:function(t){return this.state.hiddenTargetIds.indexOf(t)<0},isLegendToShow:function(t){return this.state.hiddenLegendIds.indexOf(t)<0},filterTargetsToShow:function(t){var e=this;return(t||e.data.targets).filter((function(t){return e.isTargetToShow(t.id)}))},mapTargetsToUniqueXs:function(t){var e=this.axis,n=[];return(null==t?void 0:t.length)&&(n=ep(np(t.map((function(t){return t.values.map((function(t){return+t.x}))})))),n=(null==e?void 0:e.isTimeSeries())?n.map((function(t){return new Date(+t)})):n.map(Number)),op(n)},addTargetIds:function(t,e){var n=this.state;(zf(e)?e:[e]).forEach((function(e){n[t].indexOf(e)<0&&n[t].push(e)}))},removeTargetIds:function(t,e){var n=this.state;(zf(e)?e:[e]).forEach((function(e){var i=n[t].indexOf(e);i>=0&&n[t].splice(i,1)}))},addHiddenTargetIds:function(t){this.addTargetIds("hiddenTargetIds",t)},removeHiddenTargetIds:function(t){this.removeTargetIds("hiddenTargetIds",t)},addHiddenLegendIds:function(t){this.addTargetIds("hiddenLegendIds",t)},removeHiddenLegendIds:function(t){this.removeTargetIds("hiddenLegendIds",t)},getValuesAsIdKeyed:function(t){var e=this,n=e.state.hasAxis,i={},o=e.isMultipleX(),r=o?e.mapTargetsToUniqueXs(t).map((function(t){return Af(t)?t:+t})):null;return t.forEach((function(t){var a=[];t.values.filter((function(t){var e=t.value;return Cf(e)||null===e})).forEach((function(t){var i=t.value;null!==i&&e.isCandlestickType(t)&&(i=zf(i)?i.slice(0,4):[i.open,i.high,i.low,i.close]),zf(i)?a.push.apply(a,i):Bf(i)&&"high"in i?a.push.apply(a,Object.values(i)):e.isBubbleZType(t)?a.push(n&&e.getBubbleZData(i,"y")):o?a[e.getIndexByX(t.x,r)]=i:a.push(i)})),i[t.id]=a})),i},checkValueInTargets:function(t,e){for(var n,i=Object.keys(t),o=0;o<i.length;o++){n=t[i[o]].values;for(var r=0;r<n.length;r++)if(e(n[r].value))return!0}return!1},hasMultiTargets:function(){return this.filterTargetsToShow().length>1},hasNegativeValueInTargets:function(t){return this.checkValueInTargets(t,(function(t){return t<0}))},hasPositiveValueInTargets:function(t){return this.checkValueInTargets(t,(function(t){return t>0}))},orderTargets:function(t){var e=kf([],t,!0),n=this.getSortCompareFn();return n&&e.sort(n),e},getSortCompareFn:function(t){void 0===t&&(t=!1);var e,n=this.config.data_order,i=/asc/i.test(n),o=/desc/i.test(n);if(i||o){var r=function(t,e){return t+Math.abs(e.value)};e=function(e,n){var o="values"in e?e.values.reduce(r,0):e.value,a="values"in n?n.values.reduce(r,0):n.value;return t?i?o-a:a-o:i?a-o:o-a}}else Sf(n)&&(e=n.bind(this.api));return e||null},filterByX:function(t,e){return np(t.map((function(t){return t.values}))).filter((function(t){return t.x-e==0}))},filterRemoveNull:function(t){var e=this;return t.filter((function(t){return Cf(e.getBaseValue(t))}))},filterByXDomain:function(t,e){return t.map((function(t){return{id:t.id,id_org:t.id_org,values:t.values.filter((function(t){return e[0]<=t.x&&t.x<=e[1]}))}}))},hasDataLabel:function(){var t=this.config.data_labels;return Of(t)&&t||Rf(t)&&Lf(t)},getDataIndexFromEvent:function(t){var e,n=this.config,i=this.state,o=i.hasRadar,r=i.inputType,a=i.eventReceiver,s=a.coords,c=a.rect;if(o){var l=t.target;/tspan/i.test(l.tagName)&&(l=l.parentNode);var u=cs(l).datum();e=u&&1===Object.keys(u).length?u.index:void 0}else{var h=n.axis_rotated,d="touch"===r&&t.changedTouches?t.changedTouches[0]:t;e=Wf(s,h?d.clientY-c.top:d.clientX-c.left,0,s.length-1,h)}return e},getDataLabelLength:function(t,e,n){var i=this,o=[0,0];return i.$el.chart.select("svg").selectAll(".dummy").data([t,e]).enter().append("text").text((function(t){return i.dataLabelFormat(t.id)(t)})).each((function(t,e){o[e]=1.3*this.getBoundingClientRect()[n]})).remove(),o},isNoneArc:function(t){return this.hasTarget(this.data.targets,t.id)},isArc:function(t){return"data"in t&&this.hasTarget(this.data.targets,t.data.id)},findSameXOfValues:function(t,e){var n,i=t[e].x,o=[];for(n=e-1;n>=0&&i===t[n].x;n--)o.push(t[n]);for(n=e;n<t.length&&i===t[n].x;n++)o.push(t[n]);return o},findClosestFromTargets:function(t,e){var n=this,i=t.map((function(t){return n.findClosest(t.values,e)}));return n.findClosest(i,e)},findClosest:function(t,e){var n,i=this,o=i.$el.main,r=t.filter((function(t){return t&&Cf(t.value)}));return r.filter((function(t){return i.isBarType(t.id)||i.isCandlestickType(t.id)})).forEach((function(t){var e=i.isBarType(t.id)?".".concat(vp.chartBar,".").concat(dp.target).concat(i.getTargetSelectorSuffix(t.id)," .").concat(vp.bar,"-").concat(t.index):".".concat(bp.chartCandlestick,".").concat(dp.target).concat(i.getTargetSelectorSuffix(t.id)," .").concat(bp.candlestick,"-").concat(t.index," path");!n&&i.isWithinBar(o.select(e).node())&&(n=t)})),r.filter((function(t){return!i.isBarType(t.id)&&!i.isCandlestickType(t.id)})).forEach((function(t){var o=i.dist(t,e);o<i.getPointSensitivity(t)&&(o,n=t)})),n},dist:function(t,e){var n=this,i=n.config.axis_rotated,o=n.scale,r=+i,a=+!i,s=n.circleY(t,t.index),c=(o.zoom||o.x)(t.x);return Math.sqrt(Math.pow(c-e[r],2)+Math.pow(s-e[a],2))},convertValuesToStep:function(t){var e=this.axis,n=this.config.line_step_type,i=!!e&&e.isCategorized(),o=zf(t)?t.concat():[t];if(!i&&!/step\-(after|before)/.test(n))return t;if(o.length){var r=o[0],a=o[o.length-1],s=r.id,c=r.x;o.unshift({x:--c,value:r.value,id:s}),i&&"step-after"===n&&o.unshift({x:--c,value:r.value,id:s}),c=a.x,o.push({x:++c,value:a.value,id:s}),i&&"step-before"===n&&o.push({x:++c,value:a.value,id:s})}return o},convertValuesToRange:function(t){var e=zf(t)?t.concat():[t],n=[];return e.forEach((function(t){var e=t.x,i=t.id;n.push({x:e,id:i,value:t.value[0]}),n.push({x:e,id:i,value:t.value[2]})})),n},updateDataAttributes:function(t,e){var n=this.config["data_".concat(t)];return Ef(e)||(Object.keys(e).forEach((function(t){n[t]=e[t]})),this.redraw({withLegend:!0})),n},getRangedData:function(t,e,n){void 0===e&&(e=""),void 0===n&&(n="areaRange");var i=null==t?void 0:t.value;if(zf(i)){if("bar"===n)return i.reduce((function(t,e){return e-t}));var o={areaRange:["high","mid","low"],candlestick:["open","high","low","close","volume"]}[n].indexOf(e);return o>=0&&i?i[o]:void 0}return i&&e?i[e]:i},setRatioForGroupedData:function(t){var e=this;if(e.config.data_groups.length&&t.some((function(t){return e.isGrouped(t.id)}))){var n=function(t){return e.getRatio("index",t,!0)};t.forEach((function(t){"values"in t?t.values.forEach(n):n(t)}))}},getRatio:function(t,e,n){void 0===n&&(n=!1);var i=this,o=i.config,r=i.state,a=i.api,s=0;if(e&&a.data.shown().length)if(s=e.ratio||e.value,"arc"===t)if(i.pie.padAngle()())s=e.value/i.getTotalDataSum(!0);else{var c=o.gauge_fullCircle?i.getArcLength():-2*i.getGaugeStartAngle(),l=i.hasType("gauge")?c:2*Math.PI;s=(e.endAngle-e.startAngle)/l}else if("index"===t){var u=a.data.values.bind(a),h=this.getTotalPerIndex();if(r.hiddenTargetIds.length){var d=u(r.hiddenTargetIds,!1);d.length&&(d=d.reduce((function(t,e){return t.map((function(t,n){return($f(t)?t:0)+e[n]}))})),h=h.map((function(t,e){return t-d[e]})))}var f=h[e.index];e.ratio=$f(e.value)&&h&&f?e.value/f:0,s=e.ratio}else if("radar"===t)s=parseFloat(String(Math.max(e.value,0)))/r.current.dataMax*o.radar_size_ratio;else if("bar"===t){var p=i.getYScaleById.bind(i)(e.id).domain().reduce((function(t,e){return e-t}));s=0===p?0:Math.abs(i.getRangedData(e,null,t)/p)}else"treemap"===t&&(s/=i.getTotalDataSum(!0));return n&&s?100*s:s},updateDataIndexByX:function(t){var e=t.reduce((function(t,e,n){return t[Number(e.x)]=n,t}),{});this.data.targets.forEach((function(t){t.values.forEach((function(t,n){var i=e[Number(t.x)];void 0===i&&(i=n),t.index=i}))}))},isBubbleZType:function(t){return this.isBubbleType(t)&&(Bf(t.value)&&("z"in t.value||"y"in t.value)||zf(t.value)&&t.value.length>=2)},isBarRangeType:function(t){var e=t.value;return this.isBarType(t)&&zf(e)&&e.length>=2&&e.every((function(t){return $f(t)}))},getDataById:function(t){var e,n=this.cache.get(t)||this.api.data(t);return null!==(e=null==n?void 0:n[0])&&void 0!==e?e:n}};function mg(t,e){void 0===e&&(e=!1);var n=this.api;e&&this.api.flush(!0),null==t||t.call(n)}var yg={load:function(t,e){var n=this,i=n.data,o=e.append,r=t;r&&(e.filter&&(r=r.filter(e.filter)),(e.type||e.types)&&r.forEach((function(t){var i,o=(null===(i=e.types)||void 0===i?void 0:i[t.id])||e.type;n.setTargetType(t.id,o)})),i.targets.forEach((function(t){for(var e=0;e<r.length;e++)if(t.id===r[e].id){t.values=o?t.values.concat(r[e].values):r[e].values,r.splice(e,1);break}})),i.targets=i.targets.concat(r)),n.updateTargets(i.targets),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),n.updateTypesElements(),mg.call(n,e.done,e.resizeAfter)},loadFromArgs:function(t){var e=this;e.config&&(e.cache.reset(),e.convertData(t,(function(n){var i=t.data||n;t.append&&(i.__append__=!0),i&&e.load(e.convertDataToTargets(i),t)})))},unload:function(t,e){var n=this,i=n.state,o=n.$el,r=n.$T,a=e,s=t;if(n.cache.reset(),a||(a=function(){}),s=s.filter((function(t){return n.hasTarget(n.data.targets,t)})),s&&0!==s.length){var c=o.svg.selectAll(s.map((function(t){return n.selectorTarget(t)})));r(c).style("opacity","0").remove().call(Xf,a),s.forEach((function(t){i.withoutFadeIn[t]=!1,o.legend&&o.legend.selectAll(".".concat(wp.legendItem).concat(n.getTargetSelectorSuffix(t))).remove(),n.data.targets=n.data.targets.filter((function(e){return e.id!==t}))})),i.hasTreemap&&n.updateTargetsForTreemap(n.data.targets),n.updateTypesElements()}else a()}},xg={setExpand:function(t,e,n){var i=this,o=i.config;i.$el.circle&&o.point_focus_expand_enabled&&i.expandCircles(t,e,n),i.expandBarTypeShapes(!0,t,e,n)},expandBarTypeShapes:function(t,e,n,i){void 0===t&&(t=!0);var o=this;["bar","candlestick"].filter((function(t){return o.$el[t]})).forEach((function(r){i&&o.$el[r].classed(dp.EXPANDED,!1),o.getShapeByIndex(r,e,n).classed(dp.EXPANDED,t)}))},setOverOut:function(t,e){var n=this,i=n.config,o=n.state,r=o.hasRadar,a=o.hasTreemap,s=n.$el.main,c=Bf(e);if(c||-1!==e){var l=i[t?"data_onover":"data_onout"].bind(n.api);if(i.color_onover&&n.setOverColor(t,e,c),c){var u=a?Rp.treemap:fp.arc;l(e,s.select(".".concat(u).concat(n.getTargetSelectorSuffix(e.id))).node())}else if(i.tooltip_grouped)t&&(r&&n.isPointFocusOnly()?n.showCircleFocus(n.getAllValuesOnIndex(e,!0)):n.setExpand(e,null,!0)),!n.isMultipleX()&&s.selectAll(".".concat(Mp.shape,"-").concat(e)).each((function(t){l(t,this)}));else{var h=n.cache.get(tg)||[],d=s.selectAll(".".concat(Mp.shape,"-").concat(e)).filter((function(t){return n.isWithinShape(this,t)})),f=d.filter((function(){var t=this;return h.every((function(e){return e!==t}))}));if(!t||d.empty()||h.length===f.size()&&f.nodes().every((function(t,e){return t!==h[e]})))for(;h.length;){var p=h.pop();i.data_onout.bind(n.api)(cs(p).datum(),p)}f.each((function(){t&&(l(cs(this).datum(),this),h.push(this))})),n.cache.add(tg,h)}}},callOverOutForTouch:function(t){var e=this,n=e.cache.get(eg);(Bf(t)&&n?t.id!==n.id:t!==n)&&((n||$f(n))&&e.setOverOut(!1,n),(t||$f(t))&&e.setOverOut(!0,t),e.cache.add(eg,t))},getDraggableSelection:function(){var t=this,e=t.config,n=t.state;return e.interaction_enabled&&e.data_selection_draggable&&t.drag?eu().on("drag",(function(e){n.event=e,t.drag(jf(e,this))})).on("start",(function(e){n.event=e,t.dragstart(jf(e,this))})).on("end",(function(e){n.event=e,t.dragend()})):function(){}},dispatchEvent:function(t,e,n){var i,o,r=this,a=r.config,s=r.state,c=s.eventReceiver,l=s.hasAxis,u=s.hasRadar,h=s.hasTreemap,d=r.$el,f=d.eventRect,p=d.radar,g=d.treemap,v=null===(o=h&&c.rect||u&&p.axes.select(".".concat(gp.axis,"-").concat(e," text"))||f||(null===(i=r.getArcElementByIdOrIndex)||void 0===i?void 0:i.call(r,e)))||void 0===o?void 0:o.node();if(v){var b=r.isMultipleX(),m=a.axis_rotated,y=v.getBoundingClientRect(),x=y.width,_=y.left,w=y.top;if(l&&!u&&!b){var T=c.coords[e];T?(x=T.w,_+=T.x,w+=T.y):(x=0,_=0,w=0)}var k=_+(n?n[0]:0)+(b||m?0:x/2),C=w+(n?n[1]:0)+(m?4:0),S={screenX:k,screenY:C,clientX:k,clientY:C};ap[/^(mouse|click)/.test(t)?"mouse":"touch"](h?g.node():v,t,S)}},setDragStatus:function(t){this.state.dragging=t},unbindZoomEvent:function(){var t=this.$el,e=t.eventRect,n=t.zoomResetBtn;null==e||e.on(".zoom wheel.zoom .drag",null),null==n||n.on("click",null).style("display","none")},unbindAllEvents:function(){var t,e=this,n=e.$el,i=n.arcs,o=n.eventRect,r=n.legend,a=n.region,s=n.svg,c=n.treemap,l=e.brush,u=["wheel","click","mouseover","mousemove","mouseout","touchstart","touchmove","touchend","touchstart.eventRect","touchmove.eventRect","touchend.eventRect",".brush",".drag",".zoom","wheel.zoom","dblclick.zoom"].join(" ");[s,o,null==a?void 0:a.list,null==l?void 0:l.getSelection(),null==i?void 0:i.selectAll("path"),null==r?void 0:r.selectAll("g"),c].forEach((function(t){return null==t?void 0:t.on(u,null)})),null===(t=e.unbindZoomEvent)||void 0===t||t.call(e)}},_g={generateClass:function(t,e){return" ".concat(t," ").concat(t+this.getTargetSelectorSuffix(e))},getClass:function(t,e){var n=this,i=/s$/.test(t),o=/^(area|arc|line|treemap)s?$/.test(t),r=i?"id":"index";return function(a){var s=a.data||a;return((e?n.generateClass(Lp[i?"shapes":"shape"],s[r]):"")+n.generateClass(Lp[t],s[o?"id":r])).trim()}},getChartClass:function(t){var e=this;return function(n){return Lp["chart".concat(t)]+e.classTarget((n.data?n.data:n).id)}},generateExtraLineClass:function(){var t=this.config.line_classes||[],e=[];return function(n){var i,o=n.id||(null===(i=n.data)||void 0===i?void 0:i.id)||n;return e.indexOf(o)<0&&e.push(o),t[e.indexOf(o)%t.length]}},classRegion:function(t,e){return"".concat(this.generateClass(Lp.region,e)," ").concat("class"in t?t.class:"")},classTarget:function(t){var e=this.config.data_classes[t],n="";return e&&(n=" ".concat(Lp.target,"-").concat(e)),this.generateClass(Lp.target,t)+n},classFocus:function(t){return this.classFocused(t)+this.classDefocused(t)},classFocused:function(t){return" ".concat(this.state.focusedTargetIds.indexOf(t.id)>=0?Lp.focused:"")},classDefocused:function(t){return" ".concat(this.state.defocusedTargetIds.indexOf(t.id)>=0?Lp.defocused:"")},getTargetSelectorSuffix:function(t){return(t||0===t?"-".concat(t):"").replace(/([\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\])/g,"-")},selectorTarget:function(t,e,n){void 0===e&&(e=""),void 0===n&&(n="");var i=this.getTargetSelectorSuffix(t);return"".concat(e,".").concat(Lp.target+i," ").concat(n,", ").concat(e,".").concat(Lp.circles+i," ").concat(n)},selectorTargets:function(t,e){var n=this,i=t||[];return i.length?i.map((function(t){return n.selectorTarget(t,e)})):null},selectorLegend:function(t){return".".concat(Lp.legendItem+this.getTargetSelectorSuffix(t))},selectorLegends:function(t){var e=this;return(null==t?void 0:t.length)?t.map((function(t){return e.selectorLegend(t)})):null}};var wg=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],Tg={generateColor:function(){var t=this,e=t.$el,n=t.config,i=n.data_colors,o=n.data_color,r=[],a=Lf(n.color_pattern)?n.color_pattern:lu(function(t){var e=Wp,n=vf.body,i=n[e];if(!i){var o=t.classed(yp.colorPattern,!0).style("background-image");t.classed(yp.colorPattern,!1),o.indexOf(";")>-1&&(i=o.replace(/url[^#]*|["'()]|(\s|%20)/g,"").split(";").map((function(t){return t.trim().replace(/[\"'\s]/g,"")})).filter(Boolean),n[e]=i)}return i}(e.chart)||wg).range(),s=a;if(Sf(n.color_tiles)){var c=n.color_tiles.bind(t.api)(),l=a.map((function(e,n){var i=e.replace(/[#\(\)\s,]/g,""),o="".concat(t.state.datetimeId,"-pattern-").concat(i,"-").concat(n);return function(t,e,n){var i=cs(t.cloneNode(!0));return i.attr("id",n).insert("rect",":first-child").attr("width",i.attr("width")).attr("height",i.attr("height")).style("fill",e),{id:n,node:i.node()}}(c[n%c.length],e,o)}));a=l.map((function(t){return"url(#".concat(t.id,")")})),t.patterns=l}return function(e){var c,l,u=e.id||(null===(c=e.data)||void 0===c?void 0:c.id)||e,h=t.isTypeOf(u,["line","spline","step"])||!n.data_types[u];return Sf(i[u])?l=i[u].bind(t.api)(e):i[u]?l=i[u]:(r.indexOf(u)<0&&r.push(u),l=h?s[r.indexOf(u)%s.length]:a[r.indexOf(u)%a.length],i[u]=l),Sf(o)?o.bind(t.api)(l,e):l}},generateLevelColor:function(){var t=this.config,e=t.color_pattern,n=t.color_threshold,i="value"===n.unit,o=n.max||100,r=n.values&&n.values.length?n.values:[];return Lf(n)?function(t){for(var n=i?t:100*t/o,a=e[e.length-1],s=0,c=r.length;s<c;s++)if(n<=r[s]){a=e[s];break}return a}:null},generateDataLabelBackgroundColorFilter:function(t){var e=this,n=e.$el,i=e.config,o=e.state,r=t||i.data_labels_backgroundColors;if(r){var a=[];Af(r)?a.push(""):Bf(r)&&(a=Object.keys(r)),a.forEach((function(i){var a="".concat(o.datetimeId,"-labels-bg").concat(e.getTargetSelectorSuffix(i)).concat(t?e.getTargetSelectorSuffix(t):"");n.defs.append("filter").attr("x","0").attr("y","0").attr("width","1").attr("height","1").attr("id",a).html('<feFlood flood-color="'.concat(""===i?r:r[i],'" /><feComposite in="SourceGraphic"/>'))}))}},getGradienColortUrl:function(t){return"url(#".concat(this.state.datetimeId,"-gradient").concat(this.getTargetSelectorSuffix(t),")")},updateLinearGradient:function(){var t=this,e=t.config,n=t.data.targets,i=t.state.datetimeId,o=t.$el.defs;n.forEach((function(n){var r="".concat(i,"-gradient").concat(t.getTargetSelectorSuffix(n.id)),a=t.hasPointType()&&e.point_radialGradient,s=t.isAreaType(n)?"area":t.isBarType(n)&&"bar";if((a||s)&&o.select("#".concat(r)).empty()){var c=t.color(n),l={defs:null,stops:[]};if(a){var u=a.cx,h=void 0===u?.3:u,d=a.cy,f=void 0===d?.3:d,p=a.r,g=void 0===p?.7:p,v=a.stops,b=void 0===v?[[.1,c,0],[.9,c,1]]:v;l.stops=b,l.defs=o.append("radialGradient").attr("id","".concat(r)).attr("cx",h).attr("cy",f).attr("r",g)}else{var m=e.axis_rotated,y=e["".concat(s,"_linearGradient")],x=y.x,_=void 0===x?m?[1,0]:[0,0]:x,w=y.y,T=void 0===w?m?[0,0]:[0,1]:w,k=y.stops;b=void 0===k?[[0,c,1],[1,c,0]]:k;l.stops=b,l.defs=o.append("linearGradient").attr("id","".concat(r)).attr("x1",_[0]).attr("x2",_[1]).attr("y1",T[0]).attr("y2",T[1])}l.stops.forEach((function(e){var i=e[0],o=e[1],r=e[2],a=Sf(o)?o.bind(t.api)(n.id):o;l.defs&&l.defs.append("stop").attr("offset",i).attr("stop-color",a||c).attr("stop-opacity",r)}))}}))},setOverColor:function(t,e){var n=this,i=n.config,o=n.$el.main,r=i.color_onover,a=t?r:n.color;Bf(a)?a=function(t){var e=t.id;return e in r?r[e]:n.color(e)}:Af(a)?a=function(){return r}:Sf(r)&&(a=a.bind(n.api)),o.selectAll(Bf(e)?".".concat(fp.arc).concat(n.getTargetSelectorSuffix(e.id)):".".concat(Mp.shape,"-").concat(e)).style("fill",a)}},kg={getYDomainMinMax:function(t,e){var n=this,i=n.axis,o=n.config,r="min"===e,a=o.data_groups,s=n.mapToIds(t),c=n.getValuesAsIdKeyed(t);if(a.length>0){var l=n["has".concat(r?"Negative":"Positive","ValueInTargets")](t);a.forEach((function(t){var e=t.filter((function(t){return s.indexOf(t)>=0}));if(e.length){var n=e[0],o=i.getId(n);l&&c[n]&&(c[n]=c[n].map((function(t){return(r?t<0:t>0)?t:0}))),e.filter((function(t,e){return e>0})).forEach((function(t){if(c[t]){var e=i.getId(t);c[t].forEach((function(t,i){var a=+t;e!==o||l&&(r?a>0:a<0)||(c[n][i]+=a)}))}}))}}))}return rp(e,Object.keys(c).map((function(t){return rp(e,c[t])})))},isHiddenTargetWithYDomain:function(t){var e=this;return e.state.hiddenTargetIds.some((function(n){return e.axis.getId(n)===t}))},getYDomain:function(t,e,n){var i=this,o=i.axis,r=i.config,a=i.scale,s="axis_".concat(e);if(i.isStackNormalized())return[0,100];var c=(null==a?void 0:a[e])&&"log"===a[e].type,l=t.filter((function(t){return o.getId(t.id)===e})),u=n?i.filterByXDomain(l,n):l;if(0===u.length)return i.isHiddenTargetWithYDomain(e)?a[e].domain():"y2"===e?a.y.domain():i.getYDomain(t,"y2",n);var h=r["".concat(s,"_min")],d=r["".concat(s,"_max")],f=r["".concat(s,"_center")],p=r["".concat(s,"_inverted")],g=i.hasDataLabel()&&r.axis_rotated,v=i.hasDataLabel()&&!r.axis_rotated,b=i.getYDomainMinMax(u,"min"),m=i.getYDomainMinMax(u,"max"),y=kf([xf.BAR,xf.BUBBLE,xf.SCATTER],wf.Line,!0).some((function(t){var e=t.indexOf("area")>-1?"area":t;return i.hasType(t,u,!0)&&r["".concat(e,"_zerobased")]}));b=Cf(h)?h:Cf(d)?b<=d?b:d-10:b,m=Cf(d)?d:Cf(h)?h<=m?m:h+10:m,isNaN(b)&&(b=0),isNaN(m)&&(m=b),b===m&&(b<0?m=0:b=0);var x=b>=0&&m>=0,_=b<=0&&m<=0;(Cf(h)&&x||Cf(d)&&_)&&(y=!1),y&&(x&&(b=0),_&&(m=0));var w=Math.abs(m-b),T={top:.1*w,bottom:.1*w};if(Mf(f)){var k=Math.max(Math.abs(b),Math.abs(m));m=f+k,b=f-k}if(g){var C=Pf(a.y.range()),S=i.getDataLabelLength(b,m,"width").map((function(t){return t/C}));["bottom","top"].forEach((function(t,e){T[t]+=w*(S[e]/(1-S[0]-S[1]))}))}else if(v){var A=i.getDataLabelLength(b,m,"height");["bottom","top"].forEach((function(t,e){T[t]+=i.convertPixelToScale("y",A[e],w)}))}T=i.getResettedPadding(T);var $=r["".concat(s,"_padding")];Lf($)&&["bottom","top"].forEach((function(t){T[t]=o.getPadding($,t,T[t],w)})),y&&(x&&(T.bottom=b),_&&(T.top=-m));var E=c?[b,m].map((function(t){return t<0?0:t})):[b-T.bottom,m+T.top];return p?E.reverse():E},getXDomainMinMax:function(t,e){var n,i=this.config["axis_x_".concat(e)],o=rp(e,t.map((function(t){return rp(e,t.values.map((function(t){return t.x})))}))),r=Bf(i)?i.value:i;return r=Mf(r)&&(null===(n=this.axis)||void 0===n?void 0:n.isTimeSeries())?cp.bind(this)(r):r,Bf(i)&&i.fit&&("min"===e&&r<o||"max"===e&&r>o)&&(r=void 0),Mf(r)?r:o},getXDomainPadding:function(t,e){var n,i=this,o=i.axis,r=i.config.axis_x_padding,a=o.isTimeSeries()&&e,s=Pf(t);if(o.isCategorized()||a)n=0;else if(i.hasType("bar")){var c=i.getMaxDataCount();n=c>1?s/(c-1)/2:.5}else n=i.getResettedPadding(.01*s);var l=$f(r)?{left:r,right:r}:r,u=l.left,h=void 0===u?n:u,d=l.right,f=void 0===d?n:d;if("px"===r.unit){var p=Math.abs(s+.2*s);h=o.getPadding(r,"left",n,p),f=o.getPadding(r,"right",n,p)}else{var g=s+h+f;if(a&&g){var v=s/e/g;h=h/g/v,f=f/g/v}}return{left:h,right:f}},getXDomain:function(t){var e=this,n=e.axis,i=e.config,o=e.scale.x,r=i.axis_x_inverted,a=[e.getXDomainMinMax(t,"min"),e.getXDomainMinMax(t,"max")],s=a[0],c=void 0===s?0:s,l=a[1],u=void 0===l?0:l;if("log"!==o.type){var h=n.isCategorized(),d=n.isTimeSeries(),f=e.getXDomainPadding(a),p=a[0],g=a[1];p-g!=0||h||(d?(p=new Date(.5*p.getTime()),g=new Date(1.5*g.getTime())):(p=0===p?1:.5*p,g=0===g?-1:1.5*g)),(p||0===p)&&(c=d?new Date(p.getTime()-f.left):p-f.left),(g||0===g)&&(u=d?new Date(g.getTime()+f.right):g+f.right)}return r?[u,c]:[c,u]},updateXDomain:function(t,e,n,i,o){var r,a=this,s=a.config,c=a.org,l=a.scale,u=l.x,h=l.subX,d=s.zoom_enabled;if(n&&(u.domain(o||op(a.getXDomain(t),!s.axis_x_inverted)),c.xDomain=u.domain(),h.domain(u.domain()),null===(r=a.brush)||void 0===r||r.scale(h)),e){var f=o||!a.brush||Zf(a)?c.xDomain:Yf(a).map(h.invert);u.domain(f)}return(n||e)&&d&&a.zoom.updateScaleExtent(),i&&u.domain(a.trimXDomain(u.orgDomain())),u.domain()},trimXDomain:function(t){var e=this.config.axis_x_inverted,n=this.getZoomDomain(),i=n[0],o=n[1];return(e?t[0]>=i:t[0]<=i)&&(t[1]=+t[1]+(i-t[0]),t[0]=i),(e?t[1]<=o:t[1]>=o)&&(t[0]=+t[0]-(t[1]-o),t[1]=o),t},getZoomDomain:function(t,e){void 0===t&&(t="zoom"),void 0===e&&(e=!1);var n=this,i=n.config,o=n.scale,r=n.org,a=e&&o[t]?o[t].domain():r.xDomain,s=a[0],c=a[1];return"zoom"===t&&(Mf(i.zoom_x_min)&&(s=rp("min",[s,i.zoom_x_min])),Mf(i.zoom_x_max)&&(c=rp("max",[c,i.zoom_x_max]))),[s,c]},convertPixelToScale:function(t,e,n){var i=this.config,o=this.state,r=i.axis_rotated;return n*(e/o["x"===t?r?"height":"width":r?"width":"height"])},withinRange:function(t,e,n){var i=this.config.axis_x_inverted,o=n,r=o[0],a=o[1];if(Array.isArray(t)){var s=kf([],t,!0);if(i&&s.reverse(),s[0]<s[1])return t.every((function(n,o){return(0===o?i?+n<=r:+n>=r:i?+n>=a:+n<=a)&&!t.every((function(t,n){return t===e[n]}))}))}return!1}};function Cg(t,e,n){var i=t.config,o="axis_".concat(e,"_tick_format");return(i[o]?i[o]:t.defaultValueFormat).call(t.api,n)}var Sg={yFormat:function(t){return Cg(this,"y",t)},y2Format:function(t){return Cg(this,"y2",t)},getDefaultValueFormat:function(){var t=this,e=t.defaultArcValueFormat,n=t.yFormat,i=t.y2Format,o=t.hasArcType(null,["gauge","polar","radar"]);return function(r,a,s){return(o?e:t.axis&&"y2"===t.axis.getId(s)?i:n).call(t,r,a)}},defaultValueFormat:function(t){return zf(t)?t.join("~"):Cf(t)?+t:""},defaultArcValueFormat:function(t,e){return"".concat((100*e).toFixed(1),"%")},defaultPolarValueFormat:function(t){return"".concat(t)},dataLabelFormat:function(t){var e=this.config.data_labels,n=function(t){var e=t;return zf(t)?e=t.join("~"):Bf(t)&&(e=Object.values(t).join("~")),e},i=n;return Sf(e.format)?i=e.format:Rf(e.format)&&(i=e.format[t]?!0===e.format[t]?n:e.format[t]:function(){return""}),i.bind(this.api)}};function Ag(t){var e=this,n=e.getDataById(t);return e.levelColor?e.levelColor(n.values[0].value):e.color(n)}var $g={initLegend:function(){var t=this,e=t.config,n=t.$el;t.legendItemTextBox={},t.state.legendHasRendered=!1,e.legend_show?(e.legend_contents_bindto||(n.legend=t.$el.svg.append("g").classed(wp.legend,!0).attr("transform",t.getTranslate("legend"))),t.updateLegend()):t.state.hiddenLegendIds=t.mapToIds(t.data.targets)},updateLegend:function(t,e,n){var i,o=this,r=o.config,a=o.state,s=o.scale,c=o.$el,l=e||{withTransform:!1,withTransitionForTransform:!1,withTransition:!1};l.withTransition=Nf(l,"withTransition",!0),l.withTransitionForTransform=Nf(l,"withTransitionForTransform",!0),r.legend_contents_bindto&&r.legend_contents_template?o.updateLegendTemplate():a.hasTreemap||o.updateLegendElement(t||o.mapToIds(o.data.targets),l,n),null===(i=c.legend)||void 0===i||i.selectAll(".".concat(wp.legendItem)).classed(wp.legendItemHidden,(function(t){var e=!o.isTargetToShow(t);return e&&(this.style.opacity=null),e})),o.updateScales(!1,!s.zoom),o.updateSvgSize(),o.transformAll(l.withTransitionForTransform,n),a.legendHasRendered=!0},updateLegendTemplate:function(){var t=this,e=t.config,n=t.$el,i=cs(e.legend_contents_bindto),o=e.legend_contents_template;if(!i.empty()){var r=t.mapToIds(t.data.targets),a=[],s="";r.forEach((function(e){var n=Sf(o)?o.bind(t.api)(e,t.color(e),t.api.data(e)[0].values):sp(o,{COLOR:t.color(e),TITLE:e});n&&(a.push(e),s+=n)}));var c=i.html(s).selectAll((function(){return this.childNodes})).data(a);t.setLegendItem(c),n.legend=i}},updateSizeForLegend:function(t){var e=this,n=e.config,i=e.state,o=i.isLegendTop,r=i.isLegendLeft,a=i.isLegendRight,s=i.isLegendInset,c=i.current,l=t.width,u=t.height,h={top:o?e.getCurrentPaddingByDirection("top")+n.legend_inset_y+5.5:c.height-u-e.getCurrentPaddingByDirection("bottom")-n.legend_inset_y,left:r?e.getCurrentPaddingByDirection("left")+n.legend_inset_x+.5:c.width-l-e.getCurrentPaddingByDirection("right")-n.legend_inset_x+.5};e.state.margin3={top:a?0:s?h.top:c.height-u,right:NaN,bottom:0,left:a?c.width-l:s?h.left:0}},transformLegend:function(t){var e=this,n=e.$el.legend;(0,e.$T)(n,t).attr("transform",e.getTranslate("legend"))},updateLegendStep:function(t){this.state.legendStep=t},updateLegendItemWidth:function(t){this.state.legendItemWidth=t},updateLegendItemHeight:function(t){this.state.legendItemHeight=t},updateLegendItemColor:function(t,e){var n=this.$el.legend;n&&n.select(".".concat(wp.legendItem,"-").concat(t," line")).style("stroke",e)},getLegendWidth:function(){var t=this.state,e=t.current.width,n=t.isLegendRight,i=t.isLegendInset,o=t.legendItemWidth,r=t.legendStep;return this.config.legend_show?n||i?o*(r+1):e:0},getLegendHeight:function(){var t,e=this,n=e.state,i=n.current,o=n.isLegendRight,r=n.legendItemHeight,a=n.legendStep,s="fit"===(null===(t=e.config.padding)||void 0===t?void 0:t.mode);return e.config.legend_show?o?i.height:(s?10:Math.max(20,r))*(a+1):0},opacityForUnfocusedLegend:function(t){return t.classed(wp.legendItemHidden)?null:"0.3"},toggleFocusLegend:function(t,e){var n=this,i=n.$el.legend,o=n.$T,r=n.mapToTargetIds(t);i&&o(i.selectAll(".".concat(wp.legendItem)).filter((function(t){return r.indexOf(t)>=0})).classed(Cp.legendItemFocused,e)).style("opacity",(function(){return e?null:n.opacityForUnfocusedLegend.call(n,cs(this))}))},revertLegend:function(){var t=this.$el.legend,e=this.$T;t&&e(t.selectAll(".".concat(wp.legendItem)).classed(Cp.legendItemFocused,!1)).style("opacity",null)},showLegend:function(t){var e=this,n=e.config,i=e.$el,o=e.$T;n.legend_show||(n.legend_show=!0,i.legend?i.legend.style("visibility",null):e.initLegend(),!e.state.legendHasRendered&&e.updateLegend()),e.removeHiddenLegendIds(t),o(i.legend.selectAll(e.selectorLegends(t)).style("visibility",null)).style("opacity",null)},hideLegend:function(t){var e=this,n=e.config,i=e.$el.legend;n.legend_show&&If(t)&&(n.legend_show=!1,i.style("visibility","hidden")),e.addHiddenLegendIds(t),i.selectAll(e.selectorLegends(t)).style("opacity","0").style("visibility","hidden")},getLegendItemTextBox:function(t,e){var n,i=this,o=i.cache,r=i.state,a=Jp;return t&&((n=!r.redrawing&&o.get(a)||{})[t]||(n[t]=i.getTextRect(e,wp.legendItem),o.add(a,n)),n=n[t]),n},setLegendItem:function(t){var e=this,n=e.$el,i=e.api,o=e.config,r=e.state,a="touch"===r.inputType,s=e.hasType("gauge"),c=o.boost_useCssRule,l=o.legend_item_interaction;t.attr("class",(function(t){var n=cs(this);return(!n.empty()&&n.attr("class")||"")+e.generateClass(wp.legendItem,t)})).style("visibility",(function(t){return e.isLegendToShow(t)?null:"hidden"})),o.interaction_enabled&&(c&&[[".".concat(wp.legendItem),"cursor:pointer"],[".".concat(wp.legendItem," text"),"pointer-events:none"],[".".concat(wp.legendItemPoint," text"),"pointer-events:none"],[".".concat(wp.legendItemTile),"pointer-events:none"],[".".concat(wp.legendItemEvent),"fill-opacity:0"]].forEach((function(t){var i=t[0],o=t[1];e.setCssRule(!1,i,[o])(n.legend)})),t.on(l.dblclick?"dblclick":"click",l||Sf(o.legend_item_onclick)?function(t,n){if(!Ff(o.legend_item_onclick,i,n)){var s=t.altKey,c=t.target;"dblclick"===t.type||s?r.hiddenTargetIds.length&&-1===c.parentNode.getAttribute("class").indexOf(wp.legendItemHidden)?i.show():(i.hide(),i.show(n)):(i.toggle(n),cs(this).classed(Cp.legendItemFocused,!1))}a&&e.hideTooltip()}:null),!a&&t.on("mouseout",l||Sf(o.legend_item_onout)?function(t,n){Ff(o.legend_item_onout,i,n)||(cs(this).classed(Cp.legendItemFocused,!1),s&&e.undoMarkOverlapped(e,".".concat(_p.gaugeValue)),e.api.revert())}:null).on("mouseover",l||Sf(o.legend_item_onover)?function(t,n){Ff(o.legend_item_onover,i,n)||(cs(this).classed(Cp.legendItemFocused,!0),s&&e.markOverlapped(n,e,".".concat(_p.gaugeValue)),!r.transiting&&e.isTargetToShow(n)&&i.focus(n))}:null),!t.empty()&&t.on("click mouseout mouseover")&&t.style("cursor",e.getStylePropValue("pointer")))},updateLegendElement:function(t,e){var n,i,o,r=this,a=r.config,s=r.state,c=r.$el.legend,l=r.$T,u="circle"!==a.legend_item_tile_type,h=a.legend_item_tile_r,d={width:u?a.legend_item_tile_width:2*h,height:u?a.legend_item_tile_height:2*h},f={padding:{top:4,right:10},max:{width:0,height:0},posMin:10,step:0,tileWidth:d.width+5,totalLength:0},p={offsets:{},widths:{},heights:{},margins:[0],steps:{}},g=t.filter((function(t){return!Mf(a.data_names[t])||null!==a.data_names[t]})),v=e.withTransition,b=r.getUpdateLegendPositions(g,f,p);s.isLegendInset&&(f.step=a.legend_inset_step?a.legend_inset_step:g.length,r.updateLegendStep(f.step)),s.isLegendRight?(n=function(t){return f.max.width*p.steps[t]},i=function(t){return p.margins[p.steps[t]]+p.offsets[t]}):s.isLegendInset?(n=function(t){return f.max.width*p.steps[t]+10},i=function(t){return p.margins[p.steps[t]]+p.offsets[t]}):(n=function(t){return p.margins[p.steps[t]]+p.offsets[t]},i=function(t){return f.max.height*p.steps[t]});var m={xText:function(t,e){return n(t,e)+4+d.width},xRect:function(t,e){return n(t,e)},x1Tile:function(t,e){return n(t,e)-2},x2Tile:function(t,e){return n(t,e)-2+d.width},yText:function(t,e){return i(t,e)+9},yRect:function(t,e){return i(t,e)-5},yTile:function(t,e){return i(t,e)+4}};r.generateLegendItem(g,d,b,m),o=c.select(".".concat(wp.legendBackground," rect")),s.isLegendInset&&f.max.width>0&&0===o.size()&&(o=c.insert("g",".".concat(wp.legendItem)).attr("class",wp.legendBackground).append("rect"));var y=c.selectAll("text").data(g).text((function(t){return Mf(a.data_names[t])?a.data_names[t]:t})).each((function(t,e){b(this,t,e)}));l(y,v).attr("x",m.xText).attr("y",m.yText),l(c.selectAll("rect.".concat(wp.legendItemEvent)).data(g),v).attr("width",(function(t){return p.widths[t]})).attr("height",(function(t){return p.heights[t]})).attr("x",m.xRect).attr("y",m.yRect),r.updateLegendItemPos(g,v,m),o&&l(o,v).attr("height",r.getLegendHeight()-12).attr("width",f.max.width*(f.step+1)+10),r.updateLegendItemWidth(f.max.width),r.updateLegendItemHeight(f.max.height),r.updateLegendStep(f.step)},getUpdateLegendPositions:function(t,e,n){var i=this,o=i.config,r=i.state,a=r.isLegendRight||r.isLegendInset;return function(s,c,l){var u,h=0===l,d=l===t.length-1,f=i.getLegendItemTextBox(c,s),p=f.width+e.tileWidth+(d&&!a?0:e.padding.right)+o.legend_padding,g=f.height+e.padding.top,v=a?g:p,b=a?i.getLegendHeight():i.getLegendWidth(),m=function(t,i){i||(u=(b-e.totalLength-v)/2)<e.posMin&&(u=(b-v)/2,e.totalLength=0,e.step++),n.steps[t]=e.step,n.margins[e.step]=r.isLegendInset?10:u,n.offsets[t]=e.totalLength,e.totalLength+=v};if(h&&(e.totalLength=0,e.step=0,e.max.width=0,e.max.height=0),o.legend_show&&!i.isLegendToShow(c))return n.widths[c]=0,n.heights[c]=0,n.steps[c]=0,void(n.offsets[c]=0);n.widths[c]=p,n.heights[c]=g,(!e.max.width||p>=e.max.width)&&(e.max.width=p),(!e.max.height||g>=e.max.height)&&(e.max.height=g);var y=a?e.max.height:e.max.width;o.legend_equally?(Object.keys(n.widths).forEach((function(t){return n.widths[t]=e.max.width})),Object.keys(n.heights).forEach((function(t){return n.heights[t]=e.max.height})),(u=(b-y*t.length)/2)<e.posMin?(e.totalLength=0,e.step=0,t.forEach((function(t){return m(t)}))):m(c,!0)):m(c)}},generateLegendItem:function(t,e,n,i){var o=this,r=o.config,a=o.state,s=o.$el.legend,c=r.legend_usePoint,l=r.legend_item_tile_r,u=r.legend_item_tile_type,h="circle"!==u,d=a.isLegendRight||a.isLegendInset,f=-200,p=s.selectAll(".".concat(wp.legendItem)).data(t).enter().append("g");if(o.setLegendItem(p),p.append("text").text((function(t){return Mf(r.data_names[t])?r.data_names[t]:t})).each((function(t,e){n(this,t,e)})).style("pointer-events",o.getStylePropValue("none")).attr("x",d?i.xText:f).attr("y",d?f:i.yText),p.append("rect").attr("class",wp.legendItemEvent).style("fill-opacity",o.getStylePropValue("0")).attr("x",d?i.xRect:f).attr("y",d?f:i.yRect),c){var g=[];p.append((function(t){var e=Lf(r.point_pattern)?r.point_pattern:[r.point_type];-1===g.indexOf(t)&&g.push(t);var n=e[g.indexOf(t)%e.length];return"rectangle"===n&&(n="rect"),vf.createElementNS(pa.svg,"hasValidPointType"in o&&o.hasValidPointType(n)?n:"use")})).attr("class",wp.legendItemPoint).style("fill",Ag.bind(o)).style("pointer-events",o.getStylePropValue("none")).attr("href",(function(t,e,n){var i=n[e].nodeName.toLowerCase(),r=o.getTargetSelectorSuffix(t);return"use"===i?"#".concat(a.datetimeId,"-point").concat(r):void 0}))}else p.append(h?"line":u).attr("class",wp.legendItemTile).style("stroke",Ag.bind(o)).style("pointer-events",o.getStylePropValue("none")).call((function(t){"circle"===u?t.attr("r",l).style("fill",Ag.bind(o)).attr("cx",d?i.x2Tile:f).attr("cy",d?f:i.yTile):h&&t.attr("stroke-width",e.height).attr("x1",d?i.x1Tile:f).attr("y1",d?f:i.yTile).attr("x2",d?i.x2Tile:f).attr("y2",d?f:i.yTile)}))},updateLegendItemPos:function(t,e,n){var i=this,o=i.config,r=i.$el.legend,a=i.$T,s=o.legend_usePoint,c=o.legend_item_tile_type,l="circle"!==c;s?a(r.selectAll(".".concat(wp.legendItemPoint)).data(t),e).each((function(){var t=this.nodeName.toLowerCase(),e=o.point_r,i="x",r="y",a=2,s=2.5,c=null,l=null,u=null;if("circle"===t)i="cx",r="cy",c=e+(h=.2*e),a=2*e,s=-h;else if("rect"===t){var h;l=h=2.5*e,u=h,s=3}cs(this).attr(i,(function(t){return n.x1Tile(t)+a})).attr(r,(function(t){return n.yTile(t)-s})).attr("r",c).attr("width",l).attr("height",u)})):a(r.selectAll(".".concat(wp.legendItemTile)).data(t),e).style("stroke",Ag.bind(i)).call((function(t){"circle"===c?t.attr("cx",(function(t){var e=n.x2Tile(t);return e-(e-n.x1Tile(t))/2})).attr("cy",n.yTile):l&&t.attr("x1",n.x1Tile).attr("y1",n.yTile).attr("x2",n.x2Tile).attr("y2",n.yTile)}))}},Eg={redraw:function(t){var e,n,i;void 0===t&&(t={});var o=this,r=o.config,a=o.state,s=o.$el,c=s.main,l=s.treemap;a.redrawing=!0;var u=o.filterTargetsToShow(o.data.targets),h=t.flow,d=t.initializing,f=o.getWithOption(t),p=f.Transition?r.transition_duration:0,g=f.TransitionForExit?p:0,v=f.TransitionForAxis?p:0,b=null===(e=o.axis)||void 0===e?void 0:e.generateTransitions(v);o.updateSizes(d),f.Legend&&r.legend_show?(t.withTransition=!!p,!l&&o.updateLegend(o.mapToIds(o.data.targets),t,b)):f.Dimension&&o.updateDimension(!0),r.data_empty_label_text&&c.select("text.".concat(Dp.text,".").concat(dp.empty)).attr("x",a.width/2).attr("y",a.height/2).text(r.data_empty_label_text).style("display",u.length?"none":null),a.hasAxis?(o.axis.redrawAxis(u,f,b,h,d),o.hasGrid()&&o.updateGrid(),r.regions.length&&o.updateRegion(),["bar","candlestick","line","area"].forEach((function(t){var e=Qf(t);(/^(line|area)$/.test(t)&&o.hasTypeOf(e)||o.hasType(t))&&o["update".concat(e)](f.TransitionForExit)})),s.text&&c.selectAll(".".concat(Ep.selectedCircles)).filter(o.isBarType.bind(o)).selectAll("circle").remove(),r.interaction_enabled&&!h&&f.EventRect&&(o.redrawEventRect(),null===(n=o.bindZoomEvent)||void 0===n||n.call(o))):(s.arcs&&o.redrawArc(p,g,f.Transform),s.radar&&o.redrawRadar(),s.polar&&o.redrawPolar(),l&&o.updateTreemap(g)),a.resizing||l||!o.hasPointType()&&!a.hasRadar||o.updateCircle(),o.hasDataLabel()&&!o.hasArcType(null,["radar"])&&o.updateText(),null===(i=o.redrawTitle)||void 0===i||i.call(o),d&&o.updateTypesElements(),o.generateRedrawList(u,h,p,f.Subchart),o.updateTooltipOnRedraw(),o.callPluginHook("$redraw",t,p)},generateRedrawList:function(t,e,n,i){var o=this,r=o.config,a=o.state,s=o.getDrawShape();a.hasAxis&&r.subchart_show&&o.redrawSubchart(i,n,s);var c=e&&o.generateFlow({targets:t,flow:e,duration:e.duration,shape:s,xv:o.xv.bind(o)}),l=(n||c)&&lp(),u=o.getRedrawList(s,e,c,l),h=function(){c&&c(),a.redrawing=!1,Ff(r.onrendered,o.api)};if(h)if(l&&u.length){var d=ag();kl().duration(n).each((function(){u.reduce((function(t,e){return t.concat(e)}),[]).forEach((function(t){return d.add(t)}))})).call(d,h)}else a.transiting||h();o.mapToIds(o.data.targets).forEach((function(t){a.withoutFadeIn[t]=!0}))},getRedrawList:function(t,e,n,i){var o=this,r=o.config,a=o.state,s=a.hasAxis,c=a.hasRadar,l=a.hasTreemap,u=o.$el.grid,h=t.pos,d=h.cx,f=h.cy,p=h.xForText,g=h.yForText,v=[];return s&&((r.grid_x_lines.length||r.grid_y_lines.length)&&v.push(o.redrawGrid(i)),r.regions.length&&v.push(o.redrawRegion(i)),Object.keys(t.type).forEach((function(e){var n=Qf(e),r=t.type[e];(/^(area|line)$/.test(e)&&o.hasTypeOf(n)||o.hasType(e))&&v.push(o["redraw".concat(n)](r,i))})),!e&&u.main&&v.push(o.updateGridFocus())),o.hasArcType()&&!c||Lf(r.data_labels)&&!1!==r.data_labels&&v.push(o.redrawText(p,g,e,i)),!o.hasPointType()&&!c||o.isPointFocusOnly()||o.redrawCircle&&v.push(o.redrawCircle(d,f,i,n)),l&&v.push(o.redrawTreemap(i)),v},updateAndRedraw:function(t){void 0===t&&(t={});var e,n=this,i=n.config,o=n.state;t.withTransition=Nf(t,"withTransition",!0),t.withTransform=Nf(t,"withTransform",!1),t.withLegend=Nf(t,"withLegend",!1),t.withUpdateXDomain=!0,t.withUpdateOrgXDomain=!0,t.withTransitionForExit=!1,t.withTransitionForTransform=Nf(t,"withTransitionForTransform",t.withTransition),t.withLegend&&i.legend_show||(o.hasAxis&&(e=n.axis.generateTransitions(t.withTransitionForAxis?i.transition_duration:0)),n.updateScales(),n.updateSvgSize(),n.transformAll(t.withTransitionForTransform,e)),n.redraw(t,e)}};function Mg(t,e,n){void 0===t&&(t="linear"),void 0===e&&(e=0),void 0===n&&(n=1);var i={linear:Ku,log:th,_log:lh,time:Sh,utc:Ah}[t]();return i.type=t,/_?log/.test(t)&&i.clamp(!0),i.range([e,n])}var Og={getXScale:function(t,e,n,i){var o=this,r=o.scale.zoom||Mg(o.axis.getAxisType("x"),t,e);return o.getCustomizedXScale(n?r.domain(n):r,i)},getYScale:function(t,e,n,i){var o=Mg(this.axis.getAxisType(t),e,n);return i&&o.domain(i),o},getYScaleById:function(t,e){var n;void 0===e&&(e=!1);var i="y2"===(null===(n=this.axis)||void 0===n?void 0:n.getId(t)),o=e?i?"subY2":"subY":i?"y2":"y";return this.scale[o]},getCustomizedXScale:function(t,e){var n=this,i=e||function(){return n.axis.x.tickOffset()},o=n.config.axis_x_inverted,r=function(e,n){var o=t(e)+i();return n?o:Math.ceil(o)};for(var a in t)r[a]=t[a];return r.orgDomain=function(){return t.domain()},r.orgScale=function(){return t},n.axis.isCategorized()&&(r.domain=function(e){var n=e;return arguments.length?(t.domain(n),r):(n=this.orgDomain(),o?[n[0]+1,n[1]]:[n[0],n[1]+1])}),r},updateScales:function(t,e){var n,i;void 0===e&&(e=!0);var o=this,r=o.axis,a=o.config,s=o.format,c=o.org,l=o.scale,u=o.state,h=u.current,d=u.width,f=u.height,p=u.width2,g=u.height2,v=u.hasAxis,b=u.hasTreemap;if(v){var m=a.axis_rotated,y=o.getResettedPadding(1),x={x:m?y:0,y:m?0:f,subX:m?1:0,subY:m?0:g},_={x:m?f:d,y:m?d:y,subX:m?f:d,subY:m?p:1},w=e&&(null===(n=l.x)||void 0===n?void 0:n.orgDomain()),T=e&&c.xDomain;l.x=o.getXScale(x.x,_.x,w,(function(){return r.x.tickOffset()})),l.subX=o.getXScale(x.x,_.x,T,(function(t){var e;return t%1?0:(null!==(e=r.subX)&&void 0!==e?e:r.x).tickOffset()})),s.xAxisTick=r.getXAxisTickFormat(),s.subXAxisTick=r.getXAxisTickFormat(!0),r.setAxis("x",l.x,a.axis_x_tick_outer,t),a.subchart_show&&r.setAxis("subX",l.subX,a.axis_x_tick_outer,t),l.y=o.getYScale("y",x.y,_.y,l.y?l.y.domain():a.axis_y_default),l.subY=o.getYScale("y",x.subY,_.subY,l.subY?l.subY.domain():a.axis_y_default),r.setAxis("y",l.y,a.axis_y_tick_outer,t),a.axis_y2_show&&(l.y2=o.getYScale("y2",x.y,_.y,l.y2?l.y2.domain():a.axis_y2_default),l.subY2=o.getYScale("y2",x.subY,_.subY,l.subY2?l.subY2.domain():a.axis_y2_default),r.setAxis("y2",l.y2,a.axis_y2_tick_outer,t))}else if(b){var k=o.getCurrentPadding();l.x=Ku().rangeRound([k.left,h.width-k.right]),l.y=Ku().rangeRound([k.top,h.height-k.bottom])}else null===(i=o.updateArc)||void 0===i||i.call(o)},xx:function(t){var e=this.config,n=this.scale,i=n.x,o=n.zoom,r=e.zoom_enabled&&o?o:i;return t?r(Cf(t.x)?t.x:t):null},xv:function(t){var e=this,n=e.axis,i=e.config,o=e.scale,r=o.x,a=o.zoom,s=i.zoom_enabled&&a?a:r,c=e.getBaseValue(t);return n.isTimeSeries()?c=cp.call(e,c):n.isCategorized()&&Af(c)&&(c=i.axis_x_categories.indexOf(c)),Math.ceil(s(c))},yv:function(t){var e=this.scale,n=e.y,i=e.y2,o=t.axis&&"y2"===t.axis?i:n;return Math.ceil(o(this.getBaseValue(t)))},subxx:function(t){return t?this.scale.subX(t.x):null}};function Dg(t){var e,n=this;return n.isLineType(t)?e=n.generateGetLinePoints(n.getShapeIndices(n.isLineType)):n.isBarType(t)&&(e=n.generateGetBarPoints(n.getShapeIndices(n.isBarType))),e}var Pg={getDrawShape:function(){var t=this,e=t.config.axis_rotated,n=t.state,i=n.hasRadar,o=n.hasTreemap,r={type:{},indices:{},pos:{}};if(!o&&["bar","candlestick","line","area"].forEach((function(e){var n=Qf(/^(bubble|scatter)$/.test(e)?"line":e);if(t.hasType(e)||t.hasTypeOf(n)||"line"===e&&(t.hasType("bubble")||t.hasType("scatter"))){var i=t.getShapeIndices(t["is".concat(n,"Type")]),o=t["generateDraw".concat(n)];r.indices[e]=i,r.type[e]=o?o.bind(t)(i,!1):void 0}})),!t.hasArcType()||i||o){var a=void 0,s=void 0;o||(a=i?t.radarCircleX:e?t.circleY:t.circleX,s=i?t.radarCircleY:e?t.circleX:t.circleY),r.pos={xForText:t.generateXYForText(r.indices,!0),yForText:t.generateXYForText(r.indices,!1),cx:(a||function(){}).bind(t),cy:(s||function(){}).bind(t)}}return r},getShapeIndices:function(t){var e=this,n=e.config,i=n.data_xs,o=Lf(i),r={},a=o?{}:0;return o&&ep(Object.keys(i).map((function(t){return i[t]}))).forEach((function(t){a[t]=0,r[t]={}})),e.filterTargetsToShow(e.data.targets.filter(t,e)).forEach((function(t){for(var e,o=(t.id in i?i[t.id]:""),s=o?r[o]:r,c=0,l=void 0;l=n.data_groups[c];c++)if(!(l.indexOf(t.id)<0))for(var u=0,h=void 0;h=l[u];u++){if(h in s){s[t.id]=s[h];break}t.id!==h&&o&&(s[h]=null!==(e=s[t.id])&&void 0!==e?e:a[o])}Ef(s[t.id])&&(s[t.id]=o?a[o]++:a++,s.__max__=(o?a[o]:a)-1)})),r},getIndices:function(t,e,n){var i=this,o=i.config,r=o.data_xs,a=o.bar_indices_removeNull,s=e.id,c=e.index;if(i.isBarType(s)&&a){var l={};return i.getAllValuesOnIndex(c,!0).forEach((function(t,e){l[t.id]=e,l.__max__=e})),l}return Lf(r)?t[r[s]]:t},getIndicesMax:function(t){return Lf(this.config.data_xs)?Object.keys(t).map((function(e){return t[e].__max__||0})).reduce((function(t,e){return t+e})):t.__max__},getShapeX:function(t,e,n){var i=this,o=i.config,r=i.scale,a=n?r.subX:r.zoom||r.x,s=o.bar_overlap,c=o.bar_padding,l=function(t,e){return t+e},u=Rf(t)&&(t._$total.length?t._$total.reduce(l)/2:0);return function(n){var o=i.getIndices(e,n,"getShapeX"),r=n.id in o?o[n.id]:0,h=(o.__max__||0)+1,d=0;if(Lf(n.x)){var f=a(n.x,!0);if(u){var p=t[n.id]||t._$width;d=s?f-p/2:f-p+t._$total.slice(0,r+1).reduce(l)-u}else d=f-($f(t)?t:t._$width)*(h/2-(s?1:r))}return t&&d&&h>1&&c&&(r&&(d+=c*r),h>2?d-=(h-1)*c/2:2===h&&(d-=c/2)),d}},getShapeY:function(t){var e=this,n=e.isStackNormalized();return function(i){var o=i.value;return $f(i)?o=i:e.isAreaRangeType(i)?o=e.getBaseValue(i,"mid"):n?o=e.getRatio("index",i,!0):e.isBubbleZType(i)?o=e.getBubbleZData(i.value,"y"):e.isBarRangeType(i)&&(o=o[1]),e.getYScaleById(i.id,t)(o)}},getShapeYMin:function(t){var e=this,n=e.axis.getId(t),i=e.scale[n].domain()[0],o=e.config["axis_".concat(n,"_inverted")];return!e.isGrouped(t)&&!o&&i>0?i:0},getShapeOffsetData:function(t){var e=this,n=e.orderTargets(e.filterTargetsToShow(e.data.targets.filter(t,e))),i=e.isStackNormalized(),o=n.map((function(t){var n=t.values,o={};e.isStepType(t)&&(n=e.convertValuesToStep(n));var r=n.reduce((function(t,n){var r=Number(n.x);return t[r]=n,o[r]=i?e.getRatio("index",n,!0):n.value,t}),{});return{id:t.id,rowValues:n,rowValueMapByXValue:r,values:o}})),r=n.reduce((function(t,e,n){return t[e.id]=n,t}),{});return{indexMapByTargetId:r,shapeOffsetTargets:o}},getShapeOffset:function(t,e,n){var i=this,o=i.getShapeOffsetData(t),r=o.shapeOffsetTargets,a=o.indexMapByTargetId,s=i.config.data_groupsZeroAs;return function(t,o){var c=t.id,l=t.value,u=t.x,h=i.getIndices(e,t),d=i.getYScaleById(c,n);if(i.isBarRangeType(t))return d(l[0]);var f=Number(u),p=d("zero"===s?0:i.getShapeYMin(c)),g=p;return r.filter((function(t){return t.id!==c&&h[t.id]===h[c]})).forEach((function(t){var e=t.id,n=t.rowValueMapByXValue,i=t.rowValues,r=t.values;if(a[e]<a[c]){var u=r[f],h=i[o];if(h&&Number(h.x)===f||(h=n[f]),(null==h?void 0:h.value)*l>=0&&$f(u))(0!==l||("positive"===s&&u>0||"negative"===s&&u<0))&&(g+=d(u)-p)}})),g}},circleY:function(t,e){var n,i=this,o=t.id;return i.isGrouped(o)&&(n=Dg.bind(i)(t)),n?n(t,e)[0][1]:i.getYScaleById(o)(i.getBaseValue(t))},getBarW:function(t,e,n){var i=this,o=i.config,r=i.org,a=i.scale,s=i.getMaxDataCount(),c="bar"===t&&o.data_groups.length,l="".concat(t,"_width"),u=a.zoom&&!i.axis.isCategorized()?r.xDomain.map((function(t){return a.zoom(t)})).reduce((function(t,e){return Math.abs(t)+e}))/s:e.tickInterval(s),h=function(t){var e=t?o[l][t]:o[l],i=t?e.ratio:o["".concat(l,"_ratio")],r=t?e.max:o["".concat(l,"_max")],a=$f(e)?e:n?u*i/n:0;return r&&a>r?r:a},d=h();return!c&&Rf(o[l])&&(d={_$width:d,_$total:[]},i.filterTargetsToShow(i.data.targets).forEach((function(t){o[l][t.id]&&(d[t.id]=h(t.id),d._$total.push(d[t.id]||d._$width))}))),d},getShapeByIndex:function(t,e,n){var i=this.$el,o=Cf(e)?"-".concat(e):"",r=i[t];return r=r&&!r.empty()?r.filter((function(t){return!n||t.id===n})).filter((function(t){return!Cf(e)||t.index===e})):(n?i.main.selectAll(".".concat(Lp["".concat(t,"s")]).concat(this.getTargetSelectorSuffix(n))):i.main).selectAll(".".concat(Lp[t]).concat(o)),r},isWithinShape:function(t,e){var n,i,o=this,r=cs(t);return o.isTargetToShow(e.id)?(null===(n=o.hasValidPointType)||void 0===n?void 0:n.call(o,t.nodeName))?i=o.isStepType(e)?o.isWithinStep(t,o.getYScaleById(e.id)(e.value)):o.isWithinCircle(t,o.isBubbleType(e)?1.5*o.pointSelectR(e):0):"path"===t.nodeName&&(i=!r.classed(Lp.bar)||o.isWithinBar(t)):i=!1,i},getInterpolate:function(t){var e=this.getInterpolateType(t);return{basis:Mh,"basis-closed":Ph,"basis-open":Ih,bundle:zh,cardinal:Fh,"cardinal-closed":Vh,"cardinal-open":Hh,"catmull-rom":Gh,"catmull-rom-closed":Zh,"catmull-rom-open":Qh,"monotone-x":ad,"monotone-y":sd,natural:ud,"linear-closed":dd,linear:pd,step:vd,"step-after":md,"step-before":bd}[e]},getInterpolateType:function(t){var e=this,n=e.config,i=n.spline_interpolation_type,o=e.isInterpolationType(i)?i:"cardinal";return e.isSplineType(t)?o:e.isStepType(t)?n.line_step_type:"linear"},isWithinBar:function(t){var e=jf(this.state.event,t),n=Hf(t),i=n[0],o=n[1],r=Math.min(i.x,o.x),a=Math.min(i.y,o.y),s=this.config.bar_sensitivity,c=t.getBBox(),l=r+c.width+s,u=a+c.height+s,h=a-s;return r-s<e[0]&&e[0]<l&&h<e[1]&&e[1]<u}},Rg={setContainerSize:function(){var t=this,e=t.state;e.current.width=t.getCurrentWidth(),e.current.height=t.getCurrentHeight()},getCurrentWidth:function(){return this.config.size_width||this.getParentWidth()},getCurrentHeight:function(){var t=this,e=t.config,n=e.size_height||t.getParentHeight();return n>0?n:320/(t.hasType("gauge")&&!e.gauge_fullCircle?2:1)},getParentRectValue:function(t){for(var e="offset".concat(Qf(t)),n=this.$el.chart.node(),i=0;i<30&&n&&"BODY"!==n.tagName;){try{i=n.getBoundingClientRect()[t]}catch(t){e in n&&(i=n[e])}n=n.parentNode}var o=vf.body[e];return i>o&&(i=o),i},getParentWidth:function(){return this.getParentRectValue("width")},getParentHeight:function(){var t=this.$el.chart.style("height"),e=0;return t&&(e=/px$/.test(t)?parseInt(t,10):this.getParentRectValue("height")),e},getSvgLeft:function(t){var e=this,n=e.config,i=e.state.hasAxis,o=e.$el,r=n.axis_rotated,a=r||!r&&!n.axis_y_inner,s=r?gp.axisX:gp.axisY,c=o.main.select(".".concat(s)).node(),l=i&&n["axis_".concat(r?"x":"y","_label")],u=0;if(i&&(Af(l)||Af(l.text)||/^inner-/.test(null==l?void 0:l.position))){var h=o.main.select(".".concat(s,"-label"));h.empty()||(u=h.node().getBoundingClientRect().left)}var d=c&&a?c.getBoundingClientRect():{right:0},f=o.chart.node().getBoundingClientRect().left+u,p=e.hasArcType(),g=d.right-f-(p?0:e.getCurrentPaddingByDirection("left",t));return g>0?g:0},updateDimension:function(t){var e,n=this,i=n.config,o=n.state.hasAxis,r=n.$el;o&&!t&&n.axis.x&&i.axis_rotated&&(null===(e=n.axis.subX)||void 0===e||e.create(r.axis.subX)),n.updateScales(t),n.updateSvgSize(),n.transformAll(!1)},updateSvgSize:function(){var t=this,e=t.state,n=e.clip,i=e.current,o=e.hasAxis,r=e.width,a=e.height,s=t.$el.svg;if(s.attr("width",i.width).attr("height",i.height),o){var c=s.select(".".concat(Op.brush," .overlay")),l={width:0,height:0};c.size()&&(l.width=+c.attr("width"),l.height=+c.attr("height")),s.selectAll(["#".concat(n.id),"#".concat(n.idGrid)]).select("rect").attr("width",r).attr("height",a),s.select("#".concat(n.idXAxis)).select("rect").call(t.setXAxisClipPath.bind(t)),s.select("#".concat(n.idYAxis)).select("rect").call(t.setYAxisClipPath.bind(t)),n.idSubchart&&s.select("#".concat(n.idSubchart)).select("rect").attr("width",r).attr("height",l.height)}},getCurrentPaddingByDirection:function(t,e,n){var i;void 0===e&&(e=!1),void 0===n&&(n=!1);var o=this,r=o.config,a=o.$el,s=o.state.hasAxis,c=r.axis_rotated,l="fit"===(null===(i=r.padding)||void 0===i?void 0:i.mode),u=$f(r["padding_".concat(t)])?r["padding_".concat(t)]:void 0,h=s?{top:c?"y2":null,bottom:c?"y":"x",left:c?"x":"y",right:c?null:"y2"}[t]:null,d=/^(left|right)$/.test(t),f=h&&r["axis_".concat(h,"_inner")],p=h&&r["axis_".concat(h,"_show")],g=h?r["axis_".concat(h,"_axes")].length:0,v=h?d?o.getAxisWidthByAxisId(h,e):o.getHorizontalAxisHeight(h):0,b=0;!l&&d&&(v=function(t){return 10*Math.ceil(t/10)}(v));var m=s&&d&&(f||Ef(u)&&!p)?0:l?(p?v:0)+(null!=u?u:0):Ef(u)?v:u;return d&&s?(h&&(l||f)&&r["axis_".concat(h,"_label")].text&&(m+=o.axis.getAxisLabelPosition(h).isOuter?20:0),"right"===t?(m+=c?!l&&Ef(u)?10:2:!p||f?l?2:1:0,m+=n?o.axis.getXAxisTickTextY2Overflow(20):0):"left"===t&&c&&Ef(u)&&(m=r.axis_x_show?l?v:Math.max(v,40):1)):"top"===t?(a.title&&a.title.node()&&(m+=o.getTitlePadding()),b=c&&!f?g:0):"bottom"===t&&s&&c&&!p&&(m+=1),m+v*g-b},getCurrentPadding:function(t){void 0===t&&(t=!1);var e=this,n=["top","bottom","left","right"].map((function(n){return e.getCurrentPaddingByDirection(n,null,t)}));return{top:n[0],bottom:n[1],left:n[2],right:n[3]}},getResettedPadding:function(t){var e=this.config,n=$f(t),i=n?0:{};return!1===e.padding?!n&&Object.keys(t).forEach((function(n){i[n]=If(e.data_labels)||!1===e.data_labels||"top"!==n?0:t[n]})):i=t,i},updateSizes:function(t){var e,n,i,o=this,r=o.config,a=o.state,s=o.$el.legend,c=r.axis_rotated,l=o.hasArcType()||a.hasTreemap,u="fit"===(null===(e=r.padding)||void 0===e?void 0:e.mode);!t&&o.setContainerSize();var h={width:s?o.getLegendWidth():0,height:s?o.getLegendHeight():0};!l&&r.axis_x_show&&r.axis_x_tick_autorotate&&o.updateXAxisTickClip();var d=r.legend_show&&a.isLegendRight?o.getLegendWidth()+(u?0:20):0,f=!r.legend_show||a.isLegendRight||a.isLegendInset?0:h.height,p=c||l?0:o.getHorizontalAxisHeight("x"),g=r.subchart_axis_x_show&&r.subchart_axis_x_tick_text_show?p:30,v=r.subchart_show&&!l?r.subchart_size_height+g:0,b=o.hasType("gauge")&&r.arc_needle_show&&!r.gauge_fullCircle&&!r.gauge_label_show?10:0,m=o.getCurrentPadding(!0);if(a.margin=!l&&c?{top:m.top,right:l?0:m.right+d,bottom:f+m.bottom,left:v+(l?0:m.left)}:{top:(u?0:4)+m.top,right:l?0:m.right+d,bottom:b+v+f+m.bottom,left:l?0:m.left},a.margin=o.getResettedPadding(a.margin),a.margin2=c?{top:a.margin.top,right:NaN,bottom:20+f,left:o.state.rotatedPadding.left}:{top:a.current.height-v-f,right:NaN,bottom:g+f,left:a.margin.left},a.margin3={top:0,right:NaN,bottom:0,left:0},null===(n=o.updateSizeForLegend)||void 0===n||n.call(o,h),a.width=a.current.width-a.margin.left-a.margin.right,a.height=a.current.height-a.margin.top-a.margin.bottom,a.width<0&&(a.width=0),a.height<0&&(a.height=0),a.width2=c?a.margin.left-a.rotatedPadding.left-a.rotatedPadding.right:a.width,a.height2=c?a.height:a.current.height-a.margin2.top-a.margin2.bottom,a.width2<0&&(a.width2=0),a.height2<0&&(a.height2=0),o.hasArcType()){var y=o.hasType("gauge"),x=r.legend_show&&a.isLegendRight;a.arcWidth=a.width-(x?h.width+10:0),a.arcHeight=a.height-(x&&!y?0:10),y&&!r.gauge_fullCircle&&(a.arcHeight+=a.height-o.getPaddingBottomForGauge()),null===(i=o.updateRadius)||void 0===i||i.call(o)}a.isLegendRight&&l&&(a.margin3.left=a.arcWidth/2+1.1*a.radiusExpanded)}},Ig={setCssRule:function(t,e,n,i){var o=this,r=o.config,a=o.state,s=a.cssRule,c=a.style;return r.boost_useCssRule?function(r){r.each((function(r){var a=i&&(null==i?void 0:i.call(o,r)),l="".concat(t?".".concat(Mp.shapes+o.getTargetSelectorSuffix(r.id)):"").concat(e);e in s&&c.sheet.deleteRule(s[l]),o.state.cssRule[l]=function(t,e,n){var i=t.rootSelctor,o=t.sheet,r="".concat(i," ").concat(function(t){return t.replace(/\s?(bb-)/g,".$1").replace(/\.+/g,".")}(e)," {").concat(n.join(";"),"}");return o[o.insertRule?"insertRule":"addRule"](r,o.cssRules.length)}(c,l,n.filter(Boolean).map((function(t){return Af(a)&&-1===t.indexOf(":")?"".concat(t,": ").concat(a):t||""})))}))}:function(){}},getStylePropValue:function(t){return this.config.boost_useCssRule?null:Sf(t)?t.bind(this):t}};function Lg(t,e,n,i,o){var r,a=t.value,s=this.isCandlestickType(t),c=$f(a)&&a<0||s&&!(null===(r=this.getCandlestickData(t))||void 0===r?void 0:r._isUp),l=e.x,u=e.y;return i?"start"===n?(l+=c?0:8,u+=4):"middle"===n?(l+=8,u-=8):"end"===n&&(c&&(l-=8),u+=4):("start"===n?(l+=4,c&&(u+=16)):"middle"===n?u-=8:"end"===n&&(l-=4,c&&(u+=16)),o&&(u+=c?-17:s?13:7)),{x:l,y:u}}function zg(t,e){var n,i=this.config.data_labels_position,o=t.id,r=t.index,a=t.value;return null!==(n=Sf(i)?i.bind(this.api)(e,a,o,r,this.$el.text):(o in i?i[o]:i)[e])&&void 0!==n?n:0}var Bg={opacityForText:function(t){var e=this;return e.isBarType(t)&&!e.meetsLabelThreshold(Math.abs(e.getRatio("bar",t)),"bar")?"0":e.hasDataLabel?null:"0"},initText:function(){var t=this.$el;t.main.select(".".concat(dp.chart)).append("g").attr("class",Dp.chartTexts).style("pointer-events",t.treemap?"none":null)},updateTargetsForText:function(t){var e=this,n=e.getChartClass("Text"),i=e.getClass("texts","id"),o=e.classFocus.bind(e),r=e.$el.main.select(".".concat(Dp.chartTexts)).selectAll(".".concat(Dp.chartText)).data(t).attr("class",(function(t){return"".concat(n(t)).concat(o(t)).trim()}));r.enter().append("g").style("opacity","0").attr("class",n).call(e.setCssRule(!0," .".concat(Dp.text),["fill","pointer-events:none"],e.updateTextColor)).append("g").attr("class",i)},updateText:function(){var t=this,e=t.$el,n=t.$T,i=t.config,o=t.axis,r=t.getClass("text","index"),a=i.data_labels.centered,s=e.main.selectAll(".".concat(Dp.texts)).selectAll(".".concat(Dp.text)).data(t.labelishData.bind(t));n(s.exit()).style("fill-opacity","0").remove(),e.text=s.enter().append("text").merge(s).attr("class",r).attr("text-anchor",(function(e){var n=i["axis_".concat(null==o?void 0:o.getId(e.id),"_inverted")]?e.value>0:e.value<0;if(t.isCandlestickType(e)){var r=t.getCandlestickData(e);n=!(null==r?void 0:r._isUp)}else if(t.isTreemapType(e))return a?"middle":"start";return i.axis_rotated?n?"end":"start":"middle"})).style("fill",t.getStylePropValue(t.updateTextColor)).style("fill-opacity","0").each((function(e,n,i){var o=cs(this),r=e.value;if(t.isBubbleZType(e))r=t.getBubbleZData(r,"z");else if(t.isCandlestickType(e)){var a=t.getCandlestickData(e);a&&(r=a.close)}r=t.isTreemapType(e)?t.treemapDataLabelFormat(e)(o):t.dataLabelFormat(e.id)(r,e.id,e.index,i),$f(r)?this.textContent=r:Uf(o,r)}))},updateTextColor:function(t){var e,n=this,i=n.config,o=i.data_labels_colors,r=n.isArcType(t)&&!n.isRadarType(t)||n.isTreemapType(t)?null:n.color(t);if(Af(o))e=o;else if(Bf(o)){e=o[(t.data||t).id]}else Sf(o)&&(e=o.bind(n.api)(r,t));if(n.isCandlestickType(t)&&!Sf(o)){var a=n.getCandlestickData(t);if(!(null==a?void 0:a._isUp)){var s=i.candlestick_color_down;e=Bf(s)?s[t.id]:s}}return e||r},updateTextBackgroundColor:function(t){var e=this,n=e.$el,i=e.config.data_labels_backgroundColors,o="";if(Af(i)||Bf(i)){var r=Af(i)?"":e.getTargetSelectorSuffix("id"in t?t.id:t.data.id),a=n.defs.select(["filter[id*='labels-bg","']"].join(r));a.size()&&(o="url(#".concat(a.attr("id"),")"))}return o||null},redrawText:function(t,e,n,i){var o=this,r=o.$T,a=o.axis,s=o.config,c=o.state.hasTreemap,l=Gf(!0),u=s.axis_rotated,h=s.data_labels.rotate,d=function(t){var e="middle";return t>0&&t<=170?e="end":t>190&&t<=360&&(e="start"),e}(h),f=h?"rotate(".concat(h,")"):"";return o.$el.text.style("fill",o.getStylePropValue(o.updateTextColor)).attr("filter",o.updateTextBackgroundColor.bind(o)).style("fill-opacity",n?0:o.opacityForText.bind(o)).each((function(n,p){var g=r(c&&this.childElementCount?this.parentNode:this,!(!i||!this.getAttribute("x")),l),v=s["axis_".concat(null==a?void 0:a.getId(n.id),"_inverted")],b={x:t.bind(this)(n,p),y:e.bind(this)(n,p)};h&&(b=Lg.bind(o)(n,b,d,u,v),g.attr("text-anchor",d)),this.childElementCount||h?g.attr("transform","translate(".concat(b.x," ").concat(b.y,") ").concat(f)):g.attr("x",b.x).attr("y",b.y)})),!0},getTextRect:function(t,e){var n=this,i=t.node?t.node():t;/text/i.test(i.tagName)||(i=i.querySelector("text"));var o=i.textContent,r="".concat(ng,"-").concat(o.replace(/\W/g,"_")),a=n.cache.get(r);return a||(n.$el.svg.append("text").style("visibility","hidden").style("font",cs(i).style("font")).classed(e,!0).text(o).call((function(t){a=qf(t.node())})).remove(),n.cache.add(r,a)),a},generateXYForText:function(t,e){var n=this,i=n.state,o=i.hasRadar,r=i.hasTreemap,a=Object.keys(t),s={},c=e?n.getXForText:n.getYForText;return o&&a.push("radar"),r&&a.push("treemap"),a.forEach((function(e){s[e]=n["generateGet".concat(Qf(e),"Points")](t[e],!1)})),function(t,e){var i=(n.isAreaType(t)?"area":n.isBarType(t)&&"bar")||n.isCandlestickType(t)&&"candlestick"||n.isRadarType(t)&&"radar"||n.isTreemapType(t)&&"treemap"||"line";return c.call(n,s[i](t,e),t,this)}},getCenteredTextPos:function(t,e,n,i){var o=this,r=o.config,a=r.axis_rotated,s=o.isBarType(t),c=o.isTreemapType(t);if(r.data_labels.centered&&(s||c)){var l=qf(n);if(s){var u=o.getRangedData(t,null,"bar")>=0;if(a){var h=(u?e[1][1]-e[0][1]:e[0][1]-e[1][1])/2+l.width/2;return u?-h-3:h+2}var d=(u?e[0][1]-e[1][1]:e[1][1]-e[0][1])/2+l.height/2;return u?d:-d-2}if(c)return"x"===i?(e[1][0]-e[0][0])/2:(e[1][1]-e[0][1])/2+l.height/2}return 0},getXForText:function(t,e,n){var i,o=this,r=o.config,a=r.axis_rotated,s=o.isTreemapType(e),c=t[0][0];if(o.isCandlestickType(e))a?c=(null===(i=o.getCandlestickData(e))||void 0===i?void 0:i._isUp)?t[2][2]+4:t[2][1]-4:c+=(t[1][0]-c)/2;else if(s)c+=r.data_labels.centered?0:5;else if(a){var l=r["axis_".concat(o.axis.getId(e.id),"_inverted")],u=o.isBarType(e)?4:6,h=e.value;c=t[2][1],l?c-=u*(h>0?1:-1):c+=u*(h<0?-1:1)}else c=o.hasType("bar")?(t[2][0]+t[0][0])/2:c;return(a||s)&&(c+=o.getCenteredTextPos(e,t,n,"x")),c+zg.call(this,e,"x")},getYForText:function(t,e,n){var i,o=this,r=o.axis,a=o.config,s=o.state,c=a.axis_rotated,l=a["axis_".concat(null==r?void 0:r.getId(e.id),"_inverted")],u=o.isBarType(e),h=o.isTreemapType(e),d=a.point_r,f=qf(n),p=e.value,g=3;if(o.isCandlestickType(e))p=o.getCandlestickData(e),c?(i=t[0][0],i+=(t[1][0]-i)/2+g):(i=p&&p._isUp?t[2][2]-g:t[2][1]+4*g,l&&(i+=15*(p._isUp?1:-1)));else if(h)i=t[0][1]+(a.data_labels.centered?0:f.height+5);else if(c)i=(t[0][0]+t[2][0]+.6*f.height)/2;else if(i=t[2][1],$f(d)&&d>5&&(o.isLineType(e)||o.isScatterType(e))&&(g+=a.point_r/2.3),p<0||0===p&&!s.hasPositiveValue&&s.hasNegativeValue)i+=l?u?-3:-5:f.height+(u?-g:g);else{var v=2*-g;u?v=-g:o.isBubbleType(e)&&(v=g),l&&(v=u?10:15),i+=v}return c&&!h||(i+=o.getCenteredTextPos(e,t,n,"y")),i+zg.call(this,e,"y")},markOverlapped:function(t,e,n){var i=e.$el.arcs.selectAll(n),o=i.filter((function(e){return e.data.id!==t})),r=i.filter((function(e){return e.data.id===t})),a=tp(r.node()),s=function(t,e){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))};r.node()&&o.each((function(){var t=tp(this),e=cs(this),n=s(a.e,a.f)>s(t.e,t.f)?r:e,i=Math.ceil(Math.abs(a.e-t.e))<Math.ceil(n.node().getComputedTextLength()),o=Math.ceil(Math.abs(a.f-t.f))<parseInt(r.style("font-size"),10);e.classed(Dp.TextOverlapping,i&&o)}))},undoMarkOverlapped:function(t,e){t.$el.arcs.selectAll(e).each((function(){ls([this,this.previousSibling]).classed(Dp.TextOverlapping,!1)}))},meetsLabelThreshold:function(t,e){void 0===t&&(t=0);return t>=(this.config["".concat(e,"_label_threshold")]||0)}};function Ng(t,e){void 0===t&&(t="left");var n=$f(e);return t.indexOf("center")>-1?n?e/2:"middle":t.indexOf("right")>-1?n?e:"end":n?0:"start"}var Fg={initTitle:function(){var t=this.config,e=this.$el;t.title_text&&(e.title=e.svg.append("g"),Uf(e.title.append("text").style("text-anchor",Ng(t.title_position)).attr("class",Dp.title),t.title_text,[.3,1.5]))},redrawTitle:function(){var t=this,e=t.config,n=t.state.current,i=t.$el.title;if(i){var o=Ng(e.title_position,n.width),r=(e.title_padding.top||0)+t.getTextRect(t.$el.title,Dp.title).height;i.attr("transform","translate(".concat(o,", ").concat(r,")"))}},getTitlePadding:function(){var t=this,e=t.$el,n=t.config;return(n.title_padding.top||0)+t.getTextRect(e.title,Dp.title).height+(n.title_padding.bottom||0)}},Xg={initTooltip:function(){var t=this,e=t.config,n=t.$el;n.tooltip=cs(e.tooltip_contents.bindto),n.tooltip.empty()&&(n.tooltip=n.chart.append("div").attr("class",Pp.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none")),t.bindTooltipResizePos()},initShowTooltip:function(){var t,e,n=this,i=n.config,o=n.$el,r=n.state,a=r.hasAxis,s=r.hasRadar;if(i.tooltip_init_show){var c=!(a||s);(null===(e=n.axis)||void 0===e?void 0:e.isTimeSeries())&&Af(i.tooltip_init_x)&&(i.tooltip_init_x=cp.call(n,i.tooltip_init_x)),n.api.tooltip.show({data:(t={},t[c?"index":"x"]=i.tooltip_init_x,t)});var l=i.tooltip_init_position;if(!i.tooltip_contents.bindto&&!If(l)){var u=l.top,h=void 0===u?0:u,d=l.left,f=void 0===d?50:d;o.tooltip.style("top",Af(h)?h:"".concat(h,"px")).style("left",Af(f)?f:"".concat(f,"px")).style("display",null)}}},getTooltipHTML:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this,i=n.api,o=n.config;return Sf(o.tooltip_contents)?o.tooltip_contents.bind(i).apply(void 0,t):n.getTooltipContent.apply(n,t)},getTooltipContent:function(t,e,n,i){var o=this,r=o.api,a=o.config,s=o.state,c=o.$el,l=["title","name","value"].map((function(t){var e=a["tooltip_format_".concat(t)];return Sf(e)?e.bind(r):e})),u=l[0],h=l[1],d=l[2],f=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Vf((h||function(t){return t}).apply(void 0,t))},p=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Vf((d||(s.hasTreemap||o.isStackNormalized()?function(t,e){return"".concat((100*e).toFixed(2),"%")}:n)).apply(void 0,t))},g=a.tooltip_order,v=function(t){return o.axis&&o.isBubbleZType(t)?o.getBubbleZData(t.value,"z"):o.getBaseValue(t)},b=o.levelColor?function(t){return o.levelColor(t.value)}:function(t){return i(t)},m=a.tooltip_contents,y=m.template,x=o.mapToTargetIds();if(null===g&&a.data_groups.length){var _=o.orderTargets(o.data.targets).map((function(t){return t.id})).reverse();t.sort((function(t,e){var n=t?t.value:null,i=e?e.value:null;return n>0&&i>0&&(n=t.id?_.indexOf(t.id):null,i=e.id?_.indexOf(e.id):null),n-i}))}else if(/^(asc|desc)$/.test(g)){var w="asc"===g;t.sort((function(t,e){var n=t?v(t):null,i=e?v(e):null;return w?n-i:i-n}))}else Sf(g)&&t.sort(g.bind(r));var T,k,C,S,A,$=o.getTooltipContentTemplate(y),E=t.length,M=function(){if(!(k=t[A])||!v(k)&&0!==v(k))return"continue";if(Ef(T)){var n=(s.hasAxis||s.hasRadar)&&function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Vf((u||e).apply(void 0,t))}(k.x);T=sp($[0],{CLASS_TOOLTIP:Pp.tooltip,TITLE:Cf(n)?y?n:'<tr><th colspan="2">'.concat(n,"</th></tr>"):""})}if(!k.ratio&&c.arcs&&(C=["arc",o.$el.arcs.select("path.".concat(fp.arc,"-").concat(k.id)).data()[0]],k.ratio=o.getRatio.apply(o,C)),C=[k.ratio,k.id,k.index],o.isAreaRangeType(k)){var i=["high","low"].map((function(t){return p.apply(void 0,kf([o.getRangedData(k,t)],C,!1))})),r=i[0],a=i[1],l=p.apply(void 0,kf([v(k)],C,!1));S="<b>Mid:</b> ".concat(l," <b>High:</b> ").concat(r," <b>Low:</b> ").concat(a)}else if(o.isCandlestickType(k)){var h=["open","high","low","close","volume"].map((function(t){return o.getRangedData(k,t,"candlestick")?p.apply(void 0,kf([o.getRangedData(k,t,"candlestick")],C,!1)):void 0})),d=h[0],g=(r=h[1],a=h[2],h[3]),_=h[4];S="<b>Open:</b> ".concat(d," <b>High:</b> ").concat(r," <b>Low:</b> ").concat(a," <b>Close:</b> ").concat(g).concat(_?" <b>Volume:</b> ".concat(_):"")}else if(o.isBarRangeType(k)){var w=k.value,E=k.id,M=k.index;S="".concat(p(w,void 0,E,M))}else S=p.apply(void 0,kf([v(k)],C,!1));if(void 0!==S){if(null===k.name)return"continue";var O=f.apply(void 0,kf([k.name],C,!1)),D=b(k),P={CLASS_TOOLTIP_NAME:Pp.tooltipName+o.getTargetSelectorSuffix(k.id),COLOR:y||!o.patterns?D:'<svg><rect style="fill:'.concat(D,'" width="10" height="10"></rect></svg>'),NAME:O,VALUE:S};if(y&&Bf(m.text)){var R=x.indexOf(k.id);Object.keys(m.text).forEach((function(t){P[t]=m.text[t][R]}))}T+=sp($[1],P)}};for(A=0;A<E;A++)M();return"".concat(T,"</table>")},getTooltipContentTemplate:function(t){return(t||'<table class="{=CLASS_TOOLTIP}"><tbody>\n\t\t\t\t{=TITLE}\n\t\t\t\t{{<tr class="{=CLASS_TOOLTIP_NAME}">\n\t\t\t\t\t<td class="name">'.concat(this.patterns?"{=COLOR}":'<span style="background-color:{=COLOR}"></span>','{=NAME}</td>\n\t\t\t\t\t<td class="value">{=VALUE}</td>\n\t\t\t\t</tr>}}\n\t\t\t</tbody></table>')).replace(/(\r?\n|\t)/g,"").split(/{{(.*)}}/)},setTooltipPosition:function(t,e){var n,i,o=this,r=o.config,a=o.scale,s=o.state,c=o.$el,l=c.eventRect,u=c.tooltip,h=r.tooltip_contents.bindto,d=r.axis_rotated,f=null==u?void 0:u.datum();if(!h&&f){var p=null!=t?t:JSON.parse(f.current),g=jf(s.event,null!=e?e:null==l?void 0:l.node()),v={x:g[0],y:g[1]};if(s.hasAxis&&a.x&&f&&"x"in f){var b=function(t,e,n){var i;void 0===t&&(t=0),void 0===n&&(n="y");var r=a[e?null===(i=o.axis)||void 0===i?void 0:i.getId(e):n];return r?r(t)+(d?s.margin.left:s.margin.top):0};v.xAxis=a.x(f.x)+(r.tooltip_position?d?s.margin.top:s.margin.left:0),1===p.length?v.yAxis=b(p[0].value,p[0].id):v.yAxis=b}var m=f.width,y=void 0===m?0:m,x=f.height,_=void 0===x?0:x,w=null!==(i=null===(n=r.tooltip_position)||void 0===n?void 0:n.bind(o.api)(p,y,_,null==l?void 0:l.node(),v))&&void 0!==i?i:o.getTooltipPosition.bind(o)(y,_,v);["top","left"].forEach((function(t){var e=w[t];u.style(t,"".concat(e,"px")),"left"!==t||f.xPosInPercent||(f.xPosInPercent=e/s.current.width*100)}))}},getTooltipPosition:function(t,e,n){var i=this,o=i.config,r=i.scale,a=i.state,s=a.width,c=a.height,l=a.current,u=a.isLegendRight,h=a.inputType,d=i.hasType("gauge")&&!o.gauge_fullCircle,f=a.hasTreemap,p=o.axis_rotated,g=i.hasArcType(),v=i.getSvgLeft(!0),b=v+l.width-i.getCurrentPaddingByDirection("right"),m=n.x,y=n.y;if(g)"touch"===h||i.hasType("radar")||(m+=(s-(u?i.getLegendWidth():0))/2,y+=d?c:c/2);else if(!f){var x={top:i.getCurrentPaddingByDirection("top",!0),left:i.getCurrentPaddingByDirection("left",!0)};p?(m+=v+x.left+20,y=x.top+n.xAxis+20,b-=v):(m=v+x.left+20+(r.zoom?m:n.xAxis),y+=x.top-5)}(m+t+15>b&&(m-=t+(f||g?0:p?40:38)),y+e>l.height)&&(y-=d?3*e:e+(f?0:30));var _={top:y,left:m};return Object.keys(_).forEach((function(t){_[t]<0&&(_[t]=0)})),_},showTooltip:function(t,e){var n=this,i=n.config,o=n.$el.tooltip,r=t.filter((function(t){return t&&Cf(n.getBaseValue(t))}));if(o&&0!==r.length&&i.tooltip_show){var a=o.datum(),s=JSON.stringify(t);if(!a||a.current!==s){var c=t.concat().sort()[0],l=c.index,u=c.x;Ff(i.tooltip_onshow,n.api,t),o.html(n.getTooltipHTML(t,n.axis?n.axis.getXAxisTickFormat():n.categoryName.bind(n),n.getDefaultValueFormat(),n.color)).style("display",null).style("visibility",null).datum(a={index:l,x:u,current:s,width:o.property("offsetWidth"),height:o.property("offsetHeight")}),Ff(i.tooltip_onshown,n.api,t),n._handleLinkedCharts(!0,l)}n.setTooltipPosition(r,e)}},bindTooltipResizePos:function(){var t=this,e=t.resizeFunction,n=t.state,i=t.$el.tooltip;e.add((function(){if("block"===i.style("display")){var t=n.current,e=i.datum(),o=e.width,r=e.xPosInPercent,a=t.width/100*r,s=t.width-(a+o);s<0&&(a+=s),i.style("left","".concat(a,"px"))}}))},hideTooltip:function(t){var e,n=this,i=n.api,o=n.config,r=n.$el.tooltip;if(r&&"none"!==r.style("display")&&(!o.tooltip_doNotHide||t)){var a=JSON.parse(null!==(e=r.datum().current)&&void 0!==e?e:{});Ff(o.tooltip_onhide,i,a),r.style("display","none").style("visibility","hidden").datum(null),Ff(o.tooltip_onhidden,i,a)}},_handleLinkedCharts:function(t,e){var n=this,i=n.charts,o=n.config,r=n.state.event;if((null==r?void 0:r.isTrusted)&&o.tooltip_linked&&i.length>1){var a=o.tooltip_linked_name;i.filter((function(t){return t!==n.api})).forEach((function(n){var i=n.internal,o=i.config,r=i.$el,s=o.tooltip_linked,c=o.tooltip_linked_name,l=vf.body.contains(r.chart.node());if(s&&a===c&&l){var u=r.tooltip.data()[0],h=e!==(null==u?void 0:u.index);try{n.tooltip[t&&h?"show":"hide"]({index:e})}catch(t){}}}))}},updateTooltipOnRedraw:function(t,e){var n,i=this,o=i.config,r=i.$el,a=r.eventRect,s=r.svg,c=r.tooltip,l=i.state,u=l.event,h=l.hasAxis,d=l.hasRadar,f=l.hasTreemap;if("block"===(null==c?void 0:c.style("display"))&&u){var p=null!=t?t:null===(n=d?s:a)||void 0===n?void 0:n.node();if(h||d)if(i.isMultipleX())i.selectRectForMultipleXs(p,!1);else{var g=null!=e?e:i.getDataIndexFromEvent(u);-1===e?i.api.tooltip.hide():(i.selectRectForSingle(p,g),i.setExpand(g,null,!0))}else{var v=u.clientX,b=u.clientY;setTimeout((function(){var t=vf.elementFromPoint(v,b),e=cs(t).datum();if(e){var n=i.hasArcType()?i.convertToArcData(i.updateAngle(e)):null==e?void 0:e.data;f&&(t=s.node()),n&&i.showTooltip([n],t)}else i.api.tooltip.hide()}),o.transition_duration)}}}},Vg={getTranslate:function(t,e){void 0===e&&(e=0);var n,i,o=this,r=o.config,a=o.state,s=r.axis_rotated,c=0;if(e&&/^(x|y2?)$/.test(t)&&(c=o.getAxisSize(t)*e),"main"===t)n=Df(a.margin.left),i=Df(a.margin.top);else if("context"===t)n=Df(a.margin2.left),i=Df(a.margin2.top);else if("legend"===t)n=a.margin3.left,i=a.margin3.top;else if("x"===t)n=s?-c:0,i=s?0:a.height+c;else if("y"===t)n=s?0:-c,i=s?a.height+c:0;else if("y2"===t)n=s?0:a.width+c,i=s?-c-1:0;else if("subX"===t)n=0,i=s?0:a.height2;else if("arc"===t)n=a.arcWidth/2,i=a.arcHeight/2;else if("polar"===t)n=a.arcWidth/2,i=a.arcHeight/2;else if("radar"===t){var l=o.getRadarSize()[0];n=a.width/2-l,i=Df(a.margin.top)}return"translate(".concat(n,", ").concat(i,")")},transformMain:function(t,e){var n=this,i=n.$el.main,o=n.$T,r=(null==e?void 0:e.axisX)?e.axisX:o(i.select(".".concat(gp.axisX)),t),a=(null==e?void 0:e.axisY)?e.axisY:o(i.select(".".concat(gp.axisY)),t),s=(null==e?void 0:e.axisY2)?e.axisY2:o(i.select(".".concat(gp.axisY2)),t);o(i,t).attr("transform",n.getTranslate("main")),r.attr("transform",n.getTranslate("x")),a.attr("transform",n.getTranslate("y")),s.attr("transform",n.getTranslate("y2")),i.select(".".concat(fp.chartArcs)).attr("transform",n.getTranslate("arc"))},transformAll:function(t,e){var n=this,i=n.config,o=n.state,r=o.hasAxis,a=o.hasTreemap,s=n.$el;!a&&n.transformMain(t,e),r&&i.subchart_show&&n.transformContext(t,e),s.legend&&n.transformLegend(t)}},Ug={isValidChartType:function(t){return!!(t&&Object.values(xf).indexOf(t)>-1)},setTargetType:function(t,e){var n=this,i=n.config,o=n.state.withoutFadeIn;n.mapToTargetIds(t).forEach((function(t){o[t]=e===i.data_types[t],i.data_types[t]=e})),t||(i.data_type=e)},updateTypesElements:function(){var t=this,e=t.state.current;Object.keys(xf).forEach((function(n){var i=xf[n],o=t.hasType(i,null,!0),r=e.types.indexOf(i);-1===r&&o?e.types.push(i):r>-1&&!o&&e.types.splice(r,1)})),t.setChartElements()},hasType:function(t,e,n){var i;void 0===n&&(n=!1);var o=this,r=o.config,a=o.state.current,s=r.data_types,c=e||o.data.targets,l=!1;return!n&&(null===(i=a.types)||void 0===i?void 0:i.indexOf(t))>-1?l=!0:(null==c?void 0:c.length)?c.forEach((function(e){var n=s[e.id];(n===t||!n&&"line"===t)&&(l=!0)})):Object.keys(s).length?Object.keys(s).forEach((function(e){s[e]===t&&(l=!0)})):l=r.data_type===t,l},hasTypeOf:function(t,e,n){var i=this;return void 0===n&&(n=[]),t in wf&&!wf[t].filter((function(t){return-1===n.indexOf(t)})).every((function(t){return!i.hasType(t,e)}))},isTypeOf:function(t,e){var n=Af(t)?t:t.id,i=this.config.data_types[n]||this.config.data_type;return zf(e)?e.indexOf(i)>=0:i===e},hasPointType:function(){var t=this;return t.hasTypeOf("Line")||t.hasType("bubble")||t.hasType("scatter")},hasArcType:function(t,e){return this.hasTypeOf("Arc",t,e)},hasMultiArcGauge:function(){return this.hasType("gauge")&&"multi"===this.config.gauge_type},isLineType:function(t){var e=Af(t)?t:t.id;return!this.config.data_types[e]||this.isTypeOf(e,wf.Line)},isStepType:function(t){return this.isTypeOf(t,wf.Step)},isSplineType:function(t){return this.isTypeOf(t,wf.Spline)},isAreaType:function(t){return this.isTypeOf(t,wf.Area)},isAreaRangeType:function(t){return this.isTypeOf(t,wf.AreaRange)},isBarType:function(t){return this.isTypeOf(t,"bar")},isBubbleType:function(t){return this.isTypeOf(t,"bubble")},isCandlestickType:function(t){return this.isTypeOf(t,"candlestick")},isScatterType:function(t){return this.isTypeOf(t,"scatter")},isTreemapType:function(t){return this.isTypeOf(t,"treemap")},isPieType:function(t){return this.isTypeOf(t,"pie")},isGaugeType:function(t){return this.isTypeOf(t,"gauge")},isDonutType:function(t){return this.isTypeOf(t,"donut")},isPolarType:function(t){return this.isTypeOf(t,"polar")},isRadarType:function(t){return this.isTypeOf(t,"radar")},isArcType:function(t){return this.isPieType(t)||this.isDonutType(t)||this.isGaugeType(t)||this.isPolarType(t)||this.isRadarType(t)},isCirclePoint:function(t){var e=this.config,n=e.point_pattern;return"circle"===(null==t?void 0:t.tagName)||"circle"===e.point_type&&(!n||zf(n)&&0===n.length)},lineData:function(t){return this.isLineType(t)?[t]:[]},arcData:function(t){return this.isArcType(t.data)?[t]:[]},labelishData:function(t){return this.isBarType(t)||this.isLineType(t)||this.isScatterType(t)||this.isBubbleType(t)||this.isCandlestickType(t)||this.isRadarType(t)||this.isTreemapType(t)?t.values.filter((function(t){return $f(t.value)||Boolean(t.value)})):[]},barLineBubbleData:function(t){return this.isBarType(t)||this.isLineType(t)||this.isBubbleType(t)?t.values:[]},isInterpolationType:function(t){return["basis","basis-closed","basis-open","bundle","cardinal","cardinal-closed","cardinal-open","catmull-rom","catmull-rom-closed","catmull-rom-open","linear","linear-closed","monotone-x","monotone-y","natural"].indexOf(t)>=0}},Hg=function(){function t(t){this.data={xs:{},targets:[]},this.scale={x:null,y:null,y2:null,subX:null,subY:null,subY2:null,zoom:null},this.org={xScale:null,xDomain:null},this.format={extraLineClasses:null,xAxisTick:null,dataTime:null,defaultAxisTime:null,axisTime:null};var e=this;e.api=t,e.config=new qp,e.cache=new ig;var n=new Bp;e.$el=n.getStore("element"),e.state=n.getStore("state"),e.$T=e.$T.bind(e)}return t.prototype.$T=function(t,e,n){var i=this.config,o=this.state,r=i.transition_duration,a=i.subchart_show,s=t;s&&("tagName"in s&&(s=cs(s)),s=(!1!==e&&r||e)&&(!o.zooming||o.dragging)&&!o.resizing&&o.rendered&&!a?s.transition(n).duration(r):s);return s},t.prototype.beforeInit=function(){var t=this;t.callPluginHook("$beforeInit"),Ff(t.config.onbeforeinit,t.api)},t.prototype.afterInit=function(){var t=this;t.callPluginHook("$afterInit"),Ff(t.config.onafterinit,t.api)},t.prototype.init=function(){var t=this,e=t.config,n=t.state,i=t.$el,o=e.boost_useCssRule;if(hp(t),n.hasRadar=!n.hasAxis&&t.hasType("radar"),n.hasTreemap=!n.hasAxis&&t.hasType("treemap"),n.hasAxis=!t.hasArcType()&&!n.hasTreemap,n.datetimeId="bb-".concat(+new Date*Gf()),o){var r=vf.createElement("style");r.type="text/css",vf.head.appendChild(r),n.style={rootSelctor:".".concat(n.datetimeId),sheet:r.sheet},i.style=r}var a={element:e.bindto,classname:"bb"};Bf(e.bindto)&&(a.element=e.bindto.element||"#chart",a.classname=e.bindto.classname||a.classname),i.chart=Sf(a.element.node)?e.bindto.element:cs(a.element||[]),i.chart.empty()&&(i.chart=cs(vf.body.appendChild(vf.createElement("div")))),i.chart.html("").classed(a.classname,!0).classed(n.datetimeId,o).style("position","relative"),t.initParams(),t.initToRender()},t.prototype.initToRender=function(t){var e=this,n=e.config,i=e.state,o=e.$el.chart,r=function(){return"none"===o.style("display")||"hidden"===o.style("visibility")},a=n.render.lazy||r(),s=gf.MutationObserver;a&&s&&!1!==n.render.observe&&!t&&new s((function(t,n){r()||(n.disconnect(),!i.rendered&&e.initToRender(!0))})).observe(o.node(),{attributes:!0,attributeFilter:["class","style"]}),a&&!t||e.convertData(n,(function(t){e.initWithData(t),e.afterInit()}))},t.prototype.initParams=function(){var t=this,e=t.config,n=t.format,i=t.state,o=e.axis_rotated;if(t.color=t.generateColor(),t.levelColor=t.generateLevelColor(),!1===e.padding&&(e.axis_x_show=!1,e.axis_y_show=!1,e.axis_y2_show=!1,e.subchart_show=!1),t.hasPointType()&&(t.point=t.generatePoint()),i.hasAxis){t.initClip(),n.extraLineClasses=t.generateExtraLineClass(),n.dataTime=e.data_xLocaltime?$o:Mo,n.axisTime=e.axis_x_localtime?Ao:Eo;var r=t.config.zoom_enabled&&"drag"===t.config.zoom_type;n.defaultAxisTime=function(e){var i=t.scale,o=i.x,a=i.zoom,s=r?a:a&&o.orgDomain().toString()!==a.domain().toString(),c=(e.getMilliseconds()?".%L":e.getSeconds()&&".:%S")||e.getMinutes()&&"%I:%M"||e.getHours()&&"%I %p"||1!==e.getDate()&&"%b %d"||s&&1===e.getDate()&&"%b'%y"||e.getMonth()&&"%-m/%-d"||"%Y";return n.axisTime(c)(e)}}i.isLegendRight="right"===e.legend_position,i.isLegendInset="inset"===e.legend_position,i.isLegendTop="top-left"===e.legend_inset_anchor||"top-right"===e.legend_inset_anchor,i.isLegendLeft="top-left"===e.legend_inset_anchor||"bottom-left"===e.legend_inset_anchor,i.rotatedPadding.top=t.getResettedPadding(i.rotatedPadding.top),i.rotatedPadding.right=o&&!e.axis_x_show?0:30,i.inputType=function(t,e){var n=gf.DocumentTouch,i=gf.matchMedia,o=gf.navigator,r=!1;if(e)if(o&&"maxTouchPoints"in o)r=o.maxTouchPoints>0;else if("ontouchmove"in gf||n&&vf instanceof n)r=!0;else if(null==i?void 0:i("(pointer:coarse)").matches)r=!0;else{var a=o.userAgent;r=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(a)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(a)}var s=t&&["any-hover:hover","any-pointer:fine"].some((function(t){return null==i?void 0:i("(".concat(t,")")).matches}));return(s?"mouse":r&&"touch")||"mouse"}(e.interaction_inputType_mouse,e.interaction_inputType_touch)},t.prototype.initWithData=function(t){var e,n,i=this,o=i.config,r=i.scale,a=i.state,s=i.$el,c=i.org,l=a.hasAxis,u=a.hasTreemap,h=o.interaction_enabled,d=i.hasType("polar");if(l&&(i.axis=i.getAxisInstance(),o.zoom_enabled&&i.initZoom()),i.data.xs={},i.data.targets=i.convertDataToTargets(t),o.data_filter&&(i.data.targets=i.data.targets.filter(o.data_filter.bind(i.api))),o.data_hide&&i.addHiddenTargetIds(!0===o.data_hide?i.mapToIds(i.data.targets):o.data_hide),o.legend_hide&&i.addHiddenLegendIds(!0===o.legend_hide?i.mapToIds(i.data.targets):o.legend_hide),i.updateSizes(),i.updateScales(!0),l){var f=r.x,p=r.y,g=r.y2,v=r.subX,b=r.subY,m=r.subY2;f&&(f.domain(op(i.getXDomain(i.data.targets),!o.axis_x_inverted)),v.domain(f.domain()),c.xDomain=f.domain()),p&&(p.domain(i.getYDomain(i.data.targets,"y")),b.domain(p.domain())),g&&(g.domain(i.getYDomain(i.data.targets,"y2")),m&&m.domain(g.domain()))}if(s.svg=s.chart.append("svg").style("overflow","hidden").style("display","block"),h&&a.inputType){var y="touch"===a.inputType,x=o.onclick,_=o.onover,w=o.onout;s.svg.on("click",(null==x?void 0:x.bind(i.api))||null).on(y?"touchstart":"mouseenter",(null==_?void 0:_.bind(i.api))||null).on(y?"touchend":"mouseleave",(null==w?void 0:w.bind(i.api))||null)}o.svg_classname&&s.svg.attr("class",o.svg_classname);var T=Sf(o.color_tiles)&&i.patterns;(l||T||d||u||o.data_labels_backgroundColors)&&(s.defs=s.svg.append("defs"),l&&["id","idXAxis","idYAxis","idGrid"].forEach((function(t){i.appendClip(s.defs,a.clip[t])})),i.generateDataLabelBackgroundColorFilter(),T&&i.patterns.forEach((function(t){return s.defs.append((function(){return t.node}))}))),i.updateSvgSize(),i.bindResize();var k=s.svg.append("g").classed(dp.main,!0).attr("transform",u?null:i.getTranslate("main"));if(s.main=k,o.subchart_show&&i.initSubchart(),o.tooltip_show&&i.initTooltip(),o.title_text&&i.initTitle(),!u&&o.legend_show&&i.initLegend(),o.data_empty_label_text&&k.append("text").attr("class","".concat(Dp.text," ").concat(dp.empty)).attr("text-anchor","middle").attr("dominant-baseline","middle"),l&&(o.regions.length&&i.initRegion(),!o.clipPath&&i.axis.init()),k.append("g").classed(dp.chart,!0).attr("clip-path",l?a.clip.path:null),i.callPluginHook("$init"),i.initChartElements(),l&&(h&&(null===(e=i.initEventRect)||void 0===e||e.call(i)),i.initGrid(),o.clipPath&&(null===(n=i.axis)||void 0===n||n.init())),i.updateTargets(i.data.targets),i.updateDimension(),Ff(o.oninit,i.api),i.setBackground(),i.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1,initializing:!0}),o.data_onmin||o.data_onmax){var C=i.getMinMaxData();Ff(o.data_onmin,i.api,C.min),Ff(o.data_onmax,i.api,C.max)}o.tooltip_show&&i.initShowTooltip(),a.rendered=!0},t.prototype.initChartElements=function(){var t=this,e=t.state,n=e.hasAxis,i=e.hasRadar,o=e.hasTreemap,r=[];if(n){var a=["bar","bubble","candlestick","line"];t.config.bar_front&&a.push(a.shift()),a.forEach((function(e){var n=Qf(e);("line"===e&&t.hasTypeOf(n)||t.hasType(e))&&r.push(n)}))}else if(o)r.push("Treemap");else{var s=t.hasType("polar");i||r.push("Arc","Pie"),t.hasType("gauge")?r.push("Gauge"):i?r.push("Radar"):s&&r.push("Polar")}r.forEach((function(e){t["init".concat(e)]()})),Lf(t.config.data_labels)&&!t.hasArcType(null,["radar"])&&t.initText()},t.prototype.setChartElements=function(){var t=this.$el,e=t.chart,n=t.svg,i=t.defs,o=t.main,r=t.tooltip,a=t.legend,s=t.title,c=t.grid,l=t.needle,u=t.arcs,h=t.circle,d=t.bar,f=t.candlestick,p=t.line,g=t.area,v=t.text;this.api.$={chart:e,svg:n,defs:i,main:o,tooltip:r,legend:a,title:s,grid:c,arc:u,circles:h,bar:{bars:d},candlestick:f,line:{lines:p,areas:g},needle:l,text:{texts:v}}},t.prototype.setBackground=function(){var t=this,e=t.config.background,n=t.state,i=t.$el.svg;if(Lf(e)){var o=i.select("g").insert(e.imgUrl?"image":"rect",":first-child");e.imgUrl?o.attr("href",e.imgUrl):e.color&&o.style("fill",e.color).attr("clip-path",n.clip.path),o.attr("class",e.class||null).attr("width","100%").attr("height","100%")}},t.prototype.updateTargets=function(t){var e,n=this,i=n.state,o=i.hasAxis,r=i.hasRadar,a=i.hasTreemap,s=function(e){return n["updateTargetsFor".concat(e)](t.filter(n["is".concat(e,"Type")].bind(n)))};if(n.updateTargetsForText(t),o)["bar","candlestick","line"].forEach((function(t){var e=Qf(t);("line"===t&&n.hasTypeOf(e)||n.hasType(t))&&s(e)})),n.updateTargetsForSubchart&&n.updateTargetsForSubchart(t);else if(n.hasArcType(t)){var c="Arc";r?c="Radar":n.hasType("polar")&&(c="Polar"),s(c)}else a&&s("Treemap");var l=n.hasType("bubble")||n.hasType("scatter");l&&(null===(e=n.updateTargetForCircle)||void 0===e||e.call(n)),n.filterTargetsToShowAtInit(l)},t.prototype.filterTargetsToShowAtInit=function(t){void 0===t&&(t=!1);var e=this,n=e.$el.svg,i=e.$T,o=".".concat(dp.target);t&&(o+=", .".concat(mp.chartCircles," > .").concat(mp.circles)),i(n.selectAll(o).filter((function(t){return e.isTargetToShow(t.id)}))).style("opacity",null)},t.prototype.getWithOption=function(t){var e={Dimension:!0,EventRect:!0,Legend:!1,Subchart:!0,Transform:!1,Transition:!0,TrimXDomain:!0,UpdateXAxis:"UpdateXDomain",UpdateXDomain:!1,UpdateOrgXDomain:!1,TransitionForExit:"Transition",TransitionForAxis:"Transition",Y:!0};return Object.keys(e).forEach((function(n){var i=e[n];Af(i)&&(i=e[i]),e[n]=Nf(t,"with".concat(n),i)})),e},t.prototype.initialOpacity=function(t){var e=this.state.withoutFadeIn;return null!==this.getBaseValue(t)&&e[t.id]?null:"0"},t.prototype.bindResize=function(){var t=this,e=t.config,n=t.state,i=function(t){var e,n=[],i=function(){i.clear(),!1===t?yf((function(){n.forEach((function(t){return t()}))}),{timeout:200}):e=og((function(){n.forEach((function(t){return t()}))}),$f(t)?t:200)};return i.clear=function(){e&&(rg(e),e=null)},i.add=function(t){return n.push(t)},i.remove=function(t){return n.splice(n.indexOf(t),1)},i}(e.resize_timer),o=[];o.push((function(){return Ff(e.onresize,t.api)})),e.resize_auto&&o.push((function(){n.resizing=!0,e.legend_show&&(t.updateSizes(),t.updateLegend()),t.api.flush(!1)})),o.push((function(){Ff(e.onresized,t.api),n.resizing=!1})),o.forEach((function(t){return i.add(t)})),t.resizeFunction=i,gf.addEventListener("resize",t.resizeFunction=i)},t.prototype.callPluginHook=function(t){for(var e=this,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];this.config.plugins.forEach((function(i){"$beforeInit"===t&&(i.$$=e,e.api.plugins.push(i)),i[t].apply(i,n)}))},t}();function jg(t){var e,n,i,o=this.config,r=function(){var t=n.shift();return t&&e&&Rf(e)&&t in e?(e=e[t],r()):t?void 0:e};Object.keys(o).forEach((function(a){e=t,n=a.split("_"),i=r(),Mf(i)&&(o[a]=i)})),this.api&&(this.state.orgConfig=t)}Kf(Hg.prototype,[vg,bg,yg,{categoryName:function(t){var e,n=this.config.axis_x_categories;return null!==(e=null==n?void 0:n[t])&&void 0!==e?e:t}},_g,Tg,kg,xg,Sg,$g,Eg,Og,Pg,Rg,Ig,Bg,Fg,Xg,Vg,Ug]);var Yg={resize:function(t){var e=this.internal,n=e.config,i=e.state;i.rendered&&(n.size_width=t?t.width:null,n.size_height=t?t.height:null,i.resizing=!0,this.flush(!1),e.resizeFunction())},flush:function(t){var e,n,i=this.internal,o=i.state,r=i.$el.zoomResetBtn;o.rendered?(o.resizing?null===(e=i.brush)||void 0===e||e.updateResize():null===(n=i.axis)||void 0===n||n.setOrient(),null==r||r.style("display","none"),i.scale.zoom=null,t?i.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withLegend:!0}):i.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1}),!o.resizing&&i.brush&&(i.brush.getSelection().call(i.brush.move),i.unselectRect())):i.initToRender(!0)},destroy:function(){var t=this,e=this.internal,n=e.$el,i=n.chart,o=n.style,r=n.svg;if(Lf(e))for(var a in e.callPluginHook("$willDestroy"),e.charts.splice(e.charts.indexOf(this),1),e.unbindAllEvents(),r.select("*").interrupt(),e.resizeFunction.clear(),gf.removeEventListener("resize",e.resizeFunction),i.classed("bb",!1).style("position",null).selectChildren().remove(),o&&o.parentNode.removeChild(o),Object.keys(this).forEach((function(n){"internal"===n&&Object.keys(e).forEach((function(t){e[t]=null})),t[n]=null,delete t[n]})),this)this[a]=function(){};return null},config:function(t,e,n){var i,o=this.internal,r=o.config,a=o.state,s=null==t?void 0:t.replace(/\./g,"_");return t&&s in r?Mf(e)?(r[s]=e,i=e,n&&this.flush()):i=r[s]:(0===arguments.length||If(t))&&(i=a.orgConfig),i}},qg=function(t){var e=this.internal.data.targets;if(!Ef(t)){var n=zf(t)?t:[t];return e.filter((function(t){return n.some((function(e){return e===t.id}))}))}return e};Kf(qg,{shown:function(t){return this.internal.filterTargetsToShow(this.data(t))},values:function(t,e){void 0===e&&(e=!0);var n=null;if(t){var i=this.data(t);zf(i)&&(n=[],i.forEach((function(t){var i=t.values.map((function(t){return t.value}));e?n=n.concat(i):n.push(i)})))}return n},names:function(t){return this.internal.updateDataAttributes("names",t)},colors:function(t){return this.internal.updateDataAttributes("colors",t)},axes:function(t){return this.internal.updateDataAttributes("axes",t)},min:function(){return this.internal.getMinMaxData().min},max:function(){return this.internal.getMinMaxData().max}});var Gg={data:qg};function Wg(t,e,n){var i,o,r=e||n,a=r.width,s=r.height,c=new XMLSerializer,l=t.cloneNode(!0),u=(i=Jf(vf.styleSheets),o=[],i.forEach((function(t){var e;try{t.cssRules&&t.cssRules.length&&(o=o.concat(Jf(t.cssRules)))}catch(n){null===(e=gf.console)||void 0===e||e.warn("Error while reading rules from ".concat(t.href,": ").concat(n.toString()))}})),o).filter((function(t){return t.cssText})).map((function(t){return t.cssText}));l.setAttribute("xmlns",pa.xhtml),l.style.margin="0",l.style.padding="0",e.preserveFontStyle&&l.querySelectorAll("text").forEach((function(t){t.innerHTML=""}));var h=c.serializeToString(l),d=vf.createElement("style");d.appendChild(vf.createTextNode(u.join("\n")));var f=c.serializeToString(d),p='<svg xmlns="'.concat(pa.svg,'" width="').concat(a,'" height="').concat(s,'" \n\t\tviewBox="0 0 ').concat(n.width," ").concat(n.height,'" \n\t\tpreserveAspectRatio="').concat(!1===(null==e?void 0:e.preserveAspectRatio)?"none":"xMinYMid meet",'">\n\t\t\t<foreignObject width="100%" height="100%">\n\t\t\t\t').concat(f,"\n\t\t\t\t").concat(h.replace(/(url\()[^#]+/g,"$1"),"\n\t\t\t</foreignObject></svg>");return"data:image/svg+xml;base64,".concat(function(t){var e;return null===(e=gf.btoa)||void 0===e?void 0:e.call(gf,encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,(function(t,e){return String.fromCharCode(Number("0x".concat(e)))})))}(p))}function Zg(t){var e=t.getBoundingClientRect(),n=e.left,i=e.top,o=function(t){return t.textContent||t.childElementCount},r=[];return Jf(t.querySelectorAll("text")).filter(o).forEach((function(t){var e=function(t){var e,o=gf.getComputedStyle(t),r=o.fill,a=o.fontFamily,s=o.fontSize,c=o.textAnchor,l=o.transform,u=function(t,e){var n=e.top,i=e.left,o=t.getBBox(),r=o.x,a=o.y,s=t.getScreenCTM(),c=s.a,l=s.b,u=s.c,h=s.d,d=s.e,f=s.f,p=t.getBoundingClientRect(),g=p.width,v=p.height;return{x:c*r+u*a+d-i,y:l*r+h*a+f-n+(v-Math.round(v/4)),width:g,height:v}}(t,{left:n,top:i}),h=u.x,d=u.y,f=u.width,p=u.height;return(e={})[t.textContent]={x:h,y:d,width:f,height:p,fill:r,fontFamily:a,fontSize:s,textAnchor:c,transform:l},e};if(t.childElementCount>1){return Jf(t.querySelectorAll("tspan")).filter(o).forEach((function(t){r.push(e(t))})),[]}r.push(e(t))})),r}var Kg={export:function(t,e){var n=this,i=this.internal,o=i.state,r=i.$el,a=r.chart,s=r.svg,c=o.current,l=c.width,u=c.height,h=ip({width:l,height:u,preserveAspectRatio:!0,preserveFontStyle:!1,mimeType:"image/png"},t),d=Wg(a.node(),h,{width:l,height:u}),f=h.preserveFontStyle?Zg(s.node()):[];if(e&&Sf(e)){var p=new Image;p.crossOrigin="Anonymous",p.onload=function(){var t=vf.createElement("canvas"),i=t.getContext("2d");t.width=h.width||l,t.height=h.height||u,i.drawImage(p,0,0),f.length&&(!function(t,e){e.forEach((function(e){Object.keys(e).forEach((function(n){var i=e[n],o=i.x,r=i.y,a=i.width,s=i.height,c=i.fill,l=i.fontFamily,u=i.fontSize,h=i.transform;if(t.save(),t.font="".concat(u," ").concat(l),t.fillStyle=c,"none"===h)t.fillText(n,o,r);else{var d=h.replace(/(matrix|\(|\))/g,"").split(",");d.splice(4).every((function(t){return 0==+t}))?(d.push(o+a-a/4),d.push(r-s+s/3)):(d.push(o),d.push(r)),t.transform.apply(t,d),t.fillText(n,0,0)}t.restore()}))}))}(i,f),f.length=0),e.bind(n)(t.toDataURL(h.mimeType))},p.src=d}return d}},Qg={focus:function(t){var e=this.internal,n=e.state,i=e.mapToTargetIds(t),o=e.$el.svg.selectAll(e.selectorTargets(i.filter(e.isTargetToShow,e)));this.revert(),this.defocus(),o.classed(Cp.focused,!0).classed(Cp.defocused,!1),e.hasArcType()&&!n.hasRadar&&(e.expandArc(i),e.hasType("gauge")&&e.markOverlapped(t,e,".".concat(_p.gaugeValue))),e.toggleFocusLegend(i,!0),n.focusedTargetIds=i,n.defocusedTargetIds=n.defocusedTargetIds.filter((function(t){return i.indexOf(t)<0}))},defocus:function(t){var e=this.internal,n=e.state,i=e.mapToTargetIds(t);e.$el.svg.selectAll(e.selectorTargets(i.filter(e.isTargetToShow,e))).classed(Cp.focused,!1).classed(Cp.defocused,!0),e.hasArcType(null,["polar"])&&(e.unexpandArc(i),e.hasType("gauge")&&e.undoMarkOverlapped(e,".".concat(_p.gaugeValue))),e.toggleFocusLegend(i,!1),n.focusedTargetIds=n.focusedTargetIds.filter((function(t){return i.indexOf(t)<0})),n.defocusedTargetIds=i},revert:function(t){var e=this.internal,n=e.config,i=e.state,o=e.$el,r=e.mapToTargetIds(t);o.svg.selectAll(e.selectorTargets(r)).classed(Cp.focused,!1).classed(Cp.defocused,!1),e.hasArcType(null,["polar"])&&e.unexpandArc(r),n.legend_show&&(e.showLegend(r.filter(e.isLegendToShow.bind(e))),o.legend.selectAll(e.selectorLegends(r)).filter((function(){return cs(this).classed(Cp.legendItemFocused)})).classed(Cp.legendItemFocused,!1)),i.focusedTargetIds=[],i.defocusedTargetIds=[]}},Jg={legend:{show:function(t){var e=this.internal;e.showLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},hide:function(t){var e=this.internal;e.hideLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})}}},tv={load:function(t){var e=this.internal,n=e.config;t.xs&&e.addXs(t.xs),"names"in t&&this.data.names(t.names),"classes"in t&&Object.keys(t.classes).forEach((function(e){n.data_classes[e]=t.classes[e]})),"categories"in t&&e.axis.isCategorized()&&(n.axis_x_categories=t.categories),"axes"in t&&Object.keys(t.axes).forEach((function(e){n.data_axes[e]=t.axes[e]})),"colors"in t&&Object.keys(t.colors).forEach((function(e){n.data_colors[e]=t.colors[e]})),"unload"in t&&!1!==t.unload?e.unload(e.mapToTargetIds(!0===t.unload?null:t.unload),(function(){yf((function(){return e.loadFromArgs(t)}))})):e.loadFromArgs(t)},unload:function(t){var e=this.internal,n=t||{};If(n)&&this.tooltip.hide(),zf(n)?n={ids:n}:Af(n)&&(n={ids:[n]});var i=e.mapToTargetIds(n.ids);e.unload(i,(function(){e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),e.cache.remove(i),mg.call(e,n.done,n.resizeAfter)}))}};function ev(t,e,n){var i=this,o=this.internal,r=o.mapToTargetIds(e),a=o.state.hiddenTargetIds.map((function(t){return r.indexOf(t)>-1&&t})).filter(Boolean);o.state.toggling=!0,o["".concat(t?"remove":"add","HiddenTargetIds")](r);var s=o.$el.svg.selectAll(o.selectorTargets(r)),c=t?null:"0";t&&a.length&&(s.style("display",null),Ff(o.config.data_onshown,this,a)),o.$T(s).style("opacity",c,"important").call(Xf,(function(){t||0!==a.length||(s.style("display","none"),Ff(o.config.data_onhidden,i,r)),s.style("opacity",c)})),n.withLegend&&o["".concat(t?"show":"hide","Legend")](r),o.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),o.state.toggling=!1}var nv={show:function(t,e){void 0===e&&(e={}),ev.call(this,!0,t,e)},hide:function(t,e){void 0===e&&(e={}),ev.call(this,!1,t,e)},toggle:function(t,e){var n=this;void 0===e&&(e={});var i=this.internal,o={show:[],hide:[]};i.mapToTargetIds(t).forEach((function(t){return o[i.isTargetToShow(t)?"hide":"show"].push(t)})),o.show.length&&this.show(o.show,e),o.hide.length&&setTimeout((function(){return n.hide(o.hide,e)}),0)}},iv={show:function(t){var e,n,i,o,r,a=this.internal,s=a.$el,c=a.config,l=a.state,u=l.eventReceiver,h=l.hasTreemap,d=l.inputType;if(t.mouse&&(r=t.mouse),t.data){var f=t.data,p=null===(e=a.getYScaleById(f.id))||void 0===e?void 0:e(f.value);h&&f.id?u.rect=s.main.select("".concat(a.selectorTarget(f.id,void 0,"rect"))):a.isMultipleX()?r=[a.xx(f),p]:(c.tooltip_grouped||(r=[0,p]),o=null!==(n=f.index)&&void 0!==n?n:a.hasArcType()&&f.id?null===(i=a.getArcElementByIdOrIndex(f.id))||void 0===i?void 0:i.datum().index:a.getIndexByX(f.x))}else Mf(t.x)?o=a.getIndexByX(t.x):Mf(t.index)&&(o=t.index);("mouse"===d?["mouseover","mousemove"]:["touchstart"]).forEach((function(t){a.dispatchEvent(t,o,r)}))},hide:function(){var t,e,n,i=this.internal,o=i.state.inputType,r=i.$el.tooltip,a=null==r?void 0:r.datum();if(a){var s=JSON.parse(a.current)[0].index;("mouse"===o?["mouseout"]:["touchend"]).forEach((function(t){i.dispatchEvent(t,s)}))}"touch"===o&&i.callOverOutForTouch(),i.hideTooltip(!0),null===(t=i.hideGridFocus)||void 0===t||t.call(i),null===(e=i.unexpandCircles)||void 0===e||e.call(i),null===(n=i.expandBarTypeShapes)||void 0===n||n.call(i,!1)}},ov={tooltip:iv},rv=function t(e){this.plugins=[];var n=new Hg(this);this.internal=n,function t(e,n,i){Object.keys(e).forEach((function(o){var r=Sf(e[o]),a=n!==i,s=Lf(e[o]),c=s&&Object.keys(e[o]).length>0;n[o]=r&&(!a&&c||a)?e[o].bind(i):s&&!r?{}:e[o],c&&t(e[o],n[o],i)}))}(t.prototype,this,this),jg.call(n,e),n.beforeInit(),n.init()};function av(t,e,n){var i=t.config,o=function(t,n){var o=$f(n)?n:!1===n?void 0:null;null!==o&&(i["axis_".concat(t,"_").concat(e)]=o)};Mf(n)&&(Rf(n)?Object.keys(n).forEach((function(t){o(t,n[t])})):($f(n)||!1===n)&&["y","y2"].forEach((function(t){o(t,n)})),t.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0}))}function sv(t,e){var n=t.config;return{x:n["axis_x_".concat(e)],y:n["axis_y_".concat(e)],y2:n["axis_y2_".concat(e)]}}Kf(rv.prototype,[Yg,{color:function(t){return this.internal.color(t)}},Gg,Kg,Qg,Jg,tv,nv,ov]);var cv={labels:function(t){var e,n=this.internal;return t&&(Object.keys(t).forEach((function(e){n.axis.setLabelText(e,t[e])})),n.axis.updateLabels()),["x","y","y2"].forEach((function(t){var i=n.axis.getLabelText(t);i&&(!e&&(e={}),e[t]=i)})),e},min:function(t){var e=this.internal;return Cf(t)||!1===t?av(e,"min",t):sv(e,"min")},max:function(t){var e=this.internal;return Cf(t)||!1===t?av(e,"max",t):sv(e,"max")},range:function(t){var e=this.axis;if(!arguments.length)return{max:e.max(),min:e.min()};var n=t.min,i=t.max;Mf(i)&&e.max(i),Mf(n)&&e.min(n)}},lv={axis:cv},uv={category:function(t,e){var n=this.internal,i=n.config;return arguments.length>1&&(i.axis_x_categories[t]=e,n.redraw()),i.axis_x_categories[t]},categories:function(t){var e=this.internal,n=e.config;if(!t||!Array.isArray(t)){var i=n.axis_x_categories;return If(i)?Object.values(e.data.xs)[0]:i}return n.axis_x_categories=t,e.redraw(),n.axis_x_categories}};function hv(t,e){var n=this.internal,i=n.config,o=i.transition_duration&&lp(),r="grid_".concat(e,"_lines");return t?(i[r]=t,n.updateGrid(),n.redrawGrid(o),i[r]):i[r]}function dv(t,e){var n="grid_".concat(e,"_lines");return hv.bind(this)(this.internal.config[n].concat(t||[]),e)}function fv(t,e){this.internal.removeGridLines(t,e)}var pv=function(t){return hv.bind(this)(t,"x")};Kf(pv,{add:function(t){return dv.bind(this)(t,"x")},remove:function(t){return fv.bind(this)(t,!0)}});var gv=function(t){return hv.bind(this)(t,"y")};Kf(gv,{add:function(t){return dv.bind(this)(t,"y")},remove:function(t){return fv.bind(this)(t,!1)}});var vv={xgrids:pv,ygrids:gv},bv={groups:function(t){var e=this.internal,n=e.config;return Ef(t)||(n.data_groups=t,e.redraw()),n.data_groups}};function mv(t,e){void 0===e&&(e=!1);var n=this.internal,i=n.config,o=i.transition_duration&&lp();return t?(i.regions=e?i.regions.concat(t):t,n.updateRegion(),n.redrawRegion(o),e?i.regions:t):i.regions}var yv=function(t){return mv.bind(this)(t)};Kf(yv,{add:function(t){return mv.bind(this)(t,!0)},remove:function(t){var e=this.internal,n=e.config,i=e.$T,o=t||{},r=Nf(o,"classes",[$p.region]),a=e.$el.main.select(".".concat($p.regions)).selectAll(r.map((function(t){return".".concat(t)})));return i(a).style("opacity","0").remove(),a=n.regions,Object.keys(o).length?(a=a.filter((function(t){var e=!1;return!t.class||(t.class.split(" ").forEach((function(t){r.indexOf(t)>=0&&(e=!0)})),!e)})),n.regions=a):n.regions=[],a}});var xv={regions:yv},_v={x:function(t){var e=this.internal,n=e.axis,i=e.data,o=n.isCustomX()&&n.isCategorized();return zf(t)&&(o?this.categories(t):(e.updateTargetX(i.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0}))),o?this.categories():i.xs},xs:function(t){var e=this.internal;return Bf(t)&&(e.updateTargetXs(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs}},wv={flow:function(t){var e,n=this.internal;(t.json||t.rows||t.columns)&&n.convertData(t,(function(i){e=i,function(){var i,o,r,a=0,s=0;if(n.state.redrawing||!e||!lp())return;var c=[],l=n.getMaxDataCount(),u=n.convertDataToTargets(e,!0),h=n.axis.isTimeSeries();n.data.targets.forEach((function(t){for(var e=!1,n=0;n<u.length;n++)if(t.id===u[n].id){e=!0,t.values[t.values.length-1]&&(s=t.values[t.values.length-1].index+1),a=u[n].values.length;for(var i=0;i<a;i++)u[n].values[i].index=s+i,h||(u[n].values[i].x=s+i);t.values=t.values.concat(u[n].values),u.splice(n,1);break}!e&&c.push(t.id)})),n.data.targets.forEach((function(t){for(var e=0;e<c.length;e++)if(t.id===c[e]){s=t.values[t.values.length-1].index+1;for(var i=0;i<a;i++)t.values.push({id:t.id,index:s+i,x:h?n.getOtherTargetX(s+i):s+i,value:null})}})),n.data.targets.length&&u.forEach((function(t){for(var e=[],i=n.data.targets[0].values[0].index;i<s;i++)e.push({id:t.id,index:i,x:h?n.getOtherTargetX(i):i,value:null});t.values.forEach((function(t){t.index+=s,h||(t.x+=s)})),t.values=e.concat(t.values)}));n.data.targets=n.data.targets.concat(u);var d=n.data.targets[0],f=d.values[0];Mf(t.to)?(a=0,r=h?cp.call(n,t.to):t.to,d.values.forEach((function(t){t.x<r&&a++}))):Mf(t.length)&&(a=t.length);l?1===l&&h&&(o=(d.values[d.values.length-1].x-f.x)/2,i=[new Date(+f.x-o),new Date(+f.x+o)]):(o=h?d.values.length>1?d.values[d.values.length-1].x-f.x:f.x-n.getXDomain(n.data.targets)[0]:1,i=[f.x-o,f.x]);i&&n.updateXDomain(null,!0,!0,!1,i),n.updateTargets(n.data.targets),n.redraw({flow:{index:f.index,length:a,duration:Cf(t.duration)?t.duration:n.config.transition_duration,done:t.done,orgDataCount:l},withLegend:!0,withTransition:l>1,withTrimXDomain:!1,withUpdateXAxis:!0})}()}))}},Tv=function(){function t(t){var e=Mg(),n=t.config,i=t.params;this.owner=t,this.config=n,this.scale=e,!n.noTransition&&i.config.transition_duration||(n.withoutTransition=!0),n.range=this.scaleExtent((i.orgXScale||e).range())}return t.getSizeFor1Char=function(t){var e={w:5.5,h:11.5};return!t.empty()&&t.select("text").text("0").call((function(t){try{var n=t.node().getBBox(),i=n.width,o=n.height;i&&o&&(e.w=i,e.h=o)}catch(t){}finally{t.text("")}})),this.getSizeFor1Char=function(){return e},e},t.prototype.getTickTransformSetter=function(t){var e=this.config,n="x"===t?function(t){return"translate(".concat(t+e.tickOffset,",0)")}:function(t){return"translate(0,".concat(t,")")};return function(t,e){t.attr("transform",(function(t){return Cf(t)?n(Math.ceil(e(t))):null}))}},t.prototype.scaleExtent=function(t){var e=t[0],n=t[t.length-1];return e<n?[e,n]:[n,e]},t.prototype.generateTicks=function(t,e){var n=this.owner.params.tickStepSize,i=t.domain(),o=i[0],r=i[1],a=[];if(e&&n)for(var s=Math.round(o);s<=r;)a.push(s),s+=n;else if(t.ticks){var c=this.config.tickArguments;if("log"!==t.type||c)a=t.ticks.apply(t,this.config.tickArguments||[]);else{var l=Mg("_log").domain([o>0?o:1,r]).range(t.range());a=l.ticks();for(var u=r.toFixed().length;a.length>15;u--)a=l.ticks(u);a.splice(0,1,o),a.splice(a.length-1,1,r)}a=a.map((function(t){return Af(t)&&$f(t)&&!isNaN(t)&&Math.round(10*t)/10||t}))}return a},t.prototype.copyScale=function(){var t=this.scale.copy();return t.domain().length||t.domain(this.scale.domain()),t.type=this.scale.type,t},t.prototype.textFormatted=function(t){var e=this.config.tickFormat,n=/\d+\.\d+0{5,}\d$/.test(t)?+String(t).replace(/0+\d$/,""):t,i=e?e(n):n;return Mf(i)?i:""},t.prototype.transitionise=function(t){var e=this.config,n=t;if(e.withoutTransition)n=t.interrupt();else if(e.transition||!this.owner.params.noTransition)try{n=t.transition(e.transition)}catch(t){}return n},t}(),kv=function(){function t(t){void 0===t&&(t={});var e={innerTickSize:6,outerTickSize:t.outerTick?6:0,orient:"bottom",range:[],tickArguments:null,tickCentered:null,tickCulling:!0,tickFormat:null,tickLength:9,tickOffset:0,tickPadding:3,tickValues:null,transition:null,noTransition:t.noTransition};e.tickLength=Math.max(e.innerTickSize,0)+e.tickPadding,this.config=e,this.params=t,this.helper=new Tv(this)}return t.prototype.create=function(t){var e=this,n=e.config,i=e.helper,o=e.params,r=i.scale,a=n.orient,s=this.splitTickText.bind(e),c=/^(left|right)$/.test(a),l=/^(top|bottom)$/.test(a),u=i.getTickTransformSetter(l?"x":"y"),h=u===i.axisX?"y":"x",d=/^(top|left)$/.test(a)?-1:1,f=o.tickTextRotate;this.config.range=r.rangeExtent?r.rangeExtent():i.scaleExtent((o.orgXScale||r).range());var p,g=n.innerTickSize,v=n.tickLength,b=n.range,m=o.id,y=m&&/^(x|y|y2)$/.test(m)?o.config["axis_".concat(m,"_tick_text_position")]:{x:0,y:0},x="subX"===m?"subchart_axis_x":"axis_".concat(m),_=o.config["".concat(x,"_show")],w=!!_&&o.config["".concat(x,"_tick_show")],T=!!_&&o.config["".concat(x,"_tick_text_show")];t.each((function(){var t=cs(this),m=this.__chart__||r,x=i.copyScale();p=t,this.__chart__=x,n.tickOffset=o.isCategory?Math.ceil((x(1)-x(0))/2):0;var _,k=t.selectAll(".domain").data([0]);if(k.enter().append("path").attr("class","domain").merge(k).attr("d",(function(){var t=n.outerTickSize*d;return l?"M".concat(b[0],",").concat(t,"V0H").concat(b[1],"V").concat(t):"M".concat(t,",").concat(b[0],"H0V").concat(b[1],"H").concat(t)})),w||T){var C=n.tickValues||i.generateTicks(x,c);e.generatedTicks=C;var S=t.selectAll(".tick").data(C,x),A=S.enter().insert("g",".domain").attr("class","tick"),$=S.exit().remove();S=A.merge(S),w&&A.append("line"),T&&A.append("text");var E=Tv.getSizeFor1Char(S),M=[],O=S.select("text").selectAll("tspan").data((function(t,e){var n=o.tickMultiline?s(t,x,C,c,E.w):zf(i.textFormatted(t))?i.textFormatted(t).concat():[i.textFormatted(t)];return M[e]=n.length,n.map((function(t){return{index:e,splitted:t}}))}));O.exit().remove(),O=O.enter().append("tspan").merge(O).text((function(t){return t.splitted})),O.attr("x",l?0:v*d).attr("dx",(_=0,/(top|bottom)/.test(a)&&f&&(_=8*Math.sin(Math.PI*(f/180))*("top"===a?-1:1)),_+(y.x||0))).attr("dy",(function(t,e){var n=".71em",i=0;return"top"!==a&&(i=E.h,0===e&&(i=c?-((M[t.index]-1)*(E.h/2)-3):0===y.y?n:0)),$f(i)&&y.y?i+y.y:i||n}));var D=S.select("line"),P=S.select("text");if(A.select("line").attr("".concat(h,"2"),g*d),A.select("text").attr(h,v*d),e.setTickLineTextPosition(D,P),o.tickTitle){var R=P.select("title");(R.empty()?P.append("title"):R).text((function(t){return o.tickTitle[t]}))}if(x.bandwidth){var I=x,L=I.bandwidth()/2;m=function(t){return I(t)+L},x=m}else m.bandwidth?m=x:u($,x);S=o.owner.state.flowing?i.transitionise(S):o.owner.$T(S),u(A,m),u(S.style("opacity",null),x)}})),this.g=p},t.prototype.getGeneratedTicks=function(t){var e,n=(null===(e=this.generatedTicks)||void 0===e?void 0:e.length)-1,i=this.generatedTicks;if(n>t){var o=Math.round(n/t+.1);i=this.generatedTicks.map((function(t,e){return e%o==0?t:null})).filter((function(t){return null!==t})).splice(0,t)}return i},t.prototype.getTickXY=function(){var t=this.config,e={x:0,y:0};return this.params.isCategory&&(e.x=t.tickCentered?0:t.tickOffset,e.y=t.tickCentered?t.tickOffset:0),e},t.prototype.getTickSize=function(t){var e=this.helper.scale,n=this.config,i=n.innerTickSize,o=n.range,r=e(t)+(n.tickCentered?0:n.tickOffset);return o[0]<r&&r<o[1]?i:0},t.prototype.setTickLineTextPosition=function(t,e){var n=this.getTickXY(),i=this.config,o=i.innerTickSize,r=i.orient,a=i.tickLength,s=i.tickOffset,c=this.params.tickTextRotate,l=function(t){var e=["start","end"];return"top"===r&&e.reverse(),t?e[t>0?0:1]:"middle"},u=function(t){return t?"rotate(".concat(t,")"):null},h=function(t){return t?11.5-2.5*(t/("bottom"===r?15:23))*(t>0?1:-1):a};switch(r){case"bottom":t.attr("x1",n.x).attr("x2",n.x).attr("y2",this.getTickSize.bind(this)),e.attr("x",0).attr("y",h(c)).style("text-anchor",l(c)).attr("transform",u(c));break;case"top":t.attr("x2",0).attr("y2",-o),e.attr("x",0).attr("y",2*-h(c)).style("text-anchor",l(c)).attr("transform",u(c));break;case"left":t.attr("x2",-o).attr("y1",n.y).attr("y2",n.y),e.attr("x",-a).attr("y",s).style("text-anchor","end");break;case"right":t.attr("x2",o).attr("y2",0),e.attr("x",a).attr("y",0).style("text-anchor","start")}},t.prototype.splitTickText=function(t,e,n,i,o){var r=this.params,a=this.helper.textFormatted(t),s=Af(a)&&a.indexOf("\n")>-1?a.split("\n"):[];if(s.length)return s;if(zf(a))return a;var c=r.tickWidth;return(!c||c<=0)&&(c=i?95:r.isCategory?Math.ceil(r.isInverted?e(n[0])-e(n[1]):e(n[1])-e(n[0]))-12:110),function t(e,n){for(var i,r,a,s=1;s<n.length;s++)if(" "===n.charAt(s)&&(r=s),i=n.substr(0,s+1),a=o*i.length,c<a)return t(e.concat(n.substr(0,r||s)),n.slice(r?r+1:s));return e.concat(n)}(s,String(a))},t.prototype.scale=function(t){return arguments.length?(this.helper.scale=t,this):this.helper.scale},t.prototype.orient=function(t){return arguments.length?(this.config.orient=t in{top:1,right:1,bottom:1,left:1}?String(t):"bottom",this):this.config.orient},t.prototype.tickFormat=function(t){var e=this.config;return arguments.length?(e.tickFormat=t,this):e.tickFormat},t.prototype.tickCentered=function(t){var e=this.config;return arguments.length?(e.tickCentered=t,this):e.tickCentered},t.prototype.tickOffset=function(){return this.config.tickOffset},t.prototype.tickInterval=function(t){var e,n=this,i=this.config,o=i.outerTickSize,r=i.tickOffset,a=i.tickValues;if(this.params.isCategory)e=2*r;else{e=(this.g.select("path.domain").node().getTotalLength()-2*o)/(t||this.g.selectAll("line").size());var s=a?a.map((function(t,e,i){var o=e+1;return o<i.length?n.helper.scale(i[o])-n.helper.scale(t):null})).filter(Boolean):[];e=Math.min.apply(Math,kf(kf([],s,!1),[e],!1))}return e===1/0?0:e},t.prototype.ticks=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=this.config;return t.length?(n.tickArguments=Jf(t),this):n.tickArguments},t.prototype.tickCulling=function(t){var e=this.config;return arguments.length?(e.tickCulling=t,this):e.tickCulling},t.prototype.tickValues=function(t){var e=this,n=this.config;if(Sf(t))n.tickValues=function(){return t(e.helper.scale.domain())};else{if(!arguments.length)return n.tickValues;n.tickValues=t}return this},t.prototype.setTransition=function(t){return this.config.transition=t,this},t}(),Cv={getAxisInstance:function(){return this.axis||new Sv(this)}},Sv=function(){function t(t){this.axesList={},this.tick={x:null,y:null,y2:null},this.xs=[],this.orient={x:"bottom",y:"left",y2:"right",subX:"bottom"},this.owner=t,this.setOrient()}return t.prototype.getAxisClassName=function(t){return"".concat(gp.axis," ").concat(gp["axis".concat(Qf(t))])},t.prototype.isHorizontal=function(t,e){var n=t.config.axis_rotated;return e?n:!n},t.prototype.isCategorized=function(){var t=this.owner,e=t.config,n=t.state;return e.axis_x_type.indexOf("category")>=0||n.hasRadar},t.prototype.isCustomX=function(){var t=this.owner.config;return!this.isTimeSeries()&&(t.data_x||Lf(t.data_xs))},t.prototype.isTimeSeries=function(t){return void 0===t&&(t="x"),"timeseries"===this.owner.config["axis_".concat(t,"_type")]},t.prototype.isLog=function(t){return void 0===t&&(t="x"),"log"===this.owner.config["axis_".concat(t,"_type")]},t.prototype.isTimeSeriesY=function(){return this.isTimeSeries("y")},t.prototype.getAxisType=function(t){void 0===t&&(t="x");var e="linear";return this.isTimeSeries(t)?e=this.owner.config.axis_x_localtime?"time":"utc":this.isLog(t)&&(e="log"),e},t.prototype.init=function(){var t=this,e=this.owner,n=e.config,i=e.$el,o=i.main,r=i.axis,a=e.state.clip,s=n.axis_rotated,c=["x","y"];n.axis_y2_show&&c.push("y2"),c.forEach((function(i){var c=t.getAxisClassName(i),l=gp["axis".concat(i.toUpperCase(),"Label")];r[i]=o.append("g").attr("class",c).attr("clip-path",(function(){var t=null;return"x"===i?t=a.pathXAxis:"y"===i&&(t=a.pathYAxis),t})).attr("transform",e.getTranslate(i)).style("visibility",n["axis_".concat(i,"_show")]?null:"hidden"),r[i].append("text").attr("class",l).attr("transform",["rotate(-90)",null]["x"===i?+!s:+s]).style("text-anchor",(function(){return t.textAnchorForAxisLabel(i)})),t.generateAxes(i)}))},t.prototype.setOrient=function(){var t=this.owner.config,e=t.axis_rotated,n=t.axis_y_inner,i=t.axis_y2_inner;this.orient={x:e?"left":"bottom",y:e?n?"top":"bottom":n?"right":"left",y2:e?i?"bottom":"top":i?"left":"right",subX:e?"left":"bottom"}},t.prototype.generateAxes=function(t){var e,n=this.owner,i=n.config,o=[],r=i["axis_".concat(t,"_axes")],a=i.axis_rotated;"x"===t?e=a?Fd:Nd:"y"===t?e=a?Nd:Fd:"y2"===t&&(e=a?zd:Bd),r.length&&r.forEach((function(i){var r=i.tick||{},a=n.scale[t].copy();i.domain&&a.domain(i.domain),o.push(e(a).ticks(r.count).tickFormat(Sf(r.format)?r.format.bind(n.api):function(t){return t}).tickValues(r.values).tickSizeOuter(!1===r.outer?0:6))})),this.axesList[t]=o},t.prototype.updateAxes=function(){var t=this,e=this.owner,n=e.config,i=e.$el.main,o=e.$T;Object.keys(this.axesList).forEach((function(r){var a=n["axis_".concat(r,"_axes")],s=e.scale[r].copy(),c=s.range();t.axesList[r].forEach((function(l,u){var h=l.scale().range();c.every((function(t,e){return t===h[e]}))||l.scale().range(c);var d="".concat(t.getAxisClassName(r),"-").concat(u+1),f=i.select(".".concat(d.replace(/\s/,".")));f.empty()?f=i.append("g").attr("class",d).style("visibility",n["axis_".concat(r,"_show")]?null:"hidden").call(l):(a[u].domain&&s.domain(a[u].domain),o(f).call(l.scale(s))),f.attr("transform",e.getTranslate(r,u+1))}))}))},t.prototype.setAxis=function(t,e,n,i){var o=this.owner;"subX"!==t&&(this.tick[t]=this.getTickValues(t)),this[t]=this.getAxis(t,e,n,!("x"!==t||!(o.scale.zoom||o.config.subchart_show||o.state.resizing))||i)},t.prototype.getAxis=function(t,e,n,i,o){var r,a=this.owner,s=a.config,c=/^(x|subX)$/.test(t),l=c?"x":t,u=c&&this.isCategorized(),h=this.orient[t],d=o?0:a.getAxisTickRotate(l);if(c)r="subX"===t?a.format.subXAxisTick:a.format.xAxisTick;else{var f=s["axis_".concat(t,"_tick_format")];Sf(f)&&(r=f.bind(a.api))}var p=this.tick[l],g=ip({outerTick:n,noTransition:i,config:s,id:t,tickTextRotate:d,owner:a},c&&{isCategory:u,isInverted:s.axis_x_inverted,tickMultiline:s.axis_x_tick_multiline,tickWidth:s.axis_x_tick_width,tickTitle:u&&s.axis_x_tick_tooltip&&a.api.categories(),orgXScale:a.scale.x});c||(g.tickStepSize=s["axis_".concat(l,"_tick_stepSize")]);var v=new kv(g).scale(c&&a.scale.zoom||e).orient(h);if(c&&this.isTimeSeries()&&p&&!Sf(p)){var b=cp.bind(a);p=p.map((function(t){return b(t)}))}else!c&&this.isTimeSeriesY()&&(v.ticks(s.axis_y_tick_time_value),p=null);p&&v.tickValues(p),v.tickFormat(r||!c&&a.isStackNormalized()&&function(t){return"".concat(t,"%")}),u&&(v.tickCentered(s.axis_x_tick_centered),If(s.axis_x_tick_culling)&&(s.axis_x_tick_culling=!1));var m=s["axis_".concat(l,"_tick_count")];return m&&v.ticks(m),v},t.prototype.updateXAxisTickValues=function(t,e){var n,i,o=this.owner,r=o.config,a=r.axis_x_tick_fit,s=r.axis_x_tick_count;return(a||s&&a)&&(i=o.mapTargetsToUniqueXs(t),this.isCategorized()&&s>i.length&&(s=i.length),i=this.generateTickValues(i,s,this.isTimeSeries())),e?e.tickValues(i):this.x&&(this.x.tickValues(i),null===(n=this.subX)||void 0===n||n.tickValues(i)),i},t.prototype.getId=function(t){var e=this.owner,n=e.config,i=e.scale,o=n.data_axes[t];return o&&i[o]||(o="y"),o},t.prototype.getXAxisTickFormat=function(t){var e,n=this.owner,i=n.config,o=n.format,r=t&&i.subchart_axis_x_tick_format||i.axis_x_tick_format,a=this.isTimeSeries(),s=this.isCategorized();return r?Sf(r)?e=r.bind(n.api):a&&(e=function(t){return t?o.axisTime(r)(t):""}):e=a?o.defaultAxisTime:s?n.categoryName:function(t){return t<0?t.toFixed(0):t},Sf(e)?function(t){return e.apply(n,s?[t,n.categoryName(t)]:[t])}:e},t.prototype.getTickValues=function(t){var e=this.owner,n=e.config["axis_".concat(t,"_tick_values")],i=e["".concat(t,"Axis")];return(Sf(n)?n.call(e.api):n)||(i?i.tickValues():void 0)},t.prototype.getLabelOptionByAxisId=function(t){return this.owner.config["axis_".concat(t,"_label")]},t.prototype.getLabelText=function(t){var e=this.getLabelOptionByAxisId(t);return Af(e)?e:e?e.text:null},t.prototype.setLabelText=function(t,e){var n=this.owner.config,i=this.getLabelOptionByAxisId(t);Af(i)?n["axis_".concat(t,"_label")]=e:i&&(i.text=e)},t.prototype.getLabelPosition=function(t,e){var n=this.owner.config.axis_rotated,i=this.getLabelOptionByAxisId(t),o=Rf(i)&&i.position?i.position:e[+!n],r=function(t){return!!~o.indexOf(t)};return{isInner:r("inner"),isOuter:r("outer"),isLeft:r("left"),isCenter:r("center"),isRight:r("right"),isTop:r("top"),isMiddle:r("middle"),isBottom:r("bottom")}},t.prototype.getAxisLabelPosition=function(t){return this.getLabelPosition(t,"x"===t?["inner-top","inner-right"]:["inner-right","inner-top"])},t.prototype.getLabelPositionById=function(t){return this.getAxisLabelPosition(t)},t.prototype.xForAxisLabel=function(t){var e=this.owner,n=e.state,i=n.width,o=n.height,r=this.getAxisLabelPosition(t),a=r.isMiddle?-o/2:0;return this.isHorizontal(e,"x"!==t)?a=r.isLeft?0:r.isCenter?i/2:i:r.isBottom&&(a=-o),a},t.prototype.dxForAxisLabel=function(t){var e=this.owner,n=this.getAxisLabelPosition(t),i=n.isBottom?"0.5em":"0";return this.isHorizontal(e,"x"!==t)?i=n.isLeft?"0.5em":n.isRight?"-0.5em":"0":n.isTop&&(i="-0.5em"),i},t.prototype.textAnchorForAxisLabel=function(t){var e=this.owner,n=this.getAxisLabelPosition(t),i=n.isMiddle?"middle":"end";return this.isHorizontal(e,"x"!==t)?i=n.isLeft?"start":n.isCenter?"middle":"end":n.isBottom&&(i="start"),i},t.prototype.dyForAxisLabel=function(t){var e,n=this.owner,i=n.config,o=i.axis_rotated,r=this.getAxisLabelPosition(t).isInner,a=i["axis_".concat(t,"_tick_rotate")]?n.getHorizontalAxisHeight(t):0,s=this.getMaxTickSize(t).width;if("x"===t){var c=i.axis_x_height;e=o?r?"1.2em":-25-s:r?"-0.5em":c?c-10:a?a-10:"3em"}else e={y:["-0.5em",10,"3em","1.2em",10],y2:["1.2em",-20,"-2.2em","-0.5em",15]}[t],e=o?r?e[0]:a?a*("y2"===t?-1:1)-e[1]:e[2]:r?e[3]:(e[4]+(i["axis_".concat(t,"_inner")]?0:s+e[4]))*("y"===t?-1:1);return e},t.prototype.getMaxTickSize=function(t,e){var n=this.owner,i=n.config,o=n.state.current,r=n.$el,a=r.svg,s=r.chart,c=o.maxTickSize[t],l="axis_".concat(t),u={width:0,height:0};if(e||!i["".concat(l,"_show")]||c.width>0&&0===n.filterTargetsToShow().length)return c;if(a){var h=/^y2?$/.test(t),d=n.filterTargetsToShow(n.data.targets),f=n.scale[t].copy().domain(n["get".concat(h?"Y":"X","Domain")](d,t)),p=f.domain(),g=p[0]===p[1]&&p.every((function(t){return t>0})),v=zf(c.domain)&&c.domain[0]===c.domain[1]&&c.domain.every((function(t){return t>0}));if(g||v)return c.size;c.domain=p,h||c.ticks.splice(0);var b=this.getAxis(t,f,!1,!1,!0),m=i["".concat(l,"_tick_rotate")],y=i["".concat(l,"_tick_count")];!i["".concat(l,"_tick_values")]&&y&&b.tickValues(this.generateTickValues(p,y,h?this.isTimeSeriesY():this.isTimeSeries())),!h&&this.updateXAxisTickValues(d,b);var x=s.append("svg").style("visibility","hidden").style("position","fixed").style("top","0").style("left","0");b.create(x),x.selectAll("text").attr("transform",$f(m)?"rotate(".concat(m,")"):null).each((function(t,e){var n=this.getBoundingClientRect(),i=n.width,o=n.height;u.width=Math.max(u.width,i),u.height=Math.max(u.height,o),h||(c.ticks[e]=i)})),x.remove()}return Object.keys(u).forEach((function(t){u[t]>0&&(c[t]=u[t])})),c},t.prototype.getXAxisTickTextY2Overflow=function(t){var e=this.owner,n=e.axis,i=e.config,o=e.state,r=e.getAxisTickRotate("x"),a=r>0&&r<90;if((n.isCategorized()||n.isTimeSeries())&&i.axis_x_tick_fit&&(!i.axis_x_tick_culling||If(i.axis_x_tick_culling))&&!i.axis_x_tick_multiline&&a){var s=o.current.width-e.getCurrentPaddingByDirection("left"),c=this.getXAxisTickMaxOverflow(r,s-t),l=Math.max(0,c)+t;return Math.min(l,s/2)}return 0},t.prototype.getXAxisTickMaxOverflow=function(t,e){for(var n=this.owner,i=n.axis,o=n.config,r=n.state,a=i.isTimeSeries(),s=r.current.maxTickSize.x.ticks,c=s.length,l=r.axis.x.padding,u=l.left,h=l.right,d=0,f=c-(a&&o.axis_x_tick_fit?.5:0),p=0;p<c;p++){var g=p+1,v=Math.cos(Math.PI*t/180)*s[p],b=g-(a?1:.5)+u;if(!(b<=0)){var m=(e-v)/b,y=v-m/2-((f-g)*m+h*m);d=Math.max(d,y)}}var x=n.filterTargetsToShow(n.data.targets),_=0;if(!a&&o.axis_x_tick_count<=x.length&&x[0].values.length){var w=Mg(n.axis.getAxisType("x"),0,e-d).domain([-1*u,n.getXDomainMax(n.data.targets)+1+h]);_=Math.ceil((w(1)-w(0))/2)}return d+_},t.prototype.updateLabels=function(t){var e=this,n=this.owner,i=n.$el.main,o=n.$T,r={x:i.select(".".concat(gp.axisX," .").concat(gp.axisXLabel)),y:i.select(".".concat(gp.axisY," .").concat(gp.axisYLabel)),y2:i.select(".".concat(gp.axisY2," .").concat(gp.axisY2Label))};Object.keys(r).filter((function(t){return!r[t].empty()})).forEach((function(n){var i=r[n];o(i,t).attr("x",(function(){return e.xForAxisLabel(n)})).attr("dx",(function(){return e.dxForAxisLabel(n)})).attr("dy",(function(){return e.dyForAxisLabel(n)})).text((function(){return e.getLabelText(n)}))}))},t.prototype.getPadding=function(t,e,n,i){var o=$f(t)?t:t[e];return Cf(o)?this.owner.convertPixelToScale(/(bottom|top)/.test(e)?"y":"x",o,i):n},t.prototype.generateTickValues=function(t,e,n){var i=t;if(e){var o=Sf(e)?e():e;if(1===o)i=[t[0]];else if(2===o)i=[t[0],t[t.length-1]];else if(o>2){var r=this.isCategorized(),a=o-2,s=t[0],c=t[t.length-1],l=(c-s)/(a+1),u=void 0;i=[s];for(var h=0;h<a;h++)u=+s+l*(h+1),i.push(n?new Date(u):r?Math.round(u):u);i.push(c)}}return n||(i=i.sort((function(t,e){return t-e}))),i},t.prototype.generateTransitions=function(t){var e=this.owner,n=e.$el.axis,i=e.$T,o=["x","y","y2","subX"].map((function(e){return i(n[e],t)}));return{axisX:o[0],axisY:o[1],axisY2:o[2],axisSubX:o[3]}},t.prototype.redraw=function(t,e,n){var i=this,o=this.owner,r=o.config,a=o.$el,s=e?"0":null;["x","y","y2","subX"].forEach((function(e){var o=i[e],c=a.axis[e];o&&c&&(n||r.transition_duration||(o.config.withoutTransition=!0),c.style("opacity",s),o.create(t["axis".concat(Qf(e))]))})),this.updateAxes()},t.prototype.redrawAxis=function(t,e,n,i,o){var r,a,s,c,l=this,u=this.owner,h=u.config,d=u.scale,f=u.$el,p=!!d.zoom;!p&&this.isCategorized()&&0===t.length&&d.x.domain([0,f.axis.x.selectAll(".tick").size()]),d.x&&t.length?(!p&&u.updateXDomain(t,e.UpdateXDomain,e.UpdateOrgXDomain,e.TrimXDomain),h.axis_x_tick_values||this.updateXAxisTickValues(t)):this.x&&(this.x.tickValues([]),null===(r=this.subX)||void 0===r||r.tickValues([])),h.zoom_rescale&&!i&&(c=d.x.orgDomain()),["y","y2"].forEach((function(e){var n="axis_".concat(e,"_"),i=d[e];if(i){var o=h["".concat(n,"tick_values")],r=h["".concat(n,"tick_count")];if(i.domain(u.getYDomain(t,e,c)),!o&&r){var a=u.axis[e],s=i.domain();a.tickValues(l.generateTickValues(s,s.every((function(t){return 0===t}))?1:r,l.isTimeSeriesY()))}}})),this.redraw(n,u.hasArcType(),o),this.updateLabels(e.Transition),(e.UpdateXDomain||e.UpdateXAxis||e.Y)&&t.length&&this.setCulling(),e.Y&&(null===(a=d.subY)||void 0===a||a.domain(u.getYDomain(t,"y")),null===(s=d.subY2)||void 0===s||s.domain(u.getYDomain(t,"y2")))},t.prototype.setCulling=function(){var t=this.owner,e=t.config,n=t.state,i=n.clip,o=n.current,r=t.$el;["subX","x","y","y2"].forEach((function(t){var n=r.axis[t],a="axis_".concat("subX"===t?"x":t,"_tick_culling"),s=e[a];if(n&&s){var c,l=n.selectAll(".tick"),u=op(l.data()),h=u.length,d=e["".concat(a,"_max")],f=e["".concat(a,"_lines")];if(h){for(var p=1;p<h;p++)if(h/p<d){c=p;break}l.each((function(t){var e=f?this.querySelector("text"):this;e&&(e.style.display=u.indexOf(t)%c?"none":null)}))}else l.style("display",null);if("x"===t){var g=o.maxTickSize.x.clipPath?i.pathXAxisTickTexts:null;r.svg.selectAll(".".concat(gp.axisX," .tick text")).attr("clip-path",g)}}}))},t}(),Av={initEventRect:function(){this.$el.main.select(".".concat(dp.chart)).append("g").attr("class",kp.eventRects).style("fill-opacity","0")},redrawEventRect:function(){var t,e=this,n=e.config,i=e.state,o=e.$el,r=e.isMultipleX(),a=n.axis_x_inverted;if(o.eventRect)e.updateEventRect(o.eventRect,!0);else if(e.data.targets.length){var s=e.$el.main.select(".".concat(kp.eventRects)).style("cursor",n.zoom_enabled&&"drag"!==n.zoom_type?n.axis_rotated?"ns-resize":"ew-resize":null).classed(kp.eventRectsMultiple,r).classed(kp.eventRectsSingle,!r).selectAll(".".concat(kp.eventRect)).data([0]).enter().append("rect");e.updateEventRect(s),r?e.generateEventRectsForMultipleXs(s):e.generateEventRectsForSingleX(s),s.call(e.getDraggableSelection()),o.eventRect=s,"touch"!==e.state.inputType||o.svg.on("touchstart.eventRect")||e.hasArcType()||e.bindTouchOnEventRect(),i.rendered&&e.updateEventRect(o.eventRect,!0)}if(!r){var c=e.getMaxDataCountTarget();n.data_xSort&&!a||c.sort((function(t,e){return a?e.x-t.x:t.x-e.x})),e.updateDataIndexByX(c),e.updateXs(c),null===(t=e.updatePointClass)||void 0===t||t.call(e,!0),i.eventReceiver.data=c}e.updateEventRectData()},bindTouchOnEventRect:function(){var t,e=this,n=e.config,i=e.state,o=e.$el,r=o.eventRect,a=o.svg,s=function(){e.unselectRect(),e.callOverOutForTouch()},c=n.interaction_inputType_touch.preventDefault,l=Of(c)&&c||!1,u=!isNaN(c)&&c||null;r.on("touchstart",(function(t){i.event=t,e.updateEventRect()})).on("touchstart.eventRect touchmove.eventRect",(function(o){if(i.event=o,!r.empty()&&r.classed(kp.eventRect)){if(i.dragging||i.flowing||e.hasArcType()||o.touches.length>1)return;!function(e){var i=e.type,o=e.changedTouches[0]["client".concat(n.axis_rotated?"Y":"X")];"touchstart"===i?l?e.preventDefault():null!==u&&(t=o):"touchmove"===i&&(l||!0===t||null!==u&&Math.abs(t-o)>=u)&&(t=!0,e.preventDefault())}(o),function(t){if(e.isMultipleX())e.selectRectForMultipleXs(t);else{var n=e.getDataIndexFromEvent(i.event);e.callOverOutForTouch(n),-1===n?e.unselectRect():e.selectRectForSingle(t,n)}}(r.node())}else s()}),!0).on("touchend.eventRect",(function(t){i.event=t,!r.empty()&&r.classed(kp.eventRect)&&(e.hasArcType()||!e.toggleShape||i.cancelClick)&&i.cancelClick&&(i.cancelClick=!1)}),!0),a.on("touchstart",(function(t){i.event=t;var e=t.target;e&&e!==r.node()&&s()}))},updateEventRect:function(t,e){void 0===e&&(e=!1);var n=this.state,i=this.$el,o=n.eventReceiver,r=n.width,a=n.height,s=n.rendered,c=n.resizing,l=t||i.eventRect;(!s||c||e)&&(l.attr("x",0).attr("y",0).attr("width",r).attr("height",a),s&&!e||l.classed(kp.eventRect,!0)),o&&(o.rect=l.node().getBoundingClientRect())},updateEventRectData:function(){var t,e,n,i,o=this,r=o.config,a=o.scale,s=o.state,c=a.zoom||a.x,l=r.axis_rotated;if(o.isMultipleX())t=0,e=0,n=s.width,i=s.height;else{var u,h=void 0;if(o.axis.isCategorized())u=o.getEventRectWidth(),h=function(t){return c(t.x)-u/2};else{var d=function(t){var e=t.index;return{prev:o.getPrevX(e),next:o.getNextX(e)}};u=function(t){var e,n=d(t),i=c.domain();return null===n.prev&&null===n.next?e=l?s.height:s.width:null===n.prev?e=(c(n.next)+c(t.x))/2:null===n.next?e=c(i[1])-(c(n.prev)+c(t.x))/2:(Object.keys(n).forEach((function(t,e){var o;n[t]=null!==(o=n[t])&&void 0!==o?o:i[e]})),e=Math.max(0,(c(n.next)-c(n.prev))/2)),e},h=function(t){var e=d(t);return null===e.prev&&null===e.next?0:null===e.prev?c(c.domain()[0]):(c(t.x)+c(e.prev))/2}}t=l?0:h,e=l?h:0,n=l?s.width:u,i=l?u:s.height}var f=s.eventReceiver,p=function(t,e){return Sf(t)?t(e):t};f.coords.splice(f.data.length),f.data.forEach((function(o,r){f.coords[r]={x:p(t,o),y:p(e,o),w:p(n,o),h:p(i,o)}}))},selectRectForSingle:function(t,e){var n,i,o=this,r=o.config,a=o.$el,s=a.main,c=a.circle,l=r.data_selection_enabled,u=r.data_selection_grouped,h=r.data_selection_isselectable,d=r.tooltip_grouped,f=o.getAllValuesOnIndex(e);if(!d||(o.showTooltip(f,t),null===(n=o.showGridFocus)||void 0===n||n.call(o,f),l&&!u)){!c&&s.selectAll(".".concat(dp.EXPANDED,":not(.").concat(Mp.shape,"-").concat(e,")")).classed(dp.EXPANDED,!1);var p=s.selectAll(".".concat(Mp.shape,"-").concat(e)).classed(dp.EXPANDED,!0).style("cursor",h?"pointer":null).filter((function(t){return o.isWithinShape(this,t)}));p.empty()&&!d&&(null===(i=o.hideGridFocus)||void 0===i||i.call(o),o.hideTooltip(),!u&&o.setExpand(e)),p.call((function(n){var i,r,a=n.data();l&&(u||(null==h?void 0:h.bind(o.api)(a)))&&(t.style.cursor="pointer"),d||(o.showTooltip(a,t),null===(i=o.showGridFocus)||void 0===i||i.call(o,a),null===(r=o.unexpandCircles)||void 0===r||r.call(o),n.each((function(t){return o.setExpand(e,t.id)})))}))}},selectRectForMultipleXs:function(t,e){void 0===e&&(e=!0);var n=this,i=n.config,o=n.state,r=n.filterTargetsToShow(n.data.targets);if(!o.dragging&&!n.hasArcType(r)){var a=jf(o.event,t),s=n.findClosestFromTargets(r,a);if(!e||!o.mouseover||s&&s.id===o.mouseover.id||(i.data_onout.call(n.api,o.mouseover),o.mouseover=void 0),s){var c=(n.isBubbleType(s)||n.isScatterType(s)||!i.tooltip_grouped?[s]:n.filterByX(r,s.x)).map((function(t){return n.addName(t)}));n.showTooltip(c,t),n.setExpand(s.index,s.id,!0),n.showGridFocus(c);var l=n.dist(s,a);(n.isBarType(s.id)||l<n.getPointSensitivity(s))&&(n.$el.svg.select(".".concat(kp.eventRect)).style("cursor","pointer"),e&&!o.mouseover&&(i.data_onover.call(n.api,s),o.mouseover=s))}else n.unselectRect()}},unselectRect:function(){var t=this,e=t.$el,n=e.circle,i=e.tooltip;t.$el.svg.select(".".concat(kp.eventRect)).style("cursor",null),t.hideGridFocus(),i&&(t.hideTooltip(),t._handleLinkedCharts(!1)),n&&!t.isPointFocusOnly()&&t.unexpandCircles(),t.expandBarTypeShapes(!1)},generateEventRectsForSingleX:function(t){var e=this,n=e.config,i=e.state,o=i.eventReceiver,r=t.style("cursor",n.data_selection_enabled&&n.data_selection_grouped?"pointer":null).on("click",(function(t){i.event=t;var n=o.currentIdx,r=o.data[-1===n?e.getDataIndexFromEvent(t):n];e.clickHandlerForSingleX.bind(this)(r,e)}));if("mouse"===i.inputType){r.on("mouseover",(function(t){i.event=t,e.updateEventRect()})).on("mousemove",(function(t){var r=function(t){var n=t?e.getDataIndexFromEvent(t):o.currentIdx;return n>-1?o.data[n]:null}(t);if(i.event=t,r){var a=r.index,s=n.line_step_type;if(n.line_step_tooltipMatch&&e.hasType("step")&&/^step\-(before|after)$/.test(s)){var c=e.scale.zoom||e.scale.x,l=e.axis.xs[a],u=c.invert(jf(t,this)[0]);"step-after"===s&&u<l?a-=1:"step-before"===s&&u>l&&(a+=1)}var h=n.tooltip_grouped&&a===o.currentIdx;i.dragging||i.flowing||e.hasArcType()||h?n.tooltip_show&&h&&e.setTooltipPosition():(a!==o.currentIdx&&(e.setOverOut(!1,o.currentIdx),o.currentIdx=a),-1===a?e.unselectRect():e.selectRectForSingle(this,a),e.setOverOut(-1!==a,a))}})).on("mouseout",(function(t){i.event=t,n&&!e.hasArcType()&&-1!==o.currentIdx&&(e.unselectRect(),e.setOverOut(!1,o.currentIdx),o.currentIdx=-1)}))}return r},clickHandlerForSingleX:function(t,e){var n=e,i=n.config,o=n.state,r=n.$el.main;if(!t||n.hasArcType()||o.cancelClick)o.cancelClick&&(o.cancelClick=!1);else{var a=t.index;r.selectAll(".".concat(Mp.shape,"-").concat(a)).each((function(t){var e;(i.data_selection_grouped||n.isWithinShape(this,t))&&(null===(e=n.toggleShape)||void 0===e||e.call(n,this,t,a),i.data_onclick.bind(n.api)(t,this))}))}},generateEventRectsForMultipleXs:function(t){var e=this,n=e.state;t.on("click",(function(t){n.event=t,e.clickHandlerForMultipleXS.bind(this)(e)})),"mouse"===n.inputType&&t.on("mouseover mousemove",(function(t){n.event=t,e.selectRectForMultipleXs(this)})).on("mouseout",(function(t){n.event=t,e.config&&!e.hasArcType()&&e.unselectRect()}))},clickHandlerForMultipleXS:function(t){var e=t,n=e.config,i=e.state,o=e.filterTargetsToShow(e.data.targets);if(!e.hasArcType(o)){var r=jf(i.event,this),a=e.findClosestFromTargets(o,r),s="radius"===n.point_sensitivity?a.r:n.point_sensitivity;a&&(e.isBarType(a.id)||e.dist(a,r)<s)&&e.$el.main.selectAll(".".concat(Mp.shapes).concat(e.getTargetSelectorSuffix(a.id))).selectAll(".".concat(Mp.shape,"-").concat(a.index)).each((function(){var t;(n.data_selection_grouped||e.isWithinShape(this,a))&&(null===(t=e.toggleShape)||void 0===t||t.call(e,this,a,a.index),n.data_onclick.bind(e.api)(a,this))}))}}},$v={generateFlow:function(t){var e=this,n=e.data,i=e.state,o=e.$el;return function(){var r=t.flow.length;i.flowing=!0,n.targets.forEach((function(t){t.values.splice(0,r)})),e.updateXGrid&&e.updateXGrid(!0);var a={};["axis.x","grid.x","gridLines.x","region.list","text","bar","line","area","circle"].forEach((function(t){var e=t.split("."),n=o[e[0]];n&&e.length>1&&(n=n[e[1]]),(null==n?void 0:n.size())&&(a[t]=n)})),e.hideGridFocus(),e.setFlowList(a,t)}},setFlowList:function(t,e){var n,i=this,o=e.flow,r=e.targets,a=o.duration,s=void 0===a?e.duration:a,c=o.index,l=o.length,u=o.orgDataCount,h=i.getFlowTransform(r,u,c,l),d=ag();d.add(Object.keys(t).map((function(e){return n=t[e].transition().ease(Xd).duration(s),n="axis.x"===e?n.call((function(t){i.axis.x.setTransition(t).create(t)})):"region.list"===e?n.filter(i.isRegionOnX).attr("transform",h):n.attr("transform",h),n}))),n.call(d,(function(){i.cleanUpFlow(t,e)}))},cleanUpFlow:function(t,e){var n=this,i=n.config,o=n.state,r=n.$el.svg,a=i.axis_rotated,s=e.flow,c=e.shape,l=e.xv,u=c.pos,h=u.cx,d=u.cy,f=u.xForText,p=u.yForText,g=s.done,v=void 0===g?function(){}:g,b=s.length;b&&(["circle","text","shape","eventRect"].forEach((function(t){for(var e=[],n=0;n<b;n++)e.push(".".concat(Lp[t],"-").concat(n));r.selectAll(".".concat(Lp["".concat(t,"s")])).selectAll(e).remove()})),r.select(".".concat(Lp.xgrid)).remove()),Object.keys(t).forEach((function(e){var r=t[e];if("axis.x"!==e&&r.attr("transform",null),"grid.x"===e)r.attr(o.xgridAttr);else if("gridLines.x"===e)r.attr("x1",a?0:l).attr("x2",a?o.width:l),r.select("text").attr("x",a?o.width:0).attr("y",l);else if(/^(area|bar|line)$/.test(e))r.attr("d",c.type[e]);else if("text"===e)r.attr("x",f).attr("y",p).style("fill-opacity",n.opacityForText.bind(n));else if("circle"===e)if(n.isCirclePoint())r.attr("cx",h).attr("cy",d);else{r.attr("x",(function(t){return h(t)-i.point_r})).attr("y",(function(t){return d(t)-i.point_r}))}else"region.list"===e&&r.select("rect").filter(n.isRegionOnX).attr("x",n.regionX.bind(n)).attr("width",n.regionWidth.bind(n))})),i.interaction_enabled&&n.redrawEventRect(),v.call(n.api),o.flowing=!1},getFlowTransform:function(t,e,n,i){var o,r=this,a=r.data,s=r.scale.x,c=a.targets[0].values,l=r.getValueOnIndex(c,n),u=r.getValueOnIndex(c,n+i),h=s.domain(),d=r.updateXDomain(t,!0,!0);e?o=1===e||(null==l?void 0:l.x)===(null==u?void 0:u.x)||r.axis.isTimeSeries()?s(h[0])-s(d[0]):s((null==l?void 0:l.x)||0)-s(u.x):1!==c.length?o=s(h[0])-s(d[0]):r.axis.isTimeSeries()?(l=r.getValueOnIndex(c,0),u=r.getValueOnIndex(c,c.length-1),o=s(l.x)-s(u.x)):o=Pf(d)/2;var f=Pf(h)/Pf(d);return"translate(".concat(o,",0) scale(").concat(f,",1)")}},Ev={initClip:function(){var t=this,e=t.state,n=e.clip,i=e.datetimeId;n.id="".concat(i,"-clip"),n.idXAxis="".concat(n.id,"-xaxis"),n.idYAxis="".concat(n.id,"-yaxis"),n.idGrid="".concat(n.id,"-grid"),n.path=t.getClipPath(n.id),n.pathXAxis=t.getClipPath(n.idXAxis),n.pathYAxis=t.getClipPath(n.idYAxis),n.pathGrid=t.getClipPath(n.idGrid)},getClipPath:function(t){var e=this.config;if(!e.clipPath&&/-clip$/.test(t)||!e.axis_x_clipPath&&/-clip-xaxis$/.test(t)||!e.axis_y_clipPath&&/-clip-yaxis$/.test(t))return null;var n=!!gf.navigator&&gf.navigator.appVersion.toLowerCase().indexOf("msie 9.")>=0;return"url(".concat(n?"":vf.URL.split("#")[0],"#").concat(t,")")},appendClip:function(t,e){e&&t.append("clipPath").attr("id",e).append("rect")},setXAxisClipPath:function(t){var e=this.config,n=this.state,i=n.margin,o=n.width,r=n.height,a=e.axis_rotated,s=Math.max(30,i.left)-(a?0:20),c=(a?i.top+r+10:i.bottom)+20,l=a?-(1+s):-(s-1),u=a?i.left+20:o+10+s;t.attr("x",l).attr("y",-15).attr("width",u).attr("height",c)},setYAxisClipPath:function(t){var e=this.config,n=this.state,i=n.margin,o=n.width,r=n.height,a=e.axis_rotated,s=Math.max(30,i.left)-(a?20:0),c=e.axis_y_inner,l=c&&!a?e.axis_y_label.text?-20:-1:a?-(1+s):-(s-1),u=-(a?20:i.top),h=(a?o+15+s:i.left+20)+(c?20:0),d=(a?i.bottom+10:i.top+r)+10;t.attr("x",l).attr("y",u).attr("width",h).attr("height",d)},updateXAxisTickClip:function(){var t=this,e=t.config,n=t.state,i=n.clip,o=n.xAxisHeight,r=t.$el.defs,a=t.getHorizontalAxisHeight("x");if(r&&!i.idXAxisTickTexts){var s="".concat(i.id,"-xaxisticktexts");t.appendClip(r,s),i.pathXAxisTickTexts=t.getClipPath(i.idXAxisTickTexts),i.idXAxisTickTexts=s}!e.axis_x_tick_multiline&&t.getAxisTickRotate("x")&&a!==o&&(t.setXAxisTickClipWidth(),t.setXAxisTickTextClipPathWidth()),t.state.xAxisHeight=a},setXAxisTickClipWidth:function(){var t=this,e=t.config,n=t.state.current.maxTickSize,i=t.getAxisTickRotate("x");if(!e.axis_x_tick_multiline&&i){var o=Math.sin(Math.PI/180*Math.abs(i));n.x.clipPath=(t.getHorizontalAxisHeight("x")-20)/o}else n.x.clipPath=null},setXAxisTickTextClipPathWidth:function(){var t=this.state,e=t.clip,n=t.current,i=this.$el.svg;i&&i.select("#".concat(e.idXAxisTickTexts," rect")).attr("width",n.maxTickSize.x.clipPath).attr("height",30)}},Mv=function(t){return Cf(t.position)||"end"},Ov=function(t){return"start"===t.position?4:"middle"===t.position?0:-4};function Dv(t,e,n){return function(i){var o=t?0:e;return"start"===i.position?o=t?-n:0:"middle"===i.position&&(o=(t?-n:e)/2),o}}function Pv(t,e){"grid"===e&&t.each((function(){var t=cs(this);["x1","x2","y1","y2"].forEach((function(e){return t.attr(e,Math.ceil(+t.attr(e)))}))}))}var Rv={hasGrid:function(){var t=this.config;return["x","y"].some((function(e){return t["grid_".concat(e,"_show")]||t["grid_".concat(e,"_lines")].length}))},initGrid:function(){var t=this;t.hasGrid()&&t.initGridLines(),t.initFocusGrid()},initGridLines:function(){var t=this,e=t.config,n=t.state.clip,i=t.$el;(e.grid_x_lines.length||e.grid_y_lines.length)&&(i.gridLines.main=i.main.insert("g",".".concat(dp.chart).concat(e.grid_lines_front?" + *":"")).attr("clip-path",n.pathGrid).attr("class","".concat(Sp.grid," ").concat(Sp.gridLines)),i.gridLines.main.append("g").attr("class",Sp.xgridLines),i.gridLines.main.append("g").attr("class",Sp.ygridLines),i.gridLines.x=ls([]))},updateXGrid:function(t){var e=this,n=e.config,i=e.scale,o=e.state,r=e.$el,a=r.main,s=r.grid,c=n.axis_rotated,l=e.generateGridData(n.grid_x_type,i.x),u=e.axis.isCategorized()?e.axis.x.tickOffset():0,h=function(t){return(i.zoom||i.x)(t)+u*(c?-1:1)};o.xgridAttr=c?{x1:0,x2:o.width,y1:h,y2:h}:{x1:h,x2:h,y1:0,y2:o.height},s.x=a.select(".".concat(Sp.xgrids)).selectAll(".".concat(Sp.xgrid)).data(l),s.x.exit().remove(),s.x=s.x.enter().append("line").attr("class",Sp.xgrid).merge(s.x),t||s.x.each((function(){var t=cs(this);Object.keys(o.xgridAttr).forEach((function(e){t.attr(e,o.xgridAttr[e]).style("opacity",(function(){return t.attr(c?"y1":"x1")===(c?o.height:0)?"0":null}))}))}))},updateYGrid:function(){var t=this,e=t.axis,n=t.config,i=t.scale,o=t.state,r=t.$el,a=r.grid,s=r.main,c=n.axis_rotated,l=function(t){return Math.ceil(i.y(t))},u=e.y.getGeneratedTicks(n.grid_y_ticks)||t.scale.y.ticks(n.grid_y_ticks);a.y=s.select(".".concat(Sp.ygrids)).selectAll(".".concat(Sp.ygrid)).data(u),a.y.exit().remove(),a.y=a.y.enter().append("line").attr("class",Sp.ygrid).merge(a.y),a.y.attr("x1",c?l:0).attr("x2",c?l:o.width).attr("y1",c?0:l).attr("y2",c?o.height:l),Pv(a.y,"grid")},updateGrid:function(){var t=this,e=t.$el,n=e.grid;!e.gridLines.main&&t.initGridLines(),n.main.style("visibility",t.hasArcType()?"hidden":null),t.hideGridFocus(),t.updateGridLines("x"),t.updateGridLines("y")},updateGridLines:function(t){var e=this,n=e.config,i=e.$el,o=i.gridLines,r=i.main,a=e.$T,s=n.axis_rotated,c="x"===t;n["grid_".concat(t,"_show")]&&e["update".concat(t.toUpperCase(),"Grid")]();var l=r.select(".".concat(Sp["".concat(t,"gridLines")])).selectAll(".".concat(Sp["".concat(t,"gridLine")])).data(n["grid_".concat(t,"_lines")]);a(l.exit()).style("opacity","0").remove();var u=l.enter().append("g");u.append("line").style("opacity","0"),(l=u.merge(l)).each((function(t){var e=cs(this);e.select("text").empty()&&t.text&&e.append("text").style("opacity","0")})),a(l.attr("class",(function(e){return"".concat(Sp["".concat(t,"gridLine")]," ").concat(e.class||"").trim()})).select("text").attr("text-anchor",Mv).attr("transform",(function(){return c?s?null:"rotate(-90)":s?"rotate(-90)":null})).attr("dx",Ov).attr("dy",-5)).text((function(t){var e;return null!==(e=t.text)&&void 0!==e?e:this.remove()})),o[t]=l},redrawGrid:function(t){var e=this,n=e.config.axis_rotated,i=e.state,o=i.width,r=i.height,a=e.$el.gridLines,s=e.$T,c=e.xv.bind(e),l=e.yv.bind(e),u=a.x.select("line"),h=a.x.select("text"),d=a.y.select("line"),f=a.y.select("text");return u=s(u,t).attr("x1",n?0:c).attr("x2",n?o:c).attr("y1",n?c:0).attr("y2",n?c:r),h=s(h,t).attr("x",Dv(!n,o,r)).attr("y",c),d=s(d,t).attr("x1",n?l:0).attr("x2",n?l:o).attr("y1",n?0:l).attr("y2",n?r:l),f=s(f,t).attr("x",Dv(n,o,r)).attr("y",l),[u.style("opacity",null),h.style("opacity",null),d.style("opacity",null),f.style("opacity",null)]},initFocusGrid:function(){var t=this,e=t.config,n=t.state.clip,i=t.$el,o=e.grid_front,r=".".concat(o&&i.gridLines.main?Sp.gridLines:dp.chart).concat(o?" + *":""),a=i.main.insert("g",r).attr("clip-path",n.pathGrid).attr("class",Sp.grid);i.grid.main=a,e.grid_x_show&&a.append("g").attr("class",Sp.xgrids),e.grid_y_show&&a.append("g").attr("class",Sp.ygrids),e.interaction_enabled&&e.grid_focus_show&&(a.append("g").attr("class",Cp.xgridFocus).append("line").attr("class",Cp.xgridFocus),e.grid_focus_y&&!e.tooltip_grouped&&a.append("g").attr("class",Cp.ygridFocus).append("line").attr("class",Cp.ygridFocus))},showGridFocus:function(t){var e,n=this,i=n.config,o=n.state,r=o.width,a=o.height,s=i.axis_rotated,c=n.$el.main.selectAll("line.".concat(Cp.xgridFocus,", line.").concat(Cp.ygridFocus)),l=(t||[c.datum()]).filter((function(t){return t&&Cf(n.getBaseValue(t))}));if(i.tooltip_show&&0!==l.length&&!n.hasType("bubble")&&!n.hasArcType()){var u=i.grid_focus_edge&&!i.tooltip_grouped,h=n.xx.bind(n);c.style("visibility",null).data(l.concat(l)).each((function(t){var e,i=cs(this),o={x:h(t),y:n.getYScaleById(t.id)(t.value)};if(i.classed(Cp.xgridFocus))e=s?[null,o.x,u?o.y:r,o.x]:[o.x,u?o.y:null,o.x,a];else{var c="y2"===n.axis.getId(t.id);e=s?[o.y,u&&!c?o.x:null,o.y,u&&c?o.x:a]:[u&&c?o.x:null,o.y,u&&!c?o.x:r,o.y]}["x1","y1","x2","y2"].forEach((function(t,n){return i.attr(t,e[n])}))})),Pv(c,"grid"),null===(e=n.showCircleFocus)||void 0===e||e.call(n,t)}},hideGridFocus:function(){var t,e=this,n=e.state,i=n.inputType,o=n.resizing,r=e.$el.main;"mouse"!==i&&o||(r.selectAll("line.".concat(Cp.xgridFocus,", line.").concat(Cp.ygridFocus)).style("visibility","hidden"),null===(t=e.hideCircleFocus)||void 0===t||t.call(e))},updateGridFocus:function(){var t,e=this,n=e.state,i=n.inputType,o=n.width,r=n.height,a=n.resizing,s=e.$el.grid.main.select("line.".concat(Cp.xgridFocus));if("touch"===i)s.empty()?a&&(null===(t=e.showCircleFocus)||void 0===t||t.call(e)):e.showGridFocus();else{var c=e.config.axis_rotated;s.attr("x1",c?0:-10).attr("x2",c?o:-10).attr("y1",c?-10:0).attr("y2",c?-10:r)}return!0},generateGridData:function(t,e){var n=this.$el.main.select(".".concat(gp.axisX)).selectAll(".tick").size(),i=[];if("year"===t)for(var o=this.getXDomain().map((function(t){return t.getFullYear()})),r=o[0],a=o[1],s=r;s<=a;s++)i.push(new Date("".concat(s,"-01-01 00:00:00")));else(i=e.ticks(10)).length>n&&(i=i.filter((function(t){return String(t).indexOf(".")<0})));return i},getGridFilterToRemove:function(t){return t?function(e){var n=!1;return(zf(t)?t.concat():[t]).forEach((function(t){("value"in t&&e.value===t.value||"class"in t&&e.class===t.class)&&(n=!0)})),n}:function(){return!0}},removeGridLines:function(t,e){var n=this,i=n.config,o=n.$T,r=n.getGridFilterToRemove(t),a=e?Sp.xgridLines:Sp.ygridLines,s=e?Sp.xgridLine:Sp.ygridLine;o(n.$el.main.select(".".concat(a)).selectAll(".".concat(s)).filter(r)).style("opacity","0").remove();var c="grid_".concat(e?"x":"y","_lines");i[c]=i[c].filter((function(t){return!r(t)}))}},Iv={initRegion:function(){var t=this.$el;t.region.main=t.main.insert("g",":first-child").attr("clip-path",this.state.clip.path).attr("class",$p.regions)},updateRegion:function(){var t=this,e=t.config,n=t.$el.region,i=t.$T;n.main||t.initRegion(),n.main.style("visibility",t.hasArcType()?"hidden":null);var o=n.main.selectAll(".".concat($p.region)).data(e.regions);i(o.exit()).style("opacity","0").remove();var r=o.enter().append("g");r.append("rect").style("fill-opacity","0"),n.list=r.merge(o).attr("class",t.classRegion.bind(t)),n.list.each((function(t){var e;cs(this).select("text").empty()&&(null===(e=t.label)||void 0===e?void 0:e.text)&&cs(this).append("text").style("opacity","0")}))},redrawRegion:function(t){var e=this,n=e.$el.region,i=e.$T,o=n.list.select("rect"),r=n.list.selectAll("text");return o=i(o,t).attr("x",e.regionX.bind(e)).attr("y",e.regionY.bind(e)).attr("width",e.regionWidth.bind(e)).attr("height",e.regionHeight.bind(e)),r=i(r,t).attr("transform",(function(t){var n,i=null!==(n=t.label)&&void 0!==n?n:{},o=i.x,r=void 0===o?0:o,a=i.y,s=void 0===a?0:a,c=i.rotated,l=void 0!==c&&c;return"translate(".concat(e.regionX.bind(e)(t)+r,", ").concat(e.regionY.bind(e)(t)+s,")").concat(l?" rotate(-90)":"")})).attr("text-anchor",(function(t){var e;return(null===(e=t.label)||void 0===e?void 0:e.rotated)?"end":null})).attr("dy","1em").style("fill",(function(t){var e,n;return null!==(n=null===(e=t.label)||void 0===e?void 0:e.color)&&void 0!==n?n:null})).text((function(t){var e;return null===(e=t.label)||void 0===e?void 0:e.text})),[o.style("fill-opacity",(function(t){return Cf(t.opacity)?t.opacity:null})).on("end",(function(){cs(this.parentNode).selectAll("rect:not([x])").remove()})),r.style("opacity",null)]},getRegionXY:function(t,e){var n=this,i=n.config,o=n.scale,r=i.axis_rotated,a="x"===t,s="start",c=0;return"y"===e.axis||"y2"===e.axis?(a||(s="end"),(a?r:!r)&&s in e&&(c=(0,o[e.axis])(e[s]))):(a?!r:r)&&s in e&&(c=(o.zoom||o.x)(n.axis.isTimeSeries()?cp.call(n,e[s]):e[s])),c},regionX:function(t){return this.getRegionXY("x",t)},regionY:function(t){return this.getRegionXY("y",t)},getRegionSize:function(t,e){var n=this,i=n.config,o=n.scale,r=n.state,a=i.axis_rotated,s="width"===t,c=n[s?"regionX":"regionY"](e),l="end",u=r[t];return"y"===e.axis||"y2"===e.axis?(s||(l="start"),(s?a:!a)&&l in e&&(u=(0,o[e.axis])(e[l]))):(s?!a:a)&&l in e&&(u=(o.zoom||o.x)(n.axis.isTimeSeries()?cp.call(n,e[l]):e[l])),u<c?0:u-c},regionWidth:function(t){return this.getRegionSize("width",t)},regionHeight:function(t){return this.getRegionSize("height",t)},isRegionOnX:function(t){return!t.axis||"x"===t.axis}},Lv={getAxisSize:function(t){var e=this,n=e.config.axis_rotated;return n&&"x"===t||!n&&/y2?/.test(t)?e.getAxisWidthByAxisId(t,!0):e.getHorizontalAxisHeight(t)},getAxisWidthByAxisId:function(t,e){var n,i,o=this;if(o.axis){var r=null===(n=o.axis)||void 0===n?void 0:n.getLabelPositionById(t),a=o.axis.getMaxTickSize(t,e).width,s=0===a?.5:0;return a+("fit"===(null===(i=o.config.padding)||void 0===i?void 0:i.mode)?r.isInner?10+s:10:r.isInner?20+s:40)}return 40},getHorizontalAxisHeight:function(t){var e,n,i=this,o=i.config,r=i.state,a=r.rotatedPadding,s=r.isLegendRight,c=r.isLegendInset,l=o.axis_rotated,u="fit"===(null===(e=o.padding)||void 0===e?void 0:e.mode),h=o["axis_".concat(t,"_inner")],d=o["axis_".concat(t,"_label")].text,f="fit"===(null===(n=o.padding)||void 0===n?void 0:n.mode)?h&&!d?"y"===t?1:0:20:30;if("x"===t&&!o.axis_x_show)return 8;if("x"===t&&$f(o.axis_x_height))return o.axis_x_height;if("y"===t&&!o.axis_y_show)return!o.legend_show||s||c?1:10;if("y2"===t&&!o.axis_y2_show)return u?0:a.top;var p=i.axis.getMaxTickSize(t);return p.height>13&&(f+=p.height-13),f+(i.axis.getLabelPositionById(t).isInner?0:10)+("y2"!==t||l?0:-10)},getEventRectWidth:function(){var t=this.config,e=this.axis,n=t.axis_x_inverted,i=e.x.tickInterval();return Math.max(0,n?Math.abs(i):i)},getAxisTickRotate:function(t){var e=this,n=e.axis,i=e.config,o=e.state,r=e.$el,a=i["axis_".concat(t,"_tick_rotate")];if("x"===t){var s=n.isCategorized()||n.isTimeSeries();if(i.axis_x_tick_fit&&s){var c=i.axis_x_tick_count,l=o.current.maxTickSize.x.ticks.length,u=0;if(c?u=c>l?l:c:l&&(u=l),u!==o.axis.x.tickCount){var h=e.data.targets;o.axis.x.padding=e.getXDomainPadding([e.getXDomainMinMax(h,"min"),e.getXDomainMinMax(h,"max")],u)}o.axis.x.tickCount=u}r.svg&&i.axis_x_tick_autorotate&&i.axis_x_tick_fit&&!i.axis_x_tick_multiline&&!i.axis_x_tick_culling&&s&&(a=e.needToRotateXAxisTickTexts()?i.axis_x_tick_rotate:0)}return a},needToRotateXAxisTickTexts:function(){var t=this,e=t.state,n=e.axis,i=e.current.width-t.getCurrentPaddingByDirection("left")-t.getCurrentPaddingByDirection("right"),o=n.x.tickCount+n.x.padding.left+n.x.padding.right;return t.axis.getMaxTickSize("x").width>(o?i/o:0)}},zv={axis_y_clipPath:!0,axis_y_show:!0,axis_y_type:"indexed",axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:!1,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_culling:!1,axis_y_tick_culling_max:5,axis_y_tick_culling_lines:!0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_rotate:0,axis_y_tick_count:void 0,axis_y_tick_show:!0,axis_y_tick_stepSize:null,axis_y_tick_text_show:!0,axis_y_tick_text_position:{x:0,y:0},axis_y_tick_time_value:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y_axes:[]},Bv={axis_y2_show:!1,axis_y2_type:"indexed",axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:!1,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_culling:!1,axis_y2_tick_culling_max:5,axis_y2_tick_culling_lines:!0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_rotate:0,axis_y2_tick_count:void 0,axis_y2_tick_show:!0,axis_y2_tick_stepSize:null,axis_y2_tick_text_show:!0,axis_y2_tick_text_position:{x:0,y:0},axis_y2_padding:{},axis_y2_default:void 0,axis_y2_axes:[]},Nv=Tf(Tf(Tf({axis_rotated:!1},{axis_x_clipPath:!0,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_culling_lines:!0,axis_x_tick_count:void 0,axis_x_tick_show:!0,axis_x_tick_text_show:!0,axis_x_tick_text_position:{x:0,y:0},axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_autorotate:!1,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_width:null,axis_x_tick_tooltip:!1,axis_x_max:void 0,axis_x_min:void 0,axis_x_inverted:!1,axis_x_padding:{},axis_x_height:void 0,axis_x_extent:void 0,axis_x_label:{},axis_x_axes:[]}),zv),Bv),Fv=[lv,uv,wv,vv,bv,xv,_v],Xv=[Cv,Ev,Av,$v,Rv,Iv,Lv],Vv=[{data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_axes:{},data_regions:{},data_stack_normalize:!1},Nv,{grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:void 0,grid_focus_edge:!1,grid_focus_show:!0,grid_focus_y:!1,grid_front:!1,grid_lines_front:!0}];var Uv={initBar:function(){var t=this,e=t.$el,n=t.config,i=t.state.clip;e.bar=e.main.select(".".concat(dp.chart)),e.bar=n.bar_front?e.bar.append("g"):e.bar.insert("g",":first-child"),e.bar.attr("class",vp.chartBars).call(this.setCssRule(!1,".".concat(vp.chartBars),["pointer-events:none"])),!1===n.clipPath&&(n.bar_radius||n.bar_radius_ratio)&&e.bar.attr("clip-path",i.pathXAxis.replace(/#[^)]*/,"#".concat(i.id)))},updateTargetsForBar:function(t){var e=this,n=e.config,i=e.$el,o=e.getChartClass("Bar"),r=e.getClass("bars",!0),a=e.classFocus.bind(e),s=n.interaction_enabled&&n.data_selection_isselectable;i.bar||e.initBar();var c=i.main.select(".".concat(vp.chartBars)).selectAll(".".concat(vp.chartBar)).data(t.filter((function(t){return t.values.some((function(t){return $f(t.value)||e.isBarRangeType(t)}))}))).attr("class",(function(t){return o(t)+a(t)}));c.enter().append("g").attr("class",o).style("opacity","0").style("pointer-events",e.getStylePropValue("none")).append("g").attr("class",r).style("cursor",(function(t){var n;return(null===(n=null==s?void 0:s.bind)||void 0===n?void 0:n.call(s,e.api)(t))?"pointer":null})).call(e.setCssRule(!0," .".concat(vp.bar),["fill"],e.color))},updateBar:function(t,e){void 0===e&&(e=!1);var n=this,i=n.config,o=n.$el,r=n.$T,a=e?o.subchart:o,s=n.getClass("bar",!0),c=n.initialOpacity.bind(n);i.bar_linearGradient&&n.updateLinearGradient();var l=a.main.selectAll(".".concat(vp.bars)).selectAll(".".concat(vp.bar)).data(n.labelishData.bind(n));r(l.exit(),t).style("opacity","0").remove(),a.bar=l.enter().append("path").attr("class",s).style("fill",n.updateBarColor.bind(n)).merge(l).style("opacity",c),n.setRatioForGroupedData(a.bar.data())},updateBarColor:function(t){var e=this,n=e.getStylePropValue(e.color);return e.config.bar_linearGradient?e.getGradienColortUrl(t.id):n?n(t):null},redrawBar:function(t,e,n){void 0===n&&(n=!1);var i=this,o=(n?i.$el.subchart:i.$el).bar;return[i.$T(o,e,Gf()).attr("d",(function(e){return($f(e.value)||i.isBarRangeType(e))&&t(e)})).style("fill",i.updateBarColor.bind(i)).style("opacity",null)]},generateDrawBar:function(t,e){var n=this,i=n.config,o=n.generateGetBarPoints(t,e),r=i.axis_rotated,a=i.bar_radius,s=i.bar_radius_ratio,c=$f(a)&&a>0?function(){return a}:$f(s)?function(t){return t*s}:null;return function(t,e){var a=o(t,e),s=+r,l=+!s,u=t.value<0,h=i["axis_".concat(n.axis.getId(t.id),"_inverted")],d=!h&&u||h&&!u,f=["",""],p=0,g=n.isGrouped(t.id),v=!(!c||!g)&&n.isStackingRadiusData(t);if(c){var b=r?l:s,m=a[2][b]-a[0][b];p=!g||v?c(m):0;var y="a".concat(p,",").concat(p," ").concat(d?"1 0 0":"0 0 1"," ");f[+!r]="".concat(y).concat(p,",").concat(p),f[+r]="".concat(y).concat([-p,p][r?"sort":"reverse"]()),d&&f.reverse()}var x=r?"H".concat(a[1][s]+(d?p:-p)," ").concat(f[0],"V").concat(a[2][l]-p," ").concat(f[1],"H").concat(a[3][s]):"V".concat(a[1][l]+(d?-p:p)," ").concat(f[0],"H").concat(a[2][s]-p," ").concat(f[1],"V").concat(a[3][l]);return"M".concat(a[0][s],",").concat(a[0][l]).concat(x,"z")}},isStackingRadiusData:function(t){var e=this,n=e.$el,i=e.config,o=e.data,r=e.state,a=t.id,s=t.index,c=t.value;if(r.hiddenTargetIds.indexOf(a)>-1){var l=n.bar.filter((function(t){return t.id===a&&t.value===c}));return!l.empty()&&/a\d+/i.test(l.attr("d"))}var u=i.data_groups.find((function(t){return t.indexOf(a)>-1})),h=e.orderTargets(e.filterTargetsToShow(o.targets.filter(e.isBarType,e))).filter((function(t){return u.indexOf(t.id)>-1})),d=h.map((function(t){return t.values.filter((function(t){return t.index===s&&($f(c)&&c>0?t.value>0:t.value<0)}))[0]})).filter(Boolean).map((function(t){return t.id}));return 0!==c&&d.indexOf(a)===d.length-1},generateGetBarPoints:function(t,e){var n=this,i=n.config,o=e?n.axis.subX:n.axis.x,r=n.getIndicesMax(t)+1,a=n.getBarW("bar",o,r),s=n.getShapeX(a,t,!!e),c=n.getShapeY(!!e),l=n.getShapeOffset(n.isBarType,t,!!e),u=n.getYScaleById.bind(n);return function(t,o){var r=t.id,h=u.call(n,r,e)(n.getShapeYMin(r)),d=l(t,o)||h,f=$f(a)?a:a[t.id]||a._$width,p=i["axis_".concat(n.axis.getId(r),"_inverted")],g=t.value,v=s(t),b=c(t);i.axis_rotated&&!p&&(g>0&&b<h||g<0&&h<b)&&(b=h),n.isBarRangeType(t)||(b-=h-d);var m=v+f;return[[v,d],[v,b],[m,b],[m,d]]}}},Hv={initBubble:function(){var t=this.config;this.hasType("bubble")&&(t.point_show=!0,t.point_type="circle")},getBaseLength:function(){var t=this,e=t.state,n=e.width,i=e.height,o=Gp,r=t.cache.get(o);return r||t.cache.add(o,r=rp("min",[n,i])),r},getBubbleR:function(t){var e=this,n=e.config.bubble_maxR;Sf(n)?n=n.bind(e.api)(t):$f(n)||(n=e.getBaseLength()/(2*e.getMaxDataCount())+12);var i=rp("max",e.getMinMaxData().max.map((function(t){return e.isBubbleZType(t)?e.getBubbleZData(t.value,"y"):Bf(t.value)?t.value.mid:t.value}))),o=n*n*Math.PI,r=(e.isBubbleZType(t)?e.getBubbleZData(t.value,"z"):t.value)*(o/i);return Math.sqrt(r/Math.PI)},getBubbleZData:function(t,e){return Bf(t)?t[e]:t["y"===e?0:1]}},jv=function(){return Gf()},Yv={hasValidPointType:function(t){return/^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(t||this.config.point_type)},hasValidPointDrawMethods:function(t){var e=t||this.config.point_type;return Rf(e)&&Sf(e.create)&&Sf(e.update)},initialOpacityForCircle:function(t){var e=this.config,n=this.state.withoutFadeIn,i=e.point_opacity;return Ef(i)&&(i=null!==this.getBaseValue(t)&&n[t.id]?this.opacityForCircle(t):"0"),i},opacityForCircle:function(t){var e,n=this.config,i=n.point_opacity;return Ef(i)&&(i=n.point_show&&!(null===(e=this.isPointFocusOnly)||void 0===e?void 0:e.call(this))?null:"0",i=Cf(this.getBaseValue(t))?this.isBubbleType(t)||this.isScatterType(t)?"0.5":i:"0"),i},initCircle:function(){var t=this,e=t.$el.main;t.point=t.generatePoint(),(t.hasType("bubble")||t.hasType("scatter"))&&e.select(".".concat(mp.chartCircles)).empty()&&e.select(".".concat(dp.chart)).append("g").attr("class",mp.chartCircles)},updateTargetForCircle:function(t,e){var n=this,i=this,o=i.config,r=i.data,a=i.$el,s=o.interaction_enabled&&o.data_selection_enabled,c=s&&o.data_selection_isselectable,l=i.getClass("circles",!0);if(o.point_show){!a.circle&&i.initCircle();var u=t,h=e;if(!u){u=r.targets.filter((function(t){return n.isScatterType(t)||n.isBubbleType(t)}));var d=a.main.select(".".concat(mp.chartCircles)).style("pointer-events","none").selectAll(".".concat(mp.circles)).data(u);d.exit().remove(),h=d.enter()}s&&h.append("g").attr("class",(function(t){return i.generateClass(Ep.selectedCircles,t.id)})),h.append("g").attr("class",l).call((function(t){i.setCssRule(!0,".".concat(mp.circles),["cursor:pointer"],c)(t),i.setCssRule(!0," .".concat(mp.circle),["fill","stroke"],i.color)(t)})).style("opacity",(function(){return cs(this.parentNode).attr("class").indexOf(mp.chartCircles)>-1?"0":null})),s&&u.forEach((function(t){a.main.selectAll(".".concat(Ep.selectedCircles).concat(i.getTargetSelectorSuffix(t.id))).selectAll("".concat(Ep.selectedCircle)).each((function(e){e.value=t.values[e.index].value}))}))}},updateCircle:function(t){void 0===t&&(t=!1);var e=this,n=e.config,i=e.state,o=e.$el,r=e.isPointFocusOnly(),a=t?o.subchart:o;if(n.point_show&&!i.toggling){n.point_radialGradient&&e.updateLinearGradient();var s=a.main.selectAll(".".concat(mp.circles)).selectAll(".".concat(mp.circle)).data((function(t){return e.isLineType(t)&&e.shouldDrawPointsForLine(t)||e.isBubbleType(t)||e.isRadarType(t)||e.isScatterType(t)?r?[t.values[0]]:t.values:[]}));s.exit().remove(),s.enter().filter(Boolean).append(e.point("create",this,e.pointR.bind(e),e.updateCircleColor.bind(e))),a.circle=a.main.selectAll(".".concat(mp.circles," .").concat(mp.circle)).style("stroke",e.getStylePropValue(e.color)).style("opacity",e.initialOpacityForCircle.bind(e))}},updateCircleColor:function(t){var e=this,n=e.getStylePropValue(e.color);return e.config.point_radialGradient?e.getGradienColortUrl(t.id):n?n(t):null},redrawCircle:function(t,e,n,i,o){void 0===o&&(o=!1);var r=this,a=r.state.rendered,s=r.$el,c=r.$T,l=o?s.subchart:s,u=l.main.selectAll(".".concat(Ep.selectedCircle));if(!r.config.point_show)return[];var h=r.point("update",r,t,e,r.updateCircleColor.bind(r),n,i,u),d=r.isCirclePoint()?"c":"",f=Gf(),p=r.opacityForCircle.bind(r),g=[];return l.circle.each((function(t){var e=h.bind(this)(t);e=c(e,n||!a,f).style("opacity",p),g.push(e)})),[g,c(u,n).attr("".concat(d,"x"),t).attr("".concat(d,"y"),e)]},showCircleFocus:function(t){var e=this,n=e.state,i=n.hasRadar,o=n.resizing,r=n.toggling,a=n.transiting,s=e.$el.circle;if(!1===a&&s&&e.isPointFocusOnly()){var c=(i?e.radarCircleX:e.circleX).bind(e),l=(i?e.radarCircleY:e.circleY).bind(e),u=r||Ef(t),h=e.point("update",e,c,l,e.getStylePropValue(e.color),!o&&u);t&&(s=s.filter((function(e){var n,i=null===(n=t.filter)||void 0===n?void 0:n.call(t,(function(t){return t.id===e.id}));return!!i.length&&cs(this).datum(i[0])}))),s.attr("class",this.updatePointClass.bind(this)).style("opacity",null).each((function(t){var n=t.id,i=t.index,o=t.value,r="hidden";Cf(o)&&(h.bind(this)(t),e.expandCircles(i,n),r=""),this.style.visibility=r}))}},hideCircleFocus:function(){var t=this,e=t.$el.circle;t.isPointFocusOnly()&&e&&(t.unexpandCircles(),e.style("visibility","hidden"))},circleX:function(t){return this.xx(t)},updateCircleY:function(t){void 0===t&&(t=!1);var e=this,n=e.generateGetLinePoints(e.getShapeIndices(e.isLineType),t);return function(i,o){var r=i.id;return e.isGrouped(r)?n(i,o)[0][1]:e.getYScaleById(r,t)(e.getBaseValue(i))}},expandCircles:function(t,e,n){var i=this,o=i.pointExpandedR.bind(i);n&&i.unexpandCircles();var r=i.getShapeByIndex("circle",t,e).classed(dp.EXPANDED,!0),a=o(r)/i.config.point_r,s=1-a;i.isCirclePoint()?r.attr("r",o):r.each((function(){var t=cs(this);if("circle"===this.tagName)t.attr("r",o);else{var e=this.getBBox(),n=e.width,i=e.height,r=s*(+t.attr("x")+n/2),c=s*(+t.attr("y")+i/2);t.attr("transform","translate(".concat(r," ").concat(c,") scale(").concat(a,")"))}}))},unexpandCircles:function(t){var e=this,n=e.pointR.bind(e),i=e.getShapeByIndex("circle",t).filter((function(){return cs(this).classed(dp.EXPANDED)})).classed(dp.EXPANDED,!1);if(i.attr("r",n),!e.isCirclePoint()){var o=n(i)/e.config.point_r;i.attr("transform",1!==o?"scale(".concat(o,")"):null)}},pointR:function(t){var e=this,n=e.config.point_r,i=n;return e.isBubbleType(t)?i=e.getBubbleR(t):Sf(n)&&(i=n.bind(e.api)(t)),t.r=i,i},pointExpandedR:function(t){var e=this,n=e.config,i=e.isBubbleType(t)?1.15:1.75;return n.point_focus_expand_enabled?n.point_focus_expand_r||e.pointR(t)*i:e.pointR(t)},pointSelectR:function(t){var e=this.config.point_select_r;return Sf(e)?e(t):e||4*this.pointR(t)},isPointFocusOnly:function(){var t=this;return t.config.point_focus_only&&!t.hasType("bubble")&&!t.hasType("scatter")&&!t.hasArcType(null,["radar"])},isWithinCircle:function(t,e){var n=this.config,i=jf(this.state.event,t),o=cs(t),r=this.isCirclePoint(t)?"c":"",a="radius"===n.point_sensitivity?t.getAttribute("r"):n.point_sensitivity,s=+o.attr("".concat(r,"x")),c=+o.attr("".concat(r,"y"));if(!s&&!c&&1===t.nodeType){var l=qf(t);s=l.x,c=l.y}return Math.sqrt(Math.pow(s-i[0],2)+Math.pow(c-i[1],2))<(e||a)},getPointSensitivity:function(t){var e=this.config.point_sensitivity;return Sf(e)?e=e.call(this.api,t):"radius"===e&&(e=t.r),e},insertPointInfoDefs:function(t,e){var n,i=function(t,e){for(var n,i=t.attributes,o=0;n=i[o];o++)n=n.name,e.setAttribute(n,t.getAttribute(n))},o=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement,r=vf.createElementNS(pa.svg,o.nodeName.toLowerCase());if(r.id=e,r.style.fill="inherit",r.style.stroke="inherit",i(o,r),null===(n=o.childNodes)||void 0===n?void 0:n.length){var a=cs(r);"innerHTML"in r?a.html(o.innerHTML):Jf(o.childNodes).forEach((function(t){i(t,a.append(t.tagName).node())}))}this.$el.defs.node().appendChild(r)},pointFromDefs:function(t){return this.$el.defs.select("#".concat(t))},updatePointClass:function(t){var e=this,n=e.$el.circle,i=!1;return(Bf(t)||n)&&(i=!0===t?n.each((function(t){var n=e.getClass("circle",!0)(t);this.getAttribute("class").indexOf(dp.EXPANDED)>-1&&(n+=" ".concat(dp.EXPANDED)),this.setAttribute("class",n)})):e.getClass("circle",!0)(t)),i},generateGetLinePoints:function(t,e){var n=this,i=n.config,o=n.getShapeX(0,t,e),r=n.getShapeY(e),a=n.getShapeOffset(n.isLineType,t,e),s=n.getYScaleById.bind(n);return function(t,c){var l=s.call(n,t.id,e)(n.getShapeYMin(t.id)),u=a(t,c)||l,h=o(t),d=r(t);i.axis_rotated&&(t.value>0&&d<l||t.value<0&&l<d)&&(d=l);var f=[h,d-(l-u)];return[f,f,f,f]}},generatePoint:function(){var t=this,e=t.config,n=t.state.datetimeId,i=[],o=Lf(e.point_pattern)?e.point_pattern:[e.point_type];return function(e,r){for(var a=[],s=2;s<arguments.length;s++)a[s-2]=arguments[s];return function(s){var c,l=t.getTargetSelectorSuffix(s.id||(null===(c=s.data)||void 0===c?void 0:c.id)||s),u=cs(this);i.indexOf(l)<0&&i.push(l);var h=o[i.indexOf(l)%o.length];if(t.hasValidPointType(h))h=t[h];else if(!t.hasValidPointDrawMethods(h)){var d="".concat(n,"-point").concat(l);if(t.pointFromDefs(d).size()<1&&t.insertPointInfoDefs(h,d),"create"===e)return t.custom.create.bind(r).apply(void 0,kf([u,d],a,!1));if("update"===e)return t.custom.update.bind(r).apply(void 0,kf([u],a,!1))}return h[e].bind(r).apply(void 0,kf([u],a,!1))}}},custom:{create:function(t,e,n){return t.append("use").attr("xlink:href","#".concat(e)).attr("class",this.updatePointClass.bind(this)).style("fill",n).node()},update:function(t,e,n,i,o,r,a){var s=t.node().getBBox(),c=s.width,l=s.height,u=function(t){return Cf(t.value)?e(t)-c/2:0},h=t;return o&&(r&&h.attr("x",u),h=this.$T(h,o,jv()),a&&this.$T(a,o,jv())),h.attr("x",u).attr("y",(function(t){return Cf(t.value)?n(t)-l/2:0})).style("fill",i)}},circle:{create:function(t,e,n){return t.append("circle").attr("class",this.updatePointClass.bind(this)).attr("r",e).style("fill",n).node()},update:function(t,e,n,i,o,r,a){var s=this,c=t;return s.hasType("bubble")&&c.attr("r",s.pointR.bind(s)),o&&(r&&c.attr("cx",e),c.attr("cx")&&(c=s.$T(c,o,jv())),a&&s.$T(c,o,jv())),c.attr("cx",e).attr("cy",n).style("fill",i)}},rectangle:{create:function(t,e,n){var i=function(t){return 2*e(t)};return t.append("rect").attr("class",this.updatePointClass.bind(this)).attr("width",i).attr("height",i).style("fill",n).node()},update:function(t,e,n,i,o,r,a){var s=this,c=s.config.point_r,l=function(t){return e(t)-c},u=t;return o&&(r&&u.attr("x",l),u=s.$T(u,o,jv()),a&&s.$T(a,o,jv())),u.attr("x",l).attr("y",(function(t){return n(t)-c})).style("fill",i)}}};var qv={point_show:!0,point_r:2.5,point_radialGradient:!1,point_sensitivity:10,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_focus_only:!1,point_opacity:void 0,point_pattern:[],point_select_r:void 0,point_type:"circle"},Gv={bar_front:!1,bar_indices_removeNull:!1,bar_label_threshold:0,bar_linearGradient:!1,bar_overlap:!1,bar_padding:0,bar_radius:void 0,bar_radius_ratio:void 0,bar_sensitivity:2,bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0},Wv={bubble_maxR:35,bubble_zerobased:!1};Math.PI;function Zv(t,e){Kf(Hg.prototype,Xv.concat(t)),Kf(rv.prototype,Fv),qp.setOptions(Vv.concat(e||[]))}var Kv=function(){return Zv([Uv],Gv),(Kv=function(){return xf.BAR})()},Qv=function(){return Zv([Yv,Hv],[Wv,qv]),(Qv=function(){return xf.BUBBLE})()};var Jv=function(t){var e,n,i=this.internal,o=i.axis,r=i.brush,a=i.config,s=i.scale,c=s.x,l=s.subX,u=i.state;a.subchart_show&&(n=t,Array.isArray(n)?(o.isTimeSeries()&&(n=n.map((function(t){return cp.bind(i)(t)}))),i.withinRange(n,i.getZoomDomain("subX",!0),i.getZoomDomain("subX"))&&(u.domain=n,r.move(r.getSelection(),n.map(l)))):n=null!==(e=u.domain)&&void 0!==e?e:c.orgDomain());return n};Kf(Jv,{show:function(){var t,e,n=this.internal,i=n.$el.subchart,o=n.config,r=o.subchart_show;if(!r){n.unbindZoomEvent(),o.subchart_show=!r,!i.main&&n.initSubchart();var a=i.main.selectAll(".".concat(dp.target));n.data.targets.length!==a.size()&&(n.updateSizes(),n.updateTargetsForSubchart(n.data.targets),a=null===(t=i.main)||void 0===t?void 0:t.selectAll(".".concat(dp.target))),null==a||a.style("opacity",null),null===(e=i.main)||void 0===e||e.style("display",null),this.resize()}},hide:function(){var t=this.internal,e=t.$el.subchart.main,n=t.config;n.subchart_show&&"none"!==(null==e?void 0:e.style("display"))&&(n.subchart_show=!1,e.style("display","none"),this.resize())},toggle:function(){var t=this.internal.config;this.subchart[t.subchart_show?"hide":"show"]()},reset:function(){var t=this.internal.brush;t.clear(t.getSelection())}});var tb=function(t){var e,n,i,o=this.internal,r=o.$el,a=o.axis,s=o.config,c=o.org,l=o.scale,u=o.state,h=s.axis_rotated,d=a.isCategorized();if(s.zoom_enabled)if(i=t,Array.isArray(i)){if(a.isTimeSeries()&&(i=i.map((function(t){return cp.bind(o)(t)}))),o.withinRange(i,o.getZoomDomain("zoom",!0),o.getZoomDomain("zoom"))){if(u.domain=i,d&&(i=i.map((function(t,e){return Number(t)+(0===e?0:1)}))),o.api.tooltip.hide(),s.subchart_show){var f=l.zoom||l.x;o.brush.getSelection().call(o.brush.move,i.map(f))}else{var p=[-(f=d?l.x.orgScale():c.xScale||l.x)(i[0]),0],g=(e=rf.scale(f.range()[1]/(f(i[1])-f(i[0])))).translate.apply(e,h?p.reverse():p);r.eventRect.call(o.zoom.transform,g)}o.setZoomResetButton()}}else i=o.zoom.getDomain();return null!==(n=u.domain)&&void 0!==n?n:i};Kf(tb,{enable:function(t){var e=this.internal,n=e.config;/^(drag|wheel)$/.test(t)&&(n.zoom_type=t),n.zoom_enabled=!!t,e.zoom?!1===t&&e.bindZoomEvent(!1):(e.initZoom(),e.bindZoomEvent()),e.updateAndRedraw()},max:function(t){var e=this.internal,n=e.config,i=e.org.xDomain;return(0===t||t)&&(n.zoom_x_max=rp("max",[i[1],t])),n.zoom_x_max},min:function(t){var e=this.internal,n=e.config,i=e.org.xDomain;return(0===t||t)&&(n.zoom_x_min=rp("min",[i[0],t])),n.zoom_x_min},range:function(t){var e=this.zoom;if(Bf(t)){var n=t.min,i=t.max;Mf(n)&&e.min(n),Mf(i)&&e.max(i)}return{min:e.min(),max:e.max()}}});var eb={zoom:tb,unzoom:function(){var t=this.internal,e=t.config,n=t.$el,i=n.eventRect,o=n.zoomResetBtn,r=t.state;t.scale.zoom&&(e.subchart_show?t.brush.getSelection().call(t.brush.move,null):t.zoom.updateTransformScale(rf),t.updateZoom(!0),null==o||o.style("display","none"),af(i.node())!==rf&&t.zoom.transform(i,rf),r.domain=void 0)}},nb={drag:function(t){var e=this,n=e.config,i=e.state,o=e.$el.main,r=n.data_selection_grouped,a=n.interaction_enabled&&n.data_selection_isselectable;if(!e.hasArcType()&&n.data_selection_enabled&&(!n.zoom_enabled||e.zoom.altDomain)&&n.data_selection_multiple){var s=i.dragStart||[0,0],c=s[0],l=s[1],u=t[0],h=t[1],d=Math.min(c,u),f=Math.max(c,u),p=r?i.margin.top:Math.min(l,h),g=r?i.height:Math.max(l,h);o.select(".".concat(xp.dragarea)).attr("x",d).attr("y",p).attr("width",f-d).attr("height",g-p),o.selectAll(".".concat(Mp.shapes)).selectAll(".".concat(Mp.shape)).filter((function(t){return null==a?void 0:a.bind(e.api)(t)})).each((function(t,n){var i,o=cs(this),r=o.classed(Ep.SELECTED),a=o.classed(xp.INCLUDED),s=!1;if(o.classed(mp.circle)){var c=1*+o.attr("cx"),l=1*+o.attr("cy");i=e.togglePoint,s=d<c&&c<f&&p<l&&l<g}else{if(!o.classed(vp.bar))return;var u=function(t){var e=t.getBoundingClientRect(),n=e.width,i=e.height,o=Hf(t);return{x:o[0].x,y:Math.min(o[0].y,o[1].y),width:n,height:i}}(this),h=(c=u.x,l=u.y,u.width),v=u.height;i=e.togglePath,s=!(f<c||c+h<d||g<l||l+v<p)}s^a&&(o.classed(xp.INCLUDED,!a),o.classed(Ep.SELECTED,!r),i.call(e,!r,o,t,n))}))}},dragstart:function(t){var e=this,n=e.config,i=e.state,o=e.$el.main;!e.hasArcType()&&n.data_selection_enabled&&(i.dragStart=t,o.select(".".concat(dp.chart)).append("rect").attr("class",xp.dragarea).style("opacity","0.1"),e.setDragStatus(!0))},dragend:function(){var t=this,e=t.config,n=t.$el.main,i=t.$T;!t.hasArcType()&&e.data_selection_enabled&&(i(n.select(".".concat(xp.dragarea))).style("opacity","0").remove(),n.selectAll(".".concat(Mp.shape)).classed(xp.INCLUDED,!1),t.setDragStatus(!1))}},ib=(Tf(Tf({},nb),{selectPoint:function(t,e,n){var i=this,o=i.config,r=i.$el.main,a=i.$T,s=o.axis_rotated,c=(s?i.circleY:i.circleX).bind(i),l=(s?i.circleX:i.circleY).bind(i),u=i.pointSelectR.bind(i);Ff(o.data_onselected,i.api,e,t.node()),a(r.select(".".concat(Ep.selectedCircles).concat(i.getTargetSelectorSuffix(e.id))).selectAll(".".concat(Ep.selectedCircle,"-").concat(n)).data([e]).enter().append("circle").attr("class",(function(){return i.generateClass(Ep.selectedCircle,n)})).attr("cx",c).attr("cy",l).attr("stroke",i.color).attr("r",(function(t){return 1.4*i.pointSelectR(t)}))).attr("r",u)},unselectPoint:function(t,e,n){var i=this,o=i.config,r=i.$el.main,a=i.$T;Ff(o.data_onunselected,i.api,e,null==t?void 0:t.node()),a(r.select(".".concat(Ep.selectedCircles).concat(i.getTargetSelectorSuffix(e.id))).selectAll(".".concat(Ep.selectedCircle,"-").concat(n))).attr("r",0).remove()},togglePoint:function(t,e,n,i){this["".concat(t?"":"un","selectPoint")](e,n,i)},selectPath:function(t,e){var n=this.config;Ff(n.data_onselected,this.api,e,t.node()),n.interaction_brighten&&t.style("filter","brightness(1.25)")},unselectPath:function(t,e){var n=this.config;Ff(n.data_onunselected,this.api,e,t.node()),n.interaction_brighten&&t.style("filter",null)},togglePath:function(t,e,n,i){this["".concat(t?"":"un","selectPath")](e,n,i)},getToggle:function(t,e){var n=this;return"path"===t.nodeName?n.togglePath:n.isStepType(e)?function(){}:n.togglePoint},toggleShape:function(t,e,n){var i,o=this,r=o.config,a=o.$el.main;if(r.data_selection_enabled&&r.data_selection_isselectable.bind(o.api)(e)){var s,c=cs(t),l=c.classed(Ep.SELECTED),u=o.getToggle(t,e).bind(o);if(!r.data_selection_multiple){var h=null===(i=o.isPointFocusOnly)||void 0===i?void 0:i.call(o),d=".".concat(h?Ep.selectedCircles:Mp.shapes);r.data_selection_grouped&&(d+=o.getTargetSelectorSuffix(e.id)),a.selectAll(d).selectAll(h?".".concat(Ep.selectedCircle):".".concat(Mp.shape,".").concat(Ep.SELECTED)).classed(Ep.SELECTED,!1).each((function(t){var e=cs(this);s=e,u(!1,e,t,t.index)}))}s&&s.node()===c.node()||(c.classed(Ep.SELECTED,!l),u(!l,c,e,n))}}}),{initZoom:function(){var t=this;t.scale.zoom=null,t.generateZoom(),t.initZoomBehaviour()},bindZoomEvent:function(t){void 0===t&&(t=!0);var e=this,n=e.config;n.zoom_enabled&&t?!n.subchart_show&&e.bindZoomOnEventRect():!1===t&&(e.api.unzoom(),e.unbindZoomEvent())},generateZoom:function(){var t=this,e=t.config,n=t.org,i=t.scale,o=function(){var t,e,n,i=lf,o=uf,r=pf,a=df,s=ff,c=[0,1/0],l=[[-1/0,-1/0],[1/0,1/0]],u=250,h=tf,d=gs("start","zoom","end"),f=500,p=150,g=0,v=10;function b(t){t.property("__zoom",hf).on("wheel.zoom",k,{passive:!1}).on("mousedown.zoom",C).on("dblclick.zoom",S).filter(s).on("touchstart.zoom",A).on("touchmove.zoom",$).on("touchend.zoom touchcancel.zoom",E).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function m(t,e){return(e=Math.max(c[0],Math.min(c[1],e)))===t.k?t:new of(e,t.x,t.y)}function y(t,e,n){var i=e[0]-n[0]*t.k,o=e[1]-n[1]*t.k;return i===t.x&&o===t.y?t:new of(t.k,i,o)}function x(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function _(t,e,n,i){t.on("start.zoom",(function(){w(this,arguments).event(i).start()})).on("interrupt.zoom end.zoom",(function(){w(this,arguments).event(i).end()})).tween("zoom",(function(){var t=this,r=arguments,a=w(t,r).event(i),s=o.apply(t,r),c=null==n?x(s):"function"==typeof n?n.apply(t,r):n,l=Math.max(s[1][0]-s[0][0],s[1][1]-s[0][1]),u=t.__zoom,d="function"==typeof e?e.apply(t,r):e,f=h(u.invert(c).concat(l/u.k),d.invert(c).concat(l/d.k));return function(t){if(1===t)t=d;else{var e=f(t),n=l/e[2];t=new of(n,c[0]-e[0]*n,c[1]-e[1]*n)}a.zoom(null,t)}}))}function w(t,e,n){return!n&&t.__zooming||new T(t,e)}function T(t,e){this.that=t,this.args=e,this.active=0,this.sourceEvent=null,this.extent=o.apply(t,e),this.taps=0}function k(t,...e){if(i.apply(this,arguments)){var n=w(this,e).event(t),o=this.__zoom,s=Math.max(c[0],Math.min(c[1],o.k*Math.pow(2,a.apply(this,arguments)))),u=Gr(t);if(n.wheel)n.mouse[0][0]===u[0]&&n.mouse[0][1]===u[1]||(n.mouse[1]=o.invert(n.mouse[0]=u)),clearTimeout(n.wheel);else{if(o.k===s)return;n.mouse=[u,o.invert(u)],Zc(this),n.start()}cf(t),n.wheel=setTimeout((function(){n.wheel=null,n.end()}),p),n.zoom("mouse",r(y(m(o,s),n.mouse[0],n.mouse[1]),n.extent,l))}}function C(t,...e){if(!n&&i.apply(this,arguments)){var o=t.currentTarget,a=w(this,e,!0).event(t),s=cs(t.view).on("mousemove.zoom",(function(t){if(cf(t),!a.moved){var e=t.clientX-u,n=t.clientY-h;a.moved=e*e+n*n>g}a.event(t).zoom("mouse",r(y(a.that.__zoom,a.mouse[0]=Gr(t,o),a.mouse[1]),a.extent,l))}),!0).on("mouseup.zoom",(function(t){s.on("mousemove.zoom mouseup.zoom",null),_s(t.view,a.moved),cf(t),a.event(t).end()}),!0),c=Gr(t,o),u=t.clientX,h=t.clientY;xs(t.view),sf(t),a.mouse=[c,this.__zoom.invert(c)],Zc(this),a.start()}}function S(t,...e){if(i.apply(this,arguments)){var n=this.__zoom,a=Gr(t.changedTouches?t.changedTouches[0]:t,this),s=n.invert(a),c=n.k*(t.shiftKey?.5:2),h=r(y(m(n,c),a,s),o.apply(this,e),l);cf(t),u>0?cs(this).transition().duration(u).call(_,h,a,t):cs(this).call(b.transform,h,a,t)}}function A(n,...o){if(i.apply(this,arguments)){var r,a,s,c,l=n.touches,u=l.length,h=w(this,o,n.changedTouches.length===u).event(n);for(sf(n),a=0;a<u;++a)c=[c=Gr(s=l[a],this),this.__zoom.invert(c),s.identifier],h.touch0?h.touch1||h.touch0[2]===c[2]||(h.touch1=c,h.taps=0):(h.touch0=c,r=!0,h.taps=1+!!t);t&&(t=clearTimeout(t)),r&&(h.taps<2&&(e=c[0],t=setTimeout((function(){t=null}),f)),Zc(this),h.start())}}function $(t,...e){if(this.__zooming){var n,i,o,a,s=w(this,e).event(t),c=t.changedTouches,u=c.length;for(cf(t),n=0;n<u;++n)o=Gr(i=c[n],this),s.touch0&&s.touch0[2]===i.identifier?s.touch0[0]=o:s.touch1&&s.touch1[2]===i.identifier&&(s.touch1[0]=o);if(i=s.that.__zoom,s.touch1){var h=s.touch0[0],d=s.touch0[1],f=s.touch1[0],p=s.touch1[1],g=(g=f[0]-h[0])*g+(g=f[1]-h[1])*g,v=(v=p[0]-d[0])*v+(v=p[1]-d[1])*v;i=m(i,Math.sqrt(g/v)),o=[(h[0]+f[0])/2,(h[1]+f[1])/2],a=[(d[0]+p[0])/2,(d[1]+p[1])/2]}else{if(!s.touch0)return;o=s.touch0[0],a=s.touch0[1]}s.zoom("touch",r(y(i,o,a),s.extent,l))}}function E(t,...i){if(this.__zooming){var o,r,a=w(this,i).event(t),s=t.changedTouches,c=s.length;for(sf(t),n&&clearTimeout(n),n=setTimeout((function(){n=null}),f),o=0;o<c;++o)r=s[o],a.touch0&&a.touch0[2]===r.identifier?delete a.touch0:a.touch1&&a.touch1[2]===r.identifier&&delete a.touch1;if(a.touch1&&!a.touch0&&(a.touch0=a.touch1,delete a.touch1),a.touch0)a.touch0[1]=this.__zoom.invert(a.touch0[0]);else if(a.end(),2===a.taps&&(r=Gr(r,this),Math.hypot(e[0]-r[0],e[1]-r[1])<v)){var l=cs(this).on("dblclick.zoom");l&&l.apply(this,arguments)}}}return b.transform=function(t,e,n,i){var o=t.selection?t.selection():t;o.property("__zoom",hf),t!==o?_(t,e,n,i):o.interrupt().each((function(){w(this,arguments).event(i).start().zoom(null,"function"==typeof e?e.apply(this,arguments):e).end()}))},b.scaleBy=function(t,e,n,i){b.scaleTo(t,(function(){return this.__zoom.k*("function"==typeof e?e.apply(this,arguments):e)}),n,i)},b.scaleTo=function(t,e,n,i){b.transform(t,(function(){var t=o.apply(this,arguments),i=this.__zoom,a=null==n?x(t):"function"==typeof n?n.apply(this,arguments):n,s=i.invert(a),c="function"==typeof e?e.apply(this,arguments):e;return r(y(m(i,c),a,s),t,l)}),n,i)},b.translateBy=function(t,e,n,i){b.transform(t,(function(){return r(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof n?n.apply(this,arguments):n),o.apply(this,arguments),l)}),null,i)},b.translateTo=function(t,e,n,i,a){b.transform(t,(function(){var t=o.apply(this,arguments),a=this.__zoom,s=null==i?x(t):"function"==typeof i?i.apply(this,arguments):i;return r(rf.translate(s[0],s[1]).scale(a.k).translate("function"==typeof e?-e.apply(this,arguments):-e,"function"==typeof n?-n.apply(this,arguments):-n),t,l)}),i,a)},T.prototype={event:function(t){return t&&(this.sourceEvent=t),this},start:function(){return 1==++this.active&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,e){return this.mouse&&"mouse"!==t&&(this.mouse[1]=e.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=e.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=e.invert(this.touch1[0])),this.that.__zoom=e,this.emit("zoom"),this},end:function(){return 0==--this.active&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){var e=cs(this.that).datum();d.call(t,this.that,new nf(t,{sourceEvent:this.sourceEvent,target:b,type:t,transform:this.that.__zoom,dispatch:d}),e)}},b.wheelDelta=function(t){return arguments.length?(a="function"==typeof t?t:ef(+t),b):a},b.filter=function(t){return arguments.length?(i="function"==typeof t?t:ef(!!t),b):i},b.touchable=function(t){return arguments.length?(s="function"==typeof t?t:ef(!!t),b):s},b.extent=function(t){return arguments.length?(o="function"==typeof t?t:ef([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),b):o},b.scaleExtent=function(t){return arguments.length?(c[0]=+t[0],c[1]=+t[1],b):[c[0],c[1]]},b.translateExtent=function(t){return arguments.length?(l[0][0]=+t[0][0],l[1][0]=+t[1][0],l[0][1]=+t[0][1],l[1][1]=+t[1][1],b):[[l[0][0],l[0][1]],[l[1][0],l[1][1]]]},b.constrain=function(t){return arguments.length?(r=t,b):r},b.duration=function(t){return arguments.length?(u=+t,b):u},b.interpolate=function(t){return arguments.length?(h=t,b):h},b.on=function(){var t=d.on.apply(d,arguments);return t===d?b:t},b.clickDistance=function(t){return arguments.length?(g=(t=+t)*t,b):Math.sqrt(g)},b.tapDistance=function(t){return arguments.length?(v=+t,b):v},b}().duration(0).on("start",t.onZoomStart.bind(t)).on("zoom",t.onZoom.bind(t)).on("end",t.onZoomEnd.bind(t));o.orgScaleExtent=function(){var n=e.zoom_extent||[1,10];return[n[0],Math.max(t.getMaxDataCount()/n[1],n[1])]},o.updateScaleExtent=function(){var e=Pf(t.scale.x.orgDomain())/Pf(t.getZoomDomain()),n=this.orgScaleExtent();return this.scaleExtent([n[0]*e,n[1]*e]),this},o.updateTransformScale=function(o,r){var a,s=e.axis_rotated;null===(a=n.xScale)||void 0===a||a.range(i.x.range());var c=o[s?"rescaleY":"rescaleX"](n.xScale||i.x),l=t.trimXDomain(c.domain()),u=e.zoom_rescale;if(c.domain(l,n.xDomain),r){var h=c(i.x.domain()[0]),d=s?o.x:h,f=s?h:o.y;t.$el.eventRect.property("__zoom",rf.translate(d,f).scale(o.k))}t.state.xTickOffset||(t.state.xTickOffset=t.axis.x.tickOffset()),i.zoom=t.getCustomizedXScale(c),t.axis.x.scale(i.zoom),u&&(!n.xScale&&(n.xScale=i.x.copy()),i.x.domain(l))},o.getDomain=function(){var e=i[i.zoom?"zoom":"subX"].domain();return t.axis.isCategorized()&&(e[1]-=2),e},t.zoom=o},onZoomStart:function(t){var e=this,n=t.sourceEvent;n&&(e.zoom.startEvent=n,e.state.zooming=!0,Ff(e.config.zoom_onzoomstart,e.api,t))},onZoom:function(t){var e,n=this,i=n.config,o=n.scale,r=n.state,a=n.org,s=t.sourceEvent,c=(null==t?void 0:t.transform)===rf;if(!(!i.zoom_enabled||0===n.filterTargetsToShow(n.data.targets).length||!o.zoom&&(null==s?void 0:s.type.indexOf("touch"))>-1&&1===(null==s?void 0:s.touches.length))){t.sourceEvent&&(r.zooming=!0,r.domain=void 0);var l="mousemove"===(null==s?void 0:s.type),u=(null==s?void 0:s.wheelDelta)<0,h=t.transform;!l&&u&&o.x.domain().every((function(t,e){return t!==a.xDomain[e]}))&&o.x.domain(a.xDomain),n.zoom.updateTransformScale(h,"wheel"===i.zoom_type&&s);var d=i.transition_duration>0&&!i.subchart_show&&(r.dragging||c||!t.sourceEvent);n.redraw({withTransition:d,withY:i.zoom_rescale,withSubchart:!1,withEventRect:!1,withDimension:!1}),n.state.cancelClick=l,!c&&Ff(i.zoom_onzoom,n.api,null!==(e=n.state.domain)&&void 0!==e?e:n.zoom.getDomain())}},onZoomEnd:function(t){var e,n,i=this,o=i.config,r=i.state,a=i.zoom.startEvent,s=null==t?void 0:t.sourceEvent,c=(null==t?void 0:t.transform)===rf;(null==a?void 0:a.type.indexOf("touch"))>-1&&(a=a.changedTouches[0],s=null===(e=null==s?void 0:s.changedTouches)||void 0===e?void 0:e[0]),"drag"===o.zoom_type&&s&&a.clientX===s.clientX&&a.clientY===s.clientY||(i.redrawEventRect(),i.updateZoom(),r.zooming=!1,!c&&(s||r.dragging)&&Ff(o.zoom_onzoomend,i.api,null!==(n=i.state.domain)&&void 0!==n?n:i.zoom.getDomain()))},updateZoom:function(t){var e=this,n=e.scale,i=n.subX,o=n.x,r=n.zoom;if(r){var a=r.domain(),s=i.domain(),c=.015,l=e.config.axis_x_inverted?(a[0]>=s[0]||a[0]+c>=s[0])&&(s[1]>=a[1]||s[1]>=a[1]+c):(a[0]<=s[0]||a[0]-c<=s[0])&&(s[1]<=a[1]||s[1]<=a[1]-c);(t||l)&&(e.axis.x.scale(i),o.domain(i.orgDomain()),e.scale.zoom=null)}},bindZoomOnEventRect:function(){var t=this,e=t.config,n=t.$el.eventRect,i="drag"===e.zoom_type?t.zoomBehaviour:t.zoom;t.$el.svg.on("wheel",(function(){})),null==n||n.call(i).on("dblclick.zoom",null)},initZoomBehaviour:function(){var t,e=this,n=e.config,i=e.state,o=n.axis_rotated,r=0,a=0,s={axis:o?"y":"x",attr:o?"height":"width",index:o?1:0};e.zoomBehaviour=eu().clickDistance(4).on("start",(function(n){i.event=n,e.setDragStatus(!0),e.unselectRect(),t||(t=e.$el.main.append("rect").attr("clip-path",i.clip.path).attr("class",Ip.zoomBrush).attr("width",o?i.width:0).attr("height",o?0:i.height)),r=jf(n,this)[s.index],a=r,t.attr(s.axis,r).attr(s.attr,0),e.onZoomStart(n)})).on("drag",(function(e){a=jf(e,this)[s.index],t.attr(s.axis,Math.min(r,a)).attr(s.attr,Math.abs(a-r))})).on("end",(function(n){var o,c=e.scale.zoom||e.scale.x;i.event=n,t.attr(s.axis,0).attr(s.attr,0),r>a&&(r=(o=[a,r])[0],a=o[1]),r<0&&(a+=Math.abs(r),r=0),r!==a&&e.api.zoom([r,a].map((function(t){return c.invert(t)}))),e.setDragStatus(!1)}))},setZoomResetButton:function(){var t=this,e=t.config,n=t.$el,i=e.zoom_resetButton;i&&"drag"===e.zoom_type&&(n.zoomResetBtn?n.zoomResetBtn.style("display",null):n.zoomResetBtn=t.$el.chart.append("div").classed(dp.button,!0).append("span").on("click",(function(){Sf(i.onclick)&&i.onclick.bind(t.api)(this),t.api.unzoom()})).classed(Ip.buttonZoomReset,!0).text(i.text||"Reset Zoom"))}}),ob={zoom_enabled:!1,zoom_type:"wheel",zoom_extent:void 0,zoom_privileged:!1,zoom_rescale:!1,zoom_onzoom:void 0,zoom_onzoomstart:void 0,zoom_onzoomend:void 0,zoom_resetButton:!0,zoom_x_min:void 0,zoom_x_max:void 0},rb=function(){return Kf(Hg.prototype,ib),Kf(rv.prototype,eb),qp.setOptions([ob]),(rb=function(){return!0})()},ab={},sb={version:"3.10.3",generate:function(t){var e=ip({},ab,t),n=new rv(e);return n.internal.charts=this.instance,this.instance.push(n),n},defaults:function(t){return Bf(t)&&(ab=t),ab},instance:[],plugin:{}};const cb=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,lb=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,ub=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let hb;const db=new Map;let fb,pb,gb;function vb(t,e,n,i=!0){const o=`${n??""}:${e=e??void 0}`;let r=db.get(o);if(null==r){const t=function(t){if(null==t)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const e=lb.exec(t);if(null!=e?.groups){const{dateStyle:t,timeStyle:n}=e.groups;return{localeMatcher:"best fit",dateStyle:t||"full",timeStyle:n||void 0}}const n={localeMatcher:"best fit"};for(const{groups:e}of t.matchAll(cb))if(null!=e)for(const t in e){const i=e[t];if(null!=i)switch(t){case"year":n.year=4===i.length?"numeric":"2-digit";break;case"month":switch(i.length){case 4:n.month="long";break;case 3:n.month="short";break;case 2:n.month="2-digit";break;case 1:n.month="numeric"}break;case"day":n.day="DD"===i?"2-digit":"numeric";break;case"weekday":switch(i.length){case 4:n.weekday="long";break;case 3:n.weekday="short";break;case 2:n.weekday="narrow"}break;case"hour":n.hour=2===i.length?"2-digit":"numeric",n.hour12="hh"===i||"h"===i;break;case"minute":n.minute=2===i.length?"2-digit":"numeric";break;case"second":n.second=2===i.length?"2-digit":"numeric";break;case"fractionalSecond":n.fractionalSecondDigits=3;break;case"dayPeriod":n.dayPeriod="narrow",n.hour12=!0,n.hourCycle="h12";break;case"timeZoneName":n.timeZoneName=2===i.length?"long":"short"}}return n}(e);let a;a=null==n?fb:"system"===n?void 0:[n],r=new Intl.DateTimeFormat(a,t),i&&db.set(o,r)}if(null==e||lb.test(e))return r.format(t);function a(t){const e=`${n??""}:time:${t}`;let o=db.get(e);if(null==o){const r={localeMatcher:"best fit",timeStyle:t};let a;a=null==n?fb:"system"===n?void 0:[n],o=new Intl.DateTimeFormat(a,r),i&&db.set(e,o)}return o}const s=r.formatToParts(t);return e.replace(cb,((e,n,i,o,r,c,l,u,h,d,f,p,g,v,b)=>{if(null!=n)return n.substring(1,n.length-1);for(const e in b){const n=b[e];if(null==n)continue;const i=s.find((t=>t.type===e));if("Do"===n&&"day"===i?.type)return mb(Number(i.value));if("a"===n&&"dayPeriod"===i?.type){const e=a("short").formatToParts(t).find((t=>"dayPeriod"===t.type));return` ${(e??i)?.value??""}`}return i?.value??""}return""}))}const bb=["th","st","nd","rd"];function mb(t){const e=t%100;return`${t}${bb[(e-20)%10]??bb[e]??bb[0]}`}class yb{constructor(t,e){this.placement=e,this._onDidClickDataPoint=new Ri,this._commitsByTimestamp=new Map,this._authorsByIndex=new Map,this._indexByAuthors=new Map,this._dateFormat=void 0,this._shortDateFormat=void 0,this._selector=t;const n=()=>{const t=this._size;this._chart?.resize({width:t.width,height:t.height})},i=this.compact?32:0,o=this.compact?16:0;this.$container=document.querySelector(t).parentElement,this._resizeObserver=new ResizeObserver((t=>{const e=t[0].borderBoxSize[0],r={width:Math.floor(e.inlineSize)+i,height:Math.floor(e.blockSize)+o};this._size=r,requestAnimationFrame(n)}));const r=this.$container.getBoundingClientRect();this._size={height:Math.floor(r.height)+i,width:Math.floor(r.width)+o},this._resizeObserver.observe(this.$container,{box:"border-box"})}get onDidClickDataPoint(){return this._onDidClickDataPoint.event}get compact(){return"editor"!==this.placement}dispose(){this._resizeObserver.disconnect(),this._chart?.destroy()}reset(){this._chart?.unselect(),this._chart?.unzoom()}setEmptyState(t,e){const n=document.getElementById("empty"),i=document.getElementById("header");null!=e.uri?(0===t?.length?(n.innerHTML="<p>No commits found for the specified time period.</p>",n.removeAttribute("hidden")):n.setAttribute("hidden",""),i.removeAttribute("hidden")):null==t?(n.innerHTML="<p>There are no editors open that can provide file history information.</p>",n.removeAttribute("hidden"),i.setAttribute("hidden","")):(n.setAttribute("hidden",""),i.removeAttribute("hidden"))}async updateChart(t){this._dateFormat=t.dateFormat,this._shortDateFormat=t.shortDateFormat,this._commitsByTimestamp.clear(),this._authorsByIndex.clear(),this._indexByAuthors.clear();let e=t?.dataset;if(null!=e||t.access.allowed||"editor"!==this.placement||(e=function(){const t=[],e=["Eric Amodio","Justin Roberts","Keith Daulton","Ramin Tadayon","Ada Lovelace","Grace Hopper"],n=10;for(let i=0;i<n;i++){const o=new Date((new Date).getTime()-Math.floor(7776e6*Math.random()));t.push({commit:String(i),author:e[Math.floor(Math.random()*e.length)],date:o.toISOString(),message:"",additions:0===i?2:i===n-1?50:Math.floor(20*Math.random())+1,deletions:0===i?1:i===n-1?25:Math.floor(20*Math.random())+1,sort:o.getTime()})}return t.sort(((t,e)=>e.sort-t.sort))}()),this.setEmptyState(e,t),null==e||0===e.length)return this._chart?.destroy(),void(this._chart=void 0);const n={},i={},o={},r={},a={},s=[],c={},l=[];let u,h,d,f,p,g=0;for(u of e){({author:h,date:d,additions:f,deletions:p}=u),this._indexByAuthors.has(h)||(this._indexByAuthors.set(h,g),this._authorsByIndex.set(g,h),g--);const t="time";null==c[t]&&(c[t]=[],c.additions=[],c.deletions=[],n.additions=t,n.deletions=t,r.additions="y2",r.deletions="y2",o.additions="Additions",o.deletions="Deletions",i.additions="rgba(73, 190, 71, 1)",i.deletions="rgba(195, 32, 45, 1)",a.additions=Kv(),a.deletions=Kv(),l.push(t),s.push(["additions","deletions"]));const e=`${t}.${h}`;null==c[e]&&(c[e]=[],c[h]=[],n[h]=e,r[h]="y",o[h]=h,a[h]=Qv(),l.push(e)),c[t].push(d),c.additions.push(f??0),c.deletions.push(p??0),c[e].push(d);const v=null==f&&null==p?6:(f??0)+(p??0);c[h].push({y:this._indexByAuthors.get(h),z:v}),this._commitsByTimestamp.set(d,u)}s.push(l);const v=Object.entries(c).map((([t,e])=>[t,...e]));null!=this._chart&&null!=this._loading&&(this._loading.cancel(),this._loading=void 0,this._chart?.destroy(),this._chart=void 0),this._loading=function(){const t={pending:!0,promise:void 0,fulfill:void 0,cancel:void 0};return t.promise=new Promise(((e,n)=>{t.fulfill=function(n){t.pending=!1,e(n)},t.cancel=function(){t.pending=!1,n()}})),t}();try{if(null==this._chart){const t=this.getChartOptions();null==t.axis&&(t.axis={y:{tick:{}}}),null==t.axis.y&&(t.axis.y={tick:{}}),null==t.axis.y.tick&&(t.axis.y.tick={}),t.axis.y.min=g-2,t.axis.y.tick.values=[...this._authorsByIndex.keys()],t.data={...t.data,axes:r,colors:i,columns:v,groups:s,names:o,types:a,xs:n},t.onafterinit=()=>setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250),this._chart=sb.generate(t)}else this._chart.config("axis.y.tick.values",[...this._authorsByIndex.keys()],!1),this._chart.config("axis.y.min",g-2,!1),this._chart.groups(s),this._chart.load({axes:r,colors:i,columns:v,names:o,types:a,xs:n,unload:!0,done:()=>{setTimeout((()=>{this._loading?.fulfill(),this._loading=void 0}),250)}});return this._loading.promise}catch(t){}}getChartOptions(){const t={bindto:this._selector,data:{xFormat:"%Y-%m-%dT%H:%M:%S.%LZ",xLocaltime:!1,onclick:this.onDataPointClicked.bind(this)},axis:{x:{type:"timeseries",clipPath:!1,localtime:!0,show:!0,tick:{centered:!0,culling:!1,fit:!1,format:t=>this.compact?"":"number"==typeof t?t:vb(t,this._shortDateFormat??"short"),multiline:!1,show:!1,outer:!this.compact}},y:{max:0,padding:{top:75,bottom:100},show:!0,tick:{format:t=>this.compact?"":this._authorsByIndex.get(t)??"",outer:!this.compact,show:this.compact}},y2:{padding:this.compact?{top:0,bottom:0}:void 0,label:this.compact?void 0:{text:"Lines changed",position:"outer-middle"},show:!0,tick:{format:t=>this.compact?"":t,outer:!this.compact}}},bar:{width:2,sensitivity:4,padding:2},bubble:{maxR:100,zerobased:!0},grid:{focus:{edge:!0,show:!0,y:!0},front:!1,lines:{front:!1},x:{show:!1},y:{show:!0}},legend:{show:!this.compact,padding:10},point:{sensitivity:"radius"},resize:{auto:!1},size:this._size,tooltip:{grouped:!0,format:{title:this.getTooltipTitle.bind(this),name:this.getTooltipName.bind(this),value:this.getTooltipValue.bind(this)},show:!0,order:"desc"},zoom:{enabled:rb(),type:"drag",rescale:!0,resetButton:!0,extent:[1,.01],x:{min:100}}};return t}getTooltipName(t,e,n,i){if("additions"===n||"deletions"===n)return t;const o=new Date(this._chart.data(n)[0].values[i].x),r=this._commitsByTimestamp.get(o.toISOString());return r?.commit.slice(0,8)??"00000000"}getTooltipTitle(t){const e=new Date(t),n=`${function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(function(t,e){const n=("number"==typeof t?t:t.getTime())-(new Date).getTime();for(const[t,i,o,r]of ub){const a=Math.abs(n);if(a>=i||1e3===i)return e?(null==hb&&(null!=gb?hb=gb.resolvedOptions().locale:null!=pb?hb=pb.resolvedOptions().locale:(gb=new Intl.RelativeTimeFormat(fb,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),hb=gb.resolvedOptions().locale)),"en"===hb||hb?.startsWith("en-")?`${Math.round(a/o)}${r}`:(null==gb&&(gb=new Intl.RelativeTimeFormat(fb,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),gb.format(Math.round(n/o),t))):(null==pb&&(pb=new Intl.RelativeTimeFormat(fb,{localeMatcher:"best fit",numeric:"auto",style:"long"})),pb.format(Math.round(n/o),t))}return""}(e))}   (${vb(e,this._dateFormat)})`,i=this._commitsByTimestamp.get(e.toISOString());return null==i?n:`${i.author}, ${n}`}getTooltipValue(t,e,n,i){if("additions"===n||"deletions"===n)return 0===t?void 0:t;const o=new Date(this._chart.data(n)[0].values[i].x),r=this._commitsByTimestamp.get(o.toISOString());return r?.message??"???"}onDataPointClicked(t,e){const n=this._commitsByTimestamp.get(new Date(t.x).toISOString());null!=n&&this._onDidClickDataPoint.fire({data:{id:n.commit,selected:!0}})}}const xb=globalThis,_b=xb.ShadowRoot&&(void 0===xb.ShadyCSS||xb.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wb=Symbol(),Tb=new WeakMap;class kb{constructor(t,e,n){if(this._$cssResult$=!0,n!==wb)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(_b&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=Tb.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Tb.set(e,t))}return t}toString(){return this.cssText}}const Cb=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new kb(n,t,wb)},Sb=_b?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new kb("string"==typeof t?t:t+"",void 0,wb))(e)})(t):t,{is:Ab,defineProperty:$b,getOwnPropertyDescriptor:Eb,getOwnPropertyNames:Mb,getOwnPropertySymbols:Ob,getPrototypeOf:Db}=Object,Pb=globalThis,Rb=Pb.trustedTypes,Ib=Rb?Rb.emptyScript:"",Lb=Pb.reactiveElementPolyfillSupport,zb=(t,e)=>t,Bb={toAttribute(t,e){switch(e){case Boolean:t=t?Ib:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},Nb=(t,e)=>!Ab(t,e),Fb={attribute:!0,type:String,converter:Bb,reflect:!1,hasChanged:Nb};Symbol.metadata??=Symbol("metadata"),Pb.litPropertyMetadata??=new WeakMap;class Xb extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Fb){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&$b(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:o}=Eb(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);o.call(this,e),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fb}static _$Ei(){if(this.hasOwnProperty(zb("elementProperties")))return;const t=Db(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(zb("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zb("properties"))){const t=this.properties,e=[...Mb(t),...Ob(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(Sb(t))}else void 0!==t&&e.push(Sb(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(_b)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const n of e){const e=document.createElement("style"),i=xb.litNonce;void 0!==i&&e.setAttribute("nonce",i),e.textContent=n.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(void 0!==i&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:Bb).toAttribute(e,n.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const n=this.constructor,i=n._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=n.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Bb;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,n,i=!1,o){if(void 0!==t){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??Nb)(i?o:this[t],e))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t)!0!==n.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}Xb.elementStyles=[],Xb.shadowRootOptions={mode:"open"},Xb[zb("elementProperties")]=new Map,Xb[zb("finalized")]=new Map,Lb?.({ReactiveElement:Xb}),(Pb.reactiveElementVersions??=[]).push("2.0.1");const Vb=globalThis,Ub=Vb.trustedTypes,Hb=Ub?Ub.createPolicy("lit-html",{createHTML:t=>t}):void 0,jb="$lit$",Yb=`lit$${(Math.random()+"").slice(9)}$`,qb="?"+Yb,Gb=`<${qb}>`,Wb=document,Zb=()=>Wb.createComment(""),Kb=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Qb=Array.isArray,Jb=t=>Qb(t)||"function"==typeof t?.[Symbol.iterator],tm="[ \t\n\f\r]",em=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nm=/-->/g,im=/>/g,om=RegExp(`>|${tm}(?:([^\\s"'>=/]+)(${tm}*=${tm}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),rm=/'/g,am=/"/g,sm=/^(?:script|style|textarea|title)$/i,cm=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),lm=cm(1),um=(cm(2),Symbol.for("lit-noChange")),hm=Symbol.for("lit-nothing"),dm=new WeakMap,fm=Wb.createTreeWalker(Wb,129);function pm(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Hb?Hb.createHTML(e):e}const gm=(t,e)=>{const n=t.length-1,i=[];let o,r=2===e?"<svg>":"",a=em;for(let e=0;e<n;e++){const n=t[e];let s,c,l=-1,u=0;for(;u<n.length&&(a.lastIndex=u,c=a.exec(n),null!==c);)u=a.lastIndex,a===em?"!--"===c[1]?a=nm:void 0!==c[1]?a=im:void 0!==c[2]?(sm.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=om):void 0!==c[3]&&(a=om):a===om?">"===c[0]?(a=o??em,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?om:'"'===c[3]?am:rm):a===am||a===rm?a=om:a===nm||a===im?a=em:(a=om,o=void 0);const h=a===om&&t[e+1].startsWith("/>")?" ":"";r+=a===em?n+Gb:l>=0?(i.push(s),n.slice(0,l)+jb+n.slice(l)+Yb+h):n+Yb+(-2===l?e:h)}return[pm(t,r+(t[n]||"<?>")+(2===e?"</svg>":"")),i]};class vm{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0;const a=t.length-1,s=this.parts,[c,l]=gm(t,e);if(this.el=vm.createElement(c,n),fm.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=fm.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(jb)){const e=l[r++],n=i.getAttribute(t).split(Yb),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:a[2],strings:n,ctor:"."===a[1]?_m:"?"===a[1]?wm:"@"===a[1]?Tm:xm}),i.removeAttribute(t)}else t.startsWith(Yb)&&(s.push({type:6,index:o}),i.removeAttribute(t));if(sm.test(i.tagName)){const t=i.textContent.split(Yb),e=t.length-1;if(e>0){i.textContent=Ub?Ub.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],Zb()),fm.nextNode(),s.push({type:2,index:++o});i.append(t[e],Zb())}}}else if(8===i.nodeType)if(i.data===qb)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(Yb,t+1));)s.push({type:7,index:o}),t+=Yb.length-1}o++}}static createElement(t,e){const n=Wb.createElement("template");return n.innerHTML=t,n}}function bm(t,e,n=t,i){if(e===um)return e;let o=void 0!==i?n._$Co?.[i]:n._$Cl;const r=Kb(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,n,i)),void 0!==i?(n._$Co??=[])[i]=o:n._$Cl=o),void 0!==o&&(e=bm(t,o._$AS(t,e.values),o,i)),e}class mm{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??Wb).importNode(e,!0);fm.currentNode=i;let o=fm.nextNode(),r=0,a=0,s=n[0];for(;void 0!==s;){if(r===s.index){let e;2===s.type?e=new ym(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new km(o,this,t)),this._$AV.push(e),s=n[++a]}r!==s?.index&&(o=fm.nextNode(),r++)}return fm.currentNode=Wb,i}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class ym{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=hm,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=bm(this,t,e),Kb(t)?t===hm||null==t||""===t?(this._$AH!==hm&&this._$AR(),this._$AH=hm):t!==this._$AH&&t!==um&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):Jb(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==hm&&Kb(this._$AH)?this._$AA.nextSibling.data=t:this.$(Wb.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:n}=t,i="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=vm.createElement(pm(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new mm(i,this),n=t.u(this.options);t.p(e),this.$(n),this._$AH=t}}_$AC(t){let e=dm.get(t.strings);return void 0===e&&dm.set(t.strings,e=new vm(t)),e}T(t){Qb(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new ym(this.k(Zb()),this.k(Zb()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class xm{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=hm,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=hm}_$AI(t,e=this,n,i){const o=this.strings;let r=!1;if(void 0===o)t=bm(this,t,e,0),r=!Kb(t)||t!==this._$AH&&t!==um,r&&(this._$AH=t);else{const i=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=bm(this,i[n+a],e,a),s===um&&(s=this._$AH[a]),r||=!Kb(s)||s!==this._$AH[a],s===hm?t=hm:t!==hm&&(t+=(s??"")+o[a+1]),this._$AH[a]=s}r&&!i&&this.O(t)}O(t){t===hm?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _m extends xm{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===hm?void 0:t}}class wm extends xm{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==hm)}}class Tm extends xm{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=bm(this,t,e,0)??hm)===um)return;const n=this._$AH,i=t===hm&&n!==hm||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==hm&&(n===hm||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class km{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){bm(this,t)}}const Cm=Vb.litHtmlPolyfillSupport;Cm?.(vm,ym),(Vb.litHtmlVersions??=[]).push("3.0.2");class Sm extends Xb{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{const i=n?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=n?.renderBefore??null;i._$litPart$=o=new ym(e.insertBefore(Zb(),t),t,void 0,n??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return um}}Sm._$litElement$=!0,Sm.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Sm});const Am=globalThis.litElementPolyfillSupport;Am?.({LitElement:Sm});(globalThis.litElementVersions??=[]).push("4.0.1");const $m=t=>(e,n)=>{void 0!==n?n.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},Em={attribute:!0,type:String,converter:Bb,reflect:!1,hasChanged:Nb},Mm=(t=Em,e,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,t),"accessor"===i){const{name:i}=n;return{set(n){const o=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,o,t)},init(e){return void 0!==e&&this.C(i,void 0,t),e}}}if("setter"===i){const{name:i}=n;return function(n){const o=this[i];e.call(this,n),this.requestUpdate(i,o,t)}}throw Error("Unsupported decorator location: "+i)};function Om(t){return(e,n)=>"object"==typeof n?Mm(t,e,n):((t,e,n)=>{const i=e.hasOwnProperty(n);return e.constructor.createProperty(n,i?{...t,wrapped:!0}:t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}var Dm=Object.defineProperty,Pm=Object.getOwnPropertyDescriptor,Rm=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?Pm(e,n):e,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Dm(e,n,r),r};let Im=class extends Sm{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(t){t.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(t)}};Im.styles=Cb`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}

		:host([icon='indent']):before {
			content: '\\ebf9';
		}
		:host([icon='record-small']):before {
			content: '\\ebfa';
		}
		:host([icon='error-small']):before {
			content: '\\ebfb';
		}
		:host([icon='terminal-decoration-error']):before {
			content: '\\ebfb';
		}
		:host([icon='arrow-circle-down']):before {
			content: '\\ebfc';
		}
		:host([icon='arrow-circle-left']):before {
			content: '\\ebfd';
		}
		:host([icon='arrow-circle-right']):before {
			content: '\\ebfe';
		}
		:host([icon='arrow-circle-up']):before {
			content: '\\ebff';
		}
		:host([icon='layout-sidebar-right-off']):before {
			content: '\\ec00';
		}
		:host([icon='layout-panel-off']):before {
			content: '\\ec01';
		}
		:host([icon='layout-sidebar-left-off']):before {
			content: '\\ec02';
		}
		:host([icon='blank']):before {
			content: '\\ec03';
		}
		:host([icon='heart-filled']):before {
			content: '\\ec04';
		}
		:host([icon='map']):before {
			content: '\\ec05';
		}
		:host([icon='map-filled']):before {
			content: '\\ec06';
		}
		:host([icon='circle-small']):before {
			content: '\\ec07';
		}
		:host([icon='bell-slash']):before {
			content: '\\ec08';
		}
		:host([icon='bell-slash-dot']):before {
			content: '\\ec09';
		}
		:host([icon='comment-unresolved']):before {
			content: '\\ec0a';
		}
		:host([icon='git-pull-request-go-to-changes']):before {
			content: '\\ec0b';
		}
		:host([icon='git-pull-request-new-changes']):before {
			content: '\\ec0c';
		}
		:host([icon='search-fuzzy']):before {
			content: '\\ec0d';
		}
		:host([icon='comment-draft']):before {
			content: '\\ec0e';
		}
		:host([icon='send']):before {
			content: '\\ec0f';
		}
		:host([icon='sparkle']):before {
			content: '\\ec10';
		}
		:host([icon='insert']):before {
			content: '\\ec11';
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}
		:host([icon='gl-commit-horizontal']):before {
			content: '\\f101';
		}
		:host([icon='gl-graph']):before {
			content: '\\f102';
		}
		:host([icon='gl-next-commit']):before {
			content: '\\f103';
		}
		:host([icon='gl-prev-commit-menu']):before {
			content: '\\f104';
		}
		:host([icon='gl-prev-commit']):before {
			content: '\\f105';
		}
		:host([icon='gl-compare-ref-working']):before {
			content: '\\f106';
		}
		:host([icon='gl-branches-view']):before {
			content: '\\f107';
		}
		:host([icon='gl-commit-view']):before {
			content: '\\f108';
		}
		:host([icon='gl-commits-view']):before {
			content: '\\f109';
		}
		:host([icon='gl-compare-view']):before {
			content: '\\f10a';
		}
		:host([icon='gl-contributors-view']):before {
			content: '\\f10b';
		}
		:host([icon='gl-history-view']):before {
			content: '\\f10c';
		}
		:host([icon='gl-remotes-view']):before {
			content: '\\f10d';
		}
		:host([icon='gl-repositories-view']):before {
			content: '\\f10e';
		}
		:host([icon='gl-search-view']):before {
			content: '\\f10f';
		}
		:host([icon='gl-stashes-view']):before {
			content: '\\f110';
		}
		:host([icon='gl-tags-view']):before {
			content: '\\f111';
		}
		:host([icon='gl-worktrees-view']):before {
			content: '\\f112';
		}
		:host([icon='gl-gitlens']):before {
			content: '\\f113';
		}
		:host([icon='gl-stash-pop']):before {
			content: '\\f114';
		}
		:host([icon='gl-stash-save']):before {
			content: '\\f115';
		}
		:host([icon='gl-unplug']):before {
			content: '\\f116';
		}
		:host([icon='gl-open-revision']):before {
			content: '\\f117';
		}
		:host([icon='gl-switch']):before {
			content: '\\f118';
		}
		:host([icon='gl-expand']):before {
			content: '\\f119';
		}
		:host([icon='gl-list-auto']):before {
			content: '\\f11a';
		}
		:host([icon='gl-arrow-up-force']):before {
			content: '\\f11b';
		}
		:host([icon='gl-pinned-filled']):before {
			content: '\\f11c';
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}
		:host([icon='gl-clock']):before {
			content: '\\f11d';
		}
		:host([icon='gl-provider-azdo']):before {
			content: '\\f11e';
		}
		:host([icon='gl-provider-bitbucket']):before {
			content: '\\f11f';
		}
		:host([icon='gl-provider-gerrit']):before {
			content: '\\f120';
		}
		:host([icon='gl-provider-gitea']):before {
			content: '\\f121';
		}
		:host([icon='gl-provider-github']):before {
			content: '\\f122';
		}
		:host([icon='gl-provider-gitlab']):before {
			content: '\\f123';
		}
		:host([icon='gl-gitlens-inspect']):before {
			content: '\\f124';
		}
		:host([icon='gl-workspaces-view']):before {
			content: '\\f125';
		}
		:host([icon='gl-cloud-patch']):before {
			content: '\\f128';
		}
		:host([icon='gl-cloud-patch-share']):before {
			content: '\\f129';
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,Rm([Om()],Im.prototype,"icon",2),Rm([Om()],Im.prototype,"modifier",2),Rm([Om({type:Number})],Im.prototype,"size",2),Im=Rm([$m("code-icon")],Im);var Lm=Object.defineProperty,zm=Object.getOwnPropertyDescriptor,Bm=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?zm(e,n):e,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Lm(e,n,r),r};let Nm=class extends Sm{constructor(){super(...arguments),this.mode="infinite",this.active=!1,this.position="bottom"}firstUpdated(){this.setAttribute("role","progressbar")}render(){return lm`<div class="progress-bar"></div>`}};Nm.styles=Cb`
		* {
			box-sizing: border-box;
		}

		:host {
			position: absolute;
			left: 0;
			z-index: 5;
			height: 2px;
			width: 100%;
			overflow: hidden;
		}

		:host([position='bottom']) {
			bottom: 0;
		}

		:host([position='top']) {
			top: 0;
		}

		.progress-bar {
			background-color: var(--vscode-progressBar-background);
			display: none;
			position: absolute;
			left: 0;
			width: 2%;
			height: 2px;
		}

		:host([active]:not([active='false'])) .progress-bar {
			display: inherit;
		}

		:host([mode='discrete']) .progress-bar {
			left: 0;
			transition: width 0.1s linear;
		}

		:host([mode='discrete done']) .progress-bar {
			width: 100%;
		}

		:host([mode='infinite']) .progress-bar {
			animation-name: progress;
			animation-duration: 4s;
			animation-iteration-count: infinite;
			animation-timing-function: steps(100);
			transform: translateZ(0);
		}

		@keyframes progress {
			0% {
				transform: translateX(0) scaleX(1);
			}

			50% {
				transform: translateX(2500%) scaleX(3);
			}

			to {
				transform: translateX(4900%) scaleX(1);
			}
		}
	`,Bm([Om({reflect:!0})],Nm.prototype,"mode",2),Bm([Om({type:Boolean})],Nm.prototype,"active",2),Bm([Om()],Nm.prototype,"position",2),Nm=Bm([$m("progress-indicator")],Nm);Cb`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`;const Fm=Cb`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`,Xm=Cb`
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
`;Cb`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Fm}
	}
	a:hover {
		text-decoration: underline;
	}
`,Cb`
	::-webkit-scrollbar {
		width: 10px;
		height: 10px;
	}
	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: transparent;
		border-color: inherit;
		border-right-style: inset;
		border-right-width: calc(100vw + 100vh);
		border-radius: unset !important;
	}
	::-webkit-scrollbar-thumb:hover {
		border-color: var(--vscode-scrollbarSlider-hoverBackground);
	}
	::-webkit-scrollbar-thumb:active {
		border-color: var(--vscode-scrollbarSlider-activeBackground);
	}

	.scrollable {
		border-color: transparent;
		transition: border-color 1s linear;
	}

	:host(:hover) .scrollable,
	:host(:focus-within) .scrollable {
		border-color: var(--vscode-scrollbarSlider-background);
		transition: none;
	}
`;var Vm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,Hm=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?Um(e,n):e,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Vm(e,n,r),r};let jm=class extends Sm{constructor(){super(...arguments),this.full=!1,this.disabled=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}updated(t){super.updated(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.setAttribute("aria-disabled",this.disabled.toString()))}render(){const t=lm`<slot></slot>`;return null!=this.href?lm`<a href=${this.href}>${t}</a>`:t}};jm.styles=[Xm,Cb`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
				--button-compact-padding: 0.4rem 0.4rem;
				--button-line-height: 1.694;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius);
			}

			:host(:not([href])) {
				padding: var(--button-padding);
			}

			:host([href]) > a {
				display: inline-block;
				padding: var(--button-padding);

				color: inherit;
				text-decoration: none;

				width: 100%;
				height: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus) {
				${Fm}
			}

			:host([full]) {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-padding: 0.4rem;
				--button-line-height: 1.6;
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}

			:host([density='compact']) {
				padding: var(--button-compact-padding);
			}

			:host([disabled]) {
				opacity: 0.4;
				cursor: not-allowed;
				pointer-events: none;
			}
		`],Hm([Om({type:Boolean,reflect:!0})],jm.prototype,"full",2),Hm([Om({type:Boolean,reflect:!0})],jm.prototype,"disabled",2),Hm([Om({reflect:!0})],jm.prototype,"density",2),Hm([Om()],jm.prototype,"href",2),Hm([Om({reflect:!0})],jm.prototype,"role",1),Hm([Om()],jm.prototype,"appearance",2),Hm([Om({type:Number,reflect:!0})],jm.prototype,"tabIndex",2),jm=Hm([$m("gl-button")],jm);var Ym=(t=>(t[t.VerificationRequired=-1]="VerificationRequired",t[t.Free=0]="Free",t[t.FreeInPreviewTrial=1]="FreeInPreviewTrial",t[t.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",t[t.FreePlusInTrial=3]="FreePlusInTrial",t[t.FreePlusTrialExpired=4]="FreePlusTrialExpired",t[t.Paid=5]="Paid",t))(Ym||{});function qm(t){switch(t){case"free+":return"GitKraken Free";case"pro":return"GitKraken Pro";case"teams":return"GitKraken Teams";case"enterprise":return"GitKraken Enterprise";default:return"GitKraken"}}function Gm(t,e){return Wm(t.plan.effective.expiresOn,e)}function Wm(t,e){return null!=t?function(t,e,n){const i=("number"==typeof e?e:e.getTime())-("number"==typeof t?t:t.getTime());switch(n){case"days":return Math.floor(i/864e5);case"hours":return Math.floor(i/36e5);case"minutes":return Math.floor(i/6e4);case"seconds":return Math.floor(i/1e3);default:return i}}(Date.now(),new Date(t),e):void 0}function Zm(t){return null!=t&&(5===t||1===t||3===t)}function Km(t){return null!=t&&(1===t||3===t)}const Qm=Cb`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var Jm=Object.defineProperty,ty=Object.getOwnPropertyDescriptor,ey=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?ty(e,n):e,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&Jm(e,n,r),r};let ny=class extends Sm{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const t="alert"===(this.appearance??"alert")?"alert":hm;switch(this.state){case Ym.VerificationRequired:return lm`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${t}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${t}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case Ym.Free:return lm`
					<gl-button appearance="${t}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day GitKraken trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case Ym.FreePreviewTrialExpired:return lm`
					<p>
						Your 3-day Pro preview has ended, start a free GitKraken trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${t}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free GitKraken Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case Ym.FreePlusTrialExpired:return lm`
					<p>
						Your GitKraken trial has ended, please upgrade to continue to use this on privately hosted
						repos.
					</p>
					<p style="text-align: center;">
						Special: <b>50% off GitKraken's suite of dev tools</b><br />
						1st & 2nd seats only $4/month each
					</p>
					<gl-button appearance="${t}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};ny.styles=[Qm,Cb`
			:host {
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}
		`],ey([Om({type:String})],ny.prototype,"appearance",2),ey([Om({attribute:!1,type:Number})],ny.prototype,"state",2),ny=ey([$m("gk-feature-gate-plus-state")],ny);var iy=Object.defineProperty,oy=Object.getOwnPropertyDescriptor,ry=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?oy(e,n):e,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&iy(e,n,r),r};let ay=class extends Sm{render(){if(!this.visible||null!=this.state&&Zm(this.state))return void(this.hidden=!0);const t=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,lm`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===Ym.Free?hm:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${t} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};ay.styles=Cb`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,ry([Om()],ay.prototype,"appearance",2),ry([Om({attribute:!1,type:Number})],ay.prototype,"state",2),ry([Om({type:Boolean})],ay.prototype,"visible",2),ay=ry([$m("gk-feature-gate")],ay);const{fromCharCode:sy}=String;new TextEncoder;function cy(...t){return t.some((t=>(t?.length??0)>0))}const ly=An`
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
`;var uy=Object.defineProperty,hy=Object.getOwnPropertyDescriptor,dy=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?hy(e,n):e,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&uy(e,n,r),r};const fy=qe`
	<template>
		<div class="top" ?hidden="${t=>!t.hasTopNodes}">
			<slot ${Cn("typeNodes")} name="type"></slot>
			<slot ${Cn("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${t=>!t.hasHeadingNodes}">
			<slot ${Cn("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${wn((t=>t.caret),qe`<span class="caret"></span>`)}
	</template>
`,py=An`
	${ly}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);
		box-shadow: 0 0.3rem 0.3rem 0 var(--vscode-widget-shadow);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`;let gy=class extends j{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return cy(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return cy(this.headingNodes)}};var vy;dy([R({mode:"boolean"})],gy.prototype,"open",2),dy([R({mode:"boolean"})],gy.prototype,"caret",2),dy([R],gy.prototype,"placement",2),dy([b],gy.prototype,"typeNodes",2),dy([b],gy.prototype,"actionsNodes",2),dy([b],gy.prototype,"headingNodes",2),dy([m],gy.prototype,"hasTopNodes",1),dy([m],gy.prototype,"hasHeadingNodes",1),gy=dy([(vy={name:"pop-over",template:fy,styles:py},function(t){new B(t,vy).define()})],gy);var by=Object.defineProperty,my=Object.getOwnPropertyDescriptor,yy=(t,e,n,i)=>{for(var o,r=i>1?void 0:i?my(e,n):e,a=t.length-1;a>=0;a--)(o=t[a])&&(r=(i?o(e,n,r):o(r))||r);return i&&r&&by(e,n,r),r};let xy=class extends Sm{constructor(){super(...arguments),this.placement="top end"}render(){const t=Zm(this.subscription?.state),e=Km(this.subscription?.state);return lm`
			<span class="badge-container">
				<span class="badge ${t?"active":"inactive"}"
					>${e?lm`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(t,e){switch(t){case 4:return qm("free+");case 1:return`${qm("pro")} (Trial)`;case 3:return`${qm(e??"pro")} (Trial)`;case-1:return"GitKraken (Unverified)";case 5:return qm(e??"pro");default:return"GitKraken"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!Km(this.subscription?.state))return hm;const t=Gm(this.subscription,"days")??0;return lm`<span class="badge-trial-left">${t<1?"<1 day":function(t,e,n){if(null==n)return`${e} ${t}${1===e?"":"s"}`;const i=1===e?t:n.plural??`${t}s`;return n.only?i:`${0===e?n.zero??e:n.format?.(e)??e}${n.infix??" "}${i}`}("day",t)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case Ym.VerificationRequired:case Ym.Free:case Ym.FreePreviewTrialExpired:return lm`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case Ym.FreePlusTrialExpired:case Ym.FreeInPreviewTrial:case Ym.FreePlusInTrial:return lm`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case Ym.Paid:return lm`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return hm}}};xy.styles=[Xm,Cb`
			:host {
				position: relative;
			}

			:host(:focus) {
				${Fm}
			}

			.badge-container {
				position: relative;
			}

			.badge {
				cursor: help;
			}

			.badge.inactive {
				filter: grayscale(100%);
			}

			.badge-popover {
				width: max-content;
				top: 100%;
				text-align: left;
			}

			.badge-footnote {
				white-space: break-spaces;
			}

			.badge-trial {
				font-size: smaller;
				font-weight: 700;
				margin-right: 0.5rem;
				text-transform: uppercase;
				white-space: nowrap;
			}

			.badge-trial-left {
				font-weight: 400;
				opacity: 0.6;
				margin-left: 1rem;
			}

			.badge:not(:hover) ~ .badge-popover {
				display: none;
			}

			:host(:not([placement~='end'])) .badge-popover {
				left: 0;
			}

			:host([placement~='end']) .badge-popover {
				right: 0;
			}
		`],yy([Om({reflect:!0})],xy.prototype,"placement",2),yy([Om({attribute:!1})],xy.prototype,"subscription",2),xy=yy([$m("gk-feature-gate-badge")],xy);class _y extends Hi{constructor(){super("TimelineApp")}onInitialize(){var t;re.getOrCreate(t).withPrefix("vscode").register(Kn(),Qn()),this.updateState()}onBind(){const t=super.onBind?.()??[];return t.push(di.on(document,"keydown",(t=>this.onKeyDown(t))),di.on(document.getElementById("periods"),"change",((t,e)=>this.onPeriodChanged(t,e))),{dispose:()=>this._chart?.dispose()}),t}onMessageReceived(t){const e=t.data;if(e.method===ri.method)this.log(`onMessageReceived(${e.id}): name=${e.method}`),ni(ri,e,(t=>{this.state=t.state,this.setState(this.state),this.updateState()}));else super.onMessageReceived?.(t)}onChartDataPointClicked(t){this.sendCommand(ai,t)}onKeyDown(t){"Escape"!==t.key&&"Esc"!==t.key||this._chart?.reset()}onPeriodChanged(t,e){const n=e.options[e.selectedIndex].value;!function(t){if("all"===t)return;const[e,n]=t.split("|");if(isNaN(Number(e))||"D"!==n&&"M"!==n&&"Y"!==n)throw new Error(`Invalid period: ${t}`)}(n),this.log(`onPeriodChanged(): name=${e.name}, value=${n}`),this.updateLoading(!0),this.sendCommand(si,{period:n})}updateState(){const t=document.getElementById("subscription-gate");null!=t&&(t.state=this.state.access.subscription.current.state,t.visible=!0!==this.state.access.allowed&&null!=this.state.uri);const e=document.getElementById("subscription-gate-badge");e.subscription=this.state.access.subscription.current,e.placement="view"===this.placement?"top start":"top end",null==this._chart&&(this._chart=new yb("#chart",this.placement),this._chart.onDidClickDataPoint(this.onChartDataPointClicked,this));let{title:n,sha:i}=this.state,o="";if(null!=n){const t=n.lastIndexOf("/");if(t>=0){const e=n.substring(t+1);o=n.substring(0,t),n=e}}else"editor"!==this.placement||null!=this.state.dataset||this.state.access.allowed||(n="index.ts",o="src/app");function r(t,e,n){const i=document.querySelector(`[data-bind="${t}"]`);null!=i&&(n?.html?i.innerHTML=e??"":i.textContent=e??"")}r("title",n),r("description",o),r("sha",i?`<code-icon icon="git-commit" size="16"></code-icon><span class="sha">${i}</span>`:void 0,{html:!0});const a=document.getElementById("periods");if(null!=a){const t=this.state?.period,e=a.getElementsByTagName("vscode-option");for(const n of e)t===n.getAttribute("value")?n.setAttribute("selected",""):n.removeAttribute("selected")}this._chart.updateChart(this.state).finally((()=>this.updateLoading(!1)))}updateLoading(t){document.getElementById("spinner")?.setAttribute("active",t?"true":"false")}}new _y;var wy=e.T;export{wy as TimelineApp};