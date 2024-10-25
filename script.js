let boxes= document.querySelectorAll(".box")
const winPatterns=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [0,4,8] 
 
]
let turnO= true // turnX , turnO

boxes.forEach((box) => {
       
box.addEventListener("click",()=>{
    if(turnO)
        {box.innerText="O"
          turnO=false  
          
        }
    else{box.innerText="X"
        turnO=true;
    }
    box.disabled=true;
   checkWinner();
})

});


const checkWinner=()=>{
    for( pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText
        let pos2val=boxes[pattern[1]].innerText
        let pos3val=boxes[pattern[2]].innerText
         
        if( pos1val !== "" && pos2val !== "" && pos3val !==""){
            if (pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos2val)
                  showWinner(pos1val)
               
            }
        }
        
        
    }
}

const showWinner = (winner) => {
    document.getElementById('alertMessage').innerText = `Winner is ${winner}`;
    document.getElementById('alertModal').style.display = "flex";
};

document.querySelector(".close").addEventListener("click", ()=>{resetGame()})
reset.addEventListener("click", ()=>{resetGame()})


// const resetGame=()=>{
//     boxes.forEach((box)=>{
//      box.innerText=""
//      box.disabled=false;
//     })
//     turnO=true;
//     document.getElementById("alertModal").style.display="none";
// }

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true; // Reset to player O's turn
    document.getElementById('alertModal').style.display = "none"; // Close the modal
};


