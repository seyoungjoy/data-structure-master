class FixedStack {
    constructor(capacity){
        this.stack =[];
        this.capacity = capacity;
        this.pointer = 0;
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
        if(this.is_full()) this.is_full_error();
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
