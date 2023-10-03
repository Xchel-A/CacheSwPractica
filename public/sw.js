/*
self.addEventListener('fetch', event => {
  const offlineResponse = new Response(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <title>React App</title>
      </head>
      <body>
      <h1>Offline Mode</h1>
      </body>
      </html>
  `, {
      headers: {
          'Content-Type': 'text/html'
      }
  })
  const response = fetch(event.request)
      .catch(() => offlineResponse)


  event.respondWith(response)
});*/

self.addEventListener('fetch', event => {
  const cahePromise = caches.open('cache.1').then((cache)=>{
    return cache.addAll([
      '/',
      '/index.html',
      '/js/app.js',
      '/js/app,js',
      'static/js/bundle.js',
      '/favicon.ico',
      '/logo192.png',
      '/logo512.png'
    ])
  })
  event.waitUntil(cahePromise);
})

/*
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request));
})
*/



self.addEventListener('fetch', e => {
  const respuesta = caches.match(e.request)
  .then(response =>{
    if(response)return response

    return fetch(e.request)
    .then(newResponse =>{

      caches.open('cache.1')
      .then(cache =>{
        cache.put(e.request,e.newResponse);
      })


      return newResponse;
    })
  })
})







//console.log('Hello world');
//console.log('Hello worlds');

/*
self.addEventListener('fetch',e => {
    e.respondWith(fetch(e.request))
});


self.addEventListener('fetch', e => {
  const oflineResponse = new Response('')
})

self.addEventListener('fetch', e => {
    if (e.request.url.includes('main.073c9b0a.css')) {
      // Crear una respuesta con el CSS modificado (fondo azul)
      const customCSS = `body { background-color: blue !important; }`;
  
      // Crear una nueva respuesta con las cabeceras adecuadas
      const modifiedResponse = new Response(customCSS, {
        status: 200,
        statusText: 'OK',
        headers: new Headers({
          'Content-Type': 'text/css', // Especifica el tipo de contenido como CSS
        }),
      });
  
      // Responder con la respuesta CSS modificada
      e.respondWith(modifiedResponse);
    } else {
      // Para otras solicitudes, continuar con la solicitud original
      e.respondWith(fetch(e.request));
    }
  });



//TAREA 25 SEP

  self.addEventListener('fetch', e => {
    if (e.request.url.includes('image.jpg')) {
      // Cargar una imagen personalizada en lugar de la original
      const customImageURL = '/custom-image.jpg';
      e.respondWith(fetch(customImageURL));
    } else {
      // Para otras solicitudes, continuar con la solicitud original
      e.respondWith(fetch(e.request));
    }
  });


  self.addEventListener('fetch', e => {
    if (e.request.url.includes('api.example.com')) {
      // Bloquear el acceso a la API respondiendo con una respuesta vacía
      e.respondWith(new Response('', { status: 403, statusText: 'Forbidden' }));
    } else {
      // Para otras solicitudes, continuar con la solicitud original
      e.respondWith(fetch(e.request));
    }
  });


  self.addEventListener('fetch', e => {
    if (e.request.url.includes('cdn.example.com')) {
      // Cargar un archivo JavaScript personalizado en lugar del de la CDN
      const customScriptURL = '/custom-script.js';
      e.respondWith(fetch(customScriptURL));
    } else {
      // Para otras solicitudes, continuar con la solicitud original
      e.respondWith(fetch(e.request));
    }
  });
  
  
  



self.addEventListener('fetch', e => {
    console.log(e.request.url.includes());
    if(e.request.url.includes('favicon.ico')){
        e.respondWith(null);
    }else{
        e.respondWith(fetch(e.request));

    }
});*/