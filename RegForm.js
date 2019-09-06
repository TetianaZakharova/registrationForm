'use strict'

var form = document.querySelector('.formWithValidation')
var validateBtn = form.querySelector('.validateBtn')
var name = form.querySelector('#yourName')
var yourName = document.getElementById('yourName')
var email = form.querySelector('#email')
var password = form.querySelector('#password')
var fields = form.querySelectorAll('.field')

form.addEventListener('submit', function (event) {
    event.preventDefault()
  
    console.log('clicked on validate')
    console.log('yourName: ', yourName.value)
    console.log('email: ', email.value)
    console.log('password: ', password.value)
  
 nameFunc()
 mailFunc()
 passFunc()   
})

  function nameFunc() {
    if (!yourName.value) {
      yourName.value = 'Введите свое имя'
      yourName.style.color = 'red'
      yourName.style.borderColor = "red"        
  };
    yourName.onfocus = function() {
      if(yourName.value == 'Введите свое имя') {
        yourName.value = "";
      } 
    }
    if (yourName.value!="Введите свое имя") {
      yourName.style.color = '#3b3b3b'
      yourName.style.borderColor = "rgb(211, 211, 211)"
      return true;
    }
  }
 
 function mailFunc() {
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
   if (email.value.match(mailformat)) {
     email.style.color = '#3b3b3b'
     email.style.borderColor = "rgb(211, 211, 211)"
     return true;
   } else {
     email.value = 'Неверный формат email'
     email.style.color = 'red'
     email.style.borderColor = "red" 
     };
      email.onfocus = function() {
        if(email.value == "Неверный формат email") {
          email.value = "";
        } 
      }
 }

function passFunc() {
   if (!password.value) {
     password.value = 'Придумайте новый пароль'
     password.style.color = 'red'
     password.style.borderColor = "red"
     password.type='text'
          
     password.onfocus = function() {
      if(password.value == 'Придумайте новый пароль') {
        password.value = "";
      } 
    };
   }
  
    if (password.value!=="Придумайте новый пароль") {
   password.type='password'
   password.style.color = '#3b3b3b'
   password.style.borderColor = "rgb(211, 211, 211)"
  }
}

