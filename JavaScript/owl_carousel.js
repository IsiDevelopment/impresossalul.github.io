var $super = $('#super');
var $milk = $('#milk');var $super = $('#super');
var $beer = $('#beer');
var $tabacco = $('#tabacco');

$super.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});
$milk.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});
$beer.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});
$tabacco.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});

$super.owlCarousel({
  center: true,
  loop: true,
  items: 3
});
$milk.owlCarousel({
  center: true,
  loop: true,
  items: 3
});
$beer.owlCarousel({
  center: true,
  loop: true,
  items: 3
});
$tabacco.owlCarousel({
  center: true,
  loop: true,
  items: 3
});

$($super).on('click', '.owl-item>div', function() {
  $super.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
$($milk).on('click', '.owl-item>div', function() {
  $milk.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
$($beer).on('click', '.owl-item>div', function() {
  $beer.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
$($tabacco).on('click', '.owl-item>div', function() {
  $tabacco.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
