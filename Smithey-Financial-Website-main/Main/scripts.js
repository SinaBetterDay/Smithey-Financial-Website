// Mortgage Calculator Function
function calculateMortgage() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const payments = parseFloat(document.getElementById('term').value) * 12;
    
    const x = Math.pow(1 + interestRate, payments);
    const monthly = (principal * x * interestRate) / (x - 1);
    
    document.getElementById('mortgage-result').innerHTML = 
        `Monthly Payment: $${monthly.toFixed(2)}`;
}

// Loan Payment Calculator
function calculateLoan() {
    const amount = parseFloat(document.getElementById('loan-amount').value);
    const rate = parseFloat(document.getElementById('loan-rate').value) / 100 / 12;
    const term = parseFloat(document.getElementById('loan-term').value);
    
    const monthly = (amount * rate) / (1 - Math.pow(1 + rate, -term));
    document.getElementById('loan-result').innerHTML = 
        `Monthly Payment: $${monthly.toFixed(2)}`;
}

// Compound Interest Calculator
function calculateCompound() {
    const principal = parseFloat(document.getElementById('compound-principal').value);
    const rate = parseFloat(document.getElementById('compound-rate').value) / 100;
    const years = parseFloat(document.getElementById('compound-years').value);
    
    const amount = principal * Math.pow(1 + rate, years);
    document.getElementById('compound-result').innerHTML = 
        `Future Value: $${amount.toFixed(2)}`;
}