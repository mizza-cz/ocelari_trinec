// function sortTable(table, sortClass) {
//   const rows = Array.from(table.tBodies[0].rows);
//   rows.sort(function (rowA, rowB) {
//     const valueA = parseFloat(
//       rowA.querySelector(sortClass).textContent.replace(",", ".")
//     );
//     const valueB = parseFloat(
//       rowB.querySelector(sortClass).textContent.replace(",", ".")
//     );
//     return valueB - valueA;
//   });

//   rows.forEach(function (row) {
//     table.tBodies[0].appendChild(row);
//   });
// }

// window.onload = function () {
//   // Goalkeeper Table - Sort by .sort-usp
//   const goalkeeperTable = document.getElementById("goalkeeperTable");
//   sortTable(goalkeeperTable, ".sort-usp");

//   // Filter Table - Sort by .sortable-b
//   const filterTables = document.querySelectorAll(".filter-b-table");
//   filterTables.forEach(function (table) {
//     sortTable(table, ".sortable-b");
//   });
// };
function sortTable(table, sortClass) {
  const rows = Array.from(table.tBodies[0].rows);
  rows.sort(function (rowA, rowB) {
    const valueA = parseFloat(
      rowA.querySelector(sortClass).textContent.trim().replace(",", ".")
    );
    const valueB = parseFloat(
      rowB.querySelector(sortClass).textContent.trim().replace(",", ".")
    );

    // Compare based on the sortable column
    if (valueA !== valueB) {
      return valueB - valueA; // Sort by the specified column descending
    } else {
      // If values are equal, sort by goals ("G" column) descending
      const goalsA = parseFloat(
        rowA.querySelector(".number:nth-child(5)").textContent.trim()
      );
      const goalsB = parseFloat(
        rowB.querySelector(".number:nth-child(5)").textContent.trim()
      );
      return goalsB - goalsA;
    }
  });

  // Re-append sorted rows to the table body
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
