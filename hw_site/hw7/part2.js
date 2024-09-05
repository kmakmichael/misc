var cookies = ReadCookies();

$(document).ready(() => {
    if ("name" in cookies && "username" in cookies) {
        $("#cookiebox").html(`<p>Welcome back, ${cookies.name}</p>`);
    } else {
        $("form").on("submit", (event) => {
            CreateCookie("name", f.ck_name.value);
            CreateCookie("username", f.ck_user.value);
        })
    }
});


function CreateCookie(name, val) {
    document.cookie = encodeURIComponent(`${name}=${val};`);
    console.log(`Writing ${name}=${val};`);
}

function ReadCookies() {
    let c = {};
    let matches = decodeURIComponent(document.cookie).matchAll(/[^;]+=[^;]+/g);
    for (const str of matches) {
        let spl = str[0].split("=");
        if (spl[0].trim() != "path") {
            c[spl[0].trim()] = spl[1].trim();
        }
    }
    return c;
}
