const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const phoneRegex = /^1?\s*(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

const isValidPhoneNumber = (number) => phoneRegex.test(number);

const validateUserInput = (input) => {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }

  const isValid = isValidPhoneNumber(input);

  displayResult(
    ` ${
      isValid
        ? "Valid US number: " + `${input}`
        : "Invalid US number: " + `${input}`
    }`
  );
};

const displayResult = (input) => {
  resultsDiv.innerHTML += `<p>${input}</p> `;
};

const initEvents = () => {
  checkBtn.addEventListener("click", () => {
    const inputValue = userInput.value;
    validateUserInput(inputValue);
  });

  clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
    userInput.value = "";
  });
};

initEvents();
