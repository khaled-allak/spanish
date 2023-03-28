var allitems = document.querySelectorAll(".list li");
var content = document.querySelector("#content")
var btn = document.querySelector('#AddToCart');
var totalPrice = 0;

allitems.forEach(function (item) {
    item.onclick = function () {
        totalPrice += parseInt(item.getAttribute("price"));
        content.innerHTML += item.textContent + " ";

        if (content.innerHTML != "") {
            btn.style.display = "block";
        }
    };
});

btn.onclick = function () {
    console.log(totalPrice)
}