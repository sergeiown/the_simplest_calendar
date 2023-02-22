const monthYear = document.getElementById('month-year');

export function updateHeader(month, year) {
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

    // update the header with the current month and year
    monthYear.textContent = monthNames[month] + ' ' + year;
}
