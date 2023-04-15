const itemForm = document.getElementById('item-form');
const dayItem = document.getElementById('day-input');
const monthItem = document.getElementById('month-input');
const yearItem = document.getElementById('year-input');
const label = document.querySelectorAll('.label');
const errorMessage = document.querySelectorAll(".error-handling");
const dayOutput = document.querySelector('.day')
const yearOutput = document.querySelector('.year')
const monthOutput = document.querySelector('.month')


function check(day, month, year) {
    let currentYear = new Date().getFullYear();
    let regex = /^[0-9]+$/;

    if (!day.match(regex) || !month.match(regex) || !year.match(regex)) {
        handleError();
        return false        
    } else if (day >= 1 && day >= 31 || month >= 1 && month > 12 || year >= 1 && year > currentYear) {
        handleError();
        return false
    } else if (day > 28 && month == 2) {
        handleError();
        return false
    } else if (day > 30 && month == 4 && month == 6 && month == 9 && month == 11) {
        handleError();
        return false
    }
    return true
}

function handleError() {
    label.forEach(element => {
        element.style.color = "hsl(0, 100%, 67%)"
    });
    dayItem.style.outline = "none";
    dayItem.style.borderColor = "hsl(0, 100%, 67%)";
    monthItem.style.outline = "none";
    monthItem.style.borderColor = "hsl(0, 100%, 67%)";
    yearItem.style.outline = "none";
    yearItem.style.borderColor = "hsl(0, 100%, 67%)";
    errorMessage.forEach(element => {
        element.className = 'errorMessage'
    })
    errorMessage[0].textContent = 'Must be a valid day';
    errorMessage[1].textContent = 'Must be a valid Month';
    errorMessage[2].textContent = 'Must be a valid year';
}

function onDateSubmit(e) {
    e.preventDefault();

    check(dayItem.value, monthItem.value, yearItem.value)
    
    if (check(dayItem.value, monthItem.value, yearItem.value) == true) {
        let currentDate = new Date();
        let day = currentDate.getDate()
        let month = currentDate.getMonth()
        let year = currentDate.getFullYear();
        
        yearOutput.textContent = year - yearItem.value
        monthOutput.textContent = Math.abs(month - monthItem.value)
        dayOutput.textContent = Math.abs(day - dayItem.value)
    }
}


function init() {
    itemForm.addEventListener('submit', onDateSubmit);
}

init()


