var $pap_interna = $('#pap_interna');
var $pap_empresarial = $('#pap_empresarial');

$pap_interna.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});
$pap_empresarial.children().each( function( index ) {
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

$($pap_interna).on('click', '.owl-item>div', function() {
  $pap_interna.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
$($pap_empresarial).on('click', '.owl-item>div', function() {
  $pap_empresarial.trigger('to.owl.carousel', $(this).data( 'position' ) );
});
