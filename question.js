'use strict'

var form = document.querySelector('.questionForm')
var male = form.querySelector('#male')
var female = form.querySelector('#female')
var headerResult = document.querySelector('.headerResult')
var genderinput = document.querySelectorAll('.genderinput')
var cont = document.querySelector('.cont')
var header = document.querySelector('.header')

let answerA = new Array(8);
let answerB = new Array(10);

var a = answerA.length;
var b = answerB.length;

function generateResult (text) {
  var result = document.createElement('p') 
  result.className='result'
  result.innerHTML = text;
    return result
}

function generateExplain (text) {
 var explain = document.createElement('p') 
 explain.className='explain'
 explain.innerHTML = text;
   return explain
}

function removeResult() {
  var results = document.querySelectorAll('.result')
    for (var i = 0; i < results.length; i++) {
    results[i].remove()
  }  
}

function removeExplain() {
  var explain = document.querySelectorAll('.explain')
   for (var i = 0; i < explain.length; i++) {
    explain[i].remove()
  }  
}

function contDisplay() {
  for (var i = 0; i < genderinput.length; i++) {
  if (genderinput[i].checked) {
    cont.style.display = "flex";
    header.style.opacity = "0.5";

    } 
  }
}


male.addEventListener('click', function (maleCount){
  
  removeResult()
  removeExplain()
  contDisplay()

  let a = answerA.length + 1;
  var total = (a + b);
  var persA = Math.floor((a * 100/total)*10)/10;

  var result = generateResult(persA + "%")
  var explain = generateExplain("пользователей — Вариант А")
  headerResult.appendChild(result);
  headerResult.appendChild(explain);

});

female.addEventListener('click', function (femaleCount){
  
  removeResult()
  removeExplain()
  contDisplay()

  let b = answerB.length + 1;
  var total = (b + a);
  var persB =  Math.floor((b * 100/total)*10)/10;
  
  var result = generateResult(persB + "%")
  var explain = generateExplain("пользователей — Вариант Б")
  headerResult.appendChild(result);
  headerResult.appendChild(explain);
  
});



