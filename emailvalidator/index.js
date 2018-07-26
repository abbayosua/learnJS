
function receiveSpam() {
    let theEmail = $('#userEmail').val();
    let theValidation = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,10})+$/;
    let meCheck = theValidation.test(theEmail)

    if (meCheck == true) {
        let thePunisher = $('#theInfo').text('We have sent 1000 Spam Mail to your account, Enjoy')
    } else {
        alert("are you sure doesnt want to receive Spam for entire of your life? The email that you input is invalid")
    }

    //prevent default dude
    event.preventDefault();
}