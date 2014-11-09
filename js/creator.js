	// var urlStr=window.location.search.substring(1);
	// var beginStr=window.location.search.substring(1).indexOf("%27")+3;
	// var endStr=window.location.search.substring(1).lastIndexOf("%27");
// 	
	// var lenStr=endStr-beginStr;
	// var fileName=urlStr.substr(beginStr,lenStr);
	//console.log(fileName);
		// alert(localStorage.getItem("fileName"));
     var fileName  =localStorage.getItem("fileName"); 

   
   function resizeCanvas(imageObj) {
		drawcanvas(imageObj.data.msg);
		textWritter();
	}
  
 
   function drawcanvas(imageObj){
   	
	var context=$("#myCanvas")[0].getContext('2d');
  	imageObj.src = 'reso/image/'+fileName;
  		
//	$("#myCanvas,#container,#myCanvas2").width(window.innerWidth);
	$("#myCanvas,#container,#myCanvas2").height((3*window.innerWidth)/4);
	context.canvas.width=$("#myCanvas").width();
	context.canvas.height=$("#myCanvas").height();
		
	var canWidth=$("#myCanvas").width();
	var canHeight=$("#myCanvas").height();
	
	  	context.drawImage(imageObj, 0, 0,canWidth,canHeight);
	  	imageObj.onload = function() {
	  	
	 	};
	
}
      
        
    function textWritter(tt,bt){
  		var context= $("#myCanvas2")[0].getContext('2d');
  		//get fresh dimentions of canvas 1 and set them on canvas 2
  		context.canvas.width=$("#myCanvas").width();
		context.canvas.height=$("#myCanvas").height();
		//get data from input fields
  		var topTxt=$("#toptext").val();
  		var bottomTxt=$("#bottomtext").val();
  		//check to see if field are empty of undefined
  		topTxt =(topTxt.length==0||topTxt===undefined)?"top text":topTxt;
  		bottomTxt =(bottomTxt.length==0||bottomTxt===undefined)?"bottom text":bottomTxt;
  	
  		//clear the canvas	 		
  		context.clearRect (0,0,context.canvas.width,context.canvas.height);
  		//set styles
    	context.strokeStyle = "#FFffff";
    	context.fillStyle = "#FFffff";
    	context.font="bold 25px verdana";
    	context.textBaseline="top";
    	context.textAlign = "center";
    	
    	//calculat points based on the canvas size
    	var startPointx1=(context.canvas.width*5)/100;
    	var startPointy1=(context.canvas.height*2)/100;
    	var centerx=context.canvas.width/2;
  		
  		var endPointx=(context.canvas.width*90)/100;
    	var endPointy=(context.canvas.height*90)/100
  		
  		//write the top text
  		context.fillText(topTxt,centerx,startPointy1,endPointx,startPointy1,endPointx);
  		//write the bottom text
  		context.fillText(bottomTxt,centerx,endPointy,endPointx,startPointy1,endPointx);
  	
  		 		
}
  
function drawFinally(){
	var context= $("#myCanvas")[0].getContext('2d');
	var canvas2ref=document.getElementById("myCanvas2");
	
	var newPat = context.createPattern(canvas2ref,"repeat");
 //	console.log(canvas2ref);
 	context.fillStyle=newPat;
 	context.rect(0,0,context.canvas.width,context.canvas.height);

	context.fill(); 
	// var mask=context.createPattern($("#myCanvas")[0],"repeat");
	// context.fillRect(mask,0,0,context.canvas.width,context.canvas.height);
}  
  
  
$("#bottomtext,#toptext").on("keyup",textWritter);
 
    function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
    
    
}
	$("#download").on("click", function() {
    downloadCanvas(this, 'myCanvas', 'test.png');
});
   
$(document).on('pagebeforeshow','#created', function () {
	var image = new Image();
	drawFinally();
	rawData=document.getElementById('myCanvas');
	
	//console.log(rawData);
	
  		image.onload=function()
  		{
  		//document.getElementById("#imgHolder").appendChild(image);
		$("#imgHolder").html(image);
		//window.open(image.src);
		
  		};
  	image.src=rawData.toDataURL();
  	downloadCanvas(this, 'myCanvas', 'test.png');
	});

$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
   window.history.back();
  }  
  
 }); 
   
   $(document).on('pagebeforehide','#created', function () {
	alert("gonna show");
	var imageObj = new Image();
	drawcanvas(imageObj);
	console.log(imageObj.src+fileName);
	});
   
   
   
       
$("document").ready(function(){	
	var imageObj = new Image();
	drawcanvas(imageObj);
	//window.addEventListener("resize", resizeCanvas(imageObj));
	$( window ).resize({msg: imageObj},resizeCanvas);
	
	
});