const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const initEvents = () => {
  checkBtn.addEventListener("click", (e) => {
    console.log("click on Check", e.target);
  });
  clearBtn.addEventListener("click", (e) => {
    console.log("click on Clear", e.target);
  });
};
initEvents();
