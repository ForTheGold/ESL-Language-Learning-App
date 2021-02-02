// Menu

function learn() {
  document.getElementById("learn").style.display = "inline-block"
  document.getElementById("answer-practice").style.display = "none"
  document.getElementById("question-practice").style.display = "none"
  document.getElementById("chat").style.display = "none"
  document.getElementById("listen").style.display = "none"
}

function answerPractice() {
  document.getElementById("learn").style.display = "none"
  document.getElementById("answer-practice").style.display = "inline-block"
  document.getElementById("question-practice").style.display = "none"
  document.getElementById("chat").style.display = "none"
  document.getElementById("listen").style.display = "none"

  document.getElementById("zero").style.display = "inline-block"
  document.getElementById("one").style.display = "none"
  document.getElementById("two").style.display = "none"
  document.getElementById("three").style.display = "none"
}

function questionPractice() {
  document.getElementById("learn").style.display = "none"
  document.getElementById("answer-practice").style.display = "none"
  document.getElementById("question-practice").style.display = "inline-block"
  document.getElementById("chat").style.display = "none"
  document.getElementById("listen").style.display = "none"

  document.getElementById("four").style.display = "inline-block"
  document.getElementById("five").style.display = "none"
  document.getElementById("six").style.display = "none"
  document.getElementById("seven").style.display = "none"
}

function chat() {
  document.getElementById("learn").style.display = "none"
  document.getElementById("answer-practice").style.display = "none"
  document.getElementById("question-practice").style.display = "none"
  document.getElementById("chat").style.display = "inline-block"
  document.getElementById("listen").style.display = "none"

  document.getElementById("eight").style.display = "inline-block"
  document.getElementById("nine").style.display = "none"
  document.getElementById("ten").style.display = "none"
}

function listen() {
  document.getElementById("learn").style.display = "none"
  document.getElementById("answer-practice").style.display = "none"
  document.getElementById("question-practice").style.display = "none"
  document.getElementById("chat").style.display = "none"
  document.getElementById("listen").style.display = "inline-block"
}

// Answer Practice

