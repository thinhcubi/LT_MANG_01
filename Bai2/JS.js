let arr=[12,46,45,27,49,35,346,58,34,12]
let max=arr[0]
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i]
    }

} alert(max+'lon nhat o vi tri'+ arr.indexOf(max))