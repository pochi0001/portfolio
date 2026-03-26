// Googleアナリティクス イベント送信
function trackEvent(action, label) {
  gtag('event', action, {
    event_category: 'click',
    event_label: label
  });
}