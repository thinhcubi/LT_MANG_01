let numbers=[]
let length=3
for(let i=0;i<length;i++){
    numbers.push(+prompt("Nhap tu ban phim"))

} alert(numbers)

let V=+prompt("Nhap a tu ban phim")
 for (let i=0;i<numbers.length;i++) {

     if (V === numbers[i]) {
        numbers.splice(i,1);
        numbers.push(0);
        break;
    }
}document.write(numbers)
