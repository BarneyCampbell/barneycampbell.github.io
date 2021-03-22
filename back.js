function findNum() {
    if(x % 2 == 0) {
        x = x + 2;

    } else {
        x = x + 7;
    }

    document.getElementById("demo").innerHTML = x;
}