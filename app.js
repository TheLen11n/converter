const valueInputNode = document.querySelector('.js-value-input');
const currencySelectorNode = document.querySelector('.js-currency-selector');
const outputNode = document.querySelector('.js-output');

const RATES = {
  usd: 0.011,
  eur: 0.0099
};

function convert({ rub, currency }) {
  if (!RATES[currency]) {
    return null;
  }

  return rub * RATES[currency];

}

function getInput() {
  return {
    rub: Number(valueInputNode.value),
    currency: currencySelectorNode.value
  }
}

function render(result) {
  outputNode.innerHTML = result;
}

valueInputNode.addEventListener('input', function() {
  
  const result = convert(getInput());
 
  render (result);
});

currencySelectorNode.addEventListener('change', function(){
  
  const result = convert(getInput());
 
  render (result);
});