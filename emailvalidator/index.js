function receiveSpam() {
    let theEmail = $('#userEmail').val();
    let theValidation = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,10})+$/;
    let meCheck = theValidation.test(theEmail)

    
    if (meCheck === true) {
        $('#theInfo').text('We have sent 1000 Spam Mail to your account, Enjoy');
        $('#theInfo').css('color','white');
    } else {
        $('#theInfo').text("The email that you input doesn't sounds right.");
        $('#theInfo').css('color','rgba(255, 57, 84, 1)');

    }


    //prevent default dude
    event.preventDefault();
}