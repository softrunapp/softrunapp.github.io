'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "aa05aa09122217768cdb67002e406cea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "b4be058d8fecb52fccedaeb6f627afe3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "36640daffccc18cd739e21d42f221c2a",
".git/logs/refs/heads/main": "45ab090d76a710ede810b493a1fcea82",
".git/logs/refs/remotes/origin/main": "ae1a30cd7144fe28ec52a9fa9bc3e872",
".git/objects/0f/28c888b8b475451e011f52b81d0ece75d56391": "71f5bbf1e9d75dd332265dbfb58f6153",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/ccf02bae51273be98dad44b954ab78da78653f": "f04dfdf0eaf912f691d4ee249fdeac3a",
".git/objects/25/2efb47455662d49b9118bb0c12225502be28ec": "1cb53d187789bfea395b3eb52f865095",
".git/objects/26/67f5285eec7f8f91dd86f876911c1ee47b4e57": "9d3fa9a5e902bed10af1d450a5e3421c",
".git/objects/2b/a30058164bb17dddbff194299e17110c3c09ba": "621804cc4aaddc2c9c2183b0c576af04",
".git/objects/3e/e39921efa55f74eb6244cec5a54d263f421463": "031dc736a3cdd2d05f07501680f8382c",
".git/objects/45/b181bef5226b830c06c72a023fab2e077f2702": "2d85ad8b7ffe84252b93d0afaa70a7c1",
".git/objects/61/461835d73f2b77d6b3e62c3b87acc93a0838a5": "854accb8a1af504061ba484ab4cb3a4b",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/99e4b74f19d846af12bdf3aa89fffe68a7cfff": "b2f948e0e8f99dcf48909b2685c3ec61",
".git/objects/86/1b9edc78306b3a3a76d58835e52a2d0cff1152": "f94e7bd870fc6903e594366c5f3e6e89",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/fb3cdf72f9a01c2596af4e8d6b61a6d3a96514": "1891b1da4fc1432dbffe6a8093338b21",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/a7f74f9b213957a273921a240bf0d796195680": "a79dcc1924f30f9f3d4a9262d85718bb",
".git/objects/c7/f1a9a25267bf4bc4623fe4a598381276d30423": "003f1e015a65ed0dd4223070c86069cd",
".git/objects/cd/cc7e13b30bb24d1ed9c688e557ffaa92450672": "fea76fc2e210d497a89ff85789c8652c",
".git/objects/d9/86343ea7ceb65c84e0ec94c45b5df674ebef13": "5de133dc380df109ba25f6f2dab6c919",
".git/objects/dc/a7bec5fd34a6d5e49a306d40fc62024f4823be": "8ba5c2c10fc980f1e4f2d632f97b7282",
".git/objects/df/725ef35616fe41b14f1dc81a4847084ffae668": "c7b77362b4a60f9590c7ed5e69398b34",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/f8cc7e01287c2b831a0f3ceb555a3dce7ee49d": "470f8dc2429c31527df1fb90a3293606",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f9/500e0756a7f8e06f6920243dffcd01ed00a7e8": "076131eda22b6989e7a540ddea26aa74",
".git/objects/fa/b263d88c1b00d1e343c7a5e468d136e3955cde": "cb7c6b5abb0c46aa903579e3318621ab",
".git/objects/fa/ffcffd7f82cd930436f25f4223bd4dba24b324": "4a1dc8e87e38455c8ba00be9d35be777",
".git/objects/ff/fc1e85895940a5446c96e1c9aaa69deee67f71": "0593b95108b01ca0eae393fb2cf3b9f8",
".git/refs/heads/main": "d267157b78ac05e74bfc1fba9005ecee",
".git/refs/remotes/origin/main": "d267157b78ac05e74bfc1fba9005ecee",
"assets/AssetManifest.json": "5860cea18d0d9c8e102188dfe1c069b5",
"assets/assets/fonts/iran_yekan_reqular_mobile_fa_num.ttf": "d507fb9ef76a6aa4d0b42cf37dd64476",
"assets/assets/images/age_back.png": "ce5adfddfc5df7f5a52e3eb0de3dc38c",
"assets/assets/images/instruction_back.png": "85d8721c310a149a17522f98883f4b94",
"assets/assets/images/main_back.png": "a73a776f1daed8395bf24ca6f286958a",
"assets/assets/images/question_back.png": "107eac235db361aec326cfd6818f94a5",
"assets/assets/images/result_back.png": "7c5108ff13b1d33ef7c3179ad942e7ba",
"assets/assets/images/softrun_logo.png": "10d9bf3be225fc9e6ce7eb257dc4e774",
"assets/FontManifest.json": "1ebacc4b02118b6a52742a364afba8f7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "7ef62bdeb5bc62cb7aebbc2bc800d2f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f64ed662d5309af065d41e53c31a8f90",
"/": "f64ed662d5309af065d41e53c31a8f90",
"main.dart.js": "edf5443157bf97d4f04c821fd42a8cbe",
"manifest.json": "b3eab30700f41aa127ad2feddd376565",
"version.json": "563760bd81e477b4980b19c664b86976"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
