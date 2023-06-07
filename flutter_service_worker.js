'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "56d4fcc5072ea7107344cc53bc17edad",
"index.html": "edfea543b57c4f3a7987194c5774892b",
"/": "edfea543b57c4f3a7987194c5774892b",
"main.dart.js": "9e65534591a879f26b462b001500a4aa",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e42dbb497b64d02675e50d0291212ae0",
"assets/AssetManifest.json": "9fddd3e626f75a7bc65c2ed86a3e0f46",
"assets/NOTICES": "41cbf1643effb81dee95ef2c0729a37f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "956482a3d426ac5a7314f1ddf87f7bbf",
"assets/fonts/MaterialIcons-Regular.otf": "011103697ee3e605d4b9327e8607d366",
"assets/assets/christmashla.json": "1dab829a4e6e8baf4dfccce87e1eab2d",
"assets/assets/background.jpg": "630af7c00238b70622c87f4a8ec6f81f",
"assets/assets/ramhla.json": "f8f8d5a0289d7a44462b63a2eb510974",
"assets/assets/logo.png": "7759f63852d6d70e6e3f43ba84fb34e9",
"assets/assets/pathianhla.json": "f58aaa1bb932eeabeea2b521a122b988",
"assets/assets/khrifahlabu.jpg": "b8dd10ff95938871bb21c91fbb99ba31",
"assets/assets/lovesong.json": "1a80426f11813a49f80df957dff0aed7",
"assets/assets/kumtharhla.json": "0df8f743b7e6c356c48eaa9e28566b0f",
"assets/assets/playstore.png": "68b21e96a0c8462e2c1e5a99aa304516",
"assets/assets/khrihfahlabu.json": "40c7c5ea3489ad41017cc4cc9deaa682",
"assets/assets/chords/Fmaj7%2520(4).png": "88aa5ca7cc8a045c7058270deb8deaa0",
"assets/assets/chords/Amaj7%2520(5).png": "dc25435900c66cc71721490e82fab6c6",
"assets/assets/chords/Bsus4%2520(2).png": "a1ad14f06cd110ef38012c92c4cf4f89",
"assets/assets/chords/G7%2520(1).png": "31a219dec080951dff2d5e1f9e90de60",
"assets/assets/chords/Bmaj7%2520(4).png": "f9dedfd42e185e2ac798ce4a40d18ce4",
"assets/assets/chords/Am%2520(2).png": "22dd468d67c6881549140815894c8fc7",
"assets/assets/chords/Emaj7.png": "b8c71b2c12e5ca1a4a131a69434cef46",
"assets/assets/chords/A%2520(3).png": "bc1e1e2642964999690b1ed079506c48",
"assets/assets/chords/F%2520(4).png": "d9650f532f8127d2fa132ef0e0869e1f",
"assets/assets/chords/B%2520(1).png": "ee4f676e792ae256a379fdecb3a3d5f3",
"assets/assets/chords/Fsus4%2520(2).png": "1be7ad39114efe394dac388f33111c27",
"assets/assets/chords/Emaj7%2520(5).png": "00495c798b27859d2e4d8b3e0b0f8555",
"assets/assets/chords/E%2520(6).png": "a07dd74ab5ff2b7eba73d57d4b29694a",
"assets/assets/chords/A7%2520(3).png": "c2e0709d9bb8092a72e73b62c4513ff9",
"assets/assets/chords/Gsus4%2520(1).png": "ed2e358f1b7e2a0effcfaa21f927464d",
"assets/assets/chords/Cm.png": "81a7bf2a0c4ee90df37e22b58d4d7da3",
"assets/assets/chords/Bm%2520(1).png": "859d295bdd0178433aa55afb5b526d01",
"assets/assets/chords/G%2520(2).png": "92b4d4dcb2065b10ec28a22858449a8f",
"assets/assets/chords/Cm7%2520(2).png": "601e3fcb075d77c48455efbc296e4612",
"assets/assets/chords/D7%2520(2).png": "0b32c8dbd1a51c79314ac4db58cf9a64",
"assets/assets/chords/Csus4%2520(1).png": "e5c199e6c87304b41041ccfbf7821b4d",
"assets/assets/chords/Dm7%2520(1).png": "39df12d98ca59c96b71aaefd3333cebf",
"assets/assets/chords/Dsus4%2520(1).png": "d5184e79c99e5769e09339b1472bf2a6",
"assets/assets/chords/Gm%2520(1).png": "b812f0f94075386942c587f8acdbeb11",
"assets/assets/chords/D%2520(1).png": "7744bf2106dc801b6ed6ed2d654a4b6c",
"assets/assets/chords/c%2520(6).png": "6fc4a7a72606f2b5149c78335c70a67d",
"assets/assets/chords/D7%2520(3).png": "a773cdfab39fc0d61087a3e46ac65316",
"assets/assets/chords/G%2520(3).png": "3f33e7150b929adb9968dd9d4203cd91",
"assets/assets/chords/A7.png": "257f6dfbb3df82b53dfda1d1d074969d",
"assets/assets/chords/Bm.png": "529b00478bf233324bc8217d7aa39ad4",
"assets/assets/chords/Am7%2520(1).png": "dcbaa59a6c90bc1ff059e534ed8bfccd",
"assets/assets/chords/Fm7%2520(2).png": "505fba4c6b267955508f0c0d83053554",
"assets/assets/chords/Asus4.png": "e108a830baeed350a35dd914099717a7",
"assets/assets/chords/A7%2520(2).png": "370856e024027b8ff2dad9a66a754800",
"assets/assets/chords/Emaj7%2520(4).png": "3ff29a1bce20bedc58ccc9d64b3c6f62",
"assets/assets/chords/F%2520(5).png": "969bed0df41f8fd3c57b0ee1ae3825bf",
"assets/assets/chords/B7%2520(1).png": "70b304e034f6b4a2dfc95f35a3e212e0",
"assets/assets/chords/A%2520(2).png": "9694173ccf0dc5452ddabcc1b4d4c8e6",
"assets/assets/chords/Asus4%2520(2).png": "8a131d34ef83c76071076618f4a3d4f1",
"assets/assets/chords/Bmaj7%2520(5).png": "5a89740f0342acee75cf93df1befac76",
"assets/assets/chords/Dmaj7.png": "4ed6681c6e6e953b1fb1bba26b16531e",
"assets/assets/chords/Amaj7%2520(4).png": "21474383955b50b84833e9e465ed86ff",
"assets/assets/chords/Fmaj7%2520(5).png": "17412d5832cb2d276904050b2899d99b",
"assets/assets/chords/Esus4%2520(2).png": "97e3b8c6103a70f48181fbf4a786fab8",
"assets/assets/chords/Dm%2520(2).png": "ea7e15d4393f638fda850020991d628f",
"assets/assets/chords/Cm%2520(2).png": "0d94f355205bd883a621438a65ae96a4",
"assets/assets/chords/Em.png": "e0bf08014223e1956a6194d78d8cae70",
"assets/assets/chords/F7.png": "08bc55ed47b6a5b99bd8a1f8740aa117",
"assets/assets/chords/Cmaj7%2520(1).png": "85f6b81ec0b671d13cfbe2ba917d0c6f",
"assets/assets/chords/G%2520(4).png": "2891e90fc15501bce88b4c1464b65553",
"assets/assets/chords/c%2520(1).png": "7ee4fcec0bae17f2915395f3a6e7e17b",
"assets/assets/chords/Csus4.png": "a9f21cfddb6652db93a59f67ed01714e",
"assets/assets/chords/D%2520(6).png": "f3435a6f2cec31c98d026666661b41df",
"assets/assets/chords/Gmaj7%2520(1).png": "26799e9a729e0e09c12d592b267037d5",
"assets/assets/chords/E7%2520(1).png": "7382dd14d62a23300e906517e57e28c3",
"assets/assets/chords/Em7%2520(2).png": "7d650c3ea1950892fd52ea45c2a6963e",
"assets/assets/chords/Bm7%2520(1).png": "dedd1aa307c40ce4c4591698aeb469aa",
"assets/assets/chords/F7%2520(2).png": "b6181af398bef7a892daedbc483a30f9",
"assets/assets/chords/Fmaj7%2520(2).png": "deacb501c5dc7662ab44b4a75e08b72c",
"assets/assets/chords/Amaj7%2520(3).png": "26f6c15084459650fa985074483e409f",
"assets/assets/chords/C7%2520(3).png": "dafa8077dc734cfd20656a8232e0a646",
"assets/assets/chords/Bmaj7%2520(2).png": "2709aaca4d826406764b28978831a865",
"assets/assets/chords/A%2520(5).png": "11bdf0da3da8b46c440a34cbc014a555",
"assets/assets/chords/Fmaj7.png": "7dbd13f32b7c95b8a28f3137a1083b38",
"assets/assets/chords/F%2520(2).png": "15024957fdcfc615bcefcf26a2e5c6e1",
"assets/assets/chords/Emaj7%2520(3).png": "03d85b780733be21977c4e2b2ab912a5",
"assets/assets/chords/E%2520(1).png": "b487205ae426d6b1d80a29387be09dbc",
"assets/assets/chords/Emaj7%2520(2).png": "0b2caf94417eb8ceac0e36db2c07b2ab",
"assets/assets/chords/B%2520(6).png": "7be015caf8aa7af19c2949b4e846121d",
"assets/assets/chords/F%2520(3).png": "80fb92b89f87377bbf7235cc5448d5c2",
"assets/assets/chords/A%2520(4).png": "929348612f16b075e7cbada8fb78e1b3",
"assets/assets/chords/Gm7%2520(1).png": "0e3568c5497070a69814cfa46935b3d1",
"assets/assets/chords/C7%2520(2).png": "dc4ebbddb996a2e5f98def09fb3b202a",
"assets/assets/chords/Bmaj7%2520(3).png": "1520372cf8975042db93ce87650441c6",
"assets/assets/chords/Em%2520(1).png": "4d37c96e31c805ad822aadc9d5205414",
"assets/assets/chords/Amaj7%2520(2).png": "d8396671c6b7bdaf42ffb9274e1cc6e1",
"assets/assets/chords/Fmaj7%2520(3).png": "16be2eb61476a7ab618e5451ce91cbf9",
"assets/assets/chords/F7%2520(3).png": "64d15f4f68b3b40d10308c5287e9a7f0",
"assets/assets/chords/Gmaj7.png": "15ee8933b50e43b5c124e4f50625f83b",
"assets/assets/chords/G%2520(5).png": "9cf7e9e156be9541fd546d3c2daa372f",
"assets/assets/chords/Fm%2520(2).png": "2d41858c7ffa854da4b555f5f7ad4905",
"assets/assets/chords/Bsus4.png": "f8797eef2b0dcceb908da28199e4b0d6",
"assets/assets/chords/Dm.png": "5a29fade85d8ca6959d710e0f2cfe220",
"assets/assets/chords/G7.png": "ad4c3ec71525c301394e14b37891245a",
"assets/assets/chords/Dmaj7%2520(1).png": "05f8090060a9b6125fcab9b58a4fe181",
"assets/assets/chords/Gsus4.png": "9fa3796cd72820337c269a215a1f69e9",
"assets/assets/chords/E7%2520(3).png": "e204ea283d6205ece3f271f77e4029f8",
"assets/assets/chords/Am7.png": "0d3167a0cd369fd4fe18da9f8217cde3",
"assets/assets/chords/Gmaj7%2520(3).png": "8b5d74e3460540eaa3769fff060b6006",
"assets/assets/chords/D%2520(4).png": "1b0cf8c818e04e78369e7ed39c9ee173",
"assets/assets/chords/c%2520(3).png": "4656207699182529ba2fdba253a6fcc4",
"assets/assets/chords/G%2520(6).png": "30df0fdfeb88818b768e4d5442bea330",
"assets/assets/chords/Fm%2520(1).png": "dddfb5eb96cd4e5f899ee98bbde3ea5b",
"assets/assets/chords/Cmaj7%2520(3).png": "fef142214d555af593037bc64cf7f2b8",
"assets/assets/chords/D7.png": "66103824ecd191c86c79b1e5cbdc412f",
"assets/assets/chords/Gm.png": "3b70587a7315207ef3f87129717de87a",
"assets/assets/chords/Dmaj7%2520(2).png": "b57f05442371ae30abde720d164ab8cf",
"assets/assets/chords/Emaj7%2520(1).png": "03879e06cdd40f7ffed81ec1bf6374d0",
"assets/assets/chords/E%2520(2).png": "eb24037019f715bd040d3648d96c0b5f",
"assets/assets/chords/B%2520(5).png": "bd6c7c62e613b46ae3f70f99b6525f30",
"assets/assets/chords/B7%2520(4).png": "1faa6ab1e5fa5da5b18775f6ca27bfae",
"assets/assets/chords/Gm7%2520(2).png": "5da237828e8297f8b905464fad153689",
"assets/assets/chords/Bmaj7.png": "21d131fd08d38deb8d20049cb819c2f7",
"assets/assets/chords/C7%2520(1).png": "37e9db3777d16bff024e13e72639cc49",
"assets/assets/chords/Amaj7%2520(1).png": "0c6b3a5b2091ae16d31c2d2f28fa97d1",
"assets/assets/chords/Em%2520(2).png": "657a25f16f86de746b6e6ecaf013b782",
"assets/assets/chords/Cm7.png": "fd725d4f13cb2da9d2bf7b6594ffc125",
"assets/assets/chords/Em7%2520(1).png": "cbaade16e72cb8e231a3bbb6216447ad",
"assets/assets/chords/Bm7%2520(2).png": "e91d1fd4141fd229346bb6d54fcbe0d0",
"assets/assets/chords/F7%2520(1).png": "2332d8bda01da1ce931b511f0bf8693c",
"assets/assets/chords/Fmaj7%2520(1).png": "e66d886c6df436a0c5ba84ac8a14a22a",
"assets/assets/chords/Gm7.png": "d7a1d5d12143d3c49911f3763ed9197f",
"assets/assets/chords/Cmaj7.png": "ee02f29557eba66104134e16604c3c93",
"assets/assets/chords/G7%2520(4).png": "0a88c2be0ee515b982775e6281d5ddcc",
"assets/assets/chords/Bmaj7%2520(1).png": "32b03380f68fadac7834ce1201ed499b",
"assets/assets/chords/A%2520(6).png": "1fcd7bf7a41a49907f63c15986641ae9",
"assets/assets/chords/F%2520(1).png": "800c9153df69ff1a9fde7ded673cb82e",
"assets/assets/chords/B%2520(4).png": "ebe6161372b45b8b7abb58c0d473f3d3",
"assets/assets/chords/E%2520(3).png": "2078fa700ee434167096aafe8fd20214",
"assets/assets/chords/Dmaj7%2520(3).png": "7ae382eec121f4945218788a94f5fd55",
"assets/assets/chords/Cm%2520(1).png": "1bc804821141b8436b75276b08f3d282",
"assets/assets/chords/E7.png": "e1bf9b591d14b3ac4115040f07b9bcc4",
"assets/assets/chords/Fm.png": "1867b3d80ee700a173a1b1066096b1a1",
"assets/assets/chords/Fsus4.png": "0d7a4218230b913df6490bbef26395b1",
"assets/assets/chords/Cmaj7%2520(2).png": "5a4e21788259046f54b30bf733e1c66e",
"assets/assets/chords/Em7.png": "ee45f9ab279d795958e8d3b801886e88",
"assets/assets/chords/G%2520(7).png": "09bacc334a30d6509176324ffcecd5be",
"assets/assets/chords/c%2520(2).png": "576fb23ec7258e2e1e7e8058a597e7e3",
"assets/assets/chords/D%2520(5).png": "d326d40077e2c60e86aede17b7fbe8cf",
"assets/assets/chords/Gmaj7%2520(2).png": "5e833ade97307bd714a5831e4affa3cf",
"assets/assets/chords/E7%2520(2).png": "e9d7bceb0085e818e293b34f520e9232",
"assets/assets/chords/E%2520(4).png": "3cac11776f46a9ad115bf60c941487ef",
"assets/assets/chords/Amaj7.png": "bc9c407e5ab74115bf9779732b527f78",
"assets/assets/chords/B%2520(3).png": "b6b2699e6581df626901b5a1680901f8",
"assets/assets/chords/F%2520(6).png": "659ab7ac375ca3fd987130c28091afb4",
"assets/assets/chords/A%2520(1).png": "bc6b6b019bd5aadedf9212948f72e39f",
"assets/assets/chords/B.png": "e5729810c869ee568f5ab5ed8d699a4d",
"assets/assets/chords/B7%2520(2).png": "507a0c3d3765af0963f242a2ff0eb4d3",
"assets/assets/chords/Asus4%2520(1).png": "3e622d67205c020a6475d8ea8709bf27",
"assets/assets/chords/Bm7.png": "bc2b1f2b4cc93afaeda933727197563e",
"assets/assets/chords/G7%2520(3).png": "6ae419532fd1aba2ecb357cfb5b92f13",
"assets/assets/chords/c.png": "f4b580df13a98f40da6808a927895ff0",
"assets/assets/chords/Esus4%2520(1).png": "77bb0854c613c40719d06939b4ad7ed6",
"assets/assets/chords/Dm%2520(1).png": "025da3e8b5250c93e1678221b5ea554e",
"assets/assets/chords/Gmaj7%2520(5).png": "5be0e8e6bcd9effc4f662434373c2b7d",
"assets/assets/chords/Gm%2520(2).png": "590b738b049a638327c09c1de0551f06",
"assets/assets/chords/A.png": "3b71f5f0f4ac742e26ee7fc172567de7",
"assets/assets/chords/Dsus4%2520(2).png": "d5b515642133880be12037c0f28947d4",
"assets/assets/chords/D%2520(2).png": "474a6b72fb7af9ec27fa057e87005388",
"assets/assets/chords/c%2520(5).png": "1c7ae4f1c174a8a3b2297dff8caf9840",
"assets/assets/chords/Dsus4.png": "6734349cc7118ab5eb3e1305caf8e238",
"assets/assets/chords/Cmaj7%2520(5).png": "b3db740649e02088d684d61372252c74",
"assets/assets/chords/Am.png": "c4c521a7023f03ed2aba0d38860e6b01",
"assets/assets/chords/B7.png": "694609b1442e63fd3a72117b488b7f8d",
"assets/assets/chords/Am7%2520(2).png": "4a8d66d1f5f5bbb11c0f49a4a56932a5",
"assets/assets/chords/Fm7%2520(1).png": "87b723e7f87c6819978aec34220be511",
"assets/assets/chords/Dmaj7%2520(4).png": "c005be61e876275d7642221c62bffd15",
"assets/assets/chords/A7%2520(1).png": "c4fe48173e317415e8e7471c85108b08",
"assets/assets/chords/Gsus4%2520(2).png": "497f42f7ca76e4a49c4849a9916a4165",
"assets/assets/chords/Dmaj7%2520(5).png": "bc989692dca9ea4b89c1b348337599fa",
"assets/assets/chords/C7.png": "c7e1c70a3b1aeded98cd657e4d9570a1",
"assets/assets/chords/D.png": "ca10d0560fe2d51240806ae1df681b4e",
"assets/assets/chords/Esus4.png": "1bf6980a03f59bf803d36fed1372c416",
"assets/assets/chords/Cmaj7%2520(4).png": "962d2f137d83cf26eef57142c29886eb",
"assets/assets/chords/Bm%2520(2).png": "17afaecc831d37ca63ddd5b601ac3f8c",
"assets/assets/chords/G%2520(1).png": "a7b20dfc14e9decca6697cd9bd5f467d",
"assets/assets/chords/D7%2520(1).png": "3ea2320cedbc326b3f8e7a6248ee9a52",
"assets/assets/chords/c%2520(4).png": "c822e1402605703f8ba0e72d4fcf2a48",
"assets/assets/chords/Cm7%2520(1).png": "5cb441220fb8bac82b73f892bcc7e512",
"assets/assets/chords/Dm7%2520(2).png": "6ca6c3cf9b82b40807e4b2947070cd99",
"assets/assets/chords/Csus4%2520(2).png": "8ad106f82356d8bd67cf11386f15afe0",
"assets/assets/chords/D%2520(3).png": "ee7b5d62c67e9bba80aafb7a612cf587",
"assets/assets/chords/E.png": "ef8d5f77a49decfd5108e6ef20ee4121",
"assets/assets/chords/Gmaj7%2520(4).png": "68fd020aa9e79b27a8d4c2e2b9482c9b",
"assets/assets/chords/Dm7.png": "9d905cecfafe9c8b9c90d4a2b5062a84",
"assets/assets/chords/Fm7.png": "e68c71a8220a093e01f1ac26676adc2d",
"assets/assets/chords/G.png": "025dc883ce116b732bab6649715a68b7",
"assets/assets/chords/Bsus4%2520(1).png": "2faa93739d6a1767112fff8413ac3612",
"assets/assets/chords/G7%2520(2).png": "2b8bdda2b87e190b18f3edf68d027f5d",
"assets/assets/chords/Am%2520(1).png": "70d2804b1a632b8eca1308de992a23a8",
"assets/assets/chords/B7%2520(3).png": "35561cec829d1ba2b98018e5b4f407dc",
"assets/assets/chords/F.png": "05a735a0415d9cdf812b370ae3cdada0",
"assets/assets/chords/Fsus4%2520(1).png": "e1095bcf6c444e49c1e4fe78de3d9a1b",
"assets/assets/chords/B%2520(2).png": "52bdec0f2f77750e9b730941b858ad33",
"assets/assets/chords/E%2520(5).png": "cf37552fe05f7c34a74c4202cd5ab41f",
"assets/assets/chawnghlang.json": "03fea15b2aacc9a1bc0211e0652f6e7a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
