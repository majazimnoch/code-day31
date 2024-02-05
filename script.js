// function to calculate numerology based on a given date
const calculateNumerology = (date) => {
  // remove dashes from the date
  const cleanedDate = date.replace(/-/g, "");

  // convert the date string to an array of digits
  const digits = cleanedDate.split("").map(Number);

  //calculate the sum of the numbers
  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  // check for special cases: 11,22,33,44
  if (sum === 11 || sum === 22 || sum === 33 || sum === 44) {
    return sum;
  }

  // If the sum is two digits number, contimue reducing until it's a single digit number
  const numerologyNumber = sum > 9 ? calculateNumerology(String(sum)) : sum;
  return numerologyNumber;
};

// console.log(calculateNumerology('01-02-1989'));

// Event listener for the button click

const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", () => {
  const birthDateInput = document.getElementById("birthdate");
  const resultDiv = document.getElementById("result");
  const birthDate = birthDateInput.value;

  if (birthDate.trim() === "") {
    alert("Please choose a valid date of birth.");
    return;
  }

  const numerologyNumber = calculateNumerology(birthDate);
  resultDiv.innerHTML = `<h3>Your Number is: <strong>${numerologyNumber}</strong></h3>`;
});

document
  .getElementById("displayInfoBtn")
  .addEventListener("click", function () {
    // Get the selected numerology number
    const selectedNumber = document.getElementById("numerologyNumber").value;

    // Fetch the information from the JSON file
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        // Display the information based on the selected number
        displayNumerologyInfo(data[selectedNumber]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });

// Function to display numerology information
function displayNumerologyInfo(info) {
  const infoDisplay = document.getElementById("infoDisplay");
  infoDisplay.innerHTML = `
        <h3>${info.nick}</h3>
        <p>${info.description}</p>
    `;
}

// Add event listener for accordion toggle when clicking on h3
const accordionSection = document.getElementById("accordionSection");

accordionSection.addEventListener("click", () => {
  accordionSection.classList.toggle("active");
});



