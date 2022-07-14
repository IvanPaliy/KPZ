class Album {
    constructor(name) {
        this.name = name
    }
}
class AlbumFactory {
    constructor(name) {
        this.albums =  {}
    }
    create(name) {
        let album = this.albums[name]
        if (album) return album
        this.albums[name] = new Album(name)
        return this.albums[name]
    }
    getAlbums() {
        return this.albums
    }
}

const factory = new AlbumFactory()

const flowerBoy1 = factory.create('Flower Boy')
const flowerBoy2 = factory.create('Flower Boy')
const DAMN = factory.create('DAMN.')
const TheMelodicBlue = factory.create('The Melodic Blue')
console.log(factory.getAlbums())
