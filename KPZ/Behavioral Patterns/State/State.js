class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super('Waiting For Payment', Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super('Shipping', Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super('Delivered', Delivered);
    }
}

class Order {
    constructor() {
        this.state = new WaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    };
  }

const myOrder = new Order()
console.log(myOrder.state.name)
myOrder.nextState()
console.log(myOrder.state.name)
myOrder.nextState()
console.log(myOrder.state.name)


