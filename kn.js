var kj = document.createElement('div');
kj.setAttribute('id', 'data')
document.body.append(paarent);
document.body.style.textAlign = 'center'

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.send("");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText); // parse the responseText as JSON
        var title = data.title;
        var body = data.body;
        var html = ""; // create an empty string to store the HTML
        html += "<h2>" + title + "</h2>";
        html += "<p>" + body + "</p>";
        // set the innerHTML of the data element to the html string
        document.querySelector("#data").innerHTML = html;
    } else {
        console.log("error");
    }
}