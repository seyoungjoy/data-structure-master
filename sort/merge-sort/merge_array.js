function mergeArray(arr1, arr2){
    let answer = [];
    let tp1 = 0;
    let tp2 = 0;
    while (tp1<arr1.length && tp2<arr2.length){
        if(arr1[tp1]<arr2[tp2]){
            answer.push(arr1[tp1]);
            tp1++;
        } else {
            answer.push(arr2[tp2]);
            tp2++;
        }
    }
    while(tp1<arr1.length){
        answer.push(arr1[tp1]);
        tp1++;
    }
    while(tp2<arr2.length){
        answer.push(arr2[tp2]);
        tp2++;
    }

    return answer;
}

console.log(mergeArray([1,10,50], [2,14,99,100,200]));