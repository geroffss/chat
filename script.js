function checkdata() {
    // Get the input element
    var inputElement = document.querySelector('.inputtext');

    // Get the value from the input field
    var inputValue = inputElement.value;

    // Create a new paragraph element
    var newParagraph = document.createElement('p');

    // Set the text content of the paragraph to the input value
    newParagraph.textContent = inputValue;

    // Get the lastInputs div
    var lastInputsDiv = document.querySelector('.lastInputs');

    // Clear the lastInputs div before adding a new input
   

    // Append the new paragraph to the lastInputs div
    lastInputsDiv.appendChild(newParagraph);

    // Clear the input field after displaying the last input
    inputElement.value = '';
}
