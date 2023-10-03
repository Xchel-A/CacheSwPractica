/**
 * Registrar el SW
 */

if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js')
}

if(window.caches){
    //Crear cache
    caches.open('prueba-1');
    caches.open('prueba-2');
    //Validar si existe el cahce
    caches.has('prueba-3').then(console.log);
    //Borrar cache
    caches.delete('prueba-1').then(console.log);
    //crear cache y ejecutar funcion despues
    caches.open('prueba-v1.2').then( cache =>{
        //cache.add('/index.html');
        cache.addAll([
            '/index.html',
            '/favicon.ico'
        ]).then(()=>{
            cache.delete('/favico.ico');

            cache.put('index.html',new Response('Hola Mundo'))
            cache.match('/index.html').then(res=>{
                res.text().then(console.log)
            })
        })

        cache.keys().then(keys => {
            console.log(keys);
        })
    });

}