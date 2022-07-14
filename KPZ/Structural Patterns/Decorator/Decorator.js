class Album {
    constructor(name, description ) {
        this.name = name
        this.description = description
    }
    getName () {
        return this.name
    }
    getDescription() {
        return this.description
    }
}
class Tyler extends Album {
    constructor() {
        super()
        this.name = "Flower Boy"
        this.description = "Tyler, The Creator"
    }
}
class Rating {
    constructor(album) {
        this.album = album
    }
    getName() {
        return `${this.album.getName()} GOAT`
    }
    getDescription() {
        return `${this.album.getDescription()}, rating 5`
    }
}
class Price {
    constructor(album) {
        this.album = album
    }
    getName() {
        return `${this.album.getName()} GOAT`
    }
    getDescription() {
        return `${this.album.getDescription()}, price 50$`}
}
let album1 = new Tyler()
let album2 = new Tyler()
album1 = new Rating(album1)
album2 = new Price(album2)

console.log(album1.getName(), album1.getDescription())
console.log(album2.getName(), album2.getDescription())
