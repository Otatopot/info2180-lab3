const squares = document.getElementsByClassName("square");
let myArray = ["-", "-", "-", "-", "-", "-", "-", "-", "-",];
let playCount = [];
let non_null = myArray.filter(Boolean); 
let count_nn = 0;
let winrow;
let wincol;
let windia;

function grid(){
    const gridsquares = document.getElementById("board").children;
    for (var i = 0; i < gridsquares.length; i++) {
        gridsquares[i].setAttribute("class", "square")
        gridsquares[i].setAttribute("id", "square_"+i)
} 


    for (let i = 0; i < squares.length; i++){
        
        squares[i].addEventListener("mouseover",e => {
            e.target.classList.add("hover");
        } )

        squares[i].addEventListener("mouseout",e => {
            e.target.classList.remove("hover");
        } )
        
        squares[i].addEventListener("click", e => {
            if (myArray[i] == "-"){
                const state = e.target.getAttribute("class");
                if (state == "square hover" || state == "square"){
                    e.target.classList.add("X");
                    e.target.innerHTML = "X";
                }
                if (state == "square X hover" || state == "square hover X"){
                    e.target.classList.replace("X","O");
                    e.target.innerHTML = "O";
                }
                if (state == "square O hover" || state == "square hover O"){
                    e.target.classList.replace("O","X");
                    e.target.innerHTML = "X";
                }
                //If this is the first click, save value to array.
                myArray[i] = e.target.innerHTML;
                //save the number of values in the array to the matching index in 
                //playCount
                non_null = myArray.filter(Boolean);
                count_nn = non_null.length;
                playCount[i] = count_nn
                console.log(count_nn, myArray);
                
            }
            else if (myArray[i] == null){}
            else {
                //If the another square has been pressed (and another array value added to the list)
                //do not allow them to click again. But if the values match, no other square was changed and a 
                //click is allowed
                if (playCount[i] == count_nn){
                    const state = e.target.getAttribute("class");
                    if (state == "square hover" || state == "square"){
                        e.target.classList.add("X");
                        e.target.innerHTML = "X";
                    }
                    if (state == "square X hover" || state == "square hover X"){
                        e.target.classList.replace("X","O");
                        e.target.innerHTML = "O";
                    }
                    if (state == "square O hover" || state == "square hover O"){
                        e.target.classList.replace("O","X");;
                        e.target.innerHTML = "X";
                    }
                    //save value to array.
                    myArray[i] = e.target.innerHTML;
                }
                console.log(count_nn, myArray)
            }
            winning_rows(myArray)
            if (winrow == true){
                myArray = []
            }   
        });
    }
}

window.addEventListener("DOMContentLoaded", grid);

    function winning_rows(myArray){
    
        if (myArray[0] == myArray[1] && myArray[1] == myArray[2] && myArray[0] != "-" && myArray[1] != null){
            winrow = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[1] + " is the Winner!";
        }
        else if (myArray[3] == myArray[4] && myArray[4] == myArray[5] && myArray[4] != "-" && myArray[4] != null){
            winrow = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[4] + " is the Winner!";
        }
        else if (myArray[6] == myArray[7] && myArray[7] == myArray[8] && myArray[7] != "-" && myArray[4] != null){
            winrow = true;
            document.getElementById("status").setAttribute("class", "you-won");
            document.getElementById("status").innerHTML = "Congratulations! " + myArray[7] + " is the Winner!";
        }
        console.log(winrow);

    }


    //function() {innerHTML = "x";}
    //document.getElementById("demo").innerHTML = sometext;




