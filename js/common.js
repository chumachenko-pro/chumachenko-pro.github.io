var avatarSize = $('.cv-header__avatar').height();

if ($(window).width() >= '480') {
	$('.cv-header').css('height', avatarSize + 50).css('padding', '25px 0');
}

function windowSize() {
	if ($(window).width() >= '992') {
		$(".cases-scroll, .cv-scroll").mCustomScrollbar({
			setWidth: '100%'
		});
	};
}
$(window).on('load resize', windowSize);

// показать портфолио
function viewPortfolio() {
	$('.cases-view').css('display', 'block');
	$('.cv-view').css('display', 'none');
}
$('.viewPortfolio').click(viewPortfolio);

// скрыть портфолио
function hiddenPortfolio() {
	$('.cases-view').css('display', 'none');
	$('.cv-view').css('display', 'block');
}
$('.back-to-cv').click(hiddenPortfolio);

// счетчик возраста
function get_current_age() {
	var date = new Date().getFullYear(),
		birthday = 1994,
		age;
	age = date - birthday;
	document.getElementById('age').innerHTML = age;
};
$(window).on('load', get_current_age);

$('.mbtn').click(function() {
	$('.more-info-box').slideToggle();
})
