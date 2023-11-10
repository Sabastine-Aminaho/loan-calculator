document.getElementById('loan-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = "none";
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 1000);

    e.preventDefault();
});

function calculateResults(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100;
    const calculatedPayments = parseFloat(years.value)*12;

    

    //Monthly Payment

    const ipy = principal * calculatedInterest;
    const ipm = ipy/12;
    const monthly = ipm + (principal/calculatedPayments);

    console.log(ipm)

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ipy;

        document.getElementById('results').style.display = "block";

        document.getElementById('loading').style.display = "none";
    } else {
        showError('Please Check your numbers!!!');
    }
    
}

function showError(error){
    document.getElementById('results').style.display ='none';

    document.getElementById('loading').style.display ='none';

    const errorDiv = document.createElement("div");

    const card = document.querySelector(".container")
    const heading = document.querySelector('.heading');   
    errorDiv.className = 'alert'

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}
