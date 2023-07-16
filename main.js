function changeColor(element) {
    element.style.backgroundColor = "red";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    
    var paymentCards = document.querySelectorAll(".payment--card");
  
    for (var i = 0; i < paymentCards.length; i++) {
      paymentCards[i].addEventListener("click", function() {
        changeColor(this);
      });
    }
  });