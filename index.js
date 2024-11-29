const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const userInputValues = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }
};

const initEvents = () => {
  checkBtn.addEventListener("click", () => {
    userInputValues(userInput.value);
  });

  clearBtn.addEventListener("click", (e) => {
    console.log("click on Clear", e.target);
    resultsDiv.textContent = "";
  });
};

initEvents();
