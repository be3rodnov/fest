{
  $(".block-schedule__main").each(function () {
    var $tabs = $(this).find(".block-schedule__day"),
      $text = $(this).find(".block-schedule__window");
    $tabs.off("click.tabs").on("click.tabs", function () {
      var $this = $(this),
        index = $tabs.index($this);
      $tabs.not($this.addClass("active")).removeClass("active");
      $text.not($text.eq(index).fadeIn(300).addClass("active")).hide().removeClass("active");
    });
  });
}
$(document).ready(function () {
  blockMenu();
});
$(window).resize(function () {
  blockMenu();
});
function blockMenu() {
  if (window.innerWidth < 761) {
    $(".block-m-menu__menu").append($(".menu__list"));
  } else {
    $(".block-header__menu").append($(".menu__list"));
  }
}

$(".block-header__menu-toggle").on("click", function () {
  $(this).toggleClass("active");
  $(".block-m-menu").toggleClass("active");
});
$("body").on("click", ".block-m-menu .menu__item", function (e) {
  $(".block-header__menu-toggle").removeClass("active");
  $(".block-m-menu").removeClass("active");
  console.log("1");
});
