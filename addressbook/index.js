/* let getAddress() => {
        let userSubmit = prompt("Enter People's Address", "kandang");

        let newline = document.createElement("DIV");
        let theaddress = document.createTextNode(userSubmit);
        newline.appendChild(theaddress);
        document.getElementById("peopleAddress").appendChild(newline);
        event.preventDefault();
    } */

//the comparison

function addAddress() {


  let address = $("#theInput").val();
  $("#peopleAddress").append("<div id='list-'>" + address + "<button onClick='deleteAddress()'>X</button> </div>");
  event.preventDefault();
}

function deleteAddress() {
 let wantToDelete = $('.list-1').text();
 alert(wantToDelete);
}