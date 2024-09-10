function sortTable(table, sortClass) {
  const rows = Array.from(table.tBodies[0].rows);
  rows.sort(function (rowA, rowB) {
    const valueA = parseFloat(
      rowA.querySelector(sortClass).textContent.replace(",", ".")
    );
    const valueB = parseFloat(
      rowB.querySelector(sortClass).textContent.replace(",", ".")
    );
    return valueB - valueA;
  });

  rows.forEach(function (row) {
    table.tBodies[0].appendChild(row);
  });
}

window.onload = function () {
  // Goalkeeper Table - Sort by .sort-usp
  const goalkeeperTable = document.getElementById("goalkeeperTable");
  sortTable(goalkeeperTable, ".sort-usp");

  // Filter Table - Sort by .sortable-b
  const filterTables = document.querySelectorAll(".filter-b-table");
  filterTables.forEach(function (table) {
    sortTable(table, ".sortable-b");
  });
};
