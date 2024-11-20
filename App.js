let userScore = 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const uScore =document.querySelector("#user-score")

const cScore = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options =["rock","paper","scissor"];

    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was draw. ");
}
const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);

    
    const showWinner = (userWin) =>{
        if(userWin){
            userScore++;
            uScore.innerText=userScore;
            console.log("You win!");
            msg.innerText = ` You win! ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
           
        }
        else{
            compScore++;
            cScore.innerText=compScore;
            console.log("You lose!");
            msg.innerText=` You lose! ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor="red";
           
        }
    }
    if(userChoice === compChoice){
        drawGame(); 
        msg.innerText = ` Game Draw! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="black";

    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor paper
         userWin= compChoice ==="paper"? false :true;
        }else if(userChoice === "paper"){
            // rock scissor
            userWin= compChoice === "scissor"?false:true;
        }else if(userChoice === "scissor") {
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }

  
}

choices.forEach( (choice) =>{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       
        playGame(userChoice);
    });
});