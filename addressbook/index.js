function addAddress() {
    let userSubmit = prompt("Enter People's Address", "kandang");

    let newline = document.createElement("DIV");
    let theaddress = document.createTextNode(userSubmit);
    newline.appendChild(theaddress);
    document.getElementById("peopleAddress").appendChild(newline);
    event.preventDefault();
}