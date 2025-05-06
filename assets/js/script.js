/**
 * Maktoobmedia Script File
 * Author: Islam Nasser
 * Version: 1.1 • 30‑Apr‑2025
 * Description: Initialize site interactions: ticker, navigation, carousels, and video modal.
 */
// Enhanced dropdown toggle logic
(function () {
  // Handle multiple instances of tags and author panels
  const setups = [];
  document.querySelectorAll('.tag-more-wrapper').forEach(wrapper => {
    const btn = wrapper.querySelector('.tag-more');
    const panel = wrapper.querySelector('.tags-dropdown');
    setups.push({ btn, panel });
  });
  document.querySelectorAll('.author-wrapper').forEach(wrapper => {
    const btn = wrapper.querySelector('.author');
    const panel = wrapper.querySelector('.author-popup');
    setups.push({ btn, panel });
  });

  // Toggle logic and click-outside
  setups.forEach(({ btn, panel }) => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      // close others
      setups.forEach(item => { if (item.panel !== panel) item.panel.classList.remove('open'); });
      panel.classList.toggle('open');
    });
  });
  document.addEventListener('click', () => { setups.forEach(item => item.panel.classList.remove('open')); });
})();
/**
   * Quantity control logic
   */
document.querySelectorAll('.product-card').forEach(card => {
  const decreaseBtn = card.querySelector('.qty-decrease');
  const increaseBtn = card.querySelector('.qty-increase');
  const qtyInput = card.querySelector('.qty-input');

  decreaseBtn.addEventListener('click', () => {
    let qty = parseInt(qtyInput.value, 10);
    if (qty > 1) qtyInput.value = qty - 1;
  });

  increaseBtn.addEventListener('click', () => {
    let qty = parseInt(qtyInput.value, 10);
    qtyInput.value = qty + 1;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  initTicker();
  initMobileNav();
  initCarousels();
  initVideoModal();
});

/**
 * Rotates breaking news headlines in the ticker every 8 seconds.
 */
function initTicker() {
  const headlines = [
    'Israel kills more than 70 Palestinians',
    'UN Security Council debates Gaza ceasefire',
    'Mass protests sweep Tel Aviv against the war',
    'WHO warns Gaza health system is collapsing'
  ];
  const tickerEl = document.getElementById('breakingTickerText');
  let index = 0;
  if (!tickerEl) return;

  setInterval(() => {
    index = (index + 1) % headlines.length;
    tickerEl.textContent = headlines[index];
  }, 8000);
}

/**
 * Toggles the mobile navigation menu when the menu button is clicked.
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (!toggleBtn || !primaryNav) return;

  toggleBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
  });
}

/**
 * Initializes all OwlCarousel sliders with refined animations and controls.
 */
function initCarousels() {
  if (typeof $ !== 'function' || !$.fn.owlCarousel) return;

  // Footer thumbnail carousel
  $('.thumb-carousel.owl-carousel').owlCarousel({
    loop: false,
    margin: 16,
    smartSpeed: 500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 }
    }
  });

  // Trending section vertical slider
  const trendingEl = $('.small-cards.owl-carousel');
  trendingEl.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    smartSpeed: 600,
    animateIn: 'fadeInUp',
    animateOut: 'fadeOutDown',
    mouseDrag: false,
    touchDrag: true
  });
  document.querySelector('.trend-prev')?.addEventListener('click', () => trendingEl.trigger('prev.owl.carousel'));
  document.querySelector('.trend-next')?.addEventListener('click', () => trendingEl.trigger('next.owl.carousel'));

  // Photos slider carousel
  $('.photos-slider.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 800,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    dots: true,
    nav: false,
    autoplay: false
  });

  // Films & TV carousel with custom controls
  const filmCarousel = $('.films-carousel.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    smartSpeed: 500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    dots: false,
    nav: false,
    responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 } }
  });
  document.querySelector('.films-prev')?.addEventListener('click', () => filmCarousel.trigger('prev.owl.carousel'));
  document.querySelector('.films-next')?.addEventListener('click', () => filmCarousel.trigger('next.owl.carousel'));

  // Opinion carousel with fade transitions
  const opinionCarousel = $('.opinion-carousel.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    smartSpeed: 500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    dots: false,
    nav: false,
    responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 } }
  });
  document.querySelector('.opinion-prev')?.addEventListener('click', () => opinionCarousel.trigger('prev.owl.carousel'));
  document.querySelector('.opinion-next')?.addEventListener('click', () => opinionCarousel.trigger('next.owl.carousel'));
}

/**
 * Handles opening and closing of the video modal with auto-playing iframe.
 */
function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  const closeBtn = modal?.querySelector('.modal-close');

  if (!modal || !iframe || !closeBtn) return;

  // Open modal and start video
  document.querySelectorAll('[data-video-url]').forEach(el => {
    el.addEventListener('click', () => {
      const url = el.dataset.videoUrl;
      iframe.src = `${url}?autoplay=1`;
      modal.classList.add('open');
    });
  });

  // Close modal and stop video
  const closeModal = () => {
    modal.classList.remove('open');
    iframe.src = '';
  };

  closeBtn.addEventListener('click', closeModal);

  // Close when clicking outside iframe
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });



}
