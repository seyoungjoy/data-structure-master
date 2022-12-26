# Sort
- 정렬은 매우 다양한 알고리즘 방법이 있다.
- 버블정렬, 선택 정렬, 삽입 정렬이 가장 기본적인 정렬 알고리즘이며 성능이 떨어진다.
- 그러나 특정 상황에서는 위 방법들의 성능이 좋을 때도 있음(데이터 집합이 작을 때, 거의 정렬이 되어 있는 배열 상태)
- [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
- [visualgo](https://visualgo.net/en/sorting)

## 기본 정렬 알고리즘 비교(bubble, insertion, selection sort)
- 기본적으로 worst case에서 버블, 삽입, 선택 정렬의 시간복잡도는 O(n^2)을 가진다.
- 버블, 삽입 정렬은 best case에서는 O(n)까지 시간복잡도가 좋아질 수 있으나
- 선택 정렬은 best case에서도 무조건 중첩 루프를 모두 돌아야하기 때문에 여전히 O(n^2)
- 공간복잡도는 세 정렬 모두 새로운 변수는 만들지 않기 때문 O(1)

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
- [sort 메서드 시간복잡도](https://velog.io/@sun202x/Javascript-Array.sort%EC%9D%98-%EC%8B%9C%EA%B0%84%EB%B3%B5%EC%9E%A1%EB%8F%84)
