let arr=[];
let length=10;
for (let i =0;i<length;i++) {
    arr.push(+prompt("Nhap tu ban phim"))
}
document.getElementById("cs").innerHTML=arr;
function sortNumber(){
    arr.sort(function(a, b){return b-a});
    document.getElementById("cs").innerHTML=arr;
}