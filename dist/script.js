$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });
  // var bool;

  // // $('#clickToChange').on('click', function () {
  // //   $(':root').get(0).style.setProperty('--blue', 'hotpink');
  // // });

  // $('#clickToChange').toggle(
  //   function () {
  //     $(':root').get(0).style.setProperty('--blue', 'hotpink');
  //   },
  //   function () {
  //     $(':root').get(0).style.setProperty('--blue', 'blue');
  //   }
  // );

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth');
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing text animation script
  var typed = new Typed('.typing', {
    strings: ['YouTuber', 'Developer', 'Blogger', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: ['YouTuber', 'Developer', 'Blogger', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

let initialTheme = false;

function toggleColors() {
  const root = document.documentElement;
  $('.home').get(0).style.setProperty('transition', 'color 0.5s ease');

  if (initialTheme) {
    root.style.setProperty('transition', 'color 0.5s ease');
    root.style.setProperty('--main', 'blue');
    root.style.setProperty('--background', 'black');
    $('.home')
      .get(0)
      .style.setProperty(
        'background',
        "url('assets/banner.jpg') no-repeat center"
      );
    initialTheme = false;
  } else {
    root.style.setProperty('transition', 'color 0.5s ease');
    root.style.setProperty('--main', 'green');
    root.style.setProperty('--background', 'yellow');

    $('.home')
      .get(0)
      .style.setProperty(
        'background',
        "url('assets/banner1.jpg') no-repeat center"
      );
    initialTheme = true;
  }
  $('.home').get(0).style.setProperty('background-size', 'cover');
  $('.home').get(0).style.setProperty('background-attachment', 'fixed');
}
