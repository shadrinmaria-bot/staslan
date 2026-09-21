/* Theme switch.

   The stylesheet already carries both palettes: it follows the system by
   default, and honours data-theme on <html> when a choice has been made. This
   only records that choice and keeps the egg, the button's label and the
   browser chrome in step with it.

   Loaded synchronously in <head> so the stored theme is on the element before
   the first paint — a deferred script would show a flash of the wrong one. */

(function () {
  var KEY = 'ramen-theme';
  var root = document.documentElement;
  var LIGHT = '#fdf9f6';
  var DARK = '#17110f';

  function stored() {
    try {
      var value = localStorage.getItem(KEY);
      return value === 'dark' || value === 'light' ? value : null;
    } catch (error) {
      return null; // private windows and blocked site data
    }
  }

  function systemDark() {
    return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  /* What the reader is actually looking at, chosen or inherited. */
  function effective() {
    return stored() || (systemDark() ? 'dark' : 'light');
  }

  function syncButton() {
    var button = document.querySelector('.theme-toggle');
    if (!button) return;
    var dark = effective() === 'dark';
    var label = dark ? 'Switch to light theme' : 'Switch to dark theme';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    button.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }

  /* The media-scoped theme-color tags cannot know about an override, so once
     there is one, both are pinned to the colour actually on screen. */
  function syncChrome(theme) {
    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) {
      metas[i].setAttribute('content', theme === 'dark' ? DARK : LIGHT);
    }
  }

  // before first paint
  var saved = stored();
  if (saved) root.setAttribute('data-theme', saved);

  function ready() {
    if (saved) syncChrome(saved);
    syncButton();

    var button = document.querySelector('.theme-toggle');
    if (button) {
      button.addEventListener('click', function () {
        var next = effective() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try {
          localStorage.setItem(KEY, next);
        } catch (error) {
          /* the theme still applies for this page view */
        }
        saved = next;
        syncChrome(next);
        syncButton();
      });
    }

    // with no choice of their own, the reader keeps following the system
    var query = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (query && query.addEventListener) {
      query.addEventListener('change', function () {
        if (!stored()) syncButton();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
  } else {
    ready();
  }
})();
