function detectSafariIOS (el) {
  const isIOS = /iPhone|iPod|iPad/.test(window.navigator.userAgent);
  const isWebkit = /WebKit/.test(window.navigator.userAgent);
  const isNotChrome = !/CriOS/.test(window.navigator.userAgent); // Exclude Chrome on iOS

  if (isIOS && isWebkit && isNotChrome) {
    el.classList.add('ios-safari');
  }
}

export function detectUserAgent(el) {
  detectSafariIOS(el);
}
