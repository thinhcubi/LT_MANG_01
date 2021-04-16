let c=[];
let a=[];
let b=[];
length=10;
for(let i = 0;i<length;i++) {
    a.push(Math.floor(Math.random()* 50))
} console.log(a)
for(let i = 0;i<length;i++) {
    b.push(Math.floor(Math.random()* 50))
} console.log(b)
for(let i = 0;i<length;i++){
    c.push(a[i])
    c.push(b[i])
}
document.getElementById("cd").innerHTML = c
// document.getElementById("cd").innerHTML= "sada";
// document.getElementById("cs").innerHTML=c




