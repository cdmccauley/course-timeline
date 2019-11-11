// confirm script file is loaded
console.log('course-timeline.js loaded');

// declarations
let numModulesInput;
let submitBtn;

// elements
numModulesInput = document.getElementById('num-modules');
submitBtn = document.getElementById('submit');

// event listeners
numModulesInput.addEventListener('change', function() {
    console.log('numModulesInput change listener');
});

submitBtn.addEventListener('click', function(){
    console.log('submitBtn click listener');
});