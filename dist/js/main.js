jQuery(function ($) {
  // spinner
  var spinnerHide = function(){
    $('.circular').fadeOut('slow');
  }
  setTimeout(spinnerHide, 10000 );
  
  // accordion open
  $('.accordion-header').on('click', function () {
    $(this).closest('.accordion-row').toggleClass('open');
  });

  
  // inside input open
  $('.chevron').on('click', function () {
    $(this).toggleClass('open');
    $(this).siblings('.submenu').toggleClass('open');
  });

  //  checkbox
  $(".checkbox__input").click(function () {
    $(this).siblings(".checkbox__icon").text(this.checked ? "check_box" : "check_box_outline_blank");
    console.log($( "input:checked" ).length);
  });
  $("input[id^=check-all").change(function () {
    $(this).closest('.checkbox__item').find(".submenu .checkbox__list input:checkbox").prop('checked', $(this).prop("checked"));
    $(this).closest('.checkbox__item').find(".submenu .checkbox__icon").text(this.checked ? "check_box" : "check_box_outline_blank");
    console.log($( "input:checked" ).length);
  });

  



  
  // $('body').on('click', function() {
  //   console.log($( "input:checked" ));
  // });

});