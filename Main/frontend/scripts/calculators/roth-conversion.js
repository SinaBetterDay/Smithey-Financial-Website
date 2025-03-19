function calculateConversion() {
    const balance = parseFloat(document.getElementById('current-balance').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    const growthRate = 0.06; // 6% assumed annual growth
    
    const taxCost = balance * taxRate;
    const futureValue = balance * Math.pow(1 + growthRate, years);
    
    document.getElementById('tax-cost').textContent = `$${taxCost.toLocaleString()}`;
    document.getElementById('roth-value').textContent = `$${futureValue.toLocaleString()}`;
}