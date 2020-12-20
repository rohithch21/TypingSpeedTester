const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var eventHappened = false;
var t;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function addLeadingZeros(value){
    if(value < 10){
        return("0" + value);
    }
    return value;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currTime = addLeadingZeros(timer[0]) + ":" + addLeadingZeros(timer[1]) + ":" + addLeadingZeros(timer[2]);
    theTimer.innerHTML = currTime;
    timer[3]++;

    timer[0] = Math.floor(timer[3]/6000);
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60));
    timer[2] = Math.floor(timer[3] - timer[1]*100);
    
}



// Match the text entered with the provided text on ;the page:
function matchText(){
    inputText = testArea.value;
    if(inputText.length >= 0){
        if(inputText.length == originText.length){
            // Stop timer
            if(inputText === originText){
                testWrapper.style.borderColor = "#429890";
                clearInterval(t);
            }
        }
        else{
            if(inputText == originText.substring(0,inputText.length)){
                
                testWrapper.style.borderColor = "#65CCfC";
                
            }
            else{
                testWrapper.style.borderColor = "#FF7F50";
            }
        }
    }
    

    
}
// Start the timer:
function startTimer(){
    if(!eventHappened){
        eventHappened = true;
        t = setInterval(runTimer,10);
    }
}

// Reset everything:
function resetEverything(){
    clearInterval(t); // to stop the seTinterval t incase its running in the background
    /*To ensure next time we initialise the setInterval , it starts at index 0 and not 1 or higher
    (same process running paralelly) */
    t = null;       
    theTimer.innerHTML = "00:00:00";
    eventHappened = false;
    testArea.value = "";
    timer = [0,0,0,0];
    testWrapper.style.borderColor = "grey";



};

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",startTimer,false);
testArea.addEventListener("keyup",matchText,false);
resetButton.addEventListener("click",resetEverything,false);
