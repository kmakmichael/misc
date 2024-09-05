window.onload = DoThings;

var num_years = 5;
var r_min = 0.05;
var r_max = 0.07;
var r_step = 0.01;
var principal = 1000.00

function DoThings() {
    let el_div = document.getElementById("table_div");
    for (let r = r_min; r <= r_max; r+=r_step) {
        el_div.appendChild(BuildTable(num_years, r, principal));
        el_div.appendChild(document.createElement("br"))
    }
}

function CompoundInterest(p, r, n) {
    return p * Math.pow(r + 1, n);
}
function BuildTable(yrs, r, amount) {
    let tbl = document.createElement("table");

    let tbody = document.createElement("tbody");
    let p = amount;
    for (let i = 1; i < yrs; i++) {
        // p = CompoundInterest(p, r, i);
        tbody.appendChild(CreateRow(i, CompoundInterest(p, r, i), r))
    }
    let tfoot = document.createElement("tfoot");
    tfoot.appendChild(CreateRow(yrs, CompoundInterest(p, r, yrs), r));

    tbl.appendChild(CreateColGroup());
    tbl.appendChild(CreateThead());
    tbl.appendChild(tbody);
    tbl.appendChild(tfoot);
    return tbl;
}

function CreateRow(year, amount, intrate) {
    let rw = document.createElement("tr");

    let yr = document.createElement("td");
    yr.innerHTML = year;
    rw.appendChild(yr);
    let am = document.createElement("td");
    am.innerHTML = amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
    rw.appendChild(am);
    let ir = document.createElement("td");
    ir.innerHTML = `${intrate.toFixed(3)}`;
    rw.appendChild(ir);
    return rw;
}
function CreateColGroup() {
    let cg = document.createElement("colgroup");
    cg.appendChild(document.createElement("col"));
    cg.appendChild(document.createElement("col"));
    cg.appendChild(document.createElement("col"));
    return cg;
}
function CreateThead() {
    let t_head = document.createElement("thead");
    let tr = document.createElement("tr");
    t_head.appendChild(tr);

    let th_1 = document.createElement("th")
    th_1.innerHTML = "Year";
    tr.appendChild(th_1);
    let th_2 = document.createElement("th")
    th_2.innerHTML = "Amount on Deposit";
    tr.appendChild(th_2);
    let th_3 = document.createElement("th")
    th_3.innerHTML = "Interest Rate";
    tr.appendChild(th_3);

    return t_head;
}