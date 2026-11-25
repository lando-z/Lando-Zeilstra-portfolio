/* Hamburgermenu voor kleine schermen. Zonder JavaScript blijft het gewone menu zichtbaar. */
(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('hoofdmenu');
  if (!btn || !nav) return;
  var en = document.documentElement.lang === 'en';
  var label = btn.querySelector('.menu-toggle__label');
  var mq = window.matchMedia('(max-width: 879px)');
  document.documentElement.classList.add('has-menu');
  btn.hidden = false;

  function setOpen(open, returnFocus) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
    label.textContent = open ? (en ? 'Close' : 'Sluiten') : 'Menu';
    if (!open && returnFocus) btn.focus();
  }
  btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) setOpen(false, true);
  });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('is-open') && !nav.contains(e.target) && !btn.contains(e.target)) setOpen(false);
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function () { setOpen(false); });
})();
