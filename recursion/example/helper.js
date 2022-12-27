// input : [1,2,3,4,5,6,7,8,9]
// output : [1,3,5,7,9]

// recursive solution
function collectOddValues(arr){
    let result = [];
    function helper(helperArr){
        if(helperArr.length <= 0) return;
        if(helperArr[0] % 2 !== 0){
            result.push(helperArr[0])
        }
        helper(helperArr.slice(1))
    }
    helper(arr);
    return result;
}

// iterative solution
function collectOddValues01(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 !== 0) result.push(arr[i]);
    }
    return result;
}



console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))