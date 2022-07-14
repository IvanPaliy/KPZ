class Album {
    constructor(color) {
        this.color = color
    }
}
class Color {
    constructor(type) {
        this.type = type
    }
    get () {
        return this.type
    }
}
class RedColor extends Color {
    constructor() {
        super("red");
    }
}
class BlueColor extends Color {
    constructor() {
        super("yellow");
    }
}
class Flower_Boy extends Album {
    constructor(color) {
        super(color);
    }
    paint() {
        return `Album: Flower Boy , Cover color is ${this.color.get()}`
}
}
class DAMN extends Album {
    constructor(color) {
        super(color);
    }
    paint() {
        return `Album: DAMN. , Cover color is ${this.color.get()}`
}
}

const flowerBoy = new Flower_Boy(new BlueColor())
const damn = new DAMN(new BlueColor())

console.log(flowerBoy.paint())
console.log(damn.paint())