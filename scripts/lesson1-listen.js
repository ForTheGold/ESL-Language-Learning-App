
let johnutterance1 = new SpeechSynthesisUtterance("Hello! What is your name?");
let johnutterance2 = new SpeechSynthesisUtterance("How old are you?");
let johnutterance3 = new SpeechSynthesisUtterance("What do you do?");
let johnutterance4 = new SpeechSynthesisUtterance("Where are you from?");
let johnutterance5 = new SpeechSynthesisUtterance("What is your nationality?");

function johnRead1(){
  speechSynthesis.speak(johnutterance1);
} function johnRead2(){
  speechSynthesis.speak(johnutterance2);
} function johnRead3(){
  speechSynthesis.speak(johnutterance3);
} function johnRead4(){
  speechSynthesis.speak(johnutterance4);
} function johnRead5(){
  speechSynthesis.speak(johnutterance5);
}

let svetlanautterance1 = new SpeechSynthesisUtterance("Hi!  My name is Svetlana.");
let svetlanautterance2 = new SpeechSynthesisUtterance("I am twenty three years old.");
let svetlanautterance3 = new SpeechSynthesisUtterance("I am a teacher.");
let svetlanautterance4 = new SpeechSynthesisUtterance("I am from Russia.");
let svetlanautterance5 = new SpeechSynthesisUtterance("I am Russian.");

function svetlanaRead1(){
  speechSynthesis.speak(svetlanautterance1);
} function svetlanaRead2(){
  speechSynthesis.speak(svetlanautterance2);
} function svetlanaRead3(){
  speechSynthesis.speak(svetlanautterance3);
} function svetlanaRead4(){
  speechSynthesis.speak(svetlanautterance4);
} function svetlanaRead5(){
  speechSynthesis.speak(svetlanautterance5);
} 

let utterance = new SpeechSynthesisUtterance("Hello world!");
function read(){
  speechSynthesis.speak(utterance);
}

function svetlanaSpeak1() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('svetlanaSpeak1').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}
function svetlanaSpeak2() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('svetlanaSpeak2').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}

function svetlanaSpeak3() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('svetlanaSpeak3').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}

function svetlanaSpeak4() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('svetlanaSpeak4').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}

function svetlanaSpeak5() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('svetlanaSpeak5').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}

function johnSpeak1() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('johnSpeak1').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}
function johnSpeak2() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('johnSpeak2').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}

function johnSpeak3() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('johnSpeak3').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}

function johnSpeak4() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('johnSpeak4').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}

function johnSpeak5() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById('johnSpeak5').value = e.results[0][0].transcript;
      recognition.stop();
    };
    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
}
