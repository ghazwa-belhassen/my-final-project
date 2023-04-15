var dateValue = document.querySelector("#date-value");
var textValue = document.querySelector("#text-value");

var btn = document.querySelector("#btn");

const availableDates = ["2023-05-02", "2023-06-04", "2023-05-03"];
btn.addEventListener("click", function () {
  if (availableDates.includes(dateValue.value)) {
    textValue.innerText = "Available";
    textValue.style.backgroundColor = "green";
  } else {
    textValue.innerText = "Not Available";
    textValue.style.backgroundColor = "red";
  }
});

function handler(e) {
  dateValue.value = e.target.value;
}
