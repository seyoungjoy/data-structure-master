# 버블정렬(bubble sort/sinking sort)
- 서로 인접한 두 요소의 대소를 비교 후 교환하며 정렬하는 방법
- 효율적이지 않고 흔하게 사용하지 않는다.

- swap function
```jsx
const swap1 = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const swap2 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

### 버블 정렬 구현
- 반복문이 중첩으로 사용되기 때문에 일반적으로 O(n^2)
```jsx
// O(n^2)
function swap(arr, idx1, idx2){
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

function bubbleSort(arr){
    for(let i = arr.length; i>0; i--){
        for(let j = 0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1,5,2,3,4]));
```
- 정렬이 거의 되어있는 상태에서 최적화
```jsx
// O(n)
function swap(arr, idx1, idx2){
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i>0; i--){
        noSwaps = true;
        for(let j = 0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([8,1,2,3,4,5,6,7]));
```