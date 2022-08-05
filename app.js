// https://calculator.swiftutors.com/heat-capacity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const heatCapacityRadio = document.getElementById('heatCapacityRadio');
const amountofHeatTransferredRadio = document.getElementById('amountofHeatTransferredRadio');
const massoftheBodyRadio = document.getElementById('massoftheBodyRadio');
const temperatureDifferenceRadio = document.getElementById('temperatureDifferenceRadio');

let heatCapacity;
let amountofHeatTransferred = v1;
let massoftheBody = v2;
let temperatureDifference = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

heatCapacityRadio.addEventListener('click', function() {
  variable1.textContent = '(ΔQ) Amount of Heat Transferred (J)';
  variable2.textContent = '(m) Mass of the Body (g)';
  variable3.textContent = '(ΔT) Temperature Difference (°C)';
  amountofHeatTransferred = v1;
  massoftheBody = v2;
  temperatureDifference = v3;
  result.textContent = '';
});

amountofHeatTransferredRadio.addEventListener('click', function() {
  variable1.textContent = '(c) Heat Capacity (j/g°C)';
  variable2.textContent = '(m) Mass of the Body (g)';
  variable3.textContent = '(ΔT) Temperature Difference (°C)';
  heatCapacity = v1;
  massoftheBody = v2;
  temperatureDifference = v3;
  result.textContent = '';
});

massoftheBodyRadio.addEventListener('click', function() {
  variable1.textContent = '(c) Heat Capacity (j/g°C)';
  variable2.textContent = '(ΔQ) Amount of Heat Transferred (J)';
  variable3.textContent = '(ΔT) Temperature Difference (°C)';
  heatCapacity = v1;
  amountofHeatTransferred = v2;
  temperatureDifference = v3;
  result.textContent = '';
});

temperatureDifferenceRadio.addEventListener('click', function() {
  variable1.textContent = '(c) Heat Capacity (j/g°C)';
  variable2.textContent = '(ΔQ) Amount of Heat Transferred (J)';
  variable3.textContent = '(m) Mass of the Body (g)';
  heatCapacity = v1;
  amountofHeatTransferred = v2;
  massoftheBody = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(heatCapacityRadio.checked)
    result.textContent = `Heat Capacity = ${computeHeatCapacity()} j/g°C`;

  else if(amountofHeatTransferredRadio.checked)
    result.textContent = `Amount of Heat Transferred = ${computeAmountofHeatTransferred().toFixed(2)} J`;

  else if(massoftheBodyRadio.checked)
    result.textContent = `Mass of the Body = ${computeMassoftheBody().toFixed(2)} g`;

  else if(temperatureDifferenceRadio.checked)
    result.textContent = `Temperature Difference = ${computeTemperatureDifference().toFixed(2)} °C`;
})

// calculation

function computeHeatCapacity() {
  return Number(amountofHeatTransferred.value) / (Number(massoftheBody.value) * Number(temperatureDifference.value));
}

function computeAmountofHeatTransferred() {
  return Number(heatCapacity.value) * Number(massoftheBody.value) * Number(temperatureDifference.value);
}

function computeMassoftheBody() {
  return Number(amountofHeatTransferred.value) / (Number(heatCapacity.value) * Number(temperatureDifference.value));
}

function computeTemperatureDifference() {
  return Number(amountofHeatTransferred.value) / (Number(heatCapacity.value) * Number(massoftheBody.value));
}