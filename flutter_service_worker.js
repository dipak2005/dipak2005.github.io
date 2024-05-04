'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "af084c9c39039592a7924b99daf316a8",
"assets/AssetManifest.bin.json": "befef9c86aef95d1982d706431181258",
"assets/AssetManifest.json": "7285d3debdfdf1d38f2b1dc03c1f5441",
"assets/assets/gifs/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/images/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/images/api.png": "12aa7b5408da6e0e2f9ee256a30bdb3e",
"assets/assets/images/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/images/back.jpg": "df57e02566f99d6e99d37dafe7de06e3",
"assets/assets/images/beats.png": "6276474ceef9b76b924235ee63794f0b",
"assets/assets/images/bg2.png": "1b58ff1747e8e789609a33f34036baef",
"assets/assets/images/box.png": "2018e69bdaf0c0a7480a82f6a5e61820",
"assets/assets/images/budget.png": "856f95f22ea1b57344c3e0ad65c4d3b5",
"assets/assets/images/c.png": "78d825696a83fe3b3073591aaaddfa9d",
"assets/assets/images/chat.png": "4d3a24bf07af291d3ca69e5d74fcec8d",
"assets/assets/images/contactbird.png": "b6a228bf11bef86148f534047821bba9",
"assets/assets/images/coverter.png": "23ededbe5914155d4ec26df954c45c47",
"assets/assets/images/cpp.png": "912739354c36e606d7dbf1b63906f416",
"assets/assets/images/dart.png": "3db7590120313d8b32d245b7895546c2",
"assets/assets/images/deep.png": "318e37d22f06ff330129136fd6f48b12",
"assets/assets/images/dipak.jpg": "d7cfb0189ab44c89756eb3d46c97b78e",
"assets/assets/images/expense.png": "d760b2110c7c4c5e53c79c7908045afe",
"assets/assets/images/f2.png": "90543c8ff1226bc737805e2ef882e32f",
"assets/assets/images/f3.png": "69e24d24b0c8c9cae606a25506198681",
"assets/assets/images/face.png": "3f375a8a546b7c2947afea9c22d3ba44",
"assets/assets/images/figma.png": "b3a029ec594e6f8e5226adf2fbb82c27",
"assets/assets/images/firebase.png": "37645a7212cba8eddd2b8feaf41a0410",
"assets/assets/images/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/images/free.png": "6fdceaf846a13d4815ef26fdddd9adfe",
"assets/assets/images/galaxy.png": "f124ded4707db0595af608214817a84c",
"assets/assets/images/geeta.png": "54abb98d86e36ab15ae7aa1735a5a995",
"assets/assets/images/git.png": "b0300cae08787d3a0ee3d5445bb23805",
"assets/assets/images/gita.png": "216964ceb612413e9201e5db4bd8afe9",
"assets/assets/images/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/images/insta.png": "1eab3084742b20018e36348755407a6d",
"assets/assets/images/java.png": "5f08f5345cf9518ba47a35887330e8ee",
"assets/assets/images/linkdin.png": "26f1e831c6c8633b98cf3b5b6cfcb7dd",
"assets/assets/images/nike.png": "2f4c00c57059c2669251f1f7c2c744d5",
"assets/assets/images/sql.png": "2084bf7a28dbf088f0e137aed6244ae1",
"assets/assets/images/weather.png": "b026319fb95f7484664e2efe6af762c4",
"assets/assets/images/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/images/whatsapp.png": "6636aa613c3a7ced329aeed6aabd323d",
"assets/assets/images/x.png": "70f97970125487df14477068ceac399d",
"assets/assets/lotties/load.json": "234d55159e53a5524f8c00d7f6fd29ad",
"assets/assets/lotties/net.json": "93be19a200d0f5696f94f926b9f8b83a",
"assets/assets/lotties/theme.json": "060680bed319441a225db87d9f64c7d3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d8afcfcae7b997e33731130b1b7e6fe6",
"assets/NOTICES": "413c2e1fcda07669076c0da68870edce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3bf4e0cb0c33d1c2d538f4cfc09bfce2",
"/": "3bf4e0cb0c33d1c2d538f4cfc09bfce2",
"main.dart.js": "24186b14771f0e96a430d3f549f40a0f",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"version.json": "86e87c1105361b4b2b751aef361aeeb1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
