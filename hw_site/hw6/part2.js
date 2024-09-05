$("form").on("submit", () => {
    event.preventDefault();
    let needle = $("input#needle").val();
    let haystack = $("textarea#haystack").val();
    let m = Find(needle.toLowerCase(), haystack.toLowerCase());
    if (m > 0) {
        $("p#printout").text(`Found ${needle} ${m} times in text.`);
    } else {
        $("p#printout").text("");
    }
});

function Find(n, h) {
    let m = -1;
    let idx = -1;
    let s = h;
    do {
        idx = h.indexOf(n, idx+1);
        ++m;
    } while (idx > -1)
    return m;
}