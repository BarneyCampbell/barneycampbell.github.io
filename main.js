function findNum() {
    var x = parseInt(document.getElementById("demo").textContent);
    
    if(x % 2 == 0) {
        x = x + 3;

    } else {
        x = x + 7;
    }

    document.getElementById("demo").innerHTML = x;
}