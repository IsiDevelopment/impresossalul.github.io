var $pap_interna = $('#pap_interna');
var $pap_empresarial = $('#pap_empresarial');
var $beer = $('#beer');
var $tabacco = $('#tabacco');

$pap_interna.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});
$pap_empresarial.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});
$beer.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});
$tabacco.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});

$pap_interna.owlCarousel({
  center: true,
  loop: true,
  items: 3
});
$pap_empresarial.owlCarousel({
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

$($pap_interna).on('click', '.owl-item>div', function() {
  $pap_interna.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
$($pap_empresarial).on('click', '.owl-item>div', function() {
  $pap_empresarial.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
$($beer).on('click', '.owl-item>div', function() {
  $beer.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
$($tabacco).on('click', '.owl-item>div', function() {
  $tabacco.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
