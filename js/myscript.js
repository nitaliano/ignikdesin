$(document).ready(function() {
	
$("#home-logo-img").fadeIn(4000);

	//ascensor
$('#content').ascensor({
	AscensorName:'house',
	WindowsFocus:true,
	WindowsOn:0,
	
	NavigationDirection:'xy',
	Direction:'y',
	Navig:false,
	Link:false,
	ReturnURL:false,
	PrevNext:false,
	CSSstyles:true,
	
	KeyArrow:false,
	keySwitch:false,
	ReturnCode:false,
	
	ChocolateAscensor:true,
	AscensorMap: '3|2',
	ContentCoord: '1|2 & 1|3 & 2|1 & 2|2'
});

$("#home-btn-wrapper").css("left",centerDiv("#home-btn-wrapper") +"px");

window.onresize = function(event){
	$("#home-btn-wrapper").css("left",centerDiv("#home-btn-wrapper") +"px");
};

$(".home-btn").click(function(){
	
	if( this.id === "li-home0-btn"){
		$.scrollTo("#house0",1000);
		$("#home-btn-wrapper").fadeOut(400);
		setTimeout(function(){
			$("#home-btn-wrapper").css("left",centerDiv("#home-btn-wrapper") +"px");
			$("#home-btn-wrapper").fadeIn(1000);
		},1300);
	}
	else if( this.id === "li-about0-btn" ){
		$.scrollTo("#house2",1000);
		$("#home-btn-wrapper").fadeOut(400);
		setTimeout(function(){
			$("#home-btn-wrapper").css("left",centerDiv("#home-btn-wrapper") +"px");
			$("#home-btn-wrapper").fadeIn(1000);
		},1300);
	}
	else if( this.id === "li-work0-btn" ){
		$.scrollTo("#house1",1000);
		$("#home-btn-wrapper").fadeOut(400);
		setTimeout(function(){
			$("#home-btn-wrapper").css("left",centerDiv("#home-btn-wrapper") +"px");
			$("#home-btn-wrapper").fadeIn(1000);
		},1300);
	}
	else if( this.id === "li-contact0-btn" ){
		$.scrollTo("#house3",1000);
		$("#home-btn-wrapper").fadeOut(400);
		setTimeout(function(){
			$("#home-btn-wrapper").css("left",centerDiv("#home-btn-wrapper") +"px");
			$("#home-btn-wrapper").fadeIn(1000);
		},1300);
	}
	
});

function centerDiv(tagname){
	return  ( window.innerWidth / 2 ) - ( $(tagname).width() / 2 );
}
function rightDiv(tagname){
	return window.innerWidth - $(tagname).width();
}


});
