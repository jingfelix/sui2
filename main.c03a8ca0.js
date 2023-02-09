(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}})();function J(){let t=new Date,e={weekday:"long",year:"numeric",month:"long",day:"numeric"},s=t.toLocaleDateString("en-GB",e);const r=t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1});document.getElementById("header_date").innerHTML=`<span class="date">${s}</span><span class="time">${r}</span>`}function pe(){let t=new Date;switch(Math.floor(t.getHours()/6)){case 0:document.getElementById("header_greet").innerHTML="Good night";break;case 1:document.getElementById("header_greet").innerHTML="Good morning";break;case 2:document.getElementById("header_greet").innerHTML="Good afternoon";break;case 3:document.getElementById("header_greet").innerHTML="Good evening";break}}const ne=(t,e)=>{if(e){document.documentElement.style.setProperty(`--${t}`,e);const s=document.querySelector(`#${t}`);s&&(e=e.replace("px",""),s.value=e)}},j=t=>{let e=localStorage.getItem(t);ne(t,e)},y=t=>{for(let e of Object.keys(t)){const s=e,r=t[e];ne(s,r),localStorage.setItem(s,r)}};function me(){j("color-background"),j("color-text-pri"),j("color-text-acc")}function ye(){const t=document.querySelectorAll("[data-theme]");for(let e=0;e<t.length;e++)t[e].addEventListener("click",()=>{switch(t[e].dataset.theme){case"blackboard":y({"color-background":"#1a1a1a","color-text-pri":"#FFFDEA","color-text-acc":"#5c5c5c"});return;case"gazette":y({"color-background":"#F2F7FF","color-text-pri":"#000000","color-text-acc":"#5c5c5c"});return;case"espresso":y({"color-background":"#21211F","color-text-pri":"#D1B59A","color-text-acc":"#4E4E4E"});return;case"cab":y({"color-background":"#F6D305","color-text-pri":"#1F1F1F","color-text-acc":"#424242"});return;case"cloud":y({"color-background":"#f1f2f0","color-text-pri":"#35342f","color-text-acc":"#37bbe4"});return;case"lime":y({"color-background":"#263238","color-text-pri":"#AABBC3","color-text-acc":"#aeea00"});return;case"white":y({"color-background":"#ffffff","color-text-pri":"#222222","color-text-acc":"#dddddd"});return;case"tron":y({"color-background":"#242B33","color-text-pri":"#EFFBFF","color-text-acc":"#6EE2FF"});return;case"blues":y({"color-background":"#2B2C56","color-text-pri":"#EFF1FC","color-text-acc":"#6677EB"});return;case"passion":y({"color-background":"#f5f5f5","color-text-pri":"#12005e","color-text-acc":"#8e24aa"});return;case"chalk":y({"color-background":"#263238","color-text-pri":"#AABBC3","color-text-acc":"#FF869A"});return;case"paper":y({"color-background":"#F8F6F1","color-text-pri":"#4C432E","color-text-acc":"#AA9A73"});return;case"initial":y({"color-background":"initial","color-text-pri":"initial","color-text-acc":"initial"});return}})}function b(t){return Array.isArray?Array.isArray(t):ie(t)==="[object Array]"}const Me=1/0;function xe(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Me?"-0":e}function Ee(t){return t==null?"":xe(t)}function w(t){return typeof t=="string"}function ce(t){return typeof t=="number"}function Ie(t){return t===!0||t===!1||we(t)&&ie(t)=="[object Boolean]"}function oe(t){return typeof t=="object"}function we(t){return oe(t)&&t!==null}function M(t){return t!=null}function K(t){return!t.trim().length}function ie(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const _e="Incorrect 'index' type",be=t=>`Invalid value for key ${t}`,ke=t=>`Pattern length exceeds max of ${t}.`,Ae=t=>`Missing ${t} property in key`,Se=t=>`Property 'weight' in key '${t}' must be a positive integer`,Z=Object.prototype.hasOwnProperty;class Le{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(r=>{let n=ae(r);s+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,s+=n.weight}),this._keys.forEach(r=>{r.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ae(t){let e=null,s=null,r=null,n=1,c=null;if(w(t)||b(t))r=t,e=q(t),s=H(t);else{if(!Z.call(t,"name"))throw new Error(Ae("name"));const o=t.name;if(r=o,Z.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(Se(o));e=q(o),s=H(o),c=t.getFn}return{path:e,id:s,weight:n,src:r,getFn:c}}function q(t){return b(t)?t:t.split(".")}function H(t){return b(t)?t.join("."):t}function Fe(t,e){let s=[],r=!1;const n=(c,o,i)=>{if(!!M(c))if(!o[i])s.push(c);else{let a=o[i];const l=c[a];if(!M(l))return;if(i===o.length-1&&(w(l)||ce(l)||Ie(l)))s.push(Ee(l));else if(b(l)){r=!0;for(let h=0,d=l.length;h<d;h+=1)n(l[h],o,i+1)}else o.length&&n(l,o,i+1)}};return n(t,w(e)?e.split("."):e,0),r?s:s[0]}const Ce={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},$e={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Oe={location:0,threshold:.6,distance:100},Re={useExtendedSearch:!1,getFn:Fe,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...$e,...Ce,...Oe,...Re};const Te=/[^ ]+/g;function Ne(t=1,e=3){const s=new Map,r=Math.pow(10,e);return{get(n){const c=n.match(Te).length;if(s.has(c))return s.get(c);const o=1/Math.pow(c,.5*t),i=parseFloat(Math.round(o*r)/r);return s.set(c,i),i},clear(){s.clear()}}}class U{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=Ne(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,r)=>{this._keysMap[s.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,w(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();w(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,r=this.size();s<r;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!M(e)||K(e))return;let r={v:e,i:s,n:this.norm.get(e)};this.records.push(r)}_addObject(e,s){let r={i:s,$:{}};this.keys.forEach((n,c)=>{let o=n.getFn?n.getFn(e):this.getFn(e,n.path);if(!!M(o)){if(b(o)){let i=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:l,value:h}=a.pop();if(!!M(h))if(w(h)&&!K(h)){let d={v:h,i:l,n:this.norm.get(h)};i.push(d)}else b(h)&&h.forEach((d,f)=>{a.push({nestedArrIndex:f,value:d})})}r.$[c]=i}else if(w(o)&&!K(o)){let i={v:o,n:this.norm.get(o)};r.$[c]=i}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function le(t,e,{getFn:s=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){const n=new U({getFn:s,fieldNormWeight:r});return n.setKeys(t.map(ae)),n.setSources(e),n.create(),n}function ve(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:r,records:n}=t,c=new U({getFn:e,fieldNormWeight:s});return c.setKeys(r),c.setIndexRecords(n),c}function v(t,{errors:e=0,currentLocation:s=0,expectedLocation:r=0,distance:n=u.distance,ignoreLocation:c=u.ignoreLocation}={}){const o=e/t.length;if(c)return o;const i=Math.abs(r-s);return n?o+i/n:i?1:o}function Be(t=[],e=u.minMatchCharLength){let s=[],r=-1,n=-1,c=0;for(let o=t.length;c<o;c+=1){let i=t[c];i&&r===-1?r=c:!i&&r!==-1&&(n=c-1,n-r+1>=e&&s.push([r,n]),r=-1)}return t[c-1]&&c-r>=e&&s.push([r,c-1]),s}const C=32;function Pe(t,e,s,{location:r=u.location,distance:n=u.distance,threshold:c=u.threshold,findAllMatches:o=u.findAllMatches,minMatchCharLength:i=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:l=u.ignoreLocation}={}){if(e.length>C)throw new Error(ke(C));const h=e.length,d=t.length,f=Math.max(0,Math.min(r,d));let g=c,p=f;const x=i>1||a,L=x?Array(d):[];let _;for(;(_=t.indexOf(e,p))>-1;){let E=v(e,{currentLocation:_,expectedLocation:f,distance:n,ignoreLocation:l});if(g=Math.min(E,g),p=_+h,x){let k=0;for(;k<h;)L[_+k]=1,k+=1}}p=-1;let $=[],F=1,T=h+d;const ge=1<<h-1;for(let E=0;E<h;E+=1){let k=0,A=T;for(;k<A;)v(e,{errors:E,currentLocation:f+A,expectedLocation:f,distance:n,ignoreLocation:l})<=g?k=A:T=A,A=Math.floor((T-k)/2+k);T=A;let Q=Math.max(1,f-A+1),D=o?d:Math.min(f+A,d)+h,O=Array(D+2);O[D+1]=(1<<E)-1;for(let I=D;I>=Q;I-=1){let N=I-1,X=s[t.charAt(N)];if(x&&(L[N]=+!!X),O[I]=(O[I+1]<<1|1)&X,E&&(O[I]|=($[I+1]|$[I])<<1|1|$[I+1]),O[I]&ge&&(F=v(e,{errors:E,currentLocation:N,expectedLocation:f,distance:n,ignoreLocation:l}),F<=g)){if(g=F,p=N,p<=f)break;Q=Math.max(1,2*f-p)}}if(v(e,{errors:E+1,currentLocation:f,expectedLocation:f,distance:n,ignoreLocation:l})>g)break;$=O}const P={isMatch:p>=0,score:Math.max(.001,F)};if(x){const E=Be(L,i);E.length?a&&(P.indices=E):P.isMatch=!1}return P}function De(t){let e={};for(let s=0,r=t.length;s<r;s+=1){const n=t.charAt(s);e[n]=(e[n]||0)|1<<r-s-1}return e}class he{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:c=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:i=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){if(this.options={location:s,threshold:r,distance:n,includeMatches:c,findAllMatches:o,minMatchCharLength:i,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(f,g)=>{this.chunks.push({pattern:f,alphabet:De(f),startIndex:g})},d=this.pattern.length;if(d>C){let f=0;const g=d%C,p=d-g;for(;f<p;)h(this.pattern.substr(f,C),f),f+=C;if(g){const x=d-C;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:r}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return r&&(p.indices=[[0,e.length-1]]),p}const{location:n,distance:c,threshold:o,findAllMatches:i,minMatchCharLength:a,ignoreLocation:l}=this.options;let h=[],d=0,f=!1;this.chunks.forEach(({pattern:p,alphabet:x,startIndex:L})=>{const{isMatch:_,score:$,indices:F}=Pe(e,p,x,{location:n+L,distance:c,threshold:o,findAllMatches:i,minMatchCharLength:a,includeMatches:r,ignoreLocation:l});_&&(f=!0),d+=$,_&&F&&(h=[...h,...F])});let g={isMatch:f,score:f?d/this.chunks.length:1};return f&&r&&(g.indices=h),g}}class S{constructor(e){this.pattern=e}static isMultiMatch(e){return ee(e,this.multiRegex)}static isSingleMatch(e){return ee(e,this.singleRegex)}search(){}}function ee(t,e){const s=t.match(e);return s?s[1]:null}class je extends S{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Ke extends S{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class He extends S{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class We extends S{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Ge extends S{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ze extends S{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ue extends S{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:c=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:i=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:l=u.ignoreLocation}={}){super(e),this._bitapSearch=new he(e,{location:s,threshold:r,distance:n,includeMatches:c,findAllMatches:o,minMatchCharLength:i,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class de extends S{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,r;const n=[],c=this.pattern.length;for(;(r=e.indexOf(this.pattern,s))>-1;)s=r+c,n.push([r,s-1]);const o=!!n.length;return{isMatch:o,score:o?0:1,indices:n}}}const W=[je,de,He,We,ze,Ge,Ke,ue],te=W.length,Ve=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ye="|";function Ue(t,e={}){return t.split(Ye).map(s=>{let r=s.trim().split(Ve).filter(c=>c&&!!c.trim()),n=[];for(let c=0,o=r.length;c<o;c+=1){const i=r[c];let a=!1,l=-1;for(;!a&&++l<te;){const h=W[l];let d=h.isMultiMatch(i);d&&(n.push(new h(d,e)),a=!0)}if(!a)for(l=-1;++l<te;){const h=W[l];let d=h.isSingleMatch(i);if(d){n.push(new h(d,e));break}}}return n})}const Qe=new Set([ue.type,de.type]);class Xe{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:n=u.minMatchCharLength,ignoreLocation:c=u.ignoreLocation,findAllMatches:o=u.findAllMatches,location:i=u.location,threshold:a=u.threshold,distance:l=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:r,minMatchCharLength:n,findAllMatches:o,ignoreLocation:c,location:i,threshold:a,distance:l},this.pattern=s?e:e.toLowerCase(),this.query=Ue(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let c=0,o=[],i=0;for(let a=0,l=s.length;a<l;a+=1){const h=s[a];o.length=0,c=0;for(let d=0,f=h.length;d<f;d+=1){const g=h[d],{isMatch:p,indices:x,score:L}=g.search(e);if(p){if(c+=1,i+=L,r){const _=g.constructor.type;Qe.has(_)?o=[...o,...x]:o.push(x)}}else{i=0,c=0,o.length=0;break}}if(c){let d={isMatch:!0,score:i/c};return r&&(d.indices=o),d}}return{isMatch:!1,score:1}}}const G=[];function Je(...t){G.push(...t)}function z(t,e){for(let s=0,r=G.length;s<r;s+=1){let n=G[s];if(n.condition(t,e))return new n(t,e)}return new he(t,e)}const B={AND:"$and",OR:"$or"},V={PATH:"$path",PATTERN:"$val"},Y=t=>!!(t[B.AND]||t[B.OR]),Ze=t=>!!t[V.PATH],qe=t=>!b(t)&&oe(t)&&!Y(t),se=t=>({[B.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function fe(t,e,{auto:s=!0}={}){const r=n=>{let c=Object.keys(n);const o=Ze(n);if(!o&&c.length>1&&!Y(n))return r(se(n));if(qe(n)){const a=o?n[V.PATH]:c[0],l=o?n[V.PATTERN]:n[a];if(!w(l))throw new Error(be(a));const h={keyId:H(a),pattern:l};return s&&(h.searcher=z(l,e)),h}let i={children:[],operator:c[0]};return c.forEach(a=>{const l=n[a];b(l)&&l.forEach(h=>{i.children.push(r(h))})}),i};return Y(t)||(t=se(t)),r(t)}function et(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let r=1;s.matches.forEach(({key:n,norm:c,score:o})=>{const i=n?n.weight:null;r*=Math.pow(o===0&&i?Number.EPSILON:o,(i||1)*(e?1:c))}),s.score=r})}function tt(t,e){const s=t.matches;e.matches=[],M(s)&&s.forEach(r=>{if(!M(r.indices)||!r.indices.length)return;const{indices:n,value:c}=r;let o={indices:n,value:c};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),e.matches.push(o)})}function st(t,e){e.score=t.score}function rt(t,e,{includeMatches:s=u.includeMatches,includeScore:r=u.includeScore}={}){const n=[];return s&&n.push(tt),r&&n.push(st),t.map(c=>{const{idx:o}=c,i={item:e[o],refIndex:o};return n.length&&n.forEach(a=>{a(c,i)}),i})}class R{constructor(e,s={},r){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new Le(this.options.keys),this.setCollection(e,r)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof U))throw new Error(_e);this._myIndex=s||le(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){!M(e)||(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let r=0,n=this._docs.length;r<n;r+=1){const c=this._docs[r];e(c,r)&&(this.removeAt(r),r-=1,n-=1,s.push(c))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:c,sortFn:o,ignoreFieldNorm:i}=this.options;let a=w(e)?w(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return et(a,{ignoreFieldNorm:i}),c&&a.sort(o),ce(s)&&s>-1&&(a=a.slice(0,s)),rt(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){const s=z(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:c,i:o,n:i})=>{if(!M(c))return;const{isMatch:a,score:l,indices:h}=s.searchIn(c);a&&n.push({item:c,idx:o,matches:[{score:l,value:c,norm:i,indices:h}]})}),n}_searchLogical(e){const s=fe(e,this.options),r=(i,a,l)=>{if(!i.children){const{keyId:d,searcher:f}=i,g=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(a,d),searcher:f});return g&&g.length?[{idx:l,item:a,matches:g}]:[]}const h=[];for(let d=0,f=i.children.length;d<f;d+=1){const g=i.children[d],p=r(g,a,l);if(p.length)h.push(...p);else if(i.operator===B.AND)return[]}return h},n=this._myIndex.records,c={},o=[];return n.forEach(({$:i,i:a})=>{if(M(i)){let l=r(s,i,a);l.length&&(c[a]||(c[a]={idx:a,item:i,matches:[]},o.push(c[a])),l.forEach(({matches:h})=>{c[a].matches.push(...h)}))}}),o}_searchObjectList(e){const s=z(e,this.options),{keys:r,records:n}=this._myIndex,c=[];return n.forEach(({$:o,i})=>{if(!M(o))return;let a=[];r.forEach((l,h)=>{a.push(...this._findMatches({key:l,value:o[h],searcher:s}))}),a.length&&c.push({idx:i,item:o,matches:a})}),c}_findMatches({key:e,value:s,searcher:r}){if(!M(s))return[];let n=[];if(b(s))s.forEach(({v:c,i:o,n:i})=>{if(!M(c))return;const{isMatch:a,score:l,indices:h}=r.searchIn(c);a&&n.push({score:l,key:e,value:c,idx:o,norm:i,indices:h})});else{const{v:c,n:o}=s,{isMatch:i,score:a,indices:l}=r.searchIn(c);i&&n.push({score:a,key:e,value:c,norm:o,indices:l})}return n}}R.version="6.6.2";R.createIndex=le;R.parseIndex=ve;R.config=u;R.parseQuery=fe;Je(Xe);const m={keyword:"",searchItems:null,fuse:null};function nt(){const t=[];document.querySelectorAll(".apps_item").forEach(e=>{const s=e.querySelector(".name");t.push({name:s.textContent,el:e,nameEl:s,clsss:"apps_item"})}),document.querySelectorAll(".links_item").forEach(e=>{const s=e;t.push({name:s.textContent,el:e,nameEl:s,clsss:"links_item"})}),m.searchItems=t,m.fuse=new R(t,{keys:["name"],includeScore:!0,includeMatches:!0,minMatchCharLength:1,threshold:.2})}const re=document.getElementById("keyword"),ct=/\w/;function ot(t){if(t==8)m.keyword.length>0&&(m.keyword=m.keyword.slice(0,m.keyword.length-1));else if(t==27)m.keyword="";else{let e=String.fromCharCode(96<=t&&t<=105?t-48:t);ct.test(e)||(e=""),e&&(m.keyword=m.keyword+e)}return m.keyword?re.innerHTML=`<span>${m.keyword}</span>`:re.innerHTML="",m.keyword}function it(t){var e=t.keyCode||t.which;if(!(t.ctrlKey||t.metaKey)&&!(e==9||e==13)){const s=m.keyword,r=ot(e);if(s===r&&r==="")return;if(r!==s){const n=m.fuse.search(r);console.log("searched",r,n),at(n)}}}function at(t){document.activeElement.blur();const e="matched";m.searchItems.forEach(s=>{s.el.setAttribute("tabindex",0),s.nameEl.innerHTML=s.name,s.el.classList.remove(e)}),t.forEach((s,r)=>{const n=s.item;r===0&&n.el.focus();const c=r+1;n.el.setAttribute("tabindex",c),n.el.classList.add(e),lt(n.nameEl,s.matches[0])})}function lt(t,e){e.indices.sort((o,i)=>i[1]-i[0]-(o[1]-o[0]));const s=e.indices[0],r=s[0],n=s[1]+1,c=e.value;t.innerHTML=`${c.slice(0,r)}<em>${c.slice(r,n)}</em>${c.slice(n,c.length)}`}function ht(){nt(),document.addEventListener("keydown",it)}const ut=new Date;document.addEventListener("DOMContentLoaded",async()=>{me(),J(),pe(),ye(),ht(),setInterval(J,1e3*60),console.log("done DOMContentLoaded",`${new Date-ut}ms`)});