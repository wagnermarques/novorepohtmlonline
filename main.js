if (serviceWorker in navigator){
    navigator.serviceWorker.register("sw.js")
    .then(function(r){
        console.dir(r);
    })
    .catch(function(e){
        console.dir(e);
    })
}
