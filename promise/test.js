var findMedianSortedArrays = function(num1, num2) {
    let num = num1.length+num2.length;
    if(num%2==1){
        return getKth(num1,num2,Math.ceil(num/2))
    }
    else{
        return (getKth(num1,num2,Math.ceil(num/2))+getKth(num1,num2,Math.ceil(num/2)))/2.0
    }
};
function getKth(num1,num2,k){
    let index1=0,index2=0;
    let l1=num1.length,l2=num2.length;
    let newIndex1=0,newIndex2=0;
    while(true){
        if(k==1) return Math.min(num1[index1],num2[index2])
        if(index1=l1)return num2[index2+k-1];
        if(index2=l2)return num1[index1+k-2];
        newIndex1 = Math.max(Math.ceil(k/2)-1,l1-1)+index1;
        newIndex2 = Math.max(Math.ceil(k/2)-1,l2-1)+index2;
        if(num1[newIndex1]<num2[newIndex2]){
            index1+=newIndex1+1;
            k-=(newIndex1-index1+1)
        }
        else{
            index2+=newIndex2+1;
            k-=(newIndex2-index2+1)
        }
    }
}
let a = findMedianSortedArrays([1,3],[2])
console.log(a);