$(document).ready(function () {
  function shouldSortDate() {
    return $(".tableSort th.dateColumn").length > 0;
  }

  $.fn.dataTable.ext.type.order["date-pre"] = function (data) {
    var dateParts = data.split(".").reverse();
    return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]).getTime();
  };

  $(".tableSort").DataTable({
    paging: false,
    searching: false,
    columnDefs: [
      {
        type: shouldSortDate() ? "date" : null,
        targets: 0,
      },
    ],
    order: shouldSortDate() ? [[0, "desc"]] : [],
  });
});
