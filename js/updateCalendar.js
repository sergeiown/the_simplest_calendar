import { addNewWeek } from './addNewWeek.js';
import { markDays } from './markDays.js';
import { updateHeader } from './updateHeader.js';

const days = document.getElementById('days');

export function updateCalendar(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // clean calendar
    days.innerHTML = '';

    // adding days of the month to the calendar
    for (let i = 1; i <= daysInMonth; i++) {
        addNewWeek(month, year, i);

        const dayCell = document.createElement('td');
        dayCell.textContent = i;

        markDays(month, year, i, dayCell);

        days.lastElementChild.appendChild(dayCell);
    }

    updateHeader(month, year);
}
