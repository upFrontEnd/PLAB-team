$(document).ready(function(){

  // SLIDE TO
  $('.js-scrollTo').on('click', function () { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
  });

  // SLIDER HOMEPAGE
  $('#scope-team.owl-carousel').owlCarousel({
    stagePadding: 50,
    margin: 30,
    responsive : {
        0 : {
            items: 1
        },
        480 : {
            items: 2
        },
        980 : {
            items: 3
        },
        1340 : {
            items: 4
        },
    },
  });

  // SLIDER TEAM
    $('#item-team.owl-carousel').owlCarousel({
      
      responsive : {
          0 : {
            items: 1,
            margin: 10,
            stagePadding: 20,
          },
          668 : {
            items: 2,
            margin: 10
          },
          1040 : {
            items: 3,
            margin: 10
          },
          1366 : {
            margin: 0
          }
      },
    });
  
  

  // MOODBOARD
  $('.card').each(function(){
		$(this).on('click', function(){
      $('.card__description').addClass('active');
      $('.card__description').not($(this).children()).removeClass('active');
      
      $('.icon-description').attr("src", "img/icon/minus.svg")
      $('.icon-description').not($(this).children()).attr("src", "img/icon/more.svg");
		});
  });

  // TEAM MEMBERS
  $('.panoramic__photo').each(function(){
		$(this).on('click', function(){
      $('.panoramic__interview').addClass('active');
      $('.panoramic__interview').not($(this).children()).removeClass('active');
      
      $('.panoramic__description').addClass('active');
      $('.panoramic__description').not($(this).children()).removeClass('active');
      $('.panoramic__description').attr("src", "img/icon/minus.svg")
      $('.panoramic__description').not($(this).children()).attr("src", "img/icon/more.svg");
		});
  });
  

  // CONCEPT STORES
  $('.more-stores').click(function() {
    $(this).toggleClass('active');
  })
























});