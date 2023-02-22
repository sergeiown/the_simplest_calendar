const monthYear = document.getElementById('month-year');
const days = document.getElementById('days');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentDate = new Date();

function updateCalendar(month, year) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    // clean tbody
    days.innerHTML = '';

    // adding days of the month to the calendar
    for (let i = 1; i <= daysInMonth; i++) {
        if (i === 1 || new Date(year, month, i).getDay() === 0) {
            // if the current day is the first or Sunday - add a new line
            const weekRow = document.createElement('tr');
            days.appendChild(weekRow);

            if (i === 1) {
                // if the first day of the month is not a Sunday add blank cells
                for (let j = 0; j < firstDay; j++) {
                    const emptyCell = document.createElement('td');
                    weekRow.appendChild(emptyCell);
                }
            }
        }
        const dayCell = document.createElement('td');
        dayCell.textContent = i;

        if (new Date(year, month, i).getDay() === 0 || new Date(year, month, i).getDay() === 6) {
            // if the current day is a weekend - set background color to red
            dayCell.classList.add('weekend');
        } else if (new Date(year, month, i).toLocaleDateString() === new Date().toLocaleDateString()) {
            dayCell.classList.add('today');
        }

        days.lastElementChild.appendChild(dayCell);
    }

    // update the header with the current month and year
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    monthYear.textContent = monthNames[month] + ' ' + year;
}

updateCalendar(currentDate.getMonth(), currentDate.getFullYear());

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});
