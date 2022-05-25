
$(function(){
  $('.doc-gnb .list_menu').on( "mouseenter", function() {
      $( this ).find('.list_menudep2').show(300);
      $( this ).parent().find('.bg_depth2').show(300);
    });

      // $( this ).find('.list_menudep2').hide();
      // $( this ).parent().find('.bg_depth2').hide();


});