function one() {

  if (document.getElementById("select-name").value != "svetlana") {
    document.getElementById("select-name-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("select-age").value != "23") {
    document.getElementById("select-age-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("select-job").value != "teacher") {
    document.getElementById("select-job-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("select-country").value != "russia") {
    document.getElementById("select-country-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("select-russian").value != "russian") {
    document.getElementById("select-russian-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if(document.getElementById("select-name").value === "svetlana" &&
     document.getElementById("select-age").value === "23" &&
     document.getElementById("select-job").value === "teacher" &&
     document.getElementById("select-country").value === "russia" &&
     document.getElementById("select-russian").value === "russian"){
      document.getElementById("zero").style.display = "none"
      document.getElementById("one").style.display = "inline-block"
      document.getElementById("two").style.display = "none"
      document.getElementById("three").style.display = "none"
  } else {
    document.getElementById("select-answer-error").innerHTML = "You seem to have made a mistake.  Please check your answers once again."
  }
}

function two() {
  if (document.getElementById("fib1-name").value.toLowerCase() != "name") {
    document.getElementById("fib1-name-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("fib1-am").value.toLowerCase() != "am") {
    document.getElementById("fib1-am-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("fib1-teacher").value.toLowerCase() != "teacher") {
    document.getElementById("fib1-teacher-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("fib1-from").value.toLowerCase() != "from") {
    document.getElementById("fib1-from-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("fib1-am2").value.toLowerCase() != "am") {
    document.getElementById("fib1-am2-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else 
  if (document.getElementById("fib1-name").value.toLowerCase() === "name" &&
    document.getElementById("fib1-am").value.toLowerCase() === "am" &&
    document.getElementById("fib1-teacher").value.toLowerCase() === "teacher" &&
    document.getElementById("fib1-from").value.toLowerCase() === "from" &&
    document.getElementById("fib1-am2").value.toLowerCase() === "am" ){
      document.getElementById("zero").style.display = "none"
      document.getElementById("one").style.display = "none"
      document.getElementById("two").style.display = "inline-block"
      document.getElementById("three").style.display = "none"
  } else {
    document.getElementById("fib1-error").innerHTML = "You seem to have made a mistake.  Please check your answers once again."
  }
}

function three() {
  if (document.getElementById("fib2-my").value.toLowerCase() != "my" ||
      document.getElementById("fib2-name").value.toLowerCase() != "name" ||
      document.getElementById("fib2-is").value.toLowerCase() != "is") {
    document.getElementById("fib2-error").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib2-error2").innerHTML = ""
    document.getElementById("fib2-error3").innerHTML = ""
    document.getElementById("fib2-error4").innerHTML = ""
    document.getElementById("fib2-error5").innerHTML = ""
  } else if(document.getElementById("fib2-i").value.toLowerCase() != "i" ||
            document.getElementById("fib2-am").value.toLowerCase() != "am" ||
            document.getElementById("fib2-years").value.toLowerCase() != "years" ||
            document.getElementById("fib2-old").value.toLowerCase() != "old"){
    document.getElementById("fib2-error").innerHTML = ""
    document.getElementById("fib2-error2").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib2-error3").innerHTML = ""
    document.getElementById("fib2-error4").innerHTML = ""
    document.getElementById("fib2-error5").innerHTML = ""
  } else if (document.getElementById("fib2-i2").value.toLowerCase() != "i" ||
            document.getElementById("fib2-am2").value.toLowerCase() != "am" ||
            document.getElementById("fib2-a").value.toLowerCase() != "a") {
    document.getElementById("fib2-error").innerHTML = ""
    document.getElementById("fib2-error2").innerHTML = ""
    document.getElementById("fib2-error3").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib2-error4").innerHTML = ""
    document.getElementById("fib2-error5").innerHTML = ""
  } else if (document.getElementById("fib2-i3").value.toLowerCase() != "i" ||
            document.getElementById("fib2-am3").value.toLowerCase() != "am" ||
            document.getElementById("fib2-from").value.toLowerCase() != "from") {
    document.getElementById("fib2-error").innerHTML = ""
    document.getElementById("fib2-error2").innerHTML = ""
    document.getElementById("fib2-error3").innerHTML = ""
    document.getElementById("fib2-error4").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib2-error5").innerHTML = ""
  } else if (document.getElementById("fib2-i4").value.toLowerCase() != "i" ||
            document.getElementById("fib2-am4").value.toLowerCase() != "am") {
    document.getElementById("fib2-error").innerHTML = ""
    document.getElementById("fib2-error2").innerHTML = ""
    document.getElementById("fib2-error3").innerHTML = ""
    document.getElementById("fib2-error4").innerHTML = ""
    document.getElementById("fib2-error5").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
  } else {
      document.getElementById("zero").style.display = "none"
      document.getElementById("one").style.display = "none"
      document.getElementById("two").style.display = "none"
      document.getElementById("three").style.display = "inline-block"
  }
}

// Question Practice
function four() {
  if (document.getElementById("select-what").value != "what") {
    document.getElementById("select-what-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("select-old").value != "old") {
    document.getElementById("select-old-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("select-do").value != "do") {
    document.getElementById("select-do-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("select-from").value != "from") {
    document.getElementById("select-from-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("select-nationality").value != "nationality") {
    document.getElementById("select-nationality-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if(document.getElementById("select-what").value === "what" &&
     document.getElementById("select-old").value === "old" &&
     document.getElementById("select-do").value === "do" &&
     document.getElementById("select-from").value === "from" &&
     document.getElementById("select-nationality").value === "nationality"){
      document.getElementById("four").style.display = "none"
      document.getElementById("five").style.display = "inline-block"
      document.getElementById("six").style.display = "none"
      document.getElementById("seven").style.display = "none"
  } else {
    document.getElementById("select-question-error").innerHTML = "You seem to have made a mistake.  Please check your answers once again."
  }
}

function five() {
  if (document.getElementById("fib3-your").value.toLowerCase() != "your") {
    document.getElementById("fib3-your-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("fib3-are").value.toLowerCase() != "are") {
    document.getElementById("fib3-are-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("fib3-do").value.toLowerCase() != "do") {
    document.getElementById("fib3-do-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("fib3-where").value.toLowerCase() != "where") {
    document.getElementById("fib3-where-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("fib3-is").value.toLowerCase() != "is") {
    document.getElementById("fib3-is-error").innerHTML = "You seem to have made a mistake in the above line.  Please check your answers once again."
  } else if (document.getElementById("fib3-your").value.toLowerCase() === "your" &&
    document.getElementById("fib3-are").value.toLowerCase() === "are" &&
    document.getElementById("fib3-do").value.toLowerCase() === "do" &&
    document.getElementById("fib3-where").value.toLowerCase() === "where" &&
    document.getElementById("fib3-is").value.toLowerCase() === "is" ){
      document.getElementById("four").style.display = "none"
      document.getElementById("five").style.display = "none"
      document.getElementById("six").style.display = "inline-block"
      document.getElementById("seven").style.display = "none"
  } else {
    document.getElementById("fib3-error").innerHTML = "You seem to have made a mistake.  Please check your answers once again."
  }
}

function six() {
  if (document.getElementById("fib4-what").value.toLowerCase() != "what" ||
      document.getElementById("fib4-is").value.toLowerCase() != "is" ||
      document.getElementById("fib4-your").value.toLowerCase() != "your" ||
      document.getElementById("fib4-name").value.toLowerCase() != "name") {
    document.getElementById("fib4-error").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib4-error2").innerHTML = ""
    document.getElementById("fib4-error3").innerHTML = ""
    document.getElementById("fib4-error4").innerHTML = ""
    document.getElementById("fib4-error5").innerHTML = ""
  } else if(document.getElementById("fib4-how").value.toLowerCase() != "how" ||
            document.getElementById("fib4-old").value.toLowerCase() != "old" ||
            document.getElementById("fib4-you").value.toLowerCase() != "you"){
    document.getElementById("fib4-error").innerHTML = ""
    document.getElementById("fib4-error2").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib4-error3").innerHTML = ""
    document.getElementById("fib4-error4").innerHTML = ""
    document.getElementById("fib4-error5").innerHTML = ""
  } else if (document.getElementById("fib4-what2").value.toLowerCase() != "what" ||
            document.getElementById("fib4-you2").value.toLowerCase() != "you" ||
            document.getElementById("fib4-do").value.toLowerCase() != "do") {
    document.getElementById("fib4-error").innerHTML = ""
    document.getElementById("fib4-error2").innerHTML = ""
    document.getElementById("fib4-error3").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib4-error4").innerHTML = ""
    document.getElementById("fib4-error5").innerHTML = ""
  } else if (document.getElementById("fib4-where").value.toLowerCase() != "where" ||
            document.getElementById("fib4-you3").value.toLowerCase() != "you" ||
            document.getElementById("fib4-from").value.toLowerCase() != "from") {
    document.getElementById("fib4-error").innerHTML = ""
    document.getElementById("fib4-error2").innerHTML = ""
    document.getElementById("fib4-error3").innerHTML = ""
    document.getElementById("fib4-error4").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib4-error5").innerHTML = ""
  } else if (document.getElementById("fib4-is").value.toLowerCase() != "is" ||
            document.getElementById("fib4-your2").value.toLowerCase() != "your" ||
            document.getElementById("fib4-nationality").value.toLowerCase() != "nationality") {
    document.getElementById("fib4-error").innerHTML = ""
    document.getElementById("fib4-error2").innerHTML = ""
    document.getElementById("fib4-error3").innerHTML = ""
    document.getElementById("fib4-error4").innerHTML = ""
    document.getElementById("fib4-error5").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
  } else {
      document.getElementById("four").style.display = "none"
      document.getElementById("five").style.display = "none"
      document.getElementById("six").style.display = "none"
      document.getElementById("seven").style.display = "inline-block"
  }
}

// Chat

function eight() {
      document.getElementById("eight").style.display = "none"
      document.getElementById("nine").style.display = "inline-block"
      document.getElementById("ten").style.display = "none"
}

function nine() {
      document.getElementById("eight").style.display = "none"
      document.getElementById("nine").style.display = "none"
      document.getElementById("ten").style.display = "inline-block"
}

function eleven() {
  document.getElementById("eleven").style.display = "none"
  document.getElementById("twelve").style.display = "inline-block"
  document.getElementById("thirteen").style.display = "none"
  document.getElementById("fourteen").style.display = "none"
}

function twelve() {
  if (!(document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("my name is") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("i am") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("im") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("i'm") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("hi my name is") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("hi i am") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("hi im") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("hi i'm") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("hi!  my name is") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("hi!  i am") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("hi!  im") || 
    document.getElementById("svetlanaSpeak1").value.toLowerCase().startsWith("hi!  i'm"))) {
    document.getElementById("fib3-error1").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib3-error2").innerHTML = ""
    document.getElementById("fib3-error3").innerHTML = ""
    document.getElementById("fib3-error4").innerHTML = ""
    document.getElementById("fib3-error5").innerHTML = ""
  } else if(!(document.getElementById("svetlanaSpeak2").value.toLowerCase().startsWith("i am") || 
    document.getElementById("svetlanaSpeak2").value.toLowerCase().startsWith("i'm") || 
    document.getElementById("svetlanaSpeak2").value.toLowerCase().startsWith("im"))) {
    document.getElementById("fib3-error1").innerHTML = ""
    document.getElementById("fib3-error2").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib3-error3").innerHTML = ""
    document.getElementById("fib3-error4").innerHTML = ""
    document.getElementById("fib3-error5").innerHTML = ""
  } else if (!(document.getElementById("svetlanaSpeak3").value.toLowerCase().startsWith("i am a") || 
      document.getElementById("svetlanaSpeak3").value.toLowerCase().startsWith("i'm a") || 
      document.getElementById("svetlanaSpeak3").value.toLowerCase().startsWith("im a"))) {
    document.getElementById("fib3-error1").innerHTML = ""
    document.getElementById("fib3-error2").innerHTML = ""
    document.getElementById("fib3-error3").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib3-error4").innerHTML = ""
    document.getElementById("fib3-error5").innerHTML = ""
  } else if (!(document.getElementById("svetlanaSpeak4").value.toLowerCase().startsWith("i am from") || 
    document.getElementById("svetlanaSpeak4").value.toLowerCase().startsWith("i'm from") || 
      document.getElementById("svetlanaSpeak4").value.toLowerCase().startsWith("im from"))) {
      document.getElementById("fib3-error1").innerHTML = ""
      document.getElementById("fib3-error2").innerHTML = ""
      document.getElementById("fib3-error3").innerHTML = ""
    document.getElementById("fib3-error4").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib3-error5").innerHTML = ""
  } else if (!(document.getElementById("svetlanaSpeak5").value.toLowerCase().startsWith("i am") || 
    document.getElementById("svetlanaSpeak5").value.toLowerCase().startsWith("i'm") || 
      document.getElementById("svetlanaSpeak5").value.toLowerCase().startsWith("im"))) {
    document.getElementById("fib3-error1").innerHTML = ""
    document.getElementById("fib3-error2").innerHTML = ""
    document.getElementById("fib3-error3").innerHTML = ""
    document.getElementById("fib3-error4").innerHTML = ""
    document.getElementById("fib3-error5").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
  } else {
      document.getElementById("eleven").style.display = "none"
      document.getElementById("twelve").style.display = "none"
      document.getElementById("thirteen").style.display = "inline-block"
      document.getElementById("fourteen").style.display = "none"
  }
}


function thirteen() {
  if (!(document.getElementById("johnSpeak1").value.toLowerCase().startsWith("hello what is your name") ||
        document.getElementById("johnSpeak1").value.toLowerCase().startsWith("hello what's your name") ||
        document.getElementById("johnSpeak1").value.toLowerCase().startsWith("hello whats your name") ||
        document.getElementById("johnSpeak1").value.toLowerCase().startsWith("hello! what is your name") ||
        document.getElementById("johnSpeak1").value.toLowerCase().startsWith("hello! what's your name") ||
        document.getElementById("johnSpeak1").value.toLowerCase().startsWith("hello! whats your name") ||
        document.getElementById("johnSpeak1").value.toLowerCase().startsWith("what is your name") ||
        document.getElementById("johnSpeak1").value.toLowerCase().startsWith("what's your name") ||
        document.getElementById("johnSpeak1").value.toLowerCase().startsWith("whats your name"))) {
    document.getElementById("fib4-error1").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib4-error2").innerHTML = ""
    document.getElementById("fib4-error3").innerHTML = ""
    document.getElementById("fib4-error4").innerHTML = ""
    document.getElementById("fib4-error5").innerHTML = ""
  } else if(!(document.getElementById("johnSpeak2").value.toLowerCase().startsWith("how old are you"))) {
    document.getElementById("fib4-error1").innerHTML = ""
    document.getElementById("fib4-error2").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib4-error3").innerHTML = ""
    document.getElementById("fib4-error4").innerHTML = ""
    document.getElementById("fib4-error5").innerHTML = ""
  } else if (!(document.getElementById("johnSpeak3").value.toLowerCase().startsWith("what do you do"))) {
    document.getElementById("fib4-error1").innerHTML = ""
    document.getElementById("fib4-error2").innerHTML = ""
    document.getElementById("fib4-error3").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib4-error4").innerHTML = ""
    document.getElementById("fib4-error5").innerHTML = ""
  } else if (!(document.getElementById("johnSpeak4").value.toLowerCase().startsWith("where are you from") ||
                document.getElementById("johnSpeak4").value.toLowerCase().startsWith("where're you from"))) {
    document.getElementById("fib4-error1").innerHTML = ""
    document.getElementById("fib4-error2").innerHTML = ""
    document.getElementById("fib4-error3").innerHTML = ""
    document.getElementById("fib4-error4").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
    document.getElementById("fib4-error5").innerHTML = ""
  } else if (!(document.getElementById("johnSpeak5").value.toLowerCase().startsWith("what is your nationality") ||
                document.getElementById("johnSpeak5").value.toLowerCase().startsWith("what's your nationality") ||
                document.getElementById("johnSpeak5").value.toLowerCase().startsWith("whats your nationality"))) {
    document.getElementById("fib4-error1").innerHTML = ""
    document.getElementById("fib4-error2").innerHTML = ""
    document.getElementById("fib4-error3").innerHTML = ""
    document.getElementById("fib4-error4").innerHTML = ""
    document.getElementById("fib4-error5").innerHTML = "You have made a mistake in the above sentence.  Please check your answers once again."
  } else {
      document.getElementById("eleven").style.display = "none"
      document.getElementById("twelve").style.display = "none"
      document.getElementById("thirteen").style.display = "none"
      document.getElementById("fourteen").style.display = "inline-block"
  }
}