const purchaseInput = document.getElementById("purchase"),
      downPayInput = document.getElementById("down-payment"),
      timeInput = document.getElementById("time"),
      intrestInput = document.getElementById("intrest"),
      purchaseEl = document.getElementById("purchase-el"),
      downEl = document.getElementById("down-el"),
      timeEl = document.getElementById("time-el"),
      intrestEl = document.getElementById("intrest-el"),
      loan = document.getElementById("loan"),
      estimate = document.getElementById("estimate"),
      results = document.getElementById("results");


     purchaseEl.innerHTML = purchaseInput.value;   
     downEl.innerHTML = downPayInput.value;   
     intrestEl.innerHTML = intrestInput.value;   
     timeEl.innerHTML = timeInput.value;   

     purchaseInput.oninput = function() {
        purchaseEl.innerHTML = this.value;
        
     }     
     
     downPayInput.oninput = function() {
        downEl.innerHTML = this.value;
      
     } 

     intrestInput.oninput = function() {
        intrestEl.innerHTML = this.value;
        
     } 

     timeInput.oninput = function() {
        timeEl.innerHTML = this.value;
       
     }

//     results.addEventListener("submit", getResults);

    function getResults(e) {
        const purchaseAmt = purchaseInput.value,
              downPaymentAmt = downPayInput.value;
        let   n = timeInput.value * 12,
              r = intrestInput.value / 100 / 12,
              p = (purchaseAmt - downPaymentAmt);
        
         
        let  m  = p * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) -1));
        loan.innerHTML = `<strong>$${p}</strong>`;
        estimate.innerHTML = `<strong>$${Math.round(m)}</strong>`;      
        e.preventDefault() 
    }