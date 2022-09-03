const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const table = document.querySelector(".change-table");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();

  var cash = Number(cashGiven.value);
  var bill = Number(billAmount.value);

  if (bill > 0) {
    if (cash > bill) {
      const amountToBeReturned = cash - bill;
      calculateChange(amountToBeReturned);
    } else {
      showMessage(
        "The cash provided should atleast be greater than or equal to bill amount"
      );
    }
    if (cash === bill) {
      showMessage("Thank you for paying the exact bill amount😊");
      table.style.display = "none";
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberofnotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberofnotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
