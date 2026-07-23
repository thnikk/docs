document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('.sidebar');
  var body = document.body;

  if (!menuBtn || !sidebar) return;

  var mobileQuery = window.matchMedia('(max-width: 767px)');

  function isOpen() { return sidebar.classList.contains('open'); }

  function toggleMenu(keepFocus) {
    sidebar.classList.toggle('open');
    body.classList.toggle('nav-open');
    var open = isOpen();
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open && keepFocus !== false) {
      var first = sidebar.querySelector('a, button, input, [tabindex="0"]');
      if (first) first.focus();
    } else if (!open) {
      menuBtn.focus();
    }
  }

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu(e.detail !== 0);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileQuery.matches && isOpen()) toggleMenu();
  });

  sidebar.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (link.getAttribute('href') && link.getAttribute('href').startsWith('#') && link.getAttribute('role') !== 'button') {
        if (window.innerWidth < 768) toggleMenu(false);
      }
    });
  });
});
