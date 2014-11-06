
$( document ).on( "ready",function() {

	$.getJSON('data.json', function(data) {
		var template = $('#speakerstpl').html();
		var html = Mustache.to_html(template, data);
		$(".content").html(html);
		
		
	}); //getJSON
	
}); //function