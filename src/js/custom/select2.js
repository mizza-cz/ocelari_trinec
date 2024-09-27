$(".js-select, .accreditation-select").select2({
  width: "100%",
  minimumResultsForSearch: -1,
});

function isMobileSafari() {
  const ua = navigator.userAgent;
  return (
    /iP(ad|hone|od).+Version\/[\d.]+.*Safari/i.test(ua) &&
    !/CriOS|Chrome/i.test(ua)
  );
}

if (isMobileSafari()) {
  $(document).on("select2:open", function (e) {
    let select = $(e.target);

    select.select2("close");

    setTimeout(function () {
      select.focus().click();
    }, 100);
  });
}

$(function () {
  //presmerovani pomoci selectu
  $(".js-select").change(function () {
    location.href = $(this).val();
  });
});
