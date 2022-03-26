
// Math section of Javascript
function calculate(){
var leftNum = document.getElementById("math01").value;
var rightNum = document.getElementById("math02").value;

// parsing the value obtained from the input section.
var intLeftNum = Number.parseInt(leftNum);
var intRightNum = Number.parseInt(rightNum);

var sum = document.getElementById("math03");
sum.innerHTML = leftNum +  " + " + rightNum + " = " + (intLeftNum + intRightNum);

var product = document.getElementById("math04");
product.innerHTML = leftNum +  " * " + rightNum + " = " + (leftNum * rightNum);

var division = document.getElementById("math05");
division.innerHTML = leftNum +  " / " + rightNum + " = " + (leftNum / rightNum);

var power = document.getElementById("math06");
power.innerHTML = leftNum +  " ^ " + rightNum + " = " + (leftNum ** rightNum);

var remainder = document.getElementById("math07");
remainder.innerHTML = leftNum +  " % " + rightNum + " = " + (leftNum % rightNum);

}

// Location section
document.getElementById("locationsExternal").innerHTML = "BLUE";

// Notifications section
function alertMe(){
alert("You just clicked on alert!");
}
function confirmMe(){
confirm("You clicked confirm! Are you sure? \n Or or Cancel");
}

// Exception Handling section
try{
  notify ("There is going to be an error");
}
catch(err){
  document.getElementById("error").innerHTML = "method " + err.message;
}


// Document Object section
var width = document.getElementById("width");
width.innerHTML = screen.width;

var length = document.getElementById("height")
length.innerHTML = screen.height;

// navigation vendor
document.getElementById("navigator").innerHTML = navigator.vendor;
// location origin and extractor
document.getElementById("origin").innerHTML = location.origin;
var x = document.getElementById("geo");
function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else {
x.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude;
}

// randoimzer section
function randomize(){
  "use strict";
   var value = document.getElementById("randomizer");
   value.value =  Math.floor(Math.random() * (10 - 1 + 1) + 1);


}

// Events in Javascript section
function mousedOver(){

document.getElementById("events").style.color = "blue";
document.getElementById("events").innerHTML = "Mouse in";


}

function mousedOut(){

  document.getElementById("events").style.color = "cyan";
  document.getElementById("events").innerHTML = "Mouse out";

}

// Array Data Structure section
var letters = ["a" , "b" , "c"];
document.getElementById("arraySample").innerHTML = JSON.stringify(letters);
letters.push('d');
document.getElementById("arrayPush").innerHTML = JSON.stringify(letters);
letters.pop();
document.getElementById("arrayPop").innerHTML = JSON.stringify(letters);
letters.unshift('e');
document.getElementById("arrayUnshift").innerHTML = JSON.stringify(letters);

letters.shift();
document.getElementById("arrayShift").innerHTML = JSON.stringify(letters);
var second = ["f" , "g",  "h"];
document.getElementById("arrayConcat").innerHTML = JSON.stringify(letters.concat(second));
letters = letters.concat(second);

document.getElementById("arrayIncludes").innerHTML = letters.includes('g');

// JSON section
var jsonObj = [{"_id":
"id01","field01":5,"field02" :"z",
"field03":{"child01": "val01"}},{"_id":"id02","field01":10 ,"field02":"a"},
{"_id": "id03", "field01":  7 , "field02": "g", "field03":true}]

document.getElementById("jsonSample").innerHTML = JSON.stringify(jsonObj);
document.getElementById("arrayMap").innerHTML = jsonObj.map(a => a._id).join();
document.getElementById("arrayFilter").innerHTML = jsonObj.filter(a => a.field02 || a.field01 == 10).map(a => a._id).join();
document.getElementById("arrayIndex").innerHTML = jsonObj.findIndex(a => a._id == 'id02');
document.getElementById("arrayFind").innerHTML =  jsonObj.find(a => a._id == 'id02')._id;
document.getElementById("arraySort").innerHTML = jsonObj.sort((a, b) => a.field02.localeCompare(b.field02)).map(a => a.field02);
document.getElementById("arraySplice").innerHTML = jsonObj.splice(1, 1).map(a => a._id)[0];
document.getElementById("arraySome").innerHTML = jsonObj.some(a => a.field03);


// Falsy section
document.getElementById("falsy01").innerHTML = Boolean(false);
document.getElementById("falsy02").innerHTML = Boolean(0);
document.getElementById("falsy03").innerHTML = Boolean('');
document.getElementById("falsy04").innerHTML = Boolean(null);
document.getElementById("falsy05").innerHTML = Boolean(undefined);

