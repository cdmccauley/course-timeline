// confirm script file is loaded
console.log('course-timeline.js loaded');

// element declarations
let numModulesInput;
let moduleHoursDiv;
let moduleHourInputs = [];
let submitBtn;

// get elements
numModulesInput = document.getElementById('num-modules');
moduleHoursDiv = document.getElementById('module-hours');
submitBtn = document.getElementById('submit');

// data declarations
const MIN_MODS = 0;
const MAX_MODS = 31;
const MIN_HOURS = 0;
const MAX_HOURS = 31;
let numModules;


// FUNCTION DECLARATIONS //

// sets valid styles
function setValidStyle(element) {
    if(element.classList.contains('is-invalid')) {
        element.classList.remove('is-invalid');
    };
    if(!element.classList.contains('mb-3')) {
        element.classList.add('mb-3');
    };
};

// sets invalid styles
function setInvalidStyle(element) {
    if(!element.classList.contains('is-invalid')) {
        element.classList.add('is-invalid');
    };
    if(element.classList.contains('mb-3')) {
        element.classList.remove('mb-3');
    };
};

// creates and stores module hour input
function createModuleHourInput(id) {
    let template = document.createElement('template');
    template.innerHTML = '<div class="col-sm-auto">' +
                            '<label>Module ' + String(id) + '</label>' +
                            '<input class="form-control form-control-sm mb-3" id="module-' + String(id) + 'name="module-hours" type="number" min="0" max="31" value="0"> <!-- max val is placeholder, also referenced in feedback div below -->' +
                            '<div class="invalid-feedback mt-0 mb-3">Value must be 0-31</div>' +
                        '<div>';
    return template.firstElementChild;
}

// returns module hour inputs
function getModuleHourInputs(qty) {
    // find number of existing inputs
    // if qty > existing create and return full
    // else return array of existing
    moduleHoursDiv.appendChild(createModuleHourInput(1)); // to test adding
    /*
    working here
    started working in the num-modules change listener
    researching best way to add the elements to the dom without creating them multiple times
    seems like using appendChild and removeChild will be good
    will need to iterate for qty and remove or add
    will also need to store the created elements instead of appending
    maybe a better name for this will be setModuleHourInputs,
    the method will take a number and handle creating, adding, and removing
    */
}


// EVENT LISTENERS //

// num-modules change listener
numModulesInput.addEventListener('change', function() {
    // get input
    numModules = Number(numModulesInput.value);
    // validate input
    if(numModules >= MIN_MODS && numModules <= MAX_MODS) {
        console.log('valid data');
        setValidStyle(numModulesInput);
        getModuleHourInputs(numModules);
    } else {
        console.log('invalid data');
        setInvalidStyle(numModulesInput);
    };
});

// submit click listener
submitBtn.addEventListener('click', function(){
    console.log('submitBtn click listener');
});