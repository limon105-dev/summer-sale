/**
 * get text value function--
 * @param {*} TextElementId 
 * @returns 
 */
function getTextElementValueById(TextElementId) {
    const textElement = document.getElementById(TextElementId);
    const textElementValue = textElement.innerText;
    return textElementValue;
};

/**
 * get numebr value function--
 * @param {*} ElementId 
 * @returns 
 */
function getNumberValueById(ElementId) {
    const getElement = document.getElementById(ElementId);
    const ElementString = getElement.innerText;
    const ElementValue = parseFloat(ElementString);
    return ElementValue;
};

/**
 * set element function---
 * @param {*} elementId 
 * @param {*} newValue 
 */
function setElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
};

function setElementInnerText(ElementInnerText) {

    const colculateEntry = document.getElementById('product-list');
    const li = document.createElement('li');
    li.classList.add('text-2xl', 'leading-10', 'font-medium');
    li.innerHTML = `${ElementInnerText}`;
    colculateEntry.appendChild(li);
};

/**
 * discount price calculation function--
 */
document.getElementById('cupon-apply-btn').addEventListener('click', function () {
    const cuponField = document.getElementById('cupon-area');
    const cuponValue = cuponField.value;
    if (cuponValue === 'SELL200') {
        const presentPriceTotal = getNumberValueById('total-price');
        const discountPrice = (presentPriceTotal / 100) * 20;
        const discountPriceTwoDecimal = discountPrice.toFixed(2);
        const finalPrice = presentPriceTotal - discountPrice;
        setElementValueById('discount-price', discountPriceTwoDecimal);
        setElementValueById('final-total', finalPrice);
    } else {
        alert('Please Enter a Valid Cupon Code');
    }
});