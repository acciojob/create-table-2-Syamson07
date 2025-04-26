function createTable() {
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Prompt user for number of rows and columns
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert to numbers
  rn = Number(rn);
  cn = Number(cn);

  // Validate inputs
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numbers for rows and columns.");
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  // Create the table dynamically
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
