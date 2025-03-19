function calculateInsurance() {
    const income = parseFloat(document.getElementById('income').value);
    const years = parseFloat(document.getElementById('years').value);
    const debts = parseFloat(document.getElementById('debts').value);
    
    const incomeReplacement = income * years;
    const totalCoverage = incomeReplacement + debts;
    
    document.getElementById('coverage').textContent = `$${totalCoverage.toLocaleString()}`;
}