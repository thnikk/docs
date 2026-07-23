(function () {
  var menuBtn = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('.sidebar');
  var body = document.body;

  if (menuBtn && sidebar) {
    var mobileQuery = window.matchMedia('(max-width: 1023px)');

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
          if (window.innerWidth < 1024) toggleMenu(false);
        }
      });
    });
  }

  // Navbar dropdowns
  document.querySelectorAll('.nav-dropdown-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var dropdown = trigger.closest('.nav-dropdown');
      if (!dropdown) return;
      var isOpen = dropdown.classList.contains('open');

      document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
        if (d !== dropdown) d.classList.remove('open');
        var t = d.querySelector('.nav-dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
        d.classList.remove('open');
        var t = d.querySelector('.nav-dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
        d.classList.remove('open');
        var t = d.querySelector('.nav-dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

    }
  });
})();
