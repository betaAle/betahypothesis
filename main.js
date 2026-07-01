document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
  var year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var dd = document.querySelector('.has-dropdown');
  if (dd) {
    var toggle = dd.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', function (e) {
      // on mobile / narrow screens, tap toggles the submenu instead of navigating
      if (window.matchMedia('(max-width:768px)').matches) {
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  }
});
