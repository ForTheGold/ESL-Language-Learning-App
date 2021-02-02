// Box 1

var input1 = document.getElementById("chat-area1");

input1.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var msg = input1.value;
    var currentConvo = document.getElementById("msg-insert1").childElementCount
    if(currentConvo === 1){
        if (input1.value.toLowerCase().startsWith("my name is") ||
            input1.value.toLowerCase().startsWith("i am") ||
            input1.value.toLowerCase().startsWith("i'm") ||
            input1.value.toLowerCase().startsWith("im")) {
            input1.value = ""
            document.getElementById("msg-insert1").innerHTML += '<div class="msg-send">' + msg + '</div>'
            document.getElementById("msg-insert1").innerHTML += '<div class="msg-receive"> How old are you? </div>'
        } else {
            document.getElementById("error1").innerHTML = "You seem to have made a mistake.  Please try again."
        }
    }
    
    if(currentConvo === 3){
        if (input1.value.toLowerCase().endsWith("years") || input1.value.toLowerCase().startsWith("years.")) {
            document.getElementById("error1").innerHTML = `You cannot say, "I am _____ years.  <br>
                                                            There are two options.  You can say either <br>
                                                            I am _______.<br>
                                                            OR<br>
                                                            I am ________ years old.<br>`
        } else if (input1.value.toLowerCase().startsWith("i am")) {
            input1.value = ""
            document.getElementById("msg-insert1").innerHTML += '<div class="msg-send">' + msg + '</div>'
                document.getElementById("msg-insert1").innerHTML += '<div class="msg-receive"> What do you do? </div>'
        } else {
            document.getElementById("error1").innerHTML = "You seem to have made a mistake.  Please try again."
        }
    }

    if(currentConvo === 5){
        if (input1.value.toLowerCase().startsWith("i am a")) {
            input1.value = ""
            document.getElementById("msg-insert1").innerHTML += '<div class="msg-send">' + msg + '</div>'
                document.getElementById("msg-insert1").innerHTML += '<div class="msg-receive"> Where are you from? </div>'
        } else {
            document.getElementById("error1").innerHTML = "You seem to have made a mistake.  Please try again."
        }
    }

    if(currentConvo === 7){
        if (input1.value.toLowerCase().startsWith("i am from")) {
            input1.value = ""
            document.getElementById("msg-insert1").innerHTML += '<div class="msg-send">' + msg + '</div>'
                document.getElementById("msg-insert1").innerHTML += '<div class="msg-receive"> What is your nationality? </div>'
        } else {
            document.getElementById("error1").innerHTML = "You seem to have made a mistake.  Please try again."
        }
    }

    if(currentConvo === 9){
        if (input1.value.toLowerCase().startsWith("i am")) {
            input1.value = ""
            document.getElementById("msg-insert1").innerHTML += '<div class="msg-send">' + msg + '</div>'
        } else {
            document.getElementById("error1").innerHTML = "You seem to have made a mistake.  Please try again."
        }
    }

    if(currentConvo === 10){
        document.getElementById("eight").style.display = "none"
        document.getElementById("nine").style.display = "inline-block"
        document.getElementById("ten").style.display = "none"
    }

  }
});

// Box 2
var input2 = document.getElementById("chat-area2");

input2.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var msg = input2.value;
    var currentConvo = document.getElementById("msg-insert2").childElementCount
    if(currentConvo === 0){
    	if (input2.value.toLowerCase().startsWith("what is your name")) {
    		input2.value = ""
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-send">' + msg + '</div>'
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-receive"> My name is Svetlana. </div>'
    	} else {
    		document.getElementById("error2").innerHTML = "You seem to have made a mistake.  Please try again."
    	}
    }
	
    if(currentConvo === 2){
    	if (input2.value.toLowerCase().startsWith("how old are you")) {
    		input2.value = ""
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-send">' + msg + '</div>'
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-receive"> I am 23 years old. </div>'
    	} else {
    		document.getElementById("error2").innerHTML = "You seem to have made a mistake.  Please try again."
    	}
    }

    if(currentConvo === 4){
    	if (input2.value.toLowerCase().startsWith("what do you do")) {
    		input2.value = ""
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-send">' + msg + '</div>'
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-receive"> I am a teacher. </div>'
    	} else {
    		document.getElementById("error2").innerHTML = "You seem to have made a mistake.  Please try again."
    	}
    }

    if(currentConvo === 6){
    	if (input2.value.toLowerCase().startsWith("where are you from")) {
    		input2.value = ""
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-send">' + msg + '</div>'
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-receive"> I am from Russia. </div>'
    	} else {
    		document.getElementById("error2").innerHTML = "You seem to have made a mistake.  Please try again."
    	}
    }

    if(currentConvo === 8){
    	if (input2.value.toLowerCase().startsWith("what is your nationality")) {
    		input2.value = ""
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-send">' + msg + '</div>'
			document.getElementById("msg-insert2").innerHTML += '<div class="msg-receive"> I am Russian. </div>'
    	} else {
    		document.getElementById("error2").innerHTML = "You seem to have made a mistake.  Please try again."
    	}
    }

    if(currentConvo === 10){
        document.getElementById("eight").style.display = "none"
        document.getElementById("nine").style.display = "none"
        document.getElementById("ten").style.display = "inline-block"
    }

  }
});

function hint() {
    var currentConvo = document.getElementById("msg-insert2").childElementCount
    if (currentConvo === 0) {
        document.getElementById("hint").innerHTML = "Ask Svetlana what her name is"
    } else if (currentConvo === 2) {
        document.getElementById("hint").innerHTML = "Ask Svetlana how old she is"
    } else if (currentConvo === 4) {
        document.getElementById("hint").innerHTML = "Ask Svetlana what her job is"
    } else if (currentConvo === 6) {
        document.getElementById("hint").innerHTML = "Ask Svetlana where she is from"
    } else if (currentConvo === 8) {
        document.getElementById("hint").innerHTML = "Ask Svetlana what her nationality is"
    }
}