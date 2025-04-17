//objects

let billField = document.getElementById("bill_total");
let tipField = document.getElementById("tip");
let billWithTaxField = document.getElementById("bill_with_tax");
let tipAmountField = document.getElementById("tip_amount");
let fullBillField = document.getElementById("bill_tip_and_tax");

let taxPercentage = 0.11;

//event listeners
billField.addEventListener("change", billHandler);
tipField.addEventListener("change", tipHandler);

//functions
function getBill()
{
    if(isNaN(billField.value) || Number(billField.value) < 0)
    {
        throw new Error("Please provide a non-negative number");
    }
    else
    {
        return Number(billField.value);
    }
}

function getTipPercent()
{
    return Number(tipField.value) / 100;
}

function billHandler(event)
{
    try {
        billWithTaxField.value = getBillPlusTax().toFixed(2);
        tipAmountField.value = getTipAmount().toFixed(2);
        fullBillField.value = getFullBill().toFixed(2);
    }
    catch(err) {
        billWithTaxField.value = "";
        tipAmountField.value = "";
        fullBillField.value = "";
    }
}
    
function tipHandler(event)
{
    tipAmountField.value = getTipAmount().toFixed(2);
    fullBillField.value = getFullBill().toFixed(2);
}

function getTipAmount()
{
    let bill = getBill();
    let tipPercentage = getTipPercent();
    let tipAmount = bill * tipPercentage;
    return tipAmount;
}

function getBillPlusTax()
{
    let bill = getBill();
    let taxAmount = bill * taxPercentage;
    return bill + taxAmount;
}

function getFullBill()
{
    let billPlusTax = getBillPlusTax();
    let tipAmount = getTipAmount();
    return billPlusTax + tipAmount;
}