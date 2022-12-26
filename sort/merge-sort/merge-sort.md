# Merge sort(병합 정렬)
- 기본 정렬 알고리즘은 대규모 데이터를 정렬하는데 시간이 매우 많이 걸림
 
## Merge array pseudocode
- 빈 배열을 만들고, 각각의 배열에서 가장 작은 값을 찾아 넣는다.
- while 문이 유용
- 투포인터 알고리즘 사용
  - 두 개의 리스트에서 순차적으로 값을 들고와야할 때
  - 두 개의 포인터를 기록하면서 처리하는 알고리즘
- 한 배열의 정렬이 먼저 끝나버렸을 때의 처리가 필요.
```jsx
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
```

## Merge sort pseudocode
- 배열의 길이가 1 or emtpy가 될때까지 분리.
  - slice를 사용해 재귀로 돌려 반으로 나눔.
- 만들어둔 merge function으로 원래의 배열 길이로 돌아갈때까지 merge


## slice
### 구문
```
arr.slice([begin[, end]])
```
- 배열에서 `begin index`~`end index-1`까지의 요소를 새로운 배열로 반환
- 원본 배열 변화 X

### 매개변수
- begin
  - 추출 시작점 인덱스
  - end 생략시 추출지점부터 끝까지의 배열 요소를 반환.
  - 값이 음수일때는 배열의 뒤에서부터 요소를 들고옴.