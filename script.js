// function to calculate numerology based on a given date
const calculateNumerology = (date) => {
    // remove dashes from the date
    const cleanedDate = date.replace(/-/g, "");

    // convert the date string to an array of digits
    const digits = cleanedDate.split('').map(Number)

    //calculate the sum of the numbers
    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    // check for special cases: 11,22,33,44
    if (sum === 11 || sum === 22 || sum === 33 || sum === 44) {
        return sum;
    }

    // If the sum is two digits number, contimue reducing until it's a single digit number
    const numerologyNumber = sum > 9 ? calculateNumerology(String(sum)) :sum;
    return numerologyNumber;
}

// console.log(calculateNumerology('01-02-1989'));

// Event listener for the button click

const calculateBtn = document.getElementById('calculateBtn')

calculateBtn.addEventListener('click', () => {
    const birthDateInput = document.getElementById("birthdate");
    const resultDiv = document.getElementById("result");
    const birthDate = birthDateInput.value;
    const numerologyNumber = calculateNumerology(birthDate);
    resultDiv.innerHTML = `<h3>Your Numerological Number is: <strong>${numerologyNumber}</strong></h3>`;
});