function load(filename) {
    document.getElementById("content").innerHTML = `<object type="text/html" data="partials/${filename}.html"></object>`;
};