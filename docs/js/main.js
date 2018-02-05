$(document).ready(function() {

	//Мобильная навигация
	$('.navigation-toggle').on('click', function(e){
		e.preventDefault();
		$('.navigation-list').toggleClass('navigation-list--open');
	})
	
});