# Insertion sort
- 하나의 요소를 선택해서 올바른 정렬 위치에 삽입하는 방법
- 데이터가 계속 들어와서 재정렬해야할 때 유용
  - 한번만 루프돌면서 비교하면 끝이기 때문

## Insertion sort pseudocode
- 배열에서 두번재 요소부터 시작.(맨 앞의 요소는 이미지 정렬되어있는 상태)
- 그 다음 요소와 비교하여 필요하다면 swap
- 정렬될때까지 반복
```jsx
// O(n^2)
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
```

- 처음 반복문 세팅할 때 어떻게 해야 비교할 값들만 나오는 index를 설정할 수 있을지 생각하는게 중요한듯
- 현재 index, value를 가지고 있는 변수 세팅 중요.