/* START OF DOM  */
const plus1 = document.querySelector(".plus1")
const num1 = document.querySelector(".num1")
const minus1 = document.querySelector(".minus1")
const price1 = document.querySelector(".actual1")
const noDiscount1 = document.querySelector(".no-discount1")


const plus2 = document.querySelector(".plus2")
const num2 = document.querySelector(".num2")
const minus2 = document.querySelector(".minus2")
const price2 = document.querySelector(".actual2")
const noDiscount2 = document.querySelector(".no-discount2")

const final = document.querySelector(".final-price");


/* END OF DOM  */

let counterNum1 = 1;
let counterNum2 = 1;
let total1 = 54.99;
let total2 = 74.99;
let fullPrice1 = 94.99;
let fullPrice2 = 124.99;


plus1.addEventListener("click", () => {
    counterNum1++;
    counterNum1 = (counterNum1 < 10) ? "0" + counterNum1 : counterNum1;
    num1.innerText = counterNum1;


    updatePrice(true, total1)
    
});

minus1.addEventListener("click", () => {

    if (counterNum1 > 1) {
        counterNum1--;
        counterNum1 = (counterNum1 < 10) ? "0" + counterNum1 : counterNum1;
        num1.innerText = counterNum1;
        updatePrice(false, total1)
    }
    
    
});

plus2.addEventListener("click", () => {
    counterNum2++;
    counterNum2 = (counterNum2 < 10) ? "0" + counterNum2 : counterNum2;
    num2.innerText = counterNum2;
    updatePrice(true, total2)
});

minus2.addEventListener("click", () => {

    if (counterNum2 > 1) {
        counterNum2--;
        counterNum2 = (counterNum2 < 10) ? "0" + counterNum2 : counterNum2;
        num2.innerText = counterNum2;
        updatePrice(false, total2)
    }
});


function updatePrice (operation, total) {

    
    if (operation && total === total1) {
        total += 54.99;
        price1.innerText = total.toFixed(2);
        total1 = total;

    } else if (!operation && total === total1) {
        total -= 54.99;
        price1.innerText = total.toFixed(2);
        total1 = total;
    } else if (operation && total === total2) {
        total += 74.99;
        price2.innerText = total.toFixed(2);
        total2 = total;

    } else if (!operation && total === total2) {
        total -= 74.99;
        price2.innerText = total.toFixed(2);
        total2 = total;
    }

    let finalPrice = total1 + total2
    final.innerHTML = finalPrice.toFixed(2);

}







