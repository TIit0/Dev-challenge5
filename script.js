/* START OF DOM  */


/*  Sub total section Start  */
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

/*  Sub total section End  */

/* Form Section start */

const form = document.getElementById("form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const name1 = document.getElementById("name");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");
const zip = document.getElementById("zip");


/* END OF DOM  */

let counterNum1 = 1;
let counterNum2 = 1;
let total1 = 54.99;
let total2 = 74.99;
let fullPrice1 = 94.99;
let fullPrice2 = 124.99;



/* Start of SUBTOTAL SECTION */



/* controls + and - buttons */

plus1.addEventListener("click", () => {
    counterNum1++;
    counterNum1 = (counterNum1 < 10) ? "0" + counterNum1 : counterNum1;
    num1.innerText = counterNum1;


    updatePrice(true, total1, fullPrice1)

});

minus1.addEventListener("click", () => {

    if (counterNum1 > 1) {
        counterNum1--;
        counterNum1 = (counterNum1 < 10) ? "0" + counterNum1 : counterNum1;
        num1.innerText = counterNum1;
        updatePrice(false, total1, fullPrice1)
    }


});

plus2.addEventListener("click", () => {
    counterNum2++;
    counterNum2 = (counterNum2 < 10) ? "0" + counterNum2 : counterNum2;
    num2.innerText = counterNum2;
    updatePrice(true, total2, fullPrice2)
});

minus2.addEventListener("click", () => {

    if (counterNum2 > 1) {
        counterNum2--;
        counterNum2 = (counterNum2 < 10) ? "0" + counterNum2 : counterNum2;
        num2.innerText = counterNum2;
        updatePrice(false, total2, fullPrice2)
    }
});


/* Updates values for Discounted price, un-discounted price, Total to pay  */

function updatePrice(operation, total, full) {


    if (operation && total === total1) {
        total += 54.99;
        full += 94.99;
        price1.innerText = total.toFixed(2);
        noDiscount1.innerText = full.toFixed(2);
        total1 = total;
        fullPrice1 = full;

    } else if (!operation && total === total1) {
        total -= 54.99;
        full -= 94.99;
        price1.innerText = total.toFixed(2);
        noDiscount1.innerText = full.toFixed(2);
        total1 = total;
        fullPrice1 = full;

    } else if (operation && total === total2) {
        total += 74.99;
        full += 124.99;
        price2.innerText = total.toFixed(2);
        noDiscount2.innerText = full.toFixed(2);
        total2 = total;
        fullPrice2 = full;

    } else if (!operation && total === total2) {
        total -= 74.99;
        full -= 124.99;
        price2.innerText = total.toFixed(2);
        noDiscount2.innerText = full.toFixed(2);
        total2 = total;
        fullPrice2 = full;
    }

    let finalPrice = total1 + total2
    final.innerHTML = finalPrice.toFixed(2);

}

/*    End of SUBTOTAL SECTION  */



/* listens for form submission */

form.addEventListener("submit", (e) => {

    e.preventDefault();

    checkInputs();
});

/*         boolean tests               */

let emailCheck;
let phoneCheck;
let name1Check;
let addressCheck;
let cityCheck;
let countryCheck;
let zipCheck;

/* get values from inputs */

function checkInputs() {


    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const name1Value = name1.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const countryValue = country.value.trim();
    const zipValue = zip.value.trim();



    /* E-mail */
    if (emailValue == "") {
        setErrorFor(email, "E-mail cannot be empty");
        emailCheck = false;

    } else if (!validateEmail(emailValue)) {
        setErrorFor(email, "invalid E-mail");
        emailCheck = false;

    } else {
        setSuccessFor(email);
        emailCheck = true;
    }

    /* Phone number */


    if (phoneValue == "") {
        setErrorFor(phone, "phone cannot be empty");
        phoneCheck = false;

    } else if (!validatePhone(phoneValue)) {
        setErrorFor(phone, "invalid phone format +XX-XXXX-XXXX");
        phoneCheck = false;
    } else {
        setSuccessFor(phone);
        phoneCheck = true;
    }

    /* User name */

    if (name1Value == "") {
        setErrorFor(name1, "Name cannot be empty");
        name1Check = false;
    } else {
        setSuccessFor(name1);
        name1Check = true;
    }

    /* Adress value  */

    if (addressValue == "") {
        setErrorFor(address, "Adress cannot be empty");
        addressCheck = false;
    } else {
        setSuccessFor(address);
        addressCheck = true;
    }

    /* City Value */

    if (cityValue == "") {
        setErrorFor(city, "Adress cannot be empty");
        cityCheck = false;

    } else {
        setSuccessFor(city);
        cityCheck = true;
    }

    /* Country value */

    if (countryValue == "Your country..") {
        setErrorFor(country, "country cannot be empty");
        countryCheck = false;
    } else {
        setSuccessFor(country);
        countryCheck = true;
    }

    /* Zip Value */ 

    if (zipValue == "") {
        setErrorFor(zip, "Zip-Code cannot be empty");
        zipCheck = false;

    } else if (!validateZip(zipValue)) {
        setErrorFor(zip, "invalid zip");
        zipCheck = false;

    } else {
        setSuccessFor(zip);
        zipCheck = true;
    }

    if (emailCheck && phoneCheck && name1Check && addressCheck && cityCheck && countryCheck && zipCheck) {
        alert("Thank you for your purchase")
    }

}




/*    ERROR HANDLER     */

function setErrorFor(input, message) {

    if (input === country) {
        const formSection = input.parentElement;
        const icon = formSection.querySelector(".icon");

        const small = formSection.nextElementSibling;

        icon.className = "icon error"
        small.className = "message error"
        small.innerText = message;
        input.className = "form__input short error world"
        return 
    }


    if (input === zip) {
        const formSection = input.parentElement;
        const icon = formSection.querySelector(".icon");

        const small = formSection.nextElementSibling;

        icon.className = "icon error"
        small.className = "message error"
        small.innerText = message;
        input.className = "form__input short error world"
        return 
    }

           /*     everything else but country & zip         */


    const icon = input.previousElementSibling;
    const formSection = input.parentElement;
    const small = formSection.nextElementSibling;

    icon.className = "icon error"
    small.className = "message error"
    small.innerText = message;
    input.className = "form__input error"
}



/*     Success handler          */


function setSuccessFor(input) {

    if (input === country) {
        const formSection = input.parentElement;
        const icon = formSection.querySelector(".icon");

        const small = formSection.nextElementSibling;

        icon.className = "icon success"
        small.className = "message"
        small.innerText = "message";
        input.className = "form__input short success world"
        return 
    }


    if (input === zip) {
        const formSection = input.parentElement;
        const icon = formSection.querySelector(".icon");

        const small = formSection.nextElementSibling;

        icon.className = "icon success"
        small.className = "message"
        small.innerText = "message";
        input.className = "form__input short success world"
        return 
    }

    /*     everything else but country & zip         */

    const icon = input.previousElementSibling;
    const formSection = input.parentElement;
    const small = formSection.nextElementSibling;

    small.className = "message"
    icon.className = "icon success"
    input.className = "form__input success"
}

    /*     Data validators         */

const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

const validatePhone = (phone) => {
    return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(phone);
};

const validateZip = (zip) => {
    return /^([a-zA-Z0-9-]){5,8}$/.test(zip)
}