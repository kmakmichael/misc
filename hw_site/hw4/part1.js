window.onload = DoThings;

function DoThings() {
    let plus = (a, b) => a + b;
    let mult = (a, b) => a * b;

    document.getElementById("sum_1").innerHTML = FoldRangeFor(5, 25, 4, plus).toLocaleString("en-US");
    document.getElementById("prd_1").innerHTML = FoldRangeFor(5, 25, 4, mult).toLocaleString("en-US");
    document.getElementById("sum_2").innerHTML = FoldRangeWhile(3, 18, 3, plus).toLocaleString("en-US");
    document.getElementById("prd_2").innerHTML = FoldRangeWhile(3, 18, 3, mult).toLocaleString("en-US");
}

function FoldRangeFor(lower, upper, increment, operation) {
    if (lower > upper) {
        return "Invalid range"
    }
    let result = lower;
    for (let i=lower + increment; i<=upper; i+= increment) {
        result = operation(result, i);
    }
    return result;
}
function FoldRangeWhile(lower, upper, increment, operation) {
    if (lower > upper) {
        return "Invalid range"
    }
    let result = lower;
    let i = lower + increment;
    while (i<=upper) {
        result = operation(result, i);
        i += increment;
    }
    return result;
}
