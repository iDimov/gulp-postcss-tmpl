// $(document).ready(function() {
//   $('.collapse.in').prev('.panel-heading').addClass('active');
//   $('#accordion, #bs-collapse')
//     .on('show.bs.collapse', function(a) {
//       $(a.target).prev('.panel-heading').addClass('active');
//     })
//     .on('hide.bs.collapse', function(a) {
//       $(a.target).prev('.panel-heading').removeClass('active');
//     });
// });

jQuery(function ($) {
  // start -> accordion open
  $('.accordion-header').on('click', function () {
    $(this).closest('.accordion-row').toggleClass('open');
  });
  // end -> accordion open
  
  // start -> inside input open
  $('.chevron').on('click', function () {
    $(this).toggleClass('open');
    $(this).siblings('.submenu').toggleClass('open');
  });
  // end -> inside input open




  // start -> checkbox
  $(".checkbox__input").click(function () {
    $(this).siblings(".checkbox__icon").text(this.checked ? "check_box" : "check_box_outline_blank");
  });
  
  $("#check-all").change(function () {
    console.log();
    $(this).closest('.checkbox__item').find(".submenu .checkbox__list input:checkbox").prop('checked', $(this).prop("checked"));
    $(this).closest('.checkbox__item').find(".submenu .checkbox__icon").text(this.checked ? "check_box" : "check_box_outline_blank");
  });
  // end -> checkbox
  
  $('body').on('click', function() {
    // console.log($( "input:checked" ));
  })

});