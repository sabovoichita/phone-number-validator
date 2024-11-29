const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validateUserInput = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }
};
const displayResult = (input) => {
  console.log("Inserting");
  resultsDiv.innerHTML += `<p>"Valid/Invalid" US number: ${input}</p> `;
};

const initEvents = () => {
  checkBtn.addEventListener("click", () => {
    const inputValue = userInput.value;
    validateUserInput(inputValue);
  });

  clearBtn.addEventListener("click", (e) => {
    console.log("Click on Clear", e.target);
    resultsDiv.textContent = "";
  });
};

initEvents();
