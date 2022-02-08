document.getElementById('phoneBTN').onclick = function() {phoneF()};
function phoneF() {
    phoneNumber = prompt("Enter your phone number:", '+380671234567');
    // if (phoneNumber[0])
        if (phoneNumber[0] != "+") {
            alert("Please start whith '+'!")
            phoneF();
        }
    for (let i in phoneNumber) {

                   console.log(phoneNumber[i].charCodeAt());
    }
}