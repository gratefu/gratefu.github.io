svg4everybody();

// @include('detect.js')
// @include('globals.js')



$(document).ready(function() {

// @include('../blocks/common/page-header/page-header.js')	
// @include('../blocks/common/catalog/catalog.js')	
// @include('../blocks/common/discounts-dropdown/discounts-dropdown.js')	
// @include('../blocks/common/page-footer/page-footer.js')

if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
  console.log('this is a touch device');
} else {
  console.log('this is not a touch device');
  document.body.classList.add('no-touch');
}


});


