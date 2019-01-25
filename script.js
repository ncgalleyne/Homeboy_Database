//my website that links to other websites
//background to be slideshow of all my edits

var hdr = document.querySelector('h1');
var btn = document.querySelector('#pause');
var span = document.querySelector('#span');
var carousel = document.querySelector('#myCarousel');
var inner = document.querySelector('.carousel-inner');
var rand = document.querySelector('#rand');

function random(number) {
  return Math.floor(Math.random()*(number+1));	// Random Number Generator
}

function randomColor() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';	//Random color generator
  hdr.style.color = rndCol;
}

function setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = window.setInterval(function () {

       randomColor();

       if (++x === 10) {
           window.clearInterval(intervalID);
       }
    }, 125);
}

var loadCarousel = function(){
	var div = document.createElement('DIV');
	div.setAttribute('class', 'item active');
	var img = document.createElement('IMG');
	img.setAttribute('src', 'pic0.jpg');
	div.appendChild(img);
	inner.appendChild(div);
	for(i = 1; i < 43; i++){
		div = document.createElement('DIV');
		div.setAttribute('class', 'item');
		img = document.createElement('IMG');
		img.setAttribute('src', 'pic' + i + '.jpg');
		div.appendChild(img);
		inner.appendChild(div);
	}
}

//loadCarousel();

window.onload = function(){
	setIntervalX(randomColor(), 125, 10);
	loadCarousel();
}

btn.addEventListener('click', function(){ //toggle play/pause
	$("#span").toggleClass('glyphicon-pause');
	if(span.getAttribute('class') != 'glyphicon glyphicon-play glyphicon-pause'){
		$( "#span" ).addClass( "glyphicon-play" );
		$("#myCarousel").carousel("pause");
	}
	else{
		$( "#span" ).removeClass( "glyphicon-play" );		
		$("#myCarousel").carousel("cycle"); //random(43)
	}		
})

rand.onclick = function(e){
	$("#myCarousel").carousel(random(43));
}

$("#myCarousel").on('slide.bs.carousel', function(e){
   //rand.click();
});

var $item = $('.item'); //https://www.sitepoint.com/full-screen-bootstrap-carousel-random-initial-image/
var $wHeight = $(window).height();

$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});