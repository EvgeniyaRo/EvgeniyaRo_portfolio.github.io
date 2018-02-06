$(document).ready(function() {

	var navigationToggleButton = $('.navigation-toggle');
	var navigationToggleIcon = $('.navigation-toggle .fa');
	var navBlock = $('.navigation-list');
	var navBlockOpen = 'navigation-list--open';
	var navLink = $('.navigation-list a');
	var iconNav = 'fa-bars';
	var iconClose = 'fa-times';


	//Мобильная навигация
	navigationToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);
		// меняем иконку меню
		if(navigationToggleIcon.hasClass(iconNav)){
			navigationToggleIcon.removeClass(iconNav);
			navigationToggleIcon.addClass(iconClose);
		}else{
			navigationToggleIcon.removeClass(iconClose);
			navigationToggleIcon.addClass(iconNav);
		}
		
	})
	

	//закрытие меню при нажатии на ссылку
	navLink.on('click', function(){
		navBlock.removeClass('navigation-list--open');
		navigationToggleIcon.removeClass('fa-times');
		navigationToggleIcon.addClass('fa-bars');
	})

	
});