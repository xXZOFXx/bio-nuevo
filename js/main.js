// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAh1exPfUaqBVKF3CEeeS2dMgPqlGo00P4",
    authDomain: "bio-web-22e0e.firebaseapp.com",
    databaseURL: "https://bio-web-22e0e.firebaseio.com",
    projectId: "bio-web-22e0e",
    storageBucket: "bio-web-22e0e.appspot.com",
    messagingSenderId: "855361135949",
    appId: "1:855361135949:web:4fe5b3c97a4028050d8304"

  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');

  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  // Submit form
  function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    swal(
      'Success',
      'Formulario enviado Correctamente',
      'success'
    )

    // Clear form
    document.getElementById('contactForm').reset();
  }

  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });



  }
