export function addBlankCells(month, year, i, weekRow) {
    if (i === 1) {
        const firstDay = new Date(year, month, 1).getDay();

        // if the first day of the month is not a Monday add blank cells
        for (let j = 1; j < firstDay; j++) {
            const emptyCell = document.createElement('td');
            weekRow.appendChild(emptyCell);
        }
    }
}
