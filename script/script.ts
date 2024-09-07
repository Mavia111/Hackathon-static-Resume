// Get the button and the ul elements
const toggleButton = document.getElementById('skills') as HTMLButtonElement;
const myList = document.getElementById('Skills_list') as HTMLUListElement;

// Initial state
let isListVisible = false;

// Function to handle toggle
const toggleListVisibility = () => {
  isListVisible = !isListVisible; // Toggle the state

  if (isListVisible) {
    myList.classList.remove('hidden'); // Show the list
    document.getElementById('Skills_list')?.setAttribute("style","display: block;")
    document.getElementById('sub_title')?.setAttribute("style","visibility: hidden;") // Change button text
  } else {
    myList.classList.add('hidden'); // Hide the list
    document.getElementById('sub_title')?.setAttribute("style","visibility: visible;") // Change button text
    document.getElementById('Skills_list')?.setAttribute("style","display: none;")
  }
};

// Add event listener to the button
toggleButton.addEventListener('click', toggleListVisibility);
