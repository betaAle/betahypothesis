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
    var arrow = dd.querySelector('.dropdown-arrow');
    if (arrow) {
      arrow.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dd.classList.toggle('open');
      });
    }
  }
});
