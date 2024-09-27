// Инициализируем Select2
$(".js-select, .accreditation-select").select2({
  width: "100%",
  minimumResultsForSearch: -1,
});

// Проверяем, что это Safari
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// Обработчик для симуляции бага
$(document).on("select2:open", function (e) {
  let select = $(e.target);

  if (isSafari()) {
    // Сброс pointer-events для включения стандартного выпадающего списка
    $(".select2-container--open").css("pointer-events", "none");

    // Небольшая задержка для обеспечения одновременного открытия двух дропдаунов
    setTimeout(function () {
      select.select2("close"); // Закрываем select2, чтобы появился стандартный select
      select.trigger("focus"); // Фокусируемся на стандартном select
    }, 0);
  }
});

$(function () {
  //presmerovani pomoci selectu
  $(".js-select").change(function () {
    location.href = $(this).val();
  });
});
