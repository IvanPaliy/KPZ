class Album {
    constructor(artist, name, songs_count, rating) {
        this.artist = artist
        this.name = name
        this.songs_count = songs_count
        this.rating = rating
    }
    produce() {
        return new Album(this.artist, this.name, this.songs_count, this.rating)
    }
}

const albumPrototype = new Album('Kendrick Lamar', "Mr. Morale and The Big Steppers", 19, 5)

const album1 = albumPrototype.produce()
const album2 = albumPrototype.produce()
const album3 = albumPrototype.produce()

album2.rating = 3
album3.rating = 2

console.log(album1)
console.log(album2)
console.log(album3)