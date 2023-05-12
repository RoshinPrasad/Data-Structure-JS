class Stack {
    constructor() {
        this.items = []
    }

    push(data) {
        this.items[this.items.length] = data
    }

    pop() {
        if (this.items.length !== 0) {
            this.items.length--
        } else {
            return null
        }
    }

    peek() {
        if (this.items.length !== 0) {
            return this.items[this.items.length-1]
        } else {
            return null
        }
    }

    isEmpty(){
        return this.items
    }

    length(){
        return this.items.length
    }

    print(){
        this.items.forEach(element => {
            console.log(element)  
        })
        return this.items.toString()
    }

    reverseString(string){
        for (let i = 0; i < string.length; i++) {
            this.push(string[string.length-i-1])
        }
    }
}

const stack = new Stack()

stack.reverseString('hello world')



console.log(stack.print())