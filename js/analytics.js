document.addEventListener('click', function (e) {
  var a = e.target.closest(
    'a[href^="tel:"], a[href^="sms:"], a[href^="mailto:"], ' +
    'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="web.whatsapp.com"]'
  );
  if (!a) return;
  var href = a.getAttribute('href');
  var tipo = href.indexOf('tel:') === 0    ? 'click_telefono'
           : href.indexOf('sms:') === 0    ? 'click_sms'
           : href.indexOf('mailto:') === 0 ? 'click_correo'
           : 'click_whatsapp';
  if (typeof gtag !== 'function') return;
  gtag('event', tipo, {
    destino: href.replace(/^(tel:|sms:|mailto:)/, '').split('?')[0],
    ubicacion: a.getAttribute('data-ubicacion') || 'sin_definir',
    pagina: location.pathname
  });
});
