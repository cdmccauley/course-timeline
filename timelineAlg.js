// !!! DEBUG !!!
console.log('timelineAlg.js loaded');

/* NOTES:
 * get start date
 * get days per week
 * get hours per week
 * get hours per module

 * present m-f
 * get hours for each day
 * get current day
 * subtract current
 * subtract typical
*/

// declarations
// constants
const CLEAR_ARRAY = 0;
const DEFAULT_VALUE = '0';
// elements
var modulesInput = null;
var hourInputs = null;
var submitBtn = null;
// data
var modulesNumber;
var weekHrs = [];

// get elements from dom
if(modulesInput == null) {
    modulesInput = document.getElementById('num-modules');
}

if(hourInputs == null) {
    hourInputs = [];
    document.getElementsByName('hour-inputs').forEach(element => {
        hourInputs.push(element);
    });
};

if(submitBtn == null) {
    submitBtn = document.getElementById('submit');
}

// function declarations
// sets valid styles
function setValidStyle(element) {
    if(element.classList.contains('is-invalid')) {
        element.classList.remove('is-invalid');
    };
    if(!element.classList.contains('mb-3')) {
        element.classList.add('mb-3');
    };
}

// sets invalid styles
function setInvalidStyle(element) {
    if(!element.classList.contains('is-invalid')) {
        element.classList.add('is-invalid');
    };
    if(element.classList.contains('mb-3')) {
        element.classList.remove('mb-3');
    };
}

// event listeners
// num-modules onchange listener
modulesInput.addEventListener('change', function() {
    if(modulesInput.value >= 0 && modulesInput.value <= 31) {
        // input is valid
        // set css classes
        setValidStyle(modulesInput);
        modulesNumber = modulesInput.value
    } else {
        // input is invalid
        setInvalidStyle(modulesInput);
        modulesNumber = DEFAULT_VALUE;
    }
    // !!! DEBUG !!!
    console.log('modulesNumber:', modulesNumber);
});

// submit onclick listener
submitBtn.addEventListener('click', function() {
    // reset hours
    weekHrs.length = CLEAR_ARRAY;

    // get input from each element
    hourInputs.forEach(input => {
        if(input.value >= 0 && input.value <= 12) {
            // input is valid
            // set css classes
            setValidStyle(input);
            // get value
            weekHrs.push(input.value)
        } else {
            // input is invalid
            // set css classes
            setInvalidStyle(input);
            // get default value
            weekHrs.push(DEFAULT_VALUE);
        };
    });

    // !!! DEBUG !!!
    console.log('weekHrs:', weekHrs);
});