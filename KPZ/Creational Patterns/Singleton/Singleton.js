class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }
        this.count = 0
        Counter.instance = this
        return this
    }
    getCounter() {
        return this.count
    }
    increaseCounter() {
        return this.count++
    }
}
const myCounter1 = new Counter()
const myCounter2 = new Counter()

myCounter1.increaseCounter()
myCounter1.increaseCounter()
myCounter1.increaseCounter()
myCounter2.increaseCounter()
myCounter2.increaseCounter()
myCounter2.increaseCounter()

console.log(myCounter1.getCounter())
console.log(myCounter2.getCounter())