/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1152:function(e,t){function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var r=e[t];"object"!=typeof r||Object.isFrozen(r)||n(r)})),e}var r=n,o=n;r.default=o;class l{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function h(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const d=e=>!!e.kind;class f{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(text){this.buffer+=c(text)}openNode(e){if(!d(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){d(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class m{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{m._collapse(e)})))}}class x extends m{constructor(e){super(),this.options=e}addKeyword(text,e){""!==text&&(this.openNode(e),this.addText(text),this.closeNode())}addText(text){""!==text&&this.add(text)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new f(this,this.options).value()}finalize(){return!0}}function source(e){return e?"string"==typeof e?e:e.source:null}const E=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;const v="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",N="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",R="\\b(0b[01]+)",_={begin:"\\\\[\\s\\S]",relevance:0},M={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[_]},k={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[_]},O={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},A=function(e,t,n={}){const r=h({className:"comment",begin:e,end:t,contains:[]},n);return r.contains.push(O),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},L=A("//","$"),I=A("/\\*","\\*/"),S=A("#","$"),j={className:"number",begin:y,relevance:0},B={className:"number",begin:N,relevance:0},P={className:"number",begin:R,relevance:0},T={className:"number",begin:y+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},C={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[_,{begin:/\[/,end:/\]/,relevance:0,contains:[_]}]}]},D={className:"title",begin:v,relevance:0},U={className:"title",begin:w,relevance:0},H={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var $=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:v,UNDERSCORE_IDENT_RE:w,NUMBER_RE:y,C_NUMBER_RE:N,BINARY_NUMBER_RE:R,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>source(e))).join("")}(t,/.*\b/,e.binary,/\b.*/)),h({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:_,APOS_STRING_MODE:M,QUOTE_STRING_MODE:k,PHRASAL_WORDS_MODE:O,COMMENT:A,C_LINE_COMMENT_MODE:L,C_BLOCK_COMMENT_MODE:I,HASH_COMMENT_MODE:S,NUMBER_MODE:j,C_NUMBER_MODE:B,BINARY_NUMBER_MODE:P,CSS_NUMBER_MODE:T,REGEXP_MODE:C,TITLE_MODE:D,UNDERSCORE_TITLE_MODE:U,METHOD_GUARD:H,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function z(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function K(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=z,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function G(e,t){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map((e=>source(e))).join("|")+")"}(...e.illegal))}function V(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function W(e,t){void 0===e.relevance&&(e.relevance=1)}const F=["of","and","for","in","not","or","if","then","parent","list","value"];function J(e,t,n="keyword"){const r={};return"string"==typeof e?o(n,e.split(" ")):Array.isArray(e)?o(n,e):Object.keys(e).forEach((function(n){Object.assign(r,J(e[n],t,n))})),r;function o(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");r[n[0]]=[e,X(n[0],n[1])]}))}}function X(e,t){return t?Number(t):function(e){return F.includes(e.toLowerCase())}(e)?0:1}function Z(e,{plugins:t}){function n(t,n){return new RegExp(source(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,t="|"){let n=0;return e.map((e=>{n+=1;const t=n;let r=source(e),o="";for(;r.length>0;){const e=E.exec(r);if(!e){o+=r;break}o+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+t):(o+=e[0],"("===e[0]&&n++)}return o})).map((e=>`(${e})`)).join(t)}(e),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const e=this.matcherRe.exec(s);if(!e)return null;const i=e.findIndex(((e,i)=>i>0&&void 0!==e)),t=this.matchIndexes[i];return e.splice(0,i),Object.assign(e,t)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new r;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(s){const e=this.getMatcher(this.regexIndex);e.lastIndex=this.lastIndex;let t=e.exec(s);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const e=this.getMatcher(0);e.lastIndex=this.lastIndex+1,t=e.exec(s)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=h(e.classNameAliases||{}),function t(r,l){const c=r;if(r.isCompiled)return c;[V].forEach((e=>e(r,l))),e.compilerExtensions.forEach((e=>e(r,l))),r.__beforeBegin=null,[K,G,W].forEach((e=>e(r,l))),r.isCompiled=!0;let d=null;if("object"==typeof r.keywords&&(d=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=J(r.keywords,e.case_insensitive)),r.lexemes&&d)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return d=d||r.lexemes||/\w+/,c.keywordPatternRe=n(d,!0),l&&(r.begin||(r.begin=/\B|\b/),c.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(c.endRe=n(r.end)),c.terminatorEnd=source(r.end)||"",r.endsWithParent&&l.terminatorEnd&&(c.terminatorEnd+=(r.end?"|":"")+l.terminatorEnd)),r.illegal&&(c.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return h(e,{variants:null},t)})));if(e.cachedVariants)return e.cachedVariants;if(Y(e))return h(e,{starts:e.starts?h(e.starts):null});if(Object.isFrozen(e))return h(e);return e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,c)})),r.starts&&t(r.starts,l),c.matcher=function(e){const t=new o;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(c),c}(e)}function Y(e){return!!e&&(e.endsWithParent||Y(e.starts))}function Q(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,c(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const ee={"after:highlightElement":({el:e,result:t,text:text})=>{const n=ne(e);if(!n.length)return;const r=document.createElement("div");r.innerHTML=t.value,t.value=function(e,t,n){let r=0,o="";const l=[];function h(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function d(e){function t(e){return" "+e.nodeName+'="'+c(e.value)+'"'}o+="<"+te(e)+[].map.call(e.attributes,t).join("")+">"}function f(e){o+="</"+te(e)+">"}function m(e){("start"===e.event?d:f)(e.node)}for(;e.length||t.length;){let t=h();if(o+=c(n.substring(r,t[0].offset)),r=t[0].offset,t===e){l.reverse().forEach(f);do{m(t.splice(0,1)[0]),t=h()}while(t===e&&t.length&&t[0].offset===r);l.reverse().forEach(d)}else"start"===t[0].event?l.push(t[0].node):l.pop(),m(t.splice(0,1)[0])}return o+c(n.substr(r))}(n,ne(r),text)}};function te(e){return e.nodeName.toLowerCase()}function ne(e){const t=[];return function e(n,r){for(let o=n.firstChild;o;o=o.nextSibling)3===o.nodeType?r+=o.nodeValue.length:1===o.nodeType&&(t.push({event:"start",offset:r,node:o}),r=e(o,r),te(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:o}));return r}(e,0),t}const re={},ie=e=>{console.error(e)},ae=(e,...t)=>{console.log(`WARN: ${e}`,...t)},oe=(e,t)=>{re[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),re[`${e}/${t}`]=!0)},se=c,le=h,ce=Symbol("nomatch");var ue=function(e){const t=Object.create(null),n=Object.create(null),o=[];let c=!0;const h=/(^(<[^>]+>|\t|)+|\n)/gm,d="Could not find the language '{}', did you forget to load/include a language module?",f={disableAutodetect:!0,name:"Plain text",contains:[]};let m={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:x};function E(e){return m.noHighlightRe.test(e)}function v(e,t,n,r){let code="",o="";"object"==typeof t?(code=e,n=t.ignoreIllegals,o=t.language,r=void 0):(oe("10.7.0","highlight(lang, code, ...args) has been deprecated."),oe("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),o=e,code=t);const l={code:code,language:o};j("before:highlight",l);const c=l.result?l.result:w(l.language,l.code,n,r);return c.code=l.code,j("after:highlight",c),c}function w(e,n,r,h){function f(e,t){const n=O.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function x(){null!=S.subLanguage?function(){if(""===P)return;let e=null;if("string"==typeof S.subLanguage){if(!t[S.subLanguage])return void B.addText(P);e=w(S.subLanguage,P,!0,j[S.subLanguage]),j[S.subLanguage]=e.top}else e=y(P,S.subLanguage.length?S.subLanguage:null);S.relevance>0&&(T+=e.relevance),B.addSublanguage(e.emitter,e.language)}():function(){if(!S.keywords)return void B.addText(P);let e=0;S.keywordPatternRe.lastIndex=0;let t=S.keywordPatternRe.exec(P),n="";for(;t;){n+=P.substring(e,t.index);const data=f(S,t);if(data){const[e,r]=data;if(B.addText(n),n="",T+=r,e.startsWith("_"))n+=t[0];else{const n=O.classNameAliases[e]||e;B.addKeyword(t[0],n)}}else n+=t[0];e=S.keywordPatternRe.lastIndex,t=S.keywordPatternRe.exec(P)}n+=P.substr(e),B.addText(n)}(),P=""}function E(e){return e.className&&B.openNode(O.classNameAliases[e.className]||e.className),S=Object.create(e,{parent:{value:S}}),S}function v(e,t,n){let r=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(r){if(e["on:end"]){const n=new l(e);e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return v(e.parent,t,n)}function N(e){return 0===S.matcher.regexIndex?(P+=e[0],1):(U=!0,0)}function R(e){const t=e[0],n=e.rule,r=new l(n),o=[n.__beforeBegin,n["on:begin"]];for(const n of o)if(n&&(n(e,r),r.isMatchIgnored))return N(t);return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?P+=t:(n.excludeBegin&&(P+=t),x(),n.returnBegin||n.excludeBegin||(P=t)),E(n),n.returnBegin?0:t.length}function _(e){const t=e[0],r=n.substr(e.index),o=v(S,e,r);if(!o)return ce;const l=S;l.skip?P+=t:(l.returnEnd||l.excludeEnd||(P+=t),x(),l.excludeEnd&&(P=t));do{S.className&&B.closeNode(),S.skip||S.subLanguage||(T+=S.relevance),S=S.parent}while(S!==o.parent);return o.starts&&(o.endSameAsBegin&&(o.starts.endRe=o.endRe),E(o.starts)),l.returnEnd?0:t.length}let M={};function k(t,o){const l=o&&o[0];if(P+=t,null==l)return x(),0;if("begin"===M.type&&"end"===o.type&&M.index===o.index&&""===l){if(P+=n.slice(o.index,o.index+1),!c){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=M.rule,t}return 1}if(M=o,"begin"===o.type)return R(o);if("illegal"===o.type&&!r){const e=new Error('Illegal lexeme "'+l+'" for mode "'+(S.className||"<unnamed>")+'"');throw e.mode=S,e}if("end"===o.type){const e=_(o);if(e!==ce)return e}if("illegal"===o.type&&""===l)return 1;if(D>1e5&&D>3*o.index){throw new Error("potential infinite loop, way more iterations than matches")}return P+=l,l.length}const O=L(e);if(!O)throw ie(d.replace("{}",e)),new Error('Unknown language: "'+e+'"');const A=Z(O,{plugins:o});let I="",S=h||A;const j={},B=new m.__emitter(m);!function(){const e=[];for(let t=S;t!==O;t=t.parent)t.className&&e.unshift(t.className);e.forEach((e=>B.openNode(e)))}();let P="",T=0,C=0,D=0,U=!1;try{for(S.matcher.considerAll();;){D++,U?U=!1:S.matcher.considerAll(),S.matcher.lastIndex=C;const e=S.matcher.exec(n);if(!e)break;const t=k(n.substring(C,e.index),e);C=e.index+t}return k(n.substr(C)),B.closeAllNodes(),B.finalize(),I=B.toHTML(),{relevance:Math.floor(T),value:I,language:e,illegal:!1,emitter:B,top:S}}catch(t){if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:t.message,context:n.slice(C-100,C+100),mode:t.mode},sofar:I,relevance:0,value:se(n),emitter:B};if(c)return{illegal:!1,relevance:0,value:se(n),emitter:B,language:e,top:S,errorRaised:t};throw t}}function y(code,e){e=e||m.languages||Object.keys(t);const n=function(code){const e={relevance:0,emitter:new m.__emitter(m),value:se(code),illegal:!1,top:f};return e.emitter.addText(code),e}(code),r=e.filter(L).filter(S).map((e=>w(e,code,!1)));r.unshift(n);const o=r.sort(((a,b)=>{if(a.relevance!==b.relevance)return b.relevance-a.relevance;if(a.language&&b.language){if(L(a.language).supersetOf===b.language)return 1;if(L(b.language).supersetOf===a.language)return-1}return 0})),[l,c]=o,h=l;return h.second_best=c,h}const N={"before:highlightElement":({el:e})=>{m.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{m.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},R=/^(<[^>]+>|\t)+/gm,_={"after:highlightElement":({result:e})=>{m.tabReplace&&(e.value=e.value.replace(R,(e=>e.replace(/\t/g,m.tabReplace))))}};function M(element){let e=null;const t=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=m.languageDetectRe.exec(t);if(n){const t=L(n[1]);return t||(ae(d.replace("{}",n[1])),ae("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>E(e)||L(e)))}(element);if(E(t))return;j("before:highlightElement",{el:element,language:t}),e=element;const text=e.textContent,r=t?v(text,{language:t,ignoreIllegals:!0}):y(text);j("after:highlightElement",{el:element,result:r,text:text}),element.innerHTML=r.value,function(element,e,t){const r=e?n[e]:t;element.classList.add("hljs"),r&&element.classList.add(r)}(element,t,r.language),element.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(element.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const k=()=>{if(k.called)return;k.called=!0,oe("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");document.querySelectorAll("pre code").forEach(M)};let O=!1;function A(){if("loading"===document.readyState)return void(O=!0);document.querySelectorAll("pre code").forEach(M)}function L(e){return e=(e||"").toLowerCase(),t[e]||t[n[e]]}function I(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{n[e.toLowerCase()]=t}))}function S(e){const t=L(e);return t&&!t.disableAutodetect}function j(e,t){const n=e;o.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){O&&A()}),!1),Object.assign(e,{highlight:v,highlightAuto:y,highlightAll:A,fixMarkup:function(e){return oe("10.2.0","fixMarkup will be removed entirely in v11.0"),oe("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),html=e,m.tabReplace||m.useBR?html.replace(h,(e=>"\n"===e?m.useBR?"<br>":e:m.tabReplace?e.replace(/\t/g,m.tabReplace):e)):html;var html},highlightElement:M,highlightBlock:function(e){return oe("10.7.0","highlightBlock will be removed entirely in v12.0"),oe("10.7.0","Please use highlightElement now."),M(e)},configure:function(e){e.useBR&&(oe("10.3.0","'useBR' will be removed entirely in v11.0"),oe("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),m=le(m,e)},initHighlighting:k,initHighlightingOnLoad:function(){oe("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),O=!0},registerLanguage:function(n,r){let o=null;try{o=r(e)}catch(e){if(ie("Language definition for '{}' could not be registered.".replace("{}",n)),!c)throw e;ie(e),o=f}o.name||(o.name=n),t[n]=o,o.rawDefinition=r.bind(null,e),o.aliases&&I(o.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(n))n[t]===e&&delete n[t]},listLanguages:function(){return Object.keys(t)},getLanguage:L,registerAliases:I,requireLanguage:function(e){oe("10.4.0","requireLanguage will be removed entirely in v11."),oe("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=L(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:S,inherit:le,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=data=>{e["before:highlightBlock"](Object.assign({block:data.el},data))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=data=>{e["after:highlightBlock"](Object.assign({block:data.el},data))})}(e),o.push(e)},vuePlugin:Q(e).VuePlugin}),e.debugMode=function(){c=!1},e.safeMode=function(){c=!0},e.versionString="10.7.3";for(const e in $)"object"==typeof $[e]&&r($[e]);return Object.assign(e,$),e.addPlugin(N),e.addPlugin(ee),e.addPlugin(_),e}({});e.exports=ue},123:function(e,t,n){!function(n){"use strict";var r="Compound",o="MemberExpression",l="Literal",c=function(e,t){var n=new Error(e+" at character "+t);throw n.index=t,n.description=e,n},h=!0,d={"-":h,"!":h,"~":h,"+":h},f={"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":10,"/":10,"%":10},m=function(e){var t,n=0;for(var r in e)(t=r.length)>n&&e.hasOwnProperty(r)&&(n=t);return n},x=m(d),E=m(f),v={true:!0,false:!1,null:null},w=function(e){return f[e]||0},y=function(e,t,n){return{type:"||"===e||"&&"===e?"LogicalExpression":"BinaryExpression",operator:e,left:t,right:n}},N=function(e){return e>=48&&e<=57},R=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=128&&!f[String.fromCharCode(e)]},_=function(e){return 36===e||95===e||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e>=128&&!f[String.fromCharCode(e)]},M=function(e){for(var t,n,h=0,m=e.charAt,M=e.charCodeAt,k=function(i){return m.call(e,i)},O=function(i){return M.call(e,i)},A=e.length,L=function(){for(var e=O(h);32===e||9===e||10===e||13===e;)e=O(++h)},I=function(){var e,t,n=j();return L(),63!==O(h)?n:(h++,(e=I())||c("Expected expression",h),L(),58===O(h)?(h++,(t=I())||c("Expected expression",h),{type:"ConditionalExpression",test:n,consequent:e,alternate:t}):void c("Expected :",h))},S=function(){L();for(var t=e.substr(h,E),n=t.length;n>0;){if(f.hasOwnProperty(t)&&(!R(O(h))||h+t.length<e.length&&!_(O(h+t.length))))return h+=n,t;t=t.substr(0,--n)}return!1},j=function(){var e,t,n,r,o,l,d,i,f;if(l=B(),!(t=S()))return l;for(o={value:t,prec:w(t)},(d=B())||c("Expected expression after "+t,h),r=[l,o,d];(t=S())&&0!==(n=w(t));){for(o={value:t,prec:n},f=t;r.length>2&&n<=r[r.length-2].prec;)d=r.pop(),t=r.pop().value,l=r.pop(),e=y(t,l,d),r.push(e);(e=B())||c("Expected expression after "+f,h),r.push(o,e)}for(e=r[i=r.length-1];i>1;)e=y(r[i-1].value,r[i-2],e),i-=2;return e},B=function(){var t,n,r;if(L(),t=O(h),N(t)||46===t)return P();if(39===t||34===t)return T();if(91===t)return $();for(r=(n=e.substr(h,x)).length;r>0;){if(d.hasOwnProperty(n)&&(!R(O(h))||h+n.length<e.length&&!_(O(h+n.length))))return h+=r,{type:"UnaryExpression",operator:n,argument:B(),prefix:!0};n=n.substr(0,--r)}return!(!R(t)&&40!==t)&&U()},P=function(){for(var e,t,n="";N(O(h));)n+=k(h++);if(46===O(h))for(n+=k(h++);N(O(h));)n+=k(h++);if("e"===(e=k(h))||"E"===e){for(n+=k(h++),"+"!==(e=k(h))&&"-"!==e||(n+=k(h++));N(O(h));)n+=k(h++);N(O(h-1))||c("Expected exponent ("+n+k(h)+")",h)}return t=O(h),R(t)?c("Variable names cannot start with a number ("+n+k(h)+")",h):46===t&&c("Unexpected period",h),{type:l,value:parseFloat(n),raw:n}},T=function(){for(var e,t="",n=k(h++),r=!1;h<A;){if((e=k(h++))===n){r=!0;break}if("\\"===e)switch(e=k(h++)){case"n":t+="\n";break;case"r":t+="\r";break;case"t":t+="\t";break;case"b":t+="\b";break;case"f":t+="\f";break;case"v":t+="\v";break;default:t+=e}else t+=e}return r||c('Unclosed quote after "'+t+'"',h),{type:l,value:t,raw:n+t+n}},C=function(){var t,n=O(h),r=h;for(R(n)?h++:c("Unexpected "+k(h),h);h<A&&(n=O(h),_(n));)h++;return t=e.slice(r,h),v.hasOwnProperty(t)?{type:l,value:v[t],raw:t}:"this"===t?{type:"ThisExpression"}:{type:"Identifier",name:t}},D=function(e){for(var t,n,o=[],l=!1,d=0;h<A;){if(L(),(t=O(h))===e){l=!0,h++,41===e&&d&&d>=o.length&&c("Unexpected token "+String.fromCharCode(e),h);break}if(44===t){if(h++,++d!==o.length)if(41===e)c("Unexpected token ,",h);else if(93===e)for(var f=o.length;f<d;f++)o.push(null)}else(n=I())&&n.type!==r||c("Expected comma",h),o.push(n)}return l||c("Expected "+String.fromCharCode(e),h),o},U=function(){var e,t;for(t=40===(e=O(h))?H():C(),L(),e=O(h);46===e||91===e||40===e;)h++,46===e?(L(),t={type:o,computed:!1,object:t,property:C()}):91===e?(t={type:o,computed:!0,object:t,property:I()},L(),93!==(e=O(h))&&c("Unclosed [",h),h++):40===e&&(t={type:"CallExpression",arguments:D(41),callee:t}),L(),e=O(h);return t},H=function(){h++;var e=I();if(L(),41===O(h))return h++,e;c("Unclosed (",h)},$=function(){return h++,{type:"ArrayExpression",elements:D(93)}},z=[];h<A;)59===(t=O(h))||44===t?h++:(n=I())?z.push(n):h<A&&c('Unexpected "'+k(h)+'"',h);return 1===z.length?z[0]:{type:r,body:z}};M.version="0.3.5",M.toString=function(){return"JavaScript Expression Parser (JSEP) v"+M.version},M.addUnaryOp=function(e){return x=Math.max(e.length,x),d[e]=h,this},M.addBinaryOp=function(e,t){return E=Math.max(e.length,E),f[e]=t,this},M.addLiteral=function(e,t){return v[e]=t,this},M.removeUnaryOp=function(e){return delete d[e],e.length===x&&(x=m(d)),this},M.removeAllUnaryOps=function(){return d={},x=0,this},M.removeBinaryOp=function(e){return delete f[e],e.length===E&&(E=m(f)),this},M.removeAllBinaryOps=function(){return f={},E=0,this},M.removeLiteral=function(e){return delete v[e],this},M.removeAllLiterals=function(){return v={},this},e.exports?t=e.exports=M:t.parse=M}()},1384:function(e,t){t.read=function(e,t,n,r,o){var l,c,h=8*o-r-1,d=(1<<h)-1,f=d>>1,m=-7,i=n?o-1:0,x=n?-1:1,s=e[t+i];for(i+=x,l=s&(1<<-m)-1,s>>=-m,m+=h;m>0;l=256*l+e[t+i],i+=x,m-=8);for(c=l&(1<<-m)-1,l>>=-m,m+=r;m>0;c=256*c+e[t+i],i+=x,m-=8);if(0===l)l=1-f;else{if(l===d)return c?NaN:1/0*(s?-1:1);c+=Math.pow(2,r),l-=f}return(s?-1:1)*c*Math.pow(2,l-r)},t.write=function(e,t,n,r,o,l){var c,h,d,f=8*l-o-1,m=(1<<f)-1,x=m>>1,rt=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,i=r?0:l-1,E=r?1:-1,s=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(h=isNaN(t)?1:0,c=m):(c=Math.floor(Math.log(t)/Math.LN2),t*(d=Math.pow(2,-c))<1&&(c--,d*=2),(t+=c+x>=1?rt/d:rt*Math.pow(2,1-x))*d>=2&&(c++,d/=2),c+x>=m?(h=0,c=m):c+x>=1?(h=(t*d-1)*Math.pow(2,o),c+=x):(h=t*Math.pow(2,x-1)*Math.pow(2,o),c=0));o>=8;e[n+i]=255&h,i+=E,h/=256,o-=8);for(c=c<<o|h,f+=o;f>0;e[n+i]=255&c,i+=E,c/=256,f-=8);e[n+i-E]|=128*s}},1385:function(e,t){var n={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==n.call(e)}},884:function(e,t){var n=[].indexOf;e.exports=function(e,t){if(n)return e.indexOf(t);for(var i=0;i<e.length;++i)if(e[i]===t)return i;return-1}}}]);