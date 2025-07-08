#nav {
    transform: translateX(-100%);
  }
  
  #nav.visible {
    animation: slide-in 0.5s forwards;
  }
  
  document.getElementById('nav-toggle').addEventListener('click', function() {
    let nav = document.getElementById('nav');
    nav.classList.toggle('visible');
  });