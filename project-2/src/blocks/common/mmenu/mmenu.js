  // MOBILE MENU
   $("#menu-mobile").mmenu({
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
    

    var API = $("#mm-menu-mobile").data( "mmenu" );
      
      $(".hamburger-toggle").click(function() {
         API.open();
      });




// SEARCH-MOBILE
$("#search-mobile").mmenu({
            extensions: ["fullscreen"],
        "offCanvas": {
            "zposition": "front",
            "position": "bottom"
        },
            "navbar": {
                "title":'<div class="mm-title--custom">&times;</div>',
                "add": true,
                "update": true
        },
        //     "footer": {
        //     "add": true,
        //         "title": "Smartrack @ 2014"
        // }
    }, {
      clone: true
    }

    );
    

    var searchAPI = $("#mm-search-mobile").data( "mmenu" );
      
      $("#search-mobile--toggle").click(function() {
         searchAPI.open();
      });



  $("#account-mobile").mmenu({
        extensions: ["fullscreen"],
    "offCanvas": {
        "zposition": "front",
        "position": "bottom"
    },
        "navbar": {
            "title":'<div class="mm-title--custom">&times;</div>',
            "add": true,
            "update": true
    },
    //     "footer": {
    //     "add": true,
    //         "title": "Smartrack @ 2014"
    // }
}, {
  clone: true
}

);


    var accountAPI = $("#mm-account-mobile").data( "mmenu" );

    // console.log($(window).width());

        $(".page-header__account").click(function() {
           if ( $(window).width() < 767)  {
              accountAPI.open();
           }
           else return;
        });
      

// CLOSE ALL MOBILE MENUS
      $(".mm-title--custom").click(function() {
         API.close();
         searchAPI.close();
         accountAPI.close();
      });

// DESTROY MMENU ON DESKTOP
    $(window).resize(function(event) {

    if ($(window).width() > 768) {
        $(document.documentElement).removeClass('mm-opened mm-blocking mm-background mm-front mm-opening');
        $("#menu-mobile,#search-mobile,#account-mobile,#product-filter").removeClass('mm-opened');
        $("#mm-0").css('min-height', '');
    } 
    else {
        $("#mm-0").css('min-height', '');
    }   

  });





