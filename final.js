
function printTextFunction(){
  document.getElementById("clickToPrintText").innerHTML="That is all for our presentation! Merry Christmas!";
}

$(document).ready(function(){

  $('.dot1').click(function(){
    $('.vidposition1').css('display','block');
    $('.vidposition2').css('display','none');
  });

  $('.dot2').click(function(){
    $('.vidposition1').css('display','none');
    $('.vidposition2').css('display','block');
  });
      
  $(window).on('scroll load', function(){
    if($(window).scrollTop() > 10){
      $('#header').addClass('header-active');
    }else{
      $('#header').removeClass('header-active');
    }
  });

  $('#btnHide').click(function(){
    $("div.thankyou").hide();
  });

});


