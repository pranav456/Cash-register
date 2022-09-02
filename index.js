var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");

checkButton.addEventListener("click", function validateBillAmount() {
  hideMessage();

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("The cash provided should atleast be equal to bill amount");
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
