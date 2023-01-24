(()=>{"use strict";var n={n:e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},d:(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(n,e)=>Object.prototype.hasOwnProperty.call(n,e)};const e=require("net");var t=n.n(e);const r=require("crypto");var o=n.n(r);function c(n,e,t,r){var o=Buffer.alloc(9);o.writeUInt8(e,0),o.writeUInt32BE(t||0,1),o.writeUInt32BE((null==r?void 0:r.length)||0,5),n.write(Buffer.concat([o,r||Buffer.alloc(0)]))}function a(n,e){c(n,4,0,e)}function i(n){c(n,32)}function u(n){return"".concat("https","://").concat(n,".").concat("tunnel.unknownpgr.com")}function l(n){return o().createHash("sha256").update(n).update("CIadLOjDL7QguYCPwbKlVHkvc58FzwcgYT3uc2pgDG1wAoQzuhjEj4FCjQ").digest("hex").slice(0,16)}var f=0,s={},d={},p=t().createServer((function(n){var e=null;function t(){for(var n in console.log("Client disconnected: "+e),delete s[e],d[e])d[e][n].destroy()}console.log("Client connected"),n.on("close",t),n.on("error",t);var r,o=(r=Buffer.alloc(0),function(n){r=Buffer.concat([r,n]);for(var e=[];r.length>=9;){var t=r.readUInt8(0),o=r.readUInt32BE(1),c=r.readUInt32BE(5);if(r.length<9+c)break;var a=r.subarray(9,9+c);r=r.subarray(9+c),e.push({type:t,id:o,data:a})}return e});n.on("data",(function(t){for(var r=0,c=o(t);r<c.length;r++){var f=c[r],p=f.type,v=f.id,h=f.data;8&p&&(e=l(h),console.log("Client registered: "+e),s[e]=n,d[e]={},a(n,Buffer.from(u(e)))),1&p&&d[e]&&d[e][v]&&d[e][v].write(h),2&p&&d[e]&&d[e][v]&&d[e][v].end(),4&p&&console.log(h.toString()),16&p&&i(n)}}))})),v=t().createServer((function(n){return e=void 0,t=void 0,o=function(){var e,t;return function(n,e){var t,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c&&(c=0,i[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(r){return e=null,t=f++,n.on("data",(function(r){if(!e){if(e=function(n){var e=n.toString().split("\n").map((function(n){return n.trim()})).slice(1).reduce((function(n,e){var t=e.split(": "),r=t[0],o=t[1];return n[r]=o,n}),{});return e.Host&&e.Host.includes(".")?e.Host.split(".")[0]:null}(r),!e||!s[e])return console.log("Bad Request"),void n.write("HTTP/1.1 307 Temporary Redirect\n"+"Location: https://tunnel.unknownpgr.com/404.html?url=".concat(encodeURIComponent(u(e||"")),"\n\n"));d[e][t]=n;var o=function(){e&&(s[e]&&c(s[e],2,t),delete d[e][t])};n.on("close",o),n.on("error",o)}!function(n,e,t){c(n,1,e,t)}(s[e],t,r)})),[2]}))},new((r=void 0)||(r=Promise))((function(n,c){function a(n){try{u(o.next(n))}catch(n){c(n)}}function i(n){try{u(o.throw(n))}catch(n){c(n)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(n){n(t)}))).then(a,i)}u((o=o.apply(e,t||[])).next())}));var e,t,r,o}));p.listen(81,(function(){console.log("Client server listening on port ".concat(81))})),v.listen(80,(function(){console.log("User server listening on port ".concat(80))}))})();