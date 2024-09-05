$("document").ready(() => {
    $("input#pnum").mask("(000) 000-0000");

    $("form").on("submit", (event) => {
        event.preventDefault();
        let match = $("input#pnum").val().trim().match(/\(([0-9]{3})\) ([0-9]{3})-([0-9]{4})/);
        $("input#area").val(match[1]);
        $("input#prefix").val(match[2]);
        $("input#line").val(match[3]);
    })
});