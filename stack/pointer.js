// 스택 배열(stack) : list형 배열, 즉 스택 본체
// 스택 크기(capacity) : 스택의 최대 크기를 나타내는 int형 정수
// 스택 포인터(ptr) : 데이터의 개수
// 예외 처리 클래스 Empty : pop(), peek() 함수 호출시 스택이 비어있을때 예외 처리
// 예외 처리 클래스 Full : Push() 함수 호출시 스택이 가득 차 있을 때 예외 처리
// 초기화하는 init() 함수 : 스택 배열 생성 준비 작업
// 쌓여 있는 데이터 개수를 알아내는 len() 함수 : 스택에 쌓여있는 데이터 개수를 반환(=ptr)
// 스택이 비어 있는지 판단하는 is_empty() 함수
// 스택이 가득 차 있는지를 판단하는 is_Full 함수
// 데이터를 푸시하는 push() 함수
// 가장 마지막에 푸시된 데이터를 꺼내서 그 값을 반환. pop()
// 가장 꼭대기에 있는 데이터를 확인하는 함수 peek()
// 데이터를 검색하는 find() 함수 : 

class FixedStack {
    constructor(capacity){
        this.stack =[];
        // pointer length로 제한을 걸어버리고 싶은데...
        this.capacity = capacity;
        this.pointer = 0;

    }
    __len__(){
        return this.pointer;
    }
    is_empty(){
        return this.pointer <= 0;
    }
    is_empty_error(){
        throw Error("stack is empty")
    }
    is_full(){
        return this.pointer >= this.capacity;
    }
    is_full_error(){
        throw Error("stack is full")
    }
    push(value){
        if(this.is_full()) is_full_error();
        this.stack[this.pointer] = value;
        this.pointer += 1;
    }
    pop(){
        if(this.is_empty()) this.is_empty_error();
        this.pointer -= 1;
        // stack 리스트에서 pop된 데이터 제거를 위해 추가
        this.stack.length = this.pointer;
        return this.stack[this.pointer];
    }
    peek(){
        if(this.is_empty()) this.is_empty_error();
        return this.stack[this.pointer-1];
    }
    clear(){
        this.pointer=0;
        this.stack.length = 0;
    }

    find(value){
        for(let i=this.pointer-1; i>=0; i--){
            if(this.stack[i] === value) return i;
        }
        return -1;
    }
    count(value){
        let count = 0;
        for(let i=this.pointer-1; i>=0; i--){
            if(this.stack[i] === value) count += 1;
        }
        return count;
    }
    contains(value){
        return this.count(value) > 0;
    }
    dump(){
        if(this.is_empty()) console.log("스택이 비어 있습니다.")
        else console.log(this.stack);
        
    }
}

const numStk = new FixedStack(10);
numStk.push(1);
numStk.push(1);
numStk.push(3);
// numStk.pop();
numStk.push(4);
// console.log(numStk.peek());
// numStk.clear();
// console.log(numStk)
// console.log(numStk.find(6));
// console.log(numStk.count(1))
numStk.dump();