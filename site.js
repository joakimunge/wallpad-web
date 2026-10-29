/* Hearth website: shared behaviour for every page. No trackers, no cookies. */
(function () {
  var root = document.documentElement;
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
                set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Review aid: ?drafts outlines every line still marked as a draft.
  if (/[?&]drafts\b/.test(location.search)) root.classList.add('show-drafts');

  // App Store buttons: shown only once config.js holds a real link.
  var url = (window.HEARTH_APP_STORE_URL || '').trim();
  if (/^https:\/\/apps\.apple\.com\//.test(url)) {
    root.classList.add('has-store');
    document.querySelectorAll('[data-app-store]').forEach(function (a) {
      a.href = url;
      a.setAttribute('aria-label', 'Download Hearth on the App Store');
      a.hidden = false;
    });
    // Structured data: the install link comes from the same setting.
    var ld = document.getElementById('app-ld');
    if (ld) {
      try { var data = JSON.parse(ld.textContent); data.installUrl = url; ld.textContent = JSON.stringify(data); } catch (e) {}
    }
    // The store button becomes the primary action; the setup link steps back.
    document.querySelectorAll('[data-until-store]').forEach(function (b) {
      b.classList.remove('btn-primary'); b.classList.add('btn-quiet');
    });
  }

  // Light / dark switch. The page follows the device until the visitor picks.
  function current() {
    var t = root.getAttribute('data-theme');
    return t || (systemDark.matches ? 'dark' : 'light');
  }
  function paint() {
    var t = current();
    document.querySelectorAll('.appearance button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.value === t));
    });
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      m.setAttribute('content', t === 'dark' ? '#161513' : '#f4f2ee');
      m.removeAttribute('media');
    });
  }
  function choose(theme, from) {
    if (theme === current()) return;
    var apply = function () { root.setAttribute('data-theme', theme); store.set('hearth-theme', theme); paint(); };
    if (calm || !document.startViewTransition || !from) { apply(); return; }
    var r = from.getBoundingClientRect();
    var x = r.left + r.width / 2, y = r.top + r.height / 2;
    var far = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.style.setProperty('--vt-x', x + 'px');
    root.style.setProperty('--vt-y', y + 'px');
    root.style.setProperty('--vt-r', far + 'px');
    document.startViewTransition(apply);
  }
  document.querySelectorAll('.appearance button').forEach(function (b) {
    b.addEventListener('click', function () { choose(b.value, b); });
  });
  if (systemDark.addEventListener) systemDark.addEventListener('change', paint);
  paint();

  // Hairline under the nav once the page scrolls.
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Screens below the fold settle into place the first time they're seen.
  if (!calm && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.remove('pending'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.settle').forEach(function (el) {
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('pending'); io.observe(el); }
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
