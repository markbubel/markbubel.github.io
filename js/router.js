const HOME_PARTIAL = "home"; // home partial filename

function load() {
    let path = getPath();
    if(path === "" || path === undefined) {
        path = HOME_PARTIAL;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        changeTitle();
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.getElementById("content").innerHTML =
        this.responseText;
        }

        else (this.readyState == 4 && this.status === 404) {
            document.getElementById("content").innerHTML = "Oops... that page doens't exist. Try again!";
            return;
        }
    };
    xhttp.open("GET", `partials/${path}.html`, true);
    xhttp.send();
};

function getPath() {
    return window.location.href.split("#/")[1];
};

function changeTitle() {
    const path = getPath();
    const base = 'UX Portfolio of Mark Bubel';
    if(path === "" || path === undefined) {
        document.title = `Home : ${base}`;
        return;
    }
    const s = path.split('/');
    const title = s[s.length - 1];
    document.title = `${capFirstChar(title)} : ${base}`;
};

function capFirstChar(str) {
    var first = str.charAt(0);
    var remaining = str.slice(1);
    str = first.toUpperCase() + remaining;
    return str;
};

window.onhashchange = function(event) {
    event.preventDefault();
    load();
};

window.onload = function(event) {
    event.preventDefault();
    load();
};