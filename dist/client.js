(()=>{"use strict";var e={n:n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},d:(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};const n=require("crypto");var t=e.n(n);const r=require("net");var o=e.n(r);const a=require("fs");var c=e.n(a);function i(e,n,t,r){var o=Buffer.alloc(9);o.writeUInt8(n,0),o.writeUInt32BE(t||0,1),o.writeUInt32BE((null==r?void 0:r.length)||0,5),e.write(Buffer.concat([o,r||Buffer.alloc(0)]))}var u=function(e,n){var t,r,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(c=0)),c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},l=process.argv[2].split(":"),s=l[0],f=l[1],d=f?parseInt(f):80,v=function(){try{if(32!==(e=c().readFileSync("client-id")).length)throw new Error("Invalid client-id file");return e}catch(n){var e=t().randomBytes(32);return c().writeFileSync("client-id",e),e}}(),h={};function p(e,n){var t=o().createConnection(d,s);t.on("data",(function(t){!function(e,n,t){i(e,1,n,t)}(n,e,t)})),t.on("close",(function(){!function(e,n){i(e,2,n)}(n,e),delete h[e]})),h[e]=t}!function(){var e,n,t,r;e=this,n=void 0,r=function(){var e;return u(this,(function(n){switch(n.label){case 0:e=function(){var e,n,t,r,a;return u(this,(function(c){switch(c.label){case 0:console.log("Connecting to server"),function(e,n){i(e,8,0,n)}(e=o().createConnection(81,"tunnel.unknownpgr.com"),v),u=Buffer.alloc(0),n=function(e){u=Buffer.concat([u,e]);for(var n=[];u.length>=9;){var t=u.readUInt8(0),r=u.readUInt32BE(1),o=u.readUInt32BE(5);if(u.length<9+o)break;var a=u.subarray(9,9+o);u=u.subarray(9+o),n.push({type:t,id:r,data:a})}return n},e.on("data",(function(t){for(var r=0,o=n(t);r<o.length;r++){var a=o[r],c=a.type,i=a.id,u=a.data;1&c&&(h[i]||p(i,e),h[i].write(u)),2&c&&h[i]&&(h[i].end(),delete h[i]),4&c&&console.log(u.toString())}})),t=new Promise((function(n,t){e.on("close",n),e.on("error",t)})),c.label=1;case 1:return c.trys.push([1,3,,4]),[4,t];case 2:return c.sent(),[3,4];case 3:return r=c.sent(),console.error(r),[3,4];case 4:for(a in console.log("Disconnected from server"),h)h[a].destroy(),delete h[a];return console.log("Waiting for 5 seconds"),[4,new Promise((function(e){return setTimeout(e,5e3)}))];case 5:return c.sent(),[2]}var u}))},n.label=1;case 1:return[5,e()];case 2:return n.sent(),[3,1];case 3:return[2]}}))},new((t=void 0)||(t=Promise))((function(o,a){function c(e){try{u(r.next(e))}catch(e){a(e)}}function i(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,i)}u((r=r.apply(e,n||[])).next())}))}()})();