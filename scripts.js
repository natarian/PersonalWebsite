$(document).ready(function() {
  /*Functions to highlight UMD Math Shirt Front Design when hovered*/
  $("#shirt_front").mouseover(function() {
    $(this).removeClass("toHide");
    $("#UMDShirt_front_caption").removeClass("toHide");
    $(".toHide").css("-webkit-filter", "blur(3px)", "filter", "blur(3px)");
    $("#UMDShirt_div").append("<img src='images/DepOfMath_logo.png' class='UMDShirt toHide' id='shirt_front_overlay' alt='UMD Tshit Front Design'>");
    $('#shirt_front_overlay').css('width', '40%');
    $('#shirt_front_overlay').css('height', 'auto');
    $('#shirt_front_overlay').css({
      'position' : 'fixed',
      'top' : '40%',
      'left' : '50%',
      'bottom' : '60%',
      'margin-left' : -$('#shirt_front_overlay').width()/2,
      'margin-top' : -$('#shirt_front_overlay').height()/2,
   });
  });

  $("#shirt_front").mouseleave(function() {
    $("#shirt_front_overlay").remove()
    $(".toHide").css("-webkit-filter", "blur(0px)", "filter", "blur(0px)");
    $(this).css({
      'position' : 'relative',
      'height' : 'auto',
      'width' : '100%',
      'left' : "",
      'bottom' : "",
      'margin-left' : "",
      'margin-top' : ""
   });
    $(this).addClass("toHide");
    $("#UMDShirt_front_caption").addClass("toHide");
  });

    /*Functions to highlight UMD Math Shirt Back Design when hovered*/
    $("#shirt_back").mouseover(function() {
      $(this).removeClass("toHide");
      $("#UMDShirt_back_caption").removeClass("toHide");
      $(".toHide").css("-webkit-filter", "blur(3px)", "filter", "blur(3px)");
      $("#UMDShirt_div").append("<img src='images/UMDMathDesign.png' class='UMDShirt toHide' id='shirt_back_overlay' alt='UMD Tshit Back Design'>");

      $('#shirt_back_overlay').css('width', '50%');
      $('#shirt_back_overlay').css('height', 'auto');
      $('#shirt_back_overlay').css({
         'position' : 'fixed',
         'top' : '40%',
         'left' : '50%',
         'bottom' : '60%',
         'margin-left' : -$('#shirt_back_overlay').width()/2,
         'margin-top' : -$('#shirt_back_overlay').height()/2,
     });
    });

    $("#shirt_back").mouseleave(function() {
      $("#shirt_back_overlay").remove()
      $(".toHide").css("-webkit-filter", "blur(0px)", "filter", "blur(0px)");
      $(this).css({
        'position' : 'relative',
        'height' : 'auto',
        'width' : '100%',
        'top' : '',
        'left' : '',
        'bottom' : '',
        'margin-left' : "",
        'margin-top' : ""
     });
      $(this).addClass("toHide");
      $("#UMDShirt_back_caption").addClass("toHide");
    })

    /*Functions to highlight PME certificate when hovered*/
    $("#PME_certificate").mouseover(function() {
      $(this).removeClass("toHide");
      $(".toHide").css("-webkit-filter", "blur(3px)", "filter", "blur(3px)");
      $("#UMDShirt_div").append("<img src='images/PME_certificate.png' class='UMDShirt toHide' id='PME_certificate_overlay' alt='PME Certificate'>");
      $('#PME_certificate_overlay').css('width', '45%');
      $('#PME_certificate_overlay').css('height', 'auto');
      $('#PME_certificate_overlay').css({
         'position' : 'fixed',
         'top' : '40%',
         'left' : '50%',
         'bottom' : '60%',
         'margin-left' : -$('#PME_certificate_overlay').width()/2,
         'margin-top' : -$('#PME_certificate_overlay').height()/2,
     });
    });

    $("#PME_certificate").mouseleave(function() {
      $("#PME_certificate_overlay").remove()
      $(".toHide").css("-webkit-filter", "blur(0px)", "filter", "blur(0px)");
      $(this).css({
        'position' : 'relative',
        'height' : 'auto',
        'width' : '25%',
        'left' : "",
        'bottom' : "",
        'margin-left' : "",
        'margin-top' : ""
     });
      $(this).addClass("toHide");
    });

});
