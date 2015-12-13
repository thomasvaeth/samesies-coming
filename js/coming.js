$(document).ready(function() {
	$('#getting-started').countdown('2016/01/01', function(e) {
		$(this).html(e.strftime('%D days %H hours %M minutes %S seconds'));
	});

	$('#mc-form').ajaxChimp({
		url: 'http://YOURMAILCHIMPHERE.us10.list-manage.com/subscribe/post?u=YOURMAILCHIMPHERE&amp;id=YOURMAILCHIMPHERE'
	});
});