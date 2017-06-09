/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */

var requirejs,require,define;!function(e){function n(e,n){return q.call(e,n)}function r(e,n){var r,i,t,o,u,f,l,c,s,p,d,a,g=n&&n.split("/"),m=h.map,y=m&&m["*"]||{};if(e){for(e=e.split("/"),u=e.length-1,h.nodeIdCompat&&j.test(e[u])&&(e[u]=e[u].replace(j,"")),"."===e[0].charAt(0)&&g&&(a=g.slice(0,g.length-1),e=a.concat(e)),s=0;s<e.length;s++)if(d=e[s],"."===d)e.splice(s,1),s-=1;else if(".."===d){if(0===s||1===s&&".."===e[2]||".."===e[s-1])continue;s>0&&(e.splice(s-1,2),s-=2)}e=e.join("/")}if((g||y)&&m){for(r=e.split("/"),s=r.length;s>0;s-=1){if(i=r.slice(0,s).join("/"),g)for(p=g.length;p>0;p-=1)if(t=m[g.slice(0,p).join("/")],t&&(t=t[i])){o=t,f=s;break}if(o)break;!l&&y&&y[i]&&(l=y[i],c=s)}!o&&l&&(o=l,f=c),o&&(r.splice(0,f,o),e=r.join("/"))}return e}function i(n,r){return function(){var i=v.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),p.apply(e,i.concat([n,r]))}}function t(e){return function(n){return r(n,e)}}function o(e){return function(n){g[e]=n}}function u(r){if(n(m,r)){var i=m[r];delete m[r],y[r]=!0,s.apply(e,i)}if(!n(g,r)&&!n(y,r))throw new Error("No "+r);return g[r]}function f(e){var n,r=e?e.indexOf("!"):-1;return r>-1&&(n=e.substring(0,r),e=e.substring(r+1,e.length)),[n,e]}function l(e){return e?f(e):[]}function c(e){return function(){return h&&h.config&&h.config[e]||{}}}var s,p,d,a,g={},m={},h={},y={},q=Object.prototype.hasOwnProperty,v=[].slice,j=/\.js$/;d=function(e,n){var i,o=f(e),l=o[0],c=n[1];return e=o[1],l&&(l=r(l,c),i=u(l)),l?e=i&&i.normalize?i.normalize(e,t(c)):r(e,c):(e=r(e,c),o=f(e),l=o[0],e=o[1],l&&(i=u(l))),{f:l?l+"!"+e:e,n:e,pr:l,p:i}},a={require:function(e){return i(e)},exports:function(e){var n=g[e];return"undefined"!=typeof n?n:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:c(e)}}},s=function(r,t,f,c){var s,p,h,q,v,j,x,w=[],b=typeof f;if(c=c||r,j=l(c),"undefined"===b||"function"===b){for(t=!t.length&&f.length?["require","exports","module"]:t,v=0;v<t.length;v+=1)if(q=d(t[v],j),p=q.f,"require"===p)w[v]=a.require(r);else if("exports"===p)w[v]=a.exports(r),x=!0;else if("module"===p)s=w[v]=a.module(r);else if(n(g,p)||n(m,p)||n(y,p))w[v]=u(p);else{if(!q.p)throw new Error(r+" missing "+p);q.p.load(q.n,i(c,!0),o(p),{}),w[v]=g[p]}h=f?f.apply(g[r],w):void 0,r&&(s&&s.exports!==e&&s.exports!==g[r]?g[r]=s.exports:h===e&&x||(g[r]=h))}else r&&(g[r]=f)},requirejs=require=p=function(n,r,i,t,o){if("string"==typeof n)return a[n]?a[n](r):u(d(n,l(r)).f);if(!n.splice){if(h=n,h.deps&&p(h.deps,h.callback),!r)return;r.splice?(n=r,r=i,i=null):n=e}return r=r||function(){},"function"==typeof i&&(i=t,t=o),t?s(e,n,r,i):setTimeout(function(){s(e,n,r,i)},4),p},p.config=function(e){return p(e)},requirejs._defined=g,define=function(e,r,i){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");r.splice||(i=r,r=[]),n(g,e)||n(m,e)||(m[e]=[e,r,i])},define.amd={jQuery:!0}}(),define("vendor/almond",function(){}),define("modules/logger",[],function(){"use strict";return{log:function(e){console.log(e)}}}),require(["modules/logger"],function(e){"use strict";e.log("RequireJS configured and working")}),define("main",function(){});