// Data for the table
const tableData = [
    { name: "Alice", math: 85, science: 90, english: 88 },
    { name: "Bob", math: 78, science: 82, english: 80 },
    { name: "Carol", math: 92, science: 89, english: 95 },
];

// Function to create a table
function createTable(data) {
    const tableContainer = document.getElementById('table-container');
    
    // Create table element
    const table = document.createElement('table');
    
    // Create table header
    const headerRow = document.createElement('tr');
    const headers = ['Student Name', 'Math Grade', 'Science Grade', 'English Grade'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    // Create table rows
    data.forEach(row => {
        const tableRow = document.createElement('tr');
        
        Object.values(row).forEach(cellText => {
            const td = document.createElement('td');
            td.textContent = cellText;
            tableRow.appendChild(td);
        });
        
        table.appendChild(tableRow);
    });
    
    // Append the table to the container
    tableContainer.appendChild(table);
}

// Call the function to create the table
createTable(tableData);
