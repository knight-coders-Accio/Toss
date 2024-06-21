
let btns = document.querySelectorAll('button');
let output = document.querySelector('.output');
let message = document.querySelector('#message');

// btns[0] =<button>Head</button>
// btns[1] =<button>Tail</button>


// btns[0].addEventListener()  
// btns[1].addEventListener()

for(let t of btns){
    t.addEventListener("click", toss)
}

// function addEventListener(t1,t2){
     
    //    t2(eventDetails) // { target: <button>Head</button> , type: "click", altKey: false, shiftKey: false, ...}
// }


function toss(eventDetails){
    // console.log(eventDetails)
    // console.log(eventDetails.target) // => <button>Head</button> or <button>Tail</button>
    let userChoice = eventDetails.target.innerText;
}




// map(display)

// function display(value, index){

// }



