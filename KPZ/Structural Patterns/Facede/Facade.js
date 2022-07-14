class Album {
    constructor(name, artist, genre, songs, price, rating) {
        this.name = name
        this.artist = artist
        this.genre = genre
        this.songs = songs
        this.price = price
        this.rating = rating
    }
    createName () {
        console.log("Name: DAMN.")
    }
    createArtist() {
        console.log("Artist: Kendrick Lamar")
    }
    createGenre() {
        console.log("Genre: Rap")
    }
    createSongs() {
        console.log("Songs: 14")
    }
    createPrice() {
        console.log("Price: 50")
    }
    createRating() {
        console.log("Rating: 5")
    }
}

class Facade {
    constructor(album) {
        this.album = album
    }
    createAlbum() {
        this.album.createName()
        this.album.createArtist()
        this.album.createGenre()
        this.album.createSongs()
        this.album.createPrice()
        this.album.createRating()
    }
}
const facade = new Facade(new Album())
const album = facade.createAlbum()
