
var CACHE_NAME = 'cache-v1';
var caches_files = [
    '/',
    '/images/home.png',
    '/images/leaf.png',
    '/images/avengers.jpg',
    '/dist/bundle.js'
]
var CACHE_WHITELIST = [

]

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            console.log('cache is worked!');
            return cache.addAll(caches_files);
        })
        .catch(function(err){
            console.error(err);
        })
    );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response){
                return response;
            }
            return fetch(event.response);
        })
        .catch(function(err){
            console.error(err, 'ERROR : fetching the resource');
        })
    )
});

// self.addEventListener('activate', function(event){
//     event.waitUntil(
//         caches.keys().then(function(CACHE_NAME){
//             return Promise.all(
//                 CACHE_NAME.map(function(CACHE_NAME){
//                     if(CACHE_WHITELIST.indexOf(CACHE_NAME) === -1){
//                         console.log('activate work!!');
//                         return caches.delete(CACHE_NAME);
//                     }
//                 })
//             )
//         })
//         .catch(function(err){
//             console.error(err, 'ERROR : activating the cache');
//         })
//     )
// });

self.addEventListener('push', function(event){

});