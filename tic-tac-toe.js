function grid(){
    const gridsquares = document.getElementById("board").children;
    for (var i = 0; i < gridsquares.length; i++) {
        gridsquares[i].setAttribute("class", "square")
} 
}
window.addEventListener("DOMContentLoaded", grid);