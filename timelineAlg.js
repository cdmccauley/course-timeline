console.log('timelineAlg.js loaded');

// get start date
// get days per week
// get hours per week
// get hours per module

// present m-f
// get hours for each day
// get current day
// subtract current
// subtract typical

var inputs = [];

function submit() {
    var weekHrs = [];

    if(inputs.length != 5) {
        document.getElementsByName('inputs').forEach(element => {
            inputs.push(element);
        });
    };

    inputs.forEach(input => {
        if(input.value >= 0 && input.value <= 12) {
            if(input.classList.contains('is-invalid')) {
                input.classList.remove('is-invalid');
            };
            if(!input.classList.contains('mb-3')) {
                input.classList.add('mb-3');
            };
            weekHrs.push(input.value)
        } else {
            if(!input.classList.contains('is-invalid')) {
                input.classList.add('is-invalid');
            };
            if(input.classList.contains('mb-3')) {
                input.classList.remove('mb-3');
            }
            weekHrs.push('0');
        };
    });

    console.log(weekHrs);
}