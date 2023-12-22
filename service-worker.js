/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["Admin/admin.html","1542fe9632fcf6f4c4603e91de8740a6"],["Admin/banovaniRacuni.html","2c5bcd2630cbda87b86ea892dcf14f49"],["Admin/dodajNovuKategoriju.html","be0f0a2918271396641287f460fc92ca"],["Admin/managerRacuna.html","a87ec8c522b9cf0d151a9f346afef8c4"],["Admin/permisijeRacuna.html","28ea5353aab47907b949b20c59528fa7"],["Admin/pitanja.html","ece91cc9bad19a526c3a4a404744e713"],["Admin/pitanjeSaOdgovorom.html","81cc9ce6f954e916427b78eccb553c1f"],["Admin/postojeciRacuni.html","18c004a0d7cdc26f1793be6f22c06d3d"],["Admin/urediKategoriju.html","b4010979bd7088812af1d46a880c60a4"],["Manager/manager.html","27b8f5ee5b32f22253a39d16ad35df7b"],["Manager/myBusiness.html","f2dcd42ee0443945936d7e243f8c3166"],["Manager/newService.html","6685698ea24e7e0af0458155dcd37683"],["Manager/reservations.html","fe02bcca28c73acb08014f48c8ec2ec6"],["Manager/reservationsHistory.html","d3aef06988d7dd667ed11e4b4b2c74d9"],["Manager/serviceAdded.html","bf5a1e161009529a5727c5d454673807"],["Manager/services.html","1efd82eb268401bbfbcb610856a839b3"],["MostarSmjestaj.html","4fc896a4b60896034a9e9107cfc6ff1a"],["NoUser/index.html","5c3f185391549d4bfabec5a845769f55"],["README.md","c05102bd9f973ca952e5e94924edc99c"],["User/accomodationFavorites.html","ab217b90a18adbc8f3508ab8f8ad1d54"],["User/accomodationUser.html","25848f5537dfd744e6d0a852f837fced"],["User/beautyUser.html","84b180bbd289bd197f63c4ab550e141d"],["User/editAccount.html","72828ffaad7067be49d1e9e8d8c8e293"],["User/historijaPrethodneUser.html","6335687f0a5cb96450e59cfe837f519e"],["User/historijaUser.html","69aa248347afe126e5050b2c2fc51d44"],["User/hotelBristolUser.html","a8bd7f3d16c0ebc5b1a6a509acca2faa"],["User/ratingFilterUser.html","80b4a777e36e71bce04e1eed72ebfe07"],["User/tersBosankaUser.html","ceca6e1dfa4072d0af44f3115d41b10b"],["User/user.html","83f131e51360087d2a489e174aa6d99d"],["User/userAccount.html","a1f6c10fa66fb151fbcf7924bb948bae"],["aboutUs.html","7d309e0bbaa90d669575c40364ba9546"],["accomodation.html","be4b928f915bb14e7fbe3b2cfb20f499"],["beautySalon.html","79284fa5ca2afb001acea73b557f1bd4"],["help.css","fbf2dbe6c87f3c9e254733b34d439e18"],["help.html","9e83e3f0259a6b698935664895cb2d17"],["hotelBristol.html","320fb94f5774ee27a6b258b7aa3cede1"],["images/BookMySpot.png","f1ccfaf9a6595d4e1f190b236a9c01b0"],["images/Bristol1.jpg","bd614a8345c936c6c222e4ff67f18baf"],["images/Bristol2.jpg","374ce94075fb41a5f2589eb11924e5b0"],["images/Bristol3.jpg","ba5c702b0df71acb6fb93c7565e7191e"],["images/Bristol4.jpg","81ece035fd34d84bc05431c2206b1182"],["images/Bristol5.jpg","e303b7486c3f94b1dd96ead3b56d99ec"],["images/Ordinacija.jpg","543b193920ed03e34a709adeb4750779"],["images/TersBosanka1.jpg","542d4004c3c0c3a957406601e77182f2"],["images/asi.jpg","655a298453bbf72e7126909bfc3e5718"],["images/beauty.jpg","60c57e5d8a643067060dbbbf7bc4f97c"],["images/beautySalonLivno.jpg","42886e03a404c5663ba1a46ae279c288"],["images/bosanka1.jpg","be91e22c0638cab0002096ad18974fb2"],["images/bosanka2.JPG","8afacf6d8ca3aa5ce8f76b850226a1fc"],["images/bosanka3.JPG","58b80652d1574557f870c3a5f7f46d6f"],["images/bosanka4.jpeg","372956e0d0f0a1fd5e3da13ee4cdfedd"],["images/boy.png","258aceed30772f1cc702e269b67d0bd7"],["images/bristol.jpg","ade9b429236c737eff64fe3f7256c110"],["images/businessman.png","205d4846fc34b8b875771bab47155f02"],["images/fizioHistorija.jpg","f5dc0ace31f8f4d0a296b04a6f83c90c"],["images/frizerskiSalonSM.jpg","05ce3feb325a1ae567eda70f37f4caa7"],["images/hijabiWoman.png","4c5173291df735e208a8937be3345e4a"],["images/jpMan.png","b907dc756c5ac066437b40a2dd900187"],["images/krechoSlika.webp","82cb6a4e691d56e84fe91b1d4b02e38a"],["images/kreco.jpeg","eb60e91f6e4693e7e1b314a3ba42527d"],["images/man.png","7ca348f16d1d2bc1b97e7c6f675d41fc"],["images/man2.png","306fd0fb64f67ff40f81d8e37f8bf674"],["images/man3.png","39aaa3b8ab9f67704cd2afaed393ed36"],["images/man4.png","2f71619dfea6bd1c5da62e6d1593e4b6"],["images/man5.png","f07d66e00150e23a0d8b2e10b7b0f86b"],["images/man6.png","c0db21dbfe71772f7d0b6336d2557f4e"],["images/man7.png","0b16965dda868b4de52628b34a583648"],["images/novitas.jpg","0bfeb985bb0b8d6683a46b1ad8d3690e"],["images/ordinacijaHistorija.jpg","86959d8156ba37ac2cd99e56dfe115f6"],["images/ordination.jpg","04da76e7cf9e3305ac8f27a0fb167fe6"],["images/pasha.jpg","c13ca5193ad0931acf7d502715d442e9"],["images/restaurant.jpg","b4a6e19163c8da9642ac1ff1aa12392c"],["images/room.jpg","38d95f31c1816d25a9c79b30645eb81a"],["images/salonLjepoteMostar.jpg","f557fd477e6c86437cbb3c2ae780a01e"],["images/servis.jpg","8d32c8c2cdd6fad04de2ee656e9faf64"],["images/shm.jpg","4841742767f56a297f76c2be129c4b2c"],["images/user.png","69bb0ec11e240e166a968e0635462a2c"],["images/vehicles.jpg","ddfacbfb2b0d4069333108f535908948"],["images/woman.png","583fb620631e2cf7025ad6e5976269bd"],["images/woman2.png","81b46b08f792fe7e709079cbae8d448c"],["images/woman3.png","398bfc94b50004dde7fab1219c36f6a5"],["images/woman4.png","53ea600a74ecb7012c37af8a8e559eb6"],["images/woman5.png","6b9a3e616e07fcb60fd17ce5287a0c13"],["manifest.json","b17cb7517d2dda6bccb0a613f38a1720"],["prijava.html","88c4ed998aaa3d5173bd8b45b4bfcc3c"],["ratingFilter.html","c47982f9ca860de5b8b9e8dc11c4bcf4"],["script.js","b498855a4880513321cc6f9da5c220b7"],["scriptHotel.js","98776c1ea34d2f4252acbd72d5573898"],["settings.html","a766fbe3aa27fd0fffa6e15ade2b3f90"],["styles/aboutUs.css","aa2d9c2c7b2c75c56ba573e23febe2c8"],["styles/admin.css","d321944bc15f4fc2c030104c5eca48f6"],["styles/help.css","e1e544efb79637352efab0a3e34931d9"],["styles/historijaUser.css","a16813837a76f419a3bef3b798e1937d"],["styles/home.css","3b62e958daed0ab0a9a8580df3a4edee"],["styles/homeUser.css","09b6fe2da73d5b315605a305d168c753"],["styles/hotelBristol.css","c3a109ceb8d7a1e3e753425f6edffcd7"],["styles/hotelBristolUser.css","48dc6041a515eaec2b0860396a1f1861"],["styles/loginStyle.css","6e0c8efe24b57e226c9ab8051b3e3b4e"],["styles/myAccount.css","316565fdc485b0a0df0600bc2792318d"],["styles/myBusiness.css","9be542ace1aa3d28bdcf91664494a06e"],["styles/reservations.css","1a808ed93cefd75b2ced74026d16c543"],["styles/services.css","fffb9d39767993bf628061bfa9d24075"],["styles/settings.css","59195eb79c4a4b90ee0cf3611b2fae6e"],["styles/style.css","3f5af40c3f055a008466345f1862135d"],["styles/tersBosanka.css","0bb8603c765137ff5ef328b8db7a761d"],["styles/uredjivanjeKategorije.css","f51290b4b0a8f2aabbca84df519a41ea"],["tersBosanka.html","29436163b53bfa676450dadabce986a2"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







