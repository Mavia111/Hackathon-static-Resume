// Get the button and the ul elements
var toggleButton = document.getElementById('skills');
var myList = document.getElementById('Skills_list');
// Initial state
var isListVisible = false;
// Function to handle toggle
var toggleListVisibility = function () {
    var _a, _b;
    isListVisible = !isListVisible; // Toggle the state
    if (isListVisible) {
        myList.classList.remove('hidden'); // Show the list
        (_a = document.getElementById('Skills_list')) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "display: block;"); // Change button text
    }
    else {
        myList.classList.add('hidden'); // Hide the list
        (_b = document.getElementById('Skills_list')) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "display: none;");
    }
};
// Add event listener to the button
toggleButton.addEventListener('click', toggleListVisibility);
