const squares = document.getElementsByClassName("square");
let myArray = [];
let winrow = false;
let wincol = false;
let windia = false;
let player = "X";

function grid(){
    const gridsquares = document.getElementById("board").children;
    for (var i = 0; i < gridsquares.length; i++) {
        gridsquares[i].setAttribute("class", "square")
        gridsquares[i].setAttribute("id", "square_"+i)
} 
    document.getElementsByClassName("btn")[0].addEventListener("click", e => {
    for (var i = 0; i < gridsquares.length; i++) {
        gridsquares[i].setAttribute("class", "square")
        gridsquares[i].innerHTML = "";

    myArray = [];
    winrow = false;
    wincol = false;
    windia = false;
    player = "X";

    
    const status = document.getElementById("status");
    status.className = "";
    status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    }
})

    for (let i = 0; i < squares.length; i++){
        squares[i].addEventListener("mouseover",e => {
            e.target.classList.add("hover");
        } )

        squares[i].addEventListener("mouseout",e => {
            e.target.classList.remove("hover");
        } )
        
        squares[i].addEventListener("click", e => {
            if (myArray[i] == null){
                const state = e.target.getAttribute("class");
                if (state == "square hover" || state == "square"){
                    e.target.classList.add(player);
                    e.target.innerHTML = player;
                    changePlayer()
                }
                myArray[i] = e.target.innerHTML;
                
            }
            else{}
            winning_rows(myArray)
            winning_cols(myArray)
            winning_dia(myArray)
            if (winrow == true || wincol == true || windia == true){
                myArray = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
               
            }   
        });
    }
}

window.addEventListener("DOMContentLoaded", grid);

function changePlayer(){
    player = (player == "X") ? "O" : "X";
}
    function winning_rows(myArray){
    
        if (myArray[0] == myArray[1] && myArray[1] == myArray[2] && myArray[1] != "-" && myArray[1] != null){
            winrow = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[1] + " is the Winner!";
        }
        else if (myArray[3] == myArray[4] && myArray[4] == myArray[5] && myArray[4] != "-" && myArray[4] != null){
            winrow = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[4] + " is the Winner!";
        }
        else if (myArray[6] == myArray[7] && myArray[7] == myArray[8] && myArray[7] != "-" && myArray[7] != null){
            winrow = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[7] + " is the Winner!";
        }
        //console.log(winrow);
    }

    function winning_cols(myArray){
    
        if (myArray[0] == myArray[3] && myArray[3] == myArray[6] && myArray[3] != "-" && myArray[3] != null){
            wincol = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[3] + " is the Winner!";
        }
        else if (myArray[1] == myArray[4] && myArray[4] == myArray[7] && myArray[4] != "-" && myArray[4] != null){
            wincol = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[4] + " is the Winner!";
        }
        else if (myArray[2] == myArray[5] && myArray[5] == myArray[8] && myArray[5] != "-" && myArray[5] != null){
            wincol = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[5] + " is the Winner!";
        }
        //console.log(wincol);
    }

    function winning_dia(myArray){
    
        if (myArray[0] == myArray[4] && myArray[4] == myArray[8] && myArray[4] != "-" && myArray[4] != null){
            windia = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[4] + " is the Winner!";
        }
        else if (myArray[2] == myArray[4] && myArray[4] == myArray[6] && myArray[4] != "-" && myArray[4] != null){
            windia = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[4] + " is the Winner!";
        }
        //console.log(windia);
    }





