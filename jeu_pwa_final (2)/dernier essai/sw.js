const CACHE_NAME = "pwa-cache-v18";
const AUDIO_CACHE_NAME = "audio-cache-v18";

// 📌 Liste des fichiers audio à mettre en cache
const AUDIO_FILES = [
    "/Jeu_fusionne/audios/0ad17d4a-5f7d-4f85-9ab7-dedfad20f27b.mp3",
    "/Jeu_fusionne/audios/1a0d316b-87fe-4bb0-ab64-36fc3a081759.mp3",
    "/Jeu_fusionne/audios/2b984992-5a13-426b-a221-ccb97f77816a.mp3",
    "/Jeu_fusionne/audios/2de6ceb5-a0ba-46cd-a3f7-ff76e3f6f943.mp3",
    "/Jeu_fusionne/audios/2fd30267-b6ed-40b1-abba-7b08716989a9.mp3",
    "/Jeu_fusionne/audios/03eb194b-11bb-40ae-b290-4a1730af84d9.mp3",
    "/Jeu_fusionne/audios/3cffb4ae-3106-494e-9e89-d19458a0b879.mp3",
    "/Jeu_fusionne/audios/3fcd0a11-035e-4644-801b-dc43045dc828.mp3",
    "/Jeu_fusionne/audios/4a0a7db6-dcc2-44a6-b643-7b46797a73f9.mp3",
    "/Jeu_fusionne/audios/4e227d2e-b7de-4195-a088-6500a0251a1a.mp3",
    "/Jeu_fusionne/audios/4ec8dbf3-baa4-4e78-a729-d377ee3bd50e.mp3",
    "/Jeu_fusionne/audios/5def398d-c6c1-4a82-be9f-5078246f734f.mp3",
    "/Jeu_fusionne/audios/5e2affac-c6d4-4a0a-b208-62d508f27343.mp3",
    "/Jeu_fusionne/audios/6ea9f0d4-e223-45f6-a845-d99f0446ceba.mp3",
    "/Jeu_fusionne/audios/6fab7ec7-14cb-4a48-bfd0-e94a9192fb0d.mp3",
    "/Jeu_fusionne/audios/7c0805ee-1295-4151-bb49-7d26e1a0fe1b.mp3",
    "/Jeu_fusionne/audios/8d6b028d-8cc7-4a54-8b31-188c3087cec0.mp3",
    "/Jeu_fusionne/audios/9ac6365d-5584-4186-a03a-2bdaa8d1e9c1.mp3",
    "/Jeu_fusionne/audios/9eb35b71-a6e0-4dc7-8bb6-2570a3f34e5c.mp3",
    "/Jeu_fusionne/audios/9fe7fac5-6ae2-4073-a1f6-ccb24619b7dc.mp3",
    "/Jeu_fusionne/audios/026f2c6c-f9b9-4bcc-827b-42e653fad327.mp3",
    "/Jeu_fusionne/audios/26f42302-76ad-47fb-a85e-ec7944df4f80.mp3",
    "/Jeu_fusionne/audios/50ece511-606b-4f37-a0d1-24e7ff875dce.mp3",
    "/Jeu_fusionne/audios/60a852dc-59da-40a9-b2c5-20c692b423a1.mp3",
    "/Jeu_fusionne/audios/77e24267-6677-4ac2-a6b8-28e514c8bfe4.mp3",
    "/Jeu_fusionne/audios/98e835ea-b6ee-4410-a467-2e6e6605fb80.mp3",
    "/Jeu_fusionne/audios/278d7a61-8ed3-49d1-85b7-a6be771fecbc.mp3",
    "/Jeu_fusionne/audios/617b4303-80f8-45ac-a172-992dc513c046.mp3",
    "/Jeu_fusionne/audios/677e8308-12c5-45ef-890f-789d872eee9d.mp3",
    "/Jeu_fusionne/audios/824e6ab6-df99-47ad-81af-953ce3d612f4.mp3",
    "/Jeu_fusionne/audios/829a7512-ca3a-408a-925f-9db0ede27520.mp3",
    "/Jeu_fusionne/audios/835a8470-a69a-4159-8be1-d875103c07db.mp3",
    "/Jeu_fusionne/audios/1926ce7f-a1d7-4e4e-b136-c378750817f7.mp3",
    "/Jeu_fusionne/audios/9902d71c-c039-48c2-8d43-1a9bf7b4d97c.mp3",
    "/Jeu_fusionne/audios/16884d28-a4a0-4848-9531-68e47be17f36.mp3",
    "/Jeu_fusionne/audios/49717a4f-8ecc-4226-b7d0-67addd351563.mp3",
    "/Jeu_fusionne/audios/92325de9-63a1-4198-ace2-01cd48e31fcc.mp3",
    "/Jeu_fusionne/audios/123987e8-5bf6-44ab-a5d8-2edab95532b2.mp3",
    "/Jeu_fusionne/audios/8623937f-2685-48fc-ad20-6878f096b88f.mp3",
    "/Jeu_fusionne/audios/9055158a-2df7-43e3-8e8f-2317b49cb836.mp3",
    "/Jeu_fusionne/audios/23869907-d76a-4fc5-b363-5d7d2e541e2a.mp3",
    "/Jeu_fusionne/audios/33170555-24fc-4c22-a003-77d215d89504.mp3",
    "/Jeu_fusionne/audios/a3e8e40a-fa6b-4fa5-a251-2953e6d6ca66.mp3",
    "/Jeu_fusionne/audios/a13ae0fa-b3f4-40ad-b408-c04588384ed5.mp3",
    "/Jeu_fusionne/audios/a48c1c1e-8884-433f-8ddc-ae0c5152a226.mp3",
    "/Jeu_fusionne/audios/a74dcd1a-25a9-4036-992f-06970e824cfc.mp3",
    "/Jeu_fusionne/audios/ac6c9355-284b-4d5c-8ef3-dafa804684c2.mp3",
    "/Jeu_fusionne/audios/b1a8189d-2b2b-4ac8-aa00-9e296435c6b7.mp3",
    "/Jeu_fusionne/audios/b1be438c-3734-492e-a5f3-d5045eaef1bb.mp3",
    "/Jeu_fusionne/audios/b12bc78e-2d52-49ba-936d-1f435f19d7c8.mp3",
    "/Jeu_fusionne/audios/b99c9503-7147-4be3-b376-c28919872c53.mp3",
    "/Jeu_fusionne/audios/bb008305-3e2f-4db8-b429-22390bc415ea.mp3",
    "/Jeu_fusionne/audios/bdbf5278-64b4-4cd0-ba60-53c0e7dd0dea.mp3",
    "/Jeu_fusionne/audios/c2b8f272-ec7f-4bf1-b2d2-5d9ab80e475e.mp3",
    "/Jeu_fusionne/audios/c6ba8df8-9bec-49d1-a35a-c6fd6a4ef546.mp3",
    "/Jeu_fusionne/audios/c42c96ef-978c-42d8-b954-c5c48fb5a825.mp3",
    "/Jeu_fusionne/audios/cbb1b4e3-496e-4eee-8dc0-614ee2457351.mp3",
    "/Jeu_fusionne/audios/ccd324d3-ca8e-4b12-b7f9-21a2f3017e34.mp3",
    "/Jeu_fusionne/audios/d4a3626f-1c69-4351-99a2-5473b1b953d1.mp3",
    "/Jeu_fusionne/audios/d11d849d-aaff-4b3f-ad9d-f5ebf380ec82.mp3",
    "/Jeu_fusionne/audios/d80a6353-c12a-4bc7-8467-c61ba1a4e9e9.mp3",
    "/Jeu_fusionne/audios/d94e4844-3357-4a0d-9aa5-8f77144d13c8.mp3",
    "/Jeu_fusionne/audios/d95d0eb9-d61f-4955-85a0-ba53e5c89b99.mp3",
    "/Jeu_fusionne/audios/d4883f68-ec9d-434c-b8ae-6b03d27085d4.mp3",
    "/Jeu_fusionne/audios/dcc55457-7794-47d8-9ac5-c3de3bf82f0b.mp3",
    "/Jeu_fusionne/audios/ddcb555d-4609-40c8-ad2a-808db0f9a00b.mp3",
    "/Jeu_fusionne/audios/edd06b20-0c73-497e-8a53-d94a66b347f8.mp3",
    "/Jeu_fusionne/audios/f1d594a2-5e19-409d-b9d8-2fe805c973a7.mp3",
    "/Jeu_fusionne/audios/f9fe6870-29c4-4ce8-a112-f0e8daa15aae.mp3",
    "/Jeu_fusionne/audios/f192b1e7-c09d-4d4d-89aa-5a229463dcb2.mp3",
    "/Jeu_fusionne/audios/f39241d8-3b41-4948-9f78-8259faf88d69.mp3",
    "/Jeu_fusionne/audios/fc09c358-a5fd-4ce6-8349-905892ad7c28.mp3"
];

