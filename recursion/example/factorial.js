// 재귀적 solution
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1)
}

// 비재귀적 solution
function factorial02(num){
    let total = 1;
    for(let i=num; i>1; i--){
        total *= i;
    }
    return total;
}

function factorial01(num){
    let answer = 1;
    while(num){
        answer = answer * num;
        num--;
    }
    return answer;
}

console.log(factorial(5))