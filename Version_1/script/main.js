
function getJson() {
var xmlhttp = new XMLHttpRequest();
var url = "/json/names.json";
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        getTitle(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}



console.log("hello")


function getTitle(data) {
    document.getElementById("pageTitle").innerHTML = data.title[0];
}