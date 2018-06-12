jQuery(function($) {
  $('.search-field-control').on('click', function(e) {
    console.log(this, e);
    e.preventDefault();
    $('.search-field-control').toggleClass("open");
    $('.search-submit').toggleClass("open");
    $('.vd-search .search-field').toggleClass("open");
  });



  //modal open & close
  $(".signin-open").on("click", function(e) {
    e.preventDefault();
    $(".vd-modal").toggleClass("show");
  });

  $(document).keydown(function(event) {
    if (event.keyCode == 27) {
      $(".vd-modal").toggleClass("show");
    }
  });

  $(".vd-modal").on("click", function(e) {
    if (!$(e.target).closest(".vd-modal__box").length) {
      $(".vd-modal").removeClass("show");
    }
  });

  // language
  $(".vd-lang__current").on("click", function(e) {
    $(".vd-lang-box").addClass("open");
  });
  $(".vd-lang__icon").on("click", function(e) {
    $(".vd-lang-box").toggleClass("open");
  });

  // tabs
  $(".vd-tab ul.vd-tabs")
    .addClass("active")
    .find("> li:eq(0)")
    .addClass("current");

  $(".vd-tab ul.vd-tabs li a").on('click', function(g) {
    var tab = $(this).closest(".vd-tab"),
      index = $(this)
        .closest("li")
        .index();

    tab.find("ul.vd-tabs > li").removeClass("current");
    $(this)
      .closest("li")
      .addClass("current");

    tab
      .find(".vd-tab__content")
      .find("div.vd-tabs__item")
      .not("div.vd-tabs__item:eq(" + index + ")")
      .slideUp();
    tab
      .find(".vd-tab__content")
      .find("div.vd-tabs__item:eq(" + index + ")")
      .slideDown();

    g.preventDefault();
  });
})