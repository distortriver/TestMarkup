// Обработка отсутствующего console.log для IE8-
if (window.console === undefined) {
	window.console = {
		log: function () {
			return false;
		}
	}
}

$(function () {
	$('a.js-anchor').click(function () {
		var $this = $(this);
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			var position = target.offset().top;
			if($this.data('ptop')){
				position -= $this.data('ptop');
			}
			if (target.length) {
				$('html, body').animate({
					scrollTop: position
				}, 600);
				return false;
			}
		}
	});
});