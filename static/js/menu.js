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

document.querySelectorAll('.copy-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var pre = btn.closest('.code-block').querySelector('pre');
    if (!pre) return;
    var code = pre.textContent;
    navigator.clipboard.writeText(code).then(function () {
      btn.classList.add('copied');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>';
      setTimeout(function () {
        btn.classList.remove('copied');
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
      }, 2000);
    });
  });
});
