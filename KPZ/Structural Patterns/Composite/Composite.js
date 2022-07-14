class Equipment {
    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }
}

class Cover extends Equipment {
    constructor() {
        super();
        this.setName('Cover');
        this.setPrice(20);
    }
}

class Disc extends Equipment {
    constructor() {
        super();
        this.setName('Disc');
        this.setPrice(5);
    }
}

class Songs extends Equipment {
    constructor() {
        super();
        this.setName('Songs');
        this.setPrice(50);
    }
}

class Composite extends Equipment {
    constructor() {
        super();
        this.equipments = [];
    }

    add(equipment) {
        this.equipments.push(equipment);
    }

    getPrice() {
        return this.equipments
            .map(equipment => equipment.getPrice())
            .reduce((a, b) => a + b);
    }
}

class Album extends Composite {
    constructor() {
        super();
        this.setName('Flower Boy');
    }
}
const myAlbum = new Album()

myAlbum.add(new Cover())
myAlbum.add(new Disc())
myAlbum.add(new Songs())

console.log(`${myAlbum.getName()} price is ${myAlbum.getPrice()}$`)
console.log(myAlbum)