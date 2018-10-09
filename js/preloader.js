$(document).ready(function() {
  $(".index-about--me").hide();
  $(".social").hide();
  $(".index-icons").hide();

    //Preloader
      /*$(window).on("load", function() {
        preloaderFadeOutTime = 700;
        function hidePreloader() {
          var preloader = $('.spinner-wrapper');
          preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
      });*/
    });

var myVar;
myVar = setTimeout(showPage, 2200);
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("txt").style.display = "none";
    $(".social").show();
}
//var myVar2 = ((function(){}),3000);
var myVar2 = setTimeout((function(){
  $(".index-about--me").show();
}),5000);

var myVar1;
myVar1 = setTimeout(showPage1, 7000);
function showPage1() {
    $(".index-icons").show();
}
