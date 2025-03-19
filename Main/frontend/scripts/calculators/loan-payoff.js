function calculate() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const rate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const term = parseFloat(document.getElementById('loan-term').value) * 12;

    const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -term));
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - amount;

    document.getElementById('monthly-payment').textContent = `$${monthlyPayment.toFixed(2)}`;
    document.getElementById('total-interest').textContent = `$${totalInterest.toFixed(2)}`;
    document.getElementById('total-payment').textContent = `$${totalPayment.toFixed(2)}`;
}