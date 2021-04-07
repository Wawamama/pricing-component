let range = document.querySelector('input[type=range]');
let price = document.querySelector('.price');
let pageviews = document.querySelector('.nb_pageviews');
let yearlyBilling = false;
let checkbox = document.querySelector("#billing_recurrence");
let dynamicPrice = '16.00';
let discountPrice = parseFloat(dynamicPrice) * 0.75;

checkbox.addEventListener('change', function() {
    if (this.checked) {
      yearlyBilling = true;
    } else {
      yearlyBilling = false;
    }
  });

/* checkbox event */  
checkbox.addEventListener('change', function() {
  if (this.checked) {
    yearlyBilling = true;
    let discountPrice = parseFloat(dynamicPrice) * 0.75;
    price.innerHTML = `$${discountPrice}.00`;
  } else {
    yearlyBilling = false
    price.innerHTML = `$${dynamicPrice}`;
  }
});

/* slider price modifier */
const showPrice = (newPrice) => {
    // change background gradient
    
    // change price and pageviews
    if (newPrice < 200) {
      dynamicPrice = '8.00';
      discountPrice = parseFloat(dynamicPrice) * 0.75;
      pageviews.innerHTML = '10K PAGEVIEWS'
    }
    else if (newPrice >=200 && newPrice < 400) {
      dynamicPrice = '12.00';
      discountPrice = parseFloat(dynamicPrice) * 0.75;
      pageviews.innerHTML = '50K PAGEVIEWS'
    }
    else if (newPrice >=400 && newPrice < 600) {
      dynamicPrice = '16.00';
      discountPrice = parseFloat(dynamicPrice) * 0.75;
      pageviews.innerHTML = '100K PAGEVIEWS'
    }
    else if (newPrice >=600 && newPrice < 800) {
      dynamicPrice = '24.00';
      discountPrice = parseFloat(dynamicPrice) * 0.75;
      pageviews.innerHTML = '500K PAGEVIEWS'
    }
    else if (newPrice >=800) {
      dynamicPrice = '36.00';
      discountPrice = parseFloat(dynamicPrice) * 0.75;
      pageviews.innerHTML = '1M PAGEVIEWS'
    }
   
    if (!yearlyBilling) {
      price.innerHTML = `$${dynamicPrice}`;
    } else {
      price.innerHTML = `$${discountPrice}.00`
    }
    
}



