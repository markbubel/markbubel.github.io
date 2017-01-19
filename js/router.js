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
    };
    xhttp.open("GET", `partials/${path}.html`, true);
    xhttp.send();
};

function getPath() {
    return window.location.href.split("#/")[1];
};

function changeTitle() {
    var title = getPath();
    if ( title.search("/") === -1) {
        document.title = `${capFirstChar(title)} : UX Portfolio of Mark Bubel`;
    }
    else {
        var slashPos = title.search("/");
        var theString = title.slice(slashPos+1, title.length-1);
        document.title = theString;
    }
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