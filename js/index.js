function setJson(){
	
	$.getJSON('data.json', function(data) {
		var template = $('#speakerstpl').html();
		var html = Mustache.to_html(template, data);
		$(".content").html(html);
	
	}); //getJSON
}
setJson();

setTimeout(function(){

$("document").ready(function(){

	$(".content li").click(function(event) {
	event.preventDefault();
    localStorage.setItem("fileName", $(this).attr("data-fileName"));
    console.log(localStorage.getItem("fileName"));	
 	window.location.replace("creator.html");
	});

});
},200);