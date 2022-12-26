# Selection sort
- 최솟값을 찾은 뒤 정렬할 위치로 이동시키는 정렬 방법.
- 버블 정렬에서는 인접한 두 요소를 비교하면서 최댓값이 마지막으로 갈때까지 계속 교환한다.
- 선택 정렬은 루프가 끝날 때 한번만 교환한다.

## Selection sort pseudocode
- 최솟값을 저장할 변수를 만들고 첫번째 요소부터 시작한다.
- 최솟값을 찾을떄까지 배열 요소들을 비교한다.
- 이떄 최솟값의 index를 저장해야 교환이 가능함.
- 시작한 위치의 요소와 최솟값이 일치하지 않는다면 두 요소의 위치를 교환한다.
    - [4,1,2,3] : 시작값이 4, 최솟값이 1이라면 두 요소의 위치를 교환
    - [1,2,4,3] : 시작값이 2, 최솟값이 2라면 교환 X
- 정렬된 배열이 될때까지 반복한다.

```jsx
// O(n^2)
function swap(arr, idx1, idx2){
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let lowest = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest=j
            }
        }
        if(i !== lowest){
            swap(arr, i, lowest);
        }
    }
    return arr;
}

console.log(selectionSort([5,1,4,2,3]));
```

