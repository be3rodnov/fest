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
