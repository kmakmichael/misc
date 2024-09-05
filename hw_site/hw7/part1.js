var e = document.forms[0].elements;

// Background Color
for (let i = 0; i < e["bg"].length; i ++) {
    e["bg"][i].addEventListener("change", (event) => {
        $("#dynabox").css("background-color", e["bg"][i].value);
    });
}


// Font Styles
e["st_b"].addEventListener("change", (event) => {
    if (e["st_b"].checked) {
        $(".dynatext").css("font-weight", "bold");
    } else {
        $(".dynatext").css("font-weight", "normal")
    }
});
e["st_i"].addEventListener("change", (event) => {
    if (e["st_i"].checked) {
        $(".dynatext").css("font-style", "italic");
    } else {
        $(".dynatext").css("font-style", "normal")
    }
});
e["st_u"].addEventListener("change", (event) => {
    if (e["st_u"].checked) {
        $(".dynatext").css("text-decoration", "underline");
    } else {
        $(".dynatext").css("text-decoration", "none")
    }
});

// Font Size
e["fs"].addEventListener("change", (event) => {
    $(".dynatext").css("font-size", e["fs"].options[e["fs"].selectedIndex].value);
})