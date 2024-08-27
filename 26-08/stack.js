class Stack {
    constructor() {
        this.items = []; // {1}
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]; // Corrigido para length
    }

    isEmpty() {
        return this.items.length === 0; // Corrigido para length
    }

    size() {
        return this.items.length; // Corrigido para length
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty()); // Vai exibir true
stack.push(5);
stack.push(8);

console.log(stack.peek()); // Exibe 8

stack.push(11);
console.log(stack.size()); // Exibe 3
console.log(stack.isEmpty()); // Exibe false

stack.pop();
stack.pop();
console.log(stack.size()); // Exibe 1
