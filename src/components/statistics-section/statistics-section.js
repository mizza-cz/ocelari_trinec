function sortTable(table, sortClass) {
  const rows = Array.from(table.tBodies[0].rows);
  rows.sort(function (rowA, rowB) {
    const valueA = parseFloat(
      rowA.querySelector(sortClass).textContent.trim().replace(",", ".")
    );
    const valueB = parseFloat(
      rowB.querySelector(sortClass).textContent.trim().replace(",", ".")
    );

    if (valueA !== valueB) {
      return valueB - valueA;
    } else {
      const goalsA = parseFloat(
        rowA.querySelector(".number:nth-child(5)").textContent.trim()
      );
      const goalsB = parseFloat(
        rowB.querySelector(".number:nth-child(5)").textContent.trim()
      );
      return goalsB - goalsA;
    }
  });

  rows.forEach(function (row) {
    table.tBodies[0].appendChild(row);
  });
}

window.onload = function () {
  const goalkeeperTable = document.getElementById("goalkeeperTable");
  if (goalkeeperTable) {
    sortTable(goalkeeperTable, ".sort-usp");
  }

  const filterTables = document.querySelectorAll(".filter-b-table");
  filterTables.forEach(function (table) {
    if (table) {
      sortTable(table, ".sortable-b");
    }
  });
};
