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
const CLEAR_ARRAY = 0;
const DEFAULT_HOURS = '0';
var modulesInput = null;
var hourInputs = [];
var weekHrs = [];

if(modulesInput == null) {
    modulesInput = document.getElementById('num-modules');
}

// get input elements
if(hourInputs.length != 5) {
    document.getElementsByName('hour-inputs').forEach(element => {
        hourInputs.push(element);
    });
};

// reset variables
function resetVars() {
    // clear weekHrs values
    weekHrs.length = CLEAR_ARRAY;
}

document.getElementById('num-modules').addEventListener('change', function() {
    console.log('onchange');
});

// handle submit
document.getElementById('submit').addEventListener('click', function() {
    // reset variables
    resetVars();

    // get input from each element
    hourInputs.forEach(input => {
        if(input.value >= 0 && input.value <= 12) {
            // input is valid
            // set css classes
            if(input.classList.contains('is-invalid')) {
                input.classList.remove('is-invalid');
            };
            if(!input.classList.contains('mb-3')) {
                input.classList.add('mb-3');
            };
            // get value
            weekHrs.push(input.value)
        } else {
            // input was invalid
            // set css classes
            if(!input.classList.contains('is-invalid')) {
                input.classList.add('is-invalid');
            };
            if(input.classList.contains('mb-3')) {
                input.classList.remove('mb-3');
            }
            // get default value
            weekHrs.push(DEFAULT_HOURS);
        };
    });

    // !!! DEBUG !!!
    console.log('weekHrs:', weekHrs);
});