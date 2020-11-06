// registrasi service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function() {
      console.log('Service Worker berhasil!');
    })
    .catch(function() {
      console.log('service worker gagal!!');
    });
  })
} else {
  console.log("service worker belum didukung browser anda!")
}