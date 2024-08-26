class Stack {
    constructor () {
        this.items = []; // {1}
    }

    push (element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.lenght - 1];
    }

    isEmpty() {
        return this.items.lenght === 0;
    }

    size() {
        return this.items.lenght;
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty()) //vai exibir true
stack.push(5)
stack.push(8)

console.log(stack.peek()) // exibe 8

stack.push(11);
console.log(stack.size()) // exibe 3
console.log(stack.isEmpty()) //exibe que é falso

stack.pop()
stack.pop()
console.log(stack.size()) // exibe 2