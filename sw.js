if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,c,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+e.slice(1)};return Promise.all(c.map((e=>{switch(e){case"exports":return a;case"module":return r;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-a9229113"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/ChannelChip.a58c2866.css",revision:"ee489f684dbee3877dcbca3240c2adc8"},{url:"assets/ChannelChip.cd8dfb62.js",revision:"fb45839f248d7676fc24cffde2c2ef3d"},{url:"assets/ChannelNabinya.26954fd8.css",revision:"0d36f648795db7bcd493741b14267cba"},{url:"assets/ChannelNabinya.96dc5913.js",revision:"bebbe1f6723170d0c32675588f5e5327"},{url:"assets/ChannelVideos.485a39f1.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/ChannelVideos.835f2daa.js",revision:"ccfe9206c4df70c2159c00b0148c65e8"},{url:"assets/Comment.b4cd3cc0.js",revision:"ae6cf9c12b7a512402cbb4fb062c8389"},{url:"assets/Comment.b796dfe2.css",revision:"289c7cb72d65238408f4309464462cec"},{url:"assets/de.25927af4.js",revision:"6aa9b6f58717b504609c3eaa3ebf3c4d"},{url:"assets/en-ca.5cf6c08d.js",revision:"7cd85d5e2a65cfc2bdaf85a693d6ad7b"},{url:"assets/en-gb.85080157.js",revision:"68291a1ddb146de664310c3e0c4af492"},{url:"assets/en.8af850a3.js",revision:"f07f5685edd76fc12c9dbddffd3a441a"},{url:"assets/es.5baf7663.js",revision:"6f7367881ba574e1982b0e78aa6dc88d"},{url:"assets/fr.e8f20ab1.js",revision:"531495b0ceff42f2a786ff14971c343f"},{url:"assets/hu.3ac9ee9f.js",revision:"50653f060793865d6005f372ceb6c568"},{url:"assets/id.b26c021e.js",revision:"fc983629f14de018233572eaea232fc6"},{url:"assets/index.0fca9fc9.js",revision:"cfb1e1ae90546d16d8f684a6d05f6b56"},{url:"assets/InfiniteLoad.6bc83069.js",revision:"603771a58d05c15740739a292a363a08"},{url:"assets/it.48a553e6.js",revision:"eaef7e0bc70f3f9c03496f0ea2b5d454"},{url:"assets/ja.d4c3390b.js",revision:"4764ebfa6d18cf368525d91312f9b949"},{url:"assets/ko.a22f7d06.js",revision:"90c58c545ce5e9a4824a7e5e90ef2b0a"},{url:"assets/main.6b2f59cc.js",revision:"c70438a7cedaed43d64ce4baf9a6d40e"},{url:"assets/main.99acfdcb.js",revision:"7fc17be32fb472c342631b61ceb9a65d"},{url:"assets/main.f96a527c.css",revision:"e5e1fab7111163b3d6d29953f1c19d89"},{url:"assets/ms.de526bb1.js",revision:"3fb41d98aafb25e70ff6cdaf2ecd09b0"},{url:"assets/MusicBar2.7840ff72.css",revision:"261ed216ca0097de1ee04e00673f7aea"},{url:"assets/MusicBar2.d034f505.js",revision:"5e8be71cda93ec529a2a9684dcd57f5c"},{url:"assets/NotFound.0c7daa61.js",revision:"89839c67f0a0a55a415264a158c79a7b"},{url:"assets/PaginateLoad.e4ba28e1.js",revision:"b17599f0266a424872640ea885985e51"},{url:"assets/PlaceholderCard.d62401b1.css",revision:"9062952147a95611ea737b45c07f79b0"},{url:"assets/PlaceholderCard.fe058a9c.js",revision:"78df3c80ae909aec4801dfef1e58ce6d"},{url:"assets/pt-br.8a059174.js",revision:"c8d58cab821269de83c5656d21c158c9"},{url:"assets/ru.0aa0719a.js",revision:"b5bb3da0e73508409765d24d16f43743"},{url:"assets/seo.edb582cf.js",revision:"7fc17be32fb472c342631b61ceb9a65d"},{url:"assets/SongItem.70fc9da0.css",revision:"6b749a6c4996ddb6bf4a66f0d6a7ac1c"},{url:"assets/SongItem.f631c806.js",revision:"480adab84c7dae562890b8863ae10bca"},{url:"assets/th.350eb455.js",revision:"4da964e4524edc5c07e94d10c1872b82"},{url:"assets/tr.e83d3d67.js",revision:"115e0a5fa5845bb3962c95d4e1170769"},{url:"assets/TruncatedText.0408fe31.css",revision:"4ba9ee2d95d82808f9c27d499f575ee8"},{url:"assets/TruncatedText.5654f4d1.js",revision:"1a4744f08b653e3ac2846d30689cbeb7"},{url:"assets/ui.0c157f7f.js",revision:"b60ef16ded5819f2750ec94c4775d238"},{url:"assets/ui.142cccad.js",revision:"cc5709121c0fe5fc74c1acbf2564ce1b"},{url:"assets/ui.2997674c.js",revision:"0563b032dc3cb9251298292253d08f00"},{url:"assets/ui.366ad818.js",revision:"db80c827fa3094f9f32e7cfca5bb7a88"},{url:"assets/ui.367b4a9b.js",revision:"03e4f861b82cf382f3a1eb4314763730"},{url:"assets/ui.437fc29c.js",revision:"4db031ce3d5692104156b684736a82be"},{url:"assets/ui.52100c94.js",revision:"dbf0dc8791e9c8de1a1aead74dc34f58"},{url:"assets/ui.5c097c0a.js",revision:"df09863af4578bef7d3d3755ca09fd32"},{url:"assets/ui.6752587b.js",revision:"7249436fae2cf352787885bd9cfa0b41"},{url:"assets/ui.7079d555.js",revision:"4c4bcaf4a3b70110dab979235b948fd1"},{url:"assets/ui.86202de8.js",revision:"330bebab1c6bb2887e13f3c70a86899e"},{url:"assets/ui.a825be9f.js",revision:"8752dcbd6710f0f565ab54a76e34e8b3"},{url:"assets/ui.da185306.js",revision:"0c8b17aff0f16a828e838117172d38b8"},{url:"assets/ui.e58c55a8.js",revision:"9b10a8b3b3cf8edb3a95525f3a14535c"},{url:"assets/ui.ec48cc7b.js",revision:"6e18ba6ca8d6b0cffbf7c104210e70a0"},{url:"assets/ui.f971810e.js",revision:"3056e8203116c15f98226b17c655124d"},{url:"assets/ui.fb9105c1.js",revision:"421114d347137a6e977194543eef7ce3"},{url:"assets/vendor.06e82a89.css",revision:"18053132c7bf37d9a9f3eed60a963b93"},{url:"assets/vendor.b002b14f.js",revision:"a833f330cd09185b188111946cb25864"},{url:"assets/vi.1fd664d1.js",revision:"a8b549f7ad01bccb546720c9bc837cb8"},{url:"assets/WatchInfo.512af593.js",revision:"c637bb436e172e2b8bc73d23a164173b"},{url:"assets/WatchInfo.f906aa2e.css",revision:"485fa21c28481719017ddc13d49d2d01"},{url:"assets/WatchMugen.77e9f938.js",revision:"1819030c377348ee217f1c0e09b87dd6"},{url:"assets/WatchNabinya.2bb977ec.css",revision:"f7e2862f5fe5f0ad4b045f489afbba80"},{url:"assets/WatchNabinya.c2e00d55.js",revision:"846190fa34c727f695e0939c855d5e64"},{url:"assets/WatchPlaylist.9d7d2290.js",revision:"edb72a1a6bb4e961ca0a67b32d2c8347"},{url:"assets/WatchQuickEditor.31333de8.css",revision:"5f126730655f235ac6ffa7b81a9d4e75"},{url:"assets/WatchQuickEditor.f8a3cb6e.js",revision:"9a8e169a2c79117b781a875f6bb347d6"},{url:"assets/zh-tw.95a3775a.js",revision:"2eacf8a272c342e52883650d19dd56a9"},{url:"index.html",revision:"88bdf9953c469a0b19325b8b0037c2be"},{url:"seo.html",revision:"afb09dd8ad423e2ed385623ef2138cc0"},{url:"favicon.ico",revision:"7d7fc86124867b9ef5f9eda5499cc08e"},{url:"robots.txt",revision:"2846519fa410365afeae4b129fd9a2cd"},{url:"img/icons/android-chrome-192x192.png",revision:"4ff6b67de327a6db33719a024cec0b56"},{url:"img/icons/android-chrome-512x512.png",revision:"f8f2958c5d998cd69f1c7ec652d0d4eb"},{url:"manifest.webmanifest",revision:"65f50f08236653a350e07702817ace56"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/api/,/^\/assets/,/^\/img/,/^\/sitemap-.*/,/^\/statics.*/,/^.*\.js(\.map)?/,/^.*\.css/,/^.*\.webmanifest/]})),s.registerRoute(/https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,new s.CacheFirst({cacheName:"google-fonts",plugins:[new s.ExpirationPlugin({maxEntries:30}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/yt3.ggpht.com\/ytc\/(.*)/,new s.CacheFirst({cacheName:"channel-photo",plugins:[new s.ExpirationPlugin({maxAgeSeconds:86400,purgeOnQuotaError:!0}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/www.youtube.com\/player_api/,new s.CacheFirst({cacheName:"youtube-player",plugins:[new s.ExpirationPlugin({maxAgeSeconds:10800,maxEntries:1}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/proxy.nupa.moe\/holodex\/(stats|orgs).json$/,new s.CacheFirst({cacheName:"holodex-statics",plugins:[new s.ExpirationPlugin({maxAgeSeconds:10800}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/https:\/\/proxy.nupa.moe\/holodex\/statics\/.*$/,new s.CacheFirst({cacheName:"holodex-statics-route",plugins:[new s.ExpirationPlugin({maxAgeSeconds:10800}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
