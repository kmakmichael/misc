
function goToNewPage(myForm) {
    var mydest = myForm.destList.options[myForm.destList.selectedIndex].value;
    if (mydest != "") {
        window.open(mydest, '_blank');
    }
}