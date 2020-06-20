/* eslint-env browser */
/* eslint no-bitwise: ["error", { "allow": [">>", "^", "&"] }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const UUID = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );

const escapeForHTML = s => s.replace(/[&<]/g, c => (c === '&' ? '&amp;' : '&lt;'));

const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .catch(error => console.error('service worker registration failed', error));
    });
  }
};

export { UUID, escapeForHTML, registerServiceWorker };
