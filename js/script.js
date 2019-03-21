$(function() {
        $('#carousel').carouFredSel({
          width: 800,
          items: 3,
          scroll: 1,
          auto: {
            duration: 1250,
            timeoutDuration: 2500
          },
          prev: '#prev',
          next: '#next',
          pagination: '#pager'
        });
  
      });
   var $btnTop = $(".btn-top")
$(window).on("scroll",function(){
  if ($(window).scrollTop() >=20){
    $btnTop.fadeIn();
  }else{
    $btnTop.fadeOut();
  }
});
$btnTop.on("click", function(){
$("html,body").animate({scrollTop:0}, 2000)
});
 $(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });
  $(window).resize(function() {   
    if (  $(window).width() > 500 ) {     
      $('nav ul').removeAttr('style');
     }
  });
});
var accordion = function() {
  var data = $(".accordion").attr("data-accordion");
	$(".accordion-header").on("click", function(){
		if (data === "close"){
		$(".accordion-body").slideUp();
		if ($(this).hasClass("active")){
			$(this).toggleClass("active");
		}
		else{
			$(".accordion-header").removeClass("active");
			$(this).toggleClass("active");
		}
	}
	else {
		$(this).toggleClass("active");
	}
	$(this).next(".accordion-body").not(":animated").slideToggle();
});
}
	accordion();
var slideIndex = 1;
showSlides(slideIndex);
function plusSliders(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlider");
var dots = document.getElementsByClassName("dot");
if (n > slides.length){
   slideIndex = 1
}
if(n < 1){
	slideIndex=slides.length
}
for (i=0; i < slides.length; i++ ){
   slides[i].style.display= "none";
}
for (i = 0; i < dots.length; i++){
	dots[i].className = dots[i].className.replace("active","");
}
slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className+="active";
}
 function Slider(width_li,margin_right_li,col_view_img){
            var step=width_li+margin_right_li,
                slider_box_with=col_view_img*step-margin_right_li,
                $col_img=$("#slider_box>ul>li").length,
                col_main_left=0,
                max_col_main_left=$col_img*step;
            $("#slider_box").width(slider_box_with);
            $("#slider_box>ul>li").width(width_li).css("margin-right",margin_right_li);
            $("#left_nav").click(function(){
                if(-col_main_left==max_col_main_left-col_view_img*step){
                    col_main_left=0;
                } else{
                    col_main_left=col_main_left-step;
                }
                $("#slider_box>ul").css("margin-left",col_main_left+"px");
            });
            $("#right_nav").click(function(){
                if(col_main_left==0){
                    col_main_left=-max_col_main_left+col_view_img*step;
                } else{
                    col_main_left=col_main_left+step;
                }
                $("#slider_box>ul").css("margin-left",col_main_left+"px");
            });
        }
        $(Slider(200,10,6));




