let arr=[23,55,44,34,34,12]
let avg=0;
let sum=0;
let max=arr[0];
 for(let i=1;i<arr.length;i++){
     if(max<arr[i]){
         max=arr[i]
     }
 }  alert(max)
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    avg=sum/arr.length
} document.write(avg)