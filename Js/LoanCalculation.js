let loanAmt, rateOfInterest, tenure;
loanAmt = 10000;
rateOfInterest = 6.5;
tenure = 10;
let loanAmountInput = document.getElementById("LoanAmountInput");
let loanAmountSlider = document.getElementById("LoanAmountSlider");
let interestInput = document.getElementById("InterestInput");
let interestSlider = document.getElementById("InterestSlider");
let tenureInput = document.getElementById("TenureInput");
let tenureSlider = document.getElementById("TenureSlider");

let principalAmt = document.getElementById("PrincipalAmt");
let monthlyEmi = document.getElementById("MonthlyEmi");
let totalInterest = document.getElementById("TotalInterest");
let totalAmt = document.getElementById("TotalAmt");

function LoanEmiCalculation(principalAmount, interestRate, loanTenure){
    
  
    let monthlyInterest =   parseFloat(interestRate/12/100);
    let noOfMonths = loanTenure * 12;
    let formula = (monthlyInterest * Math.pow(monthlyInterest + 1, noOfMonths)) / (Math.pow(monthlyInterest + 1, noOfMonths) - 1);
    let emi = Math.round(principalAmount * formula); 
    
    let finalAmt = emi * noOfMonths;
    let totalInterestt = finalAmt - principalAmount;
    monthlyEmi.textContent = parseFloat(emi).toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });;
    totalInterest.textContent = parseFloat(totalInterestt).toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });;
    totalAmt.textContent = parseFloat(finalAmt).toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });;
    
}




loanAmountInput.oninput = function(){
    
    if(this.value === "")
    {
        loanAmountSlider.value = 0;
        return;
    }
    loanAmountSlider.value = this.value;
    loanAmt = this.value;
 
    let rs = parseFloat(loanAmt).toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
    principalAmt.textContent = rs;
    LoanEmiCalculation(loanAmt, rateOfInterest, tenure);
}
loanAmountSlider.oninput = function(){
 
    loanAmountInput.value = this.value;
    loanAmt = this.value;
    let rs = parseFloat(loanAmt).toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
    principalAmt.textContent = rs;
    LoanEmiCalculation(loanAmt, rateOfInterest, tenure);
}

interestSlider.oninput = function(){
    interestInput.value = this.value;
    rateOfInterest = this.value;
    LoanEmiCalculation(loanAmt, rateOfInterest, tenure);

}
interestInput.oninput = function(){
    if(this.value === "")
    {
        interestSlider.value = 0;
        return;
    }
    interestSlider.value = this.value;
    rateOfInterest = this.value;
    LoanEmiCalculation(loanAmt, rateOfInterest, tenure);
}

tenureSlider.oninput = function(){
    tenureInput.value = this.value;
    tenure = this.value;
    LoanEmiCalculation(loanAmt, rateOfInterest, tenure);

}
tenureInput.oninput = function(){
    if(this.value === "")
    {
        tenureSlider.value = 0;
        return;
    }
        tenureSlider.value = this.value;
        tenure = this.value;
        LoanEmiCalculation(loanAmt, rateOfInterest, tenure);
    
}

document.addEventListener("DOMContentLoaded", () => {
    principalAmt.textContent = loanAmt.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        style: 'currency',
        currency: 'INR'
    });
LoanEmiCalculation(loanAmt, rateOfInterest, tenure);
});