function findNum() {
    var x = parseInt(document.getElementById("demo").textContent);
    for(var i = 1; i < 11; i++) {
        x = x + 1;
        document.getElementById("demo").innerHTML = x;
    }
    
}