// Attach click event listener to the Calculate button
// When the button is clicked, the calculateLoan() function runs
document.getElementById('calculateBtn').addEventListener('click', calculateLoan);

function calculateLoan() {
    // Get user input values from form fields
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateAmount").value);
    let loanTerm = parseFloat(document.getElementById("loanTermInput").value);
    const loanTermType = document.getElementById("loanTermType").value;

    // 🔎 Input validation: check if entered values are valid positive numbers
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || loanTerm <= 0) {
        alert("⚠️ Please enter valid positive numbers for all fields.");
        return; // Stop execution if invalid input
    }

    // ⏳ Convert loan term to months (if the user selected years)
    if (loanTermType === "years") {
        loanTerm = loanTerm * 12;
    }

    let monthlyPayment, totalInterest, totalPayment;

    // 📉 Case 1: If interest rate is 0, EMI = loanAmount ÷ loanTerm
    if (interestRate === 0) {
        monthlyPayment = loanAmount / loanTerm;
        totalInterest = 0;
    } else {
        // 📊 Case 2: EMI calculation with compound interest formula
        const monthlyInterest = interestRate / 100 / 12; // Convert % → decimal monthly rate
        const totalPayments = loanTerm; // Total number of months

        // EMI Formula: P × r / (1 - (1 + r)^(-n))
        monthlyPayment = (loanAmount * monthlyInterest) /
                         (1 - Math.pow(1 + monthlyInterest, -totalPayments));

        // Total interest paid over the loan period
        totalInterest = (monthlyPayment * totalPayments) - loanAmount;
    }

    // 🏦 Total payment = principal + interest
    totalPayment = loanAmount + totalInterest;

    // Show results on the webpage
    displayResult(monthlyPayment, totalInterest, totalPayment);
}

// Function to display calculation results
function displayResult(monthlyPayment, totalInterest, totalPayment) {
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p><strong>📅 Monthly Payment:</strong> ₹${monthlyPayment.toFixed(2)}</p>
        <p><strong>💰 Total Interest:</strong> ₹${totalInterest.toFixed(2)}</p>
        <p><strong>🏦 Total Payment (Principal + Interest):</strong> ₹${totalPayment.toFixed(2)}</p>
    `;
}

// 🎉 Motivational / random startup messages
const messages = [
    "🚀 Your financial journey starts now!",
    "💡 Smart choice! Let's calculate your loan.",
    "💰 Ready to see your EMI? Click Calculate!",
    "📊 Numbers don’t lie, let’s crunch them!",
    "🏦 Plan today, save tomorrow!"
];

// Show a random message before calculation
// Picks one message randomly from the array
document.getElementById("result").innerText =
    messages[Math.floor(Math.random() * messages.length)];
