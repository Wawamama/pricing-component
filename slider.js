let range = document.querySelector('#range');
let price = document.querySelector('.price');
let pageviews = document.querySelector('.nb_pageviews');
let yearlyBilling = false;
let checkbox = document.querySelector("#billing_recurrence");

checkbox.addEventListener('change', function() {
    if (this.checked) {
      yearlyBilling = true;
    } else {
      yearlyBilling = false;
    }
  });


checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});
const showPrice = (newPrice) => {

    price.innerHTML = newPrice;
    
}
