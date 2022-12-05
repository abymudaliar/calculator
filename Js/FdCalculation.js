let totalInvestSlider = document.getElementById("TotalInvestmentSlider");
let totalInvestInput = document.getElementById("TotalInvestmentInput");
let rateOfInterestInput = document.getElementById("RateOfInterestInput");
let rateOfInterestSlider = document.getElementById("RateOfInterestSlider");
let timeSlider = document.getElementById("TimeSlider");
let timeInput= document.getElementById("TimeInput");
let investedAmount= document.getElementById("InvestedAmount");
let estReturns = document.getElementById("EstReturns");
let totalValue = document.getElementById("TotalValue");

let prin  = 10000;
let rate = 6.6;
let time = 5;
let estret = FdCalculator(prin, rate, time);

estReturns.textContent = "₹ " + estret;
totalValue.textContent = "₹ " + (parseInt(prin) + parseInt(estret));
totalInvestSlider.oninput = function(){
    
    totalInvestInput.value = this.value;
    investedAmount.textContent = "₹ " + this.value; 
    prin = this.value;
    let estret = FdCalculator(prin, rate, time);
    estReturns.textContent = "₹ " + Math.round(estret);
    totalValue.textContent = "₹ " + (parseInt(prin) + parseInt(estret));
}
totalInvestInput.oninput = function(){
   
    if(this.value === "")
    {
        totalInvestSlider.value = 0;
        investedAmount.textContent = `₹ 0`;
        return;

    }
    
    totalInvestSlider.value = this.value;
    prin = this.value;
    let estret = FdCalculator(prin, rate, time);
    estReturns.textContent = "₹ " + Math.round(estret);
    investedAmount.textContent = "₹ " + this.value; 
    totalValue.textContent = "₹ " + (parseInt(prin) + parseInt(estret));
}

rateOfInterestInput.oninput = function(){
    if(this.value === "")
    {
        rateOfInterestSlider.value = 0;
        return;

    }
    
    
    rateOfInterestSlider.value = this.value;
    rate = this.value;
    let estret = FdCalculator(prin, rate, time);
    estReturns.textContent = "₹ " + Math.round(estret);
    totalValue.textContent = "₹ " + (parseInt(prin) + parseInt(estret));
}
rateOfInterestSlider.oninput = function(){
    
    
    rateOfInterestInput.value = this.value;
    rate = this.value;
    let estret = FdCalculator(prin, rate, time);
    estReturns.textContent = "₹ " + Math.round(estret);
    totalValue.textContent = "₹ " + (parseInt(prin) + parseInt(estret));
    
    
}

timeInput.oninput = function(){
    if(this.value === "")
    {
        timeSlider.value = 0;
        return;

    }
    
    timeSlider.value = this.value;
    time = this.value;
    let estret = FdCalculator(prin, rate, time);
    estReturns.textContent = "₹ " + Math.round(estret);
    totalValue.textContent = "₹ " + (parseInt(prin) + parseInt(estret));
}
timeSlider.oninput = function(){
    
    timeInput.value = this.value;
    time = this.value;
    let estret = FdCalculator(prin, rate, time);
    estReturns.textContent = "₹ " + Math.round(estret);
    totalValue.textContent = "₹ " + (parseInt(prin) + parseInt(estret));
    
}

function FdCalculator(principal, ratee, term){


    let i = ratee/100;
    let t = term ;
    let estimatedReturn = principal * i * t;
    return estimatedReturn;

}


