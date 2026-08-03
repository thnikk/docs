(function () {
  // Auto-collapse nav button labels/icons when they don't fit
  var navs = document.querySelectorAll('.navbar-inner, .docs-nav-inner');

  function overflows(container) {
    var cs = getComputedStyle(container);
    var padRight = parseFloat(cs.paddingRight) || 0;
    var rightEdge = container.getBoundingClientRect().right - padRight;
    var last = container.lastElementChild;
    if (!last) return false;
    return last.getBoundingClientRect().right > rightEdge + 1;
  }

  function updateNav() {
    navs.forEach(function (nav) {
      var links = nav.matches('.docs-nav-inner') ? nav : nav.querySelector('.navbar-menu');
      if (!links) return;

      links.classList.add('nav-measuring');
      var labelsOverflow = overflows(links);
      links.classList.remove('nav-measuring');

      links.classList.add('nav-measuring-icons');
      var iconsOverflow = overflows(links);
      links.classList.remove('nav-measuring-icons');

      nav.classList.toggle('nav-collapsed', labelsOverflow);
      nav.classList.toggle('nav-icons-collapsed', iconsOverflow);
      if (!iconsOverflow) {
        nav.classList.remove('nav-open');
        var hb = nav.querySelector('.menu-toggle');
        if (hb) {
          hb.classList.remove('open');
          hb.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  updateNav();
  var rafPending = false;
  window.addEventListener('resize', function () {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(function () {
      rafPending = false;
      updateNav();
    });
  });
  window.addEventListener('load', updateNav);

  // Hamburger menu (main navbar)
  document.querySelectorAll('.navbar-inner').forEach(function (nav) {
    var hb = nav.querySelector('.menu-toggle');
    var menu = nav.querySelector('.navbar-menu');
    if (!hb || !menu) return;

    function closeMenu() {
      nav.classList.remove('nav-open');
      hb.classList.remove('open');
      hb.setAttribute('aria-expanded', 'false');
    }

    hb.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('nav-open');
      hb.classList.toggle('open', open);
      hb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  });

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
