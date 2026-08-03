(function () {
  // Auto-collapse nav button labels/icons when they don't fit
  var navs = document.querySelectorAll('.navbar-menu, .docs-nav-inner');

  function overflows(container) {
    var cs = getComputedStyle(container);
    var padRight = parseFloat(cs.paddingRight) || 0;
    var rightEdge = container.getBoundingClientRect().right - padRight;
    var last = container.lastElementChild;
    if (!last) return false;
    return last.getBoundingClientRect().right > rightEdge + 1;
  }

  function updateNav() {
    navs.forEach(function (container) {
      container.classList.add('nav-measuring');
      var labelsOverflow = overflows(container);
      container.classList.remove('nav-measuring');

      container.classList.add('nav-measuring-icons');
      var iconsOverflow = overflows(container);
      container.classList.remove('nav-measuring-icons');

      container.classList.toggle('nav-collapsed', labelsOverflow);
      container.classList.toggle('nav-icons-collapsed', iconsOverflow);
    });
  }

  updateNav();
  window.addEventListener('resize', updateNav);
  window.addEventListener('load', updateNav);

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
