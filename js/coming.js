$(document).ready(function() {
	$('#getting-started').countdown('2016/01/01', function(e) {
		$(this).html(e.strftime('%D days %H hours %M minutes %S seconds'));
	});

	$('#mc-form').ajaxChimp({
		url: 'http://gradingclub.us10.list-manage.com/subscribe/post?u=a27abf4ea679c7b902db61f62&amp;id=6d23e28cdf'
	});
});