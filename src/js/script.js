$(document).ready(function() {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 100,
    variableWidth: true,
    centerMode: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/carusel/right.png" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/carusel/left.png" alt="arrow"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
  // modal

  $('[data-modal=consultation]').on('click',function() {
    $('.overlay,#consultation').fadeIn('slow');
  });
  $('.modal__close').on('click',function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');
  });

  function valideForms(form){
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true,
        },
        usermessage: {
          required: true,
          minlength: 200
        }
      },
      messages: {
        name: "Пожалуйста, ввидите свое имя",
        phone: "Пожалуйста, ввидите свой номер телефона",
        email: {
          required: "Пожалуйста, ввидите свою почту",
          email: "Неправильно введен адрес почты",
        },
        usermessage: {
          required: "Пожалуйста, ввидите текст Вашего сообщения",
          minlength: jQuery.validator.format("Сообщение должно содержать не более {0} сиволов!")
        }
      },
    });
  };

  valideForms('#modal-form');
  valideForms('#message-form');
  valideForms('#consult-form');


  $(window).scroll(function() {
    if ($(this).scrollTop()>700) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  $("input[name=phone]").mask("+7 (999) 999-99-99");


  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
       $('#consultation, #order').fadeOut();
       $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });

  new WOW().init();
});
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main__nav'),
  menuItem = document.querySelectorAll('.main__nav-link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('main__nav_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('main__nav_active');
      })
  })
})