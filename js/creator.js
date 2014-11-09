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
	  // 	imageObj.onload = function() {
	  	
	 	// };
	
}
      
        
    function textWritter(){
  		
      var context2= $("#myCanvas2")[0].getContext('2d');
  		//get fresh dimentions of canvas 1 and set them on canvas 2
  		context2.canvas.width=$("#myCanvas").width();
	  	context2.canvas.height=$("#myCanvas").height();
      $("#myCanvas2").css("position","absolute");
      // console.log("canvas width"+$("#myCanvas").width());
      // console.log("canvas context  width"+context2.canvas.width);
      // console.log("container width"+$("#container").width());
		//get data from input fields
  		var topTxt=$("#toptext").val();
  		var bottomTxt=$("#bottomtext").val();
  		//check to see if field are empty of undefined
  		topTxt =(topTxt.length==0||topTxt===undefined)?"top text":topTxt;
  		bottomTxt =(bottomTxt.length==0||bottomTxt===undefined)?"bottom text":bottomTxt;

      console.log(topTxt);
  	
  		//clear the canvas	 		
  		// context2.clearRect (0,0,context2.canvas.width,context2.canvas.height);
  		// //set styles
    	context2.strokeStyle = "#FFffff";
    	context2.fillStyle = "#FFffff";
    	context2.font="bold 25px verdana";
    	context2.textBaseline="top";
    	context2.textAlign = "center";
    	
    // 	//calculat points based on the canvas size
    // 	var startPointx1=(context2.canvas.width*5)/100;
    // 	var startPointy1=(context2.canvas.height*2)/100;
    // 	var centerx=context2.canvas.width/2;
  		
  		// var endPointx=(context2.canvas.width*90)/100;
    // 	var endPointy=(context2.canvas.height*90)/100;
  		
  		// //write the top text
  	 context2.fillText(topTxt,50,50,100,100);

  		// //write the bottom text
  		// context2.fillText(bottomTxt,centerx,endPointy,endPointx,startPointy1,endPointx);
  			 context2.fillStyle = "#00ff00"; 
  		 	context2.fillRect(0,0,context2.canvas.width,context2.canvas.height);
  		
  	
  		  var context1= $("#myCanvas")[0].getContext('2d');
         context1.fillStyle = "#0000ff"; 
  		 
  		   context1.fillRect(0,0,context2.canvas.width,context2.canvas.height);
  		 	setTimeout(function(){
          $("#myCanvas2").css("display","none");
        },1000);
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
//	$( window ).resize({msg: imageObj},resizeCanvas);
	
	
});