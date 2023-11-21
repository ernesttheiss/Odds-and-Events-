document.addEventListener('DOMContentLoaded', function () {
    // Getting reference to DOM elements
    const numberInput = document.querySelector('input[name="number"]');
    const addButton = document.querySelector('button');
    const numberBankOutput = document.querySelector('#numberBank output');
    const sortOneButton = document.querySelector('#sortOne');
    const sortAllButton = document.querySelector('#sortAll');
    const oddsOutput = document.querySelector('#odds output');
    const evensOutput = document.querySelector('#evens output');

//An Array to store Numbers 
let numberBank =[];

 // Event listener for "Add Number" button
 addButton.addEventListener('click', function (event) {
    event.preventDefault();
    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
      numberBank.push(number);
      updateNumberBankOutput();
    }
    numberInput.value = ''; // Clear the input field
  });

  // Event listener for "Sort 1" button
  sortOneButton.addEventListener('click', function () {
    sortNumbers(1);
  });

  // Event listener for "Sort All" button
  sortAllButton.addEventListener('click', function () {
    sortNumbers(numberBank.length);
  });

  // Function to sort numbers and update outputs
  function sortNumbers(count) {
    const sorted = numberBank.splice(0, count);
    const odds = sorted.filter(num => num % 2 !== 0);
    const evens = sorted.filter(num => num % 2 === 0);

    updateNumberBankOutput();
    updateSortedOutput(odds, evens);
  }

  // Function to update the Number Bank output
  function updateNumberBankOutput() {
    numberBankOutput.textContent = numberBank.join(', ');
  }

  // Function to update the Sorted Numbers output
  function updateSortedOutput(odds, evens) {
    oddsOutput.textContent = odds.join(', ');
    evensOutput.textContent = evens.join(', ');
  }
});