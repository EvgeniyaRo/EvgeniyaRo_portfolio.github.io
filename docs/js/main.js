$(document).ready(function() {

	

//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
	

//фильтр
	$("#portfolio").mixItUp({
		controls: {
		enable:true,
		activeClass:'filter-my__button--active'}
	});

});