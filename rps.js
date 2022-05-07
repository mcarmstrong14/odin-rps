
function PlayRPS(userStr){

    let compStr = ComputerPlay();

    let resultStr = DetermineWinner(userStr, compStr);

    document.getElementById('output1').innerHTML = "User played: " + userStr;
    document.getElementById('output2').innerHTML = "Computer played: " + compStr;
    document.getElementById('output3').innerHTML = "Result: " + resultStr;
    
}

function DetermineWinner(userStr, compStr){
    let resultStr;
    
    switch (userStr) {
        case compStr:
            resultStr = "Tie";
            break;
        case "Rock":
            resultStr = (compStr == "Paper") ? "Computer Wins":"User Wins";  
            break;
        case "Paper":
            resultStr = (compStr == "Scissors") ? "Computer Wins":"User Wins";  
            break;
        case "Scissors":
            resultStr = (compStr == "Rock") ? "Computer Wins":"User Wins";  
            break;
    }
    return resultStr;
}





function ComputerPlay(){
    let r = getRndInteger(1,3);

    let rStr;
    switch (r) {
        case 1:
            rStr = "Rock";  
            break;
        case 2:
            rStr = "Paper";
            break;
        case 3:
            rStr = "Scissors";
            break;
    }

    // document.getElementById('output2').innerHTML = "Computer: " + rStr;

    return rStr;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }