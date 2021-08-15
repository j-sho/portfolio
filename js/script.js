  $(document).on('click',function(){ 
    $('.navbar .collapse').collapse('hide');
    showAnimationNav ();
  })

  function showAnimationNav () {
    if ($('.navbar-toggler').hasClass( 'collapsed')) {
      $('.animated-icon').removeClass('open');
    } else {
      $('.animated-icon').addClass('open');
    }
  }

  $(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});


