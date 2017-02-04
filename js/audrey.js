$( document ).ready(function() {
    console.log( "ready!" );
    var slides = [
    {src: 'http://lorempixel.com//1366/768'},
    {src: 'http://lorempixel.com//1366/761'},
    {src: 'http://lorempixel.com//1366/762'},
    {src: 'http://lorempixel.com//1366/763'},
    {src: 'http://lorempixel.com//1366/764'},
    {src: 'http://lorempixel.com//1366/765'},
    {src: 'http://lorempixel.com//1366/766'}
];
$('.jR3DCarouselGallery').jR3DCarousel({
                  slides: slides
              });

  $('.titre').textillate({ in: { effect: 'fadeInLeftBig' } });
  $('.titre1').textillate({ in: { effect: 'fadeInRightBig' } });
  $('.tlt').textillate({ in: { effect: 'rollIn' } });

  if ( $.fn.makisu.enabled ) {

      var $sashimi = $( '.sashimi' );
      var $nigiri = $( '.nigiri' );
      var $maki = $( '.maki' );

      // Create Makisus

      $nigiri.makisu({
          selector: 'dd',
          overlap: 0.85,
          speed: 1.7
      });

      $maki.makisu({
          selector: 'dd',
          overlap: 0.6,
          speed: 0.85
      });

      $sashimi.makisu({
          selector: 'dd',
          overlap: 0.2,
          speed: 0.5
      });

      // Open all

     $( '.list' ).makisu( 'open' );

      // Toggle on click

    //  $( '.toggle' ).on( 'click', function() {
      //    $( '.list' ).makisu( 'toggle' );
      //});

      // Disable all links

      /*$( '.demo a' ).click( function( event ) {
         event.preventDefault();
      });*/

  } else {

      $( '.warning' ).show();
  }

$('.fa-envelope-square').click(function(){
  $('.formulaire').show();
  console.log('lolo');

})





});//fin du ready
