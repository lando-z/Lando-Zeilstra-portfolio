/* Lightbox voor grote afbeeldingen. Zonder JavaScript opent de link gewoon de 1600 px-versie. */
(function () {
  var links = document.querySelectorAll('a.zoom');
  if (!links.length || typeof HTMLDialogElement === 'undefined') return;
  var en = document.documentElement.lang === 'en';
  var dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.setAttribute('aria-label', en ? 'Enlarged image' : 'Vergrote afbeelding');
  dlg.innerHTML = '<button type="button" class="lightbox__close">' + (en ? 'Close' : 'Sluiten') +
    ' <span aria-hidden="true">×</span></button><img class="lightbox__img" alt=""><p class="lightbox__caption"></p>';
  document.body.appendChild(dlg);
  var img = dlg.querySelector('.lightbox__img'), cap = dlg.querySelector('.lightbox__caption');
  dlg.querySelector('.lightbox__close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener('close', function () { img.removeAttribute('src'); document.documentElement.classList.remove('lightbox-open'); });
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var thumb = a.querySelector('img');
      img.src = a.getAttribute('href');
      img.alt = thumb ? thumb.alt : '';
      var fc = a.closest('figure') && a.closest('figure').querySelector('figcaption');
      cap.textContent = fc ? fc.textContent : '';
      cap.hidden = !fc;
      document.documentElement.classList.add('lightbox-open');
      dlg.showModal();
    });
  });
})();
