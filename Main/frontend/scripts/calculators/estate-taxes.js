function calculateEstateTax() {
    const estateValue = parseFloat(document.getElementById('estate-value').value);
    const exemption = parseFloat(document.getElementById('exemption').value);
    const taxableEstate = Math.max(estateValue - exemption, 0);
    const taxRate = 0.40; // 40% federal rate
    
    const taxDue = taxableEstate * taxRate;
    
    document.getElementById('taxable-estate').textContent = `$${taxableEstate.toLocaleString()}`;
    document.getElementById('tax-due').textContent = `$${taxDue.toLocaleString()}`;
}