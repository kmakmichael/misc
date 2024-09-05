window.onload = FunkyText;
function FunkyText() {
    var elmt = document.getElementById("fancyText");

    var pair1 = document.createElement("span");
    pair1.innerHTML = "xy";
    pair1.style = "color:red;font-weight:strong;font-family:\"Times New Roman\";";
    
    var pair2 = document.createElement("span");
    pair2.innerHTML = "12";
    pair2.style = "color:blue;font-family:Arial;";

    var pair3 = document.createElement("span");
    pair3.innerHTML = "89";
    pair3.style = "color:green;font-style:italic;font-family:Impact;";
    
    elmt.appendChild(pair1);
    elmt.innerHTML += "&nbsp;";
    elmt.appendChild(pair2);
    elmt.innerHTML += "&nbsp;";
    elmt.appendChild(pair3);
}
