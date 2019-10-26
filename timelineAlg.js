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
const MAX_COL = 5;
const CLEAR_ARRAY = 0;
const DEFAULT_MIN = '0';
const DEFAULT_MAX = '31';
// elements
let colMd1 = null;
let colMd2 = null;
let modulesInput = null;
let hourInputs = null;
let submitBtn = null;
let modHrsDiv = null;
let modHrsLabel = null;
let modHrsInput = null;
// data
let modulesNumber;
let modNumCounter; // tracks module number for hours label
let weekHrs = [];



// get elements from dom
if(modulesInput == null) {
    modulesInput = document.getElementById('num-modules');
};

if (modHrsDiv == null) {
    modHrsDiv = document.getElementById('module-hours');
};

if(hourInputs == null) {
    hourInputs = [];
    document.getElementsByName('hour-inputs').forEach(element => {
        hourInputs.push(element);
    });
};

if(submitBtn == null) {
    submitBtn = document.getElementById('submit');
};



// create elements for dom
// create prototype col-md-1
// if(colMd1 == null) {
//     colMd1 = document.createElement('div');
//     colMd1.classList.add('col-md-1');
// }

// create prototype col-md-2
// if(colMd2 == null) {
//     colMd2 = document.createElement('div');
//     colMd2.classList.add('col-md-2');
// }

// create prototype module hours label
// if(modHrsLabel == null) {
//     modHrsLabel = document.createElement('label');
// }

// create prototype module hours input
// if(modHrsInput == null) {
//     modHrsInput = document.createElement('input');
//     modHrsInput.classList.add('form-control', 'form-control-sm', 'mb-3');
//     modHrsInput.name = 'mod-hours';
//     modHrsInput.type = 'number';
//     modHrsInput.min = DEFAULT_MIN;
//     modHrsInput.max = DEFAULT_MAX;
//     modHrsInput.value = DEFAULT_MIN;
// };

let divProto = document.createElement('div');
let labelProto = document.createElement('label');
let inputProto = document.createElement('input');

// function declarations
// gets module-hours columns
// NOTE: need to refactor, currently removing and adding x elements
// from dom on every change
function getModHoursCol(colNum) {
    let cols = [];
    let col2, label, input, feedback;

    col2 = divProto.cloneNode();
    col2.classList.add('col-md-2');

    label = labelProto.cloneNode();

    input = inputProto.cloneNode();
    input.classList.add('form-control', 'form-control-sm', 'mb-3');
    input.name = 'mod-hours';
    input.type = 'number';
    input.min = DEFAULT_MIN;
    input.max = DEFAULT_MAX;
    input.value = DEFAULT_MIN;

    feedback = divProto.cloneNode();
    feedback.classList.add('invalid-feedback', 'mt-0', 'mb-3');
    feedback.textContent = 'Value must be ' + DEFAULT_MIN + '-' + DEFAULT_MAX;

    for(i = 0; i < colNum; i++) {
        cols.push(col2.cloneNode());
        label.textContent = 'Module ' + modNumCounter + ' hours'; // couldn't use i, resets after 5
        modNumCounter++;
        cols[i].appendChild(label.cloneNode(true));
        cols[i].appendChild(input.cloneNode());
        cols[i].appendChild(feedback.cloneNode(true));
    }

    return cols;
}
// gets a module-hours row
// NOTE: need to refactor, currently removing and adding x elements
// from dom on every change
function getModHoursRow(inputNum) {
    let colNum = inputNum;
    let row = divProto.cloneNode();
    let col1 = divProto.cloneNode();
    let rows = [];

    row.classList.add('row');
    col1.classList.add('col-md-1');

    if(colNum > MAX_COL) {
        row.appendChild(col1.cloneNode());
        getModHoursCol(MAX_COL).forEach(element => {
            row.appendChild(element);
        });
        row.appendChild(col1.cloneNode());
        rows.push(row);
        colNum -= MAX_COL;
        rows.push.apply(rows, getModHoursRow(colNum))
    } else {
        //row = getModHoursCol(colNum);
        row.appendChild(col1.cloneNode());
        getModHoursCol(colNum).forEach(element => {
            row.appendChild(element);
        })
        row.appendChild(col1.cloneNode());
        rows.push(row);
    }

    return rows;
};

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
};



// event listeners
// num-modules onchange listener
// NOTE: need to refactor, currently removing and adding x elements
// from dom on every change
modulesInput.addEventListener('change', function() {
    if(modulesInput.value >= 0 && modulesInput.value <= 31) {
        // input is valid
        // set css classes
        setValidStyle(modulesInput);
        modulesNumber = modulesInput.value;
        // add module hour inputs
        while(modHrsDiv.hasChildNodes()) {
            modHrsDiv.removeChild(modHrsDiv.lastChild);
        }
        modNumCounter = 1; // temp fix for label bug
        getModHoursRow(modulesNumber).forEach(row => {
            modHrsDiv.appendChild(row);
        }); // DEBUG!!!


    } else {
        // input is invalid
        setInvalidStyle(modulesInput);
        modulesNumber = DEFAULT_MIN;
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
            weekHrs.push(DEFAULT_MIN);
        };
    });



    // !!! DEBUG !!!
    console.log('weekHrs:', weekHrs);
});