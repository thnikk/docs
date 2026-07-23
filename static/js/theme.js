(function () {
  function getTheme(saved) {
    return saved === 'auto'
      ? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
      : saved;
  }

  var saved = localStorage.getItem('theme') || 'auto';
  document.documentElement.setAttribute('data-theme', getTheme(saved));

  matchMedia('(prefers-color-scheme: light)').addEventListener('change', function () {
    if (localStorage.getItem('theme') !== 'auto') return;
    document.documentElement.setAttribute('data-theme', getTheme('auto'));
  });

  document.addEventListener('DOMContentLoaded', function () {
    var current = localStorage.getItem('theme') || 'auto';
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
      if (btn.getAttribute('data-theme') === current) btn.classList.add('active');
      btn.addEventListener('click', function () {
        var t = btn.getAttribute('data-theme');
        localStorage.setItem('theme', t);
        document.documentElement.setAttribute('data-theme', getTheme(t));
        document.querySelectorAll('.theme-btn').forEach(function (b) {
          b.classList.toggle('active', b === btn);
        });
      });
    });
  });

  window.scrollUp = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
    });
  }
})();
