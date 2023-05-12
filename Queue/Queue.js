class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Queue{
    constructor(){
        this.rear = null
        this.front = null
    }

    enQueue(data){
        const node = new Node(data)
        if (this.rear === null) {
            this.rear=node
            this.front=node
        } else {
            this.rear.next = node
            this.rear = node
        }
    }

    deQueue(){
        this.front = this.front.next
    }

    display(){
        let temp = this.front
        while(temp){
            console.log(temp.data)
            temp = temp.next
        }
    }
}


const queue = new Queue()

queue.enQueue(50)
queue.enQueue(40)
queue.enQueue(30)
queue.display()