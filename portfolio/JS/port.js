const texts = ["Hi, I'm Anuj Raghuwanshi.", "I'm from Pipariya,M.P.", "I'm a Frontend-developer.", "I have a keen interest in Android."];

function changeText() {
    const textElement = document.getElementById("changing-text");
    let currentIndex = 0;

    
    setInterval(() => {
        textElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }, 3000); 
}


changeText();

const spans = document.querySelectorAll('.progress-bar span');
spans.forEach((span)=> {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width
});

// jQuery(document).ready(function($) {
//   let  $navbar = $('.navbar');
//   $(window).scroll(function(event) {
//       var $current = $(this).scrollTop();
//       if ($current > 400) {
//           $navbar.addClass('navbar-color');
//       } else {
//           $navbar.removeClass('navbar-color');
//       }
//   });
// });

jQuery(document).ready(function($) {
  let $navbar = $('.navbar');
  let $portfolio = $('#portfolio');

  $(window).scroll(function(event) {
    var $current = $(this).scrollTop();
    if ($current > 400) {
      $navbar.addClass('navbar-color');
      $portfolio.css({
        'color': '#fff',
        'font-family': '"Muli", sans-serif',
        'line-height': '1',
        'font-weight': '900',
        'mix-blend-mode': 'darken',
        'text-shadow': '0 0 0.05em rgba(0, 0, 0, 0.2), -0.025em 0.025em 0.1em #000, -0.05em 0.05em 0.1em #000, -0.1em 0.1em 0.3em #000,-0.1em 0.1em 0.5em rgba(0, 0, 0, 0.5)',
        'transform': 'translate3d(0, 0, 0)'
      });
    } else {
      $navbar.removeClass('navbar-color');
      // Remove the added styles when scrolling back up
      $portfolio.removeAttr('style');
    }
  });
});

