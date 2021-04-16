let numbers = [23, 23, 51, 65, 23, 12, 45, 34, 23, 12]
//let flag = false;
let V = +prompt("Nhap tu ban phim")
//for (let i = 0; i < numbers.length; i++) {
   // if (V === numbers[i]) {
        //flag = true;
  //  }
//}
let i = 0;
let count = 0;
 while (i < numbers.length) {
     if (V == numbers[i]) {
       count++;
       i++;
    } else i++;}
if (count > 0) {
   document.write(V + "is in a array")
 } else {
    document.write(V + "is not in array")
}
//if (flag) {
    //document.write(V + "is in a array")
//} else document.write(V + "is not in array")