const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:


// Match the text entered with the provided text on the page:
function matchText(){
    if(testArea.textContent == originText){
        // stop startTimer function
        clearTimeout(startTimer.runTimer);
    }
}

// Start the timer:
function startTimer(Event ) {
    time = theTimer.textContent.split(':');
    ss = time[2];
    mm = time[1];
    hh = time[0];
    function runTimer(){
        ss = Number(ss) + 1
        if(Number(ss)>60){
            ss = "00";
            mm = Number(mm) +1;
        }
        if(Number(mm) >60){
            mm = "00";
            hh = Number(hh)+1;
        }
        if(Number(hh) > 12){
            hh = "00";
        }
        time[2] = ss;
        time[1] = mm;
        time[0] = hh;
        
        console.log(time);
        theTimer.textContent = hh + ":" + mm + ":" + ss;
        

    }
    timer_func = setInterval(runTimer, 1000);
    window.removeEventListener("click", startTimer,false);
}

// Reset everything:
function resetEverything(Event){
    theTimer.innerHTML = "00:00:00";
    testArea.innerHTML = "";
    testArea.setAttribute("placeholder","The clock starts when you start typing.");
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",startTimer,false);
testArea.addEventListener("keyup",matchText,false);
resetButton.addEventListener("click",resetEverything,false);