
var user;
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD-QvvykEgPWtMdKGRt0nNTqqTJIiHubyo",
   // authDomain: "bookfinder-62110.firebaseapp.com",
    databaseURL: "https://bookfinder-62110.firebaseio.com",
    projectId: "bookfinder-62110",
    storageBucket: "bookfinder-62110.appspot.com",
    messagingSenderId: "127768482682"
  };
  firebase.initializeApp(config);

  var donorsRef = firebase.database().ref('customer');




document.getElementById('donate').addEventListener('submit', donate);


function donate(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var number = getInputVal('number');
  var address = getInputVal('address');
  var message = getInputVal('message');
  var user = foruser('name');


  // Save message
  saveMessage(name, number, address, message,selectedUser);



  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 7 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },7000);

  // Clear form
  document.getElementById('donate').reset();



  var selectedUser;
  function foruser(){

document.getElementsByName("user").forEach(function(elm) {
  if (elm.checked) {
    selectedUser = elm.value;
  }
})

}



  }
  function getInputVal(id) {
    // body...
    return document.getElementById(id).value;
  }

  function saveMessage(name, number, address, message,selectedUser){
  var newMessageRef = donorsRef.push();
  newMessageRef.set({
    name: name,
   number: number,
   address: address,
   message:message,
   user:selectedUser
  });
}
function myfunc(){

var a = document.getElementById("number").value;
    
     if(a.length()!=11){
          alert(" not valid ");
    }
  

}




