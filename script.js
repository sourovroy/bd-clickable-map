$(document).ready(function(){

	/**
	 * Click on any region
	 */
	$('.region-path').click(function(evt){
        evt.stopPropagation();

		// $(".region-path").not($(this)).fadeOut(500);
		$('.back-button').show();
		
		// $(this).addClass('region-active');
		var fullPosition = $("#svg-map").position();
		var clickedPosition = $(this).position();
		// console.log(fullPosition, clickedPosition);
		var regionPosition = {
			top: Math.round(clickedPosition.top - fullPosition.top),
			left: Math.round(clickedPosition.left - fullPosition.left)
		};			
		console.log(regionPosition);
		// $(this).velocity({ scale: 1.5, translateX: "50", translateY: "50" });
	});

	/**
	 * Click on back button
	 */
	$('.back-button').click(function(){
		$(this).hide();
		$('.region-path').removeClass('region-active').show()
			.velocity({ scale: 1, translateX: "0", translateY: "0" });
	});

});