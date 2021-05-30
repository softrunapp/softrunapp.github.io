'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "853af9f9e33413965a7faecd8f4b377d",
"assets/assets/fonts/bold.ttf": "afa7a91dadd77b23634a0fdf18c148f3",
"assets/assets/fonts/medium.ttf": "99fc0816a09395454061301fefa42bf1",
"assets/assets/fonts/regular.ttf": "54a91b0619ccf9373d525109268219dc",
"assets/assets/images/add_alert_black_24dp.png": "566328a575d211bf2911a8efde9dbef3",
"assets/assets/images/baseline_arrow_back_black_48.png": "10e4447049ff94d92775d58f882c0178",
"assets/assets/images/belvedere_fam_icon_add.png": "8cbc573c25d68b89b4ad86aa7c8c7cae",
"assets/assets/images/belvedere_ic_close.png": "fa038acf1300075ebd316d795b0fd775",
"assets/assets/images/btc_icon.svg": "08719c5ed3e303ff659e9bb0338955b2",
"assets/assets/images/chart1.jpg": "233338272371d761f72882baf2e50502",
"assets/assets/images/chart2.jpg": "5ca4ee129accfa75573ec7284d233a32",
"assets/assets/images/dai_icon.svg": "ab15a1f634496345aaaa4cdffee17f53",
"assets/assets/images/didex_logo.png": "45498b1d1a1988874d5927aee3585192",
"assets/assets/images/eth_icon.svg": "1daaf84ad98de0ebf30c38e2275fa169",
"assets/assets/images/ic_arrow_up_normal.png": "d816b0a9700894f764852012e37fd213",
"assets/assets/images/ic_bitcoin.jpg": "351fdc97339ec9903df4e6e15d57dd87",
"assets/assets/images/ic_btc.svg": "f92890de8d6512e2597d378f00254e71",
"assets/assets/images/ic_button_copy.png": "0e98bbffcfa0995edd1cbc13fc60e7e1",
"assets/assets/images/ic_button_qr.png": "e7194cad3e1527a59708b3e8250487a8",
"assets/assets/images/ic_close.png": "32ba5573696f31519ae68d902b9aacb8",
"assets/assets/images/ic_dai.svg": "1a84a86b79b6305b2fb984b917c55b58",
"assets/assets/images/ic_down_arrow.png": "5420a4b53ba17e2da8ee98fe5942ed51",
"assets/assets/images/ic_eth.svg": "153f1d7cf9d4120b024e32bfdc1b7b3c",
"assets/assets/images/ic_icon_convert.png": "2678f1b03026eb75cd7d30163b86c587",
"assets/assets/images/ic_icon_coupon.png": "16151710525304eb827998d08bd2cc6b",
"assets/assets/images/ic_icon_finger.png": "21382492de8e87bc17ddc12759d213eb",
"assets/assets/images/ic_icon_hide_asset.png": "3c5a4250836d02f7b9d5490974bb9b6b",
"assets/assets/images/ic_icon_hide_small_balance.png": "58243f8b0c22d256cb17271af8d9c7b9",
"assets/assets/images/ic_icon_increase.png": "be0ecb73b29801dc92af35ea640a302f",
"assets/assets/images/ic_icon_logout.png": "fd91449edc39d171d1bf536e3d6d20ad",
"assets/assets/images/ic_icon_mail.png": "d249ceb6e0e5baded7e79f9419389e66",
"assets/assets/images/ic_icon_question.png": "9c6ab5a60bbff214ad92ba963179711d",
"assets/assets/images/ic_icon_refresh.png": "b790b55167125ec49f1c5b57ae11e4c3",
"assets/assets/images/ic_icon_show_asset.png": "0755ca3a703e86b2b205fa8dffe85947",
"assets/assets/images/ic_icon_show_small_balance.png": "1f2a210116d1e4e4d23dee5b77b3239f",
"assets/assets/images/ic_icon_star_active.png": "11767965780b7b37ac9a13d4a42d9507",
"assets/assets/images/ic_icon_star_passive.png": "ded2d11613aa2e4869ff622cc830a46a",
"assets/assets/images/ic_link.svg": "4b02bc11930246d53d859deaa960862f",
"assets/assets/images/ic_menu_alarm.png": "efec61a32fa0b91e80afda8254abb457",
"assets/assets/images/ic_menu_chat_w.png": "c2e3324f6d8ce256f6e025a2569fb805",
"assets/assets/images/ic_menu_device.png": "c303d01aa9e0040cb9a7af98f4afedf6",
"assets/assets/images/ic_menu_display.png": "6b1b3e733f6b5a51138619cba00d92c3",
"assets/assets/images/ic_menu_fee.png": "2284ce99e3542a4eefe4e55e5f42a8a3",
"assets/assets/images/ic_menu_history.png": "53885d346f77cff1d1ede55bb74075d2",
"assets/assets/images/ic_menu_kyc.png": "ef5bdf38ec2e4b8c36af8c572761420c",
"assets/assets/images/ic_menu_lang.png": "194f0e4bffd0b8b2903cb7748bdefeb9",
"assets/assets/images/ic_menu_log.png": "3ce98f9cdaf6edd012afb51e793a2b4f",
"assets/assets/images/ic_menu_notification.png": "5725e27a24fbb3cd8c37102d11a6c86d",
"assets/assets/images/ic_menu_order.png": "de91112c0ac3107cd02d35ab10c100f4",
"assets/assets/images/ic_menu_password.png": "9aecc2aaaac31c8e3161fef4b3428899",
"assets/assets/images/ic_menu_phishing.png": "f19646856ba2d294842e075159fee2b0",
"assets/assets/images/ic_menu_pin.png": "ead6b0dea6f5dca478edf21257720ba9",
"assets/assets/images/ic_menu_profit_loss.png": "5e9ff2df0e9995c072900029dc1909b9",
"assets/assets/images/ic_menu_report.png": "ea43af6d7540fd7d06ea572689328778",
"assets/assets/images/ic_menu_right_arrow.png": "fad36bec12c739f8f9bd5a35c04c1c31",
"assets/assets/images/ic_menu_security.png": "4ecf879affa4f2b88da607cfd043e0f1",
"assets/assets/images/ic_menu_settings_info.png": "3aa0dfdaafa3561ba5f91e0e2a6d25a8",
"assets/assets/images/ic_menu_timeout.png": "df5e2bf2017c369915c7d37d98566b4f",
"assets/assets/images/ic_mkr.svg": "216efb8dd6a1b0d686f211a6116ace00",
"assets/assets/images/ic_navbar_down_arrow.png": "9bee20d112663d79e1aa788182eed08f",
"assets/assets/images/ic_pin.png": "6897283ef4acfcfafdbcaca66410797e",
"assets/assets/images/ic_settings_nav.png": "ea4a105c1043c0fd88bb58ee0db5563b",
"assets/assets/images/ic_tab_balance.png": "41673617fce060b10dc03b040cddde23",
"assets/assets/images/ic_tab_chart.png": "d6664ab0b50f59be57e43765d72f0ec5",
"assets/assets/images/ic_tab_loop.png": "d945ddfcdd66a0eedcd37112d0f3ea98",
"assets/assets/images/ic_tab_person.png": "b530dc57772a1ed592e071c16fc4c6e1",
"assets/assets/images/ic_tab_wallet.png": "db571b9074dec24e220a9a3c243e92a8",
"assets/assets/images/ic_usdt.svg": "56872fca2aebdf723cffc6184558f5f3",
"assets/assets/images/link_icon.svg": "6f7b986779d085b3a5a845bba07f1dc6",
"assets/assets/images/mkr_icon.svg": "ce01951801431ff942d501278dc848a5",
"assets/assets/images/usdt_icon.svg": "7a77a1b646a10bdf5e453b47405fd5ec",
"assets/assets/images/zoom_out_map_black_24dp.png": "c4568a825c32bf541dea0d710b55364f",
"assets/FontManifest.json": "3039ccfc3ebf2211bbcd7edd236f6aca",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "45be59a5012f9552dfcaabdc796c055f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f1d9d23bc6ed1568f944e256f00c4a1b",
"/": "f1d9d23bc6ed1568f944e256f00c4a1b",
"main.dart.js": "441e4c809377a14290ccc0c219aadf22",
"manifest.json": "413c4532dcafd9c5a1da281130bab0eb",
"version.json": "c451173d96a9e2ccee580a50c6e4a7b0",
"web.rar": "5c8fbd36a0d581616b770a90817c33ec"
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
