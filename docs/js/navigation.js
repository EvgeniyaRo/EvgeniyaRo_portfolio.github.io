$(document).ready(function() {

	var navigationToggleButton = $('#navigation-button');
	var navigationToggleIcon = $('.navigation-toggle .fa');
	var navBlock = $('.navigation-list');
	var navBlockOpen = 'navigation-list--open';
	var navLink = $('.navigation-list a');
	// var iconNav = 'fa-bars';
	// var iconClose = 'fa-times';


	// События по клику на иконку
	navigationToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		navButtonToggle();
	})

	// События по клику на ссылки
	navLink.on('click', function(){
		if ( navBlock.hasClass(navBlockOpen) ) {
			navButtonToggle();
		}
		navBlock.removeClass(navBlockOpen);
	})

	// Функция для анимации иконки
	function navButtonToggle(){
		if ( navigationToggleButton.hasClass("active")) {
			navigationToggleButton.removeClass("active");
		} else {
			navigationToggleButton.addClass("active");
		}
	}

	
});