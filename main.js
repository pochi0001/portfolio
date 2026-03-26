function trackEvent(label) {
  gtag('event', 'portfolio_click', {
    event_category: 'click',
    event_label: label
  });
}