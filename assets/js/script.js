/**
 * Maktoobmedia Script File
 * Author: Islam Nasser
 * Version: 1.0 • 29‑Apr‑2025
 */

document.addEventListener('DOMContentLoaded', function () {
  // Breaking News Ticker — rotates headlines
  (function () {
    const headlines = [
      "Israel kills more than 70 Palestinians",
      "UN Security Council debates Gaza ceasefire",
      "Mass protests sweep Tel Aviv against the war",
      "WHO warns Gaza health system is collapsing"
    ];
    const tickerSpan = document.getElementById('breakingTickerText');
    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % headlines.length;
      if (tickerSpan) tickerSpan.textContent = headlines[currentIndex];
    }, 8000);
  })();

  // Mobile menu toggle
  const toggleBtn = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (toggleBtn && primaryNav) {
    toggleBtn.addEventListener('click', () => {
      primaryNav.classList.toggle('open');
    });
  }

  // Initialize Owl Carousel components
  if (typeof $ === 'function' && $.fn.owlCarousel) {
    // Thumbnail carousel in footer
    $('.thumb-carousel.owl-carousel').owlCarousel({
      loop: false,
      margin: 16,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 }
      }
    });

    // Small cards carousel in Trending section
    $('.small-cards.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      smartSpeed: 600,
      animateIn: 'slideInDown',
      animateOut: 'slideOutUp',
      mouseDrag: false,
      touchDrag: true,
      pullDrag: true
    });

    // Photos slider carousel
    $('.photos-slider.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      smartSpeed: 600,
      autoplay: false
    });

    // Trending vertical controls
    const smallCards = $('.small-cards.owl-carousel');
    document.querySelector('.trend-prev')?.addEventListener('click', () => smallCards.trigger('prev.owl.carousel'));
    document.querySelector('.trend-next')?.addEventListener('click', () => smallCards.trigger('next.owl.carousel'));
  }

  const $carousel = $('.films-carousel').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 }
    }
  });
  $('.films-prev').click(() => $carousel.trigger('prev.owl.carousel'));
  $('.films-next').click(() => $carousel.trigger('next.owl.carousel'));
  const $owl = $('.opinion-carousel').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0:   { items: 1 },
      576: { items: 2 },
      992: { items: 3 }
    }
  });
  $('.opinion-prev').click(()=> $owl.trigger('prev.owl.carousel'));
  $('.opinion-next').click(()=> $owl.trigger('next.owl.carousel'));
  // Video modal logic
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  const closeBtn = modal.querySelector('.modal-close');

  // Open modal and load video
  document.querySelectorAll('.video-wrapper, .thumb-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const url = wrapper.dataset.videoUrl;
      iframe.src = url + '?autoplay=1';
      modal.classList.add('open');
    });
  });

  // Close modal and stop video
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    iframe.src = '';
  });

  // Close on outside click
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('open');
      iframe.src = '';
    }
  });
});
