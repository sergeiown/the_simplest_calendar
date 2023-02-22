import { updateCalendar } from './js/updateCalendar.js';

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentDate = new Date();

updateCalendar(currentDate.getMonth(), currentDate.getFullYear());

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar(currentDate.getMonth(), currentDate.getFullYear());
});
