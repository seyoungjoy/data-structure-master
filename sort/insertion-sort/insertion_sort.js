function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let currentIdx = i;
        for(let j=i-1; j>=0; j--){
            if(arr[currentIdx]<arr[j]){
                [arr[currentIdx],arr[j]] = [arr[j],arr[currentIdx]]
                currentIdx=j;
            }
        }
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));