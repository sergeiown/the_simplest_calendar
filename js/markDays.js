export function markDays(month, year, i, dayCell) {
    if (new Date(year, month, i).getDay() === 5 || new Date(year, month, i).getDay() === 6) {
        // if the current day is a weekend - set background color to "weekend"
        dayCell.classList.add('weekend');
    } else if (new Date(year, month, i).toLocaleDateString() === new Date().toLocaleDateString()) {
        // if the current day is today - set background color to "current"
        dayCell.classList.add('today');
    }
}
