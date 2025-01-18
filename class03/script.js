// script.js

document.getElementById("calculate-btn").addEventListener("click", function() {
    // Get input values
    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    // Validate inputs
    if (isNaN(amount) || isNaN(rate) || isNaN(time) || amount <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("emi-output").textContent = "Please enter valid inputs.";
        return;
    }

    // Calculate EMI
    const monthlyRate = rate / 12 / 100;
    const numberOfMonths = time * 12;
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

    // Display EMI
    document.getElementById("emi-output").textContent = `Your Monthly EMI: ৳ ${emi.toFixed(2)}`;
});
