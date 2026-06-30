(function(){
  // If a stylesheet pointing to the root style.css isn't present, inject it.
  try {
    var exists = document.querySelector('link[rel="stylesheet"][href="/style.css"], link[rel="stylesheet"][href="style.css"]');
    if(!exists){
      var l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = '/style.css';
      document.head.appendChild(l);
    }
  } catch (e) {
    console.error('assets/main.js injection error', e);
  }
})();
