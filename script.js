
let btns = document.querySelectorAll('button');
let output = document.querySelector('.output');
let message = document.querySelector('#message');

// btns[0] =<button>Head</button>
// btns[1] =<button>Tail</button>


// btns[0].addEventListener()  
// btns[1].addEventListener()

for(let t of btns){

    t.addEventListener("click", ()=>toss(t.innerText))
}
let userScore = 0;
let computerScore = 0;
function toss(btnClicked){
    // btnClicked = "Head" or "Tail"
    let userSelection = btnClicked;

    let tossArray = ["Head", "Tail"];
    let randomIndex = parseInt(Math.random()*tossArray.length) // 0 or 1
    // console.log(randomIndex)
    let tossResult = tossArray[randomIndex];
    if(userSelection == tossResult){
        // console.log("User  Win")
        userScore++
        // alert("User Win")
        message.innerText = "User has Won"

        message.className = "userWon"

    //     message.style.color = "green"
    //     message.style.backgroundColor= "yellow"
    //     message.style.border = "1px solid red"
    //     message.style.textAlign = "center"
        //  message.style.cssText = `
        //     color: green;
        //     background-color: yellow;
        //     border: 1px solid red;
        //     text-align: center;
        // //  `
    }
    else{
        computerScore++
        // alert("Computer Win")
        message.innerText = "Computer has Won"
        message.className = "computerWon"
        // message.style.color = "red"
        // message.style.backgroundColor= "black"
        // message.style.border = "1px solid green"
        // message.style.textAlign = "center"
        // message.style.cssText = `
            // color: red;
            // background-color: black;
            // border: 1px solid green;
            // text-align: center;
        //  `
    }
    output.innerHTML = `User: ${userScore} <br> Computer: ${computerScore}`;
}





// how to give/modify css from js




// <h1 class="test1"> Hello </h1>

// let h1 = document.querySelector('.test1');

// h1.className  => "test1"

// h1.className = "test2"  => <h1 class="test2"> Hello </h1>