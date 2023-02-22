import { addBlankCells } from './addBlankCells.js';

export function addNewWeek(month, year, i) {
    if (i === 1 || new Date(year, month, i).getDay() === 0) {
        // if the current day is the first or Sunday - add a new line
        const weekRow = document.createElement('tr');
        days.appendChild(weekRow);

        addBlankCells(month, year, i, weekRow);
    }
}
