const Loan_amount = document.getElementById("loan_amount");
const Interest = document.getElementById("Interest");
const months = document.getElementById("months");
const result = document.getElementById("result");

const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  const amount = parseFloat(Loan_amount.value);
  const interest = parseFloat(Interest.value);
  const monthsValue = parseFloat(months.value);

  if (isNaN(amount) || isNaN(interest) || isNaN(monthsValue) || monthsValue <= 0) {
    alert("Please enter valid values");
  } else {
    const totalAmount = calculator(amount, interest, monthsValue);
    result.textContent = `Your total interest amount is Rs/- ${totalAmount.toFixed(2)}`;
  }
});

function calculator(Loan_amount, Interest, months) {
  let temp = Interest / 100;
  let temp2 = months / 12; 
  return Loan_amount * temp * temp2;
}
