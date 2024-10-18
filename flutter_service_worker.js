'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "397bf557e6e1488de0c3c121dfca0670",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "39e526a683a9747aefd8fb9ac72bbea7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71e352a38666d885f1d864d240218835",
".git/logs/refs/heads/main": "e64dc6fdcac79bed2138579bf9430d0c",
".git/logs/refs/remotes/origin/main": "00f9073889faec1d837139b12f02ac15",
".git/objects/06/4028a09d47776edd4dfbbbb13f9e74a8af1abd": "0b7e3e8400f47e31ec16daa6bf508bac",
".git/objects/06/fbeefff1c2b35d2ee72b8a286037814e0b5f24": "14ca98a7e9077ae52c353fa9517d9430",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/1ee00656b606b5f6052f4e1f473dda63ff92fb": "c76cd967bd112c38725e56c4b5556c08",
".git/objects/17/057a2bf7ab4bbc33ab2c291ecb29becf0086cd": "951b55187715cd1be96f9d5be8e04450",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/0f41c4fb10aef8d1e5114327a47aff75cb69f1": "46108602f56418181355074ca007fe0e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/7f7bd9df929d7b548f0abae1b9e03a555dbab0": "be60ae50dfece8dde83b677a375b8911",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/24/43812f2f1ea8f918769e93a2d9a417d18def7f": "8fa3ed45fbf4e8dce12ca4128aedaadf",
".git/objects/27/a613307b661004da600a18ed2ea355e7e4e558": "9eb5f3d19073eeb95462d7d4c64f6479",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/2c/05e84df2512315bdecfd73a265cd450c751d62": "dab60dd1a7fd8f9f34b3be0520fbd352",
".git/objects/37/608820943424b96f63098815218fac6ba6caa3": "6e13fffe68ff7a11499e521aa26f60c1",
".git/objects/3d/96b1bc6c77b5aba33eaf6c9100c9a1bbccb73d": "98318c37a6992c2c05f029f3f292ee9e",
".git/objects/42/b6791157b51852df66b2fdb7937f6d144a0b6f": "1fc281e0c1ca950f388a8556fedcf487",
".git/objects/43/b2dce26d96d88a2f8c9316a495207600c93a25": "c0e75a71bebf0648f8766225391683e1",
".git/objects/44/8949fdd7f138cef43a8c88b2e52f1187baba7d": "e72ab2866cadef3ecd7d7daa1649673d",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/6e3a1ad57e3530ca7e43e21a76e09f482ef4a8": "5d844e34a7bf63c53aa831e14c9e99c0",
".git/objects/52/57686390d3957934d30c8d1dc06880aa6bdd05": "f74769192b13922cbcb35584d54e6bc6",
".git/objects/53/2b2d745eea5ce4c4218abada34b33356e26c4d": "be362fd36b66ef70ba5f3e6b19cfa986",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/3bb85ec0e13a07fe44b5cf7b50103c350a2e5c": "ea847e93945f5d03480f9efcfed934a6",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/d0acac70ac649394c8537a95e8cc3a5e0eced1": "75a3ea253660817b90fef40a311c949a",
".git/objects/5c/4eb5e1adc995b54206d974dc40a9dfbeee7484": "35ddc89d511934b488c8b16ef94c16f1",
".git/objects/5d/5b189d1de6b446d15498fb13e1c293b5a97d76": "e88721d0e1b96d5c10f31b2d1f65a30e",
".git/objects/5e/cc2d090221286cfd837479a770a1f3497526e4": "73f4c9c61e5d1e9ee7e6e381c199e9ff",
".git/objects/5f/8cef5ef489a1347a79667346453eaa5a9a8ae5": "6d7fbf47ffd4ade3432f9e26cd39cf86",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/8c1795dee5c328e85b8eec47459ace6c6b3afc": "a062775540eed7e810765a8d0e06a493",
".git/objects/6e/4a8ad78b25ef0b19b6f9d8ade0aaa389f4d229": "ea22c93a0a77d47153166e202c40031a",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/a8a9e8ad83b2442fa2d83c741246793980a5cf": "ee434b64cd97c0ae1027b18a2218f5b3",
".git/objects/75/1b3c99f32e1f5fc10ba362f8d300d4c3e1d5d0": "b8b64343de1e919476bca21eb54ea40b",
".git/objects/76/40edff271895365d390bb1890c94c00f57587a": "e767273d72a14f22b2d8c7afae699f80",
".git/objects/76/dd5c71d73fb0c63c7a0fa4495b6d60fd317dd3": "36f66e0df344f164a51c24fd371a3b01",
".git/objects/7c/863e0c70fe2c646829d29ff489b3564f8e6d60": "09cfa6441f3fe9cb178eca65ca488f67",
".git/objects/83/a6ebe28b7b18ef5f889ad9a9ac8ca868d2bc07": "a7ab799bb1170c4a5433d53fbd9d1fc3",
".git/objects/84/44143dcee530d246c56888c836ccefafd12d57": "8d1cf03b5ec7f4940447ef536be73283",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5b530d37bd61ec215efc18e432370701ffb40a": "bfb7aa8e21f7e8a96d14536111cc4078",
".git/objects/8a/4aca2dc27c1078bead6965f38ec48786d3ed27": "30194ee58fb4d085ff5e61b53188d60c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/984e7e8ce8269c6ce5ac7b98ec9e98006962e0": "54fd162141a3c187e455b5b6d9cfd886",
".git/objects/91/7e69d569b7930222c00ae9b03e49e8ff324564": "19a2033d2b3f6b32cf4375de13ea0aaa",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/4f3a136d05991f0ec7750cf6ceb0fa9192b0cc": "f26c0080954e2bc9ea2a5d742b7f3b42",
".git/objects/94/98bfa84e522157ad6e859de0ba1c22e6d3a237": "9234c730bfb5cc2be588e94d8db34b28",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/ce04f0be82501401ecc19742896b67ee0792d3": "76db7ed5420bcb5fc5fc0fac824a4d4a",
".git/objects/9c/0924f113c02b2e4b24377f7f8fd0a64b5c9be1": "af8155dae2025d8a5326c4af55f38f9b",
".git/objects/9e/54425ba7780afe3c0be08dde34b2f2793bedee": "a739a00deaf7e448818110d67f295e6e",
".git/objects/a8/c6daa55780664dc78e6be9627e59651b439093": "39406c183cd48076a0c1d04b1dd43e4d",
".git/objects/ab/ef49eaaf487973553976dcb30e25b12ee44ba5": "75b109cee183cfe8c302b597aade00bd",
".git/objects/ad/3169eb33012e1c8d23bb711002c74e26ddddfb": "e68e521c60eb47a9d59bcbb58c2e7cf3",
".git/objects/ae/97caa0321a090cc03db148072582a7cfcbcd9d": "9f57c78976873dd0321bb776cb815ed9",
".git/objects/b2/c7b9f95d138c5b206cae39c6ee2b4f06a11dab": "92ad3d9a0fab81d3aa9bb0c01f3f2932",
".git/objects/b3/6ac436ae87ac52932ffe785c16f0aac0fbfeb3": "f7013a20a30d2ece7c76fc37d981527c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/4398841caaea0c3340bfd391d391710818adcc": "6937e66aac551f426f429d54486c5f7c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/bb8f5f37d1b3f4d282870c3fce91182f450824": "badb3274a35bb7e75b42c227010572af",
".git/objects/c5/16376834e67587e093d01c04955c3729a89fc1": "fbf6522e19ad061011c886d3b058fdc6",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/1dd4a252fe2e6c51919b1e669b047a024f74ae": "afe4dadcd15e697a7b9709b64e59f9be",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/48285fc4d85f5a25408311e8636e750ce5101c": "582fac09397ddd9550046a85c5f4065b",
".git/objects/d1/8bd5e54c2b70aa66b1ae23b6faf559275e21f0": "0dc3978330f9857d1d5b2d1ec5b02649",
".git/objects/d1/d410f15a22f0f89f4d5e2884fd108a82835845": "0ecc06163abd1a6fe630dbbdfe4acd7a",
".git/objects/d3/d618123b4b42d70c60db4fdd2282bebb5e7f9d": "586efc3ce5e744b81f0ac75688511237",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/1711428425e6539439ec764fb77cb738dfe8c7": "0afe17d3520b8f0ff8e06469e337979d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/d613affbd6078f940b79e4325288f1cc1a608f": "01a66a6e0b539c5e7d5912a90e216f74",
".git/objects/dd/88b374a64b81dcdc3eeff9e4022680e1197a3e": "8d26667ba580387348251dafd4041309",
".git/objects/e0/4aa0788ecc52ad1a2467cc70e1df79d437cd34": "0c855e618ee3962213cf1f01ad7de990",
".git/objects/e5/28e7728f5692daa388cb8eea2d37e163b4aea6": "fe9f869ab8ec33e180b70054de5c8a1f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6d2324b815c94157ee43fa6e8ad73f902f9190": "2f3f523336fa6ac1ef225928d662b100",
".git/objects/ed/b8767b3a6af62dcce426a05f319f45ea22e950": "0c7a24aa2d8acfe7b09abdb4f12225e9",
".git/objects/f1/c79023551feb095f4a557f99c72ba0c81687b6": "56ba9f49e638015d197e9cfbd48febf9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/619c0ca52505b327793d9bad64145ede112133": "dcd93cd2965f62a34bd11e9ba87962c2",
".git/objects/ff/a04af7377901be9034b15b88fffae5bb27d05d": "63f525c95575bed309eccd866a096c7b",
".git/refs/heads/main": "d09bba52961310e17b0c49eb568753b0",
".git/refs/remotes/origin/main": "d09bba52961310e17b0c49eb568753b0",
"assets/AssetManifest.bin": "7136e21e9a3f42e96664af86d0387881",
"assets/AssetManifest.bin.json": "92c0e98ded55447cda980b550f5fa89d",
"assets/AssetManifest.json": "3a42f6134a08f8dd75311fb3490d776b",
"assets/assets/irshad.jpg": "c59b85f82e6cab8aceaaafca89d35054",
"assets/assets/irshad_background.png": "5d22583ad28a6664293d3cdcff2261f1",
"assets/assets/project_data.json": "d63355d9ed1dc408c95a428ba79dfa89",
"assets/FontManifest.json": "e13b2172ddf04a4745b4bcdb55d83aee",
"assets/fonts/Calibre-Light.ttf": "73b7f4385ae2f8028e1b365a48038582",
"assets/fonts/Calibre-LightItalic.ttf": "3ede1be73648125ed40cfd07e1292bf1",
"assets/fonts/Calibre-Medium.ttf": "88178c3f2a309ad11520ee62765072d0",
"assets/fonts/Calibre-MediumItalic.ttf": "6eb2ac5a1d38f19c7085b131356b355e",
"assets/fonts/Calibre-Regular.ttf": "96e0a7c47fdd7a8f05007837ead73b35",
"assets/fonts/Calibre-RegularItalic.ttf": "c408807a3001d1f7773f5f7fe513c165",
"assets/fonts/Calibre-Semibold.ttf": "8325d174436d55e995c7214faafcd47b",
"assets/fonts/Calibre-SemiboldItalic.ttf": "71941c0c0420e703494d6e2a62bc12d4",
"assets/fonts/MaterialIcons-Regular.otf": "b87158dce7a47ba9ce9740515b2a5be7",
"assets/fonts/SFMono-Medium.ttf": "02bbb63875ebdbf463e764bb3d8ff190",
"assets/fonts/SFMono-MediumItalic.ttf": "92f9fb02060aabf378f0639de5e033ef",
"assets/fonts/SFMono-Regular.ttf": "d892da9f8895428033ec68a6c0426ba6",
"assets/fonts/SFMono-RegularItalic.ttf": "8eddf7adea62d66b9e4d031b58dfaaa6",
"assets/fonts/SFMono-Semibold.ttf": "8282ed99a84b8e9c803baf3df5b76c01",
"assets/fonts/SFMono-SemiboldItalic.ttf": "ca70ba8a9030ed9bb7e081f63fd3831b",
"assets/NOTICES": "0370896e9d569dedb60e6b5dd80b2a0e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bb7259a4f79361e9d1ab26bf86819540",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5e27ce32b3be8c54447c95fea96a881a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac2d2b18a6306ba17b51502e3d74da0d",
"/": "ac2d2b18a6306ba17b51502e3d74da0d",
"main.dart.js": "e59144a4e35498aa541b6ae942c496b5",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
