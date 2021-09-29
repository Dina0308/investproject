window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});
// animate
new WOW().init();
//modal
$('.consultation').on('click', function(){
   $('.overlay, #consult').fadeIn();
  });
  $('.modal__close, .overlay').on('click', function(){
    $('.overlay, #consult, #order, #thanks').fadeOut();
  });
  //order
  $('.btn_mini').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.product__title').eq(i).text());
        let prod = $('.product__title').eq(i).text();
        $('#nameproduct').val(prod);
        $('.overlay, #order').fadeIn('slow');
       
    });
  });
 

  // mailer

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consult, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});
  // //slider 
  // $('.rew__slider').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   autoplay: false,
  //   dots: true,
  //   adaptiveHeight: true,
  //   prevArrow: '<button type="button" class="slick-prev">&#60;</button>',
  //   nextArrow: '<button type="button" class="slick-next">&#62;</button>',
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 525,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  // });

  // //popup image
  
  // $('.sert__wrapper').magnificPopup({
  //   delegate: 'a', // child items selector, by clicking on it popup will open
  //   type: 'image'
  //   // other options
  // });

  //scroll
  $('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
  