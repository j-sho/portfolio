
$('.projects').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselServices();
		}, 100)});
	$('.projects').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveCLass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

  function carouselServices() {
  	$(".projects_item").each(function() {
  		var contentHeight = $(this).find(".projects_item_text").outerHeight();
  		var imageHeight = $(this).find(".projects_item").css("min-height", contentHeight);
  	});
  }