// 📌 Installation du Service Worker avec mise en cache immédiate
self.addEventListener("install", event => {
    console.log("📥 Installation du Service Worker - Mise en cache des fichiers audio...");
    event.waitUntil(
        caches.open(AUDIO_CACHE_NAME).then(cache => {
            return cache.addAll(AUDIO_FILES); // Ajoute tous les fichiers audio au cache immédiatement
        })
    );
    self.skipWaiting(); // Force l'installation immédiate
});

// 📌 Activation du Service Worker et suppression des anciens caches
self.addEventListener("activate", event => {
    console.log("✅ Activation du Service Worker et suppression des anciens caches...");
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cache => cache !== CACHE_NAME && cache !== AUDIO_CACHE_NAME)
                .map(cache => caches.delete(cache))
            );
        })
    );
    self.clients.claim(); // Prendre le contrôle immédiatement
});

// 📌 Interception des requêtes pour récupérer les fichiers audio du cache
self.addEventListener("fetch", event => {
    const requestUrl = new URL(event.request.url);
    if (requestUrl.pathname.includes("/Jeu_fusionne/audios/") && requestUrl.pathname.endsWith(".mp3")) {
        console.log("🎵 Fichier audio détecté :", requestUrl.pathname);

        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request).then(fetchResponse => {
                    return caches.open(AUDIO_CACHE_NAME).then(cache => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                });
            }).catch(() => {
                console.warn("🎵 Tentative de chargement d'un fichier audio hors-ligne :", requestUrl.pathname);
                return caches.match(event.request);
            })
        );
    } else {
        event.respondWith(
            caches.match(event.request).then(response => {
                return response || fetch(event.request).then(fetchResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                });
            }).catch(() => {
                if (event.request.destination === "document") {
                    return caches.match("/Jeu_fusionne/index.html");
                }
            })
        );
    }
});
