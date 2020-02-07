function openPopUp() {
  document.getElementById('ymFrameHolder').style.display = 'block';
  document.getElementById('ymFrameHolder').style.opacity = 1;
  document.getElementById('ymDivCircle').classList.add('open');
  document.getElementById('ym-notification').classList.add('ym-hidden');
}

iframe = document.getElementById('ymIframe');
if (iframe) {
  iframe.contentWindow.postMessage(
    JSON.stringify({
      event_code: 'ym-client-event',
      data: JSON.stringify({
        event: {
          code: 'launch-bot',
          data: {
            cookies: JSON.stringify(cookies)
          }
        }
      })
    }),
    null
  );

  if (document.getElementById('ymFrameHolder').style.display == 'none') {
    openPopUp();
  }
} else {
  let script = document.createElement('script');
  script.innerHTML =
    'window.ymConfig = { bot: "x1577167678609" };(function() { var w = window,ic = w.YellowMessenger;var d = document,i = function() { i.c(arguments) };var e = d.createElement("script");e.type = "text/javascript", e.async = !0, e.src = "https://app.yellowmessenger.com/widget/main.js";var t = d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e, t)})();';
  document.body.appendChild(script);
}
