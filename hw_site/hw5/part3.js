var state_info = [
    // abbr, name, capital, population
    ["AL", "Alabama", "Montgomery", 4903185],
    ["AK", "Alaska", "Juneau", 731545],
    ["AZ", "Arizona", "Phoenix", 7278717],
    ["AR", "Arkansas", "Little Rock", 3017825],
    ["CA", "California", "Sacramento", 39512223],
    ["CO", "Colorado", "Denver", 5758736]
];

var state_info_lower = state_info.map((r) => {return [r[0].toLowerCase(), r[1].toLowerCase()]});

var fout = document.querySelector("p#form_output");

// process the form when you press enter instead of submitting it
function FormSubmit() {
    event.preventDefault();
    FormProcess();
}

function FormProcess() {
    let stateval = document.forms.p3form.state_box.value;
    let idx = HaveStateInfo(stateval.toLowerCase());
    if (idx < 0) {
        let apology = "Sorry, we do not have information about this state! We only have information about ";
        fout.innerHTML = apology + ListStates();
    } else {
        fout.innerHTML = PrintStateInfo(idx);
    }
}

function ClearForm() {
    document.forms.p3form.reset();
    fout.innerHTML = "";
}

function HaveStateInfo(st) {
    for (let r = 0; r < state_info_lower.length; r++) {
        let s = state_info_lower[r];
        if (st.localeCompare(s[0]) == 0 || st.localeCompare(s[1]) == 0) {
            return r;
        }
    }
    return -1;
}

function ListStates() {
    var stl = "";
    for (let i = 0; i < state_info.length-1; i++) {
        stl += "<b>" + state_info[i][1] + "</b>, ";
    }
    stl += "and <b>" + state_info[state_info.length-1][1] + "</b>";
    return stl;
}

function PrintStateInfo(idx) {
    let sinfo =  state_info[idx];
    let istr = "Thanks for your inquiry, here is the information you requested:<br />";
    istr += "State abbr = <b>" + sinfo[0] + "</b><br />";
    istr += "State name = <b>" + sinfo[1] + "</b><br />";
    istr += "Capital = <b>" + sinfo[2] + "</b><br />";
    istr += "Population = <b>" + sinfo[3] + "</b><br />";
    return istr;
}
