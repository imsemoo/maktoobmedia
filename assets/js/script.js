$(function () {

  /* --------------------------------------------------------------
         Breaking News Ticker — Simple headline rotator
         © Islam Nasser / Maktoobmedia 2025
      ----------------------------------------------------------------*/
  (function () {
    const headlines = [
      "Israel kills more than 70 Palestinians",
      "UN Security Council debates Gaza ceasefire",
      "Mass protests sweep Tel Aviv against the war",
      "WHO warns Gaza health system is collapsing",
    ];
    const tickerSpan = document.getElementById("breakingTickerText");
    let i = 0;

    // change text every 8s (should match CSS duration)
    setInterval(() => {
      i = (i + 1) % headlines.length;
      tickerSpan.textContent = headlines[i];
    }, 8000);
  })();

    // Mobile menu toggle
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.primary-nav');
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    $('.trending-carousel').owlCarousel({
      loop: false,
      margin: 20,
      nav: true,
      navText: [
        '<i class="fa-solid fa-angle-up"></i>',
        '<i class="fa-solid fa-angle-down"></i>'
      ],
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        992: { items: 4 }
      }
    });
    $('.small-cards.owl-carousel').owlCarousel({
      items:1,
      loop:true,
      margin:0,
      nav:false,
      dots:false,
      smartSpeed:600,
      animateIn:'slideInDown',
      animateOut:'slideOutUp',
      mouseDrag:false,
      touchDrag:true,
      pullDrag:true
    });
    $('.trend-prev').click(function(){ $('.small-cards.owl-carousel').trigger('prev.owl.carousel'); });
    $('.trend-next').click(function(){ $('.small-cards.owl-carousel').trigger('next.owl.carousel'); });
});
