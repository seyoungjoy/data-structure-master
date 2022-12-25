# Sort
- 정렬은 매우 다양한 알고리즘 방법이 있다.
- 버블정렬, 선택 정렬, 삽입 정렬이 가장 기본적인 정렬 알고리즘이며 효율이 떨어진다.
- 그러나 특정 상황에서는 위 방법들이 더 효율적일 때가 있기 때문에 모두 알아두는 것이 좋다.
- [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
## javascript 내장 배열 메서드
### sort
- 비교함수 생략시 : string 유니코드 코드 순으로 정렬된다.
```jsx
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
//[ 'Dec', 'Feb', 'Jan', 'March' ]

const day = [1,30,4,21];
day.sort();
//[ 1, 21, 30, 4 ]
```
- 비교함수 추가시 : 두개의 인자값(a,b)을 받아 반환값이 양수면 b가 앞으로, 음수면 a가 앞으로, 0이면 그대로 순서를 정렬.
```jsx
const numbers = [4, 2, 5, 1, 3];

numbers.sort((a,b) => a-b);
// [ 1, 2, 3, 4, 5 ]
```

## 버블정렬(bubble sort/sinking sort)
- 효율적이지 않고 흔하게 사용하지 않는다.
- 배열의 모든항목을 앞뒤로 비교 후 교환하여 정렬

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