// truthy section
document.getElementById("truthy01").innerHTML = Boolean(true);
document.getElementById("truthy02").innerHTML = Boolean('0');
document.getElementById("truthy03").innerHTML = Boolean([]);
document.getElementById("truthy04").innerHTML = Boolean({});
document.getElementById("truthy05").innerHTML = Boolean(1);

// String Methods section
var testStr = "Hello Friend";
document.getElementById("stringSample").innerHTML = " "+ testStr;
document.getElementById("stringTrim").innerHTML = testStr.trim();
document.getElementById("stringUpper").innerHTML = testStr.toUpperCase();
document.getElementById("stringLower").innerHTML = testStr.toLowerCase();
document.getElementById("stringSlice").innerHTML = testStr.slice(0,5);
document.getElementById("stringSplit").innerHTML = testStr.split(' ');
document.getElementById("stringReplace").innerHTML = testStr.replace('Friend' , 'Person');
document.getElementById("stringConcat").innerHTML = testStr.concat('s');
document.getElementById("stringChartAt").innerHTML = testStr.charAt(0);

// creating a palindrome function
function palindrome(palString){
  // rgex experssion to get rid of the extra stuff
  var re = /[\W_]/g;

var lowRegStr = palString.toLowerCase().replace(re, '');
var reverseStr = lowRegStr.split('').reverse().join('');
return reverseStr === lowRegStr;
}
document.getElementById("stringPalindrome").innerHTML = palindrome(testStr);

//Class section
class animal{
  constructor(name , age){
    this.name = name;
    this.age = age;
  }



}
// using the class here
let bear = new animal("bear" , 12);
let horse = new animal("horse" , 15);
document.getElementById("class01").innerHTML = JSON.stringify(bear);
document.getElementById("class02").innerHTML = JSON.stringify(horse);



//Regex Validation section

function validate(str){
  // Validate a number
  var numbers = /^[-+]?[0-9]+$/;
  if( document.getElementById("regexNumber").value.match(numbers)){
    document.getElementById("validateNumber").innerHTML = "";

  }
  else if(document.getElementById("regexNumber").value === ""){
    document.getElementById("validateNumber").innerHTML = "Entry required!";
  }
  else{
    document.getElementById("validateNumber").innerHTML = "Number format required!";
  }

  // Validating a phone number
  var phoneRegex = /\d{3}.+?\d{3}.+?\d{4}/;
  var subjectStr = document.getElementById("regexPhone").value;

  if (phoneRegex.test(subjectStr)) {

    document.getElementById("validatePhone").innerHTML = "";
  }
  else if(document.getElementById("regexPhone").value === ""){
    document.getElementById("validatePhone").innerHTML = "Entry required!";
  }
  else{
    document.getElementById("validatePhone").innerHTML = "Phonenumber format required!";

  }

  // Validating an email address
  let emailRegex = /.+@.+\..+/;
  var testEmail = document.getElementById("regexEmail").value;

  if(emailRegex.test(testEmail)){
    document.getElementById("validateEmail").innerHTML = "";
  }
  else if(document.getElementById("regexEmail").value === ""){
    document.getElementById("validateEmail").innerHTML = "Entry required!";
  }
  else{
    document.getElementById("validateEmail").innerHTML = "Email format required!";

  }


  }

// Algorithm section

//algorithm 1 logic
function getMax(someArray){
  var max  = someArray[0];
  for(var i =0 ; i < someArray.length ; i++){
    if(someArray[i] > max){
      max = someArray[i];
    }
  }
  return max;

}


// algorithm 1 implementation.
var numArray = [1,22,31,78,11,100,31,21,11,7];
document.getElementById("algorSample").innerHTML = numArray;

document.getElementById("algorMax").innerHTML = getMax(numArray);

// algorithm 2 logic duplicates.
const yourArrayWithoutDuplicates = [...new Set(numArray)]

let duplicates = [...numArray]
yourArrayWithoutDuplicates.forEach((item) => {
  const i = duplicates.indexOf(item)
  duplicates = duplicates
    .slice(0, i)
    .concat(duplicates.slice(i + 1, duplicates.length))
})
document.getElementById("algorDups").innerHTML = duplicates;

// algoritm 3 logic prime
function isPrime(arr) {
    var primes = [];
    for(var i = 0; i < arr.length; i++) {
    for (let j = 2; j * j <= arr[i]; j++){
        if (arr[i] % i === 0){
        //  return false;
        }
        else{
          if(!primes.includes(arr[i]))
          primes.push(arr[i]);
        }

        }

  }
    return primes;
}

document.getElementById("algorPrimes").innerHTML = isPrime(numArray);
