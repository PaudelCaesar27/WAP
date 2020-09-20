var obj = {
    "cpu": "8 core 4Ghz",
    "ram": "16GB",
    "storage": "4TB NVME",
    "price": "$1500"
}
var myRequest = new XMLHttpRequest();
myRequest.open('GET', obj );
var btn1 = document.getElementById('btn1');
btn1.addEventListener("click", function(){
    myRequest.onload = function () {
        var myData = JSON.parse(myRequest.responseText);
        console.log(myData);
    }
});