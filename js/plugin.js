$(document).ready(function () {
	
    "use strict";
	
    $(".carousel").carousel({
		
	    interval: 5000
		
    });

// show color option div when click on the gear

    $(".gear-check").click(function () {
	
        $('.color-option').fadeToggle();
	
    });
//change theme color on click	
    var colorLi = $(".color-option ul li"),
		scrollButton = $("#scroll-up");
	
    colorLi
		.eq(0).css("backgroundColor", "#e91e1e").end()
		.eq(1).css("backgroundColor", "#26bf14").end()
		.eq(2).css("backgroundColor", "#206eff").end()
		.eq(3).css("backgroundColor", "#ffa620").end()
		.eq(4).css("backgroundColor", "rgba(255, 32, 32, 0.7)");

    colorLi.click(function () {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    });
	
	// caching the scroll button up
	
	
	
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 700) {

            scrollButton.show();
        } else {
            scrollButton.hide();
		}
	      	
	});
		//click on button to scroll top
	scrollButton.click(function () {
			
		$("body").animate({scrollTop: 0}, 800);
			
	});

});

// loading screen
$(window).on("load",
    function () {
	// loading elements
	    "use strict";
	
        $(".overlay-loading .spinner").fadeOut(1000,
	        function () {
		
		        $("body").css("overflow", "auto");
		
		        $(this).parent().fadeOut(1000,
				    function () {
			// show the scroll
			            $(this).remove();
		            });
	        });
    });

