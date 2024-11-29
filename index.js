const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const userInputValues = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return false;
  }
  return true;
};

const insertInputToResultDiv = (input) => {
  console.log("Inserting");
  resultsDiv.innerHTML += `<p>"Valid/Invalid" US number: ${input}</p> `;
};

const initEvents = () => {
  checkBtn.addEventListener("click", () => {
    const inputValue = userInput.value;
    if (userInputValues(inputValue)) {
      insertInputToResultDiv(inputValue);
    }
  });

  clearBtn.addEventListener("click", (e) => {
    console.log("Click on Clear", e.target);
    resultsDiv.textContent = "";
  });
};

initEvents();
