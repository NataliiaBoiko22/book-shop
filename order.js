window.onload = function () {
  nameInp.focus();
};

let nameInp = document.getElementById("inp-name");
let surNameInp = document.getElementById("inp-surname");
let streetInp = document.getElementById("inp-street");
let houseInp = document.getElementById("inp-house");
let flatInp = document.getElementById("inp-flat");
let paymentInp = document.getElementById("inp-payment");
let btnComplete = document.getElementById("btn-complete");

// name
let mistName = document.getElementById("invalid-name");
nameInp.addEventListener("mouseleave", completeBtn);

nameInp.addEventListener("input", function () {
  let val = document.getElementById("inp-name").value;
  let el = document.getElementById("inp-name");
  if (!/^[A-Za-z]*$/.test(val)) {
    el.className = "inv";
    mistName.style.visibility = "visible";
    validName = false;
  } else if (val.indexOf(" ") > -1) {
    el.className = "inv";
    mistName.style.visibility = "visible";
    validName = false;
  } else if (val.length < 4) {
    el.className = "inv";
    mistName.style.visibility = "visible";
    validName = false;
  } else {
    el.className = "val";
    mistName.style.visibility = "hidden";
    validName = true;
  }
});

// surname
let mistSurName = document.getElementById("invalid-surname");
surNameInp.addEventListener("mouseleave", completeBtn);
surNameInp.addEventListener("input", function () {
  let val = document.getElementById("inp-surname").value;
  let el = document.getElementById("inp-surname");
  if (!/^[A-Za-z]*$/.test(val)) {
    el.className = "inv";
    mistSurName.style.visibility = "visible";
    validSurName = false;
  } else if (val.indexOf(" ") > -1) {
    el.className = "inv";
    mistSurName.style.visibility = "visible";
    validSurName = false;
  } else if (val.length < 5) {
    el.className = "inv";
    mistSurName.style.visibility = "visible";
    validSurName = false;
  } else {
    el.className = "val";
    mistSurName.style.visibility = "hidden";
    validSurName = true;
  }
});

// data

let dateInp = document.getElementById("inp-date");
let mistDate = document.getElementById("invalid-date");
dateInp.addEventListener("input", function () {
  let el = document.getElementById("inp-date");
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate());
  let datePicked = document.getElementById("inp-date").value;
  let userDate = new Date(datePicked);
  if (userDate < tomorrow) {
    el.className = "inv";
    mistDate.style.visibility = "visible";
    validDate = false;
  } else {
    el.className = "val";
    mistDate.style.visibility = "hidden";
    validDate = true;
  }
});

// street
let mistStreet = document.getElementById("invalid-street");
streetInp.addEventListener("mouseleave", completeBtn);
streetInp.addEventListener("input", function () {
  let val = document.getElementById("inp-street").value;
  let el = document.getElementById("inp-street");
  if (/^[0-9a-zA-Z]{5,}$/.test(val)) {
    el.className = "val";
    mistStreet.style.visibility = "hidden";
    validStreet = true;
  } else {
    el.className = "inv";
    mistStreet.style.visibility = "visible";
    validStreet = false;
  }
});

// house
let mistHouse = document.getElementById("invalid-house");
houseInp.addEventListener("mouseleave", completeBtn);
houseInp.addEventListener("input", function () {
  let val = document.getElementById("inp-house").value;
  let el = document.getElementById("inp-house");
  if (val.replace(/\s/g, "").length === 0 || isNaN(val)) {
    el.className = "inv";
    mistHouse.style.visibility = "visible";
    validHouse = false;
  } else {
    if (val > 0) {
      el.className = "val";
      mistHouse.style.visibility = "hidden";
      validHouse = true;
    }
  }
});

// flat
let mistFlat = document.getElementById("invalid-flat");
flatInp.addEventListener("mouseleave", completeBtn);
flatInp.addEventListener("input", function () {
  let val = document.getElementById("inp-flat").value;
  let el = document.getElementById("inp-flat");
  if (!/^[-0-9-]*$/.test(val)) {
    el.className = "inv";
    mistFlat.style.visibility = "visible";
    validFlat = false;
  } else if (!/^[1-9]/.test(val)) {
    el.className = "inv";
    mistFlat.style.visibility = "visible";
    validFlat = false;
  } else if (val.toString().slice(-1) === "-") {
    el.className = "inv";
    mistFlat.style.visibility = "visible";
    validFlat = false;
  } else {
    el.className = "val";
    mistFlat.style.visibility = "hidden";
    validFlat = true;
  }
});

// cash/card
let cashSelected = false;
let cardSelected = false;
let cashInp = document.getElementById("cash-radio");
let cardInp = document.getElementById("card-radio");
let mistPayment = document.getElementById("invalid-payment");

cashInp.addEventListener("mouseleave", completeBtn);
cashInp.addEventListener("change", function () {
  if (cashInp.checked) {
    cashSelected = true;
    cardInp.checked = false;
    mistPayment.style.visibility = "hidden";
    validPay = true;
  }
});

cardInp.addEventListener("mouseleave", completeBtn);
cardInp.addEventListener("change", function () {
  if (cardInp.checked) {
    cardSelected = true;
    cashInp.checked = false;
    mistPayment.style.visibility = "hidden";
    validPay = true;
  }
});

paymentInp.addEventListener("mouseleave", completeBtn);
paymentInp.addEventListener("blur", completeBtn);

paymentInp.addEventListener("blur", function () {
  if (cashInp.checked === false && cardInp.checked === false) {
    mistPayment.style.visibility = "visible";
  }
});

// checker
var checks = document.querySelectorAll(".check");
var max = 2;
for (var i = 0; i < checks.length; i++) checks[i].onclick = selectiveCheck;
function selectiveCheck(event) {
  var checkedChecks = document.querySelectorAll(".check:checked");
  if (checkedChecks.length >= max + 1) {
    return false;
  }
}

let validName = false;
let validSurName = false;
let validDate = false;
let validStreet = false;
let validHouse = false;
let validFlat = false;
let validPay = false;

function completeBtn() {
  if (
    validName &&
    validSurName &&
    validDate &&
    validStreet &&
    validHouse &&
    validFlat &&
    validPay
  ) {
    btnComplete.disabled = false;
    btnComplete.style.cursor = "not-allowed;";
  } else {
    btnComplete.disabled = true;
    btnComplete.style.cursor = "pointer";
  }
}

let closeCreateBtn = document.getElementById("close-btn");
let addressInfo = document.getElementById("address-result");
let customerInfo = document.getElementById("recipient-result");
let create = document.getElementById("popModal");

btnComplete.addEventListener("click", (ev) => {
  customerInfo.innerText = `Deliver To: ${nameInp.value} ${surNameInp.value}.`;
  addressInfo.innerText = `Deliver Address: ${streetInp.value} ${houseInp.value} ${flatInp.value}.`;
  create.style.display = "block";
  ev.preventDefault();
});

closeCreateBtn.addEventListener("click", () => {
  create.style.display = "none";
  nameInp.focus();
});
