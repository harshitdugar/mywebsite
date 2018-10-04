$(document).ready(function() {
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
myVar = setTimeout(showPage, 4000);
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("txt").style.display = "none";
    document.getElementById("txt1").style.display = "none";
    $(".social").show();
}

var myVar1;
myVar1 = setTimeout(showPage1, 6000);
function showPage1() {
    $(".index-icons").show();
}
