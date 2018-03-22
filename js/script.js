$(document).ready(function(){
	$(".burgerMenu").click(function(){
		$("#sideNav").toggle();
	});

	$(".tab").click(function(){
		$(".tabOn").addClass("tabs");
		$(".tabOn").removeClass("tabOn");
		$(this).removeClass("tabs");
		$(this).addClass("tabOn");
	});
	$("#drinkTab").click(function(){
		$("#drinks").removeClass("menuHide");
		$("#drinks").addClass("menuShow");
		$("#breakfast").removeClass("menuShow");
		$("#breakfast").addClass("menuHide");
	});
	$("#bkfTab").click(function(){
		$("#breakfast").removeClass("menuHide");
		$("#breakfast").addClass("menuShow");
		$("#drinks").removeClass("menuShow");
		$("#drinks").addClass("menuHide");
	});
});

google.maps.event.addDomListener(window, 'load', init);
function init(){
	var mapOptions = {
		center:{
			lat: -41.280975,
			lng:174.779384
		},
		//states what the initial zoom for the map is.
		zoom: 17
	}
	new google.maps.Map(document.getElementById("map"), mapOptions);
}
