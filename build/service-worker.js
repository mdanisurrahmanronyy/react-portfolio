"use strict";var precacheConfig=[["/react-portfolio/index.html","b067412893e64cc3ebead206f8a348f6"],["/react-portfolio/static/css/main.7d605459.css","8c116d7bce05f29b36043b3baf6b79be"],["/react-portfolio/static/js/main.8c47d383.js","c4fdeac3538d0428560744327c9e65db"],["/react-portfolio/static/media/Crystal-Game.ece4cd55.png","ece4cd558f8ba7db3f8ee4d165392231"],["/react-portfolio/static/media/FaceYourself.43790198.png","437901982abf42c8a7a8d8dbdaf3e298"],["/react-portfolio/static/media/Giftastic.8ebfec8d.png","8ebfec8dc74a3f70d0bc086808dc7827"],["/react-portfolio/static/media/Hangman-game.b0210305.png","b02103050172c5b61fe0c63a763101e7"],["/react-portfolio/static/media/LIRI.3085a6f2.png","3085a6f2ba4ee6e6a88c87eee9a310ba"],["/react-portfolio/static/media/Psychic-game.7f6e6bb6.png","7f6e6bb65810e8f30a07461b02df6f20"],["/react-portfolio/static/media/React.6e8f68df.png","6e8f68df1509ab98bffab08b6f001c56"],["/react-portfolio/static/media/Train-Schedule.49cf7edb.png","49cf7edb37aa39059cfcd43b2b15c5c6"],["/react-portfolio/static/media/Trivia-Game.4d760dac.png","4d760dac2b3fcf6a3e28d93fae2ca7e1"],["/react-portfolio/static/media/backend-hangman.bf10f388.png","bf10f3884498213481ad01aec59c818c"],["/react-portfolio/static/media/bamazon.7f06b7cb.png","7f06b7cbc39269d1d45e3f6a0c8d6648"],["/react-portfolio/static/media/bootstrap.eb258788.png","eb258788826be3da8565761a3512908d"],["/react-portfolio/static/media/eventsms.9d9f3b64.png","9d9f3b64778ba374d6630798bba578d0"],["/react-portfolio/static/media/github.9ee9e99d.png","9ee9e99d2b5985fcdf24459a39fb0835"],["/react-portfolio/static/media/handlebars.1150ff21.png","1150ff21be3b817f26bb89810f7e08aa"],["/react-portfolio/static/media/javascript.6a4c201c.png","6a4c201cef84c174d0d93923f26b168c"],["/react-portfolio/static/media/jquery.7a774f7c.png","7a774f7c8e70e45818c39288c034d1ab"],["/react-portfolio/static/media/linkedin.0221a9fc.png","0221a9fc59db2b5697888b90ad0b390a"],["/react-portfolio/static/media/memory-game.24d1fec9.png","24d1fec975eb521d71a497237c993c1e"],["/react-portfolio/static/media/mern.121cbb28.jpg","121cbb28ae2b72c95f663e1e9e802d9e"],["/react-portfolio/static/media/mongodb.daeaaf51.png","daeaaf51189d49c32411056c83360f41"],["/react-portfolio/static/media/mysql.efd22267.png","efd22267efa1c9589fe5611454dfe821"],["/react-portfolio/static/media/nodejs.f7337d33.png","f7337d339216d05c1551688efb13a830"],["/react-portfolio/static/media/nytreact.01250d9f.png","01250d9fe893580888812504f438adfa"],["/react-portfolio/static/media/whistlr.515b5ea9.png","515b5ea9b1a723d989aadb7aab482d39"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),c=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var c="/react-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});