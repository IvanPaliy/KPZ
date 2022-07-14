class Memento {
    constructor(value) {
        this.value = value
    }
}
const creator = {
    save: val => new Memento(val),
    restore: memento => memento.value

}
class Changes {
    constructor() {
        this.value = []
    }
    addMemento(memento) {
        this.value.push(memento)
    }
    getMemento(index) {
        return this.value[index]
    }
}
const check = new Changes()

check.addMemento(creator.save("1"))
check.addMemento(creator.save("2"))
check.addMemento(creator.save("3"))

console.log(creator.restore(check.getMemento(1)))