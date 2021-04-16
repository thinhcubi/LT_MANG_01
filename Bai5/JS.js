let sum=0;
let numbers=[1,-3,-5,4,-7,8,-9,10]
for(let i=1;i<numbers.length;i++){
    if(numbers[i]<0){
        sum+=1

    }
}document.write(" So phan tu nguyen am trong mang la" + sum)