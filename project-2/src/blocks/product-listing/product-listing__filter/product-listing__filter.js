$("#product-filter").mmenu({
            extensions: ["fullscreen"],
        "offCanvas": {
            "zposition": "front"
        },
        "navbar": {
          "title":'<div class="mm-title--custom">&times;</div>'

        }
            /*"header": {
            "title": "fuck",
                "add": true,
                "update": true
        },*/
        //     "footer": {
        //     "add": true,
        //         "title": "Smartrack @ 2014"
        // }
    }, {
      clone: true
    }

    );
    

    var filterAPI = $("#mm-product-filter").data( "mmenu" );
      
      $("#product-filter__toggle").click(function() {
         filterAPI.open();
      });

      $(".mm-title--custom").click(function() {
         filterAPI.close();
      });



$(".product-filter__descr").on('click', function(event) {
  event.preventDefault();

  $(this).closest('.product-filter__item').find('.product-filter__dropdown').slideToggle('fast');

});

$(".product-filter__select-field > .text-input").on('input change paste', function(event) {
  $(this).val(this.value.replace(/[^0-9\-]/, ''))
});