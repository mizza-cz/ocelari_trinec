$(document).ready(function () {
  // Функция для определения, нужно ли сортировать по дате
  function shouldSortDate() {
    return $(".tableSort th.dateColumn").length > 0; // Проверка наличия класса dateColumn
  }

  // Настройка сортировки по дате
  $.fn.dataTable.ext.type.order["date-pre"] = function (data) {
    var dateParts = data.split(".").reverse(); // Разбиваем строку и переворачиваем
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]).getTime(); // Создаем объект даты
  };

  // Инициализация DataTable
  $(".tableSort").DataTable({
    paging: false,
    searching: false,
    columnDefs: [
      {
        type: shouldSortDate() ? "date" : null, // Сортировка по дате только если класс есть
        targets: 0, // Укажите индекс колонки с датой
      },
    ],
    order: shouldSortDate() ? [[0, "desc"]] : [], // Сортировка по дате от самой последней к самой старой
  });
});
